/*! Copyright (c) 2022, XAPP AI*/

import { isExecutablePath } from "stentor-guards";
import { isSlotDependable, UtteranceGenerator } from "stentor-interaction-model";
import { log } from "stentor-logger";
import { Handler, Intent } from "stentor-models";
import { findValueForKey, hasForwards, toMap } from "stentor-utils";
import { Document, Packer, PageNumberFormat } from "docx";
import { existsSync, writeFileSync } from "fs";
import { resolve } from "path";
import { ExportOptions } from "../models/options.js";
import { getStentorApp } from "../getStentorApp.js";

const XML_REGEX = /<.*\/>/;

interface PageLink {
    userSays: string;
    toId: string;
    toHeader: string;
}

interface Page {
    intentId: string;
    header: string;
    prompt: string;
    reprompt?: string;
    links: PageLink[];
}

/**
 * Converts the provided Handler to a Page
 *
 * @param {Handler} handler
 * @param {((Intent | Handler)[])} intents
 * @returns {Page}
 */
function convertHandlerToPage(handler: Handler, intents: (Intent | Handler)[]): Page {
    const intentId = handler.intentId;
    const header = handler.name.replace("Handler", "").replace("handler", "");

    // Grab the output speech off the first response
    const responses = handler.content ? handler.content[intentId] : undefined;
    if (!Array.isArray(responses)) {
        log().info(`Could not generate page for ${intentId},  It did not have content for itself`);
        return undefined;
    }
    const firstResponse = responses[0];
    let prompt: string;

    if (!firstResponse) {
        throw new Error(`Could not find first response of ${intentId}`);
    }

    if (typeof firstResponse.outputSpeech === "object") {
        prompt = firstResponse.outputSpeech.displayText;
    }

    let reprompt: string;
    if (typeof firstResponse.reprompt === "object") {
        reprompt = firstResponse.reprompt.displayText;
    }

    const links: PageLink[] = [];
    // Go through the forwards!
    if (hasForwards(handler)) {
        const map = toMap(intents);

        Object.keys(handler.forward).forEach(key => {
            const intent = findValueForKey(key, map); // map[key];
            // Find a regex match.
            const generateUtterances = new UtteranceGenerator();
            const utterances = generateUtterances.forIntent(intent);

            const paths = handler.forward[key];

            if (Array.isArray(paths)) {
                paths.forEach(path => {
                    const id = isExecutablePath(path) ? path.intentId : undefined;

                    let userSays: string = key; // start off with just the key, the ID.
                    if (Array.isArray(utterances) && utterances.length > 0) {
                        userSays = utterances[0];
                    }

                    if (isSlotDependable(path)) {
                        // update the userSays to reflect it
                        const operation = path.slotMatch.operation;
                        switch (operation) {
                            case "==":
                            case "===":
                                userSays = userSays.replace(
                                    `{${path.slotMatch.name}}`,
                                    JSON.stringify(path.slotMatch.value)
                                );
                                break;
                            case ">":
                                userSays = userSays.replace(
                                    `{${path.slotMatch.name}}`,
                                    `greater than ${JSON.stringify(path.slotMatch.value)}`
                                );
                                break;
                            case "<":
                                userSays = userSays.replace(
                                    `{${path.slotMatch.name}}`,
                                    `less than ${JSON.stringify(path.slotMatch.value)}`
                                );
                                break;
                            case ">=":
                                userSays = userSays.replace(
                                    `{${path.slotMatch.name}}`,
                                    `greater than or equal to ${JSON.stringify(path.slotMatch.value)}`
                                );
                                break;
                            case "=<":
                                userSays = userSays.replace(
                                    `{${path.slotMatch.name}}`,
                                    `less than or equal to ${JSON.stringify(path.slotMatch.value)}`
                                );
                                break;
                            default:
                            // fall through
                        }
                    }

                    // Change for open ended responses
                    if (key === "^((?!(StopIntent|HelpIntent|CancelIntent)).)*$") {
                        userSays = "an open-ended response";
                    } else if (key === "LaunchRequest") {
                        userSays = `the invocation name after session ends`;
                    } else if (!userSays.includes("Intent")) {
                        // or wrap it in quotes if it isn't just SomethingIntent
                        userSays = `"${userSays.toLowerCase()}"`;
                    }

                    if (id) {
                        const toHandler = map[id];

                        links.push({
                            userSays,
                            toId: toHandler.intentId,
                            // clean off handler & "Handler"
                            toHeader: toHandler.name.replace("Handler", "").replace("handler", "")
                        });
                    }
                });
            }
        });
    }

    return {
        intentId,
        header,
        prompt,
        reprompt,
        links
    };
}

/**
 * Generates a word document of the experience.
 *
 * @param options
 */
export async function exportAsScript(output: string, options: ExportOptions): Promise<void> {
    const { appId } = options;
    const { app, intents, handlers } = await getStentorApp(appId);

    log().info(`Found ${handlers.length} handlers`);

    const pages: Page[] = [];

    handlers.forEach(handler => {
        try {
            const page = convertHandlerToPage(handler, intents);
            if (page) {
                pages.push(page);
            }
        } catch (error) {
            log().info(error.stack);
            throw Error(error);
        }
    });

    log().info(`Generated ${pages.length} pages`);

    // Sort the pages by name
    pages.sort((a, b) => {
        const headerA = a.header.toUpperCase();
        const headerB = b.header.toUpperCase();
        if (headerA < headerB) {
            return -1;
        }

        if (headerA > headerB) {
            return 1;
        }
    });

    if (!output) {
        log().info("Output Directory is required to generate the document");
        return;
    }

    // Resolve the path
    const path = resolve(output);

    if (!existsSync(path)) {
        throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
    }

    const title = `${app.name} Voice Over Script ${new Date().toISOString()}.docx`;
    const docPath = resolve(path, title);

    const doc = new Document({
        creator: "XAPPmedia",
        title
    });

    // Used for small comments
    const SMALL_FONT_SIZE = 15;
    doc.Styles.createParagraphStyle("small", "Small")
        .basedOn("Normal")
        .next("Normal")
        .quickFormat()
        .color("999999")
        .italics()
        .size(SMALL_FONT_SIZE);

    // HEADER SETUP
    const header = doc.createHeader();
    header.createParagraph(`${app.name}`);
    const footer = doc.createFooter();
    footer.createParagraph(`Generated ${new Date().toISOString()}`);

    // TITLE Page
    doc.createParagraph(`${app.name}`).title();
    doc.createParagraph(`Voice Over Script`);
    // Notes about the doc

    pages.forEach(page => {
        doc.addSection({
            header: header.Header.ReferenceId,
            footer: footer.Footer.ReferenceId,
            pageNumberStart: 1,
            pageNumberFormatType: PageNumberFormat.DECIMAL
        });

        const bookmark = doc.createBookmark(page.intentId, page.header);
        doc.createParagraph()
            .addBookmark(bookmark)
            .heading1();
        doc.createParagraph(page.intentId).style("small"); // Style, small for our reference
        doc.createParagraph("\n");

        // Break apart the prompt by new lines
        if (!page.prompt) {
            throw new Error(`Prompt did not exist for page ${page.intentId}`);
        }

        const promptSegments = page.prompt.split(/\r?\n/);
        let promptWordCount = 0;

        promptSegments.forEach((segment) => {
            // Clean it up
            const results = XML_REGEX.exec(segment);

            if (results) {
                results.forEach(match => {
                    segment = segment.replace(match, "");
                });
            }

            segment = segment.trim();

            if (segment) {
                promptWordCount += segment.split(" ").length;
                doc.createParagraph(segment);
                doc.createParagraph("\n");
            }
        });
        doc.createParagraph("\n");
        doc.createParagraph(`Word Count: ${promptWordCount}`).style("small");
        const ESTIMATE_COEFFICIENT = 2.5;
        const estimatedTime = promptWordCount / ESTIMATE_COEFFICIENT;
        doc.createParagraph(`Estimated Time: ${Number(estimatedTime).toFixed(2)} seconds`).style("small");
        doc.createParagraph("\n");

        if (page.reprompt) {
            doc.createParagraph("Reprompt").heading3();
            doc.createParagraph("\n");
            const repromptSegments = page.reprompt.split(/\r?\n/);
            repromptSegments.forEach(segment => {
                // Clean it up
                const results = XML_REGEX.exec(segment);

                if (results) {
                    results.forEach(match => {
                        segment = segment.replace(match, "");
                    });
                }

                segment = segment.trim();

                if (segment) {
                    doc.createParagraph(segment);
                    doc.createParagraph("\n");
                }
            });
            doc.createParagraph("\n");
        }

        // Now the Links!
        if (page.links.length > 0) {
            doc.createParagraph(`Options`).heading4();
            page.links.forEach(link => {
                const hyperlink = doc.createInternalHyperLink(link.toId, `${link.toHeader}`);
                doc.createParagraph(`User says ${link.userSays} and goes to `).addHyperLink(hyperlink);
            });
        }

        doc.createParagraph().pageBreak();
    });

    // Used to export the file into a .docx file
    const packer = new Packer();
    const buffer = await packer.toBuffer(doc);
    writeFileSync(docPath, buffer);
}

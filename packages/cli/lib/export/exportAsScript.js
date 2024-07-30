"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportAsScript = exportAsScript;
const stentor_guards_1 = require("stentor-guards");
const stentor_interaction_model_1 = require("stentor-interaction-model");
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const stentor_utils_1 = require("stentor-utils");
const docx_1 = require("docx");
const fs_1 = require("fs");
const path_1 = require("path");
const getStentorApp_1 = require("../getStentorApp");
const XML_REGEX = /<.*\/>/;
/**
 * Converts the provided Handler to a Page
 *
 * @param {Handler} handler
 * @param {((Intent | Handler)[])} intents
 * @returns {Page}
 */
function convertHandlerToPage(handler, intents) {
    const intentId = handler.intentId;
    const header = handler.name.replace("Handler", "").replace("handler", "");
    // Grab the output speech off the first response
    const responses = handler.content ? handler.content[intentId] : undefined;
    if (!Array.isArray(responses)) {
        stentor_logger_1.default.info(`Could not generate page for ${intentId},  It did not have content for itself`);
        return undefined;
    }
    const firstResponse = responses[0];
    let prompt;
    if (!firstResponse) {
        throw new Error(`Could not find first response of ${intentId}`);
    }
    if (typeof firstResponse.outputSpeech === "object") {
        prompt = firstResponse.outputSpeech.displayText;
    }
    let reprompt;
    if (typeof firstResponse.reprompt === "object") {
        reprompt = firstResponse.reprompt.displayText;
    }
    const links = [];
    // Go through the forwards!
    if ((0, stentor_utils_1.hasForwards)(handler)) {
        const map = (0, stentor_utils_1.toMap)(intents);
        Object.keys(handler.forward).forEach(key => {
            const intent = (0, stentor_utils_1.findValueForKey)(key, map); // map[key];
            // Find a regex match.
            const generateUtterances = new stentor_interaction_model_1.UtteranceGenerator();
            const utterances = generateUtterances.forIntent(intent);
            const paths = handler.forward[key];
            if (Array.isArray(paths)) {
                paths.forEach(path => {
                    const id = (0, stentor_guards_1.isExecutablePath)(path) ? path.intentId : undefined;
                    let userSays = key; // start off with just the key, the ID.
                    if (Array.isArray(utterances) && utterances.length > 0) {
                        userSays = utterances[0];
                    }
                    if ((0, stentor_interaction_model_1.isSlotDependable)(path)) {
                        // update the userSays to reflect it
                        const operation = path.slotMatch.operation;
                        switch (operation) {
                            case "==":
                            case "===":
                                userSays = userSays.replace(`{${path.slotMatch.name}}`, JSON.stringify(path.slotMatch.value));
                                break;
                            case ">":
                                userSays = userSays.replace(`{${path.slotMatch.name}}`, `greater than ${JSON.stringify(path.slotMatch.value)}`);
                                break;
                            case "<":
                                userSays = userSays.replace(`{${path.slotMatch.name}}`, `less than ${JSON.stringify(path.slotMatch.value)}`);
                                break;
                            case ">=":
                                userSays = userSays.replace(`{${path.slotMatch.name}}`, `greater than or equal to ${JSON.stringify(path.slotMatch.value)}`);
                                break;
                            case "=<":
                                userSays = userSays.replace(`{${path.slotMatch.name}}`, `less than or equal to ${JSON.stringify(path.slotMatch.value)}`);
                                break;
                            default:
                            // fall through
                        }
                    }
                    // Change for open ended responses
                    if (key === "^((?!(StopIntent|HelpIntent|CancelIntent)).)*$") {
                        userSays = "an open-ended response";
                    }
                    else if (key === "LaunchRequest") {
                        userSays = `the invocation name after session ends`;
                    }
                    else if (!userSays.includes("Intent")) {
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
function exportAsScript(output, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId } = options;
        const { app, intents, handlers } = yield (0, getStentorApp_1.getStentorApp)(appId);
        stentor_logger_1.default.info(`Found ${handlers.length} handlers`);
        const pages = [];
        handlers.forEach(handler => {
            try {
                const page = convertHandlerToPage(handler, intents);
                if (page) {
                    pages.push(page);
                }
            }
            catch (error) {
                stentor_logger_1.default.info(error.stack);
                throw Error(error);
            }
        });
        stentor_logger_1.default.info(`Generated ${pages.length} pages`);
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
            stentor_logger_1.default.info("Output Directory is required to generate the document");
            return;
        }
        // Resolve the path
        const path = (0, path_1.resolve)(output);
        if (!(0, fs_1.existsSync)(path)) {
            throw new Error(`Path ${output} does not exist.  Please provide an existing path to create the export within.`);
        }
        const title = `${app.name} Voice Over Script ${new Date().toISOString()}.docx`;
        const docPath = (0, path_1.resolve)(path, title);
        const doc = new docx_1.Document({
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
                pageNumberFormatType: docx_1.PageNumberFormat.DECIMAL
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
        const packer = new docx_1.Packer();
        const buffer = yield packer.toBuffer(doc);
        (0, fs_1.writeFileSync)(docPath, buffer);
    });
}
//# sourceMappingURL=exportAsScript.js.map
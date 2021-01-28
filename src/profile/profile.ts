/*! Copyright (c) 2019, XAPPmedia */
import chalk from "chalk";
import { createReadStream } from "fs";
import { resolve } from "path";
import { createInterface } from "readline";

const padStart = require("lodash.padstart");

import { log } from "stentor-logger";
import { convertToUtteranceTest, UtteranceProfiler, UtteranceTest } from "@xapp/stentor-interaction-model-profiler";
import { NLUService } from "stentor-models";
import { DialogflowService, DialogflowV2Service } from "@xapp/stentor-service-dialogflow";
import { LexService } from "@xapp/stentor-service-lex";
import { AlexaSkillManagementService } from "@xapp/stentor-service-smapi";
import { getAppIntentEntities } from "../getAppIntentEntities";
import { getGoogleCredentials } from "../getGoogleCredentials";
import { getSMAPITokenAndVendorId } from "../getSMAPITokenAndVendor";

export async function profile(options?: {
    platform: string;
    credentials: string;
    appId?: string;
    utterance?: string;
    file?: string;
    awsRole?: string;
}): Promise<void> {
    const { appId, credentials, platform, utterance, file, awsRole } = options;
    const { app, intents } = await getAppIntentEntities(appId);

    log().info(`Found ${app.name} with ${intents.length} intents`);

    const platforms = platform.split(",").map((item) => item.toLowerCase().trim());

    const nlu: {
        name: string;
        service: NLUService;
    }[] = [];

    platforms.forEach((platform) => {
        switch (platform) {
            case "a":
                const alexaCredentials = getSMAPITokenAndVendorId();
                const alexa = new AlexaSkillManagementService({
                    token: alexaCredentials.token,
                    skillId: app.alexaSkillId,
                });
                nlu.push({
                    name: "alexa",
                    service: alexa,
                });
                break;
            case "d":
                const dialogflow = new DialogflowService({
                    token: app.dialogflowClientToken,
                });
                nlu.push({
                    name: "dialogflow",
                    service: dialogflow,
                });
                break;
            case "d2":
                if (!credentials) {
                    throw new Error(
                        "Path to your Google credentials file must be provided to profile against DialogflowV2"
                    );
                }
                const googleCredentials = getGoogleCredentials(credentials);
                const dialogflowV2 = new DialogflowV2Service({
                    projectId: app.actionsOnGoogleId,
                    credentials: {
                        client_email: googleCredentials.client_email,
                        private_key: googleCredentials.private_key,
                    },
                });
                nlu.push({
                    name: "dialogflowV2",
                    service: dialogflowV2,
                });
                break;
            case "l":
                // Make sure AWS_PROFILE is set in the environment variables
                if (!awsRole && !process.env.AWS_PROFILE) {
                    throw new Error("An aws role or the environment variable AWS_PROFILE is required to profile LEX.");
                }

                const lex = new LexService({
                    config: {
                        credentials: {
                            role: {
                                arn: awsRole,
                                externalId: undefined, // cross-account not supported for non-user creds yet
                            },
                        },
                    },
                }); // If AWS_PROFILE is set then it'll default to that.
                nlu.push({
                    name: "lex",
                    service: lex,
                });
                break;

            default:
                throw new Error(`Could not  match platform ${platform} to an available NLU`);
        }
    });

    const profiler = new UtteranceProfiler({
        nlu,
    });

    if (utterance) {
        const result = await profiler.test(utterance);
        // Print it
        log().info(`"${utterance}"`);
        log().info(JSON.stringify(result, undefined, 2));
    } else if (file) {
        const path = resolve(options.file);
        const fileStream = createReadStream(path);
        const rl = createInterface({
            input: fileStream,
            crlfDelay: Infinity,
        });
        // We need some tests, store them here as we parse the file
        const tests: UtteranceTest[] = [];

        // We use this to keep track of the test number
        let index: number = 0;

        rl.on("line", (input) => {
            try {
                const test = convertToUtteranceTest(input);
                if (test) {
                    tests.push(test);
                }
            } catch (err) {
                log().error(`Error parsing test "${input}" ${err}`);
            }
        }).on("close", async () => {
            log().info(`Finished reading file... running profiler on ${tests.length} tests`);

            let passed: number = 0;
            await profiler.profile(tests, (result) => {
                const FOUR = 4;
                const id = result.id ? result.id : padStart(index + 1, FOUR, 0);
                let printResult = chalk.blue(`TEST-${id}`);
                printResult += `: ${result.result === "FAIL" ? chalk.red("FAIL") : chalk.green("PASS")} "${
                    result.utterance
                }"`;
                result.failureReasons.forEach((reason) => {
                    printResult += `\n\t${reason.nlu}: ${reason.reason}: ${reason.detailed}`;
                });
                // Don't change this to output() since it is already styled.
                console.log(printResult); // eslint-disable-line no-console
                index += 1;

                if (result.result === "PASS") {
                    ++passed;
                }
            });

            /* tslint:disable:no-magic-numbers */
            log().info(`${passed}/${tests.length} passed.  ${Math.round((passed / tests.length) * 1000) / 10}%`);
            /* tslint:enable:no-magic-numbers */
        });
    }
}

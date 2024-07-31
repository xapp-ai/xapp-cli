"use strict";
/*! Copyright (c) 2022, XAPP AI*/
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
exports.profile = profile;
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = require("fs");
const path_1 = require("path");
const readline_1 = require("readline");
const padStart = require("lodash.padstart");
const stentor_logger_1 = require("stentor-logger");
const stentor_interaction_model_profiler_1 = require("@xapp/stentor-interaction-model-profiler");
const stentor_service_dialogflow_1 = require("@xapp/stentor-service-dialogflow");
const stentor_service_lex_1 = require("@xapp/stentor-service-lex");
const getGoogleCredentials_1 = require("../getGoogleCredentials");
const getStentorApp_1 = require("../getStentorApp");
function profile(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { appId, botName, credentials, platform, utterance, file, awsRole } = options;
        const { app, intents } = yield (0, getStentorApp_1.getStentorApp)(appId);
        (0, stentor_logger_1.log)().info(`Found ${app.name} with ${intents.length} intents`);
        const platforms = platform.split(",").map((item) => item.toLowerCase().trim());
        const nlu = [];
        platforms.forEach((platform) => {
            switch (platform) {
                case "d":
                case "d2":
                    if (!credentials) {
                        throw new Error("Path to your Google credentials file must be provided to profile against DialogflowV2");
                    }
                    const googleCredentials = (0, getGoogleCredentials_1.getGoogleCredentials)(credentials);
                    const dialogflowV2 = new stentor_service_dialogflow_1.DialogflowV2Service({
                        projectId: googleCredentials.project_id,
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
                    const lex = new stentor_service_lex_1.LexService({
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
                case "l2":
                    if (!botName) {
                        throw new Error("Please specify botName when profiling Lex V2");
                    }
                    const lex2 = new stentor_service_lex_1.LexServiceV2({
                        botName,
                        credentials: {
                            role: {
                                arn: awsRole,
                                externalId: undefined, // cross-account not supported for non-user creds yet
                            },
                        },
                    });
                    nlu.push({
                        name: "lexV2",
                        service: lex2
                    });
                    break;
                default:
                    throw new Error(`Could not  match platform ${platform} to an available NLU`);
            }
        });
        const profiler = new stentor_interaction_model_profiler_1.UtteranceProfiler({
            nlu,
        });
        if (utterance) {
            const result = yield profiler.test(utterance);
            // Print it
            (0, stentor_logger_1.log)().info(`"${utterance}"`);
            (0, stentor_logger_1.log)().info(JSON.stringify(result, undefined, 2));
        }
        else if (file) {
            const path = (0, path_1.resolve)(options.file);
            const fileStream = (0, fs_1.createReadStream)(path);
            const rl = (0, readline_1.createInterface)({
                input: fileStream,
                crlfDelay: Infinity,
            });
            // We need some tests, store them here as we parse the file
            const tests = [];
            // We use this to keep track of the test number
            let index = 0;
            rl.on("line", (input) => {
                try {
                    const test = (0, stentor_interaction_model_profiler_1.convertToUtteranceTest)(input);
                    if (test) {
                        tests.push(test);
                    }
                }
                catch (err) {
                    (0, stentor_logger_1.log)().error(`Error parsing test "${input}" ${err}`);
                }
            }).on("close", () => __awaiter(this, void 0, void 0, function* () {
                (0, stentor_logger_1.log)().info(`Finished reading file... running profiler on ${tests.length} tests`);
                let passed = 0;
                yield profiler.profile(tests, (result) => {
                    const FOUR = 4;
                    const id = result.id ? result.id : padStart(index + 1, FOUR, 0);
                    let printResult = chalk_1.default.blue(`TEST-${id}`);
                    printResult += `: ${result.result === "FAIL" ? chalk_1.default.red("FAIL") : chalk_1.default.green("PASS")} "${result.utterance}"`;
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
                (0, stentor_logger_1.log)().info(`${passed}/${tests.length} passed.  ${Math.round((passed / tests.length) * 1000) / 10}%`);
                /* tslint:enable:no-magic-numbers */
            }));
        }
    });
}
//# sourceMappingURL=profile.js.map
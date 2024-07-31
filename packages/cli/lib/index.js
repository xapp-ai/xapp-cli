#!/usr/bin/env node
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
exports.getUserToken = exports.getXAPPClient = exports.getStentorApp = void 0;
/*! Copyright (c) 2022, XAPP AI*/
require("dotenv").config(); // process the .env file
// For the CLI, we want the log level to always be info
process.env.STENTOR_LOG_LEVEL = "info";
// It will only last this execution
const client_1 = require("@xapp/client");
const commander_1 = __importDefault(require("commander"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require("../package.json");
const analyze_1 = require("./analyze");
const copy_1 = require("./copy");
const export_1 = require("./export");
const getConfig_1 = require("./getConfig");
const login_1 = require("./login");
const logout_1 = require("./logout");
const pull_1 = require("./pull");
const push_1 = require("./push");
const pushToLex_1 = require("./push/pushToLex");
const saveConfig_1 = require("./saveConfig");
const stentor_logger_1 = require("stentor-logger");
const import_1 = require("./import");
const import_2 = require("./import");
const profile_1 = require("./profile");
const types_1 = require("./types");
const getUserToken_1 = require("./getUserToken");
const channelLexV2_1 = require("./create/channelLexV2");
const serve_1 = require("./serve");
const exportOrg_1 = require("./org/exportOrg");
// A couple of exports for if you use it not like a CLI
var getStentorApp_1 = require("./getStentorApp");
Object.defineProperty(exports, "getStentorApp", { enumerable: true, get: function () { return getStentorApp_1.getStentorApp; } });
var getXAPPClient_1 = require("./getXAPPClient");
Object.defineProperty(exports, "getXAPPClient", { enumerable: true, get: function () { return getXAPPClient_1.getXAPPClient; } });
var getUserToken_2 = require("./getUserToken");
Object.defineProperty(exports, "getUserToken", { enumerable: true, get: function () { return getUserToken_2.getUserToken; } });
commander_1.default.version(pkg.version);
commander_1.default.command("login").action(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, login_1.login)();
    }
    catch (e) {
        (0, stentor_logger_1.log)().error(`Error logging in.`);
    }
}));
commander_1.default.command("logout").action(logout_1.logout);
commander_1.default.command("set")
    .description("Changes the environment for the CLI, not typically used.")
    .option('-p --profile <profile>', 'Sets the current profile to use')
    .action((options) => {
    const config = (0, getConfig_1.getConfig)();
    config.currentProfile = options === null || options === void 0 ? void 0 : options.profile;
    // Make sure it exists
    if (typeof config.profiles[config.currentProfile] !== "object") {
        (0, stentor_logger_1.log)().error(`Unable to set current profile, profile "${options.profile}" does not yet exist in your config file, please add it first.`);
    }
    else {
        // Checks out
        (0, saveConfig_1.saveConfig)(config);
        (0, stentor_logger_1.log)().info(`Current profile set to ${config.currentProfile}`);
    }
});
commander_1.default.command("whoami")
    .description("Returns the email you are currently logged in with.")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const userToken = yield (0, getUserToken_1.getUserToken)();
    const profile = yield new client_1.XAPPClient({ userToken }).getProfile();
    (0, stentor_logger_1.log)().info(`email:${profile.profile.email}`);
    (0, stentor_logger_1.log)().info(`If above is masked, run the following to unmask: STENTOR_LOG_PII=true xapp whoami`);
}));
commander_1.default.command("info <appId> [handlerId]")
    .description("Returns basic information about the provided appId")
    .action((appId, handlerId) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, analyze_1.info)(appId, handlerId);
}));
commander_1.default.command("profile")
    .description("Profile your interaction model against an NLU")
    .option("-p --platform <platform>", "Comma delimited list of NLUs to profile. 'a' for Alexa, 'd' for Dialogflow (v2), 'l' for Lex (v1)")
    .option("-a --appId <appId>", "OC Studio App ID.")
    .option("-u, --utterance <utterance>", "The utterance.")
    .option("-f, --file <file>", "The pipe delimited file of utterance tests.")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow (v2)")
    .option("-b, --botName", "Name of the bot, required for Lex V2")
    .action((options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, profile_1.profile)(options);
    }
    catch (e) {
        console.error("Error profiling utterance");
        console.error(e.stack);
    }
}));
commander_1.default.command("copy <appId> <newAppId> [intentId]")
    .description("BETA - Copies the app")
    .option("-d, --dryRun", "Dry run")
    .action((appId, newAppId, intentId, options) => {
    (0, copy_1.copy)(appId, newAppId, intentId, options);
});
commander_1.default.command("push")
    .description("BETA - Pushes the provided appId to either Dialogflow (v2) or Lex (v1 and v2")
    .option("-p --platform <platform>", "Comma delimited list of platforms to push to. 'd' for Dialogflow version 2," +
    " 'l' for Lex and 'l2' for Lex version 2")
    .option("-a --appId <appId>", "XAPP App ID")
    .option("-o --output <output>", "Output directory")
    .option("-l --lang <lang>", "Language code; for example en, it, es")
    .option("-f --file <file>", "Model export file path (exported app)")
    .option("-i --id <id>", "ID within the platform you are pushing to.")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow V2")
    .option("--botName <botName>", "The bot name if applicable (LEX V2)")
    .option("--aws-role <awsRoleArn>", "The AWS Role ARN to the Arn that the service can assume if the service must connect to another AWS Account.")
    .option("--fulfillment <fulfillment>", "The ARN of the intent fulfillment lambda.")
    .action((options) => __awaiter(void 0, void 0, void 0, function* () {
    const { platform, credentials } = options;
    // Parse platform
    const platforms = platform.split(",").map((item) => item.toLowerCase().trim());
    if (platforms.includes("d")) {
        yield (0, push_1.pushToDialogflowV2)(credentials, options);
    }
    if (platforms.includes("l")) {
        yield (0, pushToLex_1.pushToLex)(options);
    }
    if (platforms.includes("l2")) {
        yield (0, push_1.pushToLexV2)(options);
    }
}));
commander_1.default.command("pull")
    .description("BETA - Pulls the provided platform and pushes it to the provided appId")
    .option("-p --platform <platform>", "'d' for Dialogflow version 2")
    .option("-a --appId <appId>", "App ID")
    .option("-w --write", "Write back to stentor")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow V2")
    .action((options) => __awaiter(void 0, void 0, void 0, function* () {
    const { platform, credentials } = options;
    const platforms = platform.split(",").map((item) => item.toLowerCase().trim());
    if (platforms.includes("d")) {
        yield (0, pull_1.pullFromDialogflowV2)(credentials, options);
    }
}));
commander_1.default.command("types <directory> [appId]")
    .description("Generate the TypeScript types for the possible requests to the provided directory")
    .option("-f --file <file>", "Optional file name, defaults to studio.ts")
    .option("-h --header <header>", "Optional header to add to the top of the file")
    .option("-m --max <header>", "Optional limit for entity values to generate types, defaults to 20")
    .action((directory_1, ...args_1) => __awaiter(void 0, [directory_1, ...args_1], void 0, function* (directory, appId = undefined, options) {
    yield (0, types_1.generateTypes)(directory, appId, options);
}));
commander_1.default.command("org <directory> <organizationId>")
    .description("Exports all the information for all the apps in an organization")
    .option("-d --delimiter <delimiter>", "Optional delimiter, defaults to comma.  Can be helpful when values have commas")
    .action((directory, organizationId, options) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exportOrg_1.exportOrg)(organizationId, directory, options);
}));
commander_1.default.command("export <directory> [appId]")
    .description("Exports an app to the provided directory.  If appId isn't provided it will look for the environment variable.")
    .option("-p --platform <platform>", "BETA - Platform to export to: 'a' for Alexa, 'd' for Dialogflow, 's' for Word doc.  Defaults to stentor based export.")
    .option("-c --channels", "Exports the channels as well, these will be found in a directory /channels")
    .option("-s --split", "Used for stentor export, it exports the individual handlers, intents, entities into individual files")
    .action((directory_1, ...args_1) => __awaiter(void 0, [directory_1, ...args_1], void 0, function* (directory, appId = undefined, options) {
    let { platform } = options;
    const { channels } = options;
    if (!platform) {
        platform = "stentor";
    }
    const exportOptions = {
        appId,
        channels
    };
    switch (platform) {
        case "a":
        case "alexa":
            try {
                yield (0, export_1.exportToAlexa)(directory, exportOptions);
            }
            catch (error) {
                console.error(error.stack);
            }
            break;
        case "d":
        case "dialogflow":
            try {
                yield (0, export_1.exportToDialogflow)(directory, exportOptions);
            }
            catch (error) {
                console.error(error.stack);
            }
            break;
        case "l":
        case "lex":
            try {
                yield (0, export_1.exportToLex)(directory, exportOptions);
            }
            catch (error) {
                console.error(error.stack);
            }
            break;
        case "s":
        case "script":
            try {
                yield (0, export_1.exportAsScript)(directory, exportOptions);
            }
            catch (error) {
                console.error(error.stack);
            }
            break;
        default:
            yield (0, export_1.exportApp)(directory, exportOptions);
    }
}));
commander_1.default.command("import [uri]")
    .description("BETA - Imports an app")
    .option("-o --organizationId <organizationId>", "Organization ID that the agent will be imported to.")
    .option("-m --modelOnly", "Imports just the model to the provided appId")
    .option("-a --appId <appId>", "App ID in XAPP that will be imported")
    .option("-p --platform <platform>", "Platform to import from: 'd' for Dialogflow, 'l' for Lex. Defaults to stentor based import")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow")
    .action((uri, options) => __awaiter(void 0, void 0, void 0, function* () {
    let { platform } = options;
    if (!platform) {
        platform = "stentor";
    }
    switch (platform) {
        case "d":
        case "dialogflow":
            yield (0, import_2.importFromDialogflow)(options.credentials, options);
            break;
        default:
            if (uri.startsWith("https://") || uri.startsWith("http://")) {
                yield (0, import_1.importApp)(uri, options);
            }
            else {
                yield (0, import_1.importAppFromFile)(uri, options);
            }
    }
}));
commander_1.default.command("create")
    .description("BETA - Create a an app or channel for an app")
    .option("-a --appId <appId>", "App ID")
    .option("-c --channel <channel>", "Create a new channel")
    .action((options) => __awaiter(void 0, void 0, void 0, function* () {
    const { appId, channel } = options;
    if (channel) {
        switch (channel) {
            case "lex-v2":
                yield (0, channelLexV2_1.createChannelLexV2)(appId);
                break;
            default:
                throw new Error(`${channel} creation not yet supported.`);
        }
    }
}));
commander_1.default.command("serve")
    .description("BETA - Serve your application's chat widget")
    .option("-a --appId <appId>", "App ID")
    .option("-k --key <key>", "Key of the channel to use")
    .option("-u --url <url>", "URL for your widget, typically something like localhost:8080")
    .option("-p --port <port>", "PORT for localhost widget server, https://localhost:PORT, defaults to 3000")
    .action((options) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, serve_1.serve)(options);
}));
// Only tell commander to parse the args if this index.js is being called directly
// This allows us to be used as a module if needed.
if (require.main === module) {
    commander_1.default.parse(process.argv);
}
//# sourceMappingURL=index.js.map
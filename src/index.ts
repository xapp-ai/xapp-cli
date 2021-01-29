#!/usr/bin/env node
/*! Copyright (c) 2019, XAPPmedia */
require("dotenv").config(); // process the .env file

// For the CLI, we want the log level to always be debug
process.env.STENTOR_LOG_LEVEL = "debug";
// It will only last this execution

import * as program from "commander";
const pkg = require("../package.json");

import { analyze } from "./analyze";
import { copy } from "./copy";
import { exportApp, exportAsScript, exportToAlexa, exportToDialogflow, exportToLex } from "./export";
import { getConfig } from "./getConfig";
import { login } from "./login";
import { logout } from "./logout";
import { Options } from "./Options";
import { evaluate, profile } from "./profile";
import { pullFromDialogflow, pullFromDialogflowV2 } from "./pull";
import { pushToActionsOnGoogle, pushToAlexa, pushToDialogflow, pushToDialogflowV2 } from "./push";
import { pushToLex } from "./push/pushToLex";
import { saveConfig } from "./saveConfig";
import { log } from "stentor-logger";

program.version(pkg.version);

program.command("login").action(async () => {
    try {
        await login();
    } catch (e) {
        log().error(`Error logging in.`);
    }
});
program.command("logout").action(logout);

program.command("set")
    .option('-p --basePath <basePath>', "Base Path")
    .option('-a --authPath <authPath>', "Auth Path")
    .option('-c --clientId <clientId>', "Client ID")
    .action((options: { basePath?: string; authPath?: string; clientId?: string }) => {

        const config = getConfig();

        if (options.basePath) {
            config.profiles.default.basePath = options.basePath;
        }
        if (options.authPath) {
            config.profiles.default.authPath = options.authPath;
        }
        if (options.clientId) {
            config.profiles.default.clientId = options.clientId;
        }

        saveConfig(config);
    });

program
    .command("copy <appId> <newAppId> [intentId]")
    .option("-d, --dryRun", "Dry run")
    .action((appId: string, newAppId: string, intentId: string | undefined, options: Options) => {
        copy(appId, newAppId, intentId, options);
    });

program
    .command("profile")
    .option(
        "-p --platform <platform>",
        "Comma delimited list of platforms to push to. 'a' for Alexa, 'd' for Dialogflow version 1, 'd2' for version 2"
    )
    .option("-a --appId <appId>", "XAPP App ID")
    .option("-u, --utterance <utterance>", "The utterance")
    .option("-f, --file <file>", "The pipe delimited file")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow V2")
    .description("Profiles the provided utterance with the interaction models")
    .action(
        async (options: { appId: string; utterance: string; file: string; platform: string; credentials: string }) => {
            try {
                await profile(options);
            } catch (e) {
                console.error("Error profiling utterance");
                console.error(e.stack);
            }
        }
    );

program
    .command("evaluate <appId> <file>")
    .option("-r, --results <results>", "Retrieve the results of a current/completed evaluation.")
    .description("Profiles the provided utterance with the interaction models")
    .action(async (appId: string, file: string, options: { results: string }) => {
        try {
            await evaluate(appId, file, options);
        } catch (e) {
            console.error("Error evaluating utterance");
            console.error(e.stack);
        }
    });

program
    .command("analyze")
    .description("Analyzes your apps model & content")
    .option("-a --appId <appId>", "XAPP App ID")
    .option("-o --output <output>", "Output directory")
    .action(async (options: { appId: string; output: string }) => {
        await analyze(options);
    });

// Push app and  to Alexa and Dialogflow
program
    .command("push")
    .description("Takes a XAPP app and pushes it to Alexa, Actions on Google and Dialogflow (v1 or v2")
    .option(
        "-p --platform <platform>",
        "Comma delimited list of platforms to push to. 'a' for Alexa, 'g' for Actions on Google, 'd' for Dialogflow version 1, 'd2' for version 2, 'l' for Lex"
    )
    .option("-a --appId <appId>", "XAPP App ID")
    .option("-o --output <output>", "Output directory")
    .option("-l --lang <lang>", "Language code; for example en, it, es")
    .option("-i --id <id>", "ID within the platform you are pushing to.")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow V2")
    .option(
        "--aws-role <awsRoleArn>",
        "The AWS Role ARN to the Arn that the service can assume if the service must connect to another AWS Account."
    )
    .action(async (options: { appId: string; platform: string; id?: string; output: string; lang: string; credentials: string }) => {
        const { platform, credentials, output, appId } = options;

        // Parse platform
        const platforms = platform.split(",").map((item) => item.toLowerCase().trim());

        if (platforms.includes("a")) {
            await pushToAlexa(options);
        }

        if (platforms.includes("g")) {
            await pushToActionsOnGoogle(output, appId);
        }

        if (platforms.includes("d")) {
            await pushToDialogflow(options);
        }

        if (platforms.includes("d2")) {
            await pushToDialogflowV2(credentials, options);
        }

        if (platforms.includes("l")) {
            await pushToLex(options);
        }
    });

program
    .command("pull")
    .description("Pulls from the provided platform and merges them with the provided XAPP AI app")
    .option(
        "-p --platform <platform>",
        "Comma delimited list of platforms to push to. 'a' for Alexa, 'g' for Actions on Google, 'd' for Dialogflow version 1, 'd2' for version 2"
    )
    .option("-a --appId <appId>", "XAPP App ID")
    .option("-w --write", "Write back to stentor")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow V2")
    .action(async (options: { platform: string; appId: string; write: boolean; credentials: string }) => {
        const { platform, credentials } = options;

        const platforms = platform.split(",").map((item) => item.toLowerCase().trim());

        if (platforms.includes("d")) {
            await pullFromDialogflow(options);
        }

        if (platforms.includes("d2")) {
            await pullFromDialogflowV2(credentials, options);
        }
    });

program
    .command("export <directory>")
    .description("Takes a XAPP app and exports it to the provided directory.")
    .option("-a --appId <appId>", "XAPP App ID")
    .option(
        "-p --platform <platform>",
        "Platform to export to; a for Alexa, d for Dialogflow, s for Word doc.  Defaults to stentor"
    )
    .action(async (directory: string, options: { appId: string; platform: string }) => {
        let { platform } = options;
        if (!platform) {
            platform = "stentor";
        }
        switch (platform) {
            case "a":
            case "alexa":
                try {
                    await exportToAlexa(directory, options);
                } catch (error) {
                    console.error(error.stack);
                }
                break;
            case "d":
            case "dialogflow":
                try {
                    await exportToDialogflow(directory, options);
                } catch (error) {
                    console.error(error.stack);
                }
                break;
            case "l":
            case "lex":
                try {
                    await exportToLex(directory, options);
                } catch (error) {
                    console.error(error.stack);
                }
                break;
            case "s":
            case "script":
                try {
                    await exportAsScript(directory, options);
                } catch (error) {
                    console.error(error.stack);
                }
                break;
            default:
                await exportApp(directory, options);
        }
    });

program.parse(process.argv);

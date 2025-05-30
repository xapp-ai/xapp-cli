#!/usr/bin/env node
/*! Copyright (c) 2022, XAPP AI*/
require("dotenv").config(); // process the .env file

// For the CLI, we want the log level to always be info
process.env.STENTOR_LOG_LEVEL = "info";
// It will only last this execution

import { ExportOptions, getConfigProfile } from "@xapp/client";

import program from "commander";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require("../package.json");

import { info } from "./analyze";
import { copy } from "./copy";
import { exportApp, exportAsScript, exportToAlexa, exportToDialogflow, exportToLex } from "./export";
import { getConfig } from "./getConfig";
import { login } from "./login";
import { logout } from "./logout";
import { Options } from "./Options";
import { pullFromDialogflowV2 } from "./pull";
import { pushToDialogflowV2, pushToLexV2 } from "./push";
import { pushToLex } from "./push/pushToLex";
import { saveConfig } from "./saveConfig";
import { log } from "stentor-logger";
import { importApp, importAppFromFile } from "./import";
import { importFromDialogflow } from "./import";
import { profile, ProfileOptions } from "./profile";
import { generateTypes, GenerateTypesOptions } from "./types";

import { createChannelLexV2 } from "./create/channelLexV2";
import { serve } from "./serve";
import { exportOrg } from "./org/exportOrg";
import { getXAPPClient } from "./getXAPPClient";

// A couple of exports for if you use it not like a CLI
export { getStentorApp } from "./getStentorApp";
export { getXAPPClient } from "./getXAPPClient";

program.version(pkg.version);

program.command("login").action(async () => {
    try {
        await login();
    } catch (e) {
        log().error(`Error logging in.`);
    }
});
program.command("logout").action(logout);

program
    .command("set")
    .description("Changes the environment for the CLI, not typically used.")
    .option("-p --profile <profile>", "Sets the current profile to use")
    .action((options: { profile?: string }) => {
        const config = getConfig();

        config.currentProfile = options?.profile;

        // Make sure it exists
        if (typeof config.profiles[config.currentProfile] !== "object") {
            log().error(
                `Unable to set current profile, profile "${options.profile}" does not yet exist in your config file, please add it first.`
            );
        } else {
            // Checks out
            saveConfig(config);

            log().info(`Current profile set to ${config.currentProfile}`);
        }
    });

program
    .command("whoami")
    .description("Returns the email you are currently logged in with.")
    .action(async () => {
        const client = await getXAPPClient();
        const profile = await client.getProfile();

        const config = getConfigProfile();

        log().info(`Current Profile: ${config.basePath}`);

        if (profile?.profile?.email) {
            // eslint-disable-next-line no-console
            console.log(`email:${profile.profile.email}`);
            //  log().info(`email:${profile.profile.email}`);
        } else {
            log().info(`profile:${JSON.stringify(profile, undefined, 2)}`);
        }

        // log().info(`If above is masked, run the following to unmask: STENTOR_LOG_PII=true xapp whoami`);
    });

program
    .command("info <appId> [handlerId]")
    .description("Returns basic information about the provided appId")
    .action(async (appId: string, handlerId?: string) => {
        await info(appId, handlerId);
    });

program
    .command("profile")
    .description("Profile your interaction model against an NLU")
    .option(
        "-p --platform <platform>",
        "Comma delimited list of NLUs to profile. 'a' for Alexa, 'd' for Dialogflow (v2), 'l' for Lex (v1)"
    )
    .option("-a --appId <appId>", "OC Studio App ID.")
    .option("-u, --utterance <utterance>", "The utterance.")
    .option("-f, --file <file>", "The pipe delimited file of utterance tests.")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow (v2)")
    .option("-b, --botName", "Name of the bot, required for Lex V2")
    .action(async (options: ProfileOptions) => {
        try {
            await profile(options);
        } catch (e) {
            console.error("Error profiling utterance");
            console.error(e.stack);
        }
    });

program
    .command("copy <appId> <newAppId> [intentId]")
    .description("BETA - Copies the app")
    .option("-d, --dryRun", "Dry run")
    .action((appId: string, newAppId: string, intentId: string | undefined, options: Options) => {
        copy(appId, newAppId, intentId, options);
    });

program
    .command("push")
    .description("BETA - Pushes the provided appId to either Dialogflow (v2) or Lex (v1 and v2")
    .option(
        "-p --platform <platform>",
        "Comma delimited list of platforms to push to. 'd' for Dialogflow version 2," +
            " 'l' for Lex and 'l2' for Lex version 2"
    )
    .option("-a --appId <appId>", "XAPP App ID")
    .option("-o --output <output>", "Output directory")
    .option("-l --lang <lang>", "Language code; for example en, it, es")
    .option("-f --file <file>", "Model export file path (exported app)")
    .option("-i --id <id>", "ID within the platform you are pushing to.")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow V2")
    .option("--botName <botName>", "The bot name if applicable (LEX V2)")
    .option(
        "--aws-role <awsRoleArn>",
        "The AWS Role ARN to the Arn that the service can assume if the service must connect to another AWS Account."
    )
    .option("--fulfillment <fulfillment>", "The ARN of the intent fulfillment lambda.")
    .action(
        async (options: {
            appId: string;
            platform: string;
            id?: string;
            output?: string;
            lang: string;
            credentials: string;
        }) => {
            const { platform, credentials } = options;

            // Parse platform
            const platforms = platform.split(",").map((item) => item.toLowerCase().trim());

            if (platforms.includes("d")) {
                await pushToDialogflowV2(credentials, options);
            }

            if (platforms.includes("l")) {
                await pushToLex(options);
            }

            if (platforms.includes("l2")) {
                await pushToLexV2(options);
            }
        }
    );

program
    .command("pull")
    .description("BETA - Pulls the provided platform and pushes it to the provided appId")
    .option("-p --platform <platform>", "'d' for Dialogflow version 2")
    .option("-a --appId <appId>", "App ID")
    .option("-w --write", "Write back to stentor")
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow V2")
    .action(async (options: { platform: string; appId: string; write: boolean; credentials: string }) => {
        const { platform, credentials } = options;

        const platforms = platform.split(",").map((item) => item.toLowerCase().trim());

        if (platforms.includes("d")) {
            await pullFromDialogflowV2(credentials, options);
        }
    });

program
    .command("types <directory> [appId]")
    .description("Generate the TypeScript types for the possible requests to the provided directory")
    .option("-f --file <file>", "Optional file name, defaults to studio.ts")
    .option("-h --header <header>", "Optional header to add to the top of the file")
    .option("-m --max <header>", "Optional limit for entity values to generate types, defaults to 20")
    .action(async (directory: string, appId: string = undefined, options?: GenerateTypesOptions) => {
        await generateTypes(directory, appId, options);
    });

program
    .command("org <directory> <organizationId>")
    .description("Exports all the information for all the apps in an organization")
    .option(
        "-d --delimiter <delimiter>",
        "Optional delimiter, defaults to comma.  Can be helpful when values have commas"
    )
    .action(async (directory: string, organizationId: string, options: { delimiter?: string }) => {
        await exportOrg(organizationId, directory, options);
    });

program
    .command("export <directory> [appId]")
    .description(
        "Exports an app to the provided directory.  If appId isn't provided it will look for the environment variable."
    )
    .option(
        "-p --platform <platform>",
        "BETA - Platform to export to: 'a' for Alexa, 'd' for Dialogflow, 's' for Word doc.  Defaults to stentor based export."
    )
    .option("-c --channels", "Exports the channels as well, these will be found in a directory /channels")
    .option(
        "-s --split",
        "Used for stentor export, it exports the individual handlers, intents, entities into individual files"
    )
    .action(
        async (
            directory: string,
            appId: string = undefined,
            options: { platform?: string; channels?: boolean; split?: boolean }
        ) => {
            let { platform } = options;
            const { channels } = options;

            if (!platform) {
                platform = "stentor";
            }

            const exportOptions: ExportOptions = {
                appId,
                channels,
            };

            switch (platform) {
                case "a":
                case "alexa":
                    try {
                        await exportToAlexa(directory, exportOptions);
                    } catch (error) {
                        console.error(error.stack);
                    }
                    break;
                case "d":
                case "dialogflow":
                    try {
                        await exportToDialogflow(directory, exportOptions);
                    } catch (error) {
                        console.error(error.stack);
                    }
                    break;
                case "l":
                case "lex":
                    try {
                        await exportToLex(directory, exportOptions);
                    } catch (error) {
                        console.error(error.stack);
                    }
                    break;
                case "s":
                case "script":
                    try {
                        await exportAsScript(directory, exportOptions);
                    } catch (error) {
                        console.error(error.stack);
                    }
                    break;
                default:
                    await exportApp(directory, exportOptions);
            }
        }
    );

program
    .command("import [uri]")
    .description("BETA - Imports an app")
    .option("-o --organizationId <organizationId>", "Organization ID that the agent will be imported to.")
    .option("-m --modelOnly", "Imports just the model to the provided appId")
    .option("-a --appId <appId>", "App ID in XAPP that will be imported")
    .option(
        "-p --platform <platform>",
        "Platform to import from: 'd' for Dialogflow, 'l' for Lex. Defaults to stentor based import"
    )
    .option("-c --credentials <credentials>", "Path to the service account credentials required for Dialogflow")
    .action(
        async (
            uri: string,
            options: { appId: string; credentials?: string; platform?: string; organizationId: string }
        ) => {
            let { platform } = options;
            if (!platform) {
                platform = "stentor";
            }

            switch (platform) {
                case "d":
                case "dialogflow":
                    await importFromDialogflow(options.credentials, options);
                    break;
                default:
                    if (uri.startsWith("https://") || uri.startsWith("http://")) {
                        await importApp(uri, options);
                    } else {
                        await importAppFromFile(uri, options);
                    }
            }
        }
    );

program
    .command("create")
    .description("BETA - Create a an app or channel for an app")
    .option("-a --appId <appId>", "App ID")
    .option("-c --channel <channel>", "Create a new channel")
    .action(async (options: { appId: string; channel: string }) => {
        const { appId, channel } = options;

        if (channel) {
            switch (channel) {
                case "lex-v2":
                    await createChannelLexV2(appId);
                    break;

                default:
                    throw new Error(`${channel} creation not yet supported.`);
            }
        }
    });

program
    .command("serve")
    .description("BETA - Serve your application's chat widget")
    .option("-a --appId <appId>", "App ID")
    .option("-k --key <key>", "Key of the channel to use")
    .option("-u --url <url>", "URL for your widget, typically something like localhost:8080")
    .option("-p --port <port>", "PORT for localhost widget server, https://localhost:PORT, defaults to 3000")
    .action(async (options?: { url?: string; port?: string }) => {
        await serve(options);
    });

// Only tell commander to parse the args if this index.js is being called directly
// This allows us to be used as a module if needed.
if (require.main === module) {
    program.parse(process.argv);
}

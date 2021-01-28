/*! Copyright (c) 2019, XAPPmedia */
import { createReadStream } from "fs";
import "isomorphic-fetch";
import { resolve } from "path";
import { createInterface } from "readline";

import { log } from "stentor-logger";
import { HTTP_200_OK } from "stentor-constants";
import { convertToUtteranceTest, generateAlexaTestCase } from "@xapp/stentor-interaction-model-profiler";
import { AlexaSkillManagementService } from "@xapp/stentor-service-smapi";
import { getAppIntentEntities } from "../getAppIntentEntities";
import { getSMAPITokenAndVendorId } from "../getSMAPITokenAndVendor";

export async function evaluate(appId: string, file: string, options: { results?: string }): Promise<void> {
    const { app, intents } = await getAppIntentEntities(appId);
    const alexaCredentials = getSMAPITokenAndVendorId();
    const alexa = new AlexaSkillManagementService({
        token: alexaCredentials.token,
        skillId: app.alexaSkillId
    });
    console.info(`Found ${app.name} with ${intents.length} intents`);

    if (options.results) {
        const evaluationResult = await alexa.getNLUEvaluationResults(app.alexaSkillId, options.results);
        log().info(`Results for ${options.results}`);
        log().info(JSON.stringify(evaluationResult, undefined, 2));
        log().info(`Summary: Total ${evaluationResult.totalCount} Failed ${evaluationResult.totalFailed}`);
    } else {
        const path = resolve(file);
        const fileStream = createReadStream(path);
        const rl = createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let fileContent: string = "";

        rl.on("line", input => {
            const test = convertToUtteranceTest(input);
            const alexaTest = generateAlexaTestCase(test);
            fileContent += JSON.stringify(alexaTest) + "\n";
        }).on("close", async () => {
            const urlResult = await alexa.getNLUEvaluationURL(app.alexaSkillId);
            const url = urlResult.upload.url.value;
            const uploadToken = urlResult.upload.token.value;

            log().info(`Received token ${uploadToken} and url ${url}`);

            await fetch(url, {
                method: "PUT",
                headers: {
                    ["Content-Type"]: "application/json"
                },
                body: fileContent
            }).then(response => {
                if (response.status !== HTTP_200_OK) {
                    throw new Error(`Error uploading NLU test: ${response.status} - ${response.statusText}`);
                }
            });

            log().info("Upload success, time to start the eval");
            const evaluation = await alexa.startNLUEvaluation(app.alexaSkillId, uploadToken);
            log().info(evaluation);
            log().info(`Evaluation ID ${evaluation.id}`);
        });
    }
}

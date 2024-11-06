/*! Copyright (c) 2022, XAPP AI*/

import log from "stentor-logger";

export async function createChannelLexV2(appId: string): Promise<void> {

    // const service = new LexModelsV2();

    log.debug(`Creating bot ${appId}`);

    throw new Error('Create LexV2 channel not yet supported.');

    // Create the role

    /*
    try {
        const response = service.createBot({
            botName: appId,
            roleArn,
            dataPrivacy: {
                childDirected: false
            },
            idleSessionTTLInSeconds: 500
        });

        const bot = await response.promise();

        console.log(bot);
    } catch (e) {
        console.error(e);
    }
    */
}
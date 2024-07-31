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
exports.createChannelLexV2 = createChannelLexV2;
/*! Copyright (c) 2022, XAPP AI*/
// import { LexModelsV2 } from "aws-sdk";
const stentor_logger_1 = __importDefault(require("stentor-logger"));
function createChannelLexV2(appId) {
    return __awaiter(this, void 0, void 0, function* () {
        // const service = new LexModelsV2();
        stentor_logger_1.default.debug(`Creating bot ${appId}`);
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
    });
}
//# sourceMappingURL=channelLexV2.js.map
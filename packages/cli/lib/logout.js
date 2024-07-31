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
exports.logout = logout;
const stentor_logger_1 = __importDefault(require("stentor-logger"));
const getConfig_1 = require("./getConfig");
const saveConfig_1 = require("./saveConfig");
/**
 * Log the user out.
 */
function logout() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = (0, getConfig_1.getConfig)();
        if (!config) {
            stentor_logger_1.default.info("I didn't need to log you out, I couldn't find a config file with your credentials.");
        }
        if (config.currentProfile) {
            delete config.profiles[config.currentProfile].token;
        }
        else {
            delete config.profiles.default.token;
        }
        (0, saveConfig_1.saveConfig)(config);
        stentor_logger_1.default.info("You are now logged out.");
    });
}
//# sourceMappingURL=logout.js.map
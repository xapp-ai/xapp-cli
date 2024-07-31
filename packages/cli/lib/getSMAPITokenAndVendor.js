"use strict";
/*! Copyright (c) 2022, XAPP AI*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSMAPITokenAndVendorId = getSMAPITokenAndVendorId;
const fs_1 = require("fs");
const moment_1 = __importDefault(require("moment"));
const os_1 = require("os");
const path_1 = require("path");
function getSMAPITokenAndVendorId() {
    const configPath = (0, path_1.join)((0, os_1.homedir)(), ".ask", "cli_config");
    const config = (0, fs_1.readFileSync)(configPath, "utf-8");
    const obj = JSON.parse(config);
    const expirationDate = obj.profiles.default.token.expires_at;
    const expires = (0, moment_1.default)(expirationDate);
    if (expires.isBefore((0, moment_1.default)())) {
        throw new Error("TOKEN EXPIRED, run $ ask init");
    }
    const token = obj.profiles.default.token.access_token;
    const vendorId = obj.profiles.default.vendor_id;
    return { token, vendorId };
}
//# sourceMappingURL=getSMAPITokenAndVendor.js.map
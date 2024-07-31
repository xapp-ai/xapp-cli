/*! Copyright (c) 2022, XAPP AI*/
import { TokenResponse } from "./TokenResponse";
export declare function refreshToken(refreshToken: string): Promise<TokenResponse>;
/**
 * Logs the user in.
 */
export declare function login(): Promise<string>;

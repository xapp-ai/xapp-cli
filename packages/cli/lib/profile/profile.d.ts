/*! Copyright (c) 2022, XAPP AI*/
export interface ProfileOptions {
    platform: string;
    credentials: string;
    appId?: string;
    utterance?: string;
    file?: string;
    awsRole?: string;
    botName?: string;
}
export declare function profile(options?: ProfileOptions): Promise<void>;

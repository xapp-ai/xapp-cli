/*! Copyright (c) 2019, XAPPmedia */
import log from "stentor-logger";
import { Crawler } from "@xapp/stentor-crawler";
import { Options } from "./Options";

export async function crawl(url: string, options: Options): Promise<void> {
    const crawler = new Crawler();
    const result = await crawler.crawl(url, options).catch(error => {
        console.error(error);
    });

    log.info(`Wrote ${result ? result.itemsWritten : 0} items`);
}

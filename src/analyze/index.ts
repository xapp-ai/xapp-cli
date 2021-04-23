/*! Copyright (c) 2019, XAPPmedia */
import { isGlobalHandler, isHandler } from "stentor-guards";
import {
    generateHandlerTree,
    HandlerGraph,
    toNodesAndConnections
} from "stentor-handler";
import log from "stentor-logger";
import { Handler } from "stentor-models";
import { toMap } from "stentor-utils";
import { analyzeModelAndContent, printResult } from "@xapp/stentor-analyze";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import { getAppIntentEntities } from "../getAppIntentEntities";

export async function analyze(appId: string, options?: { output?: string }): Promise<void> {

    console.log(appId);
    const { output } = options;
    const { app, intents } = await getAppIntentEntities(appId);

    try {
        const modelAndContentResult = analyzeModelAndContent(intents);
        printResult(modelAndContentResult);
    } catch (error) {
        console.error(error.stack);
    }

    // Make a map!
    const handlerMap = toMap(intents);
    log.info(`Found ${Object.keys(handlerMap).length} intents & handlers`);

    // First filter off intents
    const handlers: Handler[] = [];

    intents.forEach(handler => {
        if (isHandler(handler)) {
            handlers.push(handler);
        }
    });

    log.info(`Found ${handlers.length} handlers`);

    //
    // Go through and find all the global handlers
    const globalHandlers: Handler[] = handlers.filter(handler => {
        return isGlobalHandler(handler);
    });

    log.info(`Found ${globalHandlers.length} global handlers`);

    interface GlobalTree {
        handler: Handler;
        treeString: string;
    }
    const globalTrees: GlobalTree[] = [];

    globalHandlers.forEach(global => {
        try {
            const tree = generateHandlerTree(global, handlers);
            let treeString = "";
            tree.print(
                handler => {
                    return handler.intentId;
                },
                line => {
                    treeString += line + "\n";
                }
            );
            globalTrees.push({
                handler: global,
                treeString
            });
        } catch (error) {
            console.error(error.stack);
        }
    });

    log.info(`HandlerGraph`);
    const handlerGraph = new HandlerGraph(handlers);
    log.info(`\tsize: ${handlerGraph.size()}`);
    log.info(`\trelations: ${handlerGraph.relations()}`);
    const nodesAndConnections = toNodesAndConnections(handlerGraph);

    if (output) {
        const path = resolve(output);

        if (!existsSync(path)) {
            throw new Error(
                `Path ${output} does not exist.  Please provide an existing path to create the export within.`
            );
        }

        // create the directory for the app-id
        const exportPath = resolve(path, app.appId);
        if (!existsSync(exportPath)) {
            console.info("Creating export directory..");
            mkdirSync(exportPath);
        }

        globalTrees.forEach(tree => {
            const treePath = resolve(exportPath, `${tree.handler.intentId}-${new Date().getTime()}`);
            writeFileSync(treePath, tree.treeString);
        });

        // Print the graph
        const graphJSONPath = resolve(exportPath, "graph.json");
        writeFileSync(graphJSONPath, JSON.stringify(handlerGraph, undefined, 2));
        const nodesPath = resolve(exportPath, "nodes.json");
        writeFileSync(nodesPath, JSON.stringify(nodesAndConnections, undefined, 2));
    } else {
        log.error("No output directory specified");
    }
}

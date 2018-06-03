// @flow
import type { $Request as Request, $Response as Response } from "express";

declare module "firebase-functions/cloud-functions" {
    declare export interface TriggerAnnotated {
        __trigger: {
            httpsTrigger?: {};
            eventTrigger?: {
                eventType: string;
                resource: string;
                service: string;
            };
        };
    }

    declare export type HttpsFunction = TriggerAnnotated & ((req: Request, resp: Response) => void);
}

declare module "firebase-functions/providers/https" {
    import type {HttpsFunction} from "firebase-functions/cloud-functions";

    declare export function onRequest(handler: (req: Request, resp: Response) => void): HttpsFunction;
}

declare module "firebase-functions" {
    declare module.exports: {
         https: $Exports<"firebase-functions/providers/https">
     };
}

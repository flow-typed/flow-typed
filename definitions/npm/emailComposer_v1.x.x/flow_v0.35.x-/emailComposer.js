/**
 * Flowtype definitions for emailComposer
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
export interface ngCordova$IEmailComposerOptions {
    to: string | Array<string>,
        cc?: string | Array<string>,
        bcc?: string | Array<string>,
        attachments?: Array<any>,
        subject?: string,
        body?: string,
        isHtml?: boolean
}

declare
export interface ngCordova$IEmailComposerService {
    isAvailable(): ng.IPromise<boolean>,
        open(properties: ngCordova$IEmailComposerOptions): ng.IPromise<any>,
        addAlias(app: string, schema: string): void
}
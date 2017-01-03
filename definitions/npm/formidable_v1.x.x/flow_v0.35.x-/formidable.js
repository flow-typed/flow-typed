// @flow
/**
 * Flowtype definitions for formidable
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'formidable' {
    declare     export class IncomingForm mixins events.EventEmitter {
        encoding: string;
        uploadDir: string;
        keepExtensions: boolean;
        maxFieldsSize: number;
        maxFields: number;
        hash: string | boolean;
        multiples: boolean;
        type: string;
        bytesReceived: number;
        bytesExpected: number;
        onPart: (part: Part) => void;
        handlePart(part: Part): void;
        parse(
            req: http.IncomingMessage,
            callback?: (err: any, fields: Fields, files: Files) => any): void
    }
    declare     export interface Fields {
        [key: string]: string
    }
    declare     export interface Files {
        [key: string]: File
    }
    declare     export type Part = {
        headers: {
            [key: string]: string
        },
        name: string,
        filename?: string,
        mime?: string
    }
    declare     export interface File {
        size: number,
            path: string,
            name: string,
            type: string,
            lastModifiedDate?: Date,
            hash?: string,
            toJSON(): Object
    }
}
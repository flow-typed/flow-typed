/**
 * Flowtype definitions for imap-simple
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface IMAPS$ImapSimpleOptions {

    /**
     * Options to pass to node-imap constructor. 
     */
    imap: IMAP.Config,

        /**
         * Time in milliseconds to wait before giving up on a connection attempt. (Deprecated: please use options.imap.authTimeout instead) 
         */
        connectTimeout?: number
}

declare export type IMAPS$MessageBodyPart = {

    /**
     * string type where which=='TEXT', complex Object where which=='HEADER' 
     */
    body: any
}

declare export interface IMAPS$Message {
    attributes: IMAP.ImapMessageAttributes,
        parts: IMAPS$MessageBodyPart[]
}

declare export class ImapSimple {
    constructor(imap: IMAP.Connection): this;

    /**
     * Open a mailbox, calling the provided callback with signature (err, boxName), or resolves the returned promise with boxName. 
     */
    openBox(boxName: string, callback: (err: Error, boxName: string) => void): void;
    openBox(boxName: string): Promise<string>;

    /**
     * Search for and retrieve mail in the previously opened mailbox. 
     */
    search(
        searchCriteria: any[],
        fetchOptions: IMAP.FetchOptions,
        callback: (err: Error, messages: IMAPS$Message[]) => void): void;
    search(
        searchCriteria: any[],
        fetchOptions: IMAP.FetchOptions): Promise<IMAPS$Message[]>;

    /**
     * Close the connection to the imap server. 
     */
    end(): void;

    /**
     * Downloads part data (which is either part of the message body, or an attachment). Upon success, either the provided callback will be called with signature (err, data), or the returned promise will be resolved with data. The data will be automatically decoded based on its encoding. If the encoding of the part is not supported, an error will occur. 
     */
    getPartData(
        message: IMAPS$Message,
        part: any,
        callback: (err: Error, data: any) => void): void;
    getPartData(message: IMAPS$Message, part: any): Promise<any>;

    /**
     * Adds the provided label(s) to the specified message(s). source corresponds to a node-imap MessageSource which specifies the messages to be moved. label is either a string or array of strings indicating the labels to add. When completed, either calls the provided callback with signature (err), or resolves the returned promise. 
     */
    addMessageLabel(
        source: string | string[],
        label: string | string[],
        callback: (err: Error) => void): void;
    addMessageLabel(source: string | string[], label: string | string[]): Promise<void>;

    /**
     * Moves the specified message(s) in the currently open mailbox to another mailbox. source corresponds to a node-imap MessageSource which specifies the messages to be moved. When completed, either calls the provided callback with signature (err), or resolves the returned promise. 
     */
    moveMessage(
        source: string | string[],
        boxName: string,
        callback: (err: Error) => void): void;
    moveMessage(source: string | string[], boxName: string): Promise<void >
}


/**
 * Error thrown when a connection attempt has timed out. 
 */
declare export class ConnectionTimeoutError mixins Error {
    timeout: number;
    constructor(timeout: number): this
}
declare module 'imap-simple' {

    /**
     * Main entry point. Connect to an Imap server. 
     */
    declare export function connect(
        options: IMAPS$ImapSimpleOptions,
        callback: (err: Error, connection: IMAPS$ImapSimple) => void): void


    /**
     * Given the message.attributes.struct, retrieve a flattened array of parts objects that describe the structure of the different parts of the message's body. Useful for getting a simple list to iterate for the purposes of, for example, finding all attachments. 
     */
    declare export function getParts(struct: any[]): any[]
}
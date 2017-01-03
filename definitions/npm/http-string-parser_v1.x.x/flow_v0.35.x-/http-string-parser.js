// @flow
/**
 * Flowtype definitions for http-string-parser
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'http-string-parser' {
    declare interface ParseRequestResult {
        method: string,
            uri: string,
            headers: {
                [key: string]: string
            },
            body: string
    }
    declare interface ParseResponseResult {
        statusCode: string,
            statusMessage: string,
            headers: {
                [key: string]: string
            },
            body: string
    }
    declare interface ParseRequestLineResult {
        method: string,
            uri: string,
            protocol: string
    }
    declare interface ParseStatusLineResult {
        protocol: string,
            statusCode: string,
            statusMessage: string
    }
    declare     export function parseRequest(requestString: string): ParseRequestResult
    declare     export function parseResponse(responseString: string): ParseResponseResult
    declare     export function parseRequestLine(requestLineString: string): ParseRequestLineResult
    declare     export function parseStatusLine(statusLine: string): ParseStatusLineResult
    declare     export function parseHeaders(headerLines: string[]): {
        [key: string]: string
    }
}
// @flow
/**
 * Flowtype definitions for express-mung
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'express-mung' {


    declare type Transform = (body: {}, request: Request, response: Response) => any;
    declare type TransformHeader = (body: http.IncomingMessage, request: Request, response: Response) => any;

    /**
     * Transform the JSON body of the response.
     * @param  A transformation function.
     * @return  The body.
     */
    declare     export function json(fn: Transform): any

    /**
     * Transform the JSON body of the response.
     * @param  A transformation function.
     * @return  The body.
     */
    declare     export function jsonAsync(fn: Transform): PromiseLike<any >

        /**
         * Transform the HTTP headers of the response.
         * @param  A transformation function.
         * @return  The body.
         */
        declare     export function headers(fn: TransformHeader): any

    /**
     * Transform the HTTP headers of the response.
     * @param  A transformation function.
     * @return  The body.
     */
    declare     export function headersAsync(fn: TransformHeader): PromiseLike<any >
}
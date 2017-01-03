// @flow
/**
 * Flowtype definitions for route-recognizer
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'route-recognizer' {
    declare module.exports: typeof RouteRecognizer
    declare interface Route<H>{
        path: string,
        handler: H
    }
}
declare interface MatchedRoute<H>{
    handler: H,
    params: {
        [key: string]: string
    }
}
/**
 * Flowtype definitions for simple-cw-node
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'simple-cw-node' {
    declare module.exports: typeof ChatWork

    declare var npm$namespace$ChatWork: {
        ChatWork: typeof ChatWork$ChatWork,
    }
    declare interface ChatWork$ChatWorkInitOptions {
        token: string
    }

    declare function ChatWork$ChatWork(): ChatWork$ChatWork
}
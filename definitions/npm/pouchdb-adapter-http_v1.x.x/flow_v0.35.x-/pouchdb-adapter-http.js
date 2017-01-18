/**
 * Flowtype definitions for pouchdb-adapter-http
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type HttpAdapter$HttpAdapterConfiguration = {
    adapter: "http"
}

declare interface PouchDB$Static {
    new<Content>(
        name: string | void,
        options: HttpAdapter$HttpAdapterConfiguration): Database<Content >
}
declare module 'pouchdb-adapter-http' {
    declare var plugin: PouchDB$Plugin;
    declare module.exports: typeof plugin
}
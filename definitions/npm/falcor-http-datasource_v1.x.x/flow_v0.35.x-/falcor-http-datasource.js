// @flow
/**
 * Flowtype definitions for falcor-http-datasource
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * A HttpDataSource object is a {@link DataSource} can be used to retrieve data from a remote JSONGraph object using the browser's XMLHttpRequest.
 */
declare class XMlHttpSource mixins FalcorModel.DataSource {
    constructor(jsonGraphUrl: string, config?: any): this
}
declare module 'falcor-http-datasource' {
    declare module.exports: typeof XMlHttpSource
}
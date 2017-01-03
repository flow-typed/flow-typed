// @flow
/**
 * Flowtype definitions for ravenjs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare var Raven: RavenStatic;
declare module 'raven-js' {
    declare module.exports: typeof Raven
}
declare interface RavenOptions {

    /**
     * The name of the logger used by Sentry. Default: javascript 
     */
    logger?: string,

        /**
         * The release version of the application you are monitoring with Sentry 
         */
        release?: string,

        /**
         * The environment in which the application is running. 
         */
        environment?: string,

        /**
         * The name of the server or device that the client is running on 
         */
        serverName?: string,

        /**
         * List of messages to be fitlered out before being sent to Sentry. 
         */
        ignoreErrors?: string[],

        /**
         * Similar to ignoreErrors, but will ignore errors from whole urls patching a regex pattern. 
         */
        ignoreUrls?: RegExp[],

        /**
         * The inverse of ignoreUrls. Only report errors from whole urls matching a regex pattern. 
         */
        whitelistUrls?: RegExp[],

        /**
         * An array of regex patterns to indicate which urls are a part of your app. 
         */
        includePaths?: RegExp[],

        /**
         * Additional data to be tagged onto the error. 
         */
        tags?: {
            [id: string]: string
        },

        /**
         * A function which allows mutation of the data payload right before being sent to Sentry 
         */
        dataCallback?: (data: any) => any,

        /**
         * A callback function that allows you to apply your own filters to determine if the message should be sent to Sentry. 
         */
        shouldSendCallback?: (data: any) => boolean,

        /**
         * By default, Raven does not truncate messages. If you need to truncate characters for whatever reason, you may set this to limit the length. 
         */
        maxMessageLength?: number,

        /**
         * Enables/disables automatic collection of breadcrumbs. Default: true. 
         */
        autoBreadcrumbs?: any,

        /**
         * The max number of breadcrumb captures. Default: 100. 
         */
        maxBreadcrumbs?: number,

        /**
         * Override the default HTTP data transport handler. 
         */
        transport?: (options: RavenTransportOptions) => void,

        /**
         * Allow the use of a Sentry DSN with a private key. Default: false. 
         */
        allowSecretKey?: boolean
}
declare interface RavenAdditionalData {

    /**
     * The name of the logger used by Sentry. Default: javascript 
     */
    logger?: string,

        /**
         * The log level associated with this event. Default: error 
         */
        level?: string,

        /**
         * Additional data to be tagged onto the error. 
         */
        tags?: {
            [id: string]: string
        },
        extra?: any
}
declare interface RavenStatic {

    /**
     * Raven.js version. 
     */
    VERSION: string,
        Plugins: {
            [id: string]: RavenPlugin
        },
        afterLoad(): void,
        noConflict(): RavenStatic,
        config(dsn: string, options?: RavenOptions): RavenStatic,
        install(): RavenStatic,
        addPlugin(plugin: RavenPlugin, ...pluginArgs: any[]): RavenStatic,
        context(func: Function, ...args: any[]): void,
        context(options: RavenAdditionalData, func: Function, ...args: any[]): void,
        wrap(func: Function): Function,
        wrap(options: RavenAdditionalData, func: Function): Function,
        wrap<T>(func: T): T,
        wrap<T>(options: RavenAdditionalData, func: T): T,
        uninstall(): RavenStatic,
        captureException(ex: Error, options?: RavenAdditionalData): RavenStatic,
        captureMessage(msg: string, options?: RavenAdditionalData): RavenStatic,

        /**
         * Clear the user context, removing the user data that would be sent to Sentry.
         */
        setUserContext(): RavenStatic,
        setUserContext(user: {
            id?: string,
            username?: string,
            email?: string
        }): RavenStatic,

        /**
         * Override the default HTTP data transport handler. 
         */
        setTransport(transportFunction: (options: RavenTransportOptions) => void): RavenStatic,

        /**
         * An event id is a globally unique id for the event that was just sent. This event id can be used to find the exact event from within Sentry. 
         */
        lastEventId(): string,

        /**
         * If you need to conditionally check if raven needs to be initialized or not, you can use the isSetup function. It will return true if Raven is already initialized. 
         */
        isSetup(): boolean,
        showReportDialog(options: RavenOptions): void,
        setTagsContext(tags: {
            [id: string]: string
        }): void,
        setExtraContext(context: any): void
}
declare interface RavenTransportOptions {
    url: string,
        data: any,
        auth: {
            sentry_version: string,
            sentry_client: string,
            sentry_key: string
        },
        onSuccess: () => void,
        onFailure: () => void
}
declare interface RavenPlugin {
    (raven: RavenStatic, ...args: any[]): RavenStatic
}
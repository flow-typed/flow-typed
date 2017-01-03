// @flow
/**
 * Flowtype definitions for statsd-client
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'statsd-client' {
    declare interface CommonOptions {

        /**
         * Prefix all stats with this value (default "").
         */
        prefix?: string,

            /**
             * Print what is being sent to stderr (default false).
             */
            debug?: boolean,

            /**
             * User specifically wants to use tcp (default false)
             */
            tcp?: boolean,

            /**
             * Dual-use timer. Will flush metrics every interval. For UDP, 
             * it auto-closes the socket after this long without activity 
            (default 1000 ms; 0 disables this). For TCP, it auto-closes 
            the socket after socketTimeoutsToClose number of timeouts 
            have elapsed without activity.
            */
            socketTimeout?: number
    }
    declare type TcpOptions = {

        /**
         * Where to send the stats (default localhost).
         */
        host?: string,

        /**
         * Port to contact the statsd-daemon on (default 8125).
         */
        port?: number,

        /**
         * Number of timeouts in which the socket auto-closes if it 
         * has been inactive. (default 10; 1 to auto-close after a 
        single timeout).
        */
        socketTimeoutsToClose: number
    } & CommonOptions

    declare type UdpOptions = {

        /**
         * Where to send the stats (default localhost).
         */
        host?: string,

        /**
         * Port to contact the statsd-daemon on (default 8125).
         */
        port?: number
    } & CommonOptions

    declare type HttpOptions = {

        /**
         * Where to send the stats (default localhost).
         */
        host?: string,

        /**
         * Additional headers to send (default {}).
         */
        headers?: {
            [index: string]: string
        },

        /**
         * What HTTP method to use (default "PUT").
         */
        method?: string
    } & CommonOptions

    declare module.exports: typeof StatsdClient

}
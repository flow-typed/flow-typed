/**
 * Flowtype definitions for express-brute-memcached
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'express-brute-memcached' {

    /**
     * 
     * @summary  Memcached options.
     * @interface  
     */
    declare interface MemcachedStoreOptions {
        prefix: string,

            /**
             * 
             * @summary  Maximum key size allowed.
             * @type  
             */
            maxKeySize: number,

            /**
             * 
             * @summary  Maximum expiration time of keys (in seconds).
             * @type  
             */
            maxExpiration: number,

            /**
             * 
             * @summary  Maximum size of a value.
             * @type  
             */
            maxValue: number,

            /**
             * 
             * @summary  Maximum size of the connection pool.
             * @type  
             */
            poolSize: number,

            /**
             * 
             * @summary  Hashing algorithm used to generate the  hashRing  values
             * @type  
             */
            algorithm: string,

            /**
             * 
             * @summary  Time between reconnection attempts (in milliseconds).
             * @type  
             */
            reconnect: number,

            /**
             * 
             * @summary  Time after which Memcached sends a connection timeout (in milliseconds).
             * @type  
             */
            timeout: number,

            /**
             * 
             * @summary  Number of socket allocation retries per request.
             * @type  
             */
            retries: number,

            /**
             * 
             * @summary  Number of failed-attempts to a server before it is regarded as 'dead'.
             * @type  
             */
            failures: number,

            /**
             * 
             * @summary  Time between a server failure and an attempt to set it up back in service.
             * @type  
             */
            retry: number,

            /**
             * 
             * @summary  If true, authorizes the automatic removal of dead servers from the pool.
             * @type  
             */
            remove: boolean,

            /**
             * 
             * @summary  An array of  server_locations  to replace servers that fail and that are removed from the consistent hashing scheme.
             * @type  
             */
            failOverServers: Array<any>,

            /**
             * 
             * @summary  True, whether to use  md5  as hashing scheme when keys exceed  maxKeySize .
             * @type  
             */
            keyCompression: boolean,

            /**
             * 
             * @summary  Idle timeout for the connections.
             * @type  
             */
            idle: number
    }

    /**
     * 
     * @summary  A memcached store adapter.
     * @class  
     */
    declare export default class MemcachedStore {

        /**
         * 
         * @summary  Constructor.
         * @constructor  * 
         * @param  The collection.
         * @param  The otpions.
         */
        constructor(hosts: string | Array<string>, options?: MemcachedStoreOptions): this
    }
}
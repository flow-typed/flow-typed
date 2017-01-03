/**
 * Flowtype definitions for gulp-remember
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'gulp-remember' {
    declare interface ICache {
        [path: string]: NodeJS.ReadWriteStream
    }
    declare interface IGulpRemember {

        /**
         * Return a through stream that will:
         *    1. Remember all files that ever pass through it.
           2. Add all remembered files back into the stream when not present.
         * @param cacheName Name to give your cache
        */
        (cacheName?: string): NodeJS.ReadWriteStream,

            /**
             * Forget about a file.
             * A warning is logged if either the named cache or file do not exist.
             * @param path Path of the file to forget
             */
            forget(path: string): void,

            /**
             * Forget about a file.
             * A warning is logged if either the named cache or file do not exist.
             * @param cacheName Name of the cache from which to drop the file
             * @param path Path of the file to forget
             */
            forget(cacheName: string, path: string): void,

            /**
             * Forget all files in one cache.
             * A warning is logged if the cache does not exist.
             * @param cacheName Name of the cache to wipe
             */
            forgetAll(cacheName?: string): void,

            /**
             * Return a raw cache by name.
             * Useful for checking state. Manually adding or removing files is NOT recommended.
             * @param cacheName Name of the cache to retrieve
             */
            cacheFor(cacheName?: string): ICache
    }
    declare var remember: IGulpRemember;
    declare module.exports: typeof remember
}
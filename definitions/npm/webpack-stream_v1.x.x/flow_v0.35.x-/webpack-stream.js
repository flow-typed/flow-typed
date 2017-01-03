// @flow
/**
 * Flowtype definitions for webpack-stream
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'webpack-stream' {
    declare interface WebpackStreamStatic {

        /**
         * Run webpack with the default configuration.
         */
        (): NodeJS.ReadWriteStream,

            /**
             * Run webpack with the specified configuration.
             * @param  configuration
             */
            (config: webpack.Configuration): NodeJS.ReadWriteStream,

            /**
             * Run webpack with the specified configuration and webpack instance
             * @param  configuration
             * @param  webpack object
             */
            (config: webpack.Configuration, webpack: webpack.Webpack): NodeJS.ReadWriteStream,

            /**
             * Run webpack with the specified configuration and webpack instance
             * @param  configuration
             * @param  webpack object
             * @param  callback with the webpack stats and error objects.
             */
            (config: webpack.Configuration, webpack: webpack.Webpack, callback?: (err: Error, stats: undefined.Stats) => void): NodeJS.ReadWriteStream
    }
    declare     var webpackStream: WebpackStreamStatic;
    declare module.exports: typeof webpackStream
}
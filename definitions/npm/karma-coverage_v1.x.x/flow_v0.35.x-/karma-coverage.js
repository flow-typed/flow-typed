/**
 * Flowtype definitions for karma-coverage
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'karma-coverage' {


    declare type karmaCoverage$Karma = {}

    declare type karmaCoverage$Config = {
        set: (config: karmaCoverage$ConfigOptions) => void
    }

    declare type karmaCoverage$ConfigOptions = {

        /**
         * See https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
         */
        coverageReporter?: (karmaCoverage$Reporter | karmaCoverage$Reporter[])
    }

    declare interface karmaCoverage$Reporter {
        type?: string,
            dir?: string,
            subdir?: string | ((browser: string) => string),
            check?: any,
            watermarks?: any,
            includeAllSources?: boolean,
            sourceStore?: istanbul.Store,
            instrumenter?: any
    }
    declare var karmaCoverage: karmaCoverage$Karma;
    declare module.exports: typeof karmaCoverage
}
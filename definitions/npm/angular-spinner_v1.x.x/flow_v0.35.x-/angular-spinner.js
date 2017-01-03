// @flow
/**
 * Flowtype definitions for angular-spinner
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * SpinnerService 
 * see https://github.com/urish/angular-spinner
 */
declare interface ISpinnerService {

    /**
     * Start selected spinner
     * @param spinner key
     */
    spin(key: string): void,

        /**
         * Stop selected spinner
         * @param spinner key
         */
        stop(key: string): void
}
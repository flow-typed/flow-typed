/**
 * Flowtype definitions for jasmine-promise-matchers
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
function installPromiseMatchers(): voiddeclare interface jasmine$Matchers {

    /**
     * Verifies that a Promise is (or has been) rejected.
     */
    toBeRejected(): boolean,

        /**
         * Verifies that a Promise is (or has been) rejected with the specified parameter.
         */
        toBeRejectedWith(value: any): boolean,

        /**
         * Verifies that a Promise is (or has been) resolved.
         */
        toBeResolved(): boolean,

        /**
         * Verifies that a Promise is (or has been) resolved with the specified parameter.
         */
        toBeResolvedWith(value: any): boolean
}
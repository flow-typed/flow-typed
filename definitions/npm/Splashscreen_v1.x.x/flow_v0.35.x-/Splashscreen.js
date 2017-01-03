// @flow
/**
 * Flowtype definitions for Splashscreen
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Navigator {

    /**
     * This plugin displays and hides a splash screen during application launch. 
     */
    splashscreen: {

        /**
         * Dismiss the splash screen. 
         */
        hide(): void,

        /**
         * Displays the splash screen. 
         */
        show(): void
    }
}
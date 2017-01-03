/**
 * Flowtype definitions for cordova-plugin-insomnia
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Plugins {
    insomnia: InsomniaPlugin$Insomnia
}
declare
export interface InsomniaPlugin$Insomnia {

    /**
     * Prevent the screen of the mobile device from falling asleep.
     */
    keepAwake(success?: () => any, fail?: () => any): void,

        /**
         * After making your app practically a zombie, you can allow it to sleep again by calling allowSleepAgain.
         */
        allowSleepAgain(success?: () => any, fail?: () => any): void
}
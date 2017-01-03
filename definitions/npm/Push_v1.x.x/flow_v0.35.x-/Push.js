/**
 * Flowtype definitions for Push
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Window {
    plugins: Plugins
}
declare interface Plugins {

    /**
     * This plugin allows to receive push notifications. The Android implementation uses
     * Google's GCM (Google Cloud Messaging) service,
    whereas the iOS version is based on Apple APNS Notifications
    */
    pushNotification: PushNotification
}
/**
 * This plugin allows to receive push notifications. The Android implementation uses
 * Google's GCM (Google Cloud Messaging) service,
whereas the iOS version is based on Apple APNS Notifications
*/
declare interface PushNotification {

    /**
     * Registers as push notification receiver.
     * @param successCallback Called when a plugin method returns without error.
     * @param errorCallback Called when the plugin returns an error.
     * @param registrationOptions Options for registration process.
     */
    register(
            successCallback: (registrationId: string) => void,
            errorCallback: (error: any) => void,
            registrationOptions: RegistrationOptions): void,

        /**
         * Unregisters as push notification receiver.
         * @param successCallback Called when a plugin method returns without error.
         * @param errorCallback Called when the plugin returns an error.
         */
        unregister(
            successCallback: (result: any) => void,
            errorCallback: (error: any) => void): void,

        /**
         * Sets the badge count visible when the app is not running. iOS only.
         * @param successCallback Called when a plugin method returns without error.
         * @param errorCallback Called when the plugin returns an error.
         * @param badgeCount An integer indicating what number should show up in the badge. Passing 0 will clear the badge.
         */
        setApplicationIconBadgeNumber(
            successCallback: (result: any) => void,
            errorCallback: (error: any) => void,
            badgeCount: number): void
}
/**
 * Options for registration process. 
 */
declare interface RegistrationOptions {

    /**
     * This is the Google project ID you need to obtain by registering your application for GCM. Android only 
     */
    senderID?: string,

        /**
         * WP8 only 
         */
        channelName?: string,

        /**
         * Callback, that is fired when notification arrived 
         */
        ecb?: string,
        badge?: boolean,
        sound?: boolean,
        alert?: boolean
}
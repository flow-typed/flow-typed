// @flow
/**
 * Flowtype definitions for auto-launch
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface AutoLaunchOption {

    /**
     * Application name.
     */
    name: string,

        /**
         * Hidden on launch or not.  Default is false.
         */
        isHidden?: boolean,

        /**
         * Path to application directory.
         * Default is process.execPath.
         */
        path?: string
}
declare class AutoLaunch {
    constructor(opts: AutoLaunchOption): this;

    /**
     * Enables to launch at start up
     */
    enable(callback?: (err: Error) => void): void;

    /**
     * Disables to launch at start up
     */
    disable(callback?: (err: Error) => void): void;

    /**
     * Returns if auto start up is enabled
     */
    isEnabled(callback: (enabled: boolean) => void): void
}
declare module 'auto-launch' {
    declare     var al: typeof AutoLaunch;
    declare module.exports: typeof al
}
// @flow
/**
 * Flowtype definitions for electron-builder
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * Electron-builder Options. 
 */
declare export interface ElectronBuilder$Options {

    /**
     * Source application path. 
     */
    appPath: string,

        /**
         * Platforms to build. Allowed values: win, osx, all. 
         */
        platform: string,

        /**
         * Path or Object. Configuration for build. 
         */
        config: string | ElectronBuilder$Config,

        /**
         * The output directory. 
         */
        out?: string
}


/**
 * Build configuration by platforms. 
 */
declare export interface ElectronBuilder$Config {

    /**
     * Configurations for Mac OS X. 
     */
    osx: {

            /**
             * Installer title. 
             */
            title: string,

            /**
             * Installer background. 
             */
            background: string,

            /**
             * Installer icon. 
             */
            icon: string,

            /**
             * Installer icon size. 
             */
            icon - size: number,

            /**
             * Installer custom contents. 
             */
            contents: [ElectronBuilder$OsxContents, ElectronBuilder$OsxContents]
        },

        /**
         * Configurations for Windows. 
         */
        win: {

            /**
             * Installer title. 
             */
            title: string,

            /**
             * Installer icon. 
             */
            icon: string
        }
}


/**
 * OSX Installer custom contents. 
 */
declare export interface ElectronBuilder$OsxContents {

    /**
     * Horizontal position on installer screen (in pixels). 
     */
    x: number,

        /**
         * Vertical position on installer screen (in pixels). 
         */
        y: number,

        /**
         * Content type. Allowed values are "file", "link". 
         */
        type: string,

        /**
         * Link only. Customize link destination path. 
         */
        path?: string
}


/**
 * Electron-builder done callback. 
 */
declare export interface ElectronBuilder$Callback {

    /**
     * Callback wich is called when electron-builder is done.
     * @param err - Contains errors if any.
     */
    (err: Error): void
}


/**
 * Prototype for electron-builder. 
 */
declare export interface ElectronBuilder$Builder {

    /**
     * Build the installer for given platform.
     * @param opts - Options to configure installer.
     * @param callback - Callback which is called when building is done or an error occured.
     */
    build(opts: ElectronBuilder$Options, callback: ElectronBuilder$Callback): void
}
declare module 'electron-builder' {
    declare     export function init(): ElectronBuilder$Builder
}
declare interface NodeRequireFunction {
    (id: "electron-builder"): {
        init(): ElectronBuilder$Builder
    }
}
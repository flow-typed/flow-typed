// @flow
/**
 * Flowtype definitions for electron-window-state
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface ElectronWindowState$WindowState {
    x: number,
        y: number,
        width: number,
        height: number,
        isMaximized: boolean,
        isFullScreen: boolean,
        manage(win: Electron.BrowserWindow): void,
        saveState(win: Electron.BrowserWindow): void
}

declare interface ElectronWindowState$WindowStateKeeperOptions {
    defaultWidth?: number,
        defaultHeight?: number,
        path?: string,
        file?: string,
        maximize?: boolean,
        fullScreen?: boolean
}
declare module 'electron-window-state' {
    declare module.exports: typeof windowStateKeeper
}
// @flow
/**
 * Flowtype definitions for jquery.noty
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface NotyOptions {
    layout?: string,
        theme?: string,
        type?: string,

        /**
         * Text to show. Can be html or string. 
         */
        text?: string,

        /**
         * If you want to use queue feature set this true. 
         */
        dismissQueue?: boolean,

        /**
         * The note`s optional template like '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>' 
         */
        template?: string,
        animation?: NotyAnimationOptions,

        /**
         * Delay for closing event. Set false for sticky notifications 
         */
        timeout?: any,

        /**
         * Adds notification to the beginning of queue when set to true 
         */
        force?: boolean,
        modal?: boolean,

        /**
         * You can set max visible notification for dismissQueue true option 
         */
        maxVisible?: number,

        /**
         * To close all notifications before show 
         */
        killer?: boolean,
        closeWith?: any[],
        callback?: NotyCallbackOptions,

        /**
         * An array of buttons or false to hide them 
         */
        buttons?: any
}
declare interface NotyAnimationOptions {
    open?: any,
        close?: any,
        easing?: string,
        speed?: number
}
declare interface NotyCallbackOptions {
    onShow?: Function,
        afterShow?: Function,
        onClose?: Function,
        afterClose?: Function
}
declare interface NotyStatic {
    (notyOptions: NotyOptions),
    defaults: NotyOptions,
        get(id: any): void,
        close(id: any): void,
        clearQueue(): void,
        closeAll(): void,
        setText(id: any, text: string): void,
        setType(id: any, type: string): void
}
declare interface Noty {
    (notyOptions: NotyOptions),
    show(): void,
        close(): void,
        setText(text: string): void,
        setType(type: string): void,
        setTimeout(timeout: number): void,
        closed: boolean,
        shown: boolean
}
declare interface JQueryStatic {
    noty: NotyStatic
}
declare interface JQuery {
    noty: Noty
}
declare var noty: Noty;
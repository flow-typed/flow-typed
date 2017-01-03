/**
 * Flowtype definitions for bootbox
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * Bootbox options shared by all modal types 
 */
declare interface BootboxBaseOptions {
    title?: string | Element,
        callback?: (result: boolean | string) => any,
        onEscape?: (() => any) | boolean,
        show?: boolean,
        backdrop?: boolean,
        closeButton?: boolean,
        animate?: boolean,
        className?: string,
        size?: string,
        buttons?: BootboxButtonMap
}
/**
 * Bootbox options available for custom modals 
 */
declare type BootboxDialogOptions = {
    message: string | Element
} & BootboxBaseOptions

/**
 * Bootbox options available for alert modals 
 */
declare type BootboxAlertOptions = {
    callback?: () => any,
    buttons?: BootboxAlertButtonMap
} & BootboxDialogOptions

/**
 * Bootbox options available for confirm modals 
 */
declare type BootboxConfirmOptions = {
    callback: (result: boolean) => any,
    buttons?: BootboxConfirmPromptButtonMap
} & BootboxDialogOptions

/**
 * Bootbox options available for prompt modals 
 */
declare type BootboxPromptOptions = {
    title: string,
    value?: string,
    inputType?: string,
    callback: (result: string) => any,
    buttons?: BootboxConfirmPromptButtonMap
} & BootboxBaseOptions

/**
 * Bootbox options available when setting defaults for modals 
 */
declare interface BootboxDefaultOptions {
    locale?: string,
        show?: boolean,
        backdrop?: boolean,
        closeButton?: boolean,
        animate?: boolean,
        className?: string
}
declare interface BootboxButton {
    label?: string,
        className?: string,
        callback?: () => any
}
declare interface BootboxButtonMap {
    [key: string]: BootboxButton | Function
}
/**
 * ButtonMap options for alerts modals 
 */
declare type BootboxAlertButtonMap = {
    ok: BootboxButton | Function
} & BootboxButtonMap

/**
 * ButtonMap options for confirm and prompt modals 
 */
declare type BootboxConfirmPromptButtonMap = {
    confirm: BootboxButton | Function,
    cancel: BootboxButton | Function
} & BootboxButtonMap
declare interface BootboxLocaleValues {
    OK: string,
        CANCEL: string,
        CONFIRM: string
}
declare interface BootboxStatic {
    alert(message: string, callback?: () => void): JQuery,
        alert(options: BootboxAlertOptions): JQuery,
        confirm(message: string, callback: (result: boolean) => void): JQuery,
        confirm(options: BootboxConfirmOptions): JQuery,
        prompt(message: string, callback: (result: string) => void): JQuery,
        prompt(options: BootboxPromptOptions): JQuery,
        dialog(message: string, callback?: (result: string) => void): JQuery,
        dialog(options: BootboxDialogOptions): JQuery,
        setDefaults(options: BootboxDefaultOptions): void,
        hideAll(): void,
        addLocale(name: string, values: BootboxLocaleValues): void,
        removeLocale(name: string): void,
        setLocale(name: string): void
}
declare var bootbox: BootboxStatic;
declare module 'bootbox' {
    declare module.exports: typeof bootbox
}
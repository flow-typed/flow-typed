declare module 'load-script' {
    declare type Options = {
        async?: boolean,
        attrs?: { [attr: string]: mixed },
        charset?: string,
        text?: string,
        type?: string
    };
    declare type Callback = (err: ?Error, el: HTMLScriptElement) => void | mixed;

    declare interface loadScript {
        (url: string, ...args: Array<void>): void;
        (url: string, options: Options, ...args: Array<void>): void;
        (url: string, callback: Callback, ...args: Array<void>): void;
        (url: string, options: Options, callback: Callback, ...args: Array<void>): void;
    }
    declare module.exports: loadScript;
}

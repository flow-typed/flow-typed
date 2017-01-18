/**
 * Flowtype definitions for jquery.jnotify
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JNotifyInitOptions {
    oneAtTime?: boolean,
        appendType?: string
}
declare interface JNotifyOptions {
    text?: string,
        type?: string,
        showIcon?: boolean,
        permanent?: boolean,
        disappearTime?: number
}
declare interface JQuery {
    jnotifyInizialize(options?: JNotifyInitOptions): void,
        jnotifyAddMessage(options?: JNotifyOptions): void
}
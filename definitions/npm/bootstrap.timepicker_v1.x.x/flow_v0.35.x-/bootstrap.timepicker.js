/**
 * Flowtype definitions for bootstrap.timepicker
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface TimeickerOptions {
    defaultTime?: string,
        disableFocus?: boolean,
        isOpen?: boolean,
        minuteStep?: number,
        modalBackdrop?: boolean,
        secondStep?: number,
        showSeconds?: boolean,
        showInputs?: boolean,
        showMeridian?: boolean,
        template?: string,
        appendWidgetTo?: string
}
declare interface JQuery {
    timepicker(): JQuery,
        timepicker(methodName: string): JQuery,
        timepicker(methodName: string, params: any): JQuery,
        timepicker(options: TimeickerOptions): JQuery
}
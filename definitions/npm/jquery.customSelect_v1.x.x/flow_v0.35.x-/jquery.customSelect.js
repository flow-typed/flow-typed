/**
 * Flowtype definitions for jquery.customSelect
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JQueryCustomSelectOption {
    customClass?: string,
        mapClass?: boolean,
        mapStyle?: boolean
}
declare interface JQuery {
    customSelect(val: JQueryCustomSelectOption): JQuery
}
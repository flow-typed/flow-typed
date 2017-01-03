/**
 * Flowtype definitions for knockout.mapper
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface KnockoutMapper {
    fromJS(value: any, options?: any, target?: any, wrap?: boolean): any,
        toJS(value: any, options?: any): any
}
declare interface KnockoutStatic {
    mapper: KnockoutMapper
}
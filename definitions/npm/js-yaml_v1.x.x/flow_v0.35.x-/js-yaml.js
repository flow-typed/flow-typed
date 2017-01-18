/**
 * Flowtype definitions for js-yaml
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$jsyaml: {
    safeLoad: typeof jsyaml$safeLoad,
    load: typeof jsyaml$load,
    safeLoadAll: typeof jsyaml$safeLoadAll,
    loadAll: typeof jsyaml$loadAll,
    safeDump: typeof jsyaml$safeDump,
    dump: typeof jsyaml$dump,
}
declare export function jsyaml$safeLoad(str: string, opts?: jsyaml$LoadOptions): any

declare export function jsyaml$load(str: string, opts?: jsyaml$LoadOptions): any

declare export class Type mixins TypeConstructorOptions {
    constructor(tag: string, opts?: jsyaml$TypeConstructorOptions): this;
    tag: string
}

declare export class Schema {
    constructor(definition: jsyaml$SchemaDefinition): this;
    create(args: any[]): jsyaml$Schema
}

declare export function jsyaml$safeLoadAll(str: string, iterator: (doc: any) => void, opts?: jsyaml$LoadOptions): any

declare export function jsyaml$loadAll(str: string, iterator: (doc: any) => void, opts?: jsyaml$LoadOptions): any

declare export function jsyaml$safeDump(obj: any, opts?: jsyaml$DumpOptions): string

declare export function jsyaml$dump(obj: any, opts?: jsyaml$DumpOptions): string

declare export interface jsyaml$LoadOptions {
    filename?: string,
        strict?: boolean,
        schema?: any
}

declare export interface jsyaml$DumpOptions {
    indent?: number,
        skipInvalid?: boolean,
        flowLevel?: number,
        styles?: Object,
        schema?: any
}

declare export interface jsyaml$TypeConstructorOptions {
    kind?: string,
        resolve?: Function,
        construct?: Function,
        instanceOf?: Object,
        predicate?: string,
        represent?: Function,
        defaultStyle?: string,
        styleAliases?: Object
}

declare export interface jsyaml$SchemaDefinition {
    implicit?: any[],
        explicit?: any[],
        include?: any[]
}

declare export var FAILSAFE_SCHEMA: any;

declare export var JSON_SCHEMA: any;

declare export var CORE_SCHEMA: any;

declare export var DEFAULT_SAFE_SCHEMA: any;

declare export var DEFAULT_FULL_SCHEMA: any;

declare export var MINIMAL_SCHEMA: any;

declare export var SAFE_SCHEMA: any;

declare export class YAMLException mixins Error {
    constructor(reason?: any, mark?: any): this;
    toString(compact?: boolean): string
}
declare module 'js-yaml' {
    declare module.exports: typeof jsyaml
}
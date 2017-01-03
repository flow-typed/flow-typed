/**
 * Flowtype definitions for highlightjs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'highlight.js' {
    declare module.exports: typeof hljs
}

declare
var npm$namespace$hljs: {
    highlight: typeof hljs$highlight,
    highlightAuto: typeof hljs$highlightAuto,
    fixMarkup: typeof hljs$fixMarkup,
    highlightBlock: typeof hljs$highlightBlock,
    configure: typeof hljs$configure,
    initHighlighting: typeof hljs$initHighlighting,
    initHighlightingOnLoad: typeof hljs$initHighlightingOnLoad,
    registerLanguage: typeof hljs$registerLanguage,
    listLanguages: typeof hljs$listLanguages,
    getLanguage: typeof hljs$getLanguage,
    inherit: typeof hljs$inherit,
    COMMENT: typeof hljs$COMMENT,
}
declare
export function hljs$highlight(
    name: string,
    value: string,
    ignore_illegals?: boolean,
    continuation?: boolean): hljs$IHighlightResult

declare
export function hljs$highlightAuto(value: string, languageSubset?: string[]): hljs$IAutoHighlightResult

declare
export function hljs$fixMarkup(value: string): string

declare
export function hljs$highlightBlock(block: Node): void

declare
export function hljs$configure(options: hljs$IOptions): void

declare
export function hljs$initHighlighting(): void

declare
export function hljs$initHighlightingOnLoad(): void

declare
export function hljs$registerLanguage(name: string, language: (hljs?: hljs$HLJSStatic) => hljs$IModeBase): void

declare
export function hljs$listLanguages(): string[]

declare
export function hljs$getLanguage(name: string): hljs$IMode

declare
export function hljs$inherit(parent: Object, obj: Object): Object

declare
export function hljs$COMMENT(
    begin: (string | RegExp),
    end: (string | RegExp),
    inherits: hljs$IModeBase): hljs$IMode

declare
export var IDENT_RE: string;

declare
export var UNDERSCORE_IDENT_RE: string;

declare
export var NUMBER_RE: string;

declare
export var C_NUMBER_RE: string;

declare
export var BINARY_NUMBER_RE: string;

declare
export var RE_STARTERS_RE: string;

declare
export var BACKSLASH_ESCAPE: hljs$IMode;

declare
export var APOS_STRING_MODE: hljs$IMode;

declare
export var QUOTE_STRING_MODE: hljs$IMode;

declare
export var PHRASAL_WORDS_MODE: hljs$IMode;

declare
export var C_LINE_COMMENT_MODE: hljs$IMode;

declare
export var C_BLOCK_COMMENT_MODE: hljs$IMode;

declare
export var HASH_COMMENT_MODE: hljs$IMode;

declare
export var NUMBER_MODE: hljs$IMode;

declare
export var C_NUMBER_MODE: hljs$IMode;

declare
export var BINARY_NUMBER_MODE: hljs$IMode;

declare
export var CSS_NUMBER_MODE: hljs$IMode;

declare
export var REGEX_MODE: hljs$IMode;

declare
export var TITLE_MODE: hljs$IMode;

declare
export var UNDERSCORE_TITLE_MODE: hljs$IMode;

declare
export interface hljs$IHighlightResultBase {
    relevance: number,
        language: string,
        value: string
}

declare
export type hljs$IAutoHighlightResult = {
    second_best?: hljs$IAutoHighlightResult
} & hljs$IHighlightResultBase


declare
export type hljs$IHighlightResult = {
    top: hljs$ICompiledMode
} & hljs$IHighlightResultBase


declare
export interface hljs$HLJSStatic {
    inherit(parent: Object, obj: Object): Object,
        IDENT_RE: string,
        UNDERSCORE_IDENT_RE: string,
        NUMBER_RE: string,
        C_NUMBER_RE: string,
        BINARY_NUMBER_RE: string,
        RE_STARTERS_RE: string,
        BACKSLASH_ESCAPE: hljs$IMode,
        APOS_STRING_MODE: hljs$IMode,
        QUOTE_STRING_MODE: hljs$IMode,
        PHRASAL_WORDS_MODE: hljs$IMode,
        C_LINE_COMMENT_MODE: hljs$IMode,
        C_BLOCK_COMMENT_MODE: hljs$IMode,
        HASH_COMMENT_MODE: hljs$IMode,
        NUMBER_MODE: hljs$IMode,
        C_NUMBER_MODE: hljs$IMode,
        BINARY_NUMBER_MODE: hljs$IMode,
        CSS_NUMBER_MODE: hljs$IMode,
        REGEX_MODE: hljs$IMode,
        TITLE_MODE: hljs$IMode,
        UNDERSCORE_TITLE_MODE: hljs$IMode
}

declare
export interface hljs$IModeBase {
    className?: string,
        aliases?: string[],
        begin?: (string | RegExp),
        end?: (string | RegExp),
        case_insensitive?: boolean,
        beginKeyword?: string,
        endsWithParent?: boolean,
        lexems?: string,
        illegal?: string,
        excludeBegin?: boolean,
        excludeEnd?: boolean,
        returnBegin?: boolean,
        returnEnd?: boolean,
        starts?: string,
        subLanguage?: string,
        subLanguageMode?: string,
        relevance?: number,
        variants?: hljs$IMode[]
}

declare
export type hljs$IMode = {
    keywords?: any,
    contains?: hljs$IMode[]
} & hljs$IModeBase


declare
export type hljs$ICompiledMode = {
    compiled: boolean,
    contains?: hljs$ICompiledMode[],
    keywords?: Object,
    terminators: RegExp,
    terminator_end?: string
} & hljs$IModeBase


declare
export interface hljs$IOptions {
    classPrefix?: string,
        tabReplace?: string,
        useBR?: boolean,
        languages?: string[]
}
/**
 * Flowtype definitions for xJSFL
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface _xjsfl {
    init(_this: any): void,
        uri: string
}
declare class _File {
    constructor(path: string): this;
    copy(path: string): _File;
    write(data: string): _File;
    contents: string
}
declare class _Folder {
    constructor(path: string): this;
    contents: _File[]
}
declare class _Context {
    create(): _Context;
    from(frame: FlashFrame): _Context;
    layer: FlashLayer;
    frame: FlashFrame;
    keyframes: FlashFrame[];
    elements: FlashElement[];
    setLayer(index: number): void;
    update(): void;
    goto(): void
}
declare interface GenericCollection<T>{
    elements: T[],
    rename(pattern: string): GenericCollection<T>,
    update(): GenericCollection<T>,
    select(): GenericCollection<T>,
    toGrid(x: number, y: number): GenericCollection<T>,
    randomize(info: any): GenericCollection<T>,
    each(callback: (element: T, index?: number, elements?: T[]) => void): void
}
declare type ElementCollection = {} & GenericCollection
declare type ItemCollection = {} & GenericCollection
declare class _URI {
    constructor(path: string): this;
    uri: string;
    folder: string;
    name: string;
    extension: string;
    path: string;
    type: string;
    toURI(string: string): string
}
declare
var xjsfl: _xjsfl;
declare
var $dom: FlashDocument;
declare
var $timeline: FlashTimeline;
declare
var $library: FlashLibrary;
declare
var $selection: FlashElement[];
declare
function trace(...args: any[]): voiddeclare
function clear(): voiddeclare
function format(format: string, ...params: any[]): voiddeclare
function inspect(item: any): voiddeclare
function list(item: any): voiddeclare
function debug(item: any): voiddeclare
function include(className: string): voiddeclare
function require(className: string): voiddeclare
function load(filePath: string): stringdeclare
function save(filePath: string, data: string): voiddeclare
function $(selector: string): ElementCollectiondeclare
function $$(selector: string): ItemCollection
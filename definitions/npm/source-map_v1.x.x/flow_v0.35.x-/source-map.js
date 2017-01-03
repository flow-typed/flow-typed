/**
 * Flowtype definitions for source-map
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface SourceMap$StartOfSourceMap {
    file?: string,
        sourceRoot?: string
}

declare type SourceMap$RawSourceMap = {
    version: string,
    sources: Array<string>,
    names: Array<string>,
    sourcesContent?: string[],
    mappings: string
} & SourceMap$StartOfSourceMap


declare interface SourceMap$Position {
    line: number,
        column: number
}

declare type SourceMap$MappedPosition = {
    source: string,
    name?: string
} & SourceMap$Position


declare interface SourceMap$MappingItem {
    source: string,
        generatedLine: number,
        generatedColumn: number,
        originalLine: number,
        originalColumn: number,
        name: string
}

declare interface SourceMap$Mapping {
    generated: SourceMap$Position,
        original: SourceMap$Position,
        source: string,
        name?: string
}

declare interface SourceMap$CodeWithSourceMap {
    code: string,
        map: SourceMap$SourceMapGenerator
}

declare class SourceMapConsumer {
    GENERATED_ORDER: number;
    ORIGINAL_ORDER: number;
    constructor(rawSourceMap: SourceMap$RawSourceMap): this;
    originalPositionFor(generatedPosition: SourceMap$Position): SourceMap$MappedPosition;
    generatedPositionFor(originalPosition: SourceMap$MappedPosition): SourceMap$Position;
    sourceContentFor(source: string): string;
    eachMapping(
        callback: (mapping: SourceMap$MappingItem) => void,
        context?: any,
        order?: number): void
}

declare class SourceMapGenerator {
    constructor(startOfSourceMap?: SourceMap$StartOfSourceMap): this;
    fromSourceMap(sourceMapConsumer: SourceMap$SourceMapConsumer): SourceMap$SourceMapGenerator;
    addMapping(mapping: SourceMap$Mapping): void;
    setSourceContent(sourceFile: string, sourceContent: string): void;
    applySourceMap(
        sourceMapConsumer: SourceMap$SourceMapConsumer,
        sourceFile?: string,
        sourceMapPath?: string): void;
    toString(): string;
    toJSON(): SourceMap$RawSourceMap
}

declare class SourceNode {
    constructor(): this;
    constructor(line: number, column: number, source: string): this;
    constructor(line: number, column: number, source: string, chunk?: string, name?: string): this;
    fromStringWithSourceMap(
        code: string,
        sourceMapConsumer: SourceMap$SourceMapConsumer,
        relativePath?: string): SourceMap$SourceNode;
    add(chunk: any): SourceMap$SourceNode;
    prepend(chunk: any): SourceMap$SourceNode;
    setSourceContent(sourceFile: string, sourceContent: string): void;
    walk(fn: (chunk: string, mapping: SourceMap$MappedPosition) => void): void;
    walkSourceContents(fn: (file: string, content: string) => void): void;
    join(sep: string): SourceMap$SourceNode;
    replaceRight(pattern: string, replacement: string): SourceMap$SourceNode;
    toString(): string;
    toStringWithSourceMap(startOfSourceMap?: SourceMap$StartOfSourceMap): SourceMap$CodeWithSourceMap
}
declare module 'source-map' {
    declare module.exports: typeof SourceMap
}
/* @flow */

declare module "magic-string" {
  declare type SourceMapOptions = {
    file?: string;
    source?: string;
    includeContent?: boolean;
    hires?: boolean;
  };

  declare class SourceMap {
    version: number;
    file: ?string;
    sources: Array<?string>;
    sourcesContent: Array<?string>;
    names: Array<string>;
    mappings: string;
  }

  declare type SourceMapOffsets = {
    sourceIndex?: number;
    sourceCodeLine?: number;
    sourceCodeColumn?: number;
    sourceCodeName?: number;
  };

  declare type IndentOptions = {
    exclude?: number | Array<number>;
    indentStart?: boolean;
  };

  declare class MagicString {
    addSourcemapLocation(char: number): void;
    append(content: string): MagicString;
    clone(): MagicString;
    generateMap(options: SourceMapOptions): SourceMap;
    getIndentString(): string;
    getMappings(hires: boolean, sourceIndex: number, offsets: SourceMapOffsets): string;
    indent(indentStr: string, options?: IndentOptions): MagicString;
    insertLeft(index: number, content: string): MagicString;
    insertRight(index: number, content: string): MagicString;
    move(start: number, end: number, index: number): MagicString;
    overwrite(start: number, end: number, content: string, storeName?: string): MagicString;
    prepend(content: string): MagicString;
    remove(start: number, end: number): MagicString;
    slice(start?: number, end?: number): MagicString;
    snip(start: number, end: number): MagicString;
    toString(): string;
    trimLines(): MagicString;
    trim(charType: string): MagicString;
    trimEnd(charType: string): MagicString;
    trimStart(charType: string): MagicString;
    static Bundle: Class<Bundle>;
  }

  declare type Source = {
    content: MagicString;
    filename?: string;
    separator?: string;
  };

  declare class Bundle {
    addSource(source: MagicString | Source): Bundle;
    append(str: string, options?: { separator?: string }): Bundle;
    clone(): Bundle;
    generateMap(options: SourceMapOptions): SourceMap;
    getIndentString(): string;
    indent(indentStr?: string): Bundle;
    prepend(str: string): Bundle;
    toString(): string;
    trimLines(): Bundle;
    trim(charType: string): Bundle;
    trimEnd(charType: string): Bundle;
    trimStart(charType: string): Bundle;
  }

  declare var exports: Class<MagicString>;
}

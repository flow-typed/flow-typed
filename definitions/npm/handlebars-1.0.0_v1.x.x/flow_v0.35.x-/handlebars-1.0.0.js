// @flow
/**
 * Flowtype definitions for handlebars-1.0.0
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare var Handlebars: HandlebarsStatic;
/**
 * Implement this interface on your MVW/MVVM/MVC views such as Backbone.View
 */
declare interface HandlebarsTemplatable {
    template: HandlebarsTemplateDelegate
}
declare interface HandlebarsTemplateDelegate {
    (context: any, options?: any): string
}
declare interface HandlebarsCommon {
    registerHelper(name: string, fn: Function, inverse?: boolean): void,
        registerPartial(name: string, str: any): void,
        K(): void,
        createFrame(object: any): any,
        Exception(message: string): void,
        SafeString: typeof undefined,
        Utils: typeof undefined,
        logger: Logger,
        log(level: number, obj: any): void
}
declare type HandlebarsStatic = {
    parse(input: string): undefined.ProgramNode,
    compile(input: any, options?: any): HandlebarsTemplateDelegate
} & HandlebarsCommon
declare interface HandlebarsTemplates {
    [index: string]: HandlebarsTemplateDelegate
}
declare type HandlebarsRuntimeStatic = {
    templates: HandlebarsTemplates
} & HandlebarsCommon
declare interface AST$IStripInfo {
    left?: boolean,
        right?: boolean,
        inlineStandalone?: boolean
}

declare class NodeBase {
    firstColumn: number;
    firstLine: number;
    lastColumn: number;
    lastLine: number;
    type: string
}

declare class ProgramNode mixins NodeBase {
    statements: AST$NodeBase[]
}

declare class IdNode mixins NodeBase {
    original: string;
    parts: string[];
    string: string;
    depth: number;
    idName: string;
    isSimple: boolean;
    stringModeValue: string
}

declare class HashNode mixins NodeBase {
    pairs: {
        0: string,
        1: AST$NodeBase
    }[]
}

declare class SexprNode mixins NodeBase {
    hash: AST$HashNode;
    id: AST$NodeBase;
    params: AST$NodeBase[];
    isHelper: boolean;
    eligibleHelper: boolean
}

declare class MustacheNode mixins NodeBase {
    strip: AST$IStripInfo;
    escaped: boolean;
    sexpr: AST$SexprNode
}

declare class BlockNode mixins NodeBase {
    mustache: AST$MustacheNode;
    program: AST$ProgramNode;
    inverse: AST$ProgramNode;
    strip: AST$IStripInfo;
    isInverse: boolean
}

declare class PartialNameNode mixins NodeBase {
    name: string
}

declare class PartialNode mixins NodeBase {
    partialName: AST$PartialNameNode;
    context: AST$NodeBase;
    hash: AST$HashNode;
    strip: AST$IStripInfo
}

declare class RawBlockNode mixins NodeBase {
    mustache: AST$MustacheNode;
    program: AST$ProgramNode
}

declare class ContentNode mixins NodeBase {
    original: string;
    string: string
}

declare class DataNode mixins NodeBase {
    id: AST$IdNode;
    stringModeValue: string;
    idName: string
}

declare class StringNode mixins NodeBase {
    original: string;
    string: string;
    stringModeValue: string
}

declare class NumberNode mixins NodeBase {
    original: string;
    number: string;
    stringModeValue: number
}

declare class BooleanNode mixins NodeBase {
    bool: string;
    stringModeValue: boolean
}

declare class CommentNode mixins NodeBase {
    comment: string;
    strip: AST$IStripInfo
}
declare interface Logger {
    DEBUG: number,
        INFO: number,
        WARN: number,
        ERROR: number,
        level: number,
        methodMap: {
            [level: number]: string
        },
        log(level: number, obj: string): void
}
declare module 'handlebars' {
    declare module.exports: typeof Handlebars
}
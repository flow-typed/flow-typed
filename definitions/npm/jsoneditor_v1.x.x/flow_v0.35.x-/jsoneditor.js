/**
 * Flowtype definitions for jsoneditor
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'jsoneditor' {
    declare export interface JSONEditorNode {
        field: string,
            value: string,
            path: Array<string >
    }
    declare export type JSONEditorMode = "tree" |
        "view" |
        "form" |
        "code" |
        "text";
    declare export interface JSONEditorOptions {
        ace?: AceAjax.Ace,
            ajv?: any,
            onChange?: () => void,
            onEditable?: (node: JSONEditorNode) => boolean | {
                field: boolean,
                value: boolean
            },
            onError?: (error: Error) => void,
            onModeChange?: (newMode: JSONEditorMode, oldMode: JSONEditorMode) => void,
            escapeUnicode?: boolean,
            sortObjectKeys?: boolean,
            history?: boolean,
            mode?: JSONEditorMode,
            modes?: Array<JSONEditorMode>,
            name?: string,
            schema?: Object,
            search?: boolean,
            indentation?: number,
            theme?: string
    }
    declare export default class JSONEditor {
        constructor(container: HTMLElement, options?: JSONEditorOptions, json?: Object): this;
        collapseAll(): void;
        destroy(): void;
        expandAll(): void;
        focus(): void;
        set(json: Object): void;
        setMode(mode: JSONEditorMode): void;
        setName(name?: string): void;
        setSchema(schema: Object): void;
        setText(jsonString: string): void;
        get(): any;
        getMode(): JSONEditorMode;
        getName(): string;
        getText(): string
    }
}
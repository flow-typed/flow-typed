/**
 * Flowtype definitions for codemirror-showhint
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$CodeMirror: {
    showHint: typeof CodeMirror$showHint,
}
declare var commands: any;


/**
 * Provides a framework for showing autocompletion hints. Defines editor.showHint, which takes an optional
 * options object, and pops up a widget that allows the user to select a completion. Finding hints is done with
ahinting functions (the hint option), which is a function that take an editor instance and options object,
andreturn a {list, from, to} object, where list is an array of strings or objects (the completions), and
from and to give the start and end of the token that is being completed as {line, ch} objects. An optional
selectedHint property (an integer) can be added to the completion object to control the initially selected hint. 
*/
declare function CodeMirror$showHint(
    cm: CodeMirror$Doc,
    hinter?: (doc: CodeMirror$Doc) => CodeMirror$Hints,
    options?: CodeMirror$ShowHintOptions): void

declare interface CodeMirror$Hints {
    from: Position,
        to: Position,
        list: (CodeMirror$Hint | string)[]
}


/**
 * Interface used by showHint.js Codemirror add-on
 * When completions aren't simple strings, they should be objects with the following properties: 
 */
declare interface CodeMirror$Hint {
    text: string,
        className?: string,
        displayText?: string,
        from?: Position,

        /**
         * Called if a completion is picked. If provided you are responsible for applying the completion 
         */
        hint?: (cm: any, data: CodeMirror$Hints, cur: CodeMirror$Hint) => void,
        render?: (element: HTMLLIElement, data: CodeMirror$Hints, cur: CodeMirror$Hint) => void,
        to?: Position
}

declare interface CodeMirror$Editor {

    /**
     * An extension of the existing CodeMirror typings for the Editor.on("keyup", func) syntax 
     */
    on(eventName: string, handler: (doc: CodeMirror$Doc, event: any) => void): void,
        off(eventName: string, handler: (doc: CodeMirror$Doc, event: any) => void): void
}

declare interface CodeMirror$Doc {
    showHint: (options: CodeMirror$ShowHintOptions) => void
}

declare interface CodeMirror$ShowHintOptions {
    completeSingle: boolean,
        hint: (doc: CodeMirror$Doc) => CodeMirror$Hints
}


/**
 * The Handle used to interact with the autocomplete dialog box.
 */
declare interface CodeMirror$Handle {
    moveFocus(n: number, avoidWrap: boolean): void,
        setFocus(n: number): void,
        menuSize(): number,
        length: number,
        close(): void,
        pick(): void,
        data: any
}

declare interface CodeMirror$EditorConfiguration {
    showHint?: boolean,
        hintOptions?: CodeMirror$ShowHintOptions
}
declare module 'codemirror/addon/hint/show-hint' {
    declare module.exports: typeof CodeMirror
}
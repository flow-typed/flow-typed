/**
 * Flowtype definitions for atom-keymap
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type AtomKeymap$Disposable = AtomEventKit.Disposable;


/**
 * Instance side of KeyBinding class. 
 */
declare interface AtomKeymap$KeyBinding {
    enabled: boolean,
        source: string,
        command: string,
        keystrokes: string,
        keystrokeCount: number,
        selector: string,
        specificity: number,
        matches(keystroke: string): boolean,
        compare(keyBinding: AtomKeymap$KeyBinding): number
}

declare interface AtomKeymap$ICompleteMatchEvent {

    /**
     * Keystrokes that matched the binding. 
     */
    keystrokes: string,

        /**
         * Binding that was matched to the keystrokes. 
         */
        binding: AtomKeymap$KeyBinding,

        /**
         * DOM element that was the target of the most recent `KeyboardEvent`. 
         */
        keyboardEventTarget: Element
}

declare interface AtomKeymap$IPartialMatchEvent {

    /**
     * Keystrokes that matched the binding. 
     */
    keystrokes: string,

        /**
         * Bindings that were partially matched to the keystrokes. 
         */
        partiallyMatchedBindings: AtomKeymap$KeyBinding[],

        /**
         * DOM element that was the target of the most recent `KeyboardEvent`. 
         */
        keyboardEventTarget: Element
}

declare interface AtomKeymap$IFailedMatchEvent {

    /**
     * Keystrokes that failed to match a binding. 
     */
    keystrokes: string,

        /**
         * DOM element that was the target of the most recent `KeyboardEvent`. 
         */
        keyboardEventTarget: Element
}

declare interface AtomKeymap$IKeymapLoadEvent {

    /**
     * Path to a keymap file. 
     */
    path: string
}


/**
 * Static side of KeymapManager class. 
 */
declare interface AtomKeymap$KeymapManagerStatic {
    prototype: AtomKeymap$KeymapManager,
        new(options?: {
            defaultTarget?: Element
        }): AtomKeymap$KeymapManager
}


/**
 * Instance side of KeymapManager class. 
 */
declare interface AtomKeymap$KeymapManager {
    constructor: AtomKeymap$KeymapManagerStatic,

        /**
         * Unwatches all watched paths. 
         */
        destroy(): void,

        /**
         * Sets callback to invoke when one or more keystrokes completely match a key binding. 
         */
        onDidMatchBinding(
            callback: (event: AtomKeymap$ICompleteMatchEvent) => void): AtomKeymap$Disposable,

        /**
         * Sets callback to invoke when one or more keystrokes partially match a binding. 
         */
        onDidPartiallyMatchBindings(
            callback: (event: AtomKeymap$IPartialMatchEvent) => void): AtomKeymap$Disposable,

        /**
         * Sets callback to invoke when one or more keystrokes fail to match any bindings. 
         */
        onDidFailToMatchBinding(callback: (event: AtomKeymap$IFailedMatchEvent) => void): AtomKeymap$Disposable,

        /**
         * Sets callback to invoke when a keymap file is reloaded. 
         */
        onDidReloadKeymap(callback: (event: AtomKeymap$IKeymapLoadEvent) => void): AtomKeymap$Disposable,

        /**
         * Sets callback to invoke when a keymap file is unloaded. 
         */
        onDidUnloadKeymap(callback: (event: AtomKeymap$IKeymapLoadEvent) => void): AtomKeymap$Disposable,

        /**
         * Sets callback to invoke when a keymap file could not to be loaded. 
         */
        onDidFailToReadFile(callback: (error: Error) => void): AtomKeymap$Disposable,

        /**
         * Adds sets of key bindings grouped by CSS selector. 
         */
        add(source: string, keyBindingsBySelector: any): AtomKeymap$Disposable,
        getKeyBindings(): AtomKeymap$KeyBinding[],
        findKeyBindings(
            params?: {
                keystrokes: string,
                command: string,
                target?: Element
            }): AtomKeymap$KeyBinding[],

        /**
         * Loads the key bindings from the given path.
         * @param bindingsPath A path to a file or a directory. If the path is a directory all files
        inside it will be loaded.
        */
        loadKeymap(bindingsPath: string, options?: {
            watch: boolean
        }): void,

        /**
         * Starts watching the given file/directory for changes, reloading any keymaps at that location
         * when changes are detected.
         * @param filePath A path to a file or a directory.
         */
        watchKeymap(filePath: string): void,

        /**
         * Dispatches a custom event associated with the matching key binding for the given
         * `KeyboardEvent` if one can be found.
         */
        handleKeyboardEvent(event: KeyboardEvent): void,

        /**
         * Translates a keydown event to a keystroke string. 
         */
        keystrokeForKeyboardEvent(event: KeyboardEvent): string,

        /**
         * 
         * @return  The number of milliseconds allowed before pending states caused by partial matches of
        multi-keystroke bindings are terminated.
        */
        getPartialMatchTimeout(): number
}

declare
var KeymapManager: AtomKeymap$KeymapManagerStatic;
declare module 'atom-keymap' {
    declare module.exports: typeof AtomKeymap
}
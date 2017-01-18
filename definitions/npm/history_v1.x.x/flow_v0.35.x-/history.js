/**
 * Flowtype definitions for history
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type HistoryModule$Action = string;

declare type HistoryModule$BeforeUnloadHook = () => string | boolean;

declare type HistoryModule$CreateHistory<T>= (options?: HistoryModule$HistoryOptions) => T;

declare type HistoryModule$CreateHistoryEnhancer<T, E>= (
    createHistory: HistoryModule$CreateHistory<T>) => HistoryModule$CreateHistory<T & E>;

declare interface HistoryModule$History {
    listenBefore(hook: HistoryModule$TransitionHook): () => void,
        listen(listener: HistoryModule$LocationListener): () => void,
        transitionTo(location: HistoryModule$Location): void,
        push(path: HistoryModule$LocationDescriptor): void,
        replace(path: HistoryModule$LocationDescriptor): void,
        go(n: number): void,
        goBack(): void,
        goForward(): void,
        createKey(): HistoryModule$LocationKey,
        createPath(path: HistoryModule$LocationDescriptor): HistoryModule$Path,
        createHref(path: HistoryModule$LocationDescriptor): HistoryModule$Href,
        createLocation(
            path?: HistoryModule$LocationDescriptor,
            action?: HistoryModule$Action,
            key?: HistoryModule$LocationKey): HistoryModule$Location,
        getCurrentLocation: () => HistoryModule$Location,

        /**
         * 
         * @deprecated  use a location descriptor instead 
         */
        createLocation(
            path?: HistoryModule$Path,
            state?: HistoryModule$LocationState,
            action?: HistoryModule$Action,
            key?: HistoryModule$LocationKey): HistoryModule$Location,

        /**
         * 
         * @deprecated  use location.key to save state instead 
         */
        pushState(state: HistoryModule$LocationState, path: HistoryModule$Path): void,

        /**
         * 
         * @deprecated  use location.key to save state instead 
         */
        replaceState(state: HistoryModule$LocationState, path: HistoryModule$Path): void,

        /**
         * 
         * @deprecated  use location.key to save state instead 
         */
        setState(state: HistoryModule$LocationState): void,

        /**
         * 
         * @deprecated  use listenBefore instead 
         */
        registerTransitionHook(hook: HistoryModule$TransitionHook): void,

        /**
         * 
         * @deprecated  use the callback returned from listenBefore instead 
         */
        unregisterTransitionHook(hook: HistoryModule$TransitionHook): void
}

declare type HistoryModule$HistoryOptions = {
    getCurrentLocation?: () => HistoryModule$Location,
    finishTransition?: (nextLocation: HistoryModule$Location) => boolean,
    saveState?: (key: HistoryModule$LocationKey, state: HistoryModule$LocationState) => void,
    go?: (n: number) => void,
    getUserConfirmation?: (message: string, callback: (result: boolean) => void) => void,
    keyLength?: number,
    queryKey?: string | boolean,
    stringifyQuery?: (obj: any) => string,
    parseQueryString?: (str: string) => any,
    basename?: string,
    entries?: string | [any],
    current?: number
};

declare type HistoryModule$Href = string;

declare type HistoryModule$Location = {
    pathname: HistoryModule$Pathname,
    search: HistoryModule$Search,
    query: HistoryModule$Query,
    state: HistoryModule$LocationState,
    action: HistoryModule$Action,
    key: HistoryModule$LocationKey,
    hash: HistoryModule$Hash,
    basename?: string
};

declare type HistoryModule$LocationDescriptorObject = {
    pathname?: HistoryModule$Pathname,
    search?: HistoryModule$Search,
    query?: HistoryModule$Query,
    state?: HistoryModule$LocationState
};

declare type HistoryModule$LocationDescriptor = HistoryModule$LocationDescriptorObject | HistoryModule$Path;

declare type HistoryModule$LocationKey = string;

declare type HistoryModule$LocationListener = (location: HistoryModule$Location) => void;

declare type HistoryModule$LocationState = Object;

declare type HistoryModule$Path = string;

declare type HistoryModule$Pathname = string;

declare type HistoryModule$Query = {
    [key: string]: any
};

declare type HistoryModule$QueryString = string;

declare type HistoryModule$Search = string;

declare type HistoryModule$TransitionHook = (location: HistoryModule$Location, callback: (result: any) => void) => any;

declare type HistoryModule$Hash = string;

declare interface HistoryModule$HistoryBeforeUnload {
    listenBeforeUnload(hook: HistoryModule$BeforeUnloadHook): () => void
}

declare interface HistoryModule$HistoryQueries {
    pushState(
            state: HistoryModule$LocationState,
            pathname: HistoryModule$Pathname | HistoryModule$Path,
            query?: HistoryModule$Query): void,
        replaceState(
            state: HistoryModule$LocationState,
            pathname: HistoryModule$Pathname | HistoryModule$Path,
            query?: HistoryModule$Query): void,
        createPath(path: HistoryModule$Path, query?: HistoryModule$Query): HistoryModule$Path,
        createHref(path: HistoryModule$Path, query?: HistoryModule$Query): HistoryModule$Href
}

declare interface HistoryModule$Module {
    createHistory: HistoryModule$CreateHistory<HistoryModule$History>,
        createHashHistory: HistoryModule$CreateHistory<HistoryModule$History>,
        createMemoryHistory: HistoryModule$CreateHistory<HistoryModule$History>,
        createLocation(
            path?: HistoryModule$Path,
            state?: HistoryModule$LocationState,
            action?: HistoryModule$Action,
            key?: HistoryModule$LocationKey): HistoryModule$Location,
        useBasename<T>(
            createHistory: HistoryModule$CreateHistory<T>): HistoryModule$CreateHistory<T>,
        useBeforeUnload<T>(
            createHistory: HistoryModule$CreateHistory<T>): HistoryModule$CreateHistory<T & HistoryModule$HistoryBeforeUnload>,
        useQueries<T>(
            createHistory: HistoryModule$CreateHistory<T>): HistoryModule$CreateHistory<T & HistoryModule$HistoryQueries>,
        actions: {
            PUSH: string,
            REPLACE: string,
            POP: string
        }
}
declare module 'history/lib/createBrowserHistory' {
    declare export default function createBrowserHistory(options?: HistoryModule$HistoryOptions): HistoryModule$History
}
declare module 'history/lib/createHashHistory' {
    declare export default function createHashHistory(options?: HistoryModule$HistoryOptions): HistoryModule$History
}
declare module 'history/lib/createMemoryHistory' {
    declare export default function createMemoryHistory(options?: HistoryModule$HistoryOptions): HistoryModule$History
}
declare module 'history/lib/createLocation' {
    declare export default function createLocation(
        path?: HistoryModule$Path,
        state?: HistoryModule$LocationState,
        action?: HistoryModule$Action,
        key?: HistoryModule$LocationKey): HistoryModule$Location
}
declare module 'history/lib/useBasename' {
    declare export default function useBasename<T>(
        createHistory: HistoryModule$CreateHistory<T>): HistoryModule$CreateHistory<T >
}
declare module 'history/lib/useBeforeUnload' {
    declare export default function useBeforeUnload<T>(
        createHistory: HistoryModule$CreateHistory<T>): HistoryModule$CreateHistory<T & HistoryModule$HistoryBeforeUnload >
}
declare module 'history/lib/useQueries' {
    declare export default function useQueries<T>(
        createHistory: HistoryModule$CreateHistory<T>): HistoryModule$CreateHistory<T & HistoryModule$HistoryQueries >
}
declare module 'history/lib/actions' {
    declare export var PUSH: string;
    declare export var REPLACE: string;
    declare export var POP: string;
    declare module.exports: typeof NO PRINT IMPLEMENTED: ObjectLiteralExpression
}
declare module 'history/lib/DOMUtils' {
    declare export function addEventListener(
        node: EventTarget,
        event: string,
        listener: EventListenerOrEventListenerObject): void
    declare export function removeEventListener(
        node: EventTarget,
        event: string,
        listener: EventListenerOrEventListenerObject): void
    declare export function getHashPath(): string
    declare export function replaceHashPath(path: string): void
    declare export function getWindowPath(): string
    declare export function go(n: number): void
    declare export function getUserConfirmation(message: string, callback: (result: boolean) => void): void
    declare export function supportsHistory(): boolean
    declare export function supportsGoWithoutReloadUsingHash(): boolean
}
declare module 'history' {

}
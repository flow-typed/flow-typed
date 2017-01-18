/**
 * Flowtype definitions for mobservable
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface _IMobservableStatic {

    /**
     * Turns an object, array or function into a reactive structure.
     * @param value the value which should become observable.
     */
    makeReactive: IMakeReactive,

        /**
         * Extends an object with reactive capabilities.
         * @param target the object to which reactive properties should be added
         * @param properties the properties that should be added and made reactive
         * @returns  targer
         */
        extendReactive(target: Object, properties: Object): Object,

        /**
         * Returns true if the provided value is reactive.
         * @param value object, function or array
         * @param propertyName if propertyName is specified, checkes whether value.propertyName is reactive.
         */
        isReactive(value: any, propertyName?: string): boolean,

        /**
         * Can be used in combination with makeReactive / extendReactive.
         * Enforces that a reference to 'value' is stored as property,
        but that 'value' itself is not turned into something reactive.
        Future assignments to the same property will inherit this behavior.
         * @param value initial value of the reactive property that is being defined.
        */
        asReference<T>(value: any): {
            value: T
        },

        /**
         * ES6 / Typescript decorator which can to make class properties and getter functions reactive.
         */
        observable(target: Object, key: string): any,

        /**
         * Creates a reactive view and keeps it alive, so that the view is always
         * updated if one of the dependencies changes, even when the view is not further used by something else.
         * @param func The reactive view
         * @param scope (optional)
         * @returns  disposer function, which can be used to stop the view from being updated in the future.
         */
        observe(func: Mobservable$Lambda, scope?: any): Mobservable$Lambda,

        /**
         * Deprecated, use mobservable.observe instead.
         */
        sideEffect(func: Mobservable$Lambda, scope?: any): Mobservable$Lambda,

        /**
         * Similar to 'observer', observes the given predicate until it returns true.
         * Once it returns true, the 'effect' function is invoked an the observation is cancelled.
         * @param predicate 
         * @param effect 
         * @param scope (optional)
         * @returns  disposer function to prematurely end the observer.
         */
        observeUntil(
            predicate: () => boolean,
            effect: Mobservable$Lambda,
            scope?: any): Mobservable$Lambda,

        /**
         * During a transaction no views are updated until the end of the transaction.
         * The transaction will be run synchronously nonetheless.
         * @param action a function that updates some reactive state
         * @returns  any value that was returned by the 'action' parameter.
         */
        transaction<T>(action: () => T): T,

        /**
         * Converts a reactive structure into a non-reactive structure.
         * Basically a deep-clone.
         */
        toJSON<T>(value: T): T,

        /**
         * Sets the reporting level Defaults to 1. Use 0 for production or 2 for increased verbosity.
         */
        logLevel: number,
        extras: {
            getDependencyTree(thing: any, property?: string): Mobservable$IDependencyTree,
            getObserverTree(thing: any, property?: string): Mobservable$IObserverTree,
            trackTransitions(
                extensive?: boolean,
                onReport?: (lines: Mobservable$ITransitionEvent) => void): Mobservable$Lambda
        }
}
declare interface IMakeReactive {
    (value: T[], opts?: Mobservable$IMakeReactiveOptions): Mobservable$IObservableArray<T>,
        (value: () => T, opts?: Mobservable$IMakeReactiveOptions): Mobservable$IObservableValue<T>,
        (value: T, opts?: Mobservable$IMakeReactiveOptions): Mobservable$IObservableValue<T>,
        (value: Object, opts?: Mobservable$IMakeReactiveOptions): T
}
declare type IMobservableStatic = {} & _IMobservableStatic & IMakeReactive
declare interface Mobservable$IMakeReactiveOptions {
    as?: string,
        scope?: Object,
        context?: Object,
        recurse?: boolean,
        name?: string
}

declare export interface Mobservable$IContextInfoStruct {
    object: Object,
        name: string
}

declare export type Mobservable$IContextInfo = Mobservable$IContextInfoStruct | string;

declare interface Mobservable$Lambda {
    (): void,
    name?: string
}

declare interface Mobservable$IObservable {
    observe(
        callback: (...args: any[]) => void,
        fireImmediately?: boolean): Mobservable$Lambda
}

declare type Mobservable$IObservableValue<T>= {
    (): T,
    (value: T): void,
    observe(
        callback: (newValue: T, oldValue: T) => void,
        fireImmediately?: boolean): Mobservable$Lambda
} & Mobservable$IObservable


declare type Mobservable$IObservableArray<T>= {
    spliceWithArray(index: number, deleteCount?: number, newItems?: T[]): T[],
    observe(
        listener: (changeData: Mobservable$IArrayChange<T>| Mobservable$IArraySplice<T>) => void,
        fireImmediately?: boolean): Mobservable$Lambda,
    clear(): T[],
    replace(newItems: T[]): T[],
    find(
        predicate: (item: T, index: number, array: Mobservable$IObservableArray<T>) => boolean,
        thisArg?: any,
        fromIndex?: number): T,
    remove(value: T): boolean
} & Mobservable$IObservable & Array


declare interface Mobservable$IArrayChange<T>{
    type: string,
    object: Mobservable$IObservableArray<T>,
    index: number,
    oldValue: T
}

declare interface Mobservable$IArraySplice<T>{
    type: string,
    object: Mobservable$IObservableArray<T>,
    index: number,
    removed: T[],
    addedCount: number
}

declare interface Mobservable$IDependencyTree {
    id: number,
        name: string,
        context: any,
        dependencies?: Mobservable$IDependencyTree[]
}

declare interface Mobservable$IObserverTree {
    id: number,
        name: string,
        context: any,
        observers?: Mobservable$IObserverTree[],
        listeners?: number
}

declare interface Mobservable$ITransitionEvent {
    id: number,
        name: string,
        context: Object,
        state: string,
        changed: boolean,
        newValue: string
}
declare module 'mobservable' {
    declare var m: IMobservableStatic;
    declare module.exports: typeof m
}
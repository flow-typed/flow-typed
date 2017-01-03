/**
 * Flowtype definitions for dexie
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Thenable<R>{
    then<U>(
        onFulfilled: (value: R) => Thenable<U>,
        onRejected: (error: any) => Thenable<U>): Thenable<U>,
    then<U>(
        onFulfilled: (value: R) => Thenable<U>,
        onRejected?: (error: any) => U): Thenable<U>,
    then<U>(
        onFulfilled: (value: R) => U,
        onRejected: (error: any) => Thenable<U>): Thenable<U>,
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Thenable<U >
}
declare type IndexableType = string | number | Date | Array<string | number | Date>;
declare module.exports: typeof Dexiedeclare class Promise<R>mixins Thenable<R>{
    constructor(callback: (resolve: (value?: Thenable<R>) => void, reject: (error?: any) => void) => void): this;
    constructor(callback: (resolve: (value?: R) => void, reject: (error?: any) => void) => void): this;
    then<U>(
        onFulfilled: (value: R) => Thenable<U>,
        onRejected: (error: any) => Thenable<U>): Dexie$Promise<U>;
    then<U>(
        onFulfilled: (value: R) => Thenable<U>,
        onRejected?: (error: any) => U): Dexie$Promise<U>;
    then<U>(
        onFulfilled: (value: R) => U,
        onRejected: (error: any) => Thenable<U>): Dexie$Promise<U>;
    then<U>(
        onFulfilled?: (value: R) => U,
        onRejected?: (error: any) => U): Dexie$Promise<U>;
    catch<U>(onRejected: (error: any) => Thenable<U>): Dexie$Promise<U>;
    catch<U>(onRejected: (error: any) => U): Dexie$Promise<U>;
    catch<U>(
        ExceptionType: Function,
        onRejected: (error: any) => Dexie$Promise<U>): Dexie$Promise<U>;
    catch<U>(ExceptionType: Function, onRejected: (error: any) => U): Dexie$Promise<U>;
    catch<U>(
        errorName: string,
        onRejected: (error: any) => Dexie$Promise<U>): Dexie$Promise<U>;
    catch<U>(errorName: string, onRejected: (error: any) => U): Dexie$Promise<U>;
    finally<R>(onFinally: () => any): Dexie$Promise<R>;
    onuncatched: () => any
}


declare
var npm$namespace$Promise: {
    resolve: typeof Promise$resolve,
    reject: typeof Promise$reject,
    all: typeof Promise$all,
    race: typeof Promise$race,
    newPSD: typeof Promise$newPSD,
}
declare
function Promise$resolve<R>(value?: Thenable<R>): Dexie$Promise<R >

    declare
function Promise$reject(error: any): Dexie$Promise<any >

    declare
function Promise$all<R>(promises: Thenable<R>[]): Dexie$Promise<R[] >

    declare
function Promise$race<R>(promises: Thenable<R>[]): Dexie$Promise<R >

    declare
function Promise$newPSD<R>(scope: () => R): R

declare
var PSD: any;

declare
var on: {
    (eventName: string, subscriber: (...args: any[]) => any): void,
    error: Dexie$DexieErrorEvent
};

declare interface Dexie$Version {
    stores(schema: {
            [key: string]: string
        }): Dexie$Version,
        upgrade(fn: (trans: Dexie$Transaction) => void): Dexie$Version
}

declare interface Dexie$Transaction {
    active: boolean,
        db: Dexie,
        mode: string,
        idbtrans: IDBTransaction,
        tables: {
            [type: string]: Dexie$Table<any,
            any >
        },
        storeNames: Array<string>,
        on: {
            (eventName: string, subscriber: () => any): void,
            complete: Dexie$DexieEvent,
            abort: Dexie$DexieEvent,
            error: Dexie$DexieEvent
        },
        abort(): void,
        table(tableName: string): Dexie$Table<any, any>,
        table<T>(tableName: string): Dexie$Table<T, any>,
        table<T, Key>(tableName: string): Dexie$Table<T, Key >
}

declare interface Dexie$DexieEvent {
    subscribe(fn: () => any): void,
        unsubscribe(fn: () => any): void,
        fire(): any
}

declare interface Dexie$DexieErrorEvent {
    subscribe(fn: (error: any) => any): void,
        unsubscribe(fn: (error: any) => any): void,
        fire(error: any): any
}

declare interface Dexie$DexieVersionChangeEvent {
    subscribe(fn: (event: IDBVersionChangeEvent) => any): void,
        unsubscribe(fn: (event: IDBVersionChangeEvent) => any): void,
        fire(event: IDBVersionChangeEvent): any
}

declare interface Dexie$DexieOnReadyEvent {
    subscribe(fn: () => any, bSticky: boolean): void,
        unsubscribe(fn: () => any): void,
        fire(): any
}

declare interface Dexie$Table<T, Key>{
    name: string,
    schema: Dexie$TableSchema,
    hook: {
        (eventName: string, subscriber: () => any): void,
        creating: Dexie$DexieEvent,
        reading: Dexie$DexieEvent,
        updating: Dexie$DexieEvent,
        deleting: Dexie$DexieEvent
    },
    get(key: Key): Dexie$Promise<T>,
    where(index: string): Dexie$WhereClause<T,
    Key>,
    filter(fn: (obj: T) => boolean): Dexie$Collection<T,
    Key>,
    count(): Dexie$Promise<number>,
    count<U>(onFulfilled: (value: number) => Thenable<U>): Dexie$Promise<U>,
    count<U>(onFulfilled: (value: number) => U): Dexie$Promise<U>,
    offset(n: number): Dexie$Collection<T,
    Key>,
    limit(n: number): Dexie$Collection<T,
    Key>,
    each(callback: (obj: T, cursor: IDBCursor) => any): Dexie$Promise<void>,
    toArray(): Dexie$Promise<Array<T >> ,
    toArray<U>(onFulfilled: (value: Array<T>) => Thenable<U>): Dexie$Promise<U>,
    toArray<U>(onFulfilled: (value: Array<T>) => U): Dexie$Promise<U>,
    toCollection(): Dexie$Collection<T,
    Key>,
    orderBy(index: string): Dexie$Collection<T,
    Key>,
    reverse(): Dexie$Collection<T,
    Key>,
    mapToClass(constructor: Function): Function,
    add(item: T, key?: Key): Dexie$Promise<Key>,
    update(key: Key, changes: {
        [keyPath: string]: any
    }): Dexie$Promise<number>,
    put(item: T, key?: Key): Dexie$Promise<Key>,
    delete(key: Key): Dexie$Promise<void>,
    clear(): Dexie$Promise<void >
}

declare interface Dexie$WhereClause<T, Key>{
    above(key: IndexableType): Dexie$Collection<T,
    Key>,
    aboveOrEqual(key: IndexableType): Dexie$Collection<T,
    Key>,
    anyOf(keys: IndexableType[]): Dexie$Collection<T,
    Key>,
    anyOf(...keys: IndexableType[]): Dexie$Collection<T,
    Key>,
    anyOfIgnoreCase(keys: string[]): Dexie$Collection<T,
    Key>,
    anyOfIgnoreCase(...keys: string[]): Dexie$Collection<T,
    Key>,
    below(key: IndexableType): Dexie$Collection<T,
    Key>,
    belowOrEqual(key: IndexableType): Dexie$Collection<T,
    Key>,
    between(
        lower: IndexableType,
        upper: IndexableType,
        includeLower?: boolean,
        includeUpper?: boolean): Dexie$Collection<T,
    Key>,
    equals(key: IndexableType): Dexie$Collection<T,
    Key>,
    equalsIgnoreCase(key: string): Dexie$Collection<T,
    Key>,
    inAnyRange(ranges: Array<IndexableType[]>): Dexie$Collection<T,
    Key>,
    startsWith(key: string): Dexie$Collection<T,
    Key>,
    startsWithAnyOf(prefixes: string[]): Dexie$Collection<T,
    Key>,
    startsWithAnyOf(...prefixes: string[]): Dexie$Collection<T,
    Key>,
    startsWithIgnoreCase(key: string): Dexie$Collection<T,
    Key>,
    startsWithAnyOfIgnoreCase(prefixes: string[]): Dexie$Collection<T,
    Key>,
    startsWithAnyOfIgnoreCase(...prefixes: string[]): Dexie$Collection<T,
    Key>,
    noneOf(keys: Array<IndexableType>): Dexie$Collection<T,
    Key>,
    notEqual(key: IndexableType): Dexie$Collection<T,
    Key >
}

declare interface Dexie$Collection<T, Key>{
    and(filter: (x: T) => boolean): Dexie$Collection<T,
    Key>,
    count(): Dexie$Promise<number>,
    count<U>(onFulfilled: (value: number) => Thenable<U>): Dexie$Promise<U>,
    count<U>(onFulfilled: (value: number) => U): Dexie$Promise<U>,
    distinct(): Dexie$Collection<T,
    Key>,
    each(callback: (obj: T, cursor: IDBCursor) => any): Dexie$Promise<void>,
    eachKey(callback: (key: Key, cursor: IDBCursor) => any): Dexie$Promise<void>,
    eachUniqueKey(callback: (key: Key, cursor: IDBCursor) => any): Dexie$Promise<void>,
    first(): Dexie$Promise<T>,
    first<U>(onFulfilled: (value: T) => Thenable<U>): Dexie$Promise<U>,
    first<U>(onFulfilled: (value: T) => U): Dexie$Promise<U>,
    keys(): Dexie$Promise<Key[]>,
    keys<U>(onFulfilled: (value: Key[]) => Thenable<U>): Dexie$Promise<U>,
    keys<U>(onFulfilled: (value: Key[]) => U): Dexie$Promise<U>,
    last(): Dexie$Promise<T>,
    last<U>(onFulfilled: (value: T) => Thenable<U>): Dexie$Promise<U>,
    last<U>(onFulfilled: (value: T) => U): Dexie$Promise<U>,
    limit(n: number): Dexie$Collection<T,
    Key>,
    offset(n: number): Dexie$Collection<T,
    Key>,
    or(indexOrPrimayKey: string): Dexie$WhereClause<T,
    Key>,
    reverse(): Dexie$Collection<T,
    Key>,
    sortBy(keyPath: string): Dexie$Promise<T[]>,
    sortBy<U>(keyPath: string, onFulfilled: (value: T[]) => Thenable<U>): Dexie$Promise<U>,
    sortBy<U>(keyPath: string, onFulfilled: (value: T[]) => U): Dexie$Promise<U>,
    toArray(): Dexie$Promise<Array<T >> ,
    toArray<U>(onFulfilled: (value: Array<T>) => Thenable<U>): Dexie$Promise<U>,
    toArray<U>(onFulfilled: (value: Array<T>) => U): Dexie$Promise<U>,
    uniqueKeys(): Dexie$Promise<Key[]>,
    uniqueKeys<U>(onFulfilled: (value: Key[]) => Thenable<U>): Dexie$Promise<U>,
    uniqueKeys<U>(onFulfilled: (value: Key[]) => U): Dexie$Promise<U>,
    until(
        filter: (value: T) => boolean,
        includeStopEntry?: boolean): Dexie$Collection<T,
    Key>,
    delete(): Dexie$Promise<number>,
    modify(changes: {
        [keyPath: string]: any
    }): Dexie$Promise<number>,
    modify(changeCallback: (obj: T) => void): Dexie$Promise<number >
}

declare interface Dexie$TableSchema {
    name: string,
        primKey: Dexie$IndexSpec,
        indexes: Dexie$IndexSpec[],
        mappedClass: Function
}

declare interface Dexie$IndexSpec {
    name: string,
        keyPath: any,
        unique: boolean,
        multi: boolean,
        auto: boolean,
        compound: boolean,
        src: string
}
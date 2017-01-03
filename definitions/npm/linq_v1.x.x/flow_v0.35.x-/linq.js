/**
 * Flowtype definitions for linq
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface linq$EnumerableStatic {
    Choice<T>(...contents: T[]): linq$Enumerable<T>,
        Choice<T>(contents: T[]): linq$Enumerable<T>,
        Cycle<T>(...contents: T[]): linq$Enumerable<T>,
        Cycle<T>(contents: T[]): linq$Enumerable<T>,
        Empty<T>(): linq$Enumerable<T>,
        From<T>(obj: T[]): linq$Enumerable<T>,
        From(obj: number): linq$Enumerable<number>,
        From(obj: string): linq$Enumerable<string>,
        From(obj: NodeList): linq$Enumerable<Node>,
        From(obj: Object): linq$Enumerable<linq$KeyValuePair<string, any >> ,
        Return<T>(element: T): linq$Enumerable<T>,
        Matches<T>(input: string, pattern: RegExp): linq$Enumerable<string>,
        Matches<T>(input: string, pattern: string, flags?: string): linq$Enumerable<string>,
        Range(start: number, count: number, step?: number): linq$Enumerable<number>,
        RangeDown(start: number, count: number, step?: number): linq$Enumerable<number>,
        RangeTo(start: number, to: number, step?: number): linq$Enumerable<number>,
        Repeat<T>(obj: any, count?: number): linq$Enumerable<T>,
        RepeatWithFinalize<T>(initializer: () => T, finalizer: (resource: T) => void): linq$Enumerable<T>,
        Generate<T>(func: () => T, count?: number): linq$Enumerable<T>,
        Generate(func: string, count?: number): linq$Enumerable<any>,
        ToInfinity(start?: number, step?: number): linq$Enumerable<number>,
        ToNegativeInfinity(start?: number, step?: number): linq$Enumerable<number>,
        Unfold<T>(seed: T, func: ($: T) => T): linq$Enumerable<T>,
        Unfold(seed: any, func: string): linq$Enumerable<any >
}

declare interface linq$Enumerable<T>{
    CascadeBreadthFirst(
        func: ($: T) => any[],
        resultSelector: (v: any, i: number) => any): linq$Enumerable<any>,
    CascadeBreadthFirst(func: string, resultSelector: string): linq$Enumerable<any>,
    CascadeDepthFirst(
        func: ($: T) => any[],
        resultSelector: (v: any, i: number) => any): linq$Enumerable<any>,
    CascadeDepthFirst(func: string, resultSelector: string): linq$Enumerable<any>,
    Flatten(...items: any[]): linq$Enumerable<any>,
    Pairwise(selector: (prev: any, next: any) => any): linq$Enumerable<any>,
    Pairwise(selector: string): linq$Enumerable<any>,
    Scan(func: (a: any, b: any) => any): linq$Enumerable<any>,
    Scan(func: string): linq$Enumerable<any>,
    Scan(
        seed: any,
        func: (a: any, b: any) => any,
        resultSelector?: ($: T) => any): linq$Enumerable<any>,
    Scan(seed: any, func: string, resultSelector?: string): linq$Enumerable<any>,
    Select<TResult>(selector: ($: T, i: number) => TResult): linq$Enumerable<TResult>,
    Select(selector: string): linq$Enumerable<any>,
    SelectMany<TResult>(
        collectionSelector: ($: T, i: number) => TResult[]): linq$Enumerable<TResult>,
    SelectMany<TResult>(
        collectionSelector: ($: T, i: number) => linq$Enumerable<TResult>): linq$Enumerable<TResult>,
    SelectMany<TCollectionItem,
    TResult>(
        collectionSelector: ($: T, i: number) => TCollectionItem[],
        resultSelector: ($: T, item: TCollectionItem) => TResult): linq$Enumerable<TResult>,
    SelectMany<TCollectionItem,
    TResult>(
        collectionSelector: ($: T, i: number) => linq$Enumerable<TCollectionItem>,
        resultSelector: ($: T, item: TCollectionItem) => TResult): linq$Enumerable<TResult>,
    SelectMany(collectionSelector: string, resultSelector?: string): linq$Enumerable<any>,
    Where(predicate: ($: T, i: number) => boolean): linq$Enumerable<T>,
    Where(predicate: string): linq$Enumerable<any>,
    OfType(type: Function): linq$Enumerable<any>,
    Zip(
        second: any[],
        selector: (v1: any, v2: any, i: number) => any): linq$Enumerable<any>,
    Zip(second: any[], selector: string): linq$Enumerable<any>,
    Zip(
        second: linq$Enumerable<any>,
        selector: (v1: any, v2: any, i: number) => any): linq$Enumerable<any>,
    Zip(second: linq$Enumerable<any>, selector: string): linq$Enumerable<any>,
    Join(
        inner: any[],
        outerKeySelector: (v1: any) => any,
        innerKeySelector: (v1: any) => any,
        resultSelector: (v1: any, v2: any) => any,
        compareSelector?: (v: any) => any): linq$Enumerable<any>,
    Join(
        inner: any[],
        outerKeySelector: string,
        innerKeySelector: string,
        resultSelector: string,
        compareSelector?: string): linq$Enumerable<any>,
    Join(
        inner: linq$Enumerable<any>,
        outerKeySelector: (v1: any) => any,
        innerKeySelector: (v1: any) => any,
        resultSelector: (v1: any, v2: any) => any,
        compareSelector?: (v: any) => any): linq$Enumerable<any>,
    Join(
        inner: linq$Enumerable<any>,
        outerKeySelector: string,
        innerKeySelector: string,
        resultSelector: string,
        compareSelector?: string): linq$Enumerable<any>,
    GroupJoin(
        inner: any[],
        outerKeySelector: (v1: any) => any,
        innerKeySelector: (v1: any) => any,
        resultSelector: (v1: any, v2: linq$Enumerable<any>) => any,
        compareSelector?: (v: any) => any): linq$Enumerable<any>,
    GroupJoin(
        inner: any[],
        outerKeySelector: string,
        innerKeySelector: string,
        resultSelector: string,
        compareSelector?: string): linq$Enumerable<any>,
    GroupJoin(
        inner: linq$Enumerable<any>,
        outerKeySelector: (v1: any) => any,
        innerKeySelector: (v1: any) => any,
        resultSelector: (v1: any, v2: linq$Enumerable<any>) => any,
        compareSelector?: (v: any) => any): linq$Enumerable<any>,
    GroupJoin(
        inner: linq$Enumerable<any>,
        outerKeySelector: string,
        innerKeySelector: string,
        resultSelector: string,
        compareSelector?: string): linq$Enumerable<any>,
    All(predicate: ($: T) => boolean): boolean,
    All(predicate: string): boolean,
    Any(predicate?: ($: T) => boolean): boolean,
    Any(predicate?: string): boolean,
    Concat(second: any[]): linq$Enumerable<any>,
    Concat(second: linq$Enumerable<any>): linq$Enumerable<any>,
    Insert(index: number, second: any[]): linq$Enumerable<any>,
    Insert(index: number, second: linq$Enumerable<any>): linq$Enumerable<any>,
    Alternate(value: any): linq$Enumerable<any>,
    Contains(value: any, compareSelector?: ($: T) => any): boolean,
    Contains(value: any, compareSelector?: string): boolean,
    DefaultIfEmpty(defaultValue: any): linq$Enumerable<any>,
    Distinct(compareSelector?: ($: T) => any): linq$Enumerable<any>,
    Distinct(compareSelector?: string): linq$Enumerable<any>,
    Except(second: any[], compareSelector?: ($: T) => any): linq$Enumerable<any>,
    Except(second: any[], compareSelector?: string): linq$Enumerable<any>,
    Except(
        second: linq$Enumerable<any>,
        compareSelector?: ($: T) => any): linq$Enumerable<any>,
    Except(second: linq$Enumerable<any>, compareSelector?: string): linq$Enumerable<any>,
    Intersect(second: any[], compareSelector?: ($: T) => any): linq$Enumerable<any>,
    Intersect(second: any[], compareSelector?: string): linq$Enumerable<any>,
    Intersect(
        second: linq$Enumerable<any>,
        compareSelector?: ($: T) => any): linq$Enumerable<any>,
    Intersect(second: linq$Enumerable<any>, compareSelector?: string): linq$Enumerable<any>,
    SequenceEqual(second: any[], compareSelector?: ($: T) => any): boolean,
    SequenceEqual(second: any[], compareSelector?: string): boolean,
    SequenceEqual(second: linq$Enumerable<any>, compareSelector?: ($: T) => any): boolean,
    SequenceEqual(second: linq$Enumerable<any>, compareSelector?: string): boolean,
    Union(second: any[], compareSelector?: ($: T) => any): linq$Enumerable<any>,
    Union(second: any[], compareSelector?: string): linq$Enumerable<any>,
    Union(
        second: linq$Enumerable<any>,
        compareSelector?: ($: T) => any): linq$Enumerable<any>,
    Union(second: linq$Enumerable<any>, compareSelector?: string): linq$Enumerable<any>,
    OrderBy(keySelector?: ($: T) => any): linq$OrderedEnumerable<T>,
    OrderBy(keySelector?: string): linq$OrderedEnumerable<T>,
    OrderByDescending(keySelector?: ($: T) => any): linq$OrderedEnumerable<T>,
    OrderByDescending(keySelector?: string): linq$OrderedEnumerable<T>,
    Reverse(): linq$Enumerable<T>,
    Shuffle(): linq$Enumerable<T>,
    GroupBy(
        keySelector: ($: T) => any,
        elementSelector?: ($: T) => any,
        resultSelector?: (key: any, e: any) => any,
        compareSelector?: ($: T) => any): linq$Enumerable<any>,
    GroupBy(
        keySelector: string,
        elementSelector?: string,
        resultSelector?: string,
        compareSelector?: string): linq$Enumerable<any>,
    PartitionBy(
        keySelector: ($: T) => any,
        elementSelector?: ($: T) => any,
        resultSelector?: (key: any, e: any) => any,
        compareSelector?: ($: T) => any): linq$Enumerable<any>,
    PartitionBy(
        keySelector: string,
        elementSelector?: string,
        resultSelector?: string,
        compareSelector?: string): linq$Enumerable<any>,
    BufferWithCount(count: number): linq$Enumerable<any>,
    Aggregate(func: (a: any, b: any) => any): any,
    Aggregate(seed: any, func: (a: any, b: any) => any, resultSelector?: ($: T) => any): any,
    Aggregate(func: string): any,
    Aggregate(seed: any, func: string, resultSelector?: string): any,
    Average(selector?: ($: T) => number): number,
    Average(selector?: string): number,
    Count(predicate?: ($: T) => boolean): number,
    Count(predicate?: string): number,
    Max(selector?: ($: T) => any): any,
    Max(selector?: ($: T) => Date): Date,
    Max(selector?: ($: T) => number): number,
    Max(selector: ($: T) => string): string,
    Max(selector?: string): any,
    Min(selector?: ($: T) => any): any,
    Min(selector?: ($: T) => Date): Date,
    Min(selector: ($: T) => string): string,
    Min(selector?: ($: T) => number): number,
    Min(selector?: string): any,
    MaxBy(selector: ($: T) => any): any,
    MaxBy(selector: ($: T) => string): string,
    MaxBy(selector: ($: T) => Date): Date,
    MaxBy(selector: ($: T) => number): number,
    MaxBy(selector: string): any,
    MinBy(selector: ($: T) => Date): Date,
    MinBy(selector: ($: T) => number): any,
    MinBy(selector: ($: T) => string): string,
    MinBy(selector: ($: T) => any): any,
    MinBy(selector: string): any,
    Sum(selector?: ($: T) => number): number,
    Sum(selector?: string): number,
    ElementAt(index: number): T,
    ElementAtOrDefault(index: number, defaultValue: T): T,
    First(predicate?: ($: T) => boolean): T,
    First(predicate?: string): T,
    FirstOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T,
    FirstOrDefault(defaultValue: T, predicate?: string): T,
    Last(predicate?: ($: T) => boolean): T,
    Last(predicate?: string): T,
    LastOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T,
    LastOrDefault(defaultValue: T, predicate?: string): T,
    Single(predicate?: ($: T) => boolean): T,
    Single(predicate?: string): T,
    SingleOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T,
    SingleOrDefault(defaultValue: T, predicate?: string): T,
    Skip(count: number): linq$Enumerable<T>,
    SkipWhile(predicate: ($: T, i: number) => boolean): linq$Enumerable<T>,
    SkipWhile(predicate: string): linq$Enumerable<T>,
    Take(count: number): linq$Enumerable<T>,
    TakeWhile(predicate: ($: T, i: number) => boolean): linq$Enumerable<T>,
    TakeWhile(predicate: string): linq$Enumerable<T>,
    TakeExceptLast(count?: number): linq$Enumerable<T>,
    TakeFromLast(count: number): linq$Enumerable<T>,
    IndexOf(item: T): number,
    LastIndexOf(item: T): number,
    ToArray(): T[],
    ToLookup<TKey,
    TValue>(
        keySelector: ($: T) => TKey,
        elementSelector?: ($: T) => TValue,
        compareSelector?: (key: TKey) => any): linq$Lookup<TKey,
    TValue>,
    ToLookup(
        keySelector: string,
        elementSelector?: string,
        compareSelector?: string): linq$Lookup<any,
    any>,
    ToObject(keySelector: ($: T) => string, elementSelector: ($: T) => any): any,
    ToObject(keySelector: string, elementSelector: string): any,
    ToDictionary<TKey,
    TValue>(
        keySelector: ($: T) => TKey,
        elementSelector: ($: T) => TValue,
        compareSelector?: (key: TKey) => any): linq$Dictionary<TKey,
    TValue>,
    ToDictionary(
        keySelector: string,
        elementSelector: string,
        compareSelector?: string): linq$Dictionary<any,
    any>,
    ToJSON(replacer?: (key: any, value: any) => any, space?: number): string,
    ToJSON(replacer?: string, space?: number): string,
    ToString(separator?: string, selector?: ($: T) => any): string,
    ToString(separator?: string, selector?: string): string,
    Do(action: ($: T, i: number) => void): linq$Enumerable<any>,
    Do(action: string): linq$Enumerable<any>,
    ForEach(action: ($: T, i: number) => void): void,
    ForEach(func: ($: T, i: number) => boolean): void,
    ForEach(action_func: string): void,
    Write(separator?: string, selector?: ($: T) => any): void,
    Write(separator?: string, selector?: string): void,
    WriteLine(selector?: ($: T) => any): void,
    Force(): void,
    Let(func: (e: linq$Enumerable<any>) => linq$Enumerable<any>): linq$Enumerable<any>,
    Share(): linq$Enumerable<any>,
    MemoizeAll(): linq$Enumerable<any>,
    Catch(handler: (error: Error) => void): linq$Enumerable<any>,
    Catch(handler: string): linq$Enumerable<any>,
    Finally(finallyAction: () => void): linq$Enumerable<any>,
    Finally(finallyAction: string): linq$Enumerable<any>,
    Trace(message?: string, selector?: ($: T) => any): linq$Enumerable<any>,
    Trace(message?: string, selector?: string): linq$Enumerable<any >
}

declare type linq$OrderedEnumerable<T>= {
    ThenBy(keySelector: ($: T) => any): linq$OrderedEnumerable<T>,
    ThenBy(keySelector: string): linq$OrderedEnumerable<T>,
    ThenByDescending(keySelector: ($: T) => any): linq$OrderedEnumerable<T>,
    ThenByDescending(keySelector: string): linq$OrderedEnumerable<T >
} & linq$Enumerable


declare type linq$Grouping<TKey, T>= {
    Key(): TKey
} & linq$Enumerable


declare interface linq$Lookup<TKey, TValue>{
    Count(): number,
    Get(key: TKey): linq$Enumerable<TValue>,
    Contains(key: TKey): boolean,
    ToEnumerable(): linq$Enumerable<linq$Grouping<TKey,
    TValue >>
}

declare interface linq$Dictionary<TKey, TValue>{
    Add(key: TKey, value: TValue): void,
    Get(key: TKey): TValue,
    Set(key: TKey, value: TValue): boolean,
    Contains(key: TKey): boolean,
    Clear(): void,
    Remove(key: TKey): void,
    Count(): number,
    ToEnumerable(): linq$Enumerable<linq$KeyValuePair<TKey,
    TValue >>
}

declare interface linq$KeyValuePair<TKey, TValue>{
    Key: TKey,
    Value: TValue
}
declare
var Enumerable: linq$EnumerableStatic;
// @flow
/**
 * Flowtype definitions for crossfilter
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface CrossFilter$Selector<T>{
    (value: T): any
}

declare export interface CrossFilter$CrossFilterStatic {
    (data: T[]): CrossFilter$CrossFilter<T>,
        version: string,
        permute<T>(array: T[], index: number[]): T[],
        bisect: {
            (array: T[], value: T, lo: number, hi: number): number,
            by<T>(value: CrossFilter$Selector<T>): CrossFilter$Bisector<T >
        },
        heap: {
            (array: T[], lo: number, hi: number): T[],
            by<T>(value: CrossFilter$Selector<T>): CrossFilter$Heap<T >
        },
        heapselect: {
            (array: T[], lo: number, hi: number, k: number): T[],
            by<T>(value: CrossFilter$Selector<T>): CrossFilter$HeapSelect<T >
        },
        insertionsort: {
            (array: T[], lo: number, hi: number): T[],
            by<T>(value: CrossFilter$Selector<T>): CrossFilter$Sort<T >
        },
        quicksort: {
            (array: T[], lo: number, hi: number): T[],
            by<T>(value: CrossFilter$Selector<T>): CrossFilter$Sort<T >
        }
}

declare export interface CrossFilter$Bisection<T>{
    (array: T[], value: T, lo: number, hi: number): number
}

declare export type CrossFilter$Bisector<T>= {
    left: CrossFilter$Bisection<T>,
    right: CrossFilter$Bisection<T >
} & CrossFilter$Bisection


declare export interface CrossFilter$Heap<T>{
    (array: T[], lo: number, hi: number): T[],
    sort(array: T[], lo: number, hi: number): T[]
}

declare export interface CrossFilter$HeapSelect<T>{
    (array: T[], lo: number, hi: number, k: number): T[]
}

declare export interface CrossFilter$Sort<T>{
    (array: T[], lo: number, hi: number): T[]
}

declare export interface CrossFilter$GroupAll<T, TValue>{
    reduce<TValue>(
        add: (p: TValue, v: T) => TValue,
        remove: (p: TValue, v: T) => TValue,
        initial: () => TValue): CrossFilter$GroupAll<T,
    TValue>,
    reduceCount(): CrossFilter$GroupAll<T,
    TValue>,
    reduceSum(value: CrossFilter$Selector<T>): CrossFilter$GroupAll<T,
    TValue>,
    dispose(): CrossFilter$GroupAll<T,
    TValue>,
    value(): TValue
}

declare export interface CrossFilter$Grouping<TKey, TValue>{
    key: TKey,
    value: TValue
}

declare export interface CrossFilter$Group<T, TKey, TValue>{
    top(k: number): CrossFilter$Grouping<TKey,
    TValue>[],
    all(): CrossFilter$Grouping<TKey,
    TValue>[],
    reduce<TGroup>(
        add: (p: TGroup, v: T) => TGroup,
        remove: (p: TGroup, v: T) => TGroup,
        initial: () => TGroup): CrossFilter$Group<T,
    TKey,
    TGroup>,
    reduceCount(): CrossFilter$Group<T,
    TKey,
    number>,
    reduceSum<TGroup>(value: (data: T) => TGroup): CrossFilter$Group<T,
    TKey,
    TGroup>,
    order(value?: CrossFilter$Selector<TValue>): CrossFilter$Group<T,
    TKey,
    TValue>,
    orderNatural(): CrossFilter$Group<T,
    TKey,
    TValue>,
    size(): number,
    dispose(): CrossFilter$Group<T,
    TKey,
    TValue >
}

declare export interface CrossFilter$CrossFilter<T>{
    add(records: T[]): CrossFilter$CrossFilter<T>,
    remove(): CrossFilter$CrossFilter<T>,
    size(): number,
    GroupAll(): CrossFilter$GroupAll<T,
    T>,
    groupAll<TValue>(): CrossFilter$GroupAll<T,
    TValue>,
    dimension<TDimension>(
        value: (data: T) => TDimension): CrossFilter$Dimension<T,
    TDimension >
}

declare export interface CrossFilter$Dimension<T, TDimension>{
    filter(value: TDimension[]): CrossFilter$Dimension<T,
    TDimension>,
    filter(value: TDimension): CrossFilter$Dimension<T,
    TDimension>,
    filter(value: CrossFilter$Selector<TDimension>): CrossFilter$Dimension<T,
    TDimension>,
    filterExact(value: TDimension): CrossFilter$Dimension<T,
    TDimension>,
    filterRange(value: TDimension[]): CrossFilter$Dimension<T,
    TDimension>,
    filterFunction(value: CrossFilter$Selector<TDimension>): CrossFilter$Dimension<T,
    TDimension>,
    filterAll(): CrossFilter$Dimension<T,
    TDimension>,
    top(k: number): T[],
    bottom(k: number): T[],
    dispose(): void,
    group(): CrossFilter$Group<T,
    TDimension,
    TDimension>,
    group<TGroup>(
        groupValue: (data: TDimension) => TGroup): CrossFilter$Group<T,
    TDimension,
    TGroup>,
    groupAll(): CrossFilter$GroupAll<T,
    T>,
    groupAll<TValue>(): CrossFilter$GroupAll<T,
    TValue >
}
declare var crossfilter: CrossFilter$CrossFilterStatic;
declare module 'crossfilter' {
    declare     var crossfilter: CrossFilter$CrossFilterStatic;
    declare module.exports: typeof crossfilter
}
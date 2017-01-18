/**
 * Flowtype definitions for knockout.projections
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type KnockoutMappedObservableArray<T>= {} & KnockoutObservableArray & KnockoutSubscription
declare interface KnockoutObservableArrayFunctions<T>{
    map<TResult>(
        mappingOptions: {
            mappingWithDisposeCallback: (value: T) => {
                mappedValue: TResult,
                dispose: () => void
            }
        }): KnockoutMappedObservableArray<TResult>,
    map<TResult>(
        mappingOptions: {
            mapping: (value: T) => TResult,
            disposeItem?: (mappedItem: TResult) => void
        }): KnockoutMappedObservableArray<TResult>,
    map<TResult>(
        mappingOptions: (value: T) => TResult): KnockoutMappedObservableArray<TResult>,
    filter(predicate: (value: T) => boolean): KnockoutMappedObservableArray<T >
}
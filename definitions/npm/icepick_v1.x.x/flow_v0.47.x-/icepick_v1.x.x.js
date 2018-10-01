// Derived from TS typings at https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/icepick

declare module 'icepick' {
    declare function freeze<T>(collection: T): T;
    declare function thaw<T>(collection: T): T;
    declare function assoc<T, V>(collection: T, key: number | string, value: V): T;
    declare function set<T, V>(collection: T, key: number | string, value: V): T;
    declare function dissoc<T>(collection: T, key: number | string): T;
    declare function unset<T>(collection: T, key: number | string): T;
    declare function assocIn<T, V>(collection: T, path: (number | string)[], value: V): T;
    declare function setIn<T, V>(collection: T, path: (number | string)[], value: V): T;
    declare function getIn<T>(collection: T, path: (number | string)[]): any;
    declare function updateIn<T, V>(
        collection: T,
        path: (number | string)[],
        callback: (value: V) => V,
    ): T;

    declare function assign<T>(target: T): T;
    declare function assign<T, S1>(target: T, source1: S1): T & S1;
    declare function assign<T, S1, S2>(target: T, s1: S1, s2: S2): T & S1 & S2;
    declare function assign<T, S1, S2, S3>(target: T, s1: S1, s2: S2, s3: S3): T & S1 & S2 & S3;
    declare function assign<T, S1, S2, S3, S4>(
        target: T,
        s1: S1,
        s2: S2,
        s3: S3,
        s4: S4,
    ): T & S1 & S2 & S3 & S4;

    declare function extend<T>(target: T): T;
    declare function extend<T, S1>(target: T, source1: S1): T & S1;
    declare function extend<T, S1, S2>(target: T, s1: S1, s2: S2): T & S1 & S2;
    declare function extend<T, S1, S2, S3>(target: T, s1: S1, s2: S2, s3: S3): T & S1 & S2 & S3;
    declare function extend<T, S1, S2, S3, S4>(
        target: T,
        s1: S1,
        s2: S2,
        s3: S3,
        s4: S4,
    ): T & S1 & S2 & S3 & S4;

    declare function merge<T, S1>(target: T, source: S1, resolver?: (target: any, source: any, key: string) => any): T & S1;

    declare function push<T>(array: T[], element: T): T[];
    declare function pop<T>(array: T[]): T[];
    declare function shift<T>(array: T[]): T[];
    declare function unshift<T>(array: T[], element: T): T[];
    declare function reverse<T>(array: T[]): T[];
    declare function sort<T>(array: T[], compareFunction?: (a: T, b: T) => number): T[];
    declare function splice<T>(array: T[], start: number, deleteCount: number, ...items: T[]): T[];
    declare function slice<T>(array: T[], begin?: number, end?: number): T[];

    declare function map<T, U>(fn: (value: T) => U, array: T[]): U[];
    declare function filter<T>(fn: (value: T) => boolean, array: T[]): T[];

    declare class IcepickWrapper<T> {
        value(): T;
        freeze(): IcepickWrapper<T>;
        thaw(): IcepickWrapper<T>;
        assoc<V>(key: number | string, value: V): IcepickWrapper<T>;
        set<V>(key: number | string, value: V): IcepickWrapper<T>;
        dissoc(key: number | string): IcepickWrapper<T>;
        unset(key: number | string): IcepickWrapper<T>;
        assocIn<V>(path: (number | string)[], value: V): IcepickWrapper<T>;
        setIn<V>(path: (number | string)[], value: V): IcepickWrapper<T>;
        getIn(path: (number | string)[]): IcepickWrapper<any>;
        updateIn<V>(path: (number | string)[], callback: (value: V) => V): IcepickWrapper<T>;
        assign<S1>(source1: S1): IcepickWrapper<T & S1>;
        assign<S1, S2>(s1: S1, s2: S2): IcepickWrapper<T & S1 & S2>;
        assign<S1, S2, S3>(s1: S1, s2: S2, s3: S3): IcepickWrapper<T & S1 & S2 & S3>;
        assign<S1, S2, S3, S4>(
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
        ): IcepickWrapper<T & S1 & S2 & S3 & S4>;
        extend<S1>(source1: S1): IcepickWrapper<T & S1>;
        extend<S1, S2>(s1: S1, s2: S2): IcepickWrapper<T & S1 & S2>;
        extend<S1, S2, S3>(s1: S1, s2: S2, s3: S3): IcepickWrapper<T & S1 & S2 & S3>;
        extend<S1, S2, S3, S4>(
            s1: S1,
            s2: S2,
            s3: S3,
            s4: S4,
        ): IcepickWrapper<T & S1 & S2 & S3 & S4>;
        merge<S1>(source: S1): IcepickWrapper<T & S1>;
        thru((val: T) => T): IcepickWrapper<T>;
    }

    declare class IcepickArrayWrapper<T> {
        value(): T[];
        assoc(path: number, value: T): IcepickArrayWrapper<T>;
        set(key: number, value: T): IcepickArrayWrapper<T>;
        dissoc(key: number): IcepickArrayWrapper<T>;
        unset(key: number): IcepickArrayWrapper<T | null>;
        push(element: T): IcepickArrayWrapper<T>;
        pop(): IcepickArrayWrapper<T>;
        shift(): IcepickArrayWrapper<T>;
        unshift(element: T): IcepickArrayWrapper<T>;
        reverse(): IcepickArrayWrapper<T>;
        sort(compareFunction?: (a: T, b: T) => number): IcepickArrayWrapper<T>;
        splice(startIndex: number, deleteCount: number, ...items?: T[]): IcepickArrayWrapper<T>;
        slice(begin?: number, end?: number): IcepickArrayWrapper<T>;
        map<U>(fn: (value: T) => U): IcepickArrayWrapper<U>;
        filter(fn: (value: T) => boolean): IcepickArrayWrapper<T>;
        thru((val: T[]) => T[]): IcepickArrayWrapper<T>;
    }

    declare function chain<T: Object>(target: T): IcepickWrapper<T>;
    declare function chain<T>(target: T[]): IcepickArrayWrapper<T>;
}

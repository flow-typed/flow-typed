// Converted from https://github.com/TehShrike/deepmerge/blob/ad8cfddaa8f4b79f5e2c6943445a8b42377ec495/index.d.ts#L4

declare module 'deepmerge' {
    declare type Options = {
        arrayMerge?: (target: any[], source: any[], options?: Options) => Array<any>,
        clone?: boolean,
        customMerge?: (key: string, options?: Options) => ?(x: any, y: any) => any,
        isMergeableObject?: (value: Object) => boolean,
    };

    declare module.exports: {
        <T>(x: T, y: T, options?: Options): T,
        <T1, T2>(x: T1, y: T2, options?: Options): T1 & T2,
        all<T>(objects: Array<$Shape<T>>, options?: Options): T,
    };
}

declare module 'deepmerge' {
  declare type ArrayMergeOptions  = {|
    isMergeableObject: (value: { ... }) => boolean,
    cloneUnlessOtherwiseSpecified: (value: { ... }, options?: Options) =>  { ... },
  |};

  declare type Options = {|
    clone?: boolean,
    arrayMerge?: (destination: any[], source: any[], options: ArrayMergeOptions) => Array<any>,
    isMergeableObject?: (value: { ... }) => boolean,
    customMerge?: (key: string, options?: Options) => ((x: any, y: any) => any) | void,
  |};

  declare module.exports: {
    <A, B>(a: A, b: B, options?: Options): A & B,
    all<T>(objects: Array<Partial<T>>, options?: Options): T,
    ...
  };
}

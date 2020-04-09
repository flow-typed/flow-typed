declare module 'deepmerge' {
  declare type Options = {
    clone?: boolean,
    arrayMerge?: (destination: any[], source: any[], options?: Options) => Array<any>,
    isMergeableObject?: (value: { ... }) => boolean,
    customMerge?: (key: string, options?: Options) => ((x: any, y: any) => any) | void,
  }

  declare module.exports: {
    <A, B>(a: A, b: B, options?: Options): A & B,
    all<T>(objects: Array<$Shape<T>>, options?: Options): T,
  };
}

declare module 'deepmerge' {
  declare type Options = {
    clone?: boolean,
    arrayMerge?: (destination: any[], source: any[], options?: Options) => Array<any>
  }

  declare module.exports: {
    <A, B>(a: A, b: B, options?: Options): A & B,
    all<T>(objects: Array<$Shape<T>>, options?: Options): T
  };

}

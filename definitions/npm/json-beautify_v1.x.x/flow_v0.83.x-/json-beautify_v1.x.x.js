declare module 'json-beautify' {
  declare module.exports: (
    value: $NonMaybeType<mixed>,
    replacer?:
      | ((...args: Array<any>) => any)
      | { ... }
      | Array<any>
      | null,
    space?: number | string,
    limit?: number,
  ) => string;
}

declare module 'json-beautify' {
  declare module.exports: (
    value: any,
    replacer?:
      | (...args: Array<any>) => any
      | { ... }
      | Array<any>,
    space?: number | string,
    limit?: number,
  ) => string;
}

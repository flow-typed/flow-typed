declare module 'simple-query-string' {
  declare module.exports: {
    parse: (str: string, delimiter?: string, eq?: string) => Object,
    stringify: (obj: Object, delimiter?: string, eq?: string) => string,
  };
}

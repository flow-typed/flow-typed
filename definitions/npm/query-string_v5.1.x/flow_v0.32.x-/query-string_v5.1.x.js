declare module 'query-string' {
  declare type ArrayFormat = 'none' | 'bracket' | 'index'
  declare type ParserOptions = {|
    arrayFormat?: ArrayFormat,
  |}

  declare type StringifyOptions = {|
    arrayFormat?: ArrayFormat,
    encode?: boolean,
    strict?: boolean,
  |}

  declare module.exports: {
    extract(input: string): string,
    parse(input: string, options?: ParserOptions): Object,
    parseUrl(input: string, options?: ParserOptions): { url: string, query: Object },
    stringify(obj: Object, options?: StringifyOptions): string,
  }
}

declare module 'query-string' {
  declare type ArrayFormat = 'none' | 'bracket' | 'index'
  declare type ParserOptions = {|
    arrayFormat?: ArrayFormat,
  |}

  declare type StringifyOptions = {|
    arrayFormat?: ArrayFormat,
    encode?: boolean,
    strict?: boolean,
    sort?: false | <A, B>(A, B) => number,
  |}

  declare module.exports: {
    extract(input: string): string,
    parse(input: string, options?: ParserOptions): { [name: string]: string | Array<string> },
    parseUrl(input: string, options?: ParserOptions): {
      url: string,
      query: { [name: string]: string | Array<string> }
    },
    stringify(obj: { [name: string]: mixed }, options?: StringifyOptions): string,
  }
}

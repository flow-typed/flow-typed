declare module 'query-string' {
  declare type ArrayFormat = 'none' | 'bracket' | 'index' | 'comma'
  declare type ParseOptions = {|
    arrayFormat?: ArrayFormat,
    decode?: boolean,
    sort?: false | <A, B>(A, B) => number,
    parseNumbers?: boolean,
    parseBooleans?: boolean,
  |}

  declare type StringifyOptions = {|
    arrayFormat?: ArrayFormat,
    encode?: boolean,
    strict?: boolean,
    sort?: false | <A, B>(A, B) => number,
    skipNull?: boolean,
  |}

  declare type ObjectParameter = string | number | boolean | null | void;

  declare type ObjectParameters = $ReadOnly<{ [string]: ObjectParameter | $ReadOnlyArray<ObjectParameter>, ... }>

  declare type QueryParameters = { [string]: string | Array<string | number> | null, ... }

  declare type StringifyObjectParameter = {| url: string, query?: QueryParameters |}

  declare module.exports: {
    extract(str: string): string,
    parse(str: string, opts?: ParseOptions): QueryParameters,
    parseUrl(str: string, opts?: ParseOptions): {
      url: string,
      query: QueryParameters,
      ...
    },
    stringify(obj: ObjectParameters, opts?: StringifyOptions): string,
    stringifyUrl(obj: StringifyObjectParameter, opts?: StringifyOptions): string,
    ...
  }
}

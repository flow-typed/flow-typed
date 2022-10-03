declare module "query-string" {
  declare type ArrayFormat = "none" | "bracket" | "index";
  declare type ParseOptions = {|
    arrayFormat?: ArrayFormat
  |};

  declare type StringifyOptions = {|
    arrayFormat?: ArrayFormat,
    encode?: boolean,
    strict?: boolean
  |};

  declare module.exports: {
    extract(str: string): string,
    parse(str: string, opts?: ParseOptions): {
      [key: string]: string | Array<string>,
      ...
    },
    stringify(obj: { [name: string]: any, ... }, opts?: StringifyOptions): string,
    ...
  };
}

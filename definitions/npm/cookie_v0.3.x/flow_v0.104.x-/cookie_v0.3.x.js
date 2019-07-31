type SerializeOptions = {
  domain?: string,
  encode?: (stringToDecode: string) => string,
  expires?: Date,
  httpOnly?: boolean,
  maxAge?: number,
  path?: string,
  sameSite?: boolean | 'lax' | 'strict',
  secure?: boolean,
};

type ParseOptions = {
  // Library itself does not specify output for decode function.
  // Because of simplicity is output set to string which is default settings and best for working with cookies.
  decode?: (stringToDecode: string) => string,
};

declare module 'cookie' {
  declare module.exports: {
    serialize(name: string, val: string, options: ?SerializeOptions): string,
    parse(data: string, options: ?ParseOptions): {[string]: string},
  };
};

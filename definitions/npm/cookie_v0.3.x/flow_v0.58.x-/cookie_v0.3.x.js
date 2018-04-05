type SerializeOptions = {
  domain?: ?string,
  encode?: ?((stringToDecode: string) => string),
  expires?: ?Date,
  httpOnly?: ?boolean,
  maxAge?: ?number,
  path?: ?string,
  sameSite?: ?(boolean | 'lax' | 'strict'),
  secure?: ?boolean,
};

type ParseOptions = {
  decode?: ?((stringToDecode: string) => *),
};

declare module 'cookie' {
  declare module.exports: {
    serialize(name: string, val: string, options: ?SerializeOptions): string,
    // eslint-disable-next-line flowtype/no-weak-types
    parse(data: string, options: ?ParseOptions): Object,
  };
};

declare module 'he' {
  declare type encodeOptions = {
    useNamedReferences?: bool,
    decimal?: bool,
    encodeEverything?: bool,
    strict?: bool,
    allowUnsafeSymbols?: bool,
  };
  declare type decodeOptions = {
    isAttributeValue?: bool,
    strict?: bool,
  };
  declare module.exports: {
    version: string,
    encode: (text: string, options?: encodeOptions) => string & {
      options: encodeOptions,
    },
    decode: (text: string, options?: decodeOptions) => string & {
      options: decodeOptions,
    },
    escape(text: string): string,
    unescape(text: string, options?: encodeOptions): string,
  }
}

// @flow

declare module 'type-is' {
  declare module.exports: {
    // typeofrequest
    (req: mixed, types?: Array<string>): string|boolean|null,
    is: (value: string, types: Array<string>) => string|boolean,
    hasBody: (request: mixed) => boolean,
    normalize: (type: string) => false|string,
    match: (expected: string, actual: string) => boolean,
  }
}

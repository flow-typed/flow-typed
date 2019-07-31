declare module 'query-string' {
  declare module.exports: {
    parse(str: string): { [string]: string|string[]|null, ... },
    stringify(m: { [string]: mixed, ... }): string,
    extract(str: string): string,
    ...
  }
}
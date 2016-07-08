declare module 'get-stdin' {
  declare function exports(): Promise<string>;
  declare function buffer(): Promise<Buffer>;
}

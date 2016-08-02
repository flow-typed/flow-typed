declare module 'get-stdin' {
  declare module.exports: {
    (): Promise<string>,
    buffer(): Promise<Buffer>,
  };
}

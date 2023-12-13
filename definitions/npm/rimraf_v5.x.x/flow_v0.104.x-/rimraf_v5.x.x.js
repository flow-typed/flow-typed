declare module 'rimraf' {
  declare type Options = {
    maxRetries?: number,
    glob?: boolean,
    ...
  };

  declare module.exports: {
    (f: string, opts?: Options): Promise<boolean>,
    sync(path: string, opts?: Options): boolean,
    ...
  };
}

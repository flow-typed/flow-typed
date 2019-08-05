declare module 'mkdirp' {
  declare type Options = number | { mode?: number; fs?: mixed };

  declare type Callback = (err: ?Error, path: ?string) => void;

  declare module.exports: {
    (path: string, options?: Options | Callback, callback?: Callback): void;
    sync(path: string, options?: Options): void;
  };
}

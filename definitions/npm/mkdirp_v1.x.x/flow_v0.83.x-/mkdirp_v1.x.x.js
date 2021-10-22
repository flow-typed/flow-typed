declare module 'mkdirp' {
  import typeof { mkdir, stat } from 'fs';

  declare type FsImplementation = {
    +mkdir?: mkdir,
    +stat?: stat,
    ...
  };

  declare type Options = number | string | {| mode?: number; fs?: FsImplementation |};

  declare type Callback = (err: ?Error, path: ?string) => void;

  declare module.exports: {|
    (path: string, options?: Options | Callback): Promise<string| void>;
    sync(path: string, options?: Options): string | void;
    manual(path: string, options?: Options | Callback): Promise<string| void>;
    manualSync(path: string, options?: Options): string | void;
    native(path: string, options?: Options | Callback): Promise<string| void>;
    nativeSync(path: string, options?: Options): string | void;
  |};
}

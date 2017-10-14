declare module 'rimraf' {
  declare type Options = {
	  maxBusyTries?: number,
	  emfileWait?: number,
	  glob?: boolean,
	  disableGlob?: boolean
  };
  
  declare type Callback = (err: ?Error, path: ?string) => void;

  declare module.exports: {
    (f: string, opts?: Options | Callback, callback?: Callback): void;
    sync(path: string, opts?: Options): void;
  };
}

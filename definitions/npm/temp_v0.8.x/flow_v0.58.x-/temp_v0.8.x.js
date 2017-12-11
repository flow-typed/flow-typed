// https://github.com/bruce/node-temp
// https://www.npmjs.com/package/temp

declare module 'temp' {
  declare type Affixes =
    | null
    | string
    // Use an exact object to prevent accidentally using the callback as the
    // first arg.
    | {|prefix?: string, suffix?: string, dir?: string|};

  declare module.exports: {
    // Settings
    dir: string;
    track(value?: boolean): $Exports<'temp'>;

    // Functions
    mkdir(
      affixes?: Affixes,
      callback?: (err: ?ErrnoError, dirPath: string) => void,
    ): void;
    mkdirSync(affixes?: Affixes): string;
    open(
      affixes?: Affixes,
      callback?: (
        err: ?ErrnoError,
        info: {path: string, fd: ?number},
      ) => void,
    ): void;
    openSync(affixes?: Affixes): {path: string, fd: ?number};
    path(rawAffixes?: Affixes, defaultPrefix?: string): string;
    cleanup(
      callback?: (
        err: ?ErrnoError,
        info: {files: number, dirs?: number},
      ) => void,
    ): void;
    cleanupSync(): {files: number, dirs: number};
    createWriteStream(affixes?: Affixes): stream$Writable;
  };
}

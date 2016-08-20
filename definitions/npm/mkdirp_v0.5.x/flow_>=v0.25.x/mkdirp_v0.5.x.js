declare module 'mkdirp' {

  declare type FsImplementation = {
    stat: (
      path: string,
      cb: (error: typeof Error, made: ?string) => void
    ) => void,
    mkdir: (
      path: string,
      mode: number,
      cb: (error: typeof Error, made: ?string) => void
    ) => void
  }

  declare type FsImplementationSync = {
    statSync: (path: string) => mixed,
    mkdirSync: (path: string, mode: number) => void
  }

  declare function sync(
    path: string,
    options?: {
      mode?: string,
      fs?: FsImplementationSync,
    }
  ): ?string;

  declare module.exports: (
    path: string,
    options?: {
      mode?: string,
      fs?: FsImplementation,
    } | (error: typeof Error, made: ?string) => void,
    callback?: (error: typeof Error, made: ?string) => void
  ) => void
}

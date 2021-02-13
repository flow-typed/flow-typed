declare module 'app-root-path' {
  declare type RootPath = string & {|
    /**
     * Application root directory absolute path
     */
    path: string,
    /**
     * Resolves relative path from root to absolute path
     */
    resolve(pathToModule: string): string,
    /**
     * Resolve module by relative addressing from root
     */
    require(pathToModule: string): any,
    /**
     * Explicitly set root path
     */
    setPath(explicitlySetPath: string): void,
    toString(): string,
  |};

  declare module.exports: RootPath;
}

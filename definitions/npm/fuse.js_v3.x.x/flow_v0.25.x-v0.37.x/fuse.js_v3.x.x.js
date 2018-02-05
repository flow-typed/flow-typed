declare module "fuse.js" {
  declare type FuseOptions = {
    caseSensitive?: boolean,
    includeScore?: boolean,
    includeMatches?: boolean,
    minMatchCharLength?: number,
    shouldSort?: boolean,
    tokenize?: boolean,
    matchAllTokens?: boolean,
    findAllMatches?: boolean,
    id?: string,
    keys?: Array<any>,
    location?: number,
    threshold?: number,
    distance?: number,
    maxPatternLength?: number,
    getFn?: (obj: any, path: string) => any,
    sortFn?: (a: any, b: any) => boolean,
    verbose?: boolean,
    tokenSeparator?: RegExp
  };
  declare class Fuse<T> {
    constructor(items: Array<T>, options?: FuseOptions): Fuse<T>;
    search(pattern: string): Array<T>;
    setCollection<U: Array<T>>(list: U): U;
  }
  declare module.exports: typeof Fuse;
}

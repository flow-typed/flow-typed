type FuseOptions = {
  keys?: Array<any>,
  id?: string,
  caseSensitive?: bool,
  include?: Array<any>,
  shouldSort?: bool,
  searchFn?: Function,
  getFn?: (obj: any, path: string) => any,
  sortFn?: Function,
}

declare module 'fuse.js' {
  declare class Fuse<T> {
    static (items: Array<T>, options?: FuseOptions): Fuse;
    search(pattern: string): Array<T>;
    set<U: Array<T>>(list: U): U;
  }
  declare var exports: typeof Fuse;
}

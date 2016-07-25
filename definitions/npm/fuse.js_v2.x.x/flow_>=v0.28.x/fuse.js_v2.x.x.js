declare module 'fuse.js' {
  declare type FuseOptions = {
    keys?: Array<any>,
    id?: string,
    caseSensitive?: bool,
    include?: Array<any>,
    shouldSort?: bool,
    searchFn?: Function,
    getFn?: (obj: any, path: string) => any,
    sortFn?: Function,
  }
  declare class Fuse<T> {
    static (items: Array<T>, options?: FuseOptions): Fuse<T>;
    search(pattern: string): Array<T>;
    set<U: Array<T>>(list: U): U;
  }
  declare module.exports: typeof Fuse;
}

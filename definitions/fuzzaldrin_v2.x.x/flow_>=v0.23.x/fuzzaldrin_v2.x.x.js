declare module 'fuzzaldrin' {
  declare function filter<T: string|Object>(candidates: Array<T>, query: string, options?: {
    key?: string,
    maxResults?: number,
  }): Array<T>;
  declare function sort(string: string, query: string): number;
}

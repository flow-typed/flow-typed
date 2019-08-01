declare module 'fuzzaldrin' {
  declare module.exports: {
    score(string: string, query: string): number,
    filter<T: string|Object>(candidates: Array<T>, query: string, options?: {
      key?: string,
      maxResults?: number,
    }): Array<T>,
  }
}

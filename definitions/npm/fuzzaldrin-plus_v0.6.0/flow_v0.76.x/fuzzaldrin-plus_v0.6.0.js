// @flow

// Flow-typed type definitions for fuzzaldrin-plus v0.6.0
// Project: https://github.com/jeancroy/fuzz-aldrin-plus
// Author: Jean Christophe Roy <https://github.com/jeancroy>
// Definitions by: Ronald Rey <https://github.com/reyronald>

declare module 'fuzzaldrin-plus' {
  declare class Query {}

  declare type FuzzaldrinPlusOptions = {
    allowErrors?: boolean,
    usePathScoring?: boolean,
    useExtensionBonus?: boolean,
    pathSeparator?: '/' | '\\' | string,
    optCharRegEx?: RegExp,
    wrap?: {| tagOpen?: string, tagClass?: string, tagClose?: string |},
    preparedQuery?: Query,
  };

  declare module.exports: {
    Query: Class<Query>,

    filter<T>(
      candidates: T[] | $ReadOnlyArray<T>,
      query: string,
      options?: ?FuzzaldrinPlusOptions & ?{
        key?: string,
        maxResults?: number,
        maxInners?: number,
      },
    ): T[],

    score(
      string: string,
      query: string,
      options?: ?FuzzaldrinPlusOptions,
    ): number,

    match(
      string: string,
      query: string,
      options?: ?FuzzaldrinPlusOptions,
    ): number[],

    wrap(
      string: string,
      query: string,
      options?: ?FuzzaldrinPlusOptions,
    ): string,

    prepareQuery(query: string, options?: ?FuzzaldrinPlusOptions): Query,
  };
}

declare module 'match-sorter' {
  declare type Rankings = {|
    CASE_SENSITIVE_EQUAL: number,
    EQUAL: number,
    STARTS_WITH: number,
    WORD_STARTS_WITH: number,
    CONTAINS: number,
    ACRONYM: number,
    MATCHES: number,
    NO_MATCH: number,
  |};

  declare type KeyFn<T> = (item: T) => string | Array<String>;

  declare type KeyObj = {|
    key: string,
    minRanking?: number,
    maxRanking?: number,
    threshold?: number,
  |};

  declare type Options<T> = {|
    keys: Array<string | KeyFn<T> | KeyObj>,
    threshold?: number,
    keepDiacritics?: boolean,
  |};

  declare module.exports: {|
    matchSorter<T>(
      items: Array<T>,
      value: string,
      options?: Options<T>
    ): Array<T>,
    rankings: Rankings,
  |};
}

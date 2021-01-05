type $npm$matchSorter$KeyFn<T> = (item: T) => string | Array<String>;
type $npm$matchSorter$KeyObj = {|
  key: string,
  minRanking?: number,
  maxRanking?: number,
  threshold?: number,
|};

type $npm$matchSorter$Rankings = {|
  CASE_SENSITIVE_EQUAL: number,
  EQUAL: number,
  STARTS_WITH: number,
  WORD_STARTS_WITH: number,
  CONTAINS: number,
  ACRONYM: number,
  MATCHES: number,
  NO_MATCH: number,
|};

declare module 'match-sorter' {
  declare type Options<T> = {|
    keys: Array<string | $npm$matchSorter$KeyFn<T> | $npm$matchSorter$KeyObj>,
    threshold?: number,
    keepDiacritics?: boolean,
  |};

  declare module.exports: {
    matchSorter<T>(
      items: Array<T>,
      value: string,
      options?: Options<T>,
    ): Array<T>,
    rankings: $npm$matchSorter$Rankings,
  };
}

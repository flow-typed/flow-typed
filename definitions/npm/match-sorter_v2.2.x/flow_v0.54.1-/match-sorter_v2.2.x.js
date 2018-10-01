type $npm$matchSorter$KeyFn<T> = (item: T) => mixed;
type $npm$matchSorter$KeyObj = {
  key: string,
  minRanking?: number,
  maxRanking?: number
};

type $npm$matchSorter$Rankings = {
  CASE_SENSITIVE_EQUAL: number,
  EQUAL: number,
  STARTS_WITH: number,
  WORD_STARTS_WITH: number,
  STRING_CASE: number,
  STRING_CASE_ACRONYM: number,
  CONTAINS: number,
  ACRONYM: number,
  MATCHES: number,
  NO_MATCH: number
};

type $npm$matchSorter$CaseRankings = {
  CAMEL: number,
  PASCAL: number,
  KEBAB: number,
  SNAKE: number,
  NO_CASE: number
};

declare module 'match-sorter' {
  declare type Options<T> = {
    keys: Array<string | $npm$matchSorter$KeyFn<T> | $npm$matchSorter$KeyObj>,
    threshold?: number,
    keepDiacritics?: boolean
  };

  declare module.exports: {
    <T>(collection: Array<T>, query: string, opts?: Options<T>): Array<T>,
    rankings: $npm$matchSorter$Rankings,
    caseRankings: $npm$matchSorter$CaseRankings
  };
}

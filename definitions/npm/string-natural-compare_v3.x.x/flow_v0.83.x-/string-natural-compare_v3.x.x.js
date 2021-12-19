declare module 'string-natural-compare' {
  declare function naturalCompare(
    a: string,
    b: string,
    options?: {|
      caseInsensitive?: boolean,
      alphabet?: string,
    |},
  ): number;

  declare module.exports: typeof naturalCompare;
}

declare module 'balanced-match' {
  declare type Matches = {
    start: number,
    end: number,
    pre: string,
    body: string,
    post: string,
  };

  declare module.exports: {
    (a: string | RegExp, b: string | RegExp, str: string): Matches | void,
    range(a: string, b: string, str: string): Array<number> | void,
  };
}

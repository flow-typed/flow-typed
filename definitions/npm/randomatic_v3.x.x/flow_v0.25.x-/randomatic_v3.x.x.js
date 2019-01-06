// @flow strict

/**
 * Flow libdef for 'randomatic'
 * See https://www.npmjs.com/package/randomatic
 * by Vincent Driessen, 2018-12-21
 */

type $npm$randomatic$Options = {|
  chars?: string,
  exclude?: string,
|};

declare module 'randomatic' {
  declare module.exports: (
    pattern: string,
    length?: number,
    options?: $npm$randomatic$Options,
  ) => string;
}

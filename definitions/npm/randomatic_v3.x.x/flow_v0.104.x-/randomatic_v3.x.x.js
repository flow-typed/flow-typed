/**
 * Flow libdef for 'randomatic'
 * See https://www.npmjs.com/package/randomatic
 * by Vincent Driessen, 2018-12-21
 */

declare module "randomatic" {
  declare type Options = {|
    chars?: string,
    exclude?: string
  |};

  declare export default (
    pattern: string,
    length?: number,
    options?: Options
  ) => string;
}

/**
 * Flow libdef for 'cookie-parser'
 * See https://www.npmjs.com/package/cookie-parser
 * by Vincent Driessen, 2018-12-21
 */

declare module 'cookie-parser' {
  declare function cookieParser(
    secret?: string | Array<string>,
    options?: mixed,
  ): express$Middleware;

  declare export default typeof cookieParser;
}

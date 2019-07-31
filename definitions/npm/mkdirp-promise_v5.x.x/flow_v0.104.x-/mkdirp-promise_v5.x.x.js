/**
 * Flow libdef for mkdirp-promise
 * by Vincent Driessen, 2019-01-04
 */

declare module "mkdirp-promise" {
  declare export default (path: string) => Promise<void>;
}

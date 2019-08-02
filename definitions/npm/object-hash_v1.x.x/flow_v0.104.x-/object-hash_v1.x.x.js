/**
 * Flow libdef for 'object-hash'
 * See https://www.npmjs.com/package/object-hash
 * by Vincent Driessen, 2018-12-21
 */

declare module "object-hash" {
  declare type Options = {|
    algorithm?: "sha1" | "sha256" | "md5" | "passthrough",
    excludeValues?: boolean,
    encoding?: "buffer" | "hex" | "binary" | "base64",
    ignoreUnknown?: boolean,
    unorderedArrays?: boolean,
    unorderedSets?: boolean,
    unorderedObjects?: boolean,
    excludeKeys?: string => boolean
  |};

  declare export default (
    value: { +[string]: mixed, ... } | Array<mixed>,
    options?: Options
  ) => string;
}

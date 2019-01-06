/**
 * Flow libdef for 'object-hash'
 * See https://www.npmjs.com/package/object-hash
 * by Vincent Driessen, 2018-12-21
 */

// @flow strict

type $npm$objectHash$Options = {|
  algorithm?: "sha1" | "sha256" | "md5",
  excludeValues?: boolean,
  encoding?: "buffer" | "hex" | "binary" | "base64",
  ignoreUnknown?: boolean,
  unorderedArrays?: boolean,
  unorderedSets?: boolean,
  unorderedObjects?: boolean,
  excludeKeys?: string => boolean
|};

declare module "object-hash" {
  declare module.exports: (
    value: { +[string]: mixed } | Array<mixed>,
    options?: $npm$objectHash$Options
  ) => string;
}

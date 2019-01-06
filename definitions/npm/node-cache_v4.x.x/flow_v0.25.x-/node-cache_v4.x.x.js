// @flow strict

/**
 * Flow libdef for node-cache
 * by Vincent Driessen, 2018-12-19
 */

declare type nodeCache$Options = {|
  stdTTL?: number,
  checkperiod?: number,
  errorOnMissing?: boolean,
  useClones?: boolean,
  deleteOnExpire?: boolean
|};

declare module "node-cache" {
  declare class NodeCache {
    constructor(options?: nodeCache$Options): NodeCache;
    get(key: string): mixed | void;
    set(key: string, val: mixed, ttl?: number): boolean;
  }

  declare module.exports: Class<NodeCache>;
}

/**
 * Flow libdef for node-cache
 * by Vincent Driessen, 2018-12-19
 */

declare module "node-cache" {
  declare type Options = {|
    stdTTL?: number,
    checkperiod?: number,
    errorOnMissing?: boolean,
    useClones?: boolean,
    deleteOnExpire?: boolean
  |};

  declare class NodeCache {
    constructor(options?: Options): NodeCache;
    get(key: string): mixed | void;
    set(key: string, val: mixed, ttl?: number): boolean;
  }

  declare export default Class<NodeCache>;
}

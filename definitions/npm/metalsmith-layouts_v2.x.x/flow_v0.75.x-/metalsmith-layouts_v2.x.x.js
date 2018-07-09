/* eslint-disable no-unused-vars, no-redeclare */

declare module 'metalsmith-layouts' {

  import type { Plugin } from 'metalsmith';

  declare type Options = {
    default?: string,
    directory?: string,
    engineOptions?: {[string]: any},
    pattern?: string | Array<string>,
  };

  declare module.exports: (options: Options) => Plugin;
}

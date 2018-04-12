import type { Stats } from 'fs';

declare module 'koa-send' {
  declare type Context = Object;
  declare type Response = Object;

  declare export type Options = {|
    maxage?: number,
    maxAge?: number,
    immutable?: boolean,
    hidden?: boolean,
    root?: string,
    index?: string | false,
    gzip?: boolean,
    brotli?: boolean,
    format?: boolean,
    setHeaders?: (res: Response, path: string, stats: Stats) => any,
    extensions?: Array<string> | false
  |};

  declare export default function send(ctx: Context, path: string, opts?: Options): Promise<string>;
}

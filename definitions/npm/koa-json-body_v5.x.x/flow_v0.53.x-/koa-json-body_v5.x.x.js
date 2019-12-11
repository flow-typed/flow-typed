declare module 'koa-json-body' {
  declare type Middleware = (
    ctx: any,
    next: () => Promise<void>
  ) => Promise<void> | void;
  declare type Options = $Shape<{|
    fallback: boolean,
    limit: string | number,
    strict: boolean,
  |}>;

  declare export default function body(options?: Options): Middleware;
}

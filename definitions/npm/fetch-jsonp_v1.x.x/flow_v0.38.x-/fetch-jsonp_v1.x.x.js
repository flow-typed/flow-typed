// Adapted from https://github.com/camsong/fetch-jsonp/blob/master/index.d.ts

declare module "fetch-jsonp" {
  declare module.exports: (url: string, options?: Options) => Promise<Response>;

  declare type Options = {
    timeout?: number,
    jsonpCallback?: string,
    jsonpCallbackFunction?: string
  };

  declare class Response {
    json<T>(): Promise<T>,
    ok: boolean
  }
}

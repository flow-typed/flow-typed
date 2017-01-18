declare module 'fetch-ponyfill' {

  declare type InitOptions = {
    Promise?: $Subtype<Class<Promise<*>>>,
    XMLHttpRequest?: $Subtype<Class<XMLHttpRequest>>,
  };

  // The below types are globals defined by Flow itself in bom.js, so we just have to tell it that the fetch export
  // of this module is equivalent to window.fetch
  declare type PonyfillExports = {
    fetch: (input: string | Request, init?: RequestOptions) => Promise<Response>,
    Request: Request,
    Response: Response,
    Headers: Headers
  };

  declare export default function PonyfillConstructor(options?: InitOptions): PonyfillExports;
}


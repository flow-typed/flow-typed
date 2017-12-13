declare module "body-parser" {

    import type { Middleware, $Request, $Response } from 'express';

    declare type Options = {
      inflate?: boolean;
      limit?: number | string;
      type?: string | string[] | ((req: $Request) => any);
      verify?: (req: $Request, res: $Response, buf: Buffer, encoding: string) => void;
    };

    declare type OptionsText = Options & {
      reviver?: (key: string, value: any) => any;
      strict?: boolean;
    };

    declare type OptionsJson = Options & {
      reviver?: (key: string, value: any) => any;
      strict?: boolean;
    };

    declare type OptionsUrlencoded = Options & {
      extended?: boolean;
      parameterLimit?: number;
    };

    declare function json(options?: OptionsJson): Middleware;

    declare function raw(options?: Options): Middleware;

    declare function text(options?: OptionsText): Middleware;

    declare function urlencoded(options?: OptionsUrlencoded): Middleware;

}

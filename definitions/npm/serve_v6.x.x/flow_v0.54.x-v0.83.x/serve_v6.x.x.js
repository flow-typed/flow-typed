declare module "serve" {
  declare type Options = {|
    auth?: boolean,
    cache?: number,
    clipless?: boolean,
    cors?: boolean,
    help?: boolean,
    ignore?: Array<string>,
    open?: boolean,
    port?: number,
    silent?: boolean,
    single?: boolean,
    ssl?: boolean,
    treeless?: boolean,
    unzipped?: boolean,
    version?: boolean
  |};

  declare type Result = {
    stop: () => void
  };

  declare export default function serve(
    directory: string,
    options: Options
  ): Result;
}

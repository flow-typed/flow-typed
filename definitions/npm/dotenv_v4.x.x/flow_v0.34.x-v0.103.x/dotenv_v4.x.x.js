declare module "dotenv" {
  declare type DotenvOptions = {
    encoding?: string,
    path?: string
  };

  declare function config(options?: DotenvOptions): boolean;

  declare module.exports: {
    config: typeof config,
    load: typeof config,
    parse: (src: string | Buffer) => { [string]: string }
  }
}

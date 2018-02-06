declare module "meow" {
  declare type MinimistOption = "string" | "boolean" | {
    type?: "string" | "boolean",
    alias?: string | Array<string>,
    default?: any
  };

  declare type MinimistOptions = {
    stopEarly?: boolean,
    unknown?: (arg: string) => boolean,
    "--"?: boolean,
    [key: string]: MinimistOption
  };

  declare type Options = string | Array<string> | {|
    description?: string | boolean,
    help?: string | boolean,
    version?: string | boolean,
    pkg?: any,
    argv?: Array<string>,
    inferType?: boolean,
    flags?: MinimistOptions,
    autoHelp?: boolean,
    autoVersion?: boolean
  |};

  declare type Result = {
    input: Array<string>,
    flags: { [name: string]: any },
    pkg: Object,
    help: string,
    showHelp: (code?: number) => void,
    showVersion: () => void
  };

  declare type Meow =
    & ((help: string | Array<string>, options: Options) => Result)
    & ((options: string | Array<string> | Options) => Result);

  declare module.exports: Meow;
}

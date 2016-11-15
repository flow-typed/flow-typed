declare module 'meow' {
  declare type options = string | Array<string> | {
    description?: string,
    help: string,
    version?: string | boolean,
    pkg?: string | Object,
    argv?: Array<string>,
    inferType?: boolean
  };

  declare type minimistOptions = {
    string?: string | Array<string>,
    boolean?: boolean | string | Array<string>,
    alias?: { [arg: string]: string | Array<string> },
    default?: { [arg: string]: any },
    stopEarly?: boolean,
    // TODO: Strings as keys don't work...
    // '--'? boolean,
    unknown?: (param: string) => boolean
  };

  declare module.exports: (
    options: options,
    minimistOptions?: minimistOptions,
  ) => {
    input: Array<string>,
    flags: { [flag: string]: string | boolean },
    pkg: Object,
    help: string,
    showHelp: Function
  }
}

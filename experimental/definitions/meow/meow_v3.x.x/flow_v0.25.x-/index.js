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
    '--'?: boolean,
    unknown?: (param: string) => boolean
  };

  declare type Flags = {
    '--'?: Array<string>,
    [flag: string]: string | boolean
  };

  declare module.exports: (
    options: options,
    minimistOptions?: minimistOptions,
  ) => {
    input: Array<string>,
    flags: Flags,
    pkg: Object,
    help: string,
    showHelp: Function
  }
}

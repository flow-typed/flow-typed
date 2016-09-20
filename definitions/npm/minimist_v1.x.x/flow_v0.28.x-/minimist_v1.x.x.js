declare module 'minimist' {
  declare type minimistOptions = {
    string?: boolean,
    boolean?: boolean,
    alias?: { [arg: string]: string | Array<string> },
    default?: { [arg: string]: any },
    stopEarly?: boolean,
    // TODO: Strings as keys don't work...
    // '--'? boolean,
    unknown?: (param: string) => boolean
  };

  declare type minimistOutput = {
    _: Array<string>,
    [flag: string]: string | boolean
  };

  declare module.exports: (argv: Array<string>, opts?: minimistOptions) => minimistOutput;
}

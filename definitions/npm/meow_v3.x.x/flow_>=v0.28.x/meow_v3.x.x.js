declare module 'meow' {
  declare function exports(
    options: string | Array<string> | {
      description?: string,
      help: string,
      version?: string | boolean,
      pkg?: string | Object,
      argv?: Array<string>,
      inferType?: boolean
    },
    minimistOptions: {
      string?: boolean,
      boolean?: boolean,
      alias?: { [arg: string]: string | Array<string> },
      default?: { [arg: string]: any },
      stopEarly?: boolean,
      // TODO: Strings as keys don't work...
      // '--'? boolean,
      unknown?: (param: string) => boolean
    }
  ): {
    input: Array<string>,
    flags: { [flag: string]: string | boolean },
    pkg: Object,
    help: string,
    showHelp: Function
  }
}

// stubbed from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/451dc8fc19383bc12af59522020e571957f1684e/types/debug/index.d.ts

declare module "debug" {
  // $FlowExpectedError[cannot-resolve-module]
  import * as MS from 'ms';

  declare interface Formatters {
    [formatter: string]: (v: mixed) => string;
  }

  declare type Debugger = {|
    (format: mixed, ...args: Array<mixed>): void;
    color: string;
    diff: number;
    enabled: boolean;
    log: (format: mixed, ...args: Array<mixed>) => mixed;
    namespace: string;
    destroy: () => boolean;
    extend: (namespace: string, delimiter?: string) => Debugger;
  |}

  declare type Debug = {|
    (namespace: string): Debugger;
    coerce: (val: mixed) => mixed;
    disable: () => string;
    enable: (namespaces: string) => void;
    enabled: (namespaces: string) => boolean;
    formatArgs: (args: Array<mixed>) => void;
    log: (format: mixed, ...args: Array<mixed>) => mixed;
    selectColor: (namespace: string) => string | number;
    humanize: typeof MS;
    names: RegExp[];
    skips: RegExp[];
    formatters: Formatters;
    inspectOpts?: {
      hideDate?: boolean | number | null,
      colors?: boolean | number | null,
      depth?: boolean | number | null,
      showHidden?: boolean | number | null,
      ...
    };
  |}

  declare module.exports: Debug;
}

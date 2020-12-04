/**
 * NOTICE
 * It's currently not possible? to model the exact exports shape of verror
 * for both commonjs and ES modules.
 * So for ES modules use only named exports like so:
 * `import { VError, SError, WError, MultiError } from 'verror';`
 */

declare module 'verror' {
  declare export type Info = {
    +[string]: mixed,
  };

  declare export type Options = {|
    +name?: string,
    +strict?: boolean,
    +cause?: Error | null,
    +constructorOpt?: (...args: Array<mixed>) => void,
    +info?: Info,
  |};

  declare class VError extends Error {
    static info(err: Error): Info;
    static cause(err: Error): Error | null;
    static fullStack(err: Error): string;
    static findCauseByName(err: Error, name: string): Error | null;
    static hasCauseWithName(err: Error, name: string): boolean;
    static errorForEach(err: Error, func: (err: Error) => void): void;
    static errorFromList<T: Error>(errors: Array<T>): null | T | MultiError;

    static (arg?: Options | Error | string, ...params: Array<mixed>): VError;

    constructor(
      arg?: Options | Error | string,
      ...params: Array<mixed>
    ): VError;

    cause(): Error | void;
  }

  declare class SError extends VError {
    static (arg?: Options | Error | string, ...params: Array<mixed>): VError;
  }

  declare class WError extends VError {
    static (arg?: Options | Error | string, ...params: Array<mixed>): VError;
  }

  declare class MultiError extends VError {
    constructor(errors: Array<Error>): MultiError;
    errors(): Array<Error>;
  }

  declare module.exports: typeof VError & {
    VError: typeof VError,
    MultiError: typeof MultiError,
    SError: typeof SError,
    WError: typeof WError,
  };
}

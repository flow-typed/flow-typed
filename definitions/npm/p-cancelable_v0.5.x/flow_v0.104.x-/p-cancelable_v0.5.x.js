declare module 'p-cancelable' {
  declare class CancelError extends Error {
    +isCanceled: true;
  }

  declare export default class PCancelable<+R> extends Promise<R> {
    static fn<T, U>(
      userFn: (input: T, onCancel: (handler: () => void) => void) => Promise<U>
    ): (input: T) => PCancelable<U>;
    static fn<T1, T2, U>(
      userFn: (
        input1: T1,
        input2: T2,
        onCancel: (handler: () => void) => void
      ) => Promise<U>
    ): (input1: T1, input2: T2) => PCancelable<U>;
    static fn<T1, T2, T3, U>(
      userFn: (
        input1: T1,
        input2: T2,
        input3: T3,
        onCancel: (handler: () => void) => void
      ) => Promise<U>
    ): (input1: T1, input2: T2, input3: T3) => PCancelable<U>;

    constructor(
      callback: (
        resolve: (result: Promise<R> | R) => void,
        reject: (error: any | PCancelable.CancelError) => void,
        onCancel: (handler: () => void) => void
      ) => mixed
    ): void;

    cancel(reason: any): void;
    +isCanceled: boolean;

    static CancelError: typeof CancelError;
  }
}

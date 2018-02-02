type RetryFn = (err: Error) => void;
type Options = {|
  retries?: number,
  factor?: number,
  minTimeout?: number,
  maxTimeout?: number,
  randomize?: boolean,
|};

declare module 'promise-retry' {
  declare module.exports: <T>(
    handler: (retry: RetryFn, retryNumber: number) => Promise<T>,
    options?: Options
  ) => Promise<T>;
}

declare module 'reduce-function-call' {
  declare type Callback = (body: string, functionIdentifier: string, call: string) => any;

  declare module.exports: {
    (string: string, functionRE: string | RegExp, callback: Callback): string,
  };
}

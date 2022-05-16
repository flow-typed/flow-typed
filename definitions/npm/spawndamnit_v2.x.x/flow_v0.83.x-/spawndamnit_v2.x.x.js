declare module 'spawndamnit' {
  declare class ChildProcessPromise<T> extends Promise<T> mixins events$EventEmitter {
    constructor(
      executer: (
        resolve: (result: T) => mixed,
        reject: (error: Error) => mixed,
        events: events$EventEmitter,
      ) => mixed,
    ): this;
  }

  declare module.exports: {|
    <T>(
      cmd: string,
      args?: Array<string>,
      opts?: child_process$spawnOpts,
    ): ChildProcessPromise<T>,
    ChildProcessPromise: typeof ChildProcessPromise,
  |};
}

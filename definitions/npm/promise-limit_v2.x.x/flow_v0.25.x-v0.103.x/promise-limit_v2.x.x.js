/**
 * Flow libdef for 'promise-limit'
 * See https://www.npmjs.com/package/promise-limit
 * by Vincent Driessen, 2019-01-04
 */

declare module 'promise-limit' {
  declare type limit<T> = limitFunc<T> & limitInterface<T>;
  declare type limitFunc<T> = (fn: () => Promise<T>) => Promise<T>;
  declare interface limitInterface<T> {
    map<U>(
      items: $ReadOnlyArray<T>,
      mapper: (value: T) => Promise<U>,
    ): Promise<Array<U>>;
    queue: number;
  }

  declare export default function limitFactory<T>(
    concurrency?: number,
  ): limit<T>;
}

declare module 'use-local-storage' {
  import type { ReactSetStateFunction } from 'react';

  declare type Serializer<T> = (object: T | void) => string;
  declare type Parser<T> = (val: string) => (T | void);

  declare type Options<T> = Partial<{|
      serializer: Serializer<T>,
      parser: Parser<T>,
      logger: (error: any) => void,
      syncData: boolean,
  |}>;

  declare module.exports: <T>(
    key: string,
    defaultValue: T,
    options?: Options<T>,
  ) => [T, ReactSetStateFunction<T | void>];
}

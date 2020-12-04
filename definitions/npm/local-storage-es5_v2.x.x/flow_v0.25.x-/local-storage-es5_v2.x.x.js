declare module 'local-storage-es5' {
  declare type Callback = (value: any, old: any, url: string) => void

  declare type Accessor = {|
    set: (key: string, value: string | number | boolean | { ... }) => boolean,
    get: (key: string) => any,
    remove: (key: string) => any,
    clear: (key: string) => any,
    backend: (store?: Storage) => Storage,
    on: (key: string, fn: Callback) => void,
    off: (key: string, fn: Callback) => void,
  |};

  declare module.exports: Accessor;
}

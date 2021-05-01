declare module 'debounce' {
  declare type Cancelable = {|
    clear: () => void,
    flush: () => void
  |};

  declare type Debounce = <T>(func: T, wait: number, immediate?: boolean) => T & Cancelable;

  declare var debounce: Debounce;

  declare module.exports: {|
    <T>(func: T, wait: number, immediate?: boolean): T & Cancelable,
    debounce: Debounce,
  |};
}

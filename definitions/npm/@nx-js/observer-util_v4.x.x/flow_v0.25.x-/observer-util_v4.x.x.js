declare module '@nx-js/observer-util' {
  declare function observable<Observable: Object>(obj?: Observable): Observable;
  declare function isObservable(obj: Object): boolean;
  declare function raw<Observable: Object>(obj: Observable): Observable;

  declare type Scheduler = {
    add: Function,
    delete: Function
  };

  declare type ObserveOptions = {
    scheduler?: Scheduler | Function,
    debugger?: Function,
    lazy?: boolean
  }

  declare function observe<Reaction: Function>(func: Reaction, options?: ObserveOptions): Reaction;
  declare function unobserve(func: Function): void;
}

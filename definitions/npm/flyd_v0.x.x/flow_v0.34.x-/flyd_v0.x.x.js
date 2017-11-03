declare class flyd$Stream<+T> {
  static val: T;

  end(boolean): flyd$Stream<boolean>;
  map<T, V>((T) => V): flyd$Stream<V>;
  ap<V>(flyd$Stream<V>): flyd$Stream<V>;
  of<V>(...values: V[]): flyd$Stream<V>;

  (...rest: Array<void>): T;
  (*): flyd$Stream<*>;
}
type Stream = flyd$Stream<*>;
type CombineFn = (...args: Array<Stream>) => *;
type MapFn = (*) => *;
type ScanFn = (*, *) => *;
type LiftFn = (...args: Array<*>) => *;

type RegularObj = { [key: string]: * | RegularObj };
type StreamObj = { [key: string]: Stream | StreamObj };

declare module 'flyd' {
  declare type Stream = Stream;
  declare type Flyd$Stream<T> = flyd$Stream<T>;

  declare module.exports: {
    stream<T>(v: T): flyd$Stream<T>,
    immediate<T>(s: flyd$Stream<?T>): flyd$Stream<?T>,
    isStream(s: *): boolean,
    combine: CurriedFunction2<CombineFn, Array<flyd$Stream<*>>, Stream>,
    endsOn: CurriedFunction2<Stream, Stream, Stream>,
    map: CurriedFunction2<MapFn, Stream, Stream>,
    on: CurriedFunction2<MapFn, Stream, Stream>,
    scan: CurriedFunction3<ScanFn, *, Stream, Stream>,
    merge: CurriedFunction2<Stream, Stream, Stream>,
    transduce: CurriedFunction2<MapFn | Function, Stream, Stream>,
    curryN(length: number, fn: (...args: Array<*>) => *): Function,
  };
}

declare module 'flyd/module/aftersilence' {
  declare module.exports: CurriedFunction2<number, Stream, Stream>;
}

declare module 'flyd/module/diff' {
  declare module.exports: CurriedFunction2<ScanFn, Stream, Stream>;
}

declare module 'flyd/module/droprepeats' {
  declare module.exports: {
    dropRepeats: (s: Stream) => Stream,
    dropRepeatsWith: CurriedFunction2<(*) => boolean, Stream, Stream>,
  };
}

declare module 'flyd/module/every' {
  declare module.exports: (number) => Stream;
}

declare module 'flyd/module/filter' {
  declare module.exports: CurriedFunction2<(*) => boolean, Stream, Stream>;
}

declare module 'flyd/module/flatmap' {
  declare module.exports: CurriedFunction2<MapFn, Stream, Stream>;
}

declare module 'flyd/module/forwardto' {
  declare module.exports: CurriedFunction2<Stream, (*) => *, Stream>;
}

declare module 'flyd/module/inlast' {
  declare module.exports: CurriedFunction2<number, Stream, Stream>;
}

declare module 'flyd/module/keepwhen' {
  declare module.exports: CurriedFunction2<Stream, Stream, Stream>;
}

declare module 'flyd/module/lift' {
  declare module.exports: (LiftFn, ...args: Array<Stream>) => Stream;
}

declare module 'flyd/module/mergeall' {
  declare module.exports: (Array<Stream>) => Stream;
}

declare module 'flyd/module/obj' {
  declare module.exports: {
    streamProps(obj: RegularObj): StreamObj,
    extractProps(obj: StreamObj): RegularObj,
    stream(obj: StreamObj): Stream,
  };
}

declare module 'flyd/module/previous' {
  declare module.exports: (Stream) => Stream;
}

declare module 'flyd/module/sampleon' {
  declare module.exports: CurriedFunction2<Stream, Stream, Stream>;
}

declare module 'flyd/module/scanmerge' {
  declare module.exports: CurriedFunction2<Array<[Stream, ScanFn]>, *, Stream>;
}

declare module 'flyd/module/switchlatest' {
  declare module.exports: (Stream) => Stream;
}

declare module 'flyd/module/takeuntil' {
  declare module.exports: CurriedFunction2<Stream, Stream, Stream>;
}

// Filename aliases
declare module 'flyd/flyd' {
  declare module.exports: $Exports<'flyd'>;
}
declare module 'flyd/flyd.js' {
  declare module.exports: $Exports<'flyd'>;
}
declare module 'flyd/lib' {
  declare module.exports: $Exports<'flyd'>;
}
declare module 'flyd/lib/index' {
  declare module.exports: $Exports<'flyd/lib'>;
}
declare module 'flyd/lib/index.js' {
  declare module.exports: $Exports<'flyd/lib'>;
}

// copy from ramda because importing won't work...
type CurriedFunction2<T1, T2, R> =
  & ((t1: T1, t2: T2) => R)
  & ((t1: T1, ...rest: Array<void>) => (t2: T2) => R);

declare type CurriedFunction3<T1, T2, T3, R> =
  & ((t1: T1, t2: T2, t3: T3) => R)
  & ((t1: T1, t2: T2, ...rest: Array<void>) => (t3: T3) => R)
  & ((t1: T1, ...rest: Array<void>) => CurriedFunction2<T2, T3, R>)

/**
 * (Incomplete) Type definitions for Fluture
 */

// helpers
type $npm$Fluture$Fn1<A, B> = (a: A) => B // a unary function

// Create the global type Fluture
// Rej = type of returned rejected value
// Res = type of returned resolved value
declare class Fluture<Rej, Res> {
  map: <T>(fn: $npm$Fluture$Fn1<Res, T>) => Fluture<Rej, T>,
  bimap: <A, B>(
    left: $npm$Fluture$Fn1<Rej, A>,
    right: $npm$Fluture$Fn1<Res, B>
  ) => Fluture<A, B>,
  chain: <A, B>(fn: (a: Res) => Fluture<A, B>) => Fluture<A, B>,
  swap: () => Fluture<Res, Rej>,
  mapRej: <T>(fn: $npm$Fluture$Fn1<Rej, T>) => Fluture<T, Res>,
  chainRej: <T>(fn: (a: Rej) => Fluture<T, Res>) => Fluture<T, Res>,
  // We can't type fold with 2 different types of left and right
  fold: <T>(
    left: $npm$Fluture$Fn1<Rej, T>,
    right: $npm$Fluture$Fn1<Res, T>
  ) => Fluture<void, T>,
  // We can't infer the type of applied Res(B)
  ap: <A, B>(a: Fluture<A, B>) => Fluture<A, *>,
  // We can't infer the first reject or resolve
  and: <A, B>(a: Fluture<A, B>) => Fluture<A, B>,
  // We can't infer the last reject or resolve
  or: <A, B>(a: Fluture<A, B>) => Fluture<A, B>,

  finally: (a: Fluture<*, *>) => Fluture<Rej, Res>,
  lastly: (a: Fluture<*, *>) => Fluture<Rej, Res>,

  fork: (
    rej: $npm$Fluture$Fn1<Rej, *>,
    res: $npm$Fluture$Fn1<Res, *>
  ) => () => *,
  value: (res: $npm$Fluture$Fn1<Res, *>) => () => *,
  promise: () => Promise<Res>,

  // We can't infer the first reject or resolve
  race: <A, B>(a: Fluture<A, B>) => Fluture<A, B>
}

declare module fluture {
  declare type Computation<Rej, Res> = (
    rej: $npm$Fluture$Fn1<Rej, void>,
    res: $npm$Fluture$Fn1<Res, void>
  ) => void

  declare type NodeBack<Rej, Res> = (rej: Rej, res: Res) => void

  declare class Future {
    of: <T>(a: T) => Fluture<*, T>,
    reject: <T>(a: T) => Fluture<T, *>,
    after: <T>(a: number, b: T) => Fluture<void, T>,
    rejectAfter: <T>(a: number, b: T) => Fluture<T, void>,
    cache: <Rej, Res>(a: Fluture<Rej, Res>) => Fluture<Rej, Res>,
    do: <T>(() => T) => Fluture<void, T>,
    go: <T>(() => T) => Fluture<void, T>,
    try: <T>(() => T) => Fluture<void, T>,
    tryP: <T>(() => Promise<T>) => Fluture<void, T>,
    node: <Rej, Res>((done: NodeBack<Rej, Res>) => void) => Fluture<Rej, Res>,

    encase: <A, B>(fn: (a: A) => B) => (a: A) => Fluture<*, B>,
    encase2: <A1, A2, B>(
      fn: (a1: A1, a2: A2) => B
    ) => (a1: A1, a2: A2) => Fluture<*, B>,
    encase3: <A1, A2, A3, B>(
      fn: (a1: A1, a2: A2, a3: A3) => B
    ) => (a1: A1, a2: A2, a3: A3) => Fluture<*, B>,
    encaseP: <A, B>(fn: (a: A) => Promise<B>) => (a: A) => Fluture<*, B>,
    encaseP2: <A1, A2, B>(
      fn: (a1: A1, a2: A2) => Promise<B>
    ) => (a1: A1, a2: A2) => Fluture<*, B>,
    encaseP3: <A1, A2, A3, B>(
      fn: (a1: A1, a2: A2, a3: A3) => Promise<B>
    ) => (a1: A1, a2: A2, a3: A3) => Fluture<*, B>,
    encaseN: <A, Rej, Res>(
      fn: (a: A, done: NodeBack<Rej, Res>) => void
    ) => (a: A) => Fluture<Rej, Res>,
    encaseN2: <A1, A2, Rej, Res>(
      fn: (a1: A1, a2: A2, done: NodeBack<Rej, Res>) => void
    ) => (a1: A1, a2: A2) => Fluture<Rej, Res>,
    encaseN3: <A1, A2, A3, Rej, Res>(
      fn: (a1: A1, a2: A2, a3: A3, done: NodeBack<Rej, Res>) => void
    ) => (a1: A1, a2: A2, a3: A3) => Fluture<Rej, Res>,

    hook: <A, B, C, D>(
      f1: Fluture<A, B>,
      f2: (b: B) => Fluture<A, C>
    ) => (f3: (c: B) => Fluture<A, D>) => Fluture<A, D>,

    both: <A, B>(a: Fluture<A, B>, Fluture<A, B>) => Fluture<A, B>,
    // We can't infer the combined types of all futures
    parallel: (a: number, b: Array<Fluture<*, *>>) => Fluture<*, *>,

    // No idea how to type this
    Par: any,
    seq: any,

    isFuture: (a: *) => boolean,
    isNever: (a: *) => boolean,
    never: () => Fluture<void, void>,

    <Rej, Res>(fn: Computation<Rej, Res>): Fluture<Rej, Res>
  }

  declare module.exports: Future
}

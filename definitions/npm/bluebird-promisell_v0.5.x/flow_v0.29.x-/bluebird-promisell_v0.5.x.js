import type { Bluebird$Promise } from 'bluebird';


declare module "bluebird-promisell" {
  declare export type Bluebird$Promise<R> = Bluebird$Promise<R>

  declare module.exports: {
    purep <A>(a: A): Promise<A>;
    fmapp <A,B>(fn: (a: A) => B): (pa: Promise<A>) => Promise<B>;
    sequencep <A>(arr: Array<Promise<A>>): Promise<Array<A>>;
    traversep <A,B>(fn: (a: A) => Promise<B>): (arr: Array<A>) => Promise<Array<B>>;

    liftp1 <A,B>(fn: (a: A) => Promise<B> | B): (pa: Promise<A>) => Promise<B>;
    liftp2 <A,B,C>(fn: (a: A, b: B, ...rest: Array<void>) => Promise<C> | C): (pa: Promise<A>, pb: Promise<B>, ...rest: Array<void>) => Promise<C>;
    liftp3 <A,B,C,D>(fn: (a: A, b: B, c: C, ...rest: Array<void>) => Promise<D> | D): (pa: Promise<A>, pb: Promise<B>, pc: Promise<C>, ...rest: Array<void>) => Promise<D>;
    liftp4 <A,B,C,D,E>(fn: (a: A, b: B, c: C, d: D, ...rest: Array<void>) => Promise<E> | E): (pa: Promise<A>, pb: Promise<B>, pc: Promise<C>, pd: Promise<D>, ...rest: Array<void>) => Promise<E>;
    liftp5 <A,B,C,D,E,F>(fn: (a: A, b: B, c: C, d: D, e: E, ...rest: Array<void>) => Promise<F> | F): (pa: Promise<A>, pb: Promise<B>, pc: Promise<C>, pd: Promise<D>, pe: Promise<E>, ...rest: Array<void>) => Promise<F>;

    liftp <A,B>(fn: (a: A, ...rest: Array<void>) => Promise<B> | B): (pa: Promise<A>, ...rest: Array<void>) => Promise<B>;
    liftp <A,B,C>(fn: (a: A, b: B, ...rest: Array<void>) => Promise<C> | C): (pa: Promise<A>, pb: Promise<B>, ...rest: Array<void>) => Promise<C>;
    liftp <A,B,C,D>(fn: (a: A, b: B, c: C, ...rest: Array<void>) => Promise<D> | D): (pa: Promise<A>, pb: Promise<B>, pc: Promise<C>, ...rest: Array<void>) => Promise<D>;
    liftp <A,B,C,D,E>(fn: (a: A, b: B, c: C, d: D, ...rest: Array<void>) => Promise<E> | E): (pa: Promise<A>, pb: Promise<B>, pc: Promise<C>, pd: Promise<D>, ...rest: Array<void>) => Promise<E>;
    liftp <A,B,C,D,E,F>(fn: (a: A, b: B, c: C, d: D, e: E, ...rest: Array<void>) => Promise<F> | F): (pa: Promise<A>, pb: Promise<B>, pc: Promise<C>, pd: Promise<D>, pe: Promise<E>, ...rest: Array<void>) => Promise<F>;

    firstp <A,B>(pa: Promise<A>, pb: Promise<B>): Promise<A>;
    secondp <A,B>(pa: Promise<A>, pb: Promise<B>): Promise<B>;
    filterp <A>(fn: (a :A) => bool): (arr: Array<Promise<A>>) => Promise<Array<A>>;
    foldp <A,B>(fn: (b: B, a: A) => Promise<B>): (b: B) => (arr: Array<A>) => Promise<B>;
    mapError <ERROR,A>(fn: (e: ERROR) => ERROR): (a: Promise<A>) => Promise<A>;
    resolveError <ERROR,B,A>(fn: (e: ERROR) => B): (pa: Promise<A>) => Promise<B>;
    toPromise <A,ERROR>(predict: (a: A) => bool, toError: (a: A) => ERROR): (a: A) => Promise<A>;
    pipep (fn: mixed): mixed;
  }
}

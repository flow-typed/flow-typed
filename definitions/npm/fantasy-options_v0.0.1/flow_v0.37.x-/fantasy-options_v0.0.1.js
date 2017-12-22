declare module 'fantasy-options' {
  declare class OptionType<A> {
    ap(a: this): this,
    map<B>(f: (a: A) => B): OptionType<B>,
    fold(f: (a: A) => A, g: (...rest: Array<void>) => A): A,
    chain<B>(f: (a: A) => OptionType<B>): OptionType<B>,
    concat(a: OptionType<A>): this,
    getOrElse(a: A): A,
    orElse<B>(a: B): B,
    static of<A>(a: A): OptionType<A>,
    static Some<A>(a: (a: A) => A, ...rest: void[]): OptionType<A>,
    static Some<A>(a: A, ...rest: Array<void>): OptionType<A>,
    static None: OptionType<A>
  }

  declare module.exports: typeof OptionType;
}

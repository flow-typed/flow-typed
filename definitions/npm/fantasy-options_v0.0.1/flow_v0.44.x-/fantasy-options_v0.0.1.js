declare module 'fantasy-options' {
    declare class OptionType<A> {
        ap<A>(a: OptionType<A>): OptionType<A>;
        map<B>(f: (a: A) => B): OptionType<B>;
        fold(f: (a: A) => A, g: (...rest: Array<void>) => A): A;
        chain<B>(f: (a: A) => OptionType<B>): OptionType<B>;
        concat<A>(a: OptionType<A>): OptionType<A>;
        getOrElse(a: A): A;
        orElse<B>(a: B): B;
        static of<A>(a: A): OptionType<A>;
        static Some<A>(a: A, ...rest: Array<void>): OptionType<A>;
        static None: OptionType<A>;
    }

    declare var exports: typeof OptionType;
}
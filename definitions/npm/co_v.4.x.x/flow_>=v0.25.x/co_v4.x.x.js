type thunk = (cb: Function, ...rest: Array<void>) => any;
type yieldablePieces = Promise | thunk | Generator | GeneratorFunction;
type yieldable = yieldablePieces | Array<yieldablePieces> | { [key: string] : yieldablePieces }
type GeneratorYieldable = Generator<yieldable, any, any>;
type GeneratorFunction = () => GeneratorYieldable;
type retVal = Promise<GeneratorYieldable> | Promise<GeneratorFunction> | Promise<() => GeneratorYieldable>;

declare module 'co' {
    declare function exports<T: retVal>(fn: GeneratorFunction, ...rest: Array<void>): Promise<T>;
    declare function exports<T: retVal>(gen: GeneratorYieldable, ...rest: Array<void>): Promise<T>;
    declare function wrap(gen: GeneratorFunction, ...rest: Array<void>): Promise<yieldable>;
}

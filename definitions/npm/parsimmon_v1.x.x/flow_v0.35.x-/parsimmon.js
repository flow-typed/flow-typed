/**
 * Flowtype definitions for parsimmon
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'parsimmon' {

    declare var npm$namespace$Parsimmon: {
        isParser: typeof Parsimmon$isParser,
        string: typeof Parsimmon$string,
        oneOf: typeof Parsimmon$oneOf,
        noneOf: typeof Parsimmon$noneOf,
        regexp: typeof Parsimmon$regexp,
        regex: typeof Parsimmon$regex,
        succeed: typeof Parsimmon$succeed,
        of: typeof Parsimmon$of,
        seq: typeof Parsimmon$seq,
        formatError: typeof Parsimmon$formatError,
        seqMap: typeof Parsimmon$seqMap,
        custom: typeof Parsimmon$custom,
        alt: typeof Parsimmon$alt,
        sepBy: typeof Parsimmon$sepBy,
        sepBy1: typeof Parsimmon$sepBy1,
        lazy: typeof Parsimmon$lazy,
        fail: typeof Parsimmon$fail,
        test: typeof Parsimmon$test,
        takeWhile: typeof Parsimmon$takeWhile,
    }
    declare export type Parsimmon$StreamType = string;

    declare export interface Parsimmon$Index {

        /**
         * zero-based character offset 
         */
        offset: number,

            /**
             * one-based line offset 
             */
            line: number,

            /**
             * one-based column offset 
             */
            column: number
    }

    declare export interface Parsimmon$Mark<T>{
        start: Parsimmon$Index,
        end: Parsimmon$Index,
        value: T
    }

    declare export interface Parsimmon$Result<T>{
        status: boolean,
        value?: T,
        expected?: string,
        index?: Parsimmon$Index
    }

    declare export interface Parsimmon$Parser<T>{

        /**
         * parse the string
         */
        parse(input: string): Parsimmon$Result<T>,

        /**
         * returns a new parser which tries parser, and if it fails uses otherParser.
         */
        or(otherParser: Parsimmon$Parser<T>): Parsimmon$Parser<T>,
        or<U>(otherParser: Parsimmon$Parser<U>): Parsimmon$Parser<any>,

        /**
         * returns a new parser which tries parser, and on success calls the given function
         * with the result of the parse, which is expected to return another parser, which
        will be tried next
        */
        chain<U>(next: (result: T) => Parsimmon$Parser<U>): Parsimmon$Parser<U>,

        /**
         * returns a new parser which tries parser, and on success calls the given function
         * with the result of the parse, which is expected to return another parser.
         */
        then<U>(call: (result: T) => Parsimmon$Parser<U>): Parsimmon$Parser<U>,

        /**
         * expects anotherParser to follow parser, and yields the result of anotherParser.
         * NB: the result of parser here is ignored.
         */
        then<U>(anotherParser: Parsimmon$Parser<U>): Parsimmon$Parser<U>,

        /**
         * transforms the output of parser with the given function.
         */
        map<U>(call: (result: T) => U): Parsimmon$Parser<U>,

        /**
         * expects otherParser after parser, but preserves the yield value of parser.
         */
        skip<U>(otherParser: Parsimmon$Parser<U>): Parsimmon$Parser<T>,

        /**
         * returns a new parser with the same behavior, but which yields aResult.
         */
        result<U>(aResult: U): Parsimmon$Parser<U>,

        /**
         * expects parser zero or more times, and yields an array of the results.
         */
        many(): Parsimmon$Parser<T[]>,

        /**
         * expects parser exactly n times, and yields an array of the results.
         */
        times(n: number): Parsimmon$Parser<T[]>,

        /**
         * expects parser between min and max times, and yields an array of the results.
         */
        times(min: number, max: number): Parsimmon$Parser<T[]>,

        /**
         * expects parser at most n times. Yields an array of the results.
         */
        atMost(n: number): Parsimmon$Parser<T[]>,

        /**
         * expects parser at least n times. Yields an array of the results.
         */
        atLeast(n: number): Parsimmon$Parser<T[]>,

        /**
         * returns a new parser whose failure message is the passed description.
         */
        mark(): Parsimmon$Parser<Parsimmon$Mark<T >> ,

        /**
         * Returns a new parser whose failure message is description.
         * For example, string('x').desc('the letter x') will indicate that 'the letter x' was expected.
         */
        desc(description: string): Parsimmon$Parser<T >
    }


    /**
     * Returns true if obj is a Parsimmon parser, otherwise false.
     */
    declare export function Parsimmon$isParser(obj: any): boolean


    /**
     * is a parser that expects to find "my-string", and will yield the same.
     */
    declare export function Parsimmon$string(string: string): Parsimmon$Parser<string >


        /**
         * Returns a parser that looks for exactly one character from string, and yields that character.
         */
        declare export function Parsimmon$oneOf(string: string): Parsimmon$Parser<string >


        /**
         * Returns a parser that looks for exactly one character NOT from string, and yields that character.
         */
        declare export function Parsimmon$noneOf(string: string): Parsimmon$Parser<string >


        /**
         * Returns a parser that looks for a match to the regexp and yields the given match group
         * (defaulting to the entire match). The regexp will always match starting at the current
        parse location. The regexp may only use the following flags: imu. Any other flag will
        result in an error being thrown.
        */
        declare export function Parsimmon$regexp(myregex: RegExp, group?: number): Parsimmon$Parser<string >


        /**
         * This was the original name for Parsimmon.regexp, but now it is just an alias.
         */
        declare export function Parsimmon$regex(myregex: RegExp, group?: number): Parsimmon$Parser<string >


        /**
         * Returns a parser that doesn't consume any of the string, and yields result.
         */
        declare export function Parsimmon$succeed<U>(result: U): Parsimmon$Parser<U >


        /**
         * This is an alias for Parsimmon.succeed(result).
         */
        declare export function Parsimmon$of<U>(result: U): Parsimmon$Parser<U >


        /**
         * accepts a variable number of parsers that it expects to find in order, yielding an array of the results.
         */
        declare export function Parsimmon$seq<T>(p1: Parsimmon$Parser<T>): Parsimmon$Parser<[T] >


        /**
         * Takes the string passed to parser.parse(string) and the error returned from
         * parser.parse(string) and turns it into a human readable error message string.
        Note that there are certainly better ways to format errors, so feel free to write your own.
        */
        declare export function Parsimmon$formatError<T>(string: string, error: Parsimmon$Result<T>): string


    /**
     * Matches all parsers sequentially, and passes their results as the arguments to a function.
     * Similar to calling Parsimmon.seq and then .map, but the values are not put in an array.
     */
    declare export function Parsimmon$seqMap<T, U>(p1: Parsimmon$Parser<T>, cb: (a1: T) => U): Parsimmon$Parser<U >

        declare export type Parsimmon$SuccessFunctionType<U>= (index: number, result: U) => Parsimmon$Result<U>;

    declare export type Parsimmon$FailureFunctionType<U>= (index: number, msg: string) => Parsimmon$Result<U>;

    declare export type Parsimmon$ParseFunctionType<U>= (stream: Parsimmon$StreamType, index: number) => Parsimmon$Result<U>;


    /**
     * allows to add custom primitive parsers.
     */
    declare export function Parsimmon$custom<U>(
            parsingFunction: (
                success: Parsimmon$SuccessFunctionType<U>,
                failure: Parsimmon$FailureFunctionType<U>) => Parsimmon$ParseFunctionType<U>): Parsimmon$Parser<U >


        /**
         * accepts a variable number of parsers, and yields the value of the first one that succeeds,
         * backtracking in between.
         */
        declare export function Parsimmon$alt<U>(...parsers: Parsimmon$Parser<U>[]): Parsimmon$Parser<U >


        /**
         * Accepts two parsers, and expects zero or more matches for content, separated by separator, yielding an array.
         */
        declare export function Parsimmon$sepBy<T>(
            content: Parsimmon$Parser<T>,
            separator: Parsimmon$Parser<T>): Parsimmon$Parser<T >


        /**
         * This is the same as Parsimmon.sepBy, but matches the content parser at least once.
         */
        declare export function Parsimmon$sepBy1<T>(
            content: Parsimmon$Parser<T>,
            separator: Parsimmon$Parser<T>): Parsimmon$Parser<T >


        /**
         * accepts a function that returns a parser, which is evaluated the first time the parser is used.
         * This is useful for referencing parsers that haven't yet been defined.
         */
        declare export function Parsimmon$lazy<U>(f: () => Parsimmon$Parser<U>): Parsimmon$Parser<U >


        /**
         * fail paring with a message
         */
        declare export function Parsimmon$fail(message: string): Parsimmon$Parser<void >

        declare export var letter: Parsimmon$Parser<string>;

    declare export var letters: Parsimmon$Parser<string>;

    declare export var digit: Parsimmon$Parser<string>;

    declare export var digits: Parsimmon$Parser<string>;

    declare export var whitespace: Parsimmon$Parser<string>;

    declare export var optWhitespace: Parsimmon$Parser<string>;

    declare export var any: Parsimmon$Parser<string>;

    declare export var all: Parsimmon$Parser<string>;

    declare export var eof: Parsimmon$Parser<void>;

    declare export var index: Parsimmon$Parser<Parsimmon$Index>;


    /**
     * Returns a parser that yield a single character if it passes the predicate
     */
    declare export function Parsimmon$test(predicate: (char: string) => boolean): Parsimmon$Parser<string >


        /**
         * Returns a parser yield a string containing all the next characters that pass the predicate
         */
        declare export function Parsimmon$takeWhile(predicate: (char: string) => boolean): Parsimmon$Parser<string >
        declare module.exports: typeof Parsimmon
}
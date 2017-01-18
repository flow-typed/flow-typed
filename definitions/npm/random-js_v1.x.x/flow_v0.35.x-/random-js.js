/**
 * Flowtype definitions for random-js
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$random: {
    Engine: typeof random$Engine,
    MT19937: typeof random$MT19937,
}
declare export function random$Engine(): number

declare export function random$MT19937(): number

declare export class Random {
    constructor(engine?: random$Engine): this;
    engines: {
        nativeMath: random$Engine,
        browserCrypto: random$Engine,
        mt19937: () => random$MT19937
    };
    integer(min: number, max: number): (engine: random$Engine) => number;
    real(
        min: number,
        max: number,
        inclusive: boolean): (engine: random$Engine) => number;
    bool(percentage?: number): (engine: random$Engine) => boolean;
    bool(numerator: number, denominator: number): (engine: random$Engine) => boolean;
    pick<T>(engine: random$Engine, array: Array<T>, begin?: number, end?: number): T;
    picker<T>(array: Array<T>, begin?: number, end?: number): (engine: random$Engine) => T;
    shuffle<T>(engine: random$Engine, array: Array<T>): Array<T>;
    sample<T>(engine: random$Engine, population: Array<T>, sampleSize: number): Array<T>;
    die(sideCount: number): (engine: random$Engine) => number;
    dice(sideCount: number, dieCount: number): (engine: random$Engine) => number;
    uuid4(engine: random$Engine): string;
    string(engine: random$Engine, length: number): string;
    string(
        pool: string,
        length: number): (engine: random$Engine, length: number) => string;
    hex(upperCase?: boolean): (engine: random$Engine, length: number) => string;
    date(start: Date, end: Date): (engine: random$Engine) => Date;
    integer(min: number, max: number): number;
    real(min: number, max: number, inclusive: boolean): number;
    bool(percentage?: number): (engine: random$Engine) => boolean;
    bool(numerator: number, denominator: number): boolean;
    pick<T>(engine: random$Engine, array: Array<T>, begin?: number, end?: number): T;
    picker<T>(array: Array<T>, begin?: number, end?: number): (engine: random$Engine) => T;
    shuffle<T>(engine: random$Engine, array: Array<T>): Array<T>;
    sample<T>(engine: random$Engine, population: Array<T>, sampleSize: number): Array<T>;
    die(sideCount: number): (engine: random$Engine) => number;
    dice(sideCount: number, dieCount: number): number;
    uuid4(engine: random$Engine): string;
    string(engine: random$Engine, length: number): string;
    string(pool: string, length: number): string;
    hex(upperCase?: boolean): string;
    date(start: Date, end: Date): Date
}
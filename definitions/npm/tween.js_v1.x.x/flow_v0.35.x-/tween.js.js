// @flow
/**
 * Flowtype definitions for tween.js
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$TWEEN: {
    getAll: typeof TWEEN$getAll,
    removeAll: typeof TWEEN$removeAll,
    add: typeof TWEEN$add,
    remove: typeof TWEEN$remove,
    update: typeof TWEEN$update,
}
declare export var REVISION: string;

declare export function TWEEN$getAll(): TWEEN$Tween[]

declare export function TWEEN$removeAll(): void

declare export function TWEEN$add(tween: TWEEN$Tween): void

declare export function TWEEN$remove(tween: TWEEN$Tween): void

declare export function TWEEN$update(time?: number): boolean

declare export class Tween {
    constructor(object?: any): this;
    to(properties: any, duration: number): TWEEN$Tween;
    start(time?: number): TWEEN$Tween;
    stop(): TWEEN$Tween;
    delay(amount: number): TWEEN$Tween;
    easing(easing: (k: number) => number): TWEEN$Tween;
    interpolation(interpolation: (v: number[], k: number) => number): TWEEN$Tween;
    chain(...tweens: TWEEN$Tween[]): TWEEN$Tween;
    onStart(callback: (object?: any) => void): TWEEN$Tween;
    onUpdate(callback: (object?: any) => void): TWEEN$Tween;
    onComplete(callback: (object?: any) => void): TWEEN$Tween;
    update(time: number): boolean;
    repeat(times: number): TWEEN$Tween;
    yoyo(enable: boolean): TWEEN$Tween
}

declare export var Easing: TweenEasing;

declare export var Interpolation: TweenInterpolation;
declare interface TweenEasing {
    Linear: {
            None(k: number): number
        },
        Quadratic: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Cubic: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Quartic: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Quintic: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Sinusoidal: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Exponential: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Circular: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Elastic: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Back: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        },
        Bounce: {
            In(k: number): number,
            Out(k: number): number,
            InOut(k: number): number
        }
}
declare interface TweenInterpolation {
    Linear(v: number[], k: number): number,
        Bezier(v: number[], k: number): number,
        CatmullRom(v: number[], k: number): number,
        Utils: {
            Linear(p0: number, p1: number, t: number): number,
            Bernstein(n: number, i: number): number,
            Factorial(n: number): number
        }
}
declare module 'tween.js' {
    declare module.exports: typeof TWEEN
}
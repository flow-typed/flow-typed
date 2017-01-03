// @flow
/**
 * Flowtype definitions for tweenjs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export class CSSPlugin {
    constructor(): this;
    cssSuffixMap: Object;
    install(): void
}

declare export class Ease {
    backIn: (amount: number) => number;
    backInOut: (amount: number) => number;
    backOut: (amount: number) => number;
    bounceIn: (amount: number) => number;
    bounceInOut: (amount: number) => number;
    bounceOut: (amount: number) => number;
    circIn: (amount: number) => number;
    circInOut: (amount: number) => number;
    circOut: (amount: number) => number;
    cubicIn: (amount: number) => number;
    cubicInOut: (amount: number) => number;
    cubicOut: (amount: number) => number;
    elasticIn: (amount: number) => number;
    elasticInOut: (amount: number) => number;
    elasticOut: (amount: number) => number;
    get(amount: number): (amount: number) => number;
    getBackIn(amount: number): (amount: number) => number;
    getBackInOut(amount: number): (amount: number) => number;
    getBackOut(amount: number): (amount: number) => number;
    getElasticIn(amplitude: number, period: number): (amount: number) => number;
    getElasticInOut(amplitude: number, period: number): (amount: number) => number;
    getElasticOut(amplitude: number, period: number): (amount: number) => number;
    getPowIn(pow: number): (amount: number) => number;
    getPowInOut(pow: number): (amount: number) => number;
    getPowOut(pow: number): (amount: number) => number;
    linear: (amount: number) => number;
    none: (amount: number) => number;
    quadIn: (amount: number) => number;
    quadInOut: (amount: number) => number;
    quadOut: (amount: number) => number;
    quartIn: (amount: number) => number;
    quartInOut: (amount: number) => number;
    quartOut: (amount: number) => number;
    quintIn: (amount: number) => number;
    quintInOut: (amount: number) => number;
    quintOut: (amount: number) => number;
    sineIn: (amount: number) => number;
    sineInOut: (amount: number) => number;
    sineOut: (amount: number) => number
}

declare export class MotionGuidePlugin {
    constructor(): this;
    install(): Object
}

declare export class Timeline mixins EventDispatcher {
    constructor(tweens: createjs$Tween[], labels: Object, props: Object): this;
    duration: number;
    ignoreGlobalPause: boolean;
    loop: boolean;
    position: Object;
    addLabel(label: string, position: number): void;
    addTween(...tween: createjs$Tween[]): void;
    getCurrentLabel(): string;
    getLabels(): Object[];
    gotoAndPlay(positionOrLabel: string | number): void;
    gotoAndStop(positionOrLabel: string | number): void;
    removeTween(...tween: createjs$Tween[]): void;
    resolve(positionOrLabel: string | number): number;
    setLabels(o: Object): void;
    setPaused(value: boolean): void;
    setPosition(value: number, actionsMode?: number): boolean;
    tick(delta: number): void;
    updateDuration(): void
}

declare export class Tween mixins EventDispatcher {
    constructor(target: Object, props?: Object, pluginData?: Object): this;
    duration: number;
    IGNORE: Object;
    ignoreGlobalPause: boolean;
    LOOP: number;
    loop: boolean;
    NONE: number;
    onChange: Function;
    passive: boolean;
    pluginData: Object;
    position: number;
    REVERSE: number;
    target: Object;
    call(
        callback: (tweenObject: createjs$Tween) => any,
        params?: any[],
        scope?: Object): createjs$Tween;
    call(
        callback: (...params: any[]) => any,
        params?: any[],
        scope?: Object): createjs$Tween;
    get(
        target: Object,
        props?: Object,
        pluginData?: Object,
        override?: boolean): createjs$Tween;
    hasActiveTweens(target?: Object): boolean;
    installPlugin(plugin: Object, properties: any[]): void;
    pause(tween: createjs$Tween): createjs$Tween;
    play(tween: createjs$Tween): createjs$Tween;
    removeAllTweens(): void;
    removeTweens(target: Object): void;
    set(props: Object, target?: Object): createjs$Tween;
    setPaused(value: boolean): createjs$Tween;
    setPosition(value: number, actionsMode: number): boolean;
    tick(delta: number, paused: boolean): void;
    tick(delta: number): void;
    to(props: Object, duration?: number, ease?: (t: number) => number): createjs$Tween;
    wait(duration: number, passive?: boolean): createjs$Tween
}

declare export class TweenJS {
    buildDate: string;
    version: string
}
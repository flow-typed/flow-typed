// @flow
/**
 * Flowtype definitions for easeljs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type NativeMouseEvent = {} & createjs$MouseEvent
declare export class AlphaMapFilter mixins Filter {
    constructor(alphaMap: HTMLImageElement | HTMLCanvasElement): this;
    alphaMap: HTMLImageElement | HTMLCanvasElement;
    clone(): createjs$AlphaMapFilter
}

declare export class AlphaMaskFilter mixins Filter {
    constructor(mask: HTMLImageElement | HTMLCanvasElement): this;
    mask: HTMLImageElement | HTMLCanvasElement;
    clone(): createjs$AlphaMaskFilter
}

declare export class Bitmap mixins DisplayObject {
    constructor(imageOrUrl: HTMLImageElement |
        HTMLCanvasElement |
        HTMLVideoElement |
        Object |
        string): this;
    image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    sourceRect: createjs$Rectangle;
    clone(): createjs$Bitmap
}

declare export class ScaleBitmap mixins DisplayObject {
    constructor(imageOrUrl: HTMLImageElement |
        HTMLCanvasElement |
        HTMLVideoElement |
        Object |
        string, scale9Grid: createjs$Rectangle): this;
    image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
    sourceRect: createjs$Rectangle;
    drawWidth: number;
    drawHeight: number;
    scale9Grid: createjs$Rectangle;
    snapToPixel: boolean;
    setDrawSize(newWidth: number, newHeight: number): void;
    clone(): createjs$ScaleBitmap
}

declare export class BitmapText mixins DisplayObject {
    constructor(text?: string, spriteSheet?: createjs$SpriteSheet): this;
    maxPoolSize: number;
    letterSpacing: number;
    lineHeight: number;
    spaceWidth: number;
    spriteSheet: createjs$SpriteSheet;
    text: string
}

declare export class BlurFilter mixins Filter {
    constructor(blurX?: number, blurY?: number, quality?: number): this;
    blurX: number;
    blurY: number;
    quality: number;
    clone(): createjs$BlurFilter
}

declare export class ButtonHelper {
    constructor(target: createjs$Sprite, outLabel?: string, overLabel?: string, downLabel?: string, play?: boolean, hitArea?: createjs$DisplayObject, hitLabel?: string): this;
    constructor(target: createjs$MovieClip, outLabel?: string, overLabel?: string, downLabel?: string, play?: boolean, hitArea?: createjs$DisplayObject, hitLabel?: string): this;
    downLabel: string | number;
    outLabel: string | number;
    overLabel: string | number;
    play: boolean;
    target: createjs$MovieClip | createjs$Sprite;
    enabled: boolean;

    /**
     * 
     * @deprecated  - use the 'enabled' property instead
     */
    setEnabled(value: boolean): void;

    /**
     * 
     * @deprecated  - use the 'enabled' property instead
     */
    getEnabled(): boolean;
    toString(): string
}

declare export class ColorFilter mixins Filter {
    constructor(redMultiplier?: number, greenMultiplier?: number, blueMultiplier?: number, alphaMultiplier?: number, redOffset?: number, greenOffset?: number, blueOffset?: number, alphaOffset?: number): this;
    alphaMultiplier: number;
    alphaOffset: number;
    blueMultiplier: number;
    blueOffset: number;
    greenMultiplier: number;
    greenOffset: number;
    redMultiplier: number;
    redOffset: number;
    clone(): createjs$ColorFilter
}

declare export class ColorMatrix {
    constructor(brightness?: number, contrast?: number, saturation?: number, hue?: number): this;
    adjustBrightness(value: number): createjs$ColorMatrix;
    adjustColor(
        brightness: number,
        contrast: number,
        saturation: number,
        hue: number): createjs$ColorMatrix;
    adjustContrast(value: number): createjs$ColorMatrix;
    adjustHue(value: number): createjs$ColorMatrix;
    adjustSaturation(value: number): createjs$ColorMatrix;
    clone(): createjs$ColorMatrix;
    concat(...matrix: number[]): createjs$ColorMatrix;
    concat(matrix: createjs$ColorMatrix): createjs$ColorMatrix;
    copy(...matrix: number[]): createjs$ColorMatrix;
    copy(matrix: createjs$ColorMatrix): createjs$ColorMatrix;
    reset(): createjs$ColorMatrix;
    setColor(
        brightness: number,
        contrast: number,
        saturation: number,
        hue: number): createjs$ColorMatrix;
    toArray(): number[];
    toString(): string
}

declare export class ColorMatrixFilter mixins Filter {
    constructor(matrix: number[] | createjs$ColorMatrix): this;
    matrix: number[] | createjs$ColorMatrix;
    clone(): createjs$ColorMatrixFilter
}

declare export class Container mixins DisplayObject {
    constructor(): this;
    children: createjs$DisplayObject[];
    mouseChildren: boolean;
    numChildren: number;
    tickChildren: boolean;
    addChild<T>(child: T): T;
    addChild<T>(child0: createjs$DisplayObject, lastChild: T): T;
    addChild<T>(
        child0: createjs$DisplayObject,
        child1: createjs$DisplayObject,
        lastChild: T): T;
    addChild<T>(
        child0: createjs$DisplayObject,
        child1: createjs$DisplayObject,
        child2: createjs$DisplayObject,
        lastChild: T): T;
    addChild(...children: createjs$DisplayObject[]): createjs$DisplayObject;
    addChildAt<T>(child: T, index: number): T;
    addChildAt<T>(child0: createjs$DisplayObject, lastChild: T, index: number): T;
    addChildAt<T>(
        child0: createjs$DisplayObject,
        child1: createjs$DisplayObject,
        lastChild: T,
        index: number): T;
    addChildAt(...childOrIndex: (createjs$DisplayObject | number)[]): createjs$DisplayObject;
    clone(recursive?: boolean): createjs$Container;
    contains(child: createjs$DisplayObject): boolean;
    getChildAt(index: number): createjs$DisplayObject;
    getChildByName(name: string): createjs$DisplayObject;
    getChildIndex(child: createjs$DisplayObject): number;

    /**
     * 
     * @deprecated  - use numChildren property instead.
     */
    getNumChildren(): number;
    getObjectsUnderPoint(x: number, y: number, mode: number): createjs$DisplayObject[];
    getObjectUnderPoint(x: number, y: number, mode: number): createjs$DisplayObject;
    removeAllChildren(): void;
    removeChild(...child: createjs$DisplayObject[]): boolean;
    removeChildAt(...index: number[]): boolean;
    setChildIndex(child: createjs$DisplayObject, index: number): void;
    sortChildren(
        sortFunction: (a: createjs$DisplayObject, b: createjs$DisplayObject) => number): void;
    swapChildren(child1: createjs$DisplayObject, child2: createjs$DisplayObject): void;
    swapChildrenAt(index1: number, index2: number): void
}

declare export class DisplayObject mixins EventDispatcher {
    constructor(): this;
    alpha: number;
    cacheCanvas: HTMLCanvasElement | Object;
    cacheID: number;
    compositeOperation: string;
    cursor: string;
    filters: createjs$Filter[];
    hitArea: createjs$DisplayObject;
    id: number;
    mask: createjs$Shape;
    mouseEnabled: boolean;
    name: string;
    parent: createjs$Container;
    regX: number;
    regY: number;
    rotation: number;
    scaleX: number;
    scaleY: number;
    shadow: createjs$Shadow;
    skewX: number;
    skewY: number;
    snapToPixel: boolean;
    stage: createjs$Stage;
    suppressCrossDomainErrors: boolean;
    tickEnabled: boolean;
    transformMatrix: createjs$Matrix2D;
    visible: boolean;
    x: number;
    y: number;
    cache(x: number, y: number, width: number, height: number, scale?: number): void;
    clone(): createjs$DisplayObject;
    draw(ctx: CanvasRenderingContext2D, ignoreCache?: boolean): boolean;
    getBounds(): createjs$Rectangle;
    getCacheDataURL(): string;
    getConcatenatedDisplayProps(props?: createjs$DisplayProps): createjs$DisplayProps;
    getConcatenatedMatrix(mtx?: createjs$Matrix2D): createjs$Matrix2D;
    getMatrix(matrix?: createjs$Matrix2D): createjs$Matrix2D;

    /**
     * 
     * @deprecated  
     */
    getStage(): createjs$Stage;
    getTransformedBounds(): createjs$Rectangle;
    globalToLocal(x: number, y: number, pt?: createjs$Point | Object): createjs$Point;
    hitTest(x: number, y: number): boolean;
    isVisible(): boolean;
    localToGlobal(x: number, y: number, pt?: createjs$Point | Object): createjs$Point;
    localToLocal(
        x: number,
        y: number,
        target: createjs$DisplayObject,
        pt?: createjs$Point | Object): createjs$Point;
    set(props: Object): createjs$DisplayObject;
    setBounds(x: number, y: number, width: number, height: number): void;
    setTransform(
        x?: number,
        y?: number,
        scaleX?: number,
        scaleY?: number,
        rotation?: number,
        skewX?: number,
        skewY?: number,
        regX?: number,
        regY?: number): createjs$DisplayObject;
    uncache(): void;
    updateCache(compositeOperation?: string): void;
    updateContext(ctx: CanvasRenderingContext2D): void
}

declare export class DisplayProps {
    constructor(visible?: number, alpha?: number, shadow?: number, compositeOperation?: number, matrix?: number): this;
    alpha: number;
    compositeOperation: string;
    matrix: createjs$Matrix2D;
    shadow: createjs$Shadow;
    visible: boolean;
    append(
        visible: boolean,
        alpha: number,
        shadow: createjs$Shadow,
        compositeOperation: string,
        matrix?: createjs$Matrix2D): createjs$DisplayProps;
    clone(): createjs$DisplayProps;
    identity(): createjs$DisplayProps;
    prepend(
        visible: boolean,
        alpha: number,
        shadow: createjs$Shadow,
        compositeOperation: string,
        matrix?: createjs$Matrix2D): createjs$DisplayProps;
    setValues(
        visible?: boolean,
        alpha?: number,
        shadow?: number,
        compositeOperation?: number,
        matrix?: number): createjs$DisplayProps
}

declare export class DOMElement mixins DisplayObject {
    constructor(htmlElement: HTMLElement): this;
    htmlElement: HTMLElement;
    clone(): createjs$DisplayObject;
    set(props: Object): createjs$DOMElement;
    setTransform(
        x?: number,
        y?: number,
        scaleX?: number,
        scaleY?: number,
        rotation?: number,
        skewX?: number,
        skewY?: number,
        regX?: number,
        regY?: number): createjs$DOMElement
}

declare export class EaselJS {
    buildDate: string;
    version: string
}

declare export class Filter {
    constructor(): this;
    applyFilter(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        width: number,
        height: number,
        targetCtx?: CanvasRenderingContext2D,
        targetX?: number,
        targetY?: number): boolean;
    clone(): createjs$Filter;
    getBounds(): createjs$Rectangle;
    toString(): string
}

declare export class Graphics {
    constructor(): this;
    BASE_64: Object;
    beginCmd: Graphics$BeginPath;
    command: Object;
    instructions: Object[];
    STROKE_CAPS_MAP: string[];
    STROKE_JOINTS_MAP: string[];
    append(command: Object, clean?: boolean): createjs$Graphics;
    arc(
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean): createjs$Graphics;
    arcTo(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        radius: number): createjs$Graphics;
    beginBitmapFill(
        image: Object,
        repetition?: string,
        matrix?: createjs$Matrix2D): createjs$Graphics;
    beginBitmapStroke(image: Object, repetition?: string): createjs$Graphics;
    beginFill(color: string): createjs$Graphics;
    beginLinearGradientFill(
        colors: string[],
        ratios: number[],
        x0: number,
        y0: number,
        x1: number,
        y1: number): createjs$Graphics;
    beginLinearGradientStroke(
        colors: string[],
        ratios: number[],
        x0: number,
        y0: number,
        x1: number,
        y1: number): createjs$Graphics;
    beginRadialGradientFill(
        colors: string[],
        ratios: number[],
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number): createjs$Graphics;
    beginRadialGradientStroke(
        colors: string[],
        ratios: number[],
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number): createjs$Graphics;
    beginStroke(color: string): createjs$Graphics;
    bezierCurveTo(
        cp1x: number,
        cp1y: number,
        cp2x: number,
        cp2y: number,
        x: number,
        y: number): createjs$Graphics;
    clear(): createjs$Graphics;
    clone(): createjs$Graphics;
    closePath(): createjs$Graphics;
    curveTo(cpx: number, cpy: number, x: number, y: number): createjs$Graphics;
    decodePath(str: string): createjs$Graphics;
    draw(ctx: CanvasRenderingContext2D): void;
    drawAsPath(ctx: CanvasRenderingContext2D): void;
    drawCircle(x: number, y: number, radius: number): createjs$Graphics;
    drawEllipse(x: number, y: number, w: number, h: number): createjs$Graphics;
    drawPolyStar(
        x: number,
        y: number,
        radius: number,
        sides: number,
        pointSize: number,
        angle: number): createjs$Graphics;
    drawRect(x: number, y: number, w: number, h: number): createjs$Graphics;
    drawRoundRect(x: number, y: number, w: number, h: number, radius: number): createjs$Graphics;
    drawRoundRectComplex(
        x: number,
        y: number,
        w: number,
        h: number,
        radiusTL: number,
        radiusTR: number,
        radiusBR: number,
        radisBL: number): createjs$Graphics;
    endFill(): createjs$Graphics;
    endStroke(): createjs$Graphics;
    getHSL(hue: number, saturation: number, lightness: number, alpha?: number): string;

    /**
     * 
     * @deprecated  - use the instructions property instead
     */
    getInstructions(): Object[];
    getRGB(r: number, g: number, b: number, alpha?: number): string;
    inject(callback: (data: any) => any, data: any): createjs$Graphics;
    isEmpty(): boolean;
    lineTo(x: number, y: number): createjs$Graphics;
    moveTo(x: number, y: number): createjs$Graphics;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): createjs$Graphics;
    rect(x: number, y: number, w: number, h: number): createjs$Graphics;
    setStrokeStyle(
        thickness: number,
        caps?: string | number,
        joints?: string | number,
        miterLimit?: number,
        ignoreScale?: boolean): createjs$Graphics;
    setStrokeDash(segments?: number[], offset?: number): createjs$Graphics;
    store(): createjs$Graphics;
    toString(): string;
    unstore(): createjs$Graphics;
    a(
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean): createjs$Graphics;
    at(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        radius: number): createjs$Graphics;
    bf(
        image: Object,
        repetition?: string,
        matrix?: createjs$Matrix2D): createjs$Graphics;
    bs(image: Object, repetition?: string): createjs$Graphics;
    f(color: string): createjs$Graphics;
    lf(
        colors: string[],
        ratios: number[],
        x0: number,
        y0: number,
        x1: number,
        y1: number): createjs$Graphics;
    ls(
        colors: string[],
        ratios: number[],
        x0: number,
        y0: number,
        x1: number,
        y1: number): createjs$Graphics;
    rf(
        colors: string[],
        ratios: number[],
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number): createjs$Graphics;
    rs(
        colors: string[],
        ratios: number[],
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number): createjs$Graphics;
    s(color: string): createjs$Graphics;
    bt(
        cp1x: number,
        cp1y: number,
        cp2x: number,
        cp2y: number,
        x: number,
        y: number): createjs$Graphics;
    c(): createjs$Graphics;
    cp(): createjs$Graphics;
    p(str: string): createjs$Graphics;
    dc(x: number, y: number, radius: number): createjs$Graphics;
    de(x: number, y: number, w: number, h: number): createjs$Graphics;
    dp(
        x: number,
        y: number,
        radius: number,
        sides: number,
        pointSize: number,
        angle: number): createjs$Graphics;
    dr(x: number, y: number, w: number, h: number): createjs$Graphics;
    rr(x: number, y: number, w: number, h: number, radius: number): createjs$Graphics;
    rc(
        x: number,
        y: number,
        w: number,
        h: number,
        radiusTL: number,
        radiusTR: number,
        radiusBR: number,
        radisBL: number): createjs$Graphics;
    ef(): createjs$Graphics;
    es(): createjs$Graphics;
    lt(x: number, y: number): createjs$Graphics;
    mt(x: number, y: number): createjs$Graphics;
    qt(cpx: number, cpy: number, x: number, y: number): createjs$Graphics;
    r(x: number, y: number, w: number, h: number): createjs$Graphics;
    ss(
        thickness: number,
        caps?: string | number,
        joints?: string | number,
        miterLimit?: number,
        ignoreScale?: boolean): createjs$Graphics;
    sd(segments?: number[], offset?: number): createjs$Graphics
}

declare export class Arc {
    constructor(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: number): this;
    anticlockwise: number;
    endAngle: number;
    radius: number;
    startAngle: number;
    x: number;
    y: number
}

declare export class ArcTo {
    constructor(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    radius: number
}

declare export class BeginPath {}

declare export class BezierCurveTo {
    constructor(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    cp1x: number;
    cp1y: number;
    cp2x: number;
    cp2y: number;
    x: number;
    y: number
}

declare export class Circle {
    constructor(x: number, y: number, radius: number): this;
    x: number;
    y: number;
    radius: number
}

declare export class ClosePath {}

declare export class Fill {
    constructor(style: Object, matrix?: createjs$Matrix2D): this;
    style: Object;
    matrix: createjs$Matrix2D;
    bitmap(image: HTMLImageElement, repetition?: string): Graphics$Fill;
    linearGradient(
        colors: number[],
        ratios: number[],
        x0: number,
        y0: number,
        x1: number,
        y1: number): Graphics$Fill;
    radialGradient(
        colors: number[],
        ratios: number[],
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number): Graphics$Fill
}

declare export class LineTo {
    constructor(x: number, y: number): this;
    x: number;
    y: number
}

declare export class MoveTo {
    constructor(x: number, y: number): this;
    x: number;
    y: number
}

declare export class PolyStar {
    constructor(x: number, y: number, radius: number, sides: number, pointSize: number, angle: number): this;
    angle: number;
    pointSize: number;
    radius: number;
    sides: number;
    x: number;
    y: number
}

declare export class QuadraticCurveTo {
    constructor(cpx: number, cpy: number, x: number, y: number): this;
    cpx: number;
    cpy: number;
    x: number;
    y: number
}

declare export class Rect {
    constructor(x: number, y: number, w: number, h: number): this;
    x: number;
    y: number;
    w: number;
    h: number
}

declare export class RoundRect {
    constructor(x: number, y: number, w: number, h: number, radiusTL: number, radiusTR: number, radiusBR: number, radiusBL: number): this;
    x: number;
    y: number;
    w: number;
    h: number;
    radiusTL: number;
    radiusTR: number;
    radiusBR: number;
    radiusBL: number
}

declare export class Stroke {
    constructor(style: Object, ignoreScale: boolean): this;
    style: Object;
    ignoreScale: boolean;
    bitmap(image: HTMLImageElement, repetition?: string): Graphics$Stroke;
    linearGradient(
        colors: number[],
        ratios: number[],
        x0: number,
        y0: number,
        x1: number,
        y1: number): Graphics$Stroke;
    radialGradient(
        colors: number[],
        ratios: number[],
        x0: number,
        y0: number,
        r0: number,
        x1: number,
        y1: number,
        r1: number): Graphics$Stroke
}

declare export class StrokeStyle {
    constructor(width: number, caps: string, joints: number, miterLimit: number): this;
    caps: string;
    joints: string;
    miterLimit: number;
    width: number
}

declare export class Matrix2D {
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): this;
    a: number;
    b: number;
    c: number;
    d: number;
    DEG_TO_RAD: number;
    identity: createjs$Matrix2D;
    tx: number;
    ty: number;
    append(
        a: number,
        b: number,
        c: number,
        d: number,
        tx: number,
        ty: number): createjs$Matrix2D;
    appendMatrix(matrix: createjs$Matrix2D): createjs$Matrix2D;
    appendTransform(
        x: number,
        y: number,
        scaleX: number,
        scaleY: number,
        rotation: number,
        skewX: number,
        skewY: number,
        regX?: number,
        regY?: number): createjs$Matrix2D;
    clone(): createjs$Matrix2D;
    copy(matrix: createjs$Matrix2D): createjs$Matrix2D;
    decompose(): {
        x: number,
        y: number,
        scaleX: number,
        scaleY: number,
        rotation: number,
        skewX: number,
        skewY: number
    };
    decompose(target: Object): createjs$Matrix2D;
    equals(matrix: createjs$Matrix2D): boolean;
    identity(): createjs$Matrix2D;
    invert(): createjs$Matrix2D;
    isIdentity(): boolean;
    prepend(
        a: number,
        b: number,
        c: number,
        d: number,
        tx: number,
        ty: number): createjs$Matrix2D;
    prependMatrix(matrix: createjs$Matrix2D): createjs$Matrix2D;
    prependTransform(
        x: number,
        y: number,
        scaleX: number,
        scaleY: number,
        rotation: number,
        skewX: number,
        skewY: number,
        regX?: number,
        regY?: number): createjs$Matrix2D;
    rotate(angle: number): createjs$Matrix2D;
    scale(x: number, y: number): createjs$Matrix2D;
    setValues(
        a?: number,
        b?: number,
        c?: number,
        d?: number,
        tx?: number,
        ty?: number): createjs$Matrix2D;
    skew(skewX: number, skewY: number): createjs$Matrix2D;
    toString(): string;
    transformPoint(x: number, y: number, pt?: createjs$Point | Object): createjs$Point;
    translate(x: number, y: number): createjs$Matrix2D
}

declare export class MouseEvent mixins Event {
    constructor(type: string, bubbles: boolean, cancelable: boolean, stageX: number, stageY: number, nativeEvent: NativeMouseEvent, pointerID: number, primary: boolean, rawX: number, rawY: number): this;
    isTouch: boolean;
    localX: number;
    localY: number;
    nativeEvent: NativeMouseEvent;
    pointerID: number;
    primary: boolean;
    rawX: number;
    rawY: number;
    stageX: number;
    stageY: number;
    mouseMoveOutside: boolean;
    clone(): createjs$MouseEvent;
    addEventListener(
        type: string,
        listener: (eventObj: Object) => boolean,
        useCapture?: boolean): Function;
    addEventListener(
        type: string,
        listener: (eventObj: Object) => void,
        useCapture?: boolean): Function;
    addEventListener(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => boolean
        },
        useCapture?: boolean): Object;
    addEventListener(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => void
        },
        useCapture?: boolean): Object;
    dispatchEvent(eventObj: Object | string | Event, target?: Object): boolean;
    hasEventListener(type: string): boolean;
    off(
        type: string,
        listener: (eventObj: Object) => boolean,
        useCapture?: boolean): void;
    off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
    off(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => boolean
        },
        useCapture?: boolean): void;
    off(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => void
        },
        useCapture?: boolean): void;
    off(type: string, listener: Function, useCapture?: boolean): void;
    on(
        type: string,
        listener: (eventObj: Object) => boolean,
        scope?: Object,
        once?: boolean,
        data?: any,
        useCapture?: boolean): Function;
    on(
        type: string,
        listener: (eventObj: Object) => void,
        scope?: Object,
        once?: boolean,
        data?: any,
        useCapture?: boolean): Function;
    on(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => boolean
        },
        scope?: Object,
        once?: boolean,
        data?: any,
        useCapture?: boolean): Object;
    on(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => void
        },
        scope?: Object,
        once?: boolean,
        data?: any,
        useCapture?: boolean): Object;
    removeAllEventListeners(type?: string): void;
    removeEventListener(
        type: string,
        listener: (eventObj: Object) => boolean,
        useCapture?: boolean): void;
    removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
    removeEventListener(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => boolean
        },
        useCapture?: boolean): void;
    removeEventListener(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => void
        },
        useCapture?: boolean): void;
    removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
    toString(): string;
    willTrigger(type: string): boolean
}

declare export class MovieClip mixins Container {
    constructor(mode?: string, startPosition?: number, loop?: boolean, labels?: Object): this;
    actionsEnabled: boolean;
    autoReset: boolean;
    buildDate: string;
    currentFrame: number;
    totalFrames: number;
    currentLabel: string;
    frameBounds: createjs$Rectangle[];
    framerate: number;
    INDEPENDENT: string;
    labels: Object[];
    loop: boolean;
    mode: string;
    paused: boolean;
    SINGLE_FRAME: string;
    startPosition: number;
    SYNCHED: string;
    timeline: Timeline;
    duration: number;
    version: string;
    advance(time?: number): void;
    clone(): createjs$MovieClip;

    /**
     * 
     * @deprecated  - use 'currentLabel' property instead
     */
    getCurrentLabel(): string;

    /**
     * 
     * @deprecated  - use 'labels' property instead
     */
    getLabels(): Object[];
    gotoAndPlay(positionOrLabel: string | number): void;
    gotoAndStop(positionOrLabel: string | number): void;
    play(): void;
    stop(): void
}

declare export class MovieClipPlugin {
    tween(
        tween: Tween,
        prop: string,
        value: string | number | boolean,
        startValues: any[],
        endValues: any[],
        ratio: number,
        wait: Object,
        end: Object): void
}

declare export class Point {
    constructor(x?: number, y?: number): this;
    x: number;
    y: number;
    clone(): createjs$Point;
    copy(point: createjs$Point): createjs$Point;
    setValues(x?: number, y?: number): createjs$Point;
    toString(): string
}

declare export class Rectangle {
    constructor(x?: number, y?: number, width?: number, height?: number): this;
    height: number;
    width: number;
    x: number;
    y: number;
    clone(): createjs$Rectangle;
    contains(x: number, y: number, width?: number, height?: number): boolean;
    copy(rectangle: createjs$Rectangle): createjs$Rectangle;
    extend(x: number, y: number, width?: number, height?: number): createjs$Rectangle;
    intersection(rect: createjs$Rectangle): createjs$Rectangle;
    intersects(rect: createjs$Rectangle): boolean;
    isEmpty(): boolean;
    setValues(x?: number, y?: number, width?: number, height?: number): createjs$Rectangle;
    toString(): string;
    union(rect: createjs$Rectangle): createjs$Rectangle
}

declare export class Shadow {
    constructor(color: string, offsetX: number, offsetY: number, blur: number): this;
    blur: number;
    color: string;
    identity: createjs$Shadow;
    offsetX: number;
    offsetY: number;
    clone(): createjs$Shadow;
    toString(): string
}

declare export class Shape mixins DisplayObject {
    constructor(graphics?: createjs$Graphics): this;
    graphics: createjs$Graphics;
    clone(recursive?: boolean): createjs$Shape;
    set(props: Object): createjs$Shape;
    setTransform(
        x?: number,
        y?: number,
        scaleX?: number,
        scaleY?: number,
        rotation?: number,
        skewX?: number,
        skewY?: number,
        regX?: number,
        regY?: number): createjs$Shape
}

declare export class Sprite mixins DisplayObject {
    constructor(spriteSheet: createjs$SpriteSheet, frameOrAnimation?: string | number): this;
    currentAnimation: string;
    currentAnimationFrame: number;
    currentFrame: number;
    framerate: number;

    /**
     * 
     * @deprecated  
     */
    offset: number;
    paused: boolean;
    spriteSheet: createjs$SpriteSheet;
    advance(time?: number): void;
    clone(): createjs$Sprite;
    getBounds(): createjs$Rectangle;
    gotoAndPlay(frameOrAnimation: string | number): void;
    gotoAndStop(frameOrAnimation: string | number): void;
    play(): void;
    set(props: Object): createjs$Sprite;
    setTransform(
        x?: number,
        y?: number,
        scaleX?: number,
        scaleY?: number,
        rotation?: number,
        skewX?: number,
        skewY?: number,
        regX?: number,
        regY?: number): createjs$Sprite;
    stop(): void
}

declare export class SpriteContainer mixins Container {
    constructor(spriteSheet?: createjs$SpriteSheet): this;
    spriteSheet: createjs$SpriteSheet
}

declare interface createjs$SpriteSheetAnimation {
    frames: number[],
        speed: number,
        name: string,
        next: string
}

declare interface createjs$SpriteSheetFrame {
    image: HTMLImageElement,
        rect: createjs$Rectangle
}

declare export class SpriteSheet mixins EventDispatcher {
    constructor(data: Object): this;
    animations: string[];
    complete: boolean;
    framerate: number;
    clone(): createjs$SpriteSheet;
    getAnimation(name: string): createjs$SpriteSheetAnimation;

    /**
     * 
     * @deprecated  - use the 'animations' property instead
     */
    getAnimations(): string[];
    getFrame(frameIndex: number): createjs$SpriteSheetFrame;
    getFrameBounds(frameIndex: number, rectangle?: createjs$Rectangle): createjs$Rectangle;
    getNumFrames(animation: string): number
}

declare export class SpriteSheetBuilder mixins EventDispatcher {
    constructor(): this;
    maxHeight: number;
    maxWidth: number;
    padding: number;
    progress: number;
    scale: number;
    spriteSheet: createjs$SpriteSheet;
    timeSlice: number;
    addAnimation(
        name: string,
        frames: number[],
        next?: string | boolean,
        frequency?: number): void;
    addFrame(
        source: createjs$DisplayObject,
        sourceRect?: createjs$Rectangle,
        scale?: number,
        setupFunction?: () => any,
        setupData?: Object): number;
    addMovieClip(
        source: createjs$MovieClip,
        sourceRect?: createjs$Rectangle,
        scale?: number,
        setupFunction?: () => any,
        setupData?: Object,
        labelFunction?: () => any): void;
    build(): createjs$SpriteSheet;
    buildAsync(timeSlice?: number): void;
    clone(): void;
    stopAsync(): void
}

declare export class SpriteSheetUtils {

    /**
     * 
     * @deprecated  
     */
    addFlippedFrames(
        spriteSheet: createjs$SpriteSheet,
        horizontal?: boolean,
        vertical?: boolean,
        both?: boolean): void;
    extractFrame(
        spriteSheet: createjs$SpriteSheet,
        frameOrAnimation: number | string): HTMLImageElement;

    /**
     * 
     * @deprecated  
     */
    mergeAlpha(
        rgbImage: HTMLImageElement,
        alphaImage: HTMLImageElement,
        canvas?: HTMLCanvasElement): HTMLCanvasElement
}

declare export class SpriteStage mixins Stage {
    constructor(canvas: HTMLCanvasElement | string, preserveDrawingBuffer?: boolean, antialias?: boolean): this;
    INDICES_PER_BOX: number;
    isWebGL: boolean;
    MAX_BOXES_POINTS_INCREMENT: number;
    MAX_INDEX_SIZE: number;
    NUM_VERTEX_PROPERTIES: number;
    NUM_VERTEX_PROPERTIES_PER_BOX: number;
    POINTS_PER_BOX: number;
    clearImageTexture(image: Object): void;
    updateViewport(width: number, height: number): void
}

declare export class Stage mixins Container {
    constructor(canvas: HTMLCanvasElement | string | Object): this;
    autoClear: boolean;
    canvas: HTMLCanvasElement | Object;
    drawRect: createjs$Rectangle;
    handleEvent: Function;
    mouseInBounds: boolean;
    mouseMoveOutside: boolean;
    mouseX: number;
    mouseY: number;
    nextStage: createjs$Stage;

    /**
     * 
     * @deprecated  
     */
    preventSelection: boolean;
    snapToPixelEnabled: boolean;
    tickOnUpdate: boolean;
    clear(): void;
    clone(): createjs$Stage;
    enableDOMEvents(enable?: boolean): void;
    enableMouseOver(frequency?: number): void;
    tick(props?: Object): void;
    toDataURL(backgroundColor: string, mimeType: string): string;
    update(...arg: any[]): void
}

declare export class Text mixins DisplayObject {
    constructor(text?: string, font?: string, color?: string): this;
    color: string;
    font: string;
    lineHeight: number;
    lineWidth: number;
    maxWidth: number;
    outline: number;
    text: string;
    textAlign: string;
    textBaseline: string;
    clone(): createjs$Text;
    getMeasuredHeight(): number;
    getMeasuredLineHeight(): number;
    getMeasuredWidth(): number;
    getMetrics(): Object;
    set(props: Object): createjs$Text;
    setTransform(
        x?: number,
        y?: number,
        scaleX?: number,
        scaleY?: number,
        rotation?: number,
        skewX?: number,
        skewY?: number,
        regX?: number,
        regY?: number): createjs$Text
}

declare export class Ticker {
    framerate: number;
    interval: number;
    maxDelta: number;
    paused: boolean;
    RAF: string;
    RAF_SYNCHED: string;
    TIMEOUT: string;
    timingMode: string;

    /**
     * 
     * @deprecated  
     */
    useRAF: boolean;
    getEventTime(runTime?: boolean): number;

    /**
     * 
     * @deprecated  - use the 'framerate' property instead
     */
    getFPS(): number;

    /**
     * 
     * @deprecated  - use the 'interval' property instead
     */
    getInterval(): number;
    getMeasuredFPS(ticks?: number): number;
    getMeasuredTickTime(ticks?: number): number;

    /**
     * 
     * @deprecated  - use the 'paused' property instead
     */
    getPaused(): boolean;
    getTicks(pauseable?: boolean): number;
    getTime(runTime?: boolean): number;
    init(): void;
    reset(): void;

    /**
     * 
     * @deprecated  - use the 'framerate' property instead
     */
    setFPS(value: number): void;

    /**
     * 
     * @deprecated  - use the 'interval' property instead
     */
    setInterval(interval: number): void;

    /**
     * 
     * @deprecated  - use the 'paused' property instead
     */
    setPaused(value: boolean): void;
    addEventListener(type: string, listener: createjs$Stage, useCapture?: boolean): createjs$Stage;
    addEventListener(
        type: string,
        listener: (eventObj: Object) => boolean,
        useCapture?: boolean): Function;
    addEventListener(
        type: string,
        listener: (eventObj: Object) => void,
        useCapture?: boolean): Function;
    addEventListener(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => boolean
        },
        useCapture?: boolean): Object;
    addEventListener(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => void
        },
        useCapture?: boolean): Object;
    dispatchEvent(eventObj: Object | string | Event, target?: Object): boolean;
    hasEventListener(type: string): boolean;
    off(
        type: string,
        listener: (eventObj: Object) => boolean,
        useCapture?: boolean): void;
    off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
    off(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => boolean
        },
        useCapture?: boolean): void;
    off(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => void
        },
        useCapture?: boolean): void;
    off(type: string, listener: Function, useCapture?: boolean): void;
    on(
        type: string,
        listener: (eventObj: Object) => boolean,
        scope?: Object,
        once?: boolean,
        data?: any,
        useCapture?: boolean): Function;
    on(
        type: string,
        listener: (eventObj: Object) => void,
        scope?: Object,
        once?: boolean,
        data?: any,
        useCapture?: boolean): Function;
    on(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => boolean
        },
        scope?: Object,
        once?: boolean,
        data?: any,
        useCapture?: boolean): Object;
    on(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => void
        },
        scope?: Object,
        once?: boolean,
        data?: any,
        useCapture?: boolean): Object;
    removeAllEventListeners(type?: string): void;
    removeEventListener(
        type: string,
        listener: (eventObj: Object) => boolean,
        useCapture?: boolean): void;
    removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
    removeEventListener(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => boolean
        },
        useCapture?: boolean): void;
    removeEventListener(
        type: string,
        listener: {
            handleEvent: (eventObj: Object) => void
        },
        useCapture?: boolean): void;
    removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
    toString(): string;
    willTrigger(type: string): boolean
}

declare export class TickerEvent {
    target: Object;
    type: string;
    paused: boolean;
    delta: number;
    time: number;
    runTime: number
}

declare export class Touch {
    disable(stage: createjs$Stage): void;
    enable(stage: createjs$Stage, singleTouch?: boolean, allowDefault?: boolean): boolean;
    isSupported(): boolean
}

declare export class UID {
    get(): number
}
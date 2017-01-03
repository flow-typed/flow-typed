/**
 * Flowtype definitions for noVNC
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface NvPoint {
    x: number,
        y: number
}
declare interface NvFeatures {
    xpath: boolean,
        air: boolean,
        query: boolean
}
declare interface NvEngine {
    presto: boolean,
        trident: boolean,
        webkit: boolean,
        gecko: boolean
}
declare interface NvFlash {
    version: number,
        build: number
}
declare interface NvBox {
    x: number,
        y: number,
        w: number,
        h: number
}
declare interface NvCleanDirtyBox {
    cleanBox: NvBox,
        dirtyBoxes: NvBox[]
}
declare interface NvUtilStatic {
    init_logging(level?: string): void,
        get_logging(): string,
        conf_default(
            cfg: << UNKNOWN PARAM FORMAT >> ,
            api: << UNKNOWN PARAM FORMAT >> ,
            defaults: << UNKNOWN PARAM FORMAT >> ,
            v: << UNKNOWN PARAM FORMAT >> ,
            mode: << UNKNOWN PARAM FORMAT >> ,
            type: << UNKNOWN PARAM FORMAT >> ,
            defval: << UNKNOWN PARAM FORMAT >> ,
            desc: << UNKNOWN PARAM FORMAT >> ): void,
        conf_defaults(
            cfg: << UNKNOWN PARAM FORMAT >> ,
            api: << UNKNOWN PARAM FORMAT >> ,
            defaults: << UNKNOWN PARAM FORMAT >> ,
            arr: << UNKNOWN PARAM FORMAT >> ): void,
        get_include_uri(): string,
        load_scripts(files: string[]): void,
        getPosition(obj: HTMLElement): NvPoint,
        getEventPosition(e: Event, obj: HTMLElement, scale: number): NvPoint,
        addEvent(obj: HTMLElement, evType: string, fn: Function): void,
        removeEvent(obj: HTMLElement, evType: string, fn: Function): void,
        stopEvent(e: Event): void,
        Features: NvFeatures,
        Engine: NvEngine,
        Flash(): NvFlash
}
declare interface NvRenderAction {
    type: string,
        old_x: number,
        old_y: number,
        x: number,
        y: number,
        width: number,
        height: number
}
declare interface NvRFBDefaults {
    target?: HTMLCanvasElement,
        focusContainer?: HTMLElement,
        encrypt?: boolean,
        true_color?: boolean,
        local_cursor?: boolean,
        shared?: boolean,
        view_only?: boolean,
        connectTimeout?: number,
        disconnectTimeout?: number,
        viewportDrag?: boolean,
        check_rate?: number,
        fbu_req_rate?: number,
        repeaterID?: string,
        onUpdateState?: (rfb: RFB, state: any, oldstate: any, statusMsg: string) => void,
        onPasswordRequired?: (rfb: RFB) => void,
        onClipboard?: (rfb: RFB, text: string) => void,
        onBell?: (rfb: RFB) => void,
        onFBUReceive?: (rfb: RFB, fbu: any) => void,
        onFBUComplete?: (rfb: RFB, fbu: any) => void,
        onFBResize?: (rfb: RFB, width: number, height: number) => void
}
declare class RFB {
    constructor(defaults: << UNKNOWN PARAM FORMAT >> ): this;
    set_local_cursor(cursor: << UNKNOWN PARAM FORMAT >> ): void;
    get_display(): Display;
    get_keyboard(): Keyboard;
    get_mouse(): Mouse;
    connect(host: string, port: number, password: string, path: string): void;
    disconnect(): void;
    sendPassword(passwd: string): void;
    sendCtrlAltDel(): void;
    sendKey(code: number, down: boolean): void;
    clipboardPasteFrom(text: string): void;
    testMode(override_send: (arr: any[]) => boolean, data_mode: string): void
}
declare interface Display {
    get_context(): CanvasRenderingContext2D,
        set_scale(scale: number): void,
        set_width(val: number): void,
        get_width(): number,
        set_height(val: number): void,
        get_height(): number,
        viewportChange(deltaX: number, deltaY: number, width: number, height: number): void,
        getCleanDirtyReset(): NvCleanDirtyBox,
        absX(x: number): number,
        absY(y: number): number,
        resize(width: number, height: number): void,
        clear(): void,
        fillRect(x: number, y: number, width: number, height: number, color: number[]): void,
        copyImage(
            old_x: number,
            old_y: number,
            new_x: number,
            new_y: number,
            w: number,
            h: number): void,
        startTile(x: number, y: number, width: number, height: number, color: number[]): void,
        subTile(x: number, y: number, w: number, h: number, color: number[]): void,
        finishTile(): void,
        blitImage(
            x: number,
            y: number,
            width: number,
            height: number,
            arr: any[],
            offset: number): void,
        blitRgbImage(
            x: number,
            y: number,
            width: number,
            height: number,
            arr: any[],
            offset: number): void,
        blitStringImage(str: string, x: number, y: number): void,
        drawImage(img: HTMLImageElement, x: number, y: number): void,
        renderQ_push(action: NvRenderAction): void
}
declare interface Keyboard {
    grab(): void,
        ungrab(): void
}
declare interface Mouse {
    grab(): void,
        ungrab(): void
}
declare var Util: NvUtilStatic;
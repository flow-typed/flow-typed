/**
 * Flowtype definitions for three-canvasrenderer
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export type THREE$SpriteCanvasMaterialParameters = {
    color?: number,
    program?: (context: any, color: Color) => void
} & MaterialParameters


declare export class SpriteCanvasMaterial mixins Material {
    constructor(parameters?: THREE$SpriteCanvasMaterialParameters): this;
    color: Color;
    program(context: any, color: Color): void
}

declare export interface THREE$CanvasRendererParameters {
    canvas?: HTMLCanvasElement,
        devicePixelRatio?: number,
        alpha?: boolean
}

declare export class CanvasRenderer mixins Renderer {
    constructor(parameters?: THREE$CanvasRendererParameters): this;
    domElement: HTMLCanvasElement;
    autoClear: boolean;
    sortObjects: boolean;
    sortElements: boolean;
    info: {
        render: {
            vertices: number,
            faces: number
        }
    };
    supportsVertexTextures(): void;
    setFaceCulling(): void;
    getPixelRatio(): number;
    setPixelRatio(value: number): void;
    setSize(width: number, height: number, updateStyle?: boolean): void;
    setViewport(x: number, y: number, width: number, height: number): void;
    setScissor(): void;
    enableScissorTest(): void;
    setClearColor(color: Color, opacity?: number): void;
    setClearColor(color: string, opacity?: number): void;
    setClearColor(color: number, opacity?: number): void;
    setClearColorHex(hex: number, alpha?: number): void;
    getClearColor(): Color;
    getClearAlpha(): number;
    getMaxAnisotropy(): number;
    clear(): void;
    clearColor(): void;
    clearDepth(): void;
    clearStencil(): void;
    render(scene: Scene, camera: Camera): void
}
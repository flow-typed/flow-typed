// @flow
/**
 * Flowtype definitions for three-vreffect
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export class VREffect {
    constructor(renderer: Renderer, callback?: (params: string) => void): this;
    render(scene: Scene, camera: Camera): void;
    setSize(width: number, height: number): void;
    setFullScreen(flag: boolean): void;
    startFullscreen(): void;
    FovToNDCScaleOffset(fov: THREE$VRFov): THREE$VREffectOffset;
    FovPortToProjection(fov: THREE$VRFov, rightHanded: boolean, zNear: number, zFar: number): Matrix4;
    FovToProjection(fov: THREE$VRFov, rightHanded: boolean, zNear: number, zFar: number): Matrix4;
    setVRDisplay(display: VRDisplay): void
}

declare export interface THREE$VRFov {
    leftTan: number,
        rightTan: number,
        upTan: number,
        downTan: number
}

declare export interface THREE$VREffectOffset {
    scale: number,
        offset: number
}
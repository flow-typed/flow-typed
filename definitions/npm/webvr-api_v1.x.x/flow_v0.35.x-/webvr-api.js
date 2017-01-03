// @flow
/**
 * Flowtype definitions for webvr-api
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare class VRDisplay mixins EventTarget {
    isConnected: boolean;
    isPresenting: boolean;

    /**
     * Dictionary of capabilities describing the VRDisplay.
     */
    capabilities: VRDisplayCapabilities;

    /**
     * If this VRDisplay supports room-scale experiences, the optional
     * stage attribute contains details on the room-scale parameters.
     */
    stageParameters: VRStageParameters;
    getEyeParameters(whichEye: VREye): VREyeParameters;

    /**
     * An identifier for this distinct VRDisplay. Used as an
     * association point in the Gamepad API.
     */
    displayId: number;

    /**
     * A display name, a user-readable name identifying it.
     */
    displayName: string;

    /**
     * Return a VRPose containing the future predicted pose of the VRDisplay
     * when the current frame will be presented. The value returned will not
    change until JavaScript has returned control to the browser.

    The VRPose will contain the position, orientation, velocity,
    and acceleration of each of these properties.
    */
    getPose(): VRPose;

    /**
     * Return the current instantaneous pose of the VRDisplay, with no
     * prediction applied.
     */
    getImmediatePose(): VRPose;

    /**
     * Reset the pose for this display, treating its current position and
     * orientation as the "origin/zero" values. VRPose.position,
    VRPose.orientation, and VRStageParameters.sittingToStandingTransform may be
    updated when calling resetPose(). This should be called in only
    sitting-space experiences.
    */
    resetPose(): void;

    /**
     * z-depth defining the near plane of the eye view frustum
     * enables mapping of values in the render target depth
    attachment to scene coordinates. Initially set to 0.01.
    */
    depthNear: number;

    /**
     * z-depth defining the far plane of the eye view frustum
     * enables mapping of values in the render target depth
    attachment to scene coordinates. Initially set to 10000.0.
    */
    depthFar: number;

    /**
     * The callback passed to `requestAnimationFrame` will be called
     * any time a new frame should be rendered. When the VRDisplay is
    presenting the callback will be called at the native refresh
    rate of the HMD. When not presenting this function acts
    identically to how window.requestAnimationFrame acts. Content should
    make no assumptions of frame rate or vsync behavior as the HMD runs
    asynchronously from other displays and at differing refresh rates.
    */
    requestAnimationFrame(callback: FrameRequestCallback): number;

    /**
     * Passing the value returned by `requestAnimationFrame` to
     * `cancelAnimationFrame` will unregister the callback.
     */
    cancelAnimationFrame(handle: number): void;

    /**
     * Begin presenting to the VRDisplay. Must be called in response to a user gesture.
     * Repeat calls while already presenting will update the VRLayers being displayed.
     */
    requestPresent(layers: Array<VRLayer>): Promise<void>;

    /**
     * Stops presenting to the VRDisplay.
     */
    exitPresent(): Promise<void>;

    /**
     * Get the layers currently being presented.
     */
    getLayers(): Array<VRLayer>;

    /**
     * The VRLayer provided to the VRDisplay will be captured and presented
     * in the HMD. Calling this function has the same effect on the source
    canvas as any other operation that uses its source image, and canvases
    created without preserveDrawingBuffer set to true will be cleared.
    */
    submitFrame(pose?: VRPose): void
}
declare type VRSource = HTMLCanvasElement;
declare type VRLayer = {
    source?: VRSource,
    leftBounds?: Array<number>,
    rightBounds?: Array<number >
};
declare interface VRDisplayCapabilities {
    hasPosition: boolean,
        hasOrientation: boolean,
        hasExternalDisplay: boolean,
        canPresent: boolean,
        maxLayers: number
}
declare type VREye = "left" | "right";
declare interface VRFieldOfView {
    upDegrees: number,
        rightDegrees: number,
        downDegrees: number,
        leftDegrees: number
}
declare interface VRPose {
    timestamp: number,
        position: Float32Array,
        linearVelocity: Float32Array,
        linearAcceleration: Float32Array,
        orientation: Float32Array,
        angularVelocity: Float32Array,
        angularAcceleration: Float32Array
}
declare interface VREyeParameters {
    offset: Float32Array,
        fieldOfView: VRFieldOfView,
        renderWidth: number,
        renderHeight: number
}
declare interface VRStageParameters {
    sittingToStandingTransform: Float32Array,
        sizeX: number,
        sizeZ: number
}
declare interface Navigator {
    getVRDisplays(): Promise<Array<VRDisplay >> ,
        activeVRDisplays: Array<VRDisplay >
}
declare interface Window {
    onvrdisplayconnected: (ev: Event) => any,
        onvrdisplaydisconnected: (ev: Event) => any,
        onvrdisplaypresentchange: (ev: Event) => any,
        addEventListener(
            type: "vrdisplayconnected",
            listener: (ev: Event) => any,
            useCapture?: boolean): void,
        addEventListener(
            type: "vrdisplaydisconnected",
            listener: (ev: Event) => any,
            useCapture?: boolean): void,
        addEventListener(
            type: "vrdisplaypresentchange",
            listener: (ev: Event) => any,
            useCapture?: boolean): void
}
declare interface Gamepad {
    displayId: number
}
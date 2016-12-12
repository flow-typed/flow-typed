

declare module 'webvr-api' {
	declare type VRSource = HTMLCanvasElement;

	declare type VRLayer = {
		source?: VRSource,
		leftBounds?: Array<number>,
		rightBounds?: Array<number>
	};

	declare type VREye = "left" | "right";

	declare interface VRDisplayCapabilities {
		hasPosition: boolean,
		hasOrientation: boolean,
		hasExternalDisplay: boolean,
		canPresent: boolean,
		maxLayers: number
	}

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
		getVRDisplays(): Promise<Array<VRDisplay>>,
		activeVRDisplays: Array<VRDisplay>
	}

	declare interface Window {
		onvrdisplayconnected: (ev: Event) => any,
		onvrdisplaydisconnected: (ev: Event) => any,
		onvrdisplaypresentchange: (ev: Event) => any,
		addEventListener(
		type: "vrdisplayconnected", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "vrdisplaydisconnected", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "vrdisplaypresentchange", listener: (ev: Event) => any, useCapture?: boolean
	): void
	}

	declare interface Gamepad {
		displayId: number
	}

		declare class VRDisplay extends EventTarget {
		isConnected: boolean;
		isPresenting: boolean;
		capabilities: VRDisplayCapabilities;
		stageParameters: VRStageParameters;
		getEyeParameters(whichEye: VREye): VREyeParameters;
		displayId: number;
		displayName: string;
		getPose(): VRPose;
		getImmediatePose(): VRPose;
		resetPose(): void;
		depthNear: number;
		depthFar: number;
		requestAnimationFrame(callback: FrameRequestCallback): number;
		cancelAnimationFrame(handle: number): void;
		requestPresent(layers: Array<VRLayer>): Promise<void>;
		exitPresent(): Promise<void>;
		getLayers(): Array<VRLayer>;
		submitFrame(pose?: VRPose): void
	}

	
}
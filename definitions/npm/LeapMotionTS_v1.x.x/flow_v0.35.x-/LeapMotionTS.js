

declare module 'LeapMotionTS' {
		declare export interface Listener {
		onConnect(controller: Controller): void,
		onDisconnect(controller: Controller): void,
		onExit(controller: Controller): void,
		onFrame(controller: Controller, frame: Frame): void,
		onInit(controller: Controller): void
	}

		declare export class EventDispatcher  {
		constructor(): this;
		hasEventListener(type: string, listener: Function): boolean;
		addEventListener(typeStr: string, listenerFunc: Function): void;
		removeEventListener(typeStr: string, listenerFunc: Function): void;
		dispatchEvent(evt: LeapEvent): void
	}

	declare export class DefaultListener extends EventDispatcher, Listener {
		constructor(): this;
		onConnect(controller: Controller): void;
		onDisconnect(controller: Controller): void;
		onExit(controller: Controller): void;
		onFrame(controller: Controller, frame: Frame): void;
		onInit(controller: Controller): void
	}

	declare export class LeapEvent  {
		LEAPMOTION_INIT: string;
		LEAPMOTION_CONNECTED: string;
		LEAPMOTION_DISCONNECTED: string;
		LEAPMOTION_EXIT: string;
		LEAPMOTION_FRAME: string;
		frame: Frame;
		constructor(type: string, targetListener: Listener, frame?: Frame): this;
		getTarget(): any;
		getType(): string
	}

	declare export class LeapUtil  {
		PI: number;
		DEG_TO_RAD: number;
		RAD_TO_DEG: number;
		TWO_PI: number;
		HALF_PI: number;
		EPSILON: number;
		constructor(): this;
		toDegrees(radians: number): number;
		isNearZero(value: number): boolean;
		vectorIsNearZero(inVector: Vector3): boolean;
		extractRotation(mtxTransform: Matrix): Matrix;
		rotationInverse(mtxRot: Matrix): Matrix;
		rigidInverse(mtxTransform: Matrix): Matrix;
		componentWiseMin(vLHS: Vector3, vRHS: Vector3): Vector3;
		componentWiseMax(vLHS: Vector3, vRHS: Vector3): Vector3;
		componentWiseScale(vLHS: Vector3, vRHS: Vector3): Vector3;
		componentWiseReciprocal(inVector: Vector3): Vector3;
		minComponent(inVector: Vector3): number;
		maxComponent(inVector: Vector3): number;
		heading(inVector: Vector3): number;
		elevation(inVector: Vector3): number;
		normalizeSpherical(vSpherical: Vector3): Vector3;
		cartesianToSpherical(vCartesian: Vector3): Vector3;
		sphericalToCartesian(vSpherical: Vector3): Vector3;
		clamp(inVal: number, minVal: number, maxVal: number): number;
		lerp(a: number, b: number, coefficient: number): number;
		lerpVector(vec1: Vector3, vec2: Vector3, coefficient: number): Vector3
	}

	declare export class Controller extends EventDispatcher {
		frameHistory: Frame[];
		connection: WebSocket;
		_isConnected: boolean;
		_isGesturesEnabled: boolean;
		constructor(host?: string): this;
		frame(history?: number): Frame;
		setListener(listener: Listener): void;
		enableGesture(type: number, enable?: boolean): void;
		isGestureEnabled(type: number): boolean;
		isConnected(): boolean
	}

	declare export class Pointable  {
		direction: Vector3;
		frame: Frame;
		hand: Hand;
		id: number;
		length: number;
		width: number;
		tipPosition: Vector3;
		tipVelocity: Vector3;
		isFinger: boolean;
		isTool: boolean;
		constructor(): this;
		isValid(): boolean;
		isEqualTo(other: Pointable): boolean;
		invalid(): Pointable;
		toString(): string
	}

	declare export class Gesture  {
		STATE_INVALID: number;
		STATE_START: number;
		STATE_UPDATE: number;
		STATE_STOP: number;
		TYPE_INVALID: number;
		TYPE_SWIPE: number;
		TYPE_CIRCLE: number;
		TYPE_SCREEN_TAP: number;
		TYPE_KEY_TAP: number;
		duration: number;
		durationSeconds: number;
		frame: Frame;
		hands: Hand[];
		id: number;
		pointables: Pointable[];
		state: number;
		type: number;
		constructor(): this;
		isEqualTo(other: Gesture): boolean;
		isValid(): boolean;
		invalid(): Gesture;
		toString(): string
	}

	declare export class Finger extends Pointable {
		constructor(): this;
		invalid(): Finger
	}

	declare export class Tool extends Pointable {
		constructor(): this;
		invalid(): Tool
	}

	declare export class Hand  {
		direction: Vector3;
		fingers: Finger[];
		frame: Frame;
		id: number;
		palmNormal: Vector3;
		palmPosition: Vector3;
		palmVelocity: Vector3;
		pointables: Pointable[];
		sphereCenter: Vector3;
		sphereRadius: number;
		tools: Tool[];
		rotation: Matrix;
		scaleFactorNumber: number;
		translationVector: Vector3;
		constructor(): this;
		isValid(): boolean;
		isEqualTo(other: Hand): boolean;
		finger(id: number): Finger;
		tool(id: number): Tool;
		pointable(id: number): Pointable;
		rotationAxis(sinceFrame: Frame): Vector3;
		rotationAngle(sinceFrame: Frame, axis?: Vector3): number;
		rotationMatrix(sinceFrame: Frame): Matrix;
		scaleFactor(sinceFrame: Frame): number;
		translation(sinceFrame: Frame): Vector3;
		invalid(): Hand
	}

	declare export class Frame  {
		fingers: Finger[];
		hands: Hand[];
		pointables: Pointable[];
		_gestures: Gesture[];
		id: number;
		timestamp: number;
		tools: Tool[];
		rotation: Matrix;
		scaleFactorNumber: number;
		translationVector: Vector3;
		controller: Controller;
		constructor(): this;
		hand(id: number): Hand;
		finger(id: number): Finger;
		tool(id: number): Tool;
		pointable(id: number): Pointable;
		gesture(id: number): Gesture;
		gestures(sinceFrame?: Frame): Gesture[];
		rotationAxis(sinceFrame: Frame): Vector3;
		rotationAngle(sinceFrame: Frame, axis?: Vector3): number;
		rotationMatrix(sinceFrame: Frame): Matrix;
		scaleFactor(sinceFrame: Frame): number;
		translation(sinceFrame: Frame): Vector3;
		isEqualTo(other: Frame): boolean;
		isValid(): boolean;
		invalid(): Frame
	}

	declare export class Matrix  {
		origin: Vector3;
		xBasis: Vector3;
		yBasis: Vector3;
		zBasis: Vector3;
		constructor(x: Vector3, y: Vector3, z: Vector3, _origin?: Vector3): this;
		setRotation(_axis: Vector3, angleRadians: number): void;
		transformPoint(inVector: Vector3): Vector3;
		transformDirection(inVector: Vector3): Vector3;
		rigidInverse(): Matrix;
		multiply(other: Matrix): Matrix;
		multiplyAssign(other: Matrix): Matrix;
		isEqualTo(other: Matrix): boolean;
		identity(): Matrix;
		toString(): string
	}

	declare export class CircleGesture extends Gesture {
		classType: number;
		center: Vector3;
		normal: Vector3;
		pointable: Pointable;
		progress: number;
		radius: number;
		constructor(): this
	}

	declare export class KeyTapGesture extends Gesture {
		classType: number;
		direction: Vector3;
		pointable: Pointable;
		position: Vector3;
		progress: number;
		constructor(): this
	}

	declare export class ScreenTapGesture extends Gesture {
		classType: number;
		direction: Vector3;
		pointable: Pointable;
		position: Vector3;
		progress: number;
		constructor(): this
	}

	declare export class SwipeGesture extends Gesture {
		classType: number;
		direction: Vector3;
		pointable: Pointable;
		position: Vector3;
		speed: number;
		startPosition: Vector3;
		constructor(): this
	}

	declare export class Vector3  {
		x: number;
		y: number;
		z: number;
		constructor(x: number, y: number, z: number): this;
		opposite(): Vector3;
		plus(other: Vector3): Vector3;
		plusAssign(other: Vector3): Vector3;
		minus(other: Vector3): Vector3;
		minusAssign(other: Vector3): Vector3;
		multiply(scalar: number): Vector3;
		multiplyAssign(scalar: number): Vector3;
		divide(scalar: number): Vector3;
		divideAssign(scalar: number): Vector3;
		isEqualTo(other: Vector3): boolean;
		angleTo(other: Vector3): number;
		cross(other: Vector3): Vector3;
		distanceTo(other: Vector3): number;
		dot(other: Vector3): number;
		isValid(): boolean;
		invalid(): Vector3;
		magnitude(): number;
		magnitudeSquared(): number;
		normalized(): Vector3;
		pitch: number;
		yaw: number;
		roll: number;
		zero(): Vector3;
		xAxis(): Vector3;
		yAxis(): Vector3;
		zAxis(): Vector3;
		left(): Vector3;
		right(): Vector3;
		down(): Vector3;
		up(): Vector3;
		forward(): Vector3;
		backward(): Vector3;
		toString(): string
	}

	
}
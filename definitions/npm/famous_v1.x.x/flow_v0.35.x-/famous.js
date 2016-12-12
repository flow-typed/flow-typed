

declare module 'famous' {
					
}

declare module 'famous/core' {
				declare export class FamousEngine  {
		init(): FamousEngine;
		createScene(): Scene;
		getClock(): Clock;
		getContext(selector: string): Scene;
		createScene(): Scene;
		requestUpdate(requester: number): void;
		requestUpdateOnNextTick(requester: number): void
	}

	declare export class Scene extends Node {
		
	}

	declare export class Node  {
		RELATIVE_SIZE: number;
		ABSOLUTE_SIZE: number;
		RENDER_SIZE: number;
		DEFAULT_SIZE: number;
		addComponent(component: any): number;
		getComponent(index: number): any;
		getComponents(): any[];
		addChild(node?: Node): Node;
		getChildren(): Node[];
		removeChild(node: Node): boolean;
		getParent(): Node;
		isMounted(): boolean;
		mount(): void;
		dismount(): void;
		show(): Node;
		hide(): Node;
		onUpdate(time: number): void;
		requestUpdate(requester: number): void;
		requestUpdateOnNextTick(requester: number): void;
		getSizeMode(): number[];
		setSizeMode(x?: string | number, y?: string | number, z?: string | number): Node;
		getSize(): number[];
		getRenderSize(): number[];
		getAbsoluteSize(): number[];
		setAbsoluteSize(x?: number, y?: number, z?: number): Node;
		getDifferentialSize(): number[];
		setDifferentialSize(x?: number, y?: number, z?: number): Node;
		getProportionalSize(): number[];
		setProportionalSize(x?: number, y?: number, z?: number): Node;
		onSizeChange(x: number, y: number, z: number): void;
		getPosition(): number[];
		setPosition(x?: number, y?: number, z?: number): Node;
		emit(event: any, payload?: any): void;
		isMounted(): boolean;
		isShown(): boolean;
		getMountPoint(): number[];
		setMountPoint(x?: number, y?: number, z?: number): Node;
		getAlign(): number[];
		setAlign(x?: number, y?: number, z?: number): Node;
		setScale(x?: number, y?: number, z?: number): Node;
		setOrigin(x?: number, y?: number, z?: number): Node;
		setRotation(x?: number, y?: number, z?: number, w?: number): Node;
		addUIEvent(eventName: string): void;
		getLocation(): string
	}

	declare export class Size  {
		RELATIVE: number;
		ABSOLUTE: number;
		RENDER: number;
		DEFAULT: number
	}

	declare export class Clock  {
		setTimeout(callback: Function, delay?: number): void
	}

	declare export class Dispatch  {
		dispatchUIEvent(path: string, event: string, payload: any): void
	}

	declare export class TransformSystem  {
		deregisterTransformAtPath(path: string): void
	}

	declare export class SizeSystem  {
		deregisterSizeAtPath(path: string): void
	}

	
}

declare module 'famous/dom-renderables' {
		declare export interface IDOMElementOptions {
		tagName?: string,
		classes?: string[],
		attributes?: {
		[attributeName: string]: string
	},
		properties?: {
		[attributeName: string]: string
	},
		id?: string,
		content?: string,
		cutout?: boolean
	}

		declare export class DOMElement  {
		constructor(node: Node, options?: IDOMElementOptions): this;
		setContent(content: string): Node;
		onShow(): void;
		onHide(): void;
		on(event: string, listener: (payload?: any) => void): () => void;
		addClass(value: string): DOMElement;
		removeClass(value: string): DOMElement;
		setAttribute(name: string, value: string): DOMElement;
		setProperty(name: string, value: string): DOMElement
	}

	
}

declare module 'famous/components' {
		declare export interface IGestureEvent {
		event: string,
		callback: (payload?: IGesturePayload) => void
	}

	declare export interface IGesturePayload {
		center: Vec2,
		centerDelta: Vec2,
		centerVelocity: Vec2,
		current: number,
		points: number,
		pointers: IGesturePointer[],
		status: string,
		time: number
	}

	declare export interface IGesturePointer {
		delta: Vec2,
		position: Vec2,
		velocity: Vec2
	}

		declare export class Position  {
		constructor(node: Node): this;
		set(
		x: number, y?: number, z?: number, transition?: any, callback?: Function
	): Position;
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Position;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Position;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Position;
		isActive(): boolean;
		halt(): Position;
		update(): void;
		onUpdate(): void
	}

	declare export class Transform  {
		constructor(node: Node): this;
		translate(): Transform;
		clean(): void;
		onUpdate(): void
	}

	declare export class Size  {
		constructor(node: Node): this;
		setAbsolute(x?: number, y?: number, z?: number, options?: any, callback?: Function): void
	}

	declare export class Scale  {
		constructor(node: Node): this;
		set(
		x: number, y?: number, z?: number, transition?: any, callback?: Function
	): Scale;
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Scale;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Scale;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Scale;
		isActive(): boolean;
		halt(): Position;
		update(): void;
		onUpdate(): void
	}

	declare export class Rotation  {
		constructor(node: Node): this;
		set(
		x: number, y?: number, z?: number, transition?: any, callback?: Function
	): Rotation;
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Rotation;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Rotation;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Rotation;
		isActive(): boolean;
		halt(): Position;
		update(): void;
		onUpdate(): void
	}

	declare export class Align  {
		constructor(node: Node): this;
		set(
		x: number, y?: number, z?: number, transition?: any, callback?: Function
	): Align;
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Align;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Align;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Align;
		isActive(): boolean;
		halt(): Position;
		update(): void;
		onUpdate(): void
	}

	declare export class MountPoint  {
		constructor(node: Node): this;
		set(
		x: number, y?: number, z?: number, transition?: any, callback?: Function
	): MountPoint;
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): MountPoint;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): MountPoint;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): MountPoint;
		isActive(): boolean;
		halt(): Position;
		update(): void;
		onUpdate(): void
	}

	declare export class Origin  {
		constructor(node: Node): this;
		set(
		x: number, y?: number, z?: number, transition?: any, callback?: Function
	): Origin;
		getX(): number;
		setX(val: number, transition?: any, callback?: Function): Origin;
		getY(): number;
		setY(val: number, transition?: any, callback?: Function): Origin;
		getZ(): number;
		setZ(val: number, transition?: any, callback?: Function): Origin;
		isActive(): boolean;
		halt(): Position;
		update(): void;
		onUpdate(): void
	}

	declare export class Opacity  {
		constructor(node: Node): this;
		get(): number;
		set(value: number, transition?: any, callback?: Function): Opacity;
		isActive(): boolean;
		halt(): Position;
		update(): void;
		onUpdate(): void
	}

	declare export class GestureHandler  {
		constructor(node: Node, events?: IGestureEvent[]): this;
		onReceive(ev: string, payload: IGesturePayload): void;
		on(ev: string | IGestureEvent, cb: (payload?: IGesturePayload) => void): void;
		triggerGestures(): void;
		trigger(ev: string, payload?: IGesturePayload): void
	}

	
}

declare module 'famous/dom-renderers/events' {
				declare export class EventMap  {
		
	}

	declare export class MouseEvent  {
		
	}

	declare export class TouchEvent  {
		
	}

	
}

declare module 'famous/math' {
				declare export class Vec2  {
		x: number;
		y: number;
		constructor(x?: number, y?: number): this;
		set(x?: number, y?: number): Vec3;
		add(v: Vec2): Vec2;
		subtract(v: Vec2): Vec2;
		scale(s: number): Vec2;
		rotate(theta: number): Vec2;
		dot(v: Vec2): number;
		cross(v: Vec2): Vec2;
		invert(): Vec2;
		map(fn: (eachCoordinate: number) => number): Vec2;
		length(): number;
		copy(v: Vec2): Vec2;
		clear(): Vec2;
		isZero(): boolean;
		toArray(): number[];
		normalize(v: Vec2, output: Vec2): Vec2;
		clone(v: Vec2): Vec2;
		add(v1: Vec2, v2: Vec2, output: Vec2): Vec2;
		subtract(v1: Vec2, v2: Vec2, output: Vec2): Vec2;
		scale(v: Vec2, s: Vec2, output: Vec2): Vec2;
		dot(v1: Vec2, v2: Vec2): number;
		cross(v1: Vec2, v2: Vec2, output: Vec2): Vec2
	}

	declare export class Mat33  {
		values: number[]
	}

	declare export class Quaternion  {
		w: number;
		x: number;
		y: number;
		z: number;
		toEuler(output: Vec3): Vec3;
		fromEuler(x: number, y: number, z: number): Quaternion
	}

	declare export class Vec3  {
		x: number;
		y: number;
		z: number;
		constructor(x?: number, y?: number, z?: number): this;
		set(x?: number, y?: number, z?: number): Vec3;
		add(v: Vec3): Vec3;
		subtract(v: Vec3): Vec3;
		rotateX(theta: number): Vec3;
		rotateY(theta: number): Vec3;
		rotateZ(theta: number): Vec3;
		dot(v: Vec3): number;
		cross(v: Vec3): Vec3;
		scale(s: number): Vec3;
		insert(): Vec3;
		map(fn: (eachCoordinate: number) => number): Vec3;
		length(): number;
		lengthSq(): number;
		copy(v: Vec3): Vec3;
		clear(): Vec3;
		isZero(): boolean;
		toArray(): number[];
		normalize(): Vec3;
		applyRotation(q: Quaternion): Vec3;
		applyMatrix(matrix: Mat33): Vec3;
		normalize(v: Vec3, output: Vec3): Vec3;
		applyRotation(v: Vec3, q: Quaternion, output: Vec3): Vec3;
		clone(v: Vec3): Vec3;
		add(v1: Vec3, v2: Vec3, output: Vec3): Vec3;
		subtract(v1: Vec3, v2: Vec3, output: Vec3): Vec3;
		scale(v: Vec3, s: Vec3, output: Vec3): Vec3;
		dot(v1: Vec3, v2: Vec3): number;
		cross(v1: Vec3, v2: Vec3, output: Vec3): Vec3;
		project(v1: Vec3, v2: Vec3, output: Vec3): Vec3
	}

	
}

declare module 'famous/physics' {
		declare export interface IPhysicsTransform {
		position: number[],
		rotation: number[]
	}

	declare export interface IParticleOptions {
		position?: Vec3,
		orientation?: Quaternion,
		mass?: number,
		restitution?: number,
		friction?: number,
		size?: number[],
		velocity?: number,
		restrictions?: number,
		collisionMask?: number,
		collisionGroup?: number
	}

	declare export interface IWallOptions {
		direction?: number
	}

	declare export interface IForceOptions {
		targets?: any[]
	}

	declare export interface IDragOptions {
		type?: (v: number) => number,
		strength?: number,
		max?: number
	}

	declare export interface ISpringOptions {
		length?: number,
		type?: (dist: any, rMax: any) => number,
		maxLength?: number,
		stiffness?: number,
		damping?: number,
		period?: number,
		dampingRatio?: number,
		anchor?: Vec3
	}

	declare export interface IRotationalSpringOptions {
		max?: number,
		type?: (dist: any, rMax: any) => number,
		stiffness?: number,
		damping?: number,
		period?: number,
		dampingRatio?: number,
		anchor?: Quaternion
	}

		declare export class PhysicsEngine  {
		on(key: string, callback: (payload: any) => void): void;
		off(key: string, callback: (payload: any) => void): void;
		trigger(key: string, payload: any): void;
		setOrigin(x: number, y: number, z: number): void;
		setOrientation(w: number, x: number, y: number, z: number): void;
		add(...args: any[]): PhysicsEngine;
		remove(...args: any[]): PhysicsEngine;
		addBody(body: any): void;
		addForce(body: any): void;
		addConstraint(body: any): void;
		removeBody(body: any): void;
		removeForce(body: any): void;
		removeConstraint(body: any): void;
		update(time: number): void;
		getTransform(body: any): IPhysicsTransform
	}

	declare export class Particle  {
		constructor(options?: IParticleOptions): this;
		position: Vec3;
		orientation: Quaternion;
		velocity: Vec3;
		momentum: Vec3;
		angularVelocity: Vec3;
		angularMomentum: Vec3;
		mass: number;
		inverseMass: number;
		force: Vec3;
		torque: Vec3;
		restitution: number;
		friction: number;
		inverseInertia: Mat33;
		localInertia: Mat33;
		localInveseInertia: Mat33;
		size: number[];
		restrictions: number;
		collisionMask: number;
		collisionGroup: number;
		type: number;
		on(key: string, callback: (payload: any) => void): void;
		off(key: string, callback: (payload: any) => void): void;
		trigger(key: string, payload: any): void;
		getRestrictions(): string[];
		setRestrictions(transRestrictions: string, rotRestrictions: string): Particle;
		getMass(): number;
		setMass(mass: number): Particle;
		getInverseMass(): number;
		updateLocalInertia(): Particle;
		updateInertia(): Particle;
		getPosition(): Vec3;
		setPosition(x: number, y: number, z: number): Particle;
		getVelocity(): Vec3;
		setVelocity(x: number, y: number, z: number): Particle;
		getMomentum(): Vec3;
		setMomentum(x: number, y: number, z: number): Particle;
		getOrientation(): Quaternion;
		setOrientation(w: number, x: number, y: number, z: number): Particle;
		getAngularVelocity(): Vec3;
		setAngularVelocity(x: number, y: number, z: number): Particle;
		getAngularMomentum(): Vec3;
		setAngularMomentum(x: number, y: number, z: number): Particle;
		getForce(): Vec3;
		setForce(x: number, y: number, z: number): Particle;
		getTorque(): Vec3;
		setTorque(x: number, y: number, z: number): Particle;
		applyForce(force: Vec3): Particle;
		applyTorque(torque: Vec3): Particle;
		applyImpulse(impulse: Vec3): Particle;
		applyAngularImpulse(angularImpulse: Vec3): Particle;
		support(): Vec3;
		updateShape(): void
	}

	declare export class Wall extends Particle {
		constructor(options: IWallOptions): this;
		normal: Vec3;
		invNormal: Vec3
	}

	declare export class Force  {
		constructor(targets?: any[] | any, options?: IForceOptions): this;
		targets: any[];
		setOptions(options: any): void;
		addTarget(target: any): void;
		removeTarget(target: any): void;
		init(options: any): void;
		update(time?: number, dt?: number): void
	}

	declare export class Drag extends Force {
		QUADRATIC: (v: number) => number;
		LINEAR: (v: number) => number;
		type: (v: number) => number;
		strength: number;
		max: number;
		constructor(targets?: any[] | any, options?: IDragOptions): this;
		init(): void;
		update(): void
	}

	declare export class Spring extends Force {
		FENE: (dist: any, rMax: any) => number;
		HOOKE: (dist: any, rMax: any) => number;
		length: number;
		type: (dist: any, rMax: any) => number;
		maxLength: number;
		stiffness: number;
		damping: number;
		period: number;
		dampingRatio: number;
		anchor: Vec3;
		constructor(source?: Particle, targets?: Particle[] | Particle, options?: ISpringOptions): this;
		init(options?: ISpringOptions): void;
		update(): void
	}

	declare export class RotationalSpring extends Force {
		constructor(source?: Particle, targets?: Particle[] | Particle, options?: IRotationalSpringOptions): this;
		max: number;
		stiffness: number;
		damping: number;
		period: number;
		dampingRatio: number;
		anchor: Vec3
	}

	declare export class ConvexBody extends Particle {
		
	}

	declare export class Box extends ConvexBody {
		constructor(options?: any): this
	}

	declare export class Constraint  {
		
	}

	declare export class Angle extends Constraint {
		constructor(a: Particle, b: Particle, options?: any): this
	}

	
}

declare module 'famous/transitions' {
				declare export class Curves  {
		linear: (t: number) => number;
		easeIn: (t: number) => number;
		easeOut: (t: number) => number;
		easeInOut: (t: number) => number;
		easeOutBounce: (t: number) => number;
		spring: (t: number) => number;
		inQuad: (t: number) => number;
		outQuad: (t: number) => number;
		inOutQuad: (t: number) => number;
		inCubic: (t: number) => number;
		outCubic: (t: number) => number;
		inOutCubic: (t: number) => number;
		inQuart: (t: number) => number;
		outQuart: (t: number) => number;
		inOutQuart: (t: number) => number;
		inQuint: (t: number) => number;
		outQuint: (t: number) => number;
		inOutQuint: (t: number) => number;
		inSine: (t: number) => number;
		outSine: (t: number) => number;
		inOutSine: (t: number) => number;
		inExpo: (t: number) => number;
		outExpo: (t: number) => number;
		inOutExp: (t: number) => number;
		inCirc: (t: number) => number;
		outCirc: (t: number) => number;
		inOutCirc: (t: number) => number;
		inElastic: (t: number) => number;
		outElastic: (t: number) => number;
		inOutElastic: (t: number) => number;
		inBounce: (t: number) => number;
		outBounce: (t: number) => number;
		inOutBounce: (t: number) => number;
		flat: (t: number) => number
	}

	
}

declare module 'famous/utilities' {
				declare export class CallbackStore  {
		on(event: string, callback: (payload: any) => void): void;
		trigger(event: string, payload: any): void
	}

	
}
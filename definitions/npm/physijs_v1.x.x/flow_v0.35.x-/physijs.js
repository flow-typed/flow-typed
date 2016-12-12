

declare module 'physijs' {
					
}

declare module 'npm$namespace$Physijs' {
		declare export interface Material {
		_physijs: {
		id: number,
		friction: number,
		restriction: number
	}
	}

	declare export interface Constraint {
		getDefinition(): any
	}

	declare export interface PointConstraintDefinition {
		type: string,
		id: number,
		objecta: THREE.Object3D,
		objectb: THREE.Object3D,
		positiona: THREE.Vector3,
		positionb: THREE.Vector3
	}

	declare export interface HingeConstraintDefinition {
		type: string,
		id: number,
		objecta: THREE.Object3D,
		objectb: THREE.Object3D,
		positiona: THREE.Vector3,
		positionb: THREE.Vector3,
		axis: THREE.Vector3
	}

	declare export interface SliderConstraintDefinition {
		type: string,
		id: number,
		objecta: THREE.Object3D,
		objectb: THREE.Object3D,
		positiona: THREE.Vector3,
		positionb: THREE.Vector3,
		axis: THREE.Vector3
	}

	declare export interface ConeTwistConstraintDefinition {
		type: string,
		id: number,
		objecta: THREE.Object3D,
		objectb: THREE.Object3D,
		positiona: THREE.Vector3,
		positionb: THREE.Vector3,
		axisa: THREE.Vector3,
		axisb: THREE.Vector3
	}

	declare export interface DOFConstraintDefinition {
		type: string,
		id: number,
		objecta: THREE.Object3D,
		objectb: THREE.Object3D,
		positiona: THREE.Vector3,
		positionb: THREE.Vector3,
		axisa: THREE.Vector3,
		axisb: THREE.Vector3
	}

	declare export interface SceneParameters {
		ammo?: string,
		fixedTimeStep?: number,
		rateLimit?: boolean
	}

	declare export function noConflict(): Object

	declare export function createMaterial(material: THREE.Material, friction?: number, restitution?: number): Material

	declare export class PointConstraint extends Constraint {
		constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position?: THREE.Vector3): this;
		getDefinition(): PointConstraintDefinition
	}

	declare export class HingeConstraint extends Constraint {
		constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position: THREE.Vector3, axis?: THREE.Vector3): this;
		getDefinition(): HingeConstraintDefinition;
		setLimits(
		low: number, high: number, bias_factor: number, relaxation_factor: number
	): void;
		enableAngularMotor(velocity: number, acceleration: number): void;
		disableMotor(): void
	}

	declare export class SliderConstraint extends Constraint {
		constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position: THREE.Vector3, axis?: THREE.Vector3): this;
		getDefinition(): SliderConstraintDefinition;
		setLimits(
		lin_lower: number, lin_upper: number, ang_lower: number, ang_upper: number
	): void;
		setRestitution(linear: number, angular: number): void;
		enableLinearMotor(velocity: number, acceleration: number): void;
		disableLinearMotor(): void;
		enableAngularMotor(velocity: number, acceleration: number): void;
		disableAngularMotor(): void
	}

	declare export class ConeTwistConstraint extends Constraint {
		constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position: THREE.Vector3): this;
		getDefinition(): ConeTwistConstraintDefinition;
		setLimit(x: number, y: number, z: number): void;
		enableMotor(): void;
		setMaxMotorImpulse(max_impulse: number): void;
		setMotorTarget(target: THREE.Vector3): void;
		setMotorTarget(target: THREE.Euler): void;
		setMotorTarget(target: THREE.Matrix4): void;
		disableMotor(): void
	}

	declare export class DOFConstraint extends Constraint {
		constructor(objecta: THREE.Object3D, objectb: THREE.Object3D, position?: THREE.Vector3): this;
		getDefinition(): DOFConstraintDefinition;
		setLinearLowerLimit(limit: THREE.Vector3): void;
		setLinearUpperLimit(limit: THREE.Vector3): void;
		setAngularLowerLimit(limit: THREE.Vector3): void;
		setAngularUpperLimit(limit: THREE.Vector3): void;
		enableAngularMotor(which: number): void;
		configureAngularMotor(
		which: number, low_angle: number, high_angle: number, velocity: number, max_force: number
	): void;
		disableAngularMotor(which: number): void
	}

	declare export class Scene extends THREE$Scene {
		constructor(param?: SceneParameters): this;
		addConstraint(constraint: Constraint, show_marker?: boolean): void;
		onSimulationResume(): void;
		removeConstraint(constraint: Constraint): void;
		execute(cmd: string, params: any): void;
		add(object: THREE.Object3D): void;
		remove(object: THREE.Object3D): void;
		setFixedTimeStep(fixedTimeStep: number): void;
		setGravity(gravity: THREE.Vector3): void;
		simulate(timeStep?: number, maxSubSteps?: number): boolean;
		addEventListener(event_name: string, callback: (event: any) => void): void;
		removeEventListener(event_name: string, callback: (event: any) => void): void;
		dispatchEvent(event_name: string): void;
		dispatchEvent(event: {
		type: string,
		target: any
	}): void
	}

	declare export class Mesh extends THREE$Mesh {
		constructor(geometry: THREE.Geometry, material?: THREE.Material, mass?: number): this;
		applyCentralImpulse(force: THREE.Vector3): void;
		applyImpulse(force: THREE.Vector3, offset: THREE.Vector3): void;
		applyCentralForce(force: THREE.Vector3): void;
		applyForce(force: THREE.Vector3, offset: THREE.Vector3): void;
		getAngularVelocity(): THREE.Vector3;
		setAngularVelocity(velocity: THREE.Vector3): void;
		getLinearVelocity(): THREE.Vector3;
		setLinearVelocity(velocity: THREE.Vector3): void;
		setAngularFactor(factor: THREE.Vector3): void;
		setLinearFactor(factor: THREE.Vector3): void;
		setDamping(linear: number, angular: number): void;
		setCcdMotionThreshold(threshold: number): void;
		setCcdSweptSphereRadius(radius: number): void;
		addEventListener(event_name: string, callback: (event: any) => void): void;
		removeEventListener(event_name: string, callback: (event: any) => void): void;
		dispatchEvent(event_name: string): void;
		dispatchEvent(event: {
		type: string,
		target: any
	}): void
	}

	declare export class PlaneMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number): this
	}

	declare export class HeightfieldMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number, xdiv?: number, ydiv?: number): this
	}

	declare export class BoxMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number): this
	}

	declare export class SphereMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number): this
	}

	declare export class CylinderMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number): this
	}

	declare export class CapsuleMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number): this
	}

	declare export class ConeMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number): this
	}

	declare export class ConcaveMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number): this
	}

	declare export class ConvexMesh extends Mesh {
		constructor(geometry: THREE.Geometry, material: THREE.Material, mass?: number): this
	}

	declare export class Vehicle  {
		constructor(mesh: Mesh, tuning?: VehicleTuning): this;
		mesh: THREE.Mesh;
		wheels: THREE.Mesh[];
		addWheel(
		wheel_geometry: THREE.Geometry, wheel_material: THREE.Material, connection_point: THREE.Vector3, wheel_direction: THREE.Vector3, wheel_axle: THREE.Vector3, suspension_rest_length: number, wheel_radius: number, is_front_wheel: boolean, tuning?: VehicleTuning
	): void;
		setSteering(amount: number, wheel?: THREE.Mesh): void;
		setBrake(amount: number, wheel?: THREE.Mesh): void;
		applyEngineForce(amount: number, wheel?: THREE.Mesh): void
	}

	declare export class VehicleTuning  {
		constructor(suspension_stiffness?: number, suspension_compression?: number, suspension_damping?: number, max_suspension_travel?: number, friction_slip?: number, max_suspension_force?: number): this;
		suspension_stiffness: number;
		suspension_compression: number;
		suspension_damping: number;
		max_suspension_travel: number;
		friction_slip: number;
		max_suspension_force: number
	}

	
}
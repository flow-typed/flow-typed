

declare module 'p2' {
					declare module.exports: undefined


}

declare module 'npm$namespace$p2' {
		declare export interface BodyOptions {
		mass?: number,
		position?: number[],
		velocity?: number[],
		angle?: number,
		angularVelocity?: number,
		force?: number[],
		angularForce?: number,
		fixedRotation?: boolean
	}

	declare export interface CapsuleOptions {
		length?: number,
		radius?: number
	}

	declare export interface CircleOptions {
		radius?: number
	}

	declare export interface ConvexOptions {
		length?: number,
		radius?: number
	}

	declare export interface HeightfieldOptions {
		heights?: number[],
		minValue?: number,
		maxValue?: number,
		elementWidth?: number
	}

	declare export interface SharedShapeOptions {
		position?: number[],
		angle?: number,
		collisionGroup?: number,
		collisionResponse?: boolean,
		collisionMask?: number,
		sensor?: boolean
	}

	declare export interface ShapeOptions {
		type?: number
	}

	declare export interface LineOptions {
		length?: number
	}

	declare export interface BoxOptions {
		width?: number,
		height?: number
	}

		declare export class AABB  {
		constructor(options?: {
		upperBound?: number[],
		lowerBound?: number[]
	}): this;
		setFromPoints(points: number[][], position: number[], angle: number, skinSize: number): void;
		copy(aabb: AABB): void;
		extend(aabb: AABB): void;
		overlaps(aabb: AABB): boolean
	}

	declare export class Broadphase  {
		AABB: number;
		BOUNDING_CIRCLE: number;
		NAIVE: number;
		SAP: number;
		boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;
		aabbCheck(bodyA: Body, bodyB: Body): boolean;
		canCollide(bodyA: Body, bodyB: Body): boolean;
		constructor(type: number): this;
		type: number;
		result: Body[];
		world: World;
		boundingVolumeType: number;
		setWorld(world: World): void;
		getCollisionPairs(world: World): Body[];
		boundingVolumeCheck(bodyA: Body, bodyB: Body): boolean
	}

	declare export class GridBroadphase extends Broadphase {
		constructor(options?: {
		xmin?: number,
		xmax?: number,
		ymin?: number,
		ymax?: number,
		nx?: number,
		ny?: number
	}): this;
		xmin: number;
		xmax: number;
		ymin: number;
		ymax: number;
		nx: number;
		ny: number;
		binsizeX: number;
		binsizeY: number
	}

	declare export class NativeBroadphase extends Broadphase {
		
	}

	declare export class Narrowphase  {
		contactEquations: ContactEquation[];
		frictionEquations: FrictionEquation[];
		enableFriction: boolean;
		enableEquations: boolean;
		slipForce: number;
		frictionCoefficient: number;
		surfaceVelocity: number;
		reuseObjects: boolean;
		resuableContactEquations: any[];
		reusableFrictionEquations: any[];
		restitution: number;
		stiffness: number;
		relaxation: number;
		frictionStiffness: number;
		frictionRelaxation: number;
		enableFrictionReduction: boolean;
		contactSkinSize: number;
		collidedLastStep(bodyA: Body, bodyB: Body): boolean;
		reset(): void;
		createContactEquation(bodyA: Body, bodyB: Body, shapeA: Shape, shapeB: Shape): ContactEquation;
		createFrictionFromContact(c: ContactEquation): FrictionEquation
	}

	declare export class SAPBroadphase extends Broadphase {
		axisList: Body[];
		axisIndex: number
	}

	declare export class Constraint  {
		DISTANCE: number;
		GEAR: number;
		LOCK: number;
		PRISMATIC: number;
		REVOLUTE: number;
		constructor(bodyA: Body, bodyB: Body, type: number, options?: {
		collideConnected?: boolean
	}): this;
		type: number;
		equeations: Equation[];
		bodyA: Body;
		bodyB: Body;
		collideConnected: boolean;
		update(): void;
		setStiffness(stiffness: number): void;
		setRelaxation(relaxation: number): void
	}

	declare export class DistanceConstraint extends Constraint {
		constructor(bodyA: Body, bodyB: Body, options?: {
		distance?: number,
		localAnchorA?: number[],
		localAnchorB?: number[],
		maxForce?: number
	}): this;
		localAnchorA: number[];
		localAnchorB: number[];
		distance: number;
		maxForce: number;
		upperLimitEnabled: boolean;
		upperLimit: number;
		lowerLimitEnabled: boolean;
		lowerLimit: number;
		position: number;
		setMaxForce(f: number): void;
		getMaxForce(): number
	}

	declare export class GearConstraint extends Constraint {
		constructor(bodyA: Body, bodyB: Body, options?: {
		angle?: number,
		ratio?: number,
		maxTorque?: number
	}): this;
		ratio: number;
		angle: number;
		setMaxTorque(torque: number): void;
		getMaxTorque(): number
	}

	declare export class LockConstraint extends Constraint {
		constructor(bodyA: Body, bodyB: Body, options?: {
		localOffsetB?: number[],
		localAngleB?: number,
		maxForce?: number
	}): this;
		setMaxForce(force: number): void;
		getMaxForce(): number
	}

	declare export class PrismaticConstraint extends Constraint {
		constructor(bodyA: Body, bodyB: Body, options?: {
		maxForce?: number,
		localAnchorA?: number[],
		localAnchorB?: number[],
		localAxisA?: number[],
		disableRotationalLock?: boolean,
		upperLimit?: number,
		lowerLimit?: number
	}): this;
		localAnchorA: number[];
		localAnchorB: number[];
		localAxisA: number[];
		position: number;
		velocity: number;
		lowerLimitEnabled: boolean;
		upperLimitEnabled: boolean;
		lowerLimit: number;
		upperLimit: number;
		upperLimitEquation: ContactEquation;
		lowerLimitEquation: ContactEquation;
		motorEquation: Equation;
		motorEnabled: boolean;
		motorSpeed: number;
		enableMotor(): void;
		disableMotor(): void;
		setLimits(lower: number, upper: number): void
	}

	declare export class RevoluteConstraint extends Constraint {
		constructor(bodyA: Body, bodyB: Body, options?: {
		worldPivot?: number[],
		localPivotA?: number[],
		localPivotB?: number[],
		maxForce?: number
	}): this;
		pivotA: number[];
		pivotB: number[];
		motorEquation: RotationalVelocityEquation;
		motorEnabled: boolean;
		angle: number;
		lowerLimitEnabled: boolean;
		upperLimitEnabled: boolean;
		lowerLimit: number;
		upperLimit: number;
		upperLimitEquation: ContactEquation;
		lowerLimitEquation: ContactEquation;
		enableMotor(): void;
		disableMotor(): void;
		motorIsEnabled(): boolean;
		setLimits(lower: number, upper: number): void;
		setMotorSpeed(speed: number): void;
		getMotorSpeed(): number
	}

	declare export class AngleLockEquation extends Equation {
		constructor(bodyA: Body, bodyB: Body, options?: {
		angle?: number,
		ratio?: number
	}): this;
		computeGq(): number;
		setRatio(ratio: number): number;
		setMaxTorque(torque: number): number
	}

	declare export class ContactEquation extends Equation {
		constructor(bodyA: Body, bodyB: Body): this;
		contactPointA: number[];
		penetrationVec: number[];
		contactPointB: number[];
		normalA: number[];
		restitution: number;
		firstImpact: boolean;
		shapeA: Shape;
		shapeB: Shape;
		computeB(a: number, b: number, h: number): number
	}

	declare export class Equation  {
		DEFAULT_STIFFNESS: number;
		DEFAULT_RELAXATION: number;
		constructor(bodyA: Body, bodyB: Body, minForce?: number, maxForce?: number): this;
		minForce: number;
		maxForce: number;
		bodyA: Body;
		bodyB: Body;
		stiffness: number;
		relaxation: number;
		G: number[];
		offset: number;
		a: number;
		b: number;
		epsilon: number;
		timeStep: number;
		needsUpdate: boolean;
		multiplier: number;
		relativeVelocity: number;
		enabled: boolean;
		gmult(G: number[], vi: number[], wi: number[], vj: number[], wj: number[]): number;
		computeB(a: number, b: number, h: number): number;
		computeGq(): number;
		computeGW(): number;
		computeGWlambda(): number;
		computeGiMf(): number;
		computeGiMGt(): number;
		addToWlambda(deltalambda: number): number;
		computeInvC(eps: number): number
	}

	declare export class FrictionEquation extends Equation {
		constructor(bodyA: Body, bodyB: Body, slipForce: number): this;
		contactPointA: number[];
		contactPointB: number[];
		t: number[];
		shapeA: Shape;
		shapeB: Shape;
		frictionCoefficient: number;
		setSlipForce(slipForce: number): number;
		getSlipForce(): number;
		computeB(a: number, b: number, h: number): number
	}

	declare export class RotationalLockEquation extends Equation {
		constructor(bodyA: Body, bodyB: Body, options?: {
		angle?: number
	}): this;
		angle: number;
		computeGq(): number
	}

	declare export class RotationalVelocityEquation extends Equation {
		constructor(bodyA: Body, bodyB: Body): this;
		computeB(a: number, b: number, h: number): number
	}

	declare export class EventEmitter  {
		on(type: string, listener: Function, context: any): EventEmitter;
		has(type: string, listener: Function): boolean;
		off(type: string, listener: Function): EventEmitter;
		emit(event: any): EventEmitter
	}

	declare export class ContactMaterialOptions  {
		friction: number;
		restitution: number;
		stiffness: number;
		relaxation: number;
		frictionStiffness: number;
		frictionRelaxation: number;
		surfaceVelocity: number
	}

	declare export class ContactMaterial  {
		idCounter: number;
		constructor(materialA: Material, materialB: Material, options?: ContactMaterialOptions): this;
		id: number;
		materialA: Material;
		materialB: Material;
		friction: number;
		restitution: number;
		stiffness: number;
		relaxation: number;
		frictionStuffness: number;
		frictionRelaxation: number;
		surfaceVelocity: number;
		contactSkinSize: number
	}

	declare export class Material  {
		idCounter: number;
		constructor(id: number): this;
		id: number
	}

	declare export class vec2  {
		crossLength(a: number[], b: number[]): number;
		crossVZ(out: number[], vec: number[], zcomp: number): number;
		crossZV(out: number[], zcomp: number, vec: number[]): number;
		rotate(out: number[], a: number[], angle: number): void;
		rotate90cw(out: number[], a: number[]): number;
		centroid(out: number[], a: number[], b: number[], c: number[]): number[];
		create(): number[];
		clone(a: number[]): number[];
		fromValues(x: number, y: number): number[];
		copy(out: number[], a: number[]): number[];
		set(out: number[], x: number, y: number): number[];
		toLocalFrame(
		out: number[], worldPoint: number[], framePosition: number[], frameAngle: number
	): void;
		toGlobalFrame(
		out: number[], localPoint: number[], framePosition: number[], frameAngle: number
	): void;
		add(out: number[], a: number[], b: number[]): number[];
		subtract(out: number[], a: number[], b: number[]): number[];
		sub(out: number[], a: number[], b: number[]): number[];
		multiply(out: number[], a: number[], b: number[]): number[];
		mul(out: number[], a: number[], b: number[]): number[];
		divide(out: number[], a: number[], b: number[]): number[];
		div(out: number[], a: number[], b: number[]): number[];
		scale(out: number[], a: number[], b: number): number[];
		distance(a: number[], b: number[]): number;
		dist(a: number[], b: number[]): number;
		squaredDistance(a: number[], b: number[]): number;
		sqrDist(a: number[], b: number[]): number;
		length(a: number[]): number;
		len(a: number[]): number;
		squaredLength(a: number[]): number;
		sqrLen(a: number[]): number;
		negate(out: number[], a: number[]): number[];
		normalize(out: number[], a: number[]): number[];
		dot(a: number[], b: number[]): number;
		str(a: number[]): string
	}

	declare export class Body extends EventEmitter {
		sleepyEvent: {
		type: string
	};
		sleepEvent: {
		type: string
	};
		wakeUpEvent: {
		type: string
	};
		DYNAMIC: number;
		STATIC: number;
		KINEMATIC: number;
		AWAKE: number;
		SLEEPY: number;
		SLEEPING: number;
		constructor(options?: BodyOptions): this;
		id: number;
		world: World;
		shapes: Shape[];
		mass: number;
		invMass: number;
		inertia: number;
		invInertia: number;
		invMassSolve: number;
		invInertiaSolve: number;
		fixedRotation: number;
		position: number[];
		interpolatedPosition: number[];
		interpolatedAngle: number;
		previousPosition: number[];
		previousAngle: number;
		velocity: number[];
		vlambda: number[];
		wlambda: number[];
		angle: number;
		angularVelocity: number;
		force: number[];
		angularForce: number;
		damping: number;
		angularDamping: number;
		type: number;
		boundingRadius: number;
		aabb: AABB;
		aabbNeedsUpdate: boolean;
		allowSleep: boolean;
		wantsToSleep: boolean;
		sleepState: number;
		sleepSpeedLimit: number;
		sleepTimeLimit: number;
		gravityScale: number;
		collisionResponse: boolean;
		updateSolveMassProperties(): void;
		setDensity(density: number): void;
		getArea(): number;
		getAABB(): AABB;
		updateAABB(): void;
		updateBoundingRadius(): void;
		addShape(shape: Shape, offset?: number[], angle?: number): void;
		removeShape(shape: Shape): boolean;
		updateMassProperties(): void;
		applyForce(force: number[], worldPoint: number[]): void;
		toLocalFrame(out: number[], worldPoint: number[]): void;
		toWorldFrame(out: number[], localPoint: number[]): void;
		fromPolygon(
		path: number[][], options?: {
		optimalDecomp?: boolean,
		skipSimpleCheck?: boolean,
		removeCollinearPoints?: any
	}
	): boolean;
		adjustCenterOfMass(): void;
		setZeroForce(): void;
		resetConstraintVelocity(): void;
		applyDamping(dy: number): void;
		wakeUp(): void;
		sleep(): void;
		sleepTick(time: number, dontSleep: boolean, dt: number): void;
		getVelocityFromPosition(story: number[], dt: number): number[];
		getAngularVelocityFromPosition(timeStep: number): number;
		overlaps(body: Body): boolean
	}

	declare export class Spring  {
		constructor(bodyA: Body, bodyB: Body, options?: {
		stiffness?: number,
		damping?: number,
		localAnchorA?: number[],
		localAnchorB?: number[],
		worldAnchorA?: number[],
		worldAnchorB?: number[]
	}): this;
		stiffness: number;
		damping: number;
		bodyA: Body;
		bodyB: Body;
		applyForce(): void
	}

	declare export class LinearSpring extends Spring {
		localAnchorA: number[];
		localAnchorB: number[];
		restLength: number;
		setWorldAnchorA(worldAnchorA: number[]): void;
		setWorldAnchorB(worldAnchorB: number[]): void;
		getWorldAnchorA(result: number[]): number[];
		getWorldAnchorB(result: number[]): number[];
		applyForce(): void
	}

	declare export class RotationalSpring extends Spring {
		constructor(bodyA: Body, bodyB: Body, options?: {
		restAngle?: number,
		stiffness?: number,
		damping?: number
	}): this;
		restAngle: number
	}

	declare export class Capsule extends Shape {
		constructor(options?: CapsuleOptions): this;
		length: number;
		radius: number
	}

	declare export class Circle extends Shape {
		constructor(options?: CircleOptions): this;
		radius: number
	}

	declare export class Convex extends Shape {
		triangleArea(a: number[], b: number[], c: number[]): number;
		constructor(options?: ConvexOptions): this;
		vertices: number[][];
		axes: number[];
		centerOfMass: number[];
		triangles: number[];
		boundingRadius: number;
		projectOntoLocalAxis(localAxis: number[], result: number[]): void;
		projectOntoWorldAxis(
		localAxis: number[], shapeOffset: number[], shapeAngle: number, result: number[]
	): void;
		updateCenterOfMass(): void
	}

	declare export class Heightfield extends Shape {
		constructor(options?: HeightfieldOptions): this;
		data: number[];
		maxValue: number;
		minValue: number;
		elementWidth: number
	}

	declare export class Shape  {
		idCounter: number;
		CIRCLE: number;
		PARTICLE: number;
		PLANE: number;
		CONVEX: number;
		LINE: number;
		BOX: number;
		CAPSULE: number;
		HEIGHTFIELD: number;
		constructor(options?: ShapeOptions): this;
		type: number;
		id: number;
		position: number[];
		angle: number;
		boundingRadius: number;
		collisionGroup: number;
		collisionResponse: boolean;
		collisionMask: number;
		material: Material;
		area: number;
		sensor: boolean;
		computeMomentOfInertia(mass: number): number;
		updateBoundingRadius(): number;
		updateArea(): void;
		computeAABB(out: AABB, position: number[], angle: number): void
	}

	declare export class Line extends Shape {
		constructor(options?: LineOptions): this;
		length: number
	}

	declare export class Particle extends Shape {
		constructor(options?: SharedShapeOptions): this
	}

	declare export class Plane extends Shape {
		constructor(options?: SharedShapeOptions): this
	}

	declare export class Box extends Shape {
		constructor(options?: BoxOptions): this;
		width: number;
		height: number
	}

	declare export class Solver extends EventEmitter {
		GS: number;
		ISLAND: number;
		constructor(options?: {
		
	}, type?: number): this;
		type: number;
		equations: Equation[];
		equationSortFunction: Equation;
		solve(dy: number, world: World): void;
		solveIsland(dy: number, island: Island): void;
		sortEquations(): void;
		addEquation(eq: Equation): void;
		addEquations(eqs: Equation[]): void;
		removeEquation(eq: Equation): void;
		removeAllEquations(): void
	}

	declare export class GSSolver extends Solver {
		constructor(options?: {
		iterations?: number,
		tolerance?: number
	}): this;
		iterations: number;
		tolerance: number;
		useZeroRHS: boolean;
		frictionIterations: number;
		usedIterations: number;
		solve(h: number, world: World): void
	}

	declare export class OverlapKeeper  {
		constructor(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape): this;
		shapeA: Shape;
		shapeB: Shape;
		bodyA: Body;
		bodyB: Body;
		tick(): void;
		setOverlapping(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Body): void;
		bodiesAreOverlapping(bodyA: Body, bodyB: Body): boolean;
		set(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape): void
	}

	declare export class TupleDictionary  {
		data: number[];
		keys: number[];
		getKey(id1: number, id2: number): string;
		getByKey(key: number): number;
		get(i: number, j: number): number;
		set(i: number, j: number, value: number): number;
		reset(): void;
		copy(dict: TupleDictionary): void
	}

	declare export class Utils  {
		appendArray<T>(a: Array<T>, b: Array<T>): Array<T>;
		splice<T>(array: Array<T>, index: number, howMany: number): void;
		extend(a: any, b: any): void;
		defaults(options: any, defaults: any): any
	}

	declare export class Island  {
		equations: Equation[];
		bodies: Body[];
		reset(): void;
		getBodies(result: any): Body[];
		wantsToSleep(): boolean;
		sleep(): boolean
	}

	declare export class IslandManager extends Solver {
		getUnvisitedNode(nodes: IslandNode[]): IslandNode;
		equations: Equation[];
		islands: Island[];
		nodes: IslandNode[];
		visit(node: IslandNode, bds: Body[], eqs: Equation[]): void;
		bfs(root: IslandNode, bds: Body[], eqs: Equation[]): void;
		split(world: World): Island[]
	}

	declare export class IslandNode  {
		constructor(body: Body): this;
		body: Body;
		neighbors: IslandNode[];
		equations: Equation[];
		visited: boolean;
		reset(): void
	}

	declare export class World extends EventEmitter {
		postStepEvent: {
		type: string
	};
		addBodyEvent: {
		type: string
	};
		removeBodyEvent: {
		type: string
	};
		addSpringEvent: {
		type: string
	};
		impactEvent: {
		type: string,
		bodyA: Body,
		bodyB: Body,
		shapeA: Shape,
		shapeB: Shape,
		contactEquation: ContactEquation
	};
		postBroadphaseEvent: {
		type: string,
		pairs: Body[]
	};
		beginContactEvent: {
		type: string,
		shapeA: Shape,
		shapeB: Shape,
		bodyA: Body,
		bodyB: Body,
		contactEquations: ContactEquation[]
	};
		endContactEvent: {
		type: string,
		shapeA: Shape,
		shapeB: Shape,
		bodyA: Body,
		bodyB: Body
	};
		preSolveEvent: {
		type: string,
		contactEquations: ContactEquation[],
		frictionEquations: FrictionEquation[]
	};
		NO_SLEEPING: number;
		BODY_SLEEPING: number;
		ISLAND_SLEEPING: number;
		integrateBody(body: Body, dy: number): void;
		constructor(options?: {
		solver?: Solver,
		gravity?: number[],
		broadphase?: Broadphase,
		islandSplit?: boolean,
		doProfiling?: boolean
	}): this;
		springs: Spring[];
		bodies: Body[];
		solver: Solver;
		narrowphase: Narrowphase;
		islandManager: IslandManager;
		gravity: number[];
		frictionGravity: number;
		useWorldGravityAsFrictionGravity: boolean;
		useFrictionGravityOnZeroGravity: boolean;
		doProfiling: boolean;
		lastStepTime: number;
		broadphase: Broadphase;
		constraints: Constraint[];
		defaultMaterial: Material;
		defaultContactMaterial: ContactMaterial;
		lastTimeStep: number;
		applySpringForces: boolean;
		applyDamping: boolean;
		applyGravity: boolean;
		solveConstraints: boolean;
		contactMaterials: ContactMaterial[];
		time: number;
		stepping: boolean;
		islandSplit: boolean;
		emitImpactEvent: boolean;
		sleepMode: number;
		addConstraint(c: Constraint): void;
		addContactMaterial(contactMaterial: ContactMaterial): void;
		removeContactMaterial(cm: ContactMaterial): void;
		getContactMaterial(materialA: Material, materialB: Material): ContactMaterial;
		removeConstraint(c: Constraint): void;
		step(dy: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;
		runNarrowphase(
		np: Narrowphase, bi: Body, si: Shape, xi: any[], ai: number, bj: Body, sj: Shape, xj: any[], aj: number, cm: number, glen: number
	): void;
		addSpring(s: Spring): void;
		removeSpring(s: Spring): void;
		addBody(body: Body): void;
		removeBody(body: Body): void;
		getBodyByID(id: number): Body;
		disableBodyCollision(bodyA: Body, bodyB: Body): void;
		enableBodyCollision(bodyA: Body, bodyB: Body): void;
		clear(): void;
		clone(): World;
		hitTest(worldPoint: number[], bodies: Body[], precision: number): Body[];
		setGlobalEquationParameters(parameters: {
		relaxation?: number,
		stiffness?: number
	}): void;
		setGlobalStiffness(stiffness: number): void;
		setGlobalRelaxation(relaxation: number): void
	}

	
}
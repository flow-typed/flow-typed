

declare module 'matter-js' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Matter' {
		declare interface IChamfer {
		radius?: number | Array<number>,
		quality?: number,
		qualityMin?: number,
		qualityMax?: number
	}

	declare interface IChamferableBodyDefinition {
		chamfer?: IChamfer
	}

	declare export interface IBodyDefinition {
		angle?: number,
		angularSpeed?: number,
		angularVelocity?: number,
		area?: number,
		axes?: Array<Vector>,
		bounds?: Bounds,
		density?: number,
		force?: Vector,
		friction?: number,
		frictionAir?: number,
		id?: number,
		inertia?: number,
		inverseInertia?: number,
		inverseMass?: number,
		isSensor?: boolean,
		isSleeping?: boolean,
		isStatic?: boolean,
		label?: string,
		mass?: number,
		motion?: number,
		position?: Vector,
		render?: IBodyRenderOptions,
		restitution?: number,
		sleepThreshold?: number,
		slop?: number,
		speed?: number,
		timeScale?: number,
		torque?: number,
		type?: string,
		velocity?: Vector,
		vertices?: Array<Vector>,
		parts?: Array<Body>,
		parent?: Body,
		frictionStatic?: number,
		collisionFilter?: ICollisionFilter
	}

	declare export interface IBodyRenderOptions {
		visible?: boolean,
		sprite?: IBodyRenderOptionsSprite,
		fillStyle?: string,
		lineWidth?: number,
		strokeStyle?: string,
		opacity?: number
	}

	declare export interface IBodyRenderOptionsSprite {
		texture: string,
		xScale: number,
		yScale: number
	}

	declare export interface IBound {
		min: {
		x: number,
		y: number
	},
		max: {
		x: number,
		y: number
	}
	}

	declare export interface ICompositeDefinition {
		bodies?: Array<Body>,
		composites?: Array<Composite>,
		constraints?: Array<Constraint>,
		id?: number,
		isModified?: boolean,
		label?: string,
		parent?: Composite,
		type?: String
	}

	declare export interface IConstraintDefinition {
		bodyA?: Body,
		bodyB?: Body,
		id?: number,
		label?: string,
		length?: number,
		pointA?: Vector,
		pointB?: Vector,
		render?: IConstraintRenderDefinition,
		stiffness?: number,
		type?: string
	}

	declare export interface IConstraintRenderDefinition {
		lineWidth: number,
		strokeStyle: string,
		visible: boolean
	}

	declare export interface IEngineDefinition {
		positionIterations?: number,
		velocityIterations?: number,
		constraintIterations?: number,
		enableSleeping?: boolean,
		timing?: IEngineTimingOptions,
		grid?: Grid,
		world?: World
	}

	declare export interface IEngineTimingOptions {
		timeScale: number,
		timestamp: number
	}

	declare export interface IGridDefinition {
		
	}

	declare export interface IMouseConstraintDefinition {
		constraint?: Constraint,
		collisionFilter?: ICollisionFilter,
		body?: Body,
		mouse?: Mouse,
		type?: string
	}

	declare export interface IPair {
		id: number,
		bodyA: Body,
		bodyB: Body,
		contacts: any,
		activeContacts: any,
		separation: number,
		isActive: boolean,
		timeCreated: number,
		timeUpdated: number,
		inverseMass: number,
		friction: number,
		frictionStatic: number,
		restitution: number,
		slop: number
	}

	declare export interface IRenderDefinition {
		controller?: any,
		engine: Engine,
		element?: HTMLElement,
		canvas?: HTMLCanvasElement,
		options?: IRendererOptions,
		bounds?: Bounds,
		context?: CanvasRenderingContext2D,
		textures?: any
	}

	declare export interface IRendererOptions {
		width?: number,
		height?: number,
		hasBounds?: boolean,
		wireframes?: boolean
	}

	declare export interface IRunnerOptions {
		isFixed?: boolean,
		delta?: number
	}

	declare interface IWorldDefinition {
		gravity?: Vector,
		bounds?: Bounds
	}

	declare export interface ICollisionFilter {
		category: number,
		mask: number,
		group: number
	}

	declare export interface IMousePoint {
		x: number,
		y: number
	}

	declare export interface IEvent<T> {
		name: string,
		source: T
	}

	declare export interface IEventComposite<T> {
		object: any
	}

	declare export interface IEventTimestamped<T> {
		timestamp: number
	}

	declare export interface IEventCollision<T> {
		pairs: Array<IPair>
	}

		declare export class Axes  {
		fromVertices(vertices: Array<Vector>): Array<Vector>;
		rotate(axes: Array<Vector>, angle: number): void
	}

	declare export class Bodies  {
		circle(
		x: number, y: number, radius: number, options?: IBodyDefinition, maxSides?: number
	): Body;
		polygon(
		x: number, y: number, sides: number, radius: number, options?: IChamferableBodyDefinition
	): Body;
		rectangle(
		x: number, y: number, width: number, height: number, options?: IChamferableBodyDefinition
	): Body;
		trapezoid(
		x: number, y: number, width: number, height: number, slope: number, options?: IChamferableBodyDefinition
	): Body;
		fromVertices(
		x: number, y: number, vertexSets: Array<Array<Vector>>, options?: IBodyDefinition, flagInternal?: boolean, removeCollinear?: number, minimumArea?: number
	): Body
	}

	declare export class Body  {
		applyForce(body: Body, position: Vector, force: Vector): void;
		create(options: IBodyDefinition): Body;
		rotate(body: Body, rotation: number): void;
		nextGroup(isNonColliding: boolean): number;
		nextCategory(): number;
		set(body: Body, settings: any, value?: any): void;
		setMass(body: Body, mass: number): void;
		setDensity(body: Body, density: number): void;
		setInertia(body: Body, interna: number): void;
		setVertices(body: Body, vertices: Array<Vector>): void;
		setParts(body: Body, parts: Body[], autoHull?: boolean): void;
		setPosition(body: Body, position: Vector): void;
		setAngle(body: Body, angle: number): void;
		setVelocity(body: Body, velocity: Vector): void;
		setAngularVelocity(body: Body, velocity: number): void;
		setStatic(body: Body, isStatic: boolean): void;
		scale(body: Body, scaleX: number, scaleY: number, point?: Vector): void;
		translate(body: Body, translation: Vector): void;
		update(body: Body, deltaTime: number, timeScale: number, correction: number): void;
		angle: number;
		angularSpeed: number;
		angularVelocity: number;
		area: number;
		axes: Array<Vector>;
		bounds: Bounds;
		density: number;
		force: Vector;
		friction: number;
		frictionAir: number;
		id: number;
		inertia: number;
		inverseInertia: number;
		inverseMass: number;
		isSleeping: boolean;
		isStatic: boolean;
		label: string;
		mass: number;
		motion: number;
		position: Vector;
		render: IBodyRenderOptions;
		restitution: number;
		sleepThreshold: number;
		slop: number;
		speed: number;
		timeScale: number;
		torque: number;
		type: string;
		velocity: Vector;
		vertices: Array<Vector>;
		parts: Array<Body>;
		parent: Body;
		frictionStatic: number;
		collisionFilter: ICollisionFilter
	}

	declare export class Bounds  {
		create(vertices: Vertices): Bounds;
		update(bounds: Bounds, vertices: Vertices, velocity: Vector): void;
		contains(bounds: Bounds, point: Vector): boolean;
		overlaps(boundsA: Bounds, boundsB: Bounds): boolean;
		translate(bounds: Bounds, vector: Vector): void;
		shift(bounds: Bounds, position: Vector): void
	}

	declare export class Composite  {
		add(composite: Composite, object: Body | Composite | Constraint): Composite;
		allBodies(composite: Composite): Array<Body>;
		allComposites(composite: Composite): Array<Composite>;
		allConstraints(composite: Composite): Array<Composite>;
		clear(composite: Composite, keepStatic: boolean, deep?: boolean): void;
		create(options?: ICompositeDefinition): Composite;
		get(composite: Composite, id: number, type: string): Body | Composite | Constraint;
		move(
		compositeA: Composite, objects: Array<Body | Composite | Constraint>, compositeB: Composite
	): Composite;
		rebase(composite: Composite): Composite;
		remove(
		composite: Composite, object: Body | Composite | Constraint, deep?: boolean
	): Composite;
		setModified(
		composite: Composite, isModified: boolean, updateParents?: boolean, updateChildren?: boolean
	): void;
		translate(composite: Composite, translation: Vector, recursive?: boolean): void;
		rotate(
		composite: Composite, rotation: number, point: Vector, recursive?: boolean
	): void;
		scale(
		composite: Composite, scaleX: number, scaleY: number, point: Vector, recursive?: boolean
	): void;
		bodies: Array<Body>;
		composites: Array<Composite>;
		constraints: Array<Constraint>;
		id: number;
		isModified: boolean;
		label: string;
		parent: Composite;
		type: String
	}

	declare export class Composites  {
		car(
		xx: number, yy: number, width: number, height: number, wheelSize: number
	): Composite;
		chain(
		composite: Composite, xOffsetA: number, yOffsetA: number, xOffsetB: number, yOffsetB: number, options: any
	): Composite;
		mesh(
		composite: Composite, columns: number, rows: number, crossBrace: boolean, options: any
	): Composite;
		newtonsCradle(
		xx: number, yy: number, _number: number, size: number, length: number
	): Composite;
		pyramid(
		xx: number, yy: number, columns: number, rows: number, columnGap: number, rowGap: number, callback: Function
	): Composite;
		softBody(
		xx: number, yy: number, columns: number, rows: number, columnGap: number, rowGap: number, crossBrace: boolean, particleRadius: number, particleOptions: any, constraintOptions: any
	): Composite;
		stack(
		xx: number, yy: number, columns: number, rows: number, columnGap: number, rowGap: number, callback: Function
	): Composite
	}

	declare export class Constraint  {
		create(options: IConstraintDefinition): Constraint;
		bodyA: Body;
		bodyB: Body;
		id: number;
		label: string;
		length: number;
		pointA: Vector;
		pointB: Vector;
		render: IConstraintRenderDefinition;
		stiffness: number;
		type: string
	}

	declare export class Engine  {
		clear(engine: Engine): void;
		create(element?: HTMLElement | IEngineDefinition, options?: IEngineDefinition): Engine;
		create(options?: IEngineDefinition): Engine;
		merge(engineA: Engine, engineB: Engine): void;
		update(engine: Engine, delta?: number, correction?: number): Engine;
		run(enige: Engine): void;
		broadphase: Grid;
		constraintIterations: number;
		enabled: boolean;
		enableSleeping: boolean;
		pairs: any;
		positionIterations: number;
		render: Render;
		timing: IEngineTimingOptions;
		velocityIterations: number;
		world: World
	}

	declare export class Grid  {
		create(options?: IGridDefinition): Grid;
		update(grid: Grid, bodies: Array<Body>, engine: Engine, forceUpdate: boolean): void;
		clear(grid: Grid): void
	}

	declare export class MouseConstraint  {
		create(engine: Engine, options?: IMouseConstraintDefinition): MouseConstraint;
		constraint: Constraint;
		collisionFilter: ICollisionFilter;
		body: Body;
		mouse: Mouse;
		type: string
	}

	declare export class Pairs  {
		clear(pairs: any): any
	}

	declare export class Query  {
		ray(
		bodies: Array<Body>, startPoint: Vector, endPoint: Vector, rayWidth?: number
	): Array<any>;
		region(bodies: Array<Body>, bounds: Bounds, outside?: boolean): Array<Body>;
		point(bodies: Array<Body>, point: Vector): Array<Body>
	}

	declare export class Render  {
		create(options: IRenderDefinition): Render;
		run(render: Render): void;
		stop(render: Render): void;
		setPixelRatio(render: Render, pixelRatio: number): void;
		world(render: Render): void;
		controller: any;
		element: HTMLElement;
		canvas: HTMLCanvasElement;
		options: IRendererOptions;
		bounds: Bounds;
		context: CanvasRenderingContext2D;
		textures: any
	}

	declare export class Runner  {
		create(options: IRunnerOptions): Runner;
		run(runner: Runner, engine: Engine): Runner;
		run(engine: Engine): Runner;
		tick(runner: Runner, engine: Engine, time: number): void;
		stop(runner: Runner): void;
		start(runner: Runner, engine: Engine): void;
		enabled: boolean;
		isFixed: boolean;
		delta: number
	}

	declare export class Sleeping  {
		set(body: Body, isSleeping: boolean): void
	}

	declare export class Svg  {
		pathToVertices(path: SVGPathElement, sampleLength: number): Array<Vector>
	}

	declare export class Vector  {
		x: number;
		y: number;
		create(x?: number, y?: number): Vector;
		clone(vector: Vector): Vector;
		cross3(vectorA: Vector, vectorB: Vector, vectorC: Vector): number;
		add(vectorA: Vector, vectorB: Vector, output?: Vector): Vector;
		angle(vectorA: Vector, vectorB: Vector): number;
		cross(vectorA: Vector, vectorB: Vector): number;
		div(vector: Vector, scalar: number): Vector;
		dot(vectorA: Vector, vectorB: Vector): Number;
		magnitude(vector: Vector): number;
		magnitudeSquared(vector: Vector): number;
		mult(vector: Vector, scalar: number): Vector;
		neg(vector: Vector): Vector;
		normalise(vector: Vector): Vector;
		perp(vector: Vector, negate?: boolean): Vector;
		rotate(vector: Vector, angle: number): Vector;
		rotateAbout(vector: Vector, angle: number, point: Vector, output?: Vector): Vector;
		sub(vectorA: Vector, vectorB: Vector, optional?: Vector): Vector
	}

	declare export class Vertices  {
		mean(vertices: Array<Vector>): Array<Vector>;
		clockwiseSort(vertices: Array<Vector>): Array<Vector>;
		isConvex(vertices: Array<Vector>): boolean;
		hull(vertices: Array<Vector>): Array<Vector>;
		area(vertices: Array<Vector>, signed: boolean): number;
		centre(vertices: Array<Vector>): Vector;
		chamfer(
		vertices: Array<Vector>, radius: number | Array<number>, quality: number, qualityMin: number, qualityMax: number
	): void;
		contains(vertices: Array<Vector>, point: Vector): boolean;
		create(points: Array<Vector>, body: Body): void;
		fromPath(path: string, body: Body): Array<Vector>;
		inertia(vertices: Array<Vector>, mass: number): number;
		rotate(vertices: Array<Vector>, angle: number, point: Vector): void;
		scale(vertices: Array<Vector>, scaleX: number, scaleY: number, point: Vector): void;
		translate(vertices: Array<Vector>, vector: Vector, scalar: number): void
	}

	declare export class World extends Composite {
		add(
		world: World, body: Body | Array<Body> | Composite | Array<Composite> | Constraint | Array<Constraint> | MouseConstraint
	): World;
		addBody(world: World, body: Body): World;
		addComposite(world: World, composite: Composite): World;
		addConstraint(world: World, constraint: Constraint): World;
		clear(world: World, keepStatic: boolean): void;
		create(options: IWorldDefinition): World;
		gravity: Vector;
		bounds: Bounds
	}

	declare export class Mouse  {
		create(element: HTMLElement): Mouse;
		setElement(mouse: Mouse, element: HTMLElement): void;
		clearSourceEvents(mouse: Mouse): void;
		setOffset(mouse: Mouse, offset: Vector): void;
		setScale(mouse: Mouse, scale: Vector): void;
		element: HTMLElement;
		absolute: IMousePoint;
		position: IMousePoint;
		mousedownPosition: IMousePoint;
		mouseupPosition: IMousePoint;
		offset: IMousePoint;
		scale: IMousePoint;
		wheelDelta: number;
		button: number;
		pixelRatio: number
	}

	declare export class Events  {
		on(obj: Body, name: "sleepStart", callback: (e: IEvent<Body>) => void): void;
		on(obj: Body, name: "sleepEnd", callback: (e: IEvent<Body>) => void): void;
		on(
		obj: Engine, name: "beforeAdd", callback: (e: IEventComposite<Composite>) => void
	): void;
		on(
		obj: Engine, name: "afterAdd", callback: (e: IEventComposite<Composite>) => void
	): void;
		on(
		obj: Engine, name: "beforeRemove", callback: (e: IEventComposite<Composite>) => void
	): void;
		on(
		obj: Engine, name: "afterRemove", callback: (e: IEventComposite<Composite>) => void
	): void;
		on(
		obj: Engine, name: "afterUpdate", callback: (e: IEventTimestamped<Engine>) => void
	): void;
		on(
		obj: Engine, name: "beforeRender", callback: (e: IEventTimestamped<Render>) => void
	): void;
		on(
		obj: Engine, name: "afterRender", callback: (e: IEventTimestamped<Render>) => void
	): void;
		on(
		obj: Engine, name: "beforeUpdate", callback: (e: IEventTimestamped<Engine>) => void
	): void;
		on(
		obj: Engine, name: "collisionActive", callback: (e: IEventCollision<Engine>) => void
	): void;
		on(
		obj: Engine, name: "collisionEnd", callback: (e: IEventCollision<Engine>) => void
	): void;
		on(
		obj: Engine, name: "collisionStart", callback: (e: IEventCollision<Engine>) => void
	): void;
		on(
		obj: Engine, name: "beforeTick", callback: (e: IEventTimestamped<Runner>) => void
	): void;
		on(
		obj: Engine, name: "tick", callback: (e: IEventTimestamped<Runner>) => void
	): void;
		on(
		obj: Engine, name: "afterTick", callback: (e: IEventTimestamped<Runner>) => void
	): void;
		on(
		obj: Engine, name: "beforeRender", callback: (e: IEventTimestamped<Runner>) => void
	): void;
		on(
		obj: Engine, name: "afterRender", callback: (e: IEventTimestamped<Runner>) => void
	): void;
		on(obj: MouseConstraint, name: "mousedown", callback: (e: any) => void): void;
		on(obj: MouseConstraint, name: "mousemove", callback: (e: any) => void): void;
		on(obj: MouseConstraint, name: "mouseup", callback: (e: any) => void): void;
		on(obj: any, name: string, callback: (e: any) => void): void;
		off(obj: any, eventName: string, callback: (e: any) => void): void;
		trigger(object: any, eventNames: string, event?: (e: any) => void): void
	}

	
}
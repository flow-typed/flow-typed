

declare module 'box2dweb' {
					
}

declare module 'Common' {
				declare export class b2Color  {
		r: number;
		g: number;
		b: number;
		color: number;
		constructor(rr: number, gg: number, bb: number): this;
		Set(rr: number, gg: number, bb: number): void
	}

	declare export class b2Settings  {
		b2Assert(a: boolean): void;
		b2MixFriction(friction1: number, friction2: number): number;
		b2MixRestitution(restitution1: number, restitution2: number): number;
		b2_aabbExtension: number;
		b2_aabbMultiplier: number;
		b2_angularSleepTolerance: number;
		b2_angularSlop: number;
		b2_contactBaumgarte: number;
		b2_linearSleepTolerance: number;
		b2_linearSlop: number;
		b2_maxAngularCorrection: number;
		b2_maxLinearCorrection: number;
		b2_maxManifoldPoints: number;
		b2_maxRotation: number;
		b2_maxRotationSquared: number;
		b2_maxTOIContactsPerIsland: number;
		b2_maxTOIJointsPerIsland: number;
		b2_maxTranslation: number;
		b2_maxTranslationSquared: number;
		b2_pi: number;
		b2_polygonRadius: number;
		b2_timeToSleep: number;
		b2_toiSlop: number;
		b2_velocityThreshold: number;
		USHRT_MAX: number;
		VERSION: string
	}

	
}

declare module 'Math' {
				declare export class b2Mat22  {
		col1: b2Vec2;
		col2: b2Vec2;
		constructor(): this;
		Abs(): void;
		AddM(m: b2Mat22): void;
		Copy(): b2Mat22;
		FromAngle(angle: number): b2Mat22;
		FromVV(c1: b2Vec2, c2: b2Vec2): b2Mat22;
		GetAngle(): number;
		GetInverse(out: b2Mat22): b2Mat22;
		Set(angle: number): void;
		SetIdentity(): void;
		SetM(m: b2Mat22): void;
		SetVV(c1: b2Vec2, c2: b2Vec2): void;
		SetZero(): void;
		Solve(out: b2Vec2, bX: number, bY: number): b2Vec2
	}

	declare export class b2Mat33  {
		col1: b2Vec3;
		col2: b2Vec3;
		col3: b2Vec3;
		constructor(c1: b2Vec3, c2: b2Vec3, c3: b2Vec3): this;
		AddM(m: b2Mat33): void;
		Copy(): b2Mat33;
		SetIdentity(): void;
		SetM(m: b2Mat33): void;
		SetVVV(c1: b2Vec3, c2: b2Vec3, c3: b2Vec3): void;
		SetZero(): void;
		Solve22(out: b2Vec2, bX: number, bY: number): b2Vec2;
		Solve33(out: b2Vec3, bX: number, bY: number, bZ: number): b2Vec3
	}

	declare export class b2Math  {
		IsValid(x: number): boolean;
		Dot(a: b2Vec2, b: b2Vec2): number;
		CrossVV(a: b2Vec2, b: b2Vec2): number;
		CrossVF(a: b2Vec2, s: number): b2Vec2;
		CrossFV(s: number, a: b2Vec2): b2Vec2;
		MulMV(A: b2Mat22, v: b2Vec2): b2Vec2;
		MulTMV(A: b2Mat22, v: b2Vec2): b2Vec2;
		MulX(T: b2Transform, v: b2Vec2): b2Vec2;
		MulXT(T: b2Transform, v: b2Vec2): b2Vec2;
		AddVV(a: b2Vec2, b: b2Vec2): b2Vec2;
		SubtractVV(a: b2Vec2, b: b2Vec2): b2Vec2;
		Distance(a: b2Vec2, b: b2Vec2): number;
		DistanceSquared(a: b2Vec2, b: b2Vec2): number;
		MulFV(s: number, a: b2Vec2): b2Vec2;
		AddMM(A: b2Mat22, B: b2Mat22): b2Mat22;
		MulMM(A: b2Mat22, B: b2Mat22): b2Mat22;
		MulTMM(A: b2Mat22, B: b2Mat22): b2Mat22;
		Abs(a: number): number;
		AbsV(a: b2Vec2): b2Vec2;
		AbsM(A: b2Mat22): b2Mat22;
		Min(a: number, b: number): number;
		MinV(a: b2Vec2, b: b2Vec2): b2Vec2;
		Max(a: number, b: number): number;
		MaxV(a: b2Vec2, b: b2Vec2): b2Vec2;
		Clamp(a: number, low: number, high: number): number;
		ClampV(a: b2Vec2, low: b2Vec2, high: b2Vec2): b2Vec2;
		Swap(a: any, b: any): void;
		Random(): number;
		RandomRange(lo: number, hi: number): number;
		NextPowerOfTwo(x: number): number;
		IsPowerOfTwo(x: number): boolean;
		b2Vec2_zero: b2Vec2;
		b2Mat22_identity: b2Mat22;
		b2Transform_identity: b2Transform
	}

	declare export class b2Sweep  {
		a: number;
		a0: number;
		c: b2Vec2;
		c0: b2Vec2;
		localCenter: b2Vec2;
		t0: b2Vec2;
		Advance(t: number): void;
		Copy(): b2Sweep;
		GetTransform(xf: b2Transform, alpha: number): void;
		Set(other: b2Sweep): void
	}

	declare export class b2Transform  {
		position: b2Vec2;
		R: b2Mat22;
		constructor(pos: b2Vec2, r: b2Mat22): this;
		GetAngle(): number;
		Initialize(pos: b2Vec2, r: b2Mat22): void;
		Set(x: b2Transform): void;
		SetIdentity(): void
	}

	declare export class b2Vec2  {
		x: number;
		y: number;
		constructor(x?: number, y?: number): this;
		Abs(): void;
		Add(v: b2Vec2): void;
		Copy(): b2Vec2;
		CrossFV(s: number): void;
		CrossVF(s: number): void;
		GetNegative(): b2Vec2;
		IsValid(): boolean;
		Length(): number;
		LengthSquared(): number;
		Make(x: number, y: number): b2Vec2;
		MaxV(b: b2Vec2): void;
		MinV(b: b2Vec2): void;
		MulM(A: b2Mat22): void;
		Multiply(a: number): void;
		MulTM(A: b2Mat22): void;
		NegativeSelf(): void;
		Normalize(): number;
		Set(x?: number, y?: number): void;
		SetV(v: b2Vec2): void;
		SetZero(): void;
		Subtract(v: b2Vec2): void
	}

	declare export class b2Vec3  {
		x: number;
		y: number;
		z: number;
		constructor(x?: number, y?: number, z?: number): this;
		Add(v: b2Vec3): void;
		Copy(): b2Vec3;
		GetNegative(): b2Vec3;
		Multiply(a: number): void;
		NegativeSelf(): void;
		Set(x?: number, y?: number, z?: number): void;
		SetV(v: b2Vec3): void;
		SetZero(): void;
		Subtract(v: b2Vec3): void
	}

	
}

declare module 'Collision' {
		declare export interface IBroadPhase {
		CreateProxy(aabb: b2AABB, userData: any): b2DynamicTreeNode,
		DestroyProxy(proxy: b2DynamicTreeNode): void,
		GetFatAABB(proxy: b2DynamicTreeNode): b2AABB,
		GetProxyCount(): number,
		GetUserData(proxy: b2DynamicTreeNode): any,
		MoveProxy(
		proxy: b2DynamicTreeNode, aabb: b2AABB, displacement: Box2D.Common.Math.b2Vec2
	): void,
		Query(callback: (proxy: b2DynamicTreeNode) => boolean, aabb: b2AABB): void,
		RayCast(
		callback: (input: b2RayCastInput, proxy: b2DynamicTreeNode) => number, input: b2RayCastInput
	): void,
		Rebalance(iterations: number): void
	}

		declare export class b2AABB  {
		lowerBound: Box2D.Common.Math.b2Vec2;
		upperBound: Box2D.Common.Math.b2Vec2;
		Combine(aabb1: b2AABB, aabb2: b2AABB): b2AABB;
		Combine(aabb1: b2AABB, aabb2: b2AABB): void;
		Contains(aabb: b2AABB): boolean;
		GetCenter(): Box2D.Common.Math.b2Vec2;
		GetExtents(): Box2D.Common.Math.b2Vec2;
		IsValid(): boolean;
		RayCast(output: b2RayCastOutput, input: b2RayCastInput): boolean;
		TestOverlap(other: b2AABB): boolean
	}

	declare export class b2ContactID  {
		features: Features;
		Key: number;
		constructor(): this;
		Copy(): b2ContactID;
		Set(id: b2ContactID): void
	}

	declare export class b2ContactPoint  {
		friction: number;
		id: b2ContactID;
		normal: Box2D.Common.Math.b2Vec2;
		position: Box2D.Common.Math.b2Vec2;
		restitution: number;
		separation: number;
		shape1: Shapes.b2Shape;
		shape2: Shapes.b2Shape;
		velocity: Box2D.Common.Math.b2Vec2
	}

	declare export class b2DistanceInput  {
		proxyA: b2DistanceProxy;
		proxyB: b2DistanceProxy;
		transformA: Box2D.Common.Math.b2Transform;
		transformB: Box2D.Common.Math.b2Transform;
		useRadii: boolean
	}

	declare export class b2DistanceOutput  {
		distance: number;
		iterations: number;
		pointA: Box2D.Common.Math.b2Vec2;
		pointB: Box2D.Common.Math.b2Vec2
	}

	declare export class b2DistanceProxy  {
		m_count: number;
		m_radius: number;
		m_vertices: Box2D.Common.Math.b2Vec2[];
		GetSupport(d: Box2D.Common.Math.b2Vec2): number;
		GetSupportVertex(d: Box2D.Common.Math.b2Vec2): Box2D.Common.Math.b2Vec2;
		GetVertex(index: number): Box2D.Common.Math.b2Vec2;
		GetVertexCount(): number;
		Set(shape: Shapes.b2Shape): void
	}

	declare export class b2DynamicTree  {
		constructor(): this;
		CreateProxy(aabb: b2AABB, userData: any): b2DynamicTreeNode;
		DestroyProxy(proxy: b2DynamicTreeNode): void;
		GetFatAABB(proxy: b2DynamicTreeNode): b2AABB;
		GetUserData(proxy: b2DynamicTreeNode): any;
		MoveProxy(
		proxy: b2DynamicTreeNode, aabb: b2AABB, displacement: Box2D.Common.Math.b2Vec2
	): boolean;
		Query(callback: (proxy: b2DynamicTreeNode) => boolean, aabb: b2AABB): void;
		RayCast(
		callback: (input: b2RayCastInput, proxy: b2DynamicTreeNode) => number, input: b2RayCastInput
	): void;
		Rebalance(iterations: number): void
	}

	declare export class b2DynamicTreeBroadPhase extends IBroadPhase {
		constructor(): this;
		CreateProxy(aabb: b2AABB, userData: any): b2DynamicTreeNode;
		DestroyProxy(proxy: b2DynamicTreeNode): void;
		GetFatAABB(proxy: b2DynamicTreeNode): b2AABB;
		GetProxyCount(): number;
		GetUserData(proxy: b2DynamicTreeNode): any;
		MoveProxy(
		proxy: b2DynamicTreeNode, aabb: b2AABB, displacement: Box2D.Common.Math.b2Vec2
	): void;
		Query(callback: (proxy: b2DynamicTreeNode) => boolean, aabb: b2AABB): void;
		RayCast(
		callback: (input: b2RayCastInput, proxy: b2DynamicTreeNode) => number, input: b2RayCastInput
	): void;
		Rebalance(iterations: number): void;
		TestOverlap(proxyA: b2DynamicTreeNode, proxyB: b2DynamicTreeNode): boolean;
		UpdatePairs(callback: (userDataA: any, userDataB: any) => void): void;
		Validate(): void
	}

	declare export class b2DynamicTreeNode  {
		
	}

	declare export class b2Manifold  {
		e_circles: number;
		e_faceA: number;
		e_faceB: number;
		m_localPlaneNormal: Box2D.Common.Math.b2Vec2;
		m_localPoint: Box2D.Common.Math.b2Vec2;
		m_pointCount: number;
		m_points: b2ManifoldPoint[];
		m_type: number;
		constructor(): this;
		Copy(): b2Manifold;
		Reset(): void;
		Set(m: b2Manifold): void
	}

	declare export class b2ManifoldPoint  {
		m_id: b2ContactID;
		m_localpoint: Box2D.Common.Math.b2Vec2;
		m_normalImpulse: number;
		m_tangentImpulse: number;
		constructor(): this;
		Reset(): void;
		Set(m: b2ManifoldPoint): void
	}

	declare export class b2OBB  {
		center: Box2D.Common.Math.b2Vec2;
		extents: Box2D.Common.Math.b2Vec2;
		R: Box2D.Common.Math.b2Mat22
	}

	declare export class b2RayCastInput  {
		maxFraction: number;
		p1: Box2D.Common.Math.b2Vec2;
		p2: Box2D.Common.Math.b2Vec2;
		constructor(p1?: Box2D.Common.Math.b2Vec2, p2?: Box2D.Common.Math.b2Vec2, maxFraction?: number): this
	}

	declare export class b2RayCastOutput  {
		fraction: number;
		normal: Box2D.Common.Math.b2Vec2
	}

	declare export class b2Segment  {
		p1: Box2D.Common.Math.b2Vec2;
		p2: Box2D.Common.Math.b2Vec2;
		Extend(aabb: b2AABB): void;
		ExtendBackward(aabb: b2AABB): void;
		ExtendForward(aabb: b2AABB): void;
		TestSegment(
		lambda: number[], normal: Box2D.Common.Math.b2Vec2, segment: b2Segment, maxLambda: number
	): boolean
	}

	declare export class b2SimplexCache  {
		count: number;
		indexA: number[];
		indexB: number[];
		metric: number
	}

	declare export class b2TOIInput  {
		proxyA: b2DistanceProxy;
		proxyB: b2DistanceProxy;
		sweepA: Box2D.Common.Math.b2Sweep;
		sweepB: Box2D.Common.Math.b2Sweep;
		tolerance: number
	}

	declare export class b2WorldManifold  {
		m_normal: Box2D.Common.Math.b2Vec2;
		m_points: Box2D.Common.Math.b2Vec2[];
		constructor(): this;
		Initialize(
		manifold: b2Manifold, xfA: Box2D.Common.Math.b2Transform, radiusA: number, xfB: Box2D.Common.Math.b2Transform, radiusB: number
	): void
	}

	declare export class Features  {
		flip: number;
		incidentEdge: number;
		incidentVertex: number;
		referenceEdge: number
	}

	
}

declare module 'Shapes' {
				declare export class b2CircleShape extends b2Shape {
		constructor(radius?: number): this;
		ComputeAABB(aabb: b2AABB, xf: Box2D.Common.Math.b2Transform): void;
		ComputeMass(massData: b2MassData, density: number): void;
		ComputeSubmergedArea(
		normal: Box2D.Common.Math.b2Vec2, offset: number, xf: Box2D.Common.Math.b2Transform, c: Box2D.Common.Math.b2Vec2
	): number;
		Copy(): b2CircleShape;
		GetLocalPosition(): Box2D.Common.Math.b2Vec2;
		GetRadius(): number;
		RayCast(
		output: b2RayCastOutput, input: b2RayCastInput, transform: Box2D.Common.Math.b2Transform
	): boolean;
		Set(other: b2CircleShape): void;
		SetLocalPosition(position: Box2D.Common.Math.b2Vec2): void;
		SetRadius(radius: number): void;
		TestPoint(xf: Box2D.Common.Math.b2Transform, p: Box2D.Common.Math.b2Vec2): boolean
	}

	declare export class b2EdgeChainDef  {
		isALoop: boolean;
		vertexCount: number;
		vertices: Box2D.Common.Math.b2Vec2;
		constructor(): this
	}

	declare export class b2EdgeShape extends b2Shape {
		constructor(v1: Box2D.Common.Math.b2Vec2, v2: Box2D.Common.Math.b2Vec2): this;
		ComputeAABB(aabb: b2AABB, xf: Box2D.Common.Math.b2Transform): void;
		ComputeMass(massData: b2MassData, density: number): void;
		ComputeSubmergedArea(
		normal: Box2D.Common.Math.b2Vec2, offset: number, xf: Box2D.Common.Math.b2Transform, c: Box2D.Common.Math.b2Vec2
	): number;
		GetLength(): number;
		GetVertex1(): Box2D.Common.Math.b2Vec2;
		GetVertex2(): Box2D.Common.Math.b2Vec2;
		GetCoreVertex1(): Box2D.Common.Math.b2Vec2;
		GetCoreVertex2(): Box2D.Common.Math.b2Vec2;
		GetNormalVector(): Box2D.Common.Math.b2Vec2;
		GetDirectionVector(): Box2D.Common.Math.b2Vec2;
		GetCorner1Vector(): Box2D.Common.Math.b2Vec2;
		GetCorner2Vector(): Box2D.Common.Math.b2Vec2;
		Corner1IsConvex(): boolean;
		Corner2IsConvex(): boolean;
		GetFirstVertex(xf: Box2D.Common.Math.b2Transform): Box2D.Common.Math.b2Vec2;
		GetNextEdge(): b2EdgeShape;
		GetPrevEdge(): b2EdgeShape;
		Support(
		xf: Box2D.Common.Math.b2Transform, dX: number, dY: number
	): Box2D.Common.Math.b2Vec2;
		RayCast(
		output: b2RayCastOutput, input: b2RayCastInput, transform: Box2D.Common.Math.b2Transform
	): boolean;
		TestPoint(xf: Box2D.Common.Math.b2Transform, p: Box2D.Common.Math.b2Vec2): boolean
	}

	declare export class b2MassData  {
		center: Box2D.Common.Math.b2Vec2;
		I: number;
		mass: number
	}

	declare export class b2PolygonShape extends b2Shape {
		AsArray(vertices: Box2D.Common.Math.b2Vec2[], vertexCount?: number): b2PolygonShape;
		AsBox(hx: number, hy: number): b2PolygonShape;
		AsEdge(v1: Box2D.Common.Math.b2Vec2, b2: Box2D.Common.Math.b2Vec2): b2PolygonShape;
		AsOrientedBox(
		hx: number, hy: number, center?: Box2D.Common.Math.b2Vec2, angle?: number
	): b2PolygonShape;
		AsVector(vertices: Box2D.Common.Math.b2Vec2[], vertexCount?: number): b2PolygonShape;
		ComputeAABB(aabb: b2AABB, xf: Box2D.Common.Math.b2Transform): void;
		ComputeMass(massData: b2MassData, density: number): void;
		ComputeSubmergedArea(
		normal: Box2D.Common.Math.b2Vec2, offset: number, xf: Box2D.Common.Math.b2Transform, c: Box2D.Common.Math.b2Vec2
	): number;
		Copy(): b2PolygonShape;
		GetNormals(): Box2D.Common.Math.b2Vec2[];
		GetSupport(d: Box2D.Common.Math.b2Vec2): number;
		GetSupportVertex(d: Box2D.Common.Math.b2Vec2): Box2D.Common.Math.b2Vec2;
		GetVertexCount(): number;
		GetVertices(): Box2D.Common.Math.b2Vec2[];
		RayCast(
		output: b2RayCastOutput, input: b2RayCastInput, transform: Box2D.Common.Math.b2Transform
	): boolean;
		Set(other: b2Shape): void;
		SetAsArray(vertices: Box2D.Common.Math.b2Vec2[], vertexCount?: number): void;
		SetAsBox(hx: number, hy: number): void;
		SetAsEdge(v1: Box2D.Common.Math.b2Vec2, b2: Box2D.Common.Math.b2Vec2): void;
		SetAsOrientedBox(
		hx: number, hy: number, center?: Box2D.Common.Math.b2Vec2, angle?: number
	): void;
		SetAsVector(vertices: any[], vertexCount?: number): void;
		TestPoint(xf: Box2D.Common.Math.b2Transform, p: Box2D.Common.Math.b2Vec2): boolean
	}

	declare export class b2Shape  {
		e_hitCollide: number;
		e_missCollide: number;
		startsInsideCollide: number;
		e_unknownShape: number;
		e_circleShape: number;
		e_polygonShape: number;
		e_edgeShape: number;
		e_shapeTypeCount: number;
		constructor(): this;
		ComputeAABB(aabb: b2AABB, xf: Box2D.Common.Math.b2Transform): void;
		ComputeMass(massData: b2MassData, density: number): void;
		ComputeSubmergedArea(
		normal: Box2D.Common.Math.b2Vec2, offset: number, xf: Box2D.Common.Math.b2Transform, c: Box2D.Common.Math.b2Vec2
	): number;
		Copy(): b2Shape;
		GetType(): number;
		RayCast(
		output: b2RayCastOutput, input: b2RayCastInput, transform: Box2D.Common.Math.b2Transform
	): boolean;
		Set(other: b2Shape): void;
		TestOverlap(
		shape1: b2Shape, transform1: Box2D.Common.Math.b2Transform, shape2: b2Shape, transform2: Box2D.Common.Math.b2Transform
	): boolean;
		TestPoint(xf: Box2D.Common.Math.b2Transform, p: Box2D.Common.Math.b2Vec2): boolean
	}

	
}

declare module 'Dynamics' {
				declare export class b2Body  {
		b2_dynamicBody: number;
		b2_kinematicBody: number;
		b2_staticBody: number;
		ApplyForce(force: Box2D.Common.Math.b2Vec2, point: Box2D.Common.Math.b2Vec2): void;
		ApplyImpulse(impulse: Box2D.Common.Math.b2Vec2, point: Box2D.Common.Math.b2Vec2): void;
		ApplyTorque(torque: number): void;
		CreateFixture(def: b2FixtureDef): b2Fixture;
		CreateFixture2(shape: Box2D.Collision.Shapes.b2Shape, density?: number): b2Fixture;
		DestroyFixture(fixture: b2Fixture): void;
		GetAngle(): number;
		GetAngularDamping(): number;
		GetAngularVelocity(): number;
		GetContactList(): Contacts.b2ContactEdge;
		GetControllerList(): Controllers.b2ControllerEdge;
		GetDefinition(): b2BodyDef;
		GetFixtureList(): b2Fixture;
		GetInertia(): number;
		GetJointList(): Joints.b2JointEdge;
		GetLinearDamping(): number;
		GetLinearVelocity(): Box2D.Common.Math.b2Vec2;
		GetLinearVelocityFromLocalPoint(localPoint: Box2D.Common.Math.b2Vec2): Box2D.Common.Math.b2Vec2;
		GetLinearVelocityFromWorldPoint(worldPoint: Box2D.Common.Math.b2Vec2): Box2D.Common.Math.b2Vec2;
		GetLocalCenter(): Box2D.Common.Math.b2Vec2;
		GetLocalPoint(worldPoint: Box2D.Common.Math.b2Vec2): Box2D.Common.Math.b2Vec2;
		GetLocalVector(worldVector: Box2D.Common.Math.b2Vec2): Box2D.Common.Math.b2Vec2;
		GetMass(): number;
		GetMassData(data: Box2D.Collision.Shapes.b2MassData): void;
		GetNext(): b2Body;
		GetPosition(): Box2D.Common.Math.b2Vec2;
		GetTransform(): Box2D.Common.Math.b2Transform;
		GetType(): number;
		GetUserData(): any;
		GetWorld(): b2World;
		GetWorldCenter(): Box2D.Common.Math.b2Vec2;
		GetWorldPoint(localPoint: Box2D.Common.Math.b2Vec2): Box2D.Common.Math.b2Vec2;
		GetWorldVector(localVector: Box2D.Common.Math.b2Vec2): Box2D.Common.Math.b2Vec2;
		IsActive(): boolean;
		IsAwake(): boolean;
		IsBullet(): boolean;
		IsFixedRotation(): boolean;
		IsSleepingAllowed(): boolean;
		Merge(other: b2Body): void;
		ResetMassData(): void;
		SetActive(flag: boolean): void;
		SetAngle(angle: number): void;
		SetAngularDamping(angularDamping: number): void;
		SetAngularVelocity(omega: number): void;
		SetAwake(flag: boolean): void;
		SetBullet(flag: boolean): void;
		SetFixedRotation(fixed: boolean): void;
		SetLinearDamping(linearDamping: number): void;
		SetLinearVelocity(v: Box2D.Common.Math.b2Vec2): void;
		SetMassData(massData: Box2D.Collision.Shapes.b2MassData): void;
		SetPosition(position: Box2D.Common.Math.b2Vec2): void;
		SetPositionAndAngle(position: Box2D.Common.Math.b2Vec2, angle: number): void;
		SetSleepingAllowed(flag: boolean): void;
		SetTransform(xf: Box2D.Common.Math.b2Transform): void;
		SetType(type: number): void;
		SetUserData(data: any): void;
		Split(callback: (fixture: b2Fixture) => boolean): b2Body
	}

	declare export class b2BodyDef  {
		active: boolean;
		allowSleep: boolean;
		angle: number;
		angularDamping: number;
		angularVelocity: number;
		awake: boolean;
		bullet: boolean;
		fixedRotation: boolean;
		inertiaScale: number;
		linearDamping: number;
		linearVelocity: Box2D.Common.Math.b2Vec2;
		position: Box2D.Common.Math.b2Vec2;
		type: number;
		userData: any
	}

	declare export class b2ContactFilter  {
		RayCollide(userData: any): boolean;
		ShouldCollide(fixtureA: b2Fixture, fixtureB: b2Fixture): boolean
	}

	declare export class b2ContactImpulse  {
		normalImpulses: Box2D.Common.Math.b2Vec2;
		tangentImpulses: Box2D.Common.Math.b2Vec2
	}

	declare export class b2ContactListener  {
		BeginContact(contact: Contacts.b2Contact): void;
		EndContact(contact: Contacts.b2Contact): void;
		PostSolve(contact: Contacts.b2Contact, impulse: b2ContactImpulse): void;
		PreSolve(contact: Contacts.b2Contact, oldManifold: Box2D.Collision.b2Manifold): void
	}

	declare export class b2DebugDraw  {
		e_aabbBit: number;
		e_centerOfMassBit: number;
		e_controllerBit: number;
		e_jointBit: number;
		e_pairBit: number;
		e_shapeBit: number;
		constructor(): this;
		AppendFlags(flags: number): void;
		ClearFlags(flags: number): void;
		DrawCircle(
		center: Box2D.Common.Math.b2Vec2, radius: number, color: Box2D.Common.b2Color
	): void;
		DrawPolygon(
		vertices: Box2D.Common.Math.b2Vec2[], vertexCount: number, color: Box2D.Common.b2Color
	): void;
		DrawSegment(
		p1: Box2D.Common.Math.b2Vec2, p2: Box2D.Common.Math.b2Vec2, color: Box2D.Common.b2Color
	): void;
		DrawSolidCircle(
		center: Box2D.Common.Math.b2Vec2, radius: number, axis: Box2D.Common.Math.b2Vec2, color: Box2D.Common.b2Color
	): void;
		DrawSolidPolygon(
		vertices: Box2D.Common.Math.b2Vec2[], vertexCount: number, color: Box2D.Common.b2Color
	): void;
		DrawTransform(xf: Box2D.Common.Math.b2Transform): void;
		GetAlpha(): number;
		GetDrawScale(): number;
		GetFillAlpha(): number;
		GetFlags(): number;
		GetLineThickness(): number;
		GetSprite(): CanvasRenderingContext2D;
		GetXFormScale(): number;
		SetAlpha(alpha: number): void;
		SetDrawScale(drawScale: number): void;
		SetFillAlpha(alpha: number): void;
		SetFlags(flags: number): void;
		SetLineThickness(lineThickness: number): void;
		SetSprite(canvas: CanvasRenderingContext2D): void;
		SetXFormScale(xformScale: number): void
	}

	declare export class b2DestructionListener  {
		SayGoodbyeFixture(fixture: b2Fixture): void;
		SayGoodbyeJoint(joint: Joints.b2Joint): void
	}

	declare export class b2FilterData  {
		categoryBits: number;
		groupIndex: number;
		maskBits: number;
		Copy(): b2FilterData
	}

	declare export class b2Fixture  {
		GetAABB(): Box2D.Collision.b2AABB;
		GetBody(): b2Body;
		GetDensity(): number;
		GetFilterData(): b2FilterData;
		GetFriction(): number;
		GetMassData(
		massData?: Box2D.Collision.Shapes.b2MassData
	): Box2D.Collision.Shapes.b2MassData;
		GetNext(): b2Fixture;
		GetRestitution(): number;
		GetShape(): Box2D.Collision.Shapes.b2Shape;
		GetType(): number;
		GetUserData(): any;
		IsSensor(): boolean;
		RayCast(
		output: Box2D.Collision.b2RayCastOutput, input: Box2D.Collision.b2RayCastInput
	): boolean;
		SetDensity(density: number): void;
		SetFilterData(filter: any): void;
		SetFriction(friction: number): void;
		SetRestitution(restitution: number): void;
		SetSensor(sensor: boolean): void;
		SetUserData(data: any): void;
		TestPoint(p: Box2D.Common.Math.b2Vec2): boolean
	}

	declare export class b2FixtureDef  {
		density: number;
		filter: b2FilterData;
		friction: number;
		isSensor: boolean;
		restitution: number;
		shape: Box2D.Collision.Shapes.b2Shape;
		userData: any;
		constructor(): this
	}

	declare export class b2World  {
		e_locked: number;
		e_newFixture: number;
		constructor(gravity: Box2D.Common.Math.b2Vec2, doSleep: boolean): this;
		AddController(c: Controllers.b2Controller): Controllers.b2Controller;
		ClearForces(): void;
		CreateBody(def: b2BodyDef): b2Body;
		CreateController(controller: Controllers.b2Controller): Controllers.b2Controller;
		CreateJoint(def: Joints.b2JointDef): Joints.b2Joint;
		DestroyBody(b: b2Body): void;
		DestroyController(controller: Controllers.b2Controller): void;
		DestroyJoint(j: Joints.b2Joint): void;
		DrawDebugData(): void;
		GetBodyCount(): number;
		GetBodyList(): b2Body;
		GetContactCount(): number;
		GetContactList(): Contacts.b2Contact;
		GetGravity(): Box2D.Common.Math.b2Vec2;
		GetGroundBody(): b2Body;
		GetJointCount(): number;
		GetJointList(): Joints.b2Joint;
		GetProxyCount(): number;
		IsLocked(): boolean;
		QueryAABB(callback: (fixutre: b2Fixture) => boolean, aabb: Box2D.Collision.b2AABB): void;
		QueryPoint(callback: (fixture: b2Fixture) => boolean, p: Box2D.Common.Math.b2Vec2): void;
		QueryShape(
		callback: (fixture: b2Fixture) => boolean, shape: Box2D.Collision.Shapes.b2Shape, transform?: Box2D.Common.Math.b2Transform
	): void;
		RayCast(
		callback: (
		fixture: b2Fixture, point: Box2D.Common.Math.b2Vec2, normal: Box2D.Common.Math.b2Vec2, fraction: number
	) => number, point1: Box2D.Common.Math.b2Vec2, point2: Box2D.Common.Math.b2Vec2
	): void;
		RayCastAll(
		point1: Box2D.Common.Math.b2Vec2, point2: Box2D.Common.Math.b2Vec2
	): b2Fixture[];
		RayCastOne(point1: Box2D.Common.Math.b2Vec2, point2: Box2D.Common.Math.b2Vec2): b2Fixture;
		RemoveController(c: Controllers.b2Controller): void;
		SetBroadPhase(broadPhase: Box2D.Collision.IBroadPhase): void;
		SetContactFilter(filter: b2ContactFilter): void;
		SetContactListener(listener: b2ContactListener): void;
		SetContinuousPhysics(flag: boolean): void;
		SetDebugDraw(debugDraw: b2DebugDraw): void;
		SetDestructionListener(listener: b2DestructionListener): void;
		SetGravity(gravity: Box2D.Common.Math.b2Vec2): void;
		SetWarmStarting(flag: boolean): void;
		Step(dt: number, velocityIterations: number, positionIterations: number): void;
		Validate(): void
	}

	
}

declare module 'Contacts' {
				declare export class b2Contact  {
		constructor(): this;
		FlagForFiltering(): void;
		GetFixtureA(): b2Fixture;
		GetFixtureB(): b2Fixture;
		GetManifold(): Box2D.Collision.b2Manifold;
		GetNext(): b2Contact;
		GetWorldManifold(worldManifold: Box2D.Collision.b2WorldManifold): void;
		IsContinuous(): boolean;
		IsEnabled(): boolean;
		IsSensor(): boolean;
		IsTouching(): boolean;
		SetEnabled(flag: boolean): void;
		SetSensor(sensor: boolean): void
	}

	declare export class b2ContactEdge  {
		contact: b2Contact;
		next: b2ContactEdge;
		other: b2Body;
		prev: b2ContactEdge
	}

	declare export class b2ContactResult  {
		id: Box2D.Collision.b2ContactID;
		normal: Box2D.Common.Math.b2Vec2;
		normalImpulse: number;
		position: Box2D.Common.Math.b2Vec2;
		shape1: Box2D.Collision.Shapes.b2Shape;
		shape2: Box2D.Collision.Shapes.b2Shape;
		tangentImpulse: number
	}

	
}

declare module 'Controllers' {
				declare export class b2Controller  {
		m_bodyCount: number;
		m_bodyList: b2ControllerEdge;
		AddBody(body: b2Body): void;
		Clear(): void;
		Draw(debugDraw: b2DebugDraw): void;
		GetBodyList(): b2ControllerEdge;
		GetNext(): b2Controller;
		GetWorld(): b2World;
		RemoveBody(body: b2Body): void;
		Step(step: any): void
	}

	declare export class b2ControllerEdge  {
		body: b2Body;
		controller: b2Controller;
		nextBody: b2ControllerEdge;
		nextController: b2ControllerEdge;
		prevBody: b2ControllerEdge;
		prevController: b2ControllerEdge
	}

	declare export class b2BuoyancyController extends b2Controller {
		angularDrag: number;
		density: number;
		gravity: Box2D.Common.Math.b2Vec2;
		linearDrag: number;
		normal: Box2D.Common.Math.b2Vec2;
		offset: number;
		useDensity: boolean;
		useWorldGravity: boolean;
		velocity: Box2D.Common.Math.b2Vec2
	}

	declare export class b2ConstantAccelController extends b2Controller {
		A: Box2D.Common.Math.b2Vec2;
		Step(step: any): void
	}

	declare export class b2ConstantForceController extends b2Controller {
		A: Box2D.Common.Math.b2Vec2;
		Step(step: any): void
	}

	declare export class b2GravityController extends b2Controller {
		G: number;
		invSqr: boolean;
		Step(step: any): void
	}

	declare export class b2TensorDampingController extends b2Controller {
		maxTimeStep: number;
		T: Box2D.Common.Math.b2Mat22;
		SetAxisAligned(xDamping: number, yDamping: number): void;
		Step(step: any): void
	}

	
}

declare module 'Joints' {
				declare export class b2Joint  {
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetBodyA(): b2Body;
		GetBodyB(): b2Body;
		GetNext(): b2Joint;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number;
		GetType(): number;
		GetUserData(): any;
		IsActive(): boolean;
		SetUserData(data: any): void
	}

	declare export class b2JointDef  {
		bodyA: b2Body;
		bodyB: b2Body;
		collideConnected: boolean;
		type: number;
		userData: any;
		constructor(): this
	}

	declare export class b2JointEdge  {
		joint: b2Joint;
		next: b2JointEdge;
		other: b2Body;
		prev: b2JointEdge
	}

	declare export class b2DistanceJoint extends b2Joint {
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetDampingRatio(): number;
		GetFrequency(): number;
		GetLength(): number;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number;
		SetDampingRatio(ratio: number): void;
		SetFrequency(hz: number): void;
		SetLength(length: number): void
	}

	declare export class b2DistanceJointDef extends b2JointDef {
		dampingRatio: number;
		frequencyHz: number;
		length: number;
		localAnchorA: Box2D.Common.Math.b2Vec2;
		localAnchorB: Box2D.Common.Math.b2Vec2;
		constructor(): this;
		Initialize(
		bA: b2Body, bB: b2Body, anchorA: Box2D.Common.Math.b2Vec2, anchorB: Box2D.Common.Math.b2Vec2
	): void
	}

	declare export class b2FrictionJoint extends b2Joint {
		m_angularMass: number;
		m_linearMass: Box2D.Common.Math.b2Mat22;
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetMaxForce(): number;
		GetMaxTorque(): number;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number;
		SetMaxForce(force: number): void;
		SetMaxTorque(torque: number): void
	}

	declare export class b2FrictionJointDef extends b2JointDef {
		localAnchorA: Box2D.Common.Math.b2Vec2;
		localAnchorB: Box2D.Common.Math.b2Vec2;
		maxForce: number;
		maxTorque: number;
		constructor(): this;
		Initialize(bA: b2Body, bB: b2Body, anchor: Box2D.Common.Math.b2Vec2): void
	}

	declare export class b2GearJoint extends b2Joint {
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetRatio(): number;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number;
		SetRatio(ratio: number): void
	}

	declare export class b2GearJointDef extends b2JointDef {
		joint1: b2Joint;
		joint2: b2Joint;
		ratio: number;
		constructor(): this
	}

	declare export class b2LineJoint extends b2Joint {
		EnableLimit(flag: boolean): void;
		EnableMotor(flag: boolean): void;
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetJointSpeed(): number;
		GetJointTranslation(): number;
		GetLowerLimit(): number;
		GetMaxMotorForce(): number;
		GetMotorForce(): number;
		GetMotorSpeed(): number;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number;
		GetUpperLimit(): number;
		IsLimitEnabled(): boolean;
		IsMotorEnabled(): boolean;
		SetLimits(lower: number, upper: number): void;
		SetMaxMotorForce(force: number): void;
		SetMotorSpeed(speed: number): void
	}

	declare export class b2LineJointDef extends b2JointDef {
		enableLimit: boolean;
		enableMotor: boolean;
		localAnchorA: Box2D.Common.Math.b2Vec2;
		localAnchorB: Box2D.Common.Math.b2Vec2;
		localAxisA: Box2D.Common.Math.b2Vec2;
		lowerTranslation: number;
		maxMotorForce: number;
		motorSpeed: number;
		upperTranslation: number;
		constructor(): this;
		Initialize(
		bA: b2Body, bB: b2Body, anchor: Box2D.Common.Math.b2Vec2, axis: Box2D.Common.Math.b2Vec2
	): void
	}

	declare export class b2MouseJoint extends b2Joint {
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetDampingRatio(): number;
		GetFrequency(): number;
		GetMaxForce(): number;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number;
		GetTarget(): Box2D.Common.Math.b2Vec2;
		SetDampingRatio(ratio: number): void;
		SetFrequency(hz: number): void;
		SetMaxForce(maxForce: number): void;
		SetTarget(target: Box2D.Common.Math.b2Vec2): void
	}

	declare export class b2MouseJointDef extends b2JointDef {
		dampingRatio: number;
		frequencyHz: number;
		maxForce: number;
		constructor(): this
	}

	declare export class b2PrismaticJoint extends b2Joint {
		EnableLimit(flag: boolean): void;
		EnableMotor(flag: boolean): void;
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetJointSpeed(): number;
		GetJointTranslation(): number;
		GetLowerLimit(): number;
		GetMotorForce(): number;
		GetMotorSpeed(): number;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number;
		GetUpperLimit(): number;
		IsLimitEnabled(): boolean;
		IsMotorEnabled(): boolean;
		SetLimits(lower: number, upper: number): void;
		SetMaxMotorForce(force: number): void;
		SetMotorSpeed(speed: number): void
	}

	declare export class b2PrismaticJointDef extends b2JointDef {
		enableLimit: boolean;
		enableMotor: boolean;
		localAnchorA: Box2D.Common.Math.b2Vec2;
		localAnchorB: Box2D.Common.Math.b2Vec2;
		localAxisA: Box2D.Common.Math.b2Vec2;
		lowerTranslation: number;
		maxMotorForce: number;
		motorSpeed: number;
		referenceAngle: number;
		upperTranslation: number;
		constructor(): this;
		Initialize(
		bA: b2Body, bB: b2Body, anchor: Box2D.Common.Math.b2Vec2, axis: Box2D.Common.Math.b2Vec2
	): void
	}

	declare export class b2PullyJoint extends b2Joint {
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetGroundAnchorA(): Box2D.Common.Math.b2Vec2;
		GetGroundAnchorB(): Box2D.Common.Math.b2Vec2;
		GetLength1(): number;
		GetLength2(): number;
		GetRatio(): number;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number
	}

	declare export class b2PullyJointDef extends b2JointDef {
		groundAnchorA: Box2D.Common.Math.b2Vec2;
		groundAnchorB: Box2D.Common.Math.b2Vec2;
		lengthA: number;
		lengthB: number;
		localAnchorA: Box2D.Common.Math.b2Vec2;
		localAnchorB: Box2D.Common.Math.b2Vec2;
		maxLengthA: number;
		maxLengthB: number;
		ratio: number;
		constructor(): this;
		Initialize(
		bA: b2Body, bB: b2Body, gaA: Box2D.Common.Math.b2Vec2, gaB: Box2D.Common.Math.b2Vec2, anchorA: Box2D.Common.Math.b2Vec2, anchorB: Box2D.Common.Math.b2Vec2
	): void
	}

	declare export class b2RevoluteJoint extends b2Joint {
		EnableLimit(flag: boolean): void;
		EnableMotor(flag: boolean): void;
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetJointAngle(): number;
		GetJointSpeed(): number;
		GetLowerLimit(): number;
		GetMotorSpeed(): number;
		GetMotorTorque(): number;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number;
		GetUpperLimit(): number;
		IsLimitEnabled(): boolean;
		IsMotorEnabled(): boolean;
		SetLimits(lower: number, upper: number): void;
		SetMaxMotorTorque(torque: number): void;
		SetMotorSpeed(speed: number): void
	}

	declare export class b2RevoluteJointDef extends b2JointDef {
		enableLimit: boolean;
		enableMotor: boolean;
		localAnchorA: Box2D.Common.Math.b2Vec2;
		localAnchorB: Box2D.Common.Math.b2Vec2;
		lowerAngle: number;
		maxMotorTorque: number;
		motorSpeed: number;
		referenceAngle: number;
		upperAngle: number;
		constructor(): this;
		Initialize(bA: b2Body, bB: b2Body, anchor: Box2D.Common.Math.b2Vec2): void
	}

	declare export class b2WeldJoint extends b2Joint {
		GetAnchorA(): Box2D.Common.Math.b2Vec2;
		GetAnchorB(): Box2D.Common.Math.b2Vec2;
		GetReactionForce(inv_dt: number): Box2D.Common.Math.b2Vec2;
		GetReactionTorque(inv_dt: number): number
	}

	declare export class b2WeldJointDef extends b2JointDef {
		localAnchorA: Box2D.Common.Math.b2Vec2;
		localAnchorB: Box2D.Common.Math.b2Vec2;
		referenceAngle: number;
		constructor(): this;
		Initialize(bA: b2Body, bB: b2Body, anchor: Box2D.Common.Math.b2Vec2): void
	}

	
}
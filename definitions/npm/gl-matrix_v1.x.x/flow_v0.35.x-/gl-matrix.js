

declare module 'gl-matrix' {
				declare export class vec2 extends Float32Array {
		create(): vec2;
		clone(a: vec2 | number[]): vec2;
		fromValues(x: number, y: number): vec2;
		copy(out: vec2, a: vec2 | number[]): vec2;
		set(out: vec2, x: number, y: number): vec2;
		add(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		subtract(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		sub(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		multiply(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		mul(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		divide(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		div(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		ceil(out: vec2, a: vec2 | number[]): vec2;
		floor(out: vec2, a: vec2 | number[]): vec2;
		min(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		max(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		round(out: vec2, a: vec2 | number[]): vec2;
		scale(out: vec2, a: vec2 | number[], b: number): vec2;
		scaleAndAdd(out: vec2, a: vec2 | number[], b: vec2 | number[], scale: number): vec2;
		distance(a: vec2 | number[], b: vec2 | number[]): number;
		dist(a: vec2 | number[], b: vec2 | number[]): number;
		squaredDistance(a: vec2 | number[], b: vec2 | number[]): number;
		sqrDist(a: vec2 | number[], b: vec2 | number[]): number;
		length(a: vec2 | number[]): number;
		len(a: vec2 | number[]): number;
		squaredLength(a: vec2 | number[]): number;
		sqrLen(a: vec2 | number[]): number;
		negate(out: vec2, a: vec2 | number[]): vec2;
		inverse(out: vec2, a: vec2 | number[]): vec2;
		normalize(out: vec2, a: vec2 | number[]): vec2;
		dot(a: vec2 | number[], b: vec2 | number[]): number;
		cross(out: vec2, a: vec2 | number[], b: vec2 | number[]): vec2;
		lerp(out: vec2, a: vec2 | number[], b: vec2 | number[], t: number): vec2;
		random(out: vec2): vec2;
		random(out: vec2, scale: number): vec2;
		transformMat2(out: vec2, a: vec2 | number[], m: mat2): vec2;
		transformMat2d(out: vec2, a: vec2 | number[], m: mat2d): vec2;
		transformMat3(out: vec2, a: vec2 | number[], m: mat3): vec2;
		transformMat4(out: vec2, a: vec2 | number[], m: mat4): vec2;
		forEach(
		a: Float32Array, stride: number, offset: number, count: number, fn: (a: vec2 | number[], b: vec2 | number[], arg: any) => void, arg: any
	): Float32Array;
		forEach(
		a: Float32Array, stride: number, offset: number, count: number, fn: (a: vec2 | number[], b: vec2 | number[]) => void
	): Float32Array;
		str(a: vec2 | number[]): string;
		exactEquals(a: vec2 | number[], b: vec2 | number[]): boolean;
		equals(a: vec2 | number[], b: vec2 | number[]): boolean
	}

	declare export class vec3 extends Float32Array {
		create(): vec3;
		clone(a: vec3 | number[]): vec3;
		fromValues(x: number, y: number, z: number): vec3;
		copy(out: vec3, a: vec3 | number[]): vec3;
		set(out: vec3, x: number, y: number, z: number): vec3;
		add(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		subtract(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		sub(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		multiply(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		mul(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		divide(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		div(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		ceil(out: vec3, a: vec3 | number[]): vec3;
		floor(out: vec3, a: vec3 | number[]): vec3;
		min(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		max(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		round(out: vec3, a: vec3 | number[]): vec3;
		scale(out: vec3, a: vec3 | number[], b: number): vec3;
		scaleAndAdd(out: vec3, a: vec3 | number[], b: vec3 | number[], scale: number): vec3;
		distance(a: vec3 | number[], b: vec3 | number[]): number;
		dist(a: vec3 | number[], b: vec3 | number[]): number;
		squaredDistance(a: vec3 | number[], b: vec3 | number[]): number;
		sqrDist(a: vec3 | number[], b: vec3 | number[]): number;
		length(a: vec3 | number[]): number;
		len(a: vec3 | number[]): number;
		squaredLength(a: vec3 | number[]): number;
		sqrLen(a: vec3 | number[]): number;
		negate(out: vec3, a: vec3 | number[]): vec3;
		inverse(out: vec3, a: vec3 | number[]): vec3;
		normalize(out: vec3, a: vec3 | number[]): vec3;
		dot(a: vec3 | number[], b: vec3 | number[]): number;
		cross(out: vec3, a: vec3 | number[], b: vec3 | number[]): vec3;
		lerp(out: vec3, a: vec3 | number[], b: vec3 | number[], t: number): vec3;
		hermite(
		out: vec3, a: vec3 | number[], b: vec3 | number[], c: vec3 | number[], d: vec3 | number[], t: number
	): vec3;
		bezier(
		out: vec3, a: vec3 | number[], b: vec3 | number[], c: vec3 | number[], d: vec3 | number[], t: number
	): vec3;
		random(out: vec3): vec3;
		random(out: vec3, scale: number): vec3;
		transformMat3(out: vec3, a: vec3 | number[], m: mat3): vec3;
		transformMat4(out: vec3, a: vec3 | number[], m: mat4): vec3;
		transformQuat(out: vec3, a: vec3 | number[], q: quat): vec3;
		rotateX(out: vec3, a: vec3 | number[], b: vec3 | number[], c: number): vec3;
		rotateY(out: vec3, a: vec3 | number[], b: vec3 | number[], c: number): vec3;
		rotateZ(out: vec3, a: vec3 | number[], b: vec3 | number[], c: number): vec3;
		forEach(
		a: Float32Array, stride: number, offset: number, count: number, fn: (a: vec3 | number[], b: vec3 | number[], arg: any) => void, arg: any
	): Float32Array;
		forEach(
		a: Float32Array, stride: number, offset: number, count: number, fn: (a: vec3 | number[], b: vec3 | number[]) => void
	): Float32Array;
		angle(a: vec3 | number[], b: vec3 | number[]): number;
		str(a: vec3 | number[]): string;
		exactEquals(a: vec3 | number[], b: vec3 | number[]): boolean;
		equals(a: vec3 | number[], b: vec3 | number[]): boolean
	}

	declare export class vec4 extends Float32Array {
		create(): vec4;
		clone(a: vec4 | number[]): vec4;
		fromValues(x: number, y: number, z: number, w: number): vec4;
		copy(out: vec4, a: vec4 | number[]): vec4;
		set(out: vec4, x: number, y: number, z: number, w: number): vec4;
		add(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		subtract(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		sub(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		multiply(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		mul(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		divide(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		div(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		ceil(out: vec4, a: vec4 | number[]): vec4;
		floor(out: vec4, a: vec4 | number[]): vec4;
		min(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		max(out: vec4, a: vec4 | number[], b: vec4 | number[]): vec4;
		round(out: vec4, a: vec4 | number[]): vec4;
		scale(out: vec4, a: vec4 | number[], b: number): vec4;
		scaleAndAdd(out: vec4, a: vec4 | number[], b: vec4 | number[], scale: number): vec4;
		distance(a: vec4 | number[], b: vec4 | number[]): number;
		dist(a: vec4 | number[], b: vec4 | number[]): number;
		squaredDistance(a: vec4 | number[], b: vec4 | number[]): number;
		sqrDist(a: vec4 | number[], b: vec4 | number[]): number;
		length(a: vec4 | number[]): number;
		len(a: vec4 | number[]): number;
		squaredLength(a: vec4 | number[]): number;
		sqrLen(a: vec4 | number[]): number;
		negate(out: vec4, a: vec4 | number[]): vec4;
		inverse(out: vec4, a: vec4 | number[]): vec4;
		normalize(out: vec4, a: vec4 | number[]): vec4;
		dot(a: vec4 | number[], b: vec4 | number[]): number;
		lerp(out: vec4, a: vec4 | number[], b: vec4 | number[], t: number): vec4;
		random(out: vec4): vec4;
		random(out: vec4, scale: number): vec4;
		transformMat4(out: vec4, a: vec4 | number[], m: mat4): vec4;
		transformQuat(out: vec4, a: vec4 | number[], q: quat): vec4;
		forEach(
		a: Float32Array, stride: number, offset: number, count: number, fn: (a: vec4 | number[], b: vec4 | number[], arg: any) => void, arg: any
	): Float32Array;
		forEach(
		a: Float32Array, stride: number, offset: number, count: number, fn: (a: vec4 | number[], b: vec4 | number[]) => void
	): Float32Array;
		str(a: vec4 | number[]): string;
		exactEquals(a: vec4 | number[], b: vec4 | number[]): boolean;
		equals(a: vec4 | number[], b: vec4 | number[]): boolean
	}

	declare export class mat2 extends Float32Array {
		create(): mat2;
		clone(a: mat2): mat2;
		copy(out: mat2, a: mat2): mat2;
		identity(out: mat2): mat2;
		fromValues(m00: number, m01: number, m10: number, m11: number): mat2;
		set(out: mat2, m00: number, m01: number, m10: number, m11: number): mat2;
		transpose(out: mat2, a: mat2): mat2;
		invert(out: mat2, a: mat2): mat2;
		adjoint(out: mat2, a: mat2): mat2;
		determinant(a: mat2): number;
		multiply(out: mat2, a: mat2, b: mat2): mat2;
		mul(out: mat2, a: mat2, b: mat2): mat2;
		rotate(out: mat2, a: mat2, rad: number): mat2;
		scale(out: mat2, a: mat2, v: vec2 | number[]): mat2;
		fromRotation(out: mat2, rad: number): mat2;
		fromScaling(out: mat2, v: vec2 | number[]): mat2;
		str(a: mat2): string;
		frob(a: mat2): number;
		LDU(L: mat2, D: mat2, U: mat2, a: mat2): mat2;
		add(out: mat2, a: mat2, b: mat2): mat2;
		subtract(out: mat2, a: mat2, b: mat2): mat2;
		sub(out: mat2, a: mat2, b: mat2): mat2;
		exactEquals(a: mat2, b: mat2): boolean;
		equals(a: mat2, b: mat2): boolean;
		multiplyScalar(out: mat2, a: mat2, b: number): mat2;
		multiplyScalarAndAdd(out: mat2, a: mat2, b: mat2, scale: number): mat2
	}

	declare export class mat2d extends Float32Array {
		create(): mat2d;
		clone(a: mat2d): mat2d;
		copy(out: mat2d, a: mat2d): mat2d;
		identity(out: mat2d): mat2d;
		fromValues(a: number, b: number, c: number, d: number, tx: number, ty: number): mat2d;
		set(
		out: mat2d, a: number, b: number, c: number, d: number, tx: number, ty: number
	): mat2d;
		invert(out: mat2d, a: mat2d): mat2d;
		determinant(a: mat2d): number;
		multiply(out: mat2d, a: mat2d, b: mat2d): mat2d;
		mul(out: mat2d, a: mat2d, b: mat2d): mat2d;
		rotate(out: mat2d, a: mat2d, rad: number): mat2d;
		scale(out: mat2d, a: mat2d, v: vec2 | number[]): mat2d;
		translate(out: mat2d, a: mat2d, v: vec2 | number[]): mat2d;
		fromRotation(out: mat2d, rad: number): mat2d;
		fromScaling(out: mat2d, v: vec2 | number[]): mat2d;
		fromTranslation(out: mat2d, v: vec2 | number[]): mat2d;
		str(a: mat2d): string;
		frob(a: mat2d): number;
		add(out: mat2d, a: mat2d, b: mat2d): mat2d;
		subtract(out: mat2d, a: mat2d, b: mat2d): mat2d;
		sub(out: mat2d, a: mat2d, b: mat2d): mat2d;
		multiplyScalar(out: mat2d, a: mat2d, b: number): mat2d;
		multiplyScalarAndAdd(out: mat2d, a: mat2d, b: mat2d, scale: number): mat2d;
		exactEquals(a: mat2d, b: mat2d): boolean;
		equals(a: mat2d, b: mat2d): boolean
	}

	declare export class mat3 extends Float32Array {
		create(): mat3;
		fromMat4(out: mat3, a: mat4): mat3;
		clone(a: mat3): mat3;
		copy(out: mat3, a: mat3): mat3;
		fromValues(
		m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number
	): mat3;
		set(
		out: mat3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number
	): mat3;
		identity(out: mat3): mat3;
		transpose(out: mat3, a: mat3): mat3;
		invert(out: mat3, a: mat3): mat3;
		adjoint(out: mat3, a: mat3): mat3;
		determinant(a: mat3): number;
		multiply(out: mat3, a: mat3, b: mat3): mat3;
		mul(out: mat3, a: mat3, b: mat3): mat3;
		translate(out: mat3, a: mat3, v: vec3 | number[]): mat3;
		rotate(out: mat3, a: mat3, rad: number): mat3;
		scale(out: mat3, a: mat3, v: vec2 | number[]): mat3;
		fromTranslation(out: mat3, v: vec2 | number[]): mat3;
		fromRotation(out: mat3, rad: number): mat3;
		fromScaling(out: mat3, v: vec2 | number[]): mat3;
		fromMat2d(out: mat3, a: mat2d): mat3;
		fromQuat(out: mat3, q: quat): mat3;
		normalFromMat4(out: mat3, a: mat4): mat3;
		str(mat: mat3): string;
		frob(a: mat3): number;
		add(out: mat3, a: mat3, b: mat3): mat3;
		subtract(out: mat3, a: mat3, b: mat3): mat3;
		sub(out: mat3, a: mat3, b: mat3): mat3;
		multiplyScalar(out: mat3, a: mat3, b: number): mat3;
		multiplyScalarAndAdd(out: mat3, a: mat3, b: mat3, scale: number): mat3;
		exactEquals(a: mat3, b: mat3): boolean;
		equals(a: mat3, b: mat3): boolean
	}

	declare export class mat4 extends Float32Array {
		create(): mat4;
		clone(a: mat4): mat4;
		copy(out: mat4, a: mat4): mat4;
		fromValues(
		m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number
	): mat4;
		set(
		out: mat4, m00: number, m01: number, m02: number, m03: number, m10: number, m11: number, m12: number, m13: number, m20: number, m21: number, m22: number, m23: number, m30: number, m31: number, m32: number, m33: number
	): mat4;
		identity(out: mat4): mat4;
		transpose(out: mat4, a: mat4): mat4;
		invert(out: mat4, a: mat4): mat4;
		adjoint(out: mat4, a: mat4): mat4;
		determinant(a: mat4): number;
		multiply(out: mat4, a: mat4, b: mat4): mat4;
		mul(out: mat4, a: mat4, b: mat4): mat4;
		translate(out: mat4, a: mat4, v: vec3 | number[]): mat4;
		scale(out: mat4, a: mat4, v: vec3 | number[]): mat4;
		rotate(out: mat4, a: mat4, rad: number, axis: vec3 | number[]): mat4;
		rotateX(out: mat4, a: mat4, rad: number): mat4;
		rotateY(out: mat4, a: mat4, rad: number): mat4;
		rotateZ(out: mat4, a: mat4, rad: number): mat4;
		fromTranslation(out: mat4, v: vec3 | number[]): mat4;
		fromScaling(out: mat4, v: vec3 | number[]): mat4;
		fromRotation(out: mat4, rad: number, axis: vec3 | number[]): mat4;
		fromXRotation(out: mat4, rad: number): mat4;
		fromYRotation(out: mat4, rad: number): mat4;
		fromZRotation(out: mat4, rad: number): mat4;
		fromRotationTranslation(out: mat4, q: quat, v: vec3 | number[]): mat4;
		getTranslation(out: vec3, mat: mat4): vec3;
		getRotation(out: quat, mat: mat4): quat;
		fromRotationTranslationScale(out: mat4, q: quat, v: vec3 | number[], s: vec3 | number[]): mat4;
		fromRotationTranslationScaleOrigin(
		out: mat4, q: quat, v: vec3 | number[], s: vec3 | number[], o: vec3 | number[]
	): mat4;
		fromQuat(out: mat4, q: quat): mat4;
		frustum(
		out: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number
	): mat4;
		perspective(out: mat4, fovy: number, aspect: number, near: number, far: number): mat4;
		perspectiveFromFieldOfView(
		out: mat4, fov: {
		upDegrees: number,
		downDegrees: number,
		leftDegrees: number,
		rightDegrees: number
	}, near: number, far: number
	): mat4;
		ortho(
		out: mat4, left: number, right: number, bottom: number, top: number, near: number, far: number
	): mat4;
		lookAt(
		out: mat4, eye: vec3 | number[], center: vec3 | number[], up: vec3 | number[]
	): mat4;
		str(mat: mat4): string;
		frob(a: mat4): number;
		add(out: mat4, a: mat4, b: mat4): mat4;
		subtract(out: mat4, a: mat4, b: mat4): mat4;
		sub(out: mat4, a: mat4, b: mat4): mat4;
		multiplyScalar(out: mat4, a: mat4, b: number): mat4;
		multiplyScalarAndAdd(out: mat4, a: mat4, b: mat4, scale: number): mat4;
		exactEquals(a: mat4, b: mat4): boolean;
		equals(a: mat4, b: mat4): boolean
	}

	declare export class quat extends Float32Array {
		create(): quat;
		clone(a: quat): quat;
		fromValues(x: number, y: number, z: number, w: number): quat;
		copy(out: quat, a: quat): quat;
		set(out: quat, x: number, y: number, z: number, w: number): quat;
		identity(out: quat): quat;
		rotationTo(out: quat, a: vec3 | number[], b: vec3 | number[]): quat;
		setAxes(
		out: quat, view: vec3 | number[], right: vec3 | number[], up: vec3 | number[]
	): quat;
		setAxisAngle(out: quat, axis: vec3 | number[], rad: number): quat;
		getAxisAngle(out_axis: vec3 | number[], q: quat): number;
		add(out: quat, a: quat, b: quat): quat;
		multiply(out: quat, a: quat, b: quat): quat;
		mul(out: quat, a: quat, b: quat): quat;
		scale(out: quat, a: quat, b: number): quat;
		length(a: quat): number;
		len(a: quat): number;
		squaredLength(a: quat): number;
		sqrLen(a: quat): number;
		normalize(out: quat, a: quat): quat;
		dot(a: quat, b: quat): number;
		lerp(out: quat, a: quat, b: quat, t: number): quat;
		slerp(out: quat, a: quat, b: quat, t: number): quat;
		sqlerp(out: quat, a: quat, b: quat, c: quat, d: quat, t: number): quat;
		invert(out: quat, a: quat): quat;
		conjugate(out: quat, a: quat): quat;
		str(a: quat): string;
		rotateX(out: quat, a: quat, rad: number): quat;
		rotateY(out: quat, a: quat, rad: number): quat;
		rotateZ(out: quat, a: quat, rad: number): quat;
		fromMat3(out: quat, m: mat3): quat;
		setAxes(
		out: quat, view: vec3 | number[], right: vec3 | number[], up: vec3 | number[]
	): quat;
		rotationTo(out: quat, a: vec3 | number[], b: vec3 | number[]): quat;
		calculateW(out: quat, a: quat): quat;
		exactEquals(a: quat, b: quat): boolean;
		equals(a: quat, b: quat): boolean
	}

	
}
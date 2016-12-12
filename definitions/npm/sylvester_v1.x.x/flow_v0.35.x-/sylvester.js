

declare module 'sylvester' {
		declare interface Vector {
		elements: Array<number>,
		e(i: number): number,
		dimensions(): number,
		modulus(): number,
		eql(vector: Vector | Array<number>): boolean,
		dup(): Vector,
		map(fn: (x: number, i: number) => any): Vector,
		each(fn: (x: number, i: number) => any): void,
		toUnitVector(): Vector,
		angleFrom(vector: Vector): number,
		isParallelTo(vector: Vector): boolean,
		isAntiparallelTo(vector: Vector): boolean,
		isPerpendicularTo(vector: Vector): boolean,
		add(vector: Vector | Array<number>): Vector,
		subtract(vector: Vector | Array<number>): Vector,
		multiply(k: number): Vector,
		x(k: number): Vector,
		dot(vector: Vector | Array<number>): number,
		cross(vector: Vector | Array<number>): Vector,
		max(): number,
		indexOf(x: number): number,
		toDiagonalMatrix(): Matrix,
		round(): Vector,
		snapTo(x: number): Vector,
		distanceFrom(obj: Vector | Line | Plane): number,
		liesOn(line: Line): boolean,
		liesIn(plane: Plane): boolean,
		rotate(t: number, obj: Vector | Line): Vector,
		reflectionIn(obj: Vector | Line | Plane): Vector,
		to3D(): Vector,
		inspect(): string,
		setElements(els: Vector | Array<number>): Vector
	}

	declare interface Matrix {
		elements: Array<Array<number>>,
		e(i: number, j: number): any,
		row(i: number): Vector,
		col(j: number): Vector,
		dimensions(): any,
		rows(): number,
		cols(): number,
		eql(matrix: Vector | Matrix): boolean,
		dup(): Matrix,
		map(fn: (x: number, i: number, j: number) => any): Matrix,
		isSameSizeAs(matrix: Matrix): boolean,
		add(matrix: Matrix): Matrix,
		subtract(matrix: Matrix): Matrix,
		canMultiplyFromLeft(matrix: Matrix): boolean,
		multiply(matrix: number | Matrix): Matrix,
		multiply(vector: Vector): Vector,
		x(matrix: number | Matrix): Matrix,
		x(vector: Vector): Vector,
		minor(a: number, b: number, c: number, d: number): Matrix,
		transpose(): Matrix,
		isSquare(): boolean,
		max(): number,
		indexOf(x: number): any,
		diagonal(): Vector,
		toRightTriangular(): Matrix,
		toUpperTriangular(): Matrix,
		determinant(): number,
		det(): number,
		isSingular(): boolean,
		trace(): number,
		tr(): number,
		rank(): number,
		rk(): number,
		augment(matrix: Matrix | Vector): Matrix,
		inverse(): Matrix,
		inv(): Matrix,
		round(): Matrix,
		snapTo(x: number): Matrix,
		inspect(): string,
		setElements(matrix: Array<number> | Array<Array<number>> | Vector | Matrix): Matrix
	}

	declare interface Line {
		anchor: Vector,
		direction: Vector,
		eql(line: Line): boolean,
		dup(): Line,
		translate(vector: Vector | Array<number>): Line,
		isParallelTo(obj: Line | Plane): boolean,
		distanceFrom(obj: Vector | Line | Plane): number,
		contains(point: Vector): boolean,
		liesIn(plane: Plane): boolean,
		intersects(obj: Line | Plane): boolean,
		intersectionWith(obj: Line | Plane): Vector,
		pointClosestTo(obj: Vector | Line): Vector,
		rotate(t: number, axis: Vector | Line): Line,
		reflectionIn(obj: Vector | Line | Plane): Line,
		setVectors(anchor: Array<number> | Vector, direction: Array<number> | Vector): Line
	}

	declare interface Plane {
		anchor: Vector,
		normal: Vector,
		eql(plane: Plane): boolean,
		dup(): Plane,
		translate(vector: Array<number> | Vector): Plane,
		isParallelTo(obj: Line | Plane): boolean,
		isPerpendicularTo(plane: Plane): boolean,
		distanceFrom(obj: Vector | Line | Plane): number,
		contains(obj: Vector | Line): boolean,
		intersects(obj: Line | Plane): boolean,
		intersectionWith(line: Line): Vector,
		intersectionWith(plane: Plane): Line,
		pointClosestTo(point: Vector): Vector,
		rotate(t: number, axis: Line): Plane,
		reflectionIn(obj: Vector | Line | Plane): Plane,
		setVectors(anchor: Array<number> | Vector, normal: Array<number> | Vector): Plane,
		setVectors(
		anchor: Array<number> | Vector, v1: Array<number> | Vector, v2: Array<number> | Vector
	): Plane
	}

	declare function $V(elements: Vector | Array<number>): Vector

	declare function $M(elements: Array<number> | Array<Array<number>> | Vector | Matrix): Matrix

	declare function $L(anchor: Array<number> | Vector, direction: Array<number> | Vector): Line

	declare function $P(anchor: Array<number> | Vector, normal: Array<number> | Vector): Plane

	declare function $P(
		anchor: Array<number> | Vector, v1: Array<number> | Vector, v2: Array<number> | Vector
	): Plane

		
}

declare module 'Sylvester' {
		declare interface VectorStatic {
		create(elements: Vector | Array<number>): Vector,
		i: Vector,
		j: Vector,
		k: Vector,
		Random(n: number): Vector,
		Zero(n: number): Vector
	}

	declare interface MatrixStatic {
		create(elements: Array<number> | Array<Array<number>> | Vector | Matrix): Matrix,
		I(n: number): Matrix,
		Diagonal(elements: Array<number> | Array<Array<number>> | Vector | Matrix): Matrix,
		Rotation(theta: number, a?: Vector): Matrix,
		RotationX(t: number): Matrix,
		RotationY(t: number): Matrix,
		RotationZ(t: number): Matrix,
		Random(n: number, m: number): Matrix,
		Zero(n: number, m: number): Matrix
	}

	declare interface LineStatic {
		create(anchor: Array<number> | Vector, direction: Array<number> | Vector): Line,
		X: Line,
		Y: Line,
		Z: Line
	}

	declare interface PlaneStatic {
		create(anchor: Array<number> | Vector, normal: Array<number> | Vector): Plane,
		create(
		anchor: Array<number> | Vector, v1: Array<number> | Vector, v2: Array<number> | Vector
	): Plane,
		XY: Plane,
		YZ: Plane,
		ZX: Plane,
		YX: Plane
	}

			
}
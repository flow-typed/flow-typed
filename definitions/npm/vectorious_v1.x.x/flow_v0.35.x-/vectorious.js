

declare module 'vectorious' {
				declare export class Vector  {
		constructor(data: number[]): this;
		add(a: Vector, v: Vector): Vector;
		add(vector: Vector): Vector;
		subtract(a: Vector, b: Vector): Vector;
		subtract(vector: Vector): Vector;
		scale(vector: Vector, scalar: number): Vector;
		scale(scalar: number): Vector;
		normalize(vector: Vector): Vector;
		normalize(): Vector;
		project(a: Vector, b: Vector): Vector;
		project(vector: Vector): Vector;
		zeros(count: number, type?: any): Vector;
		ones(count: number, type?: any): Vector;
		range(start: number, end: number): Vector;
		range(start: number, step: number, end: number): Vector;
		random(count: number, deviation?: number, mean?: number, type?: any): Vector;
		dot(a: Vector, b: Vector): number;
		dot(vector: Vector): number;
		magnitude(): number;
		angle(a: Vector, b: Vector): number;
		angle(vector: Vector): number;
		equals(a: Vector, b: Vector): boolean;
		equals(vector: Vector): boolean;
		get(index: number): number;
		min(): number;
		max(): number;
		set(index: number, value: number): Vector;
		combine(a: Vector, b: Vector): Vector;
		combine(vector: Vector): Vector;
		push(value: number): Vector;
		map(callback: (element: number) => number): Vector;
		each(callback: (element: number) => void): Vector;
		reduce(
		callback: (memo: number, element: number) => number, initialValue?: number
	): number;
		toString(): string;
		toArray(): number[]
	}

	declare export class Matrix  {
		T: Matrix;
		constructor(data: number[][], options?: any): this;
		fromTypedArray(data: any, shape: number[]): Matrix;
		fromArray(data: number[][]): Matrix;
		add(a: Matrix, b: Matrix): Matrix;
		add(matrix: Matrix): Matrix;
		subtract(a: Matrix, b: Matrix): Matrix;
		subtract(matrix: Matrix): Matrix;
		scale(matrix: Matrix, scalar: number): Matrix;
		scale(scalar: number): Matrix;
		product(a: Matrix, b: Matrix): Matrix;
		product(matrix: Matrix): Matrix;
		zeros(i: number, j: number, type?: any): Matrix;
		ones(i: number, j: number, type?: any): Matrix;
		random(i: number, j: number, deviation?: number, mean?: number, type?: any): Matrix;
		multiply(a: Matrix, b: Matrix): Matrix;
		multiply(matrix: Matrix): Matrix;
		transpose(): Matrix;
		inverse(): Matrix;
		gauss(): Matrix;
		lu(): number[];
		plu(matrix: Matrix): any[];
		plu(): any[];
		lusolve(rhs: Matrix, ipiv: Int32Array): Matrix;
		solve(rhs: Matrix | Vector): Matrix;
		augment(a: Matrix, b: Matrix): Matrix;
		augment(matrix: Matrix): Matrix;
		identity(size: number, type?: any): Matrix;
		magic(size: number, type?: any): Matrix;
		diag(): Vector;
		determinant(): number;
		trace(): number;
		equals(a: Matrix, b: Matrix): boolean;
		equals(matrix: Matrix): boolean;
		get(i: number, j: number): number;
		set(i: number, j: number, value: number): Matrix;
		swap(i: number, j: number): Matrix;
		map(callback: (element: number) => number): Matrix;
		each(callback: (element: number) => void): Matrix;
		reduce(
		callback: (memo: number, element: number) => number, initialValue?: number
	): number;
		rank(): number;
		rank(matrix: Matrix): number;
		toString(): string;
		toArray(): number[][]
	}

	declare export class BLAS  {
		
	}

	
}
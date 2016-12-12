

declare module 'gl-matrix-legacy' {
					
}

declare module 'npm$namespace$GLM' {
		declare interface IArray {
		[index: number]: number
	}

			
}

declare module 'npm$namespace$glMatrix' {
			declare export function toRadian(a: number): number

		
}

declare module 'npm$namespace$vec2' {
			declare export function create(): GLM.IArray

	declare export function clone(a: GLM.IArray): GLM.IArray

	declare export function fromValues(x: number, y: number): GLM.IArray

	declare export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function set(out: GLM.IArray, x: number, y: number): GLM.IArray

	declare export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray

	declare export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray

	declare export function distance(a: GLM.IArray, b: GLM.IArray): number

	declare export function dist(a: GLM.IArray, b: GLM.IArray): number

	declare export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number

	declare export function sqrDist(a: GLM.IArray, b: GLM.IArray): number

	declare export function length(a: GLM.IArray): number

	declare export function len(a: GLM.IArray): number

	declare export function squaredLength(a: GLM.IArray): number

	declare export function sqrLen(a: GLM.IArray): number

	declare export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function dot(a: GLM.IArray, b: GLM.IArray): number

	declare export function cross(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray

	declare export function random(out: GLM.IArray): GLM.IArray

	declare export function random(out: GLM.IArray, scale: number): GLM.IArray

	declare export function transformMat2(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray

	declare export function transformMat2d(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray

	declare export function transformMat3(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray

	declare export function transformMat4(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray

	declare export function forEach(
		a: GLM.IArray, stride: number, offset: number, count: number, fn: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any
	): GLM.IArray

	declare export function forEach(
		a: GLM.IArray, stride: number, offset: number, count: number, fn: (a: GLM.IArray, b: GLM.IArray) => void
	): GLM.IArray

	declare export function str(a: GLM.IArray): string

		
}

declare module 'npm$namespace$vec3' {
			declare export function create(): GLM.IArray

	declare export function clone(a: GLM.IArray): GLM.IArray

	declare export function fromValues(x: number, y: number, z: number): GLM.IArray

	declare export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function set(out: GLM.IArray, x: number, y: number, z: number): GLM.IArray

	declare export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray

	declare export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray

	declare export function distance(a: GLM.IArray, b: GLM.IArray): number

	declare export function dist(a: GLM.IArray, b: GLM.IArray): number

	declare export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number

	declare export function sqrDist(a: GLM.IArray, b: GLM.IArray): number

	declare export function length(a: GLM.IArray): number

	declare export function len(a: GLM.IArray): number

	declare export function squaredLength(a: GLM.IArray): number

	declare export function sqrLen(a: GLM.IArray): number

	declare export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function dot(a: GLM.IArray, b: GLM.IArray): number

	declare export function cross(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray

	declare export function random(out: GLM.IArray): GLM.IArray

	declare export function random(out: GLM.IArray, scale: number): GLM.IArray

	declare export function rotateX(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, c: number): GLM.IArray

	declare export function rotateY(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, c: number): GLM.IArray

	declare export function rotateZ(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, c: number): GLM.IArray

	declare export function transformMat3(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray

	declare export function transformMat4(out: GLM.IArray, a: GLM.IArray, m: GLM.IArray): GLM.IArray

	declare export function transformQuat(out: GLM.IArray, a: GLM.IArray, q: GLM.IArray): GLM.IArray

	declare export function forEach(
		out: GLM.IArray, string: number, offset: number, count: number, fn: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any
	): GLM.IArray

	declare export function forEach(
		out: GLM.IArray, string: number, offset: number, count: number, fn: (a: GLM.IArray, b: GLM.IArray) => void
	): GLM.IArray

	declare export function angle(a: GLM.IArray, b: GLM.IArray): number

	declare export function str(a: GLM.IArray): string

		
}

declare module 'npm$namespace$vec4' {
			declare export function create(): GLM.IArray

	declare export function clone(a: GLM.IArray): GLM.IArray

	declare export function fromValues(x: number, y: number, z: number, w: number): GLM.IArray

	declare export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function set(out: GLM.IArray, x: number, y: number, z: number, w: number): GLM.IArray

	declare export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function subtract(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function sub(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function divide(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function div(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function min(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function max(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray

	declare export function scaleAndAdd(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, scale: number): GLM.IArray

	declare export function distance(a: GLM.IArray, b: GLM.IArray): number

	declare export function dist(a: GLM.IArray, b: GLM.IArray): number

	declare export function squaredDistance(a: GLM.IArray, b: GLM.IArray): number

	declare export function sqrDist(a: GLM.IArray, b: GLM.IArray): number

	declare export function length(a: GLM.IArray): number

	declare export function len(a: GLM.IArray): number

	declare export function squaredLength(a: GLM.IArray): number

	declare export function sqrLen(a: GLM.IArray): number

	declare export function negate(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function inverse(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function dot(a: GLM.IArray, b: GLM.IArray): number

	declare export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray

	declare export function random(out: GLM.IArray): GLM.IArray

	declare export function random(out: GLM.IArray, scale: number): GLM.IArray

	declare export function transformMat4(out: GLM.IArray, a: GLM.IArray, mat: GLM.IArray): GLM.IArray

	declare export function transformQuat(out: GLM.IArray, a: GLM.IArray, quat: GLM.IArray): GLM.IArray

	declare export function forEach(
		out: GLM.IArray, string: number, offset: number, count: number, callback: (a: GLM.IArray, b: GLM.IArray, arg: any) => void, arg: any
	): GLM.IArray

	declare export function forEach(
		out: GLM.IArray, string: number, offset: number, count: number, callback: (a: GLM.IArray, b: GLM.IArray) => void
	): GLM.IArray

	declare export function str(a: GLM.IArray): string

		
}

declare module 'npm$namespace$mat2' {
			declare export function create(): GLM.IArray

	declare export function clone(a: GLM.IArray): GLM.IArray

	declare export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function identity(out: GLM.IArray): GLM.IArray

	declare export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function determinant(a: GLM.IArray): number

	declare export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

	declare export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray

	declare export function str(a: GLM.IArray): string

	declare export function frob(a: GLM.IArray): number

	declare export function LDU(L: GLM.IArray, D: GLM.IArray, U: GLM.IArray, a: GLM.IArray): GLM.IArray

		
}

declare module 'npm$namespace$mat2d' {
			declare export function create(): GLM.IArray

	declare export function clone(a: GLM.IArray): GLM.IArray

	declare export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function identity(out: GLM.IArray): GLM.IArray

	declare export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function determinant(a: GLM.IArray): number

	declare export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

	declare export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray

	declare export function translate(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray

	declare export function str(a: GLM.IArray): string

	declare export function frob(a: GLM.IArray): number

		
}

declare module 'npm$namespace$mat3' {
			declare export function create(): GLM.IArray

	declare export function clone(a: GLM.IArray): GLM.IArray

	declare export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function identity(out: GLM.IArray): GLM.IArray

	declare export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function determinant(a: GLM.IArray): number

	declare export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function str(mat: GLM.IArray): string

	declare export function frob(a: GLM.IArray): number

	declare export function normalFromMat4(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function fromQuat(out: GLM.IArray, q: GLM.IArray): GLM.IArray

	declare export function fromMat4(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray

	declare export function fromMat2d(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function translate(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray

	declare export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

		
}

declare module 'npm$namespace$mat4' {
			declare export function create(): GLM.IArray

	declare export function clone(a: GLM.IArray): GLM.IArray

	declare export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function identity(a: GLM.IArray): GLM.IArray

	declare export function transpose(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function adjoint(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function determinant(a: GLM.IArray): number

	declare export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function translate(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray

	declare export function scale(out: GLM.IArray, a: GLM.IArray, v: GLM.IArray): GLM.IArray

	declare export function rotate(out: GLM.IArray, a: GLM.IArray, rad: number, axis: GLM.IArray): GLM.IArray

	declare export function rotateX(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

	declare export function rotateY(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

	declare export function rotateZ(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

	declare export function frustum(
		out: GLM.IArray, left: number, right: number, bottom: number, top: number, near: number, far: number
	): GLM.IArray

	declare export function perspective(
		out: GLM.IArray, fovy: number, aspect: number, near: number, far: number
	): GLM.IArray

	declare export function ortho(
		out: GLM.IArray, left: number, right: number, bottom: number, top: number, near: number, far: number
	): GLM.IArray

	declare export function lookAt(
		out: GLM.IArray, eye: GLM.IArray, center: GLM.IArray, up: GLM.IArray
	): GLM.IArray

	declare export function str(mat: GLM.IArray): string

	declare export function frob(a: GLM.IArray): number

	declare export function fromRotationTranslation(out: GLM.IArray, q: GLM.IArray, v: GLM.IArray): GLM.IArray

	declare export function fromRotationTranslationScale(out: GLM.IArray, q: GLM.IArray, v: GLM.IArray, s: GLM.IArray): GLM.IArray

	declare export function fromQuat(out: GLM.IArray, q: GLM.IArray): GLM.IArray

		
}

declare module 'npm$namespace$quat' {
			declare export function create(): GLM.IArray

	declare export function clone(a: GLM.IArray): GLM.IArray

	declare export function fromValues(x: number, y: number, z: number, w: number): GLM.IArray

	declare export function copy(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function set(out: GLM.IArray, x: number, y: number, z: number, w: number): GLM.IArray

	declare export function identity(out: GLM.IArray): GLM.IArray

	declare export function setAxisAngle(out: GLM.IArray, axis: GLM.IArray, rad: number): GLM.IArray

	declare export function add(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function multiply(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function mul(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function scale(out: GLM.IArray, a: GLM.IArray, b: number): GLM.IArray

	declare export function length(a: GLM.IArray): number

	declare export function len(a: GLM.IArray): number

	declare export function squaredLength(a: GLM.IArray): number

	declare export function sqrLen(a: GLM.IArray): number

	declare export function normalize(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function dot(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): number

	declare export function lerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray

	declare export function slerp(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray, t: number): GLM.IArray

	declare export function invert(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function conjugate(out: GLM.IArray, a: GLM.IArray): GLM.IArray

	declare export function str(a: GLM.IArray): string

	declare export function rotateX(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

	declare export function rotateY(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

	declare export function rotateZ(out: GLM.IArray, a: GLM.IArray, rad: number): GLM.IArray

	declare export function fromMat3(out: GLM.IArray, m: GLM.IArray): GLM.IArray

	declare export function setAxes(
		out: GLM.IArray, view: GLM.IArray, right: GLM.IArray, up: GLM.IArray
	): GLM.IArray

	declare export function rotationTo(out: GLM.IArray, a: GLM.IArray, b: GLM.IArray): GLM.IArray

	declare export function calculateW(out: GLM.IArray, a: GLM.IArray): GLM.IArray

		
}
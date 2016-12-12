

declare module 'geometry-dom' {
		declare interface DOMPointInit {
		x: number,
		y: number,
		z?: number,
		w?: number
	}

	declare interface DOMRectInit {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare interface DOMRectList {
		length: number,
		item(index: number): GeometryDom.DOMRect
	}

			
}

declare module 'npm$namespace$GeometryDom' {
		declare export interface DOMPointReadOnly {
		x: number,
		y: number,
		z: number,
		w: number,
		matrixTransform(matrix: DOMMatrixReadOnly): DOMPoint
	}

	declare interface DOMPoint {
		x: number,
		y: number,
		z: number,
		w: number
	}

	declare interface DOMRect {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare interface DOMRectReadOnly {
		x: number,
		y: number,
		width: number,
		height: number,
		top: number,
		right: number,
		bottom: number,
		left: number
	}

	declare interface DOMRectList {
		length: number,
		item(index: number): DOMRect
	}

	declare interface DOMQuad {
		p1: DOMPoint,
		p2: DOMPoint,
		p3: DOMPoint,
		p4: DOMPoint,
		bounds: DOMRectReadOnly
	}

	declare interface DOMMatrixReadOnly {
		a: number,
		b: number,
		c: number,
		d: number,
		e: number,
		f: number,
		m11: number,
		m12: number,
		m13: number,
		m14: number,
		m21: number,
		m22: number,
		m23: number,
		m24: number,
		m31: number,
		m32: number,
		m33: number,
		m34: number,
		m41: number,
		m42: number,
		m43: number,
		m44: number,
		is2D: boolean,
		isIdentity: boolean,
		translate(tx: number, ty: number, tz?: number): DOMMatrix,
		scale(scale: number, originX?: number, originY?: number): DOMMatrix,
		scale3d(scale: number, originX?: number, originY?: number, originZ?: number): DOMMatrix,
		scaleNonUniform(
		scale: number, scaleX: number, scaleY: number, scaleZ: number, originX: number, originY: number, originZ: number
	): DOMMatrix,
		rotate(angle: number, originX?: number, originY?: number): DOMMatrix,
		rotateFromVector(x: number, y: number): DOMMatrix,
		rotateAxisAngle(x: number, y: number, z: number, angle: number): DOMMatrix,
		skewX(sx: number): DOMMatrix,
		skewY(sx: number): DOMMatrix,
		multiply(other: DOMMatrix): DOMMatrix,
		flipX(): DOMMatrix,
		flipY(): DOMMatrix,
		inverse(): DOMMatrix,
		transformPoint(point?: DOMPointInit): DOMPoint,
		toFloat32Array(): Array<number>,
		toFloat64Array(): Array<number>
	}

	declare interface DOMMatrix {
		a: number,
		b: number,
		c: number,
		d: number,
		e: number,
		f: number,
		m11: number,
		m12: number,
		m13: number,
		m14: number,
		m21: number,
		m22: number,
		m23: number,
		m24: number,
		m31: number,
		m32: number,
		m33: number,
		m34: number,
		m41: number,
		m42: number,
		m43: number,
		m44: number,
		multiplySelf(other: DOMMatrix): DOMMatrix,
		preMultiplySelf(other: DOMMatrix): DOMMatrix,
		translateSelf(tx: number, ty: number, tz?: number): DOMMatrix,
		scaleSelf(scale: number, originX?: number, originY?: number): DOMMatrix,
		scale3dSelf(scale: number, originX?: number, originY?: number, originZ?: number): DOMMatrix,
		scaleNonUniformSelf(
		scaleX: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number
	): DOMMatrix,
		rotateSelf(angle: number, originX?: number, originY?: number): DOMMatrix,
		rotateFromVectorSelf(x: number, y: number): DOMMatrix,
		rotateAxisAngleSelf(x: number, y: number, z: number, angle: number): DOMMatrix,
		skewXSelf(sx: number): DOMMatrix,
		skewYSelf(sy: number): DOMMatrix,
		invertSelf(): DOMMatrix,
		setMatrixValue(transformList: DOMMatrix): DOMMatrix
	}

			
}
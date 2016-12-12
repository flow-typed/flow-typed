import type { gfx3d } from 'npm$namespace$dojox'

declare module 'dojox.gfx3d' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface gfx3d {
		
	}

			
}

declare module 'gfx3d' {
		declare interface _base {
		defaultCube: Object,
		defaultCylinder: Object,
		defaultEdges: Object,
		defaultOrbit: Object,
		defaultPath3d: Object,
		defaultPolygon: Object,
		defaultQuads: Object,
		defaultTriangles: Object,
		drawer: Object,
		lighting: Object,
		matrix: Object,
		scheduler: Object,
		vector: Object,
		Cube(): void,
		Cylinder(): void,
		Edges(): void,
		gradient(
		model: dojox.gfx3d.lighting.Model, material: Object, center: Object, radius: number, from: number, to: number, matrix: Object
	): Object,
		Matrix3D(arg: Object): void,
		Object(): void,
		Orbit(): void,
		Path3d(): void,
		Polygon(): void,
		Quads(): void,
		Scene(): void,
		Triangles(): void,
		Viewport(): void
	}

	declare interface scheduler {
		drawer: Object,
		scheduler: Object,
		BinarySearchTree(): void
	}

	declare interface vector {
		center(): Object,
		crossProduct(a: number, b: number, c: number, d: number, e: number, f: number): any,
		crossProduct(
		a: dojox.geo.openlayers.Point, b: number, c: number, d: number, e: number, f: number
	): any,
		crossProduct(
		a: number, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number
	): any,
		crossProduct(
		a: dojox.geo.openlayers.Point, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number
	): any,
		dotProduct(a: number, b: number, c: number, d: number, e: number, f: number): any,
		dotProduct(
		a: dojox.geo.openlayers.Point, b: number, c: number, d: number, e: number, f: number
	): any,
		dotProduct(
		a: number, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number
	): any,
		dotProduct(
		a: dojox.geo.openlayers.Point, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number
	): any,
		normalize(a: Object, b: Object, c: Object): any,
		substract(a: Object, b: Object): Object,
		sum(): Object
	}

	declare interface lighting {
		finish: Object,
		add(a: any, b: any): Object,
		addColor(a: any, b: any): Object,
		black(): Object,
		diff2Color(c1: any, c2: any): number,
		diffuse(normal: any, lights: any): any,
		dot(a: any, b: any): number,
		faceforward(n: any, i: any): any,
		fromStdColor(c: any): any,
		length(v: any): any,
		length2Color(c: any): number,
		mixColor(c1: any, c2: any, s: any): any,
		Model(): void,
		multiplyColor(a: any, b: any): Object,
		normalize(v: any): any,
		phong(normal: any, v: any, size: any, lights: any): any,
		reflect(i: any, n: any): any,
		saturate(v: any): any,
		saturateColor(c: any): Object,
		scale(s: any, v: any): Object,
		scaleColor(s: any, c: any): Object,
		specular(normal: any, v: any, roughness: any, lights: any): any,
		toStdColor(c: any): Object,
		white(): Object
	}

	declare interface matrix {
		identity: Object,
		cameraRotateX(angle: number): any,
		cameraRotateXg(degree: number): any,
		cameraRotateY(angle: number): any,
		cameraRotateYg(degree: number): any,
		cameraRotateZ(angle: number): any,
		cameraRotateZg(degree: number): any,
		cameraTranslate(a: number, b: number, c: number): any,
		cameraTranslate(a: Object, b: number, c: number): any,
		clone(matrix: Object): any,
		invert(matrix: Object): any,
		multiply(matrix: Object): any,
		multiplyPoint(matrix: Object, a: number, b: number, c: number): any,
		multiplyPoint(matrix: Object, a: Object, b: number, c: number): any,
		normalize(matrix: Object): any,
		project(matrix: Object, a: number, b: number, c: number): any,
		project(matrix: Object, a: dojox.geo.openlayers.Point, b: number, c: number): any,
		rotateX(angle: number): any,
		rotateXg(degree: number): any,
		rotateY(angle: number): any,
		rotateYg(degree: number): any,
		rotateZ(angle: number): any,
		rotateZg(degree: number): any,
		scale(a: number, b: number, c: number): any,
		scale(a: Object, b: number, c: number): any,
		translate(a: number, b: number, c: number): any,
		translate(a: Object, b: number, c: number): any
	}

	declare interface gradient {
		(model: dojox.gfx3d.lighting.Model, material: Object, center: Object, radius: number, from: number, to: number, matrix: Object): void
	}

		declare class object  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: any): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	
}

declare module '_base' {
		declare interface _creators {
		abandon(obj: any, silently: boolean): Function,
		adopt(obj: any): Function,
		create3DObject(objectType: Function, rawObject: Object, style: any): any,
		createCube(cube: any): any,
		createCylinder(cylinder: any): any,
		createEdges(edges: any, style: any): any,
		createOrbit(orbit: any): any,
		createPath3d(path: any): any,
		createPolygon(points: Object[]): any,
		createPolygon(points: Object): any,
		createQuads(quads: any, style: any): any,
		createScene(): any,
		createTriangles(tris: any, style: any): any,
		setDrawer(drawer: any): void,
		setScheduler(scheduler: any): void
	}

	declare interface defaultCube {
		bottom: Object,
		top: Object,
		type: string
	}

	declare interface defaultCylinder {
		center: Object,
		height: number,
		radius: number,
		type: string
	}

	declare interface defaultOrbit {
		center: Object,
		radius: number,
		type: string
	}

	declare interface defaultPolygon {
		path: any[],
		type: string
	}

	declare interface defaultPath3d {
		path: any[],
		type: string
	}

	declare interface defaultEdges {
		points: any[],
		style: Object,
		type: string
	}

	declare interface defaultQuads {
		points: any[],
		style: Object,
		type: string
	}

	declare interface defaultTriangles {
		points: any[],
		style: Object,
		type: string
	}

	declare interface drawer {
		chart(todos: any, objects: any, viewport: any): void,
		conservative(todos: any, objects: any, viewport: any): void
	}

	declare interface lighting {
		finish: Object,
		add(a: any, b: any): Object,
		addColor(a: any, b: any): Object,
		black(): Object,
		diff2Color(c1: any, c2: any): number,
		diffuse(normal: any, lights: any): any,
		dot(a: any, b: any): number,
		faceforward(n: any, i: any): any,
		fromStdColor(c: any): any,
		length(v: any): any,
		length2Color(c: any): number,
		mixColor(c1: any, c2: any, s: any): any,
		Model(): void,
		multiplyColor(a: any, b: any): Object,
		normalize(v: any): any,
		phong(normal: any, v: any, size: any, lights: any): any,
		reflect(i: any, n: any): any,
		saturate(v: any): any,
		saturateColor(c: any): Object,
		scale(s: any, v: any): Object,
		scaleColor(s: any, c: any): Object,
		specular(normal: any, v: any, roughness: any, lights: any): any,
		toStdColor(c: any): Object,
		white(): Object
	}

	declare interface matrix {
		identity: Object,
		cameraRotateX(angle: number): any,
		cameraRotateXg(degree: number): any,
		cameraRotateY(angle: number): any,
		cameraRotateYg(degree: number): any,
		cameraRotateZ(angle: number): any,
		cameraRotateZg(degree: number): any,
		cameraTranslate(a: number, b: number, c: number): any,
		cameraTranslate(a: Object, b: number, c: number): any,
		clone(matrix: Object): any,
		invert(matrix: Object): any,
		Matrix3D(arg: Object): void,
		multiply(matrix: Object): any,
		multiplyPoint(matrix: Object, a: number, b: number, c: number): any,
		multiplyPoint(matrix: Object, a: Object, b: number, c: number): any,
		normalize(matrix: Object): any,
		project(matrix: Object, a: number, b: number, c: number): any,
		project(matrix: Object, a: dojox.geo.openlayers.Point, b: number, c: number): any,
		rotateX(angle: number): any,
		rotateXg(degree: number): any,
		rotateY(angle: number): any,
		rotateYg(degree: number): any,
		rotateZ(angle: number): any,
		rotateZg(degree: number): any,
		scale(a: number, b: number, c: number): any,
		scale(a: Object, b: number, c: number): any,
		translate(a: number, b: number, c: number): any,
		translate(a: Object, b: number, c: number): any
	}

	declare interface scheduler {
		BinarySearchTree(): void,
		bsp(buffer: any, outline: any): any,
		order(it: any): any,
		outline(it: any): any,
		zOrder(buffer: any, order: any): any
	}

	declare interface vector {
		center(): Object,
		crossProduct(a: number, b: number, c: number, d: number, e: number, f: number): any,
		crossProduct(
		a: dojox.geo.openlayers.Point, b: number, c: number, d: number, e: number, f: number
	): any,
		crossProduct(
		a: number, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number
	): any,
		crossProduct(
		a: dojox.geo.openlayers.Point, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number
	): any,
		dotProduct(a: number, b: number, c: number, d: number, e: number, f: number): any,
		dotProduct(
		a: dojox.geo.openlayers.Point, b: number, c: number, d: number, e: number, f: number
	): any,
		dotProduct(
		a: number, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number
	): any,
		dotProduct(
		a: dojox.geo.openlayers.Point, b: dojox.geo.openlayers.Point, c: number, d: number, e: number, f: number
	): any,
		normalize(a: Object, b: Object, c: Object): any,
		substract(a: Object, b: Object): Object,
		sum(): Object
	}

		declare class Cube  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: Object[]): void;
		setObject(newObject: Object): void;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Cylinder  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: any): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Edges  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: Object[], style: String): Function;
		setObject(newObject: Object, style: String): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Orbit  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: any): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Polygon  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: Object[]): Function;
		setObject(newObject: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Object  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: any): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Path3d  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		closePath(): Function;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		lineTo(): Function;
		moveTo(): Function;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: any): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Quads  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: Object[], style: String): Function;
		setObject(newObject: Object, style: String): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Triangles  {
		constructor(): this;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any): void;
		setFill(fill: Object): Function;
		setObject(newObject: Object[], style: String): Function;
		setObject(newObject: Object, style: String): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Scene  {
		constructor(): this;
		abandon(obj: any, silently: boolean): Function;
		addTodo(newObject: any): void;
		adopt(obj: any): Function;
		applyLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		create3DObject(objectType: Function, rawObject: Object, style: any): any;
		createCube(cube: any): any;
		createCylinder(cylinder: any): any;
		createEdges(edges: any, style: any): any;
		createOrbit(orbit: any): any;
		createPath3d(path: any): any;
		createPolygon(points: Object[]): any;
		createPolygon(points: Object): any;
		createQuads(quads: any, style: any): any;
		createScene(): any;
		createTriangles(tris: any, style: any): any;
		destroy(): void;
		draw(lighting: any): void;
		getOutline(): any;
		getZOrder(): number;
		invalidate(): void;
		render(camera: any, deep: any): void;
		setDrawer(drawer: any): void;
		setFill(fill: any): Function;
		setObject(newObject: any): Function;
		setScheduler(scheduler: any): void;
		setStroke(stroke: any): Function;
		setTransform(matrix: any): Function;
		toStdFill(lighting: any, normal: any): any
	}

	declare class Viewport  {
		constructor(): this;
		nodeType: Object;
		abandon(obj: any, silently: boolean): Function;
		add(shape: dojox.gfx.shape.Shape): any;
		addLights(lights: any[]): any;
		addLights(lights: Object): any;
		addTodo(newObject: any): void;
		adopt(obj: any): Function;
		applyCameraLeftTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyCameraRightTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		applyCameraTransform(matrix: dojox.gfx3d.matrix.Matrix3D): any;
		applyLeftTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyRightTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		applyTransform(matrix: dojox.gfx.matrix.Matrix2D): Function;
		clear(destroy: boolean): Function;
		closeBatch(): Function;
		connect(name: any, object: any, method: any): any;
		create3DObject(objectType: Function, rawObject: Object, style: any): any;
		createCircle(circle: Object): any;
		createCube(cube: any): any;
		createCylinder(cylinder: any): any;
		createEdges(edges: any, style: any): any;
		createEllipse(ellipse: Object): any;
		createGroup(): any;
		createImage(image: Object): any;
		createLine(line: Object): any;
		createObject(shapeType: Function, rawShape: Object): any;
		createOrbit(orbit: any): any;
		createPath(path: Object): any;
		createPath3d(path: any): any;
		createPolygon(points: Object[]): any;
		createPolygon(points: Object): any;
		createPolyline(points: Object): any;
		createQuads(quads: any, style: any): any;
		createRect(rect: Object): any;
		createScene(): any;
		createShape(shape: Object): any;
		createText(text: Object): any;
		createTextPath(text: Object): any;
		createTriangles(tris: any, style: any): any;
		destroy(): void;
		disconnect(token: any): any;
		getBoundingBox(): any;
		getClip(): any;
		getEventSource(): any;
		getFill(): any;
		getNode(): any;
		getParent(): any;
		getShape(): any;
		getStroke(): any;
		getTransform(): any;
		getTransformedBoundingBox(): any;
		invalidate(): void;
		moveToBack(): Function;
		moveToFront(): Function;
		on(type: any, listener: any): any;
		openBatch(): Function;
		remove(shape: dojox.gfx.shape.Shape, silently: boolean): Function;
		removeShape(silently: boolean): Function;
		render(): void;
		setCameraTransform(matrix: dojox.gfx3d.matrix.Matrix3D): Function;
		setClip(clip: any): void;
		setDimensions(dim: any): void;
		setDrawer(drawer: any): void;
		setFill(fill: Object): Function;
		setLights(lights: any[], ambient: dojo._base.Color, specular: dojo._base.Color): Function;
		setScheduler(scheduler: any): void;
		setShape(shape: Object): Function;
		setStroke(stroke: Object): Function;
		setTransform(matrix: dojox.gfx.matrix.Matrix2D): any
	}

	
}

declare module 'scheduler' {
		declare interface drawer {
		chart(todos: any, objects: any, viewport: any): void,
		conservative(todos: any, objects: any, viewport: any): void
	}

	declare interface scheduler {
		BinarySearchTree(): void,
		bsp(buffer: any, outline: any): any,
		order(it: any): any,
		outline(it: any): any,
		zOrder(buffer: any, order: any): any
	}

		declare class BinarySearchTree  {
		constructor(obj: dojox.gfx3d.object, outline: any): this;
		add(obj: any, outline: any): void;
		iterate(outline: any): any
	}

	
}

declare module 'lighting' {
		declare interface finish {
		defaults: Object,
		dull: Object,
		glossy: Object,
		luminous: Object,
		metalA: Object,
		metalB: Object,
		metalC: Object,
		metalD: Object,
		metalE: Object,
		phong_dull: Object,
		phong_glossy: Object,
		phong_shiny: Object,
		shiny: Object
	}

		declare class Model  {
		constructor(incident: any, lights: any, ambient: any, specular: any): this;
		constant(normal: any, finish: any, pigment: any): any;
		matte(normal: any, finish: any, pigment: any): any;
		metal(normal: any, finish: any, pigment: any): any;
		npr(normal: any, finish: any, pigment: any): any;
		plastic(normal: any, finish: any, pigment: any): any
	}

	
}

declare module 'matrix' {
				declare class Matrix3D  {
		constructor(arg: Object): this
	}

	
}

declare module 'dojox/gfx3d' {
					declare module.exports: gfx3d


}

declare module 'dojox/gfx3d/object' {
					declare module.exports: object


}

declare module 'dojox/gfx3d/gradient' {
					declare module.exports: gradient


}

declare module 'dojox/gfx3d/_base' {
					declare module.exports: _base


}

declare module 'dojox/gfx3d/_base.Cube' {
					declare module.exports: Cube


}

declare module 'dojox/gfx3d/_base.Cylinder' {
					declare module.exports: Cylinder


}

declare module 'dojox/gfx3d/_base.Edges' {
					declare module.exports: Edges


}

declare module 'dojox/gfx3d/_base.Polygon' {
					declare module.exports: Polygon


}

declare module 'dojox/gfx3d/_base.Orbit' {
					declare module.exports: Orbit


}

declare module 'dojox/gfx3d/_base.Object' {
					declare module.exports: Object


}

declare module 'dojox/gfx3d/_base.Path3d' {
					declare module.exports: Path3d


}

declare module 'dojox/gfx3d/_base.Quads' {
					declare module.exports: Quads


}

declare module 'dojox/gfx3d/_base.Triangles' {
					declare module.exports: Triangles


}

declare module 'dojox/gfx3d/_base.Scene' {
					declare module.exports: Scene


}

declare module 'dojox/gfx3d/_base.Viewport' {
					declare module.exports: Viewport


}

declare module 'dojox/gfx3d/_base._creators' {
					declare module.exports: _creators


}

declare module 'dojox/gfx3d/_base.defaultCube' {
					declare module.exports: defaultCube


}

declare module 'dojox/gfx3d/_base.defaultEdges' {
					declare module.exports: defaultEdges


}

declare module 'dojox/gfx3d/_base.defaultOrbit' {
					declare module.exports: defaultOrbit


}

declare module 'dojox/gfx3d/_base.defaultCylinder' {
					declare module.exports: defaultCylinder


}

declare module 'dojox/gfx3d/_base.defaultPath3d' {
					declare module.exports: defaultPath3d


}

declare module 'dojox/gfx3d/_base.defaultPolygon' {
					declare module.exports: defaultPolygon


}

declare module 'dojox/gfx3d/_base.defaultQuads' {
					declare module.exports: defaultQuads


}

declare module 'dojox/gfx3d/_base.defaultTriangles' {
					declare module.exports: defaultTriangles


}

declare module 'dojox/gfx3d/_base.drawer' {
					declare module.exports: drawer


}

declare module 'dojox/gfx3d/_base.lighting' {
					declare module.exports: lighting


}

declare module 'dojox/gfx3d/_base.scheduler' {
					declare module.exports: scheduler


}

declare module 'dojox/gfx3d/_base.matrix' {
					declare module.exports: matrix


}

declare module 'dojox/gfx3d/_base.vector' {
					declare module.exports: vector


}

declare module 'dojox/gfx3d/scheduler' {
					declare module.exports: scheduler


}

declare module 'dojox/gfx3d/scheduler.BinarySearchTree' {
					declare module.exports: BinarySearchTree


}

declare module 'dojox/gfx3d/scheduler.drawer' {
					declare module.exports: drawer


}

declare module 'dojox/gfx3d/scheduler.scheduler' {
					declare module.exports: scheduler


}

declare module 'dojox/gfx3d/lighting' {
					declare module.exports: lighting


}

declare module 'dojox/gfx3d/lighting.Model' {
					declare module.exports: Model


}

declare module 'dojox/gfx3d/lighting.finish' {
					declare module.exports: finish


}

declare module 'dojox/gfx3d/vector' {
					declare module.exports: vector


}

declare module 'dojox/gfx3d/matrix' {
					declare module.exports: matrix


}
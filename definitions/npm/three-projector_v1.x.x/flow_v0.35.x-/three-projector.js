

declare module 'three-projector' {
					
}

declare module 'npm$namespace$THREE' {
				declare export class RenderableObject  {
		constructor(): this;
		id: number;
		object: Object;
		z: number
	}

	declare export class RenderableFace  {
		constructor(): this;
		id: number;
		v1: RenderableVertex;
		v2: RenderableVertex;
		v3: RenderableVertex;
		normalModel: Vector3;
		vertexNormalsModel: Vector3[];
		vertexNormalsLength: number;
		color: Color;
		material: Material;
		uvs: Vector2[][];
		z: number
	}

	declare export class RenderableVertex  {
		constructor(): this;
		position: Vector3;
		positionWorld: Vector3;
		positionScreen: Vector4;
		visible: boolean;
		copy(vertex: RenderableVertex): void
	}

	declare export class RenderableLine  {
		constructor(): this;
		id: number;
		v1: RenderableVertex;
		v2: RenderableVertex;
		vertexColors: Color[];
		material: Material;
		z: number
	}

	declare export class RenderableSprite  {
		constructor(): this;
		id: number;
		object: Object;
		x: number;
		y: number;
		z: number;
		rotation: number;
		scale: Vector2;
		material: Material
	}

	declare export class Projector  {
		constructor(): this;
		projectVector(vector: Vector3, camera: Camera): Vector3;
		unprojectVector(vector: Vector3, camera: Camera): Vector3;
		projectScene(
		scene: Scene, camera: Camera, sortObjects: boolean, sortElements?: boolean
	): {
		objects: Object3D[],
		sprites: Object3D[],
		lights: Light[],
		elements: Face3[]
	}
	}

	
}
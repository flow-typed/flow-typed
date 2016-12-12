

declare module 'three-css3drenderer' {
					
}

declare module 'npm$namespace$THREE' {
				declare class CSS3DObject extends Object3D {
		constructor(element: any): this;
		element: any
	}

	declare class CSS3DSprite extends CSS3DObject {
		constructor(element: any): this
	}

	declare class CSS3DRenderer  {
		constructor(): this;
		domElement: HTMLElement;
		setSize(width: number, height: number): void;
		render(scene: THREE.Scene, camera: THREE.Camera): void
	}

	
}


declare module 'three-editorcontrols' {
					
}

declare module 'npm$namespace$THREE' {
				declare class EditorControls extends EventDispatcher {
		constructor(object: Camera, domElement?: HTMLElement): this;
		enabled: boolean;
		center: THREE.Vector3;
		focus(target: THREE.Object3D, frame: boolean): void;
		pan(delta: THREE.Vector3): void;
		zoom(delta: THREE.Vector3): void;
		rotate(delta: THREE.Vector3): void;
		dispose(): void
	}

	
}
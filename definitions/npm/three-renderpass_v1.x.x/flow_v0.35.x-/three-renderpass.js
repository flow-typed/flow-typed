

declare module 'three-renderpass' {
					
}

declare module 'npm$namespace$THREE' {
				declare export class RenderPass  {
		constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: Color, clearAlpha?: number): this;
		constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: string, clearAlpha?: number): this;
		constructor(scene: Scene, camera: Camera, overrideMaterial?: Material, clearColor?: number, clearAlpha?: number): this;
		scene: Scene;
		camera: Camera;
		overrideMaterial: Material;
		clearColor: any;
		clearAlpha: number;
		oldClearColor: Color;
		oldClearAlpha: number;
		enabled: boolean;
		clear: boolean;
		needsSwap: boolean;
		render(
		renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number
	): void
	}

	
}
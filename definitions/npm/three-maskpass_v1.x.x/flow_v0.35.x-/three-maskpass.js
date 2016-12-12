

declare module 'three-maskpass' {
					
}

declare module 'npm$namespace$THREE' {
				declare export class MaskPass  {
		constructor(scene: Scene, camera: Camera): this;
		scene: Scene;
		camera: Camera;
		enabled: boolean;
		clear: boolean;
		needsSwap: boolean;
		inverse: boolean;
		render(
		renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number
	): void
	}

	declare export class ClearMaskPass  {
		constructor(): this;
		enabled: boolean;
		render(
		renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number
	): void
	}

	
}
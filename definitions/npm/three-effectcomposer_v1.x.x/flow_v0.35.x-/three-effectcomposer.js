

declare module 'three-effectcomposer' {
					
}

declare module 'npm$namespace$THREE' {
				declare export class EffectComposer  {
		constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget): this;
		renderTarget1: WebGLRenderTarget;
		renderTarget2: WebGLRenderTarget;
		writeBuffer: WebGLRenderTarget;
		readBuffer: WebGLRenderTarget;
		passes: any[];
		copyPass: ShaderPass;
		swapBuffers(): void;
		addPass(pass: any): void;
		insertPass(pass: any, index: number): void;
		render(delta?: number): void;
		reset(renderTarget?: WebGLRenderTarget): void;
		setSize(width: number, height: number): void
	}

	
}
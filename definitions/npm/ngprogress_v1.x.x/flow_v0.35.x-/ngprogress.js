

declare module 'ngprogress' {
					
}

declare module 'npm$namespace$NgProgress' {
		declare export interface INgProgress {
		start(): void,
		height(height: string): void,
		color(color: string): void,
		status(): number,
		stop(): void,
		set(value: number): void,
		reset(): void,
		complete(): void
	}

	declare export interface INgProgressFactory {
		createInstance(): INgProgress
	}

			
}
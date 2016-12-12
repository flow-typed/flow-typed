

declare module 'ngprogress-lite' {
					
}

declare module 'progressLite' {
		declare export interface INgProgressLite {
		set(num: number): INgProgressLite,
		get(): number,
		start(): INgProgressLite,
		inc(amount?: number): INgProgressLite,
		done(): void
	}

	declare export interface IConfigurationOptions {
		minimum: number,
		speed: number,
		ease: string,
		trickleRate: number,
		trickleSpeed: number,
		template: string
	}

	declare export interface INgProgressLiteProvider {
		settings: IConfigurationOptions
	}

			
}
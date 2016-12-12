import type { Pace } from 'npm$namespace$HubSpotPaceInterfaces'

declare module 'HubSpot-pace' {
					declare module.exports: Pace


}

declare module 'npm$namespace$HubSpotPaceInterfaces' {
		declare interface PaceOptions {
		catchupTime?: number,
		initialRate?: number,
		minTime?: number,
		ghostTime?: number,
		maxProgressPerFrame?: number,
		easeFactor?: number,
		startOnPageLoad?: boolean,
		restartOnPushState?: boolean,
		restartOnRequestAfter?: boolean | number,
		target?: string,
		document?: boolean | string,
		elements?: boolean | PaceElementsOptions,
		eventLag?: boolean | PaceEventLagOptions,
		ajax?: boolean | PaceAjaxOptions
	}

	declare interface PaceElementsOptions {
		checkInterval?: number,
		selectors?: string[]
	}

	declare interface PaceEventLagOptions {
		minSamples?: number,
		sampleCount?: number,
		lagThreshold?: number
	}

	declare interface PaceAjaxOptions {
		trackMethods?: string[],
		trackWebSockets?: boolean,
		ignoreURLs?: (string | RegExp)[]
	}

	declare interface Pace {
		options: PaceOptions,
		start(options?: PaceOptions): void,
		restart(): void,
		stop(): void,
		track(fn: () => void, ...args: any[]): void,
		ignore(fn: () => void, ...args: any[]): void,
		on(event: string, handler: (...args: any[]) => void, context?: any): void,
		off(event: string, handler?: (...args: any[]) => void): void,
		once(event: string, handler: (...args: any[]) => void, context?: any): void
	}

			
}
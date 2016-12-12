

declare module 'tracking' {
					
}

declare module 'npm$namespace$tracking' {
		declare interface TrackEvent {
		data: TrackRect[]
	}

	declare interface TrackRect {
		x: number,
		y: number,
		height: number,
		width: number,
		color: string
	}

	declare interface TrackerTask {
		stop(): void,
		run(): void
	}

	declare export function track(selector: string, tracker: tracking.Tracker): TrackerTask

	declare export class ColorTracker extends Tracker {
		constructor(colours: string[]): this;
		registerColor(name: string, predicate: (r: number, g: number, b: number) => boolean): void
	}

	declare export class ObjectTracker extends Tracker {
		constructor(objects: string[]): this
	}

	declare class Tracker  {
		constructor(target: string): this;
		on(eventName: string, callback: (event: TrackEvent) => void): void
	}

	
}
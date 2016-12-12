import type { timing } from 'npm$namespace$dojox'

declare module 'dojox.timing' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface timing {
		
	}

			
}

declare module 'timing' {
		declare interface doLater {
		(conditional: any, context?: Object, interval?: number): void
	}

	declare interface Streamer {
		(input: Function, output: Function, interval: number, minimum: number, initialData: any[]): void
	}

		declare class Sequence  {
		constructor(): this;
		go(defs: any[], doneFunction: Function): void;
		go(defs: any[], doneFunction: any[]): void;
		goOn(): void;
		stop(): void
	}

	
}

declare module 'dojox/timing' {
					declare module.exports: timing


}

declare module 'dojox/timing/Sequence' {
					declare module.exports: Sequence


}

declare module 'dojox/timing/doLater' {
					declare module.exports: doLater


}

declare module 'dojox/timing/Streamer' {
					declare module.exports: Streamer


}
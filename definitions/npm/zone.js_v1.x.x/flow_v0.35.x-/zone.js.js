

declare module 'zone.js' {
				declare class Zone  {
		constructor(parentZone: Zone, data: any): this;
		fork(locals?: {
		[key: string]: any
	}): Zone;
		bind(fn: Function, skipEnqueue?: boolean): void;
		bindOnce(fn: Function): any;
		run(fn: Function, applyTo?: any, applyWith?: any): void;
		isRootZone(): boolean;
		bindPromiseFn<T>(fn: T): T;
		longStackTraceZone: {
		[key: string]: any
	}
	}

	
}
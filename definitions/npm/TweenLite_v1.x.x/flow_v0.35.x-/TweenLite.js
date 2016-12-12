

declare module 'TweenLite' {
				declare class TweenLite  {
		constructor(target: any, duration: number, vars: any): this;
		defaultEase: Ease;
		defaultOverwrite: string;
		selector: (query: string) => any;
		target: any;
		ticker: any;
		delayedCall(
		delay: number, callback: Function, params?: any[], scope?: any, useFrames?: boolean
	): TweenLite;
		from(target: any, duration: number, vars: any): TweenLite;
		fromTo(target: any, duration: number, fromVars: any, toVars: any): TweenLite;
		getTweensOf(target: any, onlyActive?: boolean): TweenLite[];
		invalidate(): TweenLite;
		killDelayedCallsTo(func: Function): void;
		killTweensOf(target: any, onlyActive?: boolean, vars?: any): void;
		lagSmoothing(threshold: number, adjustedLag: number): void;
		render(): void;
		set(target: any, vars: any): TweenLite;
		to(target: any, duration: number, vars: any): TweenLite;
		delay(): number;
		delay(value: number): TweenLite;
		duration(): number;
		duration(value: number): TweenLite;
		eventCallback(type: string): Function;
		eventCallback(type: string, callback: Function, params?: any[], scope?: any): TweenLite;
		kill(vars?: any, target?: any): TweenLite;
		pause(atTime?: any, suppressEvents?: boolean): TweenLite;
		paused(): boolean;
		paused(value: boolean): TweenLite;
		play(from?: any, suppressEvents?: boolean): TweenLite;
		progress(): number;
		progress(value: number, suppressEvents?: boolean): TweenLite;
		restart(includeDelay?: boolean, suppressEvents?: boolean): TweenLite;
		resume(from?: any, suppressEvents?: boolean): TweenLite;
		reverse(from?: any, suppressEvents?: boolean): TweenLite;
		reversed(): boolean;
		reversed(value: boolean): TweenLite;
		seek(time: any, suppressEvents?: boolean): TweenLite;
		startTime(): number;
		startTime(value: number): TweenLite;
		time(): number;
		time(value: number, suppressEvents?: boolean): TweenLite;
		timeScale(): number;
		timeScale(value: number): TweenLite;
		totalDuration(): number;
		totalDuration(value: number): TweenLite;
		totalProgress(): number;
		totalProgress(value: number, suppressEvents?: boolean): TweenLite;
		totalTime(): number;
		totalTime(time: number, suppressEvents?: boolean): TweenLite
	}

	
}
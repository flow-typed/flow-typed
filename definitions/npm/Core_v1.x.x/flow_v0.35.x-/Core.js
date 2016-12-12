

declare module 'Core' {
				declare class Animation  {
		constructor(duration?: number, vars?: any): this;
		data: any;
		timeline: SimpleTimeLine;
		vars: any;
		delay(): number;
		delay(value: number): Animation;
		duration(): number;
		duration(value: number): Animation;
		eventCallback(type: string): Function;
		eventCallback(type: string, callback: Function, params?: any[], scope?: any): Animation;
		invalidate(): Animation;
		isActive(): boolean;
		kill(vars?: any, target?: any): Animation;
		pause(atTime?: any, suppressEvents?: boolean): Animation;
		paused(): boolean;
		paused(value: boolean): Animation;
		play(from?: any, suppressEvents?: boolean): Animation;
		progress(): number;
		progress(value: number, suppressEvents?: boolean): Animation;
		restart(includeDelay?: boolean, suppressEvents?: boolean): Animation;
		resume(from?: any, suppressEvents?: boolean): Animation;
		reverse(from?: any, suppressEvents?: boolean): Animation;
		reversed(): boolean;
		reversed(value: boolean): Animation;
		seek(time: any, suppressEvents?: boolean): Animation;
		startTime(): number;
		startTime(value: number): Animation;
		time(): number;
		time(value: number, suppressEvents?: boolean): Animation;
		timeScale(): number;
		timeScale(value: number): Animation;
		totalDuration(): number;
		totalDuration(value: number): Animation;
		totalProgress(): number;
		totalProgress(value: number, suppressEvents?: boolean): Animation;
		totalTime(): number;
		totalTime(time: number, suppressEvents?: boolean): Animation
	}

	declare class SimpleTimeLine extends Animation {
		constructor(vars?: any): this;
		autoRemoveChildren: boolean;
		smoothChildTiming: boolean;
		add(child: any, position?: any, align?: string, stagger?: number): SimpleTimeLine;
		render(time: number, suppressEvents?: boolean, force?: boolean): SimpleTimeLine;
		delay(): number;
		delay(value: number): SimpleTimeLine;
		duration(): number;
		duration(value: number): SimpleTimeLine;
		eventCallback(type: string): Function;
		eventCallback(type: string, callback: Function, params?: any[], scope?: any): SimpleTimeLine;
		invalidate(): SimpleTimeLine;
		kill(vars?: any, target?: any): SimpleTimeLine;
		pause(atTime?: any, suppressEvents?: boolean): SimpleTimeLine;
		paused(): boolean;
		paused(value: boolean): SimpleTimeLine;
		play(from?: any, suppressEvents?: boolean): SimpleTimeLine;
		progress(): number;
		progress(value: number, suppressEvents?: boolean): SimpleTimeLine;
		restart(includeDelay?: boolean, suppressEvents?: boolean): SimpleTimeLine;
		resume(from?: any, suppressEvents?: boolean): SimpleTimeLine;
		reverse(from?: any, suppressEvents?: boolean): SimpleTimeLine;
		reversed(): boolean;
		reversed(value: boolean): SimpleTimeLine;
		seek(time: any, suppressEvents?: boolean): SimpleTimeLine;
		startTime(): number;
		startTime(value: number): SimpleTimeLine;
		time(): number;
		time(value: number, suppressEvents?: boolean): SimpleTimeLine;
		timeScale(): number;
		timeScale(value: number): SimpleTimeLine;
		totalDuration(): number;
		totalDuration(value: number): SimpleTimeLine;
		totalProgress(): number;
		totalProgress(value: number, suppressEvents?: boolean): SimpleTimeLine;
		totalTime(): number;
		totalTime(time: number, suppressEvents?: boolean): SimpleTimeLine
	}

	
}
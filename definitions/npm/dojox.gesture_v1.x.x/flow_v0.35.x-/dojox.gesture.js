

declare module 'dojox.gesture' {
					
}

declare module 'gesture' {
				declare class Base  {
		constructor(args: any): this;
		defaultEvent: string;
		subEvents: any[];
		touchOnly: boolean;
		cancel(data: any, e: any): void;
		destroy(): void;
		fire(node: HTMLElement, event: Object): void;
		init(): void;
		isLocked(node: any): boolean;
		lock(node: HTMLElement): void;
		move(data: any, e: any): void;
		press(data: any, e: any): void;
		release(data: any, e: any): void;
		unLock(): void
	}

	
}

declare module 'dojox/gesture/Base' {
					declare module.exports: Base


}
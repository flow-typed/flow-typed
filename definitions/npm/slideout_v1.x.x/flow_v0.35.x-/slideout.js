

declare module 'slideout' {
				declare class Slideout  {
		constructor(options: Slideout.Options): this;
		open(): Slideout;
		close(): Slideout;
		toggle(): Slideout;
		isOpen(): boolean;
		destroy(): Slideout;
		enableTouch(): Slideout;
		disableTouch(): Slideout;
		on(event: "translate", listener: (translateX: number) => any): Slideout;
		on(event: Slideout.Events, listener: Function): Slideout;
		once(event: "translate", listener: (translateX: number) => any): Slideout;
		once(event: Slideout.Events, listener: Function): Slideout;
		off(event: "translate", listener: (translateX: number) => any): Slideout;
		off(event: Slideout.Events, listener: Function): Slideout;
		emit(event: Slideout.Events, ...data: any[]): Slideout
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$Slideout' {
	declare type Events = "beforeopen" | "open" | "beforeclose" | "close" | "translatestart" | "translate" | "translateend";

	declare interface Options {
		panel: HTMLElement,
		menu: HTMLElement,
		duration?: number,
		fx?: string,
		padding?: number,
		tolerance?: number,
		touch?: boolean,
		side?: "left" | "right"
	}

			
}
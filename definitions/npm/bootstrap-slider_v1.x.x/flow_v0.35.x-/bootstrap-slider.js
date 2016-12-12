

declare module 'bootstrap-slider' {
		declare interface SliderOptions {
		id?: string,
		min?: number,
		max?: number,
		step?: number,
		precision?: number,
		orientation?: string,
		value?: number | number[],
		range?: boolean,
		selection?: string,
		tooltip?: string,
		tooltip_split?: boolean,
		handle?: string,
		reversed?: boolean,
		enabled?: boolean,
		formatter(val: number): string,
		natural_arrow_keys?: boolean,
		ticks?: number[],
		ticks_positions?: number[],
		ticks_labels?: string[],
		ticks_snap_bounds?: number,
		scale?: string,
		focus?: boolean
	}

	declare interface JQuery {
		slider(options?: SliderOptions): JQuery,
		slider(methodName: string, ...args: any[]): JQuery
	}

	declare interface ChangeValue {
		oldValue: number,
		newValue: number
	}

	declare interface JQueryEventObject {
		value: number | ChangeValue
	}

	declare interface SliderStatics {
		new (selector: string, opts: SliderOptions): Slider,
		prototype: Slider
	}

	declare interface Slider {
		getValue(): number,
		setValue(
		newValue: number, triggerSlideEvent?: boolean, triggerChangeEvent?: boolean
	): void,
		destroy(): void,
		disable(): void,
		enable(): void,
		isEnabled(): boolean,
		setAttribute(attribute: string, value: any): void,
		getAttribute(attribute: string): any,
		refresh(): void,
		relayout(): void,
		on: {
		(eventType: string, callback: (eventObject: JQueryEventObject, ...args: any[]) => any): Slider,
		(eventType: string, data: any, callback: (eventObject: JQueryEventObject, ...args: any[]) => any): Slider,
		(eventType: string, selector: string, callback: (eventObject: JQueryEventObject, ...eventData: any[]) => any): Slider,
		(eventType: string, selector: string, data: any, callback: (eventObject: JQueryEventObject, ...eventData: any[]) => any): Slider,
		(eventType: {
		[key: string]: any
	}, selector?: string, data?: any): Slider,
		(eventType: {
		[key: string]: any
	}, data?: any): Slider
	}
	}

			
}
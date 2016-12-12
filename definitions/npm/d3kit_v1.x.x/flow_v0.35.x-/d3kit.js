

declare module 'd3kit' {
					declare module.exports: undefined


}

declare module 'npm$namespace$d3kit' {
		declare export interface ChartMargin {
		top?: number,
		right?: number,
		bottom?: number,
		left?: number
	}

	declare export interface ChartOptions {
		margin?: ChartMargin,
		offset?: [number, number],
		initialWidth?: number,
		initialHeight?: number,
		[name: string]: any
	}

	declare export interface ChartMixin {
		[name: string]: any
	}

	declare interface ChartletPropertyCallback {
		(datum?: any, datum_index?: number): any
	}

	declare export interface ChartletEventFunction {
		(sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void
	}

	declare interface LayerConfig {
		name?: string,
		names?: Array<string>,
		sublayers?: LayerConfig
	}

		declare export class Skeleton  {
		constructor(selector: string | Element, options?: ChartOptions, customEvents?: Array<string>): this;
		getCustomEventNames(): Array<string>;
		getDispatcher(): any;
		getInnerWidth(): number;
		getInnerHeight(): number;
		getLayerOrganizer(): LayerOrganizer;
		getRootG(): d3.Selection<any>;
		getSvg(): d3.Selection<any>;
		data(): any;
		data(data?: any, doNotDispatch?: boolean): Skeleton;
		options(): any;
		options(options: ChartOptions, doNotDispatch?: boolean): Skeleton;
		margin(): ChartMargin;
		margin(margin: ChartMargin, doNotDispatch?: boolean): Skeleton;
		offset(): [number, number];
		offset(offset: Array<number>, doNotDispatch?: boolean): Skeleton;
		width(): number;
		width(value: number | string, doNotDispatch?: boolean): Skeleton;
		height(): number;
		height(value: number | string, doNotDispatch?: boolean): Skeleton;
		dimension(): [number, number];
		dimension(
		dimension: [number | string, number | string], doNotDispatch?: boolean
	): Skeleton;
		autoResize(mode?: string | boolean): string | boolean | void;
		autoResizeDetection(method?: string): string | void;
		autoResizeToAspectRatio(ratio?: number | boolean): number | boolean | void;
		on(eventName: string, listener: (...args: Array<any>) => void): void;
		hasData(): boolean;
		hasNonZeroArea(): boolean;
		mixin(fn: ChartMixin): void;
		resizeToFitContainer(mode: string | boolean, doNotDispatch?: boolean): void;
		resizeToAspectRatio(ratio: number, doNotDispatch?: boolean): void
	}

	declare export class Chartlet  {
		constructor(enterFunction?: ChartletEventFunction, updateFunction?: ChartletEventFunction, exitFunction?: ChartletEventFunction, customEventName?: Array<string>): this;
		getDispatcher(): d3.Dispatch;
		getCustomEventNames(): Array<string>;
		getPropertyValue(name: string, datum: any, datum_index: number): any;
		property(name: string): ChartletPropertyCallback;
		property(name: string, value: any): Chartlet;
		enter(sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;
		update(sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;
		exit(sel?: d3.Selection<any>, done?: string): (sel: d3.Selection<any>) => void;
		inheritPropertyFrom(
		parent_chartlet: Chartlet, parent_property_name: string, child_property_name?: string
	): void;
		inheritPropertiesFrom(
		parent_chartlet: Chartlet, parent_property_names: Array<string>, child_property_names?: Array<string>
	): void;
		publishEventsTo(dispatcher: d3.Dispatch): Chartlet;
		on(eventName: string, handlerFunction: ChartletEventFunction): void
	}

	declare export class LayerOrganizer  {
		constructor(container: d3.Selection<any>, tag?: string): this;
		create(
		config: string | Array<string> | LayerConfig | Array<LayerConfig>
	): d3.Selection<any> | Array<d3.Selection<any>>;
		get(name: string): d3.Selection<any>;
		has(name: string): boolean
	}

	
}

declare module 'factory' {
			declare export function createChart(
		defaultOptions: ChartOptions, customEvents: Array<string>, constructor: (skeleton: Skeleton) => void
	): (
		selector: string | Element, options?: ChartOptions, customEvents?: Array<string>
	) => Skeleton

		
}

declare module 'helper' {
			declare export function debounce(
		fn: (...args: Array<any>) => void, wait: number, immediate: boolean
	): (...args: Array<any>) => void

	declare export function extend(target: Object, ...args: Object[]): Object

	declare export function deepExtend(target: Object, ...args: Object[]): Object

	declare export function bindMouseEventsToDispatcher(selection: d3.Selection<any>, dispatch: d3.Dispatch, prefix: string): void

	declare export function removeAllChildren(selection: d3.Selection<any>, noTransition: boolean): d3.Selection<any>

	declare export function on(element: Element, type: string, listener: (...args: Array<any>) => void): void

	declare export function off(element: Element, type: string, listener: (...args: Array<any>) => void): void

	declare export function trim(str: string, characters: string): string

	declare export function dasherize(str: string): string

	declare export function $(s: Element | string): Element

	declare export function $$(s: Array<Node> | NodeList): Array<Element>

	declare export function isArray(value: any): boolean

	declare export function isNumber(value: any): boolean

	declare export function isObject(value: any): boolean

	declare export function isElement(o: any): boolean

	declare export function isFunction(functionToCheck: any): boolean

		
}
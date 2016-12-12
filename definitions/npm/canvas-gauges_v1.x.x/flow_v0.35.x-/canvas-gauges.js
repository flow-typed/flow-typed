

declare module 'canvas-gauges' {
		declare interface Document {
		gauges: CanvasGauges.Collection
	}

	declare interface Window {
		BaseGauge: CanvasGauges.BaseGauge,
		RadialGauge: CanvasGauges.RadialGauge,
		LinearGauge: CanvasGauges.LinearGauge
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$CanvasGauges' {
	declare export type FontStyle = "normal" | "italic" | "oblique";

	declare export type FontWeight = "normal" | "bold" | "bolder" | "lighter" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

	declare export type RenderTarget = string | HTMLElement;

	declare export type MajorTicks = string[] | number[];

	declare export interface AnimationRule {
		(percent: number): number
	}

	declare export interface Highlight {
		from: number,
		to: number,
		color: string
	}

	declare export interface GenericOptions {
		renderTo: RenderTarget,
		width?: number,
		height?: number,
		minValue?: number,
		maxValue?: number,
		value?: number,
		units?: string | boolean,
		majorTicks?: MajorTicks,
		minorTicks?: number,
		strokeTicks?: boolean,
		animatedValue?: boolean,
		animateOnInit?: boolean,
		title?: string | boolean,
		borders?: boolean,
		valueInt?: number,
		valueDec?: number,
		majorTicksInt?: number,
		majorTicksDec?: number,
		animation?: boolean,
		animationDuration?: number,
		animationRule?: string | AnimationRule,
		colorPlate?: string,
		colorMajorTicks?: string,
		colorMinorTicks?: string,
		colorTitle?: string,
		colorUnits?: string,
		colorNumbers?: string,
		colorNeedle?: string,
		colorNeedleEnd?: string,
		colorValueText?: string,
		colorValueTextShadow?: string,
		colorBorderShadow?: string,
		colorBorderOuter?: string,
		colorBorderOuterEnd?: string,
		colorBorderMiddle?: string,
		colorBorderMiddleEnd?: string,
		colorBorderInner?: string,
		colorBorderInnerEnd?: string,
		colorValueBoxRect?: string,
		colorValueBoxRectEnd?: string,
		colorValueBoxBackground?: string,
		colorValueBoxShadow?: string,
		colorNeedleShadowUp?: string,
		colorNeedleShadowDown?: string,
		needle?: boolean,
		needleShadow?: boolean,
		needleType?: string,
		needleStart?: number,
		needleEnd?: number,
		needleWidth?: number,
		borderOuterWidth?: number,
		borderMiddleWidth?: number,
		borderInnerWidth?: number,
		borderShadowWidth?: number,
		valueBox?: boolean,
		valueBoxWidth?: number,
		valueBoxStroke?: number,
		valueText?: string,
		valueTextShadow?: boolean,
		valueBoxBorderRadius?: number,
		highlights?: Highlight[],
		highlightsWidth?: number,
		fontNumbers?: string,
		fontTitle?: string,
		fontUnits?: string,
		fontValue?: string,
		fontTitleSize?: number,
		fontValueSize?: number,
		fontUnitsSize?: number,
		fontNumbersSize?: number,
		fontTitleStyle?: FontStyle,
		fontValueStyle?: FontStyle,
		fontUnitsStyle?: FontStyle,
		fontNumbersStyle?: FontStyle,
		fontTitleWeight?: FontWeight,
		fontValueWeight?: FontWeight,
		fontUnitsWeight?: FontWeight,
		fontNumbersWeight?: FontWeight
	}

	declare export interface RadialGaugeOptions {
		ticksAngle?: number,
		startAngle?: number,
		colorNeedleCircleOuter?: string,
		colorNeedleCircleOuterEnd?: string,
		colorNeedleCircleInner?: string,
		colorNeedleCircleInnerEnd?: string,
		needleCircleSize?: number,
		needleCircleInner?: boolean,
		needleCircleOuter?: boolean,
		animationTarget?: string
	}

	declare export interface LinearGaugeOptions {
		borderRadius?: number,
		barBeginCircle?: number,
		barWidth?: number,
		barStrokeWidth?: number,
		barProgress?: boolean,
		colorBar?: string,
		colorBarEnd?: string,
		colorBarStroke?: string,
		colorBarProgress?: string,
		colorBarProgressEnd?: string,
		tickSide?: string,
		needleSide?: string,
		numberSide?: string,
		ticksWidth?: number,
		ticksWidthMinor?: number,
		ticksPadding?: number,
		barLength?: number
	}

	declare export interface DrawEventCallback {
		(percent: number): any
	}

	declare export interface EndEventCallback {
		(): any
	}

	declare export interface rules {
		linear: AnimationRule,
		quad: AnimationRule,
		dequad: AnimationRule,
		quint: AnimationRule,
		dequint: AnimationRule,
		cycle: AnimationRule,
		decycle: AnimationRule,
		bounce: AnimationRule,
		debounce: AnimationRule,
		elastic: AnimationRule,
		delastic: AnimationRule
	}

	declare export interface Collection {
		get: (id: number | string) => BaseGauge
	}

		declare export class Animation  {
		duration: number;
		rule: string | AnimationRule;
		draw: DrawEventCallback;
		end: EndEventCallback;
		rules: rules;
		constructor(rule?: string | AnimationRule, duration?: number, draw?: DrawEventCallback, end?: EndEventCallback): this;
		animate(draw?: DrawEventCallback, end?: EndEventCallback): any;
		destroy(): any
	}

	declare export class SmartCanvas  {
		element: HTMLCanvasElement;
		elementClone: HTMLCanvasElement;
		context: CanvasRenderingContext2D;
		contextClone: CanvasRenderingContext2D;
		drawWidth: number;
		drawHeight: number;
		drawX: number;
		drawY: number;
		minSide: number;
		width: number;
		height: number;
		constructor(element: HTMLCanvasElement, width?: number, height?: number): this;
		init(): any;
		onRedraw(): any;
		destroy(): any;
		commit(): SmartCanvas;
		redraw(): SmartCanvas;
		pixelRatio: number;
		redraw(): any;
		collection: Array<SmartCanvas>
	}

	declare export class DomObserver  {
		Type: BaseGauge;
		mutationsObserved: boolean;
		isObservable: boolean;
		options: GenericOptions;
		element: string;
		type: string;
		constructor(options: GenericOptions, element: string, type: string): this;
		isValidNode(node: Node | HTMLElement): boolean;
		traverse(): any;
		observe(records: MutationRecord[]): any;
		process(node: Node | HTMLElement): BaseGauge;
		parse(value: any): any;
		toDashed(camelCase: string): string;
		toAttributeName(str: string): string;
		domReady(handler: Function): any
	}

	declare export class BaseGauge  {
		type: BaseGauge;
		options: GenericOptions;
		canvas: SmartCanvas;
		animation: Animation;
		value: number;
		constructor(options: GenericOptions): this;
		update(options: GenericOptions): BaseGauge;
		destroy(): any;
		draw(): BaseGauge;
		initialize(type: string, options: GenericOptions): any
	}

	declare export class RadialGauge extends BaseGauge {
		type: RadialGauge;
		options: RadialGaugeOptions;
		constructor(options: RadialGaugeOptions): this;
		draw(): RadialGauge
	}

	declare export class LinearGauge extends BaseGauge {
		type: LinearGauge;
		options: LinearGaugeOptions;
		constructor(options: LinearGaugeOptions): this;
		draw(): LinearGauge
	}

	
}
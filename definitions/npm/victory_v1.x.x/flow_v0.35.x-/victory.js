

declare module 'victory' {
	declare export type AnimationStyle = {
		[key: string]: string | number
	};

	declare export type AnimationData = AnimationStyle | AnimationStyle[];

	declare export type AnimationEasing = "back" | "backIn" | "backOut" | "backInOut" | "bounce" | "bounceIn" | "bounceOut" | "bounceInOut" | "circle" | "circleIn" | "circleOut" | "circleInOut" | "linear" | "linearIn" | "linearOut" | "linearInOut" | "cubic" | "cubicIn" | "cubicOut" | "cubicInOut" | "elastic" | "elasticIn" | "elasticOut" | "elasticInOut" | "exp" | "expIn" | "expOut" | "expInOut" | "poly" | "polyIn" | "polyOut" | "polyInOut" | "quad" | "quadIn" | "quadOut" | "quadInOut" | "sin" | "sinIn" | "sinOut" | "sinInOut";

	declare type StringOrNumberOrCallback = string | number | {
		(): string | number
	};

	declare type TextAnchorType = "start" | "middle" | "end" | "inherit";

	declare type VerticalAnchorType = "start" | "middle" | "end";

	declare type DomainPropType = [number, number] | {
		x: [number, number],
		y: [number, number]
	};

	declare type DomainPaddingPropType = number | {
		x?: number,
		y?: number
	};

	declare type ScalePropType = "linear" | "time" | "log" | "sqrt";

	declare type CategoryPropType = string[] | {
		x: string[],
		y: string[]
	};

	declare type DataGetterPropType = number | string | string[] | {
		(data: any): number | string | string[]
	};

	declare type InterpolationPropType = "basis" | "basisClosed" | "basisOpen" | "bundle" | "cardinal" | "cardinalClosed" | "cardinalOpen" | "catmullRom" | "catmullRomClosed" | "catmullRomOpen" | "linear" | "linearClosed" | "monotoneX" | "monotoneY" | "natural" | "radial" | "step" | "stepAfter" | "stepBefore";

	declare type ColorScalePropType = "greyscale" | "qualitative" | "heatmap" | "warm" | "cool" | "red" | "green" | "blue" | string[];

	declare type ScatterSymbolType = "circle" | "diamond" | "plus" | "square" | "star" | "triangleDown" | "triangleUp";

	declare export interface VictoryStyleInterface {
		parent?: React.CSSProperties,
		data?: React.CSSProperties,
		labels?: React.CSSProperties
	}

	declare export interface VictoryAnimationProps {
		children?: (style: AnimationStyle) => React.ReactElement<any>,
		duration?: number,
		easing?: AnimationEasing,
		delay?: number,
		onEnd?: () => void,
		data?: AnimationData
	}

	declare export interface VictoryLabelProps {
		angle?: string | number,
		capHeight?: StringOrNumberOrCallback,
		datum?: {
		
	},
		data?: any[],
		events?: React.DOMAttributes,
		text?: StringOrNumberOrCallback,
		children?: StringOrNumberOrCallback,
		lineHeight?: StringOrNumberOrCallback,
		style?: React.CSSProperties,
		textAnchor?: TextAnchorType | {
		(): TextAnchorType
	},
		verticalAnchor?: VerticalAnchorType | {
		(): VerticalAnchorType
	},
		transform?: string | {
		
	} | {
		(): string | {
		
	}
	},
		x?: number,
		y?: number,
		dx?: StringOrNumberOrCallback,
		dy?: StringOrNumberOrCallback
	}

	declare export interface VictoryContainerProps {
		style?: React.CSSProperties,
		height?: number,
		width?: number,
		events?: React.DOMAttributes,
		title?: string,
		desc?: string
	}

	declare export interface VictoryThemeDefinition {
		area?: VictoryStyleInterface,
		axis?: {
		axis: React.CSSProperties,
		axisLabel: React.CSSProperties,
		grid: React.CSSProperties,
		ticks: React.CSSProperties,
		tickLabels: React.CSSProperties
	},
		bar?: VictoryStyleInterface,
		candlestick?: VictoryStyleInterface & {
		props: {
		width: number,
		height: number,
		candleColors: {
		positive: string,
		negative: string
	}
	}
	},
		line?: VictoryStyleInterface,
		pie?: {
		props: {
		width: number,
		height: number,
		colorScale: string[]
	},
		style: VictoryStyleInterface
	},
		scatter?: VictoryStyleInterface,
		props?: {
		width: number,
		height: number,
		colorScale: string[]
	}
	}

	declare interface VictoryThemeInterface {
		material: VictoryThemeDefinition
	}

	declare export interface AnimatePropTypeInterface {
		duration: number,
		onEnd?: () => void,
		onExit?: {
		duration?: number,
		before?: (datum: any) => AnimationStyle
	},
		onEnter?: {
		duration?: number,
		before?: (datum: any) => AnimationStyle,
		after?: (datum: any) => AnimationStyle
	}
	}

	declare interface EventCallbackInterface<TTarget, TEventKey> {
		childName?: string,
		target?: TTarget,
		eventKey?: TEventKey,
		mutation: (props: any) => any
	}

	declare export interface EventPropTypeInterface<TTarget, TEventKey> {
		childName?: string,
		target: TTarget,
		eventKey?: TEventKey,
		eventHandlers: {
		[key: string]: {
		(event: React.SyntheticEvent): EventCallbackInterface<TTarget, TEventKey>
	} | {
		(event: React.SyntheticEvent): EventCallbackInterface<TTarget, TEventKey>[]
	}
	}
	}

	declare interface D3Scale {
		domain: () => any,
		range: () => any,
		copy: () => any
	}

	declare interface VictoryCommonProps {
		animate?: AnimatePropTypeInterface,
		name?: string,
		height?: number,
		padding?: number | {
		top?: number,
		bottom?: number,
		left?: number,
		right?: number
	},
		scale?: ScalePropType | D3Scale | {
		x?: ScalePropType | D3Scale,
		y?: ScalePropType | D3Scale
	},
		standalone?: boolean,
		width?: number,
		containerComponent?: React.ReactElement<any>,
		theme?: VictoryThemeDefinition,
		groupComponent?: React.ReactElement<any>
	}

	declare interface VictoryDatableProps {
		categories?: CategoryPropType,
		data?: any[],
		dataComponent?: React.ReactElement<any>,
		domain?: DomainPropType,
		x?: DataGetterPropType,
		y?: DataGetterPropType
	}

	declare interface VictoryLabableProps {
		labelComponent?: React.ReactElement<any>
	}

	declare interface VictoryMultiLabeableProps {
		labels?: string[] | {
		(data: any): string
	}
	}

	declare interface VictorySingleLabableProps {
		label?: string | {
		(data: any): string
	}
	}

	declare export interface VictoryAreaProps {
		events?: EventPropTypeInterface<"data" | "labels" | "parent", "all">[],
		interpolation?: InterpolationPropType,
		samples?: number,
		style?: VictoryStyleInterface
	}

	declare export interface VictoryAxisProps {
		axisComponent?: React.ReactElement<any>,
		axisLabelComponent?: React.ReactElement<any>,
		crossAxis?: boolean,
		dependentAxis?: boolean,
		domain?: DomainPropType,
		events?: EventPropTypeInterface<"axis" | "axisLabel" | "grid" | "ticks" | "tickLabels" | "parent", number | string>[],
		gridComponent?: React.ReactElement<any>,
		label?: any,
		offsetX?: number,
		offsetY?: number,
		orientation?: "top" | "bottom" | "left" | "right",
		style?: {
		parent?: React.CSSProperties,
		axis?: React.CSSProperties,
		axisLabel?: React.CSSProperties,
		grid?: React.CSSProperties,
		ticks?: React.CSSProperties,
		tickLabels?: React.CSSProperties
	},
		tickComponent?: React.ReactElement<any>,
		tickCount?: number,
		tickLabelComponent?: React.ReactElement<any>,
		tickFormat?: any[] | {
		(data: any): string | number
	},
		tickValues?: any[]
	}

	declare export interface VictoryBarProps {
		events?: EventPropTypeInterface<"data" | "labels" | "parent", number | string>[],
		eventKey?: StringOrNumberOrCallback,
		horizontal?: boolean,
		style?: VictoryStyleInterface
	}

	declare export interface VictoryChartProps {
		domain?: DomainPropType,
		domainPadding?: DomainPaddingPropType,
		events?: EventPropTypeInterface<string, StringOrNumberOrCallback>[],
		eventKey?: StringOrNumberOrCallback,
		style?: React.CSSProperties
	}

	declare export interface VictoryGroupProps {
		categories?: CategoryPropType,
		colorScale?: ColorScalePropType,
		domain?: DomainPropType,
		domainPadding?: DomainPaddingPropType,
		events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback>[],
		eventKey?: StringOrNumberOrCallback,
		horizontal?: boolean,
		style?: VictoryStyleInterface
	}

	declare export interface VictoryLineProps {
		events?: EventPropTypeInterface<"data" | "labels" | "parent", number | string>[],
		interpolation?: InterpolationPropType,
		samples?: number,
		style?: VictoryStyleInterface
	}

	declare export interface VictoryScatterProps {
		bubbleProperty?: string,
		events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback>[],
		eventKey?: StringOrNumberOrCallback,
		maxBubbleSize?: number,
		samples?: number,
		size?: number | {
		(data: any): number
	},
		style?: VictoryStyleInterface,
		symbol?: ScatterSymbolType | {
		(data: any): ScatterSymbolType
	}
	}

	declare export interface VictoryStackProps {
		categories?: CategoryPropType,
		colorScale?: ColorScalePropType,
		domain?: DomainPropType,
		domainPadding?: DomainPaddingPropType,
		events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback>[],
		eventKey?: StringOrNumberOrCallback,
		horizontal?: boolean,
		style?: VictoryStyleInterface,
		xOffset?: number
	}

	declare export interface VictoryPieProps {
		colorScale?: ColorScalePropType,
		data?: any[],
		dataComponent?: React.ReactElement<any>,
		endAngle?: number,
		events?: EventPropTypeInterface<"data" | "labels" | "parent", StringOrNumberOrCallback | string[] | number[]>[],
		eventKey?: StringOrNumberOrCallback,
		innerRadius?: number,
		cornerRadius?: number,
		padAngle?: number,
		startAngle?: number,
		style?: VictoryStyleInterface,
		x?: DataGetterPropType,
		y?: DataGetterPropType
	}

		declare export class VictoryAnimation extends React$Component<VictoryAnimationProps, any> {
		
	}

	declare export class VictoryLabel extends React$Component<VictoryLabelProps, any> {
		
	}

	declare export class VictoryContainer extends React$Component<VictoryContainerProps, any> {
		
	}

	declare export class VictoryArea extends React$Component<VictoryAreaProps, any> {
		
	}

	declare export class VictoryAxis extends React$Component<VictoryAxisProps, any> {
		
	}

	declare export class VictoryBar extends React$Component<VictoryBarProps, any> {
		
	}

	declare export class VictoryChart extends React$Component<VictoryChartProps, any> {
		
	}

	declare export class VictoryGroup extends React$Component<VictoryGroupProps, any> {
		
	}

	declare export class VictoryLine extends React$Component<VictoryLineProps, any> {
		
	}

	declare export class VictoryScatter extends React$Component<VictoryScatterProps, any> {
		
	}

	declare export class VictoryStack extends React$Component<VictoryStackProps, any> {
		
	}

	declare export class VictoryPie extends React$Component<VictoryPieProps, any> {
		
	}

	
}
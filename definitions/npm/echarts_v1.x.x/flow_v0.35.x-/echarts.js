

declare module 'echarts' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ECharts' {
		declare interface EChartOption {
		title?: EChartTitleOption,
		legend?: Object,
		grid?: Object,
		xAxis?: Object,
		yAxis?: Object,
		polar?: Object,
		radiusAxis?: Object,
		angleAxis?: Object,
		radar?: Object,
		dataZoom?: Array<Object>,
		visualMap?: Array<Object>,
		tooltip?: Object,
		toolbox?: Object,
		geo?: Object,
		parallel?: Object,
		parallelAxis?: Object,
		timeline?: Object,
		series?: Array<Object>,
		color?: Array<Object>,
		backgroundColor?: string,
		textStyle?: Object,
		animation?: boolean,
		animationDuration?: number,
		animationEasing?: string,
		animationDurationUpdate?: number,
		animationEasingUpdate?: string
	}

	declare interface EChartTitleOption {
		show?: boolean,
		text?: string,
		link?: string,
		target?: string,
		textStyle?: Object,
		subtext?: string,
		sublink?: string,
		subtarget?: string,
		subtextStyle?: Object,
		padding?: number,
		itemGap?: number,
		zlevel?: number,
		z?: number,
		left?: string,
		top?: string,
		right?: string,
		bottom?: string,
		backgroundColor?: string,
		borderColor?: string,
		borderWidth?: number,
		shadowBlur?: number,
		shadowColor?: number,
		shadowOffsetX?: number,
		shadowOffsetY?: number
	}

	declare function init(
		dom: HTMLDivElement | HTMLCanvasElement, theme?: Object | string, opts?: {
		devicePixelRatio?: number,
		renderer?: string
	}
	): ECharts

	declare function connect(group: string | Array<string>): void

	declare function disConnect(group: string): void

	declare function dispose(target: ECharts | HTMLDivElement | HTMLCanvasElement): void

	declare function getInstanceByDom(target: HTMLDivElement | HTMLCanvasElement): void

	declare function registerMap(mapName: string, geoJson: Object, specialAreas?: Object): void

	declare function registerTheme(themeName: string, theme: Object): void

	declare class ECharts  {
		group: string;
		setOption(
		option: EChartOption, notMerge?: boolean, notRefreshImmediately?: boolean
	): void;
		getWidth(): number;
		getHeight(): number;
		getDom(): HTMLCanvasElement | HTMLDivElement;
		getOption(): Object;
		resize(): void;
		dispatchAction(payload: Object): void;
		on(eventName: string, handler: Function, context?: Object): void;
		off(eventName: string, handler?: Function): void;
		showLoading(type?: string, opts?: Object): void;
		hideLoading(): void;
		getDataURL(
		opts: {
		type?: string,
		pixelRatio?: number,
		backgroundColor?: string
	}
	): string;
		getConnectedDataURL(
		opts: {
		type: string,
		pixelRatio: number,
		backgroundColor: string
	}
	): string;
		clear(): void;
		isDisposed(): boolean;
		dispose(): void
	}

	
}
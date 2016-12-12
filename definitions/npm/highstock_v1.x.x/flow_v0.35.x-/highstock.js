

declare module 'highstock' {
		declare interface JQuery {
		highcharts(type: "StockChart"): ___Highstock.ChartObject,
		highcharts(type: "StockChart", options: ___Highstock.Options): JQuery,
		highcharts(
		type: "StockChart", options: ___Highstock.Options, callback: (chart: ___Highstock.ChartObject) => void
	): JQuery,
		highcharts(type: string): ___Highcharts.ChartObject,
		highcharts(type: string, options: ___Highcharts.Options): JQuery,
		highcharts(
		type: string, options: ___Highcharts.Options, callback: (chart: ___Highcharts.ChartObject) => void
	): JQuery
	}

			
}

declare module 'npm$namespace$___Highstock' {
		declare interface ChartObject {
		options: Options
	}

	declare interface NavigatorOptions {
		adaptToUpdatedData?: boolean,
		baseSeries?: string | number,
		enabled?: boolean,
		handles?: {
		backgroundColor?: string,
		borderColor?: string
	},
		height?: number,
		margin?: number,
		maskFill?: string,
		maskInside?: boolean,
		outlineColor?: string,
		outlineWidth?: number,
		series?: ___Highcharts.IndividualSeriesOptions,
		xAxis?: ___Highcharts.AxisOptions,
		yAxis?: ___Highcharts.AxisOptions
	}

	declare interface RangeSelectorButton {
		type: string,
		count?: number,
		text: string,
		dataGrouping?: any
	}

	declare interface RangeSelectorOptions {
		allButtonsEnabled?: boolean,
		buttonSpacing?: number,
		buttonTheme?: any,
		buttons?: RangeSelectorButton[],
		enabled?: boolean,
		inputBoxBorderColor?: string,
		inputBoxHeight?: number,
		inputBoxWidth?: number,
		inputDateFormat?: string,
		inputDateParser?: (date: string) => number,
		inputEditDateFormat?: string,
		inputEnabled?: boolean,
		inputPosition?: {
		align?: string,
		verticalAlign?: string,
		x?: number,
		y?: number
	},
		inputStyle?: ___Highcharts.CSSObject,
		labelStyle?: ___Highcharts.CSSObject,
		selected?: number
	}

	declare interface ScrollbarOptions {
		barBackgroundColor?: string,
		barBorderColor?: string,
		barBorderRadius?: number,
		barBorderWidth?: number,
		buttonArrowColor?: string,
		buttonBackgroundColor?: string,
		buttonBorderColor?: string,
		buttonBorderRadius?: number,
		buttonBorderWidth?: number,
		enabled?: boolean,
		height?: number,
		liveRedraw?: boolean,
		minWidth?: number,
		rifleColor?: string,
		trackBackgroundColor?: string,
		trackBorderColor?: string,
		trackBorderRadius?: number,
		trackBorderWidth?: number
	}

	declare interface Options {
		navigator?: NavigatorOptions,
		rangeSelector?: RangeSelectorOptions,
		scrollbar?: ScrollbarOptions
	}

	declare interface Chart {
		new (options: Options): ChartObject,
		new (options: Options, callback: (chart: ChartObject) => void): ChartObject
	}

	declare interface Static {
		StockChart: Chart
	}

			
}
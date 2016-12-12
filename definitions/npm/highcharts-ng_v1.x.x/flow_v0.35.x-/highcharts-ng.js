

declare module 'highcharts-ng' {
		declare interface HighChartsNGConfig {
		options: ___Highcharts.Options,
		series?: ___Highcharts.IndividualSeriesOptions[],
		title?: {
		text?: string
	},
		loading?: boolean | string,
		xAxis?: {
		currentMin?: number,
		currentMax?: number,
		title?: {
		text?: string
	}
	},
		useHighStocks?: boolean,
		size?: {
		width?: number,
		height?: number
	},
		func?: (chart: ___Highcharts.ChartObject) => void
	}

	declare interface HighChartsNGChart {
		getHighcharts(): ___Highcharts.ChartObject
	}

			
}
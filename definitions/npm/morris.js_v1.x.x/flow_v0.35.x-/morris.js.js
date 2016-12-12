import type { MorrisStatic } from 'npm$namespace$morris'

declare module 'morris.js' {
					
}

declare module 'npm$namespace$morris' {
	declare type AutoAlways = "auto" | "always";

	declare type Interval = "decade" | "year" | "month" | "week" | "day" | "hour" | "30min" | "15min" | "10min" | "5min" | "minute" | "30sec" | "15sec" | "10sec" | "5sec" | "second";

	declare interface IChartOptions {
		element: any,
		resize?: boolean
	}

	declare interface IGridChartOptions {
		data: any[],
		xkey: string,
		ykeys: string[],
		labels: string[],
		hideHover?: boolean | AutoAlways,
		axes?: boolean,
		grid?: boolean,
		gridTextColor?: string,
		gridTextSize?: number,
		gridTextFamily?: string,
		gridTextWeight?: string
	}

	declare interface ILineOptions {
		lineColors?: string[],
		lineWidth?: number,
		pointSize?: number,
		pointFillColors?: string[],
		pointStrokeColors?: string[],
		ymax?: number | string,
		ymin?: number | string,
		smooth?: boolean,
		hoverCallback?: (index: number, options: ILineOptions, content: string, row: any) => string,
		parseTime?: boolean,
		postUnits?: string,
		preUnits?: string,
		dateFormat?: (timestamp: number) => string,
		xLabels?: Interval,
		xLabelFormat?: (date: Date) => string,
		xLabelAngle?: number,
		yLabelFormat?: (val: any) => string,
		goals?: number[],
		goalStrokeWidth?: number,
		goalLineColors?: string[],
		events?: string[],
		eventStrokeWidth?: number,
		eventLineColors?: string[],
		continuousLine?: boolean,
		fillOpacity?: number
	}

	declare interface IAreaOptions {
		behaveLikeLine?: boolean
	}

	declare interface IBarOptions {
		barColors?: string[],
		stacked?: boolean,
		hoverCallback?: (index: number, options: IBarOptions, content: string, row: any) => string
	}

	declare interface IDonutData {
		label: string,
		value: number
	}

	declare interface IDonutOptions {
		data: IDonutData[],
		colors?: string[],
		formatter?: (y: number, data: IDonutData) => string
	}

		declare class GridChart  {
		setData(data: any[], redraw?: boolean): void
	}

	declare class DonutChart  {
		setData(data: IDonutData[], redraw?: boolean): void
	}

	declare class MorrisStatic  {
		Line: (options: ILineOptions) => GridChart;
		Area: (options: IAreaOptions) => GridChart;
		Bar: (options: IBarOptions) => GridChart;
		Donut: (options: IDonutOptions) => DonutChart
	}

	
}

declare module 'morris' {
					declare module.exports: undefined


}
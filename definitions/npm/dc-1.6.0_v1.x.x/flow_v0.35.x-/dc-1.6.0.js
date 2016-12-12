

declare module 'dc-1.6.0' {
					
}

declare module 'npm$namespace$dc' {
		declare interface IGetSet<T, V> {
		(): T,
		(t: T): V
	}

	declare export interface ILegendwidget {
		x: IGetSet<number, number>,
		y: IGetSet<number, number>,
		gap: IGetSet<number, number>,
		itemHeight: IGetSet<number, number>,
		horizontal: IGetSet<boolean, boolean>,
		legendWidth: IGetSet<number, number>,
		itemWidth: IGetSet<number, number>
	}

	declare export interface IBaseChart<T> {
		width: IGetSet<number, T>,
		height: IGetSet<number, T>,
		minWidth: IGetSet<number, T>,
		minHeight: IGetSet<number, T>,
		dimension: IGetSet<any, T>,
		group: IGetSet<any, T>,
		transitionDuration: IGetSet<number, T>,
		colors: IGetSet<string[], T>,
		keyAccessor: IGetSet<(d: any) => number, T>,
		valueAccessor: IGetSet<(d: any) => number, T>,
		label: IGetSet<(l: any) => string, T>,
		renderLabel: IGetSet<boolean, T>,
		renderlet: (fnctn: (t: T) => void) => T,
		title: IGetSet<(t: string) => string, T>,
		filter: IGetSet<any, T>,
		filterAll: () => void,
		expireCache: () => void,
		legend: (l: ILegendwidget) => T,
		chartID: () => number,
		options: (o: Object) => void,
		select: (selector: d3.Selection<any>) => d3.Selection<any>,
		selectAll: (selector: d3.Selection<any>) => d3.Selection<any>
	}

	declare export interface IEvents {
		trigger(fnctn: () => void, delay?: number): void
	}

	declare export interface IListener<T> {
		on: {
		(event: "preRender", fnctn: (c: T) => any): T,
		(event: "postRender", fnctn: (c: T) => any): T,
		(event: "preRedraw", fnctn: (c: T) => any): T,
		(event: "postRedraw", fnctn: (c: T) => any): T,
		(event: "filtered", fnctn: (c: T, filter: any) => any): T,
		(event: "zoomed", fnctn: (c: T, filter: any) => any): T,
		(event: string, fnctn: (c: T, ...args: any[]) => any): T
	}
	}

	declare export interface ImarginObj {
		top: number,
		right: number,
		bottom: number,
		left: number
	}

	declare export interface IMarginable<T> {
		margins: IGetSet<ImarginObj, T>
	}

	declare export interface IAbstractColorChart<T> {
		colorDomain: IGetSet<number[], T>
	}

	declare export interface IAbstractStackableChart<T> {
		stack: (group: IChartGroup, name?: string, retriever?: (d: Object) => number) => T
	}

	declare export interface IAbstractCoordinateGridChart<T> {
		x: IGetSet<any, T>,
		y: IGetSet<any, T>,
		elasticY: IGetSet<boolean, T>,
		xAxis: IGetSet<d3.svg.Axis, T>,
		yAxis: IGetSet<d3.svg.Axis, T>,
		yAxisPadding: IGetSet<number, T>,
		xAxisPadding: IGetSet<number, T>,
		renderHorizontalGridLines: IGetSet<boolean, T>
	}

	declare export interface IAbstractBubblechart<T> {
		r: IGetSet<any, T>,
		radiusValueAccessor: IGetSet<(d: any) => number, T>
	}

	declare export interface columnFunction {
		(rowinfo: any): string
	}

	declare export interface sortbyFunction {
		(rowinfo: any): any
	}

	declare export interface orderFunction {
		(a: T, b: T): number
	}

	declare export interface IBubblechart {
		
	}

	declare export interface IPiechart {
		radius: IGetSet<number, IPiechart>,
		minAngleForLabel: IGetSet<number, IPiechart>
	}

	declare export interface IBarchart {
		centerBar: (b: boolean) => IBarchart,
		gap: (gapBetweenBars: number) => IBarchart
	}

	declare export interface ILinechart {
		
	}

	declare export interface IDatachart {
		size: IGetSet<number, IDatachart>,
		columns: IGetSet<columnFunction[], IDatachart>,
		sortBy: IGetSet<sortbyFunction, IDatachart>,
		order: IGetSet<orderFunction, IDatachart>
	}

	declare export interface IRowchart {
		
	}

	declare export interface IChartGroup {
		
	}

	declare export function filterAll(chartGroup?: IChartGroup): void

	declare export function renderAll(chartGroup?: IChartGroup): void

	declare export function redrawAll(chartGroup?: IChartGroup): void

	declare export function bubbleChart(cssSel: string): IBubblechart

	declare export function pieChart(cssSel: string): IPiechart

	declare export function barChart(cssSel: string): IBarchart

	declare export function lineChart(cssSel: string): ILinechart

	declare export function dataTable(cssSel: string): IDatachart

	declare export function rowChart(cssSel: string): IRowchart

		
}
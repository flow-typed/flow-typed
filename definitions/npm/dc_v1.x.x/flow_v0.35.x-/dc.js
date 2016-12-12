import type { Base } from 'npm$namespace$DC'

declare module 'dc' {
					declare module.exports: Base


}

declare module 'npm$namespace$DC' {
		declare export interface IGetSet<T, V> {
		(): T,
		(t: T): V
	}

	declare export interface IBiGetSet<T, R, V> {
		(): T,
		(t: T, r?: R): V
	}

	declare export interface IGetSetComputed<T, R, V> {
		(): R,
		(t: T): V
	}

	declare export interface Scale<T> {
		(x: any): T,
		domain(values: any[]): Scale<T>,
		domain(): any[],
		range(values: T[]): Scale<T>,
		range(): T[]
	}

	declare export interface Accessor<T, V> {
		(datum: T, index?: number): V
	}

	declare export interface UnitFunction {
		(start: number, end: number, domain?: Array<any>): number | Array<any>
	}

	declare export interface FloatPointUnits {
		precision(precision: number): UnitFunction
	}

	declare export interface Units {
		integers: UnitFunction,
		ordinal: UnitFunction,
		fp: FloatPointUnits
	}

	declare export interface Events {
		trigger(fn: () => void, delay?: number): void
	}

	declare export interface Errors {
		Exception(msg: string): void,
		InvalidStateException(msg: string): void
	}

	declare export interface Filter {
		isFiltered(value: any): boolean
	}

	declare export interface Filters {
		RangedFilter(low: any, high: any): Filter,
		TwoDimensionalFilter(arr: Array<any>): Filter,
		RangedTwoDimensionalFilter(arr: Array<any>): Filter
	}

	declare export interface Logger {
		enableDebugLog: boolean,
		warn(msg: string): void,
		debug(msg: string): void,
		deprecate(fn: Function, msg: string): void
	}

	declare export interface Printers {
		filters(filters: Array<any>): string,
		filter(filter: any): string
	}

	declare export interface Round {
		floor(n: number): number,
		ceil(n: number): number,
		round(n: number): number
	}

	declare export interface Utils {
		printSingleValue(filter: any): string,
		add(l: any, r: any): any,
		subtract(l: any, r: any): any,
		isNumber(n: any): boolean,
		isFloat(n: any): boolean,
		isInteger(n: any): boolean,
		isNegligible(n: any): boolean,
		clamp(n: number, min: number, max: number): number,
		uniqueId(): number,
		nameToId(name: string): string,
		appendOrSelect(parent: d3.Selection<any>, selector: string, tag: any): d3.Selection<any>,
		safeNumber(n: any): number
	}

	declare export interface Legend {
		x: IGetSet<number, number>,
		y: IGetSet<number, number>,
		gap: IGetSet<number, number>,
		itemHeight: IGetSet<number, number>,
		horizontal: IGetSet<boolean, boolean>,
		legendWidth: IGetSet<number, number>,
		itemWidth: IGetSet<number, number>,
		autoItemWidth: IGetSet<boolean, boolean>,
		render: () => void
	}

	declare export interface BaseMixin<T> {
		width: IGetSet<number, T>,
		height: IGetSet<number, T>,
		minWidth: IGetSet<number, T>,
		minHeight: IGetSet<number, T>,
		dimension: IGetSet<any, T>,
		data: IGetSetComputed<(group: any) => Array<any>, Array<any>, T>,
		group: IGetSet<any, T>,
		ordering: IGetSet<Accessor<any, any>, T>,
		filterAll(): void,
		select(selector: d3.Selection<any> | string): d3.Selection<any>,
		selectAll(selector: d3.Selection<any> | string): d3.Selection<any>,
		anchor(
		anchor: BaseMixin<any> | d3.Selection<any> | string, chartGroup?: string
	): d3.Selection<any>,
		anchorName(): string,
		svg: IGetSet<d3.Selection<any>, d3.Selection<any>>,
		resetSvg(): void,
		filterPrinter: IGetSet<(filters: Array<any>) => string, T>,
		turnOnControls(): void,
		turnOffControls(): void,
		transitionDuration: IGetSet<number, T>,
		render(): void,
		redraw(): void,
		redrawGroup(): void,
		hasFilterHandler: IGetSet<(filters: Array<any>, filter: any) => boolean, T>,
		hasFilter(filter?: any): boolean,
		removeFilterHandler: IGetSet<(filters: Array<any>) => Array<any>, T>,
		addFilterHandler: IGetSet<(filters: Array<any>) => Array<any>, T>,
		resetFilterHandler: IGetSet<(filters: Array<any>) => Array<any>, T>,
		filter: IGetSet<any, T>,
		filters(): Array<any>,
		onClick(datum: any): void,
		filterHandler: IGetSet<(dimension: any, filter: any) => any, T>,
		keyAccessor: IGetSet<Accessor<any, any>, T>,
		valueAccessor: IGetSet<Accessor<any, any>, T>,
		label: IGetSet<Accessor<any, string>, T>,
		renderLabel: IGetSet<boolean, T>,
		title: IGetSet<Accessor<any, string>, T>,
		renderTitle: IGetSet<boolean, T>,
		chartGroup: IGetSet<string, T>,
		expireCache(): T,
		legend: IGetSet<Legend, T>,
		options(optionsObject: any): T,
		renderlet(fn: (chart: T) => any): T,
		on(event: "renderlet", fn: (chart: T, filter: any) => any): T,
		on(event: "pretransition", fn: (chart: T, filter: any) => any): T,
		on(event: "preRender", fn: (chart: T) => any): T,
		on(event: "postRender", fn: (chart: T) => any): T,
		on(event: "preRedraw", fn: (chart: T) => any): T,
		on(event: "postRedraw", fn: (chart: T) => any): T,
		on(event: "filtered", fn: (chart: T, filter: any) => any): T,
		on(event: "zoomed", fn: (chart: T, filter: any) => any): T,
		on(event: string, fn: (chart: T, ...args: any[]) => any): T
	}

	declare export interface Margins {
		left: number,
		top: number,
		right: number,
		bottom: number
	}

	declare export interface MarginMixin<T> {
		margins: IGetSet<Margins, T>
	}

	declare export interface ColorMixin<T> {
		colors: IGetSet<Array<string> | Scale<string | d3.Color>, T>,
		ordinalColors(r: Array<string>): void,
		linearColors(r: Array<string>): void,
		colorAccessor: IGetSet<Accessor<any, string>, T>,
		colorDomain: IGetSet<Array<any>, T>,
		calculateColorDomain(): void,
		getColor(datum: any, index?: number): string,
		colorCalculator: IGetSet<Accessor<any, string>, T>
	}

	declare export interface CoordinateGridMixin<T> {
		rangeChart: IGetSet<BaseMixin<any>, T>,
		zoomScale: IGetSet<Array<any>, T>,
		zoomOutRestrict: IGetSet<boolean, T>,
		g: IGetSet<d3.Selection<any>, T>,
		mouseZoomable: IGetSet<boolean, T>,
		chartBodyG(): d3.Selection<any>,
		x: IGetSet<(n: any) => any, T>,
		xUnits: IGetSet<UnitFunction, T>,
		xAxis: IGetSet<d3.svg.Axis, T>,
		elasticX: IGetSet<boolean, T>,
		xAxisPadding: IGetSet<number, T>,
		xUnitCount(): number,
		useRightYAxis: IGetSet<boolean, T>,
		isOrdinal(): boolean,
		xAxisLabel: IBiGetSet<string, number, T>,
		yAxisLabel: IBiGetSet<string, number, T>,
		y: IGetSet<Scale<number>, T>,
		yAxis: IGetSet<d3.svg.Axis, T>,
		elasticY: IGetSet<boolean, T>,
		renderHorizontalGridLines: IGetSet<boolean, T>,
		renderVerticalGridLines: IGetSet<boolean, T>,
		xAxisMin(): any,
		xAxisMax(): any,
		yAxisMin(): any,
		yAxisMax(): any,
		yAxisPadding: IGetSet<number, T>,
		round: IGetSet<(value: any) => any, T>,
		clipPadding: IGetSet<number, T>,
		focus(range?: Array<any>): void,
		brushOn: IGetSet<boolean, T>
	}

	declare export interface StackMixin<T> {
		stack(group: any, name?: string, accessor?: Accessor<any, any>): void,
		hidableStacks: IGetSet<boolean, T>,
		hideStack(name: string): void,
		showStack(name: string): void,
		stackLayout: IGetSet<d3.layout.Stack<any[], any>, T>
	}

	declare export interface CapMixin<T> {
		cap: IGetSet<number, T>,
		othersLabel: IGetSet<string, T>,
		othersGrouper: IGetSet<(data: Array<any>) => Array<any>, T>
	}

	declare export interface BubbleMixin<T> {
		r: IGetSet<Scale<number>, T>,
		radiusValueAccessor: IGetSet<Accessor<any, number>, T>,
		minRadiusWithLabel: IGetSet<number, T>,
		maxBubbleRelativeSize: IGetSet<number, T>
	}

	declare export interface PieChart {
		slicesCap: IGetSet<number, PieChart>,
		innerRadius: IGetSet<number, PieChart>,
		radius: IGetSet<number, PieChart>,
		cx: IGetSet<number, PieChart>,
		cy: IGetSet<number, PieChart>,
		minAngleForLabel: IGetSet<number, PieChart>
	}

	declare export interface BarChart {
		centerBar: IGetSet<boolean, BarChart>,
		barPadding: IGetSet<number, BarChart>,
		outerPadding: IGetSet<number, BarChart>,
		gap: IGetSet<number, BarChart>,
		alwaysUseRounding: IGetSet<boolean, BarChart>
	}

	declare export interface RenderDataPointOptions {
		fillOpacity: number,
		strokeOpacity: number,
		radius: number
	}

	declare export interface LineChart {
		interpolate: IGetSet<string, LineChart>,
		tension: IGetSet<number, LineChart>,
		defined: IGetSet<Accessor<any, boolean>, LineChart>,
		dashStyle: IGetSet<Array<number>, LineChart>,
		renderArea: IGetSet<boolean, LineChart>,
		dotRadius: IGetSet<number, LineChart>,
		renderDataPoints: IGetSet<RenderDataPointOptions | any, LineChart>
	}

	declare export interface DataCountWidgetHTML {
		all: string,
		some: string
	}

	declare export interface DataCountWidget {
		html: IGetSet<DataCountWidgetHTML, DataCountWidget>,
		formatNumber: IGetSet<Accessor<number, string>, DataCountWidget>
	}

	declare export interface DataTableWidget {
		size: IGetSet<number, DataTableWidget>,
		columns: IGetSet<Array<Accessor<any, any> | string | Array<Accessor<any, any> | string>>, DataTableWidget>,
		sortBy: IGetSet<Accessor<any, any>, DataTableWidget>,
		order: IGetSet<(a: any, b: any) => number, DataTableWidget>
	}

	declare export interface DataGridWidget {
		size: IGetSet<number, DataTableWidget>,
		html: IGetSet<Accessor<any, string>, DataTableWidget>,
		htmlGroup: IGetSet<Accessor<any, string>, DataTableWidget>,
		sortBy: IGetSet<Accessor<any, any>, DataTableWidget>,
		order: IGetSet<(a: any, b: any) => number, DataTableWidget>
	}

	declare export interface BubbleChart {
		elasticRadius: IGetSet<boolean, BubbleChart>
	}

	declare export interface ICompositeChart<T> {
		useRightAxisGridLines: IGetSet<boolean, ICompositeChart<T>>,
		childOptions: IGetSet<any, ICompositeChart<T>>,
		rightYAxisLabel: IGetSet<string, ICompositeChart<T>>,
		compose: IGetSet<Array<BaseMixin<any>>, ICompositeChart<T>>,
		children(): Array<BaseMixin<any>>,
		shareColors: IGetSet<boolean, ICompositeChart<T>>,
		shareTitle: IGetSet<boolean, ICompositeChart<T>>,
		rightY: IGetSet<(n: any) => any, ICompositeChart<T>>,
		rightYAxis: IGetSet<d3.svg.Axis, ICompositeChart<T>>
	}

	declare export interface CompositeChart {
		
	}

	declare export interface SeriesChart {
		chart: IGetSet<(c: any) => BaseMixin<any>, SeriesChart>,
		seriesAccessor: IGetSet<Accessor<any, any>, SeriesChart>,
		seriesSort: IGetSet<(a: any, b: any) => number, SeriesChart>,
		valueSort: IGetSet<(a: any, b: any) => number, SeriesChart>
	}

	declare export interface GeoChoroplethLayer {
		name: string,
		keyAccessor: Accessor<any, any>,
		data: any
	}

	declare export interface GeoChoroplethChart {
		overlayGeoJson(json: any, name: string, keyAccessor: Accessor<any, any>): void,
		projection: IGetSet<d3.geo.Projection, GeoChoroplethChart>,
		geoJsons(): Array<GeoChoroplethLayer>,
		geoPath(): d3.geo.Path,
		removeGeoJson(name: string): void
	}

	declare export interface BubbleOverlayChart {
		point(name: string, x: number, y: number): void
	}

	declare export interface RowChart {
		x: IGetSet<Scale<number>, RowChart>,
		renderTitleLabel: IGetSet<boolean, RowChart>,
		xAxis: IGetSet<d3.svg.Axis, RowChart>,
		fixedBarHeight: IGetSet<number, RowChart>,
		gap: IGetSet<number, RowChart>,
		elasticX: IGetSet<boolean, RowChart>,
		labelOffsetX: IGetSet<number, RowChart>,
		labelOffsetY: IGetSet<number, RowChart>,
		titleLabelOffsetX: IGetSet<number, RowChart>
	}

	declare export interface ScatterPlot {
		existenceAccessor: IGetSet<Accessor<any, boolean>, ScatterPlot>,
		symbol: IGetSet<d3.svg.Symbol<any>, ScatterPlot>,
		symbolSize: IGetSet<number, ScatterPlot>,
		highlightedSize: IGetSet<number, ScatterPlot>,
		hiddenSize: IGetSet<number, ScatterPlot>
	}

	declare export interface NumberDisplayWidgetHTML {
		one: string,
		some: string,
		none: string
	}

	declare export interface NumberDisplayWidget {
		html: IGetSet<NumberDisplayWidgetHTML, NumberDisplayWidget>,
		value(): string,
		formatNumber: IGetSet<Accessor<number, string>, NumberDisplayWidget>
	}

	declare export interface HeatMap {
		colsLabel: IGetSet<Accessor<any, string>, HeatMap>,
		rowsLabel: IGetSet<Accessor<any, string>, HeatMap>,
		rows: IGetSet<Array<any>, HeatMap>,
		cols: IGetSet<Array<any>, HeatMap>,
		boxOnClick: IGetSet<(d: any) => void, HeatMap>,
		xAxisOnClick: IGetSet<(d: any) => void, HeatMap>,
		yAxisOnClick: IGetSet<(d: any) => void, HeatMap>
	}

	declare export interface BoxPlot {
		boxPadding: IGetSet<number, BoxPlot>,
		outerPadding: IGetSet<number, BoxPlot>,
		boxWidth: IGetSet<number, BoxPlot>,
		tickFormat: IGetSet<Accessor<number, string>, BoxPlot>
	}

	declare export interface ChartRegistry {
		has(chart: BaseMixin<any>): boolean,
		register(chart: BaseMixin<any>, group?: string): void,
		deregister(chart: BaseMixin<any>, group?: string): void,
		clear(group?: string): void,
		list(group?: string): Array<BaseMixin<any>>
	}

	declare export interface Base {
		chartRegistry: ChartRegistry,
		registerChart(chart: BaseMixin<any>, group?: string): void,
		deregisterChart(chart: BaseMixin<any>, group?: string): void,
		hasChart(chart: BaseMixin<any>): boolean,
		deregisterAllCharts(group?: string): void,
		filterAll(group?: string): void,
		refocusAll(group?: string): void,
		renderAll(group?: string): void,
		redrawAll(group?: string): void,
		disableTransitions: boolean,
		transition(
		selections: d3.Selection<any>, duration: number, callback: (s: d3.Selection<any>) => void
	): void,
		units: Units,
		events: Events,
		errors: Errors,
		instanceOfChart(object: any): boolean,
		logger: Logger,
		override(object: any, fnName: string, newFn: Function): void,
		printers: Printers,
		pluck(n: string, f?: Accessor<any, any>): Accessor<any, any>,
		round: Round,
		utils: Utils,
		legend(): Legend,
		pieChart(parent: string, chartGroup?: string): PieChart,
		barChart(parent: string, chartGroup?: string): BarChart,
		lineChart(parent: string, chartGroup?: string): LineChart,
		dataCount(parent: string, chartGroup?: string): DataCountWidget,
		dataTable(parent: string, chartGroup?: string): DataTableWidget,
		dataGrid(parent: string, chartGroup?: string): DataGridWidget,
		bubbleChart(parent: string, chartGroup?: string): BubbleChart,
		compositeChart(parent: string, chartGroup?: string): CompositeChart,
		seriesChart(parent: string, chartGroup?: string): SeriesChart,
		geoChoroplethChart(parent: string, chartGroup?: string): GeoChoroplethChart,
		bubbleOverlayChart(parent: string, chartGroup?: string): BubbleOverlayChart,
		rowChart(parent: string, chartGroup?: string): RowChart,
		scatterPlot(parent: string, chartGroup?: string): ScatterPlot,
		numberDisplay(parent: string, chartGroup?: string): NumberDisplayWidget,
		heatMap(parent: string, chartGroup?: string): HeatMap,
		boxPlot(parent: string, chartGroup?: string): BoxPlot
	}

			
}
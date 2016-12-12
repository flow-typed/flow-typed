

declare module 'dygraphs' {
				declare class Dygraph  {
		constructor(container: HTMLElement | string, data: dygraphs.Data | (() => dygraphs.Data), options?: dygraphs.Options): this;
		isZoomed(axis?: "x" | "y"): boolean;
		toString(): string;
		getOption(name: string, seriesName?: string): any;
		getOptionForAxis(name: string, axis: dygraphs.Axis): any;
		rollPeriod(): number;
		xAxisRange(): [number, number];
		xAxisExtremes(): [number, number];
		yAxisRange(idx?: number): [number, number];
		yAxisRanges(): [number, number][];
		toDomCoords(x: number, y: number, axis?: number): [number, number];
		toDomXCoord(x: number): number;
		toDomYCoord(y: number, axis?: number): number;
		toDataCoords(x: number, y: number, axis?: number): [number, number];
		toDataXCoord(x: number): number;
		toDataYCoord(y: number, axis?: number): number;
		toPercentYCoord(y: number, axis?: number): number;
		toPercentXCoord(x: number): number;
		numColumns(): number;
		numRows(): number;
		getValue(row: number, col: number): number;
		destroy(): void;
		getColors(): string[];
		getPropertiesForSeries(series_name: string): dygraphs.SeriesProperties;
		resetZoom(): void;
		getArea(): dygraphs.Area;
		eventToDomCoords(event: MouseEvent): [number, number];
		setSelection(row: number | boolean, seriesName?: string, locked?: boolean): void;
		clearSelection(): void;
		getSelection(): number;
		getHighlightSeries(): string;
		isSeriesLocked(): boolean;
		numAxes(): number;
		updateOptions(input_attrs: dygraphs.Options, block_redraw?: boolean): void;
		resize(width: number, height: number): void;
		adjustRoll(length: number): void;
		visibility(): boolean[];
		setVisibility(num: number, value: boolean): void;
		setAnnotations(ann: dygraphs.Annotation[], suppressDraw?: boolean): void;
		annotations(): dygraphs.Annotation[];
		getLabels(): string[];
		indexFromSetName(name: string): number;
		ready(callback: (g: Dygraph) => any): void;
		SECONDLY: number;
		TWO_SECONDLY: number;
		FIVE_SECONDLY: number;
		TEN_SECONDLY: number;
		THIRTY_SECONDLY: number;
		MINUTELY: number;
		TWO_MINUTELY: number;
		FIVE_MINUTELY: number;
		TEN_MINUTELY: number;
		THIRTY_MINUTELY: number;
		HOURLY: number;
		TWO_HOURLY: number;
		SIX_HOURLY: number;
		DAILY: number;
		TWO_DAILY: number;
		WEEKLY: number;
		MONTHLY: number;
		QUARTERLY: number;
		BIANNUAL: number;
		ANNUAL: number;
		DECADAL: number;
		CENTENNIAL: number;
		NUM_GRANULARITIES: number;
		defaultInteractionModel: any;
		DOTTED_LINE: number[];
		DASHED_LINE: number[];
		DOT_DASH_LINE: number[];
		Plotters: {
		errorPlotter: any,
		linePlotter: any,
		fillPlotter: any
	}
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$dygraphs' {
	declare type DataArray = number[][];

	declare type Data = string | DataArray | google.visualization.DataTable;

	declare type Axis = "x" | "y" | "y2";

	declare interface PerSeriesOptions {
		axis?: "y1" | "y2",
		color?: string,
		drawPoints?: boolean,
		fillAlpha?: number,
		fillGraph?: boolean,
		highlightCircleSize?: number,
		pointSize?: number,
		showInRangeSelector?: boolean,
		stepPlot?: boolean,
		strokeBorderWidth?: number,
		strokeBorderColor?: string,
		strokePattern?: number[],
		strokeWidth?: number
	}

	declare interface PerAxisOptions {
		axisLabelColor?: string,
		axisLabelFontSize?: number,
		axisLabelFormatter?: (
		v: number | Date, granularity: number, opts: (name: string) => any, dygraph: Dygraph
	) => any,
		axisLabelWidth?: number,
		axisLineColor?: string,
		axisLineWidth?: number,
		axisTickSize?: number,
		drawAxis?: boolean,
		gridLineColor?: string,
		gridLinePattern?: number[],
		gridLineWidth?: number,
		independentTicks?: boolean,
		logscale?: boolean,
		maxNumberWidth?: number,
		pixelsPerLabel?: number,
		sigFigs?: number,
		ticker?: (
		min: number, max: number, pixels: number, opts: (name: string) => any, dygraph: Dygraph, vals: number[]
	) => Array<{
		v: number,
		label: string
	}>,
		valueFormatter?: (
		v: number, opts: (name: string) => any, seriesName: string, dygraph: Dygraph, row: number, col: number
	) => any,
		valueRange?: number[],
		drawGrid?: boolean,
		labelsKMB?: boolean,
		labelsKMG2?: boolean
	}

	declare interface Options {
		animatedZooms?: boolean,
		annotationClickHandler?: (
		annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent
	) => any,
		annotationDblClickHandler?: (
		annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent
	) => any,
		annotationMouseOutHandler?: (
		annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent
	) => any,
		annotationMouseOverHandler?: (
		annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent
	) => any,
		axes?: {
		x?: PerAxisOptions,
		y?: PerAxisOptions,
		y2?: PerAxisOptions
	},
		clickCallback?: (e: MouseEvent, xval: number, points: Point[]) => any,
		colorSaturation?: number,
		colorValue?: number,
		colors?: string[],
		connectSeparatedPoints?: boolean,
		customBars?: boolean,
		dataHandler?: any,
		dateWindow?: number[],
		delimiter?: string,
		digitsAfterDecimal?: number,
		displayAnnotations?: boolean,
		drawAxesAtZero?: boolean,
		drawCallback?: (dygraph: Dygraph, is_initial: boolean) => any,
		drawGapEdgePoints?: boolean,
		drawHighlightPointCallback?: (
		g: Dygraph, seriesName: string, canvasContext: CanvasRenderingContext2D, cx: number, cy: number, color: string, pointSize: number
	) => any,
		drawPointCallback?: (
		g: Dygraph, seriesName: string, canvasContext: CanvasRenderingContext2D, cx: number, cy: number, color: string, pointSize: number
	) => any,
		errorBars?: boolean,
		file?: Data,
		fractions?: boolean,
		height?: number,
		hideOverlayOnMouseOut?: boolean,
		highlightCallback?: (
		event: MouseEvent, xval: number, points: Point[], row: number, seriesName: string
	) => any,
		highlightSeriesBackgroundAlpha?: number,
		highlightSeriesOpts?: PerSeriesOptions,
		includeZero?: boolean,
		interactionModel?: any,
		isZoomedIgnoreProgrammaticZoom?: boolean,
		labels?: string[],
		labelsDiv?: string | HTMLElement,
		labelsDivStyles?: {
		[cssProperty: string]: string
	},
		labelsDivWidth?: number,
		labelsSeparateLines?: boolean,
		labelsShowZeroValues?: boolean,
		labelsUTC?: boolean,
		legend?: "always" | "follow" | "onmouseover",
		panEdgeFraction?: number,
		plotter?: any,
		plugins?: any[],
		pointClickCallback?: (e: MouseEvent, point: Point) => any,
		rangeSelectorHeight?: number,
		rangeSelectorPlotFillColor?: string,
		rangeSelectorPlotStrokeColor?: string,
		rightGap?: number,
		rollPeriod?: number,
		series?: {
		[seriesName: string]: PerSeriesOptions
	},
		showLabelsOnHighlight?: boolean,
		showRangeSelector?: boolean,
		showRoller?: boolean,
		sigma?: number,
		stackedGraph?: boolean,
		stackedGraphNaNFill?: string,
		title?: string,
		titleHeight?: number,
		underlayCallback?: (
		context: CanvasRenderingContext2D, area: dygraphs.Area, dygraph: Dygraph
	) => any,
		unhighlightCallback?: (event: MouseEvent) => any,
		visibility?: boolean[],
		width?: number,
		wilsonInterval?: boolean,
		xAxisHeight?: number,
		xLabelHeight?: number,
		xRangePad?: number,
		xValueParser?: (val: string) => number,
		xlabel?: string,
		y2label?: string,
		yLabelWidth?: number,
		yRangePad?: number,
		ylabel?: string,
		zoomCallback?: (minDate: number, maxDate: number, yRanges: [number, number][]) => any
	}

	declare interface SeriesProperties {
		name: string,
		column: number,
		visible: boolean,
		color: string,
		axis: number
	}

	declare interface Area {
		x: number,
		y: number,
		w: number,
		h: number
	}

	declare interface Point {
		idx: number,
		name: string,
		x?: number,
		xval?: number,
		y_bottom?: number,
		y?: number,
		y_stacked?: number,
		y_top?: number,
		yval_minus?: number,
		yval?: number,
		yval_plus?: number,
		yval_stacked?: number,
		annotation?: dygraphs.Annotation
	}

	declare interface Annotation {
		series: string,
		x?: number | string,
		xval?: number,
		shortText?: string,
		text?: string,
		icon?: string,
		width?: number,
		height?: number,
		cssClass?: string,
		tickHeight?: number,
		attachAtBottom?: boolean,
		div?: HTMLDivElement,
		clickHandler?: (
		annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent
	) => any,
		mouseOverHandler?: (
		annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent
	) => any,
		mouseOutHandler?: (
		annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent
	) => any,
		dblClickHandler?: (
		annotation: dygraphs.Annotation, point: Point, dygraph: Dygraph, event: MouseEvent
	) => any
	}

			
}
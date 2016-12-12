

declare module 'smoothie' {
		declare export interface ITimeSeriesOptions {
		resetBounds?: boolean,
		resetBoundsInterval?: number
	}

	declare export interface ITimeSeriesPresentationOptions {
		strokeStyle?: string,
		fillStyle?: string,
		lineWidth?: number
	}

	declare export interface IGridOptions {
		fillStyle?: string,
		lineWidth?: number,
		strokeStyle?: string,
		millisPerLine?: number,
		sharpLines?: boolean,
		verticalSections?: number,
		borderVisible?: boolean
	}

	declare export interface ILabelOptions {
		disabled?: boolean,
		fillStyle?: string,
		fontSize?: number,
		fontFamily?: string,
		precision?: number
	}

	declare export interface IRange {
		min: number,
		max: number
	}

	declare export interface IHorizontalLine {
		value?: number,
		color?: string,
		lineWidth?: number
	}

	declare export interface IChartOptions {
		minValue?: number,
		maxValue?: number,
		maxValueScale?: number,
		yRangeFunction?: (range: IRange) => IRange,
		scaleSmoothing?: number,
		millisPerPixel?: number,
		enableDpiScaling?: boolean,
		yMinFormatter?: (min: number, precision: number) => string,
		yMaxFormatter?: (max: number, precision: number) => string,
		maxDataSetLength?: number,
		interpolation?: string,
		timestampFormatter?: (date: Date) => string,
		horizontalLines?: IHorizontalLine[],
		grid?: IGridOptions,
		labels?: ILabelOptions
	}

		declare export class TimeSeries  {
		constructor(options?: ITimeSeriesOptions): this;
		clear(): void;
		resetBounds(): void;
		append(timestamp: number, value: number, sumRepeatedTimeStampValues?: boolean): void;
		dropOldData(oldestValidTime: number, maxDataSetLength: number): void
	}

	declare export class SmoothieChart  {
		options: IChartOptions;
		constructor(chartOptions?: IChartOptions): this;
		addTimeSeries(series: TimeSeries, seriesOptions?: ITimeSeriesPresentationOptions): void;
		removeTimeSeries(series: TimeSeries): void;
		getTimeSeriesOptions(timeSeries: TimeSeries): ITimeSeriesPresentationOptions;
		bringToFront(timeSeries: TimeSeries): void;
		streamTo(canvas: HTMLCanvasElement, delayMillis?: number): void;
		start(): void;
		stop(): void;
		updateValueRange(): void;
		render(canvas?: HTMLCanvasElement, time?: number): void;
		timeFormatter(date: Date): string
	}

	
}
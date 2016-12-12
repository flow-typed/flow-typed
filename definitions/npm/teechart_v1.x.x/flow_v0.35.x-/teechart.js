

declare module 'teechart' {
					
}

declare module 'npm$namespace$Tee' {
		declare interface IPoint {
		x: number,
		y: number
	}

	declare interface IRectangle {
		x: number,
		y: number,
		width: number,
		height: number,
		contains(point: IPoint): boolean
	}

	declare interface ITool {
		active: boolean,
		chart: IChart,
		mousedown(event: <<UNKNOWN PARAM FORMAT>>): boolean,
		mousemove(event: <<UNKNOWN PARAM FORMAT>>): boolean,
		clicked(p: IPoint): boolean,
		draw(): void
	}

	declare interface IGradient {
		chart: IChart,
		visible: boolean,
		colors: string[],
		direction: string,
		stops: number[],
		offset: IPoint
	}

	declare interface IShadow {
		chart: IChart,
		visible: boolean,
		blur: number,
		color: string,
		width: number,
		height: number
	}

	declare interface IStroke {
		chart: IChart,
		fill: string,
		size: number,
		join: string,
		cap: string,
		dash: number[],
		gradient: IGradient
	}

	declare interface IFont {
		chart: IChart,
		style: string,
		gradient: IGradient,
		fill: string,
		stroke: IStroke,
		shadow: IShadow,
		textAlign: string,
		baseLine: string,
		getSize(): number,
		setSize(size: number): void
	}

	declare interface IImage {
		url: string,
		chart: IChart,
		visible: boolean
	}

	declare interface IFormat {
		font: IFont,
		gradient: IGradient,
		shadow: IShadow,
		stroke: IStroke,
		round: IPoint,
		transparency: number,
		image: IImage,
		fill: string,
		textHeight(text: string): number,
		textWidth(text: string): number,
		drawText(bounds: IRectangle, text: string),
		rectangle(x: number, y: number, width: number, height: number),
		poligon(points: IPoint[]),
		ellipse(x: number, y: number, width: number, height: number)
	}

	declare interface IMargins {
		left: number,
		top: number,
		right: number,
		bottom: number
	}

	declare interface IAnnotation {
		position: IPoint,
		margins: IMargins,
		items: IAnnotation[],
		bounds: IRectangle,
		visible: boolean,
		transparent: boolean,
		text: string,
		format: IFormat,
		add(text: string): IAnnotation,
		resize(): void,
		clicked(point: IPoint): boolean,
		draw(): void
	}

	declare interface IPanel {
		format: IFormat,
		transparent: boolean,
		margins: IMargins
	}

	declare interface ITitle {
		expand: boolean,
		padding: number,
		transparent: boolean
	}

	declare interface IPalette {
		colors: string[],
		get(index: number): string
	}

	declare interface IArrow {
		length: number,
		underline: boolean
	}

	declare interface IMarks {
		arrow: IArrow,
		series: ISeries,
		style: string,
		drawEvery: number,
		visible: boolean
	}

	declare interface ISeriesData {
		values: number[],
		labels: string[],
		source: any
	}

	declare interface ICursor {
		cursor: string
	}

	declare interface ISeriesNoBounds {
		data: ISeriesData,
		marks: IMarks,
		yMandatory: boolean,
		horizAxis: string,
		vertAxis: string,
		format: IFormat,
		hover: IFormat,
		visible: boolean,
		cursor: ICursor,
		over: number,
		palette: IPalette,
		colorEach: string,
		useAxes: boolean,
		decimals: number,
		title: string,
		toPercent(index: number): string,
		markText(index: number): string,
		valueText(index: number): string,
		associatedToAxis(axis: IAxis): boolean,
		calc(index: number, position: IPoint): void,
		clicked(position: IPoint): number,
		minXValue(): number,
		maxXValue(): number,
		minYValue(): number,
		maxYValue(): number,
		count(): number,
		addRandom(count: number, range?: number, x?: boolean): ISeries
	}

	declare interface ISeries {
		bounds(rectangle: IRectangle): void
	}

	declare interface IAxisLabels {
		chart: IChart,
		format: IFormat,
		decimals: number,
		padding: number,
		separation: number,
		visible: boolean,
		rotation: number,
		alternate: boolean,
		maxWidth: number,
		labelStyle: string,
		dateFormat: string,
		getLabel(value: number): string,
		width(value: number): number
	}

	declare interface IGrid {
		chart: IChart,
		format: IFormat,
		visible: boolean,
		lineDash: boolean
	}

	declare interface ITicks {
		chart: IChart,
		stroke: IStroke,
		visible: boolean,
		length: number
	}

	declare interface IMinorTicks {
		count: number
	}

	declare interface IAxisTitle {
		padding: number,
		transparent: boolean
	}

	declare interface IAxis {
		chart: IChart,
		visible: boolean,
		inverted: boolean,
		horizontal: boolean,
		otherSize: boolean,
		bounds: IRectangle,
		position: number,
		format: IFormat,
		custom: boolean,
		grid: IGrid,
		labels: IAxisLabels,
		ticks: ITicks,
		minorTicks: IMinorTicks,
		innerTicks: ITicks,
		title: IAxisTitle,
		automatic: boolean,
		minimum: number,
		maximum: number,
		increment: number,
		log: boolean,
		startPos: number,
		endPos: number,
		start: number,
		end: number,
		axisSize: number,
		scale: number,
		increm: number,
		calc(value: number): number,
		fromPos(position: number): number,
		fromSize(size: number): number,
		hasAnySeries(): boolean,
		scroll(delta: number): void,
		setMinMax(minimum: number, maximum: number): void
	}

	declare interface IAxes {
		chart: IChart,
		visible: boolean,
		left: IAxis,
		top: IAxis,
		right: IAxis,
		bottom: IAxis,
		items: IAxis[],
		add(horizontal: boolean, otherSide: boolean): IAxis
	}

	declare interface ISymbol {
		chart: IChart,
		format: IFormat,
		width: number,
		height: number,
		padding: number,
		visible: boolean
	}

	declare interface ILegend {
		chart: IChart,
		transparent: boolean,
		format: IFormat,
		title: IAnnotation,
		bounds: IRectangle,
		position: string,
		visible: boolean,
		inverted: boolean,
		padding: number,
		align: number,
		fontColor: boolean,
		dividing: IStroke,
		over: number,
		symbol: ISymbol,
		itemHeight: number,
		innerOff: number,
		legendStyle: string,
		textStyle: string,
		availRows(): number,
		itemsCount(): number,
		totalWidth(): number,
		showValues(): boolean,
		itemText(series: ISeries, index: number): string,
		isVertical(): boolean
	}

	declare interface IScroll {
		chart: IChart,
		active: boolean,
		enabled: boolean,
		direction: string,
		mouseButton: number,
		position: IPoint
	}

	declare interface ISeriesList {
		chart: IChart,
		items: ISeries[],
		anyUsesAxes(): boolean,
		clicked(position: IPoint): boolean,
		firstVisible(): ISeries
	}

	declare interface ITools {
		chart: IChart,
		items: ITool[],
		add(tool: ITool): ITool
	}

	declare interface IWall {
		format: IFormat,
		visible: boolean,
		bounds: IRectangle
	}

	declare interface IWalls {
		visible: boolean,
		left: IWall,
		right: IWall,
		bottom: IWall,
		back: IWall
	}

	declare interface IZoom {
		chart: IChart,
		active: boolean,
		direction: string,
		enabled: boolean,
		mouseButton: number,
		format: IFormat,
		reset(): void
	}

	declare interface IChart {
		addSeries(series: ISeries): ISeries,
		draw(context?: CanvasRenderingContext2D)
	}

	declare interface ICustomBar {
		sideMargins: number,
		useOrigin: boolean,
		origin: number,
		offset: number,
		barSize: number,
		barStyle: string,
		stacked: string
	}

	declare interface ISeriesPointer {
		chart: IChart,
		format: IFormat,
		visible: boolean,
		colorEach: boolean,
		style: string,
		width: number,
		height: number
	}

	declare interface ICustomSeries {
		pointer: ISeriesPointer,
		stacked: string,
		stairs: boolean
	}

	declare interface ILine {
		smooth: number
	}

	declare interface ISmoothLine {
		smooth: number
	}

	declare interface IArea {
		useOrigin: boolean,
		origin: number
	}

	declare interface IPie {
		donut: number,
		rotation: number,
		sort: string,
		orderAscending: boolean,
		explode: number[],
		concentric: boolean,
		calcPos(angle: number, position: IPoint): void
	}

	declare interface IBubbleData {
		radius: number[]
	}

	declare interface IBubble {
		data: IBubbleData
	}

	declare interface IGanttData {
		start: number[],
		x: number[],
		end: number[]
	}

	declare interface IGantt {
		data: IGanttData,
		dateFormat: string,
		colorEach: string,
		height: number,
		margin: IPoint,
		add(index: number, label: string, start: number, end: number): void,
		bounds(index: number, rectangle: IRectangle): void
	}

	declare interface ICandleData {
		open: number[],
		close: number[],
		high: number[],
		low: number[]
	}

	declare interface ICandle {
		data: ICandleData,
		higher: IFormat,
		lower: IFormat,
		style: string
	}

	declare interface IDragTool {
		series: ISeries
	}

	declare interface ICursorTool {
		direction: string,
		size: IPoint,
		followMouse: boolean,
		dragging: number,
		format: IFormat,
		horizAxis: IAxis,
		vertAxis: IAxis,
		render: string,
		over(point: IPoint): boolean,
		setRender(render: string): void
	}

	declare interface IToolTip {
		animated: number,
		autoHide: boolean,
		autoRedraw: boolean,
		currentSeries: ISeries,
		currentIndex: number,
		delay: number,
		hide(): void,
		refresh(series: ISeries, index: number): void
	}

		declare class Point extends IPoint {
		x: number;
		y: number
	}

	declare class Chart extends IChart {
		axes: IAxes;
		footer: ITitle;
		legend: ILegend;
		panel: IPanel;
		scroll: IScroll;
		series: ISeriesList;
		title: ITitle;
		tools: ITools;
		walls: IWalls;
		zoom: IZoom;
		bounds: IRectangle;
		canvas: HTMLCanvasElement;
		chartRect: IRectangle;
		palette: IPalette;
		constructor(canvas: string): this;
		addSeries(series: ISeries): ISeries;
		getSeries(index: number): ISeries;
		removeSeries(series: ISeries): void;
		draw(context?: CanvasRenderingContext2D);
		toImage(image: HTMLImageElement, format: string, quality: number): void
	}

	
}
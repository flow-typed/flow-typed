import type { Static } from 'npm$namespace$___Highcharts'

declare module 'highcharts' {
		declare interface JQuery {
		highcharts(): ___Highcharts.ChartObject,
		highcharts(options: ___Highcharts.Options): JQuery,
		highcharts(
		options: ___Highcharts.Options, callback: (chart: ___Highcharts.ChartObject) => void
	): JQuery
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$___Highcharts' {
	declare type Color = string | Gradient;

	declare interface Position {
		align?: string,
		verticalAlign?: string,
		x?: number,
		y?: number
	}

	declare interface DateTimeFormats {
		millisecond?: string,
		second?: string,
		minute?: string,
		hour?: string,
		day?: string,
		week?: string,
		month?: string,
		year?: string
	}

	declare interface AxisEvent {
		min: number,
		max: number
	}

	declare interface AxisLabels {
		align?: string,
		autoRotation?: number[],
		autoRotationLimit?: number,
		distance?: number,
		enabled?: boolean,
		format?: string,
		formatter?: () => string,
		maxStaggerLines?: number,
		overflow?: string | boolean,
		padding?: number,
		reserveSpace?: boolean,
		rotation?: number,
		staggerLines?: number,
		step?: number,
		style?: CSSObject,
		useHTML?: boolean,
		x?: number,
		y?: number,
		zIndex?: number
	}

	declare interface MousePlotEvents {
		click?: (event: Event) => void,
		mouseover?: (event: Event) => void,
		mouseout?: (event: Event) => void,
		mousemove?: (event: Event) => void
	}

	declare interface PlotLabel {
		align?: string,
		rotation?: number,
		style?: CSSObject,
		text?: string,
		textAlign?: string,
		useHTML?: boolean,
		verticalAlign?: string,
		x?: number,
		y?: number
	}

	declare interface PlotBands {
		borderColor?: Color,
		borderWidth?: number,
		color?: Color,
		events?: MousePlotEvents,
		from?: number,
		id?: string,
		innerRadius?: number | string,
		label?: PlotLabel,
		outerRadius?: number | string,
		thickness?: number | string,
		to?: number,
		zIndex?: number
	}

	declare interface PlotLines {
		color?: string | Gradient,
		dashStyle?: string,
		events?: MousePlotEvents,
		id?: string,
		label?: PlotLabel,
		value?: number,
		width?: number,
		zIndex?: number
	}

	declare interface AxisTitle {
		align?: string,
		enabled?: string,
		margin?: number,
		offset?: number,
		rotation?: number,
		style?: CSSObject,
		text?: string,
		x?: number,
		y?: number
	}

	declare interface AxisBreak {
		breakSize?: number,
		from?: number,
		repeat?: number,
		to?: number
	}

	declare interface AxisOptions {
		allowDecimals?: boolean,
		alternateGridColor?: string,
		breaks?: AxisBreak[],
		categories?: string[],
		ceiling?: number,
		crosshair?: CrosshairObject | boolean,
		dateTimeLabelFormats?: DateTimeFormats,
		endOnTick?: boolean,
		events?: {
		afterBreaks?: (event: Event) => void,
		afterSetExtremes?: (event: AxisEvent) => void,
		pointBreak?: (event: Event) => void,
		setExtremes?: (event: AxisEvent) => void
	},
		floor?: number,
		gridLineColor?: string,
		gridLineDashStyle?: string,
		gridLineWidth?: number,
		gridZIndex?: number,
		id?: string,
		labels?: AxisLabels,
		lineColor?: string | Gradient,
		lineWidth?: number,
		linkedTo?: number,
		max?: number,
		maxPadding?: number,
		maxZoom?: number,
		min?: number,
		minPadding?: number,
		minRange?: number,
		minTickInterval?: number,
		minorGridLineColor?: string,
		minorGridLineDashStyle?: string,
		minorGridLineWidth?: number,
		minorTickColor?: string,
		minorTickInterval?: number | string,
		minorTickLength?: number,
		minorTickPosition?: string,
		minorTickWidth?: number,
		offset?: number,
		opposite?: boolean,
		plotBands?: PlotBands[],
		plotLines?: PlotLines[],
		reversed?: boolean,
		showEmpty?: boolean,
		showFirstLabel?: boolean,
		showLastLabel?: boolean,
		stackLabels?: {
		align?: string,
		enabled?: boolean,
		format?: string,
		formatter?: Function,
		rotation?: number,
		style?: CSSObject,
		textAlign?: string,
		useHTML?: boolean,
		verticalAlign?: string,
		x?: number,
		y?: number
	},
		startOfWeek?: number,
		startOnTick?: boolean,
		tickAmount?: number,
		tickColor?: string,
		tickInterval?: number,
		tickLength?: number,
		tickPixelInterval?: number,
		tickPosition?: string,
		tickPositioner?: (min: number, max: number) => void,
		tickPositions?: number[],
		tickWidth?: number,
		tickmarkPlacement?: string,
		title?: AxisTitle,
		type?: string,
		units?: [[string, [number]]],
		visible?: boolean
	}

	declare interface ColorAxisDataClass {
		from?: number,
		to?: number,
		color?: string | Gradient,
		name?: string
	}

	declare interface ColorAxisOptions {
		dataClassColor?: string,
		dataClasses?: ColorAxisDataClass[],
		endOnTick?: boolean,
		events?: {
		afterSetExtremes?: (event: AxisEvent) => void,
		setExtremes?: (event: AxisEvent) => void
	},
		gridLineColor?: string,
		gridLineDashStyle?: string,
		gridLineWidth?: number,
		id?: string,
		labels?: AxisLabels,
		lineColor?: string | Gradient,
		lineWidth?: number,
		marker?: {
		animation?: boolean | Animation,
		color?: string | Gradient
	},
		max?: number,
		maxColor?: string,
		maxPadding?: number,
		min?: number,
		minColor?: string,
		minPadding?: number,
		minorGridLineColor?: string,
		minorGridLineDashStyle?: string,
		minorGridLineWidth?: number,
		minorTickColor?: string,
		minorTickInterval?: string | number,
		minorTickLength?: number,
		minorTickPosition?: string,
		minorTickWidth?: number,
		reversed?: boolean,
		showFirstLabel?: boolean,
		showLastLabel?: boolean,
		startOnTick?: boolean,
		stops?: [number, string][],
		tickColor?: string,
		tickInterval?: number,
		tickLength?: number,
		tickPixelInterval?: number,
		tickPosition?: string,
		tickPositioner?: (min: number, max: number) => void,
		tickPositions?: number[],
		tickWidth?: number,
		type?: string
	}

	declare interface Extremes {
		dataMax: number,
		dataMin: number,
		max: number,
		min: number
	}

	declare interface Animation {
		duration?: number,
		easing?: string
	}

	declare interface AddSeriesEvent {
		options: ChartOptions
	}

	declare interface AxisValueOptions {
		value: number
	}

	declare interface ChartClickEvent {
		xAxis: AxisValueOptions[],
		yAxis: AxisValueOptions[]
	}

	declare interface ChartDrilldownEvent {
		category?: number,
		point?: PointObject,
		points?: PointObject[],
		seriesOptions?: IndividualSeriesOptions
	}

	declare interface ChartSelectionEvent {
		xAxis: AxisOptions[],
		yAxis: AxisOptions[]
	}

	declare interface ChartEvents {
		addSeries?: (event: AddSeriesEvent) => boolean | void,
		afterPrint?: (event: Event) => void,
		beforePrint?: (event: Event) => void,
		click?: (event: ChartClickEvent) => void,
		drilldown?: (event: ChartDrilldownEvent) => void,
		drillup?: (event: Event) => void,
		load?: (event: Event) => void,
		redraw?: (event: Event) => void,
		selection?: (event: ChartSelectionEvent) => void
	}

	declare interface LinearGradient {
		x1: number,
		y1: number,
		x2: number,
		y2: number
	}

	declare interface Gradient {
		linearGradient?: LinearGradient | number[],
		radialGradient?: {
		cx: number,
		cy: number,
		r: number
	},
		stops?: any[][],
		brighten(alpha: number): Gradient,
		get(format: string): string,
		raw?: string,
		rgba?: number[],
		setOpacity(alpha: number): Gradient
	}

	declare interface ChartOptions3dFrame {
		color?: string | Gradient,
		size?: number
	}

	declare interface ChartOptions3d {
		alpha?: number,
		beta?: number,
		depth?: number,
		enabled?: boolean,
		frame?: {
		back?: ChartOptions3dFrame,
		bottom?: ChartOptions3dFrame,
		side?: ChartOptions3dFrame
	},
		viewDistance?: number
	}

	declare interface Shadow {
		color?: string | Gradient,
		offsetX?: number,
		offsetY?: number,
		opacity?: number,
		width?: number
	}

	declare interface ChartResetZoomButton {
		position?: Position,
		relativeTo?: string,
		theme?: ButtonStatesTheme
	}

	declare interface ButtonTheme {
		display?: string,
		fill?: string | Gradient,
		stroke?: string,
		stroke-width?: number,
		r?: number,
		style?: Object
	}

	declare interface ButtonStatesTheme {
		states?: {
		hover?: ButtonTheme,
		select?: ButtonTheme
	}
	}

	declare interface ChartOptions {
		alignTicks?: boolean,
		animation?: boolean | Animation,
		backgroundColor?: string | Gradient,
		borderColor?: string | Gradient,
		borderRadius?: number,
		borderWidth?: number,
		className?: string,
		defaultSeriesType?: string,
		events?: ChartEvents,
		height?: number,
		ignoreHiddenSeries?: boolean,
		inverted?: boolean,
		margin?: number | number[],
		marginBottom?: number,
		marginLeft?: number,
		marginRight?: number,
		marginTop?: number,
		options3d?: ChartOptions3d,
		panKey?: string,
		panning?: boolean,
		pinchType?: string,
		plotBackgroundColor?: string | Gradient,
		plotBackgroundImage?: string,
		plotBorderColor?: string,
		plotBorderWidth?: number,
		plotShadow?: boolean | Shadow,
		polar?: boolean,
		reflow?: boolean,
		renderTo?: string | HTMLElement,
		resetZoomButton?: ChartResetZoomButton,
		selectionMarkerFill?: string,
		shadow?: boolean | Shadow,
		showAxes?: boolean,
		spacing?: number[],
		spacingBottom?: number,
		spacingLeft?: number,
		spacingRight?: number,
		spacingTop?: number,
		style?: CSSObject,
		type?: string,
		width?: number,
		zoomType?: string
	}

	declare interface CSSObject {
		background?: string,
		border?: string,
		color?: string | Gradient,
		cursor?: string,
		font?: string,
		fontFamily?: string,
		fontSize?: string,
		fontWeight?: string,
		left?: string,
		opacity?: number,
		padding?: string | number,
		position?: string,
		top?: string,
		textShadow?: string
	}

	declare interface CreditsOptions {
		enabled?: boolean,
		href?: string,
		position?: Position,
		style?: Object,
		text?: string
	}

	declare interface DataSeriesMapping {
		[pointPropertyName: string]: number
	}

	declare interface DataOptions {
		columns?: [string | number][],
		complete?: (options: Options) => void,
		csv?: string,
		dateFormat?: string,
		decimalPoint?: string,
		endColumn?: number,
		endRow?: number,
		firstRowAsNames?: boolean,
		googleSpreadsheetKey?: string,
		googleSpreadsheetWorksheet?: string,
		itemDelimiter?: string,
		lineDelimiter?: string,
		parseDate?: (val: any) => number,
		parsed?: (columns: [string | number][]) => boolean | void,
		rows?: [string | number][],
		seriesMapping?: DataSeriesMapping[],
		startColumn?: number,
		startRow?: number,
		switchRowsAndColumns?: boolean,
		table?: string | HTMLElement
	}

	declare interface DrilldownOptions {
		activeAxisLabelStyle?: Object,
		activeDataLabelStyle?: Object,
		allowPointDrilldown?: boolean,
		animation?: boolean | Animation,
		drillUpButton?: {
		position?: Position,
		relativeTo?: string,
		theme?: ButtonStatesTheme
	},
		series?: IndividualSeriesOptions[]
	}

	declare interface MenuItem {
		text: string,
		onclick: () => void
	}

	declare interface Button {
		align?: string,
		enabled?: boolean,
		height?: number,
		symbolFill?: string,
		symbolSize?: number,
		symbolStroke?: string,
		symbolStrokeWidth?: number,
		symbolX?: number,
		symbolY?: number,
		text?: string,
		theme?: ButtonStatesTheme,
		verticalAlign?: string,
		width?: number,
		y?: number
	}

	declare interface ExportingContextButton {
		menuItems?: MenuItem[],
		onclick?: () => void,
		symbol?: string,
		x?: number
	}

	declare interface ExportingOptions {
		allowHTML?: boolean,
		buttons?: {
		contextButton?: ExportingContextButton
	},
		chartOptions?: Options,
		enabled?: boolean,
		error?: Function,
		fallbackToExportServer?: boolean,
		filename?: string,
		formAttributes?: any,
		libUrl?: string,
		printMaxWidth?: number,
		scale?: number,
		sourceHeight?: number,
		sourceWidth?: number,
		type?: string,
		url?: string,
		width?: number
	}

	declare interface GlobalObject {
		Date?: any,
		VMLRadialGradientURL?: string,
		canvasToolsURL?: string,
		getTimezoneOffset?: (timestamp: number) => number,
		timezoneOffset?: number,
		useUTC?: boolean
	}

	declare interface LabelItem {
		html: string,
		style: CSSObject
	}

	declare interface LabelsOptions {
		items?: LabelItem[],
		style?: CSSObject
	}

	declare interface LangObject {
		contextButtonTitle?: string,
		decimalPoint?: string,
		downloadJPEG?: string,
		downloadPDF?: string,
		downloadPNG?: string,
		downloadSVG?: string,
		drillUpText?: string,
		invalidDate?: string,
		loading?: string,
		months?: string[],
		noData?: string,
		numericSymbols?: string[],
		printChart?: string,
		resetZoom?: string,
		resetZoomTitle?: string,
		shortMonths?: string[],
		thousandsSep?: string,
		weekdays?: string[]
	}

	declare interface LegendNavigationOptions {
		activeColor?: string,
		animation?: boolean | Animation,
		arrowSize?: number,
		inactiveColor?: string,
		style?: CSSObject
	}

	declare interface LegendTitleOptions {
		style?: CSSObject,
		text?: string
	}

	declare interface LegendOptions {
		align?: string,
		backgroundColor?: string | Gradient,
		borderColor?: string | Gradient,
		borderRadius?: number,
		borderWidth?: number,
		enabled?: boolean,
		floating?: boolean,
		itemDistance?: number,
		itemHiddenStyle?: CSSObject,
		itemHoverStyle?: CSSObject,
		itemMarginBottom?: number,
		itemMarginTop?: number,
		itemStyle?: CSSObject,
		itemWidth?: number,
		labelFormat?: string,
		labelFormatter?: () => string,
		layout?: string,
		lineHeight?: number,
		margin?: number,
		maxHeight?: number,
		navigation?: LegendNavigationOptions,
		padding?: number,
		reversed?: boolean,
		rtl?: boolean,
		shadow?: boolean | Shadow,
		style?: CSSObject,
		symbolHeight?: number,
		symbolPadding?: number,
		symbolRadius?: number,
		symbolWidth?: number,
		title?: LegendTitleOptions,
		useHTML?: boolean,
		verticalAlign?: string,
		width?: number,
		x?: number,
		y?: number
	}

	declare interface LoadingOptions {
		hideDuration?: number,
		labelStyle?: CSSObject,
		showDuration?: number,
		style?: Object
	}

	declare interface NavigationOptions {
		buttonOptions?: Button,
		menuItemHoverStyle?: Object,
		menuItemStyle?: Object,
		menuStyle?: Object
	}

	declare interface NoDataOptions {
		attr?: {
		
	},
		position?: Position,
		style?: CSSObject
	}

	declare interface PaneBackground {
		backgroundColor: string | Gradient,
		borderColor?: string | Gradient,
		borderWidth?: number,
		innerRadius?: number | string,
		outerRadius?: number | string,
		shape?: string
	}

	declare interface PaneOptions {
		background?: PaneBackground | PaneBackground[],
		center?: [number | string, number | string],
		endAngle?: number,
		size?: number | string,
		startAngle?: number
	}

	declare interface DataLabels {
		align?: string,
		allowOverlap?: boolean,
		backgroundColor?: string | Gradient,
		borderColor?: string | Gradient,
		borderRadius?: number,
		borderWidth?: number,
		className?: string,
		color?: string | Gradient,
		crop?: boolean,
		defer?: boolean,
		enabled?: boolean,
		format?: string,
		formatter?: () => string,
		inside?: boolean,
		overflow?: string,
		padding?: number,
		reserveSpace?: boolean,
		rotation?: number,
		shadow?: boolean | Shadow,
		shape?: string,
		style?: CSSObject,
		useHTML?: boolean,
		verticalAlign?: string,
		x?: number,
		y?: number,
		zIndex?: number
	}

	declare interface PieDataLabels {
		connectorColor?: string,
		connectorPadding?: number,
		connectorWidth?: number,
		distance?: number,
		softConnector?: boolean
	}

	declare interface AreaCheckboxEvent {
		checked: boolean,
		item: SeriesObject | PointObject
	}

	declare interface AreaClickEvent {
		point: PointObject
	}

	declare interface PlotEvents {
		afterAnimate?: (event: Event) => void,
		checkboxClick?: (event: AreaCheckboxEvent) => boolean | void,
		click?: (event: AreaClickEvent) => void,
		hide?: () => void,
		legendItemClick?: (event: Event) => boolean | void,
		mouseOut?: (event: Event) => void,
		mouseOver?: (event: Event) => void,
		show?: () => void
	}

	declare interface MarkerState {
		enabled?: boolean,
		fillColor?: string,
		lineColor?: string | Gradient,
		lineWidth?: number,
		radius?: number
	}

	declare interface MarkerHoverState {
		lineWidthPlus?: number,
		radiusPlus?: number
	}

	declare interface Marker {
		height?: number,
		states?: {
		hover?: MarkerHoverState,
		select?: MarkerState
	},
		symbol?: string,
		width?: number
	}

	declare interface PointEvents {
		click?: (event: Event) => boolean,
		mouseOut?: (event: Event) => void,
		mouseOver?: (event: Event) => void,
		remove?: (event: Event) => boolean | void,
		select?: (event: Event) => boolean | void,
		unselect?: (event: Event) => boolean | void,
		update?: (event: Event) => boolean | void,
		legendItemClick?: (event: Event) => boolean | void
	}

	declare interface Halo {
		attributes?: {
		
	},
		opacity?: number,
		size?: number
	}

	declare interface LineStates {
		enabled?: boolean,
		halo?: boolean | Halo,
		lineWidth?: number,
		lineWidthPlus?: number,
		marker?: Marker
	}

	declare interface BarStates {
		borderColor?: string | Gradient,
		brightness?: number,
		color?: string | Gradient,
		enabled?: boolean,
		halo?: boolean | Halo
	}

	declare interface PieStates {
		
	}

	declare interface AreaZone {
		color?: string | Gradient,
		dashStyle?: string,
		fillColor?: string,
		value?: number
	}

	declare interface RangeDataLabels {
		align?: string,
		allowOverlap?: boolean,
		backgroundColor?: string | Gradient,
		borderColor?: string | Gradient,
		borderRadius?: number,
		borderWidth?: number,
		color?: string | Gradient,
		crop?: boolean,
		defer?: boolean,
		enabled?: boolean,
		format?: string,
		formatter?: () => string,
		inside?: boolean,
		overflow?: string,
		padding?: number,
		rotation?: number,
		shadow?: boolean | Shadow,
		shape?: string,
		style?: CSSObject,
		useHTML?: boolean,
		verticalAlign?: string,
		xHigh?: number,
		xLow?: number,
		yHigh?: number,
		yLow?: number,
		zIndex?: number
	}

	declare interface Dial {
		backgroundColor?: string | Gradient,
		baseLength?: string,
		baseWidth?: number,
		borderColor?: string | Gradient,
		borderWidth?: number,
		radius?: string,
		rearLength?: string,
		topWidth?: number
	}

	declare interface Pivot {
		backgroundColor?: string | Gradient,
		borderColor?: string | Gradient,
		borderWidth?: number,
		radius?: number
	}

	declare interface TreeMapLevel {
		borderColor?: string | Gradient,
		borderDashStyle?: string,
		borderWidth?: number,
		color?: string | Gradient,
		dataLabels?: DataLabels,
		layoutAlgorithm?: string,
		layoutStartingDirection?: string,
		level?: number
	}

	declare interface SeriesChart {
		allowPointSelect?: boolean,
		animation?: boolean | Animation,
		color?: string | Gradient,
		connectEnds?: boolean,
		connectNulls?: boolean,
		cropThreshold?: number,
		cursor?: string,
		dashStyle?: string,
		dataLabels?: DataLabels,
		enableMouseTracking?: boolean,
		events?: PlotEvents,
		getExtremesFromAll?: boolean,
		keys?: string[],
		lineWidth?: number,
		linecap?: string,
		linkedTo?: string,
		marker?: Marker,
		negativeColor?: string,
		point?: {
		events: PointEvents
	},
		pointInterval?: number,
		pointIntervalUnit?: string,
		pointPlacement?: string | number,
		pointStart?: number,
		selected?: boolean,
		shadow?: boolean | Shadow,
		showCheckbox?: boolean,
		showInLegend?: boolean,
		softTreshold?: boolean,
		stacking?: string,
		states?: {
		hover?: LineStates
	},
		stickyTracking?: boolean,
		threshold?: number,
		tooltip?: SeriesTooltipOptions,
		turboThreshold?: number,
		visible?: boolean,
		zoneAxis?: string,
		zones?: AreaZone[]
	}

	declare interface AreaChart {
		fillColor?: string | Gradient,
		fillOpacity?: number,
		lineColor?: string | Gradient,
		negativeFillColor?: string,
		step?: string,
		trackByArea?: boolean
	}

	declare interface AreaRangeChart {
		dataLabels?: RangeDataLabels
	}

	declare interface AreaSplineChart {
		
	}

	declare interface AreaSplineRangeChart {
		
	}

	declare interface BarChart {
		borderColor?: string | Gradient,
		borderRadius?: number,
		borderWidth?: number,
		colorByPoint?: boolean,
		colors?: string[],
		depth?: number,
		edgeColor?: string,
		edgeWidth?: number,
		groupPadding?: number,
		groupZPadding?: number,
		grouping?: boolean,
		maxPointWidth?: number,
		minPointLength?: number,
		pointPadding?: string | number,
		pointRange?: number,
		pointWidth?: number,
		states?: {
		hover?: BarStates
	}
	}

	declare interface BoxPlotChart {
		fillColor?: string,
		groupPadding?: number,
		grouping?: boolean,
		linkedTo?: string,
		medianColor?: string,
		medianWidth?: number
	}

	declare interface BubbleChart {
		displayNegative?: boolean,
		maxSize?: string | number,
		minSize?: string | number,
		negativeColor?: string,
		sizeBy?: string,
		sizeByAbsoluteValues?: boolean,
		zMax?: number,
		zMin?: number,
		zThreshold?: number
	}

	declare interface ColumnChart {
		
	}

	declare interface ColumnRangeChart {
		dataLabels?: RangeDataLabels
	}

	declare interface ErrorBarChart {
		colorByPoint?: boolean,
		colors?: string[],
		depth?: number,
		edgeColor?: string,
		edgeWidth?: number,
		groupZPadding?: number,
		linkedTo?: string,
		maxPointWidth?: number,
		pointPadding?: number,
		pointRange?: number,
		pointWidth?: number,
		states?: {
		hover?: BarStates
	},
		stemColor?: string,
		stemDashStyle?: string,
		stemWidth?: number,
		whiskerColor?: string,
		whiskerLength?: number | string,
		whiskerWidth?: number
	}

	declare interface FunnelChart {
		borderColor?: string | Gradient,
		borderWidth?: number,
		center?: [string | number, string | number],
		colors?: string[],
		dataLabels?: PieDataLabels,
		depth?: number,
		height?: number | string,
		minSize?: number,
		neckHeight?: number | string,
		neckWidth?: number | string,
		reversed?: boolean,
		slicedOffset?: number,
		states?: {
		hover?: PieStates
	},
		width?: number | string
	}

	declare interface GaugeChart {
		datalabels?: DataLabels,
		dial?: Dial,
		overshoot?: number,
		pivot?: Pivot,
		wrap?: boolean
	}

	declare interface HeatMapChart {
		borderColor?: string | Gradient,
		borderRadius?: number,
		borderWidth?: number,
		colorByPoint?: boolean,
		colors?: string[],
		colsize?: number,
		cropTreshold?: number,
		maxPointWidth?: number,
		rowsize?: number,
		states?: {
		hover?: BarStates
	}
	}

	declare interface LineChart {
		step?: boolean | string
	}

	declare interface PieChart {
		borderColor?: string | Gradient,
		borderWidth?: number,
		center?: [string | number, string | number],
		colors?: string[],
		dataLabels?: PieDataLabels,
		depth?: number,
		endAngle?: number,
		ignoreHiddenPoint?: boolean,
		innerSize?: number | string,
		minSize?: number,
		size?: number | string,
		slicedOffset?: number,
		startAngle?: number,
		states?: {
		hover?: PieStates
	}
	}

	declare interface PolygonChart {
		lineWidth?: number
	}

	declare interface PyramidChart {
		borderColor?: string | Gradient,
		borderWidth?: number,
		center?: [string | number, string | number],
		colors?: string[],
		dataLabels?: PieDataLabels,
		depth?: number,
		height?: number | string,
		minSize?: number,
		reversed?: boolean,
		slicedOffset?: number,
		states?: {
		hover?: PieStates
	},
		width?: number | string
	}

	declare interface ScatterChart {
		
	}

	declare interface SolidGaugeChart {
		overshoot?: number,
		wrap?: boolean
	}

	declare interface SplineChart {
		
	}

	declare interface TreeMapChart {
		allowDrillToNode?: boolean,
		alternateStartingDirection?: boolean,
		borderColor?: string | Gradient,
		borderWidth?: number,
		colorByPoint?: boolean,
		colors?: string[],
		interactByLeaf?: boolean,
		layoutAlgorithm?: string,
		layoutStartingDirection?: string,
		levelIsConstant?: boolean,
		levels?: TreeMapLevel[],
		maxPointWidth?: number,
		sortIndex?: number,
		states?: {
		hover?: BarStates
	}
	}

	declare interface WaterFallChart {
		dashStyle?: string,
		lineColor?: string | Gradient,
		upColor?: string
	}

	declare interface PlotOptions {
		area?: AreaChart,
		arearange?: AreaRangeChart,
		areaspline?: AreaSplineChart,
		areasplinerange?: AreaSplineRangeChart,
		bar?: BarChart,
		boxplot?: BoxPlotChart,
		bubble?: BubbleChart,
		column?: ColumnChart,
		columnrange?: ColumnRangeChart,
		errorbar?: ErrorBarChart,
		funnel?: FunnelChart,
		gauge?: GaugeChart,
		heatmap?: HeatMapChart,
		line?: LineChart,
		pie?: PieChart,
		polygon?: PolygonChart,
		pyramid?: PyramidChart,
		scatter?: ScatterChart,
		series?: SeriesChart,
		solidgauge?: SolidGaugeChart,
		spline?: SplineChart,
		treemap?: TreeMapChart,
		waterfall?: WaterFallChart
	}

	declare interface IndividualSeriesOptions {
		type?: string,
		color?: string | Gradient,
		cursor?: string,
		data?: number[] | [number, number][] | [string, number][] | DataPoint[],
		id?: string,
		index?: number,
		legendIndex?: number,
		name?: string,
		pointWidth?: number,
		stack?: any,
		xAxis?: string | number,
		yAxis?: string | number,
		zIndex?: number
	}

	declare interface SeriesOptions {
		
	}

	declare interface AreaChartSeriesOptions {
		
	}

	declare interface AreaRangeChartSeriesOptions {
		
	}

	declare interface AreaSplineChartSeriesOptions {
		
	}

	declare interface AreaSplineRangeChartSeriesOptions {
		
	}

	declare interface BarChartSeriesOptions {
		
	}

	declare interface BoxPlotChartSeriesOptions {
		
	}

	declare interface BubbleChartSeriesOptions {
		
	}

	declare interface ColumnChartSeriesOptions {
		
	}

	declare interface ColumnRangeChartSeriesOptions {
		
	}

	declare interface ErrorBarChartSeriesOptions {
		
	}

	declare interface FunnelChartSeriesOptions {
		
	}

	declare interface GaugeChartSeriesOptions {
		
	}

	declare interface HeatMapSeriesOptions {
		
	}

	declare interface LineChartSeriesOptions {
		
	}

	declare interface PieChartSeriesOptions {
		
	}

	declare interface PolygonChartSeriesOptions {
		
	}

	declare interface PyramidChartSeriesOptions {
		
	}

	declare interface ScatterChartSeriesOptions {
		
	}

	declare interface SolidGaugeChartSeriesOptions {
		
	}

	declare interface SplineChartSeriesOptions {
		
	}

	declare interface TreeMapChartSeriesOptions {
		
	}

	declare interface WaterFallChartSeriesOptions {
		
	}

	declare interface DataPoint {
		color?: string | Gradient,
		colorValue?: number,
		dataLabels?: DataLabels,
		drilldown?: string,
		events?: PointEvents,
		high?: number,
		id?: string,
		innerRadius?: number | string,
		isIntermediateSum?: boolean,
		isSum?: boolean,
		legendIndex?: number,
		low?: number,
		marker?: Marker,
		median?: number,
		name?: string,
		parent?: string,
		q1?: number,
		q3?: number,
		radius?: number | string,
		selected?: boolean,
		sliced?: boolean,
		value?: number,
		x?: number,
		y?: number,
		z?: number
	}

	declare interface SubtitleOptions {
		align?: string,
		floating?: boolean,
		style?: Object,
		text?: string,
		useHTML?: boolean,
		verticalAlign?: string,
		x?: number,
		y?: number
	}

	declare interface TitleOptions {
		align?: string,
		floating?: boolean,
		margin?: number,
		style?: Object,
		text?: string,
		useHTML?: boolean,
		verticalAlign?: string,
		x?: number,
		y?: number
	}

	declare interface CrosshairObject {
		color?: string | Gradient,
		width?: number,
		dashStyle?: string,
		zIndex?: number
	}

	declare interface PlotPoint {
		plotX: number,
		plotY: number
	}

	declare interface TooltipOptions {
		animation?: boolean,
		backgroundColor?: string | Gradient,
		borderColor?: string | Gradient,
		borderRadius?: number,
		borderWidth?: number,
		crosshairs?: boolean | [boolean, boolean] | CrosshairObject | [CrosshairObject, CrosshairObject],
		enabled?: boolean,
		formatter?: () => boolean | string,
		positioner?: (
		labelWidth: number, labelHeight: number, point: PlotPoint
	) => {
		x: number,
		y: number
	},
		shadow?: boolean,
		shape?: string,
		shared?: boolean,
		snap?: number,
		style?: Object,
		useHTML?: boolean
	}

	declare interface SeriesTooltipOptions {
		dateTimeLabelFormats?: DateTimeFormats,
		followPointer?: boolean,
		followTouchMove?: boolean,
		footerFormat?: string,
		headerFormat?: string,
		hideDelay?: number,
		pointFormat?: string,
		pointFormatter?: () => string,
		valueDecimals?: number,
		valuePrefix?: string,
		valueSuffix?: string,
		xDateFormat?: string
	}

	declare interface Options {
		chart?: ChartOptions,
		colorAxis?: ColorAxisOptions | ColorAxisOptions[],
		colors?: string[],
		credits?: CreditsOptions,
		data?: DataOptions,
		drilldown?: DrilldownOptions,
		exporting?: ExportingOptions,
		labels?: LabelsOptions,
		lang?: LangObject,
		legend?: LegendOptions,
		loading?: LoadingOptions,
		navigation?: NavigationOptions,
		noData?: NoDataOptions,
		pane?: PaneOptions,
		plotOptions?: PlotOptions,
		series?: IndividualSeriesOptions[],
		subtitle?: SubtitleOptions,
		title?: TitleOptions,
		tooltip?: TooltipOptions,
		xAxis?: AxisOptions[] | AxisOptions,
		yAxis?: AxisOptions[] | AxisOptions
	}

	declare interface GlobalOptions {
		global?: GlobalObject,
		lang?: LangObject
	}

	declare interface DateFormatSpecifiers {
		[index: string]: (timestamp: number) => string
	}

	declare interface AxisObject {
		addPlotBand(options: PlotBands): void,
		addPlotLine(options: PlotLines): void,
		getExtremes(): Extremes,
		remove(redraw?: boolean): void,
		removePlotBand(id: string): void,
		removePlotLine(id: string): void,
		setCategories(categories: string[]): void,
		setCategories(categories: string[], redraw: boolean): void,
		setExtremes(
		min?: number, max?: number, redraw?: boolean, animation?: boolean | Animation, eventArguments?: any
	): void,
		setTitle(title: AxisTitle, redraw?: boolean): void,
		toPixels(value: number, paneCoordinates?: boolean): number,
		toValue(pixel: number, paneCoordinates?: boolean): number,
		update(options: AxisOptions, redraw?: boolean): void
	}

	declare interface ChartObject {
		addAxis(
		options: AxisOptions, isX?: boolean, redraw?: boolean, animation?: boolean | Animation
	): AxisObject,
		addSeries<T>(options: T, redraw?: boolean, animation?: boolean | Animation): SeriesObject,
		addSeriesAsDrilldown(point: PointObject, seriesOptions: IndividualSeriesOptions): void,
		container: HTMLElement,
		destroy(): void,
		drillUp(): void,
		exportChart(): void,
		exportChart(options: ExportingOptions): void,
		exportChart(options: ExportingOptions, chartOptions: Options): void,
		exportChartLocal(): void,
		exportChartLocal(options: ExportingOptions): void,
		exportChartLocal(options: ExportingOptions, chartOptions: Options): void,
		get(id: string): AxisObject | SeriesObject | PointObject,
		getSVG(additionalOptions?: Options): string,
		getSelectedPoints(): PointObject[],
		getSelectedSeries(): SeriesObject[],
		hideLoading(): void,
		options: Options,
		print(): void,
		redraw(animation?: boolean | Animation): void,
		reflow(): void,
		series: SeriesObject[],
		setSize(width: number, height: number, animation?: boolean | Animation): void,
		setTitle(title: TitleOptions, subtitle?: SubtitleOptions, redraw?: boolean): void,
		showLoading(str?: string): void,
		update(options: ChartOptions, redraw?: boolean): void,
		updatePosition(): void,
		xAxis: AxisObject[],
		yAxis: AxisObject[],
		renderer: RendererObject
	}

	declare interface Chart {
		new (options: Options): ChartObject,
		new (options: Options, callback: (chart: ChartObject) => void): ChartObject,
		new (renderTo: string | HTMLElement, options: Options): ChartObject,
		new (
		renderTo: string | HTMLElement, options: Options, callback: (chart: ChartObject) => void
	): ChartObject
	}

	declare interface ElementObject {
		add(parent?: ElementObject): ElementObject,
		animate(attributes: any, animation?: any): ElementObject,
		attr(hash: any): ElementObject,
		css(hash: Object): ElementObject,
		destroy(): void,
		fadeOut(duration?: number): void,
		getBBox(): {
		x: number,
		y: number,
		height: number,
		width: number
	},
		on(eventType: string, handler: () => void): ElementObject,
		toFront(): ElementObject
	}

	declare interface RendererObject {
		arc(
		centerX: number, centerY: number, outerRadius: number, innerRadius: number, start: number, end: number
	): ElementObject,
		circle(centerX: number, centerY: number, radius: number): ElementObject,
		g(name?: string): ElementObject,
		image(
		source: string, x: number, y: number, width: number, height: number
	): ElementObject,
		label(
		str: string, x: number, y: number, shape?: string, anchorX?: number, anchorY?: number, useHTML?: boolean, baseline?: boolean, className?: string
	): ElementObject,
		path(path: [string | number]): ElementObject,
		rect(
		x: number, y: number, width: number, height: number, cornerRadius: number
	): ElementObject,
		text(str: string, x: number, y: number): ElementObject
	}

	declare interface Renderer {
		new (parentNode: HTMLElement, width: number, height: number): RendererObject
	}

	declare interface Static {
		Chart: Chart,
		Renderer: Renderer,
		Color(color: string | Gradient): string | Gradient,
		chart(options: Options, callback?: (chart: ChartObject) => void): ChartObject,
		chart(
		renderTo: string | HTMLElement, options: Options, callback?: (chart: ChartObject) => void
	): ChartObject,
		charts: ChartObject[],
		dateFormat(format: string, time?: number, capitalize?: boolean): string,
		dateFormats: DateFormatSpecifiers,
		numberFormat(
		value: number, decimals?: number, decimalPoint?: string, thousandsSep?: string
	): string,
		setOptions(options: GlobalOptions): Options,
		getOptions(): Options,
		map(array: any[], fn: Function): any[]
	}

	declare interface PointObject {
		category: string | number,
		name: string,
		index: number,
		percentage: number,
		remove(redraw?: boolean, animation?: boolean | Animation): void,
		select(select?: boolean, accumulate?: boolean): void,
		selected: boolean,
		series: SeriesObject,
		slice(sliced?: boolean, redraw?: boolean, animation?: boolean | Animation): void,
		total: number,
		update(
		options: number | [number, number] | DataPoint, redraw?: boolean, animation?: boolean | Animation
	): void,
		x: number,
		y: number
	}

	declare interface SeriesObject {
		addPoint(
		options: number | [number, number] | DataPoint, redraw?: boolean, shift?: boolean, animation?: boolean | Animation
	): void,
		chart: ChartObject,
		data: PointObject[],
		hide(): void,
		name: string,
		options: IndividualSeriesOptions,
		remove(redraw?: boolean): void,
		removePoint(index: number, redraw?: boolean, animation?: boolean | Animation): void,
		select(selected?: boolean): void,
		selected: boolean,
		setData(
		data: number[] | number[][] | DataPoint[], redraw?: boolean, animation?: boolean | Animation, updatePoints?: boolean
	): void,
		setVisible(visible?: boolean, redraw?: boolean): void,
		show(): void,
		type: string,
		update(options: IndividualSeriesOptions, redraw?: boolean): void,
		visible: boolean,
		xAxis: AxisObject,
		yAxis: AxisObject
	}

			
}
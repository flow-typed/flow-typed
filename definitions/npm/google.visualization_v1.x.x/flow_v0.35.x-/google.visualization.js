

declare module 'google.visualization' {
					
}

declare module 'npm$namespace$google' {
			declare function load(visualization: string, version: string, packages: any): void

	declare function setOnLoadCallback(handler: Function): void

	declare function setOnLoadCallback(handler: () => void): void

		
}

declare module 'charts' {
			declare function load(version: string, packages: Object): void

	declare function setOnLoadCallback(handler: Function): void

		
}

declare module 'visualization' {
		declare export interface ChartSpecs {
		chartType: string,
		containerId?: string,
		options?: Object,
		dataTable?: Object,
		dataSourceUrl?: string,
		query?: string,
		refreshInterval?: number,
		view?: any
	}

	declare export interface ErrorEventObject {
		id: string,
		message: string,
		detailedMessage?: string,
		options?: any
	}

	declare export interface Properties {
		[property: string]: any
	}

	declare export interface SortByColumn {
		column: number,
		desc: boolean
	}

	declare export interface DataTableColumnDescription {
		type?: string,
		label?: string,
		id?: string,
		role?: string,
		pattern?: string,
		p?: any
	}

	declare export interface DataObject {
		cols: DataObjectColumn[],
		rows: DataObjectRow[],
		p: any
	}

	declare export interface DataObjectColumn {
		type: string,
		id?: string,
		label?: string,
		pattern?: string,
		p?: any
	}

	declare export interface DataObjectRow {
		c: DataObjectCell[],
		p?: any
	}

	declare export interface DataTableCellFilter {
		column: number,
		value?: any,
		minValue?: any,
		maxValue?: any
	}

	declare export interface DataObjectCell {
		v?: any,
		f?: string,
		p?: any
	}

	declare export interface DataTableCellValueFilter {
		value: any
	}

	declare export interface DataTableCellRangeFilter {
		minValue?: any,
		maxValue?: any
	}

	declare export interface QueryOptions {
		sendMethod?: string,
		makeRequestParams?: Object
	}

	declare export interface ColumnSpec {
		calc: (dataTable: DataTable, row: number) => any,
		type: string,
		label?: string,
		id?: string,
		sourceColumn?: number,
		properties?: Properties,
		role?: string
	}

	declare export interface GeoChartOptions {
		backgroundColor?: any,
		colorAxis?: ChartColorAxis,
		datalessRegionColor?: string,
		displayMode?: string,
		enableRegionInteractivity?: boolean,
		height?: number,
		keepAspectRatio?: boolean,
		legend?: ChartLegend,
		region?: string,
		magnifyingGlass?: GeoChartMagnifyingGlass,
		markerOpacity?: number,
		resolution?: string,
		sizeAxis?: ChartSizeAxis,
		tooltip?: ChartTooltip,
		width?: number
	}

	declare export interface GeoChartMagnifyingGlass {
		enable?: boolean,
		zoomFactor?: number
	}

	declare export interface GeoChartRegionClickEvent {
		region: string
	}

	declare export interface GeoChartSelection {
		row: number
	}

	declare export interface ChartAnnotations {
		boxStyle?: ChartBoxStyle,
		textStyle?: ChartTextStyle
	}

	declare export interface ChartBoxStyle {
		stroke?: string,
		strokeWidth?: number,
		rx?: number,
		ry?: number,
		gradient?: {
		color1: string,
		color2: string,
		x1: string,
		y1: string,
		x2: string,
		y2: string,
		useObjectBoundingBoxUnits?: boolean
	}
	}

	declare export interface ChartTextStyle {
		fontName?: string,
		fontSize?: number,
		bold?: boolean,
		italic?: boolean,
		color?: string,
		auraColor?: string,
		opacity?: number
	}

	declare export interface ChartCrosshair {
		color?: string,
		focused?: {
		color?: string,
		opacity?: number
	},
		opacity?: number,
		orientation?: string,
		selected?: {
		color?: string,
		opacity?: number
	},
		trigger?: string
	}

	declare export interface ChartExplorer {
		actions?: string[],
		axis?: string,
		keepInBounds?: boolean,
		maxZoomIn?: number,
		maxZoomOut?: number,
		zoomDelta?: number
	}

	declare export interface ChartStroke {
		stroke: string,
		strokeWidth: number,
		fill: string
	}

	declare export interface ChartArea {
		top?: any,
		left?: any,
		width?: any,
		height?: any
	}

	declare export interface ChartLegend {
		alignment?: string,
		maxLines?: number,
		position?: string,
		textStyle?: ChartTextStyle,
		numberFormat?: string
	}

	declare export interface TransitionAnimation {
		duration?: number,
		easing?: string,
		startup?: boolean
	}

	declare export interface ChartAxis {
		baseline?: number,
		baselineColor?: string,
		direction?: number,
		format?: string,
		gridlines?: ChartGridlines,
		minorGridlines?: ChartGridlines,
		logScale?: boolean,
		textPosition?: string,
		textStyle?: ChartTextStyle,
		ticks?: any[],
		title?: string,
		titleTextStyle?: ChartTextStyle,
		allowContainerBoundaryTextCufoff?: boolean,
		slantedText?: boolean,
		slantedTextAngle?: number,
		maxAlternation?: number,
		maxTextLines?: number,
		minTextSpacing?: number,
		showTextEvery?: number,
		maxValue?: number,
		minValue?: number,
		viewWindowMode?: string,
		viewWindow?: ChartViewWindow
	}

	declare export interface ChartGridlines {
		color?: string,
		count?: number
	}

	declare export interface ChartViewWindow {
		max?: number,
		min?: number
	}

	declare export interface ChartTooltip {
		isHtml?: boolean,
		showColorCode?: boolean,
		textStyle?: ChartTextStyle,
		trigger?: string
	}

	declare export interface ChartBoundingBox {
		left: number,
		top: number,
		width: number,
		height: number
	}

	declare export interface ChartColorAxis {
		minValue?: number,
		maxValue?: number,
		values?: number[],
		colors?: string[],
		legend?: ChartLegend
	}

	declare export interface ChartLayoutInterface {
		getBoundingBox(id: string): ChartBoundingBox,
		getChartAreaBoundingBox(): ChartBoundingBox,
		getHAxisValue(position: number, axisIndex?: number): number,
		getVAxisValue(position: number, axisIndex?: number): number,
		getXLocation(position: number, axisIndex?: number): number,
		getYLocation(position: number, axisIndex?: number): number
	}

	declare export interface GroupWidth {
		groupWidth: any
	}

	declare export interface VisualizationSelectionArray {
		column?: number,
		row?: number
	}

	declare export interface Candlestick {
		hollowIsRising?: boolean,
		fallingColor?: ChartStroke,
		risingColor?: ChartStroke
	}

	declare export interface ScatterChartOptions {
		aggregationTarget?: string,
		animation?: TransitionAnimation,
		annotations?: ChartAnnotations,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		chartArea?: ChartArea,
		colors?: string[],
		crosshair?: ChartCrosshair,
		curveType?: string,
		dataOpacity?: number,
		enableInteractivity?: boolean,
		explorer?: ChartExplorer,
		fontSize?: number,
		fontName?: string,
		forceIFrame?: boolean,
		hAxis?: ChartAxis,
		height?: number,
		legend?: ChartLegend,
		lineWidth?: number,
		pointSize?: number,
		selectionMode?: string,
		series?: any,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface ColumnChartOptions {
		aggregationTarget?: string,
		animation?: TransitionAnimation,
		annotations?: ChartAnnotations,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		bar?: GroupWidth,
		chartArea?: ChartArea,
		colors?: string[],
		enableInteractivity?: boolean,
		focusTarget?: string,
		fontSize?: number,
		fontName?: string,
		hAxis?: ChartAxis,
		height?: number,
		isStacked?: boolean,
		legend?: ChartLegend,
		reverseCategories?: boolean,
		selectionMode?: string,
		series?: any,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxes?: any,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface LineChartOptions {
		aggregationTarget?: string,
		animation?: TransitionAnimation,
		annotations?: ChartAnnotations,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		chartArea?: ChartArea,
		colors?: string[],
		crosshair?: ChartCrosshair,
		curveType?: string,
		dataOpacity?: number,
		enableInteractivity?: boolean,
		explorer?: ChartExplorer,
		focusTarget?: string,
		fontSize?: number,
		fontName?: string,
		hAxis?: ChartAxis,
		height?: number,
		interpolateNulls?: boolean,
		legend?: ChartLegend,
		lineWidth?: number,
		orientation?: string,
		pointSize?: number,
		reverseCategories?: boolean,
		selectionMode?: string,
		series?: any,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxes?: any,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface BarChartOptions {
		aggregationTarget?: string,
		animation?: TransitionAnimation,
		annotations?: ChartAnnotations,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		bar?: GroupWidth,
		chartArea?: ChartArea,
		colors?: string[],
		dataOpacity?: number,
		enableInteractivity?: boolean,
		focusTarget?: string,
		fontSize?: number,
		fontName?: string,
		hAxes?: any,
		hAxis?: ChartAxis,
		height?: number,
		isStacked?: boolean,
		legend?: ChartLegend,
		reverseCategories?: boolean,
		series?: any,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxes?: any,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface HistogramOptions {
		animation?: TransitionAnimation,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		bar?: GroupWidth,
		chartArea?: ChartArea,
		colors?: string[],
		dataOpacity?: number,
		enableInteractivity?: boolean,
		focusTarget?: string,
		fontSize?: number,
		fontName?: string,
		hAxis?: ChartAxis,
		histogram?: HistogramHistogramOptions,
		height?: number,
		interpolateNulls?: boolean,
		isStacked?: boolean,
		legend?: ChartLegend,
		orientation?: string,
		reverseCategories?: boolean,
		series?: any,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxes?: any,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface HistogramHistogramOptions {
		bucketSize?: number,
		hideBucketItems?: boolean,
		lastBucketPercentile?: number
	}

	declare export interface AreaChartOptions {
		aggregationTarget?: string,
		animation?: TransitionAnimation,
		areaOpacity?: number,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		chartArea?: ChartArea,
		colors?: string[],
		crosshair?: ChartCrosshair,
		dataOpacity?: number,
		enableInteractivity?: boolean,
		explorer?: ChartExplorer,
		focusTarget?: string,
		fontSize?: number,
		fontName?: string,
		hAxis?: ChartAxis,
		height?: number,
		interpolateNulls?: boolean,
		isStacked?: boolean,
		legend?: ChartLegend,
		lineWidth?: number,
		orientation?: string,
		pointSize?: number,
		reverseCategories?: boolean,
		selectionMode?: string,
		series?: any,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxes?: any,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface AnnotationChartOptions {
		allowHtml?: boolean,
		allValuesSuffix?: string,
		annotationsWidth?: number,
		colors?: string[],
		dateFormat?: string,
		displayAnnotations?: boolean,
		displayAnnotationsFilter?: boolean,
		displayDateBarSeparator?: boolean,
		displayExactValues?: boolean,
		displayLegendDots?: boolean,
		displayLegendValues?: boolean,
		displayRangeSelector?: boolean,
		displayZoomButtons?: boolean,
		fill?: number,
		legendPosition?: string,
		max?: number,
		min?: number,
		numberFormats?: any,
		scaleColumns?: number[],
		scaleFormat?: string,
		scaleType?: string,
		thickness?: number,
		zoomEndTime?: Date,
		zoomStartTime?: Date
	}

	declare export interface SteppedAreaChartOptions {
		aggregationTarget?: string,
		animation?: TransitionAnimation,
		areaOpacity?: number,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		chartArea?: ChartArea,
		colors?: string[],
		connectSteps?: boolean,
		enableInteractivity?: boolean,
		focusTarget?: string,
		fontSize?: number,
		fontName?: string,
		hAxis?: ChartAxis,
		height?: number,
		interpolateNulls?: boolean,
		isStacked?: boolean,
		legend?: ChartLegend,
		reverseCategories?: boolean,
		selectionMode?: string,
		series?: any,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxes?: any,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface PieChartOptions {
		backgroundColor?: any,
		chartArea?: ChartArea,
		colors?: string[],
		enableInteractivity?: boolean,
		fontSize?: number,
		fontName?: string,
		height?: number,
		is3D?: boolean,
		legend?: ChartLegend,
		pieHole?: number,
		pieSliceBorderColor?: string,
		pieSliceText?: string,
		pieSliceTextStyle?: ChartTextStyle,
		pieStartAngle?: number,
		reverseCategories?: boolean,
		pieResidueSliceColor?: string,
		pieResidueSliceLabel?: string,
		slices?: any,
		sliceVisibilityThreshold?: number,
		title?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		width?: number
	}

	declare export interface BubbleChartOptions {
		animation?: TransitionAnimation,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		bubble?: ChartBubble,
		chartArea?: ChartArea,
		colors?: string[],
		colorAxis?: ChartColorAxis,
		enableInteractivity?: boolean,
		explorer?: ChartExplorer,
		fontSize?: number,
		fontName?: string,
		forceIFrame?: boolean,
		hAxis?: ChartAxis,
		height?: number,
		legend?: ChartLegend,
		selectionMode?: string,
		series?: any,
		sizeAxis?: ChartSizeAxis,
		sortBubblesBySize?: boolean,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface ChartBubble {
		opacity?: number,
		stroke?: string,
		textStyle?: ChartTextStyle
	}

	declare export interface ChartSizeAxis {
		maxSize?: number,
		maxValue?: number,
		minSize?: number,
		minValue?: number
	}

	declare export interface TreeMapOptions {
		fontColor?: string,
		fontFamily?: string,
		fontSize?: number,
		forceIFrame?: boolean,
		headerColor?: string,
		headerHeight?: number,
		headerHighlightColor?: string,
		hintOpacity?: number,
		maxColor?: string,
		maxDepth?: number,
		maxHighlightColor?: string,
		maxPostDepth?: number,
		maxColorValue?: number,
		midColor?: string,
		midHighlightColor?: string,
		minColor?: string,
		minHighlightColor?: string,
		minColorValue?: number,
		showScale?: boolean,
		showTooltips?: boolean,
		textStyle?: ChartTextStyle,
		title?: string,
		titleTextStyle?: ChartTextStyle,
		useWeightedAverageForAggregation?: boolean
	}

	declare export interface TableOptions {
		allowHtml?: boolean,
		alternatingRowStyle?: boolean,
		cssClassName?: CssClassNames,
		firstRowNumber?: number,
		height?: string,
		page?: string,
		pageSize?: number,
		rtlTable?: boolean,
		scrollLeftStartPosition?: number,
		showRowNumber?: boolean,
		sort?: string,
		sortAscending?: boolean,
		sortColumn?: number,
		startPage?: number,
		width?: string
	}

	declare export interface CssClassNames {
		headerRow?: string,
		tableRow?: string,
		oddTableRow?: string,
		selectedTableRow?: string,
		hoverTableRow?: string,
		headerCell?: string,
		tableCell?: string,
		rowNumberCell?: string
	}

	declare export interface TimelineOptions {
		avoidOverlappingGridLines?: boolean,
		backgroundColor?: any,
		colors?: string[],
		enableInteractivity?: boolean,
		forceIFrame?: boolean,
		height?: number,
		timeline?: {
		barLabelStyle?: LabelStyle,
		colorByRowLabel?: boolean,
		groupByRowLabel?: boolean,
		rowLabelStyle?: LabelStyle,
		showRowLabels?: boolean,
		singleColor?: string
	},
		width?: number
	}

	declare export interface LabelStyle {
		color: string,
		fontName: string,
		fontSize: string
	}

	declare export interface CandlestickChartOptions {
		aggregationTarget?: string,
		animation?: TransitionAnimation,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		bar?: GroupWidth,
		candlestick?: Candlestick,
		chartArea?: ChartArea,
		colors?: string[],
		enableInteractivity?: boolean,
		focusTarget?: string,
		fontSize?: number,
		fontName?: string,
		hAxis?: ChartAxis,
		height?: number,
		legend?: ChartLegend,
		orientation?: string,
		reverseCategories?: boolean,
		selectionMode?: string,
		series?: any,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxes?: any,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface ComboChartOptions {
		aggregationTarget?: string,
		animation?: TransitionAnimation,
		annotations?: ChartAnnotations,
		areaOpacity?: number,
		axisTitlesPosition?: string,
		backgroundColor?: any,
		bar?: GroupWidth,
		candlestick?: Candlestick,
		chartArea?: ChartArea,
		colors?: string[],
		crosshair?: ChartCrosshair,
		curveType?: string,
		dataOpacity?: number,
		enableInteractivity?: boolean,
		focusTarget?: string,
		fontSize?: number,
		fontName?: string,
		forceIFrame?: boolean,
		hAxis?: ChartAxis,
		height?: number,
		interpolateNulls?: boolean,
		isStacked?: boolean,
		legend?: ChartLegend,
		lineDashStyle?: number[],
		lineWidth?: number,
		orientation?: string,
		pointShape?: string,
		pointSize?: number,
		pointsVisible?: boolean,
		reverseCategories?: boolean,
		selectionMode?: string,
		series?: any,
		seriesType?: string,
		theme?: string,
		title?: string,
		titlePosition?: string,
		titleTextStyle?: ChartTextStyle,
		tooltip?: ChartTooltip,
		vAxes?: any,
		vAxis?: ChartAxis,
		width?: number
	}

	declare export interface ArrowFormatOptions {
		base?: number
	}

	declare export interface BarFormatOptions {
		base?: number,
		colorNegative?: string,
		colorPositive?: string,
		drawZeroLine?: boolean,
		max?: number,
		min?: number,
		showValue?: boolean,
		width?: number
	}

	declare export interface DateFormatOptions {
		formatType?: string,
		pattern?: string,
		timeZone?: number
	}

	declare export interface NumberFormatOptions {
		decimalSymbol?: string,
		fractionDigits?: number,
		groupingSymbol?: string,
		negativeColor?: string,
		negativeParens?: boolean,
		pattern?: string,
		prefix?: string,
		suffix?: string
	}

	declare function arrayToDataTable(data: any[], firstRowIsData?: boolean): DataTable

	declare export class ChartWrapper  {
		constructor(spec?: ChartSpecs): this;
		draw(container_ref?: HTMLElement): void;
		toJSON(): string;
		clone(): ChartWrapper;
		getDataSourceUrl(): string;
		getDataTable(): DataTable;
		getChartType(): string;
		getChartName(): string;
		getChart(): any;
		getContainerId(): string;
		getQuery(): string;
		getRefreshInterval(): number;
		getOption(key: string, default_val?: string): any;
		getOptions(): Object;
		getView(): any;
		setDataSourceUrl(url: string): void;
		setDataTable(table: DataTable): void;
		setChartType(type: string): void;
		setChartName(name: string): void;
		setContainerId(id: string): void;
		setQuery(query: string): void;
		setRefreshInterval(interval: number): void;
		setOption(key: string, value: any): void;
		setOptions(options: Object): void;
		setView(view_spec: string): void
	}

	declare export class DataTable  {
		constructor(data?: any, version?: any): this;
		addColumn(type: string, label?: string, id?: string): number;
		addColumn(descriptionObject: DataTableColumnDescription): number;
		addRow(cellObject: DataObjectCell): number;
		addRow(cellArray?: any[]): number;
		addRows(numberOfEmptyRows: number): number;
		addRows(rows: DataObjectCell[][]): number;
		addRows(rows: any[][]): number;
		clone(): DataTable;
		getColumnId(columnIndex: number): string;
		getColumnLabel(columnIndex: number): string;
		getColumnPattern(columnIndex: number): string;
		getColumnProperties(columnIndex: number): Properties;
		getColumnProperty(columnIndex: number, name: string): any;
		getColumnRange(columnIndex: number): {
		min: any,
		max: any
	};
		getColumnRole(columnIndex: string): string;
		getColumnType(columnIndex: number): string;
		getDistinctValues(columnIndex: number): any[];
		getFilteredRows(filters: DataTableCellFilter[]): number[];
		getFormattedValue(rowIndex: number, columnIndex: number): string;
		getNumberOfColumns(): number;
		getNumberOfRows(): number;
		getProperty(rowIndex: number, columnIndex: number, name: string): any;
		getProperties(rowIndex: number, columnIndex: number): Properties;
		getRowProperties(rowIndex: number): Properties;
		getRowProperty(rowIndex: number, name: string): Properties;
		getSortedRows(sortColumn: number): number[];
		getSortedRows(sortColumn: SortByColumn): number[];
		getSortedRows(sortColumns: number[]): number[];
		getSortedRows(sortColumns: SortByColumn[]): number[];
		getTableProperties(): Properties;
		getTableProperty(name: string): any;
		getValue(rowIndex: number, columnIndex: number): any;
		insertColumn(columnIndex: number, type: string, label?: string, id?: string): void;
		insertRows(rowIndex: number, numberOfEmptyRows: number): void;
		insertRows(rowIndex: number, rows: DataObjectCell[][]): void;
		insertRows(rowIndex: number, rows: any[][]): void;
		removeColumn(columnIndex: number): void;
		removeColumns(columnIndex: number, numberOfColumns: number): void;
		removeRow(rowIndex: number): void;
		removeRows(rowIndex: number, numberOfRows: number): void;
		setCell(
		rowIndex: number, columnIndex: number, value?: any, formattedValue?: string, properties?: Properties
	): void;
		setColumnLabel(columnIndex: number, label: string): void;
		setColumnProperty(columnIndex: number, name: string, value: any): void;
		setColumnProperties(columnIndex: number, properties: Properties): void;
		setFormattedValue(rowIndex: number, columnIndex: number, formattedValue: string): void;
		setProperty(rowIndex: number, columnIndex: number, name: string, value: any): void;
		setProperties(rowIndex: number, columnIndex: number, properties: Properties): void;
		setRowProperty(rowIndex: number, name: string, value: any): void;
		setRowProperties(rowIndex: number, properties: Properties): void;
		setTableProperty(name: string, value: any): void;
		setTableProperties(properties: Properties): void;
		setValue(rowIndex: number, columnIndex: number, value: any): void;
		sort(sortColumn: number): number[];
		sort(sortColumn: SortByColumn): number[];
		sort(sortColumns: number[]): number[];
		sort(sortColumns: SortByColumn[]): number[];
		toJSON(): string
	}

	declare export class Query  {
		constructor(dataSourceUrl: string, options?: QueryOptions): this;
		abort(): void;
		setRefreshInterval(intervalSeconds: number): void;
		setTimeout(timeoutSeconds: number): void;
		setQuery(queryString: string): void;
		send(callback: (response: QueryResponse) => void): void
	}

	declare export class QueryResponse  {
		constructor(responseObject: Object): this;
		getDataTable(): DataTable;
		getDetailedMessage(): string;
		getMessage(): string;
		getReasons(): string[];
		hasWarning(): boolean;
		isError(): boolean
	}

	declare export class DataView  {
		constructor(data: DataTable): this;
		constructor(data: DataView): this;
		getColumnId(columnIndex: number): String;
		getColumnLabel(columnIndex: number): string;
		getColumnPattern(columnIndex: number): string;
		getColumnProperty(columnIndex: number, name: string): any;
		getColumnRange(columnIndex: number): {
		min: any,
		max: any
	};
		getColumnType(columnIndex: number): string;
		getDistinctValues(columnIndex: number): any[];
		getFilteredRows(filters: DataTableCellFilter[]): number[];
		getFormattedValue(rowIndex: number, columnIndex: number): string;
		getNumberOfColumns(): number;
		getNumberOfRows(): number;
		getProperty(rowIndex: number, columnIndex: number, name: string): any;
		getProperties(rowIndex: number, columnIndex: number): Properties;
		getRowProperty(rowIndex: number, name: string): Properties;
		getSortedRows(sortColumn: number): number[];
		getSortedRows(sortColumn: SortByColumn): number[];
		getSortedRows(sortColumns: number[]): number[];
		getSortedRows(sortColumns: SortByColumn[]): number[];
		getTableProperty(name: string): any;
		getValue(rowIndex: number, columnIndex: number): any;
		getTableColumnIndex(viewColumnIndex: number): number;
		getTableRowIndex(viewRowIndex: number): number;
		getViewColumnIndex(tableColumnIndex: number): number;
		getViewColumns(): number[];
		getViewRowIndex(tableRowIndex: number): number;
		getViewRows(): number[];
		hideColumns(columnIndexes: number[]): void;
		hideRows(min: number, max: number): void;
		hideRows(rowIndexes: number[]): void;
		setColumns(columnIndexes: number[]): void;
		setColumns(columnIndexes: ColumnSpec[]): void;
		setColumns(columnIndexes: any[]): void;
		setRows(min: number, max: number): void;
		setRows(rowIndexes: number[]): void;
		toDataTable(): DataTable;
		toJSON(): string
	}

	declare export class GeoChart extends ChartBase {
		draw(data: DataTable, options: GeoChartOptions): void
	}

	declare class ChartBase  {
		constructor(element: Element): this;
		getSelection(): VisualizationSelectionArray[];
		setSelection(selection: VisualizationSelectionArray[]): void;
		clearChart(): void;
		getImageURI(): string
	}

	declare class CoreChartBase extends ChartBase {
		getBoundingBox(id: string): ChartBoundingBox;
		getChartAreaBoundingBox(): ChartBoundingBox;
		getChartLayoutInterface(): ChartLayoutInterface;
		getHAxisValue(position: number, axisIndex?: number): number;
		getVAxisValue(position: number, axisIndex?: number): number;
		getXLocation(position: number, axisIndex?: number): number;
		getYLocation(position: number, axisIndex?: number): number
	}

	declare export class ScatterChart extends CoreChartBase {
		draw(data: DataTable, options?: ScatterChartOptions): void;
		draw(data: DataView, options?: ScatterChartOptions): void
	}

	declare export class ColumnChart extends CoreChartBase {
		draw(data: DataTable, options: ColumnChartOptions): void;
		draw(data: DataView, options: ColumnChartOptions): void
	}

	declare export class LineChart extends CoreChartBase {
		draw(data: DataTable, options: LineChartOptions): void;
		draw(data: DataView, options: LineChartOptions): void
	}

	declare export class BarChart extends CoreChartBase {
		draw(data: DataTable, options: BarChartOptions): void;
		draw(data: DataView, options: BarChartOptions): void
	}

	declare export class Histogram extends CoreChartBase {
		draw(data: DataTable, options: HistogramOptions): void;
		draw(data: DataView, options: HistogramOptions): void
	}

	declare export class AreaChart extends CoreChartBase {
		draw(data: DataTable, options: AreaChartOptions): void;
		draw(data: DataView, options: AreaChartOptions): void
	}

	declare export class AnnotationChart extends CoreChartBase {
		draw(data: DataTable, options: AnnotationChartOptions): void;
		draw(data: DataView, options: AnnotationChartOptions): void;
		setVisibleChartRange(start: Date, end: Date): void;
		getVisibleChartRange(): {
		start: Date,
		end: Date
	};
		hideDataColumns(columnIndexes: number | number[]): void;
		showDataColumns(columnIndexes: number | number[]): void
	}

	declare export class SteppedAreaChart extends CoreChartBase {
		draw(data: DataTable, options: SteppedAreaChartOptions): void;
		draw(data: DataView, options: SteppedAreaChartOptions): void
	}

	declare export class PieChart extends CoreChartBase {
		draw(data: DataTable, options: PieChartOptions): void;
		draw(data: DataView, options: PieChartOptions): void
	}

	declare export class BubbleChart extends CoreChartBase {
		draw(data: DataTable, options?: BubbleChartOptions): void;
		draw(data: DataView, options?: BubbleChartOptions): void
	}

	declare export class TreeMap extends ChartBase {
		draw(data: DataTable, options?: TreeMapOptions): void;
		draw(data: DataView, options?: TreeMapOptions): void;
		goUpAndDraw(): void;
		getMaxPossibleDepth(): number
	}

	declare export class Table extends ChartBase {
		draw(data: DataTable, options?: TableOptions): void;
		draw(data: DataView, options?: TableOptions): void
	}

	declare export class Timeline  {
		constructor(element: Element): this;
		draw(data: DataTable, options?: TimelineOptions): void;
		draw(data: DataView, options?: TimelineOptions): void;
		clearChart(): void
	}

	declare export class CandlestickChart extends CoreChartBase {
		draw(data: DataTable, options: CandlestickChartOptions): void;
		draw(data: DataView, options: CandlestickChartOptions): void
	}

	declare export class ComboChart extends CoreChartBase {
		draw(data: DataTable, options: ComboChartOptions): void;
		draw(data: DataView, options: ComboChartOptions): void
	}

	declare class DefaultFormatter  {
		format(data: DataTable, columnIndex: number): void
	}

	declare export class ArrowFormat extends DefaultFormatter {
		constructor(options?: ArrowFormatOptions): this
	}

	declare export class BarFormat extends DefaultFormatter {
		constructor(options?: BarFormatOptions): this
	}

	declare export class ColorFormat extends DefaultFormatter {
		constructor(): this;
		addRange(from: any, to: any, color: string, bgcolor: string): void;
		addGradientRange(
		from: any, to: any, color: string, fromBgColor: string, toBgColor: string
	): void
	}

	declare export class DateFormat extends DefaultFormatter {
		constructor(options: DateFormatOptions): this;
		formatValue(value: Date): string
	}

	declare export class NumberFormat extends DefaultFormatter {
		constructor(options?: NumberFormatOptions): this;
		formatValue(value: number): string
	}

	declare export class PatternFormat  {
		constructor(pattern: string): this;
		format(
		dataTable: DataTable, srcColumnIndices: number[], opt_dstColumnIndex?: number
	): void
	}

	
}

declare module 'events' {
			declare function addListener(visualization: any, eventName: string, callback: Function): any

	declare function addListener(visualization: any, eventName: string, callback: (...args: any[]) => void): any

	declare function removeListener(listener: any): void

	declare function removeAllListeners(visualization: any): void

	declare function trigger(visualization: any, eventName: string, args?: any): void

		
}
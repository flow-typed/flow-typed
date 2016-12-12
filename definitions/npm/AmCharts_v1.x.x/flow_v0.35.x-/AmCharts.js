

declare module 'AmCharts' {
					
}

declare module 'npm$namespace$AmCharts' {
			declare function clear()

	declare function ready(Function: <<UNKNOWN PARAM FORMAT>>): void

	declare function makeChart(selector: string, params: any, delay?: number): AmChart

	declare function addInitHandler(handler: Function, types: string[])

	declare class AmPieChart extends AmChart {
		alphaField: string;
		angle: number;
		balloonText: string;
		chartData: any[];
		colorField: string;
		colors: any[];
		depth3D: number;
		descriptionField: string;
		gradientRatio: number[];
		groupedAlpha: number;
		groupedColor: string;
		groupedDescription: string;
		groupedPulled: boolean;
		groupedTitle: string;
		groupPercent: number;
		hideLabelsPercent: number;
		hoverAlpha: number;
		innerRadius: any;
		labelRadius: number;
		labelRadiusField: string;
		labelsEnabled: boolean;
		labelText: string;
		labelTickAlpha: number;
		labelTickColor: string;
		marginBottom: number;
		marginLeft: number;
		marginRight: number;
		marginTop: number;
		minRadius: number;
		outlineAlpha: number;
		outlineColor: string;
		outlineThickness: number;
		pieAlpha: number;
		pieBaseColor: string;
		pieBrightnessStep: number;
		pieX: any;
		pieY: any;
		pulledField: string;
		pullOutDuration: number;
		pullOutEffect: string;
		pullOutOnlyOne: boolean;
		pullOutRadius: any;
		radius: any;
		sequencedAnimation: boolean;
		startAlpha: number;
		startAngle: number;
		startDuration: number;
		startEffect: string;
		startRadius: any;
		titleField: string;
		urlField: string;
		urlTarget: string;
		valueField: string;
		visibleInLegendField: string;
		animateAgain();
		clickSlice(index: number);
		hideSlice(index: number);
		rollOutSlice(index: number);
		rollOverSlice(index: number);
		showSlice(index: number)
	}

	declare class AmRadarChart extends AmCoordinateChart {
		marginBottom: number;
		marginLeft: number;
		marginRight: number;
		marginTop: number;
		radius: any
	}

	declare class AmXYChart extends AmRectangularChart {
		hideXScrollbar: boolean;
		hideYScrollbar: boolean;
		maxZoomFactor: number;
		zoomOut()
	}

	declare class Guide  {
		above: boolean;
		angle: number;
		balloonColor: string;
		balloonText: string;
		boldLabel: boolean;
		category: string;
		dashLength: number;
		date: Date;
		expand: boolean;
		fillAlpha: number;
		fillColor: string;
		fontSize: string;
		id: string;
		inside: boolean;
		label: string;
		labelRotation: number;
		lineAlpha: number;
		lineColor: string;
		lineThickness: number;
		position: string;
		tickLength: number;
		toAngle: number;
		toCategory: string;
		toDate: Date;
		toValue: number;
		value: number;
		valueAxis: ValueAxis
	}

	declare class ImagesSettings  {
		alpha: number;
		balloonText: string;
		centered: boolean;
		color: string;
		descriptionWindowHeight: number;
		descriptionWindowWidth: number;
		descriptionWindowX: number;
		descriptionWindowY: number;
		labelColor: string;
		labelfontSize: string;
		labelPosition: string;
		labelRollOverColor: string;
		outlineAlpha: number;
		outlineColor: string;
		outlineThickness: number;
		rollOverColor: string;
		rollOverScale: number;
		selectedScale: number
	}

	declare class AreasSettings  {
		alpha: number;
		autoZoom: boolean;
		balloonText: string;
		color: string;
		colorSolid: string;
		descriptionWindowHeight: number;
		descriptionWindowWidth: number;
		descriptionWindowX: number;
		descriptionWindowY: number;
		outlineAlpha: number;
		outlineColor: string;
		outlineThickness: number;
		rollOverColor: string;
		rollOverOutlineColor: string;
		selectedColor: string;
		unlistedAreasAlpha: number;
		unlistedAreasColor: string;
		unlistedAreasOutlineAlpha: number;
		unlistedAreasOutlineColor: string
	}

	declare class Slice  {
		alpha: number;
		color: string;
		dataContext: Object;
		description: string;
		hidden: boolean;
		percents: number;
		pulled: boolean;
		title: string;
		url: string;
		value: number;
		visibleInLegend: boolean
	}

	declare class AmStockChart  {
		animationPlayed: boolean;
		balloon: AmBalloon;
		categoryAxesSettings: CategoryAxesSettings;
		chartCreated: boolean;
		chartCursorSettings: ChartCursorSettings;
		chartScrollbarSettings: ChartScrollbarSettings;
		colors: any[];
		comparedDataSets: any[];
		dataSets: any[];
		dataSetSelector: DataSetSelector;
		endDate: Date;
		firstDayOfWeek: number;
		glueToTheEnd: boolean;
		legendSettings: LegendSettings;
		mainDataSet: DataSet;
		panels: any[];
		panelsSettings: PanelsSettings;
		periodSelector: PeriodSelector;
		scrollbarChart: AmSerialChart;
		startDate: Date;
		stockEventsSettings: any;
		valueAxesSettings: ValueAxesSettings;
		version: string;
		zoomOutOnDataSetChange: boolean;
		addPanel(panel: StockPanel);
		addPanelAt(panel: StockPanel, index: number);
		clear();
		hideStockEvents();
		removeListener(obj: any, type: string, handler: any);
		removePanel(panel: StockPanel);
		showStockEvents();
		validateData();
		validateNow();
		zoom(startDate: Date, endDate: Date);
		zoomOut();
		addListener(type: string, handler: (e: {
		type: string,
		chart: AmStockChart
	}) => void);
		addListener(
		type: string, handler: (
		e: {
		type: string,
		eventObject: any,
		graph: AmGraph,
		date: Date,
		chart: AmStockChart
	}
	) => void
	);
		addListener(
		type: string, handler: (
		e: {
		type: string,
		startDate: Date,
		endDate: Date,
		period: string,
		chart: AmStockChart
	}
	) => void
	);
		addListener(
		type: string, handler: (e: {
		type: string,
		panel: StockPanel,
		chart: AmStockChart
	}) => void
	);
		removeListener(chart: AmChart, type: string, handler: any)
	}

	declare class ValueAxesSettings  {
		autoGridCount: boolean;
		axisAlpha: number;
		axisColor: string;
		axisThickness: number;
		color: string;
		dashLength: number;
		fillAlpha: number;
		fillColor: string;
		gridAlpha: number;
		gridColor: string;
		gridCount: number;
		gridThickness: number;
		includeGuidesInMinMax: boolean;
		includeHidden: boolean;
		inside: boolean;
		integersOnly: boolean;
		labelFrequency: number;
		labelsEnabled: boolean;
		logarithmic: boolean;
		offset: number;
		position: string;
		reversed: boolean;
		showFirstLabel: boolean;
		showLastLabel: boolean;
		stackType: string;
		tickLength: number;
		unit: string;
		unitPosition: string
	}

	declare class AmLegend  {
		align: string;
		autoMargins: boolean;
		backgroundAlpha: number;
		backgroundColor: string;
		borderAlpha: number;
		borderColor: string;
		bottom: number;
		color: string;
		data: any[];
		equalWidths: boolean;
		fontSize: string;
		horizontalGap: number;
		labelText: string;
		left: number;
		marginBottom: number;
		marginLeft: number;
		marginRight: number;
		marginTop: number;
		markerBorderAlpha: number;
		markerBorderColor: string;
		markerBorderThickness: number;
		markerDisabledColor: string;
		markerLabelGap: number;
		markerSize: number;
		markerType: string;
		maxColumns: number;
		position: string;
		reversedOrder: boolean;
		right: number;
		rollOverColor: string;
		rollOverGraphAlpha: number;
		showEntries: boolean;
		spacing: number;
		switchable: boolean;
		switchColor: string;
		switchType: string;
		textClickEnabled: boolean;
		top: number;
		useGraphSettings: boolean;
		useMarkerColorForLabels: boolean;
		valueAlign: string;
		valueText: string;
		valueWidth: number;
		verticalGap: number;
		addListener(
		type: string, handler: (e: {
		type: string,
		dataItem: Object,
		chart: AmChart
	}) => void
	);
		removeListener(chart: AmChart, type: string, handler: any)
	}

	declare class StockLegend extends AmLegend {
		valueTextComparing: string;
		valueTextRegular: string
	}

	declare class StockPanel extends AmSerialChart {
		allowTurningOff: boolean;
		drawingIconsEnabled: boolean;
		drawOnAxis: ValueAxis;
		eraseAll: boolean;
		iconSize: number;
		percentHeight: number;
		recalculateToPercents: string;
		showCategoryAxis: boolean;
		stockGraphs: StockGraph[];
		stockLegend: StockLegend;
		title: string;
		trendLineAlpha: number;
		trendLineColor: string;
		trendLineDashLength: number;
		trendLineThickness: number;
		addStockGraph(graph: StockGraph);
		removeStockGraph(graph: StockGraph)
	}

	declare class AmChart  {
		constructor(theme?: any): this;
		addClassNames: boolean;
		allLabels: Label[];
		autoResize: boolean;
		backgroundAlpha: number;
		backgroundColor: string;
		balloon: AmBalloon;
		borderAlpha: number;
		borderColor: string;
		classNamePrefix: string;
		color: string;
		creditsPosition: string;
		dataProvider: any[];
		decimalSeparator: string;
		defs: any;
		export: ExportSettings;
		fontFamily: string;
		fontSize: string;
		handDrawn: boolean;
		handDrawScatter: number;
		handDrawThickness: number;
		hideBalloonTime: number;
		language: string;
		legend: AmLegend;
		legendDiv: HTMLElement;
		listerns: Object[];
		panEventsEnabled: boolean;
		path: string;
		pathToImages: string;
		percentPrecision: number;
		precision: number;
		prefixesOfBigNumbers: any[];
		prefixesOfSmallNumbers: any[];
		responsive: any;
		theme: string;
		thousandsSeparator: string;
		titles: Title[];
		type: string;
		usePrefixes: boolean;
		version: string;
		addLabel(
		x: number | string, y: number | string, text: string, align: string, size?: number, color?: string, rotation?: number, alpha?: number, bold?: boolean, url?: string
	);
		addLegend(legend: AmLegend, legendDivId?: string);
		addLegend(legend: AmLegend, legendDiv: HTMLElement);
		addTitle(text: string, size: number, color: string, alpha: number, bold: boolean);
		clear();
		clearLabels();
		invalidateSize();
		removeLegend();
		validateData();
		validateNow();
		write(container: HTMLElement): void;
		write(container: string): void;
		addListener(type: string, handler: (e: {
		type: string,
		chart: AmChart
	}) => void);
		removeListener(chart: AmChart, type: string, handler: any)
	}

	declare class AmCoordinateChart extends AmChart {
		chartData: Object[];
		colors: string[];
		graphs: AmGraph[];
		gridAboveGraphs: boolean;
		guides: Guide[];
		sequencedAnimation: boolean;
		startAlpha: number;
		startDuration: number;
		startEffect: string;
		urlTarget: any;
		valueAxes: any[];
		addGraph(graph: AmGraph);
		addValueAxis(axis: ValueAxis);
		animateAgain();
		getGraphById(graphId: string): AmGraph;
		getValueAxisById(axisId: string): ValueAxis;
		hideGraph(graph: AmGraph);
		hideGraphsBalloon(graph: AmGraph);
		highlightGraph(graph: AmGraph);
		removeGraph(graph: AmGraph);
		removeValueAxis(axis: ValueAxis);
		showGraph(graph: AmGraph);
		showGraphsBalloon(graph: AmGraph);
		unhighlightGraph(graph: AmGraph);
		addListener(
		type: string, handler: (
		e: {
		type: string,
		graph: AmGraph,
		item: GraphDataItem,
		index: number,
		chart: AmChart
	}
	) => void
	)
	}

	declare class GraphDataItem  {
		alpha: number;
		bullet: string;
		bulletSize: number;
		category: string;
		color: string;
		customBullet: string;
		dataContext: Object;
		description: string;
		fillColors: any[];
		percents: Object;
		serialDataItem: SerialDataItem;
		url: string;
		values: Object;
		x: number;
		y: number
	}

	declare class SerialDataItem  {
		axes: Object;
		category: any;
		time: number;
		x: number
	}

	declare class CategoryAxis extends AxisBase {
		boldPeriodBeginning: boolean;
		dateFormats: any[];
		equalSpacing: boolean;
		forceShowField: string;
		gridPosition: string;
		minorGridEnabled: boolean;
		minPeriod: string;
		parseDates: boolean;
		startOnAxis: boolean;
		twoLineMode: boolean;
		useLineColorForBulletBorder: boolean;
		categoryToCoordinate(category: string);
		coordinateToDate(coordinate: number);
		dateToCoordinate(date: Date);
		xToIndex(x: number)
	}

	declare class ChartScrollbar  {
		autoGridCount: boolean;
		backgroundAlpha: number;
		backgroundColor: string;
		categoryAxis: CategoryAxis;
		color: string;
		graph: AmGraph;
		graphFillAlpha: number;
		graphFillColor: string;
		graphLineAlpha: number;
		graphLineColor: string;
		graphType: string;
		gridAlpha: number;
		gridColor: string;
		gridCount: number;
		hideResizeGrips: boolean;
		resizeEnabled: boolean;
		scrollbarHeight: number;
		scrollDuration: number;
		selectedBackgroundAlpha: number;
		selectedBackgroundColor: string;
		selectedGraphFillAlpha: number;
		selectedGraphFillColor: string;
		selectedGraphLineAlpha: number;
		selectedGraphLineColor: string;
		updateOnReleaseOnly: boolean
	}

	declare class AmRectangularChart extends AmCoordinateChart {
		angle: number;
		autoMarginOffset: number;
		autoMargins: boolean;
		chartCursor: ChartCursor;
		chartScrollbar: ChartScrollbar;
		depth3D: number;
		marginBottom: number;
		marginLeft: number;
		marginRight: number;
		marginsUpdated: boolean;
		marginTop: number;
		plotAreaBorderAlpha: number;
		plotAreaBorderColor: string;
		plotAreaFillAlphas: number;
		plotAreaFillColors: any;
		plotAreaGradientAngle: number;
		trendLines: TrendLine[];
		zoomOutButtonAlpha: number;
		zoomOutButtonColor: string;
		zoomOutButtonImage: string;
		zoomOutButtonImageSize: number;
		zoomOutButtonPadding: number;
		zoomOutButtonRollOverAlpha: number;
		zoomOutText: string;
		addChartCursor(cursor: ChartCursor);
		addChartScrollbar(scrollbar: ChartScrollbar);
		addTrendLine(trendLine: TrendLine);
		removeChartCursor();
		removeChartScrollbar();
		removeTrendLine(trendLine: TrendLine)
	}

	declare class TrendLine  {
		
	}

	declare class ChartCursor  {
		bulletsEnabled: boolean;
		bulletSize: number;
		categoryBalloonAlpha: number;
		categoryBalloonColor: string;
		categoryBalloonDateFormat: string;
		categoryBalloonEnabled: boolean;
		color: string;
		cursorAlpha: number;
		cursorColor: string;
		cursorPosition: string;
		enabled: boolean;
		fullWidth: boolean;
		oneBalloonOnly: boolean;
		pan: boolean;
		selectionAlpha: number;
		selectWithoutZooming: boolean;
		valueBalloonsEnabled: boolean;
		zoomable: boolean;
		zooming: boolean;
		hideCursor();
		showCursorAt(category: string);
		addListener(
		type: string, handler: (
		e: {
		type: string,
		index: number,
		zooming: boolean,
		mostCloseGraph: AmGraph,
		chart: AmChart
	}
	) => void
	);
		addListener(type: string, handler: (e: {
		type: string,
		chart: AmChart
	}) => void);
		addListener(
		type: string, handler: (
		e: {
		type: string,
		index: number,
		zooming: boolean,
		chart: AmChart
	}
	) => void
	);
		removeListener(chart: AmChart, type: string, handler: any)
	}

	declare class AmSerialChart extends AmRectangularChart {
		balloonDateFormat: string;
		categoryAxis: CategoryAxis;
		categoryField: string;
		columnSpacing: number;
		columnSpacing3D: number;
		columnWidth: number;
		endDate: Date;
		endIndex: number;
		maxSelectedSeries: number;
		maxSelectedTime: number;
		minSelectedTime: number;
		mouseWheelScrollEnabled: boolean;
		mouseWheelZoomEnabled: boolean;
		rotate: boolean;
		startDate: Date;
		startIndex: number;
		zoomOutOnDataUpdate: boolean;
		getCategoryIndexByValue(value: number);
		zoomOut();
		zoomToCategoryValues(start: Date, end: Date);
		zoomToDates(start: Date, end: Date);
		zoomToIndexes(start: Date, end: Date)
	}

	declare class PeriodSelector  {
		dateFormat: string;
		fromText: string;
		hideOutOfScopePeriods: boolean;
		inputFieldsEnabled: boolean;
		inputFieldWidth: number;
		periods: any[];
		periodsText: string;
		position: string;
		selectFromStart: boolean;
		toText: string;
		width: number;
		addListener(
		type: string, handler: (
		e: {
		type: string,
		startDate: Date,
		endDate: Date,
		predefinedPeriod: string,
		count: number
	}
	) => void
	);
		removeListener(chart: AmChart, type: string, handler: any)
	}

	declare class PanelsSettings  {
		angle: number;
		backgroundAlpha: number;
		backgroundColor: string;
		columnSpacing: number;
		columnWidth: number;
		depth3D: number;
		fontFamily: string;
		fontSize: string;
		marginBottom: number;
		marginLeft: number;
		marginRight: number;
		marginTop: number;
		panelSpacing: number;
		panEventsEnabled: boolean;
		plotAreaBorderAlpha: number;
		plotAreaBorderColor: string;
		plotAreaFillAlphas: number;
		plotAreaFillColors: any;
		prefixesOfBigNumbers: any[];
		prefixesOfSmallNumbers: any[];
		sequencedAnimation: boolean;
		startAlpha: number;
		startDuration: number;
		startEffect: string;
		usePrefixes: boolean
	}

	declare class DataSet  {
		categoryField: string;
		color: string;
		compared: boolean;
		dataProvider: any[];
		fieldMappings: any[];
		showInCompare: boolean;
		showInSelect: boolean;
		stockEvents: StockEvent[];
		title: string
	}

	declare class StockGraph extends AmGraph {
		comparable: boolean;
		compareField: string;
		compareGraphBalloonColor: string;
		compareGraphBalloonText: string;
		compareGraphBullet: string;
		compareGraphBulletSize: number;
		compareGraphCornerRadiusTop: number;
		compareGraphDashLength: number;
		compareGraphFillAlphas: number;
		compareGraphFillColors: string;
		compareGraphLineAlpha: number;
		compareGraphLineThickness: number;
		compareGraphType: string;
		compareGraphVisibleInLegend: boolean;
		periodValue: string;
		useDataSetColors: boolean
	}

	declare class StockEvent  {
		backgroundAlpha: number;
		backgroundColor: string;
		borderAlpha: number;
		borderColor: string;
		color: string;
		date: Date;
		graph: StockGraph;
		rollOverColor: string;
		showOnAxis: boolean;
		text: string;
		type: string;
		url: string;
		urlTarget: string
	}

	declare class Label  {
		align: string;
		alpha: number;
		bold: boolean;
		color: string;
		id: string;
		rotation: number;
		size: number;
		text: string;
		url: string;
		x: number | string;
		y: number | string
	}

	declare class LegendSettings  {
		align: string;
		equalWidths: boolean;
		horizontalGap: number;
		labelText: string;
		marginBottom: number;
		marginTop: number;
		markerBorderAlpha: number;
		markerBorderColor: string;
		markerBorderThickness: number;
		markerDisabledColor: string;
		markerLabelGap: number;
		markerSize: number;
		markerType: string;
		reversedOrder: boolean;
		rollOverColor: string;
		rollOverGraphAlpha: number;
		switchable: boolean;
		switchColor: string;
		switchType: string;
		textClickEnabled: boolean;
		useMarkerColorForLabels: boolean;
		valueTextComparing: string;
		valueTextRegular: string;
		valueWidth: number;
		verticalGap: number
	}

	declare class DataSetSelector  {
		comboBoxSelectText: string;
		compareText: string;
		listHeight: number;
		position: string;
		selectText: string;
		width: number
	}

	declare class AmBalloon  {
		adjustBorderColor: boolean;
		borderAlpha: number;
		borderColor: string;
		borderThickness: number;
		color: string;
		cornerRadius: number;
		fillAlpha: number;
		fillColor: string;
		fontSize: string;
		horizontalPadding: number;
		pointerWidth: number;
		showBullet: boolean;
		textAlign: string;
		textShadowColor: string;
		verticalPadding: number;
		hide();
		setBounds(left: number, top: number, right: number, bottom: number);
		setPosition(x: number, y: number);
		show(value: string)
	}

	declare class CategoryAxesSettings  {
		autoGridCount: boolean;
		axisAlpha: number;
		axisColor: string;
		axisHeight: number;
		axisThickness: number;
		color: string;
		dashLength: number;
		dateFormats: any[];
		equalSpacing: boolean;
		fillAlpha: number;
		fillColor: string;
		fontSize: string;
		gridAlpha: number;
		gridColor: string;
		gridCount: number;
		gridThickness: number;
		groupToPeriods: any[];
		inside: boolean;
		labelRotation: number;
		maxSeries: number;
		minPeriod: string;
		position: string;
		startOnAxis: boolean;
		tickLength: number
	}

	declare class ChartCursorSettings  {
		bulletsEnabled: boolean;
		bulletSize: number;
		categoryBalloonAlpha: number;
		categoryBalloonColor: string;
		categoryBalloonDateFormats: any[];
		categoryBalloonEnabled: boolean;
		cursorAlpha: number;
		cursorColor: string;
		cursorPosition: string;
		enabled: boolean;
		pan: boolean;
		valueBalloonsEnabled: boolean;
		zoomable: boolean
	}

	declare class ChartScrollbarSettings  {
		autoGridCount: boolean;
		backgroundAlpha: number;
		backgroundColor: string;
		color: string;
		enabled: boolean;
		fontSize: string;
		graph: AmGraph;
		graphFillAlpha: number;
		graphFillColor: string;
		graphLineAlpha: number;
		graphLineColor: string;
		graphType: string;
		gridAlpha: number;
		gridColor: string;
		gridCount: number;
		height: number;
		hideResizeGrips: boolean;
		scrollDuration: number;
		selectedBackgroundAlpha: number;
		selectedBackgroundColor: string;
		selectedGraphFillAlpha: number;
		selectedGraphFillColor: string;
		selectedGraphLineAlpha: number;
		selectedGraphLineColor: string;
		updateOnReleaseOnly: boolean
	}

	declare class AmGraph  {
		alphaField: string;
		balloonColor: string;
		balloonFunction(graphDataItem: GraphDataItem, amGraph: AmGraph): string;
		balloonText: string;
		behindColumns: boolean;
		bullet: string;
		bulletAlpha: number;
		bulletBorderAlpha: number;
		bulletBorderColor: string;
		bulletBorderThickness: number;
		bulletColor: string;
		bulletField: string;
		bulletOffset: number;
		bulletSize: number;
		bulletSizeField: string;
		closeField: string;
		color: string;
		colorField: string;
		connect: boolean;
		cornerRadiusTop: number;
		cursorBulletAlpha: number;
		customBullet: string;
		customBulletField: string;
		dashLength: number;
		descriptionField: string;
		fillAlphas: number;
		fillColors: any;
		fillColorsField: string;
		fillToGraph: AmGraph;
		fontSize: string;
		gradientOrientation: string;
		hidden: boolean;
		hideBulletsCount: number;
		highField: string;
		includeInMinMax: boolean;
		labelColorField: string;
		labelPosition: string;
		labelText: string;
		legendAlpha: number;
		legendColor: string;
		legendValueText: string;
		lineAlpha: number;
		lineColor: string;
		lineColorField: string;
		lineThickness: number;
		lowField: string;
		markerType: string;
		maxBulletSize: number;
		minBulletSize: number;
		negativeBase: number;
		negativeFillAlphas: number;
		negativeFillColors: any;
		negativeLineColor: string;
		numberFormatter: Object;
		openField: string;
		pointPosition: string;
		showAllValueLabels: boolean;
		showBalloon: boolean;
		showBalloonAt: string;
		stackable: boolean;
		title: string;
		type: string;
		urlField: string;
		urlTarget: string;
		valueAxis: ValueAxis;
		valueField: string;
		visibleInLegend: boolean;
		xAxis: ValueAxis;
		xField: string;
		yAxis: ValueAxis;
		yField: string
	}

	declare class AxisBase  {
		autoGridCount: boolean;
		axisAlpha: number;
		axisColor: string;
		axisThickness: number;
		color: string;
		dashLength: number;
		fillAlpha: number;
		fillColor: string;
		fontSize: string;
		gridAlpha: number;
		gridColor: string;
		gridCount: number;
		gridThickness: number;
		guides: any[];
		ignoreAxisWidth: boolean;
		inside: boolean;
		labelFrequency: number;
		labelRotation: number;
		labelsEnabled: boolean;
		offset: number;
		position: string;
		showFirstLabel: boolean;
		showLastLabel: boolean;
		tickLength: number;
		title: string;
		titleBold: boolean;
		titleColor: string;
		titlefontSize: string;
		addGuide(guide: Guide);
		removeGuide(guide: Guide)
	}

	declare class ValueAxis extends AxisBase {
		axisTitleOffset: number;
		baseCoord: number;
		baseValue: number;
		duration: string;
		durationUnits: Object;
		gridType: string;
		id: string;
		includeGuidesInMinMax: boolean;
		includeHidden: boolean;
		integersOnly: boolean;
		labelFunction(value: number, valueText: string, valueAxis: ValueAxis): string;
		labelFunction(valueText: string, data: Date, valueAxis: ValueAxis): string;
		logarithmic: boolean;
		max: number;
		maximum: number;
		maximumData: Date;
		min: number;
		minimum: number;
		minimumDate: Date;
		minMaxMultiplier: number;
		pointPosition: string;
		position: string;
		precision: number;
		radarCategoriesEnabled: boolean;
		recalculateToPercents: boolean;
		reversed: boolean;
		stackType: string;
		step: number;
		strictMinMax: boolean;
		synchronizationMultiplier: number;
		synchronizeWith: ValueAxis;
		totalText: string;
		totalTextColor: string;
		totalTextOffset: number;
		treatZeroAs: number;
		type: string;
		unit: string;
		unitPosition: string;
		usePrefixes: boolean;
		useScientificNotation: boolean;
		addGuide(guide: Guide);
		addListener(type: string, handler: any);
		coordinateToValue(coordinate: number);
		getCoordinate(value: number);
		removeGuide(guide: Guide);
		removeListener(obj: any, type: string, handler: any);
		synchronizeWithAxis(axis: ValueAxis);
		zoomToValues(startValue: number, endValue: number);
		addListener(
		type: string, handler: (
		e: {
		type: string,
		startValue: Date,
		endValue: Date,
		chart: AmChart
	}
	) => void
	);
		addListener(type: string, handler: (e: {
		type: string,
		chart: AmChart
	}) => void);
		removeListener(chart: AmChart, type: string, handler: any)
	}

	declare class Title  {
		alpha: number;
		bold: boolean;
		color: string;
		id: string;
		size: number;
		text: string
	}

	declare class ExportSettings  {
		enabled: boolean;
		libs: Object;
		menu: Object
	}

	
}
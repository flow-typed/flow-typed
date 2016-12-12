

declare module 'canvasjs' {
					
}

declare module 'npm$namespace$CanvasJS' {
		declare interface CultureInfo {
		decimalSeparator?: string,
		digitGroupSeparator?: string,
		zoomText?: string,
		panText?: string,
		resetText?: string,
		savePNGText?: string,
		saveJPGText?: string,
		menuText?: string,
		days?: string[],
		shortDays?: string[],
		months?: string[],
		shortMonths?: string[]
	}

	declare interface ChartOptions {
		interactivityEnabled?: boolean,
		animationEnabled?: boolean,
		exportFileName?: string,
		exportEnabled?: boolean,
		zoomEnabled?: boolean,
		theme?: string,
		backgroundColor?: string,
		colorSet?: string,
		culture?: string,
		width?: number,
		height?: number,
		title: ChartTitleOptions,
		legend?: ChartLegendOptions,
		axisX?: ChartAxisXOptions,
		axisY?: ChartAxisYOptions,
		toolTip?: ChartToolTipOptions,
		data: ChartDataOptions[]
	}

	declare interface ChartTitleOptions {
		text?: string,
		verticalAlign?: string,
		horizontalAlign?: string,
		fontSize?: number,
		fontFamily?: string,
		fontWeight?: string,
		fontColor?: string,
		fontStyle?: string,
		borderThickness?: number,
		cornerRadius?: number,
		borderColor?: string,
		backgroundColor?: string,
		margin?: number,
		padding?: number
	}

	declare interface ChartLegendOptions {
		cursor?: string,
		fontSize?: number,
		fontFamily?: string,
		fontColor?: string,
		fontWeight?: string,
		fontStyle?: string,
		verticalAlign?: string,
		horizontalAlign?: string,
		itemmouseover?: (event: ChartEvent) => void,
		itemmousemove?: (event: ChartEvent) => void,
		itemmouseout?: (event: ChartEvent) => void,
		itemclick?: (event: ChartEvent) => void
	}

	declare interface ChartEvent {
		x: any,
		y: number,
		chart: Chart,
		dataPoint: ChartDataPoint,
		dataSeries: ChartDataOptions,
		dataPointIndex: number,
		dataSeriesIndex: number
	}

	declare interface ChartAxisOptions {
		title?: string,
		titleFontColor?: string,
		titleFontSize?: number,
		titleFontFamily?: string,
		titleFontWeight?: string,
		titleFontStyle?: string,
		margin?: number,
		labelAngle?: number,
		labelFontColor?: string,
		labelFontSize?: number,
		labelFontFamily?: string,
		labelFontWeight?: string,
		labelFontStyle?: string,
		prefix?: string,
		suffix?: string,
		valueFormatString?: string,
		interval?: number,
		intervalType?: string,
		tickLength?: number,
		tickColor?: string,
		tickThickness?: number,
		lineColor?: string,
		lineThickness?: string,
		interlaceColor?: string,
		gridThickness?: number,
		gridColor?: string,
		interlacedColor?: string,
		stripLines?: ChartStripLines
	}

	declare interface ChartStripLines {
		value?: number,
		startValue?: number,
		endValue?: number,
		thickness?: number,
		color?: string,
		label?: string,
		labelBackgroundColor?: string,
		labelFontFamily?: string,
		labelFontColor?: string,
		labelFontSize?: number,
		labelFontWeight?: string,
		labelFontStyle?: string
	}

	declare interface ChartAxisXOptions {
		minimum?: number | Date,
		maximum?: number | Date
	}

	declare interface ChartAxisYOptions {
		includeZero?: boolean,
		minimum?: number,
		maximum?: number
	}

	declare interface ChartToolTipOptions {
		enabled?: boolean,
		shared?: boolean,
		content?: string,
		animationEnabled?: boolean,
		borderColor?: string
	}

	declare interface ChartDataCommon {
		name?: string,
		color?: string,
		indexLabel?: string,
		indexLabelPlacement?: string,
		indexLabelOrientation?: string,
		indexLabelBackgroundColor?: string,
		indexLabelFontStyle?: string,
		indexLabelFontColor?: string,
		indexLabelFontSize?: number,
		indexLabelFontFamily?: string,
		indexLabelFontWeight?: string,
		indexLabelLineColor?: string,
		indexLabelLineThickness?: string,
		toolTipContent?: string,
		markerType?: string,
		markerColor?: string,
		markerSize?: number,
		markerBorderColor?: string,
		markerBorderThickness?: number,
		legendText?: string,
		legendMarkerType?: string,
		click?: (event: ChartEvent) => void,
		legendMarkerColor?: string,
		mouseover?: (event: ChartEvent) => void,
		mousemove?: (event: ChartEvent) => void,
		mouseout?: (event: ChartEvent) => void
	}

	declare interface ChartDataOptions {
		visible?: boolean,
		type?: string,
		axisYType?: string,
		xValueType?: string,
		yValueFormatString?: string,
		xValueFormatString?: string,
		zValueFormatString?: string,
		bevelEnabled?: boolean,
		fillOpacity?: number,
		startAngle?: number,
		lineThickness?: number,
		showInLegend?: boolean,
		risingColor?: string,
		dataPoints: ChartDataPoint[]
	}

	declare interface ChartDataPoint {
		x?: any,
		y?: number,
		z?: number,
		label?: string,
		exploded?: boolean,
		legendMarkerColor?: string
	}

	declare function addColorSet(colorSetName: string, colorSetArray: string[]): void

	declare function addCultureInfo(culture: string, info: CultureInfo): void

	declare class Chart  {
		options: ChartOptions;
		constructor(containerId: string, options?: ChartOptions): this;
		render(options?: ChartOptions): void
	}

	
}


declare module 'chart' {
		declare interface ChartDataSet {
		label: string,
		fillColor: string,
		strokeColor: string,
		pointColor?: string,
		pointStrokeColor?: string,
		pointHighlightFill?: string,
		pointHighlightStroke?: string,
		highlightFill?: string,
		highlightStroke?: string,
		data: number[]
	}

	declare interface LinearChartData {
		labels: string[],
		datasets: ChartDataSet[]
	}

	declare interface CircularChartData {
		value: number,
		color?: string,
		highlight?: string,
		label?: string
	}

	declare interface ChartSettings {
		animation?: boolean,
		animationSteps?: number,
		animationEasing?: string,
		showScale?: boolean,
		scaleOverride?: boolean,
		scaleSteps?: number,
		scaleStepWidth?: number,
		scaleStartValue?: number,
		scaleLineColor?: string,
		scaleLineWidth?: number,
		scaleShowLabels?: boolean,
		scaleLabel?: string,
		scaleIntegersOnly?: boolean,
		scaleBeginAtZero?: boolean,
		scaleFontFamily?: string,
		scaleFontSize?: number,
		scaleFontStyle?: string,
		scaleFontColor?: string,
		responsive?: boolean,
		maintainAspectRatio?: boolean,
		showTooltips?: boolean,
		tooltipEvents?: string[],
		tooltipFillColor?: string,
		tooltipFontFamily?: string,
		tooltipFontSize?: number,
		tooltipFontStyle?: string,
		tooltipFontColor?: string,
		tooltipTitleFontFamily?: string,
		tooltipTitleFontSize?: number,
		tooltipTitleFontStyle?: string,
		tooltipTitleFontColor?: string,
		tooltipYPadding?: number,
		tooltipXPadding?: number,
		tooltipCaretSize?: number,
		tooltipCornerRadius?: number,
		tooltipXOffset?: number,
		tooltipTemplate?: string,
		multiTooltipTemplate?: string,
		onAnimationProgress?: () => any,
		onAnimationComplete?: () => any
	}

	declare interface ChartOptions {
		scaleShowGridLines?: boolean,
		scaleGridLineColor?: string,
		scaleGridLineWidth?: number,
		scaleShowHorizontalLines?: boolean,
		scaleShowVerticalLines?: boolean,
		legendTemplate?: string
	}

	declare interface PointsAtEvent {
		value: number,
		label: string,
		datasetLabel: string,
		strokeColor: string,
		fillColor: string,
		highlightFill: string,
		highlightStroke: string,
		x: number,
		y: number
	}

	declare interface ChartInstance {
		clear: () => void,
		stop: () => void,
		resize: () => void,
		destroy: () => void,
		toBase64Image: () => string,
		generateLegend: () => string
	}

	declare interface LinearInstance {
		getPointsAtEvent: (event: Event) => PointsAtEvent[],
		update: () => void,
		addData: (valuesArray: number[], label: string) => void,
		removeData: (index?: number) => void
	}

	declare interface CircularInstance {
		getSegmentsAtEvent: (event: Event) => {
		
	}[],
		update: () => void,
		addData: (valuesArray: CircularChartData, index?: number) => void,
		removeData: (index: number) => void,
		segments: Array<CircularChartData>
	}

	declare interface LineChartOptions {
		bezierCurve?: boolean,
		bezierCurveTension?: number,
		pointDot?: boolean,
		pointDotRadius?: number,
		pointDotStrokeWidth?: number,
		pointHitDetectionRadius?: number,
		datasetStroke?: boolean,
		datasetStrokeWidth?: number,
		datasetFill?: boolean
	}

	declare interface BarChartOptions {
		scaleBeginAtZero?: boolean,
		barShowStroke?: boolean,
		barStrokeWidth?: number,
		barValueSpacing?: number,
		barDatasetSpacing?: number
	}

	declare interface RadarChartOptions {
		scaleShowLine?: boolean,
		angleShowLineOut?: boolean,
		scaleShowLabels?: boolean,
		scaleBeginAtZero?: boolean,
		angleLineColor?: string,
		angleLineWidth?: number,
		pointLabelFontFamily?: string,
		pointLabelFontStyle?: string,
		pointLabelFontSize?: number,
		pointLabelFontColor?: string,
		pointDot?: boolean,
		pointDotRadius?: number,
		pointDotStrokeWidth?: number,
		pointHitDetectionRadius?: number,
		datasetStroke?: boolean,
		datasetStrokeWidth?: number,
		datasetFill?: boolean,
		legendTemplate?: string
	}

	declare interface PolarAreaChartOptions {
		scaleShowLabelBackdrop?: boolean,
		scaleBackdropColor?: string,
		scaleBeginAtZero?: boolean,
		scaleBackdropPaddingY?: number,
		scaleBackdropPaddingX?: number,
		scaleShowLine?: boolean,
		segmentShowStroke?: boolean,
		segmentStrokeColor?: string,
		segmentStrokeWidth?: number,
		animationSteps?: number,
		animationEasing?: string,
		animateRotate?: boolean,
		animateScale?: boolean,
		legendTemplate?: string
	}

	declare interface PieChartOptions {
		segmentShowStroke?: boolean,
		segmentStrokeColor?: string,
		segmentStrokeWidth?: number,
		percentageInnerCutout?: number,
		animationSteps?: number,
		animationEasing?: string,
		animateRotate?: boolean,
		animateScale?: boolean,
		legendTemplate?: string
	}

	declare interface Chart {
		Line(data: LinearChartData, options?: LineChartOptions): LinearInstance,
		Bar(data: LinearChartData, options?: BarChartOptions): LinearInstance,
		Radar(data: LinearChartData, options?: RadarChartOptions): LinearInstance,
		PolarArea(data: CircularChartData[], options?: PolarAreaChartOptions): CircularInstance,
		Pie(data: CircularChartData[], options?: PieChartOptions): CircularInstance,
		Doughnut(data: CircularChartData[], options?: PieChartOptions): CircularInstance
	}

			
}
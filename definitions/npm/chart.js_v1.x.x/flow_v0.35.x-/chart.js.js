

declare module 'chart.js' {
	declare type ChartColor = string | CanvasGradient | CanvasPattern;

	declare interface ChartLegendItem {
		text?: string,
		fillStyle?: string,
		hidden?: boolean,
		lineCap?: string,
		lineDash?: number[],
		lineDashOffset?: number,
		lineJoin?: string,
		lineWidth?: number,
		strokeStyle?: string
	}

	declare interface ChartTooltipItem {
		xLabel?: string,
		yLabel?: string,
		datasetIndex?: number,
		index?: number
	}

	declare interface ChartTooltipCallback {
		beforeTitle?: (item?: ChartTooltipItem[], data?: any) => void,
		title?: (item?: ChartTooltipItem[], data?: any) => void,
		afterTitle?: (item?: ChartTooltipItem[], data?: any) => void,
		beforeBody?: (item?: ChartTooltipItem[], data?: any) => void,
		beforeLabel?: (tooltipItem?: ChartTooltipItem, data?: any) => void,
		label?: (tooltipItem?: ChartTooltipItem, data?: any) => void,
		afterLabel?: (tooltipItem?: ChartTooltipItem, data?: any) => void,
		afterBody?: (item?: ChartTooltipItem[], data?: any) => void,
		beforeFooter?: (item?: ChartTooltipItem[], data?: any) => void,
		footer?: (item?: ChartTooltipItem[], data?: any) => void,
		afterfooter?: (item?: ChartTooltipItem[], data?: any) => void
	}

	declare interface ChartAnimationParameter {
		chartInstance?: any,
		animationObject?: any
	}

	declare interface ChartPoint {
		x?: number,
		y?: number
	}

	declare interface ChartConfiguration {
		type?: string,
		data?: ChartData,
		options?: ChartOptions
	}

	declare interface ChartData {
		
	}

	declare interface LinearChartData {
		labels?: string[],
		datasets?: ChartDataSets[]
	}

	declare interface ChartOptions {
		responsive?: boolean,
		responsiveAnimationDuration?: number,
		maintainAspectRatio?: boolean,
		events?: string[],
		onClick?: (any?: any) => any,
		title?: ChartTitleOptions,
		legend?: ChartLegendOptions,
		tooltips?: ChartTooltipOptions,
		hover?: ChartHoverOptions,
		animation?: ChartAnimationOptions,
		elements?: ChartElementsOptions,
		scales?: ChartScales
	}

	declare interface ChartFontOptions {
		defaultFontColor?: ChartColor,
		defaultFontFamily?: string,
		defaultFontSize?: number,
		defaultFontStyle?: string
	}

	declare interface ChartTitleOptions {
		display?: boolean,
		position?: string,
		fullWdith?: boolean,
		fontSize?: number,
		fontFamily?: string,
		fontColor?: ChartColor,
		fontStyle?: string,
		padding?: number,
		text?: string
	}

	declare interface ChartLegendOptions {
		display?: boolean,
		position?: string,
		fullWidth?: boolean,
		onClick?: (event: any, legendItem: any) => void,
		labels?: ChartLegendLabelOptions
	}

	declare interface ChartLegendLabelOptions {
		boxWidth?: number,
		fontSize?: number,
		fontStyle?: number,
		fontColor?: ChartColor,
		fontFamily?: string,
		padding?: number,
		generateLabels?: (chart: any) => any
	}

	declare interface ChartTooltipOptions {
		enabled?: boolean,
		custom?: (a: any) => void,
		mode?: string,
		backgroundColor?: ChartColor,
		titleFontFamily?: string,
		titleFontSize?: number,
		titleFontStyle?: string,
		titleFontColor?: ChartColor,
		titleSpacing?: number,
		titleMarginBottom?: number,
		bodyFontFamily?: string,
		bodyFontSize?: number,
		bodyFontStyle?: string,
		bodyFontColor?: ChartColor,
		bodySpacing?: number,
		footerFontFamily?: string,
		footerFontSize?: number,
		footerFontStyle?: string,
		footerFontColor?: ChartColor,
		footerSpacing?: number,
		footerMarginTop?: number,
		xPadding?: number,
		yPadding?: number,
		caretSize?: number,
		cornerRadius?: number,
		multiKeyBackground?: string,
		callbacks?: ChartTooltipCallback
	}

	declare interface ChartHoverOptions {
		mode?: string,
		animationDuration?: number,
		onHover?: (active: any) => void
	}

	declare interface ChartAnimationObject {
		currentStep?: number,
		numSteps?: number,
		easing?: string,
		render?: (arg: any) => void,
		onAnimationProgress?: (arg: any) => void,
		onAnimationComplete?: (arg: any) => void
	}

	declare interface ChartAnimationOptions {
		duration?: number,
		easing?: string,
		onProgress?: (chart: any) => void,
		onComplete?: (chart: any) => void
	}

	declare interface ChartElementsOptions {
		point?: ChartPointOptions,
		line?: ChartLineOptions,
		arg?: ChartArcOtpions,
		rectangle?: ChartRectangleOptions
	}

	declare interface ChartArcOtpions {
		backgroundColor?: ChartColor,
		borderColor?: ChartColor,
		borderWidth?: number
	}

	declare interface ChartLineOptions {
		tension?: number,
		backgroundColor?: ChartColor,
		borderWidth?: number,
		borderColor?: ChartColor,
		borderCapStyle?: string,
		borderDash?: any[],
		borderDashOffset?: number,
		borderJoinStyle?: string
	}

	declare interface ChartPointOptions {
		radius?: number,
		pointStyle?: string,
		backgroundColor?: ChartColor,
		borderWidth?: number,
		borderColor?: ChartColor,
		hitRadius?: number,
		hoverRadius?: number,
		hoverBorderWidth?: number
	}

	declare interface ChartRectangleOptions {
		backgroundColor?: ChartColor,
		borderWidth?: number,
		borderColor?: ChartColor,
		borderSkipped?: string
	}

	declare interface GridLineOptions {
		display?: boolean,
		color?: ChartColor,
		lineWidth?: number,
		drawBorder?: boolean,
		drawOnChartArea?: boolean,
		drawticks?: boolean,
		tickMarkLength?: number,
		zeroLineWidth?: number,
		zeroLineColor?: ChartColor,
		offsetGridLines?: boolean
	}

	declare interface ScaleTitleOptions {
		display?: boolean,
		labelString?: string,
		fontColor?: ChartColor,
		fontFamily?: string,
		fontSize?: number,
		fontStyle?: string
	}

	declare interface TickOptions {
		autoSkip?: boolean,
		callback?: (value: any, index: any, values: any) => string,
		display?: boolean,
		fontColor?: ChartColor,
		fontFamily?: string,
		fontSize?: number,
		fontStyle?: string,
		labelOffset?: number,
		maxRotation?: number,
		minRotation?: number,
		mirror?: boolean,
		padding?: number,
		reverse?: boolean,
		min?: any,
		max?: any
	}

	declare interface AngleLineOptions {
		display?: boolean,
		color?: ChartColor,
		lineWidth?: number
	}

	declare interface PointLabelOptions {
		callback?: (arg: any) => any,
		fontColor?: ChartColor,
		fontFamily?: string,
		fontSize?: number,
		fontStyle?: string
	}

	declare interface TickOptions {
		backdropColor?: ChartColor,
		backdropPaddingX?: number,
		backdropPaddingY?: number,
		maxTicksLimit?: number,
		showLabelBackdrop?: boolean
	}

	declare interface LinearTickOptions {
		beginAtZero?: boolean,
		min?: number,
		max?: number,
		maxTicksLimit?: number,
		stepSize?: number,
		suggestedMin?: number,
		suggestedMax?: number
	}

	declare interface LogarithmicTickOptions {
		min?: number,
		max?: number
	}

	declare interface ChartDataSets {
		backgroundColor?: ChartColor,
		borderWidth?: number,
		borderColor?: ChartColor,
		borderCapStyle?: string,
		borderDash?: number[],
		borderDashOffset?: number,
		borderJoinStyle?: string,
		data?: number[] | ChartPoint[],
		fill?: boolean,
		label?: string,
		lineTension?: number,
		pointBorderColor?: ChartColor | ChartColor[],
		pointBackgroundColor?: ChartColor | ChartColor[],
		pointBorderWidth?: number | number[],
		pointRadius?: number | number[],
		pointHoverRadius?: number | number[],
		pointHitRadius?: number | number[],
		pointHoverBackgroundColor?: ChartColor | ChartColor[],
		pointHoverBorderColor?: ChartColor | ChartColor[],
		pointHoverBorderWidth?: number | number[],
		pointStyle?: string | string[] | HTMLImageElement | HTMLImageElement[],
		xAxisID?: string,
		yAxisID?: string
	}

	declare interface ChartScales {
		type?: string,
		display?: boolean,
		position?: string,
		beforeUpdate?: (scale?: any) => void,
		beforeSetDimension?: (scale?: any) => void,
		beforeDataLimits?: (scale?: any) => void,
		beforeBuildTicks?: (scale?: any) => void,
		beforeTickToLabelConversion?: (scale?: any) => void,
		beforeCalculateTickRotation?: (scale?: any) => void,
		beforeFit?: (scale?: any) => void,
		afterUpdate?: (scale?: any) => void,
		afterSetDimension?: (scale?: any) => void,
		afterDataLimits?: (scale?: any) => void,
		afterBuildTicks?: (scale?: any) => void,
		afterTickToLabelConversion?: (scale?: any) => void,
		afterCalculateTickRotation?: (scale?: any) => void,
		afterFit?: (scale?: any) => void,
		gridLines?: GridLineOptions,
		scaleLabel?: ScaleTitleOptions,
		ticks?: TickOptions,
		xAxes?: ChartXAxe[],
		yAxes?: ChartYAxe[]
	}

	declare interface ChartXAxe {
		type?: string,
		display?: boolean,
		id?: string,
		stacked?: boolean,
		categoryPercentage?: number,
		barPercentage?: number,
		barThickness?: number,
		gridLines?: GridLineOptions,
		position?: string,
		ticks?: TickOptions,
		time?: TimeScale,
		scaleLabel?: ScaleTitleOptions
	}

	declare interface ChartYAxe {
		type?: string,
		display?: boolean,
		id?: string,
		stacked?: boolean,
		position?: string,
		ticks?: TickOptions,
		scaleLabel?: ScaleTitleOptions
	}

	declare interface LinearScale {
		ticks?: LinearTickOptions
	}

	declare interface LogarithmicScale {
		ticks?: LogarithmicTickOptions
	}

	declare interface TimeScale {
		format?: string,
		displayFormats?: string,
		isoWeekday?: boolean,
		max?: string,
		min?: string,
		parser?: string | ((arg: any) => any),
		round?: string,
		tooltipFormat?: string,
		unit?: string | TimeUnit,
		unitStepSize?: number
	}

	declare interface RadialLinearScale {
		lineArc?: boolean,
		angleLines?: AngleLineOptions,
		pointLabels?: PointLabelOptions,
		ticks?: TickOptions
	}

		declare class Chart  {
		constructor(context: CanvasRenderingContext2D, options: ChartConfiguration): this;
		config: ChartConfiguration;
		destroy: () => {
		
	};
		update: (duration?: any, lazy?: any) => {
		
	};
		render: (duration?: any, lazy?: any) => {
		
	};
		stop: () => {
		
	};
		resize: () => {
		
	};
		clear: () => {
		
	};
		toBase64: () => string;
		generateLegend: () => {
		
	};
		getElementAtEvent: (e: any) => {
		
	};
		getElementsAtEvent: (e: any) => {
		
	}[];
		getDatasetAtEvent: (e: any) => {
		
	}[];
		defaults: {
		global: ChartOptions
	}
	}

	
}
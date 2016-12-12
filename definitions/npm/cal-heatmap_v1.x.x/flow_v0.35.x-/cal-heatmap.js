import type { CalHeatMapStatic } from 'npm$namespace$CalHeatMap'

declare module 'cal-heatmap' {
					
}

declare module 'npm$namespace$CalHeatMap' {
		declare interface CalHeatMapStatic {
		new (): CalHeatMap
	}

	declare interface CalHeatMap {
		init(options?: InitOptions): void,
		options: RuntimeOptions,
		RESET_ALL_ON_UPDATE: number,
		RESET_SINGLE_ON_UPDATE: number,
		APPEND_ON_UPDATE: number,
		previous(n?: number): void,
		next(n?: number): void,
		jumpTo(date: Date, reset?: boolean): void,
		rewind(): void,
		update(
		data: string | Object, afterLoad?: boolean | Function, updateMode?: number
	): void,
		highlight(dates: string | Date | Date[]): void,
		getSVG(): string,
		setLegend(legend?: number[], legendColors?: LegendColor | string[]): void,
		removeLegend(): void,
		showLegend(): void,
		destroy(callback?: Function): CalHeatMap
	}

	declare interface LegendColor {
		min: string,
		max: string,
		empty?: string,
		base?: string,
		overflow?: string
	}

	declare interface InitOptions {
		itemSelector?: string | HTMLElement | Element | EventTarget,
		domain?: string,
		subDomain?: string,
		range?: number,
		cellSize?: number,
		cellPadding?: number,
		cellRadius?: number,
		domainGutter?: number,
		domainMargin?: number | number[],
		domainDynamicDimension?: boolean,
		verticalOrientation?: boolean,
		label?: Label,
		colLimit?: number,
		rowLimit?: number,
		tooltip?: boolean,
		start?: Date,
		data?: string | Object,
		dataType?: string,
		highlight?: string | string[] | Date[] | any[],
		weekStartOnMonday?: boolean,
		minDate?: Date,
		maxDate?: Date,
		considerMissingDataAsZero?: boolean,
		legend?: number[],
		displayLegend?: boolean,
		legendCellSize?: number,
		legendCellPadding?: number,
		legendMargin?: number | number[],
		legendVerticalPosition?: string,
		legendHorizontalPosition?: string,
		legendOrientation?: string,
		legendColors?: LegendColor | string[],
		itemName?: string | string[],
		subDomainTitleFormat?: SubDomainFormatTemplates,
		subDomainDateFormat?: string | Function,
		subDomainTextFormat?: string | Function,
		domainLabelFormat?: string | Function,
		legendTitleFormat?: LegendTitleTemplates,
		animationDuration?: number,
		previousSelector?: string | HTMLElement,
		nextSelector?: string | HTMLElement,
		itemNamespace?: string,
		onClick?: (date: Date, value: number) => void,
		afterLoad?: () => void,
		afterLoadPreviousDomain?: (date: Date) => void,
		afterLoadNextDomain?: (date: Date) => void,
		onComplete?: () => void,
		afterLoadData?: (data: any) => DataFormat,
		onMinDomainReached?: (reached: boolean) => void,
		onMaxDomainReached?: (reached: boolean) => void
	}

	declare interface RuntimeOptions {
		domainMargin: number[],
		legendMargin: number[],
		highlight: Date[],
		itemName: string[]
	}

	declare interface LegendTitleTemplates {
		lower?: string,
		inner?: string,
		upper?: string
	}

	declare interface SubDomainFormatTemplates {
		empty?: string,
		filled?: string
	}

	declare interface DataFormat {
		[timestamp: string]: number
	}

	declare interface LabelOffset {
		x: number,
		y: number
	}

	declare interface Label {
		position?: string,
		align?: string,
		rotate?: string,
		width?: number,
		offset?: LabelOffset,
		height?: number
	}

			
}
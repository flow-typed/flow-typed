

declare module 'c3' {
					declare module.exports: undefined


}

declare module 'npm$namespace$c3' {
	declare type PrimitiveArray = Array<string | boolean | number>;

	declare type FormatFunction = (v: any, id: string, i: number, j: number) => void;

	declare type ArrayOrString = Array<string> | string;

	declare interface TargetIds {
		ids: ArrayOrString
	}

	declare interface ChartConfiguration {
		bindto?: string | HTMLElement | d3.Selection<any>,
		size?: {
		width?: number,
		height?: number
	},
		padding?: {
		top?: number,
		right?: number,
		bottom?: number,
		left?: number
	},
		color?: {
		pattern?: Array<string>,
		threshold?: any
	},
		interaction?: {
		enabled?: boolean
	},
		transition?: {
		duration?: number
	},
		oninit?: () => void,
		onrendered?: () => void,
		onmouseover?: () => void,
		onmouseout?: () => void,
		onresize?: () => void,
		onresized?: () => void,
		data: Data,
		axis?: Axis,
		grid?: Grid,
		regions?: Array<RegionOptions>,
		legend?: LegendOptions,
		tooltip?: TooltipOptions,
		subchart?: SubchartOptions,
		zoom?: ZoomOptions,
		point?: PointOptions,
		line?: {
		connectNull?: boolean,
		step_type?: string
	},
		area?: {
		zerobased?: boolean
	},
		bar?: {
		width?: number | {
		ratio: number
	},
		zerobased?: boolean
	},
		pie?: {
		label?: {
		show?: boolean,
		format?: (value: number, ratio: number, id: string) => string,
		threshold?: number
	},
		expand?: boolean
	},
		donut?: {
		label?: {
		show?: boolean,
		format?: (value: number, ratio: number, id: string) => string,
		threshold?: number
	},
		expand?: boolean,
		width?: number,
		title?: string
	},
		gauge?: {
		label?: {
		show?: boolean,
		format?: (value: any, ratio: number) => string
	},
		expand?: boolean,
		min?: number,
		max?: number,
		units?: string,
		width?: number
	}
	}

	declare interface Data {
		url?: string,
		json?: Object,
		rows?: Array<PrimitiveArray>,
		columns?: Array<PrimitiveArray>,
		mimeType?: string,
		keys?: {
		x?: string,
		value: Array<string>
	},
		x?: string,
		xs?: {
		[key: string]: string
	},
		xFormat?: string,
		names?: {
		[key: string]: string
	},
		classes?: {
		[key: string]: string
	},
		groups?: Array<Array<string>>,
		axes?: {
		[key: string]: string
	},
		type?: string,
		types?: {
		[key: string]: string
	},
		labels?: boolean | {
		format: FormatFunction
	} | {
		format: {
		[key: string]: FormatFunction
	}
	},
		order?: string | ((...data: string[]) => void),
		regions?: {
		[key: string]: any
	},
		color?: (color: string, d: any) => string | d3.Rgb,
		colors?: {
		[key: string]: string | d3.Rgb
	},
		hide?: boolean | Array<string>,
		empty?: {
		label: {
		text: string
	}
	},
		selection?: {
		enabled?: boolean,
		grouped?: boolean,
		multiple?: boolean,
		draggable?: boolean,
		isselectable?: (d?: any) => boolean
	},
		onclick?: (d: any, element: any) => void,
		onmouseover?: (d: any, element?: any) => void,
		onmouseout?: (d: any, element?: any) => void,
		onselected?: (d: any, element?: any) => void,
		onunselected?: (d: any, element?: any) => void
	}

	declare interface Axis {
		rotated?: boolean,
		x?: XAxisConfiguration,
		y?: YAxisConfiguration,
		y2?: YAxisConfiguration
	}

	declare interface XAxisConfiguration {
		show?: boolean,
		type?: string,
		localtime?: boolean,
		categories?: Array<string>,
		tick?: XTickConfiguration,
		max?: number,
		min?: number,
		padding?: {
		left?: number,
		right?: number
	},
		height?: number,
		extent?: Array<number> | (() => Array<number>),
		label?: string | {
		text: string,
		position: string
	}
	}

	declare interface YAxisConfiguration {
		show?: boolean,
		inner?: boolean,
		max?: number,
		min?: number,
		inverted?: boolean,
		center?: number,
		label?: string | {
		text: string,
		position: string
	},
		tick?: YTickConfiguration,
		padding?: {
		top?: number,
		bottom?: number
	},
		default?: Array<number>
	}

	declare interface XTickConfiguration {
		centered?: boolean,
		format?: string | ((x: number | Date) => string | number),
		culling?: boolean | CullingConfiguration,
		count?: number,
		fit?: boolean,
		values?: Array<number> | Array<string>,
		rotate?: number,
		outer?: boolean,
		multiline?: boolean
	}

	declare interface YTickConfiguration {
		format?: (x: number) => string,
		outer?: boolean,
		values?: Array<number>,
		count?: number
	}

	declare interface CullingConfiguration {
		max: number
	}

	declare interface Grid {
		x?: {
		show?: boolean,
		lines?: Array<LineOptions>
	},
		y?: {
		show?: boolean,
		lines?: Array<LineOptions>
	}
	}

	declare interface LineOptions {
		value: number,
		text?: string,
		axis?: string,
		position?: string,
		class?: string
	}

	declare interface RegionOptions {
		axis?: string,
		start?: string | number | Date,
		end?: string | number | Date,
		class?: string
	}

	declare interface LegendOptions {
		show?: boolean,
		hide?: boolean | ArrayOrString,
		position?: string,
		inset?: {
		anchor?: string,
		x?: number,
		y?: number,
		step?: number
	},
		item?: {
		onclick?: (id: any) => void,
		onmouseover?: (id: any) => void,
		onmouseout?: (id: any) => void
	}
	}

	declare interface TooltipOptions {
		show?: boolean,
		grouped?: boolean,
		format?: {
		title?: (x: any) => string,
		name?: (name: string, ratio: number, id: string, index: number) => string,
		value?: (value: any, ratio: number, id: string, index: number) => string
	},
		position?: (
		data: any, width: number, height: number, element: any
	) => {
		top: number,
		left: number
	},
		contents?: (
		data: any, defaultTitleFormat: string, defaultValueFormat: string, color: any
	) => string
	}

	declare interface SubchartOptions {
		show?: boolean,
		size?: {
		height: number
	},
		onbrush?: (domain: any) => void
	}

	declare interface ZoomOptions {
		enabled?: boolean,
		rescale?: boolean,
		extent?: [number, number],
		onzoom?: (domain: any) => void,
		onzoomstart?: (event: Event) => void,
		onzoomend?: (domain: any) => void
	}

	declare interface PointOptions {
		show?: boolean,
		r?: number | ((d: any) => number),
		focus?: {
		expand: {
		enabled?: boolean,
		r?: number
	}
	},
		select?: {
		r?: number
	}
	}

	declare interface ChartAPI {
		focus(targetIds?: ArrayOrString): void,
		defocus(targetIds?: ArrayOrString): void,
		revert(targetIds?: ArrayOrString): void,
		show(targetIds?: ArrayOrString, options?: {
		withLegend: boolean
	}): void,
		hide(targetIds?: ArrayOrString, options?: {
		withLegend: boolean
	}): void,
		toggle(targetIds?: ArrayOrString, options?: {
		withLegend: boolean
	}): void,
		load(
		args: {
		url?: string,
		json?: Object,
		keys?: {
		x?: string,
		value: Array<string>
	},
		rows?: Array<PrimitiveArray>,
		columns?: Array<PrimitiveArray>,
		classes?: {
		[key: string]: string
	},
		categories?: Array<string>,
		axes?: {
		[key: string]: string
	},
		colors?: {
		[key: string]: string | d3.Rgb
	},
		type?: string,
		types?: {
		[key: string]: string
	},
		unload?: boolean | ArrayOrString,
		done?: () => any
	}
	): void,
		unload(targetIds?: TargetIds, done?: () => any): any,
		flow(
		args: {
		json?: Object,
		keys?: {
		x?: string,
		value: Array<string>
	},
		rows?: Array<PrimitiveArray>,
		columns?: Array<PrimitiveArray>,
		to?: any,
		length?: number,
		duration?: number,
		done?: () => any
	}
	): void,
		select(ids?: Array<string>, indices?: Array<number>, resetOthers?: boolean): void,
		unselect(ids?: Array<string>, indices?: Array<number>): void,
		selected(targetId?: string): Data,
		transform(type: string, targetIds?: ArrayOrString): void,
		groups(groups: Array<Array<string>>): void,
		xgrids: GridOperations,
		ygrids: GridOperations,
		regions: {
		(regions: Array<any>): void,
		add(regions: Array<any> | Object): void,
		remove(args?: {
		value?: number | string,
		class?: string
	}): void
	},
		data: {
		(targetIds?: ArrayOrString): Data,
		shown(targetIds?: ArrayOrString): Data,
		values(targetIds?: ArrayOrString): Array<any>,
		names(names?: {
		[key: string]: string
	}): {
		[key: string]: string
	},
		colors(colors?: {
		[key: string]: string | d3.Rgb
	}): {
		[key: string]: string
	},
		axes(axes?: {
		[key: string]: string
	}): {
		[key: string]: string
	}
	},
		category(index: number, category?: string): string,
		categories(categories?: Array<string>): Array<string>,
		color(targetId: string): string,
		x(x?: PrimitiveArray): PrimitiveArray,
		xs(
		xs?: {
		[key: string]: PrimitiveArray
	}
	): {
		[key: string]: PrimitiveArray
	},
		axis: {
		labels(labels?: {
		[key: string]: string
	}): {
		[key: string]: string
	},
		min(
		min?: number | {
		[key: string]: number
	}
	): number | {
		[key: string]: number
	},
		max(
		max?: number | {
		[key: string]: number
	}
	): number | {
		[key: string]: number
	},
		range(
		range?: {
		min?: number | {
		[key: string]: number
	},
		max?: number | {
		[key: string]: number
	}
	}
	): {
		min: number | {
		[key: string]: number
	},
		max: number | {
		[key: string]: number
	}
	}
	},
		legend: {
		show(targetIds?: ArrayOrString): void,
		hide(targetIds?: ArrayOrString): void
	},
		zoom: {
		(domain?: Array<number>): Array<number>,
		enable(enabled: boolean): void
	},
		unzoom(): void,
		resize(size?: {
		width?: number,
		height?: number
	}): void,
		flush(): void,
		destroy(): void
	}

	declare interface GridOperations {
		(grids: Array<any>): void,
		add(grids: Array<any> | Object): void,
		remove(args?: {
		class?: string,
		value?: number | string
	}): void
	}

	declare export function generate(config: ChartConfiguration): ChartAPI

		
}
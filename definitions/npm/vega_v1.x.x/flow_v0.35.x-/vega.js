import type { Parse } from 'npm$namespace$Vega'

declare module 'vega' {
					
}

declare module 'npm$namespace$Vega' {
		declare export interface Parse {
		spec(url: string, callback: (chart: (args: ViewArgs) => View) => void): void,
		spec(spec: Spec, callback: (chart: (args: ViewArgs) => View) => void): void,
		data(dataSet: Data[], callback: () => void): void
	}

	declare export interface ViewArgs {
		el: any,
		data?: any,
		hover?: boolean,
		renderer?: string
	}

	declare export interface View {
		width(): number,
		width(w: number): View,
		height(): number,
		height(h: number): View,
		padding(): Padding,
		padding(p: Padding): View,
		viewport(): number[],
		viewport(v: number[]): View,
		renderer(r: string): View,
		data(): Runtime.DataSets,
		data(d: any): View,
		initialize(selector: string): View,
		initialize(node: Element): View,
		render(r?: any[]): View,
		update(options?: UpdateOptions): View,
		model(): Vega.Model,
		defs(): Defs,
		defs(defs: Defs): View
	}

	declare export interface Padding {
		top: number,
		right: number,
		bottom: number,
		left: number
	}

	declare export interface UpdateOptions {
		props?: string,
		items?: any,
		duration?: number,
		ease?: string
	}

	declare export interface Bounds {
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		clear(): Bounds,
		set(x1: number, y1: number, x2: number, y2: number): Bounds,
		add(x: number, y: number): Bounds,
		expand(d: number): Bounds,
		round(): Bounds,
		translate(dx: number, dy: number): Bounds,
		rotate(angle: number, x: number, y: number): Bounds,
		union(b: Bounds): Bounds,
		encloses(b: Bounds): boolean,
		intersects(b: Bounds): boolean,
		contains(x: number, y: number): boolean,
		width(): number,
		height(): number
	}

	declare export interface Model {
		defs(): Defs,
		defs(defs: Defs): Model,
		data(): Runtime.DataSets,
		data(data: Runtime.DataSets): Model,
		ingest(name: string, tx: any, input: any): void,
		dependencies(name: string, tx: any): void,
		width(w: number): Model,
		height(h: number): Model,
		scene(): Node,
		scene(node: Node): Model,
		build(): Model,
		encode(trans?: any, request?: string, item?: any): Model,
		reset(): Model
	}

	declare export interface Node {
		def: Vega.Mark,
		marktype: string,
		interactive: boolean,
		items: Node[],
		bounds: Bounds,
		hasPropertySet(name: string): boolean,
		cousin(offset: number, index: number): Node,
		sibling(offset: number): Node,
		remove(): Node,
		touch(): void,
		scales?: {
		[name: string]: any
	},
		axisItems?: Node[]
	}

	declare export interface Defs {
		width: number,
		height: number,
		viewport?: number[],
		padding: any,
		marks: Runtime.Marks,
		data: Data[]
	}

	declare export interface Spec {
		name?: string,
		width?: number,
		height?: number,
		viewport?: number[],
		padding?: number | string | {
		top: number,
		left: number,
		right: number,
		bottom: number
	},
		data: Data[],
		scales?: Scale[],
		axes?: Axis[],
		legends?: Legend[],
		marks: (Mark | GroupMark)[]
	}

	declare export interface Data {
		name: string,
		format?: Data.Format,
		values?: any,
		source?: string,
		url?: string,
		transform?: Data.Transform[]
	}

	declare export interface Scale {
		name?: string,
		type?: string,
		domain?: any,
		domainMin?: any,
		domainMax?: any,
		range?: any,
		rangeMin?: any,
		rangeMax?: any,
		reverse?: boolean,
		round?: boolean,
		points?: boolean,
		padding?: number,
		sort?: boolean,
		clamp?: boolean,
		nice?: boolean | string,
		exponent?: number,
		zero?: boolean
	}

	declare export interface Axis {
		type: string,
		scale: string,
		orient?: string,
		title?: string,
		titleOffset?: number,
		format?: string,
		ticks?: number,
		values?: any[],
		subdivide?: number,
		tickPadding?: number,
		tickSize?: number,
		tickSizeMajor?: number,
		tickSizeMinor?: number,
		tickSizeEnd?: number,
		offset?: any,
		layer?: string,
		grid?: boolean,
		properties?: Axis.Properties
	}

	declare export interface Legend {
		
	}

	declare export interface Mark {
		type: string,
		name?: string,
		description?: string,
		from?: Mark.From,
		key?: string,
		delay?: ValueRef,
		ease?: string,
		interactive?: boolean,
		properties?: PropertySets
	}

	declare export interface GroupMark {
		type: string,
		scales?: Scale[],
		axes?: Axis[],
		legends?: Legend[],
		marks?: (Mark | GroupMark)[]
	}

	declare export interface PropertySets {
		enter?: PropertySet,
		exit?: PropertySet,
		update?: PropertySet,
		hover?: PropertySet
	}

	declare export interface PropertySet {
		x?: ValueRef,
		x2?: ValueRef,
		width?: ValueRef,
		y?: ValueRef,
		y2?: ValueRef,
		height?: ValueRef,
		opacity?: ValueRef,
		fill?: ValueRef,
		fillOpacity?: ValueRef,
		stroke?: ValueRef,
		strokeWidth?: ValueRef,
		strokeOpacity?: ValueRef,
		strokeDash?: ValueRef,
		strokeDashOffset?: ValueRef,
		size?: ValueRef,
		shape?: ValueRef,
		path?: ValueRef,
		innerRadius?: ValueRef,
		outerRadius?: ValueRef,
		startAngle?: ValueRef,
		endAngle?: ValueRef,
		interpolate?: ValueRef,
		tension?: ValueRef,
		align?: ValueRef,
		baseline?: ValueRef,
		url?: ValueRef,
		text?: ValueRef,
		dx?: ValueRef,
		dy?: ValueRef,
		angle?: ValueRef,
		font?: ValueRef,
		fontSize?: ValueRef,
		fontWeight?: ValueRef,
		fontStyle?: ValueRef
	}

	declare export interface ValueRef {
		value?: any,
		field?: any,
		group?: any,
		scale?: any,
		mult?: number,
		offset?: number,
		band?: boolean
	}

			
}

declare module 'Runtime' {
		declare export interface DataSets {
		[name: string]: Datum[]
	}

	declare export interface Datum {
		[key: string]: any
	}

	declare export interface Marks {
		type: string,
		width: number,
		height: number,
		scales: Scale[],
		axes: Axis[],
		legends: Legend[],
		marks: Mark[]
	}

	declare export interface PropertySets {
		enter?: Properties,
		exit?: Properties,
		update?: Properties,
		hover?: Properties
	}

	declare export interface Properties {
		(item: Node, group: Node, trans: any): void
	}

			
}

declare module 'Data' {
	declare export type Format = JsonFormat | CsvOrTsvFormat | TopoJsonFormat | TreeJson;

	declare export interface FormatBase {
		type: string
	}

	declare export interface JsonFormat {
		type: string,
		property?: string
	}

	declare export interface CsvOrTsvFormat {
		type: string,
		parse?: {
		[propertyName: string]: string
	}
	}

	declare export interface TopoJsonFormat {
		type: string,
		feature?: string,
		mesh?: string
	}

	declare export interface TreeJson {
		type: string,
		children?: string,
		parse?: {
		[propertyName: string]: string
	}
	}

	declare export interface Transform {
		
	}

			
}

declare module 'Axis' {
		declare export interface Properties {
		ticks?: PropertySet,
		minorTicks?: PropertySet,
		grid?: PropertySet,
		labels?: PropertySet,
		title?: PropertySet,
		axis?: PropertySet
	}

			
}

declare module 'Mark' {
		declare export interface From {
		data?: string,
		mark?: string,
		transform?: Data.Transform[]
	}

			
}

declare module 'npm$namespace$vg' {
				declare export class Bounds extends Vega$Bounds {
		x1: number;
		y1: number;
		x2: number;
		y2: number;
		clear(): Bounds;
		set(x1: number, y1: number, x2: number, y2: number): Bounds;
		add(x: number, y: number): Bounds;
		expand(d: number): Bounds;
		round(): Bounds;
		translate(dx: number, dy: number): Bounds;
		rotate(angle: number, x: number, y: number): Bounds;
		union(b: Bounds): Bounds;
		encloses(b: Bounds): boolean;
		intersects(b: Bounds): boolean;
		contains(x: number, y: number): boolean;
		width(): number;
		height(): number
	}

	
}

declare module 'scene' {
			declare export function item(mark: Vega.Node): Vega.Node

		
}
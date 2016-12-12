

declare module 'd3' {
		declare interface TouchList {
		
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$d3' {
	declare export type Primitive = number | string | boolean;

	declare interface Numeric {
		valueOf(): number
	}

	declare interface Selection<Datum> {
		[index: number]: selection.Group,
		length: number,
		attr(name: string): string,
		attr(name: string, value: Primitive): Selection<Datum>,
		attr(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive
	): Selection<Datum>,
		attr(
		obj: {
		[key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive)
	}
	): Selection<Datum>,
		classed(name: string): boolean,
		classed(name: string, value: boolean): Selection<Datum>,
		classed(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => boolean
	): Selection<Datum>,
		classed(
		obj: {
		[key: string]: boolean | ((datum: Datum, index: number, outerIndex: number) => boolean)
	}
	): Selection<Datum>,
		style(name: string): string,
		style(name: string, value: Primitive, priority?: string): Selection<Datum>,
		style(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive, priority?: string
	): Selection<Datum>,
		style(
		obj: {
		[key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive)
	}, priority?: string
	): Selection<Datum>,
		property(name: string): any,
		property(name: string, value: any): Selection<Datum>,
		property(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => any
	): Selection<Datum>,
		property(
		obj: {
		[key: string]: any | ((datum: Datum, index: number, innerInder: number) => any)
	}
	): Selection<Datum>,
		text(): string,
		text(value: Primitive): Selection<Datum>,
		text(
		value: (datum: Datum, index: number, outerIndex: number) => Primitive
	): Selection<Datum>,
		html(): string,
		html(value: string): Selection<Datum>,
		html(
		value: (datum: Datum, index: number, outerIndex: number) => string
	): Selection<Datum>,
		append(name: string): Selection<Datum>,
		append(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Selection<Datum>,
		insert(name: string, before: string): Selection<Datum>,
		insert(
		name: string, before: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Selection<Datum>,
		insert(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: string
	): Selection<Datum>,
		insert(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Selection<Datum>,
		remove(): Selection<Datum>,
		data(): Datum[],
		data<NewDatum>(
		data: NewDatum[], key?: (datum: NewDatum, index: number, outerIndex: number) => string
	): selection.Update<NewDatum>,
		data<NewDatum>(
		data: (datum: Datum, index: number, outerIndex: number) => NewDatum[], key?: (datum: NewDatum, index: number, outerIndex: number) => string
	): selection.Update<NewDatum>,
		filter(selector: string): Selection<Datum>,
		filter(
		selector: (datum: Datum, index: number, outerIndex: number) => boolean
	): Selection<Datum>,
		datum(): Datum,
		datum<NewDatum>(
		value: (datum: Datum, index: number, outerIndex: number) => NewDatum
	): Selection<NewDatum>,
		datum<NewDatum>(value: NewDatum): Selection<NewDatum>,
		sort(comparator?: (a: Datum, b: Datum) => number): Selection<Datum>,
		order(): Selection<Datum>,
		on(type: string): (datum: Datum, index: number, outerIndex: number) => any,
		on(
		type: string, listener: (datum: Datum, index: number, outerIndex: number) => any, capture?: boolean
	): Selection<Datum>,
		transition(name?: string): Transition<Datum>,
		interrupt(name?: string): Selection<Datum>,
		select(selector: string): Selection<Datum>,
		select(
		selector: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Selection<Datum>,
		selectAll(selector: string): Selection<any>,
		selectAll<T>(selector: string): Selection<T>,
		selectAll(
		selector: (
		datum: Datum, index: number, outerIndex: number
	) => Array<EventTarget> | NodeList
	): Selection<any>,
		selectAll<T>(
		selector: (
		datum: Datum, index: number, outerIndex: number
	) => Array<EventTarget> | NodeList
	): Selection<T>,
		each(
		func: (datum: Datum, index: number, outerIndex: number) => any
	): Selection<Datum>,
		call(
		func: (sel: Selection<Datum>, ...args: any[]) => any, ...args: any[]
	): Selection<Datum>,
		empty(): boolean,
		node(): Node,
		size(): number
	}

	declare interface Transition<Datum> {
		transition(): Transition<Datum>,
		delay(): number,
		delay(delay: number): Transition<Datum>,
		delay(
		delay: (datum: Datum, index: number, outerIndex: number) => number
	): Transition<Datum>,
		duration(): number,
		duration(duration: number): Transition<Datum>,
		duration(
		duration: (datum: Datum, index: number, outerIndex: number) => number
	): Transition<Datum>,
		ease(): (t: number) => number,
		ease(value: string, ...args: any[]): Transition<Datum>,
		ease(value: (t: number) => number): Transition<Datum>,
		attr(name: string, value: Primitive): Transition<Datum>,
		attr(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive
	): Transition<Datum>,
		attr(
		obj: {
		[key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive)
	}
	): Transition<Datum>,
		attrTween(
		name: string, tween: (datum: Datum, index: number, attr: string) => (t: number) => Primitive
	): Transition<Datum>,
		style(name: string, value: Primitive, priority?: string): Transition<Datum>,
		style(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive, priority?: string
	): Transition<Datum>,
		style(
		obj: {
		[key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive)
	}, priority?: string
	): Transition<Datum>,
		styleTween(
		name: string, tween: (datum: Datum, index: number, attr: string) => (t: number) => Primitive, priority?: string
	): Transition<Datum>,
		text(value: Primitive): Transition<Datum>,
		text(
		value: (datum: Datum, index: number, outerIndex: number) => Primitive
	): Transition<Datum>,
		tween(name: string, factory: () => (t: number) => any): Transition<Datum>,
		remove(): Transition<Datum>,
		select(selector: string): Transition<Datum>,
		select(selector: (d: Datum, i: number) => EventTarget): Transition<Datum>,
		selectAll(selector: string): Transition<any>,
		selectAll(selector: (d: Datum, i: number) => EventTarget[]): Transition<any>,
		filter(selector: string): Transition<Datum>,
		filter(selector: (d: Datum, i: number) => boolean): Transition<Datum>,
		each(type: string, listener: (d: Datum, i: number) => any): Transition<Datum>,
		each(listener: (d: Datum, i: number) => any): Transition<Datum>,
		call(
		func: (transition: Transition<Datum>, ...args: any[]) => any, ...args: any[]
	): Transition<Datum>,
		empty(): boolean,
		node(): Node,
		size(): number
	}

	declare interface BaseEvent {
		type: string,
		sourceEvent?: Event
	}

	declare interface ZoomEvent {
		scale: number,
		translate: [number, number]
	}

	declare interface DragEvent {
		x: number,
		y: number,
		dx: number,
		dy: number
	}

	declare interface Map<T> {
		has(key: string): boolean,
		get(key: string): T,
		set(key: string, value: T): T,
		remove(key: string): boolean,
		keys(): string[],
		values(): T[],
		entries(): {
		key: string,
		value: T
	}[],
		forEach(func: (key: string, value: T) => any): void,
		empty(): boolean,
		size(): number
	}

	declare interface Set {
		has(value: string): boolean,
		add(value: string): string,
		remove(value: string): boolean,
		values(): string[],
		forEach(func: (value: string) => any): void,
		empty(): boolean,
		size(): number
	}

	declare interface Nest<T> {
		key(func: (datum: T) => string): Nest<T>,
		sortKeys(comparator: (a: string, b: string) => number): Nest<T>,
		sortValues(comparator: (a: T, b: T) => number): Nest<T>,
		rollup<U>(func: (values: T[]) => U): Nest<T>,
		map(array: T[]): {
		[key: string]: any
	},
		map(array: T[], mapType: typeof undefined): Map<any>,
		entries(array: T[]): {
		key: string,
		values: any
	}[]
	}

	declare interface Transform {
		rotate: number,
		translate: [number, number],
		skew: number,
		scale: [number, number],
		toString(): string
	}

	declare interface FormatPrefix {
		symbol: string,
		scale(n: number): number
	}

	declare interface Rgb {
		r: number,
		g: number,
		b: number,
		brighter(k?: number): Rgb,
		darker(k?: number): Rgb,
		hsl(): Hsl,
		toString(): string
	}

	declare interface Hsl {
		h: number,
		s: number,
		l: number,
		brighter(k?: number): Hsl,
		darker(k?: number): Hsl,
		rgb(): Rgb,
		toString(): string
	}

	declare interface Hcl {
		h: number,
		c: number,
		l: number,
		brighter(k?: number): Hcl,
		darker(k?: number): Hcl
	}

	declare interface Lab {
		l: number,
		a: number,
		b: number,
		brighter(k?: number): Lab,
		darker(k?: number): Lab,
		rgb(): Rgb,
		toString(): string
	}

	declare interface Color {
		rgb(): Rgb
	}

	declare interface Dispatch {
		on(type: string): (...args: any[]) => void,
		on(type: string, listener: (...args: any[]) => any): Dispatch,
		[event: string]: (...args: any[]) => void
	}

	declare interface Xhr {
		header(name: string): string,
		header(name: string, value: string): Xhr,
		mimeType(): string,
		mimeType(type: string): Xhr,
		responseType(): string,
		responseType(type: string): Xhr,
		response(): (request: XMLHttpRequest) => any,
		response(value: (request: XMLHttpRequest) => any): Xhr,
		get(callback?: (err: any, data: any) => void): Xhr,
		post(data?: any, callback?: (err: any, data: any) => void): Xhr,
		post(callback: (err: any, data: any) => void): Xhr,
		send(method: string, data?: any, callback?: (err: any, data: any) => void): Xhr,
		send(method: string, callback: (err: any, data: any) => void): Xhr,
		abort(): Xhr,
		on(type: "beforesend"): (request: XMLHttpRequest) => void,
		on(type: "progress"): (request: XMLHttpRequest) => void,
		on(type: "load"): (response: any) => void,
		on(type: "error"): (err: any) => void,
		on(type: string): (...args: any[]) => void,
		on(type: "beforesend", listener: (request: XMLHttpRequest) => void): Xhr,
		on(type: "progress", listener: (request: XMLHttpRequest) => void): Xhr,
		on(type: "load", listener: (response: any) => void): Xhr,
		on(type: "error", listener: (err: any) => void): Xhr,
		on(type: string, listener: (...args: any[]) => void): Xhr
	}

	declare interface Dsv {
		(url: string, callback: (rows: {
		[key: string]: string
	}[]) => void): DsvXhr<{
		[key: string]: string
	}>,
		(url: string, callback: (error: any, rows: {
		[key: string]: string
	}[]) => void): DsvXhr<{
		[key: string]: string
	}>,
		(url: string): DsvXhr<{
		[key: string]: string
	}>,
		(url: string, accessor: (row: {
		[key: string]: string
	}) => T, callback: (rows: T[]) => void): DsvXhr<T>,
		(url: string, accessor: (row: {
		[key: string]: string
	}) => T, callback: (error: any, rows: T[]) => void): DsvXhr<T>,
		(url: string, accessor: (row: {
		[key: string]: string
	}) => T): DsvXhr<T>,
		parse(string: string): {
		[key: string]: string
	}[],
		parse<T>(
		string: string, accessor: (row: {
		[key: string]: string
	}, index: number) => T
	): T[],
		parseRows(string: string): string[][],
		parseRows<T>(string: string, accessor: (row: string[], index: number) => T): T[],
		format(rows: Object[]): string,
		formatRows(rows: string[][]): string
	}

	declare interface DsvXhr<T> {
		row(): (row: {
		[key: string]: string
	}) => T,
		row<U>(accessor: (row: {
		[key: string]: string
	}) => U): DsvXhr<U>,
		header(name: string): string,
		header(name: string, value: string): DsvXhr<T>,
		mimeType(): string,
		mimeType(type: string): DsvXhr<T>,
		responseType(): string,
		responseType(type: string): DsvXhr<T>,
		response(): (request: XMLHttpRequest) => any,
		response(value: (request: XMLHttpRequest) => any): DsvXhr<T>,
		get(callback?: (err: XMLHttpRequest, data: T[]) => void): DsvXhr<T>,
		post(data?: any, callback?: (err: XMLHttpRequest, data: T[]) => void): DsvXhr<T>,
		post(callback: (err: XMLHttpRequest, data: T[]) => void): DsvXhr<T>,
		send(
		method: string, data?: any, callback?: (err: XMLHttpRequest, data: T[]) => void
	): DsvXhr<T>,
		send(method: string, callback: (err: XMLHttpRequest, data: T[]) => void): DsvXhr<T>,
		abort(): DsvXhr<T>,
		on(type: "beforesend"): (request: XMLHttpRequest) => void,
		on(type: "progress"): (request: XMLHttpRequest) => void,
		on(type: "load"): (response: T[]) => void,
		on(type: "error"): (err: any) => void,
		on(type: string): (...args: any[]) => void,
		on(type: "beforesend", listener: (request: XMLHttpRequest) => void): DsvXhr<T>,
		on(type: "progress", listener: (request: XMLHttpRequest) => void): DsvXhr<T>,
		on(type: "load", listener: (response: T[]) => void): DsvXhr<T>,
		on(type: "error", listener: (err: any) => void): DsvXhr<T>,
		on(type: string, listener: (...args: any[]) => void): DsvXhr<T>
	}

	declare interface LocaleDefinition {
		decimal: string,
		thousands: string,
		grouping: number[],
		currency: [string, string],
		dateTime: string,
		date: string,
		time: string,
		periods: [string, string],
		days: [string, string, string, string, string, string, string],
		shortDays: [string, string, string, string, string, string, string],
		months: [string, string, string, string, string, string, string, string, string, string, string, string],
		shortMonths: [string, string, string, string, string, string, string, string, string, string, string, string]
	}

	declare interface Locale {
		numberFormat(specifier: string): (n: number) => string,
		timeFormat: {
		(specifier: string): time.Format,
		utc(specifier: string): time.Format,
		multi(formats: Array<[string, (d: Date) => boolean | number]>): time.Format
	}
	}

	declare export function select(selector: string): Selection<any>

	declare export function select(node: EventTarget): Selection<any>

	declare export function selectAll(selector: string): Selection<any>

	declare export function selectAll(nodes: EventTarget[]): Selection<any>

	declare export function selection(): Selection<any>

	declare export function transition(): Transition<any>

	declare export function ease(type: "linear"): (t: number) => number

	declare export function ease(type: "linear-in"): (t: number) => number

	declare export function ease(type: "linear-out"): (t: number) => number

	declare export function ease(type: "linear-in-out"): (t: number) => number

	declare export function ease(type: "linear-out-in"): (t: number) => number

	declare export function ease(type: "poly", k: number): (t: number) => number

	declare export function ease(type: "poly-in", k: number): (t: number) => number

	declare export function ease(type: "poly-out", k: number): (t: number) => number

	declare export function ease(type: "poly-in-out", k: number): (t: number) => number

	declare export function ease(type: "poly-out-in", k: number): (t: number) => number

	declare export function ease(type: "quad"): (t: number) => number

	declare export function ease(type: "quad-in"): (t: number) => number

	declare export function ease(type: "quad-out"): (t: number) => number

	declare export function ease(type: "quad-in-out"): (t: number) => number

	declare export function ease(type: "quad-out-in"): (t: number) => number

	declare export function ease(type: "cubic"): (t: number) => number

	declare export function ease(type: "cubic-in"): (t: number) => number

	declare export function ease(type: "cubic-out"): (t: number) => number

	declare export function ease(type: "cubic-in-out"): (t: number) => number

	declare export function ease(type: "cubic-out-in"): (t: number) => number

	declare export function ease(type: "sin"): (t: number) => number

	declare export function ease(type: "sin-in"): (t: number) => number

	declare export function ease(type: "sin-out"): (t: number) => number

	declare export function ease(type: "sin-in-out"): (t: number) => number

	declare export function ease(type: "sin-out-in"): (t: number) => number

	declare export function ease(type: "circle"): (t: number) => number

	declare export function ease(type: "circle-in"): (t: number) => number

	declare export function ease(type: "circle-out"): (t: number) => number

	declare export function ease(type: "circle-in-out"): (t: number) => number

	declare export function ease(type: "circle-out-in"): (t: number) => number

	declare export function ease(type: "elastic", a?: number, b?: number): (t: number) => number

	declare export function ease(type: "elastic-in", a?: number, b?: number): (t: number) => number

	declare export function ease(type: "elastic-out", a?: number, b?: number): (t: number) => number

	declare export function ease(type: "elastic-in-out", a?: number, b?: number): (t: number) => number

	declare export function ease(type: "elastic-out-in", a?: number, b?: number): (t: number) => number

	declare export function ease(type: "back", s: number): (t: number) => number

	declare export function ease(type: "back-in", s: number): (t: number) => number

	declare export function ease(type: "back-out", s: number): (t: number) => number

	declare export function ease(type: "back-in-out", s: number): (t: number) => number

	declare export function ease(type: "back-out-in", s: number): (t: number) => number

	declare export function ease(type: "bounce"): (t: number) => number

	declare export function ease(type: "bounce-in"): (t: number) => number

	declare export function ease(type: "bounce-out"): (t: number) => number

	declare export function ease(type: "bounce-in-out"): (t: number) => number

	declare export function ease(type: "bounce-out-in"): (t: number) => number

	declare export function ease(type: string, ...args: any[]): (t: number) => number

	declare export function timer(func: () => any, delay?: number, time?: number): void

	declare export function mouse(container: EventTarget): [number, number]

	declare export function touch(container: EventTarget, identifer: number): [number, number]

	declare export function touch(
		container: EventTarget, touches: TouchList, identifer: number
	): [number, number]

	declare export function touches(container: EventTarget, touches?: TouchList): Array<[number, number]>

	declare export function ascending(a: Primitive, b: Primitive): number

	declare export function descending(a: Primitive, b: Primitive): number

	declare export function min(array: number[]): number

	declare export function min(array: string[]): string

	declare export function min<T>(array: T[]): T

	declare export function min<T>(array: T[], accessor: (datum: T, index: number) => number): number

	declare export function min<T>(array: T[], accessor: (datum: T, index: number) => string): string

	declare export function min<T, U>(array: T[], accessor: (datum: T, index: number) => U): U

	declare export function max(array: number[]): number

	declare export function max(array: string[]): string

	declare export function max<T>(array: T[]): T

	declare export function max<T>(array: T[], accessor: (datum: T, index: number) => number): number

	declare export function max<T>(array: T[], accessor: (datum: T, index: number) => string): string

	declare export function max<T, U>(array: T[], accessor: (datum: T, index: number) => U): U

	declare export function extent(array: number[]): [number, number]

	declare export function extent(array: string[]): [string, string]

	declare export function extent<T>(array: T[]): [T, T]

	declare export function extent<T>(array: Array<T | Primitive>): [T | Primitive, T | Primitive]

	declare export function extent<T>(array: T[], accessor: (datum: T, index: number) => number): [number, number]

	declare export function extent<T>(array: T[], accessor: (datum: T, index: number) => string): [string, string]

	declare export function extent<T>(array: T[], accessor: (datum: T, index: number) => Date): [Date, Date]

	declare export function extent<T, U>(
		array: T[], accessor: (datum: T, index: number) => U
	): [U | Primitive, U | Primitive]

	declare export function sum(array: number[]): number

	declare export function sum<T>(array: T[], accessor: (datum: T, index: number) => number): number

	declare export function mean(array: number[]): number

	declare export function mean<T>(array: T[], accessor: (datum: T, index: number) => number): number

	declare export function median(array: number[]): number

	declare export function median<T>(datum: T[], accessor: (datum: T, index: number) => number): number

	declare export function quantile(array: number[], p: number): number

	declare export function variance(array: number[]): number

	declare export function variance<T>(array: T[], accessor: (datum: T, index: number) => number): number

	declare export function deviation(array: number[]): number

	declare export function deviation<T>(array: T[], accessor: (datum: T, index: number) => number): number

	declare export function bisectLeft<T>(array: T[], x: T, lo?: number, hi?: number): number

	declare export function bisectRight<T>(array: T[], x: T, lo?: number, hi?: number): number

	declare export function bisector<T, U>(
		accessor: (x: T) => U
	): {
		left: (array: T[], x: U, lo?: number, hi?: number) => number,
		right: (array: T[], x: U, lo?: number, hi?: number) => number
	}

	declare export function bisector<T, U>(
		comparator: (a: T, b: U) => number
	): {
		left: (array: T[], x: U, lo?: number, hi?: number) => number,
		right: (array: T[], x: U, lo?: number, hi?: number) => number
	}

	declare export function shuffle<T>(array: T[], lo?: number, hi?: number): T[]

	declare export function keys(object: Object): string[]

	declare export function values<T>(object: {
		[key: string]: T
	}): T[]

	declare export function values<T>(object: {
		[key: number]: T
	}): T[]

	declare export function values(object: Object): any[]

	declare export function entries<T>(object: {
		[key: string]: T
	}): {
		key: string,
		value: T
	}[]

	declare export function entries<T>(object: {
		[key: number]: T
	}): {
		key: string,
		value: T
	}[]

	declare export function entries(object: Object): {
		key: string,
		value: any
	}[]

	declare export function map<T>(): Map<T>

	declare export function map<T>(object: Map<T>): Map<T>

	declare export function map<T>(object: {
		[key: string]: T
	}): Map<T>

	declare export function map<T>(object: {
		[key: number]: T
	}): Map<T>

	declare export function map<T>(array: T[], key: (datum: T, index: number) => string): Map<T>

	declare export function map(object: Object): Map<any>

	declare export function set(): Set

	declare export function set(array: string[]): Set

	declare export function merge<T>(arrays: T[][]): T[]

	declare export function range(stop: number): number[]

	declare export function range(start: number, stop: number, step?: number): number[]

	declare export function permute<T>(array: {
		[key: number]: T
	}, keys: number[]): T[]

	declare export function permute<T>(object: {
		[key: string]: T
	}, keys: string[]): T[]

	declare export function zip<T>(...arrays: T[][]): T[][]

	declare export function transpose<T>(matrix: T[][]): T[][]

	declare export function pairs<T>(array: T[]): Array<[T, T]>

	declare export function nest<T>(): Nest<T>

	declare export function transform(transform: string): Transform

	declare export function format(specifier: string): (n: number) => string

	declare export function formatPrefix(value: number, precision?: number): FormatPrefix

	declare export function round(x: number, n?: number): number

	declare export function requote(string: string): string

	declare export function functor<T>(value: T): T

	declare export function functor<T>(value: T): () => T

	declare export function rebind(target: {
		
	}, source: {
		
	}, ...names: string[]): any

	declare export function dispatch(...names: string[]): Dispatch

	declare export function interpolate(a: number, b: number): (t: number) => number

	declare export function interpolate(a: string, b: string): (t: number) => string

	declare export function interpolate(a: string | Color, b: Color): (t: number) => string

	declare export function interpolate(a: Array<string | Color>, b: Color[]): (t: number) => string

	declare export function interpolate<Range, Output>(a: Range[], b: Output[]): (t: number) => Output[]

	declare export function interpolate<Range, Output>(a: Range[], b: Range[]): (t: number) => Output[]

	declare export function interpolate(
		a: {
		[key: string]: string | Color
	}, b: {
		[key: string]: Color
	}
	): (t: number) => {
		[key: string]: string
	}

	declare export function interpolate<Range, Output>(
		a: {
		[key: string]: Range
	}, b: {
		[key: string]: Output
	}
	): (t: number) => {
		[key: string]: Output
	}

	declare export function interpolate<Range, Output>(
		a: {
		[key: string]: Range
	}, b: {
		[key: string]: Range
	}
	): (t: number) => {
		[key: string]: Output
	}

	declare export function interpolateNumber(a: number, b: number): (t: number) => number

	declare export function interpolateRound(a: number, b: number): (t: number) => number

	declare export function interpolateString(a: string, b: string): (t: number) => string

	declare export function interpolateRgb(a: string | Color, b: string | Color): (t: number) => string

	declare export function interpolateHsl(a: string | Color, b: string | Color): (t: number) => string

	declare export function interpolateLab(a: string | Color, b: string | Color): (t: number) => string

	declare export function interpolateHcl(a: string | Color, b: string | Color): (t: number) => string

	declare export function interpolateArray(a: Array<string | Color>, b: Color[]): (t: number) => string[]

	declare export function interpolateArray<Range, Output>(a: Range[], b: Range[]): (t: number) => Output[]

	declare export function interpolateArray<Range, Output>(a: Range[], b: Output[]): (t: number) => Output[]

	declare export function interpolateObject(
		a: {
		[key: string]: string | Color
	}, b: {
		[key: string]: Color
	}
	): (t: number) => {
		[key: string]: string
	}

	declare export function interpolateObject<Range, Output>(
		a: {
		[key: string]: Range
	}, b: {
		[key: string]: Output
	}
	): (t: number) => {
		[key: string]: Output
	}

	declare export function interpolateObject<Range, Output>(
		a: {
		[key: string]: Range
	}, b: {
		[key: string]: Range
	}
	): (t: number) => {
		[key: string]: Output
	}

	declare export function interpolateTransform(a: string | Transform, b: string | Transform): (t: number) => string

	declare export function interpolateZoom(
		a: [number, number, number], b: [number, number, number]
	): {
		(t: number): [number, number, number],
		duration: number
	}

	declare export function xhr(url: string, mimeType?: string, callback?: (err: any, data: any) => void): Xhr

	declare export function xhr(url: string, callback: (err: any, data: any) => void): Xhr

	declare export function text(
		url: string, mimeType?: string, callback?: (err: any, data: string) => void
	): Xhr

	declare export function text(url: string, callback: (err: any, data: string) => void): Xhr

	declare export function json(url: string, callback?: (err: any, data: any) => void): Xhr

	declare export function xml(url: string, mimeType?: string, callback?: (err: any, data: any) => void): Xhr

	declare export function xml(url: string, callback: (err: any, data: any) => void): Xhr

	declare export function html(url: string, callback?: (err: any, data: DocumentFragment) => void): Xhr

	declare export function dsv(delimiter: string, mimeType: string): Dsv

	declare export function locale(definition: LocaleDefinition): Locale

		
}

declare module 'selection' {
		declare interface Group {
		parentNode: EventTarget
	}

	declare interface Update<Datum> {
		[index: number]: Group,
		length: number,
		attr(name: string): string,
		attr(name: string, value: Primitive): Update<Datum>,
		attr(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive
	): Update<Datum>,
		attr(
		obj: {
		[key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive)
	}
	): Update<Datum>,
		classed(name: string): boolean,
		classed(name: string, value: boolean): Update<Datum>,
		classed(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => boolean
	): Update<Datum>,
		classed(
		obj: {
		[key: string]: boolean | ((datum: Datum, index: number, outerIndex: number) => boolean)
	}
	): Update<Datum>,
		style(name: string): string,
		style(name: string, value: Primitive, priority?: string): Update<Datum>,
		style(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => Primitive, priority?: string
	): Update<Datum>,
		style(
		obj: {
		[key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive)
	}, priority?: string
	): Update<Datum>,
		property(name: string): any,
		property(name: string, value: any): Update<Datum>,
		property(
		name: string, value: (datum: Datum, index: number, outerIndex: number) => any
	): Update<Datum>,
		property(
		obj: {
		[key: string]: any | ((datum: Datum, index: number, outerIndex: number) => any)
	}
	): Update<Datum>,
		text(): string,
		text(value: Primitive): Update<Datum>,
		text(
		value: (datum: Datum, index: number, outerIndex: number) => Primitive
	): Update<Datum>,
		html(): string,
		html(value: string): Selection<Datum>,
		html(
		value: (datum: Datum, index: number, outerIndex: number) => string
	): Selection<Datum>,
		append(name: string): Selection<Datum>,
		append(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Update<Datum>,
		insert(name: string, before: string): Update<Datum>,
		insert(
		name: string, before: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Update<Datum>,
		insert(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: string
	): Update<Datum>,
		insert(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Update<Datum>,
		remove(): Update<Datum>,
		data(): Datum[],
		data<NewDatum>(
		data: NewDatum[], key?: (datum: NewDatum, index: number, outerIndex: number) => string
	): Update<NewDatum>,
		data<NewDatum>(
		data: (datum: Datum, index: number, outerIndex: number) => NewDatum[], key?: (datum: NewDatum, index: number, outerIndex: number) => string
	): Update<NewDatum>,
		filter(selector: string): Update<Datum>,
		filter(
		selector: (datum: Datum, index: number, outerIndex: number) => boolean
	): Update<Datum>,
		datum(): Datum,
		datum<NewDatum>(
		value: (datum: Datum, index: number, outerIndex: number) => NewDatum
	): Update<NewDatum>,
		datum<NewDatum>(value: NewDatum): Update<NewDatum>,
		sort(comparator?: (a: Datum, b: Datum) => number): Update<Datum>,
		order(): Update<Datum>,
		on(type: string): (datum: Datum, index: number, outerIndex: number) => any,
		on(
		type: string, listener: (datum: Datum, index: number, outerIndex: number) => any, capture?: boolean
	): Update<Datum>,
		transition(name?: string): Transition<Datum>,
		interrupt(name?: string): Update<Datum>,
		select(selector: string): Update<Datum>,
		select(
		selector: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Update<Datum>,
		selectAll(selector: string): Update<Datum>,
		selectAll(
		selector: (
		datum: Datum, index: number, outerIndex: number
	) => Array<EventTarget> | NodeList
	): Update<any>,
		each(func: (datum: Datum, index: number, outerIndex: number) => any): Update<Datum>,
		call(
		func: (sel: Update<Datum>, ...args: any[]) => any, ...args: any[]
	): Update<Datum>,
		empty(): boolean,
		node(): Node,
		size(): number,
		enter(): Enter<Datum>,
		exit(): Selection<Datum>
	}

	declare interface Enter<Datum> {
		append(name: string): Selection<Datum>,
		append(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Selection<Datum>,
		insert(name: string, before?: string): Selection<Datum>,
		insert(
		name: string, before: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Selection<Datum>,
		insert(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before?: string
	): Selection<Datum>,
		insert(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget, before: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Selection<Datum>,
		select(
		name: (datum: Datum, index: number, outerIndex: number) => EventTarget
	): Selection<Datum>,
		call(
		func: (selection: Enter<Datum>, ...args: any[]) => any, ...args: any[]
	): Enter<Datum>,
		empty(): boolean,
		size(): number
	}

			
}

declare module 'transition' {
					
}

declare module 'timer' {
			declare export function flush(): void

		
}

declare module 'random' {
			declare export function normal(mean?: number, deviation?: number): () => number

	declare export function logNormal(mean?: number, deviation?: number): () => number

	declare export function bates(count: number): () => number

	declare export function irwinHall(count: number): () => number

		
}

declare module 'ns' {
		declare interface Qualified {
		space: string,
		local: string
	}

	declare export function qualify(name: string): Qualified | string

		
}

declare module 'scale' {
		declare interface Identity {
		(n: number): number,
		invert(n: number): number,
		domain(): number[],
		domain(numbers: number[]): Identity,
		range(): number[],
		range(numbers: number[]): Identity,
		ticks(count?: number): number[],
		tickFormat(count?: number, format?: string): (n: number) => string,
		copy(): Identity
	}

	declare interface Linear<Range, Output> {
		(x: number): Output,
		invert(y: number): number,
		domain(): number[],
		domain(numbers: number[]): Linear<Range, Output>,
		range(): Range[],
		range(values: Range[]): Linear<Range, Output>,
		rangeRound(values: number[]): Linear<number, number>,
		interpolate(): (a: Range, b: Range) => (t: number) => Output,
		interpolate(factory: (a: Range, b: Range) => (t: number) => Output): Linear<Range, Output>,
		clamp(): boolean,
		clamp(clamp: boolean): Linear<Range, Output>,
		nice(count?: number): Linear<Range, Output>,
		ticks(count?: number): number[],
		tickFormat(count?: number, format?: string): (n: number) => string,
		copy(): Linear<Range, Output>
	}

	declare interface Pow<Range, Output> {
		(x: number): Output,
		invert(y: number): number,
		domain(): number[],
		domain(numbers: number[]): Pow<Range, Output>,
		range(): Range[],
		range(values: Range[]): Pow<Range, Output>,
		rangeRound(values: number[]): Pow<number, number>,
		exponent(): number,
		exponent(k: number): Pow<Range, Output>,
		interpolate(): (a: Range, b: Range) => (t: number) => Output,
		interpolate(factory: (a: Range, b: Range) => (t: number) => Output): Pow<Range, Output>,
		clamp(): boolean,
		clamp(clamp: boolean): Pow<Range, Output>,
		nice(m?: number): Pow<Range, Output>,
		ticks(count?: number): number[],
		tickFormat(count?: number, format?: string): (n: number) => string,
		copy(): Pow<Range, Output>
	}

	declare interface Log<Range, Output> {
		(x: number): Output,
		invert(y: number): number,
		domain(): number[],
		domain(numbers: number[]): Log<Range, Output>,
		range(): Range[],
		range(values: Range[]): Log<Range, Output>,
		rangeRound(values: number[]): Log<number, number>,
		base(): number,
		base(base: number): Log<Range, Output>,
		interpolate(): (a: Range, b: Range) => (t: number) => Output,
		interpolate(factory: (a: Range, b: Range) => (t: number) => Output): Log<Range, Output>,
		clamp(): boolean,
		clamp(clamp: boolean): Log<Range, Output>,
		nice(): Log<Range, Output>,
		ticks(): number[],
		tickFormat(count?: number, format?: string): (t: number) => string,
		copy(): Log<Range, Output>
	}

	declare interface Quantize<T> {
		(x: number): T,
		invertExtent(y: T): [number, number],
		domain(): number[],
		domain(numbers: number[]): Quantize<T>,
		range(): T[],
		range(values: T[]): Quantize<T>,
		copy(): Quantize<T>
	}

	declare interface Quantile<T> {
		(x: number): T,
		invertExtent(y: T): [number, number],
		domain(): number[],
		domain(numbers: number[]): Quantile<T>,
		range(): T[],
		range(values: T[]): Quantile<T>,
		quantiles(): number[],
		copy(): Quantile<T>
	}

	declare interface Threshold<Domain, Range> {
		(x: number): Range,
		invertExtent(y: Range): [Domain, Domain],
		domain(): Domain[],
		domain(domain: Domain[]): Threshold<Domain, Range>,
		range(): Range[],
		range(values: Range[]): Threshold<Domain, Range>,
		copy(): Threshold<Domain, Range>
	}

	declare interface Ordinal<Domain, Range> {
		(x: Domain): Range,
		domain(): Domain[],
		domain(values: Domain[]): Ordinal<Domain, Range>,
		range(): Range[],
		range(values: Range[]): Ordinal<Domain, Range>,
		rangePoints(interval: [number, number], padding?: number): Ordinal<Domain, number>,
		rangeRoundPoints(interval: [number, number], padding?: number): Ordinal<Domain, number>,
		rangeBands(
		interval: [number, number], padding?: number, outerPadding?: number
	): Ordinal<Domain, number>,
		rangeRoundBands(
		interval: [number, number], padding?: number, outerPadding?: number
	): Ordinal<Domain, number>,
		rangeBand(): number,
		rangeExtent(): [number, number],
		copy(): Ordinal<Domain, Range>
	}

	declare export function identity(): Identity

	declare export function linear(): Linear<number, number>

	declare export function linear<Output>(): Linear<Output, Output>

	declare export function linear<Range, Output>(): Linear<Range, Output>

	declare export function sqrt(): Pow<number, number>

	declare export function sqrt<Output>(): Pow<Output, Output>

	declare export function sqrt<Range, Output>(): Pow<Range, Output>

	declare export function pow(): Pow<number, number>

	declare export function pow<Output>(): Pow<Output, Output>

	declare export function pow<Range, Output>(): Pow<Range, Output>

	declare export function log(): Log<number, number>

	declare export function log<Output>(): Log<Output, Output>

	declare export function log<Range, Output>(): Log<Range, Output>

	declare export function quantize<T>(): Quantize<T>

	declare export function quantile<T>(): Quantile<T>

	declare export function threshold<Range>(): Threshold<number, Range>

	declare export function threshold<Domain, Range>(): Threshold<Domain, Range>

	declare export function ordinal<Range>(): Ordinal<string, Range>

	declare export function ordinal<Domain, Range>(): Ordinal<Domain, Range>

	declare export function category10(): Ordinal<string, string>

	declare export function category10<Domain>(): Ordinal<Domain, string>

	declare export function category20(): Ordinal<string, string>

	declare export function category20<Domain>(): Ordinal<Domain, string>

	declare export function category20b(): Ordinal<string, string>

	declare export function category20b<Domain>(): Ordinal<Domain, string>

	declare export function category20c(): Ordinal<string, string>

	declare export function category20c<Domain>(): Ordinal<Domain, string>

	declare export function utc(): Scale<number, number>

	declare export function utc<Output>(): Scale<Output, Output>

	declare export function utc<Range, Output>(): Scale<Range, Output>

		
}

declare module 'time' {
		declare interface Interval {
		(d: Date): Date,
		floor(d: Date): Date,
		round(d: Date): Date,
		ceil(d: Date): Date,
		range(start: Date, stop: Date, step?: number): Date[],
		offset(date: Date, step: number): Date,
		utc: {
		(d: Date): Date,
		floor(d: Date): Date,
		round(d: Date): Date,
		ceil(d: Date): Date,
		range(start: Date, stop: Date, step?: number): Date[],
		offset(date: Date, step: number): Date
	}
	}

	declare interface Format {
		(d: Date): string,
		parse(input: string): Date
	}

	declare interface Scale<Range, Output> {
		(x: Date): Output,
		invert(y: number): Date,
		domain(): Date[],
		domain(dates: number[]): Scale<Range, Output>,
		domain(dates: Date[]): Scale<Range, Output>,
		nice(): Scale<Range, Output>,
		nice(interval: Interval, step?: number): Scale<Range, Output>,
		range(): Range[],
		range(values: Range[]): Scale<Range, Output>,
		rangeRound(values: number[]): Scale<number, number>,
		interpolate(): (a: Range, b: Range) => (t: number) => Output,
		interpolate(factory: (a: Range, b: Range) => (t: number) => Output): Scale<Range, Output>,
		clamp(): boolean,
		clamp(clamp: boolean): Scale<Range, Output>,
		ticks(): Date[],
		ticks(interval: Interval, step?: number): Date[],
		ticks(count: number): Date[],
		tickFormat(count: number): (d: Date) => string,
		copy(): Scale<Range, Output>
	}

	declare export function seconds(start: Date, stop: Date, step?: number): Date[]

	declare export function minutes(start: Date, stop: Date, step?: number): Date[]

	declare export function hours(start: Date, stop: Date, step?: number): Date[]

	declare export function days(start: Date, stop: Date, step?: number): Date[]

	declare export function weeks(start: Date, stop: Date, step?: number): Date[]

	declare export function sundays(start: Date, stop: Date, step?: number): Date[]

	declare export function mondays(start: Date, stop: Date, step?: number): Date[]

	declare export function tuesdays(start: Date, stop: Date, step?: number): Date[]

	declare export function wednesdays(start: Date, stop: Date, step?: number): Date[]

	declare export function thursdays(start: Date, stop: Date, step?: number): Date[]

	declare export function fridays(start: Date, stop: Date, step?: number): Date[]

	declare export function saturdays(start: Date, stop: Date, step?: number): Date[]

	declare export function months(start: Date, stop: Date, step?: number): Date[]

	declare export function years(start: Date, stop: Date, step?: number): Date[]

	declare export function dayOfYear(d: Date): number

	declare export function weekOfYear(d: Date): number

	declare export function sundayOfYear(d: Date): number

	declare export function mondayOfYear(d: Date): number

	declare export function tuesdayOfYear(d: Date): number

	declare export function wednesdayOfYear(d: Date): number

	declare export function fridayOfYear(d: Date): number

	declare export function saturdayOfYear(d: Date): number

	declare export function format(specifier: string): Format

	declare export function scale(): Scale<number, number>

	declare export function scale<Output>(): Scale<Output, Output>

	declare export function scale<Range, Output>(): Scale<Range, Output>

		
}

declare module 'format' {
			declare export function multi(formats: Array<[string, (d: Date) => boolean | number]>): Format

	declare export function utc(specifier: string): Format

		
}

declare module 'utc' {
			declare export function multi(formats: Array<[string, (d: Date) => boolean | number]>): Format

		
}

declare module 'behavior' {
		declare interface Drag<Datum> {
		(selection: Selection<Datum>): void,
		on(type: string): (d: Datum, i: number) => any,
		on(type: string, listener: (d: Datum, i: number) => any): Drag<Datum>,
		origin(): (d: Datum, i: number) => {
		x: number,
		y: number
	},
		origin(accessor: (d: Datum, i: number) => {
		x: number,
		y: number
	}): Drag<Datum>
	}

	declare interface Zoom<Datum> {
		(selection: Selection<Datum>): void,
		translate(): [number, number],
		translate(translate: [number, number]): Zoom<Datum>,
		scale(): number,
		scale(scale: number): Zoom<Datum>,
		scaleExtent(): [number, number],
		scaleExtent(extent: [number, number]): Zoom<Datum>,
		center(): [number, number],
		center(center: [number, number]): Zoom<Datum>,
		size(): [number, number],
		size(size: [number, number]): Zoom<Datum>,
		x(): zoom.Scale,
		x(x: zoom.Scale): Zoom<Datum>,
		y(): zoom.Scale,
		y(y: zoom.Scale): Zoom<Datum>,
		on(type: string): (d: Datum, i: number) => any,
		on(type: string, listener: (d: Datum, i: number) => any): Zoom<Datum>,
		event(selection: Selection<Datum>): void,
		event(transition: Transition<Datum>): void
	}

	declare export function drag<Datum>(): Drag<Datum>

	declare export function zoom<Datum>(): Zoom<Datum>

		
}

declare module 'zoom' {
		declare interface Scale {
		domain(): number[],
		domain(values: number[]): Scale,
		invert(y: number): number,
		range(values: number[]): Scale,
		range(): number[]
	}

			
}

declare module 'geo' {
		declare interface Path {
		(feature: any, index?: number): string,
		area(feature: any): number,
		centroid(feature: any): [number, number],
		bounds(feature: any): [[number, number], [number, number]],
		projection(): Transform | ((coordinates: [number, number]) => [number, number]),
		projection(stream: Transform): Path,
		projection(projection: (coordinates: [number, number]) => [number, number]): Path,
		pointRadius(): number | ((datum: any, index: number) => number),
		pointRadius(radius: number): Path,
		pointRadius(radius: (datum: any, index: number) => number): Path,
		context(): CanvasRenderingContext2D,
		context(context: CanvasRenderingContext2D): Path
	}

	declare interface Graticule {
		(): any,
		lines(): any[],
		outline(): any,
		extent(): [[number, number], [number, number]],
		extent(extent: [[number, number], [number, number]]): Graticule,
		majorExtent(): [[number, number], [number, number]],
		majorExtent(extent: [[number, number], [number, number]]): Graticule,
		minorExtent(): [[number, number], [number, number]],
		minorExtent(extent: [[number, number], [number, number]]): Graticule,
		step(): [number, number],
		step(step: [number, number]): Graticule,
		majorStep(): [number, number],
		majorStep(step: [number, number]): Graticule,
		minorStep(): [number, number],
		minorStep(step: [number, number]): Graticule,
		precision(): number,
		precision(precision: number): Graticule
	}

	declare interface Circle {
		(...args: any[]): any,
		origin(): [number, number] | ((...args: any[]) => [number, number]),
		origin(origin: [number, number]): Circle,
		origin(origin: (...args: any[]) => [number, number]): Circle,
		angle(): number,
		angle(angle: number): Circle,
		precision(): number,
		precision(precision: number): Circle
	}

	declare interface Rotation {
		(location: [number, number]): [number, number],
		invert(location: [number, number]): [number, number]
	}

	declare interface Listener {
		point(x: number, y: number, z: number): void,
		lineStart(): void,
		lineEnd(): void,
		polygonStart(): void,
		polygonEnd(): void,
		sphere(): void
	}

	declare interface TransformMethods {
		point(x: number, y: number, z: number): void,
		lineStart(): void,
		lineEnd(): void,
		polygonStart(): void,
		polygonEnd(): void,
		sphere(): void
	}

	declare interface Transform {
		stream(stream: Listener): Listener
	}

	declare interface ClipExtent {
		extent(): [[number, number], [number, number]],
		extent(extent: [[number, number], [number, number]]): ClipExtent
	}

	declare interface Projection {
		(location: [number, number]): [number, number],
		rotate(): [number, number, number],
		rotate(rotation: [number, number, number]): Projection,
		center(): [number, number],
		center(location: [number, number]): Projection,
		translate(): [number, number],
		translate(point: [number, number]): Projection,
		scale(): number,
		scale(scale: number): Projection,
		clipAngle(): number,
		clipAngle(angle: number): Projection,
		clipExtent(): [[number, number], [number, number]],
		clipExtent(extent: [[number, number], [number, number]]): Projection,
		precision(): number,
		precision(precision: number): Projection,
		stream(listener: Listener): Listener
	}

	declare interface InvertibleProjection {
		invert(point: [number, number]): [number, number]
	}

	declare interface ConicProjection {
		parallels(): [number, number],
		parallels(parallels: [number, number]): ConicProjection,
		rotate(): [number, number, number],
		rotate(rotation: [number, number, number]): ConicProjection,
		center(): [number, number],
		center(location: [number, number]): ConicProjection,
		translate(): [number, number],
		translate(point: [number, number]): ConicProjection,
		scale(): number,
		scale(scale: number): ConicProjection,
		clipAngle(): number,
		clipAngle(angle: number): ConicProjection,
		clipExtent(): [[number, number], [number, number]],
		clipExtent(extent: [[number, number], [number, number]]): ConicProjection,
		precision(): number,
		precision(precision: number): ConicProjection
	}

	declare interface RawProjection {
		(lambda: number, phi: number): [number, number]
	}

	declare interface RawInvertibleProjection {
		invert(x: number, y: number): [number, number]
	}

	declare export function path(): Path

	declare export function graticule(): Graticule

	declare export function circle(): Circle

	declare export function area(feature: any): number

	declare export function centroid(feature: any): [number, number]

	declare export function bounds(feature: any): [[number, number], [number, number]]

	declare export function distance(a: [number, number], b: [number, number]): number

	declare export function length(feature: any): number

	declare export function interpolate(a: [number, number], b: [number, number]): (t: number) => [number, number]

	declare export function rotation(rotate: [number, number] | [number, number, number]): Rotation

	declare export function stream(object: any, listener: Listener): void

	declare export function transform(methods: TransformMethods): Transform

	declare export function clipExtent(): ClipExtent

	declare export function projection(raw: RawInvertibleProjection): InvertibleProjection

	declare export function projection(raw: RawProjection): Projection

	declare export function projectionMutator(
		factory: (...args: any[]) => RawInvertibleProjection
	): (...args: any[]) => InvertibleProjection

	declare export function projectionMutator(factory: (...args: any[]) => RawProjection): (...args: any[]) => Projection

	declare export function albers(): ConicProjection

	declare export function albersUsa(): ConicProjection

	declare export function azimuthalEqualArea(): InvertibleProjection

	declare export function azimuthalEquidistant(): InvertibleProjection

	declare export function conicConformal(): ConicProjection

	declare export function conicEqualArea(): ConicProjection

	declare export function conicEquidistant(): ConicProjection

	declare export function equirectangular(): InvertibleProjection

	declare export function gnomonic(): InvertibleProjection

	declare export function mercator(): InvertibleProjection

	declare export function orthographic(): InvertibleProjection

	declare export function stereographic(): InvertibleProjection

	declare export function transverseMercator(): InvertibleProjection

		
}

declare module 'azimuthalEqualArea' {
			declare export function raw(lambda: number, phi: number): [number, number]

		
}

declare module 'raw' {
			declare export function invert(x: number, y: number): [number, number]

	declare export function invert(x: number, y: number): [number, number]

	declare export function invert(x: number, y: number): [number, number]

	declare export function invert(x: number, y: number): [number, number]

	declare export function invert(x: number, y: number): [number, number]

	declare export function invert(x: number, y: number): [number, number]

	declare export function invert(x: number, y: number): [number, number]

	declare export function invert(x: number, y: number): [number, number]

		
}

declare module 'azimuthalEquidistant' {
			declare export function raw(lambda: number, phi: number): [number, number]

		
}

declare module 'conicConformal' {
			declare export function raw(phi0: number, phi1: number): RawInvertibleProjection

		
}

declare module 'conicEqualArea' {
			declare export function raw(phi0: number, phi1: number): RawInvertibleProjection

		
}

declare module 'conicEquidistant' {
			declare export function raw(phi0: number, phi1: number): RawInvertibleProjection

		
}

declare module 'equirectangular' {
			declare export function raw(lambda: number, phi: number): [number, number]

		
}

declare module 'gnomonic' {
			declare export function raw(lambda: number, phi: number): [number, number]

		
}

declare module 'mercator' {
			declare export function raw(lambda: number, phi: number): [number, number]

		
}

declare module 'orthographic' {
			declare export function raw(lambda: number, phi: number): [number, number]

		
}

declare module 'stereographic' {
			declare export function raw(lambda: number, phi: number): [number, number]

		
}

declare module 'transverseMercator' {
			declare export function raw(lambda: number, phi: number): [number, number]

		
}

declare module 'svg' {
		declare interface Line<T> {
		(data: T[]): string,
		x(): number | ((d: T, i: number) => number),
		x(x: number): Line<T>,
		x(x: (d: T, i: number) => number): Line<T>,
		y(): number | ((d: T, i: number) => number),
		y(x: number): Line<T>,
		y(y: (d: T, i: number) => number): Line<T>,
		interpolate(): string | ((points: Array<[number, number]>) => string),
		interpolate(interpolate: "linear"): Line<T>,
		interpolate(interpolate: "linear-closed"): Line<T>,
		interpolate(interpolate: "step"): Line<T>,
		interpolate(interpolate: "step-before"): Line<T>,
		interpolate(interpolate: "step-after"): Line<T>,
		interpolate(interpolate: "basis"): Line<T>,
		interpolate(interpolate: "basis-open"): Line<T>,
		interpolate(interpolate: "basis-closed"): Line<T>,
		interpolate(interpolate: "bundle"): Line<T>,
		interpolate(interpolate: "cardinal"): Line<T>,
		interpolate(interpolate: "cardinal-open"): Line<T>,
		interpolate(interpolate: "cardinal-closed"): Line<T>,
		interpolate(interpolate: "monotone"): Line<T>,
		interpolate(interpolate: string | ((points: Array<[number, number]>) => string)): Line<T>,
		tension(): number,
		tension(tension: number): Line<T>,
		defined(): (d: T, i: number) => boolean,
		defined(defined: (d: T, i: number) => boolean): Line<T>
	}

	declare interface Area<T> {
		(data: T[]): string,
		x(): number | ((d: T, i: number) => number),
		x(x: number): Area<T>,
		x(x: (d: T, i: number) => number): Area<T>,
		x0(): number | ((d: T, i: number) => number),
		x0(x0: number): Area<T>,
		x0(x0: (d: T, i: number) => number): Area<T>,
		x1(): number | ((d: T, i: number) => number),
		x1(x1: number): Area<T>,
		x1(x1: (d: T, i: number) => number): Area<T>,
		y(): number | ((d: T, i: number) => number),
		y(y: number): Area<T>,
		y(y: (d: T, i: number) => number): Area<T>,
		y0(): number | ((d: T, i: number) => number),
		y0(y0: number): Area<T>,
		y0(y0: (d: T, i: number) => number): Area<T>,
		y1(): number | ((d: T, i: number) => number),
		y1(y1: number): Area<T>,
		y1(y1: (d: T, i: number) => number): Area<T>,
		interpolate(): string | ((points: Array<[number, number]>) => string),
		interpolate(interpolate: "linear"): Area<T>,
		interpolate(interpolate: "step"): Area<T>,
		interpolate(interpolate: "step-before"): Area<T>,
		interpolate(interpolate: "step-after"): Area<T>,
		interpolate(interpolate: "basis"): Area<T>,
		interpolate(interpolate: "basis-open"): Area<T>,
		interpolate(interpolate: "cardinal"): Area<T>,
		interpolate(interpolate: "cardinal-open"): Area<T>,
		interpolate(interpolate: "monotone"): Area<T>,
		interpolate(interpolate: string | ((points: Array<[number, number]>) => string)): Area<T>,
		tension(): number,
		tension(tension: number): Area<T>,
		defined(): (d: T, i: number) => boolean,
		defined(defined: (d: T, i: number) => boolean): Area<T>
	}

	declare interface Arc<T> {
		(d: T, i?: number): string,
		innerRadius(): (d: T, i: number) => number,
		innerRadius(radius: number): Arc<T>,
		innerRadius(radius: (d: T, i: number) => number): Arc<T>,
		outerRadius(): (d: T, i: number) => number,
		outerRadius(radius: number): Arc<T>,
		outerRadius(radius: (d: T, i: number) => number): Arc<T>,
		cornerRadius(): (d: T, i: number) => number,
		cornerRadius(radius: number): Arc<T>,
		cornerRadius(radius: (d: T, i: number) => number): Arc<T>,
		padRadius(): string | ((d: T, i: number) => number),
		padRadius(radius: "auto"): Arc<T>,
		padRadius(radius: string): Arc<T>,
		padRadius(radius: (d: T, i: number) => number): Arc<T>,
		startAngle(): (d: T, i: number) => number,
		startAngle(angle: number): Arc<T>,
		startAngle(angle: (d: T, i: number) => number): Arc<T>,
		endAngle(): (d: T, i: number) => number,
		endAngle(angle: number): Arc<T>,
		endAngle(angle: (d: T, i: number) => number): Arc<T>,
		padAngle(): (d: T, i: number) => number,
		padAngle(angle: number): Arc<T>,
		padAngle(angle: (d: T, i: number) => number): Arc<T>,
		centroid(d: T, i?: number): [number, number]
	}

	declare interface Symbol<T> {
		(d: T, i?: number): string,
		type(): (d: T, i: number) => string,
		type(type: string): Symbol<T>,
		type(type: (d: T, i: number) => string): Symbol<T>,
		size(): (d: T, i: string) => number,
		size(size: number): Symbol<T>,
		size(size: (d: T, i: number) => number): Symbol<T>
	}

	declare interface Chord<Link, Node> {
		(d: Link, i: number): string,
		source(): (d: Link, i: number) => Node,
		source(source: Node): Chord<Link, Node>,
		source(source: (d: Link, i: number) => Node): Chord<Link, Node>,
		target(): (d: Link, i: number) => Node,
		target(target: Node): Chord<Link, Node>,
		target(target: (d: Link, i: number) => Node): Chord<Link, Node>,
		radius(): (d: Node, i: number) => number,
		radius(radius: number): Chord<Link, Node>,
		radius(radius: (d: Node, i: number) => number): Chord<Link, Node>,
		startAngle(): (d: Node, i: number) => number,
		startAngle(angle: number): Chord<Link, Node>,
		startAngle(angle: (d: Node, i: number) => number): Chord<Link, Node>,
		endAngle(): (d: Node, i: number) => number,
		endAngle(angle: number): Chord<Link, Node>,
		endAngle(angle: (d: Node, i: number) => number): Chord<Link, Node>
	}

	declare interface Diagonal<Link, Node> {
		(d: Link, i?: number): string,
		source(): (d: Link, i: number) => Node,
		source(source: Node): Diagonal<Link, Node>,
		source(
		source: (d: Link, i: number) => {
		x: number,
		y: number
	}
	): Diagonal<Link, Node>,
		target(): (d: Link, i: number) => Node,
		target(target: Node): Diagonal<Link, Node>,
		target(
		target: (d: Link, i: number) => {
		x: number,
		y: number
	}
	): Diagonal<Link, Node>,
		projection(): (d: Node, i: number) => [number, number],
		projection(projection: (d: Node, i: number) => [number, number]): Diagonal<Link, Node>
	}

	declare interface Axis {
		(selection: Selection<any>): void,
		(selection: Transition<any>): void,
		scale(): any,
		scale(scale: any): Axis,
		orient(): string,
		orient(orientation: string): Axis,
		ticks(): any[],
		ticks(...args: any[]): Axis,
		tickValues(): any[],
		tickValues(values: any[]): Axis,
		tickSize(): number,
		tickSize(size: number): Axis,
		tickSize(inner: number, outer: number): Axis,
		innerTickSize(): number,
		innerTickSize(size: number): Axis,
		outerTickSize(): number,
		outerTickSize(size: number): Axis,
		tickPadding(): number,
		tickPadding(padding: number): Axis,
		tickFormat(): (t: any) => string,
		tickFormat(format: (t: any) => string): Axis,
		tickFormat(format: string): Axis
	}

	declare interface Brush<T> {
		(selection: Selection<T>): void,
		(selection: Transition<T>): void,
		event(selection: Selection<T>): void,
		event(selection: Transition<T>): void,
		x(): brush.Scale,
		x(x: brush.Scale): Brush<T>,
		y(): brush.Scale,
		y(y: brush.Scale): Brush<T>,
		extent(): [number, number] | [[number, number], [number, number]],
		extent(extent: [number, number] | [[number, number], [number, number]]): Brush<T>,
		clamp(): boolean | [boolean, boolean],
		clamp(clamp: boolean | [boolean, boolean]): Brush<T>,
		clear(): void,
		empty(): boolean,
		on(type: "brushstart"): (datum: T, index: number) => void,
		on(type: "brush"): (datum: T, index: number) => void,
		on(type: "brushend"): (datum: T, index: number) => void,
		on(type: string): (datum: T, index: number) => void,
		on(type: "brushstart", listener: (datum: T, index: number) => void): Brush<T>,
		on(type: "brush", listener: (datum: T, index: number) => void): Brush<T>,
		on(type: "brushend", listener: (datum: T, index: number) => void): Brush<T>,
		on(type: string, listener: (datum: T, index: number) => void): Brush<T>
	}

	declare export function line(): Line<[number, number]>

	declare export function line<T>(): Line<T>

	declare export function area(): Area<[number, number]>

	declare export function area<T>(): Area<T>

	declare export function arc(): Arc<arc.Arc>

	declare export function arc<T>(): Arc<T>

	declare export function symbol(): Symbol<{
		
	}>

	declare export function symbol<T>(): Symbol<T>

	declare export function chord(): Chord<chord.Link<chord.Node>, chord.Node>

	declare export function chord<Node>(): Chord<chord.Link<Node>, Node>

	declare export function chord<Link, Node>(): Chord<Link, Node>

	declare export function diagonal(): Diagonal<diagonal.Link<diagonal.Node>, diagonal.Node>

	declare export function diagonal<Node>(): Diagonal<diagonal.Link<Node>, Node>

	declare export function diagonal<Link, Node>(): Diagonal<Link, Node>

	declare export function axis(): Axis

	declare export function brush(): Brush<any>

	declare export function brush<T>(): Brush<T>

		
}

declare module 'line' {
		declare interface Radial<T> {
		(data: T[]): string,
		radius(): number | ((d: T, i: number) => number),
		radius(radius: number): Radial<T>,
		radius(radius: (d: T, i: number) => number): Radial<T>,
		angle(): number | ((d: T, i: number) => number),
		angle(angle: number): Radial<T>,
		angle(angle: (d: T, i: number) => number): Radial<T>,
		interpolate(): string | ((points: Array<[number, number]>) => string),
		interpolate(interpolate: "linear"): Radial<T>,
		interpolate(interpolate: "linear-closed"): Radial<T>,
		interpolate(interpolate: "step"): Radial<T>,
		interpolate(interpolate: "step-before"): Radial<T>,
		interpolate(interpolate: "step-after"): Radial<T>,
		interpolate(interpolate: "basis"): Radial<T>,
		interpolate(interpolate: "basis-open"): Radial<T>,
		interpolate(interpolate: "basis-closed"): Radial<T>,
		interpolate(interpolate: "bundle"): Radial<T>,
		interpolate(interpolate: "cardinal"): Radial<T>,
		interpolate(interpolate: "cardinal-open"): Radial<T>,
		interpolate(interpolate: "cardinal-closed"): Radial<T>,
		interpolate(interpolate: "monotone"): Radial<T>,
		interpolate(interpolate: string | ((points: Array<[number, number]>) => string)): Radial<T>,
		tension(): number,
		tension(tension: number): Radial<T>,
		defined(): (d: T, i: number) => boolean,
		defined(defined: (d: T, i: number) => boolean): Radial<T>
	}

	declare export function radial(): Radial<[number, number]>

	declare export function radial<T>(): Radial<T>

		
}

declare module 'area' {
		declare interface Radial<T> {
		(data: T[]): string,
		radius(): number | ((d: T, i: number) => number),
		radius(radius: number): Radial<T>,
		radius(radius: (d: T, i: number) => number): Radial<T>,
		innerRadius(): number | ((d: T, i: number) => number),
		innerRadius(innerRadius: number): Radial<T>,
		innerRadius(innerRadius: (d: T, i: number) => number): Radial<T>,
		outerRadius(): number | ((d: T, i: number) => number),
		outerRadius(outerRadius: number): Radial<T>,
		outerRadius(outerRadius: (d: T, i: number) => number): Radial<T>,
		angle(): number | ((d: T, i: number) => number),
		angle(angle: number): Radial<T>,
		angle(angle: (d: T, i: number) => number): Radial<T>,
		startAngle(): number | ((d: T, i: number) => number),
		startAngle(startAngle: number): Radial<T>,
		startAngle(startAngle: (d: T, i: number) => number): Radial<T>,
		endAngle(): number | ((d: T, i: number) => number),
		endAngle(endAngle: number): Radial<T>,
		endAngle(endAngle: (d: T, i: number) => number): Radial<T>,
		interpolate(): string | ((points: Array<[number, number]>) => string),
		interpolate(interpolate: "linear"): Radial<T>,
		interpolate(interpolate: "step"): Radial<T>,
		interpolate(interpolate: "step-before"): Radial<T>,
		interpolate(interpolate: "step-after"): Radial<T>,
		interpolate(interpolate: "basis"): Radial<T>,
		interpolate(interpolate: "basis-open"): Radial<T>,
		interpolate(interpolate: "cardinal"): Radial<T>,
		interpolate(interpolate: "cardinal-open"): Radial<T>,
		interpolate(interpolate: "monotone"): Radial<T>,
		interpolate(interpolate: string | ((points: Array<[number, number]>) => string)): Radial<T>,
		tension(): number,
		tension(tension: number): Radial<T>,
		defined(): (d: T, i: number) => boolean,
		defined(defined: (d: T, i: number) => boolean): Radial<T>
	}

	declare export function radial(): Radial<[number, number]>

	declare export function radial<T>(): Radial<T>

		
}

declare module 'arc' {
		declare interface Arc {
		innerRadius: number,
		outerRadius: number,
		startAngle: number,
		endAngle: number,
		padAngle: number
	}

			
}

declare module 'chord' {
		declare interface Link<Node> {
		source: Node,
		target: Node
	}

	declare interface Node {
		radius: number,
		startAngle: number,
		endAngle: number
	}

	declare interface Link {
		source: Node,
		target: Node
	}

	declare interface Node {
		index: number,
		subindex: number,
		startAngle: number,
		endAngle: number,
		value: number
	}

	declare interface Group {
		index: number,
		startAngle: number,
		endAngle: number,
		value: number
	}

			
}

declare module 'diagonal' {
		declare interface Link<Node> {
		source: Node,
		target: Node
	}

	declare interface Node {
		x: number,
		y: number
	}

	declare interface Radial<Link, Node> {
		(d: Link, i: number): string,
		source(): (d: Link, i: number) => Node,
		source(source: Node): Radial<Link, Node>,
		source(source: (d: Link, i: number) => Node): Radial<Link, Node>,
		target(): (d: Link, i: number) => Node,
		target(target: Node): Radial<Link, Node>,
		target(target: (d: Link, i: number) => Node): Radial<Link, Node>,
		projection(): (d: Node, i: number) => [number, number],
		projection(projection: (d: Node, i: number) => [number, number]): Radial<Link, Node>
	}

	declare export function radial(): Radial<Link<Node>, Node>

	declare export function radial<Node>(): Radial<Link<Node>, Node>

	declare export function radial<Link, Node>(): Radial<Link, Node>

		
}

declare module 'brush' {
		declare interface Scale {
		domain(): number[],
		domain(domain: number[]): Scale,
		range(): number[],
		range(range: number[]): Scale,
		invert(y: number): number
	}

			
}

declare module 'layout' {
		declare interface Bundle<T> {
		(links: bundle.Link<T>[]): T[][]
	}

	declare interface Chord {
		matrix(): number[][],
		matrix(matrix: number[][]): Chord,
		padding(): number,
		padding(padding: number): Chord,
		sortGroups(): (a: number, b: number) => number,
		sortGroups(comparator: (a: number, b: number) => number): Chord,
		sortSubgroups(): (a: number, b: number) => number,
		sortSubgroups(comparator: (a: number, b: number) => number): Chord,
		sortChords(): (a: number, b: number) => number,
		sortChords(comparator: (a: number, b: number) => number): Chord,
		chords(): chord.Link[],
		groups(): chord.Group[]
	}

	declare interface Cluster<T> {
		(root: T): T[],
		nodes(root: T): T[],
		links(nodes: T[]): cluster.Link<T>[],
		children(): (node: T) => T[],
		children(accessor: (node: T) => T[]): Cluster<T>,
		sort(): (a: T, b: T) => number,
		sort(comparator: (a: T, b: T) => number): Cluster<T>,
		separation(): (a: T, b: T) => number,
		separation(separation: (a: T, b: T) => number): Cluster<T>,
		size(): [number, number],
		size(size: [number, number]): Cluster<T>,
		nodeSize(): [number, number],
		nodeSize(nodeSize: [number, number]): Cluster<T>,
		value(): (a: T) => number,
		value(value: (a: T) => number): Cluster<T>
	}

	declare interface Force<Link, Node> {
		size(): [number, number],
		size(size: [number, number]): Force<Link, Node>,
		linkDistance(): number | ((link: Link, index: number) => number),
		linkDistance(distance: number): Force<Link, Node>,
		linkDistance(distance: (link: Link, index: number) => number): Force<Link, Node>,
		linkStrength(): number | ((link: Link, index: number) => number),
		linkStrength(strength: number): Force<Link, Node>,
		linkStrength(strength: (link: Link, index: number) => number): Force<Link, Node>,
		friction(): number,
		friction(friction: number): Force<Link, Node>,
		charge(): number | ((node: Node, index: number) => number),
		charge(charge: number): Force<Link, Node>,
		charge(charge: (node: Node, index: number) => number): Force<Link, Node>,
		chargeDistance(): number,
		chargeDistance(distance: number): Force<Link, Node>,
		theta(): number,
		theta(theta: number): Force<Link, Node>,
		gravity(): number,
		gravity(gravity: number): Force<Link, Node>,
		nodes(): Node[],
		nodes(nodes: Node[]): Force<Link, Node>,
		links(): Link[],
		links(links: {
		source: number,
		target: number
	}[]): Force<Link, Node>,
		links(links: Link[]): Force<Link, Node>,
		start(): Force<Link, Node>,
		tick(): Force<Link, Node>,
		alpha(): number,
		alpha(value: number): Force<Link, Node>,
		resume(): Force<Link, Node>,
		stop(): Force<Link, Node>,
		on(type: string): (event: force.Event) => void,
		on(type: string, listener: (event: force.Event) => void): Force<Link, Node>,
		drag(): behavior.Drag<Node>,
		drag(selection: Selection<Node>): void
	}

	declare interface Hierarchy<T> {
		(root: T): T[],
		children(): (node: T) => T[],
		children(accessor: (node: T) => T[]): Hierarchy<T>,
		sort(): (a: T, b: T) => number,
		sort(comparator: (a: T, b: T) => number): Hierarchy<T>,
		value(): (node: T) => number,
		value(accessor: (node: T) => number): Hierarchy<T>,
		revalue(root: T): T[]
	}

	declare interface Histogram<T> {
		(values: T[], index?: number): histogram.Bin<T>[],
		value(): (datum: T, index: number) => number,
		value(value: (datum: T, index: number) => number): Histogram<T>,
		range(): (values: T[], index: number) => [number, number],
		range(range: (values: T[], index: number) => [number, number]): Histogram<T>,
		range(range: [number, number]): Histogram<T>,
		bins(): (range: [number, number], values: T[], index: number) => number[],
		bins(count: number): Histogram<T>,
		bins(thresholds: number[]): Histogram<T>,
		bins(
		func: (range: [number, number], values: T[], index: number) => number[]
	): Histogram<T>,
		frequency(): boolean,
		frequency(frequency: boolean): Histogram<T>
	}

	declare interface Pack<T> {
		(root: T): T[],
		nodes(root: T): T[],
		links(nodes: T[]): pack.Link<T>[],
		children(): (node: T, depth: number) => T[],
		children(children: (node: T, depth: number) => T[]): Pack<T>,
		sort(): (a: T, b: T) => number,
		sort(comparator: (a: T, b: T) => number): Pack<T>,
		value(): (node: T) => number,
		value(value: (node: T) => number): Pack<T>,
		size(): [number, number],
		size(size: [number, number]): Pack<T>,
		radius(): number | ((node: T) => number),
		radius(radius: number): Pack<T>,
		radius(radius: (node: T) => number): Pack<T>,
		padding(): number,
		padding(padding: number): Pack<T>
	}

	declare export interface Partition<T> {
		(root: T): T[],
		nodes(root: T): T[],
		links(nodes: T[]): partition.Link<T>[],
		children(): (node: T, depth: number) => T[],
		children(children: (node: T, depth: number) => T[]): Partition<T>,
		sort(): (a: T, b: T) => number,
		sort(comparator: (a: T, b: T) => number): Partition<T>,
		value(): (node: T) => number,
		value(value: (node: T) => number): Partition<T>,
		size(): [number, number],
		size(size: [number, number]): Partition<T>
	}

	declare interface Pie<T> {
		(data: T[], index?: number): pie.Arc<T>[],
		value(): (datum: T, index: number) => number,
		value(accessor: (datum: T, index: number) => number): Pie<T>,
		sort(): (a: T, b: T) => number,
		sort(comparator: (a: T, b: T) => number): Pie<T>,
		startAngle(): number | ((data: T[], index: number) => number),
		startAngle(angle: number): Pie<T>,
		startAngle(angle: (data: T[], index: number) => number): Pie<T>,
		endAngle(): number | ((data: T[], index: number) => number),
		endAngle(angle: number): Pie<T>,
		endAngle(angle: (data: T[], index: number) => number): Pie<T>,
		padAngle(): number | ((data: T[], index: number) => number),
		padAngle(angle: number): Pie<T>,
		padAngle(angle: (data: T[], index: number) => number): Pie<T>
	}

	declare interface Stack<Series, Value> {
		(layers: Series[], index?: number): Series[],
		values(): (layer: Series, index: number) => Value[],
		values(accessor: (layer: Series, index: number) => Value[]): Stack<Series, Value>,
		offset(): (data: Array<[number, number]>) => number[],
		offset(offset: "silhouette"): Stack<Series, Value>,
		offset(offset: "wiggle"): Stack<Series, Value>,
		offset(offset: "expand"): Stack<Series, Value>,
		offset(offset: "zero"): Stack<Series, Value>,
		offset(offset: string): Stack<Series, Value>,
		offset(offset: (data: Array<[number, number]>) => number[]): Stack<Series, Value>,
		order(): (data: Array<[number, number]>) => number[],
		order(order: "inside-out"): Stack<Series, Value>,
		order(order: "reverse"): Stack<Series, Value>,
		order(order: "default"): Stack<Series, Value>,
		order(order: string): Stack<Series, Value>,
		order(order: (data: Array<[number, number]>) => number[]): Stack<Series, Value>,
		x(): (value: Value, index: number) => number,
		x(accessor: (value: Value, index: number) => number): Stack<Series, Value>,
		y(): (value: Value, index: number) => number,
		y(accesor: (value: Value, index: number) => number): Stack<Series, Value>,
		out(): (value: Value, y0: number, y: number) => void,
		out(setter: (value: Value, y0: number, y: number) => void): Stack<Series, Value>
	}

	declare interface Tree<T> {
		(root: T, index?: number): T[],
		nodes(root: T, index?: number): T[],
		links(nodes: T[]): tree.Link<T>[],
		children(): (datum: T, index: number) => T[],
		children(children: (datum: T, index: number) => T[]): Tree<T>,
		separation(): (a: T, b: T) => number,
		separation(separation: (a: T, b: T) => number): Tree<T>,
		size(): [number, number],
		size(size: [number, number]): Tree<T>,
		nodeSize(): [number, number],
		nodeSize(size: [number, number]): Tree<T>,
		sort(): (a: T, b: T) => number,
		sort(comparator: (a: T, b: T) => number): Tree<T>,
		value(): (datum: T, index: number) => number,
		value(value: (datum: T, index: number) => number): Tree<T>
	}

	declare interface Treemap<T> {
		(root: T, index?: number): T[],
		nodes(root: T, index?: number): T[],
		links(nodes: T[]): treemap.Link<T>[],
		children(): (node: T, depth: number) => T[],
		children(children: (node: T, depth: number) => T[]): Treemap<T>,
		sort(): (a: T, b: T) => number,
		sort(comparator: (a: T, b: T) => number): Treemap<T>,
		value(): (node: T, index: number) => number,
		value(value: (node: T, index: number) => number): Treemap<T>,
		size(): [number, number],
		size(size: [number, number]): Treemap<T>,
		padding(): (node: T, depth: number) => treemap.Padding,
		padding(padding: treemap.Padding): Treemap<T>,
		padding(padding: (node: T, depth: number) => treemap.Padding): Treemap<T>,
		round(): boolean,
		round(round: boolean): Treemap<T>,
		sticky(): boolean,
		sticky(sticky: boolean): boolean,
		mode(): string,
		mode(mode: "squarify"): Treemap<T>,
		mode(mode: "slice"): Treemap<T>,
		mode(mode: "dice"): Treemap<T>,
		mode(mode: "slice-dice"): Treemap<T>,
		mode(mode: string): Treemap<T>,
		ratio(): number,
		ratio(ratio: number): Treemap<T>
	}

	declare export function bundle(): Bundle<bundle.Node>

	declare export function bundle<T>(): Bundle<T>

	declare export function chord(): Chord

	declare export function cluster(): Cluster<cluster.Result>

	declare export function cluster<T>(): Cluster<T>

	declare export function force(): Force<force.Link<force.Node>, force.Node>

	declare export function force<Node>(): Force<force.Link<Node>, Node>

	declare export function force<Link, Node>(): Force<Link, Node>

	declare export function hierarchy(): Hierarchy<hierarchy.Result>

	declare export function hierarchy<T>(): Hierarchy<T>

	declare export function histogram(): Histogram<number>

	declare export function histogram<T>(): Histogram<T>

	declare export function pack(): Pack<pack.Node>

	declare export function pack<T>(): Pack<T>

	declare export function partition(): Partition<partition.Node>

	declare export function partition<T>(): Partition<T>

	declare export function pie(): Pie<number>

	declare export function pie<T>(): Pie<T>

	declare export function stack(): Stack<stack.Value[], stack.Value>

	declare export function stack<Value>(): Stack<Value[], Value>

	declare export function stack<Series, Value>(): Stack<Series, Value>

	declare export function tree(): Tree<tree.Node>

	declare export function tree<T>(): Tree<T>

	declare export function treemap(): Treemap<treemap.Node>

	declare export function treemap<T>(): Treemap<T>

		
}

declare module 'bundle' {
		declare interface Node {
		parent: Node
	}

	declare interface Link<T> {
		source: T,
		target: T
	}

			
}

declare module 'cluster' {
		declare interface Result {
		parent?: Result,
		children?: Result[],
		depth?: number,
		x?: number,
		y?: number
	}

	declare interface Link<T> {
		source: T,
		target: T
	}

			
}

declare module 'force' {
		declare interface Link<T> {
		source: T,
		target: T
	}

	declare interface Node {
		index?: number,
		x?: number,
		y?: number,
		px?: number,
		py?: number,
		fixed?: boolean,
		weight?: number
	}

	declare interface Event {
		type: string,
		alpha: number
	}

			
}

declare module 'hierarchy' {
		declare interface Result {
		parent?: Result,
		children?: Result[],
		value?: number,
		depth?: number
	}

			
}

declare module 'histogram' {
		declare interface Bin<T> {
		x: number,
		dx: number,
		y: number
	}

			
}

declare module 'pack' {
		declare interface Node {
		parent?: Node,
		children?: Node[],
		value?: number,
		depth?: number,
		x?: number,
		y?: number,
		r?: number
	}

	declare interface Link<T> {
		source: Node,
		target: Node
	}

			
}

declare module 'partition' {
		declare interface Link<T> {
		source: T,
		target: T
	}

	declare interface Node {
		parent?: Node,
		children?: number,
		value?: number,
		depth?: number,
		x?: number,
		y?: number,
		dx?: number,
		dy?: number
	}

			
}

declare module 'pie' {
		declare interface Arc<T> {
		value: number,
		startAngle: number,
		endAngle: number,
		padAngle: number,
		data: T
	}

			
}

declare module 'stack' {
		declare interface Value {
		x: number,
		y: number,
		y0?: number
	}

			
}

declare module 'tree' {
		declare interface Link<T> {
		source: T,
		target: T
	}

	declare interface Node {
		parent?: Node,
		children?: Node[],
		depth?: number,
		x?: number,
		y?: number
	}

			
}

declare module 'treemap' {
	declare type Padding = number | [number, number, number, number];

	declare interface Node {
		parent?: Node,
		children?: Node[],
		value?: number,
		depth?: number,
		x?: number,
		y?: number,
		dx?: number,
		dy?: number
	}

	declare interface Link<T> {
		source: T,
		target: T
	}

			
}

declare module 'geom' {
		declare interface Voronoi<T> {
		(data: T[]): Array<[number, number]>,
		x(): (vertex: T) => number,
		x(x: (vertex: T) => number): Voronoi<T>,
		y(): (vertex: T) => number,
		y(y: (vertex: T) => number): Voronoi<T>,
		clipExtent(): [[number, number], [number, number]],
		clipExtent(extent: [[number, number], [number, number]]): Voronoi<T>,
		links(data: T[]): voronoi.Link<T>[],
		triangles(data: T[]): Array<[T, T, T]>
	}

	declare interface Quadtree<T> {
		(points: T[]): quadtree.Quadtree<T>,
		x(): (datum: T, index: number) => number,
		x(x: number): Quadtree<T>,
		x(x: (datum: T, index: number) => number): Quadtree<T>,
		y(): (datum: T, index: number) => number,
		y(y: number): Quadtree<T>,
		y(y: (datum: T, index: number) => number): Quadtree<T>,
		extent(): [[number, number], [number, number]],
		extent(extent: [[number, number], [number, number]]): Quadtree<T>
	}

	declare interface Hull<T> {
		(vertices: T[]): Array<[number, number]>,
		x(): (datum: T) => number,
		x(x: (datum: T) => number): Hull<T>,
		y(): (datum: T) => number,
		y(y: (datum: T) => number): Hull<T>
	}

	declare interface Polygon {
		area(): number,
		centroid(): [number, number],
		clip(subject: Array<[number, number]>): Array<[number, number]>
	}

	declare export function voronoi(): Voronoi<[number, number]>

	declare export function voronoi<T>(): Voronoi<T>

	declare export function delaunay(
		vertices: Array<[number, number]>
	): Array<[[number, number], [number, number], [number, number]]>

	declare export function quadtree(): Quadtree<[number, number]>

	declare export function quadtree<T>(
		nodes: T[], x1?: number, y1?: number, x2?: number, y2?: number
	): quadtree.Quadtree<T>

	declare export function hull(vertices: Array<[number, number]>): Array<[number, number]>

	declare export function hull(): Hull<[number, number]>

	declare export function hull<T>(): Hull<T>

	declare export function polygon(vertices: Array<[number, number]>): Polygon

		
}

declare module 'voronoi' {
		declare interface Link<T> {
		source: T,
		target: T
	}

			
}

declare module 'quadtree' {
		declare interface Node<T> {
		nodes: [Node<T>, Node<T>, Node<T>, Node<T>],
		leaf: boolean,
		point: T,
		x: number,
		y: number
	}

	declare interface Quadtree<T> {
		add(point: T): void,
		visit(
		callback: (
		node: Node<T>, x1: number, y1: number, x2: number, y2: number
	) => boolean | void
	): void,
		find(point: [number, number]): T
	}

			
}
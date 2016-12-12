import type { Library } from 'npm$namespace$svgjs'

declare module 'svgjs' {
					
}

declare module 'npm$namespace$svgjs' {
		declare export interface LinkedHTMLElement {
		instance: Element
	}

	declare export interface Library {
		(selector: string): Doc,
		(domElement: HTMLElement): Doc,
		create(name: string): any,
		Element: ElementStatic,
		supported: boolean,
		get(id: string): Element,
		extend(parent: Object, obj: Object): void
	}

	declare export interface Doc {
		svg(data: string): any,
		pattern(w: number, h: number, add: (e: Element) => void): Element,
		defs(): Defs,
		clear(): void,
		mask(): Mask
	}

	declare export interface Filter {
		gaussianBlur(values: string): Filter,
		colorMatrix(name: string, value: number): Filter,
		colorMatrix(name: string, matrix: number[]): Filter,
		componentTransfer(
		components: {
		rgb?: FilterComponentTransfer,
		g?: FilterComponentTransfer
	}
	): Filter,
		offset(x: number, y: number): Filter,
		blend(): Filter,
		in(source: FilterSource): Filter,
		sourceAlpha: FilterSource,
		source: FilterSource
	}

	declare export interface FilterSource {
		
	}

	declare export interface FilterComponentTransfer {
		type: string,
		tableValues?: string,
		slope?: number,
		intercept: number,
		amplitude: number,
		exponent: number,
		offset: number
	}

	declare export interface Element {
		node: LinkedHTMLElement,
		nested(): Doc,
		animate(duration?: number, ease?: string, delay?: number): Animation,
		animate(info: {
		ease?: string,
		duration?: number,
		delay?: number
	}): Animation,
		attr(name: string): any,
		attr(obj: Object): Element,
		attr(name: string, value: any, namespace?: string): Element,
		viewbox(): Viewbox,
		viewbox(x: number, y: number, w: number, h: number): Element,
		viewbox(obj: Viewbox): Element,
		move(x: number, y: number, anchor?: boolean): Element,
		x(x: number, anchor?: boolean): Element,
		y(y: number, anchor?: boolean): Element,
		x(): number,
		y(): number,
		center(x: number, y: number, anchor?: boolean): Element,
		cx(x: number, anchor?: boolean): Element,
		cy(y: number, anchor?: boolean): Element,
		cx(): number,
		cy(): number,
		size(w: number, h: number, anchor?: boolean): Element,
		show(): Element,
		hide(): Element,
		visible(): boolean,
		remove(): void,
		each(iterator: (i?: number, children?: Element[]) => void, deep?: boolean): void,
		filter(adder: (filter: Filter) => void): Element,
		transform(t: Transform): Element,
		transform(): Transform,
		style(name: string, value: string): Element,
		style(obj: Object): Element,
		style(name: string): string,
		style(): string,
		bbox(): BBox,
		rbox(): RBox,
		doc(): Doc,
		data(name: string): any,
		data(name: string, value: any): Element,
		remember(name: string, value: any): Element,
		remember(obj: Object): Element,
		remember(name: string): any,
		forget(...keys: string[]): Element,
		fill(fill: {
		color?: string,
		opacity?: number
	}): Element,
		fill(color: string): Element,
		fill(pattern: Element): Element,
		stroke(data: {
		color?: string,
		opacity?: number,
		width?: number
	}): Element,
		stroke(color: string): Element,
		opacity(o: number): Element,
		rotate(d: number, cx?: number, cy?: number): Element,
		skew(x: number, y: number): Element,
		scale(x: number, y: number): Element,
		translate(x: number, y: number): Element,
		maskWith(element: Element): Element,
		masker: Element,
		unmask(): Element,
		clipWith(element: Element): Element,
		clipper: Element,
		unclip(): Element,
		front(): Element,
		back(): Element,
		forward(): Element,
		backward(): Element,
		siblings(): Element[],
		position(): number,
		next(): Element,
		previous(): Element,
		before(element: Element): Element,
		after(element: Element): Element,
		click(cb: Function): void,
		on(event: string, cb: Function): void,
		off(event: string, cb: Function): void
	}

	declare export interface Mask {
		add(element: Element): Mask
	}

	declare export interface Text {
		content: string,
		font(
		font: {
		family?: string,
		size?: number,
		anchor?: string,
		leading?: string
	}
	): Element,
		tspan(text: string): Element,
		path(data: string): Element,
		plot(data: string): Element,
		track: Element
	}

	declare export interface ElementStatic {
		new (node: any): Element
	}

	declare export interface Defs {
		
	}

	declare export interface Animation {
		stop(): Animation,
		attr(name: string, value: any, namespace?: string): Animation,
		attr(obj: Object): Animation,
		attr(name: string): any,
		viewbox(x: number, y: number, w: number, h: number): Animation,
		move(x: number, y: number, anchor?: boolean): Animation,
		x(x: number, anchor?: boolean): Animation,
		y(y: number, anchor?: boolean): Animation,
		center(x: number, y: number, anchor?: boolean): Animation,
		cx(x: number, anchor?: boolean): Animation,
		cy(y: number, anchor?: boolean): Animation,
		size(w: number, h: number, anchor?: boolean): Animation,
		during(cb: (pos: number) => void): Animation,
		to(value: number): Animation,
		after(cb: () => void): Animation
	}

	declare export interface Parent {
		put(element: Element, i?: number): Element,
		add(element: Element, i?: number): Element,
		children(): Element[],
		rect(w: number, h: number): Element,
		ellipse(w: number, h: number): Element,
		circle(diameter: number): Element,
		line(x1: number, y1: number, x2: number, y2: number): Element,
		polyline(data: string): Element,
		polyline(points: number[][]): Element,
		polygon(data: string): Element,
		polygon(points: number[][]): Element,
		path(data: string): Element,
		image(url: string, w?: number, h?: number): Element,
		text(text: string): Element,
		text(adder: (element: Element) => void): Element,
		use(element: Element): Element,
		group(): Element
	}

	declare export interface BBox {
		height: number,
		width: number,
		y: number,
		x: number,
		cx: number,
		cy: number,
		merge(bbox: BBox): BBox
	}

	declare export interface RBox {
		
	}

	declare export interface Attributes {
		(name: string, value: any): void,
		(obj: Object): void,
		(name: string): any
	}

	declare export interface Viewbox {
		x: number,
		y: number,
		width: number,
		height: number,
		zoom?: number
	}

	declare export interface Transform {
		x?: number,
		y?: number,
		rotation?: number,
		cx?: number,
		cy?: number,
		scaleX?: number,
		scaleY?: number,
		skewX?: number,
		skewY?: number,
		matrix?: string,
		a?: number,
		b?: number,
		c?: number,
		d?: number,
		e?: number,
		f?: number
	}

			
}

declare module 'svg.js' {
					declare module.exports: undefined


}
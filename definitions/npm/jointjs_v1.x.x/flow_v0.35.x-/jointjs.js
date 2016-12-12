

declare module 'jointjs' {
					
}

declare module 'dia' {
		declare interface IElementSize {
		width: number,
		height: number
	}

	declare interface IDefaults {
		type: string
	}

	declare interface IOptions {
		width?: number,
		height?: number,
		gridSize?: number,
		perpendicularLinks?: boolean,
		elementView?: ElementView,
		linkView?: LinkView
	}

		declare class Graph extends Backbone$Model {
		addCell(cell: Cell): void;
		addCells(cells: Cell[]): void;
		initialize(): void;
		fromJSON(json: any): void;
		toJSON(): Object;
		clear(): void;
		getConnectedLinks(cell: Cell, opt?: any): Link[];
		disconnectLinks(cell: Cell): void;
		removeLinks(cell: Cell): void;
		findModelsFromPoint(point: {
		x: number,
		y: number
	}): Element[]
	}

	declare class Cell extends Backbone$Model {
		toJSON(): Object;
		remove(options?: any): void;
		toFront(): void;
		toBack(): void;
		embed(cell: Cell): void;
		unembed(cell: Cell): void;
		getEmbeddedCells(): Cell[];
		clone(opt?: any): Backbone.Model;
		attr(attrs: any): Cell
	}

	declare class Element extends Cell {
		position(x: number, y: number): Element;
		position(): {
		x: number,
		y: number
	};
		translate(tx: number, ty?: number): Element;
		resize(width: number, height: number): Element;
		rotate(
		angle: number, options: {
		absolute: boolean,
		origin: {
		x: number,
		y: number
	}
	}
	): Element;
		remove(): void
	}

	declare class Link extends Cell {
		defaults(): IDefaults;
		disconnect(): Link;
		label(idx?: number, value?: any): any;
		remove(): void
	}

	declare class Paper extends Backbone$View<Backbone.Model> {
		options: IOptions;
		setDimensions(width: number, height: number): void;
		scale(sx: number, sy?: number, ox?: number, oy?: number): Paper;
		rotate(deg: number, ox?: number, oy?: number): Paper;
		findView(el: any): CellView;
		findViewByModel(modelOrId: any): CellView;
		findViewsFromPoint(p: {
		x: number,
		y: number
	}): CellView[];
		findViewsInArea(
		r: {
		x: number,
		y: number,
		width: number,
		height: number
	}
	): CellView[];
		fitToContent(opt?: any): void
	}

	declare class ElementView extends CellView {
		scale(sx: number, sy: number): void
	}

	declare class CellView extends Backbone$View<Cell> {
		getBBox(): {
		x: number,
		y: number,
		width: number,
		height: number
	};
		highlight(el?: any): void;
		unhighlight(el?: any): void;
		findMagnet(el: any): void;
		getSelector(el: any): void;
		pointerdblclick(evt: any, x: number, y: number): void;
		pointerclick(evt: any, x: number, y: number): void;
		pointerdown(evt: any, x: number, y: number): void;
		pointermove(evt: any, x: number, y: number): void;
		pointerup(evt: any, x: number, y: number): void
	}

	declare class LinkView extends CellView {
		getConnectionLength(): number;
		getPointAtLength(length: number): {
		x: number,
		y: number
	}
	}

	
}

declare module 'basic' {
				declare class Generic extends dia$Element {
		
	}

	declare class Rect extends Generic {
		
	}

	declare class Text extends Generic {
		
	}

	declare class Circle extends Generic {
		
	}

	declare class Image extends Generic {
		
	}

	
}

declare module 'util' {
			declare function uuid(): string

	declare function guid(obj: any): string

	declare function mixin(objects: any[]): any

	declare function supplement(objects: any[]): any

	declare function deepMixin(objects: any[]): any

	declare function deepSupplement(objects: any[], defaultIndicator?: any): any

		
}
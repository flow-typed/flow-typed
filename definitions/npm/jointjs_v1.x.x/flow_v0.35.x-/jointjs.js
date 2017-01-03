/**
 * Flowtype definitions for jointjs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface dia$IElementSize {
    width: number,
        height: number
}

declare class Graph mixins Backbone.Model {
    addCell(cell: dia$Cell): void;
    addCells(cells: dia$Cell[]): void;
    initialize(): void;
    fromJSON(json: any): void;
    toJSON(): Object;
    clear(): void;
    getConnectedLinks(cell: dia$Cell, opt?: any): dia$Link[];
    disconnectLinks(cell: dia$Cell): void;
    removeLinks(cell: dia$Cell): void;
    findModelsFromPoint(point: {
        x: number,
        y: number
    }): dia$Element[]
}

declare class Cell mixins Backbone.Model {
    toJSON(): Object;
    remove(options?: any): void;
    toFront(): void;
    toBack(): void;
    embed(cell: dia$Cell): void;
    unembed(cell: dia$Cell): void;
    getEmbeddedCells(): dia$Cell[];
    clone(opt?: any): Backbone.Model;
    attr(attrs: any): dia$Cell
}

declare class Element mixins Cell {
    position(x: number, y: number): dia$Element;
    position(): {
        x: number,
        y: number
    };
    translate(tx: number, ty?: number): dia$Element;
    resize(width: number, height: number): dia$Element;
    rotate(
        angle: number,
        options: {
            absolute: boolean,
            origin: {
                x: number,
                y: number
            }
        }): dia$Element;
    remove(): void
}

declare interface dia$IDefaults {
    type: string
}

declare class Link mixins Cell {
    defaults(): dia$IDefaults;
    disconnect(): dia$Link;
    label(idx?: number, value?: any): any;
    remove(): void
}

declare interface dia$IOptions {
    width?: number,
        height?: number,
        gridSize?: number,
        perpendicularLinks?: boolean,
        elementView?: dia$ElementView,
        linkView?: dia$LinkView
}

declare class Paper mixins Backbone.View<Backbone.Model>{
    options: dia$IOptions;
    setDimensions(width: number, height: number): void;
    scale(sx: number, sy?: number, ox?: number, oy?: number): dia$Paper;
    rotate(deg: number, ox?: number, oy?: number): dia$Paper;
    findView(el: any): dia$CellView;
    findViewByModel(modelOrId: any): dia$CellView;
    findViewsFromPoint(p: {
        x: number,
        y: number
    }): dia$CellView[];
    findViewsInArea(r: {
        x: number,
        y: number,
        width: number,
        height: number
    }): dia$CellView[];
    fitToContent(opt?: any): void
}

declare class ElementView mixins CellView {
    scale(sx: number, sy: number): void
}

declare class CellView mixins Backbone.View<dia$Cell>{
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

declare class LinkView mixins CellView {
    getConnectionLength(): number;
    getPointAtLength(length: number): {
        x: number,
        y: number
    }
}



declare class Generic mixins dia$Element {}

declare class Rect mixins Generic {}

declare class Text mixins Generic {}

declare class Circle mixins Generic {}

declare class Image mixins Generic {}


declare var npm$namespace$util: {
    uuid: typeof util$uuid,
    guid: typeof util$guid,
    mixin: typeof util$mixin,
    supplement: typeof util$supplement,
    deepMixin: typeof util$deepMixin,
    deepSupplement: typeof util$deepSupplement,
}
declare function util$uuid(): string

declare function util$guid(obj: any): string

declare function util$mixin(objects: any[]): any

declare function util$supplement(objects: any[]): any

declare function util$deepMixin(objects: any[]): any

declare function util$deepSupplement(objects: any[], defaultIndicator?: any): any
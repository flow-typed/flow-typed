/**
 * Flowtype definitions for d3-tip
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare
var npm$namespace$d3: {
    tip: typeof d3$tip,
}
declare type d3$TooltipDirection = ("n" |
    "s" |
    "e" |
    "w" |
    "nw" |
    "ne" |
    "sw" |
    "se");

declare interface d3$Tooltip {
    hide(): d3$Tooltip,
        show(): d3$Tooltip,
        show<Datum>(data: Datum[]): d3$Tooltip,
        show(target: SVGElement): d3$Tooltip,
        show<Datum>(data: Datum[], target: SVGElement): d3$Tooltip,
        attr(name: string): string,
        attr(name: string, value: Primitive): d3$Tooltip,
        attr<Datum>(
            name: string,
            value: (datum: Datum, index: number, outerIndex: number) => Primitive): d3$Tooltip,
        attr<Datum>(
            obj: {
                [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive)
            }): d3$Tooltip,
        style(name: string): string,
        style(name: string, value: Primitive, priority?: string): d3$Tooltip,
        style<Datum>(
            name: string,
            value: (datum: Datum, index: number, outerIndex: number) => Primitive,
            priority?: string): d3$Tooltip,
        style<Datum>(
            obj: {
                [key: string]: Primitive | ((datum: Datum, index: number, outerIndex: number) => Primitive)
            },
            priority?: string): d3$Tooltip,
        offset(): [number, number],
        offset(tuple: [number, number]): d3$Tooltip,
        offset<Datum>(
            func: (datum: Datum, index: number, outerIndex: number) => [number, number]): d3$Tooltip,
        direction(): d3$TooltipDirection,
        direction(direction: d3$TooltipDirection): d3$Tooltip,
        direction<Datum>(
            func: (datum: Datum, index: number, outerIndex: number) => d3$TooltipDirection): d3$Tooltip,
        html(): string,
        html(content: string): d3$Tooltip,
        html<Datum>(
            func: (datum: Datum, index: number, outerIndex: number) => string): d3$Tooltip,
        rootElement(): HTMLElement,
        rootElement(element: HTMLElement): d3$Tooltip,
        rootElement<Datum>(
            func: (datum: Datum, index: number, outerIndex: number) => HTMLElement): d3$Tooltip,
        destroy(): d3$Tooltip
}

declare
export function d3$tip(): d3$Tooltip
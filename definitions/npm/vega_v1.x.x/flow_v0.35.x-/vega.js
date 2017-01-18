/**
 * Flowtype definitions for vega
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface Vega$Parse {
    spec(
            url: string,
            callback: (chart: (args: Vega$ViewArgs) => Vega$View) => void): void,
        spec(
            spec: Vega$Spec,
            callback: (chart: (args: Vega$ViewArgs) => Vega$View) => void): void,
        data(dataSet: Vega$Data[], callback: () => void): void
}

declare export interface Vega$ViewArgs {
    el: any,
        data?: any,
        hover?: boolean,
        renderer?: string
}

declare export interface Vega$View {
    width(): number,
        width(w: number): Vega$View,
        height(): number,
        height(h: number): Vega$View,
        padding(): Vega$Padding,
        padding(p: Vega$Padding): Vega$View,
        viewport(): number[],
        viewport(v: number[]): Vega$View,
        renderer(r: string): Vega$View,
        data(): Runtime$DataSets,
        data(d: any): Vega$View,
        initialize(selector: string): Vega$View,
        initialize(node: Element): Vega$View,
        render(r?: any[]): Vega$View,
        update(options?: Vega$UpdateOptions): Vega$View,
        model(): Vega$Model,
        defs(): Vega$Defs,
        defs(defs: Vega$Defs): Vega$View
}

declare export interface Vega$Padding {
    top: number,
        right: number,
        bottom: number,
        left: number
}

declare export interface Vega$UpdateOptions {
    props?: string,
        items?: any,
        duration?: number,
        ease?: string
}

declare export interface Vega$Bounds {
    x1: number,
        y1: number,
        x2: number,
        y2: number,
        clear(): Vega$Bounds,
        set(x1: number, y1: number, x2: number, y2: number): Vega$Bounds,
        add(x: number, y: number): Vega$Bounds,
        expand(d: number): Vega$Bounds,
        round(): Vega$Bounds,
        translate(dx: number, dy: number): Vega$Bounds,
        rotate(angle: number, x: number, y: number): Vega$Bounds,
        union(b: Vega$Bounds): Vega$Bounds,
        encloses(b: Vega$Bounds): boolean,
        intersects(b: Vega$Bounds): boolean,
        contains(x: number, y: number): boolean,
        width(): number,
        height(): number
}

declare export interface Vega$Model {
    defs(): Vega$Defs,
        defs(defs: Vega$Defs): Vega$Model,
        data(): Runtime$DataSets,
        data(data: Runtime$DataSets): Vega$Model,
        ingest(name: string, tx: any, input: any): void,
        dependencies(name: string, tx: any): void,
        width(w: number): Vega$Model,
        height(h: number): Vega$Model,
        scene(): Vega$Node,
        scene(node: Vega$Node): Vega$Model,
        build(): Vega$Model,
        encode(trans?: any, request?: string, item?: any): Vega$Model,
        reset(): Vega$Model
}

declare export interface Runtime$DataSets {
    [name: string]: Runtime$Datum[]
}

declare export interface Runtime$Datum {
    [key: string]: any
}

declare export interface Runtime$Marks {
    type: string,
        width: number,
        height: number,
        scales: Vega$Scale[],
        axes: Vega$Axis[],
        legends: Vega$Legend[],
        marks: Vega$Mark[]
}

declare export interface Runtime$PropertySets {
    enter?: Axis$Properties,
        exit?: Axis$Properties,
        update?: Axis$Properties,
        hover?: Axis$Properties
}

declare export interface Runtime$Properties {
    (item: Vega$Node, group: Vega$Node, trans: any): void
}

declare export interface Vega$Node {
    def: Vega$Mark,
        marktype: string,
        interactive: boolean,
        items: Vega$Node[],
        bounds: Vega$Bounds,
        hasPropertySet(name: string): boolean,
        cousin(offset: number, index: number): Vega$Node,
        sibling(offset: number): Vega$Node,
        remove(): Vega$Node,
        touch(): void,
        scales?: {
            [name: string]: any
        },
        axisItems?: Vega$Node[]
}

declare export interface Vega$Defs {
    width: number,
        height: number,
        viewport?: number[],
        padding: any,
        marks: Runtime$Marks,
        data: Vega$Data[]
}

declare export interface Vega$Spec {

    /**
     * A unique name for the visualization specification.
     */
    name?: string,

        /**
         * The total width, in pixels, of the data rectangle. Default is 500 if
         * undefined.
         */
        width?: number,

        /**
         * The total height, in pixels, of the data rectangle. Default is 500 if
         * undefined.
         */
        height?: number,

        /**
         * The width and height of the on-screen viewport, in pixels. If necessary,
         * clipping and scrolling will be applied.
         */
        viewport?: number[],

        /**
         * [Number | Object | String]
         * The internal padding, in pixels, from the edge of the visualization
        canvas to the data rectangle. If an object is provided, it must include
        {top, left, right, bottom} properties. Two string values are also
        acceptable: "auto" (the default) and "strict". Auto-padding computes the
        padding dynamically based on the contents of the visualization. All
        marks, including axes and legends, are used to compute the necessary
        padding. "Strict" auto-padding attempts to adjust the padding such that
        the overall width and height of the visualization is unchanged. This mode
        can cause the visualization's width and height parameters to be adjusted
        such that the total size, including padding, remains constant. Note that
        in some cases strict padding is not possible; for example, if the axis
        labels are much larger than the data rectangle.
        */
        padding?: number | string | {
            top: number,
            left: number,
            right: number,
            bottom: number
        },

        /**
         * Definitions of data to visualize.
         */
        data: Vega$Data[],

        /**
         * Scale transform definitions.
         */
        scales?: Vega$Scale[],

        /**
         * Axis definitions.
         */
        axes?: Vega$Axis[],

        /**
         * Legend definitions.
         */
        legends?: Vega$Legend[],

        /**
         * Graphical mark definitions.
         */
        marks: (Vega$Mark | Vega$GroupMark)[]
}

declare export interface Vega$Data {

    /**
     * A unique name for the data set.
     */
    name: string,

        /**
         * An object that specifies the format for the data file, if loaded from a
         * URL.
         */
        format?: Data$Format,

        /**
         * The actual data set to use. The values property allows data to be inlined
         * directly within the specification itself.
         */
        values?: any,

        /**
         * The name of another data set to use as the source for this data set. The
         * source property is particularly useful in combination with a transform
        pipeline to derive new data.
        */
        source?: string,

        /**
         * A URL from which to load the data set. Use the format property to ensure
         * the loaded data is correctly parsed. If the format property is not specified,
        the data is assumed to be in a row-oriented JSON format.
        */
        url?: string,

        /**
         * An array of transforms to perform on the data. Transform operators will be
         * run on the default data, as provided by late-binding or as specified by the
           source, values, or url properties.
        */
        transform?: Data$Transform[]
}

declare export interface Data$FormatBase {

    /**
     * The currently supported format types are json (JavaScript Object
     * Notation), csv (comma-separated values), tsv (tab-separated values),
    topojson, and treejson.
    */
    type: string
}


/**
 * The JSON property containing the desired data.
 * This parameter can be used when the loaded JSON file may have surrounding structure or meta-data.
For example "property": "values.features" is equivalent to retrieving json.values.features from the
loaded JSON object.
*/
declare export type Data$JsonFormat = {
    type: string,
    property?: string
} & Data$FormatBase


declare export type Data$CsvOrTsvFormat = {
    type: string,
    parse?: {
        [propertyName: string]: string
    }
} & Data$FormatBase


declare export type Data$TopoJsonFormat = {
    type: string,
    feature?: string,
    mesh?: string
} & Data$FormatBase


declare export type Data$TreeJson = {
    type: string,
    children?: string,
    parse?: {
        [propertyName: string]: string
    }
} & Data$FormatBase


declare export type Data$Format = Data$JsonFormat | Data$CsvOrTsvFormat | Data$TopoJsonFormat | Data$TreeJson;

declare export interface Data$Transform {}

declare export interface Vega$Scale {
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

        /**
         * boolean for quantitative scales, string for time scales 
         */
        nice?: boolean | string,
        exponent?: number,
        zero?: boolean
}

declare export interface Vega$Axis {
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
        properties?: Axis$Properties
}

declare export interface Axis$Properties {
    (item: Vega$Node, group: Vega$Node, trans: any): void
}

declare export interface Vega$Legend {}

declare module 'Mark' {
    declare export interface From {
        data?: string,
            mark?: string,
            transform?: Data$Transform[]
    }
}


declare export type Vega$GroupMark = {
    type: string,

    /**
     * Scale transform definitions.
     */
    scales?: Vega$Scale[],

    /**
     * Axis definitions.
     */
    axes?: Vega$Axis[],

    /**
     * Legend definitions.
     */
    legends?: Vega$Legend[],

    /**
     * Groups differ from other mark types in their ability to contain children marks.
     * Marks defined within a group mark can inherit data from their parent group.
    For inheritance to work each data element for a group must contain data elements of its own.
    This arrangement of nested data is typically achieved by facetting the data, such that each group-level data element includes its own array of sub-elements
    */
    marks?: (Vega$Mark | Vega$GroupMark)[]
} & Vega$Mark


declare export interface Vega$PropertySets {
    enter?: Axis$Properties,
        exit?: Axis$Properties,
        update?: Axis$Properties,
        hover?: Axis$Properties
}

declare export interface Vega$PropertySet {
    x?: Vega$ValueRef,
        x2?: Vega$ValueRef,
        width?: Vega$ValueRef,
        y?: Vega$ValueRef,
        y2?: Vega$ValueRef,
        height?: Vega$ValueRef,
        opacity?: Vega$ValueRef,
        fill?: Vega$ValueRef,
        fillOpacity?: Vega$ValueRef,
        stroke?: Vega$ValueRef,
        strokeWidth?: Vega$ValueRef,
        strokeOpacity?: Vega$ValueRef,
        strokeDash?: Vega$ValueRef,
        strokeDashOffset?: Vega$ValueRef,
        size?: Vega$ValueRef,
        shape?: Vega$ValueRef,
        path?: Vega$ValueRef,
        innerRadius?: Vega$ValueRef,
        outerRadius?: Vega$ValueRef,
        startAngle?: Vega$ValueRef,
        endAngle?: Vega$ValueRef,
        interpolate?: Vega$ValueRef,
        tension?: Vega$ValueRef,
        align?: Vega$ValueRef,
        baseline?: Vega$ValueRef,
        url?: Vega$ValueRef,
        text?: Vega$ValueRef,
        dx?: Vega$ValueRef,
        dy?: Vega$ValueRef,
        angle?: Vega$ValueRef,
        font?: Vega$ValueRef,
        fontSize?: Vega$ValueRef,
        fontWeight?: Vega$ValueRef,
        fontStyle?: Vega$ValueRef
}

declare export interface Vega$ValueRef {
    value?: any,
        field?: any,
        group?: any,
        scale?: any,
        mult?: number,
        offset?: number,
        band?: boolean
}
declare export var parse: Vega$Parse;


declare var npm$namespace$scene: {
    item: typeof scene$item,
}
declare export function scene$item(mark: Vega$Node): Vega$Node

declare export class Bounds mixins Vega$Bounds {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    clear(): vg$Bounds;
    set(x1: number, y1: number, x2: number, y2: number): vg$Bounds;
    add(x: number, y: number): vg$Bounds;
    expand(d: number): vg$Bounds;
    round(): vg$Bounds;
    translate(dx: number, dy: number): vg$Bounds;
    rotate(angle: number, x: number, y: number): vg$Bounds;
    union(b: vg$Bounds): vg$Bounds;
    encloses(b: vg$Bounds): boolean;
    intersects(b: vg$Bounds): boolean;
    contains(x: number, y: number): boolean;
    width(): number;
    height(): number
}
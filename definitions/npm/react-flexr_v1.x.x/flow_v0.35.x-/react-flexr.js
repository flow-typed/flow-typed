/**
 * Flowtype definitions for react-flexr
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type ___ReactFlexr$GridProps = {

    /**
     * Vertical Align Sub Cells: top, center, bottom
     */
    align?: "top" | "center" | "bottom",

    /**
     * Horizontal Align Sub Cells: left, center, right
     */
    hAlign?: "left" | "center" | "right",

    /**
     * Override default gutter: '1em', '5%', '10px', etc.
     * Propagates downwards. Cells inside this Grid component
    will use the same gutter.
    */
    gutter?: string,

    /**
     * All sub cells will be full height.
     */
    flexCells?: boolean
}

declare
export class Grid mixins React.Component<___ReactFlexr$GridProps, {}>{}

declare type ___ReactFlexr$CellProps = {

    /**
     * Vertical Align This Cell: top, center, bottom
     */
    align?: "top" | "center" | "bottom",

    /**
     * Override default gutter: '1em', '5%', '10px', etc.
     */
    gutter?: string,

    /**
     * Cell will be full height.
     */
    flex?: boolean,

    /**
     * Takes a fraction. e.g. 1/6
     */
    size?: string | number,

    /**
     * Like size, but only for palm devices.
     * Accepts 'hidden' as well.
     */
    palm?: string | number,

    /**
     * Like size, but only for lap devices.
     * Accepts 'hidden' as well.
     */
    lap?: string | number,

    /**
     * Like size, but only for ( palm + lap ) devices.
     * Accepts 'hidden' as well.
     */
    portable?: string | number,

    /**
     * Like size, but only for desk devices.
     * Accepts 'hidden' as well.
     */
    desk?: string | number
}

declare
export class Cell mixins React.Component<___ReactFlexr$CellProps, {}>{}


/**
 * Simple resize event throttler. Usefull for force updating when the
 * app have been resized. For best performance, use it in your main
app component in the componentDidMount life cycle.
*/
declare interface ___ReactFlexr$OptimizedResize {
    init: (callback: () => void) => void
}

declare
export var optimizedResize: ___ReactFlexr$OptimizedResize;

declare
export type ___ReactFlexr$ErgonomicType = "palm" | "lap" | "portable" | "desk";

declare
export var findMatch: (...arguments: ___ReactFlexr$ErgonomicType[]) => boolean;

declare
export var setBreakpoints: (breakpoints: ___ReactFlexr$ErgonomicType[]) => void;

declare
export var findBreakpoints: () => ___ReactFlexr$ErgonomicType[] | boolean;

declare
export var getCurrentBreakpoints: () => ___ReactFlexr$ErgonomicType[];

declare
export var palm: string;

declare
export var lap: string;

declare
export var portable: string;

declare
export var desk: string;
declare module 'react-flexr' {
    declare module.exports: typeof ___ReactFlexr
}
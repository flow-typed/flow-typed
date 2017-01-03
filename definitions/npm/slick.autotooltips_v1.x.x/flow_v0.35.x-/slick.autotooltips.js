/**
 * Flowtype definitions for slick.autotooltips
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export type Slick$SlickGridAutoTooltipsOption = {

    /**
     * Enable tooltip for grid cells
     * @default  true
     */
    enableForCells?: boolean,

    /**
     * Enable tooltip for header cells
     * @default  false
     */
    enableForHeaderCells?: boolean,

    /**
     * The maximum length for a tooltip
     * @default  null
     */
    maxToolTipLength?: number
} & PluginOptions



/**
 * AutoTooltips plugin to show/hide tooltips when columns are too narrow to fit content.
 */
declare export class AutoTooltips mixins Plugin<Slick$SlickData>{
    constructor(option?: Slick$SlickGridAutoTooltipsOption): this
}
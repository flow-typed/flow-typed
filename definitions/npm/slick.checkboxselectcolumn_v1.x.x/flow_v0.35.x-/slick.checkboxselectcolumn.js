// @flow
/**
 * Flowtype definitions for slick.checkboxselectcolumn
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export type Slick$SlickGridCheckBoxSelectColumnOptions = {

    /**
     * Column to add the checkbox to
     * @default  "_checkbox_selector"
     */
    columnId?: string,

    /**
     * CSS class to be added to cells in this column
     * @default  null
     */
    cssClass?: string,

    /**
     * Tooltip text to display for this column
     * @default  "Select/Deselect All"
     */
    toolTip?: string,

    /**
     * Width of the column
     * @default  30
     */
    width?: number
} & PluginOptions


declare export class CheckboxSelectColumn<T>mixins Plugin<T>{
    constructor(options?: Slick$SlickGridCheckBoxSelectColumnOptions): this;
    init(grid: Slick$Grid<T>): void;
    destroy(): void;
    getColumnDefinition(): Slick$ColumnMetadata<T >
}
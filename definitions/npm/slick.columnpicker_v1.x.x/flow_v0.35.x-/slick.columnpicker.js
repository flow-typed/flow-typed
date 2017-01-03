// @flow
/**
 * Flowtype definitions for slick.columnpicker
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface Controls$SlickColumnPickerOptions {
    fadeSpeed?: number
}

declare export class ColumnPicker<T>{
    constructor(columns: Slick$Column<T>[], grid: Slick$Grid<T>, options: Controls$SlickColumnPickerOptions): this;
    getAllColumns(): Slick$Column<T>[];
    destroy(): void
}
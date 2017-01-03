// @flow
/**
 * Flowtype definitions for jqrangeslider
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JQRangeSliderNumericRange {
    min?: number,
        max?: number
}
declare interface JQRangeSliderDateRange {
    min?: Date,
        max?: Date
}
declare interface JQRangeSliderRangeLength {
    min?: any,
        max?: any
}
declare interface JQRangeSliderDateSteps {
    years?: number,
        months?: number,
        weeks?: number,
        days?: number,
        hours?: number,
        minutes?: number,
        seconds?: number
}
declare interface jQRangeSliderScale {
    first?: (min: number, max: number) => number,
        next: (value: any) => any,
        label?: (value: any, nextValue: any) => string,
        stop?: (value: any) => boolean,
        format?: (tickContainer: any, tickStartValue: any, tickEndValue: any) => void
}
declare interface JQRangeSliderOptions {
    wheelMode?: string,
        wheelSpeed?: number,
        arrows?: boolean,
        valueLabels?: string,
        durationIn?: number,
        durationOut?: number,
        delayOut?: number,
        range?: JQRangeSliderRangeLength,
        symmetricPositionning?: boolean,
        enabled?: boolean,
        scales?: jQRangeSliderScale[]
}
declare type JQNumericRangeSliderOptions = {
    bounds?: JQRangeSliderNumericRange,
    defaultValues?: JQRangeSliderNumericRange,
    formatter?: (integer: << UNKNOWN PARAM FORMAT >> ) => string,
    step?: number
} & JQRangeSliderOptions
declare type JQEditRangeSliderOptions = {
    type?: string
} & JQNumericRangeSliderOptions
declare type JQDateRangeSliderOptions = {
    bounds?: JQRangeSliderDateRange,
    defaultValues?: JQRangeSliderDateRange,
    formatter?: (Date: << UNKNOWN PARAM FORMAT >> ) => string,
    step?: JQRangeSliderDateSteps
} & JQRangeSliderOptions
declare interface JQuery {
    rangeSlider(method: string): any,
        rangeSlider(method: string, value: number): JQuery,
        rangeSlider(method: string, min: number, max: number): JQuery,
        rangeSlider(options?: JQNumericRangeSliderOptions): JQuery,
        editRangeSlider(method: string): any,
        editRangeSlider(method: string, value: number): JQuery,
        editRangeSlider(method: string, min: number, max: number): JQuery,
        editRangeSlider(options?: JQEditRangeSliderOptions): JQuery,
        dateRangeSlider(method: string): any,
        dateRangeSlider(method: string, value: Date): JQuery,
        dateRangeSlider(method: string, min: Date, max: Date): JQuery,
        dateRangeSlider(options?: JQDateRangeSliderOptions): JQuery
}
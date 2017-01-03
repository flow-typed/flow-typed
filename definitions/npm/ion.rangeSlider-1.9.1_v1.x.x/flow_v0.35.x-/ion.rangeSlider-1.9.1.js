// @flow
/**
 * Flowtype definitions for ion.rangeSlider-1.9.1
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface JQuery {
    ionRangeSlider(): JQuery,
        ionRangeSlider(options: IonRangeSliderOptions): JQuery,
        ionRangeSlider(method: string): JQuery,
        ionRangeSlider(method: string, options: IonRangeSliderOptions): JQuery
}
declare interface IonRangeSliderOptions {
    disable?: boolean,
        from?: number,
        hasGrid?: boolean,
        hideFromTo?: boolean,
        hideMinMax?: boolean,
        max?: number,
        maxPostfix?: string,
        min?: number,
        onChange?: (obj: IonRangeSliderEvent) => void,
        onFinish?: (obj: IonRangeSliderEvent) => void,
        onLoad?: (obj: IonRangeSliderEvent) => void,
        postfix?: string,
        prefix?: string,
        prettify?: boolean,
        step?: number,
        to?: number,
        type?: string,
        values?: any[]
}
declare interface IonRangeSliderEvent {
    fromNumber: number,
        fromPers: number,
        fromValue?: any,
        fromX: number,
        fromX_pure?: number,
        input: JQuery,
        max: number,
        min: number,
        slider: JQuery,
        toNumber: number,
        toPers: number,
        toValue?: number,
        toX: number,
        toX_pure?: number
}
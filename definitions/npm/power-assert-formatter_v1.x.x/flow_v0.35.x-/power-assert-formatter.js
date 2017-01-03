// @flow
/**
 * Flowtype definitions for power-assert-formatter
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare function powerAssertFormatter(options?: powerAssertFormatter$Options): powerAssertFormatter$Formatter
declare var npm$namespace$powerAssertFormatter: {
    defaultOptions: typeof powerAssertFormatter$defaultOptions,
}
declare export interface powerAssertFormatter$Options {
    lineDiffThreshold?: number,
        maxDepth?: number,
        outputOffset?: number,
        anonymous?: string,
        circular?: string,
        lineSeparator?: string,
        ambiguousEastAsianCharWidth?: number,
        widthOf?: Function,
        stringify?: Function,
        diff?: Function,
        writerClass?: {
            new(): any
        },
        renderers?: any[]
}

declare export interface powerAssertFormatter$Formatter {
    (powerAssertContext: any): string
}

declare export function powerAssertFormatter$defaultOptions(): powerAssertFormatter$Options
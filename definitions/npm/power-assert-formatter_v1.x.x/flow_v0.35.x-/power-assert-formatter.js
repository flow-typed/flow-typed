

declare module 'power-assert-formatter' {
			declare function powerAssertFormatter(options?: powerAssertFormatter.Options): powerAssertFormatter.Formatter

		
}

declare module 'npm$namespace$powerAssertFormatter' {
		declare export interface Options {
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
		new (): any
	},
		renderers?: any[]
	}

	declare export interface Formatter {
		(powerAssertContext: any): string
	}

	declare export function defaultOptions(): Options

		
}
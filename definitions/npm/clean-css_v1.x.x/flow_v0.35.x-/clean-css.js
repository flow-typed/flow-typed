

declare module 'clean-css' {
				declare class CleanCSS  {
		constructor(options?: CleanCSS.Options): this;
		minify(
		sources: string | Array<string> | Object, callback?: (error: any, minified: CleanCSS.Output) => void
	): CleanCSS.Output
	}

	declare module.exports: undefined


}

declare module 'CleanCSS' {
		declare interface Options {
		advanced?: boolean,
		aggressiveMerging?: boolean,
		benchmark?: boolean,
		compatibility?: Object,
		debug?: boolean,
		inliner?: Object,
		keepBreaks?: boolean,
		keepSpecialComments?: string | number,
		mediaMerging?: boolean,
		processImport?: boolean,
		processImportFrom?: Array<string>,
		rebase?: boolean,
		relativeTo?: string,
		restructuring?: boolean,
		root?: string,
		roundingPrecision?: number,
		semanticMerging?: boolean,
		shorthandCompacting?: boolean,
		sourceMap?: boolean | string,
		sourceMapInlineSources?: boolean,
		target?: string
	}

	declare interface Output {
		styles: string,
		sourceMap: string,
		errors: Array<string>,
		warnings: Array<string>,
		stats: {
		originalSize: number,
		minifiedSize: number,
		timeSpent: number,
		efficiency: number
	}
	}

			
}
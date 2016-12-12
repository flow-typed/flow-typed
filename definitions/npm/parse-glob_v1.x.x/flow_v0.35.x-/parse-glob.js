

declare module 'parse-glob' {
		declare interface ParseGlob {
		(glob: string): parseGlob.Result
	}

			declare module.exports: ParseGlob


}

declare module 'parseGlob' {
		declare interface Result {
		orig: string,
		is: {
		glob: boolean,
		negated: boolean,
		extglob: boolean,
		braces: boolean,
		brackets: boolean,
		globstar: boolean,
		dotfile: boolean,
		dotdir: boolean
	},
		glob: string,
		base: string,
		path: {
		dirname: string,
		basename: string,
		filename: string,
		extname: string,
		ext: string
	}
	}

			
}
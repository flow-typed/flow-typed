

declare module 'uglifycss' {
					declare module.exports: undefined


}

declare module 'UglifyCSS' {
		declare interface UglifyCSSOptions {
		maxLineLen?: number,
		expandVars?: boolean,
		uglyComments?: boolean,
		cuteComments?: boolean
	}

	declare function processString(content: string, options?: UglifyCSSOptions): string

	declare function processFiles(filenames: Array<string>, options?: UglifyCSSOptions): string

		
}
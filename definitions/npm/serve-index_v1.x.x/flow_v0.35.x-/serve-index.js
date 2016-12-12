

declare module 'serve-index' {
			declare function serveIndex(path: string, options?: serveIndex.Options): express.Handler

		declare module.exports: undefined


}

declare module 'serveIndex' {
	declare type templateCallback = (error: Error, htmlString?: string) => void;

	declare interface File {
		name: string,
		stat: fs.Stats
	}

	declare interface Locals {
		directory: string,
		displayIcons: boolean,
		fileList: Array<File>,
		name: string,
		stat: fs.Stats,
		path: string,
		style: string,
		viewName: string
	}

	declare interface Options {
		filter?: (filename: string, index: number, files: Array<File>, dir: string) => boolean,
		hidden?: boolean,
		icons?: boolean,
		stylesheet?: string,
		template?: string | ((locals: Locals, callback: templateCallback) => void),
		view?: string
	}

			
}
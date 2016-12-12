

declare module 'gulp-html-replace' {
		declare interface AdvancedTask {
		src: string | string[],
		tpl: string
	}

	declare interface Tasks {
		[taskId: string]: string | string[] | AdvancedTask
	}

	declare interface Options {
		keepUnassigned?: boolean,
		keepBlockTags?: boolean,
		resolvePaths?: boolean
	}

	declare interface HtmlReplace {
		(tasks: Tasks, options?: Options): NodeJS.ReadWriteStream
	}

			declare module.exports: HtmlReplace


}


declare module 'gulp-less' {
		declare interface IOptions {
		modifyVars?: {
		
	},
		paths?: string[],
		plugins?: any[],
		relativeUrls?: boolean
	}

	declare function less(options?: IOptions): NodeJS.ReadWriteStream

		declare module.exports: undefined


}
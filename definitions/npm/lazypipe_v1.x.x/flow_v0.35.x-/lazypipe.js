

declare module 'lazypipe' {
		declare interface IPipelineBuilder {
		(): NodeJS.ReadWriteStream,
		pipe(fn: Function, ...args: any[]): IPipelineBuilder
	}

	declare function lazypipe(): IPipelineBuilder

		declare module.exports: undefined


}


declare module 'gulp-coffeelint' {
					declare module.exports: Coffeelint


}

declare module 'coffeelint' {
		declare interface Coffeelint {
		(optFile?: string, opt?: any, literate?: boolean, rules?: Function[]): NodeJS.ReadWriteStream,
		reporter(reporter?: string | Function): NodeJS.ReadWriteStream
	}

			
}
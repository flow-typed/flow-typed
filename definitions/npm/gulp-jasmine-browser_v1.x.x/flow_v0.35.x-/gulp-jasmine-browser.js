

declare module 'gulp-jasmine-browser' {
		declare interface IJasmineBrowser {
		specRunner(options?: any): NodeJS.ReadWriteStream,
		server(options?: any): NodeJS.ReadWriteStream,
		headless(options?: any): NodeJS.ReadWriteStream
	}

			declare module.exports: IJasmineBrowser


}
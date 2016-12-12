

declare module 'rcloader' {
		declare interface Options {
		[property: string]: any,
		lookup?: boolean
	}

		declare class RcLoader  {
		constructor(configfilename: string, options: string | Options): this;
		for(path: string, callback?: (error: any, fileOpts: any) => void): void
	}

	declare module.exports: undefined


}
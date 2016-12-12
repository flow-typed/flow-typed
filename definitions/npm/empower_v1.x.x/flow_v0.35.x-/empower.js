

declare module 'empower' {
			declare function empower(originalAssert: any, formatter: any, options?: empower.Options): any

		declare module.exports: undefined


}

declare module 'npm$namespace$empower' {
		declare export interface Options {
		destructive?: boolean,
		modifyMessageOnRethrow?: boolean,
		saveContextOnRethrow?: boolean,
		patterns?: string[]
	}

			
}
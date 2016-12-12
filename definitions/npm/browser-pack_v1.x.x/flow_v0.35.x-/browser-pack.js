

declare module 'browser-pack' {
			declare function browserPack(opts?: BrowserPack.Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}

declare module 'BrowserPack' {
		declare export interface Options {
		hasExports?: boolean,
		externalRequireName?: string,
		prelude?: string,
		preludePath?: string,
		basedir?: string,
		raw?: boolean,
		standalone?: string,
		standaloneModule?: string,
		sourceMapPrefix?: string
	}

			
}
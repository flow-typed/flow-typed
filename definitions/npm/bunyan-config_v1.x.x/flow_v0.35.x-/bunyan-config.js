

declare module 'bunyan-config' {
		declare interface Configuration {
		name: string,
		streams?: bunyan.Stream[],
		level?: string | number,
		stream?: NodeJS.WritableStream,
		serializers?: {
		
	},
		src?: boolean
	}

	declare function bunyanConfig(jsonConfig?: Configuration): bunyan.LoggerOptions

		declare module.exports: undefined


}
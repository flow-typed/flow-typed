

declare module 'envify' {
					declare module.exports: undefined


}

declare module 'envify/custom' {
			declare function envify(
		environment: {
		[name: string]: any
	}
	): (
		file: string, environment: {
		[name: string]: any
	}
	) => NodeJS.ReadWriteStream

		declare module.exports: undefined


}
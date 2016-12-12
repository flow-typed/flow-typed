

declare module 'tv4-1.2.4' {
		declare interface TV4ErrorCodes {
		[key: string]: number
	}

	declare interface TV4Error {
		code: number,
		message: string,
		dataPath: string,
		schemaPath: string
	}

	declare interface TV4SchemaMap {
		[uri: string]: any
	}

	declare interface TV4BaseResult {
		missing: string[],
		valid: boolean
	}

	declare interface TV4SingleResult {
		error: TV4Error
	}

	declare interface TV4MultiResult {
		errors: TV4Error[]
	}

	declare interface TV4 {
		validateResult(data: any, schema: any): TV4SingleResult,
		validateMultiple(data: any, schema: any): TV4MultiResult,
		addSchema(uri: string, schema: any): boolean,
		getSchema(uri: string): any,
		normSchema(schema: any, baseUri: string): any,
		resolveUrl(base: string, href: string): string,
		freshApi(): TV4,
		dropSchemas(): void,
		reset(): void,
		getMissingUris(exp?: RegExp): string[],
		getSchemaUris(exp?: RegExp): string[],
		getSchemaMap(): TV4SchemaMap,
		errorCodes: TV4ErrorCodes
	}

			
}

declare module 'tv4' {
					declare module.exports: TV4


}
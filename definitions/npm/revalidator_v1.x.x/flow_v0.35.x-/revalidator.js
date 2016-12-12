

declare module 'revalidator' {
					declare module.exports: RevalidatorStatic


}

declare module 'Revalidator' {
	declare type Types = "string" | "number" | "integer" | "array" | "boolean" | "object" | "null" | "any";

	declare type Formats = "url" | "email" | "ip-address" | "ipv6" | "date-time" | "date" | "time" | "color" | "host-name" | "utc-millisec" | "regex";

	declare interface IOptions {
		validateFormats?: boolean,
		validateFormatsStrict?: boolean,
		validateFormatExtensions?: boolean,
		additionalProperties?: boolean,
		cast?: boolean
	}

	declare interface RevalidatorStatic {
		validate<T>(object: T, schema: JSONSchema<T>, options?: IOptions): IReturnMessage
	}

	declare interface IErrrorProperty {
		property: string,
		message: string
	}

	declare interface IReturnMessage {
		valid: boolean,
		errors: IErrrorProperty[]
	}

	declare interface JSONSchema<T> {
		properties?: ISchemas<T>
	}

	declare interface ISchemas<T> {
		[index: string]: ISchema<T> | JSONSchema<T>
	}

	declare interface ISchema<T> {
		type: Types | Types[],
		required?: boolean,
		pattern?: RegExp | string,
		maxLength?: number,
		description?: string,
		minLength?: number,
		minimum?: number,
		maximum?: number,
		allowEmpty?: boolean,
		exclusiveMinimum?: number,
		exclusiveMaximum?: number,
		divisibleBy?: number,
		minItems?: number,
		maxItems?: number,
		uniqueItems?: boolean,
		enum?: any[],
		message?: string,
		messages?: {
		[index: string]: string
	},
		default?: any,
		format?: Formats,
		conform?: (value: any, data?: T) => boolean,
		dependencies?: string
	}

			
}
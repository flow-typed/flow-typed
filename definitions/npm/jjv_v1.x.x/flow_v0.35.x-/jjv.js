

declare module 'jjv' {
		declare interface Errors {
		validation: {
		[property: string]: {
		required?: boolean,
		type?: string
	}
	}
	}

	declare interface Options {
		checkRequired?: boolean,
		useDefault?: boolean,
		useCoerce?: boolean,
		removeAdditional?: boolean
	}

	declare interface Env {
		defaultOptions: Options,
		addSchema(name: string, schema: Object): void,
		addType(name: string, parse: (input: any) => any): void,
		addFormat(name: string, parse: (input: any) => any): void,
		addCheck(name: string, check: (input: any, comparator: any) => any): void,
		addTypeCoercion(name: string, coerce: (input: any) => any): void,
		validate(name: string, object: any, options?: Options): Errors,
		validate(schema: Object, object: any, options?: Options): Errors
	}

	declare function jjv(): jjv.Env

		declare module.exports: undefined


}
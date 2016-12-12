

declare module 'ajv' {
				declare class Ajv  {
		constructor(options?: Ajv.AjvOptions): this;
		compile(schema: any): Ajv.AjvValidate;
		compileAsync(schema: any, callback: (error: Error, validate: Ajv.AjvValidate) => void): void;
		validate(schema: any, data: any): boolean | PromiseLike<boolean>;
		errors: Ajv.ValidationError[];
		addSchema(schema: any, key: string): void;
		addMetaSchema(schema: any, key: string): void;
		validateSchema(schema: any): Boolean;
		getSchema(key: string): Ajv.AjvValidate;
		removeSchema(schema: any): void;
		addFormat(name: string, format: any): void;
		addKeyword(keyword: string, definition: Ajv.AjxKeywordDefinition): void;
		errorsText(): any;
		ValidationError: Function
	}

	declare module.exports: undefined


}

declare module 'Ajv' {
	declare type AjvOptions = {
		v5?: boolean,
		allErrors?: boolean,
		verbose?: boolean,
		jsonPointers?: boolean,
		uniqueItems?: boolean,
		unicode?: boolean,
		format?: string,
		formats?: any,
		schemas?: any,
		missingRefs?: boolean,
		loadSchema(uri: string, callback: (error: Error, body: any) => void): void,
		removeAdditional?: boolean,
		useDefaults?: boolean,
		coerceTypes?: boolean,
		async?: any,
		transpile?: string,
		meta?: boolean,
		validateSchema?: boolean,
		addUsedSchema?: boolean,
		inlineRefs?: boolean,
		passContext?: boolean,
		loopRequired?: number,
		ownProperties?: boolean,
		multipleOfPrecision?: boolean | number,
		errorDataPath?: string,
		messages?: boolean,
		beautify?: boolean,
		cache?: any
	};

	declare type AjvValidate = ((data: any) => boolean | PromiseLike<boolean>) & {
		errors: ValidationError[]
	};

	declare type AjxKeywordDefinition = {
		async?: boolean,
		type: string,
		compile?: (
		schema: any, parentsSchema: any
	) => ((data: any) => boolean | PromiseLike<boolean>),
		validate?: (schema: any, data: any) => boolean
	};

	declare type ValidationError = {
		keyword: string,
		dataPath: string,
		schemaPath: string,
		params: any,
		message: string,
		schema: any,
		parentSchema: any,
		data: any
	};

				
}
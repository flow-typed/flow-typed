import type { TV4 } from 'npm$namespace$tv4'

declare module 'tv4' {
					declare module.exports: TV4


}

declare module 'npm$namespace$tv4' {
	declare export type SchemaMap = {
		[uri: string]: JsonSchema
	};

	declare export type ErrorMap = {
		[errorCode: string]: string
	};

	declare export type FormatValidationFunction = (data: any, schema: JsonSchema) => string;

	declare export type KeywordValidationFunction = (
		data: any, value: any, schema: JsonSchema, dataPointerPath: string
	) => string | ValidationError;

	declare export type AsyncValidationCallback = (isValid: boolean, error: ValidationError) => void;

	declare export interface JsonSchema {
		[key: string]: any,
		title?: string,
		description?: string,
		id?: string,
		$schema?: string,
		type?: string,
		items?: any,
		properties?: any,
		patternProperties?: any,
		additionalProperties?: boolean,
		required?: string[],
		definitions?: any,
		default?: any
	}

	declare export interface ErrorCodes {
		[key: string]: number
	}

	declare export interface ValidationError {
		code: number,
		message: any,
		dataPath?: string,
		schemaPath?: string,
		subErrors?: ValidationError[]
	}

	declare export interface ErrorVar {
		params: any,
		subErrors: any,
		stack: string
	}

	declare export interface BaseResult {
		missing: string[],
		valid: boolean
	}

	declare export interface SingleResult {
		error: ValidationError
	}

	declare export interface MultiResult {
		errors: ValidationError[]
	}

	declare export interface TV4 {
		error: ErrorVar,
		missing: string[],
		validate(data: any, schema: JsonSchema, checkRecursive?: boolean): boolean,
		validate(
		data: any, schema: JsonSchema, checkRecursive: boolean, banUnknownProperties: boolean
	): boolean,
		validateResult(data: any, schema: JsonSchema, checkRecursive?: boolean): SingleResult,
		validateResult(
		data: any, schema: JsonSchema, checkRecursive: boolean, banUnknownProperties: boolean
	): SingleResult,
		validateMultiple(data: any, schema: JsonSchema, checkRecursive?: boolean): MultiResult,
		validateMultiple(
		data: any, schema: JsonSchema, checkRecursive: boolean, banUnknownProperties: boolean
	): MultiResult,
		validate(
		data: any, schema: JsonSchema, callback: AsyncValidationCallback, checkRecursive?: boolean
	): void,
		validate(
		data: any, schema: JsonSchema, callback: AsyncValidationCallback, checkRecursive: boolean, banUnknownProperties: boolean
	): void,
		addSchema(schema: JsonSchema): void,
		addSchema(uri: string, schema: JsonSchema): void,
		getSchema(uri: string): JsonSchema,
		getSchemaMap(): SchemaMap,
		getSchemaUris(filter?: RegExp): string[],
		getMissingUris(filter?: RegExp): string[],
		dropSchemas(): void,
		freshApi(): TV4,
		reset(): void,
		setErrorReporter(lang: string): void,
		setErrorReporter(
		reporter: (error: ValidationError, data: any, schema: JsonSchema) => string
	): void,
		language(code: string): void,
		addLanguage(code: string, map: ErrorMap): void,
		addFormat(format: string, validationFunction: FormatValidationFunction): void,
		addFormat(formats: {
		[formatName: string]: FormatValidationFunction
	}): void,
		defineKeyword(keyword: string, validationFunction: KeywordValidationFunction): void,
		defineError(codeName: string, codeNumber: number, defaultMessage: string): void,
		normSchema(schema: JsonSchema, baseUri: string): any,
		resolveUrl(base: string, href: string): string,
		errorCodes: ErrorCodes
	}

			
}
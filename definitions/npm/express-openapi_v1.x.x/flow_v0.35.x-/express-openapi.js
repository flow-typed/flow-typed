

declare module 'express-openapi' {
	declare export type Operation = OperationFunction | OperationHandlerArray;

	declare export interface InitializedApi {
		apiDoc: OpenApi.ApiDefinition
	}

	declare export interface Args {
		apiDoc: OpenApi.ApiDefinition,
		app: express.Application,
		routes: string,
		docPath: string,
		errorTransformer(openapiError: OpenapiError, jsonschemaError: JsonschemaError): any,
		exposeApiDocs: boolean,
		validateApiDoc: boolean,
		customFormats: CustomFormats
	}

	declare export interface OperationFunction {
		apiDoc?: OpenApi.OperationObject
	}

	declare export interface OperationHandlerArray {
		apiDoc?: OpenApi.OperationObject,
		[index: number]: express.RequestHandler
	}

	declare export interface PathModule {
		parameters?: OpenApi.Parameters,
		get?: Operation,
		put?: Operation,
		post?: Operation,
		delete?: Operation,
		patch?: Operation,
		options?: Operation,
		head?: Operation
	}

	declare export interface OpenapiError {
		errorCode: string,
		location: string,
		message: string,
		path: string
	}

	declare export interface CustomFormats {
		[index: string]: CustomFormatValidator
	}

	declare interface JsonschemaError {
		property: string,
		message: string,
		schema: string | IJsonSchema,
		instance: any,
		name: string,
		argument: any,
		stack: string,
		toString(): string
	}

	declare interface CustomFormatValidator {
		(input: any): boolean
	}

	declare interface IJsonSchema {
		id?: string,
		$schema?: string,
		title?: string,
		description?: string,
		multipleOf?: number,
		maximum?: number,
		exclusiveMaximum?: boolean,
		minimum?: number,
		exclusiveMinimum?: boolean,
		maxLength?: number,
		minLength?: number,
		pattern?: string,
		additionalItems?: boolean | IJsonSchema,
		items?: IJsonSchema | IJsonSchema[],
		maxItems?: number,
		minItems?: number,
		uniqueItems?: boolean,
		maxProperties?: number,
		minProperties?: number,
		required?: string[],
		additionalProperties?: boolean | IJsonSchema,
		definitions?: {
		[name: string]: IJsonSchema
	},
		properties?: {
		[name: string]: IJsonSchema
	},
		patternProperties?: {
		[name: string]: IJsonSchema
	},
		dependencies?: {
		[name: string]: IJsonSchema | string[]
	},
		enum?: any[],
		type?: string | string[],
		allOf?: IJsonSchema[],
		anyOf?: IJsonSchema[],
		oneOf?: IJsonSchema[],
		not?: IJsonSchema
	}

	declare export function initialize(args: Args): InitializedApi

		
}

declare module 'OpenApi' {
	declare type MimeTypes = string[];

	declare type Response = ResponseObject | ReferenceObject;

	declare type Parameters = (ReferenceObject | Parameter)[];

	declare type Parameter = (InBodyParameterObject | GeneralParameterObject);

	declare type Schema = SchemaObject | ReferenceObject;

	declare export interface ApiDefinition {
		swagger: string,
		info: InfoObject,
		host?: string,
		basePath?: string,
		schemes?: string[],
		consumes?: MimeTypes,
		produces?: MimeTypes,
		paths: PathsObject,
		definitions?: DefinitionsObject,
		parameters?: ParametersDefinitionsObject,
		responses?: ResponsesDefinitionsObject,
		securityDefinitions?: SecurityDefinitionsObject,
		security?: SecurityRequirementObject[],
		tags?: TagObject[],
		externalDocs?: ExternalDocumentationObject
	}

	declare export interface InfoObject {
		title: string,
		description?: string,
		termsOfService?: string,
		contact?: ContactObject,
		license?: LicenseObject,
		version: string
	}

	declare export interface ContactObject {
		name?: string,
		url?: string,
		email?: string
	}

	declare export interface LicenseObject {
		name: string,
		url?: string
	}

	declare export interface PathsObject {
		[index: string]: PathItemObject | any
	}

	declare export interface PathItemObject {
		$ref?: string,
		get?: OperationObject,
		put?: OperationObject,
		post?: OperationObject,
		delete?: OperationObject,
		options?: OperationObject,
		head?: OperationObject,
		patch?: OperationObject,
		parameters?: Parameters
	}

	declare export interface OperationObject {
		tags?: string[],
		summary?: string,
		description?: string,
		externalDocs?: ExternalDocumentationObject,
		operationId?: string,
		consumes?: MimeTypes,
		produces?: MimeTypes,
		parameters?: Parameters,
		responses: ResponsesObject,
		schemes?: string[],
		deprecated?: boolean,
		security?: SecurityRequirementObject[],
		[index: string]: any
	}

	declare export interface DefinitionsObject {
		[index: string]: SchemaObject
	}

	declare export interface ResponsesObject {
		[index: string]: Response | any,
		default: Response
	}

	declare export interface ResponsesDefinitionsObject {
		[index: string]: ResponseObject
	}

	declare export interface ResponseObject {
		description: string,
		schema?: Schema,
		headers?: HeadersObject,
		examples?: ExampleObject
	}

	declare export interface HeadersObject {
		[index: string]: HeaderObject
	}

	declare export interface HeaderObject {
		
	}

	declare export interface ExampleObject {
		[index: string]: any
	}

	declare export interface SecurityDefinitionsObject {
		[index: string]: SecuritySchemeObject
	}

	declare export interface SecuritySchemeObject {
		type: string,
		description?: string,
		name: string,
		in: string,
		flow: string,
		authorizationUrl: string,
		tokenUrl: string,
		scopes: ScopesObject
	}

	declare export interface ScopesObject {
		[index: string]: any
	}

	declare export interface SecurityRequirementObject {
		[index: string]: string[]
	}

	declare export interface TagObject {
		name: string,
		description?: string,
		externalDocs?: ExternalDocumentationObject
	}

	declare export interface ItemsObject {
		type: string,
		format?: string,
		items?: ItemsObject,
		collectionFormat?: string,
		default?: any,
		maximum?: number,
		exclusiveMaximum?: boolean,
		minimum?: number,
		exclusiveMinimum?: boolean,
		maxLength?: number,
		minLength?: number,
		pattern?: string,
		maxItems?: number,
		minItems?: number,
		uniqueItems?: boolean,
		enum?: any[],
		multipleOf?: number
	}

	declare export interface ParametersDefinitionsObject {
		[index: string]: ParameterObject
	}

	declare interface ParameterObject {
		name: string,
		in: string,
		description?: string,
		required?: boolean
	}

	declare export interface InBodyParameterObject {
		schema: Schema
	}

	declare export interface GeneralParameterObject {
		allowEmptyValue?: boolean
	}

	declare export interface ReferenceObject {
		$ref: string
	}

	declare export interface ExternalDocumentationObject {
		[index: string]: any,
		description?: string,
		url: string
	}

	declare export interface SchemaObject {
		[index: string]: any,
		discriminator?: string,
		readOnly?: boolean,
		xml?: XMLObject,
		externalDocs: ExternalDocumentationObject,
		example: any
	}

	declare export interface XMLObject {
		[index: string]: any,
		name?: string,
		namespace?: string,
		prefix?: string,
		attribute?: boolean,
		wrapped?: boolean
	}

			
}
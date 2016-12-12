

declare module 'swagger-express-middleware' {
					declare module.exports: SwaggerMiddlewareConstructor


}

declare module 's' {
	declare type MimeTypes = string[];

	declare type Response = ResponseObject | ReferenceObject;

	declare type Parameters = (ParameterObject | ReferenceObject)[];

	declare interface SwaggerMiddlewareConstructor {
		(apiDefinitionPathOrObject: string | SwaggerObject, appOrRouter: Application | Router, cb: SwaggerMiddlewareConstructorCallback): SwaggerMiddleware
	}

	declare interface SwaggerMiddlewareConstructorCallback {
		(err: any, middleware: SwaggerMiddleware): void
	}

	declare export interface SwaggerMiddleware {
		metadata: MetadataSignature,
		CORS: CORSSignature,
		files: FilesSignature,
		parseRequest: ParseRequestSignature,
		validateRequest(): RequestHandler,
		mock: MockSignature
	}

	declare interface MockSignature {
		(router?: Application | Router, datastore?: any): RequestHandler
	}

	declare interface MetadataSignature {
		(router?: Application | Router): RequestHandler
	}

	declare interface CORSSignature {
		(): RequestHandler
	}

	declare interface FilesSignature {
		(options?: FilesOptions): RequestHandler,
		(router: Application | Router, options?: FilesOptions): RequestHandler
	}

	declare interface ParseRequestSignature {
		(options?: ParseRequestOptions): RequestHandler,
		(router: Application | Router, options?: ParseRequestOptions): RequestHandler
	}

	declare export interface FilesOptions {
		useBasePath?: boolean,
		apiPath?: string,
		rawFilesPath?: string
	}

	declare export interface ParseRequestOptions {
		cookie?: CookieParserOptionItem,
		json?: JsonParseOptionItem,
		text?: TextParserOptionItem,
		urlencoded?: UrlEncodedOptionItem,
		raw?: RawParserOptionItem,
		multipart?: MulterOptions
	}

	declare interface MulterOptions {
		dest?: string,
		storage?: StorageEngine,
		limits?: {
		fieldNameSize?: number,
		fieldSize?: number,
		fields?: number,
		fileSize?: number,
		files?: number,
		parts?: number,
		headerPairs?: number
	},
		fileFilter?: (
		req: Request, file: File, callback: (error: Error, acceptFile: boolean) => void
	) => void
	}

	declare interface StorageEngine {
		_handleFile(req: Request, file: File, callback: (error?: any, info?: File) => void): void,
		_removeFile(req: Request, file: File, callback: (error: Error) => void): void
	}

	declare export interface File {
		fieldname: string,
		originalname: string,
		encoding: string,
		mimetype: string,
		size: number,
		destination: string,
		filename: string,
		path: string,
		buffer: Buffer
	}

	declare interface RawParserOptionItem {
		inflate?: boolean,
		limit?: string | number,
		type?: ((req: Request) => string) | string,
		verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void
	}

	declare interface CookieParserOptionItem {
		secret?: string | Array<string>,
		options?: any
	}

	declare interface JsonParseOptionItem {
		inflate?: boolean,
		limit?: string | number,
		type?: ((req: Request) => string) | string,
		verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void,
		strict?: boolean,
		receiver?: (key: string, value: any) => any
	}

	declare interface TextParserOptionItem {
		inflate?: boolean,
		limit?: string | number,
		type?: ((req: Request) => string) | string,
		verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void,
		defaultCharset?: string
	}

	declare interface UrlEncodedOptionItem {
		inflate?: boolean,
		limit?: string | number,
		type?: ((req: Request) => string) | string,
		verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void,
		extended?: boolean
	}

	declare export interface SwaggerObject {
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
		security?: SecurityRequirementObject[]
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
		schema?: SchemaObject,
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
		exclusiveMaximum: boolean,
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

	declare export interface ParameterObject {
		name: string,
		in: string,
		description?: string,
		required?: boolean
	}

	declare export interface InBodyParameterObject {
		schema: SchemaObject
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
		externalDocs?: ExternalDocumentationObject,
		example?: any
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
		not?: IJsonSchema,
		$ref?: string,
		format?: string
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


declare module 'documentdb-server' {
		declare interface IContext {
		getCollection(): ICollection,
		getRequest(): IRequest,
		getResponse(): IResponse
	}

	declare interface I__Object {
		request: IRequest,
		response: IResponse
	}

	declare interface IQueryAPI {
		filter(
		predicate: (document: Object) => boolean, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		filter<T>(
		predicate: (document: Object) => boolean, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		map(
		predicate: (document: Object) => Object, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		map<T>(
		predicate: (document: Object) => Object, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		pluck(
		propertyName: string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		pluck<T>(
		propertyName: string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		flatten(
		isShallow?: boolean, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		flatten<T>(
		isShallow?: boolean, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		sortBy(
		predicate: (document: Object) => string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		sortBy(
		predicate: (document: Object) => number, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		sortBy<T>(
		predicate: (document: Object) => string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		sortBy<T>(
		predicate: (document: Object) => number, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		sortByDescending(
		predicate: (document: Object) => string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		sortByDescending(
		predicate: (document: Object) => number, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		sortByDescending<T>(
		predicate: (document: Object) => string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		sortByDescending<T>(
		predicate: (document: Object) => number, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		value(
		options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse,
		value<T>(
		options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): IQueryResponse
	}

	declare interface ICollection {
		chain(): IQueryResponse,
		createAttachment(
		documentLink: string, body: IAttachment, options?: ICreateOptions, callback?: (
		error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions
	) => void
	): boolean,
		createDocument(
		collectionLink: string, body: Object, options?: ICreateOptions, callback?: (
		error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions
	) => void
	): boolean,
		deleteAttachment(
		attachmentLink: string, options?: IDeleteOptions, callback?: (
		error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions
	) => void
	): boolean,
		deleteDocument(
		documentLink: string, options?: IDeleteOptions, callback?: (
		error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions
	) => void
	): boolean,
		getAltLink(): string,
		getSelfLink(): string,
		queryAttachments(
		documentLink: string, query: string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): boolean,
		queryAttachments(
		documentLink: string, query: IParameterizedQuery, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): boolean,
		queryDocuments(
		collectionLink: string, filterQuery: string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): boolean,
		queryDocuments<T>(
		collectionLink: string, filterQuery: string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): boolean,
		queryDocuments(
		collectionLink: string, filterQuery: IParameterizedQuery, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): boolean,
		queryDocuments<T>(
		collectionLink: string, filterQuery: IParameterizedQuery, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): boolean,
		readAttachment(
		attachmenLink: string, options?: IReadOptions, callback?: (
		error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions
	) => void
	): boolean,
		readAttachments(
		documentLink: string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): boolean,
		readDocument(
		documentLink: string, options?: IReadOptions, callback?: (
		error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions
	) => void
	): boolean,
		readDocument<T>(
		documentLink: string, options?: IReadOptions, callback?: (
		error: IRequestCallbackError, resources: T, options: IRequestCallbackOptions
	) => void
	): boolean,
		readDocuments(
		collectionLink: string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<Object>, options: IFeedCallbackOptions
	) => void
	): boolean,
		readDocuments<T>(
		collectionLink: string, options?: IFeedOptions, callback?: (
		error: IFeedCallbackError, resources: Array<T>, options: IFeedCallbackOptions
	) => void
	): boolean,
		replaceAttachment(
		attachmentLink: string, attachment: Object, options?: IReplaceOptions, callback?: (
		error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions
	) => void
	): boolean,
		replaceDocument(
		documentLink: string, document: Object, options?: IReplaceOptions, callback?: (
		error: IRequestCallbackError, resources: Object, options: IRequestCallbackOptions
	) => void
	): boolean
	}

	declare interface ICreateOptions {
		indexAction?: string,
		disableAutomaticIdGeneration?: string
	}

	declare interface IDeleteOptions {
		etag?: string
	}

	declare interface IFeedCallbackError {
		number: number,
		body: string
	}

	declare interface IFeedCallbackOptions {
		continuation: string,
		currentCollectionSizeInMB: string,
		maxCollectionSizeInMB: string
	}

	declare interface IFeedOptions {
		pageSize?: number,
		continuation?: string,
		enableScan?: boolean,
		enableLowPrecisionOrderBy?: boolean
	}

	declare interface IQueryResponse {
		isAccepted: boolean
	}

	declare interface IReadOptions {
		ifNoneMatch?: string
	}

	declare interface IReplaceOptions {
		indexAction?: string,
		etag?: string
	}

	declare interface IRequestCallbackError {
		number: number,
		body: string
	}

	declare interface IRequestCallbackOptions {
		currentCollectionSizeInMB: string,
		maxCollectionSizeInMB: string,
		notModified: boolean
	}

	declare interface IAttachment {
		contentType: string,
		media: string
	}

	declare interface IDocumentMeta {
		id: string,
		_self: string,
		_ts: string,
		_rid?: string,
		_etag?: string,
		_attachments?: string
	}

	declare interface IRequest {
		getBody(): Object,
		getBody<T>(): T,
		getValue(key: string): string,
		setBody(value: string): void,
		setBody(value: Object): void,
		setValue(key: string, value: string): void
	}

	declare interface IResponse {
		getBody(): Object,
		getBody<T>(): T,
		getMaxResourceQuota(): string,
		getResourceQuotaCurrentUsage(): string,
		getValue(key: string): string,
		setBody(value: string): void,
		setBody(value: Object): void,
		getValue(key: string, value: string): void,
		appendBody(value: string): void,
		appendBody(value: Object): void
	}

	declare interface IParameterizedQuery {
		query: string,
		parameters: Array<IQueryParam>
	}

	declare interface IQueryParam {
		name: string,
		value: any
	}

	declare interface IErrorCodes {
		BadRequest: number,
		Forbidden: number,
		NotFound: number,
		Conflict: number,
		PreconditionFailed: number,
		RequestEntityTooLarge: number,
		RetryWith: number,
		InternalServerError: number
	}

	declare function getContext(): IContext

		
}
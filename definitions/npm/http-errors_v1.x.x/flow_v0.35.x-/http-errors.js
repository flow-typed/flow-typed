

declare module 'http-errors' {
					declare module.exports: CreateHttpError


}

declare module 'createHttpError' {
	declare type HttpErrorConstructor = NO PRINT IMPLEMENTED: ConstructorType;

	declare interface HttpError {
		status: number,
		statusCode: number,
		expose: boolean
	}

	declare interface CreateHttpError {
		[code: string]: NO PRINT IMPLEMENTED: ConstructorType,
		(...args: Array<Error | string | number | Object>): HttpError,
		Continue: HttpErrorConstructor,
		SwitchingProtocols: HttpErrorConstructor,
		Processing: HttpErrorConstructor,
		OK: HttpErrorConstructor,
		Created: HttpErrorConstructor,
		Accepted: HttpErrorConstructor,
		NonAuthoritativeInformation: HttpErrorConstructor,
		NoContent: HttpErrorConstructor,
		ResetContent: HttpErrorConstructor,
		PartialContent: HttpErrorConstructor,
		MultiStatus: HttpErrorConstructor,
		AlreadyReported: HttpErrorConstructor,
		IMUsed: HttpErrorConstructor,
		MultipleChoices: HttpErrorConstructor,
		MovedPermanently: HttpErrorConstructor,
		Found: HttpErrorConstructor,
		SeeOther: HttpErrorConstructor,
		NotModified: HttpErrorConstructor,
		UseProxy: HttpErrorConstructor,
		Unused: HttpErrorConstructor,
		TemporaryRedirect: HttpErrorConstructor,
		PermanentRedirect: HttpErrorConstructor,
		BadRequest: HttpErrorConstructor,
		Unauthorized: HttpErrorConstructor,
		PaymentRequired: HttpErrorConstructor,
		Forbidden: HttpErrorConstructor,
		NotFound: HttpErrorConstructor,
		MethodNotAllowed: HttpErrorConstructor,
		NotAcceptable: HttpErrorConstructor,
		ProxyAuthenticationRequired: HttpErrorConstructor,
		RequestTimeout: HttpErrorConstructor,
		Conflict: HttpErrorConstructor,
		Gone: HttpErrorConstructor,
		LengthRequired: HttpErrorConstructor,
		PreconditionFailed: HttpErrorConstructor,
		PayloadTooLarge: HttpErrorConstructor,
		URITooLong: HttpErrorConstructor,
		UnsupportedMediaType: HttpErrorConstructor,
		RangeNotSatisfiable: HttpErrorConstructor,
		ExpectationFailed: HttpErrorConstructor,
		ImATeapot: HttpErrorConstructor,
		MisdirectedRequest: HttpErrorConstructor,
		UnprocessableEntity: HttpErrorConstructor,
		Locked: HttpErrorConstructor,
		FailedDependency: HttpErrorConstructor,
		UnorderedCollection: HttpErrorConstructor,
		UpgradeRequired: HttpErrorConstructor,
		PreconditionRequired: HttpErrorConstructor,
		TooManyRequests: HttpErrorConstructor,
		RequestHeaderFieldsTooLarge: HttpErrorConstructor,
		UnavailableForLegalReasons: HttpErrorConstructor,
		InternalServerError: HttpErrorConstructor,
		NotImplemented: HttpErrorConstructor,
		BadGateway: HttpErrorConstructor,
		ServiceUnavailable: HttpErrorConstructor,
		GatewayTimeout: HttpErrorConstructor,
		HTTPVersionNotSupported: HttpErrorConstructor,
		VariantAlsoNegotiates: HttpErrorConstructor,
		InsufficientStorage: HttpErrorConstructor,
		LoopDetected: HttpErrorConstructor,
		BandwidthLimitExceeded: HttpErrorConstructor,
		NotExtended: HttpErrorConstructor,
		NetworkAuthenticationRequired: HttpErrorConstructor
	}

			
}
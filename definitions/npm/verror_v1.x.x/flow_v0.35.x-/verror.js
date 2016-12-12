

declare module 'verror' {
				declare class VError extends Error {
		VError: typeof VError;
		SError: typeof SError;
		MultiError: typeof MultiError;
		WError: typeof WError;
		cause(): Error;
		constructor(cause: Error, message: string, ...params: any[]): this;
		constructor(message: string, ...params: any[]): this
	}

	declare class SError extends VError {
		
	}

	declare class MultiError extends VError {
		constructor(errors: Error[]): this
	}

	declare class WError extends Error {
		cause(): Error;
		constructor(cause: Error, message: string, ...params: any[]): this;
		constructor(message: string, ...params: any[]): this
	}

	declare module.exports: undefined


}
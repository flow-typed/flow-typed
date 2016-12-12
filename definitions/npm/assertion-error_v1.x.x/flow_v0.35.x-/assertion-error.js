

declare module 'assertion-error' {
				declare class AssertionError extends Error {
		constructor(message: string, props?: any, ssf?: Function): this;
		name: string;
		message: string;
		showDiff: boolean;
		stack: string
	}

	declare module.exports: undefined


}
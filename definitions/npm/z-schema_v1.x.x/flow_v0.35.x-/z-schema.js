

declare module 'z-schema' {
					


}

declare module 'npm$namespace$ZSchema' {
		declare export interface Options {
		asyncTimeout?: number,
		forceAdditional?: boolean,
		assumeAdditional?: boolean,
		forceItems?: boolean,
		forceMinItems?: boolean,
		forceMaxItems?: boolean,
		forceMinLength?: boolean,
		forceMaxLength?: boolean,
		forceProperties?: boolean,
		ignoreUnresolvableReferences?: boolean,
		noExtraKeywords?: boolean,
		noTypeless?: boolean,
		noEmptyStrings?: boolean,
		noEmptyArrays?: boolean,
		strictUris?: boolean,
		strictMode?: boolean,
		reportPathAsArray?: boolean,
		breakOnFirstError?: boolean,
		pedanticCheck?: boolean,
		ignoreUnknownFormats?: boolean
	}

	declare export interface SchemaError {
		code: string,
		description: string,
		message: string,
		params: string[],
		path: string
	}

		declare export class Validator  {
		registerFormat(formatName: string, validatorFunction: (value: any) => boolean): void;
		unregisterFormat(name: string): void;
		getRegisteredFormats(): string[];
		getDefaultOptions(): Options;
		constructor(options: Options): this;
		validateSchema(schema: any): boolean;
		validate(json: any, schema: any): boolean;
		validate(json: any, schema: any, callback: (err: any, valid: boolean) => void): void;
		getLastError(): SchemaError;
		getLastErrors(): SchemaError[]
	}

	
}
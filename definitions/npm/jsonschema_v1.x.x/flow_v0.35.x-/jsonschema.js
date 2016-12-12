

declare module 'jsonschema' {
		declare export interface IJSONSchemaResult {
		errors: Array<IJSONSchemaValidationError>,
		instance: any,
		arguments: Array<{
		
	}>,
		propertyPath: string,
		name: string,
		schema: {
		
	},
		throwError: any,
		disableFormat: boolean
	}

	declare export interface IJSONSchemaValidationError {
		message: string,
		property: string,
		stack: string,
		schema: {
		
	},
		name: string,
		instance: any,
		argument: {
		
	}
	}

	declare export interface IJSONSchemaOptions {
		propertyName?: string,
		base?: string
	}

		declare export class Validator  {
		new(): this;
		validate(
		instance: any, schema: {
		
	}, options?: IJSONSchemaOptions, ctx?: {
		
	}
	): IJSONSchemaResult;
		addSchema(schema: {
		
	}, urn: string): {
		
	};
		addSubSchema(baseuri: string, schema: {
		
	}): {
		
	};
		setSchemas(schemas: Array<{
		
	}>): void;
		getSchema(urn: string): {
		
	}
	}

	
}
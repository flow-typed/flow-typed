

declare module 'normalizr' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Normalizr' {
	declare type AttributeSetting = string | ((entity: any) => any);

	declare type SchemaClass = Schema | ArraySchema | UnionSchema;

	declare type SchemaObject = {
		[property: string]: SchemaClass | SchemaObject
	};

	declare type SchemaType = SchemaClass | SchemaObject | Object;

	declare interface UnionSchema {
		getItemSchema(): SchemaType,
		getSchemaKey(item: any): string
	}

	declare interface ArraySchema {
		getItemSchema(): SchemaType
	}

	declare export function arrayOf(
		schema: SchemaType, options?: {
		schemaAttribute: AttributeSetting
	}
	): ArraySchema

	declare export function valuesOf(
		schema: SchemaType, options?: {
		schemaAttribute: AttributeSetting
	}
	): ArraySchema

	declare export function unionOf(
		schemaMap: SchemaType, options?: {
		schemaAttribute: AttributeSetting
	}
	): UnionSchema

	declare export function normalize(
		obj: any | Array<any>, schema: SchemaType, options?: {
		assignEntity?: (normalized: any, key: string, entity: any) => any,
		mergeIntoEntity?: (stored: any, normalized: any, entityKey: string) => any
	}
	): {
		entities: any,
		result: any
	}

	declare export class Schema  {
		constructor(key: string, options?: {
		idAttribute: AttributeSetting
	}): this;
		define(nestedSchema: SchemaObject): void;
		getKey(): string;
		getIdAttribute(): AttributeSetting
	}

	
}
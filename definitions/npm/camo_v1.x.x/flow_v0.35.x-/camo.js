

declare module 'camo' {
	declare type TypeOrArray<Type> = Type | Type[];

	declare export type SchemaTypeConstructor = TypeOrArray<StringConstructor> | TypeOrArray<NumberConstructor> | TypeOrArray<BooleanConstructor> | TypeOrArray<DateConstructor> | TypeOrArray<ObjectConstructor> | TypeOrArray<ArrayConstructor>;

	declare export type SchemaType = TypeOrArray<string | number | boolean | Date | Object>;

	declare export type SchemaTypeExtended = SchemaTypeConstructor | SchemaTypeOptions<SchemaType>;

	declare export interface SchemaTypeOptions<Type> {
		type: SchemaTypeConstructor,
		default?: Type,
		min?: number,
		max?: number,
		choices?: Type[],
		match?: RegExp,
		validate(value: Type): boolean,
		unique?: boolean,
		required?: boolean
	}

	declare interface DocumentSchema {
		[property: string]: SchemaType,
		_id?: string
	}

	declare export function connect(uri: string): Promise<any>

	declare class DocumentInstance<Schema>  {
		save(): Promise<Schema>;
		loadOne(): Promise<Schema>;
		loadMany(): Promise<Schema>;
		delete(): Promise<Schema>;
		deleteOne(): Promise<Schema>;
		deleteMany(): Promise<Schema>;
		loadOneAndDelete(): Promise<Schema>;
		count(): Promise<Schema>;
		preValidate(): Promise<Schema>;
		postValidate(): Promise<Schema>;
		preSave(): Promise<Schema>;
		postSave(): Promise<Schema>;
		preDelete(): Promise<Schema>;
		postDelete(): Promise<Schema>
	}

	declare export class Document  {
		[property: string]: SchemaTypeExtended | string | DocumentInstance<any>;
		collectionName(): string;
		create<Schema>(schema: Schema): DocumentInstance<Schema>
	}

	
}
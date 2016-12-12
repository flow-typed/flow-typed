

declare module 'js-yaml' {
					declare module.exports: undefined


}

declare module 'npm$namespace$jsyaml' {
		declare export interface LoadOptions {
		filename?: string,
		strict?: boolean,
		schema?: any
	}

	declare export interface DumpOptions {
		indent?: number,
		skipInvalid?: boolean,
		flowLevel?: number,
		styles?: Object,
		schema?: any
	}

	declare export interface TypeConstructorOptions {
		kind?: string,
		resolve?: Function,
		construct?: Function,
		instanceOf?: Object,
		predicate?: string,
		represent?: Function,
		defaultStyle?: string,
		styleAliases?: Object
	}

	declare export interface SchemaDefinition {
		implicit?: any[],
		explicit?: any[],
		include?: any[]
	}

	declare export function safeLoad(str: string, opts?: LoadOptions): any

	declare export function load(str: string, opts?: LoadOptions): any

	declare export function safeLoadAll(str: string, iterator: (doc: any) => void, opts?: LoadOptions): any

	declare export function loadAll(str: string, iterator: (doc: any) => void, opts?: LoadOptions): any

	declare export function safeDump(obj: any, opts?: DumpOptions): string

	declare export function dump(obj: any, opts?: DumpOptions): string

	declare export class Type extends TypeConstructorOptions {
		constructor(tag: string, opts?: TypeConstructorOptions): this;
		tag: string
	}

	declare export class Schema  {
		constructor(definition: SchemaDefinition): this;
		create(args: any[]): Schema
	}

	declare export class YAMLException extends Error {
		constructor(reason?: any, mark?: any): this;
		toString(compact?: boolean): string
	}

	
}
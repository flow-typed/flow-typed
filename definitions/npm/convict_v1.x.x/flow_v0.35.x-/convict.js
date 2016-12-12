

declare module 'convict' {
		declare interface Format {
		name?: string,
		validate?: (val: any) => void,
		coerce?: (val: any) => any
	}

	declare interface Schema {
		[name: string]: convict.Schema | {
		default: any,
		doc?: string,
		format?: string | Array<any> | Function,
		env?: string,
		arg?: string
	}
	}

	declare interface Config {
		get(name: string): any,
		default(name: string): any,
		has(name: string): boolean,
		set(name: string, value: any): void,
		load(conf: Object): void,
		loadFile(file: string): void,
		loadFile(files: string[]): void,
		validate(options?: {
		strict?: boolean
	}): void,
		getProperties(): Object,
		getSchema(): Object,
		toString(): string,
		getSchemaString(): string
	}

	declare interface convict {
		addFormat(format: convict.Format): void,
		addFormats(formats: {
		[name: string]: convict.Format
	}): void,
		(config: convict.Schema): convict.Config
	}

			declare module.exports: convict


}
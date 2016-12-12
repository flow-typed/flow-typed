import type { Format, Compile } from 'npm$namespace$StringTemplate'

declare module 'string-template' {
					declare module.exports: Format


}

declare module 'npm$namespace$StringTemplate' {
		declare interface Format {
		(string: string, object: any): string,
		(string: string, array: Array<any>): string,
		(string: string, ...array: Array<any>): string,
		(string: string): string
	}

	declare interface Compile {
		(string: string, inline?: boolean): Template
	}

	declare interface Template {
		(object: any): string,
		(array: Array<any>): string,
		(...array: Array<any>): string
	}

			
}

declare module 'string-template/compile' {
					declare module.exports: Compile


}
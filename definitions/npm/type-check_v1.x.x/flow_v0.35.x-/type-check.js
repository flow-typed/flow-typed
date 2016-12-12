import type { TC } from 'npm$namespace$TypeCheck'

declare module 'type-check' {
					declare module.exports: TC


}

declare module 'npm$namespace$TypeCheck' {
		declare export interface CustomType {
		[typeName: string]: {
		typeOf: string,
		validate: (x: any) => any
	}
	}

	declare export interface Options {
		customTypes: CustomType
	}

	declare export interface TC {
		VERSION: string,
		typeCheck: (typeDescription: string, inst: any, options?: Options) => boolean,
		parseType: (typeDescription: string) => Object,
		parsedTypeCheck: (parsedType: any, obj: any) => boolean
	}

			
}
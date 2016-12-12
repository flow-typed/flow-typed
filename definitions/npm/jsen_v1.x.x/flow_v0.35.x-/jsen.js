

declare module 'jsen' {
					declare module.exports: JsenMain


}

declare module 'Jsen' {
		declare export interface JsenFormats {
		[key: string]: string | RegExp | Function
	}

	declare export interface JsenSettings {
		missing$Ref?: boolean,
		greedy?: boolean,
		formats?: JsenFormats,
		schemas?: any
	}

	declare export interface JsenBuildSettings {
		copy?: boolean,
		additionalProperties?: boolean
	}

	declare export interface JsenValidator {
		(data?: any): boolean,
		build(initial?: any, options?: JsenBuildSettings): any,
		errors: JsenValidateError[]
	}

	declare export interface JsenValidateError {
		path: string,
		keyword: string,
		message?: string
	}

	declare export interface JsenUnique {
		(array: any[]): boolean,
		findIndex(
		array: any[], value: any, comparator: (obj1: any, obj2: any) => boolean
	): number
	}

	declare export interface JsenMain {
		(schema?: any, options?: JsenSettings): JsenValidator,
		clone(data: any): any,
		equal(a: any, b: any): boolean,
		unique: JsenUnique
	}

			
}
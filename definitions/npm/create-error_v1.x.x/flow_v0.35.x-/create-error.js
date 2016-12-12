

declare module 'create-error' {
	declare type Err = Error;

		declare function createError(): createError.Error<Error>

	declare function createError<T>(name: string, properties?: any): T

	declare function createError<T>(Target: createError.Error<Error>, name?: string, properties?: any): T

		declare module.exports: undefined


}

declare module 'createError' {
		declare interface Error<T> {
		new (message?: string, obj?: any): T
	}

			
}


declare module 'once' {
		declare interface SimpleFunction<Result> {
		(...args: any[]): Result
	}

	declare interface OnceFunction<Result> {
		called: boolean,
		value: Result
	}

	declare interface Once {
		(f: SimpleFunction<Result>): OnceFunction<Result>,
		proto: Function
	}

			declare module.exports: Once


}
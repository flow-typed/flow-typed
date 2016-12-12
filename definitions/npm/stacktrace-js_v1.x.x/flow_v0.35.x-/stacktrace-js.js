

declare module 'stacktrace-js' {
					declare module.exports: undefined


}

declare module 'npm$namespace$StackTrace' {
		declare export interface SourceCache {
		[key: string]: string | Promise<string>
	}

	declare export interface StackTraceOptions {
		filter?: (stackFrame: StackFrame) => boolean,
		sourceCache?: SourceCache,
		offline?: boolean
	}

	declare export interface StackFrame {
		constructor(
		functionName: string, args: any, fileName: string, lineNumber: number, columnNumber: number
	): StackFrame,
		functionName: string,
		args: any,
		fileName: string,
		lineNumber: number,
		columnNumber: number,
		source: string,
		isEval: boolean,
		isNative: boolean,
		toString(): string
	}

	declare export function get(options?: StackTraceOptions): Promise<StackFrame[]>

	declare export function fromError(error: Error, options?: StackTraceOptions): Promise<StackFrame[]>

	declare export function generateArtificially(options?: StackTraceOptions): Promise<StackFrame[]>

	declare export function instrument<TFunc>(
		fn: TFunc, callback: (stackFrames: StackFrame[]) => void, errback?: (error: Error) => void, thisArg?: any
	): TFunc

	declare export function deinstrument<TFunc>(fn: TFunc): TFunc

	declare export function report(stackframes: StackFrame[], url: string): Promise<string>

		
}
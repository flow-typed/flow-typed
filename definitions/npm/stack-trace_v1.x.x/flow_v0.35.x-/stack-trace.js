

declare module 'stack-trace' {
		declare export interface StackFrame {
		getTypeName(): string,
		getFunctionName(): string,
		getMethodName(): string,
		getFileName(): string,
		getTypeName(): string,
		getLineNumber(): number,
		getColumnNumber(): number,
		isNative(): boolean
	}

	declare export function get(belowFn?: () => void): StackFrame[]

	declare export function parse(err: Error): StackFrame[]

		
}
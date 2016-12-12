

declare module 'error-stack-parser' {
					
}

declare module 'ErrorStackParser' {
		declare export interface StackFrame {
		constructor(
		functionName: string, args: any, fileName: string, lineNumber: number, columnNumber: number, source: string
	): StackFrame,
		functionName?: string,
		args?: any[],
		fileName?: string,
		lineNumber?: number,
		columnNumber?: number,
		source?: string,
		toString(): string
	}

	declare export function parse(error: Error): StackFrame[]

		
}
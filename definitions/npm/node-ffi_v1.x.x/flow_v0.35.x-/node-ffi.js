

declare module 'node-ffi' {
					
}

declare module 'ffi' {
		declare export interface Function {
		retType: ref.Type,
		argTypes: ref.Type[],
		ffi_type: Buffer,
		abi: number,
		toPointer(fn: (...args: any[]) => any): Buffer,
		toFunction(buf: Buffer): ForeignFunction
	}

	declare export interface ForeignFunction {
		(...args: any[]): any,
		async(...args: any[]): void
	}

	declare export interface VariadicForeignFunction {
		(...args: any[]): ForeignFunction,
		returnType: any
	}

	declare export interface DynamicLibrary {
		close(): number,
		get(symbol: string): Buffer,
		error(): string
	}

	declare export function errno(): number

		
}
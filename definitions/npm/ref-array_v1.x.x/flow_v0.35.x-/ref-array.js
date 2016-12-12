

declare module 'ref-array' {
		declare interface ArrayType<T> {
		BYTES_PER_ELEMENT: number,
		fixedLength: number,
		type: ref.Type,
		untilZeros(
		buffer: Buffer
	): {
		[i: number]: T,
		length: number,
		toArray(): T[],
		toJSON(): T[],
		inspect(): string,
		buffer: Buffer,
		ref(): Buffer
	},
		new (
		length?: number
	): {
		[i: number]: T,
		length: number,
		toArray(): T[],
		toJSON(): T[],
		inspect(): string,
		buffer: Buffer,
		ref(): Buffer
	},
		new (
		data: number[], length?: number
	): {
		[i: number]: T,
		length: number,
		toArray(): T[],
		toJSON(): T[],
		inspect(): string,
		buffer: Buffer,
		ref(): Buffer
	},
		new (
		data: Buffer, length?: number
	): {
		[i: number]: T,
		length: number,
		toArray(): T[],
		toJSON(): T[],
		inspect(): string,
		buffer: Buffer,
		ref(): Buffer
	},
		(length?: number): {
		[i: number]: T,
		length: number,
		toArray(): T[],
		toJSON(): T[],
		inspect(): string,
		buffer: Buffer,
		ref(): Buffer
	},
		(data: number[], length?: number): {
		[i: number]: T,
		length: number,
		toArray(): T[],
		toJSON(): T[],
		inspect(): string,
		buffer: Buffer,
		ref(): Buffer
	},
		(data: Buffer, length?: number): {
		[i: number]: T,
		length: number,
		toArray(): T[],
		toJSON(): T[],
		inspect(): string,
		buffer: Buffer,
		ref(): Buffer
	}
	}

			declare module.exports: undefined


}
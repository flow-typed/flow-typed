

declare module 'node-ffi-buffer' {
		declare interface Buffer {
		address(): number,
		deref(): any,
		isNull(): boolean,
		readCString(offset?: number): string,
		readInt64BE(offset?: number): string,
		readInt64LE(offset?: number): string,
		readObject(offset?: number): string,
		readPointer(offset?: number): string,
		readUInt64BE(offset?: number): string,
		readUInt64LE(offset?: number): string,
		ref(): Buffer,
		reinterpret(size: number, offset?: number): Buffer,
		reinterpretUntilZeros(size: number, offset?: number): Buffer,
		writeCString(offset: number, string: string, encoding?: string): void,
		writeInt64BE(offset: number, input: number): any,
		writeInt64BE(offset: number, input: string): any,
		writeInt64LE(offset: number, input: number): any,
		writeInt64LE(offset: number, input: string): any,
		writeObject(offset: number, object: Object): void,
		writePointer(offset: number, pointer: Buffer): void,
		writeUInt64BE(offset: number, input: number): any,
		writeUInt64BE(offset: number, input: string): any,
		writeUInt64LE(offset: number, input: number): any,
		writeUInt64LE(offset: number, input: string): any,
		inspect(): string
	}

			
}
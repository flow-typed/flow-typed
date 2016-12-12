

declare module 'ref' {
		declare export interface Type {
		size: number,
		indirection: number,
		get(buffer: Buffer, offset: number): any,
		set(buffer: Buffer, offset: number, value: any): void,
		name?: string,
		alignment?: number
	}

	declare export function address(buffer: Buffer): number

	declare export function alloc(type: Type, value?: any): Buffer

	declare export function alloc(type: string, value?: any): Buffer

	declare export function allocCString(string: string, encoding?: string): Buffer

	declare export function coerceType(type: Type): Type

	declare export function coerceType(type: string): Type

	declare export function deref(buffer: Buffer): any

	declare export function derefType(type: Type): Type

	declare export function derefType(type: string): Type

	declare export function get(buffer: Buffer, offset?: number, type?: Type): any

	declare export function get(buffer: Buffer, offset?: number, type?: string): any

	declare export function getType(buffer: Buffer): Type

	declare export function isNull(buffer: Buffer): boolean

	declare export function readCString(buffer: Buffer, offset?: number): string

	declare export function readInt64BE(buffer: Buffer, offset?: number): any

	declare export function readInt64LE(buffer: Buffer, offset?: number): any

	declare export function readObject(buffer: Buffer, offset?: number): Object

	declare export function readPointer(buffer: Buffer, offset?: number, length?: number): Buffer

	declare export function readUInt64BE(buffer: Buffer, offset?: number): any

	declare export function readUInt64LE(buffer: Buffer, offset?: number): any

	declare export function ref(buffer: Buffer): Buffer

	declare export function refType(type: Type): Type

	declare export function refType(type: string): Type

	declare export function reinterpret(buffer: Buffer, size: number, offset?: number): Buffer

	declare export function reinterpretUntilZeros(buffer: Buffer, size: number, offset?: number): Buffer

	declare export function set(buffer: Buffer, offset: number, value: any, type?: Type): void

	declare export function set(buffer: Buffer, offset: number, value: any, type?: string): void

	declare export function writeCString(buffer: Buffer, offset: number, string: string, encoding?: string): void

	declare export function writeInt64BE(buffer: Buffer, offset: number, input: number): void

	declare export function writeInt64BE(buffer: Buffer, offset: number, input: string): void

	declare export function writeInt64LE(buffer: Buffer, offset: number, input: number): void

	declare export function writeInt64LE(buffer: Buffer, offset: number, input: string): void

	declare export function writeObject(buffer: Buffer, offset: number, object: Object): void

	declare export function writePointer(buffer: Buffer, offset: number, pointer: Buffer): void

	declare export function writeUInt64BE(buffer: Buffer, offset: number, input: number): void

	declare export function writeUInt64BE(buffer: Buffer, offset: number, input: string): void

	declare export function _attach(buffer: Buffer, object: Object): void

	declare export function _reinterpret(buffer: Buffer, size: number, offset?: number): Buffer

	declare export function _reinterpretUntilZeros(buffer: Buffer, size: number, offset?: number): Buffer

	declare export function _writePointer(buffer: Buffer, offset: number, pointer: Buffer): void

	declare export function _writeObject(buffer: Buffer, offset: number, object: Object): void

		
}
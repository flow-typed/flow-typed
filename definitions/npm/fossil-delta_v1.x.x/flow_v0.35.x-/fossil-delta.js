

declare module 'fossil-delta' {
	declare type ByteArray = Array<number> | Uint8Array | Buffer;

		declare export function create(origin: ByteArray, target: ByteArray): Array<number>

	declare export function apply(origin: ByteArray, delta: Array<number>): Array<number>

	declare export function outputSize(delta: Array<number>): number

		
}


declare module 'UUID' {
		declare interface UUID {
		intFields: UUIDArray<number>,
		bitFields: UUIDArray<string>,
		hexFields: UUIDArray<string>,
		version: number,
		bitString: string,
		hexString: string,
		urn: string,
		equals(uuid: UUID): boolean,
		toString(): string
	}

	declare interface UUIDArray<T> {
		timeLow: string,
		timeMid: string,
		timeHiAndVersion: string,
		clockSeqHiAndReserved: string,
		clockSeqLow: string,
		node: string
	}

	declare export function generate(): string

	declare export function genV4(): UUID

	declare export function genV1(): UUID

	declare export function parse(uuid: string): UUID

	declare export function resetState(): void

	declare export function makeBackwardCompatible(): void

		
}
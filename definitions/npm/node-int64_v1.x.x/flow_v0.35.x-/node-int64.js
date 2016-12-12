

declare module 'node-int64' {
				declare class Int64  {
		MAX_INT: number;
		MIN_INT: number;
		constructor(buffer: Buffer, offset?: number): this;
		constructor(array: Uint8Array, offset?: number): this;
		constructor(str: string): this;
		constructor(hi: number, lo: number): this;
		_2scomp(): void;
		setValue(str: string): void;
		toNumber(allowImprecise?: boolean): number;
		valueOf(): number;
		toString(radix?: number): string;
		toOctetString(separator?: string): string;
		toBuffer(rawBuffer?: boolean): Buffer;
		copy(targetBuffer: Buffer, targetOffset?: number): void;
		compare(other: Int64): number;
		equals(other: Int64): boolean;
		inspect(): string
	}

	declare module.exports: undefined


}


declare module 'bit-array' {
				declare class BitArray  {
		constructor(size: number, hex?: string): this;
		size(): number;
		set(index: number, value: boolean): BitArray;
		toggle(index: number): BitArray;
		get(index: number): boolean;
		reset(): BitArray;
		copy(): BitArray;
		equals(x: BitArray): boolean;
		toJSON(): string;
		toBinaryString(): string;
		toHexString(): string;
		toString(): string;
		toArray(): boolean[];
		count(): number;
		not(): BitArray;
		or(x: BitArray): BitArray;
		and(x: BitArray): BitArray;
		xor(x: BitArray): BitArray
	}

	declare module.exports: undefined


}
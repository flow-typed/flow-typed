

declare module 'bytebuffer' {
				declare class ByteBuffer  {
		constructor(capacity?: number, littleEndian?: boolean, noAssert?: boolean): this;
		BIG_ENDIAN: boolean;
		DEFAULT_CAPACITY: number;
		DEFAULT_ENDIAN: boolean;
		DEFAULT_NOASSERT: boolean;
		LITTLE_ENDIAN: boolean;
		MAX_VARINT32_BYTES: number;
		MAX_VARINT64_BYTES: number;
		METRICS_BYTES: number;
		METRICS_CHARS: number;
		VERSION: string;
		buffer: ArrayBuffer;
		limit: number;
		littleEndian: boolean;
		markedOffset: number;
		noAssert: boolean;
		offset: number;
		view: DataView;
		allocate(capacity?: number, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;
		atob(b64: string): string;
		btoa(str: string): string;
		calculateUTF8Byte(str: string): number;
		calculateUTF8Char(str: string): number;
		calculateVariant32(value: number): number;
		calculateVariant64(value: number | Long): number;
		concat(
		buffers: Array<ByteBuffer | ArrayBuffer | Uint8Array | string>, encoding?: string | boolean, litteEndian?: boolean, noAssert?: boolean
	): ByteBuffer;
		fromBase64(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;
		fromBinary(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;
		fromDebug(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;
		fromHex(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;
		fromUTF8(str: string, littleEndian?: boolean, noAssert?: boolean): ByteBuffer;
		isByteBuffer(bb: any): boolean;
		wrap(
		buffer: ByteBuffer | ArrayBuffer | Uint8Array | string, enc?: string | boolean, littleEndian?: boolean, noAssert?: boolean
	): ByteBuffer;
		zigZagDecode32(n: number): number;
		zigZagDecode64(n: number | Long): Long;
		zigZagEncode32(n: number): number;
		zigZagEncode64(n: number | Long): Long;
		BE(bigEndian?: boolean): ByteBuffer;
		LE(bigEndian?: boolean): ByteBuffer;
		append(
		source: ByteBuffer | ArrayBuffer | Uint8Array | string, encoding?: string | number, offset?: number
	): ByteBuffer;
		appendTo(target: ByteBuffer, offset?: number): ByteBuffer;
		assert(assert: boolean): ByteBuffer;
		capacity(): number;
		clear(): ByteBuffer;
		clone(copy?: boolean): ByteBuffer;
		compact(begin?: number, end?: number): ByteBuffer;
		copy(begin?: number, end?: number): ByteBuffer;
		copyTo(
		target: ByteBuffer, targetOffset?: number, sourceOffset?: number, sourceLimit?: number
	): ByteBuffer;
		ensureCapacity(capacity: number): ByteBuffer;
		fill(value: number | string, begin?: number, end?: number): ByteBuffer;
		flip(): ByteBuffer;
		mark(offset?: number): ByteBuffer;
		order(littleEndian: boolean): ByteBuffer;
		prepend(
		source: ByteBuffer | string | ArrayBuffer, encoding?: string | number, offset?: number
	): ByteBuffer;
		prependTo(target: ByteBuffer, offset?: number): ByteBuffer;
		printDebug(out?: (text: string) => void): void;
		readByte(offset?: number): number;
		readCString(offset?: number): string;
		readDouble(offset?: number): number;
		readFloat(offset?: number): number;
		readFloat32(offset?: number): number;
		readFloat64(offset?: number): number;
		readIString(offset?: number): string;
		readInt(offset?: number): number;
		readInt16(offset?: number): number;
		readInt32(offset?: number): number;
		readInt64(offset?: number): Long;
		readInt8(offset?: number): number;
		readLong(offset?: number): Long;
		readShort(offset?: number): number;
		readString(length: number, metrics?: number, offset?: number): string;
		readUTF8String(chars: number, offset?: number): string;
		readUint16(offset?: number): number;
		readUint32(offset?: number): number;
		readUint64(offset?: number): Long;
		readUint8(offset?: number): number;
		readVString(offset?: number): string;
		readVarint32(offset?: number): number;
		readVarint32ZiZag(offset?: number): number;
		readVarint64(offset?: number): Long;
		readVarint64ZigZag(offset?: number): Long;
		remaining(): number;
		reset(): ByteBuffer;
		resize(capacity: number): ByteBuffer;
		reverse(begin?: number, end?: number): ByteBuffer;
		skip(length: number): ByteBuffer;
		slice(begin?: number, end?: number): ByteBuffer;
		toArrayBuffer(forceCopy?: boolean): ArrayBuffer;
		toBase64(begin?: number, end?: number): string;
		toBinary(begin?: number, end?: number): string;
		toBuffer(forceCopy?: boolean): ArrayBuffer;
		toDebug(columns?: boolean): string | Array<string>;
		toHex(begin?: number, end?: number): string;
		toString(encoding?: string): string;
		toUTF8(): string;
		writeByte(value: number, offset?: number): ByteBuffer;
		writeCString(str: string, offset?: number): ByteBuffer;
		writeDouble(value: number, offset?: number): ByteBuffer;
		writeFloat(value: number, offset?: number): ByteBuffer;
		writeFloat32(value: number, offset?: number): ByteBuffer;
		writeFloat64(value: number, offset?: number): ByteBuffer;
		writeIString(str: string, offset?: number): ByteBuffer;
		writeInt(value: number, offset?: number): ByteBuffer;
		writeInt16(value: number, offset?: number): ByteBuffer;
		writeInt32(value: number, offset?: number): ByteBuffer;
		writeInt64(value: number | Long, offset?: number): ByteBuffer;
		writeInt8(value: number, offset?: number): ByteBuffer;
		writeShort(value: number, offset?: number): ByteBuffer;
		WriteString(str: string, offset?: number): ByteBuffer | number;
		writeUTF8String(str: string, offset?: number): ByteBuffer | number;
		writeUint16(value: number, offset?: number): ByteBuffer;
		writeUint32(value: number, offset?: number): ByteBuffer;
		writeUint64(value: number | Long, offset?: number): ByteBuffer;
		writeUint8(value: number, offset?: number): ByteBuffer;
		writeVString(str: string, offset?: number): ByteBuffer | number;
		writeVarint32(value: number, offset?: number): ByteBuffer | number;
		writeVarint32ZigZag(value: number, offset?: number): ByteBuffer | number;
		writeVarint64(value: number | Long, offset?: number): ByteBuffer;
		writeVarint64ZigZag(value: number | Long, offset?: number): ByteBuffer | number
	}

	declare module.exports: undefined


}
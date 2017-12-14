declare module "flatbuffers" {
  declare type Offset = number;
  declare type Table = {
    bb: ByteBuffer,
    bb_pos: number
  };
  declare type EncodingValue = 1 | 2;
  declare var Encoding: {
    UTF8_BYTES: 1,
    UTF16_STRING: 2
  };
  declare class Long {
    constructor(low: number, high: number): void;
    static create(low: number, high: number): Long;
    toFloat64(): number;
    equals(other: Long): boolean;
  }
  declare class Builder {
    constructor(opt_initial_size: ?number): void;
    forceDefaults(forceDefaults: boolean): void;
    dataBuffer(): ByteBuffer;
    asUint8Array(): Uint8Array;
    prep(size: number, additional_bytes: number): void;
    pad(byte_size: number): void;
    writeInt8(value: number): void;
    writeInt16(value: number): void;
    writeInt32(value: number): void;
    writeInt64(value: Long): void;
    writeFloat32(value: number): void;
    writeFloat64(value: number): void;
    addInt8(value: number): void;
    addInt16(value: number): void;
    addInt32(value: number): void;
    addInt64(value: Long): void;
    addFloat32(value: number): void;
    addFloat64(value: number): void;
    addFieldInt8(voffset: number, value: number, defaultValue: number): void;
    addFieldInt16(voffset: number, value: number, defaultValue: number): void;
    addFieldInt32(voffset: number, value: number, defaultValue: number): void;
    addFieldInt64(voffset: number, value: Long, defaultValue: Long): void;
    addFieldFloat32(voffset: number, value: number, defaultValue: number): void;
    addFieldFloat64(voffset: number, value: number, defaultValue: number): void;
    addFieldOffset(voffset: number, value: Offset, defaultValue: Offset): void;
    addFieldStruct(voffset: number, value: Offset, defaultValue: Offset): void;
    nested(obj: Offset): void;
    notNested(): void;
    slot(voffset: number): void;
    offset(): Offset;
    static growByteBuffer(bb: ByteBuffer): ByteBuffer;
    addOffset(offset: Offset): void;
    startObject(numfields: number): void;
    endObject(): Offset;
    finish(root_table: Offset, opt_file_identifier: ?string): void;
    requiredField(table: Offset, field: number): void;
    startVector(elem_size: number, num_elems: number, alignment: number): void;
    endVector(): Offset;
    createString(s: string | Uint8Array): Offset;
    createLong(low: number, high: number): Long;
  }
  declare class ByteBuffer {
    constructor(bytes: Uint8Array): void;
    static allocate(byte_size: number): ByteBuffer;
    bytes(): Uint8Array;
    position(): number;
    setPosition(position: number): void;
    capacity(): number;
    readInt8(offset: number): number;
    readUint8(offset: number): number;
    readInt16(offset: number): number;
    readUint16(offset: number): number;
    readInt32(offset: number): number;
    readUint32(offset: number): number;
    readInt64(offset: number): Long;
    readUint64(offset: number): Long;
    readFloat32(offset: number): number;
    readFloat64(offset: number): number;
    writeInt8(offset: number, value: number): void;
    writeInt16(offset: number, value: number): void;
    writeInt32(offset: number, value: number): void;
    writeInt64(offset: number, value: Long): void;
    writeFloat32(offset: number, value: number): void;
    writeFloat64(offset: number, value: number): void;
    createLong(low: number, high: number): Long;
  }

  declare var flatbuffers: {
    Long: Class<Long>,
    Builder: Class<Builder>,
    ByteBuffer: Class<ByteBuffer>
  };
}

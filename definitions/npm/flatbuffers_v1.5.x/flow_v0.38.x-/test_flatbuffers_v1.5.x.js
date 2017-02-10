// @flow
import fb from 'flatbuffers';

/**
 * Long
 */

let la = new fb.Long(1, 2);
// $ExpectError
new fb.Long();
// $ExpectError
new fb.Long('s', 't');
// $ExpectError
new fb.Long(1);

let lb = fb.Long.create(1, 2);
// $ExpectError 
new fb.Long.create();
// $ExpectError
new fb.Long.create('s', 't');

la.toFloat64();

la.equals(lb);
// $ExpectError
la.equals(10);


/**
 * ByteBuffer
 */
const arr = new Uint8Array(10);
let bb = new fb.ByteBuffer(arr);
// $ExpectError arg is required
new fb.ByteBuffer();
// $ExpectError arg must be number
new fb.ByteBuffer('s');

fb.ByteBuffer.allocate(10);
// $ExpectError
fb.ByteBuffer.allocate();
// $ExpectError
fb.ByteBuffer.allocate('s');

bb.bytes();
bb.position();

bb.setPosition(1);
// $ExpectError
bb.setPosition();
// $ExpectError
bb.setPosition('s');

bb.capacity();

bb.createLong(1, 2);
// $ExpectError 
bb.createLong();
// $ExpectError
bb.createLong('s', 't');

/* READ */
bb.readInt8(1);
// $ExpectError
bb.readInt8();
// $ExpectError
bb.readInt8('s');

bb.readUint8(1);
// $ExpectError
bb.readUint8();
// $ExpectError
bb.readUint8('s');

bb.readInt16(1);
// $ExpectError
bb.readInt16();
// $ExpectError
bb.readInt16('s');

bb.readUint16(1);
// $ExpectError
bb.readUint16();
// $ExpectError
bb.readUint16('s');

bb.readInt32(1);
// $ExpectError
bb.readInt32();
// $ExpectError
bb.readInt32('s');

bb.readUint32(1);
// $ExpectError
bb.readUint32();
// $ExpectError
bb.readUint32('s');

bb.readInt64(1);
// $ExpectError
bb.readInt64();
// $ExpectError
bb.readInt64('s');

bb.readUint64(1);
// $ExpectError
bb.readUint64();
// $ExpectError
bb.readUint64('s');

bb.readFloat32(1);
// $ExpectError
bb.readFloat32();
// $ExpectError
bb.readFloat32('s');

bb.readFloat64(1);
// $ExpectError
bb.readFloat64();
// $ExpectError
bb.readFloat64('s');

/* WRITE */
bb.writeInt8(0, 10);
// $ExpectError
bb.writeInt8(0);
// $ExpectError
bb.writeInt8('s', 't');

bb.writeInt16(0, 10);
// $ExpectError
bb.writeInt16(0);
// $ExpectError
bb.writeInt16('s', 't');

bb.writeInt32(0, 10);
// $ExpectError
bb.writeInt32(0);
// $ExpectError
bb.writeInt32('s', 't');

bb.writeInt64(0, la);
// $ExpectError
bb.writeInt64(0);
// $ExpectError
bb.writeInt64('s', 't');

bb.writeFloat32(0, 10);
// $ExpectError
bb.writeFloat32(0);
// $ExpectError
bb.writeFloat32('s', 't');

bb.writeFloat64(0, 10);
// $ExpectError
bb.writeFloat64(0);
// $ExpectError
bb.writeFloat64('s', 't');

/**
 * Builder
 */
let b = new fb.Builder();
new fb.Builder(0);
// $ExpectError
new fb.Builder('s');

fb.Builder.growByteBuffer(bb);
// $ExpectError
fb.Builder.growByteBuffer();
// $ExpectError
fb.Builder.growByteBuffer(0);
// $ExpectError
fb.Builder.growByteBuffer('s');

b.forceDefaults(true);
// $ExpectError
b.forceDefaults(0);
// $ExpectError
b.forceDefaults('str');

b.dataBuffer();
b.asUint8Array();

b.prep(10, 5);
// $ExpectError
b.prep();
// $ExpectError
b.prep(10);
// $ExpectError
b.prep('s', 5);
// $ExpectError
b.prep(10, 't');

b.pad(1);
// $ExpectError
b.pad();
// $ExpectError
b.pad('s');

/* WRITE */
b.writeInt8(10);
// $ExpectError
b.writeInt8();
// $ExpectError
b.writeInt8('s');

b.writeInt16(10);
// $ExpectError
b.writeInt16();
// $ExpectError
b.writeInt16('s');

b.writeInt32(10);
// $ExpectError
b.writeInt32();
// $ExpectError
b.writeInt32('s');

b.writeInt64(la);
// $ExpectError
b.writeInt64();
// $ExpectError
b.writeInt64('s');

b.writeFloat32(10);
// $ExpectError
b.writeFloat32();
// $ExpectError
b.writeFloat32('s');

b.writeFloat64(10);
// $ExpectError
b.writeFloat64();
// $ExpectError
b.writeFloat64('s');

/* ADD */
b.addInt8(1)
// $ExpectError
b.addInt8()
// $ExpectError
b.addInt8('s')

b.addInt16(1)
// $ExpectError
b.addInt16()
// $ExpectError
b.addInt16('s')

b.addInt32(1)
// $ExpectError
b.addInt32()
// $ExpectError
b.addInt32('s')

b.addInt64(la)
// $ExpectError
b.addInt64()
// $ExpectError
b.addInt64(0)
// $ExpectError
b.addInt64('s')

b.addFloat32(1)
// $ExpectError
b.addFloat32()
// $ExpectError
b.addFloat32('s')

b.addFloat64(1)
// $ExpectError
b.addFloat64()
// $ExpectError
b.addFloat64('s')

/* ADDFIELD */
b.addFieldInt8(0, 1, 2);
// $ExpectError
b.addFieldInt8();
// $ExpectError
b.addFieldInt8(0, 1);
// $ExpectError
b.addFieldInt8('s', 1, 2);
// $ExpectError
b.addFieldInt8(0, 't', 2);
// $ExpectError
b.addFieldInt8(0, 1, 'r');

b.addFieldInt16(0, 1, 2);
// $ExpectError
b.addFieldInt16();
// $ExpectError
b.addFieldInt16(0, 1);
// $ExpectError
b.addFieldInt16('s', 1, 2);
// $ExpectError
b.addFieldInt16(0, 't', 2);
// $ExpectError
b.addFieldInt16(0, 1, 'r');

b.addFieldInt32(0, 1, 2);
// $ExpectError
b.addFieldInt32();
// $ExpectError
b.addFieldInt32(0, 1);
// $ExpectError
b.addFieldInt32('s', 1, 2);
// $ExpectError
b.addFieldInt32(0, 't', 2);
// $ExpectError
b.addFieldInt32(0, 1, 'r');

b.addFieldInt64(0, la, lb);
// $ExpectError
b.addFieldInt64();
// $ExpectError
b.addFieldInt64(0, la);
// $ExpectError
b.addFieldInt64('s', la, lb);
// $ExpectError
b.addFieldInt64(0, 't', lb);
// $ExpectError
b.addFieldInt64(0, la, 'r');

b.addFieldFloat32(0, 1, 2);
// $ExpectError
b.addFieldFloat32();
// $ExpectError
b.addFieldFloat32(0, 1);
// $ExpectError
b.addFieldFloat32('s', 1, 2);
// $ExpectError
b.addFieldFloat32(0, 't', 2);
// $ExpectError
b.addFieldFloat32(0, 1, 'r');

b.addFieldFloat64(0, 1, 2);
// $ExpectError
b.addFieldFloat64();
// $ExpectError
b.addFieldFloat64(0, 1);
// $ExpectError
b.addFieldFloat64('s', 1, 2);
// $ExpectError
b.addFieldFloat64(0, 't', 2);
// $ExpectError
b.addFieldFloat64(0, 1, 'r');

b.addFieldOffset(0, 1, 2);
// $ExpectError
b.addFieldOffset();
// $ExpectError
b.addFieldOffset(0, 1);
// $ExpectError
b.addFieldOffset('s', 1, 2);
// $ExpectError
b.addFieldOffset(0, 't', 2);
// $ExpectError
b.addFieldOffset(0, 1, 'r');

b.addFieldStruct(0, 1, 2);
// $ExpectError
b.addFieldStruct();
// $ExpectError
b.addFieldStruct(0, 1);
// $ExpectError
b.addFieldStruct('s', 1, 2);
// $ExpectError
b.addFieldStruct(0, 't', 2);
// $ExpectError
b.addFieldStruct(0, 1, 'r');

b.nested(0);
// $ExpectError
b.nested();
// $ExpectError
b.nested('s');

b.notNested();

b.slot(0);
// $ExpectError
b.slot();
// $ExpectError
b.slot('s');

b.offset();

b.addOffset(0);
// $ExpectError
b.addOffset();
// $ExpectError
b.addOffset('s');

b.startObject(10);
// $ExpectError
b.startObject();
// $ExpectError
b.startObject('s');

b.endObject();

b.finish(0);
b.finish(0, 'str');
// $ExpectError
b.finish();
// $ExpectError
b.finish('s');
// $ExpectError
b.finish('s', 0);

b.requiredField(0, 10);
// $ExpectError
b.requiredField(0);
// $ExpectError
b.requiredField('s', 10);
// $ExpectError
b.requiredField(0, 't');

b.startVector(10, 1, 5);
// $ExpectError
b.startVector();
// $ExpectError
b.startVector(10);
// $ExpectError
b.startVector(10, 1);
// $ExpectError
b.startVector('s', 1, 5);
// $ExpectError
b.startVector(10, 't', 5);
// $ExpectError
b.startVector(10, 1, 'r');

b.endVector();

b.createString('str');
b.createString(arr);
// $ExpectError 
b.createString();
// $ExpectError 
b.createString(0);

b.createLong(1, 2);
// $ExpectError 
b.createLong();
// $ExpectError
b.createLong('s', 't');

/**
 * flatbuffers
 */
new fb.flatbuffers.Long(1, 2);
new fb.flatbuffers.ByteBuffer(arr);
new fb.flatbuffers.Builder();

// @flow
import fb from "flatbuffers";

/**
 * Long
 */

let la = new fb.Long(1, 2);
// $FlowExpectedError
new fb.Long();
// $FlowExpectedError
new fb.Long("s", "t");
// $FlowExpectedError
new fb.Long(1);

let lb = fb.Long.create(1, 2);
// $FlowExpectedError
new fb.Long.create();
// $FlowExpectedError
new fb.Long.create("s", "t");

la.toFloat64();

la.equals(lb);
// $FlowExpectedError
la.equals(10);

/**
 * ByteBuffer
 */
const arr = new Uint8Array(10);
let bb = new fb.ByteBuffer(arr);
// $FlowExpectedError arg is required
new fb.ByteBuffer();
// $FlowExpectedError arg must be number
new fb.ByteBuffer("s");

fb.ByteBuffer.allocate(10);
// $FlowExpectedError
fb.ByteBuffer.allocate();
// $FlowExpectedError
fb.ByteBuffer.allocate("s");

bb.bytes();
bb.position();

bb.setPosition(1);
// $FlowExpectedError
bb.setPosition();
// $FlowExpectedError
bb.setPosition("s");

bb.capacity();

bb.createLong(1, 2);
// $FlowExpectedError
bb.createLong();
// $FlowExpectedError
bb.createLong("s", "t");

/* READ */
bb.readInt8(1);
// $FlowExpectedError
bb.readInt8();
// $FlowExpectedError
bb.readInt8("s");

bb.readUint8(1);
// $FlowExpectedError
bb.readUint8();
// $FlowExpectedError
bb.readUint8("s");

bb.readInt16(1);
// $FlowExpectedError
bb.readInt16();
// $FlowExpectedError
bb.readInt16("s");

bb.readUint16(1);
// $FlowExpectedError
bb.readUint16();
// $FlowExpectedError
bb.readUint16("s");

bb.readInt32(1);
// $FlowExpectedError
bb.readInt32();
// $FlowExpectedError
bb.readInt32("s");

bb.readUint32(1);
// $FlowExpectedError
bb.readUint32();
// $FlowExpectedError
bb.readUint32("s");

bb.readInt64(1);
// $FlowExpectedError
bb.readInt64();
// $FlowExpectedError
bb.readInt64("s");

bb.readUint64(1);
// $FlowExpectedError
bb.readUint64();
// $FlowExpectedError
bb.readUint64("s");

bb.readFloat32(1);
// $FlowExpectedError
bb.readFloat32();
// $FlowExpectedError
bb.readFloat32("s");

bb.readFloat64(1);
// $FlowExpectedError
bb.readFloat64();
// $FlowExpectedError
bb.readFloat64("s");

/* WRITE */
bb.writeInt8(0, 10);
// $FlowExpectedError
bb.writeInt8(0);
// $FlowExpectedError
bb.writeInt8("s", "t");

bb.writeInt16(0, 10);
// $FlowExpectedError
bb.writeInt16(0);
// $FlowExpectedError
bb.writeInt16("s", "t");

bb.writeInt32(0, 10);
// $FlowExpectedError
bb.writeInt32(0);
// $FlowExpectedError
bb.writeInt32("s", "t");

bb.writeInt64(0, la);
// $FlowExpectedError
bb.writeInt64(0);
// $FlowExpectedError
bb.writeInt64("s", "t");

bb.writeFloat32(0, 10);
// $FlowExpectedError
bb.writeFloat32(0);
// $FlowExpectedError
bb.writeFloat32("s", "t");

bb.writeFloat64(0, 10);
// $FlowExpectedError
bb.writeFloat64(0);
// $FlowExpectedError
bb.writeFloat64("s", "t");

/**
 * Builder
 */
let b = new fb.Builder();
new fb.Builder(0);
// $FlowExpectedError
new fb.Builder("s");

fb.Builder.growByteBuffer(bb);
// $FlowExpectedError
fb.Builder.growByteBuffer();
// $FlowExpectedError
fb.Builder.growByteBuffer(0);
// $FlowExpectedError
fb.Builder.growByteBuffer("s");

b.forceDefaults(true);
// $FlowExpectedError
b.forceDefaults(0);
// $FlowExpectedError
b.forceDefaults("str");

b.dataBuffer();
b.asUint8Array();

b.prep(10, 5);
// $FlowExpectedError
b.prep();
// $FlowExpectedError
b.prep(10);
// $FlowExpectedError
b.prep("s", 5);
// $FlowExpectedError
b.prep(10, "t");

b.pad(1);
// $FlowExpectedError
b.pad();
// $FlowExpectedError
b.pad("s");

/* WRITE */
b.writeInt8(10);
// $FlowExpectedError
b.writeInt8();
// $FlowExpectedError
b.writeInt8("s");

b.writeInt16(10);
// $FlowExpectedError
b.writeInt16();
// $FlowExpectedError
b.writeInt16("s");

b.writeInt32(10);
// $FlowExpectedError
b.writeInt32();
// $FlowExpectedError
b.writeInt32("s");

b.writeInt64(la);
// $FlowExpectedError
b.writeInt64();
// $FlowExpectedError
b.writeInt64("s");

b.writeFloat32(10);
// $FlowExpectedError
b.writeFloat32();
// $FlowExpectedError
b.writeFloat32("s");

b.writeFloat64(10);
// $FlowExpectedError
b.writeFloat64();
// $FlowExpectedError
b.writeFloat64("s");

/* ADD */
b.addInt8(1);
// $FlowExpectedError
b.addInt8();
// $FlowExpectedError
b.addInt8("s");

b.addInt16(1);
// $FlowExpectedError
b.addInt16();
// $FlowExpectedError
b.addInt16("s");

b.addInt32(1);
// $FlowExpectedError
b.addInt32();
// $FlowExpectedError
b.addInt32("s");

b.addInt64(la);
// $FlowExpectedError
b.addInt64();
// $FlowExpectedError
b.addInt64(0);
// $FlowExpectedError
b.addInt64("s");

b.addFloat32(1);
// $FlowExpectedError
b.addFloat32();
// $FlowExpectedError
b.addFloat32("s");

b.addFloat64(1);
// $FlowExpectedError
b.addFloat64();
// $FlowExpectedError
b.addFloat64("s");

/* ADDFIELD */
b.addFieldInt8(0, 1, 2);
// $FlowExpectedError
b.addFieldInt8();
// $FlowExpectedError
b.addFieldInt8(0, 1);
// $FlowExpectedError
b.addFieldInt8("s", 1, 2);
// $FlowExpectedError
b.addFieldInt8(0, "t", 2);
// $FlowExpectedError
b.addFieldInt8(0, 1, "r");

b.addFieldInt16(0, 1, 2);
// $FlowExpectedError
b.addFieldInt16();
// $FlowExpectedError
b.addFieldInt16(0, 1);
// $FlowExpectedError
b.addFieldInt16("s", 1, 2);
// $FlowExpectedError
b.addFieldInt16(0, "t", 2);
// $FlowExpectedError
b.addFieldInt16(0, 1, "r");

b.addFieldInt32(0, 1, 2);
// $FlowExpectedError
b.addFieldInt32();
// $FlowExpectedError
b.addFieldInt32(0, 1);
// $FlowExpectedError
b.addFieldInt32("s", 1, 2);
// $FlowExpectedError
b.addFieldInt32(0, "t", 2);
// $FlowExpectedError
b.addFieldInt32(0, 1, "r");

b.addFieldInt64(0, la, lb);
// $FlowExpectedError
b.addFieldInt64();
// $FlowExpectedError
b.addFieldInt64(0, la);
// $FlowExpectedError
b.addFieldInt64("s", la, lb);
// $FlowExpectedError
b.addFieldInt64(0, "t", lb);
// $FlowExpectedError
b.addFieldInt64(0, la, "r");

b.addFieldFloat32(0, 1, 2);
// $FlowExpectedError
b.addFieldFloat32();
// $FlowExpectedError
b.addFieldFloat32(0, 1);
// $FlowExpectedError
b.addFieldFloat32("s", 1, 2);
// $FlowExpectedError
b.addFieldFloat32(0, "t", 2);
// $FlowExpectedError
b.addFieldFloat32(0, 1, "r");

b.addFieldFloat64(0, 1, 2);
// $FlowExpectedError
b.addFieldFloat64();
// $FlowExpectedError
b.addFieldFloat64(0, 1);
// $FlowExpectedError
b.addFieldFloat64("s", 1, 2);
// $FlowExpectedError
b.addFieldFloat64(0, "t", 2);
// $FlowExpectedError
b.addFieldFloat64(0, 1, "r");

b.addFieldOffset(0, 1, 2);
// $FlowExpectedError
b.addFieldOffset();
// $FlowExpectedError
b.addFieldOffset(0, 1);
// $FlowExpectedError
b.addFieldOffset("s", 1, 2);
// $FlowExpectedError
b.addFieldOffset(0, "t", 2);
// $FlowExpectedError
b.addFieldOffset(0, 1, "r");

b.addFieldStruct(0, 1, 2);
// $FlowExpectedError
b.addFieldStruct();
// $FlowExpectedError
b.addFieldStruct(0, 1);
// $FlowExpectedError
b.addFieldStruct("s", 1, 2);
// $FlowExpectedError
b.addFieldStruct(0, "t", 2);
// $FlowExpectedError
b.addFieldStruct(0, 1, "r");

b.nested(0);
// $FlowExpectedError
b.nested();
// $FlowExpectedError
b.nested("s");

b.notNested();

b.slot(0);
// $FlowExpectedError
b.slot();
// $FlowExpectedError
b.slot("s");

b.offset();

b.addOffset(0);
// $FlowExpectedError
b.addOffset();
// $FlowExpectedError
b.addOffset("s");

b.startObject(10);
// $FlowExpectedError
b.startObject();
// $FlowExpectedError
b.startObject("s");

b.endObject();

b.finish(0);
b.finish(0, "str");
// $FlowExpectedError
b.finish();
// $FlowExpectedError
b.finish("s");
// $FlowExpectedError
b.finish("s", 0);

b.requiredField(0, 10);
// $FlowExpectedError
b.requiredField(0);
// $FlowExpectedError
b.requiredField("s", 10);
// $FlowExpectedError
b.requiredField(0, "t");

b.startVector(10, 1, 5);
// $FlowExpectedError
b.startVector();
// $FlowExpectedError
b.startVector(10);
// $FlowExpectedError
b.startVector(10, 1);
// $FlowExpectedError
b.startVector("s", 1, 5);
// $FlowExpectedError
b.startVector(10, "t", 5);
// $FlowExpectedError
b.startVector(10, 1, "r");

b.endVector();

b.createString("str");
b.createString(arr);
// $FlowExpectedError
b.createString();
// $FlowExpectedError
b.createString(0);

b.createLong(1, 2);
// $FlowExpectedError
b.createLong();
// $FlowExpectedError
b.createLong("s", "t");

/**
 * flatbuffers
 */
new fb.flatbuffers.Long(1, 2);
new fb.flatbuffers.ByteBuffer(arr);
new fb.flatbuffers.Builder();

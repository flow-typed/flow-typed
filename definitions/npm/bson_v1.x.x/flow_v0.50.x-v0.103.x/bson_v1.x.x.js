declare class bson$ObjectId {
  /**
   * Create a new ObjectID instance
   * @param {(string|number|bson$ObjectId)} id Can be a 24 byte hex string, 12 byte binary string or a Number.
   */
  constructor(id?: string | number | bson$ObjectId): this;

  /** The generation time of this ObjectID instance */
  generationTime: number;

  /**
   * Creates an ObjectID from a hex string representation of an ObjectID.
   * @param {string} hexString create a ObjectID from a passed in 24 byte hexstring.
   * @return {ObjectID} return the created ObjectID
   */
  static createFromHexString(hexString: string): bson$ObjectId;

  /**
   * Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
   * @param {number} time an integer number representing a number of seconds.
   * @return {ObjectID} return the created ObjectID
   */
  static createFromTime(time: number): bson$ObjectId;

  /**
   * Checks if a value is a valid bson ObjectID
   *
   * @return {boolean} return true if the value is a valid bson ObjectID, return false otherwise.
   */
  static isValid(id?: string | number | bson$ObjectId | null | void): boolean;

  /**
   * Compares the equality of this ObjectID with `otherID`.
   * @param {object} otherID ObjectID instance to compare against.
   * @return {boolean} the result of comparing two ObjectID's
   */
  equals(otherID: bson$ObjectId): boolean;

  /**
   * Generate a 12 byte id string used in ObjectID's
   * @param {number} time optional parameter allowing to pass in a second based timestamp.
   * @return {string} return the 12 byte id binary string.
   */
  generate(time?: number): string;

  /**
   * Returns the generation date (accurate up to the second) that this ID was generated.
   * @return {date} the generation date
   */
  getTimestamp(): Date;

  /**
   * Return the ObjectID id as a 24 byte hex string representation
   * @return {string} return the 24 byte hex string representation.
   */
  toHexString(): string;

  toString(): string;
  inspect(): string;
  toJSON(): string;
}

declare class bson$Binary {
  constructor(buffer: Buffer, subType: number): this;
  put(byte_value: string): void;
  write(string: Buffer | string, offset: number): void;
  read(position: number, length: number): Buffer;
  value(asRaw?: boolean): string;
  length(): number;
  toJSON(): mixed;
  toString(format?: any): string;
  static BUFFER_SIZE: 256;
  static SUBTYPE_DEFAULT: 0;
  static SUBTYPE_FUNCTION: 1;
  static SUBTYPE_BYTE_ARRAY: 2;
  static SUBTYPE_UUID_OLD: 3;
  static SUBTYPE_UUID: 4;
  static SUBTYPE_MD5: 5;
  static SUBTYPE_USER_DEFINED: 128;
}

declare class bson$Code {
  constructor(code: string | Function, scope?: Object): this;
  toJSON(): { scope: ?Object, code: string | Function };
}

declare class bson$DBRef {
  constructor(namespace: string, oid: bson$ObjectId, db?: string): this;
  toJSON(): { $ref: string, $id: bson$ObjectId, $db: string };
}

declare class bson$Decimal128 {
  constructor(bytes: Buffer): this;
  static fromString(string: string): bson$Decimal128;
  toString(): string;
  toJSON(): { $numberDecimal: string };
}

declare class bson$Double {
  constructor(value: number): this;
  valueOf(): number;
  toJSON(): number;
}

declare class bson$Int32 {
  constructor(value: number): this;
  valueOf(): number;
  toJSON(): number;
}

declare class bson$Long {
  constructor(low: number, high: number): this;
  toInt(): number;
  toNumber(): number;
  toJSON(): string;
  toString(): string;
  getHighBits(): number;
  getLowBits(): number;
  getLowBitsUnsigned(): number;
  getNumBitsAbs(): number;
  isZero(): boolean;
  isNegative(): boolean;
  isOdd(): boolean;
  equals(other: bson$Long): boolean;
  notEquals(other: bson$Long): boolean;
  lessThan(other: bson$Long): boolean;
  lessThanOrEqual(other: bson$Long): boolean;
  greaterThan(other: bson$Long): boolean;
  greaterThanOrEqual(other: bson$Long): boolean;
  compare(other: bson$Long): 1 | 0 | -1;
  negate(): bson$Long;
  add(other: bson$Long): bson$Long;
  subtract(other: bson$Long): bson$Long;
  multiply(other: bson$Long): bson$Long;
  div(other: bson$Long): bson$Long;
  modulo(other: bson$Long): bson$Long;
  not(): bson$Long;
  and(other: bson$Long): bson$Long;
  or(other: bson$Long): bson$Long;
  xor(other: bson$Long): bson$Long;
  shiftLeft(numBits: number): bson$Long;
  shiftRight(numBits: number): bson$Long;
  shiftRightUnsigned(numBits: number): bson$Long;
  static fromInt(value: number): bson$Long;
  static fromNumber(value: number): bson$Long;
  static fromBits(lowBits: number, highBits: number): bson$Long;
  static fromString(str: string, opt_radix: number): bson$Long;
  static ZERO: bson$Long;
  static ONE: bson$Long;
  static NEG_ONE: bson$Long;
  static MAX_VALUE: bson$Long;
  static MIN_VALUE: bson$Long;
}

declare type bson$Map = Map<any, any>;

declare class bson$MaxKey {
  constructor(): this;
}

declare class bson$MinKey {
  constructor(): this;
}

declare class bson$BSONRegExp {
  constructor(pattern?: string, options?: string): this;
}

declare class bson$Symbol {
  constructor(value: string): this;
  valueOf(): string;
  toString(): string;
  inspect(): string;
  toJSON(): string;
}

declare class bson$Timestamp {
  constructor(low: number, high: number): this;
  toInt(): number;
  toNumber(): number;
  toJSON(): string;
  toString(): string;
  getHighBits(): number;
  getLowBits(): number;
  getLowBitsUnsigned(): number;
  getNumBitsAbs(): number;
  isZero(): boolean;
  isNegative(): boolean;
  isOdd(): boolean;
  equals(other: bson$Timestamp): boolean;
  notEquals(other: bson$Timestamp): boolean;
  lessThan(other: bson$Timestamp): boolean;
  lessThanOrEqual(other: bson$Timestamp): boolean;
  greaterThan(other: bson$Timestamp): boolean;
  greaterThanOrEqual(other: bson$Timestamp): boolean;
  compare(other: bson$Timestamp): 1 | 0 | -1;
  negate(): bson$Timestamp;
  add(other: bson$Timestamp): bson$Timestamp;
  subtract(other: bson$Timestamp): bson$Timestamp;
  multiply(other: bson$Timestamp): bson$Timestamp;
  div(other: bson$Timestamp): bson$Timestamp;
  modulo(other: bson$Timestamp): bson$Timestamp;
  not(): bson$Timestamp;
  and(other: bson$Timestamp): bson$Timestamp;
  or(other: bson$Timestamp): bson$Timestamp;
  xor(other: bson$Timestamp): bson$Timestamp;
  shiftLeft(numBits: number): bson$Timestamp;
  shiftRight(numBits: number): bson$Timestamp;
  shiftRightUnsigned(numBits: number): bson$Timestamp;
  static fromInt(value: number): bson$Timestamp;
  static fromNumber(value: number): bson$Timestamp;
  static fromBits(lowBits: number, highBits: number): bson$Timestamp;
  static fromString(str: string, opt_radix: number): bson$Timestamp;
  static ZERO: bson$Timestamp;
  static ONE: bson$Timestamp;
  static NEG_ONE: bson$Timestamp;
  static MAX_VALUE: bson$Timestamp;
  static MIN_VALUE: bson$Timestamp;
}

declare module "bson" {
  declare export type BsonBinary = bson$Binary;
  declare export type BsonCode = bson$Code;
  declare export type BsonDBRef = bson$DBRef;
  declare export type BsonDecimal128 = bson$Decimal128;
  declare export type BsonDouble = bson$Double;
  declare export type BsonInt32 = bson$Int32;
  declare export type BsonLong = bson$Long;
  declare export type BsonMap = bson$Map;
  declare export type BsonMaxKey = bson$MaxKey;
  declare export type BsonMinKey = bson$MinKey;
  declare export type BsonObjectId = bson$ObjectId;
  declare export type BsonBSONRegExp = bson$BSONRegExp;
  declare export type BsonSymbol = bson$Symbol;
  declare export type BsonTimestamp = bson$Timestamp;

  declare class bson$BSON {
    serialize(object: Object, options?: Object): Buffer;
    serializeWithBufferAndIndex(
      object: Object,
      finalBuffer: Buffer,
      options?: Object
    ): number;
    deserialize(buffer: Buffer, options?: Object): Object;
    calculateObjectSize(object: Object, options?: Object): number;
    deserializeStream(
      data: Buffer,
      startIndex: number,
      numberOfDocuments: number,
      documents: Array<Object>,
      docStartIndex: number,
      options?: Object
    ): number;
  }

  declare export default typeof bson$BSON

  declare export var Binary: Class<bson$Binary>;
  declare export var Code: Class<bson$Code>;
  declare export var DBRef: Class<bson$DBRef>;
  declare export var Decimal128: Class<bson$Decimal128>;
  declare export var Double: Class<bson$Double>;
  declare export var Int32: Class<bson$Int32>;
  declare export var Long: Class<bson$Long>;
  declare export var Map: bson$Map;
  declare export var MaxKey: Class<bson$MaxKey>;
  declare export var MinKey: Class<bson$MinKey>;
  declare export var ObjectId: Class<bson$ObjectId>;
  declare export var ObjectID: Class<bson$ObjectId>;
  declare export var BSONRegExp: Class<bson$BSONRegExp>;
  declare export var Symbol: Class<bson$Symbol>;
  declare export var Timestamp: Class<bson$Timestamp>;

  declare export var BSON_INT32_MAX: 0x7fffffff;
  declare export var BSON_INT32_MIN: -0x80000000;
  declare export var BSON_INT64_MAX: number;
  declare export var BSON_INT64_MIN: number;
  declare export var JS_INT_MAX: 0x20000000000000;
  declare export var JS_INT_MIN: -0x200000000000;

  declare export var BSON_DATA_NUMBER: 1;
  declare export var BSON_DATA_STRING: 2;
  declare export var BSON_DATA_OBJECT: 3;
  declare export var BSON_DATA_ARRAY: 4;
  declare export var BSON_DATA_BINARY: 5;
  declare export var BSON_DATA_OID: 7;
  declare export var BSON_DATA_BOOLEAN: 8;
  declare export var BSON_DATA_DATE: 9;
  declare export var BSON_DATA_NULL: 10;
  declare export var BSON_DATA_REGEXP: 11;
  declare export var BSON_DATA_CODE: 13;
  declare export var BSON_DATA_SYMBOL: 14;
  declare export var BSON_DATA_CODE_W_SCOPE: 15;
  declare export var BSON_DATA_INT: 16;
  declare export var BSON_DATA_TIMESTAMP: 17;
  declare export var BSON_DATA_LONG: 18;
  declare export var BSON_DATA_MIN_KEY: 0xff;
  declare export var BSON_DATA_MAX_KEY: 0x7f;
  declare export var BSON_BINARY_SUBTYPE_DEFAULT: 0;
  declare export var BSON_BINARY_SUBTYPE_FUNCTION: 1;
  declare export var BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2;
  declare export var BSON_BINARY_SUBTYPE_UUID: 3;
  declare export var BSON_BINARY_SUBTYPE_MD5: 4;
  declare export var BSON_BINARY_SUBTYPE_USER_DEFINED: 128;
}

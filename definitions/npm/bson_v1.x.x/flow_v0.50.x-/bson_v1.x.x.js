declare class BSON$ObjectId {
  /**
   * Create a new ObjectID instance
   * @param {(string|number|BSON$ObjectId)} id Can be a 24 byte hex string, 12 byte binary string or a Number.
   */
  constructor(id?: string | number | BSON$ObjectId): this;

  /** The generation time of this ObjectID instance */
  generationTime: number;

  /**
   * Creates an ObjectID from a hex string representation of an ObjectID.
   * @param {string} hexString create a ObjectID from a passed in 24 byte hexstring.
   * @return {ObjectID} return the created ObjectID
   */
  static createFromHexString(hexString: string): BSON$ObjectId;

  /**
   * Creates an ObjectID from a second based number, with the rest of the ObjectID zeroed out. Used for comparisons or sorting the ObjectID.
   * @param {number} time an integer number representing a number of seconds.
   * @return {ObjectID} return the created ObjectID
   */
  static createFromTime(time: number): BSON$ObjectId;

  /**
   * Checks if a value is a valid bson ObjectID
   *
   * @return {boolean} return true if the value is a valid bson ObjectID, return false otherwise.
   */
  static isValid(id?: string | number | BSON$ObjectId | null | void): boolean;

  /**
   * Compares the equality of this ObjectID with `otherID`.
   * @param {object} otherID ObjectID instance to compare against.
   * @return {boolean} the result of comparing two ObjectID's
   */
  equals(otherID: BSON$ObjectId): boolean;

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

declare class BSON$Binary {
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

declare class BSON$Code {
  constructor(code: string | Function, scope?: Object): this;
  toJSON(): { scope: ?Object, code: string | Function };
}

declare class BSON$DBRef {
  constructor(namespace: string, oid: BSON$ObjectId, db?: string): this;
  toJSON(): { $ref: string, $id: BSON$ObjectId, $db: string };
}

declare class BSON$Decimal128 {
  constructor(bytes: Buffer): this;
  static fromString(string: string): BSON$Decimal128;
  toString(): string;
  toJSON(): { $numberDecimal: string };
}

declare class BSON$Double {
  constructor(value: number): this;
  valueOf(): number;
  toJSON(): number;
}

declare class BSON$Int32 {
  constructor(value: number): this;
  valueOf(): number;
  toJSON(): number;
}

declare class BSON$Long {
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
  equals(other: BSON$Long): boolean;
  notEquals(other: BSON$Long): boolean;
  lessThan(other: BSON$Long): boolean;
  lessThanOrEqual(other: BSON$Long): boolean;
  greaterThan(other: BSON$Long): boolean;
  greaterThanOrEqual(other: BSON$Long): boolean;
  compare(other: BSON$Long): 1 | 0 | -1;
  negate(): BSON$Long;
  add(other: BSON$Long): BSON$Long;
  subtract(other: BSON$Long): BSON$Long;
  multiply(other: BSON$Long): BSON$Long;
  div(other: BSON$Long): BSON$Long;
  modulo(other: BSON$Long): BSON$Long;
  not(): BSON$Long;
  and(other: BSON$Long): BSON$Long;
  or(other: BSON$Long): BSON$Long;
  xor(other: BSON$Long): BSON$Long;
  shiftLeft(numBits: number): BSON$Long;
  shiftRight(numBits: number): BSON$Long;
  shiftRightUnsigned(numBits: number): BSON$Long;
  static fromInt(value: number): BSON$Long;
  static fromNumber(value: number): BSON$Long;
  static fromBits(lowBits: number, highBits: number): BSON$Long;
  static fromString(str: string, opt_radix: number): BSON$Long;
  static ZERO: BSON$Long;
  static ONE: BSON$Long;
  static NEG_ONE: BSON$Long;
  static MAX_VALUE: BSON$Long;
  static MIN_VALUE: BSON$Long;
}

declare type BSON$Map = Map<any, any>;

declare class BSON$MaxKey {
  constructor(): this;
}

declare class BSON$MinKey {
  constructor(): this;
}

declare class BSON$BSONRegExp {
  constructor(pattern?: string, options?: string): this;
}

declare class BSON$Symbol {
  constructor(value: string): this;
  valueOf(): string;
  toString(): string;
  inspect(): string;
  toJSON(): string;
}

declare class BSON$Timestamp {
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
  equals(other: BSON$Timestamp): boolean;
  notEquals(other: BSON$Timestamp): boolean;
  lessThan(other: BSON$Timestamp): boolean;
  lessThanOrEqual(other: BSON$Timestamp): boolean;
  greaterThan(other: BSON$Timestamp): boolean;
  greaterThanOrEqual(other: BSON$Timestamp): boolean;
  compare(other: BSON$Timestamp): 1 | 0 | -1;
  negate(): BSON$Timestamp;
  add(other: BSON$Timestamp): BSON$Timestamp;
  subtract(other: BSON$Timestamp): BSON$Timestamp;
  multiply(other: BSON$Timestamp): BSON$Timestamp;
  div(other: BSON$Timestamp): BSON$Timestamp;
  modulo(other: BSON$Timestamp): BSON$Timestamp;
  not(): BSON$Timestamp;
  and(other: BSON$Timestamp): BSON$Timestamp;
  or(other: BSON$Timestamp): BSON$Timestamp;
  xor(other: BSON$Timestamp): BSON$Timestamp;
  shiftLeft(numBits: number): BSON$Timestamp;
  shiftRight(numBits: number): BSON$Timestamp;
  shiftRightUnsigned(numBits: number): BSON$Timestamp;
  static fromInt(value: number): BSON$Timestamp;
  static fromNumber(value: number): BSON$Timestamp;
  static fromBits(lowBits: number, highBits: number): BSON$Timestamp;
  static fromString(str: string, opt_radix: number): BSON$Timestamp;
  static ZERO: BSON$Timestamp;
  static ONE: BSON$Timestamp;
  static NEG_ONE: BSON$Timestamp;
  static MAX_VALUE: BSON$Timestamp;
  static MIN_VALUE: BSON$Timestamp;
}

declare module "bson" {
  declare export type BsonBinary = BSON$Binary;
  declare export type BsonCode = BSON$Code;
  declare export type BsonDBRef = BSON$DBRef;
  declare export type BsonDecimal128 = BSON$Decimal128;
  declare export type BsonDouble = BSON$Double;
  declare export type BsonInt32 = BSON$Int32;
  declare export type BsonLong = BSON$Long;
  declare export type BsonMap = BSON$Map;
  declare export type BsonMaxKey = BSON$MaxKey;
  declare export type BsonMinKey = BSON$MinKey;
  declare export type BsonObjectId = BSON$ObjectId;
  declare export type BsonBSONRegExp = BSON$BSONRegExp;
  declare export type BsonSymbol = BSON$Symbol;
  declare export type BsonTimestamp = BSON$Timestamp;

  declare module.exports: {
    Binary: Class<BSON$Binary>,
    Code: Class<BSON$Code>,
    DBRef: Class<BSON$DBRef>,
    Decimal128: Class<BSON$Decimal128>,
    Double: Class<BSON$Double>,
    Int32: Class<BSON$Int32>,
    Long: Class<BSON$Long>,
    Map: BSON$Map,
    MaxKey: Class<BSON$MaxKey>,
    MinKey: Class<BSON$MinKey>,
    ObjectId: Class<BSON$ObjectId>,
    ObjectID: Class<BSON$ObjectId>,
    BSONRegExp: Class<BSON$BSONRegExp>,
    Symbol: Class<BSON$Symbol>,
    Timestamp: Class<BSON$Timestamp>,

    // methods
    serialize(object: Object, options?: Object): Buffer,
    serializeWithBufferAndIndex(
      object: Object,
      finalBuffer: Buffer,
      options?: Object
    ): number,
    deserialize(buffer: Buffer, options?: Object): Object,
    calculateObjectSize(object: Object, options?: Object): number,
    deserializeStream(
      data: Buffer,
      startIndex: number,
      numberOfDocuments: number,
      documents: Array<Object>,
      docStartIndex: number,
      options?: Object
    ): number,

    // constants
    BSON_INT32_MAX: 0x7fffffff,
    BSON_INT32_MIN: -0x80000000,
    BSON_INT64_MAX: number,
    BSON_INT64_MIN: number,
    JS_INT_MAX: 0x20000000000000,
    JS_INT_MIN: -0x20000000000000,

    BSON_DATA_NUMBER: 1,
    BSON_DATA_STRING: 2,
    BSON_DATA_OBJECT: 3,
    BSON_DATA_ARRAY: 4,
    BSON_DATA_BINARY: 5,
    BSON_DATA_OID: 7,
    BSON_DATA_BOOLEAN: 8,
    BSON_DATA_DATE: 9,
    BSON_DATA_NULL: 10,
    BSON_DATA_REGEXP: 11,
    BSON_DATA_CODE: 13,
    BSON_DATA_SYMBOL: 14,
    BSON_DATA_CODE_W_SCOPE: 15,
    BSON_DATA_INT: 16,
    BSON_DATA_TIMESTAMP: 17,
    BSON_DATA_LONG: 18,
    BSON_DATA_MIN_KEY: 0xff,
    BSON_DATA_MAX_KEY: 0x7f,
    BSON_BINARY_SUBTYPE_DEFAULT: 0,
    BSON_BINARY_SUBTYPE_FUNCTION: 1,
    BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,
    BSON_BINARY_SUBTYPE_UUID: 3,
    BSON_BINARY_SUBTYPE_MD5: 4,
    BSON_BINARY_SUBTYPE_USER_DEFINED: 128
  };
}

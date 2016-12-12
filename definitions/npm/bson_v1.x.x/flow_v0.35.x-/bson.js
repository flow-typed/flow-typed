

declare module 'bson' {
					declare module.exports: undefined


}

declare module 'BSONPure' {
		declare export interface DeserializeOptions {
		evalFunctions?: boolean,
		cacheFunctions?: boolean,
		cacheFunctionsCrc32?: boolean,
		promoteBuffers?: boolean
	}

	declare export interface Binary {
		
	}

	declare export interface BinaryStatic {
		SUBTYPE_DEFAULT: number,
		SUBTYPE_FUNCTION: number,
		SUBTYPE_BYTE_ARRAY: number,
		SUBTYPE_UUID_OLD: number,
		SUBTYPE_UUID: number,
		SUBTYPE_MD5: number,
		SUBTYPE_USER_DEFINED: number,
		new (buffer: Buffer, subType?: number): Binary
	}

	declare export interface Code {
		
	}

	declare export interface CodeStatic {
		new (code: string | Function, scope?: any): Code
	}

	declare export interface DBRef {
		
	}

	declare export interface DBRefStatic {
		new (namespace: string, oid: ObjectID, db?: string): DBRef
	}

	declare export interface Double {
		
	}

	declare export interface DoubleStatic {
		new (value: number): Double
	}

	declare export interface Long {
		
	}

	declare export interface LongStatic {
		new (low: number, high: number): Long,
		fromInt(i: number): Long,
		fromNumber(n: number): Long,
		fromBits(lowBits: number, highBits: number): Long,
		fromString(s: string, opt_radix?: number): Long
	}

	declare export interface MaxKey {
		
	}

	declare export interface MaxKeyStatic {
		new (): MaxKey
	}

	declare export interface MinKey {
		
	}

	declare export interface MinKeyStatic {
		new (): MinKey
	}

	declare export interface ObjectID {
		
	}

	declare export interface ObjectIDStatic {
		new (id?: number | string | ObjectID): ObjectID,
		createPk(): ObjectID,
		createFromTime(time: number): ObjectID,
		createFromHexString(hexString: string): ObjectID,
		isValid(id: number | string | ObjectID): boolean
	}

	declare export interface BSONRegExp {
		
	}

	declare export interface BSONRegExpStatic {
		new (pattern: string, options: string): BSONRegExp
	}

	declare export interface Symbol {
		
	}

	declare export interface SymbolStatic {
		new (value: string): Symbol
	}

	declare export interface Timestamp {
		
	}

	declare export interface TimestampStatic {
		new (low: number, high: number): Timestamp,
		fromInt(i: number): Timestamp,
		fromNumber(n: number): Timestamp,
		fromBits(lowBits: number, highBits: number): Timestamp,
		fromString(s: string, opt_radix?: number): Timestamp
	}

		declare export class BSON  {
		serialize(
		object: any, checkKeys?: boolean, asBuffer?: boolean, serializeFunctions?: boolean
	): Buffer;
		deserialize(buffer: Buffer, options?: DeserializeOptions, isArray?: boolean): any
	}

	
}
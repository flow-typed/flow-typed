

declare module 'protobufjs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ProtoBuf' {
		declare export interface LongStatic {
		new (low?: number, high?: number, unsigned?: boolean): Long,
		MAX_UNSIGNED_VALUE: Long,
		MAX_VALUE: Long,
		MIN_VALUE: Long,
		NEG_ONE: Long,
		ONE: Long,
		UONE: Long,
		UZERO: Long,
		ZERO: Long,
		fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long,
		fromInt(value: number, unsigned?: boolean): Long,
		fromNumber(value: number, unsigned?: boolean): Long,
		fromString(str: string, unsigned?: boolean | number, radix?: number): Long,
		fromValue(val: Long | number | string): Long,
		isLong(obj: any): boolean
	}

	declare export interface Long {
		high: number,
		low: number,
		unsigned: boolean,
		add(other: Long | number | string): Long,
		and(other: Long | number | string): Long,
		compare(other: Long | number | string): number,
		div(divisor: Long | number | string): Long,
		equals(other: Long | number | string): boolean,
		getHighBits(): number,
		getHighBitsUnsigned(): number,
		getLowBits(): number,
		getLowBitsUnsigned(): number,
		getNumBitsAbs(): number,
		greaterThan(other: Long | number | string): boolean,
		greaterThanOrEqual(other: Long | number | string): boolean,
		isEven(): boolean,
		isNegative(): boolean,
		isOdd(): boolean,
		isPositive(): boolean,
		isZero(): boolean,
		lessThan(other: Long | number | string): boolean,
		lessThanOrEqual(other: Long | number | string): boolean,
		modulo(divisor: Long | number | string): Long,
		multiply(multiplier: Long | number | string): Long,
		negate(): Long,
		not(): Long,
		notEquals(other: Long | number | string): boolean,
		or(other: Long | number | string): Long,
		shiftLeft(numBits: number | Long): Long,
		shiftRight(numBits: number | Long): Long,
		shiftRightUnsigned(numBits: number | Long): Long,
		subtract(other: Long | number | string): Long,
		toInt(): number,
		toNumber(): number,
		toSigned(): Long,
		toString(radix?: number): string,
		toUnsigned(): Long,
		xor(other: Long | number | string): Long
	}

	declare export interface Builder {
		new (options?: {
		[key: string]: any
	}): ProtoBuilder,
		Message: Message,
		Service: Service,
		isValidMessage(def: {
		[key: string]: any
	}): boolean,
		isValidMessageField(def: {
		[key: string]: any
	}): boolean,
		isValidEnum(def: {
		[key: string]: any
	}): boolean,
		isValidService(def: {
		[key: string]: any
	}): boolean,
		isValidExtend(def: {
		[key: string]: any
	}): boolean
	}

	declare export interface Message {
		new (values?: {
		[key: string]: any
	}, var_args?: string[]): Message,
		$add(key: string, value: any, noAssert?: boolean): Message,
		$get<T>(key: string): T,
		$set(
		key: string | {
		[key: string]: any
	}, value?: any | boolean, noAssert?: boolean
	): void,
		add(key: string, value: any, noAssert?: boolean): Message,
		calculate(): number,
		encode(buffer?: ByteBuffer | boolean, noVerify?: boolean): ByteBuffer,
		encode64(): string,
		encodeAB(): ArrayBuffer,
		encodeNB(): Buffer,
		encodeHex(): string,
		encodeJSON(): string,
		encodeDelimited(buffer?: ByteBuffer | boolean, noVerify?: boolean): ByteBuffer,
		get<T>(key: string, noAssert?: boolean): T,
		set(
		key: string | {
		[key: string]: any
	}, value?: any | boolean, noAssert?: boolean
	): void,
		toArrayBuffer(): ArrayBuffer,
		toBase64(): string,
		toBuffer(): Buffer,
		toHex(): string,
		toRaw(binaryAsBase64?: boolean, longsAsStrings?: boolean): {
		[key: string]: any
	},
		toString(): string,
		[field: string]: any
	}

	declare export interface Service {
		new (rpcImpl?: Function): Service
	}

	declare export interface ProtoBuilder {
		ns: ReflectNamespace,
		ptr: ReflectNamespace,
		resolved: boolean,
		result: ProtoBuf,
		files: string[],
		importRoot: string,
		options: {
		[key: string]: any
	},
		syntax: string,
		reset(): void,
		define(pkg: string, options?: {
		[key: string]: any
	}): ProtoBuilder,
		create(defs?: {
		[key: string]: any
	}[]): ProtoBuilder,
		resolveAll(): void,
		build(path?: string | [string]): MetaMessage<Message>,
		build<T>(path?: string | [string]): MetaMessage<T>,
		lookup(path?: string): ReflectT
	}

	declare export interface ProtoBuf {
		[package: string]: {
		[key: string]: MetaMessage<Message> | any
	}
	}

	declare export interface MetaMessage<T> {
		new (values?: {
		[key: string]: any
	}, var_args?: string[]): T & Message,
		decode(
		buffer: ArrayBuffer | ByteBuffer | Buffer | string, length?: number | string, enc?: string
	): T & Message,
		decodeDelimited(buffer: ByteBuffer | ArrayBuffer | Buffer | string, enc?: string): T & Message,
		decode64(str: string): T & Message,
		decodeHex(str: string): T & Message,
		decodeJSON(str: string): T & Message
	}

	declare export interface DotProto {
		Parser: Parser,
		Tokenizer: Tokenizer
	}

	declare export interface Parser {
		new (proto: string): Parser,
		tn: Tokenizer,
		parse(): MetaProto,
		toString(): string
	}

	declare export interface Tokenizer {
		new (proto: string): Tokenizer,
		source: string,
		index: number,
		line: number,
		stack: string[],
		readingString: boolean,
		stringEndsWith: string,
		next(): string,
		peek(): string,
		toString(): string
	}

	declare export interface MetaProto {
		package: string,
		messages: ProtoMessage[],
		enums: ProtoEnum[],
		imports: string[],
		options: {
		[key: string]: any
	},
		services: ProtoService[]
	}

	declare export interface ProtoEnum {
		name: string,
		values: ProtoEnumValue[],
		options: {
		[key: string]: any
	}
	}

	declare export interface ProtoEnumValue {
		name: string,
		id: string
	}

	declare export interface ProtoField {
		rule: string,
		options: {
		[key: string]: any
	},
		type: string,
		name: string,
		id: number,
		oneof?: string
	}

	declare export interface ProtoMessage {
		name: string,
		isGroup?: boolean,
		fields: ProtoField[],
		enums: ProtoEnum[],
		messages: ProtoMessage[],
		options: {
		[key: string]: any
	},
		oneofs: {
		[key: string]: number[]
	}
	}

	declare export interface ProtoRpcService {
		request: string,
		response: string,
		options: {
		[key: string]: any
	}
	}

	declare export interface ProtoService {
		name: string,
		rpc: {
		[key: string]: ProtoRpcService
	},
		options: {
		[key: string]: any
	}
	}

	declare export interface Util {
		IS_NODE: boolean,
		fetch(path: string, callback?: (data: string) => any): string,
		toCamelCase(str: string): string,
		XHR(): XMLHttpRequest
	}

	declare export interface Reflect {
		T: ReflectT,
		Namespace: ReflectNamespace,
		Message: ReflectMessage,
		Enum: ReflectEnum,
		Extension: ReflectExtension,
		Service: ReflectService
	}

	declare export interface ReflectT {
		new (builder?: ProtoBuilder, parent?: ReflectT, name?: string): ReflectT,
		builder: ProtoBuilder,
		parent: ReflectT,
		name: string,
		fqn(): string,
		toString(includeClass?: boolean): string
	}

	declare export interface ReflectNamespace {
		new (
		builder?: ProtoBuilder, parent?: ReflectNamespace, name?: string, options?: {
		[key: string]: any
	}
	): ReflectNamespace,
		className: string,
		children: ReflectT[],
		options: {
		[key: string]: any
	},
		syntax: string,
		getChildren(type?: ReflectT): ReflectT[],
		addChild(child: ReflectT): void,
		getChild(nameOrId?: string | number): ReflectT,
		resolve(qn: string, excludeFields?: boolean): ReflectNamespace,
		build(): ProtoBuf,
		buildOpt(): {
		[key: string]: any
	},
		getOption(name?: string): any
	}

	declare export interface ReflectMessage {
		new (
		builder?: ProtoBuilder, parent?: ReflectNamespace, name?: string, options?: {
		[key: string]: any
	}, isGroup?: boolean
	): ReflectMessage,
		Field: ReflectField,
		ExtensionField: ReflectExtensionField,
		OneOf: ReflectOneOf,
		extensions: number[],
		clazz(): MetaMessage<Message>,
		isGroup: boolean,
		build(rebuild?: boolean): MetaMessage<Message> | any,
		build<T>(rebuild?: boolean): MetaMessage<T> | any,
		encode(message: Message, buffer: Buffer, noVerify?: boolean): Buffer,
		calculate(message: Message): number,
		decode(buffer: Buffer, length?: number, expectedGroupEndId?: number): Message
	}

	declare export interface ReflectEnum {
		new (
		builder?: ProtoBuilder, parent?: ReflectT, name?: string, options?: {
		[key: string]: any
	}
	): ReflectEnum,
		Value: ReflectValue,
		object: {
		[key: string]: number
	},
		build(): {
		[key: string]: any
	}
	}

	declare export interface ReflectExtension {
		new (
		builder?: ProtoBuilder, parent?: ReflectT, name?: string, field?: ReflectField
	): ReflectExtension,
		field: ReflectField
	}

	declare export interface ReflectService {
		new (): ReflectService,
		Method: ReflectMethod,
		RPCMethod: ReflectRPCMethod,
		clazz(): Function,
		build(rebuild?: boolean): Function | any
	}

	declare export interface ReflectField {
		new (
		builder: ProtoBuilder, message: ReflectMessage, rule: string, type: string, name: string, id: number, options: {
		[key: string]: any
	}, oneof: ReflectOneOf
	): ReflectField,
		className: string,
		required: boolean,
		repeated: boolean,
		type: string | WireTuple,
		resolvedType: ReflectT,
		id: number,
		options: {
		[key: string]: any
	},
		defaultValue: any,
		oneof: ReflectOneOf,
		originalName: string,
		build(): {
		[key: string]: any
	},
		mkLong(value: any, unsigned?: boolean): number,
		verifyValue(value: any, skipRepeated?: boolean): any,
		encode(value: any, buffer: Buffer): Buffer,
		encodeValue(value: any, buffer: Buffer): Buffer,
		calculate(value: any): number,
		calculateValue(value: any): number,
		decode(wireType: number, buffer: Buffer, skipRepeated?: boolean): any
	}

	declare export interface WireTuple {
		name: string,
		wireType: number
	}

	declare export interface ReflectExtensionField {
		new (
		builder: ProtoBuilder, message: ReflectMessage, rule: string, type: string, name: string, id: number, options: {
		[key: string]: any
	}
	): ReflectExtensionField,
		extension: ReflectExtension
	}

	declare export interface ReflectOneOf {
		new (builder?: ProtoBuilder, message?: ReflectMessage, name?: string): ReflectOneOf,
		fields: ReflectField[]
	}

	declare export interface ReflectValue {
		new (
		builder?: ProtoBuilder, enm?: ReflectEnum, name?: string, id?: number
	): ReflectValue,
		className: string,
		id: number
	}

	declare export interface ReflectMethod {
		new (
		builder?: ProtoBuilder, svc?: ReflectService, name?: string, options?: {
		[key: string]: any
	}
	): ReflectMethod,
		className: string,
		options: {
		[key: string]: any
	},
		buildOpt(): {
		[key: string]: any
	}
	}

	declare export interface ReflectRPCMethod {
		new (
		builder?: ProtoBuilder, svc?: ReflectService, name?: string, request?: string, response?: string, options?: {
		[key: string]: any
	}
	): ReflectRPCMethod,
		requestName: string,
		responseName: string,
		resolvedRequestType: ReflectMessage,
		resolvedResponseType: ReflectMessage
	}

	declare export function loadJson(
		json: string, builder?: ProtoBuilder | string | {
		
	}, filename?: string | {
		
	}
	): ProtoBuilder

	declare export function loadJsonFile(
		filename: string | {
		
	}, callback?: (error: any, builder: ProtoBuilder) => void, builder?: ProtoBuilder
	): ProtoBuilder

	declare export function loadProto(
		proto: string, builder?: ProtoBuilder | string | {
		
	}, filename?: string | {
		
	}
	): ProtoBuilder

	declare export function loadProtoFile(
		filePath: string | {
		
	}, callback?: (error: any, builder: ProtoBuilder) => void, builder?: ProtoBuilder
	): ProtoBuilder

	declare export function newBuilder(options?: {
		[key: string]: any
	}): ProtoBuilder

		
}

declare module 'protobufjs/dist/protobuf-light' {
					declare module.exports: undefined


}
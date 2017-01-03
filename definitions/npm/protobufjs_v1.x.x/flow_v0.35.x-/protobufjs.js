// @flow
/**
 * Flowtype definitions for protobufjs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$ProtoBuf: {
    loadJson: typeof ProtoBuf$loadJson,
    loadJsonFile: typeof ProtoBuf$loadJsonFile,
    loadProto: typeof ProtoBuf$loadProto,
    loadProtoFile: typeof ProtoBuf$loadProtoFile,
    newBuilder: typeof ProtoBuf$newBuilder,
}
declare var Builder: ProtoBuf$Builder;

declare var Long: ProtoBuf$LongStatic;

declare var DotProto: ProtoBuf$DotProto;

declare var Reflect: ProtoBuf$Reflect;

declare var Util: ProtoBuf$Util;

declare var convertFieldsToCamelCase: boolean;

declare export function ProtoBuf$loadJson(
    json: string,
    builder?: ProtoBuf$ProtoBuilder | string | {},
    filename?: string | {}): ProtoBuf$ProtoBuilder

declare export function ProtoBuf$loadJsonFile(
    filename: string | {},
    callback?: (error: any, builder: ProtoBuf$ProtoBuilder) => void,
    builder?: ProtoBuf$ProtoBuilder): ProtoBuf$ProtoBuilder

declare export function ProtoBuf$loadProto(
    proto: string,
    builder?: ProtoBuf$ProtoBuilder | string | {},
    filename?: string | {}): ProtoBuf$ProtoBuilder

declare export function ProtoBuf$loadProtoFile(
    filePath: string | {},
    callback?: (error: any, builder: ProtoBuf$ProtoBuilder) => void,
    builder?: ProtoBuf$ProtoBuilder): ProtoBuf$ProtoBuilder

declare export function ProtoBuf$newBuilder(options?: {
    [key: string]: any
}): ProtoBuf$ProtoBuilder

declare export interface ProtoBuf$LongStatic {
    new(low?: number, high?: number, unsigned?: boolean): ProtoBuf$Long,
    MAX_UNSIGNED_VALUE: ProtoBuf$Long,
        MAX_VALUE: ProtoBuf$Long,
        MIN_VALUE: ProtoBuf$Long,
        NEG_ONE: ProtoBuf$Long,
        ONE: ProtoBuf$Long,
        UONE: ProtoBuf$Long,
        UZERO: ProtoBuf$Long,
        ZERO: ProtoBuf$Long,
        fromBits(lowBits: number, highBits: number, unsigned?: boolean): ProtoBuf$Long,
        fromInt(value: number, unsigned?: boolean): ProtoBuf$Long,
        fromNumber(value: number, unsigned?: boolean): ProtoBuf$Long,
        fromString(str: string, unsigned?: boolean | number, radix?: number): ProtoBuf$Long,
        fromValue(val: ProtoBuf$Long | number | string): ProtoBuf$Long,
        isLong(obj: any): boolean
}

declare export interface ProtoBuf$Long {
    high: number,
        low: number,
        unsigned: boolean,
        add(other: ProtoBuf$Long | number | string): ProtoBuf$Long,
        and(other: ProtoBuf$Long | number | string): ProtoBuf$Long,
        compare(other: ProtoBuf$Long | number | string): number,
        div(divisor: ProtoBuf$Long | number | string): ProtoBuf$Long,
        equals(other: ProtoBuf$Long | number | string): boolean,
        getHighBits(): number,
        getHighBitsUnsigned(): number,
        getLowBits(): number,
        getLowBitsUnsigned(): number,
        getNumBitsAbs(): number,
        greaterThan(other: ProtoBuf$Long | number | string): boolean,
        greaterThanOrEqual(other: ProtoBuf$Long | number | string): boolean,
        isEven(): boolean,
        isNegative(): boolean,
        isOdd(): boolean,
        isPositive(): boolean,
        isZero(): boolean,
        lessThan(other: ProtoBuf$Long | number | string): boolean,
        lessThanOrEqual(other: ProtoBuf$Long | number | string): boolean,
        modulo(divisor: ProtoBuf$Long | number | string): ProtoBuf$Long,
        multiply(multiplier: ProtoBuf$Long | number | string): ProtoBuf$Long,
        negate(): ProtoBuf$Long,
        not(): ProtoBuf$Long,
        notEquals(other: ProtoBuf$Long | number | string): boolean,
        or(other: ProtoBuf$Long | number | string): ProtoBuf$Long,
        shiftLeft(numBits: number | ProtoBuf$Long): ProtoBuf$Long,
        shiftRight(numBits: number | ProtoBuf$Long): ProtoBuf$Long,
        shiftRightUnsigned(numBits: number | ProtoBuf$Long): ProtoBuf$Long,
        subtract(other: ProtoBuf$Long | number | string): ProtoBuf$Long,
        toInt(): number,
        toNumber(): number,
        toSigned(): ProtoBuf$Long,
        toString(radix?: number): string,
        toUnsigned(): ProtoBuf$Long,
        xor(other: ProtoBuf$Long | number | string): ProtoBuf$Long
}

declare export interface ProtoBuf$Builder {
    new(options?: {
        [key: string]: any
    }): ProtoBuf$ProtoBuilder,
    Message: ProtoBuf$Message,
        Service: ProtoBuf$Service,
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


/**
 * TODO: Confirm that message needs no further implementation
 */
declare export interface ProtoBuf$Message {
    new(values?: {
        [key: string]: any
    }, var_args?: string[]): ProtoBuf$Message,
    $add(key: string, value: any, noAssert?: boolean): ProtoBuf$Message,
        $get<T>(key: string): T,
        $set(
            key: string | {
                [key: string]: any
            },
            value?: any | boolean,
            noAssert?: boolean): void,
        add(key: string, value: any, noAssert?: boolean): ProtoBuf$Message,
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
            },
            value?: any | boolean,
            noAssert?: boolean): void,
        toArrayBuffer(): ArrayBuffer,
        toBase64(): string,
        toBuffer(): Buffer,
        toHex(): string,
        toRaw(binaryAsBase64?: boolean, longsAsStrings?: boolean): {
            [key: string]: any
        },
        toString(): string, [field: string]: any
}


/**
 * TODO: Implement service interface
 */
declare export interface ProtoBuf$Service {
    new(rpcImpl?: Function): ProtoBuf$Service
}

declare export interface ProtoBuf$ProtoBuilder {
    ns: ProtoBuf$ReflectNamespace,
        ptr: ProtoBuf$ReflectNamespace,
        resolved: boolean,
        result: ProtoBuf$ProtoBuf,
        files: string[],
        importRoot: string,
        options: {
            [key: string]: any
        },
        syntax: string,
        reset(): void,
        define(pkg: string, options?: {
            [key: string]: any
        }): ProtoBuf$ProtoBuilder,
        create(defs?: {
            [key: string]: any
        }[]): ProtoBuf$ProtoBuilder,
        resolveAll(): void,
        build(path?: string | [string]): ProtoBuf$MetaMessage<ProtoBuf$Message>,
        build<T>(path?: string | [string]): ProtoBuf$MetaMessage<T>,
        lookup(path?: string): ProtoBuf$ReflectT
}

declare export interface ProtoBuf$ProtoBuf {
    [package: string]: {
        [key: string]: ProtoBuf$MetaMessage<ProtoBuf$Message>| any
    }
}

declare export interface ProtoBuf$MetaMessage<T>{
    new(values?: {
        [key: string]: any
    }, var_args?: string[]): T & ProtoBuf$Message,
    decode(
        buffer: ArrayBuffer | ByteBuffer | Buffer | string,
        length?: number | string,
        enc?: string): T & ProtoBuf$Message,
    decodeDelimited(
        buffer: ByteBuffer | ArrayBuffer | Buffer | string,
        enc?: string): T & ProtoBuf$Message,
    decode64(str: string): T & ProtoBuf$Message,
    decodeHex(str: string): T & ProtoBuf$Message,
    decodeJSON(str: string): T & ProtoBuf$Message
}

declare export interface ProtoBuf$DotProto {
    Parser: ProtoBuf$Parser,
        Tokenizer: ProtoBuf$Tokenizer
}

declare export interface ProtoBuf$Parser {
    new(proto: string): ProtoBuf$Parser,
    tn: ProtoBuf$Tokenizer,
        parse(): ProtoBuf$MetaProto,
        toString(): string
}

declare export interface ProtoBuf$Tokenizer {
    new(proto: string): ProtoBuf$Tokenizer,
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

declare export interface ProtoBuf$MetaProto {
    package: string,
        messages: ProtoBuf$ProtoMessage[],
        enums: ProtoBuf$ProtoEnum[],
        imports: string[],
        options: {
            [key: string]: any
        },
        services: ProtoBuf$ProtoService[]
}

declare export interface ProtoBuf$ProtoEnum {
    name: string,
        values: ProtoBuf$ProtoEnumValue[],
        options: {
            [key: string]: any
        }
}

declare export interface ProtoBuf$ProtoEnumValue {
    name: string,
        id: string
}

declare export interface ProtoBuf$ProtoField {
    rule: string,
        options: {
            [key: string]: any
        },
        type: string,
        name: string,
        id: number,
        oneof?: string
}

declare export interface ProtoBuf$ProtoMessage {
    name: string,
        isGroup?: boolean,
        fields: ProtoBuf$ProtoField[],
        enums: ProtoBuf$ProtoEnum[],
        messages: ProtoBuf$ProtoMessage[],
        options: {
            [key: string]: any
        },
        oneofs: {
            [key: string]: number[]
        }
}

declare export interface ProtoBuf$ProtoRpcService {
    request: string,
        response: string,
        options: {
            [key: string]: any
        }
}

declare export interface ProtoBuf$ProtoService {
    name: string,
        rpc: {
            [key: string]: ProtoBuf$ProtoRpcService
        },
        options: {
            [key: string]: any
        }
}

declare export interface ProtoBuf$Util {
    IS_NODE: boolean,
        fetch(path: string, callback?: (data: string) => any): string,
        toCamelCase(str: string): string,
        XHR(): XMLHttpRequest
}

declare export interface ProtoBuf$Reflect {
    T: ProtoBuf$ReflectT,
        Namespace: ProtoBuf$ReflectNamespace,
        Message: ProtoBuf$ReflectMessage,
        Enum: ProtoBuf$ReflectEnum,
        Extension: ProtoBuf$ReflectExtension,
        Service: ProtoBuf$ReflectService
}

declare export interface ProtoBuf$ReflectT {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        parent?: ProtoBuf$ReflectT,
        name?: string): ProtoBuf$ReflectT,
    builder: ProtoBuf$ProtoBuilder,
        parent: ProtoBuf$ReflectT,
        name: string,
        fqn(): string,
        toString(includeClass?: boolean): string
}

declare export type ProtoBuf$ReflectNamespace = {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        parent?: ProtoBuf$ReflectNamespace,
        name?: string,
        options?: {
            [key: string]: any
        }): ProtoBuf$ReflectNamespace,
    className: string,
    children: ProtoBuf$ReflectT[],
    options: {
        [key: string]: any
    },
    syntax: string,
    getChildren(type?: ProtoBuf$ReflectT): ProtoBuf$ReflectT[],
    addChild(child: ProtoBuf$ReflectT): void,
    getChild(nameOrId?: string | number): ProtoBuf$ReflectT,
    resolve(qn: string, excludeFields?: boolean): ProtoBuf$ReflectNamespace,
    build(): ProtoBuf$ProtoBuf,
    buildOpt(): {
        [key: string]: any
    },
    getOption(name?: string): any
} & ProtoBuf$ReflectT


declare export type ProtoBuf$ReflectMessage = {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        parent?: ProtoBuf$ReflectNamespace,
        name?: string,
        options?: {
            [key: string]: any
        },
        isGroup?: boolean): ProtoBuf$ReflectMessage,
    Field: ProtoBuf$ReflectField,
    ExtensionField: ProtoBuf$ReflectExtensionField,
    OneOf: ProtoBuf$ReflectOneOf,
    extensions: number[],
    clazz(): ProtoBuf$MetaMessage<ProtoBuf$Message>,
    isGroup: boolean,
    build(rebuild?: boolean): ProtoBuf$MetaMessage<ProtoBuf$Message>| any,
    build<T>(rebuild?: boolean): ProtoBuf$MetaMessage<T>| any,
    encode(message: ProtoBuf$Message, buffer: Buffer, noVerify?: boolean): Buffer,
    calculate(message: ProtoBuf$Message): number,
    decode(buffer: Buffer, length?: number, expectedGroupEndId?: number): ProtoBuf$Message
} & ProtoBuf$ReflectNamespace


declare export type ProtoBuf$ReflectEnum = {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        parent?: ProtoBuf$ReflectT,
        name?: string,
        options?: {
            [key: string]: any
        }): ProtoBuf$ReflectEnum,
    Value: ProtoBuf$ReflectValue,
    object: {
        [key: string]: number
    },
    build(): {
        [key: string]: any
    }
} & ProtoBuf$ReflectNamespace


declare export type ProtoBuf$ReflectExtension = {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        parent?: ProtoBuf$ReflectT,
        name?: string,
        field?: ProtoBuf$ReflectField): ProtoBuf$ReflectExtension,
    field: ProtoBuf$ReflectField
} & ProtoBuf$ReflectT


declare export type ProtoBuf$ReflectService = {
    new(): ProtoBuf$ReflectService,
    Method: ProtoBuf$ReflectMethod,
    RPCMethod: ProtoBuf$ReflectRPCMethod,
    clazz(): Function,
    build(rebuild?: boolean): Function | any
} & ProtoBuf$ReflectNamespace


declare export type ProtoBuf$ReflectField = {
    new(
        builder: ProtoBuf$ProtoBuilder,
        message: ProtoBuf$ReflectMessage,
        rule: string,
        type: string,
        name: string,
        id: number,
        options: {
            [key: string]: any
        },
        oneof: ProtoBuf$ReflectOneOf): ProtoBuf$ReflectField,
    className: string,
    required: boolean,
    repeated: boolean,
    type: string | ProtoBuf$WireTuple,
    resolvedType: ProtoBuf$ReflectT,
    id: number,
    options: {
        [key: string]: any
    },
    defaultValue: any,
    oneof: ProtoBuf$ReflectOneOf,
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
} & ProtoBuf$ReflectT


declare export interface ProtoBuf$WireTuple {
    name: string,
        wireType: number
}

declare export type ProtoBuf$ReflectExtensionField = {
    new(
        builder: ProtoBuf$ProtoBuilder,
        message: ProtoBuf$ReflectMessage,
        rule: string,
        type: string,
        name: string,
        id: number,
        options: {
            [key: string]: any
        }): ProtoBuf$ReflectExtensionField,
    extension: ProtoBuf$ReflectExtension
} & ProtoBuf$ReflectField


declare export type ProtoBuf$ReflectOneOf = {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        message?: ProtoBuf$ReflectMessage,
        name?: string): ProtoBuf$ReflectOneOf,
    fields: ProtoBuf$ReflectField[]
} & ProtoBuf$ReflectT


declare export type ProtoBuf$ReflectValue = {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        enm?: ProtoBuf$ReflectEnum,
        name?: string,
        id?: number): ProtoBuf$ReflectValue,
    className: string,
    id: number
} & ProtoBuf$ReflectT


declare export type ProtoBuf$ReflectMethod = {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        svc?: ProtoBuf$ReflectService,
        name?: string,
        options?: {
            [key: string]: any
        }): ProtoBuf$ReflectMethod,
    className: string,
    options: {
        [key: string]: any
    },
    buildOpt(): {
        [key: string]: any
    }
} & ProtoBuf$ReflectT


declare export type ProtoBuf$ReflectRPCMethod = {
    new(
        builder?: ProtoBuf$ProtoBuilder,
        svc?: ProtoBuf$ReflectService,
        name?: string,
        request?: string,
        response?: string,
        options?: {
            [key: string]: any
        }): ProtoBuf$ReflectRPCMethod,
    requestName: string,
    responseName: string,
    resolvedRequestType: ProtoBuf$ReflectMessage,
    resolvedResponseType: ProtoBuf$ReflectMessage
} & ProtoBuf$ReflectMethod
declare module 'protobufjs' {
    declare module.exports: typeof ProtoBuf
}
declare module 'protobufjs/dist/protobuf-light' {
    declare module.exports: typeof ProtoBuf
}


declare module 'thrift' {
					
}

declare module 'Thrift' {
		declare interface Type {
		STOP: number,
		VOID: number,
		BOOL: number,
		BYTE: number,
		I08: number,
		DOUBLE: number,
		I16: number,
		I32: number,
		I64: number,
		STRING: number,
		UTF7: number,
		STRUCT: number,
		MAP: number,
		SET: number,
		LIST: number,
		UTF8: number,
		UTF16: number
	}

	declare interface MessageType {
		CALL: number,
		REPLY: number,
		EXCEPTION: number,
		ONEWAY: number
	}

	declare interface TApplicationExceptionType {
		UNKNOWN: number,
		UNKNOWN_METHOD: number,
		INVALID_MESSAGE_TYPE: number,
		WRONG_METHOD_NAME: number,
		BAD_SEQUENCE_ID: number,
		MISSING_RESULT: number,
		INTERNAL_ERROR: number,
		PROTOCOL_ERROR: number,
		INVALID_TRANSFORM: number,
		INVALID_PROTOCOL: number,
		UNSUPPORTED_CLIENT_TYPE: number
	}

	declare function objectLength(obj: Object): number

	declare function inherits(constructor: Function, superConstructor: Function, name?: string): void

	declare class TException extends Error {
		name: string;
		message: string;
		constructor(message: string): this;
		getMessage(): string
	}

	declare class TApplicationException extends TException {
		message: string;
		code: number;
		constructor(message: string, code?: number): this;
		read(input: Object): void;
		write(output: Object): void;
		getCode(): number
	}

	declare class TXHRTransport  {
		url: string;
		wpos: number;
		rpos: number;
		useCORS: any;
		send_buf: string;
		recv_buf: string;
		constructor(url?: string, options?: Object): this;
		getXmlHttpRequestObject(): Object;
		flush(async: any, callback?: Function): string;
		jqRequest(client: Object, postData: any, args: Function, recv_method: Function): Object;
		setRecvBuffer(buf: string): void;
		isOpen(): boolean;
		open(): void;
		close(): void;
		read(len: number): string;
		readAll(): string;
		write(buf: string): void;
		getSendBuffer(): string
	}

	
}
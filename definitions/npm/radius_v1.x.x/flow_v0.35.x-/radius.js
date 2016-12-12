

declare module 'radius' {
		declare interface DecodeArgs {
		packet: Buffer
	}

	declare interface DecodeArgsWithSecret {
		secret: string
	}

	declare interface EncodeArgs {
		code: string,
		secret: string,
		identifier?: number,
		attributes?: any,
		add_message_authenticator?: boolean
	}

	declare interface EncodeResponseArgs {
		packet: RadiusPacket,
		code: string,
		secret: string,
		attributes?: any
	}

	declare interface VerifyResponseArgs {
		request: Buffer,
		response: Buffer,
		secret: string
	}

	declare interface RadiusPacket {
		code: string,
		identifier: number,
		length: number,
		attributes: any,
		raw_attributes: Array<Array<any>>
	}

	declare export function decode(args: DecodeArgsWithSecret): RadiusPacket

	declare export function decode_without_secret(args: DecodeArgs): RadiusPacket

	declare export function encode(args: EncodeArgs): Buffer

	declare export function encode_response(args: EncodeResponseArgs): Buffer

	declare export function verify_response(args: VerifyResponseArgs): boolean

	declare export function add_dictionary(path: string): void

	declare export function unload_dictionaries(): void

		
}
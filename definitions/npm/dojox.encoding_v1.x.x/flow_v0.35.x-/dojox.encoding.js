

declare module 'dojox.encoding' {
					
}

declare module 'compression' {
		declare interface splay {
		(n: any): void
	}

	declare interface lzw {
		Decoder(n: any): void,
		Encoder(n: any): void
	}

			
}

declare module 'splay' {
		declare interface decode {
		(stream: any): number
	}

	declare interface encode {
		(value: any, stream: any): any
	}

	declare interface reset {
		(): void
	}

	declare interface splay {
		(i: any): void
	}

			
}

declare module 'crypto' {
		declare interface _base {
		Blowfish: Object,
		cipherModes: Object,
		outputTypes: Object,
		SimpleAES: Object,
		RSAKey(): void
	}

		declare class RSAKey  {
		constructor(rngf: any): this;
		decrypt(ctext: String): any;
		encrypt(text: any): any;
		generate(B: any, E: any): void;
		setPrivate(N: any, E: any, D: any): void;
		setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;
		setPublic(N: any, E: any): void
	}

	declare class RSAKey_ext  {
		constructor(rngf: any): this;
		decrypt(ctext: String): any;
		encrypt(text: any): any;
		generate(B: any, E: any): void;
		setPrivate(N: any, E: any, D: any): void;
		setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;
		setPublic(N: any, E: any): void
	}

	
}

declare module '_base' {
		declare interface cipherModes {
		CBC: number,
		CFB: number,
		CTR: number,
		ECB: number,
		OFB: number,
		PCBC: number
	}

	declare interface outputTypes {
		Base64: number,
		Hex: number,
		Raw: number,
		String: number
	}

	declare interface outputTypes {
		Base64: number,
		Hex: number,
		Raw: number,
		String: number
	}

		declare class RSAKey  {
		constructor(rngf: any): this;
		decrypt(ctext: String): any;
		encrypt(text: any): any;
		generate(B: any, E: any): void;
		setPrivate(N: any, E: any, D: any): void;
		setPrivateEx(N: any, E: any, D: any, P: any, Q: any, DP: any, DQ: any, C: any): void;
		setPublic(N: any, E: any): void
	}

	
}

declare module 'digests' {
		declare interface SHA1 {
		(data: String, outputType?: Object): void
	}

	declare interface MD5 {
		(data: String, outputType?: Object): void
	}

	declare interface SHA224 {
		(data: String, outputType?: number): void
	}

	declare interface SHA256 {
		(data: String, outputType?: number): void
	}

	declare interface SHA384 {
		(data: String, outputType?: number): void
	}

	declare interface SHA512 {
		(data: String, outputType?: number): void
	}

	declare interface _base {
		outputTypes: Object,
		addWords(a: String, b: String): number,
		MD5(data: String, outputType: Object): void,
		SHA1(data: String, outputType: Object): void,
		stringToUtf8(input: any): void,
		stringToWord(s: String): any[],
		wordToBase64(wa: String[]): void,
		wordToHex(wa: String[]): void,
		wordToString(wa: String[]): void
	}

	declare interface _sha_64 {
		outputTypes: Object,
		digest(msg: any, length: any, hash: any, depth: any): any[],
		stringToUtf8(s: any): any,
		toBase64(wa: any): any,
		toHex(wa: any): any,
		toWord(s: any): any
	}

			
}

declare module 'encoding' {
		declare interface _base {
		
	}

	declare interface bits {
		InputStream(buffer: any, width: any): void,
		OutputStream(): void
	}

	declare interface ascii85 {
		decode(input: String): void,
		encode(input: any[]): void
	}

	declare interface base64 {
		decode(str: String): void,
		encode(ba: number[]): void
	}

	declare interface easy64 {
		decode(input: String): void,
		encode(input: any[]): void
	}

			
}

declare module 'dojox/encoding/_base' {
					declare module.exports: _base


}

declare module 'dojox/encoding/ascii85' {
					declare module.exports: ascii85


}

declare module 'dojox/encoding/base64' {
					declare module.exports: base64


}

declare module 'dojox/encoding/bits' {
					declare module.exports: bits


}

declare module 'dojox/encoding/easy64' {
					declare module.exports: easy64


}

declare module 'dojox/encoding/compression/splay' {
					declare module.exports: splay


}

declare module 'dojox/encoding/compression/lzw' {
					declare module.exports: lzw


}

declare module 'dojox/encoding/crypto/_base' {
					declare module.exports: _base


}

declare module 'dojox/encoding/crypto/_base.RSAKey' {
					declare module.exports: RSAKey


}

declare module 'dojox/encoding/crypto/_base.cipherModes' {
					declare module.exports: cipherModes


}

declare module 'dojox/encoding/crypto/_base.outputTypes' {
					declare module.exports: outputTypes


}

declare module 'dojox/encoding/crypto/RSAKey' {
					declare module.exports: RSAKey


}

declare module 'dojox/encoding/crypto/RSAKey-ext' {
					declare module.exports: RSAKey_ext


}

declare module 'dojox/encoding/digests/MD5' {
					declare module.exports: MD5


}

declare module 'dojox/encoding/digests/SHA1' {
					declare module.exports: SHA1


}

declare module 'dojox/encoding/digests/SHA224' {
					declare module.exports: SHA224


}

declare module 'dojox/encoding/digests/SHA512' {
					declare module.exports: SHA512


}

declare module 'dojox/encoding/digests/SHA256' {
					declare module.exports: SHA256


}

declare module 'dojox/encoding/digests/SHA384' {
					declare module.exports: SHA384


}

declare module 'dojox/encoding/digests/_base' {
					declare module.exports: _base


}

declare module 'dojox/encoding/digests/_base.outputTypes' {
					declare module.exports: outputTypes


}

declare module 'dojox/encoding/digests/_sha-64' {
					declare module.exports: _sha_64


}
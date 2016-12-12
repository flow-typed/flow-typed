import type { CryptoJSStatic } from 'npm$namespace$CryptoJS'

declare module 'cryptojs' {
					
}

declare module 'lib' {
		declare interface Base {
		extend(overrides: Object): Object,
		init(...args: any[]): void,
		create(...args: any[]): Base,
		mixIn(properties: Object): void,
		clone(): Base
	}

	declare interface WordArray {
		words: number[],
		sigBytes: number,
		init(words?: number[], sigBytes?: number): void,
		create(words?: number[], sigBytes?: number): WordArray,
		init(typedArray: ArrayBuffer): void,
		init(typedArray: Int8Array): void,
		create(typedArray: ArrayBuffer): WordArray,
		create(typedArray: Int8Array): WordArray,
		toString(encoder?: enc.IEncoder): string,
		concat(wordArray: WordArray): WordArray,
		clamp(): void,
		clone(): WordArray,
		random(nBytes: number): WordArray
	}

	declare interface BufferedBlockAlgorithm {
		reset(): void,
		clone(): BufferedBlockAlgorithm
	}

	declare interface IHasher<C> {
		cfg: C,
		init(cfg?: C): void,
		create(cfg?: C): IHasher<C>,
		update(messageUpdate: string): Hasher,
		update(messageUpdate: WordArray): Hasher,
		finalize(messageUpdate?: string): WordArray,
		finalize(messageUpdate?: WordArray): WordArray,
		blockSize: number,
		_createHelper(hasher: Hasher): IHasherHelper<C>,
		_createHmacHelper(hasher: Hasher): IHasherHmacHelper,
		clone(): IHasher<C>
	}

	declare interface Hasher {
		
	}

	declare interface IHasherHelper<C> {
		(message: string, cfg?: C): WordArray,
		(message: WordArray, cfg?: C): WordArray
	}

	declare interface HasherHelper {
		
	}

	declare interface IHasherHmacHelper {
		(message: string, key: string): WordArray,
		(message: string, key: WordArray): WordArray,
		(message: WordArray, key: string): WordArray,
		(message: WordArray, key: WordArray): WordArray
	}

	declare interface ICipher<C> {
		cfg: C,
		createEncryptor(key: WordArray, cfg?: C): ICipher<C>,
		createDecryptor(key: WordArray, cfg?: C): ICipher<C>,
		create(xformMode?: number, key?: WordArray, cfg?: C): ICipher<C>,
		init(xformMode?: number, key?: WordArray, cfg?: C): void,
		process(dataUpdate: string): WordArray,
		process(dataUpdate: WordArray): WordArray,
		finalize(dataUpdate?: string): WordArray,
		finalize(dataUpdate?: WordArray): WordArray,
		keySize: number,
		ivSize: number,
		_createHelper(cipher: Cipher): ICipherHelper<C>,
		clone(): ICipher<C>
	}

	declare interface Cipher {
		
	}

	declare interface IStreamCipher<C> {
		drop?: number,
		createEncryptor(key: WordArray, cfg?: C): IStreamCipher<C>,
		createDecryptor(key: WordArray, cfg?: C): IStreamCipher<C>,
		create(xformMode?: number, key?: WordArray, cfg?: C): IStreamCipher<C>,
		blockSize: number
	}

	declare interface StreamCipher {
		
	}

	declare interface BlockCipherMode {
		createEncryptor(cipher: Cipher, iv: number[]): mode.IBlockCipherEncryptor,
		createDecryptor(cipher: Cipher, iv: number[]): mode.IBlockCipherDecryptor,
		init(cipher?: Cipher, iv?: number[]): void,
		create(cipher?: Cipher, iv?: number[]): BlockCipherMode
	}

	declare interface BlockCipher {
		
	}

	declare interface IBlockCipherCfg {
		iv?: WordArray,
		mode?: mode.IBlockCipherModeImpl,
		padding?: pad.IPaddingImpl
	}

	declare interface CipherParamsData {
		ciphertext?: lib.WordArray,
		key?: lib.WordArray,
		iv?: lib.WordArray,
		salt?: lib.WordArray,
		algorithm?: Cipher,
		mode?: mode.IBlockCipherModeImpl,
		padding?: pad.IPaddingImpl,
		blockSize?: number,
		formatter?: format.IFormatter
	}

	declare interface CipherParams {
		init(cipherParams?: CipherParamsData): void,
		create(cipherParams?: CipherParamsData): CipherParams,
		toString(formatter?: format.IFormatter): string
	}

	declare interface ISerializableCipher<C> {
		cfg: C,
		encrypt(cipher: Cipher, message: WordArray, key: WordArray, cfg?: C): CipherParams,
		encrypt(cipher: Cipher, message: string, key: WordArray, cfg?: C): CipherParams,
		decrypt(
		cipher: Cipher, ciphertext: CipherParamsData, key: WordArray, cfg?: C
	): WordArray,
		decrypt(cipher: Cipher, ciphertext: string, key: WordArray, cfg?: C): WordArray
	}

	declare interface SerializableCipher {
		
	}

	declare interface ISerializableCipherCfg {
		format?: format.IFormatter,
		iv?: WordArray,
		mode?: mode.IBlockCipherModeImpl,
		padding?: pad.IPaddingImpl
	}

	declare interface IPasswordBasedCipher<C> {
		cfg: C,
		encrypt(cipher: Cipher, message: WordArray, password: string, cfg?: C): CipherParams,
		encrypt(cipher: Cipher, message: string, password: string, cfg?: C): CipherParams,
		decrypt(
		cipher: Cipher, ciphertext: CipherParamsData, password: string, cfg?: C
	): WordArray,
		decrypt(cipher: Cipher, ciphertext: string, password: string, cfg?: C): WordArray
	}

	declare interface PasswordBasedCipher {
		
	}

	declare interface IPasswordBasedCipherCfg {
		kdf?: kdf.IKdfImpl,
		mode?: mode.IBlockCipherModeImpl,
		padding?: pad.IPaddingImpl
	}

	declare interface ICipherHelper<C> {
		encrypt(message: string, password: string, cfg?: C): CipherParams,
		encrypt(message: string, key: WordArray, cfg?: C): CipherParams,
		encrypt(message: WordArray, password: string, cfg?: C): CipherParams,
		encrypt(message: WordArray, key: WordArray, cfg?: C): CipherParams,
		decrypt(ciphertext: string, password: string, cfg?: C): WordArray,
		decrypt(ciphertext: string, key: WordArray, cfg?: C): WordArray,
		decrypt(ciphertext: CipherParamsData, password: string, cfg?: C): WordArray,
		decrypt(ciphertext: CipherParamsData, key: WordArray, cfg?: C): WordArray
	}

	declare interface CipherHelper {
		
	}

	declare interface LibStatic {
		Base: lib.Base,
		WordArray: lib.WordArray,
		CipherParams: lib.CipherParams,
		SerializableCipher: lib.SerializableCipher,
		PasswordBasedCipher: lib.PasswordBasedCipher
	}

			
}

declare module 'enc' {
		declare interface IEncoder {
		stringify(wordArray: lib.WordArray): string
	}

	declare interface IDecoder {
		parse(s: string): lib.WordArray
	}

	declare interface ICoder {
		
	}

	declare interface EncStatic {
		Hex: ICoder,
		Latin1: ICoder,
		Utf8: ICoder,
		Base64: ICoder,
		Utf16: ICoder,
		Utf16BE: ICoder,
		Utf16LE: ICoder
	}

			
}

declare module 'kdf' {
		declare interface KdfStatic {
		OpenSSL: IKdfImpl
	}

	declare interface IKdfImpl {
		execute(
		password: string, keySize: number, ivSize: number, salt?: string
	): lib.CipherParams,
		execute(
		password: string, keySize: number, ivSize: number, salt?: lib.WordArray
	): lib.CipherParams
	}

			
}

declare module 'format' {
		declare interface FormatStatic {
		OpenSSL: IFormatter,
		Hex: IFormatter
	}

	declare interface IFormatter {
		stringify(cipherParams: lib.CipherParamsData): string,
		parse(s: string): lib.CipherParams
	}

			
}

declare module 'algo' {
		declare interface AlgoStatic {
		AES: algo.AES,
		DES: algo.DES,
		TripleDES: algo.TripleDES,
		RabbitLegacy: algo.RabbitLegacy,
		Rabbit: algo.Rabbit,
		RC4: algo.RC4,
		MD5: algo.MD5,
		RIPEMD160: algo.RIPEMD160,
		SHA1: algo.SHA1,
		SHA256: algo.SHA256,
		SHA224: algo.SHA224,
		SHA384: algo.SHA384,
		SHA512: algo.SHA512,
		SHA3: algo.SHA3,
		HMAC: algo.HMAC,
		EvpKDF: algo.EvpKDF,
		PBKDF2: algo.PBKDF2,
		RC4Drop: algo.RC4Drop
	}

	declare interface IBlockCipherImpl {
		encryptBlock(M: number[], offset: number): void,
		decryptBlock(M: number[], offset: number): void,
		createEncryptor(key: lib.WordArray, cfg?: lib.CipherParamsData): IBlockCipherImpl,
		createDecryptor(key: lib.WordArray, cfg?: lib.CipherParamsData): IBlockCipherImpl,
		create(
		xformMode?: number, key?: lib.WordArray, cfg?: lib.IBlockCipherCfg
	): IBlockCipherImpl
	}

	declare interface AES {
		
	}

	declare interface DES {
		
	}

	declare interface TripleDES {
		
	}

	declare interface RabbitLegacy {
		
	}

	declare interface Rabbit {
		
	}

	declare interface RC4 {
		
	}

	declare interface MD5 {
		
	}

	declare interface RIPEMD160 {
		
	}

	declare interface SHA1 {
		
	}

	declare interface SHA256 {
		
	}

	declare interface SHA224 {
		
	}

	declare interface SHA384 {
		
	}

	declare interface SHA512 {
		
	}

	declare interface SHA3 {
		
	}

	declare interface ISHA3Cfg {
		outputLength?: number
	}

	declare interface HMAC {
		init(hasher?: lib.Hasher, key?: string): void,
		init(hasher?: lib.Hasher, key?: lib.WordArray): void,
		create(hasher?: lib.Hasher, key?: string): HMAC,
		create(hasher?: lib.Hasher, key?: lib.WordArray): HMAC,
		update(messageUpdate: string): HMAC,
		update(messageUpdate: lib.WordArray): HMAC,
		finalize(messageUpdate?: string): lib.WordArray,
		finalize(messageUpdate?: lib.WordArray): lib.WordArray
	}

	declare interface EvpKDF {
		cfg: IEvpKDFCfg,
		init(cfg?: IEvpKDFCfg): void,
		create(cfg?: IEvpKDFCfg): EvpKDF,
		compute(password: string, salt: string): lib.WordArray,
		compute(password: string, salt: lib.WordArray): lib.WordArray,
		compute(password: lib.WordArray, salt: string): lib.WordArray,
		compute(password: lib.WordArray, salt: lib.WordArray): lib.WordArray
	}

	declare interface IEvpKDFCfg {
		keySize?: number,
		hasher?: lib.Hasher,
		iterations?: number
	}

	declare interface IEvpKDFHelper {
		(password: string, salt: string, cfg?: IEvpKDFCfg): lib.WordArray,
		(password: string, salt: lib.WordArray, cfg?: IEvpKDFCfg): lib.WordArray,
		(password: lib.WordArray, salt: string, cfg?: IEvpKDFCfg): lib.WordArray,
		(password: lib.WordArray, salt: lib.WordArray, cfg?: IEvpKDFCfg): lib.WordArray
	}

	declare interface PBKDF2 {
		
	}

	declare interface RC4Drop {
		
	}

			
}

declare module 'mode' {
		declare interface ModeStatic {
		CBC: mode.CBC,
		CFB: mode.CFB,
		CTR: mode.CTR,
		CTRGladman: mode.CTRGladman,
		ECB: mode.ECB,
		OFB: mode.OFB
	}

	declare interface IBlockCipherEncryptor {
		processBlock(words: number[], offset: number): void
	}

	declare interface IBlockCipherDecryptor {
		processBlock(words: number[], offset: number): void
	}

	declare interface IBlockCipherModeImpl {
		Encryptor: IBlockCipherEncryptor,
		Decryptor: IBlockCipherDecryptor
	}

	declare interface CBC {
		
	}

	declare interface CFB {
		
	}

	declare interface CTR {
		
	}

	declare interface CTRGladman {
		
	}

	declare interface ECB {
		
	}

	declare interface OFB {
		
	}

			
}

declare module 'pad' {
		declare interface PadStatic {
		Pkcs7: pad.Pkcs7,
		AnsiX923: pad.AnsiX923,
		Iso10126: pad.Iso10126,
		Iso97971: pad.Iso97971,
		ZeroPadding: pad.ZeroPadding,
		NoPadding: pad.NoPadding
	}

	declare interface IPaddingImpl {
		pad(data: lib.WordArray, blockSize: number): void,
		unpad(data: lib.WordArray): void
	}

	declare interface Pkcs7 {
		
	}

	declare interface AnsiX923 {
		
	}

	declare interface Iso10126 {
		
	}

	declare interface Iso97971 {
		
	}

	declare interface ZeroPadding {
		
	}

	declare interface NoPadding {
		
	}

			
}

declare module 'x64' {
		declare interface X64Static {
		Word: x64.Word,
		WordArray: x64.WordArray
	}

	declare interface Word {
		high: number,
		low: number,
		init(high?: number, low?: number): void,
		create(high?: number, low?: number): Word
	}

	declare interface WordArray {
		words: Word[],
		sigBytes: number,
		init(words?: Word[], sigBytes?: number): void,
		create(words?: Word[], sigBytes?: number): WordArray,
		toX32(): lib.WordArray,
		clone(): WordArray
	}

			
}

declare module 'npm$namespace$CryptoJS' {
		declare interface CryptoJSStatic {
		lib: lib.LibStatic,
		enc: enc.EncStatic,
		kdf: kdf.KdfStatic,
		format: format.FormatStatic,
		algo: algo.AlgoStatic,
		mode: mode.ModeStatic,
		pad: pad.PadStatic,
		x64: x64.X64Static,
		AES: CryptoJS.lib.ICipherHelper<CryptoJS.lib.IBlockCipherCfg>,
		DES: CryptoJS.lib.ICipherHelper<CryptoJS.lib.IBlockCipherCfg>,
		TripleDES: CryptoJS.lib.ICipherHelper<CryptoJS.lib.IBlockCipherCfg>,
		RabbitLegacy: CryptoJS.lib.CipherHelper,
		Rabbit: CryptoJS.lib.CipherHelper,
		RC4: CryptoJS.lib.CipherHelper,
		RC4Drop: CryptoJS.lib.ICipherHelper<Object>,
		MD5: CryptoJS.lib.HasherHelper,
		HmacMD5: CryptoJS.lib.IHasherHmacHelper,
		RIPEMD160: CryptoJS.lib.HasherHelper,
		HmacRIPEMD160: CryptoJS.lib.IHasherHmacHelper,
		SHA1: CryptoJS.lib.HasherHelper,
		HmacSHA1: CryptoJS.lib.IHasherHmacHelper,
		SHA256: CryptoJS.lib.HasherHelper,
		HmacSHA256: CryptoJS.lib.IHasherHmacHelper,
		SHA224: CryptoJS.lib.HasherHelper,
		HmacSHA224: CryptoJS.lib.IHasherHmacHelper,
		SHA512: CryptoJS.lib.HasherHelper,
		HmacSHA512: CryptoJS.lib.IHasherHmacHelper,
		SHA384: CryptoJS.lib.HasherHelper,
		HmacSHA384: CryptoJS.lib.IHasherHmacHelper,
		SHA3: CryptoJS.lib.IHasherHelper<CryptoJS.algo.ISHA3Cfg>,
		HmacSHA3: CryptoJS.lib.IHasherHmacHelper,
		EvpKDF: CryptoJS.algo.IEvpKDFHelper,
		PBKDF2: CryptoJS.algo.IEvpKDFHelper
	}

			
}
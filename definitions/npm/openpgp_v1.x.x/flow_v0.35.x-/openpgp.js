

declare module 'openpgp' {
					
}

declare module 'npm$namespace$openpgp' {
		declare interface KeyPair {
		key: key.Key,
		privateKeyArmored: string,
		publicKeyArmored: string
	}

	declare interface KeyOptions {
		keyType?: enums.publicKey,
		numBits: number,
		userId: string,
		passphrase: string,
		unlocked?: boolean
	}

	declare interface Keyid {
		bytes: string
	}

	declare interface Signature {
		keyid: Keyid,
		valid: boolean
	}

	declare interface VerifiedMessage {
		text: string,
		signatures: Array<Signature>
	}

	declare function decryptAndVerifyMessage(
		privateKey: key.Key, publicKeys: Array<key.Key>, msg: string
	): Promise<VerifiedMessage>

	declare function decryptAndVerifyMessage(privateKey: key.Key, publicKey: key.Key, msg: string): Promise<VerifiedMessage>

	declare function decryptMessage(privateKey: key.Key, msg: message.Message): Promise<string>

	declare function encryptMessage(keys: Array<key.Key>, message: string): Promise<string>

	declare function encryptMessage(key: key.Key, message: string): Promise<string>

	declare function generateKeyPair(options: KeyOptions): Promise<KeyPair>

	declare function signAndEncryptMessage(publicKeys: Array<key.Key>, privateKey: key.Key, text: string): Promise<string>

	declare function signAndEncryptMessage(publicKey: key.Key, privateKey: key.Key, text: string): Promise<string>

	declare function signClearMessage(privateKeys: Array<key.Key>, text: string): Promise<string>

	declare function signClearMessage(privateKey: key.Key, text: string): Promise<string>

	declare function verifyClearSignedMessage(
		publicKeys: Array<key.Key>, msg: cleartext.CleartextMessage
	): Promise<VerifiedMessage>

	declare function verifyClearSignedMessage(publicKey: key.Key, msg: cleartext.CleartextMessage): Promise<VerifiedMessage>

		
}

declare module 'armor' {
			declare function armor(
		messagetype: enums.armor, body: Object, partindex: number, parttotal: number
	): string

	declare function dearmor(text: string): Object

		
}

declare module 'cleartext' {
		declare interface CleartextMessage {
		armor(): string,
		getSigningKeyIds(): Array<Keyid>,
		getText(): string,
		sign(privateKeys: Array<key.Key>): void,
		verify(keys: Array<key.Key>): Array<VerifiedMessage>
	}

	declare function readArmored(armoredText: string): CleartextMessage

		
}

declare module 'config' {
					
}

declare module 'crypto' {
		declare interface Mpi {
		data: number,
		read(input: string): number,
		write(): string
	}

	declare function generateSessionKey(algo: enums.symmetric): string

	declare function getPrefixRandom(algo: enums.symmetric): string

	declare function getPrivateMpiCount(algo: enums.symmetric): number

	declare function publicKeyDecrypt(
		algo: enums.publicKey, publicMPIs: Array<Mpi>, secretMPIs: Array<Mpi>, data: Mpi
	): Mpi

	declare function publicKeyEncrypt(algo: enums.publicKey, publicMPIs: Array<Mpi>, data: Mpi): Array<Mpi>

		
}

declare module 'cfb' {
			declare function decrypt(cipherfn: string, key: string, ciphertext: string, resync: boolean): string

	declare function encrypt(
		prefixrandom: string, cipherfn: string, plaintext: string, key: string, resync: boolean
	): string

	declare function mdc(cipherfn: Object, key: string, ciphertext: string): string

		
}

declare module 'hash' {
			declare function digest(algo: enums.hash, data: string): string

	declare function getHashByteLength(algo: enums.hash): number

		
}

declare module 'random' {
			declare function getRandomBigInteger(bits: number): number

	declare function getRandomBytes(length: number): string

	declare function getRandomValues(buf: Uint8Array): void

	declare function getSecureRandom(from: number, to: number): number

		
}

declare module 'signature' {
			declare function sign(
		hash_algo: enums.hash, algo: enums.publicKey, publicMPIs: Array<Mpi>, secretMPIs: Array<Mpi>, data: string
	): Mpi

	declare function verify(
		algo: enums.publicKey, hash_algo: enums.hash, msg_MPIs: Array<Mpi>, publickey_MPIs: Array<Mpi>, data: string
	): boolean

		
}

declare module 'key' {
		declare interface KeyResult {
		keys: Array<Key>,
		err: Array<Error>
	}

	declare interface Key {
		armor(): string,
		decrypt(passphrase: string): boolean,
		getExpirationTime(): Date,
		getKeyIds(): Array<Keyid>,
		getPreferredHashAlgorithm(): string,
		getPrimaryUser(): any,
		getUserIds(): Array<string>,
		isPrivate(): boolean,
		isPublic(): boolean,
		primaryKey: packet.PublicKey,
		toPublic(): Key,
		update(key: Key): void,
		verifyPrimaryKey(): enums.keyStatus
	}

	declare function generate(options: KeyOptions): Key

	declare function readArmored(armoredText: string): KeyResult

		
}

declare module 'message' {
		declare interface Message {
		armor(): string,
		decrypt(privateKey: key.Key): Array<Message>,
		encrypt(keys: Array<key.Key>): Array<Message>,
		getEncryptionKeyIds(): Array<Keyid>,
		getLiteralData(): string,
		getSigningKeyIds(): Array<Keyid>,
		getText(): string,
		sign(privateKey: Array<key.Key>): Message,
		unwrapCompressed(): Message,
		verify(keys: Array<key.Key>): Array<Object>
	}

	declare function fromBinary(bytes: string): Message

	declare function fromText(text: string): Message

	declare function readArmored(armoredText: string): Message

		
}

declare module 'packet' {
		declare interface PublicKey {
		algorithm: enums.publicKey,
		created: Date,
		fingerprint: string,
		getBitSize(): number,
		getFingerprint(): string,
		getKeyId(): string,
		read(input: string): any,
		write(): any
	}

	declare interface SecretKey {
		read(bytes: string): void,
		write(): string,
		clearPrivateMPIs(str_passphrase: string): boolean,
		encrypt(passphrase: string): void
	}

	declare function fromStructuredClone(packetClone: Object): Object

	declare function newPacketFromTag(tag: string): Object

		
}

declare module 'util' {
			declare function bin2str(bin: Array<number>): string

	declare function calc_checksum(text: string): number

	declare function decode_utf8(utf8: string): string

	declare function encode_utf8(str: string): string

	declare function get_hashAlgorithmString(): string

	declare function getWebCrypto(): Object

	declare function hex2bin(str: string): string

	declare function hexidump(str: string): string

	declare function hexstrdump(str: string): string

	declare function print_debug(str: string): void

	declare function print_debug_hexstr_dump(str: string): void

	declare function shiftRight(value: string, bitcount: number): string

	declare function str2bin(str: string): Array<number>

	declare function str2Uint8Array(str: string): Uint8Array

	declare function Uint8Array2str(bin: Uint8Array): string

		
}
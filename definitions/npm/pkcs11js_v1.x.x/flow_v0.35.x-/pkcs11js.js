

declare module 'pkcs11js' {
	declare type Handle = Buffer;

	declare type Template = Attribute[];

	declare interface Version {
		major: number,
		minor: number
	}

	declare interface ModuleInfo {
		cryptokiVersion: Version,
		manufacturerID: string,
		flags: number,
		libraryDescription: string,
		libraryVersion: Version
	}

	declare interface SlotInfo {
		slotDescription: string,
		manufacturerID: string,
		flags: number,
		hardwareVersion: Version,
		firmwareVersion: Version
	}

	declare interface TokenInfo {
		label: string,
		manufacturerID: string,
		model: string,
		serialNumber: string,
		flags: number,
		maxSessionCount: number,
		sessionCount: number,
		maxRwSessionCount: number,
		rwSessionCount: number,
		maxPinLen: number,
		minPinLen: number,
		hardwareVersion: Version,
		firmwareVersion: Version,
		utcTime: string,
		totalPublicMemory: number,
		freePublicMemory: number,
		totalPrivateMemory: number,
		freePrivateMemory: number
	}

	declare interface MechanismInfo {
		minKeySize: number,
		maxKeySize: number,
		flags: number
	}

	declare interface SessionInfo {
		slotID: number,
		state: number,
		flags: number,
		deviceError: number
	}

	declare interface Attribute {
		type: number,
		value?: number | boolean | string | Buffer
	}

	declare interface Mechanism {
		mechanism: number,
		parameter: Buffer | IParapms
	}

	declare interface IParapms {
		type: number
	}

	declare interface ECDH1 {
		kdf: number,
		sharedData?: Buffer,
		publicData: Buffer
	}

	declare interface AesCBC {
		iv: Buffer,
		data?: Buffer
	}

	declare interface AesCCM {
		dataLen: number,
		nonce?: Buffer,
		aad?: Buffer,
		macLen: number
	}

	declare interface AesGCM {
		iv?: Buffer,
		aad?: Buffer,
		ivBits: number,
		tagBits: number
	}

	declare interface RsaOAEP {
		hashAlg: number,
		mgf: number,
		source: number,
		sourceData?: Buffer
	}

	declare interface RsaPSS {
		hashAlg: number,
		mgf: number,
		saltLen: number
	}

	declare interface KeyPair {
		privateKey: Handle,
		publicKey: Handle
	}

		declare export class PKCS11  {
		load(path: string): void;
		C_Initialize(): void;
		C_Finalize(): void;
		C_GetInfo(): ModuleInfo;
		C_GetSlotList(tokenPresent?: boolean): Handle[];
		C_GetSlotInfo(slot: Handle): SlotInfo;
		C_GetTokenInfo(slot: Handle): TokenInfo;
		C_InitToken(slot: Handle, pin?: string): string;
		C_InitPIN(session: Handle, pin?: string): void;
		C_SetPIN(session: Handle, oldPin: string, newPin: string): void;
		C_GetMechanismList(slot: Handle): Handle[];
		C_GetMechanismInfo(slot: Handle, mech: Handle): MechanismInfo;
		C_OpenSession(slot: Handle, flags: number): Handle;
		C_CloseSession(session: Handle): void;
		C_CloseAllSessions(slot: Handle): void;
		C_GetSessionInfo(session: Handle): SessionInfo;
		C_Login(session: Handle, userType: number, pin?: string): void;
		C_Logout(session: Handle): void;
		C_CreateObject(session: Handle, template: Template): Handle;
		C_CopyObject(session: Handle, object: Handle, template: Template): Handle;
		C_DestroyObject(session: Handle, object: Handle): void;
		C_GetObjectSize(session: Handle, object: Handle): number;
		C_FindObjectsInit(session: Handle, template: Template): void;
		C_FindObjects(session: Handle): Handle;
		C_FindObjectsFinal(session: Handle): void;
		C_GetAttributeValue(session: Handle, object: Handle, template: Template): Template;
		C_SetAttributeValue(session: Handle, object: Handle, template: Template): void;
		C_EncryptInit(session: Handle, mechanism: Mechanism, key: Handle): void;
		C_Encrypt(session: Handle, inData: Buffer, outData: Buffer): Buffer;
		C_Encrypt(
		session: Handle, inData: Buffer, outData: Buffer, cb: (error: Error, data: Buffer) => void
	): void;
		C_EncryptUpdate(session: Handle, inData: Buffer, outData: Buffer): Buffer;
		C_EncryptFinal(session: Handle, outData: Buffer): Buffer;
		C_DecryptInit(session: Handle, mechanism: Mechanism, key: Handle): void;
		C_Decrypt(session: Handle, inData: Buffer, outData: Buffer): Buffer;
		C_Decrypt(
		session: Handle, inData: Buffer, outData: Buffer, cb: (error: Error, data: Buffer) => void
	): void;
		C_DecryptUpdate(session: Handle, inData: Buffer, outData: Buffer): Buffer;
		C_DecryptFinal(session: Handle, outData: Buffer): Buffer;
		C_DigestInit(session: Handle, mechanism: Mechanism): void;
		C_Digest(session: Handle, inData: Buffer, outData: Buffer): Buffer;
		C_Digest(
		session: Handle, inData: Buffer, outData: Buffer, cb: (error: Error, data: Buffer) => void
	): void;
		C_DigestUpdate(session: Handle, inData: Buffer): void;
		C_DigestFinal(session: Handle, outData: Buffer): Buffer;
		C_SignInit(session: Handle, mechanism: Mechanism, key: Handle): void;
		C_Sign(session: Handle, inData: Buffer, outData: Buffer): Buffer;
		C_Sign(
		session: Handle, inData: Buffer, outData: Buffer, cb: (error: Error, data: Buffer) => void
	): void;
		C_SignUpdate(session: Handle, inData: Buffer): void;
		C_SignFinal(session: Handle, outData: Buffer): Buffer;
		C_VerifyInit(session: Handle, mechanism: Mechanism, key: Handle): void;
		C_Verify(session: Handle, inData: Buffer, signature: Buffer): boolean;
		C_Verify(
		session: Handle, inData: Buffer, signature: Buffer, cb: (error: Error, verify: boolean) => void
	): void;
		C_VerifyUpdate(session: Handle, inData: Buffer): void;
		C_VerifyFinal(session: Handle, signature: Buffer): boolean;
		C_GenerateKey(session: Handle, mechanism: Mechanism, template: Template): Handle;
		C_GenerateKey(
		session: Handle, mechanism: Mechanism, template: Template, cb: (error: Error, key: Handle) => void
	): void;
		C_GenerateKeyPair(
		session: Handle, mechanism: Mechanism, publicTmpl: Template, privateTmpl: Template
	): KeyPair;
		C_GenerateKeyPair(
		session: Handle, mechanism: Mechanism, publicTmpl: Template, privateTmpl: Template, cb: (error: Error, keys: KeyPair) => void
	): void;
		C_WrapKey(
		session: Handle, mechanism: Mechanism, wrappingKey: Handle, key: Handle, wrappedKey: Buffer
	): Buffer;
		C_WrapKey(
		session: Handle, mechanism: Mechanism, wrappingKey: Handle, key: Handle, wrappedKey: Buffer, cb: (error: Error, wrappedKey: Buffer) => void
	): void;
		C_UnwrapKey(
		session: Handle, mechanism: Mechanism, unwrappingKey: Handle, wrappedKey: Buffer, template: Template
	): Handle;
		C_UnwrapKey(
		session: Handle, mechanism: Mechanism, unwrappingKey: Handle, wrappedKey: Buffer, template: Template, cb: (error: Error, key: Handle) => void
	): void;
		C_DeriveKey(session: Handle, mechanism: Mechanism, key: Handle, template: Template): Handle;
		C_DeriveKey(
		session: Handle, mechanism: Mechanism, key: Handle, template: Template, cb: (error: Error, hKey: Handle) => void
	): void;
		C_SeedRandom(session: Handle, buf: Buffer): Buffer;
		C_GenerateRandom(session: Handle, buf: Buffer): Buffer
	}

	
}


declare module 'graphene-pk11' {
	declare type Handle = Buffer;

	declare type CryptoData = string | Buffer;

	declare type MechanismType = MechanismEnum | KeyGenMechanism | IAlgorithm | string;

	declare interface IParams {
		toCKI(): any
	}

	declare interface INamedCurve {
		name: string,
		oid: string,
		value: Buffer,
		size: number
	}

	declare interface IAlgorithm {
		name: string,
		params: Buffer | IParams
	}

	declare interface IKeyPair {
		privateKey: PrivateKey,
		publicKey: PublicKey
	}

	declare interface ITemplate {
		class?: number,
		token?: boolean,
		private?: boolean,
		label?: string,
		application?: string,
		value?: Buffer,
		objectId?: Buffer,
		certType?: number,
		issuer?: Buffer,
		serial?: Buffer,
		issuerAC?: Buffer,
		owner?: Buffer,
		attrTypes?: Buffer,
		trusted?: boolean,
		certCategory?: number,
		javaDomain?: number,
		url?: string,
		ski?: Buffer,
		aki?: Buffer,
		digestName?: number,
		checkValue?: Buffer,
		keyType?: number,
		subject?: Buffer,
		id?: Buffer,
		sensitive?: boolean,
		encrypt?: boolean,
		decrypt?: boolean,
		wrap?: boolean,
		unwrap?: boolean,
		sign?: boolean,
		signRecover?: boolean,
		verify?: boolean,
		verifyRecover?: boolean,
		derive?: boolean,
		startDate?: Date,
		endDate?: Date,
		modulus?: Buffer,
		modulusBits?: number,
		publicExponent?: Buffer,
		privateExponent?: Buffer,
		prime1?: Buffer,
		prime2?: Buffer,
		exp1?: Buffer,
		exp2?: Buffer,
		coefficient?: Buffer,
		prime?: Buffer,
		subprime?: Buffer,
		base?: Buffer,
		primeBits?: number,
		subprimeBits?: number,
		valueBits?: number,
		valueLen?: number,
		extractable?: boolean,
		local?: boolean,
		neverExtractable?: boolean,
		alwaysSensitive?: boolean,
		keyGenMechanism?: number,
		modifiable?: boolean,
		copyable?: boolean,
		paramsECDSA?: Buffer,
		paramsEC?: Buffer,
		pointEC?: Buffer,
		secondaryAuth?: boolean,
		authPinFlags?: Buffer,
		alwaysAuth?: boolean,
		wrapWithTrusted?: boolean,
		wrapTemplate?: any,
		unwrapTemplate?: any,
		otpFormat?: any,
		otpLength?: any,
		otpTimeInterval?: any,
		otpUserFriendlyMode?: any,
		otpChallengeReq?: any,
		otpTimeReq?: any,
		otpCounterReq?: any,
		otppinReq?: any,
		otpCounter?: any,
		otpTime?: any,
		otpUserId?: any,
		otpServiceId?: any,
		otpServiceLogo?: any,
		otpServiceLogoType?: any,
		hwFeatureType?: any,
		resetOnInit?: any,
		hasReset?: any,
		pixelX?: any,
		pixelY?: any,
		resolution?: any,
		charRows?: any,
		charCols?: any,
		color?: any,
		bitsPerPixel?: any,
		charSets?: any,
		encMethod?: any,
		mimeTypes?: any,
		mechanismType?: any,
		requiredCmsAttrs?: any,
		defaultCmsAttrs?: any,
		suportedCmsAttrs?: any,
		allowedMechanisms?: any
	}

	declare function isString(v: any): boolean

	declare function isNumber(v: any): boolean

	declare function isBoolean(v: any): boolean

	declare function isUndefined(v: any): boolean

	declare function isNull(v: any): boolean

	declare function isEmpty(v: any): boolean

	declare function isFunction(v: any): boolean

	declare function isObject(v: any): boolean

	declare function isArray(v: any): boolean

	declare function isFlag(v: any, fv: number): boolean

	declare function dateFromString(text: string): Date

	declare class Pkcs11Error extends Error {
		code: number;
		func: string;
		constructor(code: number, func: string): this
	}

	declare class BaseObject  {
		lib: pkcs11.PKCS11;
		constructor(lib?: pkcs11.PKCS11): this
	}

	declare class HandleObject extends BaseObject {
		handle: Handle;
		constructor(handle: Handle, lib: pkcs11.PKCS11): this;
		getInfo(): void
	}

	declare class Collection<T> extends BaseObject {
		items_: Array<any>;
		classType: any;
		length: number;
		constructor(items: Array<any>, lib: pkcs11.PKCS11, classType: any): this;
		items(index: number): T
	}

	declare class Cipher extends BaseObject {
		session: Session;
		constructor(session: Session, alg: MechanismType, key: Key, lib: pkcs11.PKCS11): this;
		init(alg: MechanismType, key: Key): void;
		update(data: CryptoData): Buffer;
		final(): Buffer;
		once(data: CryptoData, enc: Buffer): Buffer;
		once(data: CryptoData, enc: Buffer, cb: (error: Error, data: Buffer) => void): void
	}

	declare class Decipher extends BaseObject {
		session: Session;
		blockSize: number;
		constructor(session: Session, alg: MechanismType, key: Key, blockSize: number, lib: pkcs11.PKCS11): this;
		init(alg: MechanismType, key: Key): void;
		update(data: Buffer): Buffer;
		final(): Buffer;
		once(data: Buffer, dec: Buffer): Buffer;
		once(data: Buffer, dec: Buffer, cb: (error: Error, data: Buffer) => void): void
	}

	declare class Digest extends BaseObject {
		session: Session;
		constructor(session: Session, alg: MechanismType, lib: pkcs11.PKCS11): this;
		init(alg: MechanismType): void;
		update(data: CryptoData): void;
		final(): Buffer;
		once(data: CryptoData): Buffer;
		once(data: CryptoData, cb: (error: Error, data: Buffer) => void): void
	}

	declare class Sign extends BaseObject {
		session: Session;
		constructor(session: Session, alg: MechanismType, key: Key, lib: pkcs11.PKCS11): this;
		init(alg: MechanismType, key: Key): void;
		update(data: CryptoData): void;
		final(): Buffer;
		once(data: CryptoData): Buffer;
		once(data: CryptoData, cb: (error: Error, data: Buffer) => void): void
	}

	declare class Verify extends BaseObject {
		session: Session;
		constructor(session: Session, alg: MechanismType, key: Key, lib: pkcs11.PKCS11): this;
		init(alg: MechanismType, key: Key): void;
		update(data: CryptoData): void;
		final(signature: Buffer): boolean;
		once(data: CryptoData, signature: Buffer): boolean;
		once(
		data: CryptoData, signature: Buffer, cb: (error: Error, valid: boolean) => void
	): void
	}

	declare class AesCbcParams extends IParams {
		iv: Buffer;
		data: Buffer;
		type: MechParams;
		constructor(iv: Buffer, data?: Buffer): this;
		toCKI(): Buffer
	}

	declare class AesCcmParams extends IParams {
		dataLength: number;
		nonce: Buffer;
		aad: Buffer;
		macLength: number;
		type: MechParams;
		constructor(dataLength: number, nonce: Buffer, aad?: Buffer, macLength?: number): this;
		toCKI(): pkcs11.AesCCM
	}

	declare class AesGcmParams extends IParams {
		iv: Buffer;
		aad: Buffer;
		tagBits: number;
		type: MechParams;
		constructor(iv: Buffer, aad?: Buffer, tagBits?: number): this;
		toCKI(): pkcs11.AesGCM
	}

	declare class NamedCurve  {
		getByName(name: string): INamedCurve;
		getByOid(oid: string): INamedCurve
	}

	declare class EcdhParams extends IParams {
		kdf: EcKdf;
		sharedData: Buffer;
		publicData: Buffer;
		type: MechParams;
		constructor(kdf: EcKdf, sharedData?: Buffer, publicData?: Buffer): this;
		toCKI(): pkcs11.ECDH1
	}

	declare class RsaOaepParams extends IParams {
		hashAlgorithm: MechanismEnum;
		mgf: RsaMgf;
		source: number;
		sourceData: Buffer;
		type: MechParams;
		constructor(hashAlg?: MechanismEnum, mgf?: RsaMgf, sourceData?: Buffer): this;
		toCKI(): pkcs11.RsaOAEP
	}

	declare class RsaPssParams extends IParams {
		hashAlgorithm: MechanismEnum;
		mgf: RsaMgf;
		saltLength: number;
		type: MechParams;
		constructor(hashAlg?: MechanismEnum, mgf?: RsaMgf, saltLen?: number): this;
		toCKI(): pkcs11.RsaPSS
	}

	declare class SessionObject extends HandleObject {
		session: Session;
		size: number;
		class: ObjectClass;
		constructor(object: SessionObject): this;
		constructor(handle: Handle, session: Session, lib: pkcs11.PKCS11): this;
		constructor(handle: SessionObject): this;
		copy(template: ITemplate): SessionObject;
		destroy(): void;
		getAttribute(attr: string): ITemplate;
		getAttribute(attrs: ITemplate): ITemplate;
		setAttribute(attrs: string, value: any): void;
		setAttribute(attrs: ITemplate): void;
		get(name: string): any;
		set(name: string, value: any): void;
		toType<T>(): T
	}

	declare class SessionObjectCollection extends Collection<SessionObject> {
		session: Session;
		constructor(items: Array<Handle>, session: Session, lib: pkcs11.PKCS11, classType?: any): this;
		items(index: number): SessionObject
	}

	declare class Storage extends SessionObject {
		token: boolean;
		private: boolean;
		modifiable: boolean;
		label: string
	}

	declare class Data extends Storage {
		application: string;
		objectId: Buffer;
		value: Buffer
	}

	declare class DomainParameters extends Storage {
		keyType: KeyType;
		local: boolean
	}

	declare class Key extends Storage {
		type: KeyType;
		id: Buffer;
		startDate: Date;
		endDate: Date;
		derive: boolean;
		local: boolean;
		mechanism: KeyGenMechanism;
		allowedMechanisms: void
	}

	declare class PrivateKey extends Key {
		subject: Buffer;
		sensitive: boolean;
		decrypt: boolean;
		sign: boolean;
		signRecover: boolean;
		unwrap: boolean;
		extractable: boolean;
		alwaysSensitive: boolean;
		neverExtractable: boolean;
		wrapTrusted: boolean;
		template: void;
		alwaysAuthenticate: boolean
	}

	declare class PublicKey extends Key {
		subject: Buffer;
		encrypt: boolean;
		verify: boolean;
		verifyRecover: boolean;
		wrap: boolean;
		trusted: boolean;
		template: void
	}

	declare class SecretKey extends Key {
		sensitive: boolean;
		encrypt: boolean;
		decrypt: boolean;
		verify: boolean;
		sign: boolean;
		wrap: boolean;
		unwrap: boolean;
		extractable: boolean;
		alwaysSensitive: boolean;
		neverExtractable: boolean;
		checkValue: Buffer;
		wrapTrusted: boolean;
		trusted: boolean;
		wrapTemplate: void;
		unwrapTemplate: void
	}

	declare class Certificate extends Storage {
		type: CertificateType;
		trusted: boolean;
		category: CertificateCategory;
		checkValue: Buffer;
		startDate: Date;
		endDate: Date
	}

	declare class AttributeCertificate extends Certificate {
		owner: Buffer;
		issuer: Buffer;
		serialNumber: Buffer;
		types: Buffer;
		value: Buffer
	}

	declare class WtlsCertificate extends Certificate {
		subject: Buffer;
		issuer: Buffer;
		id: Buffer;
		value: Buffer;
		url: string;
		serialNumber: Buffer;
		subjetcKeyIdentifier: Buffer;
		authorityKeyIdentifier: Buffer
	}

	declare class X509Certificate extends Certificate {
		subject: Buffer;
		id: Buffer;
		issuer: Buffer;
		serialNumber: string;
		value: Buffer;
		url: string;
		subjetcKeyIdentifier: Buffer;
		authorityKeyIdentifier: Buffer;
		java: JavaMIDP
	}

	declare class Mechanism extends BaseObject {
		handle: number;
		slotHandle: Handle;
		minKeySize: number;
		maxKeySize: number;
		flags: number;
		name: string;
		constructor(handle: number, slotHandle: Handle, lib: pkcs11.PKCS11): this;
		getInfo(): void;
		create(alg: MechanismType): pkcs11.Mechanism;
		vendor(jsonFile: string): void;
		vendor(name: string, value: number): void
	}

	declare class MechanismCollection extends Collection<Mechanism> {
		slotHandle: Handle;
		constructor(items: Array<number>, slotHandle: Handle, lib: pkcs11.PKCS11, classType?: typeof Mechanism): this;
		items(index: number): Mechanism
	}

	declare class Session extends HandleObject {
		constructor(handle: Handle, slot: Slot, lib: pkcs11.PKCS11): this;
		slot: Slot;
		state: number;
		flags: number;
		deviceError: number;
		getInfo(): void;
		close(): void;
		initPin(pin: string): void;
		setPin(oldPin: string, newPin: string): void;
		getOperationState(): Buffer;
		setOperationState(state: Buffer, encryptionKey?: number, authenticationKey?: number): void;
		login(pin: string, userType?: UserType): void;
		logout(): void;
		create(template: ITemplate): SessionObject;
		copy(object: SessionObject, template: ITemplate): SessionObject;
		destroy(template: ITemplate): number;
		destroy(object: SessionObject): number;
		destroy(): number;
		clear(): number;
		find(callback?: (obj: SessionObject) => any): SessionObjectCollection;
		find(
		template: ITemplate, callback?: (obj: SessionObject, index: number) => any
	): SessionObjectCollection;
		getObject<T>(handle: Handle): T;
		generateKey(mechanism: MechanismType, template?: ITemplate): SecretKey;
		generateKey(
		mechanism: MechanismType, template: ITemplate, callback: (err: Error, key: SecretKey) => void
	): void;
		generateKeyPair(
		mechanism: MechanismType, publicTemplate: ITemplate, privateTemplate: ITemplate
	): IKeyPair;
		generateKeyPair(
		mechanism: MechanismType, publicTemplate: ITemplate, privateTemplate: ITemplate, callback: (err: Error, keys: IKeyPair) => void
	): void;
		createSign(alg: MechanismType, key: Key): Sign;
		createVerify(alg: MechanismType, key: Key): Verify;
		createCipher(alg: MechanismType, key: Key): Cipher;
		createDecipher(alg: MechanismType, key: Key, blockSize?: number): Decipher;
		createDigest(alg: MechanismType): Digest;
		wrapKey(alg: MechanismType, wrappingKey: Key, key: Key): Buffer;
		wrapKey(
		alg: MechanismType, wrappingKey: Key, key: Key, callback: (err: Error, wkey: Buffer) => void
	): void;
		unwrapKey(
		alg: MechanismType, unwrappingKey: Key, wrappedKey: Buffer, template: ITemplate
	): Key;
		unwrapKey(
		alg: MechanismType, unwrappingKey: Key, wrappedKey: Buffer, template: ITemplate, callback: (err: Error, key: Key) => void
	): void;
		deriveKey(alg: MechanismType, baseKey: Key, template: ITemplate): SecretKey;
		deriveKey(
		alg: MechanismType, baseKey: Key, template: ITemplate, callback: (err: Error, key: Key) => void
	): void;
		generateRandom(size: number): Buffer
	}

	declare class Template  {
		toPkcs11(tmpl: ITemplate): pkcs11.Attribute[];
		fromPkcs11(tmpl: pkcs11.Template): ITemplate
	}

	declare class Slot extends HandleObject {
		slotDescription: string;
		manufacturerID: string;
		flags: number;
		hardwareVersion: pkcs11.Version;
		firmwareVersion: pkcs11.Version;
		module: Module;
		constructor(handle: Handle, module: Module, lib: pkcs11.PKCS11): this;
		getInfo(): void;
		getToken(): Token;
		getMechanisms(): MechanismCollection;
		initToken(pin: string): string;
		open(flags?: SessionFlag): Session;
		closeAll(): void
	}

	declare class SlotCollection extends Collection<Slot> {
		module: Module;
		items(index: number): Slot;
		constructor(items: Array<Buffer>, module: Module, lib: pkcs11.PKCS11, classType?: any): this
	}

	declare class Token extends HandleObject {
		label: string;
		manufacturerID: string;
		model: string;
		serialNumber: string;
		flags: number;
		maxSessionCount: number;
		sessionCount: number;
		maxRwSessionCount: number;
		rwSessionCount: number;
		maxPinLen: number;
		minPinLen: number;
		totalPublicMemory: number;
		freePublicMemory: number;
		totalPrivateMemory: number;
		freePrivateMemory: number;
		hardwareVersion: pkcs11.Version;
		firmwareVersion: pkcs11.Version;
		utcTime: Date;
		constructor(handle: Handle, lib: pkcs11.PKCS11): this;
		getInfo(): void
	}

	declare class Module extends BaseObject {
		libFile: string;
		libName: string;
		cryptokiVersion: pkcs11.Version;
		manufacturerID: string;
		flags: number;
		libraryDescription: string;
		libraryVersion: pkcs11.Version;
		constructor(lib: pkcs11.PKCS11): this;
		getInfo(): void;
		initialize(): void;
		finalize(): void;
		getSlots(index: number, tokenPresent?: boolean): Slot;
		getSlots(tokenPresent?: boolean): SlotCollection;
		load(libFile: string, libName?: string): Module
	}

	
}
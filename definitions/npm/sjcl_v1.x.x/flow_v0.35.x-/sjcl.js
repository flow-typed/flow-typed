

declare module 'sjcl' {
					declare module.exports: undefined


}

declare module 'npm$namespace$sjcl' {
		declare interface BigNumber {
		radix: number,
		maxMul: number,
		copy(): BigNumber,
		initWith: TypeHelpers.BigNumberBinaryOperator,
		equals(that: number): boolean,
		equals(that: BigNumber): boolean,
		getLimb(index: number): number,
		greaterEquals(that: number): boolean,
		greaterEquals(that: BigNumber): boolean,
		toString(): string,
		addM: TypeHelpers.BigNumberBinaryOperator,
		doubleM(): BigNumber,
		halveM(): BigNumber,
		subM: TypeHelpers.BigNumberBinaryOperator,
		mod: TypeHelpers.BigNumberBinaryOperator,
		inverseMod: TypeHelpers.BigNumberBinaryOperator,
		add: TypeHelpers.BigNumberBinaryOperator,
		sub: TypeHelpers.BigNumberBinaryOperator,
		mul: TypeHelpers.BigNumberBinaryOperator,
		square(): BigNumber,
		power(n: number): BigNumber,
		power(n: BigNumber): BigNumber,
		power(a: number[]): BigNumber,
		mulmod: TypeHelpers.BigNumberTrinaryOperator,
		powermod: TypeHelpers.BigNumberTrinaryOperator,
		trim(): BigNumber,
		reduce(): BigNumber,
		fullReduce(): BigNumber,
		normalize(): BigNumber,
		cnormalize(): BigNumber,
		toBits(len?: number): BitArray,
		bitLength(): number
	}

	declare interface BigNumberStatic {
		new (): BigNumber,
		new (n: string): BigNumber,
		new (n: number): BigNumber,
		new (n: BigNumber): BigNumber,
		fromBits(bits: BitArray): BigNumber,
		random: TypeHelpers.Bind1<number>,
		prime: {
		p127: PseudoMersennePrimeStatic,
		p25519: PseudoMersennePrimeStatic,
		p192k: PseudoMersennePrimeStatic,
		p224k: PseudoMersennePrimeStatic,
		p256k: PseudoMersennePrimeStatic,
		p192: PseudoMersennePrimeStatic,
		p224: PseudoMersennePrimeStatic,
		p256: PseudoMersennePrimeStatic,
		p384: PseudoMersennePrimeStatic,
		p521: PseudoMersennePrimeStatic
	},
		pseudoMersennePrime(exponent: number, coeff: number[][]): PseudoMersennePrimeStatic
	}

	declare interface PseudoMersennePrime {
		reduce(): PseudoMersennePrime,
		fullReduce(): PseudoMersennePrime,
		inverse(): PseudoMersennePrime
	}

	declare interface PseudoMersennePrimeStatic {
		new (): PseudoMersennePrime,
		new (n: string): PseudoMersennePrime,
		new (n: number): PseudoMersennePrime,
		new (n: BigNumber): PseudoMersennePrime
	}

	declare interface BitArray {
		
	}

	declare interface BitArrayStatic {
		bitSlice(a: BitArray, bstart: number, bend: number): BitArray,
		extract(a: BitArray, bstart: number, blenth: number): number,
		concat(a1: BitArray, a2: BitArray): BitArray,
		bitLength(a: BitArray): number,
		clamp(a: BitArray, len: number): BitArray,
		partial(len: number, x: number, _end?: number): number,
		getPartial(x: number): number,
		equal(a: BitArray, b: BitArray): boolean,
		_shiftRight(a: BitArray, shift: number, carry?: number, out?: BitArray): BitArray,
		_xor4(x: number[], y: number[]): number[]
	}

	declare interface SjclCodec<T> {
		fromBits(bits: BitArray): T,
		toBits(value: T): BitArray
	}

	declare interface SjclCodecs {
		utf8String: SjclCodec<string>,
		hex: SjclCodec<string>,
		bytes: SjclCodec<number[]>,
		base64: SjclCodec<string>,
		base64url: SjclCodec<string>
	}

	declare interface SjclHash {
		reset(): SjclHash,
		update(data: string): SjclHash,
		update(data: BitArray): SjclHash,
		finalize(): BitArray
	}

	declare interface SjclHashStatic {
		new (hash?: SjclHash): SjclHash,
		hash(data: string): BitArray,
		hash(data: BitArray): BitArray
	}

	declare interface SjclHashes {
		sha1: SjclHashStatic,
		sha256: SjclHashStatic,
		sha512: SjclHashStatic
	}

	declare interface SjclExceptions {
		corrupt: SjclExceptionFactory,
		invalid: SjclExceptionFactory,
		bug: SjclExceptionFactory,
		notReady: SjclExceptionFactory
	}

	declare interface SjclExceptionFactory {
		new (message: string): Error
	}

	declare interface SjclCiphers {
		aes: SjclCipherStatic
	}

	declare interface SjclCipher {
		encrypt(data: number[]): number[],
		decrypt(data: number[]): number[]
	}

	declare interface SjclCipherStatic {
		new (key: number[]): SjclCipher
	}

	declare interface SjclModes {
		gcm: SjclGCMMode,
		ccm: SjclCCMMode,
		ocb2: SjclOCB2Mode,
		cbc: SjclCBCMode
	}

	declare interface SjclGCMMode {
		encrypt(
		prp: SjclCipher, plaintext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number
	): BitArray,
		decrypt(
		prp: SjclCipher, ciphertext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number
	): BitArray
	}

	declare interface SjclCCMMode {
		encrypt(
		prp: SjclCipher, plaintext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number
	): BitArray,
		decrypt(
		prp: SjclCipher, ciphertext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number
	): BitArray
	}

	declare interface SjclOCB2Mode {
		encrypt(
		prp: SjclCipher, plaintext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number, premac?: boolean
	): BitArray,
		decrypt(
		prp: SjclCipher, ciphertext: BitArray, iv: BitArray, adata?: BitArray, tlen?: number, premac?: boolean
	): BitArray,
		pmac(prp: SjclCipher, adata: BitArray): number[]
	}

	declare interface SjclCBCMode {
		encrypt(prp: SjclCipher, plaintext: BitArray, iv: BitArray, adata?: BitArray): BitArray,
		decrypt(
		prp: SjclCipher, ciphertext: BitArray, iv: BitArray, adata?: BitArray
	): BitArray
	}

	declare interface Pbkdf2Params {
		iter?: number,
		salt?: BitArray
	}

	declare interface SjclMisc {
		pbkdf2(
		password: string, salt: string, count?: number, length?: number, Prff?: SjclPseudorandomFunctionFamilyStatic
	): BitArray,
		pbkdf2(
		password: BitArray, salt: string, count?: number, length?: number, Prff?: SjclPseudorandomFunctionFamilyStatic
	): BitArray,
		pbkdf2(
		password: BitArray, salt: BitArray, count?: number, length?: number, Prff?: SjclPseudorandomFunctionFamilyStatic
	): BitArray,
		pbkdf2(
		password: string, salt: BitArray, count?: number, length?: number, Prff?: SjclPseudorandomFunctionFamilyStatic
	): BitArray,
		hmac: SjclHmacStatic,
		cachedPbkdf2(password: string, obj?: Pbkdf2Params): {
		key: BitArray,
		salt: BitArray
	}
	}

	declare interface SjclHmac {
		mac(data: string): BitArray,
		mac(data: BitArray): BitArray,
		reset(): void,
		update(data: string): void,
		update(data: BitArray): void,
		digest(): BitArray
	}

	declare interface SjclPseudorandomFunctionFamilyStatic {
		new (key: BitArray): SjclPseudorandomFunctionFamily
	}

	declare interface SjclHmacStatic {
		new (key: BitArray, Hash?: SjclHashStatic): SjclHmac
	}

	declare interface SjclEllipticCurveCryptography {
		point: SjclEllipticalPointStatic,
		pointJac: SjclPointJacobianStatic,
		curve: SjclEllipticalCurveStatic,
		curves: {
		c192: SjclEllipticalCurve,
		c224: SjclEllipticalCurve,
		c256: SjclEllipticalCurve,
		c384: SjclEllipticalCurve,
		k192: SjclEllipticalCurve,
		k224: SjclEllipticalCurve,
		k256: SjclEllipticalCurve
	},
		basicKey: SjclECCBasic,
		elGamal: SjclElGamal,
		ecdsa: SjclEcdsa
	}

	declare interface SjclEllipticalPoint {
		toJac(): SjclPointJacobian,
		mult(k: BigNumber): SjclEllipticalPoint,
		mult2(k: BigNumber, k2: BigNumber, affine2: SjclEllipticalPoint): SjclEllipticalPoint,
		multiples(): Array<SjclEllipticalPoint>,
		isValid(): boolean,
		toBits(): BitArray
	}

	declare interface SjclEllipticalPointStatic {
		new (curve: SjclEllipticalCurve, x?: BigNumber, y?: BigNumber): SjclEllipticalPoint
	}

	declare interface SjclPointJacobian {
		add(T: SjclEllipticalPoint): SjclPointJacobian,
		doubl(): SjclPointJacobian,
		toAffine(): SjclEllipticalPoint,
		mult(k: BigNumber, affine: SjclEllipticalPoint): SjclPointJacobian,
		mult2(
		k1: BigNumber, affine: SjclEllipticalPoint, k2: BigNumber, affine2: SjclEllipticalPoint
	): SjclPointJacobian,
		isValid(): boolean
	}

	declare interface SjclPointJacobianStatic {
		new (
		curve: SjclEllipticalCurve, x?: BigNumber, y?: BigNumber, z?: BigNumber
	): SjclPointJacobian
	}

	declare interface SjclEllipticalCurve {
		fromBits(bits: BitArray): SjclEllipticalPoint
	}

	declare interface SjclEllipticalCurveStatic {
		new (
		Field: BigNumber, r: BigNumber, a: BigNumber, b: BigNumber, x: BigNumber, y: BigNumber
	): SjclEllipticalCurve
	}

	declare interface SjclKeyPair<P, S> {
		pub: P,
		sec: S
	}

	declare interface SjclKeysGenerator<P, S> {
		(curve: SjclEllipticalCurve, paranoia: number, sec?: BigNumber): SjclKeyPair<P, S>,
		(curve: number, paranoia: number, sec?: BigNumber): SjclKeyPair<P, S>
	}

	declare interface SjclECCPublicKeyData {
		x: BitArray,
		y: BitArray
	}

	declare interface SjclECCPublicKeyFactory<T> {
		new (curve: SjclEllipticalCurve, point: SjclEllipticalPoint): T,
		new (curve: SjclEllipticalCurve, point: BitArray): T
	}

	declare interface SjclECCSecretKeyFactory<T> {
		new (curve: SjclEllipticalCurve, exponent: BigNumber): T
	}

	declare interface SjclECCBasic {
		publicKey: SjclECCPublicKeyFactory<SjclECCPublicKey>,
		secretKey: SjclECCSecretKeyFactory<SjclECCSecretKey>,
		generateKeys(cn: string): SjclKeysGenerator<SjclECCPublicKey, SjclECCSecretKey>
	}

	declare interface SjclElGamal {
		publicKey: SjclECCPublicKeyFactory<SjclElGamalPublicKey>,
		secretKey: SjclECCSecretKeyFactory<SjclElGamalSecretKey>,
		generateKeys: SjclKeysGenerator<SjclElGamalPublicKey, SjclElGamalSecretKey>
	}

	declare interface SjclEcdsa {
		publicKey: SjclECCPublicKeyFactory<SjclEcdsaPublicKey>,
		secretKey: SjclECCSecretKeyFactory<SjclEcdsaSecretKey>,
		generateKeys: SjclKeysGenerator<SjclEcdsaPublicKey, SjclEcdsaSecretKey>
	}

	declare interface SjclRandom {
		randomWords(nwords: number, paranoia?: number): BitArray,
		setDefaultParanoia(paranoia: number, allowZeroParanoia: string): void,
		addEntropy(data: number, estimatedEntropy: number, source: string): void,
		addEntropy(data: number[], estimatedEntropy: number, source: string): void,
		addEntropy(data: string, estimatedEntropy: number, source: string): void,
		isReady(paranoia?: number): boolean,
		getProgress(paranoia?: number): number,
		startCollectors(): void,
		stopCollectors(): void,
		addEventListener(name: string, cb: Function): void,
		removeEventListener(name: string, cb: Function): void
	}

	declare interface SjclRandomStatic {
		new (defaultParanoia: number): SjclRandom
	}

	declare interface SjclKeyExchange {
		srp: SecureRemotePassword
	}

	declare interface SjclSRPGroup {
		N: BigNumber,
		g: BigNumber
	}

	declare interface SecureRemotePassword {
		makeVerifier(
		username: string, password: string, salt: BitArray, group: SjclSRPGroup
	): BitArray,
		makeX(username: string, password: string, salt: BitArray): BitArray,
		knownGroup(i: string): SjclSRPGroup,
		knownGroup(i: number): SjclSRPGroup
	}

	declare interface SjclCipherParams {
		v?: number,
		iter?: number,
		ks?: number,
		ts?: number,
		mode?: string,
		adata?: string,
		cipher?: string
	}

	declare interface SjclCipherEncryptParams {
		salt: BitArray,
		iv: BitArray
	}

	declare interface SjclCipherDecryptParams {
		salt?: BitArray,
		iv?: BitArray
	}

	declare interface SjclCipherEncrypted {
		kemtag?: BitArray,
		ct: BitArray
	}

	declare interface SjclCipherDecrypted {
		key: BitArray
	}

	declare interface SjclConveninceEncryptor {
		(password: string, plaintext: string, params?: SjclCipherEncryptParams, rp?: SjclCipherEncrypted): SjclCipherEncrypted,
		(password: BitArray, plaintext: string, params?: SjclCipherEncryptParams, rp?: SjclCipherEncrypted): SjclCipherEncrypted,
		(password: SjclElGamalPublicKey, plaintext: string, params?: SjclCipherEncryptParams, rp?: SjclCipherEncrypted): SjclCipherEncrypted
	}

	declare interface SjclConveninceDecryptor {
		(password: string, ciphertext: SjclCipherEncrypted, params?: SjclCipherDecryptParams, rp?: SjclCipherDecrypted): string,
		(password: BitArray, ciphertext: SjclCipherEncrypted, params?: SjclCipherDecryptParams, rp?: SjclCipherDecrypted): string,
		(password: SjclElGamalSecretKey, ciphertext: SjclCipherEncrypted, params?: SjclCipherDecryptParams, rp?: SjclCipherDecrypted): string
	}

	declare interface SjclJson {
		encrypt: SjclConveninceEncryptor,
		decrypt: SjclConveninceDecryptor,
		encode(obj: Object): string,
		decode(obj: string): Object
	}

		declare class SjclPseudorandomFunctionFamily  {
		encrypt(data: string): BitArray;
		encrypt(data: BitArray): BitArray
	}

	declare class SjclECCPublicKey  {
		get(): SjclECCPublicKeyData
	}

	declare class SjclECCSecretKey  {
		get(): BitArray
	}

	declare class SjclElGamalPublicKey extends SjclECCPublicKey {
		kem(paranoia: number): {
		key: BitArray,
		tag: BitArray
	}
	}

	declare class SjclElGamalSecretKey extends SjclECCSecretKey {
		unkem(tag: BitArray): BitArray;
		dh(pk: SjclECCPublicKey): BitArray
	}

	declare class SjclEcdsaPublicKey extends SjclECCPublicKey {
		verify(hash: BitArray, rs: BitArray, fakeLegacyVersion: boolean): boolean
	}

	declare class SjclEcdsaSecretKey extends SjclECCSecretKey {
		sign(
		hash: BitArray, paranoia: number, fakeLegacyVersion: boolean, fixedKForTesting?: BigNumber
	): BitArray
	}

	
}

declare module 'TypeHelpers' {
		declare interface One<T> {
		(value: T): BigNumber
	}

	declare interface BigNumberBinaryOperator {
		
	}

	declare interface Two<T1, T2> {
		(x: T1, N: T2): BigNumber
	}

	declare interface Bind1<T> {
		
	}

	declare interface BigNumberTrinaryOperator {
		
	}

			
}
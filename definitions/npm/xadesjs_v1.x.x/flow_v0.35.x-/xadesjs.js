

declare module 'xadesjs' {
					
}

declare module 'npm$namespace$xadesjs' {
	declare type PromiseType = any;

	declare type NamedCurve = "P-256" | "P-384" | "P-521";

	declare type XmlNamespace = {
		prefix: string,
		namespace: string
	};

	declare interface CryptoEx {
		name: string
	}

	declare interface IXmlSerializable {
		Prefix: string,
		GetXml(): Node,
		LoadXml(node: Node): void
	}

	declare interface IAssocArray {
		[index: string]: string
	}

	declare interface IAlgorithm {
		algorithm: Algorithm,
		xmlNamespace: string,
		getAlgorithmName(): string
	}

	declare interface IHashAlgorithm {
		getHash(xml: string): PromiseType
	}

	declare interface IHashAlgorithmConstructable {
		new (): IHashAlgorithm
	}

	declare interface ISignatureAlgorithm {
		getSignature(signedInfo: string, signingKey: CryptoKey, algorithm: Algorithm): PromiseType,
		verifySignature(
		signedInfo: string, key: CryptoKey, signatureValue: string, algorithm?: Algorithm
	): PromiseType
	}

	declare interface ISignatureAlgorithmConstructable {
		new (): ISignatureAlgorithm
	}

	declare interface X509IssuerSerial {
		issuerName: string,
		serialNumber: string
	}

	declare interface IJwkRsa {
		alg: string,
		kty: string,
		e: string,
		n: string,
		ext: boolean
	}

	declare interface IJwkEcdsa {
		crv: NamedCurve,
		kty: "EC",
		x: string,
		y: string,
		ext: boolean
	}

	declare interface Transform {
		Algorithm: string,
		LoadInnerXml(node: Node): void,
		GetInnerXml(): Node,
		GetOutput(): string
	}

	declare interface ICanonicalizationAlgorithmConstructable {
		new (): Transform
	}

	declare interface KeyInfoClause {
		Key: CryptoKey,
		importKey(key: CryptoKey): PromiseType,
		exportKey(alg: Algorithm): PromiseType
	}

	declare function IsEqualsEmptyStrings(s1: string, s2: string): boolean

	declare function CreateDocument(root?: string, namespaceUri?: string, prefix?: string): Document

	declare function SelectSingleNode(node: Node, path: string): Node

	declare function findAttr(node: Node, localName: string, nameSpace?: string): Attr

	declare function findFirst(doc: Node, xpath: string): Node

	declare function findChilds(node: Node, localName: string, nameSpace?: string): Node[]

	declare function encodeSpecialCharactersInAttribute(attributeValue: string): string

	declare function encodeSpecialCharactersInText(text: string): string

	declare function SelectNamespaces(node: Element): Node[]

	declare class XmlError extends Error {
		stack: any;
		constructor(code: XE, ...args: any[]): this
	}

	declare class Application  {
		setEngine(name: string, crypto: Crypto): void;
		crypto: CryptoEx;
		isNodePlugin(): boolean
	}

	declare class XmlObject extends IXmlSerializable {
		m_prefix: string;
		Prefix: string;
		GetPrefix(): string;
		GetXml(): Node;
		GetXml(document: Document): Node;
		LoadXml(node: Node): void;
		toString(): string;
		getAttribute(xel: Element, attribute: string): string
	}

	declare class Convert  {
		ToBase64UrlString(text: string): string;
		FromBase64UrlString(base64UrlText: string): string;
		ToBase64String(text: string): string;
		FromBase64String(base64Text: string): string;
		Base64UrlToBase64(base64url: string): string;
		Base64ToBase64Url(base64: string): string;
		ToBufferUtf8String(text: string): Uint8Array;
		FromBufferUtf8String(buffer: Uint8Array): string;
		ToBufferString(text: string): Uint8Array;
		FromBufferString(buffer: ArrayBuffer): string;
		FromBufferString(buffer: Uint8Array): string
	}

	declare class XmlAlgorithm extends IAlgorithm {
		algorithm: Algorithm;
		xmlNamespace: string;
		getAlgorithmName(): string
	}

	declare class HashAlgorithm extends XmlAlgorithm, IHashAlgorithm {
		getHash(xml: string): PromiseType
	}

	declare class SignatureAlgorithm extends XmlAlgorithm, ISignatureAlgorithm {
		getSignature(signedInfo: string, signingKey: CryptoKey, algorithm: Algorithm): PromiseType;
		verifySignature(
		signedInfo: string, key: CryptoKey, signatureValue: string, algorithm?: Algorithm
	): PromiseType
	}

	declare class Sha1 extends HashAlgorithm {
		algorithm: {
		name: string
	};
		xmlNamespace: string
	}

	declare class Sha224 extends HashAlgorithm {
		algorithm: {
		name: string
	};
		xmlNamespace: string
	}

	declare class Sha256 extends HashAlgorithm {
		algorithm: {
		name: string
	};
		xmlNamespace: string
	}

	declare class Sha384 extends HashAlgorithm {
		algorithm: {
		name: string
	};
		xmlNamespace: string
	}

	declare class Sha512 extends HashAlgorithm {
		algorithm: {
		name: string
	};
		xmlNamespace: string
	}

	declare class RsaPkcs1Sha1 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPkcs1Sha224 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPkcs1Sha256 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPkcs1Sha384 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPkcs1Sha512 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPssSha1 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPssSha224 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPssSha256 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPssSha384 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class RsaPssSha512 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class PssAlgorithmParams extends XmlObject {
		dsPrefix: string;
		DigestMethod: string;
		SaltLength: number;
		MGF: string;
		GetXml(): Element;
		LoadXml(value: Element): void
	}

	declare class HmacSha1 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class HmacSha256 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class HmacSha384 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class HmacSha512 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class EcdsaSha1 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class EcdsaSha224 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class EcdsaSha256 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class EcdsaSha384 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class EcdsaSha512 extends SignatureAlgorithm {
		algorithm: any;
		xmlNamespace: string
	}

	declare class X509Certificate  {
		raw: Uint8Array;
		cert_simpl: any;
		publicKey: CryptoKey;
		constructor(rawData?: Uint8Array): this;
		LoadFromRawData(rawData: Uint8Array): void;
		PublicKey: CryptoKey;
		GetRawCertData(): Uint8Array;
		exportKey(algorithm: Algorithm): PromiseType
	}

	declare class KeyInfoX509Data extends XmlObject, KeyInfoClause {
		constructor(): this;
		constructor(rgbCert: Uint8Array): this;
		constructor(cert: X509Certificate): this;
		Key: CryptoKey;
		importKey(key: CryptoKey): PromiseType;
		exportKey(alg: Algorithm): PromiseType;
		Certificates: X509Certificate[];
		CRL: Uint8Array;
		IssuerSerials: X509IssuerSerial[];
		SubjectKeyIds: Uint8Array[];
		SubjectNames: string[];
		AddCertificate(certificate: X509Certificate): void;
		AddIssuerSerial(issuerName: string, serialNumber: string): void;
		AddSubjectKeyId(subjectKeyId: string): void;
		AddSubjectKeyId(subjectKeyId: Uint8Array): void;
		AddSubjectName(subjectName: string): void;
		GetXml(): Element;
		LoadXml(element: Element): void
	}

	declare class RsaKeyValue extends XmlObject, KeyInfoClause {
		Key: CryptoKey;
		Algorithm: ISignatureAlgorithm;
		Modulus: Uint8Array;
		Exponent: Uint8Array;
		constructor(): this;
		importKey(key: CryptoKey): PromiseType;
		exportKey(alg: Algorithm): PromiseType;
		GetXml(): Element;
		LoadXml(element: Element): void
	}

	declare class EcdsaKeyValue extends XmlObject, KeyInfoClause {
		Key: CryptoKey;
		Algorithm: ISignatureAlgorithm;
		X: Uint8Array;
		Y: Uint8Array;
		NamedCurve: NamedCurve;
		constructor(): this;
		importKey(key: CryptoKey): PromiseType;
		exportKey(alg: Algorithm): PromiseType;
		GetXml(): Element;
		LoadXml(element: Element): void
	}

	declare class XmlCanonicalizer  {
		constructor(withComments: boolean, excC14N: boolean, propagatedNamespaces?: XmlNamespace[]): this;
		InclusiveNamespacesPrefixList: string;
		Canonicalize(node: Node): string
	}

	declare class Transform extends XmlObject, Transform {
		innerXml: Node;
		LoadXml(value: Node): void;
		GetXml(): Element
	}

	declare class XmlDsigEnvelopedSignatureTransform extends Transform {
		Algorithm: string;
		GetOutput(): string
	}

	declare class XmlDsigC14NTransform extends Transform {
		xmlCanonicalizer: XmlCanonicalizer;
		Algorithm: string;
		GetOutput(): string
	}

	declare class XmlDsigC14NWithCommentsTransform extends XmlDsigC14NTransform {
		Algorithm: string;
		xmlCanonicalizer: XmlCanonicalizer
	}

	declare class XmlDsigExcC14NTransform extends Transform {
		xmlCanonicalizer: XmlCanonicalizer;
		Algorithm: string;
		InclusiveNamespacesPrefixList: string;
		GetOutput(): string
	}

	declare class XmlDsigExcC14NWithCommentsTransform extends XmlDsigExcC14NTransform {
		Algorithm: string;
		xmlCanonicalizer: XmlCanonicalizer
	}

	declare class CryptoConfig  {
		CreateFromName(name: string): Transform;
		CreateSignatureAlgorithm(namespace: string): SignatureAlgorithm;
		CreateHashAlgorithm(namespace: string): HashAlgorithm
	}

	declare class DataObject extends XmlObject {
		constructor(): this;
		constructor(id?: string, mimeType?: string, encoding?: string, data?: Element): this;
		Data: NodeList;
		Encoding: string;
		Id: string;
		MimeType: string;
		GetXml(): Element;
		LoadXml(value: Element): void
	}

	declare class Reference extends XmlObject {
		constructor(p?: string): this;
		DigestMethod: string;
		DigestValue: ArrayBuffer;
		Id: string;
		TransformChain: Transform[];
		Type: string;
		Uri: string;
		AddTransform(transform: Transform): void;
		GetXml(): Element;
		LoadXml(value: Element): void
	}

	declare class KeyInfo extends XmlObject {
		constructor(): this;
		length: number;
		Id: string;
		GetEnumerator(): Array<KeyInfoClause>;
		GetEnumerator(requestedObjectType: any): Array<KeyInfoClause>;
		AddClause(clause: KeyInfoClause): void;
		GetXml(): Node;
		LoadXml(value: Element): void
	}

	declare class Signature extends XmlObject {
		constructor(): this;
		Id: string;
		KeyInfo: KeyInfo;
		ObjectList: Array<DataObject>;
		SignatureValue: Uint8Array;
		SignedInfo: SignedInfo;
		AddObject(dataObject: DataObject): void;
		GetXml(): Element;
		LoadXml(value: Element): void
	}

	declare class SignedInfo extends XmlObject {
		constructor(signedXml?: SignedXml): this;
		CanonicalizationMethod: string;
		CanonicalizationMethodObject: Transform;
		Count: number;
		Id: string;
		IsReadOnly: boolean;
		IsSynchronized: boolean;
		References: Reference[];
		SignatureLength: string;
		SignatureMethod: string;
		SignatureParams: XmlObject;
		SyncRoot: any;
		AddReference(reference: Reference): void;
		CopyTo(array: any[], index: number): void;
		GetXml(): Node;
		LoadXml(value: Element): void
	}

	declare class SignedXml extends XmlObject {
		KeyInfo: KeyInfo;
		Signature: Signature;
		Prefix: string;
		SignatureLength: number;
		SignatureMethod: string;
		SignatureValue: ArrayBuffer;
		CanonicalizationMethod: string;
		SignedInfo: SignedInfo;
		SigningKey: CryptoKey;
		SigningKeyName: string;
		constructor(): this;
		constructor(node: Document): this;
		constructor(node: Element): this;
		AddReference(reference: Reference): void;
		ComputeSignature(algorithm: Algorithm): PromiseType;
		CheckSignature(): PromiseType;
		CheckSignature(key: CryptoKey): PromiseType;
		CheckSignature(cert: X509Certificate): PromiseType;
		LoadXml(value: Element): void;
		GetXml(): Element
	}

	
}
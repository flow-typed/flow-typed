

declare module 'pem' {
			declare function createPrivateKey(keyBitsize: Number, options: Object, callback: Function): void

	declare function createPrivateKey(keyBitsize: Number, callback: Function): void

	declare function createPrivateKey(options: Object, callback: Function): void

	declare function createPrivateKey(callback: Function): void

	declare function createDhparam(keyBitsize: Number, callback: Function): void

	declare function createDhparam(callback: Function): void

	declare function createCSR(options: Object, callback: Function): void

	declare function createCSR(callback: Function): void

	declare function createCertificate(options: Object, callback: Function): void

	declare function createCertificate(callback: Function): void

	declare function readCertificateInfo(certificate: string, callback: Function): void

	declare function readCertificateInfo(callback: Function): void

	declare function getPublicKey(certificate: string, callback: Function): void

	declare function getPublicKey(callback: Function): void

	declare function getFingerprint(certificate: string, hash: string, callback: Function): void

	declare function getFingerprint(certificate: string, callback: Function): void

	declare function getFingerprint(callback: Function): void

	declare function getModulus(certificate: string, password: string, callback: Function): void

	declare function getModulus(certificate: string, callback: Function): void

	declare function getDhparamInfo(dh: string, callback: Function): void

	declare function createPkcs12(
		key: string, certificate: string, password: string, options: Object, callback: Function
	): void

	declare function createPkcs12(key: string, certificate: string, password: string, callback: Function): void

	declare function readPkcs12(bufferOrPath: string, options: Object, callback: Function): any

	declare function readPkcs12(options: Object, callback: Function): any

	declare function verifySigningChain(certificate: string, ca: Array<string>, callback: Function): void

	declare function config(options: Object): void

		
}
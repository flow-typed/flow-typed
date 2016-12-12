

declare module 'node-forge' {
					
}

declare module 'pki' {
	declare export type PEM = string;

	declare export type Key = any;

	declare export interface KeyPair {
		publicKey: Key,
		privateKey: Key
	}

	declare export function privateKeyToPem(key: Key, maxline?: number): PEM

	declare export function publicKeyToPem(key: Key, maxline?: number): PEM

		
}

declare module 'rsa' {
		declare export interface GenerateKeyPairOptions {
		bits?: number,
		e?: number,
		workerScript?: string,
		workers?: number,
		workLoad?: number,
		prng?: any,
		algorithm?: string
	}

	declare export function generateKeyPair(
		bits?: number, e?: number, callback?: (err: Error, keypair: KeyPair) => void
	): KeyPair

	declare export function generateKeyPair(
		options?: GenerateKeyPairOptions, callback?: (err: Error, keypair: KeyPair) => void
	): KeyPair

		
}
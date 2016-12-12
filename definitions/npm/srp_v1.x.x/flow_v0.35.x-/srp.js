

declare module 'srp' {
					declare module.exports: undefined


}

declare module 'npm$namespace$SRP' {
		declare export interface Params {
		N_length_bits: number,
		N: BigNum,
		g: BigNum,
		hash: string
	}

	declare export function computeVerifier(params: Params, salt: Buffer, I: Buffer, P: Buffer): Buffer

	declare export function genKey(bytes: number, callback: (error: Error, key: Buffer) => void): void

	declare export function genKey(callback: (error: Error, key: Buffer) => void): void

	declare export class Client  {
		constructor(params: Params, salt: Buffer, identity: Buffer, password: Buffer, secret1: Buffer): this;
		computeA(): Buffer;
		setB(B: Buffer): void;
		computeM1(): Buffer;
		checkM2(M2: Buffer): void;
		computeK(): Buffer
	}

	declare export class Server  {
		constructor(params: Params, verifier: Buffer, secret2: Buffer): this;
		computeB(): Buffer;
		setA(A: Buffer): void;
		checkM1(M1: Buffer): Buffer;
		computeK(): Buffer
	}

	
}
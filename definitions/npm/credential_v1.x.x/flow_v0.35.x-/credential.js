

declare module 'credential' {
	declare type HashCallback = (err: Error, hash: hashObject) => void;

	declare type VerifyCallback = (err: Error, isValid: boolean) => void;

	declare interface defaultOptions {
		keyLength: number,
		work: number,
		hashMethod: string
	}

	declare interface hashObject {
		hash: string,
		salt: string,
		keyLength: number,
		hashMethod: string,
		iterations: number
	}

	declare function credential(
		defaultOptions?: defaultOptions
	): {
		hash(password: string, callback: HashCallback): void,
		hash(password: string): Promise<hashObject>,
		verify(hash: hashObject | string, password: string, callback: VerifyCallback): void,
		verify(hash: hashObject | string, password: string): Promise<boolean>,
		expired(hash: string, days: number): boolean
	}

		declare module.exports: undefined


}
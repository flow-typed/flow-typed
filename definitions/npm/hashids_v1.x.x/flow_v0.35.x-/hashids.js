import type { IHashids } from 'npm$namespace$Hashids'

declare module 'hashids' {
					declare module.exports: IHashids


}

declare module 'npm$namespace$Hashids' {
		declare export interface IHashids {
		new (salt: string, minHashLength?: number, alphabet?: string): IHashids,
		version: string,
		minAlphabetLength: number,
		sepDiv: number,
		guardDiv: number,
		errorAlphabetLength: string,
		errorAlphabetSpace: string,
		alphabet: string[],
		seps: string,
		minHashLength: number,
		salt: string,
		decode(hash: string): number[],
		encode(arg: number): string,
		encode(arg: number[]): string,
		encode(...args: number[]): string,
		encodeHex(str: string): string,
		decodeHex(hash: string): string,
		hash(input: number, alphabet: string): string,
		unhash(input: string[], alphabet: string): number
	}

			
}
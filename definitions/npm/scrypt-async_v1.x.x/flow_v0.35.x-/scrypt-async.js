import type { ScryptStatic } from 'npm$namespace$ScryptAsync'

declare module 'scrypt-async' {
					declare module.exports: ScryptStatic


}

declare module 'npm$namespace$ScryptAsync' {
		declare interface CallbackFunc {
		(key: string): any,
		(key: number[]): any
	}

	declare interface ScryptStatic {
		(password: string, salt: string, logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc, encoding: string): void,
		(password: string, salt: number[], logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc, encoding: string): void,
		(password: number[], salt: string, logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc, encoding: string): void,
		(password: number[], salt: number[], logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc, encoding: string): void,
		(password: string, salt: string, logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc): void,
		(password: string, salt: number[], logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc): void,
		(password: number[], salt: string, logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc): void,
		(password: number[], salt: number[], logN: number, r: number, dkLen: number, interruptStep: number, callback: CallbackFunc): void,
		(password: string, salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc, encoding: string): void,
		(password: string, salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc, encoding: string): void,
		(password: number[], salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc, encoding: string): void,
		(password: number[], salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc, encoding: string): void,
		(password: string, salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc): void,
		(password: string, salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc): void,
		(password: number[], salt: string, logN: number, r: number, dkLen: number, callback: CallbackFunc): void,
		(password: number[], salt: number[], logN: number, r: number, dkLen: number, callback: CallbackFunc): void
	}

			
}
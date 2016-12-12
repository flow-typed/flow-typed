import type { Wol } from 'npm$namespace$wol'

declare module 'wake_on_lan' {
					declare module.exports: Wol


}

declare module 'npm$namespace$wol' {
	declare type ErrorCallback = (Error: any) => void;

	declare export interface WakeOptions {
		address?: string,
		num_packets?: number,
		interval?: number,
		port?: number
	}

	declare export interface Wol {
		wake(macAddress: string): void,
		wake(macAddress: string, callback: ErrorCallback): void,
		wake(macAddress: string, opts: WakeOptions, callback?: Function): void,
		createMagicPacket(macAddress: string): Buffer
	}

			
}
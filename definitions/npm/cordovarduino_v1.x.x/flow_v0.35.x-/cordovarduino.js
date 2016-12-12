import type { Serial } from 'npm$namespace$Cordovardunio'

declare module 'cordovarduino' {
					
}

declare module 'npm$namespace$Cordovardunio' {
		declare interface Serial {
		requestPermission(successCallback: Function, errorCallback: Function): void,
		open(opts: SerialOptions, successCallback: Function, errorCallback: Function): void,
		write(data: string, successCallback: Function, errorCallback: Function): void,
		read(successCallback: Function, errorCallback: Function): void,
		close(successCallback: Function, errorCallback: Function): void,
		registerReadCallback(successCallback: Function, errorCallback: Function): void
	}

	declare interface SerialOptions {
		baudRate?: number,
		dataBits?: number,
		stopBits?: number,
		parity?: number
	}

			
}
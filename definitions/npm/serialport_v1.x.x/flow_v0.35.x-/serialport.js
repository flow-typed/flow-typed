

declare module 'serialport' {
				declare class SerialPort  {
		constructor(path: string, options?: Object, openImmediately?: boolean, callback?: (err: string) => void): this;
		isOpen: boolean;
		on(event: string, callback?: (data?: any) => void): void;
		open(callback?: () => void): void;
		write(buffer: any, callback?: (err: string, bytesWritten: number) => void): void;
		pause(): void;
		resume(): void;
		disconnected(err: Error): void;
		close(callback?: (err: any) => void): void;
		flush(callback?: (err: any) => void): void;
		set(options: SerialPort.setOptions, callback: () => void): void;
		drain(callback?: (err: any) => void): void;
		update(options: SerialPort.updateOptions, callback?: () => void): void;
		list(callback: (err: string, ports: SerialPort.portConfig[]) => void): void;
		parsers: {
		readline: (delimiter: string) => void,
		raw: (emitter: any, buffer: string) => void
	}
	}

	declare module.exports: undefined


}

declare module 'SerialPort' {
		declare interface portConfig {
		comName: string,
		manufacturer: string,
		serialNumber: string,
		pnpId: string,
		locationId: string,
		vendorId: string,
		productId: string
	}

	declare interface setOptions {
		brk?: boolean,
		cts?: boolean,
		dsr?: boolean,
		dtr?: boolean,
		rts?: boolean
	}

	declare interface updateOptions {
		baudRate?: number
	}

			
}
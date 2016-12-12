

declare module 'onoff' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___ONOFF' {
		declare interface GpioOptions {
		debounceTimeout: number
	}

		declare class Gpio  {
		constructor(gpio: number, direction: string): this;
		constructor(gpio: number, direction: string, edge: string): this;
		constructor(gpio: number, direction: string, edge: string, options: GpioOptions): this;
		constructor(gpio: number, direction: string, options: GpioOptions): this;
		gpio: number;
		gpioPath: string;
		opts: GpioOptions;
		readBuffer: Buffer;
		listeners: Array<(error: Error, value: number) => void>;
		valueFd: number;
		read(cb: (err: Error, value: number) => void): void;
		readSync(): number;
		write(value: number, cb: (err: Error, value: number) => void): void;
		writeSync(value: number): void;
		watch(cb: (error: Error, value: number) => void): void;
		unwatch(): void;
		unwatch(cb: (error: Error, value: number) => void): void;
		unwatchAll(): void;
		direction(): string;
		setDirection(value: string): void;
		edge(): string;
		setEdge(value: string): void;
		options(): GpioOptions;
		unexport(): void
	}

	
}


declare module 'ua-parser-js' {
				declare export class UAParser  {
		VERSION: string;
		BROWSER: IUAParser.BROWSER;
		CPU: IUAParser.CPU;
		DEVICE: IUAParser.DEVICE;
		ENGINE: IUAParser.ENGINE;
		OS: IUAParser.OS;
		constructor(uastring?: string, extensions?: any): this;
		getBrowser(): IUAParser.IBrowser;
		getOS(): IUAParser.IOS;
		getEngine(): IUAParser.IEngine;
		getDevice(): IUAParser.IDevice;
		getCPU(): IUAParser.ICPU;
		getUA(): string;
		setUA(uastring: string): UAParser;
		getResult(): IUAParser.IResult
	}

	
}

declare module 'npm$namespace$IUAParser' {
		declare export interface IBrowser {
		name: string,
		version: string,
		major: string
	}

	declare export interface IDevice {
		model: string,
		type: string,
		vendor: string
	}

	declare export interface IEngine {
		name: string,
		version: string
	}

	declare export interface IOS {
		name: string,
		version: string
	}

	declare export interface ICPU {
		architecture: string
	}

	declare export interface IResult {
		ua: string,
		browser: IBrowser,
		device: IDevice,
		engine: IEngine,
		os: IOS,
		cpu: ICPU
	}

	declare export interface BROWSER {
		NAME: string,
		MAJOR: string,
		VERSION: string
	}

	declare export interface CPU {
		ARCHITECTURE: string
	}

	declare export interface DEVICE {
		MODEL: string,
		VENDOR: string,
		TYPE: string,
		CONSOLE: string,
		MOBILE: string,
		SMARTTV: string,
		TABLET: string,
		WEARABLE: string,
		EMBEDDED: string
	}

	declare export interface ENGINE {
		NAME: string,
		VERSION: string
	}

	declare export interface OS {
		NAME: string,
		VERSION: string
	}

			
}
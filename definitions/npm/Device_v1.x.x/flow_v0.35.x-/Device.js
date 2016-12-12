

declare module 'device' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare interface IDeviceInfo {
		available: boolean,
		platform: string,
		version: string,
		uuid: string,
		cordova: string,
		model: string,
		manufacturer: string,
		isVirtual: boolean,
		serial: string
	}

	declare interface IDeviceService {
		getDevice(): IDeviceInfo,
		getCordova(): string,
		getModel(): string,
		getName(): string,
		getPlatform(): string,
		getUUID(): string,
		getVersion(): string,
		getManufacturer(): string
	}

			
}
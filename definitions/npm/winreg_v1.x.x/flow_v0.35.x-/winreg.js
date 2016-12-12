

declare module 'winreg' {
		declare interface WinregStatic {
		new (options: Winreg.Options): Winreg.Registry,
		HKLM: string,
		HKCU: string,
		HKCR: string,
		HKU: string,
		HKCC: string,
		HIVES: Array<string>,
		REG_SZ: string,
		REG_MULTI_SZ: string,
		REG_EXPAND_SZ: string,
		REG_DWORD: string,
		REG_QWORD: string,
		REG_BINARY: string,
		REG_NONE: string,
		REG_TYPES: Array<string>,
		DEFAULT_VALUE: string
	}

			declare module.exports: WinregStatic


}

declare module 'npm$namespace$Winreg' {
		declare export interface Options {
		host?: string,
		hive?: string,
		key?: string,
		arch?: string
	}

	declare export interface Registry {
		host: string,
		hive: string,
		key: string,
		path: string,
		arch: string,
		parent: Registry,
		values(cb: (err: Error, result: Array<Winreg.RegistryItem>) => void): Registry,
		keys(cb: (err: Error, result: Array<Registry>) => void): Registry,
		get(name: string, cb: (err: Error, result: Winreg.RegistryItem) => void): Registry,
		set(name: string, type: string, value: string, cb: (err: Error) => void): Registry,
		remove(name: string, cb: (err: Error) => void): Registry,
		clear(cb: (err: Error) => void): Registry,
		erase(cb: (err: Error) => void): Registry,
		destroy(cb: (err: Error) => void): Registry,
		create(cb: (err: Error) => void): Registry,
		keyExists(cb: (err: Error, exists: boolean) => void): Registry,
		valueExists(name: string, cb: (err: Error, exists: boolean) => void): Registry
	}

	declare export interface RegistryItem {
		host: string,
		hive: string,
		key: string,
		name: string,
		type: string,
		value: string,
		arch: string
	}

			
}
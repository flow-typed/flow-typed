

declare module 'node-config-manager' {
		declare interface Options {
		configDir: string,
		env: string,
		camelCase: boolean
	}

	declare interface ConfigManager {
		init(options: Options): ConfigManager,
		set(key: string, value: string | boolean): ConfigManager,
		get(key: string): string | boolean,
		addConfig(configName: string): ConfigManager,
		getConfig(configName: string): any,
		removeConfig(configName: string): ConfigManager,
		count(): number,
		method: any
	}

			declare module.exports: ConfigManager


}


declare module 'angular-toasty' {
					
}

declare module 'npm$namespace$toasty' {
		declare interface IToastyService {
		(options: IToastyConfig, type?: string): void,
		(title: string | number): void,
		default(options: IToastyConfig): void,
		default(title: string | number): void,
		info(options: IToastyConfig): void,
		info(title: string | number): void,
		wait(options: IToastyConfig): void,
		wait(title: string | number): void,
		success(options: IToastyConfig): void,
		success(title: string | number): void,
		error(options: IToastyConfig): void,
		error(title: string | number): void,
		warning(options: IToastyConfig): void,
		warning(title: string | number): void,
		clear(id?: number): void,
		getGlobalConfig(): IGlobalConfig
	}

	declare interface IToastyConfig {
		title: string,
		msg?: string,
		showClose?: boolean,
		clickToClose?: boolean,
		timeout?: number,
		sound?: boolean,
		html?: boolean,
		shake?: boolean,
		theme?: string,
		type?: string,
		onAdd?: Function,
		onRemove?: Function,
		onClick?: Function
	}

	declare interface IGlobalConfig {
		limit?: number,
		title?: string,
		msg?: string,
		showClose?: boolean,
		clickToClose?: boolean,
		position?: string,
		timeout?: number | boolean,
		sound?: boolean,
		html?: boolean,
		shake?: boolean,
		theme?: string
	}

	declare interface IToastyConfigProvider {
		setConfig(override: IGlobalConfig): void,
		$get(): IGlobalConfig
	}

			
}
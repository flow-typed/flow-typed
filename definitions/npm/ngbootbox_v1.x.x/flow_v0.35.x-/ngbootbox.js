

declare module 'ngbootbox' {
		declare interface NgBootboxDialog {
		title?: string,
		message?: string,
		templateUrl?: string,
		locale?: string,
		callback?: () => any,
		onEscape?: () => any | boolean,
		show?: boolean,
		backdrop?: boolean,
		closeButton?: boolean,
		animate?: boolean,
		className?: string,
		size?: string,
		buttons?: BootboxButtonMap
	}

	declare interface BootboxService {
		alert(msg: string): Promise<any>,
		confirm(msg: string): Promise<any>,
		prompt(msg: string): Promise<any>,
		customDialog(options: NgBootboxDialog): void,
		setDefaults(options: BootboxDefaultOptions): void,
		hideAll(): void,
		addLocale(name: string, values: BootboxLocaleValues): void,
		removeLocale(name: string): void,
		setLocale(name: string): void
	}

			
}


declare module 'ng-notify' {
					
}

declare module 'npm$namespace$ngNotify' {
		declare interface IUserOptions {
		type?: string,
		theme?: string,
		position?: string,
		duration?: number,
		sticky?: boolean,
		button?: boolean,
		html?: boolean
	}

	declare interface INotifyService {
		addTheme(themeName: string, className: string): void,
		addType(typeName: string, className: string): void,
		config(userOptions: IUserOptions): void,
		dismiss(): void,
		set(message: string): void,
		set(message: string, type: string): void,
		set(message: string, userOptions: IUserOptions): void
	}

			
}
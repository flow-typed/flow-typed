

declare module 'trayballoon' {
		declare interface TrayballoonOptions {
		text: string,
		title?: string,
		icon?: string,
		timeout?: number,
		wait?: boolean
	}

	declare function trayballoonFn(opts: TrayballoonOptions, fn: Function): void

		declare module.exports: undefined


}
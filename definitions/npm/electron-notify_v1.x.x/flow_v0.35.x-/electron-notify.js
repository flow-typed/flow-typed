

declare module 'electron-notify' {
		declare export interface ICustomConfig {
		width?: number,
		height?: number,
		padding?: number,
		borderRadius?: number,
		displayTime?: number,
		animationSteps?: number,
		animationStepMs?: number,
		animateInParallel?: boolean,
		appIcon?: string,
		pathToModule?: string,
		logging?: boolean,
		defaultWindow?: Electron.BrowserWindowOptions,
		defaultStyleContainer?: any,
		defaultStyleAppIcon?: any,
		defaultStyleImage?: any,
		defaultStyleClose?: any,
		defaultStyleText?: any
	}

	declare export interface ICloseNotificationEvent {
		event: "close" | "show" | "click",
		id: number
	}

	declare export interface INotificationEvent {
		closeNotification: (reason: any) => void
	}

	declare export interface INotification {
		title: string,
		text?: string,
		image?: string,
		url?: string,
		sound?: string,
		onClickFunc?: (event: INotificationEvent) => void,
		onShowFunc?: (event: INotificationEvent) => void,
		onCloseFunc?: (event: ICloseNotificationEvent) => void
	}

	declare export function setConfig(customConfig: ICustomConfig): void

	declare export function notify(notification: INotification): void

	declare export function closeAll(): void

	declare export function getTemplatePath(): string

	declare export function setTemplatePath(path: string): void

		
}
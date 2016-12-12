

declare module 'electron-notifications' {
			declare export function notify(
		title: string, data?: ElectronNotifications.NotifierOptions
	): ElectronNotifications.NotificationWindow

		
}

declare module 'npm$namespace$ElectronNotifications' {
		declare interface NotifierOptions {
		message?: string,
		icon?: string,
		buttons?: string[]
	}

		declare class NotificationWindow extends Electron$BrowserWindow {
		on(event: "clicked", listener: Function): this;
		on(event: "swipedRight", listener: Function): this;
		on(event: "buttonClicked", listener: (text: string) => void): this;
		on(event: string, listener: Function): this
	}

	
}
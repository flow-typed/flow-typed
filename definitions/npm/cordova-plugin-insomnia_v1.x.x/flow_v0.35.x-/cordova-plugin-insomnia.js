

declare module 'cordova-plugin-insomnia' {
		declare interface Plugins {
		insomnia: InsomniaPlugin.Insomnia
	}

			
}

declare module 'npm$namespace$InsomniaPlugin' {
		declare export interface Insomnia {
		keepAwake(success?: () => any, fail?: () => any): void,
		allowSleepAgain(success?: () => any, fail?: () => any): void
	}

			
}
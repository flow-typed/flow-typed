import type { SpinnerPluginStatic } from 'npm$namespace$SpinnerPlugin'

declare module 'cordova-plugin-spinner' {
					
}

declare module 'npm$namespace$SpinnerPlugin' {
		declare interface SpinnerPluginStatic {
		activityStart(
		labelText?: string, successCallback?: () => void, failureCallback?: (error: string) => void
	): void,
		activityStop(successCallback?: () => void, failureCallback?: (error: string) => void): void
	}

			
}
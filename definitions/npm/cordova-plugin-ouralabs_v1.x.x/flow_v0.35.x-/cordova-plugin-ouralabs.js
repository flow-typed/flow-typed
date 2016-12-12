import type { OuralabsStatic } from 'npm$namespace$OuralabsPlugin'

declare module 'cordova-plugin-ouralabs' {
					
}

declare module 'npm$namespace$OuralabsPlugin' {
		declare interface OuralabsStatic {
		LogLevel: {
		TRACE: number,
		DEBUG: number,
		INFO: number,
		WARN: number,
		ERROR: number,
		FATAL: number
	},
		init(
		channelId: string, successCallback?: () => void, failureCallback?: (error: string) => void
	): void,
		setLogToBrowserConsole(enable: boolean): void,
		setHookBrowserConsole(enable: boolean): void,
		setAttributes(
		attribute1?: string, attribute2?: string, attribute3?: string, successCallback?: () => void, errorCallback?: (error: string) => void
	): void,
		logTrace(
		tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void
	): void,
		logDebug(
		tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void
	): void,
		logInfo(
		tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void
	): void,
		logWarn(
		tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void
	): void,
		logError(
		tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void
	): void,
		logFatal(
		tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void
	): void,
		log(
		logLevel: number, tag: string, message: string, metadata?: any, successCallback?: () => void, failureCallback?: (error: string) => void
	): void
	}

			
}
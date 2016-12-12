

declare module 'jquery.postMessage' {
		declare interface JQueryStatic {
		postMessage(message: string, targetUrl: string, target?: Window): void,
		postMessage(message: {
		[key: string]: any
	}, targetUrl: string, target?: Window): void,
		receiveMessage(
		callback: (event: MessageEvent) => any, sourceOrigin?: string, delay?: number
	): void,
		receiveMessage(
		callback: (event: MessageEvent) => any, sourceOrigin?: (origin: string) => boolean, delay?: number
	): void
	}

			
}
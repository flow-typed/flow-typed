

declare module 'bigscreen' {
		declare interface BigScreenStatic {
		element: Element,
		enabled: boolean,
		exit(): void,
		onchange(element: Element): void,
		onenter(element: Element): void,
		onerror(element: Element, reason: string): void,
		onexit(): void,
		request(
		element: Element, onEnter?: (element: Element) => void, onExit?: () => void, onError?: (element: Element, reason: string) => void
	): void,
		toggle(
		element: Element, onEnter?: (element: Element) => void, onExit?: () => void, onError?: (element: Element, reason: string) => void
	): void,
		videoEnabled(video: HTMLVideoElement): boolean
	}

			declare module.exports: BigScreenStatic


}


declare module 'keyboardjs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$keyboardjs' {
		declare interface KeyEvent {
		preventRepeat(): void
	}

	declare interface Callback {
		(e?: KeyEvent): void
	}

	declare export function bind(
		keyCombo: string | string[], pressed: Callback, released?: Callback, preventRepeatByDefault?: boolean
	): void

	declare export function unbind(keyCombo: string | string[], pressed?: Callback, released?: Callback): void

	declare export function setContext(identifier: string): void

	declare export function withContext(identifier: string, inContextCallBack: () => void): void

	declare export function getContext(): string

	declare export function pause(): void

	declare export function resume(): void

	declare export function reset(): void

	declare export function pressKey(keyCombo: string): void

	declare export function releaseKey(keyCombo: string): void

	declare export function releaseAllKeys(): void

	declare export function watch(myWin: Window, myDoc: Document | HTMLFormElement): void

	declare export function watch(myDoc: Document | HTMLFormElement): void

	declare export function watch(): void

	declare export function stop(): void

		
}
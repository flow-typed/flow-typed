

declare module 'xterm' {
		declare interface Xterm {
		options: Xterm.IOptions,
		element: HTMLElement,
		textarea: HTMLElement,
		attachCustomKeydownHandler(callback: (event: KeyboardEvent) => boolean): void,
		blur(): void,
		clear(): void,
		destroy(): void,
		focus(): void,
		getOption(key: string): any,
		on(event: string, callback: (...args: any[]) => void): void,
		off(event: string, callback: (...args: any[]) => void): void,
		open(parent: HTMLElement): void,
		refresh(start: number, end: number, queue?: boolean): void,
		reset(): void,
		resize(x: number, y: number): void,
		scrollDisp(n: number): void,
		setOption(key: string, value: any): void,
		write(text: string): void,
		writeln(text: string): void
	}

	declare interface XtermConstructor {
		new (options?: Xterm.IOptions): Xterm,
		(options?: Xterm.IOptions): Xterm
	}

			declare module.exports: XtermConstructor


}

declare module 'Xterm' {
		declare interface IOptions {
		colors?: string[],
		theme?: string,
		convertEol?: boolean,
		termName?: string,
		geometry?: number[],
		cursorBlink?: boolean,
		visualBell?: boolean,
		popOnBell?: boolean,
		scrollback?: number,
		debug?: boolean,
		cancelEvents?: boolean
	}

			
}
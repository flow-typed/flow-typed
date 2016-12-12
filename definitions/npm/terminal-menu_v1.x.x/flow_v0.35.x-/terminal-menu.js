

declare module 'terminal-menu' {
			declare function MenuContainerFactory(): MenuContainerFactory.TerminalMenu

	declare function MenuContainerFactory(
		options: MenuContainerFactory.TerminalMenuOptions
	): MenuContainerFactory.TerminalMenu

		declare module.exports: undefined


}

declare module 'MenuContainerFactory' {
		declare export interface Thickness {
		left: number,
		right: number,
		top: number,
		bottom: number
	}

	declare export interface TerminalMenuOptions {
		width?: number,
		x?: number,
		y?: number,
		fg?: string,
		bg?: string,
		padding?: number | Thickness,
		selected?: number
	}

	declare export interface TerminalMenu {
		add(label: string): void,
		add(label: string, callback: (label: string, index: number) => void): void,
		write(msg: string): void,
		createStream(): stream.Duplex,
		reset(): void,
		close(): void,
		on(
		eventName: string | NO PRINT IMPLEMENTED: SymbolKeyword, callback: (label: string, index: number) => void
	): this,
		on(eventName: string, callback: (label: string, index: number) => void): this
	}

			
}
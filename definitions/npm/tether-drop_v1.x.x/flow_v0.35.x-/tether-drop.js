

declare module 'tether-drop' {
				declare class Drop  {
		constructor(options: Drop.IDropOptions): this;
		content: HTMLElement;
		tether: Tether;
		open(): void;
		close(): void;
		remove(): void;
		toggle(): void;
		isOpened(): boolean;
		position(): void;
		destroy(): void;
		on(event: string, handler: Function, context?: any): void;
		once(event: string, handler: Function, context?: any): void;
		off(event: string, handler?: Function): void;
		createContext(options: Drop.IDropContextOptions): typeof Drop
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$Drop' {
		declare interface IDropContextOptions {
		classPrefix?: string,
		defaults?: IDropOptions
	}

	declare interface IDropOptions {
		target?: Element,
		content?: Element | string | ((drop?: Drop) => string) | ((drop?: Drop) => Element),
		position?: string,
		openOn?: string,
		classes?: string,
		constrainToWindow?: boolean,
		constrainToScrollParent?: boolean,
		remove?: boolean,
		beforeClose?: () => boolean,
		openDelay?: number,
		closeDelay?: number,
		focusDelay?: number,
		blurDelay?: number,
		hoverOpenDelay?: number,
		hoverCloseDelay?: number,
		tetherOptions?: Tether.ITetherOptions
	}

			
}
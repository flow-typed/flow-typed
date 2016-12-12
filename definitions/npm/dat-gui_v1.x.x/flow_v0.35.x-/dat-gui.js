

declare module 'dat-gui' {
					
}

declare module 'npm$namespace$dat' {
		declare export interface GUIParams {
		autoPlace?: boolean,
		closed?: boolean,
		load?: any,
		name?: string,
		preset?: string,
		width?: number
	}

		declare export class GUI  {
		constructor(option?: GUIParams): this;
		___controllers: GUIController[];
		___folders: GUI[];
		domElement: HTMLElement;
		add(target: Object, propName: string): GUIController;
		add(target: Object, propName: string, min: number, max: number): GUIController;
		add(target: Object, propName: string, status: boolean): GUIController;
		add(target: Object, propName: string, items: string[]): GUIController;
		add(target: Object, propName: string, items: number[]): GUIController;
		add(target: Object, propName: string, items: Object): GUIController;
		addColor(target: Object, propName: string): GUIController;
		addColor(target: Object, propName: string, color: string): GUIController;
		addColor(target: Object, propName: string, rgba: number[]): GUIController;
		addColor(
		target: Object, propName: string, hsv: {
		h: number,
		s: number,
		v: number
	}
	): GUIController;
		addFolder(propName: string): GUI;
		close(): void;
		open(): void;
		remember(target: Object): void
	}

	declare export class GUIController  {
		destroy(): void;
		fire(): GUIController;
		getValue(): any;
		isModified(): boolean;
		listen(): GUIController;
		min(n: number): GUIController;
		remove(target: GUIController): void;
		setValue(value: any): GUIController;
		step(n: number): GUIController;
		updateDisplay(): void;
		onChange: (value?: any) => void;
		onFinishChange: (value?: any) => void
	}

	
}
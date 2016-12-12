

declare module 'xJSFL' {
		declare interface _xjsfl {
		init(_this: any): void,
		uri: string
	}

	declare interface GenericCollection<T> {
		elements: T[],
		rename(pattern: string): GenericCollection<T>,
		update(): GenericCollection<T>,
		select(): GenericCollection<T>,
		toGrid(x: number, y: number): GenericCollection<T>,
		randomize(info: any): GenericCollection<T>,
		each(callback: (element: T, index?: number, elements?: T[]) => void)
	}

	declare interface ElementCollection {
		
	}

	declare interface ItemCollection {
		
	}

	declare function trace(...args: any[]): void

	declare function clear(): void

	declare function format(format: string, ...params: any[]): void

	declare function inspect(item: any): void

	declare function list(item: any): void

	declare function debug(item: any): void

	declare function include(className: string): void

	declare function require(className: string): void

	declare function load(filePath: string): string

	declare function save(filePath: string, data: string): void

	declare function $(selector: string): ElementCollection

	declare function $$(selector: string): ItemCollection

	declare class _File  {
		constructor(path: string): this;
		copy(path: string): _File;
		write(data: string): _File;
		contents: string
	}

	declare class _Folder  {
		constructor(path: string): this;
		contents: _File[]
	}

	declare class _Context  {
		create(): _Context;
		from(frame: FlashFrame): _Context;
		layer: FlashLayer;
		frame: FlashFrame;
		keyframes: FlashFrame[];
		elements: FlashElement[];
		setLayer(index: number);
		update();
		goto()
	}

	declare class _URI  {
		constructor(path: string): this;
		uri: string;
		folder: string;
		name: string;
		extension: string;
		path: string;
		type: string;
		toURI(string: string): string
	}

	
}
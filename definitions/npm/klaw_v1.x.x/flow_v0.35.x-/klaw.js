

declare module 'klaw' {
			declare function K(root: string, options?: K.Options): K.Walker

		declare module.exports: undefined


}

declare module 'K' {
	declare type QueueMethod = "shift" | "pop";

	declare type Event = "close" | "data" | "end" | "readable" | "error";

	declare interface Item {
		path: string,
		stats: fs.Stats
	}

	declare interface Options {
		queueMethod?: QueueMethod,
		pathSorter?: (a: Array<Item>) => Array<Item>,
		fs?: any,
		filter?: (a: Item) => boolean
	}

	declare interface Walker {
		on(event: Event, listener: Function): this,
		on(event: "close", listener: () => void): this,
		on(event: "data", listener: (item: Item) => void): this,
		on(event: "end", listener: () => void): this,
		on(event: "readable", listener: () => void): this,
		on(event: "error", listener: (err: Error) => void): this,
		read(): Item
	}

			
}
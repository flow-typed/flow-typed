

declare module 'monk' {
			declare function m(database: string): m.Monk

		declare module.exports: undefined


}

declare module 'm' {
		declare export interface promise {
		type: string,
		on(eventName: string, fn: Function): void,
		error(fn: Function): promise,
		success(fn: Function): promise
	}

	declare export interface Collection {
		id(hexstring: string): string,
		id(obj: Object): string,
		id(): string,
		cast(obj?: Object): Object,
		count(needle: Object, fn?: Function): promise,
		distinct(field: string, options?: Object, fn?: Function): promise,
		drop(fn?: Function): promise,
		insert(data: Object, options?: Object, fn?: Function): promise,
		find(needle: Object, options?: Object, fn?: Function): promise,
		findOne(needle: Object, options?: Object, fn?: Function): promise,
		findAndModify(
		needle: Object, update?: Object, filter?: string[], options?: Object, fn?: Function
	): promise,
		findById(id: string, options?: Object, fn?: Function): promise,
		update(
		needle: Object, update: Object, filter?: string[], options?: Object, fn?: Function
	): promise,
		updateById(
		id: string, update: Object, filter?: string[], options?: Object, fn?: Function
	): promise,
		remove(needle: Object, options?: Object, fn?: Function): promise,
		removeById(id: string, options?: Object, fn?: Function): promise
	}

	declare export interface Monk {
		(database: string): void,
		close(): void,
		get(collection: string): Collection
	}

			
}
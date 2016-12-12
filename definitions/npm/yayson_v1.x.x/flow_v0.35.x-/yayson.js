

declare module 'yayson' {
		declare interface Adapter {
		get(model: {
		
	}, key?: string): any,
		id(model: {
		
	}): string
	}

	declare interface Yayson {
		Store: typeof Store,
		Presenter: typeof Presenter,
		Adapter: Adapter
	}

	declare interface YaysonOptions {
		adapter?: "default" | "sequelize"
	}

	declare function y(arg?: YaysonOptions): Yayson

	declare class Store  {
		sync(obj: {
		
	}): any;
		find(type: string, id: string): any;
		findAll(type: string): any[];
		remove(type: string, id?: string): void;
		reset(): void;
		records: y.Record[];
		relations: {
		[key: string]: any
	}
	}

	declare class Presenter  {
		adapter: string;
		render<T>(
		instanceOrCollection: PromiseLike<T>, options?: y.JsonOptions
	): PromiseLike<T>;
		render(instanceOrCollection: {
		
	}, options?: y.JsonOptions): any;
		toJSON(instanceOrCollection: {
		
	}, options?: y.JsonOptions): any;
		render<T>(
		instanceOrCollection: PromiseLike<T>, options?: y.JsonOptions
	): PromiseLike<T>;
		render(instanceOrCollection: {
		
	}, options?: y.JsonOptions): any;
		toJSON(instanceOrCollection: {
		
	}, options?: y.JsonOptions): any;
		id(instance: {
		
	}): string;
		type: string
	}

	declare module.exports: undefined


}

declare module 'y' {
		declare interface JsonOptions {
		[key: string]: any,
		meta?: {
		
	}
	}

	declare interface Record {
		id: any,
		type: string,
		attributes: any,
		relationships: any
	}

			
}
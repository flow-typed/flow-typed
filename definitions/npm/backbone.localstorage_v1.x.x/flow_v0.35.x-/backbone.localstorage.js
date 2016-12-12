

declare module 'backbone.localstorage' {
					
}

declare module 'npm$namespace$Backbone' {
		declare interface Serializer {
		serialize(item: any): any,
		deserialize(data: any): any
	}

		declare class LocalStorage  {
		name: string;
		serializer: Serializer;
		records: string[];
		constructor(name: string, serializer?: Serializer): this;
		save(): void;
		create(model: any): any;
		update(model: any): any;
		find(model: any): any;
		findAll(): any;
		destroy<T>(model: T): T;
		localStorage(): any;
		_clear(): void;
		_storageSize(): number;
		_itemName(id: any): string
	}

	
}
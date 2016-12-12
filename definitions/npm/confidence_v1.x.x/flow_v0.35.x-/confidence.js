

declare module 'confidence' {
				declare export class Store  {
		constructor(document?: any): this;
		load(document: any): void;
		get(key: string, criteria?: any): any;
		meta(key: string, criteria?: any): any
	}

	
}
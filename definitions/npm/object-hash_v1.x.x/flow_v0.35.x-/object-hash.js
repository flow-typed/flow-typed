

declare module 'object-hash' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ObjectHash' {
		declare export interface IOptions {
		algorithm?: string,
		encoding?: string,
		excludeValues?: boolean
	}

	declare interface HashTableItem {
		value: any,
		count: number
	}

	declare interface HashTableItemWithKey {
		hash: string
	}

	declare export interface HashTable {
		add(...values: any[]): HashTable,
		remove(...values: any[]): HashTable,
		hasKey(key: string): boolean,
		getValue(key: string): any,
		getCount(key: string): number,
		table(): {
		[key: string]: HashTableItem
	},
		toArray(): HashTableItemWithKey[],
		reset(): HashTable
	}

	declare export interface HashTableStatic {
		(options?: IOptions): HashTable
	}

	declare export interface Hash {
		(object: any, options?: IOptions): string,
		sha1(object: any): string,
		keys(object: any): string,
		MD5(object: any): string,
		keysMD5(object: any): string,
		HashTable: HashTableStatic
	}

			
}
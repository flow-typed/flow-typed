

declare module 'hashmap-1.1' {
				declare class HashMap<KeyType, ValueType>  {
		get(key: KeyType): ValueType;
		set(key: KeyType, value: ValueType): void;
		has(key: KeyType): boolean;
		remove(key: KeyType): void;
		keys(): KeyType[];
		values(): ValueType[];
		count(): number;
		clear(): void;
		forEach(callback: (value: ValueType, key: KeyType) => void): void
	}

	
}
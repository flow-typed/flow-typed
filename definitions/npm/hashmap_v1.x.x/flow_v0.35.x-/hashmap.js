

declare module 'hashmap' {
				declare class HashMap<TKey, TValue>  {
		constructor(): this;
		constructor(map: HashMap<TKey, TValue>): this;
		constructor(...keysAndValues: (TKey | TValue)[]): this;
		get(key: TKey): TValue;
		set(key: TKey, value: TValue): HashMap<TKey, TValue>;
		multi(...keysAndValues: (TKey | TValue)[]): HashMap<TKey, TValue>;
		copy(map: HashMap<TKey, TValue>): HashMap<TKey, TValue>;
		has(key: TKey): boolean;
		search(value: TValue): TKey;
		remove(key: TKey): HashMap<TKey, TValue>;
		keys(): TKey[];
		values(): TValue[];
		count(): number;
		clear(): HashMap<TKey, TValue>;
		clone(): HashMap<TKey, TValue>;
		forEach(callback: (value: TValue, key: TKey) => void): HashMap<TKey, TValue>
	}

	declare module.exports: undefined


}
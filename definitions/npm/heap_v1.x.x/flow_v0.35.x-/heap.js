

declare module 'heap' {
				declare class Heap<T>  {
		constructor(cmp?: (a: T, b: T) => number): this;
		push(item: T): void;
		insert(item: T): void;
		pop(): T;
		peek(): T;
		top(): T;
		front(): T;
		replace(item: T): T;
		pushpop(item: T): T;
		heapify(): void;
		updateItem(item: T): void;
		empty(): boolean;
		size(): number;
		toArray(): T[];
		clone(): Heap<T>;
		copy(): Heap<T>;
		push<T>(array: T[], item: T, cmp?: (a: T, b: T) => number): void;
		pop<T>(array: T[], cmp?: (a: T, b: T) => number): T;
		replace<T>(array: T[], item: T, cmp?: (a: T, b: T) => number): T;
		pushpop<T>(array: T[], item: T, cmp?: (a: T, b: T) => number): T;
		heapify<T>(array: T[], cmp?: (a: T, b: T) => number): Heap<T>;
		updateItem<T>(array: T[], item: T, cmp?: (a: T, b: T) => number): void;
		nlargest<T>(array: T[], n: number, cmp?: (a: T, b: T) => number): T[];
		nsmallest<T>(array: T[], n: number, cmp?: (a: T, b: T) => number): T[]
	}

	declare module.exports: undefined


}
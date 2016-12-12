

declare module 'samchon-framework' {
					declare module.exports: undefined


}

declare module 'npm$namespace$samchon' {
			declare function is_node(): boolean

		
}

declare module 'collections' {
	declare type CollectionEventListener<T> = (event: CollectionEvent<T>) => void;

	declare type MapCollectionEventListener<Key, T> = (event: MapCollectionEvent<Key, T>) => void;

	declare interface ICollection<T> {
		refresh(): void,
		refresh(it: std.Iterator<T>): void,
		refresh(first: std.Iterator<T>, last: std.Iterator<T>): void,
		addEventListener(type: string, listener: library.BasicEventListener): void,
		addEventListener(type: "insert", listener: CollectionEventListener<T>): void,
		addEventListener(type: "erase", listener: CollectionEventListener<T>): void,
		addEventListener(type: "refresh", listener: CollectionEventListener<T>): void,
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void,
		addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void,
		addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void,
		addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void,
		removeEventListener(type: string, listener: library.BasicEventListener): void,
		removeEventListener(type: "insert", listener: CollectionEventListener<T>): void,
		removeEventListener(type: "erase", listener: CollectionEventListener<T>): void,
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void,
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void,
		removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void,
		removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void,
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void
	}

		declare class ArrayCollection<T> extends std$Vector<T>, ICollection<T> {
		push(...items: T[]): number;
		push_back(val: T): void;
		_Insert_by_repeating_val(position: std.VectorIterator<T>, n: number, val: T): std.VectorIterator<T>;
		_Insert_by_range<U, InputIterator>(
		position: std.VectorIterator<T>, begin: InputIterator, end: InputIterator
	): std.VectorIterator<T>;
		_Erase_by_range(
		first: std.VectorIterator<T>, last: std.VectorIterator<T>
	): std.VectorIterator<T>;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.VectorIterator<T>): void;
		refresh(first: std.VectorIterator<T>, last: std.VectorIterator<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
		unshift<U>(...items: U[]): number;
		pop(): T;
		splice(start: number): T[];
		splice(start: number, deleteCount: number, ...items: T[]): T[]
	}

	declare class CollectionEvent<T> extends library$BasicEvent {
		constructor(type: string, first: std.Iterator<T>, last: std.Iterator<T>): this;
		constructor(type: "insert", first: std.Iterator<T>, last: std.Iterator<T>): this;
		constructor(type: "erase", first: std.Iterator<T>, last: std.Iterator<T>): this;
		constructor(type: "refresh", first: std.Iterator<T>, last: std.Iterator<T>): this;
		target: ICollection<T>;
		first: std.Iterator<T>;
		last: std.Iterator<T>;
		preventDefault(): void
	}

	declare class DequeCollection<T> extends std$Deque<T>, ICollection<T> {
		push(...items: T[]): number;
		push_back(val: T): void;
		_Insert_by_repeating_val(position: std.DequeIterator<T>, n: number, val: T): std.DequeIterator<T>;
		_Insert_by_range<U, InputIterator>(
		position: std.DequeIterator<T>, begin: InputIterator, end: InputIterator
	): std.DequeIterator<T>;
		pop_back(): void;
		_Erase_by_range(first: std.DequeIterator<T>, last: std.DequeIterator<T>): std.DequeIterator<T>;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.DequeIterator<T>): void;
		refresh(first: std.DequeIterator<T>, last: std.DequeIterator<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void
	}

	declare class HashMapCollection<Key, T> extends std$HashMap<Key, T>, ICollection<std.Pair<Key, T>> {
		_Handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		_Handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.MapIterator<Key, T>): void;
		refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(
		type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		addEventListener(
		type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		addEventListener(
		type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(
		type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(
		type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(
		type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void
	}

	declare class HashMultiMapCollection<Key, T> extends std$HashMap<Key, T>, ICollection<std.Pair<Key, T>> {
		_Handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		_Handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.MapIterator<Key, T>): void;
		refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(
		type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		addEventListener(
		type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		addEventListener(
		type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(
		type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(
		type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(
		type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void
	}

	declare class HashMultiSetCollection<T> extends std$HashMultiSet<T>, ICollection<T> {
		_Handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		_Handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.SetIterator<T>): void;
		refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void
	}

	declare class HashSetCollection<T> extends std$HashSet<T>, ICollection<T> {
		_Handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		_Handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.SetIterator<T>): void;
		refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void
	}

	declare class ListCollection<T> extends std$List<T>, ICollection<T> {
		push(...items: T[]): number;
		push_front(val: T): void;
		push_back(val: T): void;
		_Insert_by_repeating_val(position: std.ListIterator<T>, n: number, val: T): std.ListIterator<T>;
		_Insert_by_range<U, InputIterator>(
		position: std.ListIterator<T>, begin: InputIterator, end: InputIterator
	): std.ListIterator<T>;
		pop_front(): void;
		pop_back(): void;
		_Erase_by_range(first: std.ListIterator<T>, last: std.ListIterator<T>): std.ListIterator<T>;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.ListIterator<T>): void;
		refresh(first: std.ListIterator<T>, last: std.ListIterator<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void
	}

	declare class MapCollectionEvent<Key, T> extends CollectionEvent<std.Pair<Key, T>> {
		first: std.MapIterator<Key, T>;
		last: std.MapIterator<Key, T>
	}

	declare class TreeMapCollection<Key, T> extends std$TreeMap<Key, T>, ICollection<std.Pair<Key, T>> {
		_Handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		_Handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.MapIterator<Key, T>): void;
		refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(
		type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		addEventListener(
		type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		addEventListener(
		type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(
		type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(
		type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(
		type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void
	}

	declare class TreeMultiMapCollection<Key, T> extends std$TreeMultiMap<Key, T>, ICollection<std.Pair<Key, T>> {
		_Handle_insert(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		_Handle_erase(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.MapIterator<Key, T>): void;
		refresh(first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(
		type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		addEventListener(
		type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		addEventListener(
		type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: "erase", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: "refresh", listener: MapCollectionEventListener<Key, T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(
		type: "insert", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(
		type: "erase", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void;
		removeEventListener(
		type: "refresh", listener: MapCollectionEventListener<Key, T>, thisArg: Object
	): void
	}

	declare class TreeMultiSetCollection<T> extends std$TreeMultiSet<T>, ICollection<T> {
		_Handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		_Handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.SetIterator<T>): void;
		refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void
	}

	declare class TreeSetCollection<T> extends std$TreeSet<T>, ICollection<T> {
		_Handle_insert(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		_Handle_erase(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		refresh(): void;
		refresh(it: std.SetIterator<T>): void;
		refresh(first: std.SetIterator<T>, last: std.SetIterator<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		addEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		addEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(type: "insert", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "erase", listener: CollectionEventListener<T>, thisArg: Object): void;
		removeEventListener(type: "refresh", listener: CollectionEventListener<T>, thisArg: Object): void
	}

	
}

declare module 'library' {
	declare type BasicEventListener = (event: BasicEvent) => void;

	declare interface IEventDispatcher {
		hasEventListener(type: string): boolean,
		dispatchEvent(event: library.BasicEvent): boolean,
		addEventListener(type: string, listener: library.BasicEventListener): void,
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void,
		removeEventListener(type: string, listener: library.BasicEventListener): void,
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void
	}

		declare class BasicEvent  {
		type_: string;
		target_: IEventDispatcher;
		trusted_: boolean;
		bubbles_: boolean;
		cancelable_: boolean;
		defaultPrevented_: boolean;
		cancelBubble_: boolean;
		constructor(type: string, bubbles?: boolean, cancelable?: boolean): this;
		initEvent(type: string, bubbles: boolean, cancelable: boolean): void;
		stopImmediatePropagation(): void;
		stopPropagation(): void;
		type: string;
		target: IEventDispatcher;
		currentTarget: IEventDispatcher;
		isTrusted: boolean;
		bubbles: boolean;
		cancelable: boolean;
		eventPhase: number;
		defaultPrevented: boolean;
		srcElement: Element;
		cancelBubble: boolean;
		timeStamp: number;
		returnValue: boolean
	}

	declare class CaseGenerator  {
		size_: number;
		n_: number;
		r_: number;
		constructor(n: number, r: number): this;
		size(): number;
		n(): number;
		r(): number;
		at(index: number): number[]
	}

	declare class CombinedPermutationGenerator extends CaseGenerator {
		constructor(n: number, r: number): this;
		at(index: number): number[]
	}

	declare class PermuationGenerator extends CaseGenerator {
		constructor(n: number, r: number): this;
		at(index: number): number[]
	}

	declare class FactorialGenerator extends PermuationGenerator {
		constructor(n: number): this
	}

	declare class EventDispatcher extends IEventDispatcher {
		constructor(): this;
		constructor(dispatcher: IEventDispatcher): this;
		hasEventListener(type: string): boolean;
		dispatchEvent(event: library.BasicEvent): boolean;
		addEventListener(type: string, listener: library.BasicEventListener): void;
		addEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void;
		removeEventListener(type: string, listener: library.BasicEventListener): void;
		removeEventListener(type: string, listener: library.BasicEventListener, thisArg: Object): void
	}

	declare class FileReference extends EventDispatcher {
		constructor(): this;
		data: any;
		name: string;
		extension: string;
		type: string;
		size: number;
		modificationDate: Date;
		browse(...typeFilter: string[]): void;
		load(): void;
		save(data: string, fileName: string): void;
		save(data: string, fileName: string): void
	}

	declare class FileReferenceList extends EventDispatcher {
		file_list: std.Vector<FileReference>;
		constructor(): this;
		fileList: std.Vector<FileReference>;
		browse(...typeFilter: string[]): void
	}

	declare class GeneticAlgorithm  {
		constructor(unique?: boolean, mutation_rate?: number, tournament?: number): this;
		evolveGeneArray<T, GeneArray>(
		individual: GeneArray, population: number, generation: number, compare?: (left: T, right: T) => boolean
	): GeneArray;
		evolvePopulation<T, GeneArray>(
		population: GAPopulation<T, GeneArray>, compare?: (left: T, right: T) => boolean
	): GAPopulation<T, GeneArray>
	}

	declare class GAPopulation<T, GeneArray>  {
		constructor(size: number): this;
		constructor(geneArray: GeneArray, size: number): this;
		constructor(geneArray: GeneArray, size: number, compare: (left: GeneArray, right: GeneArray) => boolean): this;
		children(): std.Vector<GeneArray>;
		fitTest(): GeneArray
	}

	declare class StringUtil  {
		between(str: string, start?: string, end?: string): string;
		betweens(str: string, start?: string, end?: string): Array<string>;
		trim(str: string, ...args: string[]): string;
		ltrim(str: string, ...args: string[]): string;
		rtrim(str: string, ...args: string[]): string;
		substitute(format: string, ...args: any[]): string;
		replaceAll(str: string, before: string, after: string): string;
		replaceAll(str: string, ...pairs: std.Pair<string, string>[]): string;
		removeHTMLSpaces(str: string): string;
		repeat(str: string, n: number): string;
		numberFormat(val: number, precision?: number): string;
		percentFormat(val: number, precision?: number): string
	}

	declare class URLVariables extends std$HashMap<string, string> {
		constructor(): this;
		constructor(str: string): this;
		decode(str: string): void;
		toString(): string
	}

	declare class XML extends std$HashMap<string, XMLList> {
		constructor(): this;
		constructor(str: string): this;
		getTag(): string;
		getValue(): string;
		hasProperty(key: string): boolean;
		getProperty(key: string): string;
		getPropertyMap(): std.HashMap<string, string>;
		setTag(val: string): void;
		setValue(val: string): void;
		setProperty(key: string, value: string): void;
		eraseProperty(key: string): void;
		push(...args: std.Pair<string, XMLList>[]): number;
		push(...args: [string, XMLList][]): number;
		push(...xmls: XML[]): number;
		push(...xmlLists: XMLList[]): number;
		addAllProperties(obj: XML): void;
		clearProperties(): void;
		toString(tab?: number): string
	}

	declare class XMLList extends std$Deque<XML> {
		getTag(): string;
		toString(level?: number): string
	}

	
}

declare module 'ICollection' {
			declare function _Dispatch_CollectionEvent<T>(
		collection: ICollection<T>, type: string, first: std.Iterator<T>, last: std.Iterator<T>
	): void

	declare function _Dispatch_MapCollectionEvent<Key, T>(
		collection: ICollection<std.Pair<Key, T>>, type: string, first: std.MapIterator<Key, T>, last: std.MapIterator<Key, T>
	): void

		
}

declare module 'protocol' {
		declare interface IEntity {
		construct(xml: library.XML): void,
		key(): any,
		TAG(): string,
		toXML(): library.XML
	}

	declare interface IEntityCollection<T> {
		
	}

	declare interface ICommunicator {
		onClose: Function,
		close(): void,
		isConnected(): boolean,
		sendData(invoke: protocol.Invoke): void,
		replyData(invoke: protocol.Invoke): void
	}

	declare interface IClientDriver {
		listen(listener: IProtocol): void
	}

	declare interface IEntityGroup<T> {
		construct(xml: library.XML): void,
		createChild(xml: library.XML): T,
		has(key: any): boolean,
		count(key: any): number,
		get(key: any): T,
		CHILD_TAG(): string,
		toXML(): library.XML
	}

	declare interface IProtocol {
		replyData(invoke: Invoke): void,
		sendData(invoke: Invoke): void
	}

	declare interface IServer {
		open(port: number): void,
		close(): void,
		addClient(driver: IClientDriver): void
	}

	declare interface IServerBase {
		
	}

	declare interface IServerConnector {
		onConnect: Function,
		connect(ip: string, port: number): void
	}

		declare class Entity extends IEntity {
		constructor(): this;
		construct(xml: library.XML): void;
		key(): any;
		TAG(): string;
		toXML(): library.XML
	}

	declare class EntityArrayCollection<T> extends collections$ArrayCollection<T>, IEntityCollection<T> {
		construct(xml: library.XML): void;
		createChild(xml: library.XML): T;
		key(): any;
		has(key: any): boolean;
		count(key: any): number;
		get(key: any): T;
		TAG(): string;
		CHILD_TAG(): string;
		toXML(): library.XML
	}

	declare class EntityListCollection<T> extends collections$ListCollection<T>, IEntityCollection<T> {
		construct(xml: library.XML): void;
		createChild(xml: library.XML): T;
		key(): any;
		has(key: any): boolean;
		count(key: any): number;
		get(key: any): T;
		TAG(): string;
		CHILD_TAG(): string;
		toXML(): library.XML
	}

	declare class EntityDequeCollection<T> extends collections$DequeCollection<T>, IEntityCollection<T> {
		construct(xml: library.XML): void;
		createChild(xml: library.XML): T;
		key(): any;
		has(key: any): boolean;
		count(key: any): number;
		get(key: any): T;
		TAG(): string;
		CHILD_TAG(): string;
		toXML(): library.XML
	}

	declare class CommunicatorBase extends ICommunicator {
		listener_: IProtocol;
		onClose: Function;
		connected_: boolean;
		constructor(): this;
		constructor(listener: IProtocol): this;
		close(): void;
		isConnected(): boolean;
		is_binary_invoke(): boolean;
		sendData(invoke: Invoke): void;
		replyData(invoke: Invoke): void;
		handle_string(str: string): void;
		handle_binary(binary: Uint8Array): void
	}

	declare class Communicator extends CommunicatorBase {
		socket_: socket.socket;
		close(): void;
		start_listen(): void;
		sendData(invoke: Invoke): void
	}

	declare class WebCommunicator extends CommunicatorBase {
		connection_: websocket.connection;
		close(): void;
		sendData(invoke: Invoke): void;
		handle_message(message: websocket.IMessage): void;
		handle_close(): void
	}

	declare class SharedWorkerCommunicator extends CommunicatorBase {
		port_: MessagePort;
		close(): void;
		sendData(invoke: Invoke): void;
		handle_message(event: MessageEvent): void
	}

	declare class ClientDriver extends Communicator, IClientDriver {
		constructor(socket: socket.socket): this;
		listen(listener: IProtocol): void
	}

	declare class WebClientDriver extends WebCommunicator, IClientDriver {
		constructor(connection: websocket.connection, path: string, session_id: string): this;
		listen(listener: IProtocol): void;
		getPath(): string;
		getSessionID(): string
	}

	declare class SharedWorkerClientDriver extends SharedWorkerCommunicator, IClientDriver {
		constructor(port: MessagePort): this;
		listen(listener: IProtocol): void
	}

	declare class DedicatedWorker extends IProtocol {
		constructor(): this;
		replyData(invoke: protocol.Invoke): void;
		sendData(invoke: Invoke): void
	}

	declare class DedicatedWorkerConnector extends CommunicatorBase, IServerConnector {
		onConnect: Function;
		onClose: Function;
		constructor(listener: IProtocol): this;
		connect(jsFile: string): void;
		close(): void;
		sendData(invoke: Invoke): void;
		replyData(invoke: Invoke): void
	}

	declare class EntityArray<T> extends std$Vector<T>, IEntityGroup<T> {
		construct(xml: library.XML): void;
		createChild(xml: library.XML): T;
		key(): any;
		has(key: any): boolean;
		count(key: any): number;
		get(key: any): T;
		TAG(): string;
		CHILD_TAG(): string;
		toXML(): library.XML
	}

	declare class EntityList<T> extends std$List<T>, IEntityGroup<T> {
		construct(xml: library.XML): void;
		createChild(xml: library.XML): T;
		key(): any;
		has(key: any): boolean;
		count(key: any): number;
		get(key: any): T;
		TAG(): string;
		CHILD_TAG(): string;
		toXML(): library.XML
	}

	declare class EntityDeque<T> extends std$Deque<T>, IEntityGroup<T> {
		construct(xml: library.XML): void;
		createChild(xml: library.XML): T;
		key(): any;
		has(key: any): boolean;
		count(key: any): number;
		get(key: any): T;
		TAG(): string;
		CHILD_TAG(): string;
		toXML(): library.XML
	}

	declare class Invoke extends EntityArray<InvokeParameter> {
		constructor(): this;
		constructor(listener: string): this;
		constructor(invoke: Invoke): this;
		constructor(listener: string, ...parameters: Array<number | string | library.XML>): this;
		createChild(xml: library.XML): InvokeParameter;
		getListener(): string;
		getArguments(): Array<any>;
		apply(obj: IProtocol): boolean;
		TAG(): string;
		CHILD_TAG(): string
	}

	declare class InvokeParameter extends Entity {
		name: string;
		type: string;
		value: string | number | library.XML | Uint8Array;
		constructor(): this;
		constructor(val: number): this;
		constructor(val: string): this;
		constructor(val: library.XML): this;
		constructor(val: Uint8Array): this;
		constructor(name: string, val: number): this;
		constructor(name: string, val: string): this;
		constructor(name: string, val: library.XML): this;
		constructor(name: string, val: Uint8Array): this;
		construct(xml: library.XML): void;
		setValue(value: number): void;
		setValue(value: string): void;
		setValue(value: library.XML): void;
		setValue(value: Uint8Array): void;
		key(): any;
		getName(): string;
		getType(): string;
		getValue(): any;
		TAG(): string;
		toXML(): library.XML
	}

	declare class InvokeHistory extends protocol$Entity {
		constructor(): this;
		constructor(invoke: protocol.Invoke): this;
		construct(xml: library.XML): void;
		complete(): void;
		key(): number;
		getUID(): number;
		getListener(): string;
		getStartTime(): Date;
		getEndTime(): Date;
		computeElapsedTime(): number;
		TAG(): string;
		toXML(): library.XML;
		toInvoke(): protocol.Invoke
	}

	declare class Server extends IServer {
		addClient(driver: ClientDriver): void;
		open(port: number): void;
		close(): void
	}

	declare class WebServer extends IServer {
		constructor(): this;
		open(port: number): void;
		close(): void;
		addClient(driver: WebClientDriver): void
	}

	declare class SharedWorkerServer extends IServer {
		addClient(driver: SharedWorkerClientDriver): void;
		open(): void;
		close(): void
	}

	declare class ServerBase extends Server, IServerBase {
		constructor(hooker: IServer): this;
		addClient(driver: IClientDriver): void
	}

	declare class WebServerBase extends WebServer, IServerBase {
		constructor(hooker: IServer): this;
		addClient(driver: IClientDriver): void
	}

	declare class SharedWorkerServerBase extends SharedWorkerServer, IServerBase {
		constructor(hooker: IServer): this;
		addClient(driver: IClientDriver): void
	}

	declare class ServerConnector extends Communicator, IServerConnector {
		onConnect: Function;
		constructor(listener: IProtocol): this;
		connect(ip: string, port: number): void
	}

	declare class WebServerConnector extends WebCommunicator, IServerConnector {
		onConnect: Function;
		constructor(listener: IProtocol): this;
		connect(ip: string, port: number, path?: string): void;
		close(): void;
		sendData(invoke: Invoke): void
	}

	declare class SharedWorkerServerConnector extends SharedWorkerCommunicator, IServerConnector {
		onConnect: Function;
		constructor(listener: IProtocol): this;
		connect(jsFile: string): void
	}

	
}

declare module 'IEntity' {
			declare function construct(entity: IEntity, xml: library.XML, ...prohibited_names: string[]): void

	declare function toXML(entity: IEntity, ...prohibited_names: string[]): library.XML

		
}

declare module 'external' {
		declare interface IExternalClientArray {
		
	}

	declare interface IExternalServer {
		connect(): void
	}

	declare interface IExternalServerArray {
		connect(): void
	}

	declare interface IExternalServerClientArray {
		
	}

		declare class ExternalSystemArray extends protocol$EntityDequeCollection<ExternalSystem>, protocol$IProtocol {
		constructor(): this;
		hasRole(name: string): boolean;
		getRole(name: string): ExternalSystemRole;
		sendData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void;
		TAG(): string;
		CHILD_TAG(): string
	}

	declare class ExternalSystem extends protocol$EntityDequeCollection<ExternalSystemRole>, protocol$IProtocol {
		name: string;
		constructor(systemArray: ExternalSystemArray): this;
		constructor(systemArray: ExternalSystemArray, communicator: protocol.IClientDriver): this;
		destructor(): void;
		getSystemArray(): ExternalSystemArray;
		key(): string;
		getName(): string;
		communicator: protocol.ICommunicator;
		close(): void;
		sendData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void;
		TAG(): string;
		CHILD_TAG(): string
	}

	declare class ExternalClientArray extends ExternalSystemArray, IExternalClientArray {
		constructor(): this;
		createServerBase(): protocol.IServerBase;
		addClient(driver: protocol.IClientDriver): void;
		createChild(xml: library.XML): ExternalSystem;
		createExternalClient(driver: protocol.IClientDriver): ExternalSystem;
		open(port: number): void;
		close(): void
	}

	declare class ExternalServer extends ExternalSystem, IExternalServer {
		ip: string;
		port: number;
		constructor(systemArray: ExternalSystemArray): this;
		createServerConnector(): protocol.IServerConnector;
		connect(): void
	}

	declare class ExternalServerArray extends ExternalSystemArray {
		constructor(): this;
		connect(): void
	}

	declare class ExternalServerClientArray extends ExternalClientArray, IExternalServerClientArray {
		constructor(): this;
		createChild(xml: library.XML): ExternalSystem;
		createExternalServer(xml: library.XML): IExternalServer;
		connect(): void
	}

	declare class ExternalSystemRole extends protocol$Entity, protocol$IProtocol {
		name: string;
		constructor(system: ExternalSystem): this;
		key(): string;
		getSystemArray(): ExternalSystemArray;
		getSystem(): ExternalSystem;
		getName(): string;
		sendData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void;
		TAG(): string
	}

	
}

declare module 'parallel' {
		declare interface IParallelServer {
		connect(): void
	}

		declare class ParallelSystemArray extends external$ExternalSystemArray {
		constructor(): this;
		at(index: number): ParallelSystem;
		sendSegmentData(invoke: protocol.Invoke, size: number): void;
		sendPieceData(invoke: protocol.Invoke, first: number, last: number): void;
		_Complete_history(history: protocol.InvokeHistory): boolean;
		_Normalize_performance(): void
	}

	declare class ParallelSystem extends external$ExternalSystem {
		constructor(systemArray: ParallelSystemArray): this;
		constructor(systemArray: ParallelSystemArray, communicator: protocol.IClientDriver): this;
		destructor(): void;
		getSystemArray(): ParallelSystemArray;
		getPerformance(): number;
		setPerformance(val: number): void;
		enforcePerformance(val: number): void;
		_Report_history(xml: library.XML): void;
		_Send_back_history(invoke: protocol.Invoke, history: protocol.InvokeHistory): void
	}

	declare class MediatorSystem extends slave$SlaveSystem {
		constructor(systemArray: ParallelSystemArrayMediator): this;
		constructor(systemArray: distributed.DistributedSystemArrayMediator): this;
		start(): void;
		getSystemArray(): ParallelSystemArrayMediator | distributed.DistributedSystemArrayMediator;
		_replyData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void
	}

	declare class MediatorServer extends MediatorSystem, slave$ISlaveServer {
		constructor(systemArray: ParallelSystemArrayMediator, port: number): this;
		constructor(systemArray: distributed.DistributedSystemArrayMediator, port: number): this;
		createServerBase(): protocol.IServerBase;
		addClient(driver: protocol.IClientDriver): void;
		start(): void;
		open(port: number): void;
		close(): void
	}

	declare class MediatorWebServer extends MediatorServer {
		createServerBase(): protocol.IServerBase
	}

	declare class MediatorSharedWorkerServer extends MediatorServer {
		createServerBase(): protocol.IServerBase
	}

	declare class MediatorClient extends MediatorSystem, slave$ISlaveClient {
		constructor(systemArray: ParallelSystemArrayMediator, ip: string, port: number): this;
		constructor(systemArray: distributed.DistributedSystemArrayMediator, ip: string, port: number): this;
		createServerConnector(): protocol.IServerConnector;
		start(): void;
		connect(): void
	}

	declare class MediatorWebClient extends MediatorClient {
		createServerConnector(): protocol.IServerConnector
	}

	declare class MediatorSharedWorkerClient extends MediatorClient {
		createServerConnector(): protocol.IServerConnector
	}

	declare class PRInvokeHistory extends protocol$InvokeHistory {
		constructor(): this;
		constructor(invoke: protocol.Invoke): this;
		getFirst(): number;
		getLast(): number;
		computeSize(): number
	}

	declare class ParallelClientArray extends ParallelSystemArray, external$IExternalClientArray {
		constructor(): this;
		createServerBase(): protocol.IServerBase;
		addClient(driver: protocol.IClientDriver): void;
		createChild(xml: library.XML): ParallelSystem;
		createExternalClient(driver: protocol.IClientDriver): ParallelSystem;
		open(port: number): void;
		close(): void
	}

	declare class ParallelSystemArrayMediator extends ParallelSystemArray {
		constructor(): this;
		createMediator(): MediatorSystem;
		startMediator(): void;
		getMediator(): MediatorSystem;
		_Complete_history(history: PRInvokeHistory): boolean
	}

	declare class ParallelClientArrayMediator extends ParallelSystemArrayMediator, external$IExternalClientArray {
		constructor(): this;
		createServerBase(): protocol.IServerBase;
		addClient(driver: protocol.IClientDriver): void;
		createChild(xml: library.XML): ParallelSystem;
		createExternalClient(driver: protocol.IClientDriver): ParallelSystem;
		open(port: number): void;
		close(): void
	}

	declare class ParallelServer extends ParallelSystem, IParallelServer {
		ip: string;
		port: number;
		constructor(systemArray: ParallelSystemArray): this;
		createServerConnector(): protocol.IServerConnector;
		connect(): void
	}

	declare class ParallelServerArray extends ParallelSystemArray, external$IExternalServerArray {
		constructor(): this;
		connect(): void
	}

	declare class ParallelServerArrayMediator extends ParallelSystemArrayMediator, external$IExternalServerArray {
		constructor(): this;
		connect(): void
	}

	declare class ParallelServerClientArray extends ParallelClientArray, external$IExternalServerClientArray {
		constructor(): this;
		createChild(xml: library.XML): IParallelServer;
		createExternalServer(xml: library.XML): IParallelServer;
		connect(): void
	}

	declare class ParallelServerClientArrayMediator extends ParallelClientArrayMediator, external$IExternalServerClientArray {
		constructor(): this;
		createChild(xml: library.XML): ParallelSystem;
		createExternalServer(xml: library.XML): IParallelServer;
		connect(): void
	}

	
}

declare module 'distributed' {
		declare interface IDistributedServer {
		connect(): void
	}

		declare class DistributedSystemArray extends parallel$ParallelSystemArray {
		constructor(): this;
		construct(xml: library.XML): void;
		createProcess(xml: library.XML): DistributedProcess;
		at(index: number): DistributedSystem;
		getProcessMap(): std.HashMap<string, DistributedProcess>;
		hasProcess(name: string): boolean;
		getProcess(name: string): DistributedProcess;
		insertProcess(process: DistributedProcess): boolean;
		eraseProcess(name: string): boolean;
		_Complete_history(history: protocol.InvokeHistory): boolean;
		_Normalize_performance(): void;
		toXML(): library.XML
	}

	declare class DistributedSystemArrayMediator extends DistributedSystemArray {
		constructor(): this;
		createMediator(): parallel.MediatorSystem;
		startMediator(): void;
		getMediator(): parallel.MediatorSystem;
		_Complete_history(history: parallel.PRInvokeHistory): boolean
	}

	declare class DSInvokeHistory extends protocol$InvokeHistory {
		constructor(system: DistributedSystem): this;
		constructor(system: DistributedSystem, process: DistributedProcess, invoke: protocol.Invoke): this;
		construct(xml: library.XML): void;
		getSystem(): DistributedSystem;
		getProcess(): DistributedProcess;
		toXML(): library.XML
	}

	declare class DistributedClientArray extends DistributedSystemArray, external$IExternalClientArray {
		constructor(): this;
		createServerBase(): protocol.IServerBase;
		addClient(driver: protocol.IClientDriver): void;
		createChild(xml: library.XML): DistributedSystem;
		createExternalClient(driver: protocol.IClientDriver): DistributedSystem;
		open(port: number): void;
		close(): void
	}

	declare class DistributedClientArrayMediator extends DistributedSystemArrayMediator, external$IExternalClientArray {
		constructor(): this;
		createServerBase(): protocol.IServerBase;
		addClient(driver: protocol.IClientDriver): void;
		createChild(xml: library.XML): DistributedSystem;
		createExternalClient(driver: protocol.IClientDriver): DistributedSystem;
		open(port: number): void;
		close(): void
	}

	declare class DistributedProcess extends protocol$Entity, protocol$IProtocol {
		name: string;
		constructor(systemArray: DistributedSystemArray): this;
		key(): string;
		getSystemArray(): DistributedSystemArray;
		getName(): string;
		getResource(): number;
		setResource(val: number): void;
		enforceResource(val: number): void;
		replyData(invoke: protocol.Invoke): void;
		sendData(invoke: protocol.Invoke): DistributedSystem;
		TAG(): string
	}

	declare class DistributedSystem extends parallel$ParallelSystem {
		constructor(systemArray: DistributedSystemArray): this;
		constructor(systemArray: DistributedSystemArray, communicator: protocol.IClientDriver): this;
		createChild(xml: library.XML): external.ExternalSystemRole;
		getSystemArray(): DistributedSystemArray;
		replyData(invoke: protocol.Invoke): void;
		_Report_history(xml: library.XML): void;
		_Send_back_history(invoke: protocol.Invoke, history: protocol.InvokeHistory): void
	}

	declare class DistributedServer extends DistributedSystem, external$IExternalServer {
		ip: string;
		port: number;
		constructor(systemArray: DistributedSystemArray): this;
		createServerConnector(): protocol.IServerConnector;
		connect(): void
	}

	declare class DistributedServerArray extends DistributedSystemArray, external$IExternalServerArray {
		constructor(): this;
		connect(): void
	}

	declare class DistributedServerArrayMediator extends DistributedSystemArrayMediator, external$IExternalServerArray {
		constructor(): this;
		connect(): void
	}

	declare class DistributedServerClientArray extends DistributedClientArray, external$IExternalServerClientArray {
		constructor(): this;
		createChild(xml: library.XML): DistributedSystem;
		createExternalServer(xml: library.XML): IDistributedServer;
		connect(): void
	}

	declare class DistributedServerClientArrayMediator extends DistributedClientArrayMediator, external$IExternalServerClientArray {
		constructor(): this;
		createChild(xml: library.XML): DistributedSystem;
		createExternalServer(xml: library.XML): IDistributedServer;
		connect(): void
	}

	
}

declare module 'IEntityGroup' {
			declare function construct<T>(
		entityGroup: IEntityGroup<T>, xml: library.XML, ...prohibited_names: string[]
	): void

	declare function toXML<T>(entityGroup: IEntityGroup<T>, ...prohibited_names: string[]): library.XML

	declare function has<T>(entityGroup: IEntityGroup<T>, key: any): boolean

	declare function count<T>(entityGroup: IEntityGroup<T>, key: any): number

	declare function get<T>(entityGroup: IEntityGroup<T>, key: any): T

		
}

declare module 'socket' {
	declare type socket = any;

	declare type server = any;

	declare type http_server = any;

				
}

declare module 'websocket' {
	declare type connection = any;

	declare type request = any;

	declare type IMessage = any;

	declare type ICookie = any;

	declare type client = any;

				
}

declare module 'slave' {
		declare interface ISlaveClient {
		connect(ip: string, port: number): void
	}

	declare interface ISlaveServer {
		
	}

		declare class SlaveSystem extends protocol$IProtocol {
		communicator_: protocol.ICommunicator;
		constructor(): this;
		sendData(invoke: protocol.Invoke): void;
		_replyData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void
	}

	declare class SlaveClient extends SlaveSystem, ISlaveClient {
		constructor(): this;
		createServerConnector(): protocol.IServerConnector;
		connect(ip: string, port: number): void
	}

	declare class SlaveServer extends SlaveSystem, ISlaveServer {
		constructor(): this;
		createServerBase(): protocol.IServerBase;
		open(port: number): void;
		close(): void;
		addClient(driver: protocol.IClientDriver): void
	}

	
}

declare module 'service' {
				declare class Client extends protocol$IProtocol {
		constructor(user: User, driver: protocol.WebClientDriver): this;
		destructor(): void;
		createService(path: string): Service;
		close(): void;
		getUser(): User;
		getService(): Service;
		getNo(): number;
		changeService(path: string): void;
		changeService(service: Service): void;
		sendData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void
	}

	declare class Server extends protocol$WebServer, protocol$IProtocol {
		constructor(): this;
		createUser(): User;
		has(accountID: string): boolean;
		get(accountID: string): User;
		sendData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void;
		addClient(driver: protocol.WebClientDriver): void
	}

	declare class Service extends protocol$IProtocol {
		constructor(client: Client, path: string): this;
		destructor(): void;
		getClient(): Client;
		getPath(): string;
		sendData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void
	}

	declare class User extends collections$HashMapCollection<number, Client>, protocol$IProtocol {
		constructor(server: Server): this;
		destructor(): void;
		createClient(driver: protocol.WebClientDriver): Client;
		getServer(): Server;
		getAccountID(): string;
		getAuthority(): number;
		setAccount(id: string, authority: number): void;
		logout(): void;
		sendData(invoke: protocol.Invoke): void;
		replyData(invoke: protocol.Invoke): void
	}

	
}
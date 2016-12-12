import type { MultiplexStatic } from 'npm$namespace$multiplex'

declare module 'multiplexjs' {
		declare interface Array<T> {
		
	}

	declare interface String {
		
	}

			
}

declare module 'multiplex' {
					declare module.exports: undefined


}

declare module 'npm$namespace$multiplex' {
		declare interface Iterable<T> {
		@@iterator(): Iterator<T>
	}

	declare interface Iterator<T> {
		next(): IteratorResult<T>,
		return(value?: any): IteratorResult<T>,
		throw(e?: any): IteratorResult<T>
	}

	declare interface IteratorResult<T> {
		done: boolean,
		value?: T
	}

	declare interface Enumerator<T> {
		next(): boolean,
		current: T
	}

	declare interface EnumeratorConstructor {
		new <T>(generator: (yielder: (value: T) => T) => any): Enumerator<T>
	}

	declare interface Enumerable<T> {
		getEnumerator(): Enumerator<T>
	}

	declare interface EnumerableConstructor {
		new <T>(obj: Iterable<T>): Enumerable<T>,
		new <T>(factory: () => Enumerator<T>): Enumerable<T>,
		new <T>(obj: ArrayLike<T>): Enumerable<T>,
		new (obj: IArguments): Enumerable<any>,
		new (obj: Object): Enumerable<KeyValuePair<string, any>>,
		empty<T>(): Enumerable<T>,
		is(obj: any): boolean,
		range(start: number, count: number): Enumerable<number>,
		repeat<T>(element: T, count: number): Enumerable<T>
	}

	declare interface Comparer<T> {
		compare(x: T, y: T): number
	}

	declare interface ComparerConstructor {
		defaultComparer: Comparer<any>,
		create<T>(comparison: (x: T, y: T) => number): Comparer<T>
	}

	declare interface EqualityComparer<T> {
		equals(x: T, y: T): boolean,
		hash(obj: T): number
	}

	declare interface EqualityComparerConstructor {
		defaultComparer: EqualityComparer<any>,
		create<T>(
		hashCodeProvider: (obj: T) => number, equality: (x: T, y: T) => boolean
	): EqualityComparer<T>
	}

	declare interface Collection<T> {
		count(): number,
		copyTo(array: T[], arrayIndex: number): void
	}

	declare interface CollectionConstructor {
		new <T>(): Collection<T>,
		new <T>(value: Iterable<T>): Collection<T>
	}

	declare interface ReadOnlyCollection<T> {
		[index: number]: T,
		get(index: number): T,
		contains(item: T): boolean,
		indexOf(item: T): number
	}

	declare interface ReadOnlyCollectionConstructor {
		new <T>(list: List<T>): ReadOnlyCollection<T>
	}

	declare interface List<T> {
		[index: number]: T,
		add(item: T): void,
		addRange(collection: Iterable<T>): void,
		asReadOnly(): ReadOnlyCollection<T>,
		binarySearch(item: T): number,
		binarySearch(item: T, comparer: Comparer<T>): number,
		binarySearch(item: T, index: number, count: number, comparer: Comparer<T>): number,
		clear(): void,
		exists(match: (item: T) => boolean): boolean,
		find(match: (item: T) => boolean): T,
		findAll(match: (item: T) => boolean): List<T>,
		findIndex(match: (item: T) => boolean): number,
		findIndex(startIndex: number, match: (item: T) => boolean): number,
		findIndex(startIndex: number, count: number, match: (item: T) => boolean): number,
		findLast(match: (item: T) => boolean): T,
		findLastIndex(match: (item: T) => boolean): number,
		findLastIndex(startIndex: number, match: (item: T) => boolean): number,
		findLastIndex(startIndex: number, count: number, match: (item: T) => boolean): number,
		forEach(action: (item: T) => void): void,
		get(index: number): T,
		getRange(index: number, count: number): List<T>,
		indexOf(item: T): number,
		indexOf(item: T, index: number): number,
		insert(index: number, item: T): void,
		insertRange(index: number, collection: Iterable<T>): void,
		items(): T[],
		lastIndexOf(item: T): number,
		lastIndexOf(item: T, index: number): number,
		remove(item: T): boolean,
		removeAll(match: (item: T) => boolean): number,
		removeAt(index: number): void,
		removeRange(index: number, count: number): void,
		reverse(): any,
		reverse(index: number, count: number): void,
		set(index: number, value: T): void,
		sort(): void,
		sort(comparison: (x: T, y: T) => number): void,
		sort(comparer: Comparer<T>): void,
		sort(index: number, count: number, comparer: Comparer<T>): void,
		toArray(): T[],
		trueForAll(match: (item: T) => boolean): boolean
	}

	declare interface ListConstructor {
		new <T>(): List<T>,
		new <T>(capacity: number): List<T>,
		new <T>(...args: T[]): List<T>,
		new <T>(collection: Iterable<T>): List<T>
	}

	declare interface SortedList<TKey, TValue> {
		add(key: TKey, value: TValue): void,
		get(key: TKey): TValue,
		capacity(value?: number): number,
		clear(): void,
		comparer(): Comparer<TKey>,
		containsKey(key: TKey): boolean,
		containsValue(value: TValue): boolean,
		keys(): Collection<TKey>,
		values(): Collection<TValue>,
		indexOfKey(key: TKey): number,
		indexOfValue(value: TValue): number,
		remove(key: TKey): boolean,
		removeAt(index: number): void,
		set(key: TKey, value: TValue): void,
		trimExcess(): void,
		tryGetValue(key: TKey, callback: (value: TValue) => void): boolean
	}

	declare interface SortedListConstructor {
		new <TKey, TValue>(): SortedList<TKey, TValue>,
		new <TKey, TValue>(dictionary: Dictionary<TKey, TValue>): SortedList<TKey, TValue>,
		new <TKey, TValue>(comparer: Comparer<TKey>): SortedList<TKey, TValue>,
		new <TKey, TValue>(capacity: number): SortedList<TKey, TValue>,
		new <TKey, TValue>(
		dictionary: Dictionary<TKey, TValue>, comparer: Comparer<TKey>
	): SortedList<TKey, TValue>,
		new <TKey, TValue>(
		capacity: number, comparer: Comparer<TKey>
	): SortedList<TKey, TValue>
	}

	declare interface KeyValuePair<TKey, TValue> {
		key: TKey,
		value: TValue
	}

	declare interface KeyValuePairConstructor {
		new <TKey, TValue>(key: TKey, value: TValue): KeyValuePair<TKey, TValue>
	}

	declare interface Dictionary<TKey, TValue> {
		add(key: TKey, value: TValue): void,
		clear(): void,
		containsKey(key: TKey): boolean,
		containsValue(value: TValue): boolean,
		copyTo(array: TKey[], arrayIndex: number): void,
		copyTo(array: KeyValuePair<TKey, TValue>[], arrayIndex: number): void,
		keys(): Collection<TKey>,
		values(): Collection<TValue>,
		get(key: TKey): TValue,
		set(key: TKey, value: TValue): void,
		tryGetValue(key: TKey, callback: (value: TValue) => void): boolean,
		remove(key: TKey): boolean
	}

	declare interface DictionaryConstructor {
		new <TKey, TValue>(): Dictionary<TKey, TValue>,
		new <TKey, TValue>(dictionary: Dictionary<TKey, TValue>): Dictionary<TKey, TValue>,
		new <TKey, TValue>(comparer: EqualityComparer<TKey>): Dictionary<TKey, TValue>,
		new <TKey, TValue>(capacity: number): Dictionary<TKey, TValue>,
		new <TKey, TValue>(
		capacity: number, comparer: EqualityComparer<TKey>
	): Dictionary<TKey, TValue>,
		new <TKey, TValue>(
		dictionary: Dictionary<TKey, TValue>, comparer: EqualityComparer<TKey>
	): Dictionary<TKey, TValue>
	}

	declare interface HashSet<T> {
		add(item: T): boolean,
		clear(): void,
		copyTo(array: T[]): void,
		copyTo(array: T[], arrayIndex: number): void,
		copyTo(array: T[], arrayIndex: number, count: number): void,
		comparer(): EqualityComparer<T>,
		remove(item: T): boolean,
		removeWhere(match: (item: T) => boolean): number,
		exceptWith(other: Iterable<T>): void,
		intersectWith(other: Iterable<T>): void,
		isProperSubsetOf(other: Iterable<T>): boolean,
		isProperSupersetOf(other: Iterable<T>): boolean,
		isSubsetOf(other: Iterable<T>): boolean,
		isSupersetOf(other: Iterable<T>): boolean,
		overlaps(other: Iterable<T>): boolean,
		setEquals(other: Iterable<T>): boolean,
		symmetricExceptWith(other: Iterable<T>): void,
		unionWith(other: Iterable<T>): void
	}

	declare interface HashSetConstructor {
		new <T>(): HashSet<T>,
		new <T>(collection: Iterable<T>): HashSet<T>,
		new <T>(comparer: EqualityComparer<T>): HashSet<T>,
		new <T>(collection: Iterable<T>, comparer: EqualityComparer<T>): HashSet<T>
	}

	declare interface LinkedListNode<T> {
		value(): T,
		list(): LinkedList<T>,
		next(): LinkedListNode<T>,
		previous(): LinkedListNode<T>
	}

	declare interface LinkedListNodeConstructor {
		new <T>(value: T): LinkedListNode<T>
	}

	declare interface LinkedList<T> {
		add(item: T): void,
		clear(): void,
		contains(item: T): boolean,
		getFirst(): LinkedListNode<T>,
		getLast(): LinkedListNode<T>,
		addAfter(node: LinkedListNode<T>, newNode: LinkedListNode<T>): LinkedListNode<T>,
		addAfter(node: LinkedListNode<T>, value: T): LinkedListNode<T>,
		addBefore(node: LinkedListNode<T>, newNode: LinkedListNode<T>): LinkedListNode<T>,
		addBefore(node: LinkedListNode<T>, value: T): LinkedListNode<T>,
		addFirst(node: LinkedListNode<T>): LinkedListNode<T>,
		addFirst(value: T): LinkedListNode<T>,
		addLast(node: LinkedListNode<T>): LinkedListNode<T>,
		addLast(value: T): LinkedListNode<T>,
		find(value: T): LinkedListNode<T>,
		findLast(value: T): LinkedListNode<T>,
		remove(node: LinkedListNode<T>): boolean,
		remove(value: T): boolean,
		removeFirst(): void,
		removeLast(): void
	}

	declare interface LinkedListConstructor {
		new <T>(): LinkedList<T>,
		new <T>(collection: Iterable<T>): LinkedList<T>
	}

	declare interface Queue<T> {
		clear(): void,
		contains(item: T): boolean,
		dequeue(): T,
		enqueue(item: T): void,
		peek(): T,
		toArray(): T[]
	}

	declare interface QueueConstructor {
		new <T>(): Queue<T>,
		new <T>(collection: Iterable<T>): Queue<T>
	}

	declare interface Stack<T> {
		clear(): void,
		contains(item: T): boolean,
		peek(): T,
		pop(): T,
		push(item: T): void,
		toArray(): T[]
	}

	declare interface StackConstructor {
		new <T>(): Stack<T>,
		new <T>(collection: Iterable<T>): Stack<T>
	}

	declare interface Lookup<TKey, TElement> {
		contains(key: TKey): boolean,
		contains(item: Grouping<TKey, TElement>): boolean,
		get(key: TKey): Enumerable<TElement>
	}

	declare interface Grouping<TKey, TElement> {
		key: TKey
	}

	declare interface OrderedEnumerable<TElement> {
		createOrderedEnumerable<TKey>(
		keySelector: (item: TElement) => TKey, comparer: Comparer<TKey>, descending: boolean
	): OrderedEnumerable<TElement>,
		thenBy<TKey>(keySelector: (item: TElement) => TKey): OrderedEnumerable<TElement>,
		thenBy<TKey>(
		keySelector: (item: TElement) => TKey, comparer: Comparer<TKey>
	): OrderedEnumerable<TElement>,
		thenByDescending<TKey>(keySelector: (item: TElement) => TKey): OrderedEnumerable<TElement>,
		thenByDescending<TKey>(
		keySelector: (item: TElement) => TKey, comparer: Comparer<TKey>
	): OrderedEnumerable<TElement>
	}

	declare interface Enumerable<T> {
		aggregate(func: (accumulate: T, item: T) => T): T,
		aggregate<TAccumulate>(
		seed: TAccumulate, func: (accumulate: TAccumulate, item: T) => TAccumulate
	): TAccumulate,
		aggregate<TAccumulate, TResult>(
		seed: TAccumulate, func: (accumulate: TAccumulate, item: T) => TAccumulate, resultSelector: (accumulate: TAccumulate) => TResult
	): TResult,
		all(predicate: (item: T) => boolean): boolean,
		any(): boolean,
		any(predicate: (item: T) => boolean): boolean,
		asEnumerable(): Enumerable<T>,
		average(): number,
		average(selector: (item: number) => number): number,
		concat(second: Iterable<T>): Enumerable<T>,
		contains(value: T): boolean,
		contains(value: T, comparer: EqualityComparer<T>): boolean,
		count(): number,
		count(predicate: (item: T) => boolean): number,
		defaultIfEmpty(): Enumerable<T>,
		defaultIfEmpty(defaultValue: T): Enumerable<T>,
		distinct(): Enumerable<T>,
		distinct(comparer: EqualityComparer<T>): Enumerable<T>,
		except(second: Iterable<T>): Enumerable<T>,
		except(second: Iterable<T>, comparer: EqualityComparer<T>): Enumerable<T>,
		elementAt(index: number): T,
		first(): T,
		first(predicate: (item: T) => boolean): T,
		firstOrDefault(): T,
		firstOrDefault(predicate: (item: T) => boolean): T,
		firstOrDefault(predicate: (item: T) => boolean, defaultValue: T): T,
		forEach(action: (item: T) => void): void,
		forEach(action: (item: T, index: number) => void): void,
		groupBy<TKey>(keySelector: (item: T) => TKey): Enumerable<Grouping<TKey, T>>,
		groupBy<TKey>(
		keySelector: (item: T) => TKey, comparer: EqualityComparer<TKey>
	): Enumerable<Grouping<TKey, T>>,
		groupBy<TKey, TElement>(
		keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement
	): Enumerable<Grouping<TKey, TElement>>,
		groupBy<TKey, TElement>(
		keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement, comparer: EqualityComparer<TKey>
	): Enumerable<Grouping<TKey, TElement>>,
		groupBy<TKey, TElement, TResult>(
		keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement, resultSelector: (key: TKey, elements: Iterable<TElement>) => TResult
	): Enumerable<TResult>,
		groupBy<TKey, TElement, TResult>(
		keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement, resultSelector: (key: TKey, elements: Iterable<TElement>) => TResult, comparer: EqualityComparer<TKey>
	): Enumerable<TResult>,
		groupJoin<TInner, TKey, TResult>(
		inner: Iterable<TInner>, outerKeySelector: (item: T) => TKey, innerKeySelector: (item: TInner) => TKey, resultSelector: (outer: T, inner: Enumerable<TInner>) => TResult
	): Enumerable<TResult>,
		groupJoin<TInner, TKey, TResult>(
		inner: Iterable<TInner>, outerKeySelector: (item: T) => TKey, innerKeySelector: (item: TInner) => TKey, resultSelector: (outer: T, inner: Enumerable<TInner>) => TResult, comparer: EqualityComparer<TKey>
	): Enumerable<TResult>,
		intersect(second: Iterable<T>): Enumerable<T>,
		intersect(second: Iterable<T>, comparer: EqualityComparer<T>): Enumerable<T>,
		join<TInner, TKey, TResult>(
		inner: Iterable<TInner>, outerKeySelector: (item: T) => TKey, innerKeySelector: (item: TInner) => TKey, resultSelector: (outer: T, inner: TInner) => TResult
	): Enumerable<TResult>,
		join<TInner, TKey, TResult>(
		inner: Iterable<TInner>, outerKeySelector: (item: T) => TKey, innerKeySelector: (item: TInner) => TKey, resultSelector: (outer: T, inner: TInner) => TResult, comparer: EqualityComparer<TKey>
	): Enumerable<TResult>,
		last(): T,
		last(predicate: (item: T) => boolean): T,
		lastOrDefault(): T,
		lastOrDefault(predicate: (item: T) => boolean): T,
		lastOrDefault(predicate: (item: T) => boolean, defaultValue: T): T,
		max(): T,
		max<TResult>(selector: (item: T) => TResult): TResult,
		min(): T,
		min<TResult>(selector: (item: T) => TResult): TResult,
		ofType<TResult>(type: {
		new (...args: any[]): TResult
	}): Enumerable<TResult>,
		orderBy<TKey>(keySelector: (item: T) => TKey): OrderedEnumerable<T>,
		orderBy<TKey>(
		keySelector: (item: T) => TKey, comparer: EqualityComparer<TKey>
	): OrderedEnumerable<T>,
		orderByDescending<TKey>(keySelector: (item: T) => TKey): OrderedEnumerable<T>,
		orderByDescending<TKey>(
		keySelector: (item: T) => TKey, comparer: EqualityComparer<TKey>
	): OrderedEnumerable<T>,
		reverse(): Enumerable<T>,
		sequenceEqual(second: Iterable<T>): boolean,
		sequenceEqual(second: Iterable<T>, comparer: EqualityComparer<T>): boolean,
		select<TResult>(selector: (item: T) => TResult): Enumerable<TResult>,
		select<TResult>(selector: (item: T, index: number) => TResult): Enumerable<TResult>,
		selectMany<TResult>(selector: (item: T) => Iterable<TResult>): Enumerable<TResult>,
		selectMany<TResult>(
		selector: (item: T, index: number) => Iterable<TResult>
	): Enumerable<TResult>,
		selectMany<TCollection, TResult>(
		collectionSelector: (item: T) => Iterable<TCollection>, resultSelector: (item: T, collection: TCollection) => TResult
	): Enumerable<TResult>,
		selectMany<TCollection, TResult>(
		collectionSelector: (item: T, index: number) => Iterable<TCollection>, resultSelector: (item: T, collection: TCollection) => TResult
	): Enumerable<TResult>,
		single(): T,
		single(predicate: (item: T) => boolean): T,
		singleOrDefault(): T,
		singleOrDefault(predicate: (item: T) => boolean): T,
		singleOrDefault(predicate: (item: T) => boolean, defaultValue: T): T,
		skip(count: number): Enumerable<T>,
		skipWhile(predicate: (item: T) => boolean): Enumerable<T>,
		skipWhile(predicate: (item: T, index: number) => boolean): Enumerable<T>,
		sum(): number,
		sum(selector: (item: T) => number): number,
		take(count: number): Enumerable<T>,
		takeWhile(predicate: (item: T) => boolean): Enumerable<T>,
		takeWhile(predicate: (item: T, index: number) => boolean): Enumerable<T>,
		toArray(): T[],
		toDictionary<TKey>(keySelector: (item: T) => TKey): Dictionary<TKey, T>,
		toDictionary<TKey>(
		keySelector: (item: T) => TKey, comparer: EqualityComparer<TKey>
	): Dictionary<TKey, T>,
		toDictionary<TKey, TElement>(
		keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement
	): Dictionary<TKey, TElement>,
		toDictionary<TKey, TElement>(
		keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement, comparer: EqualityComparer<TKey>
	): Dictionary<TKey, TElement>,
		toList(): List<T>,
		toLookup<TKey>(keySelector: (item: T) => TKey): Lookup<TKey, T>,
		toLookup<TKey>(
		keySelector: (item: T) => TKey, comparer: EqualityComparer<TKey>
	): Lookup<TKey, T>,
		toLookup<TKey, TElement>(
		keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement
	): Lookup<TKey, TElement>,
		toLookup<TKey, TElement>(
		keySelector: (item: T) => TKey, elementSelector: (item: T) => TElement, comparer: EqualityComparer<TKey>
	): Lookup<TKey, TElement>,
		union(second: Iterable<T>): Enumerable<T>,
		union(second: Iterable<T>, comparer: EqualityComparer<T>): Enumerable<T>,
		where(predicate: (item: T) => boolean): Enumerable<T>,
		where(predicate: (item: T, index: number) => boolean): Enumerable<T>,
		zip<TSecond, TResult>(
		second: Iterable<TSecond>, resultSelector: (first: T, second: TSecond) => TResult
	): Enumerable<TResult>
	}

	declare interface ArrayLike<T> {
		length: number,
		[n: number]: T
	}

	declare interface RuntimeComparer {
		___hash__(): number,
		___equals__(obj: any): boolean
	}

	declare interface MultiplexRuntime {
		hash(obj: any): number,
		equals(objA: any, objB: any): boolean,
		compare<T>(objA: T, objB: T): number,
		lambda<T, TResult>(exp: string): (obj: T) => TResult,
		lambda<T1, T2, TResult>(exp: string): (obj1: T1, obj2: T2) => TResult,
		lambda<T1, T2, T3, TResult>(exp: string): (obj1: T1, obj2: T2, obj3: T3) => TResult,
		lambda<TResult>(exp: string): (...args: any[]) => TResult,
		define<T>(obj: T, prop: String, attributes: PropertyDescriptor): T,
		mixin<T>(obj: T, properties: Object, attributes?: PropertyDescriptor): T
	}

	declare interface MultiplexStatic {
		(obj: Iterable<T>): Enumerable<T>,
		(factory: () => Enumerator<T>): Enumerable<T>,
		(obj: ArrayLike<T>): Enumerable<T>,
		(obj: IArguments): Enumerable<any>,
		(obj: Object): Enumerable<KeyValuePair<string, any>>,
		hash(...obj: any[]): number,
		equals(objA: any, objB: any): boolean,
		equals(objA: any, objB: any, comparer: EqualityComparer<any>): boolean,
		compare<T>(objA: T, objB: T): number,
		enumerableExtend(type: Function): void,
		empty<T>(): Enumerable<T>,
		is(obj: any): boolean,
		range(start: number, count: number): Enumerable<number>,
		repeat<T>(element: T, count: number): Enumerable<T>,
		runtime: MultiplexRuntime,
		Enumerator: EnumeratorConstructor,
		Enumerable: EnumerableConstructor,
		Comparer: ComparerConstructor,
		EqualityComparer: EqualityComparerConstructor,
		Collection: CollectionConstructor,
		ReadOnlyCollection: ReadOnlyCollectionConstructor,
		List: ListConstructor,
		SortedList: SortedListConstructor,
		KeyValuePair: KeyValuePairConstructor,
		Dictionary: DictionaryConstructor,
		HashSet: HashSetConstructor,
		LinkedListNode: LinkedListNodeConstructor,
		LinkedList: LinkedListConstructor,
		Queue: QueueConstructor,
		Stack: StackConstructor
	}

			
}


declare module 'typescript-stl' {
					declare module.exports: undefined


}

declare module 'npm$namespace$std' {
	declare type stack<T> = Stack<T>;

	declare type queue<T> = Queue<T>;

	declare type priority_queue<T> = PriorityQueue<T>;

	declare type exception = Exception;

	declare type logic_error = LogicError;

	declare type domain_error = DomainError;

	declare type invalid_argument = InvalidArgument;

	declare type length_error = LengthError;

	declare type out_of_range = OutOfRange;

	declare type runtime_error = RuntimeError;

	declare type overflow_error = OverflowError;

	declare type underflow_error = UnderflowError;

	declare type range_error = RangeError;

	declare type system_error = SystemError;

	declare type error_category = ErrorCategory;

	declare type error_condition = ErrorCondition;

	declare type error_code = ErrorCode;

	declare interface IComparable<T> {
		equal_to(obj: T): boolean,
		less(obj: T): boolean,
		hash(): number
	}

	declare function for_each<T, InputIterator, Func>(
		first: InputIterator, last: InputIterator, fn: Func
	): Func

	declare function for_each_n<T, InputIterator>(
		first: InputIterator, n: number, fn: (val: T) => any
	): InputIterator

	declare function all_of<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (val: T) => boolean
	): boolean

	declare function any_of<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (val: T) => boolean
	): boolean

	declare function none_of<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (val: T) => boolean
	): boolean

	declare function equal<T, InputIterator>(
		first1: InputIterator, last1: InputIterator, first2: Iterator<T>
	): boolean

	declare function equal<T, InputIterator>(
		first1: InputIterator, last1: InputIterator, first2: Iterator<T>, pred: (x: T, y: T) => boolean
	): boolean

	declare function is_permutation<T, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2
	): boolean

	declare function is_permutation<T, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2, pred: (x: T, y: T) => boolean
	): boolean

	declare function lexicographical_compare<T, T1, T2, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2
	): boolean

	declare function lexicographical_compare<T, T1, T2, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, compare: (x: T, y: T) => boolean
	): boolean

	declare function find<T, InputIterator>(
		first: InputIterator, last: InputIterator, val: T
	): InputIterator

	declare function find_if<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (val: T) => boolean
	): InputIterator

	declare function find_if_not<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (val: T) => boolean
	): InputIterator

	declare function find_end<T, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2
	): Iterator1

	declare function find_end<T, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, pred: (x: T, y: T) => boolean
	): Iterator1

	declare function find_first_of<T, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2
	): Iterator1

	declare function find_first_of<T, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2, last2: Iterator2, pred: (x: T, y: T) => boolean
	): Iterator1

	declare function adjacent_find<T, InputIterator>(first: InputIterator, last: InputIterator): InputIterator

	declare function adjacent_find<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (x: T, y: T) => boolean
	): InputIterator

	declare function search<T, ForwardIterator1, ForwardIterator2>(
		first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2, last2: ForwardIterator2
	): ForwardIterator1

	declare function search<T, ForwardIterator1, ForwardIterator2>(
		first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2, last2: ForwardIterator2, pred: (x: T, y: T) => boolean
	): ForwardIterator1

	declare function search_n<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, count: number, val: T
	): ForwardIterator

	declare function search_n<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, count: number, val: T, pred: (x: T, y: T) => boolean
	): ForwardIterator

	declare function mismatch<T, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2
	): Pair<Iterator1, Iterator2>

	declare function mismatch<T, Iterator1, Iterator2>(
		first1: Iterator1, last1: Iterator1, first2: Iterator2, compare: (x: T, y: T) => boolean
	): Pair<Iterator1, Iterator2>

	declare function count<T, InputIterator>(first: InputIterator, last: InputIterator, val: T): number

	declare function count_if<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (val: T) => boolean
	): number

	declare function copy<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator
	): OutputIterator

	declare function copy_n<T, InputIterator, OutputIterator>(
		first: InputIterator, n: number, result: OutputIterator
	): OutputIterator

	declare function copy_if<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator, pred: (x: T) => boolean
	): OutputIterator

	declare function copy_backward<T, BidirectionalIterator1, BidirectionalIterator2>(
		first: BidirectionalIterator1, last: BidirectionalIterator1, result: BidirectionalIterator2
	): BidirectionalIterator2

	declare function fill<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T
	): void

	declare function fill_n<T, OutputIterator>(first: OutputIterator, n: number, val: T): OutputIterator

	declare function transform<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator, op: (val: T) => T
	): OutputIterator

	declare function transform<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, result: OutputIterator, binary_op: (x: T, y: T) => T
	): OutputIterator

	declare function generate<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, gen: () => T
	): void

	declare function generate_n<T, ForwardIterator>(
		first: ForwardIterator, n: number, gen: () => T
	): ForwardIterator

	declare function unique<T, InputIterator>(first: InputIterator, last: InputIterator): InputIterator

	declare function unique<t, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (left: t, right: t) => boolean
	): InputIterator

	declare function unique_copy<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator
	): OutputIterator

	declare function unique_copy<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator, pred: (x: T, y: T) => boolean
	): OutputIterator

	declare function remove<T, InputIterator>(
		first: InputIterator, last: InputIterator, val: T
	): InputIterator

	declare function remove_if<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (left: T) => boolean
	): InputIterator

	declare function remove_copy<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator, val: T
	): OutputIterator

	declare function remove_copy_if<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator, pred: (val: T) => boolean
	): OutputIterator

	declare function replace<T, InputIterator>(
		first: InputIterator, last: InputIterator, old_val: T, new_val: T
	): void

	declare function replace_if<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (val: T) => boolean, new_val: T
	): void

	declare function replace_copy<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator, old_val: T, new_val: T
	): OutputIterator

	declare function replace_copy_if<T, InputIterator, OutputIterator>(
		first: InputIterator, last: InputIterator, result: OutputIterator, pred: (val: T) => boolean, new_val: T
	): OutputIterator

	declare function iter_swap<T>(x: Iterator<T>, y: Iterator<T>): void

	declare function swap_ranges<T, ForwardIterator1, ForwardIterator2>(
		first1: ForwardIterator1, last1: ForwardIterator1, first2: ForwardIterator2
	): ForwardIterator2

	declare function reverse<T, InputIterator>(first: InputIterator, last: InputIterator): void

	declare function reverse_copy<T, BidirectionalIterator, OutputIterator>(
		first: BidirectionalIterator, last: BidirectionalIterator, result: OutputIterator
	): OutputIterator

	declare function rotate<T, InputIterator>(
		first: InputIterator, middle: InputIterator, last: InputIterator
	): InputIterator

	declare function rotate_copy<T, ForwardIterator, OutputIterator>(
		first: ForwardIterator, middle: ForwardIterator, last: ForwardIterator, result: OutputIterator
	): OutputIterator

	declare function random_shuffle<T, RandomAccessIterator>(
		first: RandomAccessIterator, last: RandomAccessIterator
	): void

	declare function shuffle<T, RandomAccessIterator>(
		first: RandomAccessIterator, last: RandomAccessIterator
	): void

	declare function sort<T, RandomAccessIterator>(
		first: RandomAccessIterator, last: RandomAccessIterator
	): void

	declare function sort<T, RandomAccessIterator>(
		first: RandomAccessIterator, last: RandomAccessIterator, compare: (left: T, right: T) => boolean
	): void

	declare function partial_sort<T, RandomAccessIterator>(
		first: RandomAccessIterator, middle: RandomAccessIterator, last: RandomAccessIterator
	): void

	declare function partial_sort<T, RandomAccessIterator>(
		first: RandomAccessIterator, middle: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean
	): void

	declare function partial_sort_copy<T, InputIterator, RandomAccessIterator>(
		first: InputIterator, last: InputIterator, result_first: RandomAccessIterator, result_last: RandomAccessIterator
	): RandomAccessIterator

	declare function partial_sort_copy<T, InputIterator, RandomAccessIterator>(
		first: InputIterator, last: InputIterator, result_first: RandomAccessIterator, result_last: RandomAccessIterator, compare: (x: T, y: T) => boolean
	): RandomAccessIterator

	declare function is_sorted<T, ForwardIterator>(first: ForwardIterator, last: ForwardIterator): boolean

	declare function is_sorted<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean
	): boolean

	declare function is_sorted_until<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator
	): ForwardIterator

	declare function is_sorted_until<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean
	): ForwardIterator

	declare function make_heap<T, RandomAccessIterator>(
		fisrt: RandomAccessIterator, last: RandomAccessIterator
	): void

	declare function make_heap<T, RandomAccessIterator>(
		fisrt: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean
	): void

	declare function push_heap<T, RandomAccessIterator>(
		fisrt: RandomAccessIterator, last: RandomAccessIterator
	): void

	declare function push_heap<T, RandomAccessIterator>(
		fisrt: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean
	): void

	declare function pop_heap<T, RandomAccessIterator>(
		fisrt: RandomAccessIterator, last: RandomAccessIterator
	): void

	declare function pop_heap<T, RandomAccessIterator>(
		fisrt: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean
	): void

	declare function is_heap<T, RandomAccessIterator>(
		first: RandomAccessIterator, last: RandomAccessIterator
	): boolean

	declare function is_heap<T, RandomAccessIterator>(
		first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean
	): boolean

	declare function is_heap_until<T, RandomAccessIterator>(
		first: RandomAccessIterator, last: RandomAccessIterator
	): RandomAccessIterator

	declare function is_heap_until<T, RandomAccessIterator>(
		first: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean
	): RandomAccessIterator

	declare function sort_heap<T, RandomAccessIterator>(
		fisrt: RandomAccessIterator, last: RandomAccessIterator
	): void

	declare function sort_heap<T, RandomAccessIterator>(
		fisrt: RandomAccessIterator, last: RandomAccessIterator, compare: (x: T, y: T) => boolean
	): void

	declare function lower_bound<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T
	): ForwardIterator

	declare function lower_bound<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean
	): ForwardIterator

	declare function upper_bound<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T
	): ForwardIterator

	declare function upper_bound<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean
	): ForwardIterator

	declare function equal_range<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T
	): Pair<ForwardIterator, ForwardIterator>

	declare function equal_range<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean
	): Pair<ForwardIterator, ForwardIterator>

	declare function binary_search<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T
	): boolean

	declare function binary_search<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, val: T, compare: (x: T, y: T) => boolean
	): boolean

	declare function is_partitioned<T, InputIterator>(
		first: InputIterator, last: InputIterator, pred: (x: T) => boolean
	): boolean

	declare function partition<T, BidirectionalIterator>(
		first: BidirectionalIterator, last: BidirectionalIterator, pred: (x: T) => boolean
	): BidirectionalIterator

	declare function stable_partition<T, BidirectionalIterator>(
		first: BidirectionalIterator, last: BidirectionalIterator, pred: (x: T) => boolean
	): BidirectionalIterator

	declare function partition_copy<T, InputIterator, OutputIterator1, OutputIterator2>(
		first: InputIterator, last: InputIterator, result_true: OutputIterator1, result_false: OutputIterator2, pred: (val: T) => T
	): Pair<OutputIterator1, OutputIterator2>

	declare function partition_point<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, pred: (x: T) => boolean
	): ForwardIterator

	declare function merge<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator
	): OutputIterator

	declare function merge<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean
	): OutputIterator

	declare function inplace_merge<T, BidirectionalIterator>(
		first: BidirectionalIterator, middle: BidirectionalIterator, last: BidirectionalIterator
	): void

	declare function inplace_merge<T, BidirectionalIterator>(
		first: BidirectionalIterator, middle: BidirectionalIterator, last: BidirectionalIterator, compare: (x: T, y: T) => boolean
	): void

	declare function includes<T, InputIterator1, InputIterator2>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2
	): boolean

	declare function includes<T, InputIterator1, InputIterator2>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, compare: (x: T, y: T) => boolean
	): boolean

	declare function set_union<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator
	): OutputIterator

	declare function set_union<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean
	): OutputIterator

	declare function set_intersection<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator
	): OutputIterator

	declare function set_intersection<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean
	): OutputIterator

	declare function set_difference<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator
	): OutputIterator

	declare function set_difference<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean
	): OutputIterator

	declare function set_symmetric_difference<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator
	): OutputIterator

	declare function set_symmetric_difference<T, InputIterator1, InputIterator2, OutputIterator>(
		first1: InputIterator1, last1: InputIterator1, first2: InputIterator2, last2: InputIterator2, result: OutputIterator, compare: (x: T, y: T) => boolean
	): OutputIterator

	declare function min<T>(...args: T[]): T

	declare function max<T>(...args: T[]): T

	declare function minmax<T>(...args: T[]): Pair<T, T>

	declare function min_element<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator
	): ForwardIterator

	declare function min_element<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean
	): ForwardIterator

	declare function max_element<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator
	): ForwardIterator

	declare function max_element<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean
	): ForwardIterator

	declare function minmax_element<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator
	): Pair<ForwardIterator, ForwardIterator>

	declare function minmax_element<T, ForwardIterator>(
		first: ForwardIterator, last: ForwardIterator, compare: (x: T, y: T) => boolean
	): Pair<ForwardIterator, ForwardIterator>

	declare function distance<T, InputIterator>(first: InputIterator, last: InputIterator): number

	declare function advance<T, InputIterator>(it: InputIterator, n: number): InputIterator

	declare function prev<T, BidirectionalIterator>(
		it: BidirectionalIterator, n?: number
	): BidirectionalIterator

	declare function next<T, ForwardIterator>(it: ForwardIterator, n?: number): ForwardIterator

	declare function begin<T>(container: Vector<T>): VectorIterator<T>

	declare function begin<T>(container: List<T>): ListIterator<T>

	declare function begin<T>(container: Deque<T>): DequeIterator<T>

	declare function begin<T>(container: base.SetContainer<T>): SetIterator<T>

	declare function begin<Key, T>(container: base.MapContainer<Key, T>): MapIterator<Key, T>

	declare function end<T>(container: Vector<T>): VectorIterator<T>

	declare function end<T>(container: List<T>): ListIterator<T>

	declare function end<T>(container: Deque<T>): DequeIterator<T>

	declare function end<T>(container: base.SetContainer<T>): SetIterator<T>

	declare function end<Key, T>(container: base.MapContainer<Key, T>): MapIterator<Key, T>

	declare function terminate(): void

	declare function set_terminate(f: () => void): void

	declare function get_terminate(): () => void

	declare function equal_to<T>(x: T, y: T): boolean

	declare function not_equal_to<T>(x: T, y: T): boolean

	declare function less<T>(x: T, y: T): boolean

	declare function less_equal<T>(x: T, y: T): boolean

	declare function greater<T>(x: T, y: T): boolean

	declare function greater_equal<T>(x: T, y: T): boolean

	declare function logical_and<T>(x: T, y: T): boolean

	declare function logical_or<T>(x: T, y: T): boolean

	declare function logical_not<T>(x: T): boolean

	declare function bit_and(x: number, y: number): number

	declare function bit_or(x: number, y: number): number

	declare function bit_xor(x: number, y: number): number

	declare function hash(val: number): number

	declare function hash(str: string): number

	declare function hash(obj: Object): number

	declare function swap<T>(left: base.IContainer<T>, right: base.IContainer<T>): void

	declare function swap<T>(left: Queue<T>, right: Queue<T>): void

	declare function swap<T>(left: PriorityQueue<T>, right: PriorityQueue<T>): void

	declare function swap<T>(left: Stack<T>, right: Stack<T>): void

	declare function swap<Key, T>(left: base.UniqueMap<Key, T>, right: base.UniqueMap<Key, T>): void

	declare function swap<Key, T>(left: base.MultiMap<Key, T>, right: base.MultiMap<Key, T>): void

	declare function bind<Ret>(fn: (...args: any[]) => Ret, ...args: any[]): (...args: any[]) => Ret

	declare function bind<Ret, T>(
		fn: (...args: any[]) => Ret, thisArg: T, ...args: any[]
	): (...args: any[]) => Ret

	declare function is_node(): boolean

	declare function make_pair<T1, T2>(x: T1, y: T2): Pair<T1, T2>

	declare class Iterator<T>  {
		source_: base.IContainer<T>;
		constructor(source: base.IContainer<T>): this;
		prev(): Iterator<T>;
		next(): Iterator<T>;
		advance(n: number): Iterator<T>;
		get_source(): base.IContainer<T>;
		equal_to<U>(obj: Iterator<U>): boolean;
		value: T;
		swap(obj: Iterator<T>): void
	}

	declare class ReverseIterator<T, Base, This> extends Iterator<T> {
		base_: Base;
		constructor(base: Base): this;
		base(): Base;
		create_neighbor(base: Base): This;
		value: T;
		prev(): This;
		next(): This;
		advance(n: number): This;
		equal_to(obj: This): boolean;
		swap(obj: This): void
	}

	declare class Deque<T> extends base$Container<T>, base$IArrayContainer<T> {
		constructor(): this;
		constructor(items: Array<T>): this;
		constructor(size: number, val: T): this;
		constructor(container: Deque<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		assign<U, InputIterator>(begin: InputIterator, end: InputIterator): void;
		assign(n: number, val: T): void;
		reserve(capacity: number): void;
		clear(): void;
		begin(): DequeIterator<T>;
		end(): DequeIterator<T>;
		rbegin(): DequeReverseIterator<T>;
		rend(): DequeReverseIterator<T>;
		size(): number;
		empty(): boolean;
		capacity(): number;
		at(index: number): T;
		set(index: number, val: T): void;
		front(): T;
		back(): T;
		push(...items: T[]): number;
		push_front(val: T): void;
		push_back(val: T): void;
		pop_front(): void;
		pop_back(): void;
		insert(position: DequeIterator<T>, val: T): DequeIterator<T>;
		insert(position: DequeIterator<T>, n: number, val: T): DequeIterator<T>;
		insert<U, InputIterator>(
		position: DequeIterator<T>, begin: InputIterator, end: InputIterator
	): DequeIterator<T>;
		insert(position: DequeReverseIterator<T>, val: T): DequeReverseIterator<T>;
		insert(position: DequeReverseIterator<T>, n: number, val: T): DequeReverseIterator<T>;
		insert<U, InputIterator>(
		position: DequeReverseIterator<T>, begin: InputIterator, end: InputIterator
	): DequeReverseIterator<T>;
		_Insert_by_repeating_val(position: DequeIterator<T>, n: number, val: T): DequeIterator<T>;
		_Insert_by_range<U, InputIterator>(
		position: DequeIterator<T>, begin: InputIterator, end: InputIterator
	): DequeIterator<T>;
		erase(position: DequeIterator<T>): DequeIterator<T>;
		erase(first: DequeIterator<T>, last: DequeIterator<T>): DequeIterator<T>;
		erase(position: DequeReverseIterator<T>): DequeReverseIterator<T>;
		erase(
		first: DequeReverseIterator<T>, last: DequeReverseIterator<T>
	): DequeReverseIterator<T>;
		_Erase_by_range(first: DequeIterator<T>, last: DequeIterator<T>): DequeIterator<T>;
		swap(obj: Deque<T>): void;
		swap(obj: base.IContainer<T>): void
	}

	declare class DequeIterator<T> extends Iterator<T>, base$IArrayIterator<T> {
		constructor(source: Deque<T>, index: number): this;
		value: T;
		index: number;
		prev(): DequeIterator<T>;
		next(): DequeIterator<T>;
		advance(n: number): DequeIterator<T>;
		equal_to<U>(obj: DequeIterator<U>): boolean;
		swap(obj: DequeIterator<T>): void
	}

	declare class DequeReverseIterator<T> extends ReverseIterator<T, DequeIterator<T>, DequeReverseIterator<T>>, base$IArrayIterator<T> {
		constructor(base: DequeIterator<T>): this;
		create_neighbor(base: DequeIterator<T>): DequeReverseIterator<T>;
		value: T;
		index: number
	}

	declare class Exception extends Error {
		constructor(): this;
		constructor(message: string): this;
		what(): string;
		message: string;
		name: string
	}

	declare class LogicError extends Exception {
		constructor(message: string): this
	}

	declare class DomainError extends LogicError {
		constructor(message: string): this
	}

	declare class InvalidArgument extends LogicError {
		constructor(message: string): this
	}

	declare class LengthError extends LogicError {
		constructor(message: string): this
	}

	declare class OutOfRange extends LogicError {
		constructor(message: string): this
	}

	declare class RuntimeError extends Exception {
		constructor(message: string): this
	}

	declare class OverflowError extends RuntimeError {
		constructor(message: string): this
	}

	declare class UnderflowError extends RuntimeError {
		constructor(message: string): this
	}

	declare class RangeError extends RuntimeError {
		constructor(message: string): this
	}

	declare class MapIterator<Key, T> extends Iterator<Pair<Key, T>>, IComparable<MapIterator<Key, T>> {
		constructor(source: base.MapContainer<Key, T>, list_iterator: ListIterator<Pair<Key, T>>): this;
		prev(): MapIterator<Key, T>;
		next(): MapIterator<Key, T>;
		advance(step: number): MapIterator<Key, T>;
		get_list_iterator(): ListIterator<Pair<Key, T>>;
		value: Pair<Key, T>;
		first: Key;
		second: T;
		equal_to<L, U>(obj: MapIterator<L, U>): boolean;
		less<L, U>(obj: MapIterator<L, U>): boolean;
		hash(): number;
		swap(obj: MapIterator<Key, T>): void
	}

	declare class MapReverseIterator<Key, T> extends ReverseIterator<Pair<Key, T>, MapIterator<Key, T>, MapReverseIterator<Key, T>> {
		constructor(base: MapIterator<Key, T>): this;
		create_neighbor(base: MapIterator<Key, T>): MapReverseIterator<Key, T>;
		first: Key;
		second: T
	}

	declare class HashMap<Key, T> extends base$UniqueMap<Key, T>, base$IHashMap<Key, T> {
		constructor(): this;
		constructor(items: Pair<Key, T>[]): this;
		constructor(array: [Key, T][]): this;
		constructor(container: HashMap<Key, T>): this;
		constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>): this;
		clear(): void;
		find(key: Key): MapIterator<Key, T>;
		begin(): MapIterator<Key, T>;
		begin(index: number): MapIterator<Key, T>;
		end(): MapIterator<Key, T>;
		end(index: number): MapIterator<Key, T>;
		rbegin(): MapReverseIterator<Key, T>;
		rbegin(index: number): MapReverseIterator<Key, T>;
		rend(): MapReverseIterator<Key, T>;
		rend(index: number): MapReverseIterator<Key, T>;
		bucket_count(): number;
		bucket_size(index: number): number;
		max_load_factor(): number;
		max_load_factor(z: number): void;
		bucket(key: Key): number;
		reserve(n: number): void;
		rehash(n: number): void;
		_Insert_by_pair(pair: Pair<Key, T>): any;
		_Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		_Insert_by_range<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		_Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		swap(obj: HashMap<Key, T>): void;
		swap(obj: base.IContainer<Pair<Key, T>>): void
	}

	declare class HashMultiMap<Key, T> extends base$MultiMap<Key, T> {
		constructor(): this;
		constructor(items: Pair<Key, T>[]): this;
		constructor(array: [Key, T][]): this;
		constructor(container: HashMultiMap<Key, T>): this;
		constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>): this;
		clear(): void;
		find(key: Key): MapIterator<Key, T>;
		count(key: Key): number;
		begin(): MapIterator<Key, T>;
		begin(index: number): MapIterator<Key, T>;
		end(): MapIterator<Key, T>;
		end(index: number): MapIterator<Key, T>;
		rbegin(): MapReverseIterator<Key, T>;
		rbegin(index: number): MapReverseIterator<Key, T>;
		rend(): MapReverseIterator<Key, T>;
		rend(index: number): MapReverseIterator<Key, T>;
		bucket_count(): number;
		bucket_size(n: number): number;
		max_load_factor(): number;
		max_load_factor(z: number): void;
		bucket(key: Key): number;
		reserve(n: number): void;
		rehash(n: number): void;
		_Insert_by_pair(pair: Pair<Key, T>): any;
		_Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		_Insert_by_range<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		_Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		swap(obj: HashMultiMap<Key, T>): void;
		swap(obj: base.IContainer<Pair<Key, T>>): void
	}

	declare class SetIterator<T> extends Iterator<T>, IComparable<SetIterator<T>> {
		constructor(source: base.SetContainer<T>, it: ListIterator<T>): this;
		prev(): SetIterator<T>;
		next(): SetIterator<T>;
		advance(size: number): SetIterator<T>;
		get_list_iterator(): ListIterator<T>;
		value: T;
		equal_to<U>(obj: SetIterator<U>): boolean;
		less<U>(obj: SetIterator<U>): boolean;
		hash(): number;
		swap(obj: SetIterator<T>): void
	}

	declare class SetReverseIterator<T> extends ReverseIterator<T, SetIterator<T>, SetReverseIterator<T>> {
		constructor(base: SetIterator<T>): this;
		create_neighbor(base: SetIterator<T>): SetReverseIterator<T>
	}

	declare class HashMultiSet<T> extends base$MultiSet<T> {
		constructor(): this;
		constructor(items: T[]): this;
		constructor(container: HashMultiSet<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		clear(): void;
		find(key: T): SetIterator<T>;
		count(key: T): number;
		begin(): SetIterator<T>;
		begin(index: number): SetIterator<T>;
		end(): SetIterator<T>;
		end(index: number): SetIterator<T>;
		rbegin(): SetReverseIterator<T>;
		rbegin(index: number): SetReverseIterator<T>;
		rend(): SetReverseIterator<T>;
		rend(index: number): SetReverseIterator<T>;
		bucket_count(): number;
		bucket_size(n: number): number;
		max_load_factor(): number;
		max_load_factor(z: number): void;
		bucket(key: T): number;
		reserve(n: number): void;
		rehash(n: number): void;
		_Insert_by_val(val: T): any;
		_Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
		_Insert_by_range<U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
		_Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
		swap(obj: HashMultiSet<T>): void;
		swap(obj: base.IContainer<T>): void
	}

	declare class HashSet<T> extends base$UniqueSet<T>, base$IHashSet<T> {
		constructor(): this;
		constructor(items: T[]): this;
		constructor(container: HashSet<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		clear(): void;
		find(key: T): SetIterator<T>;
		begin(): SetIterator<T>;
		begin(index: number): SetIterator<T>;
		end(): SetIterator<T>;
		end(index: number): SetIterator<T>;
		rbegin(): SetReverseIterator<T>;
		rbegin(index: number): SetReverseIterator<T>;
		rend(): SetReverseIterator<T>;
		rend(index: number): SetReverseIterator<T>;
		bucket_count(): number;
		bucket_size(n: number): number;
		max_load_factor(): number;
		max_load_factor(z: number): void;
		bucket(key: T): number;
		reserve(n: number): void;
		rehash(n: number): void;
		_Insert_by_val(val: T): any;
		_Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
		_Insert_by_range<U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
		_Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
		swap(obj: HashSet<T>): void;
		swap(obj: base.IContainer<T>): void
	}

	declare class List<T> extends base$Container<T>, base$IDequeContainer<T> {
		constructor(): this;
		constructor(items: Array<T>): this;
		constructor(size: number, val: T): this;
		constructor(container: List<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		assign(n: number, val: T): void;
		assign<U, InputIterator>(begin: InputIterator, end: InputIterator): void;
		clear(): void;
		begin(): ListIterator<T>;
		end(): ListIterator<T>;
		rbegin(): ListReverseIterator<T>;
		rend(): ListReverseIterator<T>;
		size(): number;
		front(): T;
		back(): T;
		push(...items: T[]): number;
		push_front(val: T): void;
		push_back(val: T): void;
		pop_front(): void;
		pop_back(): void;
		insert(position: ListIterator<T>, val: T): ListIterator<T>;
		insert(position: ListIterator<T>, size: number, val: T): ListIterator<T>;
		insert<U, InputIterator>(
		position: ListIterator<T>, begin: InputIterator, end: InputIterator
	): ListIterator<T>;
		insert(position: ListReverseIterator<T>, val: T): ListReverseIterator<T>;
		insert(position: ListReverseIterator<T>, size: number, val: T): ListReverseIterator<T>;
		insert<U, InputIterator>(
		position: ListReverseIterator<T>, begin: InputIterator, end: InputIterator
	): ListReverseIterator<T>;
		_Insert_by_repeating_val(position: ListIterator<T>, size: number, val: T): ListIterator<T>;
		_Insert_by_range<U, InputIterator>(
		position: ListIterator<T>, begin: InputIterator, end: InputIterator
	): ListIterator<T>;
		erase(position: ListIterator<T>): ListIterator<T>;
		erase(begin: ListIterator<T>, end: ListIterator<T>): ListIterator<T>;
		erase(position: ListReverseIterator<T>): ListReverseIterator<T>;
		erase(
		begin: ListReverseIterator<T>, end: ListReverseIterator<T>
	): ListReverseIterator<T>;
		_Erase_by_range(first: ListIterator<T>, last: ListIterator<T>): ListIterator<T>;
		unique(): void;
		unique(binary_pred: (left: T, right: T) => boolean): void;
		remove(val: T): void;
		remove_if(pred: (val: T) => boolean): void;
		merge<U>(obj: List<U>): void;
		merge<U>(obj: List<U>, compare: (left: T, right: T) => boolean): void;
		splice<U>(position: ListIterator<T>, obj: List<U>): void;
		splice<U>(position: ListIterator<T>, obj: List<U>, it: ListIterator<U>): void;
		splice<U>(
		position: ListIterator<T>, obj: List<U>, begin: ListIterator<U>, end: ListIterator<U>
	): void;
		sort(): void;
		sort(compare: (left: T, right: T) => boolean): void;
		swap(obj: List<T>): void;
		swap(obj: base.IContainer<T>): void
	}

	declare class ListIterator<T> extends Iterator<T> {
		constructor(source: List<T>, prev: ListIterator<T>, next: ListIterator<T>, value: T): this;
		prev(): ListIterator<T>;
		next(): ListIterator<T>;
		advance(step: number): ListIterator<T>;
		value: T;
		equal_to(obj: ListIterator<T>): boolean;
		swap(obj: ListIterator<T>): void
	}

	declare class ListReverseIterator<T> extends ReverseIterator<T, ListIterator<T>, ListReverseIterator<T>>, base$ILinearIterator<T> {
		constructor(base: ListIterator<T>): this;
		create_neighbor(base: ListIterator<T>): ListReverseIterator<T>;
		value: T
	}

	declare class PriorityQueue<T>  {
		constructor(): this;
		constructor(compare: (left: T, right: T) => boolean): this;
		constructor(array: Array<T>): this;
		constructor(array: Array<T>, compare: (left: T, right: T) => boolean): this;
		constructor(container: base.IContainer<T>): this;
		constructor(container: base.IContainer<T>, compare: (left: T, right: T) => boolean): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>, compare: (left: T, right: T) => boolean): this;
		size(): number;
		empty(): boolean;
		top(): T;
		push(val: T): void;
		pop(): void;
		swap(obj: PriorityQueue<T>): void
	}

	declare class Queue<T>  {
		constructor(): this;
		constructor(container: Queue<T>): this;
		size(): number;
		empty(): boolean;
		front(): T;
		back(): T;
		push(val: T): void;
		pop(): void;
		swap(obj: Queue<T>): void
	}

	declare class Stack<T>  {
		constructor(): this;
		constructor(stack: Stack<T>): this;
		size(): number;
		empty(): boolean;
		top(): T;
		push(val: T): void;
		pop(): void;
		swap(obj: Stack<T>): void
	}

	declare class SystemError extends RuntimeError {
		code_: ErrorCode;
		constructor(code: ErrorCode): this;
		constructor(code: ErrorCode, message: string): this;
		constructor(val: number, category: ErrorCategory): this;
		constructor(val: number, category: ErrorCategory, message: string): this;
		code(): ErrorCode
	}

	declare class ErrorCategory  {
		constructor(): this;
		name(): string;
		message(val: number): string;
		default_error_condition(val: number): ErrorCondition;
		equivalent(val_code: number, cond: ErrorCondition): boolean;
		equivalent(code: ErrorCode, val_cond: number): boolean
	}

	declare class ErrorCondition extends base$ErrorInstance {
		constructor(): this;
		constructor(val: number, category: ErrorCategory): this
	}

	declare class ErrorCode extends base$ErrorInstance {
		constructor(): this;
		constructor(val: number, category: ErrorCategory): this
	}

	declare class TreeMap<Key, T> extends base$UniqueMap<Key, T>, base$ITreeMap<Key, T> {
		constructor(): this;
		constructor(compare: (x: Key, y: Key) => boolean): this;
		constructor(array: Array<Pair<Key, T>>): this;
		constructor(array: Array<Pair<Key, T>>, compare: (x: Key, y: Key) => boolean): this;
		constructor(array: Array<[Key, T]>): this;
		constructor(array: Array<[Key, T]>, compare: (x: Key, y: Key) => boolean): this;
		constructor(container: TreeMap<Key, T>): this;
		constructor(container: TreeMap<Key, T>, compare: (x: Key, y: Key) => boolean): this;
		constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>): this;
		constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>, compare: (x: Key, y: Key) => boolean): this;
		clear(): void;
		find(key: Key): MapIterator<Key, T>;
		key_comp(): (x: Key, y: Key) => boolean;
		value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean;
		lower_bound(key: Key): MapIterator<Key, T>;
		upper_bound(key: Key): MapIterator<Key, T>;
		equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
		_Insert_by_pair(pair: Pair<Key, T>): any;
		_Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		_Insert_by_range<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		_Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		swap(obj: TreeMap<Key, T>): void;
		swap(obj: base.IContainer<Pair<Key, T>>): void
	}

	declare class TreeMultiMap<Key, T> extends base$MultiMap<Key, T>, base$ITreeMap<Key, T> {
		constructor(): this;
		constructor(compare: (x: Key, y: Key) => boolean): this;
		constructor(array: Array<Pair<Key, T>>): this;
		constructor(array: Array<Pair<Key, T>>, compare: (x: Key, y: Key) => boolean): this;
		constructor(array: Array<[Key, T]>): this;
		constructor(array: Array<[Key, T]>, compare: (x: Key, y: Key) => boolean): this;
		constructor(container: TreeMultiMap<Key, T>): this;
		constructor(container: TreeMultiMap<Key, T>, compare: (x: Key, y: Key) => boolean): this;
		constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>): this;
		constructor(begin: Iterator<Pair<Key, T>>, end: Iterator<Pair<Key, T>>, compare: (x: Key, y: Key) => boolean): this;
		clear(): void;
		find(key: Key): MapIterator<Key, T>;
		count(key: Key): number;
		key_comp(): (x: Key, y: Key) => boolean;
		value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean;
		lower_bound(key: Key): MapIterator<Key, T>;
		upper_bound(key: Key): MapIterator<Key, T>;
		equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
		_Insert_by_pair(pair: Pair<Key, T>): any;
		_Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		_Insert_by_range<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		_Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		swap(obj: TreeMultiMap<Key, T>): void;
		swap(obj: base.IContainer<Pair<Key, T>>): void
	}

	declare class TreeMultiSet<T> extends base$MultiSet<T>, base$ITreeSet<T> {
		constructor(): this;
		constructor(compare: (x: T, y: T) => boolean): this;
		constructor(array: Array<T>): this;
		constructor(array: Array<T>, compare: (x: T, y: T) => boolean): this;
		constructor(container: TreeMultiSet<T>): this;
		constructor(container: TreeMultiSet<T>, compare: (x: T, y: T) => boolean): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>, compare: (x: T, y: T) => boolean): this;
		clear(): void;
		find(val: T): SetIterator<T>;
		count(val: T): number;
		key_comp(): (x: T, y: T) => boolean;
		value_comp(): (x: T, y: T) => boolean;
		lower_bound(val: T): SetIterator<T>;
		upper_bound(val: T): SetIterator<T>;
		equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>;
		_Insert_by_val(val: T): any;
		_Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
		_Insert_by_range<U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
		_Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
		swap(obj: TreeMultiSet<T>): void;
		swap(obj: base.IContainer<T>): void
	}

	declare class TreeSet<T> extends base$UniqueSet<T>, base$ITreeSet<T> {
		constructor(): this;
		constructor(compare: (x: T, y: T) => boolean): this;
		constructor(array: Array<T>): this;
		constructor(array: Array<T>, compare: (x: T, y: T) => boolean): this;
		constructor(container: TreeMultiSet<T>): this;
		constructor(container: TreeMultiSet<T>, compare: (x: T, y: T) => boolean): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>, compare: (x: T, y: T) => boolean): this;
		clear(): void;
		find(val: T): SetIterator<T>;
		key_comp(): (x: T, y: T) => boolean;
		value_comp(): (x: T, y: T) => boolean;
		lower_bound(val: T): SetIterator<T>;
		upper_bound(val: T): SetIterator<T>;
		equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>;
		_Insert_by_val(val: T): any;
		_Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
		_Insert_by_range<U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
		_Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void;
		swap(obj: TreeSet<T>): void;
		swap(obj: base.IContainer<T>): void
	}

	declare class Pair<T1, T2>  {
		first: T1;
		second: T2;
		constructor(first: T1, second: T2): this;
		equal_to<U1, U2>(pair: Pair<U1, U2>): boolean;
		less<U1, U2>(pair: Pair<U1, U2>): boolean
	}

	declare class Vector<T> extends Array<T>, base$IContainer<T> {
		constructor(): this;
		constructor(array: Array<T>): this;
		constructor(n: number): this;
		constructor(n: number, val: T): this;
		constructor(container: Vector<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		assign<U, InputIterator>(begin: InputIterator, end: InputIterator): void;
		assign(n: number, val: T): void;
		reserve(size: number): void;
		clear(): void;
		begin(): VectorIterator<T>;
		end(): VectorIterator<T>;
		rbegin(): VectorReverseIterator<T>;
		rend(): VectorReverseIterator<T>;
		size(): number;
		capacity(): number;
		empty(): boolean;
		at(index: number): T;
		set(index: number, val: T): T;
		front(): T;
		back(): T;
		push_back(val: T): void;
		insert(position: VectorIterator<T>, val: T): VectorIterator<T>;
		insert(position: VectorIterator<T>, n: number, val: T): VectorIterator<T>;
		insert<U, InputIterator>(
		position: VectorIterator<T>, begin: InputIterator, end: InputIterator
	): VectorIterator<T>;
		insert(position: VectorReverseIterator<T>, val: T): VectorReverseIterator<T>;
		insert(
		position: VectorReverseIterator<T>, n: number, val: T
	): VectorReverseIterator<T>;
		insert<U, InputIterator>(
		position: VectorReverseIterator<T>, begin: InputIterator, end: InputIterator
	): VectorReverseIterator<T>;
		_Insert_by_repeating_val(position: VectorIterator<T>, n: number, val: T): VectorIterator<T>;
		_Insert_by_range<InputIterator>(
		position: VectorIterator<T>, first: InputIterator, last: InputIterator
	): VectorIterator<T>;
		pop_back(): void;
		erase(position: VectorIterator<T>): VectorIterator<T>;
		erase(first: VectorIterator<T>, last: VectorIterator<T>): VectorIterator<T>;
		erase(position: VectorReverseIterator<T>): VectorReverseIterator<T>;
		erase(
		first: VectorReverseIterator<T>, last: VectorReverseIterator<T>
	): VectorReverseIterator<T>;
		_Erase_by_range(first: VectorIterator<T>, last: VectorIterator<T>): VectorIterator<T>;
		swap(obj: Vector<T>): void;
		swap(obj: base.IContainer<T>): void
	}

	declare class VectorIterator<T> extends Iterator<T>, base$IArrayIterator<T> {
		constructor(source: Vector<T>, index: number): this;
		value: T;
		index: number;
		prev(): VectorIterator<T>;
		next(): VectorIterator<T>;
		advance(n: number): VectorIterator<T>;
		equal_to<U>(obj: VectorIterator<U>): boolean;
		swap(obj: VectorIterator<T>): void
	}

	declare class VectorReverseIterator<T> extends ReverseIterator<T, VectorIterator<T>, VectorReverseIterator<T>>, base$IArrayIterator<T> {
		constructor(base: VectorIterator<T>): this;
		create_neighbor(base: VectorIterator<T>): VectorReverseIterator<T>;
		value: T;
		index: number
	}

	
}

declare module 'base' {
		declare interface IHashMap<Key, T> {
		begin(): MapIterator<Key, T>,
		begin(index: number): MapIterator<Key, T>,
		end(): MapIterator<Key, T>,
		end(index: number): MapIterator<Key, T>,
		rbegin(): MapReverseIterator<Key, T>,
		rbegin(index: number): MapReverseIterator<Key, T>,
		rend(): MapReverseIterator<Key, T>,
		rend(index: number): MapReverseIterator<Key, T>,
		bucket_count(): number,
		bucket_size(n: number): number,
		max_load_factor(): number,
		max_load_factor(z: number): void,
		bucket(key: Key): number,
		reserve(n: number): void,
		rehash(n: number): void
	}

	declare interface IHashSet<T> {
		begin(): SetIterator<T>,
		begin(index: number): SetIterator<T>,
		end(): SetIterator<T>,
		end(index: number): SetIterator<T>,
		rbegin(): SetReverseIterator<T>,
		rbegin(index: number): SetReverseIterator<T>,
		rend(): SetReverseIterator<T>,
		rend(index: number): SetReverseIterator<T>,
		bucket_count(): number,
		bucket_size(n: number): number,
		max_load_factor(): number,
		max_load_factor(z: number): void,
		bucket(key: T): number,
		reserve(n: number): void,
		rehash(n: number): void
	}

	declare interface IArrayContainer<T> {
		reserve(n: number): void,
		capacity(): number,
		at(index: number): T,
		set(index: number, val: T): void
	}

	declare interface IArrayIterator<T> {
		index: number,
		prev(): IArrayIterator<T>,
		next(): IArrayIterator<T>
	}

	declare interface IContainer<T> {
		assign<U, InputIterator>(begin: InputIterator, end: InputIterator): void,
		clear(): void,
		begin(): Iterator<T>,
		end(): Iterator<T>,
		rbegin(): base.IReverseIterator<T>,
		rend(): base.IReverseIterator<T>,
		size(): number,
		empty(): boolean,
		push(...items: T[]): number,
		insert(position: Iterator<T>, val: T): Iterator<T>,
		erase(position: Iterator<T>): Iterator<T>,
		erase(begin: Iterator<T>, end: Iterator<T>): Iterator<T>,
		swap(obj: IContainer<T>): void
	}

	declare interface IReverseIterator<T> {
		
	}

	declare interface IDequeContainer<T> {
		push_front(val: T): void,
		pop_front(): void
	}

	declare interface ILinearContainer<T> {
		assign<U, InputIterator>(begin: InputIterator, end: InputIterator): void,
		assign(n: number, val: T): void,
		front(): T,
		back(): T,
		push_back(val: T): void,
		pop_back(): void,
		insert(position: Iterator<T>, val: T): Iterator<T>,
		insert(position: Iterator<T>, n: number, val: T): Iterator<T>,
		insert<U, InputIterator>(
		position: Iterator<T>, begin: InputIterator, end: InputIterator
	): Iterator<T>
	}

	declare interface ILinearIterator<T> {
		value: T,
		prev(): ILinearIterator<T>,
		next(): ILinearIterator<T>
	}

	declare interface ITreeMap<Key, T> {
		key_comp(): (x: Key, y: Key) => boolean,
		value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean,
		lower_bound(key: Key): MapIterator<Key, T>,
		upper_bound(key: Key): MapIterator<Key, T>,
		equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>
	}

	declare interface ITreeSet<T> {
		key_comp(): (x: T, y: T) => boolean,
		value_comp(): (x: T, y: T) => boolean,
		lower_bound(val: T): SetIterator<T>,
		upper_bound(val: T): SetIterator<T>,
		equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>
	}

		declare class Container<T> extends IContainer<T> {
		constructor(): this;
		constructor(array: Array<T>): this;
		constructor(container: IContainer<T>): this;
		constructor(begin: Iterator<T>, end: Iterator<T>): this;
		assign<U, InputIterator>(begin: InputIterator, end: InputIterator): void;
		clear(): void;
		begin(): Iterator<T>;
		end(): Iterator<T>;
		rbegin(): base.IReverseIterator<T>;
		rend(): base.IReverseIterator<T>;
		size(): number;
		empty(): boolean;
		push(...items: T[]): number;
		insert(position: Iterator<T>, val: T): Iterator<T>;
		erase(position: Iterator<T>): Iterator<T>;
		erase<U>(begin: Iterator<U>, end: Iterator<U>): Iterator<T>;
		swap(obj: IContainer<T>): void
	}

	declare class MapContainer<Key, T> extends Container<Pair<Key, T>> {
		constructor(): this;
		assign<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		clear(): void;
		find(key: Key): MapIterator<Key, T>;
		begin(): MapIterator<Key, T>;
		end(): MapIterator<Key, T>;
		rbegin(): MapReverseIterator<Key, T>;
		rend(): MapReverseIterator<Key, T>;
		has(key: Key): boolean;
		count(key: Key): number;
		size(): number;
		push(...args: Pair<Key, T>[]): number;
		push(...args: [Key, T][]): number;
		emplace_hint(hint: MapIterator<Key, T>, key: Key, val: T): MapIterator<Key, T>;
		emplace_hint(hint: MapReverseIterator<Key, T>, key: Key, val: T): MapReverseIterator<Key, T>;
		emplace_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		emplace_hint(
		hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>
	): MapReverseIterator<Key, T>;
		insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		insert(
		hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>
	): MapReverseIterator<Key, T>;
		insert<L, U>(hint: MapIterator<Key, T>, tuple: [L, U]): MapIterator<Key, T>;
		insert<L, U>(
		hint: MapReverseIterator<Key, T>, tuple: [L, U]
	): MapReverseIterator<Key, T>;
		insert<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		_Insert_by_pair<L, U>(pair: Pair<L, U>): any;
		_Insert_by_hint(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		_Insert_by_range<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		erase(key: Key): number;
		erase(it: MapIterator<Key, T>): MapIterator<Key, T>;
		erase(begin: MapIterator<Key, T>, end: MapIterator<Key, T>): MapIterator<Key, T>;
		erase(it: MapReverseIterator<Key, T>): MapReverseIterator<Key, T>;
		erase(
		begin: MapReverseIterator<Key, T>, end: MapReverseIterator<Key, T>
	): MapReverseIterator<Key, T>;
		_Swap(obj: MapContainer<Key, T>): void;
		merge<L, U>(source: MapContainer<L, U>): void;
		_Handle_insert(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void;
		_Handle_erase(first: MapIterator<Key, T>, last: MapIterator<Key, T>): void
	}

	declare class UniqueMap<Key, T> extends MapContainer<Key, T> {
		count(key: Key): number;
		get(key: Key): T;
		set(key: Key, val: T): void;
		emplace(key: Key, value: T): Pair<MapIterator<Key, T>, boolean>;
		emplace(pair: Pair<Key, T>): Pair<MapIterator<Key, T>, boolean>;
		insert(pair: Pair<Key, T>): Pair<MapIterator<Key, T>, boolean>;
		insert<L, U>(tuple: [L, U]): Pair<MapIterator<Key, T>, boolean>;
		insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		insert(
		hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>
	): MapReverseIterator<Key, T>;
		insert<L, U>(hint: MapIterator<Key, T>, tuple: [L, U]): MapIterator<Key, T>;
		insert<L, U>(
		hint: MapReverseIterator<Key, T>, tuple: [L, U]
	): MapReverseIterator<Key, T>;
		insert<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		insert_or_assign(key: Key, value: T): Pair<MapIterator<Key, T>, boolean>;
		insert_or_assign(hint: MapIterator<Key, T>, key: Key, value: T): MapIterator<Key, T>;
		insert_or_assign(
		hint: MapReverseIterator<Key, T>, key: Key, value: T
	): MapReverseIterator<Key, T>;
		extract(key: Key): Pair<Key, T>;
		extract(it: MapIterator<Key, T>): MapIterator<Key, T>;
		extract(it: MapReverseIterator<Key, T>): MapReverseIterator<Key, T>;
		merge<L, U>(source: MapContainer<L, U>): void
	}

	declare class MultiMap<Key, T> extends MapContainer<Key, T> {
		emplace(key: Key, value: T): MapIterator<Key, T>;
		emplace(pair: Pair<Key, T>): MapIterator<Key, T>;
		insert(pair: Pair<Key, T>): MapIterator<Key, T>;
		insert<L, U>(tuple: [L, U]): MapIterator<Key, T>;
		insert(hint: MapIterator<Key, T>, pair: Pair<Key, T>): MapIterator<Key, T>;
		insert(
		hint: MapReverseIterator<Key, T>, pair: Pair<Key, T>
	): MapReverseIterator<Key, T>;
		insert<L, U>(hint: MapIterator<Key, T>, tuple: [L, U]): MapIterator<Key, T>;
		insert<L, U>(
		hint: MapReverseIterator<Key, T>, tuple: [L, U]
	): MapReverseIterator<Key, T>;
		insert<L, U, InputIterator>(first: InputIterator, last: InputIterator): void;
		merge<L, U>(source: MapContainer<L, U>): void
	}

	declare class SetContainer<T> extends Container<T> {
		constructor(): this;
		assign<U, InputIterator>(begin: Iterator<U>, end: Iterator<U>): void;
		clear(): void;
		find(val: T): SetIterator<T>;
		begin(): SetIterator<T>;
		end(): SetIterator<T>;
		rbegin(): SetReverseIterator<T>;
		rend(): SetReverseIterator<T>;
		has(val: T): boolean;
		count(val: T): number;
		size(): number;
		push(...args: T[]): number;
		insert(hint: SetIterator<T>, val: T): SetIterator<T>;
		insert(hint: SetReverseIterator<T>, val: T): SetReverseIterator<T>;
		insert<U, InputIterator>(begin: InputIterator, end: InputIterator): void;
		_Insert_by_val(val: T): any;
		_Insert_by_hint(hint: SetIterator<T>, val: T): SetIterator<T>;
		_Insert_by_range<U, InputIterator>(begin: InputIterator, end: InputIterator): void;
		erase(val: T): number;
		erase(it: SetIterator<T>): SetIterator<T>;
		erase(begin: SetIterator<T>, end: SetIterator<T>): SetIterator<T>;
		erase(it: SetReverseIterator<T>): SetReverseIterator<T>;
		erase(
		begin: SetReverseIterator<T>, end: SetReverseIterator<T>
	): SetReverseIterator<T>;
		_Swap(obj: SetContainer<T>): void;
		merge<U>(source: SetContainer<U>): void;
		_Handle_insert(first: SetIterator<T>, last: SetIterator<T>): void;
		_Handle_erase(first: SetIterator<T>, last: SetIterator<T>): void
	}

	declare class MultiSet<T> extends SetContainer<T> {
		insert(val: T): SetIterator<T>;
		insert(hint: SetIterator<T>, val: T): SetIterator<T>;
		insert(hint: SetReverseIterator<T>, val: T): SetReverseIterator<T>;
		insert<U, InputIterator>(begin: InputIterator, end: InputIterator): void;
		merge<U>(source: SetContainer<U>): void
	}

	declare class UniqueSet<T> extends SetContainer<T> {
		count(key: T): number;
		insert(val: T): Pair<SetIterator<T>, boolean>;
		insert(hint: SetIterator<T>, val: T): SetIterator<T>;
		insert(hint: SetReverseIterator<T>, val: T): SetReverseIterator<T>;
		insert<U, InputIterator>(begin: InputIterator, end: InputIterator): void;
		extract(val: T): T;
		extract(it: SetIterator<T>): SetIterator<T>;
		extract(it: SetReverseIterator<T>): SetReverseIterator<T>;
		merge<U>(source: SetContainer<U>): void
	}

	declare class ErrorInstance  {
		category_: ErrorCategory;
		value_: number;
		constructor(): this;
		constructor(val: number, category: ErrorCategory): this;
		assign(val: number, category: ErrorCategory): void;
		clear(): void;
		category(): ErrorCategory;
		value(): number;
		message(): string;
		default_error_condition(): ErrorCondition;
		to_bool(): boolean
	}

	declare class HashBuckets<T>  {
		constructor(): this;
		rehash(size: number): void;
		clear(): void;
		size(): number;
		item_size(): number;
		capacity(): number;
		at(index: number): Vector<T>;
		hash_index(val: T): number;
		insert(val: T): void;
		erase(val: T): void
	}

	declare class MapHashBuckets<K, T> extends HashBuckets<MapIterator<K, T>> {
		constructor(map: MapContainer<K, T>): this;
		find(key: K): MapIterator<K, T>
	}

	declare class SetHashBuckets<T> extends HashBuckets<SetIterator<T>> {
		constructor(set: SetContainer<T>): this;
		find(val: T): SetIterator<T>
	}

	declare class XTree<T>  {
		root_: XTreeNode<T>;
		constructor(): this;
		clear(): void;
		find(val: T): XTreeNode<T>;
		fetch_maximum(node: XTreeNode<T>): XTreeNode<T>;
		is_less(left: T, right: T): boolean;
		is_equal_to(left: T, right: T): boolean;
		insert(val: T): void;
		erase(val: T): void;
		rotate_left(node: XTreeNode<T>): void;
		rotate_right(node: XTreeNode<T>): void;
		replace_node(oldNode: XTreeNode<T>, newNode: XTreeNode<T>): void
	}

	declare class PairTree<Key, T> extends XTree<MapIterator<Key, T>> {
		constructor(map: TreeMap<Key, T> | TreeMultiMap<Key, T>, compare?: (x: Key, y: Key) => boolean): this;
		find(key: Key): XTreeNode<MapIterator<Key, T>>;
		find(it: MapIterator<Key, T>): XTreeNode<MapIterator<Key, T>>;
		lower_bound(key: Key): MapIterator<Key, T>;
		upper_bound(key: Key): MapIterator<Key, T>;
		equal_range(key: Key): Pair<MapIterator<Key, T>, MapIterator<Key, T>>;
		key_comp(): (x: Key, y: Key) => boolean;
		value_comp(): (x: Pair<Key, T>, y: Pair<Key, T>) => boolean;
		is_equal_to(left: MapIterator<Key, T>, right: MapIterator<Key, T>): boolean;
		is_less(left: MapIterator<Key, T>, right: MapIterator<Key, T>): boolean
	}

	declare class AtomicTree<T> extends XTree<SetIterator<T>> {
		constructor(set: TreeSet<T> | TreeMultiSet<T>, compare?: (x: T, y: T) => boolean): this;
		find(val: T): XTreeNode<SetIterator<T>>;
		find(it: SetIterator<T>): XTreeNode<SetIterator<T>>;
		lower_bound(val: T): SetIterator<T>;
		upper_bound(val: T): SetIterator<T>;
		equal_range(val: T): Pair<SetIterator<T>, SetIterator<T>>;
		key_comp(): (x: T, y: T) => boolean;
		value_comp(): (x: T, y: T) => boolean;
		is_equal_to(left: SetIterator<T>, right: SetIterator<T>): boolean;
		is_less(left: SetIterator<T>, right: SetIterator<T>): boolean
	}

	declare class XTreeNode<T>  {
		parent: XTreeNode<T>;
		left: XTreeNode<T>;
		right: XTreeNode<T>;
		value: T;
		color: Color;
		constructor(value: T, color: Color): this;
		grand_parent: XTreeNode<T>;
		sibling: XTreeNode<T>;
		uncle: XTreeNode<T>
	}

	
}

declare module 'Deque' {
	declare type iterator<T> = std.DequeIterator<T>;

	declare type reverse_iterator<T> = std.DequeReverseIterator<T>;

				
}

declare module 'placeholders' {
				declare class PlaceHolder  {
		constructor(index: number): this;
		index: number
	}

	
}

declare module 'HashMap' {
	declare type iterator<Key, T> = std.MapIterator<Key, T>;

	declare type reverse_iterator<Key, T> = std.MapReverseIterator<Key, T>;

				
}

declare module 'HashMultiMap' {
	declare type iterator<Key, T> = std.MapIterator<Key, T>;

	declare type reverse_iterator<Key, T> = std.MapReverseIterator<Key, T>;

				
}

declare module 'HashMultiSet' {
	declare type iterator<T> = std.SetIterator<T>;

	declare type reverse_iterator<T> = std.SetReverseIterator<T>;

				
}

declare module 'HashSet' {
	declare type iterator<T> = std.SetIterator<T>;

	declare type reverse_iterator<T> = std.SetReverseIterator<T>;

				
}

declare module 'List' {
	declare type iterator<T> = std.ListIterator<T>;

	declare type reverse_iterator<T> = std.ListReverseIterator<T>;

				
}

declare module 'TreeMap' {
	declare type iterator<Key, T> = std.MapIterator<Key, T>;

	declare type reverse_iterator<Key, T> = std.MapReverseIterator<Key, T>;

				
}

declare module 'TreeMultiMap' {
	declare type iterator<Key, T> = std.MapIterator<Key, T>;

	declare type reverse_iterator<Key, T> = std.MapReverseIterator<Key, T>;

				
}

declare module 'TreeMultiSet' {
	declare type iterator<T> = std.SetIterator<T>;

	declare type reverse_iterator<T> = std.SetReverseIterator<T>;

				
}

declare module 'TreeSet' {
	declare type iterator<T> = std.SetIterator<T>;

	declare type reverse_iterator<T> = std.SetReverseIterator<T>;

				
}

declare module 'Vector' {
	declare type iterator<T> = std.VectorIterator<T>;

	declare type reverse_iterator<T> = std.VectorReverseIterator<T>;

				
}
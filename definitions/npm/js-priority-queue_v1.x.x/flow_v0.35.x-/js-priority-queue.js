

declare module 'js-priority-queue' {
				declare class AbstractPriorityQueue<T>  {
		length: number;
		constructor(options?: PriorityQueue.PriorityQueueOptions<T>): this;
		queue(value: T): void;
		peek(): T;
		dequeue(): T;
		clear(): void
	}

	declare class PriorityQueue<T> extends AbstractPriorityQueue<T> {
		
	}

	declare module.exports: undefined


}

declare module 'PriorityQueue' {
	declare type PriorityQueueOptions<T> = {
		comparator?: (a: T, b: T) => number,
		initialValues?: T[],
		strategy?: typeof AbstractPriorityQueue
	};

			declare class ArrayStrategy<T> extends AbstractPriorityQueue<T> {
		
	}

	declare class BinaryHeapStrategy<T> extends AbstractPriorityQueue<T> {
		
	}

	declare class BHeapStrategy<T> extends AbstractPriorityQueue<T> {
		
	}

	
}
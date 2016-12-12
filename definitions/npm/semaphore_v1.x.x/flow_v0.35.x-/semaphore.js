

declare module 'semaphore' {
		declare interface Task {
		(): void
	}

	declare interface Semaphore {
		capacity: number,
		take(task: Task): void,
		take(n: number, task: Task): void,
		leave(n?: number): void
	}

	declare function semaphore(capacity?: number): semaphore.Semaphore

		declare module.exports: undefined


}
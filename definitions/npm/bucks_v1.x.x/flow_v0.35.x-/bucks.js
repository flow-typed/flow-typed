import type { BucksStatic } from 'npm$namespace$Bucks'

declare module 'bucks' {
					
}

declare module 'npm$namespace$Bucks' {
		declare interface BucksStatic {
		VERSION: string,
		DEBUG: boolean,
		running: Bucks[],
		living: Bucks[],
		new (): Bucks,
		onError(onError: (err: Error, bucks: Bucks) => any): void
	}

	declare interface Bucks {
		add(task: TaskWithNext): Bucks,
		then(onSuccess: (res: any, next?: Task) => any): Bucks,
		empty(): Bucks,
		error(onError: (err: Error, next?: Task) => any): Bucks,
		parallel(tasks: TaskWithNext[]): Bucks,
		waterfall(tasks: TaskWithNext[]): Bucks,
		delay(ms: number): Bucks,
		dispose(): void,
		destroy(err?: Error): Bucks,
		end(callback?: Task, errback?: (err: Error) => any): void
	}

	declare interface TaskWithNext {
		(err?: Error, res?: any, next?: Task): any
	}

	declare interface Task {
		(err?: Error, res?: any): any
	}

			
}
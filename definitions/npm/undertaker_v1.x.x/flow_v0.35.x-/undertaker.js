

declare module 'undertaker' {
		declare export interface UndertakerStatic {
		new (registry?: Registry): Undertaker
	}

	declare export interface Undertaker {
		task: TaskMethod,
		series(...tasks: (string | Task)[]): Task,
		parallel(...tasks: (string | Task)[]): Task,
		registry(): Registry,
		registry(registry: Registry): void,
		tree(options?: {
		deep?: boolean
	}): Node[] | string[],
		lastRun(task: string, timeResolution?: number): number
	}

	declare export interface Task {
		(cb?: Function): any
	}

	declare export interface TaskMethod {
		(taskName: string): Task,
		(taskName: string, fn: Task): void,
		(fn: Task): void,
		(fn: Task & {
		displayName: string
	}): void
	}

	declare export interface Registry {
		init(taker: Undertaker): void,
		get(taskName: string): Task,
		set(taskName: string, fn: Task): void,
		tasks(): {
		[taskName: string]: Task
	}
	}

	declare export interface Node {
		label: string,
		type: string,
		nodes: Node[]
	}

			declare module.exports: undefined


}
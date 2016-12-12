

declare module 'change-emitter' {
	declare type Unlisten = () => void;

	declare type Listener = (...args: any[]) => void;

	declare type ListenerOf0 = () => void;

	declare type ListenerOf1<T> = (value: T) => void;

	declare type ListenerOf2<T1, T2> = (value1: T1, value2: T2) => void;

	declare type ListenerOf3<T1, T2, T3> = (value1: T1, value2: T2, value3: T3) => void;

	declare type ListenerOf4<T1, T2, T3, T4> = (value1: T1, value2: T2, value3: T3, value4: T4) => void;

	declare type ListenerOf5<T1, T2, T3, T4, T5> = (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => void;

	declare interface ChangeEmitter {
		listen(listener: Listener): Unlisten,
		emit(...args: any[]): void
	}

	declare interface ChangeEmitterOf1<T> {
		listen(listener: ListenerOf1<T>): Unlisten,
		emit(value: T): void
	}

	declare interface ChangeEmitterOf0 {
		listen(listener: ListenerOf0): Unlisten,
		emit(): void
	}

	declare interface ChangeEmitterOf2<T1, T2> {
		listen(listener: ListenerOf2<T1, T2>): Unlisten,
		emit(value1: T1, value2: T2): void
	}

	declare interface ChangeEmitterOf3<T1, T2, T3> {
		listen(listener: ListenerOf3<T1, T2, T3>): Unlisten,
		emit(value1: T1, value2: T2, value3: T3): void
	}

	declare interface ChangeEmitterOf4<T1, T2, T3, T4> {
		listen(listener: ListenerOf4<T1, T2, T3, T4>): Unlisten,
		emit(value1: T1, value2: T2, value3: T3, value4: T4): void
	}

	declare interface ChangeEmitterOf5<T1, T2, T3, T4, T5> {
		listen(listener: ListenerOf5<T1, T2, T3, T4, T5>): Unlisten,
		emit(value1: T1, value2: T2, value3: T3, value4: T4, value5: T5): void
	}

	declare export function createChangeEmitter(): ChangeEmitter

	declare export function createChangeEmitter<T>(): ChangeEmitterOf1<T>

	declare export function createChangeEmitter<T1, T2>(): ChangeEmitterOf2<T1, T2>

	declare export function createChangeEmitter<T1, T2, T3>(): ChangeEmitterOf3<T1, T2, T3>

	declare export function createChangeEmitter<T1, T2, T3, T4>(): ChangeEmitterOf4<T1, T2, T3, T4>

	declare export function createChangeEmitter<T1, T2, T3, T4, T5>(): ChangeEmitterOf5<T1, T2, T3, T4, T5>

		
}
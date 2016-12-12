

declare module 'event-kit' {
					declare module.exports: undefined


}

declare module 'npm$namespace$AtomEventKit' {
		declare interface IDisposable {
		dispose(): void
	}

	declare interface DisposableStatic {
		prototype: Disposable,
		new (disposalAction: Function): Disposable
	}

	declare interface Disposable {
		disposed: boolean,
		constructor: DisposableStatic
	}

	declare interface CompositeDisposableStatic {
		prototype: CompositeDisposable,
		new (...disposables: IDisposable[]): CompositeDisposable
	}

	declare interface CompositeDisposable {
		disposed: boolean,
		constructor: CompositeDisposableStatic,
		add(...disposables: IDisposable[]): void,
		remove(disposable: IDisposable): void,
		clear(): void
	}

	declare interface EmitterStatic {
		prototype: Emitter,
		new (): Emitter
	}

	declare interface Emitter {
		isDisposed: boolean,
		constructor: EmitterStatic,
		dispose(): void,
		on(
		eventName: string, handler: (value: any) => void, unshift?: boolean
	): Disposable,
		preempt(eventName: string, handler: (value: any) => void): Disposable,
		emit(eventName: string, value: any): void
	}

			
}
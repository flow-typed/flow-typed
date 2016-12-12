

declare module 'redux' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Redux' {
	declare type Reducer<S> = <A>(state: S, action: A) => S;

	declare type StoreEnhancer<S> = (next: StoreEnhancerStoreCreator<S>) => StoreEnhancerStoreCreator<S>;

	declare type GenericStoreEnhancer = <S>(next: StoreEnhancerStoreCreator<S>) => StoreEnhancerStoreCreator<S>;

	declare type StoreEnhancerStoreCreator<S> = (reducer: Reducer<S>, preloadedState?: S) => Store<S>;

	declare interface Action {
		type: any
	}

	declare interface ReducersMapObject {
		[key: string]: Reducer<any>
	}

	declare interface Dispatch<S> {
		(action: A): A
	}

	declare interface Unsubscribe {
		(): void
	}

	declare interface Store<S> {
		dispatch: Dispatch<S>,
		getState(): S,
		subscribe(listener: () => void): Unsubscribe,
		replaceReducer(nextReducer: Reducer<S>): void
	}

	declare interface StoreCreator {
		(reducer: Reducer<S>, enhancer?: StoreEnhancer<S>): Store<S>,
		(reducer: Reducer<S>, preloadedState: S, enhancer?: StoreEnhancer<S>): Store<S>
	}

	declare interface MiddlewareAPI<S> {
		dispatch: Dispatch<S>,
		getState(): S
	}

	declare interface Middleware {
		(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>
	}

	declare interface ActionCreator<A> {
		(...args: any[]): A
	}

	declare interface ActionCreatorsMapObject {
		[key: string]: ActionCreator<any>
	}

	declare function combineReducers<S>(reducers: ReducersMapObject): Reducer<S>

	declare function applyMiddleware(...middlewares: Middleware[]): GenericStoreEnhancer

	declare function bindActionCreators<A>(actionCreator: A, dispatch: Dispatch<any>): A

	declare function bindActionCreators<A, B>(actionCreator: A, dispatch: Dispatch<any>): B

	declare function bindActionCreators<M>(actionCreators: M, dispatch: Dispatch<any>): M

	declare function bindActionCreators<M, N>(actionCreators: M, dispatch: Dispatch<any>): N

	declare function compose(): <R>(a: R, ...args: any[]) => R

	declare function compose<A, R>(f1: (b: A) => R, f2: (...args: any[]) => A): (...args: any[]) => R

	declare function compose<A, B, R>(
		f1: (b: B) => R, f2: (a: A) => B, f3: (...args: any[]) => A
	): (...args: any[]) => R

	declare function compose<A, B, C, R>(
		f1: (b: C) => R, f2: (a: B) => C, f3: (a: A) => B, f4: (...args: any[]) => A
	): (...args: any[]) => R

	declare function compose<R>(f1: (a: any) => R, ...funcs: Function[]): (...args: any[]) => R

		
}
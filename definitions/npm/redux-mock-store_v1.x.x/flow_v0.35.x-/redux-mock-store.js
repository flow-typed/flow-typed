

declare module 'redux-mock-store' {
	declare export type mockStore<T> = (state?: T) => IStore<T>;

	declare export type IStore<T> = {
		dispatch(action: any): any,
		getState(): T,
		getActions(): Object[],
		clearActions(): void,
		subscribe(listener: Function): Function
	};

		declare function createMockStore<T>(middlewares?: Redux.Middleware[]): mockStore<T>

		declare module.exports: undefined


}
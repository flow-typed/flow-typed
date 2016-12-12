import type { Promise } from 'npm$namespace$ReduxPromise'

declare module 'redux-promise' {
					declare module.exports: Promise


}

declare module 'npm$namespace$Redux' {
	declare type PromiseAction<S> = (dispatch: Redux.Dispatch<S>, getState?: () => S) => any;

	declare interface Dispatch<S> {
		(asyncAction: PromiseAction<S>): R
	}

			
}

declare module 'npm$namespace$ReduxPromise' {
		declare export interface Promise {
		
	}

			
}


declare module 'redux-thunk' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Redux' {
	declare type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R;

	declare interface Dispatch<S> {
		(asyncAction: ThunkAction<R, S, E>): R
	}

			
}
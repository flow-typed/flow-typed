

declare module 'redux-immutable-state-invariant' {
	declare type isImmutableDefault = (value: any) => boolean;

	declare type immutableStateInvariantMiddlewareInterface = (isImmutable?: isImmutableDefault) => Redux.Middleware;

				declare module.exports: immutableStateInvariantMiddlewareInterface


}
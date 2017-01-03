// @flow
/**
 * Flowtype definitions for redux-bootstrap
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'redux-bootstrap' {
    declare interface BootstrapOptions {
        routes: JSX.Element,
            reducers: ReducersOption,
            middlewares?: Redux.Middleware[],
            initialState?: any,
            container?: string
    }
    declare interface BootstrapResult {
        store: Redux.Store<any>,
            history: ReactRouterRedux.ReactRouterReduxHistory,
            root: JSX.Element
    }
    declare interface ReducersOption {
        [index: string]: Redux.Reducer<any >
    }
    declare     export default function bootstrap(options: BootstrapOptions): BootstrapResult
}
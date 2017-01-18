/**
 * Flowtype definitions for ui-router-extras
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'angular-ui-router-extras' {
    declare var _: string;
    declare module.exports: typeof _
}
declare module 'ui' {
    declare interface IDeepStateRedirectService {
        reset(stateName: string, stateParams?: {
            [key: string]: string | string[]
        }): void
    }
    declare interface IDeepStateRedirectConfig {
        default?: string | IRedirectParams,
            params?: boolean | string[],
            fn(
                $dsr$: {
                    redirect: IRedirectParams,
                    to: IRedirectParams
                }): boolean | IRedirectParams
    }
    declare interface IRedirectParams {
        state: string,
            params?: ui.IStateParamsService
    }
    declare interface IPreviousState {
        state: IState,
            params?: ui.IStateParamsService
    }

    /**
     * Previous state service
     */
    declare interface IPreviousStateService {

        /**
         * Get a previous state
         * @param memoName Memo name
         * @return  Previous state
         */
        get(memoName?: string): IPreviousState,

            /**
             * Go to a state
             * @param memoName Memo name
             * @param options State options
             * @return  Promise
             */
            go(memoName: string, options?: IStateOptions): angular$IPromise<any>,

            /**
             * Memorize a state
             * @param memoName Memo name
             * @param defaultStateName Default state name
             * @param defaultStateParams Default state parameters
             */
            memo(memoName: string, defaultStateName?: string, defaultStateParams?: {}): void,

            /**
             * Forget a memorized name
             * @param memoName Memo name
             */
            forget(memoName: string): void
    }

    /**
     * Sticky state
     */
    declare type IStickyState = {
        sticky?: boolean,
        deepStateRedirect?: boolean | IDeepStateRedirectConfig,
        dsr?: boolean | IDeepStateRedirectConfig,
        onInactivate?: Function,
        onReactivate?: Function,
        views?: {
            [name: string]: undefined.IState
        }
    }

    /**
     * Sticky state service
     */
    declare interface IStickyStateService {
        getInactiveStates(): IStickyState[]
    }

    /**
     * Sticky state provider
     */
    declare type IStickyStateProvider = {
        debugMode(): boolean,
        enableDebug(enabled: boolean): boolean,
        registerStickyState(state: IStickyState): void
    }
    declare type IStateProvider = {
        state(config: IStickyState): IStateProvider,
        state(name: string, config: IStickyState): IStateProvider
    }
}
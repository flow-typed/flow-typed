/**
 * Flowtype definitions for redux-optimistic-ui
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'redux-optimistic-ui' {


    /**
     * Enhanced state by redux-optimistic-ui
     */
    declare export interface OptimisticState<TState>{

        /**
         * History list
         * List is Immutable.List<>
         */
        history: any,

        /**
         * Before state
         */
        beforeState: TState,

        /**
         * Current state
         */
        current: TState
    }

    /**
     * Enhances and wraps your root reducer into optimistic state
     */
    declare export function optimistic<TState>(reducer: Reducer<TState>): Reducer<OptimisticState<TState >>

        /**
         * Returns your current state or state if it wasn't enhanced yet
         */
        declare export function ensureState<TState>(state: OptimisticState<TState>| TState): TState

    /**
     * Optimistic action slice
     */
    declare export interface OptimisticAction {
        meta: {

            /**
             * Optimistic information
             */
            optimistic: {

                /**
                 * Type, BEGIN, COMMIT or REVERT
                 * @type  
                 */
                type: string,

                /**
                 * Transaction id. Id should be unique for each optimistic action
                 * @type  
                 */
                id: number
            }
        }
    }
    declare export var BEGIN: string;
    declare export var COMMIT: string;
    declare export var REVERT: string;
}
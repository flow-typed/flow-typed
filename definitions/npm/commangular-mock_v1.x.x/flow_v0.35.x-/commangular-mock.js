/**
 * Flowtype definitions for commangular-mock
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'commangular' {
    declare interface ICommAngularStatic {

        /**
         * Mock dispatch function for testing commands.
         */
        dispatch(ec: ICommandCall, callback: Function): void
    }
    declare interface ICommandCall {

        /**
         * Name of the command that needs to
         * execute
         */
        command: string,

            /**
             * Data that needs to be passed to the command
             */
            data?: any
    }

    /**
     * Object type expected to be passed into the callback function
     * of the dispatch() function
     */
    declare interface ICommandInfo {

        /**
         * The data that was passed into the command
         * @param key The property name that is in the object that was passed
         */
        dataPassed(key: string): any,

            /**
             * The data that was returned by the command
             * @param key The result key that was defined in the command. If no result
            was defined use 'lastResult' as the key
            */
            resultKey(key: string): any,

            /**
             * Indicates if the command execution was cancelled.
             */
            canceled(): boolean,

            /**
             * Indicates if the command was executed????
             */
            commandExecuted(): boolean
    }
}

/**
 * Mock dispatch function for testing commands.
 * @param ec an ICommandCall object
 * @param callback The function that will be called upon the completion of the command
function should expecte an ICommandInfo paramter.
*/
declare
function dispatch(ec: commangular.ICommandCall, callback: Function): void
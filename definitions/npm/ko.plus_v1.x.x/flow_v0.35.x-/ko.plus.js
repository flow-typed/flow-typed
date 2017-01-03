/**
 * Flowtype definitions for ko.plus
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * Extensions to KO to provide a command, editable and sortable patterns
 * - available at http://www.nuget.org/packages/ko.plus/

(requires TypeScript version 1.4 or higher)

Version 1.0 - initial commit

Version 1.1 - fixed bug - makeEditable is now a function on .editable
               also refactored how the Editable classes inherit to simplify

Version 1.2 - amended callback on commmand.fail() method - accepts response,
               status and message values
*/
declare interface KnockoutStatic {
    command: (param: Function | KoPlus$CommandOptions) => KoPlus$Command,
        editable: KoPlus$EditableStatic,
        editableArray: KoPlus$EditableArrayStatic
}
declare interface KnockoutObservableArray<T>{
    sortKey: KnockoutObservable<string>,
    sortDescending: KnockoutObservable<boolean>,
    setSourceKey: (key: string) => void
}
declare interface KnockoutBindingHandlers {
    loadingWhen: KnockoutBindingHandler,
        command: KnockoutBindingHandler,
        sortBy: KnockoutBindingHandler
}
declare
export interface KoPlus$Command {
    (): void,
    isRunning: KnockoutObservable<boolean>,
        canExecute: KnockoutComputed<boolean>,
        failed: KnockoutObservable<boolean>,
        completed: KnockoutObservable<boolean>,
        done: (callback: (data: any) => void) => KoPlus$Command,
        fail: (
            callback: (response: any, status?: string, statusText?: string) => void) => KoPlus$Command,
        always: (callback: Function) => KoPlus$Command,
        then: (resolve: Function, reject: Function) => KoPlus$Command
}

declare
export interface KoPlus$CommandOptions {
    action: Function,
        canExecute?: () => boolean,
        context?: any
}

declare
export type KoPlus$EditableStatic = {
    (value?: T): KoPlus$Editable<T>,
    makeEditable(target: any): void
} & KnockoutObservableStatic


declare
export type KoPlus$EditableArrayStatic = {
    (value?: Array<T>): KoPlus$EditableArray<T>,
    makeEditable(target: any): void
} & KnockoutObservableArrayStatic


declare
export interface KoPlus$EditableFunctions {
    isEditing: KnockoutObservable<boolean>,
        beginEdit(): void,
        endEdit(): void,
        cancelEdit(): void,
        rollback(): void
}

declare
export type KoPlus$Editable<T>= {} & KnockoutObservable & KoPlus$EditableFunctions


declare
export type KoPlus$EditableArray<T>= {} & KnockoutObservableArray & KoPlus$EditableFunctions
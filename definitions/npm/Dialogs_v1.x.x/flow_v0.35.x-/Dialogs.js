/**
 * Flowtype definitions for dialogs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface ngCordova$IDialogsPromptResult {
    input1: string,
        buttonIndex: number
}

declare export interface ngCordova$IDialogsService {
    alert(message: string, title?: string, buttonName?: string): ng.IPromise<void>,
        confirm(
            message: string,
            title?: string,
            buttonArray?: Array<string>): ng.IPromise<number>,
        prompt(
            message: string,
            title?: string,
            buttonArray?: Array<string>,
            defaultText?: string): ng.IPromise<ngCordova$IDialogsPromptResult>,
        beep(repetitions: number): void
}
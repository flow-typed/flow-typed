

declare module 'dialogs' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IDialogsPromptResult {
		input1: string,
		buttonIndex: number
	}

	declare export interface IDialogsService {
		alert(message: string, title?: string, buttonName?: string): ng.IPromise<void>,
		confirm(
		message: string, title?: string, buttonArray?: Array<string>
	): ng.IPromise<number>,
		prompt(
		message: string, title?: string, buttonArray?: Array<string>, defaultText?: string
	): ng.IPromise<IDialogsPromptResult>,
		beep(repetitions: number): void
	}

			
}


declare module 'ko.plus' {
		declare interface KnockoutStatic {
		command: (param: Function | KoPlus.CommandOptions) => KoPlus.Command,
		editable: KoPlus.EditableStatic,
		editableArray: KoPlus.EditableArrayStatic
	}

	declare interface KnockoutObservableArray<T> {
		sortKey: KnockoutObservable<string>,
		sortDescending: KnockoutObservable<boolean>,
		setSourceKey: (key: string) => void
	}

	declare interface KnockoutBindingHandlers {
		loadingWhen: KnockoutBindingHandler,
		command: KnockoutBindingHandler,
		sortBy: KnockoutBindingHandler
	}

			
}

declare module 'npm$namespace$KoPlus' {
		declare export interface Command {
		(): void,
		isRunning: KnockoutObservable<boolean>,
		canExecute: KnockoutComputed<boolean>,
		failed: KnockoutObservable<boolean>,
		completed: KnockoutObservable<boolean>,
		done: (callback: (data: any) => void) => Command,
		fail: (
		callback: (response: any, status?: string, statusText?: string) => void
	) => Command,
		always: (callback: Function) => Command,
		then: (resolve: Function, reject: Function) => Command
	}

	declare export interface CommandOptions {
		action: Function,
		canExecute?: () => boolean,
		context?: any
	}

	declare export interface EditableStatic {
		(value?: T): Editable<T>,
		makeEditable(target: any): void
	}

	declare export interface EditableArrayStatic {
		(value?: Array<T>): EditableArray<T>,
		makeEditable(target: any): void
	}

	declare export interface EditableFunctions {
		isEditing: KnockoutObservable<boolean>,
		beginEdit(): void,
		endEdit(): void,
		cancelEdit(): void,
		rollback(): void
	}

	declare export interface Editable<T> {
		
	}

	declare export interface EditableArray<T> {
		
	}

			
}
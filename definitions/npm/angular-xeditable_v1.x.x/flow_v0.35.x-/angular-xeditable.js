

declare module 'angular-xeditable' {
					
}

declare module 'xeditable' {
		declare interface IEditableOptions {
		theme: string,
		icon_set: string,
		buttons: string,
		blurElem: string,
		blurForm: string,
		activate: string,
		isDisabled: boolean,
		activationEvent: string
	}

	declare interface IEditableFormController {
		$show(): void,
		$hide(): void,
		$activate(name: string): void,
		$cancel(): void,
		$setWaiting(value: boolean): void,
		$setError(name: string, msg: string): void,
		$submit(): void,
		$save(): void
	}

			
}
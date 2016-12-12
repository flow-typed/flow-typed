

declare module 'acc-wizard' {
		declare interface AccWizardOptions {
		addButtons: boolean,
		sidebar: string,
		activeClass: string,
		completedClass: string,
		todoClass: string,
		stepClass: string,
		nextText: string,
		backText: string,
		nextType: string,
		backType: string,
		nextClasses: string,
		backClasses: string,
		autoScrolling: boolean,
		onNext: Function,
		onBack: Function,
		onInit: Function,
		onDestroy: Function
	}

	declare interface JQuery {
		accwizard(options?: AccWizardOptions): void
	}

			
}
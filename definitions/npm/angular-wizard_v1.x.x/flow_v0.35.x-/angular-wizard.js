

declare module 'angular-wizard' {
					
}

declare module 'mgoAngularWizard' {
		declare interface WizardHandler {
		wizard(name?: string): Wizard,
		addWizard(name: string, wizard: Wizard): void,
		removeWizard(name: string): void
	}

	declare interface Wizard {
		next(nextHandler?: () => boolean): void,
		previous(): void,
		cancel: () => void,
		goTo(step: number | string): void,
		finish(): void,
		reset: () => void,
		addStep: (step: WzStep) => void,
		currentStep: () => WzStep,
		currentStepNumber(): number,
		currentStepDescription: () => string,
		currentStepTitle: () => string,
		getEnabledSteps(): WzStep[]
	}

	declare interface WzStep {
		canenter: (...args: any[]) => boolean,
		canexit: (...args: any[]) => boolean,
		description: string,
		selected: boolean,
		title: string,
		wzData: any,
		wzTitle: string
	}

			
}
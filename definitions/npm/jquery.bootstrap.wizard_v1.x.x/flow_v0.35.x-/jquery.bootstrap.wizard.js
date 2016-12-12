

declare module 'jquery.bootstrap.wizard' {
		declare interface WizardOptions {
		tabClass?: string,
		nextSelector?: string,
		previousSelector?: string,
		firstSelector?: string,
		lastSelector?: string,
		onShow?: (activeTab: any, navigation: any, nextIndex: number) => void,
		onInit?: (activeTab: any, navigation: any, currentIndex: number) => void,
		onNext?: (activeTab: any, navigation: any, nextIndex: number) => boolean,
		onPrevious?: (activeTab: any, navigation: any, previousIndex: number) => boolean,
		onLast?: (activeTab: any, navigation: any, lastIndex: number) => boolean,
		onFirst?: (activeTab: any, navigation: any, firstIndex: number) => boolean,
		onTabClick?: (activeTab: any, navigation: any, currentIndex: number) => boolean,
		onTabShow?: (activeTab: any, navigation: any, currentIndex: number) => boolean
	}

	declare interface Wizard {
		next(): void,
		previous(): void,
		first(): void,
		last(): void,
		currentIndex(): number,
		firstIndex(): number,
		lastIndex(): number,
		getIndex(element: any): number,
		nextIndex(): number,
		previousIndex(): number,
		navigationLength(): number,
		activeTab(): any,
		nextTab(): any,
		previousTab(): any,
		show(index: number): any
	}

	declare interface JQuery {
		bootstrapWizard(options?: WizardOptions): Wizard
	}

	declare interface JQueryStatic {
		bootstrapWizard: Wizard
	}

			
}
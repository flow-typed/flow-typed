

declare module 'durandal-1.x' {
		declare interface IViewModelDefaults {
		areSameItem(
		currentItem: <<UNKNOWN PARAM FORMAT>>, newItem: <<UNKNOWN PARAM FORMAT>>, activationData: <<UNKNOWN PARAM FORMAT>>
	): boolean,
		closeOnDeactivate: boolean,
		interpretResponse(value: any): boolean,
		beforeActivate(newItem: any): any,
		afterDeactivate(): any
	}

	declare interface IDurandalViewModelActiveItem {
		(val?: <<UNKNOWN PARAM FORMAT>>): any,
		settings: IViewModelDefaults,
		isActivating(val?: boolean): boolean,
		canDeactivateItem(
		item: <<UNKNOWN PARAM FORMAT>>, close: <<UNKNOWN PARAM FORMAT>>
	): JQueryPromise<any>,
		deactivateItem(
		item: <<UNKNOWN PARAM FORMAT>>, close: <<UNKNOWN PARAM FORMAT>>
	): JQueryDeferred<any>,
		canActivateItem(
		newItem: <<UNKNOWN PARAM FORMAT>>, activationData?: <<UNKNOWN PARAM FORMAT>>
	): JQueryPromise<any>,
		activateItem(
		newItem: <<UNKNOWN PARAM FORMAT>>, activationData?: <<UNKNOWN PARAM FORMAT>>
	): JQueryPromise<any>,
		canActivate(): JQueryPromise<any>,
		activate(): JQueryPromise<any>,
		canDeactivate(): JQueryPromise<any>,
		deactivate(): JQueryDeferred<any>,
		includeIn(includeIn: any): JQueryPromise<any>,
		forItems(items: <<UNKNOWN PARAM FORMAT>>): IDurandalViewModelActiveItem
	}

	declare interface IEventSubscription {
		then(thenCallback: any): void,
		off(): void
	}

			
}

declare module 'durandal/viewModel' {
					
}

declare module 'durandal/plugins/router' {
		declare interface IRouteInfo {
		url: string,
		moduleId: string,
		name: string,
		caption: string,
		visible: boolean,
		settings: Object,
		hash: string,
		isActive?: KnockoutComputed<boolean>
	}

	declare interface IRouteInfoParameters {
		url: any,
		moduleId?: string,
		name?: string,
		caption?: string,
		visible?: boolean,
		settings?: Object
	}

			
}

declare module 'durandal/widget' {
			declare export function create(element: any, settings: any, bindingContext?: any)

	declare export function registerKind(kind: string)

	declare export function mapKind(kind: string, viewId?: string, moduleId?: string)

	declare export function getParts(elements: any): any

	declare export function convertKindToModuleId(kind: <<UNKNOWN PARAM FORMAT>>): string

	declare export function convertKindToViewId(kind: <<UNKNOWN PARAM FORMAT>>): string

		
}
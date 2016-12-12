

declare module 'angular-ui-sortable' {
					
}

declare module 'ui' {
		declare interface UISortableOptions<T> {
		ui-floating?: string | boolean
	}

	declare interface UISortableProperties<T> {
		dropindex: number,
		droptarget: number,
		droptargetModel: Array<T>,
		index: number,
		model: T,
		moved?: T,
		received: Boolean,
		source: ng.IAugmentedJQuery,
		sourceModel: Array<T>,
		cancel(): void,
		isCanceled(): Boolean,
		isCustomHelperUsed(): Boolean
	}

	declare interface UISortableUIItem<T> {
		sortable: UISortableProperties<T>
	}

	declare interface UISortableUIParams<T> {
		item: UISortableUIItem<T>
	}

	declare interface SortableCursorAtOptions {
		top?: number,
		left?: number,
		right?: number,
		bottom?: number
	}

	declare interface SortableHelperFunctionOption {
		(event: JQueryEventObject, ui: ng.IAugmentedJQuery): JQuery
	}

	declare interface SortableOptions<T> {
		appendTo?: any,
		axis?: string | boolean,
		cancel?: string,
		connectWith?: string | boolean,
		containment?: any,
		cursor?: string,
		cursorAt?: SortableCursorAtOptions | boolean,
		delay?: number,
		disabled?: boolean,
		distance?: number,
		dropOnEmpty?: boolean,
		forceHelperSize?: boolean,
		forcePlaceholderSize?: boolean,
		grid?: number[] | boolean,
		handle?: any,
		helper?: string | SortableHelperFunctionOption,
		items?: string,
		opacity?: number | boolean,
		placeholder?: string | boolean,
		revert?: number | boolean,
		scroll?: boolean,
		scrollSensitivity?: number,
		scrollSpeed?: number,
		tolerance?: string,
		zIndex?: number
	}

	declare interface SortableUIParams {
		helper: ng.IAugmentedJQuery,
		item: ng.IAugmentedJQuery,
		offset: any,
		position: any,
		originalPosition: any,
		sender: ng.IAugmentedJQuery,
		placeholder: ng.IAugmentedJQuery
	}

	declare interface SortableEvent<T> {
		(event: JQueryEventObject, ui: UISortableUIParams<T>): void
	}

	declare interface SortableEvents<T> {
		activate?: SortableEvent<T>,
		beforeStop?: SortableEvent<T>,
		change?: SortableEvent<T>,
		deactivate?: SortableEvent<T>,
		out?: SortableEvent<T>,
		over?: SortableEvent<T>,
		receive?: SortableEvent<T>,
		remove?: SortableEvent<T>,
		sort?: SortableEvent<T>,
		start?: SortableEvent<T>,
		stop?: SortableEvent<T>,
		update?: SortableEvent<T>
	}

			
}
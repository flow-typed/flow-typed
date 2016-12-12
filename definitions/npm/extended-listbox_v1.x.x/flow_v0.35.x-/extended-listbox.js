

declare module 'extended-listbox' {
		declare interface ListboxItem {
		text?: string,
		id?: string,
		index?: number,
		disabled?: boolean,
		selected?: boolean,
		groupHeader?: boolean,
		parentGroupId?: string,
		childItems?: any[]
	}

	declare interface ListboxSearchBarButtonOptions {
		visible?: boolean,
		icon?: string,
		onClick?: () => void
	}

	declare interface ListBoxOptions {
		searchBar?: boolean,
		searchBarWatermark?: string,
		searchBarButton?: ListboxSearchBarButtonOptions,
		multiple?: boolean,
		getItems?: () => any,
		onValueChanged?: (event: ListboxEvent) => void,
		onFilterChanged?: (event: ListboxEvent) => void,
		onItemsChanged?: (event: ListboxEvent) => void,
		onItemEnterPressed?: (event: ListboxEvent) => void,
		onItemDoubleClicked?: (event: ListboxEvent) => void
	}

	declare interface ListboxEvent {
		eventName: string,
		target: JQuery,
		args: any
	}

	declare interface ExtendedListboxInstance {
		target: JQuery,
		addItem(item: string | ListboxItem): string,
		removeItem(identifier: string): void,
		destroy(): void,
		clearSelection(): void,
		getItem(identifier: string): ListboxItem,
		getItems(): ListboxItem[],
		getSelection(): ListboxItem[],
		moveItemUp(identifier: string): number,
		moveItemDown(identifier: string): number,
		moveItemToBottom(identifier: string): number,
		moveItemToTop(identifier: string): number,
		enable(state: boolean): void,
		onValueChanged(callback: (event: ListboxEvent) => void): void,
		onItemsChanged(callback: (event: ListboxEvent) => void): void,
		onFilterChanged(callback: (event: ListboxEvent) => void): void,
		onItemEnterPressed(callback: (event: ListboxEvent) => void): void,
		onItemDoubleClicked(callback: (event: ListboxEvent) => void): void
	}

	declare interface JQuery {
		listbox(): ExtendedListboxInstance | ExtendedListboxInstance[],
		listbox(options: ListBoxOptions): ExtendedListboxInstance | ExtendedListboxInstance[],
		listbox(methodName: "addItem"): string,
		listbox(methodName: "removeItem"): void,
		listbox(methodName: "destroy"): void,
		listbox(methodName: "getItem"): ListboxItem,
		listbox(methodName: "getItems"): ListboxItem[],
		listbox(methodName: "moveItemUp"): number,
		listbox(methodName: "moveItemDown"): number,
		listbox(methodName: "clearSelection"): void,
		listbox(methodName: "enable"): void,
		listbox(methodName: string): any,
		listbox(methodName: string, methodParameter: any): any
	}

			
}


declare module 'winjs-1.0' {
		declare interface Element {
		winControl: any
	}

	declare interface IOHelper {
		exists(filename: string): WinJS.Promise<boolean>,
		readText(fileName: string, def?: string): WinJS.Promise<string>,
		remove(fileName: string): WinJS.Promise<void>,
		writeText(fileName: string, text: string): WinJS.Promise<number>
	}

			
}

declare module 'Application' {
			declare function addEventListener(type: string, listener: Function, capture?: boolean): void

	declare function checkpoint(): void

	declare function queueEvent(eventRecord: any): void

	declare function removeEventListener(type: string, listener: Function, useCapture?: any): void

	declare function start(): void

	declare function stop(): void

	declare function onactivated(eventInfo: CustomEvent): void

	declare function oncheckpoint(eventInfo: CustomEvent): void

	declare function onerror(eventInfo: CustomEvent): void

	declare function onloaded(eventInfo: CustomEvent): void

	declare function onready(eventInfo: CustomEvent): void

	declare function onsettings(eventInfo: CustomEvent): void

	declare function onunload(eventInfo: CustomEvent): void

		
}

declare module 'Binding' {
		declare interface IKeyDataPair<T> {
		key: string,
		data: T
	}

	declare interface IGroupKeyDataPair<T> {
		groupSize: number,
		firstItemIndexHint: number,
		firstItemKey: string
	}

	declare function as<U>(data: U): U

	declare function bind(observable: any, bindingDescriptor: any): any

	declare function converter(convert: Function): Function

	declare function defaultBind(source: any, sourceProperties: any, dest: any, destProperties: any): any

	declare function define(data: any): Function

	declare function expandProperties(shape: any): any

	declare function initializer(customInitializer: Function): Function

	declare function oneTime(source: any, sourceProperties: any, dest: any, destProperties: any): any

	declare function processAll(
		rootElement?: Element, dataContext?: any, skipRoot?: boolean, bindingCache?: any, defaultInitializer?: Function
	): Promise<void>

	declare function setAttribute(
		source: any, sourceProperties: any[], dest: Element, destProperties: any[]
	): any

	declare function setAttributeOneTime(
		source: any, sourceProperties: any[], dest: Element, destProperties: any[]
	): void

	declare function unwrap(data: any): any

	declare class FilteredListProjection<T> extends ListProjection<T> {
		getItem(index: number): IKeyDataPair<T>;
		indexOfKey(key: string): number;
		notifyMutated(index: number): void;
		setAt(index: number, newValue: T): void;
		length: number
	}

	declare class GroupsListProjection<T> extends ListBase<T> {
		getItem(index: number): IKeyDataPair<T>;
		getItemFromKey(key: string): IKeyDataPair<T>;
		indexOfKey(key: string): number;
		length: number
	}

	declare class GroupedSortedListProjection<T> extends SortedListProjection<T> {
		groups: GroupsListProjection<T>;
		getItem(index: number): IGroupKeyDataPair<T>
	}

	declare class List<T> extends ListBaseWithMutators<T> {
		constructor(list?: T[], options?: any): this;
		getItem(index: number): IKeyDataPair<T>;
		getItemFromKey(key: string): IKeyDataPair<T>;
		indexOfKey(key: string): number;
		move(index: number, newIndex: number): void;
		notifyMutated(index: number): void;
		reverse(): void;
		setAt(index: number, newValue: T): void;
		sort(sortFunction?: (left: T, right: T) => number): void;
		splice(start: number, howMany?: number, ...item: T[]): T[];
		length: number
	}

	declare class ListBase<T>  {
		onitemchanged(eventInfo: CustomEvent): void;
		oniteminserted(eventInfo: CustomEvent): void;
		onitemmoved(eventInfo: CustomEvent): void;
		onitemmutated(eventInfo: CustomEvent): void;
		onitemremoved(eventInfo: CustomEvent): void;
		onreload(eventInfo: CustomEvent): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		bind(name: string, action: Function): any;
		concat(...item: T[]): T[];
		createFiltered(predicate: (x: T) => boolean): FilteredListProjection<T>;
		createGrouped(
		groupKey: (x: T) => string, groupData: (x: T) => any, groupSorter?: (left: string, right: string) => number
	): GroupedSortedListProjection<T>;
		createSorted(sorter: (left: T, right: T) => number): SortedListProjection<T>;
		dispatchEvent(type: string, eventProperties: any): boolean;
		every(
		callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean;
		filter(callback: (value: T, index: number, array: T[]) => any, thisArg?: any): T[];
		forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
		getAt(index: number): T;
		indexOf(searchElement: T, fromIndex?: number): number;
		join(separator?: string): string;
		lastIndexOf(searchElement: T, fromIndex?: number): number;
		map<G>(callback: (value: T, index: number, array: T[]) => G, thisArg?: any): G[];
		notify(name: string, newValue: any, oldValue: any): Promise<any>;
		notifyReload(): void;
		reduce(
		callback: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => T, initiallValue?: T
	): T;
		reduceRight(
		callback: (previousValue: any, currentValue: any, currentIndex: number, array: T[]) => T, initialValue?: T
	): T;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		slice(begin: number, end?: number): T[];
		some(
		callback: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean;
		unbind(name: string, action: Function): any;
		dataSource: WinJS.UI.IListDataSource<T>;
		supportedForProcessing: boolean
	}

	declare class ListBaseWithMutators<T> extends ListBase<T> {
		pop(): T;
		push(value: T): number;
		push(...values: T[]): number;
		shift(): T;
		unshift(value: T): number;
		unshift(...values: T[]): number
	}

	declare class ListProjection<T> extends ListBaseWithMutators<T> {
		dispose(): void;
		getItemFromKey(key: string): IKeyDataPair<T>;
		move(index: number, newIndex: number): void;
		splice(start: number, howMany?: number, ...item: T[]): T[]
	}

	declare class SortedListProjection<T> extends ListProjection<T> {
		getItem(index: number): IKeyDataPair<T>;
		indexOfKey(key: string): number;
		notifyMutated(index: number): void;
		setAt(index: number, newValue: T): void;
		length: number
	}

	declare class Template  {
		constructor(element: HTMLElement, options?: any): this;
		render(dataContext: any, container?: HTMLElement): Promise<HTMLElement>;
		render(href: string, dataContext: any, container?: HTMLElement): Promise<HTMLElement>;
		element: HTMLElement
	}

	
}

declare module 'Class' {
			declare function define(constructor?: Function, instanceMembers?: any, staticMembers?: any): any

	declare function derive(
		baseClass: any, constructor: Function, instanceMembers?: any, staticMembers?: any
	): any

	declare function mix(constructor: Function, ...mixin: any[]): any

		
}

declare module 'npm$namespace$WinJS' {
		declare interface IPromise<T> {
		cancel(): void,
		done<U>(
		onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void
	): void,
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>,
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>
	}

	declare interface IXHROptions {
		type?: string,
		url: string,
		user?: string,
		password?: string,
		headers?: any,
		data?: any,
		responseType?: string,
		customRequestInitializer?: (request: XMLHttpRequest) => void
	}

	declare function log(message: string, tags?: string, type?: string): void

	declare function log(message: () => string, tags?: string, type?: string): void

	declare function strictProcessing(): void

	declare function xhr(options: IXHROptions): Promise<XMLHttpRequest>

	declare class ErrorFromName  {
		constructor(name: string, message?: string): this
	}

	declare class Promise<T> extends IPromise<T> {
		constructor(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): this;
		onerror(eventInfo: CustomEvent): void;
		addEventListener(type: string, listener: Function, capture?: boolean): void;
		any(value: IPromise<any>[]): IPromise<any>;
		any(value: any): IPromise<any>;
		as<U>(value?: U): IPromise<U>;
		cancel(): void;
		cancel: IPromise<any>;
		dispatchEvent(type: string, details: any): boolean;
		done<U>(
		onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void
	): void;
		is(value: any): boolean;
		join(values: any): IPromise<any>;
		removeEventListener(eventType: string, listener: Function, capture?: boolean): void;
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void
	): IPromise<U>;
		then<U>(
		onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<U>;
		then(
		promise: IPromise<any>, onComplete?: (value: any) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void
	): IPromise<any>;
		thenEach(
		values: any, complete?: (value: any) => void, error?: (error: any) => void, progress?: (progress: any) => void
	): IPromise<any>;
		timeout(timeout?: number, promise?: IPromise<any>): IPromise<any>;
		wrap<U>(value?: U): IPromise<U>;
		wrapError<U>(error: U): IPromise<U>
	}

	
}

declare module 'Namespace' {
			declare function define(name?: string, members?: any): any

	declare function defineWithParent(parentNamespace?: any, name?: string, members?: any): any

		
}

declare module 'Navigation' {
			declare function addEventListener(eventType: string, listener: Function, capture?: boolean): void

	declare function back(distance?: number): Promise<boolean>

	declare function forward(distance?: number): Promise<boolean>

	declare function navigate(location: any, initialState?: any): Promise<boolean>

	declare function removeEventListener(eventType: string, listener: Function, useCapture?: boolean): void

	declare function onbeforenavigate(eventInfo: CustomEvent): void

	declare function onnavigated(eventInfo: CustomEvent): void

	declare function onnavigating(eventInfo: CustomEvent): void

		
}

declare module 'Resources' {
			declare function addEventListener(type: string, listener: Function, useCapture?: boolean): void

	declare function dispatchEvent(type: string, details: any): void

	declare function getString(resourceId: string): {
		value: string,
		empty?: boolean,
		lang?: string
	}

	declare function processAll(rootElement?: HTMLElement): Promise<void>

	declare function removeEventListener(type: string, listener: Function, useCapture?: boolean): void

	declare function oncontextchanged(eventInfo: CustomEvent): void

		
}

declare module 'Animation' {
		declare interface IAnimationMethodResponse {
		execute(): Promise<any>
	}

	declare function createAddToListAnimation(added: any, affected: any): IAnimationMethodResponse

	declare function createAddToSearchListAnimation(added: any, affected: any): IAnimationMethodResponse

	declare function createCollapseAnimation(hidden: any, affected: any): IAnimationMethodResponse

	declare function createDeleteFromListAnimation(deleted: any, remaining: any): IAnimationMethodResponse

	declare function createDeleteFromSearchListAnimation(deleted: any, remaining: any): IAnimationMethodResponse

	declare function createExpandAnimation(revealed: any, affected: any): IAnimationMethodResponse

	declare function createPeekAnimation(element: any): IAnimationMethodResponse

	declare function createRepositionAnimation(element: any): IAnimationMethodResponse

	declare function crossFade(incoming: any, outgoing: any): Promise<any>

	declare function dragBetweenEnter(target: any, offset?: any): Promise<any>

	declare function dragBetweenLeave(target: any): Promise<any>

	declare function dragSourceEnd(dragSource: any, offset?: any, affected?: any): Promise<any>

	declare function dragSourceStart(dragSource: any, affected?: any): Promise<any>

	declare function enterContent(incoming: any, offset?: any, options?: any): Promise<any>

	declare function enterPage(element: any, offset?: any): Promise<any>

	declare function exitContent(outgoing: any, offset?: any): Promise<any>

	declare function exitPage(outgoing: any, offset?: any): Promise<any>

	declare function fadeIn(shown: any): Promise<any>

	declare function fadeOut(hidden: any): Promise<any>

	declare function hideEdgeUI(element: any, offset?: any, options?: any): Promise<any>

	declare function hidePanel(element: any, offset: any): Promise<any>

	declare function hidePopup(element: any): Promise<any>

	declare function pointerDown(element: any): Promise<any>

	declare function pointerUp(element: any): Promise<any>

	declare function showEdgeUI(element: any, offset?: any, options?: any): Promise<any>

	declare function showPanel(element: any, offset?: any): Promise<any>

	declare function showPopup(element: any, offset?: any): Promise<any>

	declare function swipeDeselect(deselected: any, selection: any): Promise<any>

	declare function swipeReveal(target: any, offset?: any): Promise<any>

	declare function swipeSelect(selected: any, selection: any): Promise<any>

	declare function updateBadge(incoming: any, offset?: any): Promise<any>

		
}

declare module 'UI' {
		declare interface IFetchResult<T> {
		absoluteIndex: number,
		atEnd: boolean,
		atStart: boolean,
		items: T[],
		offset: number,
		totalCount: number
	}

	declare interface IItem<T> {
		data: T,
		groupKey: string,
		handle: string,
		index: number,
		key: string
	}

	declare interface IItemPromise<T> {
		release(): void,
		retain(): IItemPromise<T>,
		handle: string,
		index: number
	}

	declare interface ILayout {
		calculateFirstVisible(beginScrollPosition: number, wholeItem: boolean): Promise<any>,
		calculateLastVisible(endScrollPosition: number, wholeItem: boolean): Promise<any>,
		endLayout(): any,
		getItemPosition(itemIndex: number): Promise<any>,
		getKeyboardNavigatedItem(
		itemIndex: number, element: HTMLElement, keyPressed: WinJS.Utilities.Key
	): Promise<number>,
		getScrollBarRange(): Promise<any>,
		hitTest(x: number, y: number): void,
		itemsAdded(elements: HTMLElement[]): void,
		itemsMoved(): void,
		itemsRemoved(elements: HTMLElement[]): void,
		layoutHeader(groupIndex: number, element: HTMLElement): void,
		layoutItem(itemIndex: number, element: HTMLElement): void,
		prepareHeader(element: HTMLElement): void,
		prepareItem(element: HTMLElement): void,
		releaseItem(element: HTMLElement): void,
		reset(): void,
		setSite(site: ILayoutSite): void,
		startLayout(
		beginScrollPosition: number, endScrollPosition: number, count: number
	): Promise<any>,
		horizontal: boolean
	}

	declare interface ILayoutSite {
		animationsDisabled: boolean,
		itemSurface: HTMLElement,
		rtl: boolean,
		scrollbarPos: number,
		surface: HTMLElement,
		viewport: HTMLElement,
		viewportSize: any
	}

	declare interface IListBinding<T> {
		current(): IItemPromise<IItem<T>>,
		first(): IItemPromise<IItem<T>>,
		fromDescription(description: string): IItemPromise<IItem<T>>,
		fromIndex(index: number): IItemPromise<IItem<T>>,
		fromKey(key: string, hints?: any): IItemPromise<IItem<T>>,
		jumpToItem(item: IItem<T>): IItemPromise<IItem<T>>,
		last(): IItemPromise<IItem<T>>,
		next(): IItemPromise<IItem<T>>,
		previous(): IItemPromise<IItem<T>>,
		release(): void,
		releaseItem(item: IItem<T>): void
	}

	declare interface IListDataAdapter<T> {
		change(key: string, newData: T, indexHint: number): Promise<void>,
		getCount(): Promise<number>,
		insertAfter(
		key: string, data: T, previousKey: string, previousIndexHint: number
	): Promise<IItem<T>>,
		insertAtEnd(key: string, data: T): Promise<IItem<T>>,
		insertAtStart(key: string, data: T): Promise<IItem<T>>,
		insertBefore(
		key: string, data: T, nextKey: string, nextIndexHint: number
	): Promise<IItem<T>>,
		itemsFromDescription(
		description: string, countBefore: number, countAfter: number
	): Promise<IFetchResult<T>>,
		itemsFromEnd(count: number): Promise<IFetchResult<T>>,
		itemsFromIndex(
		index: number, countBefore: number, countAfter: number
	): Promise<IFetchResult<T>>,
		itemsFromKey(key: string, countBefore: number, countAfter: number): Promise<IFetchResult<T>>,
		itemsFromStart(count: number): Promise<IFetchResult<T>>,
		itemSignature(item: IItem<T>): string,
		moveAfter(
		key: string, previousKey: any, indexHint: string, previousIndexHint: number
	): Promise<IItem<T>>,
		moveBefore(
		key: string, nextKey: any, indexHint: string, nextIndexHint: number
	): Promise<IItem<T>>,
		moveToEnd(key: string, indexHint: number): Promise<IItem<T>>,
		moveToStart(key: string, indexHint: number): Promise<IItem<T>>,
		remove(key: string, data: T, indexHint: number): Promise<void>,
		setNotificationHandler(notificationHandler: IListDataNotificationHandler<T>): void,
		compareByIdentity: boolean
	}

	declare interface IListDataNotificationHandler<T> {
		beginNotifications(): void,
		changed(item: IItem<T>): void,
		endNotifications(): void,
		inserted(newItem: IItem<T>, previousKey: string, nextKey: string, index?: number): void,
		invalidateAll(): Promise<any>,
		moved(
		item: IItem<T>, previousKey: string, nextKey: string, oldIndex?: number, newIndex?: number
	): void,
		reload(): void,
		removed(key: string, index?: number): void
	}

	declare interface IListDataSource<T> {
		statuschanged(eventInfo: CustomEvent): void,
		beginEdits(): void,
		change(key: string, newData: T): Promise<IItem<T>>,
		createListBinding(notificationHandler?: IListNotificationHandler<T>): IListBinding<T>,
		endEdits(): void,
		getCount(): Promise<number>,
		insertAfter(key: string, data: T, previousKey: string): Promise<IItem<T>>,
		insertAtEnd(key: string, data: T): Promise<IItem<T>>,
		insertAtStart(key: string, data: T): Promise<IItem<T>>,
		insertBefore(key: string, data: T, nextKey: string): Promise<IItem<T>>,
		invalidateAll(): Promise<any>,
		itemFromDescription(description: any): Promise<IItem<T>>,
		itemFromIndex(index: number): Promise<IItem<T>>,
		itemFromKey(key: string, description?: any): Promise<IItem<T>>,
		moveAfter(key: string, previousKey: string): Promise<IItem<T>>,
		moveBefore(key: string, nextKey: string): Promise<IItem<T>>,
		moveToEnd(key: string): Promise<IItem<T>>,
		moveToStart(key: string): Promise<IItem<T>>,
		remove(key: string): Promise<IItem<T>>
	}

	declare interface IListNotificationHandler<T> {
		beginNotifications(): void,
		changed(newItem: IItem<T>, oldItem: IItem<T>): void,
		countChanged(newCount: number, oldCount: number): void,
		endNotifications(): void,
		indexChanged(handle: string, newIndex: number, oldIndex: number): void,
		inserted(itemPromise: IItemPromise<T>, previousHandle: string, nextHandle: string): void,
		itemAvailable(item: IItem<T>): void,
		moved(item: IItemPromise<T>, previousHandle: string, nextHandle: string): void,
		removed(handle: string, mirage: boolean): void
	}

	declare interface IListViewItem {
		index?: number,
		key?: string,
		hasFocus?: boolean,
		showFocus?: boolean
	}

	declare interface ISelection<T> {
		add(items: any): Promise<any>,
		clear(): Promise<any>,
		count(): number,
		getIndices(): number[],
		getItems(): Promise<IItem<T>[]>,
		getRanges(): ISelectionRange[],
		isEverything(): boolean,
		remove(items: any): Promise<any>,
		selectAll(): void,
		set(items: any): Promise<any>
	}

	declare interface ISelectionRange {
		firstIndex: number,
		firstKey: any,
		lastIndex: number,
		lastKey: any
	}

	declare interface IZoomableView<T> {
		beginZoom(): void,
		configureForZoom(
		isZoomedOut: boolean, isCurrentView: boolean, triggerZoom: Function, prefetchedPages: number
	): void,
		endZoom(isCurrentView: boolean): void,
		getCurrentItem(): Promise<{
		item: T,
		position: Utilities.IPosition
	}>,
		getPanAxis(): string,
		handlePointer(pointerId: string): void,
		positionItem(item: T, position: Utilities.IPosition): void,
		setCurrentItem(x: number, y: number): void
	}

	declare interface IListGroupDataSource<T> {
		groups: IListDataSource<T>
	}

	declare function computeDataSourceGroups<T>(
		listDataSource: IListDataSource<T>, groupKey: Function, groupData: Function, options?: any
	): IListGroupDataSource<T>

	declare function disableAnimations(): void

	declare function enableAnimations(): void

	declare function eventHandler(handler: any): any

	declare function executeAnimation(element: HTMLElement, animation: any): Promise<any>

	declare function executeTransition(element: HTMLElement, transition: any): Promise<any>

	declare function getItemsFromRanges<U>(
		dataSource: IListDataSource<U>, ranges: ISelectionRange[]
	): Promise<IItem<U>>

	declare function isAnimationEnabled(): boolean

	declare function processAll(rootElement?: Element, skipRoot?: boolean): Promise<any>

	declare function process(element: Element): Promise<any>

	declare function scopedSelect(selector: string, element: HTMLElement): HTMLElement

	declare function setOptions(control: any, options?: any): void

	declare class AppBar  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterhide(eventInfo: Event): void;
		onaftershow(eventInfo: Event): void;
		onbeforehide(eventInfo: Event): void;
		onbeforeshow(eventInfo: Event): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		getCommandById(id: string): AppBarCommand;
		hide(): void;
		hideCommands(commands: any[], immediate?: boolean): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		show(): void;
		showCommands(commands: any[], immediate?: boolean): void;
		showOnlyCommands(commands: any[], immediate?: boolean): void;
		commands: AppBarCommand[];
		disabled: boolean;
		element: HTMLElement;
		hidden: boolean;
		layout: string;
		placement: string;
		sticky: boolean
	}

	declare class AppBarCommand  {
		constructor(element?: HTMLElement, options?: any): this;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		disabled: boolean;
		element: HTMLElement;
		extraClass: string;
		flyout: Flyout;
		hidden: boolean;
		icon: string;
		id: string;
		label: string;
		onclick: Function;
		section: string;
		selected: boolean;
		tooltip: string;
		type: string
	}

	declare class DatePicker  {
		constructor(element?: HTMLElement, options?: any): this;
		onchange(eventInfo: CustomEvent): void;
		addEventListener(type: string, listener: Function, capture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		raiseEvent(type: string, eventProperties: any): boolean;
		removeEventListener(type: string, listener: Function, useCapture?: any): void;
		calendar: string;
		current: Date;
		datePattern: string;
		disabled: boolean;
		element: HTMLElement;
		maxYear: number;
		minYear: number;
		monthPattern: string;
		yearPattern: string
	}

	declare class DOMEventMixin  {
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		setOptions(control: any, options: any): void
	}

	declare class FlipView<T>  {
		constructor(element?: HTMLElement, options?: any): this;
		ondatasourcecountchanged(eventInfo: Event): void;
		onpagecompleted(eventInfo: CustomEvent): void;
		onpageselected(eventInfo: CustomEvent): void;
		onpagevisibilitychanged(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		count(): Promise<number>;
		dispatchEvent(type: string, eventProperties: any): boolean;
		forceLayout(): void;
		next(): boolean;
		previous(): boolean;
		removeEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		setCustomAnimations(animations: any): void;
		currentPage: number;
		element: HTMLElement;
		itemDataSource: IListDataSource<T>;
		itemSpacing: number;
		itemTemplate: any;
		orientation: string
	}

	declare class Flyout  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterhide(eventInfo: Event): void;
		onaftershow(eventInfo: Event): void;
		onbeforehide(eventInfo: Event): void;
		onbeforeshow(eventInfo: Event): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		hide(): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		show(anchor: HTMLElement, placement: string, alignment: string): void;
		alignment: string;
		anchor: HTMLElement;
		element: HTMLElement;
		hidden: boolean;
		placement: string
	}

	declare class GridLayout  {
		constructor(options?: any): this;
		calculateFirstVisible(beginScrollPosition: number, wholeItem: boolean): void;
		calculateLastVisible(endScrollPosition: number, wholeItem: boolean): void;
		endLayout(): void;
		getItemPosition(itemIndex: number): void;
		getKeyboardNavigatedItem(itemIndex: number, element: any, keyPressed: any): void;
		getScrollbarRange(beginScrollPosition: number, endScrollPosition: number): void;
		hitTest(x: number, y: number): void;
		init(): void;
		itemsAdded(elements: any): void;
		itemsFromRange(firstPixel: number, lastPixel: number): void;
		itemsMoved(): void;
		itemsRemoved(elements: any): void;
		layoutHeader(groupIndex: number, element: any): void;
		layoutItem(itemIndex: number, element: any): void;
		prepareHeader(element: HTMLElement): void;
		prepareItem(itemIndex: number, element: any): void;
		releaseItem(item: any, newItem: any): void;
		reset(): void;
		setSite(layoutSite: any): void;
		startLayout(beginScrollPosition: number, endScrollPositionScrollPosition: number): void;
		updateBackdrop(count: number): void;
		backdropColor: string;
		disableBackdrop: boolean;
		groupHeaderPosition: WinJS.UI.HeaderPosition;
		groupInfo: Function;
		horizontal: boolean;
		itemInfo: Function;
		maxRows: number
	}

	declare class HtmlControl  {
		constructor(element?: HTMLElement, options?: any): this
	}

	declare class Layout  {
		
	}

	declare class ListLayout  {
		constructor(options?: any): this;
		calculateFirstVisible(beginScrollPosition: number, wholeItem: boolean): void;
		calculateLastVisible(endScrollPosition: number, wholeItem: boolean): void;
		endLayout(): void;
		getItemPosition(itemIndex: number): void;
		getKeyboardNavigatedItem(itemIndex: number, element: HTMLElement, keyPressed: any): void;
		getScrollbarRange(beginScrollPosition: number, endScrollPosition: number): void;
		hitTest(x: number, y: number): void;
		init(): void;
		itemsAdded(elements: any): void;
		itemsFromRange(firstPixel: number, lastPixel: number): void;
		itemsMoved(): void;
		itemsRemoved(elements: any): void;
		layoutHeader(groupIndex: number, element: any): void;
		layoutItem(itemIndex: number, element: any): void;
		prepareHeader(element: HTMLElement): void;
		prepareItem(itemIndex: number, element: any): void;
		releaseItem(item: any, newItem: any): void;
		reset(): void;
		setSite(layoutSite: ILayoutSite): void;
		startLayout(beginScrollPosition: number, endScrollPositionScrollPosition: number): void;
		updateBackdrop(count: number): void;
		backdropColor: string;
		disableBackdrop: boolean;
		groupHeaderPosition: WinJS.UI.HeaderPosition;
		groupInfo: Function;
		horizontal: boolean;
		itemInfo: Function
	}

	declare class ListView<T>  {
		constructor(element?: HTMLElement, options?: any): this;
		oncontentanimating(eventInfo: CustomEvent): void;
		oniteminvoked(eventInfo: CustomEvent): void;
		onkeyboardnavigating(eventInfo: CustomEvent): void;
		onloadingstatechanged(eventInfo: CustomEvent): void;
		onselectionchanged(eventInfo: CustomEvent): void;
		onselectionchanging(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		elementFromIndex(itemIndex: number): HTMLElement;
		ensureVisible(itemIndex: number): void;
		forceLayout(): void;
		indexOfElement(element: HTMLElement): number;
		loadMorePages(): void;
		recalculateItemPosition(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		triggerDispose(): void;
		automaticallyLoadPages: boolean;
		currentItem: IListViewItem;
		element: HTMLElement;
		groupDataSource: IListDataSource<T>;
		groupHeaderTemplate: any;
		indexOfFirstVisible: number;
		indexOfLastVisible: number;
		itemDataSource: IListDataSource<T>;
		itemTemplate: any;
		layout: ILayout;
		loadingBehavior: string;
		loadingState: string;
		pagesToLoad: number;
		pagesToLoadThreshold: number;
		resetGroupHeader: (header: any, element: HTMLElement) => void;
		resetItem: (item: T, element: HTMLElement) => void;
		scrollPosition: number;
		selection: ISelection<T>;
		selectionMode: SelectionMode;
		swipeBehavior: WinJS.UI.SwipeBehavior;
		tapBehavior: TapBehavior;
		zoomableView: IZoomableView<ListView<T>>
	}

	declare class Menu  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterhide(eventInfo: Event): void;
		onaftershow(eventInfo: Event): void;
		onbeforehide(eventInfo: Event): void;
		onbeforeshow(eventInfo: Event): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		getCommandById(id: string): MenuCommand;
		hide(): void;
		hideCommands(commands: any[], immediate: boolean): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		show(anchor: HTMLElement, placement?: string, alignment?: string): void;
		showCommands(commands: any[], immediate: boolean): void;
		showOnlyCommands(commands: any[], immediate: boolean): void;
		alignment: string;
		anchor: HTMLElement;
		commands: MenuCommand[];
		element: HTMLElement;
		hidden: boolean;
		placement: string
	}

	declare class MenuCommand  {
		constructor(element?: HTMLElement, options?: any): this;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		disabled: boolean;
		element: HTMLElement;
		extraClass: string;
		flyout: Flyout;
		hidden: boolean;
		id: string;
		label: string;
		onclick: Function;
		selected: boolean;
		type: string
	}

	declare class Rating  {
		constructor(element?: HTMLElement, options?: any): this;
		oncancel(eventInfo: Event): void;
		onchange(eventInfo: CustomEvent): void;
		onpreviewchange(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		averageRating: number;
		disabled: boolean;
		element: HTMLElement;
		enableClear: boolean;
		maxRating: number;
		tooltipStrings: string[];
		userRating: number
	}

	declare class SemanticZoom  {
		constructor(element?: HTMLElement, options?: any): this;
		onzoomchanged(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		forceLayout(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		element: HTMLElement;
		enableButton: boolean;
		isDeclarativeControlContainer: boolean;
		locked: boolean;
		zoomedOut: boolean;
		zoomFactor: number
	}

	declare class SettingsFlyout  {
		constructor(element?: HTMLElement, options?: any): this;
		onafterhide(eventInfo: Event): void;
		onaftershow(eventInfo: Event): void;
		onbeforehide(eventInfo: Event): void;
		onbeforeshow(eventInfo: Event): void;
		addEventListener(type: string, listener: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		hide(): void;
		populateSettings(e: CustomEvent): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		show(): void;
		show(): void;
		showSettings(id: string, path: any): void;
		element: HTMLElement;
		hidden: boolean;
		settingsCommandId: string;
		width: string
	}

	declare class StorageDataSource<T>  {
		constructor(query: any, options?: any): this;
		loadThumbnail(item: IItem<T>, image: HTMLImageElement): Promise<void>
	}

	declare class TabContainer  {
		constructor(element: HTMLElement, options?: any): this;
		childFocus: HTMLElement;
		tabIndex: number
	}

	declare class TimePicker  {
		constructor(element?: HTMLElement, options?: any): this;
		onchange(eventInfo: CustomEvent): void;
		addEventListener(type: string, listener: Function, capture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		raiseEvent(type: string, eventProperties: any): boolean;
		removeEventListener(type: string, listener: Function, useCapture?: any): void;
		clock: string;
		current: Date;
		disabled: boolean;
		element: HTMLElement;
		hourPattern: string;
		minuteIncrement: number;
		minutePattern: string;
		periodPattern: string
	}

	declare class ToggleSwitch  {
		constructor(element?: HTMLElement, options?: any): this;
		onchange(eventInfo: Event): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		handleEvent(event: any): void;
		raiseEvent(type: string, eventProperties: any): boolean;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		checked: boolean;
		disabled: boolean;
		element: HTMLElement;
		labelOff: string;
		labelOn: string;
		title: string
	}

	declare class Tooltip  {
		constructor(element?: HTMLElement, options?: any): this;
		onbeforeclose(eventInfo: CustomEvent): void;
		onbeforeopen(eventInfo: CustomEvent): void;
		onclosed(eventInfo: CustomEvent): void;
		onopened(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		close(): void;
		open(type?: string): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		contentElement: HTMLElement;
		element: HTMLElement;
		extraClass: string;
		infotip: boolean;
		innerHTML: string;
		placement: string
	}

	declare class ViewBox  {
		constructor(element?: HTMLElement, options?: any): this;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		forceLayout(): void;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void;
		element: HTMLElement
	}

	declare class VirtualizedDataSource<T>  {
		constructor(listDataAdapter: IListDataAdapter<T>, options?: any): this;
		statuschanged(eventInfo: CustomEvent): void;
		addEventListener(eventName: string, eventHandler: Function, useCapture?: boolean): void;
		dispatchEvent(type: string, eventProperties: any): boolean;
		removeEventListener(eventName: string, eventCallback: Function, useCapture?: boolean): void
	}

	
}

declare module 'Fragments' {
			declare function cache(href: string): Promise<any>

	declare function clearCache(href: string): void

	declare function clearCache(href: HTMLElement): void

	declare function render(href: string, element?: HTMLElement): Promise<HTMLElement>

	declare function renderCopy(href: string, target?: HTMLElement): Promise<HTMLElement>

	declare function renderCopy(href: HTMLElement, target?: HTMLElement): Promise<HTMLElement>

		
}

declare module 'Pages' {
		declare interface IPageControlMembers {
		error(err: any): any,
		init(element: HTMLElement, options: any): any,
		load(uri: string): any,
		processed(element: HTMLElement, options: any): any,
		ready(element: HTMLElement, options: any): any,
		render(element: HTMLElement, options: any, loadResult: Promise<any>): void
	}

	declare function define(
		uri: string, members: IPageControlMembers
	): (
		element?: HTMLElement, options?: any, complete?: (page: any) => void, parentedPromise?: Promise<any>
	) => void

	declare function get(
		uri: string
	): (
		element?: HTMLElement, options?: any, complete?: (page: any) => void, parentedPromise?: Promise<any>
	) => void

	declare function render(
		uri: string, element?: HTMLElement, options?: any, parentedPromise?: Promise<any>
	): Promise<any>

		
}

declare module 'TrackTabBehavior' {
			declare function attach(element: HTMLElement, tabIndex: number): void

	declare function detatch(element: HTMLElement): void

		
}

declare module 'Utilities' {
		declare interface QueryCollection<T> {
		addClass(name: string): QueryCollection<T>,
		children(element: HTMLElement): QueryCollection<T>,
		clearStyle(name: string): QueryCollection<T>,
		control(ctor: any, options?: any): QueryCollection<T>,
		forEach(
		callbackFn: (value: T, index: number, array: T[]) => void, thisArg?: any
	): QueryCollection<T>,
		get(index: number): T,
		getAttribute(name: string): any,
		hasClass(name: string): boolean,
		id(id: string): QueryCollection<T>,
		include(items: T): void,
		include(items: T[]): void,
		include(items: HTMLCollection): void,
		listen(eventType: string, listener: Function, capture?: boolean): void,
		query(query: any): QueryCollection<T>,
		removeClass(name: string): QueryCollection<T>,
		removeEventListener(eventType: string, listener: Function, capture?: boolean): QueryCollection<T>,
		setAttribute(name: string, value: any): QueryCollection<T>,
		setStyle(name: string, value: any): QueryCollection<T>,
		template(
		templateElement: HTMLElement, data: any, renderDonePromiseCallback?: Function
	): QueryCollection<T>,
		toggleClass(name: string): QueryCollection<T>
	}

	declare interface ILogOptions {
		type?: string,
		action?: (message: string, tags: string, type: string) => void,
		excludeTags?: string,
		tags?: string
	}

	declare interface IPosition {
		left: number,
		top: number,
		width: number,
		height: number
	}

	declare function addClass<T>(e: T, name: string): T

	declare function children(element: HTMLElement): QueryCollection<HTMLElement>

	declare function convertToPixels(element: HTMLElement, value: string): number

	declare function createEventProperties(...events: string[]): any

	declare function data(element: HTMLElement): any

	declare function empty<T>(element: T): T

	declare function eventWithinElement(element: HTMLElement, event: Event): boolean

	declare function formatLog(message: string, tag: string, type: string): string

	declare function getContentHeight(element: HTMLElement): number

	declare function getContentWidth(element: HTMLElement): number

	declare function getMember(name: string, root?: any): any

	declare function getPosition(element: HTMLElement): IPosition

	declare function getRelativeLeft(element?: HTMLElement, parent?: HTMLElement): number

	declare function getRelativeTop(element?: HTMLElement, parent?: HTMLElement): number

	declare function getTotalHeight(element: HTMLElement): number

	declare function getTotalWidth(element: HTMLElement): number

	declare function hasClass(e: HTMLElement, name: string): boolean

	declare function id(id: string): QueryCollection<HTMLElement>

	declare function insertAdjacentHTML(element: HTMLElement, position: string, text: string): void

	declare function insertAdjacentHTMLUnsafe(element: HTMLElement, position: string, text: string): void

	declare function markSupportedForProcessing<U>(func: U): U

	declare function query(query: any, element?: HTMLElement): QueryCollection<HTMLElement>

	declare function ready(callback?: Function, async?: boolean): Promise<any>

	declare function removeClass<T>(e: T, name: string): T

	declare function requireSupportedForProcessing<T>(value: T): T

	declare function setInnerHTML(element: HTMLElement, text: string): void

	declare function setInnerHTMLUnsafe(element: HTMLElement, text: string): void

	declare function setOuterHTML(element: HTMLElement, text: string): void

	declare function setOuterHTMLUnsafe(element: HTMLElement, text: string): void

	declare function startLog(options?: ILogOptions): void

	declare function startLog(tags?: string): void

	declare function stopLog(): void

	declare function toggleClass<T>(e: T, name: string): T

		
}
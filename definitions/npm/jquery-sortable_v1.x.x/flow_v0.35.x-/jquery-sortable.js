

declare module 'jquery-sortable' {
		declare interface JQuery {
		sortable(methodName: "enable"): JQuery,
		sortable(methodName: "disable"): JQuery,
		sortable(methodName: "refresh"): JQuery,
		sortable(methodName: "destroy"): JQuery,
		sortable(methodName: "serialize"): JQuery,
		sortable(methodName: string): JQuery,
		sortable(options?: JQuerySortable.Options): JQuery
	}

			
}

declare module 'npm$namespace$JQuerySortable' {
	declare type Dimensions = number[];

	declare type GenericEventHandler = (
		$item?: JQuery, container?: Container, _super?: GenericEventHandler, event?: Event
	) => void;

	declare type OnDragEventHandler = (
		$item?: JQuery, position?: Position, _super?: OnDragEventHandler, event?: Event
	) => void;

	declare type OnMousedownHandler = ($item?: JQuery, _super?: OnMousedownHandler, event?: Event) => void;

	declare type OnCancelHandler = (
		$item?: JQuery, container?: Container, _super?: OnCancelHandler, event?: Event
	) => void;

	declare type SerializeFunc = ($parent: JQuery, $children: any, parentIsContainer: boolean) => void;

	declare interface Position {
		top: number,
		left: number
	}

	declare interface ContainerGroup {
		$document: JQuery,
		containerDimensions: Dimensions[],
		containers: Container[],
		delayMet: boolean,
		dragInitDone: boolean,
		dragProxy: any,
		dragging: boolean,
		dropProxy: any,
		item: JQuery,
		itemContainer: Container,
		lastAppendedItem: JQuery,
		lastPointer: Position,
		lastRelativePointer: Position,
		offsetParent: JQuery,
		options: Options,
		placeholder: JQuery,
		pointer: Position,
		relativePointer: Position,
		sameResultBox: {
		bottom: number,
		left: number,
		right: number,
		top: number
	},
		scrollProxy: any
	}

	declare interface Container {
		el: JQuery,
		options: Options,
		group: ContainerGroup,
		rootGroup: ContainerGroup,
		handle: string,
		target: JQuery,
		itemDimensions: Dimensions[],
		items: HTMLElement[]
	}

	declare interface GroupOptions {
		afterMove?: (
		$placeholder: JQuery, container: Container, $closestItemOrContainer: JQuery
	) => void,
		containerPath?: string,
		containerSelector?: string,
		distance?: number,
		delay?: number,
		handle?: string,
		itemPath?: string,
		itemSelector?: string,
		isValidTarget?: ($item: JQuery, container: Container) => boolean,
		onCancel?: OnCancelHandler,
		onDrag?: OnDragEventHandler,
		onDragStart?: GenericEventHandler,
		onDrop?: GenericEventHandler,
		onMousedown?: OnMousedownHandler,
		placeholder?: JQuery | any[] | Element | string,
		pullPlaceholder?: boolean,
		serialize?: SerializeFunc,
		tolerance?: number
	}

	declare interface ContainerOptions {
		drag?: boolean,
		drop?: boolean,
		exclude?: string,
		nested?: boolean,
		vertical?: boolean
	}

	declare interface Options {
		group?: string
	}

			
}
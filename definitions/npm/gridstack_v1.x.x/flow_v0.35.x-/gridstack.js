

declare module 'gridstack' {
		declare interface JQuery {
		gridstack(options: IGridstackOptions): GridStack
	}

	declare interface GridStack {
		addWidget(
		el: string, x: number, y: number, width: number, height: number, autoPosition: boolean
	): JQuery,
		batchUpdate(): void,
		cellHeight(): number,
		cellHeight(val: number): void,
		cellWidth(): number,
		commit(): void,
		destroy(): void,
		disable(): void,
		enable(): void,
		getCellFromPixel(position: MousePosition): CellPosition,
		isAreaEmpty(x: number, y: number, width: number, height: number): void,
		locked(el: HTMLElement, val: boolean): void,
		minWidth(el: HTMLElement, val: number): void,
		minHeight(el: HTMLElement, val: number): void,
		movable(el: HTMLElement, val: boolean): void,
		move(el: HTMLElement, x: number, y: number): void,
		removeWidget(el: HTMLElement, detachNode?: boolean): void,
		removeAll(): void,
		resize(el: HTMLElement, width: number, height: number): void,
		resizable(el: HTMLElement, val: boolean): void,
		setStatic(staticValue: boolean): void,
		update(el: HTMLElement, x: number, y: number, width: number, height: number): void,
		willItFit(
		x: number, y: number, width: number, height: number, autoPosition: boolean
	): boolean
	}

	declare interface MousePosition {
		top: number,
		left: number
	}

	declare interface CellPosition {
		x: number,
		y: number
	}

	declare interface IGridstackOptions {
		alwaysShowResizeHandle: boolean,
		animate: boolean,
		auto: boolean,
		cellHeight: number,
		draggable: {
		
	},
		handle: string,
		height: number,
		float: boolean,
		itemClass: string,
		minWidth: number,
		placeholderClass: string,
		resizable: {
		
	},
		staticGrid: boolean,
		verticalMargin: number,
		width: number
	}

			
}

declare module 'npm$namespace$GridStackUI' {
		declare interface Utils {
		sort(nodes: HTMLElement[], dir: number, width: number): void
	}

			
}
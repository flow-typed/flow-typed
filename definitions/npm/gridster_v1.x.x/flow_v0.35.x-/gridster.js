

declare module 'gridster' {
		declare interface GridsterDraggable {
		items?: any,
		distance?: number,
		limit?: boolean,
		offset_left?: number,
		handle?: string,
		drag?: (event: Event, ui: GridsterUi) => void,
		start?: (event: Event, ui: {
		helper: JQuery
	}) => void,
		stop?: (event: Event, ui: {
		helper: JQuery
	}) => void
	}

	declare interface GridsterResizable {
		enabled?: boolean,
		axes?: string[],
		handle_append_to?: string,
		handle_class?: string,
		max_size?: number[],
		min_size?: number[],
		resize?: (event: Event, ui: GridsterUi, $el: JQuery) => void,
		start?: (event: Event, ui: {
		helper: JQuery
	}, $el: JQuery) => void,
		stop?: (event: Event, ui: {
		helper: JQuery
	}, $el: JQuery) => void
	}

	declare interface GridsterUi {
		position: {
		left: number,
		top: number
	}
	}

	declare interface GridsterCollision {
		on_overlap_start: (data: GridsterCollisionData) => void,
		on_overlap_stop: (data: GridsterCollisionData) => void,
		on_overlap: (data: GridsterCollisionData) => void
	}

	declare interface GridsterCollisionData {
		area: number,
		area_coords: GridsterCoords,
		region: string,
		coords: GridsterCoords,
		player_coords: GridsterCoords,
		el: HTMLElement
	}

	declare interface GridsterCoords {
		col: number,
		row: number,
		size_x: number,
		size_y: number
	}

	declare interface GridsterOptions {
		widget_selector?: string | HTMLElement[],
		widget_margins?: number[],
		widget_base_dimensions?: number[],
		extra_cols?: number,
		extra_rows?: number,
		min_cols?: number,
		max_cols?: number,
		min_rows?: number,
		max_size_x?: number,
		autogenerate_sytesheet?: boolean,
		avoid_overlapped_widgets?: boolean,
		serialize_params?: ($w: JQuery, wgd: GridsterCoords) => any,
		collision?: GridsterCollision,
		draggable?: GridsterDraggable,
		namespace?: string,
		autogenerate_stylesheet?: boolean,
		resize?: GridsterResizable
	}

	declare interface JQuery {
		gridster(options?: GridsterOptions): JQuery
	}

	declare interface Gridster {
		add_widget(
		html: string, size_x?: number, size_y?: number, col?: number, row?: number
	): JQuery,
		add_widget(
		html: HTMLElement, size_x?: number, size_y?: number, col?: number, row?: number
	): JQuery,
		add_widget(
		html: JQuery, size_x?: number, size_y?: number, col?: number, row?: number
	): JQuery,
		get_highest_occupied_cell(): GridsterCoords,
		resize_widget(
		$widget: JQuery, size_x?: number, size_y?: number, callback?: (size_x: number, size_y: number) => void
	): JQuery,
		resize_widget_dimensions(options: GridsterOptions): Gridster,
		remove_widget(
		el: HTMLElement, silent?: boolean, callback?: (el: HTMLElement) => void
	): Gridster,
		remove_widget(el: HTMLElement, callback: (el: HTMLElement) => void): Gridster,
		remove_widget(el: JQuery, silent?: boolean, callback?: (el: HTMLElement) => void): Gridster,
		remove_widget(el: JQuery, callback: (el: HTMLElement) => void): Gridster,
		set_widget_min_size(widget: number, size: number[]): Gridster,
		serialize<T>($widgets?: HTMLElement[]): T[],
		serialize_changed<T>(): T[],
		enable(): Gridster,
		disable(): Gridster,
		options: GridsterOptions
	}

			
}
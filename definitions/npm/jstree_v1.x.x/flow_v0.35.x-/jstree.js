

declare module 'jstree' {
		declare interface JQueryStatic {
		jstree?: JSTreeStatic
	}

	declare interface JQuery {
		jstree(): JSTree,
		jstree(options: JSTreeStaticDefaults): JSTree,
		jstree(arg: boolean): JSTree,
		jstree(...args: any[]): any
	}

	declare interface JSTreeStatic {
		version: string,
		defaults: JSTreeStaticDefaults,
		plugins: any[],
		path: string,
		idregex: any,
		root: string,
		create(el: HTMLElement | JQuery | string, options?: JSTreeStaticDefaults): JSTree,
		destroy(): void,
		core(id: number): void,
		reference(needle: HTMLElement | JQuery | string): JSTree
	}

	declare interface JSTreeStaticDefaults {
		plugins: string[],
		core: JSTreeStaticDefaultsCore,
		checkbox?: JSTreeStaticDefaultsCheckbox,
		contextmenu?: JSTreeStaticDefaultsContextMenu,
		dnd?: JSTreeStaticDefaultsDragNDrop,
		massload?: JSTreeStaticDefaultsMassload,
		search?: JSTreeStaticDefaultsSearch,
		sort?: (x: any, y: any) => number,
		state?: JSTreeStaticDefaultsState,
		types?: any,
		unique?: JSTreeStaticDefaultsUnique
	}

	declare interface JSTreeStaticDefaultsCore {
		data?: any,
		strings?: any,
		check_callback?: any,
		error: () => any,
		animation?: any,
		multiple?: boolean,
		themes?: JSTreeStaticDefaultsCoreThemes,
		expand_selected_onload?: boolean,
		worker?: boolean,
		force_text?: boolean,
		dblclick_toggle?: boolean
	}

	declare interface JSTreeStaticDefaultsCoreThemes {
		name?: string,
		url?: string,
		dir?: string,
		dots?: boolean,
		icons?: boolean,
		stripes?: boolean,
		variant?: any,
		responsive?: boolean
	}

	declare interface JSTreeStaticDefaultsCheckbox {
		visible: boolean,
		three_state: boolean,
		whole_node: boolean,
		keep_selected_style: boolean,
		cascade: boolean,
		tie_selection: boolean
	}

	declare interface JSTreeStaticDefaultsContextMenu {
		select_node: boolean,
		show_at_node: boolean,
		items: any
	}

	declare interface JSTreeStaticDefaultsDragNDrop {
		copy: boolean,
		open_timeout: number,
		is_draggable: boolean,
		check_while_dragging: boolean,
		always_copy: boolean,
		inside_pos: any,
		drag_selection: boolean,
		touch: boolean,
		large_drop_target: boolean,
		large_drag_target: boolean,
		use_html5: boolean
	}

	declare interface JSTreeStaticDefaultsMassload {
		url: any,
		data: any
	}

	declare interface JSTreeStaticDefaultsSearch {
		ajax: any,
		fuzzy: boolean,
		case_sensitive: boolean,
		show_only_matches: boolean,
		show_only_matches_children: boolean,
		close_opened_onclear: boolean,
		search_leaves_only: boolean,
		search_callback: any
	}

	declare interface JSTreeStaticDefaultsState {
		key: string,
		events: string,
		ttl: any,
		filter: any
	}

	declare interface JSTreeStaticDefaultsUnique {
		case_sensitive: boolean,
		duplicate: (name: string, counter: number) => string
	}

	declare interface JSTree {
		plugin: (deco: string, opts?: any) => JSTree,
		init: (el: HTMLElement | JQuery | string, options: any) => void,
		destroy: (keep_html?: boolean) => void,
		teardown: () => void,
		bind: () => any,
		unbind: () => any,
		get_container: () => JQuery,
		get_container_ul: () => JQuery,
		get_string: (key: string) => string,
		_firstChild: (dom: HTMLElement) => HTMLElement,
		_nextSibling: (dom: HTMLElement) => HTMLElement,
		_previousSibling: (dom: HTMLElement) => HTMLElement,
		get_node: (obj: any, as_dom?: boolean) => any,
		get_path: (obj: any, glue?: string, ids?: boolean) => any,
		get_next_dom: (obj: any, strict?: boolean) => JQuery,
		get_prev_dom: (obj: any, strict?: boolean) => JQuery,
		get_parent: (obj: any) => string,
		get_children_dom: (obj: any) => JQuery,
		is_parent: (obj: any) => boolean,
		is_loaded: (obj: any) => boolean,
		is_loading: (obj: any) => boolean,
		is_open: (obj: any) => boolean,
		is_closed: (obj: any) => boolean,
		is_leaf: (obj: any) => boolean,
		load_node: (obj: any, callback: (node: any, status: boolean) => void) => boolean,
		_load_nodes: (
		nodes: any[], callback?: (nodes: any[]) => void, is_callback?: boolean, force_reload?: boolean
	) => void,
		load_all: (obj: any, callback: () => void) => void,
		_load_node: (obj: any, callback?: (status: boolean) => void) => boolean,
		_node_changed: (obj: any) => void,
		_append_html_data: (dom: any, data: string, cb: (flag: boolean) => void) => void,
		_append_json_data: (
		dom: any, data: string, cb: (flag: boolean) => void, force_processing: boolean
	) => void,
		_parse_model_from_html: (d: JQuery, p?: string, ps?: any[]) => string,
		_parse_model_from_flat_json: (d: any, p?: string, ps?: any[]) => string,
		_parse_model_from_json: (d: any, p?: string, ps?: any[]) => string,
		_redraw: () => void,
		redraw: (full?: boolean) => void,
		draw_children: (node: any) => void,
		redraw_node: (node: any, deep: boolean, is_callback: boolean, force_render: boolean) => void,
		open_node: (obj: any, callback?: any, animation?: any) => void,
		_open_to: (obj: any) => void,
		close_node: (obj: any, animation?: any) => void,
		toggle_node: (obj: any) => void,
		open_all: (obj?: any, animation?: number, original_obj?: any) => void,
		close_all: (obj?: any, animation?: number) => void,
		is_disabled: (obj: any) => boolean,
		enable_node: (obj: any) => boolean,
		disable_node: (obj: any) => boolean,
		is_hidden: (obj: any) => boolean,
		hide_node: (obj: any, skip_redraw: boolean) => boolean,
		show_node: (obj: any, skip_redraw: boolean) => boolean,
		hide_all: (skip_redraw: boolean) => boolean,
		show_all: (skip_redraw: boolean) => boolean,
		activate_node: (obj: any, e: any) => void,
		hover_node: (obj: any) => void,
		dehover_node: (obj: any) => void,
		select_node: (obj: any, supress_event?: boolean, prevent_open?: boolean, e?: any) => any,
		deselect_node: (obj: any, supress_event?: boolean, e?: any) => void,
		select_all: (supress_event?: boolean) => void,
		deselect_all: (supress_event?: boolean) => void,
		is_selected: (obj: any) => boolean,
		get_selected: (full?: any) => any[],
		get_top_selected: (full?: any) => any[],
		get_bottom_selected: (full?: any) => any[],
		get_state: () => any,
		set_state: (state: any, callback: () => void) => void,
		refresh: (skip_loading: boolean, forget_state: any) => void,
		refresh_node: (obj: any) => void,
		set_id: (obj: any, id: string) => boolean,
		get_text: (obj: any) => string,
		set_text: (obj: any, val: string) => boolean,
		get_json: (obj?: any, options?: JSTreeGetJsonOptions, flat?: boolean) => any,
		create_node: (
		par?: any, node?: any, pos?: any, callback?: any, is_loaded?: boolean
	) => string,
		rename_node: (obj: any, val: string) => boolean,
		delete_node: (obj: any) => boolean,
		check: (chk: string, obj: any, par: any, pos: any, more: any) => boolean,
		last_error: () => any,
		move_node: (
		obj: any, par: any, pos?: any, callback?: (node: any, new_par: any, pos: any) => void, is_loaded?: boolean, skip_redraw?: boolean, origin?: boolean
	) => void,
		copy_node: (
		obj: any, par: any, pos?: any, callback?: (node: any, new_par: any, pos: any) => void, is_loaded?: boolean, skip_redraw?: boolean, origin?: boolean
	) => void,
		cut: (obj: any) => void,
		copy: (obj: any) => void,
		get_buffer: () => Buffer,
		can_paste: () => boolean,
		paste: (obj: any, pos: any) => void,
		clear_buffer: () => void,
		edit: (
		obj: any, default_text?: string, callback?: (node: any, status: boolean, canceled: boolean) => void
	) => void,
		set_theme: (theme_name: string, theme_url?: any) => void,
		get_theme: () => string,
		set_theme_variant: (variant_name: any) => void,
		get_theme_variant: () => string,
		show_stripes: () => void,
		hide_stripes: () => void,
		toggle_stripes: () => void,
		show_dots: () => void,
		hide_dots: () => void,
		toggle_dots: () => void,
		show_icons: () => void,
		hide_icons: () => void,
		toggle_icons: () => void,
		set_icon: (obj: any, icon: string) => void,
		get_icon: (obj: any) => string,
		hide_icon: (obj: any) => void,
		show_icon: (obj: any) => void,
		_undetermined: () => void,
		show_checkboxes: () => void,
		hide_checkboxes: () => void,
		toggle_checkboxes: () => void,
		is_undetermined: (obj: any) => boolean,
		disable_checkbox: (obj: any) => boolean,
		enable_checkbox: (obj: any) => boolean,
		check_node: (obj: any, e: any) => any,
		uncheck_node: (obj: any, e: any) => any,
		check_all: () => any,
		uncheck_all: () => any,
		is_checked: (obj: any) => boolean,
		get_checked: (full: any) => any[],
		get_top_checked: (full: any) => any[],
		get_bottom_checked: (full: any) => any[],
		show_contextmenu: (obj: any, x?: number, y?: number, e?: any) => void,
		_show_contextmenu: (obj: any, x: number, y: number, i: number) => void,
		search: (
		str: string, skip_async?: boolean, show_only_matches?: boolean, inside?: any, append?: boolean, show_only_matches_children?: boolean
	) => void,
		clear_search: () => void,
		_search_open: (d: string[]) => void,
		sort: (obj: any, deep?: boolean) => void,
		save_state: () => void,
		restore_state: () => void,
		clear_state: () => void,
		get_rules: (obj: any) => any,
		get_type: (obj: any, rules?: any) => any,
		set_type: (obj: any, type: string) => any
	}

	declare interface JSTreeGetJsonOptions {
		no_state: boolean,
		no_id: boolean,
		no_children: boolean,
		no_data: boolean,
		no_li_attr: boolean,
		no_a_attr: boolean,
		flat: boolean
	}

	declare interface JSTreeBindOptions {
		inst?: any,
		args?: any,
		rslt?: any,
		rlbk?: any
	}

	declare interface Buffer {
		mode: string,
		node: any[],
		inst: any
	}

			
}
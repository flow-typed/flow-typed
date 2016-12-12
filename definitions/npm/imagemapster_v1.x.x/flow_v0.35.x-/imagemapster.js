

declare module 'imagemapster' {
		declare interface JQuery {
		mapster(options?: ImageMapster.Options): JQuery,
		mapster(method: ImageMapster.Select): void,
		mapster(method: ImageMapster.Deselect): void,
		mapster(
		method: ImageMapster.Set, selected: boolean, options: ImageMapster.RenderingOptions
	): JQuery,
		mapster(method: ImageMapster.Set, options: ImageMapster.RenderingOptions): JQuery,
		mapster(method: ImageMapster.Get, key?: string): string | boolean,
		mapster(method: ImageMapster.Highlight, flag?: string | boolean): void,
		mapster(method: ImageMapster.Unbind, preserveState?: boolean): JQuery,
		mapster(method: ImageMapster.Snapshot): JQuery,
		mapster(method: ImageMapster.Rebind, options: ImageMapster.Options): JQuery,
		mapster(
		method: ImageMapster.Resize, width: number, height: number, duration?: number
	): JQuery,
		mapster(method: ImageMapster.Keys, key: string, all?: boolean): string | string[],
		mapster(method: ImageMapster.Keys, all: boolean): string | string[],
		mapster(method: ImageMapster.SetOptions, options?: ImageMapster.Options): JQuery,
		mapster(
		method: ImageMapster.GetOptions, key?: string, effective?: boolean
	): ImageMapster.Options | ImageMapster.AreaRenderingOptions,
		mapster(method: ImageMapster.Tooltip, key?: string): JQuery
	}

			
}

declare module 'npm$namespace$ImageMapster' {
	declare type Select = "select";

	declare type Deselect = "deselect";

	declare type Set = "set";

	declare type Get = "get";

	declare type Highlight = "highlight";

	declare type Unbind = "unbind";

	declare type Resize = "resize";

	declare type Snapshot = "snapshot";

	declare type Rebind = "rebind";

	declare type Keys = "keys";

	declare type SetOptions = "set_options";

	declare type GetOptions = "get_options";

	declare type Tooltip = "tooltip";

	declare type ToolTipCloseEvent = "area-mouseout" | "area-click" | "tooltip-click" | "image-mouseout";

	declare type State = "highlight" | "select";

	declare interface RenderingOptions {
		fade?: boolean,
		fadeDuration?: number,
		highlight?: boolean,
		isSelectable?: boolean,
		isDeselectable?: boolean,
		singleSelect?: boolean,
		staticState?: boolean,
		selected?: boolean,
		altImage?: string,
		altImageFill?: boolean,
		altImageStroke?: boolean,
		altImageOpacity?: number,
		fill?: boolean,
		fillColor?: string,
		fillColorMask?: string,
		fillOpacity?: number,
		stroke?: boolean,
		strokeColor?: string,
		strokeOpacity?: number,
		strokeWidth?: number,
		render_highlight?: string | RenderingOptions,
		render_select?: string | RenderingOptions
	}

	declare interface AreaRenderingOptions {
		key: string,
		includeKeys?: string,
		isMask?: boolean,
		toolTip?: string
	}

	declare interface OnClickData {
		listTarget?: JQuery,
		key: string,
		e: JQueryEventObject,
		selected: boolean
	}

	declare interface OnStateChangeData {
		key: string,
		state: "highlight" | "select",
		selected: boolean
	}

	declare interface OnMouseData {
		key: string,
		selected: boolean,
		e: JQueryEventObject,
		options: AreaRenderingOptions
	}

	declare interface OnGetListData {
		key: string,
		value: string,
		area: any[],
		options: AreaRenderingOptions
	}

	declare interface OnShowToolTipData {
		toolTip: JQuery,
		key: string,
		selected: boolean,
		areaOptions: AreaRenderingOptions
	}

	declare interface Options {
		mapKey?: string,
		mapValue?: string,
		clickNavigate?: boolean,
		listKey?: string,
		listSelectedAttribute?: string,
		listSelectedClass?: string,
		areas?: AreaRenderingOptions[],
		wrapClass?: string | boolean,
		wrapCss?: string | boolean,
		mouseoutDelay?: number,
		sortList?: boolean | "asc" | "desc",
		configTimeout?: number,
		scaleMap?: boolean,
		noHrefIsMask?: boolean,
		boundList?: JQuery,
		showToolTip?: boolean,
		toolTipContainer?: string | JQuery,
		toolTipClose?: ToolTipCloseEvent[],
		onClick?: (data: OnClickData) => void,
		onMouseover?: (data: OnMouseData) => void,
		onMouseout?: (data: OnMouseData) => void,
		onGetList?: (data: OnGetListData) => JQuery,
		onConfigured?: (success: boolean) => void,
		onStateChange?: (data: OnStateChangeData) => void,
		onShowToolTip?: (data: OnShowToolTipData) => void
	}

			
}
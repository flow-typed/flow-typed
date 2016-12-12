

declare module 'perfect-scrollbar' {
		declare interface PerfectScrollbarSettings {
		handlers?: ("click-rail" | "drag-scrollbar" | "keyboard" | "wheel" | "touch" | "selection")[],
		maxScrollbarLength?: number,
		minScrollbarLength?: number,
		scrollXMarginOffset?: number,
		scrollYMarginOffset?: number,
		stopPropagationOnClick?: boolean,
		suppressScrollX?: boolean,
		suppressScrollY?: boolean,
		swipePropagation?: boolean,
		useBothWheelAxes?: boolean,
		wheelPropagation?: boolean,
		wheelSpeed?: number,
		theme?: string
	}

	declare interface JQuery {
		perfectScrollbar(settingOrCommand?: PerfectScrollbarSettings | "update" | "destroy"): JQuery
	}

	declare export function initialize(element: HTMLElement, settings?: PerfectScrollbarSettings): void

	declare export function update(element: HTMLElement): void

	declare export function destroy(element: HTMLElement): void

		
}

declare module 'perfect-scrollbar/jquery' {
			declare function mountJQuery(jQuery: JQueryStatic): void

		declare module.exports: undefined


}
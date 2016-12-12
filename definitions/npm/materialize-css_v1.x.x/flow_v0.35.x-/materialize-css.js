import type { Materialize } from 'npm$namespace$Materialize'

declare module 'materialize-css' {
		declare interface JQuery {
		openFAB(): void,
		closeFAB(): void,
		material_select(): void,
		material_select(method: string): void,
		characterCounter(): JQuery,
		collapsible(options?: Materialize.CollapsibleOptions): JQuery,
		tooltip(options?: Materialize.TooltipOptions | string): JQuery,
		dropdown(options?: Materialize.DropDownOptions): void,
		materialbox(): JQuery,
		slider(options?: Materialize.SliderOptions): JQuery,
		slider(method: string): JQuery,
		carousel(options?: Materialize.CarouselOptions): JQuery,
		carousel(method: string, count: [number]): JQuery,
		leanModal(options?: Materialize.LeanModalOptions): JQuery,
		openModal(options?: Materialize.LeanModalOptions): void,
		closeModal(): void,
		parallax(): JQuery,
		pushpin(options?: Materialize.PushpinOptions): JQuery,
		scrollSpy(options?: Materialize.ScrollSpyOptions): JQuery,
		sideNav(methodOrOptions?: Materialize.SideNavOptions | string): void,
		tabs(method?: string, tab?: string): JQuery
	}

			
}

declare module 'npm$namespace$Materialize' {
		declare interface CollapsibleOptions {
		accordion: boolean
	}

	declare interface TooltipOptions {
		delay: number
	}

	declare interface DropDownOptions {
		inDuration?: number,
		outDuration?: number,
		constrain_width?: boolean,
		hover?: boolean,
		gutter?: number,
		belowOrigin?: boolean,
		alignment?: string
	}

	declare interface SliderOptions {
		indicators?: boolean,
		height?: number,
		transition?: number,
		interval?: number
	}

	declare interface CarouselOptions {
		time_constant?: number,
		dist?: number,
		shift?: number,
		padding?: number,
		full_width?: boolean
	}

	declare interface LeanModalOptions {
		dismissible?: boolean,
		opacity?: number,
		in_duration?: number,
		out_duration?: number,
		ready?: Function,
		complete?: Function
	}

	declare interface PushpinOptions {
		top?: number,
		bottom?: number,
		offset?: number
	}

	declare interface ScrollSpyOptions {
		scrollOffset?: number
	}

	declare interface SideNavOptions {
		menuWidth?: number,
		edge?: string,
		closeOnClick?: boolean
	}

	declare interface ScrollFireOptions {
		selector?: string,
		offset?: number,
		callback?: string
	}

	declare interface Materialize {
		toast(
		message: string | JQuery, displayLength: number, className?: string, completeCallback?: Function
	): void,
		scrollFire(options?: ScrollFireOptions): void,
		showStaggeredList(selector: string): void,
		fadeInImage(selector: string): void,
		updateTextFields(): void
	}

			
}
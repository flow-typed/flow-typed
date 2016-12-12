

declare module 'uikit' {
					declare module.exports: undefined


}

declare module 'npm$namespace$UIkit' {
	declare type CallbackAutoComplete = () => string;

	declare interface ModalElement {
		show(): void,
		hide(): void,
		isActive(): boolean
	}

	declare interface Modal {
		alert(message: string): void,
		confirm(message: string, fn: () => any): void,
		prompt(message: string, fn: (newValue: string) => any): void,
		prompt(message: string, value: string, fn: (newValue: string) => any): void,
		blockUI(content: string): ModalElement,
		(selector: string | JQuery): ModalElement
	}

	declare interface OffCanvas {
		show(selector: string): void,
		hide(force?: boolean): void
	}

	declare interface LightBoxOptions {
		group?: string,
		duration?: number,
		keyboard?: boolean
	}

	declare interface LightBoxItem {
		source: string,
		type: string
	}

	declare interface LightBoxElement {
		show(): void
	}

	declare interface LightBox {
		create(items: Array<LightBoxItem>): LightBoxElement,
		(element: string | JQuery, options?: LightBoxOptions): LightBoxElement
	}

	declare interface AutoCompleteOptions {
		source?: string | string[] | CallbackAutoComplete,
		minLength?: number,
		param?: string,
		delay?: number
	}

	declare interface AutoComplete {
		(element: string | JQuery, options?: AutoCompleteOptions): any
	}

	declare interface DatePickerOptions {
		weekstart?: number,
		i18n?: {
		
	},
		format?: string,
		offsettop?: number,
		minDate?: string | boolean | number,
		maxDate?: string | boolean | number,
		pos?: string
	}

	declare interface DatePicker {
		(element: string | JQuery, options?: DatePickerOptions): any
	}

	declare interface HtmlEditorOptions {
		mode?: string,
		toolbar?: string[],
		maxsplitsize?: number,
		lblPreview?: string,
		lblCodeview?: string
	}

	declare interface HtmlEditor {
		(element: string | JQuery, options?: HtmlEditorOptions): any
	}

	declare interface SliderOptions {
		center?: boolean,
		threshold?: boolean,
		infinite?: boolean,
		activecls?: string,
		autoplay?: boolean,
		pauseOnHover?: boolean,
		autoplayInterval?: number
	}

	declare interface Slider {
		(element: string | JQuery, options?: SliderOptions): any
	}

	declare interface SlideSetOptions {
		default?: number,
		small?: number,
		medium?: number,
		large?: number,
		xlarge?: number,
		animation?: string,
		duration?: number,
		delay?: number,
		filter?: string,
		autoplay?: boolean,
		pauseOnHover?: boolean,
		autoplayInterval?: number
	}

	declare interface SlideSet {
		(element: string | JQuery, options?: SlideSetOptions): any
	}

	declare interface SlideShowOptions {
		animation?: string,
		duration?: number,
		height?: string,
		start?: number,
		autoplay?: boolean,
		pauseOnHover?: boolean,
		autoplayInterval?: number,
		videoautoplay?: boolean,
		videomute?: boolean,
		kenburns?: boolean,
		kenburnsanimations?: string,
		slices?: number
	}

	declare interface SlideShow {
		(element: string | JQuery, options: SlideShowOptions): any
	}

	declare interface ParallaxOptions {
		velocity?: number,
		target?: boolean,
		viewport?: number,
		media?: number | string
	}

	declare interface Parallax {
		(element: string | JQuery, options: ParallaxOptions): any
	}

	declare interface AccordionOptions {
		showfirst?: boolean,
		collapse?: boolean,
		animate?: boolean,
		easing?: string,
		duration?: number,
		toggle?: string,
		containers?: string,
		clsactive?: string
	}

	declare interface Accordion {
		(element: string | JQuery, options: AccordionOptions): any
	}

	declare interface NotifyOptions {
		message?: string,
		status?: string,
		timeout?: number,
		pos?: string
	}

	declare interface Notify {
		(message: string): any,
		(message: string, status: string): any,
		(message: string, options: NotifyOptions): any,
		(options: NotifyOptions): any
	}

	declare interface SearchOptions {
		source?: string,
		minLength?: number,
		param?: string,
		delay?: number
	}

	declare interface Search {
		(element: string | JQuery, options: SearchOptions): any
	}

	declare interface NestableOptions {
		group?: string,
		maxDepth?: number,
		threshold?: number,
		listNodeName?: string,
		itemNodeName?: string,
		listBaseClass?: string,
		listClass?: string,
		listitemClass?: string,
		itemClass?: string,
		dragClass?: string,
		movingClass?: string,
		handleClass?: string,
		collapsedClass?: string,
		placeClass?: string,
		noDragClass?: string,
		emptyClass?: string
	}

	declare interface Nestable {
		(element: string | JQuery, options: NestableOptions): any
	}

	declare interface SortableOptions {
		group?: string,
		animation?: string,
		threshold?: string,
		handleClass?: string,
		dragCustomClass?: string
	}

	declare interface Sortable {
		(element: string | JQuery, options: SortableOptions): any
	}

	declare interface StickyOptions {
		top?: number,
		animation?: string,
		clsinit?: string,
		clsactive?: string,
		clsinactive?: string,
		getWidthFrom?: string,
		media?: number | string,
		target?: boolean,
		showup?: boolean,
		boundary?: boolean | string
	}

	declare interface Sticky {
		(element: string | JQuery, options: StickyOptions): any
	}

	declare interface TimepickerOptions {
		format?: string,
		start?: number,
		end?: number
	}

	declare interface Timepicker {
		(element: string | JQuery, options: TimepickerOptions): any
	}

	declare interface TooltipOptions {
		offset?: number,
		pos?: string,
		animation?: boolean,
		delay?: number,
		cls?: string,
		activeClass?: string
	}

	declare interface Tooltip {
		(element: string | JQuery, options: TooltipOptions): any
	}

	declare interface UploadOptions {
		action?: string,
		single?: boolean,
		param?: string,
		params?: {
		
	},
		allow?: string,
		filelimit?: number,
		type?: string,
		before?: (settings: UploadOptions, files: string | string[]) => any,
		beforeAll?: (files: string | string[]) => any,
		beforeSend?: (xhr: XMLHttpRequest) => any,
		progress?: (percent: number) => any,
		complete?: (response: any, xhr: XMLHttpRequest) => any,
		allcomplete?: (response: any, xhr: XMLHttpRequest) => any,
		notallowed?: (file: string | string[], settings: UploadOptions) => any,
		loadstart?: (event: any) => any,
		load?: (event: any) => any,
		loadend?: (event: any) => any,
		error?: (event: any) => any,
		abort?: (event: any) => any,
		readystatechange?: (event: any) => any
	}

	declare interface Upload {
		(element: string | JQuery, options: UploadOptions): any
	}

			
}
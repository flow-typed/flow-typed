

declare module 'timelinejs3' {
					
}

declare module 'npm$namespace$TL' {
		declare export interface ITimeline {
		new (containerId: string, data: string | ITimelineConfig): ITimeline,
		new (
		containerId: string, data: string | ITimelineConfig, options: ITimelineOptions
	): ITimeline,
		goToId: (id: string | number) => void,
		goTo: (n: number) => void,
		goToStart: () => void,
		goToEnd: () => void,
		goToPrev: () => void,
		goToNext: () => void,
		add: (event: ITimelineSlideData) => void,
		remove: (n: number) => void,
		removeId: (id: string | number) => void,
		getData: (n: number) => ITimelineSlideData,
		getDataById: (id: string | number) => ITimelineSlideData,
		getSlide: (n: number) => ITimelineSlide,
		getSlideById: (id: string | number) => ITimelineSlide,
		getCurrentSlide: () => ITimelineSlide,
		updateDisplay: () => void,
		setConfig: (config: ITimelineConfig) => void,
		showMessage: (msg: string) => void,
		zoomIn: () => void,
		zoomOut: () => void,
		setZoom: (level: number) => void,
		current_id: string,
		_getSlideIndex(id: string | number): number
	}

	declare export interface ITimelineEvents {
		addEventListener(type: string, fn: () => void, context?: any): ITimelineEvents,
		hasEventListeners(type: string): boolean,
		removeEventListener(type: string, fn: () => void, context?: any): ITimelineEvents,
		fireEvent(type: string, data?: any): ITimelineEvents,
		on(type: string, fn: () => void, context?: any): ITimelineEvents,
		off(type: string, fn: () => void, context?: any): ITimelineEvents,
		fire(type: string, data?: any): ITimelineEvents
	}

	declare export interface ITimelineSlide {
		data: ITimelineSlideData
	}

	declare export interface ITimelineConfig {
		events: ITimelineSlideData[],
		title?: ITimelineSlideData,
		eras?: ITimelineEra[],
		scale?: "human" | "cosmological"
	}

	declare export interface ITimelineSlideData {
		start_date?: ITimelineDate,
		end_date?: ITimelineDate,
		text?: ITimelineText,
		media?: ITimelineMedia,
		group?: string,
		display_date?: string,
		background?: {
		url?: string,
		color?: string
	},
		autolink?: boolean,
		unique_id?: string
	}

	declare export interface ITimelineEra {
		start_date: ITimelineDate,
		end_date: ITimelineDate,
		text?: ITimelineText
	}

	declare export interface ITimelineDate {
		year: number,
		month?: number,
		day?: number,
		hour?: number,
		minute?: number,
		second?: number,
		millisecond?: number,
		display_date?: string
	}

	declare export interface ITimelineText {
		headline?: string,
		text?: string
	}

	declare export interface ITimelineMedia {
		url: string,
		caption?: string,
		credit?: string,
		thumbnail?: string
	}

	declare export interface ITimelineOptions {
		debug?: boolean,
		height?: number,
		width?: number,
		is_embed?: boolean,
		hash_bookmark?: boolean,
		default_bg_color?: string,
		scale_factor?: number,
		initial_zoom?: number,
		zoom_sequence?: number[],
		timenav_position?: "bottom" | "top",
		optimal_tick_width?: number,
		base_class?: string,
		timenav_height?: number,
		timenav_height_percentage?: number,
		timenav_mobile_height_percentage?: number,
		timenav_height_min?: number,
		marker_height_min?: number,
		marker_width_min?: number,
		marker_padding?: number,
		start_at_slide?: number,
		start_at_end?: boolean,
		menubar_height?: number,
		use_bc?: boolean,
		duration?: number,
		ease?: () => number,
		dragging?: boolean,
		trackResize?: boolean,
		slide_padding_lr?: number,
		slide_default_fade?: string,
		language?: string,
		ga_property_id?: any,
		track_events?: ("back_to_start" | "nav_next" | "nav_previous" | "zoom_in" | "zoom_out")[],
		script_path?: string
	}

			
}
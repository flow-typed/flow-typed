

declare module 'jquery.pnotify' {
	declare type NoticeTypeOptions = "notice" | "info" | "success" | "error";

	declare type StylingOptions = "brighttheme" | "jqueryui" | "bootstrap2" | "bootstrap3" | "fontawesome";

	declare type StateOptions = "initializing" | "opening" | "open" | "closing" | "closed";

	declare interface PNotifyStack {
		dir1?: string,
		dir2?: string,
		push?: string,
		spacing1?: number,
		spacing2?: number,
		firstpos1?: number,
		firstpos2?: number,
		context?: JQuery,
		modal?: boolean
	}

	declare interface PNotifyLabel {
		redisplay?: string,
		all?: string,
		last?: string,
		close?: string,
		stick?: string
	}

	declare interface PNotifyconfirmButton {
		text?: string,
		addClass?: string,
		promptTrigger?: boolean,
		click: (notice: PNotify, value: any) => void
	}

	declare interface PNotifyconfirm {
		confirm?: boolean,
		prompt?: boolean,
		prompt_class?: string,
		prompt_default?: string,
		prompt_multi_line?: boolean,
		align?: string,
		buttons?: PNotifyconfirmButton[]
	}

	declare interface PNotifyButtons {
		closer?: boolean,
		closer_hover?: boolean,
		sticker?: boolean,
		sticker_hover?: boolean,
		show_on_nonblock?: boolean,
		labels?: {
		close?: string,
		stick?: string,
		unstick?: string
	},
		classes?: {
		closer?: string,
		pin_up?: string,
		pin_down?: string
	}
	}

	declare interface PNotifyOptions {
		title?: string | boolean,
		title_escape?: boolean,
		text?: string | boolean,
		text_escape?: boolean,
		styling?: StylingOptions,
		addclass?: string,
		cornerclass?: string,
		nonblock?: {
		nonblock?: boolean,
		nonblock_opacity?: number
	},
		history?: boolean,
		maxonscreen?: number,
		auto_display?: boolean,
		width?: string,
		min_height?: string,
		type?: NoticeTypeOptions,
		icon?: any,
		animation?: any,
		animate_speed?: string,
		position_animate_speed?: number,
		opacity?: number,
		shadow?: boolean,
		buttons?: {
		closer?: boolean,
		closer_hover?: boolean,
		sticker?: boolean,
		sticker_hover?: boolean
	},
		hide?: boolean,
		delay?: number,
		mouse_reset?: boolean,
		remove?: boolean,
		insert_brs?: boolean,
		stack?: PNotifyStack,
		labels?: PNotifyLabel
	}

	declare interface PNotify {
		state?: StateOptions,
		update(options?: PNotifyOptions): PNotify,
		remove(): void,
		open(): void,
		get(): JQuery
	}

	declare interface PNotifyConstructor {
		new (options?: PNotifyOptions): PNotify,
		removeAll(): void
	}

			
}


declare module 'jquery.timer' {
		declare interface JQueryTimer {
		(action?: Function, time?: Number, autostart?: Boolean): Object,
		set(any: <<UNKNOWN PARAM FORMAT>>): Object,
		once(time: Number): Object,
		play(reset?: Boolean): Object,
		pause(): Object,
		stop(): Object,
		toggle(reset?: Boolean): Object,
		isActive: Boolean,
		remaining: Number
	}

	declare interface JQuery {
		timer: JQueryTimer
	}

	declare interface JQueryStatic {
		timer: JQueryTimer
	}

			
}
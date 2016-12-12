

declare module 'popcorn' {
		declare interface PopcornStatic {
		(callback: Function): PopcornImpl,
		(selector: string, options?: any): PopcornImpl,
		plugin: {
		(pluginName: string, info: PopcornPlugin, manifest?: any),
		debug: boolean,
		errors: any[]
	},
		util: {
		toSeconds(smpte: string, fps?: number): number
	},
		destroy(insntace: PopcornImpl),
		extend(target: string, source: <<UNKNOWN PARAM FORMAT>>, ...rest: any[]),
		forEach(object: any, callback: Function, context?: any),
		getJSONP(url: string, successCallback: Function),
		getScript(url: string, successCallback: Function),
		guid(prefix: string),
		locale: PopcornLocale,
		parser(
		parserName: <<UNKNOWN PARAM FORMAT>>, fn: <<UNKNOWN PARAM FORMAT>>, data: <<UNKNOWN PARAM FORMAT>>
	)
	}

	declare interface PopcornLocale {
		get(): string,
		set(langRegion: string)
	}

	declare interface PopcornImpl {
		media: HTMLMediaElement,
		footnote(data: Footnote),
		autoplay(flag: boolean),
		buffered(): TimeRanges,
		compose(
		name: string, definitionObject: <<UNKNOWN PARAM FORMAT>>, manifest?: <<UNKNOWN PARAM FORMAT>>
	),
		controls(flag: boolean),
		cue(time: string, callback: Function),
		cue(time: number, callback: Function),
		currentTime(time?: string): number,
		currentTime(time?: number): number,
		defaults(pluginName: string, options: <<UNKNOWN PARAM FORMAT>>),
		destroy(),
		disable(pluginName: string),
		duration(): number,
		emit(eventName: string, dataObject?: <<UNKNOWN PARAM FORMAT>>),
		enable(pluginName: string): PopcornImpl,
		exec(time: string, callback: Function),
		exec(time: number, callback: Function),
		listen(eventName: string, callback: Function),
		load(),
		loop(flag: boolean),
		mute(),
		muted(flag: boolean),
		off(eventName: string, callback: Function),
		on(eventName: string, callback: Function),
		pause(time?: number),
		pause(time?: string),
		paused(): boolean,
		play(time?: number),
		play(time?: string),
		playbackRate(rate?: number),
		played(): TimeRanges,
		position(): ClientRect,
		preload(state: string),
		readyState(): number,
		roundTime(): number,
		seekable(): any,
		seeking(): boolean,
		toggle(pluginName: string),
		trigger(eventName: string, dataObject?: <<UNKNOWN PARAM FORMAT>>),
		unlisten(eventName: string, callback: Function),
		unmute(),
		volume(value?: number): number,
		getLastTrackEventId(): string,
		removeTrackEvent(id: string)
	}

	declare interface PopcornPlugin {
		(options: any),
		_setup(track?: TrackEvent),
		_update(track?: TrackEvent),
		_teardown(track?: TrackEvent),
		start(event: any, track?: TrackEvent),
		end(event: any, track?: TrackEvent),
		frame(event: any, track?: TrackEvent),
		toString(): string,
		manifest?: PopcornManifest
	}

	declare interface PopcornManifest {
		about: PopcornManifestAbout,
		options: PopcornManifestOptions
	}

	declare interface PopcornManifestAbout {
		name: string,
		version: string,
		author: string,
		website: string
	}

	declare interface PopcornManifestOptions {
		start: PopcornManifestOption,
		end: PopcornManifestOption,
		target: string,
		text: PopcornManifestOption
	}

	declare interface PopcornManifestOption {
		elem: string,
		type: string,
		label: string
	}

	declare interface Footnote {
		start: number,
		end: number,
		target: string,
		text: string
	}

			
}
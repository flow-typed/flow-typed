

declare module 'soundjs' {
					
}

declare module 'npm$namespace$createjs' {
				declare export class AbstractPlugin  {
		create(src: string, startTime: number, duration: number): AbstractSoundInstance;
		getVolume(): number;
		isPreloadComplete(src: string): boolean;
		isPreloadStarted(src: string): boolean;
		isSupported(): boolean;
		preload(loader: Object): void;
		register(loadItem: string, instances: number): Object;
		removeAllSounds(src: string): void;
		removeSound(src: string): void;
		setMute(value: boolean): boolean;
		setVolume(value: number): boolean
	}

	declare export class AbstractSoundInstance extends EventDispatcher {
		constructor(src: string, startTime: number, duration: number, playbackResource: Object): this;
		duration: number;
		loop: number;
		muted: boolean;
		pan: number;
		paused: boolean;
		playbackResource: Object;
		playState: string;
		position: number;
		src: string;
		uniqueId: number | string;
		volume: number;
		destroy(): void;
		getDuration(): number;
		getLoop(): number;
		getMute(): boolean;
		getPan(): number;
		getPaused(): boolean;
		getPosition(): number;
		getVolume(): number;
		play(
		interrupt?: string | Object, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number
	): AbstractSoundInstance;
		setDuration(value: number): AbstractSoundInstance;
		setLoop(value: number): void;
		setMute(value: boolean): AbstractSoundInstance;
		setPan(value: number): AbstractSoundInstance;
		setPlayback(value: Object): AbstractSoundInstance;
		setPosition(value: number): AbstractSoundInstance;
		setVolume(value: number): AbstractSoundInstance;
		stop(): AbstractSoundInstance
	}

	declare export class FlashAudioLoader extends AbstractLoader {
		flashId: string;
		setFlash(flash: Object): void
	}

	declare export class FlashAudioPlugin extends AbstractPlugin {
		flashReady: boolean;
		showOutput: boolean;
		swfPath: string;
		isSupported(): boolean
	}

	declare export class FlashAudioSoundInstance extends AbstractSoundInstance {
		constructor(src: string, startTime: number, duration: number, playbackResource: Object): this
	}

	declare export class FlashPlugin  {
		constructor(): this;
		buildDate: string;
		flashReady: boolean;
		showOutput: boolean;
		swfPath: string;
		version: string;
		create(src: string): AbstractSoundInstance;
		getVolume(): number;
		isPreloadStarted(src: string): boolean;
		isSupported(): boolean;
		preload(src: string, instance: Object): void;
		register(src: string, instances: number): Object;
		removeAllSounds(): void;
		removeSound(src: string): void;
		setMute(value: boolean): boolean;
		setVolume(value: number): boolean
	}

	declare export class HTMLAudioPlugin extends AbstractPlugin {
		constructor(): this;
		defaultNumChannels: number;
		enableIOS: boolean;
		MAX_INSTANCES: number;
		isSupported(): boolean
	}

	declare export class HTMLAudioSoundInstance extends AbstractSoundInstance {
		constructor(src: string, startTime: number, duration: number, playbackResource: Object): this
	}

	declare export class HTMLAudioTagPool  {
		
	}

	declare export class PlayPropsConfig  {
		delay: number;
		duration: number;
		interrupt: string;
		loop: number;
		offset: number;
		pan: number;
		startTime: number;
		volume: number;
		create(value: PlayPropsConfig | any): PlayPropsConfig;
		set(props: any): PlayPropsConfig
	}

	declare export class Sound extends EventDispatcher {
		activePlugin: Object;
		alternateExtensions: any[];
		defaultInterruptBehavior: string;
		EXTENSION_MAP: Object;
		INTERRUPT_ANY: string;
		INTERRUPT_EARLY: string;
		INTERRUPT_LATE: string;
		INTERRUPT_NONE: string;
		PLAY_FAILED: string;
		PLAY_FINISHED: string;
		PLAY_INITED: string;
		PLAY_INTERRUPTED: string;
		PLAY_SUCCEEDED: string;
		SUPPORTED_EXTENSIONS: string[];
		muted: boolean;
		volume: number;
		capabilities: any;
		createInstance(src: string): AbstractSoundInstance;
		getCapabilities(): Object;
		getCapability(key: string): number | boolean;
		getMute(): boolean;
		getVolume(): number;
		initializeDefaultPlugins(): boolean;
		isReady(): boolean;
		loadComplete(src: string): boolean;
		play(
		src: string, interrupt?: any, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number
	): AbstractSoundInstance;
		registerManifest(manifest: Object[], basePath: string): Object;
		registerPlugins(plugins: any[]): boolean;
		registerSound(
		src: string | Object, id?: string, data?: number | Object, basePath?: string
	): Object;
		registerSounds(sounds: Object[], basePath?: string): Object[];
		removeAllSounds(): void;
		removeManifest(manifest: any[], basePath: string): Object;
		removeSound(src: string | Object, basePath: string): boolean;
		setMute(value: boolean): boolean;
		setVolume(value: number): void;
		stop(): void;
		addEventListener(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): Function;
		addEventListener(
		type: string, listener: (eventObj: Object) => void, useCapture?: boolean
	): Function;
		addEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): Object;
		addEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): Object;
		dispatchEvent(eventObj: Object | string | Event, target?: Object): boolean;
		hasEventListener(type: string): boolean;
		off(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): void;
		off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
		off(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): void;
		off(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): void;
		off(type: string, listener: Function, useCapture?: boolean): void;
		on(
		type: string, listener: (eventObj: Object) => boolean, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Function;
		on(
		type: string, listener: (eventObj: Object) => void, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Function;
		on(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Object;
		on(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, scope?: Object, once?: boolean, data?: any, useCapture?: boolean
	): Object;
		removeAllEventListeners(type?: string): void;
		removeEventListener(
		type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean
	): void;
		removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
		removeEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => boolean
	}, useCapture?: boolean
	): void;
		removeEventListener(
		type: string, listener: {
		handleEvent: (eventObj: Object) => void
	}, useCapture?: boolean
	): void;
		removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
		toString(): string;
		willTrigger(type: string): boolean
	}

	declare export class SoundJS  {
		buildDate: string;
		version: string
	}

	declare export class WebAudioLoader  {
		context: AudioContext
	}

	declare export class WebAudioPlugin extends AbstractPlugin {
		constructor(): this;
		context: AudioContext;
		context: AudioContext;
		dynamicsCompressorNode: DynamicsCompressorNode;
		gainNode: GainNode;
		isSupported(): boolean;
		playEmptySound(): void
	}

	declare export class WebAudioSoundInstance extends AbstractSoundInstance {
		constructor(src: string, startTime: number, duration: number, playbackResource: Object): this;
		context: AudioContext;
		destinationNode: AudioNode;
		gainNode: GainNode;
		panNode: PannerNode;
		sourceNode: AudioNode
	}

	
}
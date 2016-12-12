

declare module 'dojox.av' {
					
}

declare module 'av' {
				declare class _Media  {
		constructor(): this;
		allowFullScreen: boolean;
		allowNetworking: string;
		allowScriptAccess: string;
		autoPlay: Object;
		bufferTime: Object;
		flashMedia: Object;
		id: Object;
		initialVolume: Object;
		isDebug: Object;
		mediaUrl: string;
		minBufferTime: number;
		percentDownloaded: number;
		updateTime: number;
		wmode: string;
		destroy(): void;
		getTime(): any;
		onBuffer(isBuffering: boolean): void;
		onClick(evt: Object): void;
		onDownloaded(percent: number): void;
		onEnd(data: Object): void;
		onError(data: Object, url: String): void;
		onLoad(mov: Object): void;
		onMetaData(data: Object, evt: Object): void;
		onPause(data: Object): void;
		onPlay(data: Object): void;
		onPlayerStatus(data: Object): void;
		onPosition(time: number): void;
		onResize(): void;
		onStart(data: Object): void;
		onStatus(data: Object): void;
		onStop(): void;
		onSwfSized(data: Object): void
	}

	declare class FLAudio  {
		constructor(options: Object): this;
		allowNetworking: string;
		allowScriptAccess: string;
		id: Object;
		initialPan: number;
		initialVolume: number;
		isDebug: Object;
		statusInterval: number;
		destroy(): void;
		doPlay(options: Object): void;
		getPan(options: Object): any;
		getPosition(options: Object): any;
		getVolume(options: Object): any;
		init(): void;
		load(options: Object): any;
		pause(options: Object): void;
		setPan(options: Object): void;
		setVolume(options: Object): void;
		stop(options: Object): void;
		onAllLoaded(): void;
		onComplete(events: any[]): void;
		onError(msg: any): void;
		onID3(evt: any): void;
		onLoad(): void;
		onLoadStatus(events: any[]): void;
		onPlayStatus(events: any[]): void
	}

	declare class FLVideo extends dijit$_Widget, undefined$_Media {
		constructor(options: Object): this;
		allowFullScreen: boolean;
		set(property: "allowFullScreen", value: boolean): void;
		get(property: "allowFullScreen"): boolean;
		watch(
		property: "allowFullScreen", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowNetworking: string;
		set(property: "allowNetworking", value: string): void;
		get(property: "allowNetworking"): string;
		watch(
		property: "allowNetworking", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		allowScriptAccess: string;
		set(property: "allowScriptAccess", value: string): void;
		get(property: "allowScriptAccess"): string;
		watch(
		property: "allowScriptAccess", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		autoPlay: Object;
		set(property: "autoPlay", value: Object): void;
		get(property: "autoPlay"): Object;
		watch(
		property: "autoPlay", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		bufferTime: Object;
		set(property: "bufferTime", value: Object): void;
		get(property: "bufferTime"): Object;
		watch(
		property: "bufferTime", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		flashMedia: Object;
		set(property: "flashMedia", value: Object): void;
		get(property: "flashMedia"): Object;
		watch(
		property: "flashMedia", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		initialVolume: Object;
		set(property: "initialVolume", value: Object): void;
		get(property: "initialVolume"): Object;
		watch(
		property: "initialVolume", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		isDebug: Object;
		set(property: "isDebug", value: Object): void;
		get(property: "isDebug"): Object;
		watch(
		property: "isDebug", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		mediaUrl: string;
		set(property: "mediaUrl", value: string): void;
		get(property: "mediaUrl"): string;
		watch(
		property: "mediaUrl", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		minBufferTime: number;
		set(property: "minBufferTime", value: number): void;
		get(property: "minBufferTime"): number;
		watch(
		property: "minBufferTime", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		percentDownloaded: number;
		set(property: "percentDownloaded", value: number): void;
		get(property: "percentDownloaded"): number;
		watch(
		property: "percentDownloaded", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		updateTime: number;
		set(property: "updateTime", value: number): void;
		get(property: "updateTime"): number;
		watch(
		property: "updateTime", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		wmode: string;
		set(property: "wmode", value: string): void;
		get(property: "wmode"): string;
		watch(
		property: "wmode", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getTime(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		pause(): void;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		play(newUrl: String): void;
		postCreate(): void;
		postMixInProperties(): void;
		seek(time: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		volume(vol: number): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onBuffer(isBuffering: any): void;
		onClick(evt: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onDownloaded(percent: any): void;
		onEnd(data: any): void;
		onError(data: any, url: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onLoad(mov: any): void;
		onMetaData(data: any, evt: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onPause(data: any): void;
		onPlay(data: any): void;
		onPlayerStatus(data: any): void;
		onPosition(time: any): void;
		onResize(): void;
		onShow(): void;
		onStart(data: any): void;
		onStatus(data: any): void;
		onStop(): void;
		onSwfSized(data: any): void
	}

	
}

declare module 'widget' {
				declare class PlayButton extends dijit$_Widget, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setMedia(med: Object): void;
		showPause(): void;
		showPlay(): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onClick(): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onPause(): void;
		onPlay(): void;
		onShow(): void
	}

	declare class ProgressSlider extends dijit$_Widget, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		endDrag(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		handleOut(): void;
		handleOver(): void;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setHandle(time: any): void;
		setLoadedPosition(decimal: any): void;
		setMedia(med: Object, playerWidget: any): void;
		startDrag(): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onDrag(evt: Event): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onResize(playerDimensions: any): void;
		onShow(): void
	}

	declare class Player extends dijit$_Widget, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		playerWidth: number;
		set(property: "playerWidth", value: number): void;
		get(property: "playerWidth"): number;
		watch(
		property: "playerWidth", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		widgetsInTemplate: boolean;
		set(property: "widgetsInTemplate", value: boolean): void;
		get(property: "widgetsInTemplate"): boolean;
		watch(
		property: "widgetsInTemplate", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onResize(evt: any): void;
		onShow(): void
	}

	declare class Status extends dijit$_Widget, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setMedia(med: Object): void;
		setStatus(str: any, isError: any): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toSeconds(time: any): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onBuffer(isBuffering: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onEnd(): void;
		onError(evt: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onLoad(): void;
		onMetaData(data: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onPaused(): void;
		onPlay(): void;
		onPosition(time: any): void;
		onShow(): void;
		onStart(): void;
		onStop(): void
	}

	declare class VolumeButton extends dijit$_Widget, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		endDrag(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		handleOut(): void;
		handleOver(): void;
		isFocusable(): any;
		isLeftToRight(): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setMedia(med: Object): void;
		startDrag(): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateIcon(vol: number): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onDocClick(evt: Event): void;
		onDrag(evt: Event): void;
		onFocus(): void;
		onHide(): void;
		onHideVolume(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onResize(playerDimensions: Object): void;
		onShow(): void;
		onShowVolume(evt: Event): void
	}

	
}

declare module 'dojox/av/_Media' {
					declare module.exports: _Media


}

declare module 'dojox/av/FLAudio' {
					declare module.exports: FLAudio


}

declare module 'dojox/av/FLVideo' {
					declare module.exports: FLVideo


}

declare module 'dojox/av/widget/Player' {
					declare module.exports: Player


}

declare module 'dojox/av/widget/ProgressSlider' {
					declare module.exports: ProgressSlider


}

declare module 'dojox/av/widget/PlayButton' {
					declare module.exports: PlayButton


}

declare module 'dojox/av/widget/Status' {
					declare module.exports: Status


}

declare module 'dojox/av/widget/VolumeButton' {
					declare module.exports: VolumeButton


}
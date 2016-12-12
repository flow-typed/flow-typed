

declare module 'sinon-chrome' {
					
}

declare module 'npm$namespace$SinonChrome' {
			declare export function flush(): void

	declare export function reset(): void

		
}

declare module 'events' {
		declare interface Event {
		trigger(...args: any[]): void,
		triggerAsync(...args: any[]): void,
		applyTrigger(args: any[]): void,
		applyTriggerAsync(args: any[]): void,
		addListener: Sinon.SinonSpy,
		removeListener: Sinon.SinonSpy,
		removeListeners: Sinon.SinonSpy,
		hasListener: Sinon.SinonSpy
	}

			
}

declare module 'alarms' {
					
}

declare module 'app' {
					
}

declare module 'bookmarks' {
					
}

declare module 'browserAction' {
					
}

declare module 'browsingData' {
					
}

declare module 'contentSettings' {
		declare interface StubbedContentSetting {
		clear: Sinon.SinonStub,
		get: Sinon.SinonStub,
		getResourceIdentifiers: Sinon.SinonStub,
		set: Sinon.SinonStub
	}

			
}

declare module 'contextMenus' {
					
}

declare module 'omnibox' {
					
}

declare module 'cookies' {
					
}

declare module 'SinonChrome.debugger' {
					
}

declare module 'declarativeContent' {
					
}

declare module 'desktopCapture' {
					
}

declare module 'downloads' {
					
}

declare module 'extension' {
					
}

declare module 'fontSettings' {
					
}

declare module 'gcm' {
					
}

declare module 'history' {
					
}

declare module 'i18n' {
					
}

declare module 'identity' {
					
}

declare module 'idle' {
					
}

declare module 'management' {
					
}

declare module 'notifications' {
					
}

declare module 'pageCapture' {
					
}

declare module 'permissions' {
					
}

declare module 'power' {
					
}

declare module 'types' {
		declare interface StubbedChromeSetting {
		clear: Sinon.SinonStub,
		get: Sinon.SinonStub,
		set: Sinon.SinonStub,
		onChange: SinonChrome.events.Event
	}

			
}

declare module 'proxy' {
					
}

declare module 'pushMessaging' {
					
}

declare module 'runtime' {
					
}

declare module 'sessions' {
					
}

declare module 'storage' {
		declare interface StubbedStorageArea {
		clear: Sinon.SinonStub,
		get: Sinon.SinonStub,
		getBytesInUse: Sinon.SinonStub,
		remove: Sinon.SinonStub,
		set: Sinon.SinonStub
	}

			
}

declare module 'tabCapture' {
					
}

declare module 'tabs' {
					
}

declare module 'topSites' {
					
}

declare module 'tts' {
					
}

declare module 'ttsEngine' {
					
}

declare module 'webNavigation' {
					
}

declare module 'webRequest' {
					
}

declare module 'windows' {
					
}


declare module 'cordova-plugin-email-composer' {
		declare interface CordovaPluginEmailComposer {
		isAvailable(callback: (isAvailable: boolean) => void, scope?: any): void,
		open(
		options?: ICordovaPluginEmailComposerOpenOptions, callback?: () => void, scope?: any
	): void,
		openDraft(
		options?: ICordovaPluginEmailComposerOpenOptions, callback?: () => void, scope?: any
	): void
	}

	declare interface ICordovaPluginEmailComposerOpenOptions {
		to?: string[],
		body?: string,
		cc?: string[],
		bcc?: string[],
		attachments?: any[],
		subject?: string,
		isHtml?: boolean
	}

	declare interface CordovaPlugins {
		email: CordovaPluginEmailComposer
	}

			
}
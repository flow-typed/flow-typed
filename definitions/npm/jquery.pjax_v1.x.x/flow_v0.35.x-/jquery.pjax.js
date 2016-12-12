

declare module 'jquery.pjax' {
		declare interface PjaxPopStateEventObject {
		direction: string
	}

	declare interface PjaxSettings {
		container?: string,
		push?: boolean,
		replace?: boolean,
		maxCacheLength?: number,
		version?: string | (() => string),
		scrollTo?: number | boolean,
		target?: EventTarget,
		fragment?: string
	}

	declare interface JQuery {
		pjax(delegationSelector: string, options?: PjaxSettings): JQuery,
		pjax(
		delegationSelector: string, containerSelector?: string, options?: PjaxSettings
	): JQuery
	}

	declare interface JQueryStatic {
		pjax: PjaxStatic
	}

	declare interface PjaxStatic {
		defaults: PjaxSettings,
		(options?: PjaxSettings): JQueryXHR,
		click(event: JQueryEventObject, options?: PjaxSettings): void,
		click(
		event: JQueryEventObject, containerSelector?: string, options?: PjaxSettings
	): void,
		submit(event: JQueryEventObject, options?: PjaxSettings): void,
		submit(
		event: JQueryEventObject, containerSelector?: string, options?: PjaxSettings
	): void,
		enable(): void,
		disable(): void,
		reload(container: string, options?: PjaxSettings): JQueryXHR
	}

	declare interface JQuerySupport {
		pjax: boolean
	}

			
}
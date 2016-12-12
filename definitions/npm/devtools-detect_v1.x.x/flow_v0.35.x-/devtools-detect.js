

declare module 'devtools-detect' {
	declare type DevTools = {
		open: boolean,
		orientation: "vertical" | "horizontal"
	};

	declare interface DevToolsEvent {
		detail: DevTools
	}

	declare interface Window {
		devtools: DevTools,
		addEventListener(
		type: "devtoolschange", listener: (ev: DevToolsEvent) => any, useCapture?: boolean
	): void
	}

			
}
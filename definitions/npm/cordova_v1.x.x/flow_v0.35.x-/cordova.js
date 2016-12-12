

declare module 'cordova' {
		declare interface Cordova {
		exec(
		success: (data: any) => any, fail: (err: any) => any, service: string, action: string, args?: any[]
	): void,
		platformId: string,
		version: string,
		define(
		moduleName: string, factory: (require: any, exports: any, module: any) => any
	): void,
		require(moduleName: string): any,
		plugins: CordovaPlugins
	}

	declare interface CordovaPlugins {
		
	}

	declare interface Document {
		addEventListener(type: "deviceready", listener: (ev: Event) => any, useCapture?: boolean): void,
		addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void,
		addEventListener(type: "resume", listener: (ev: Event) => any, useCapture?: boolean): void,
		addEventListener(type: "backbutton", listener: (ev: Event) => any, useCapture?: boolean): void,
		addEventListener(type: "menubutton", listener: (ev: Event) => any, useCapture?: boolean): void,
		addEventListener(type: "searchbutton", listener: (ev: Event) => any, useCapture?: boolean): void,
		addEventListener(
		type: "startcallbutton", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "endcallbutton", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "volumedownbutton", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "volumeupbutton", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		removeEventListener(type: "deviceready", listener: (ev: Event) => any, useCapture?: boolean): void,
		removeEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void,
		removeEventListener(type: "resume", listener: (ev: Event) => any, useCapture?: boolean): void,
		removeEventListener(type: "backbutton", listener: (ev: Event) => any, useCapture?: boolean): void,
		removeEventListener(type: "menubutton", listener: (ev: Event) => any, useCapture?: boolean): void,
		removeEventListener(type: "searchbutton", listener: (ev: Event) => any, useCapture?: boolean): void,
		removeEventListener(
		type: "startcallbutton", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		removeEventListener(
		type: "endcallbutton", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		removeEventListener(
		type: "volumedownbutton", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		removeEventListener(
		type: "volumeupbutton", listener: (ev: Event) => any, useCapture?: boolean
	): void,
		addEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void,
		removeEventListener(type: string, listener: (ev: Event) => any, useCapture?: boolean): void
	}

	declare interface Window {
		cordova: Cordova
	}

	declare interface ArgsCheck {
		checkArgs(argsSpec: string, functionName: string, args: any[], callee?: any): void,
		getValue(value?: any, defaultValue?: any): any,
		enableChecks: boolean
	}

	declare interface UrlUtil {
		makeAbsolute(url: string): string
	}

			declare module.exports: Cordova


}
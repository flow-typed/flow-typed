

declare module 'webcomponents.js' {
		declare interface Element {
		createShadowRoot(): webcomponents.ShadowRootPolyfill,
		shadowRoot?: webcomponents.ShadowRootPolyfill
	}

	declare interface Document {
		registerElement(
		name: string, prototype: webcomponents.CustomElementInit
	): webcomponents.CustomElementConstructor
	}

	declare interface Window {
		CustomElements: webcomponents.CustomElementsPolyfill,
		HTMLImports: webcomponents.HTMLImportsPolyfill,
		WebComponents: webcomponents.Polyfill
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$webcomponents' {
		declare export interface CustomElementInit {
		prototype: HTMLElement,
		extends?: string
	}

	declare export interface CustomElementConstructor {
		new (): HTMLElement
	}

	declare export interface CustomElementsPolyfill {
		hasNative: boolean,
		flags: any,
		ready: boolean,
		useNative: boolean
	}

	declare export interface HTMLImportsPolyfill {
		IMPORT_LINK_TYPE: string,
		isIE: boolean,
		flags: any,
		ready: boolean,
		rootDocument: Document,
		useNative: boolean,
		whenReady(callback: () => void): void
	}

	declare export interface ShadowRootPolyfill {
		innerHTML: string,
		host: Element
	}

	declare export interface Polyfill {
		flags: any
	}

			
}
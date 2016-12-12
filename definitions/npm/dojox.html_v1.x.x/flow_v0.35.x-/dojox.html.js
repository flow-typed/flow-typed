import type { html } from 'npm$namespace$dojox'

declare module 'dojox.html' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface html {
		
	}

			
}

declare module 'html' {
		declare interface ellipsis {
		
	}

	declare interface entities {
		html: any[],
		latin: any[],
		decode(str: any, m: any): void,
		encode(str: any, m: any): void
	}

	declare interface metrics {
		getCachedFontMeasurements(recalculate: any): any,
		getFontMeasurements(): Object,
		getScrollbar(): Object,
		getTextBox(text: String, style: Object, className: String): void,
		initOnFontResize(): void
	}

	declare interface styles {
		entities: Object,
		ext-dojo: Object,
		metrics: Object,
		activeStyleSheet(title: String): void,
		disableStyleSheet(styleSheetName: String): void,
		enableStyleSheet(styleSheetName: String): void,
		getDynamicStyleSheet(styleSheetName: String): any,
		getPreferredStyleSheet(): void,
		getStyleSheet(styleSheetName: String): void,
		getStyleSheets(): any,
		getToggledStyleSheets(): any,
		insertCssRule(selector: String, declaration: String, styleSheetName: String): String,
		modifyCssRule(selector: any, declaration: any, styleSheetName: any): void,
		removeCssRule(selector: String, declaration: String, styleSheetName: String): void
	}

			
}

declare module 'styles' {
		declare interface entities {
		html: any[],
		latin: any[],
		decode(str: any, m: any): void,
		encode(str: any, m: any): void
	}

	declare interface ext_dojo {
		style: Object
	}

	declare interface metrics {
		getCachedFontMeasurements(recalculate: any): any,
		getFontMeasurements(): Object,
		getScrollbar(): Object,
		getTextBox(text: String, style: Object, className: String): void,
		initOnFontResize(): void
	}

		declare class _ContentSetter  {
		constructor(params: Object, node: String): this;
		adjustPaths: boolean;
		cleanContent: boolean;
		content: string;
		executeScripts: boolean;
		extractContent: boolean;
		id: Object;
		node: HTMLElement;
		parseContent: boolean;
		parserScope: string;
		referencePath: string;
		renderStyles: boolean;
		scriptHasHooks: boolean;
		scriptHookReplacement: Object;
		startup: boolean;
		empty(): void;
		set(cont: String, params: Object): any;
		set(cont: HTMLElement, params: Object): any;
		set(cont: NodeList, params: Object): any;
		setContent(): void;
		tearDown(): void;
		onBegin(): void;
		onContentError(err: any): String;
		onEnd(): any;
		onExecError(err: any): String
	}

	
}

declare module '_base' {
				declare class _ContentSetter  {
		constructor(params: Object, node: String): this;
		adjustPaths: boolean;
		cleanContent: boolean;
		content: string;
		executeScripts: boolean;
		extractContent: boolean;
		id: Object;
		node: HTMLElement;
		parseContent: boolean;
		parserScope: string;
		referencePath: string;
		renderStyles: boolean;
		scriptHasHooks: boolean;
		scriptHookReplacement: Object;
		startup: boolean;
		empty(): void;
		set(cont: String, params: Object): any;
		set(cont: HTMLElement, params: Object): any;
		set(cont: NodeList, params: Object): any;
		setContent(): void;
		tearDown(): void;
		onBegin(): void;
		onContentError(err: any): String;
		onEnd(): any;
		onExecError(err: any): String
	}

	
}

declare module 'dojox/html' {
					declare module.exports: html


}

declare module 'dojox/html/ellipsis' {
					declare module.exports: ellipsis


}

declare module 'dojox/html/entities' {
					declare module.exports: entities


}

declare module 'dojox/html/metrics' {
					declare module.exports: metrics


}

declare module 'dojox/html/styles' {
					declare module.exports: styles


}

declare module 'dojox/html/styles._ContentSetter' {
					declare module.exports: _ContentSetter


}

declare module 'dojox/html/styles.ext-dojo' {
					declare module.exports: ext_dojo


}

declare module 'dojox/html/styles.metrics' {
					declare module.exports: metrics


}

declare module 'dojox/html/styles.entities' {
					declare module.exports: entities


}

declare module 'dojox/html/_base._ContentSetter' {
					declare module.exports: _ContentSetter


}
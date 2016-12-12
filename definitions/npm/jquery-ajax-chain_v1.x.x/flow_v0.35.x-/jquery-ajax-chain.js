

declare module 'jquery-ajax-chain' {
		declare interface JQueryStatic {
		AjaxChain: ajaxChain.JQueryAjaxChainStatic
	}

			
}

declare module 'npm$namespace$ajaxChain' {
		declare interface JQueryAjaxChainStatic {
		new (): JQueryAjaxChain
	}

	declare interface JQueryAjaxChain {
		enqueue(confObj: AjaxChainConfiguration | AjaxChainConfiguration[]): JQueryAjaxChain,
		dequeue(): JQueryAjaxChain,
		clearQueue(): JQueryAjaxChain
	}

	declare interface AjaxChainConfiguration {
		ajaxSettings: JQueryAjaxSettings,
		label?: String,
		transform?: (response: any) => String | Object | Object[],
		appendToUrl?: (response: any) => String,
		hasErrors?: (response: any) => any,
		hasCache?: (response: any) => any,
		hasHaltingCapabilities?: (response: any) => Boolean,
		isSkippable?: (response: any) => Boolean
	}

			
}
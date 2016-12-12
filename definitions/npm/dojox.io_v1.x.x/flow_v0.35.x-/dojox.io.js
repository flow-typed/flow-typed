

declare module 'dojox.io' {
					
}

declare module 'io' {
		declare interface httpParse {
		(httpStream: String, topHeaders?: String, partial?: boolean): void
	}

	declare interface xhrMultiPart {
		(args: Object): void
	}

	declare interface xhrWindowNamePlugin {
		(url: String, httpAdapter?: Function, trusted?: boolean): void
	}

	declare interface xhrScriptPlugin {
		(url: String, callbackParamName: String, httpAdapter?: Function): void
	}

	declare interface scriptFrame {
		
	}

	declare interface windowName {
		send(method: String, args: Object): any
	}

			
}

declare module 'proxy' {
		declare interface xip {
		urlLimit: number,
		xipClientUrl: Object,
		createFacade(): any,
		destroyState(stateId: String): void,
		fragmentReceived(frag: any): void,
		fragmentReceivedEvent(evt: any): void,
		frameLoaded(stateId: String): void,
		makeServerUrl(stateId: any, cmd: any, message: any): String,
		receive(stateId: String, urlEncodedData: String): void,
		send(facade: Object): any,
		sendRequest(stateId: any, encodedData: any): void,
		sendRequestPart(stateId: any): void,
		sendRequestStart(stateId: any): void,
		setServerUrl(stateId: any, cmd: any, message: any): void,
		unpackMessage(encodedMessage: any): Object,
		XhrIframeFacade(ifpServerUrl: any): void
	}

			
}

declare module 'xip' {
		declare interface _state {
		
	}

			
}

declare module 'scriptFrame' {
		declare interface _loadedIds {
		
	}

	declare interface _waiters {
		
	}

			
}

declare module 'dojox/io/httpParse' {
					declare module.exports: httpParse


}

declare module 'dojox/io/xhrMultiPart' {
					declare module.exports: xhrMultiPart


}

declare module 'dojox/io/xhrWindowNamePlugin' {
					declare module.exports: xhrWindowNamePlugin


}

declare module 'dojox/io/xhrScriptPlugin' {
					declare module.exports: xhrScriptPlugin


}

declare module 'dojox/io/windowName' {
					declare module.exports: windowName


}

declare module 'dojox/io/scriptFrame' {
					declare module.exports: scriptFrame


}

declare module 'dojox/io/scriptFrame._loadedIds' {
					declare module.exports: _loadedIds


}

declare module 'dojox/io/scriptFrame._waiters' {
					declare module.exports: _waiters


}

declare module 'dojox/io/proxy/xip' {
					declare module.exports: xip


}

declare module 'dojox/io/proxy/xip._state' {
					declare module.exports: _state


}
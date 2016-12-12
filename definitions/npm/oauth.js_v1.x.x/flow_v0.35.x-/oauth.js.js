

declare module 'oauth.js' {
					
}

declare module 'npm$namespace$OAuth' {
	declare type ParameterList = [string, string][];

	declare type ParameterMap = {
		[name: string]: string
	};

	declare type ParameterListOrMap = ParameterList | ParameterMap;

	declare interface Message {
		action: string,
		method: string,
		parameters: ParameterListOrMap
	}

	declare interface Accessor {
		consumerKey: string,
		consumerSecret: string,
		accessorSecret?: string,
		token: string,
		tokenSecret: string
	}

	declare interface Uri {
		source: string,
		protocol: string,
		authority: string,
		userInfo: string,
		user: string,
		password: string,
		host: string,
		port: string,
		relative: string,
		path: string,
		directory: string,
		file: string,
		query: string,
		anchor: string
	}

	declare interface SignatureMethodStatic {
		sign(message: Message, accessor: Accessor): void,
		newMethod(name: string, accessor: Accessor): SignatureMethod,
		REGISTERED: {
		[name: string]: {
		new (): SignatureMethod
	}
	},
		registerMethodClass(names: string[], classConstructor: {
		new (): SignatureMethod
	}): void,
		makeSubclass(
		getSignatureFunction: (baseString: string) => string
	): {
		new (): SignatureMethod
	},
		getBaseString(message: Message): string,
		normalizeUrl(url: string): string,
		parseUri(str: string): Uri,
		normalizeParameters(parameters: ParameterListOrMap): string
	}

	declare interface SignatureMethod {
		getSignature(baseString: string): string,
		key: string,
		sign(message: Message): string,
		initialize(name: string, accessor: Accessor): void
	}

	declare function percentEncode(s: string): string

	declare function percentEncode(s: string[]): string

	declare function decodePercent(s: string): string

	declare function getParameterList(parameters: ParameterListOrMap): ParameterList

	declare function getParameterList(parameters: string): ParameterList

	declare function getParameterMap(parameters: ParameterListOrMap): ParameterMap

	declare function getParameterMap(parameters: string): ParameterMap

	declare function getParameter(parameters: ParameterListOrMap, name: string): string

	declare function getParameter(parameters: string, name: string): string

	declare function formEncode(parameters: ParameterListOrMap): string

	declare function decodeForm(form: string): ParameterList

	declare function setParameter(message: Message, name: string, value: string): void

	declare function setParameters(message: Message, parameters: ParameterListOrMap): void

	declare function setParameters(message: Message, parameters: string): void

	declare function completeRequest(message: Message, accessor: Accessor): void

	declare function setTimestampAndNonce(message: Message): void

	declare function addToURL(url: string, parameters: ParameterListOrMap): string

	declare function getAuthorizationHeader(realm: string, parameters: ParameterListOrMap): string

	declare function getAuthorizationHeader(realm: string, parameters: string): string

	declare function correctTimestampFromSrc(parameterName?: string): void

	declare function correctTimestamp(timestamp: number): void

	declare function timestamp(): number

	declare function nonce(length: number): string

		
}
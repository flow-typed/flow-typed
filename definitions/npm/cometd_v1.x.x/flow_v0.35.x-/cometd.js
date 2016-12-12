

declare module 'cometd' {
		declare interface CometD {
		onListenerException: (
		exception: any, subscriptionHandle: any, isListener: boolean, message: string
	) => void,
		init(options: CometD.ConfigurationOptions): void,
		configure(config: CometD.ConfigurationOptions): void,
		addListener(channel: string, listener: (message: any) => void): void,
		removeListener(listener: (message: any) => void): void,
		clearListeners(): void,
		clearSubscriptions(): void,
		handshake(handshake_params: any): void,
		publish(channel: string, message: any): void,
		disconnect(): void
	}

	declare interface JQueryStatic {
		cometd: CometD
	}

			
}

declare module 'npm$namespace$CometD' {
		declare interface ConfigurationOptions {
		url: string,
		logLevel?: string,
		maxConnections?: number,
		backoffIncrement?: number,
		maxBackoff?: number,
		reverseIncomingExtensions?: boolean,
		maxNetworkDelay?: number,
		requestHeaders?: any,
		appendMessageTypeToURL?: boolean,
		autoBatch?: boolean
	}

			
}
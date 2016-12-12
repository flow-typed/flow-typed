

declare module 'angular-signalr-hub' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ngSignalr' {
		declare interface HubFactory {
		new (hubName: string, options: HubOptions): Hub
	}

	declare interface HubOptions {
		listeners?: {
		[index: string]: (...args: any[]) => void
	},
		methods?: Array<string>,
		rootPath?: string,
		queryParams?: {
		[index: string]: string
	},
		errorHandler?: (error: string) => void,
		logging?: boolean,
		useSharedConnection?: boolean,
		transport?: any,
		stateChanged?: (state: SignalR.StateChanged) => void
	}

		declare class Hub  {
		hubName: string;
		connection: SignalR.Connection;
		proxy: SignalR.Hub.Proxy;
		on(event: string, fn: (...args: any[]) => void): void;
		invoke(method: string, ...args: any[]): JQueryDeferred<any>;
		disconnect(): void;
		connect(): JQueryPromise<any>
	}

	
}
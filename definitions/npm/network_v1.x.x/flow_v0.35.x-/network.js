

declare module 'network' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface INetworkInformationService {
		getNetwork(): string,
		isOnline(): boolean,
		isOffline(): boolean,
		clearOfflineWatch(): void,
		clearOnlineWatch(): void
	}

			
}


declare module 'peerjs' {
					
}

declare module 'npm$namespace$PeerJs' {
		declare interface PeerJSOption {
		key?: string,
		host?: string,
		port?: number,
		path?: string,
		secure?: boolean,
		config?: RTCPeerConnectionConfig,
		debug?: number
	}

	declare interface PeerConnectOption {
		label?: string,
		metadata?: any,
		serialization?: string,
		reliable?: boolean
	}

	declare interface DataConnection {
		send(data: any): void,
		close(): void,
		on(event: string, cb: () => void): void,
		on(event: "data", cb: (data: any) => void): void,
		on(event: "open", cb: () => void): void,
		on(event: "close", cb: () => void): void,
		on(event: "error", cb: (err: any) => void): void,
		off(event: string, fn: Function, once?: boolean): void,
		dataChannel: RTCDataChannel,
		label: string,
		metadata: any,
		open: boolean,
		peerConnection: any,
		peer: string,
		reliable: boolean,
		serialization: string,
		type: string,
		buffSize: number
	}

	declare interface MediaConnection {
		answer(stream?: any): void,
		close(): void,
		on(event: string, cb: () => void): void,
		on(event: "stream", cb: (stream: any) => void): void,
		on(event: "close", cb: () => void): void,
		on(event: "error", cb: (err: any) => void): void,
		off(event: string, fn: Function, once?: boolean): void,
		open: boolean,
		metadata: any,
		peer: string,
		type: string
	}

	declare interface utilSupportsObj {
		audioVideo: boolean,
		data: boolean,
		binary: boolean,
		reliable: boolean
	}

	declare interface util {
		browser: string,
		supports: utilSupportsObj
	}

	declare export interface Peer {
		connect(id: string, options?: PeerJs.PeerConnectOption): PeerJs.DataConnection,
		call(id: string, stream: any, options?: any): PeerJs.MediaConnection,
		on(event: string, cb: () => void): void,
		on(event: "open", cb: (id: string) => void): void,
		on(event: "connection", cb: (dataConnection: PeerJs.DataConnection) => void): void,
		on(event: "call", cb: (mediaConnection: PeerJs.MediaConnection) => void): void,
		on(event: "close", cb: () => void): void,
		on(event: "disconnected", cb: () => void): void,
		on(event: "error", cb: (err: any) => void): void,
		off(event: string, fn: Function, once?: boolean): void,
		disconnect(): void,
		reconnect(): void,
		destroy(): void,
		getConnection(peer: Peer, id: string): any,
		listAllPeers(callback: (peerIds: Array<string>) => void): void,
		id: string,
		connections: any,
		disconnected: boolean,
		destroyed: boolean
	}

			
}


declare module 'freedom' {
					
}

declare module 'npm$namespace$freedom' {
		declare interface EventDispatchFn<T> {
		(eventType: string, value?: T): void
	}

	declare interface EventHandlerFn<T> {
		(eventType: string, handler: (eventData: T) => void): void
	}

	declare interface Error {
		errcode: string,
		message: string
	}

	declare interface OnAndEmit<T, T2> {
		on: EventHandlerFn<T>,
		emit: EventDispatchFn<T2>
	}

	declare interface EventHandler {
		on(t: string, f: Function): void,
		once(t: string, f: Function): void,
		off(t: string, f: Function): void
	}

	declare interface PortModule<T, T2> {
		controlChannel: string
	}

	declare interface ModuleSelfConstructor {
		provideSynchronous: (classFn?: Function) => void,
		provideAsynchronous: (classFn?: Function) => void,
		providePromises: (classFn?: Function) => void
	}

	declare interface ParentModuleThing {
		
	}

	declare interface Logger {
		debug(...args: any[]): void,
		info(...args: any[]): void,
		log(...args: any[]): void,
		warn(...args: any[]): void,
		error(...args: any[]): void
	}

	declare interface Core {
		createChannel(): Promise<ChannelSpecifier>,
		bindChannel(channelIdentifier: string): Promise<Channel>,
		getId(): Promise<string[]>,
		getLogger(tag: string): Promise<Logger>
	}

	declare interface Channel {
		close(): void
	}

	declare interface ChannelSpecifier {
		channel: Channel,
		identifier: string
	}

	declare interface CoreProviderParentApp {
		manifestId: string,
		config: {
		views: {
		[viewName: string]: Object
	}
	},
		global: {
		removeEventListener: (s: string, f: Function, b: boolean) => void
	}
	}

	declare interface FreedomModuleFactoryManager<T> {
		(...args: any[]): T,
		close: (freedomModuleStubInstance?: T) => Promise<void>,
		api: string
	}

	declare interface FreedomInCoreEnvOptions {
		debug?: string,
		logger?: string
	}

	declare interface FreedomInCoreEnv {
		(manifestPath: string, options?: FreedomInCoreEnvOptions): Promise<FreedomModuleFactoryManager<any>>
	}

	declare interface FreedomInModuleEnv {
		(): ParentModuleThing,
		core: FreedomModuleFactoryManager<Core>,
		core.console: FreedomModuleFactoryManager<Console.Console>,
		core.rtcdatachannel: FreedomModuleFactoryManager<RTCDataChannel.RTCDataChannel>,
		core.rtcpeerconnection: FreedomModuleFactoryManager<RTCPeerConnection.RTCPeerConnection>,
		core.storage: FreedomModuleFactoryManager<Storage.Storage>,
		core.tcpsocket: FreedomModuleFactoryManager<TcpSocket.Socket>,
		core.udpsocket: FreedomModuleFactoryManager<UdpSocket.Socket>,
		pgp: FreedomModuleFactoryManager<PgpProvider.PgpProvider>,
		portControl: FreedomModuleFactoryManager<PortControl.PortControl>,
		[moduleName: string]: FreedomModuleFactoryManager<any>
	}

	declare interface Method0<R> {
		(): Promise<R>,
		reckless: () => void
	}

	declare interface Method1<T, R> {
		(a: T): Promise<R>,
		reckless: (a: T) => void
	}

	declare interface Method2<T, U, R> {
		(a: T, b: U): Promise<R>,
		reckless: (a: T, b: U) => void
	}

	declare interface Method3<T, U, V, R> {
		(a: T, b: U, c: V): Promise<R>,
		reckless: (a: T, b: U, c: V) => void
	}

			
}

declare module 'Console' {
		declare interface Console {
		log(source: string, message: string): Promise<void>,
		debug(source: string, message: string): Promise<void>,
		info(source: string, message: string): Promise<void>,
		warn(source: string, message: string): Promise<void>,
		error(source: string, message: string): Promise<void>
	}

			
}

declare module 'RTCDataChannel' {
		declare interface Message {
		text?: string,
		buffer?: ArrayBuffer,
		binary?: Blob
	}

	declare interface RTCDataChannel {
		getLabel(): Promise<string>,
		getOrdered(): Promise<boolean>,
		getMaxPacketLifeTime(): Promise<number>,
		getMaxRetransmits(): Promise<number>,
		getProtocol(): Promise<string>,
		getNegotiated(): Promise<boolean>,
		getId(): Promise<number>,
		getReadyState(): Promise<string>,
		getBufferedAmount(): Promise<number>,
		on(t: "onopen", f: () => void): void,
		on(t: "onerror", f: () => void): void,
		on(t: "onclose", f: () => void): void,
		on(t: "onmessage", f: (m: Message) => void): void,
		on(t: string, f: Function): void,
		close(): Promise<void>,
		getBinaryType(): Promise<string>,
		setBinaryType(type: string): Promise<void>,
		send: freedom.Method1<string, void>,
		sendBuffer: freedom.Method1<ArrayBuffer, void>
	}

			
}

declare module 'RTCPeerConnection' {
		declare interface RTCIceServer {
		urls: string[],
		username?: string,
		credential?: string
	}

	declare interface RTCConfiguration {
		iceServers: RTCIceServer[],
		iceTransports?: string,
		peerIdentity?: string
	}

	declare interface RTCOfferOptions {
		offerToReceiveVideo?: number,
		offerToReceiveAudio?: number,
		voiceActivityDetection?: boolean,
		iceRestart?: boolean
	}

	declare interface RTCSessionDescription {
		type: string,
		sdp: string
	}

	declare interface RTCIceCandidate {
		candidate: string,
		sdpMid?: string,
		sdpMLineIndex?: number
	}

	declare interface OnIceCandidateEvent {
		candidate: RTCIceCandidate
	}

	declare interface RTCDataChannelInit {
		ordered?: boolean,
		maxPacketLifeTime?: number,
		maxRetransmits?: number,
		protocol?: string,
		negotiated?: boolean,
		id?: number
	}

	declare interface RTCPeerConnection {
		createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescription>,
		createAnswer(): Promise<RTCSessionDescription>,
		setLocalDescription(desc: RTCSessionDescription): Promise<void>,
		getLocalDescription(): Promise<RTCSessionDescription>,
		setRemoteDescription(desc: RTCSessionDescription): Promise<void>,
		getRemoteDescription(): Promise<RTCSessionDescription>,
		getSignalingState(): Promise<string>,
		updateIce(configuration: RTCConfiguration): Promise<void>,
		addIceCandidate(candidate: RTCIceCandidate): Promise<void>,
		getIceGatheringState(): Promise<string>,
		getIceConnectionState(): Promise<string>,
		getConfiguration(): Promise<RTCConfiguration>,
		getLocalStreams(): Promise<string[]>,
		getRemoteStreams(): Promise<string[]>,
		getStreamById(id: string): Promise<string>,
		addStream(ref: string): Promise<void>,
		removeStream(ref: string): Promise<void>,
		close(): Promise<void>,
		createDataChannel(label: string, init: RTCDataChannelInit): Promise<string>,
		getStats(selector?: string): Promise<any>,
		on(t: "ondatachannel", f: (d: {
		channel: string
	}) => void): void,
		on(t: "onnegotiationneeded", f: () => void): void,
		on(t: "onicecandidate", f: (d: OnIceCandidateEvent) => void): void,
		on(t: "onsignalingstatechange", f: () => void): void,
		on(t: "onaddstream", f: (d: {
		stream: number
	}) => void): void,
		on(t: "onremovestream", f: (d: {
		stream: number
	}) => void): void,
		on(t: "oniceconnectionstatechange", f: () => void): void,
		on(t: string, f: Function): void
	}

			
}

declare module 'Storage' {
		declare interface Storage {
		keys(): Promise<string[]>,
		get(key: string): Promise<string>,
		set(key: string, value: string): Promise<string>,
		remove(key: string): Promise<string>,
		clear(): Promise<void>
	}

			
}

declare module 'TcpSocket' {
		declare interface DisconnectInfo {
		errcode: string,
		message: string
	}

	declare interface ReadInfo {
		data: ArrayBuffer
	}

	declare interface WriteInfo {
		bytesWritten: number
	}

	declare interface SocketInfo {
		connected: boolean,
		localAddress?: string,
		localPort?: number,
		peerAddress?: string,
		peerPort?: number
	}

	declare interface ConnectInfo {
		socket: number,
		host: string,
		port: number
	}

	declare interface Socket {
		listen(address: string, port: number): Promise<void>,
		connect(hostname: string, port: number): Promise<void>,
		secure(): Promise<void>,
		write: freedom.Method1<ArrayBuffer, WriteInfo>,
		pause: freedom.Method0<void>,
		resume: freedom.Method0<void>,
		getInfo(): Promise<SocketInfo>,
		close(): Promise<void>,
		on(type: "onConnection", f: (i: ConnectInfo) => void): void,
		on(type: "onData", f: (i: ReadInfo) => void): void,
		off(type: "onData", f: (i: ReadInfo) => void): void,
		on(type: "onDisconnect", f: (i: DisconnectInfo) => void): void,
		on(eventType: string, f: (i: Object) => void): void,
		off(eventType: string, f: (i: Object) => void): void
	}

			
}

declare module 'UdpSocket' {
		declare interface SocketInfo {
		localAddress: string,
		localPort: number
	}

	declare interface RecvFromInfo {
		resultCode: number,
		address: string,
		port: number,
		data: ArrayBuffer
	}

	declare interface Implementation {
		bind(address: string, port: number, continuation: () => void): void,
		sendTo(
		data: ArrayBuffer, address: string, port: number, continuation: (bytesWritten: number) => void
	): void,
		destroy(continuation: () => void): void,
		getInfo(continuation: (socketInfo: SocketInfo) => void): void
	}

	declare interface Socket {
		bind: (address: string, port: number) => Promise<void>,
		sendTo: freedom.Method3<ArrayBuffer, string, number, number>,
		destroy: () => Promise<void>,
		on: (name: string, listener: Function) => void,
		getInfo: () => Promise<SocketInfo>
	}

			
}

declare module 'PgpProvider' {
		declare interface PublicKey {
		key: string,
		fingerprint: string,
		words: string[]
	}

	declare interface KeyFingerprint {
		fingerprint: string,
		words: string[]
	}

	declare interface VerifyDecryptResult {
		data: ArrayBuffer,
		signedBy: string[]
	}

	declare interface PgpProvider {
		setup(passphrase: string, userid: string): Promise<void>,
		clear(): Promise<void>,
		exportKey(): Promise<PublicKey>,
		getFingerprint(publicKey: string): Promise<KeyFingerprint>,
		ecdhBob(curve: string, pubKey: string): Promise<ArrayBuffer>,
		signEncrypt(data: ArrayBuffer, encryptKey?: string, sign?: boolean): Promise<ArrayBuffer>,
		verifyDecrypt(data: ArrayBuffer, verifyKey?: string): Promise<VerifyDecryptResult>,
		armor(data: ArrayBuffer, type?: string): Promise<string>,
		dearmor(data: string): Promise<ArrayBuffer>
	}

			
}

declare module 'PortControl' {
		declare interface Mapping {
		internalIp: string,
		internalPort: number,
		externalIp?: string,
		externalPort: number,
		lifetime: number,
		protocol: string,
		timeoutId?: number,
		nonce?: number[],
		errInfo?: string
	}

	declare interface ActiveMappings {
		[extPort: string]: Mapping
	}

	declare interface ProtocolSupport {
		natPmp: boolean,
		pcp: boolean,
		upnp: boolean
	}

	declare interface PortControl {
		addMapping(intPort: number, extPort: number, lifetime: number): Promise<Mapping>,
		deleteMapping(extPort: number): Promise<boolean>,
		probeProtocolSupport(): Promise<ProtocolSupport>,
		probePmpSupport(): Promise<boolean>,
		addMappingPmp(intPort: number, extPort: number, lifetime: number): Promise<Mapping>,
		deleteMappingPmp(extPort: number): Promise<boolean>,
		probePcpSupport(): Promise<boolean>,
		addMappingPcp(intPort: number, extPort: number, lifetime: number): Promise<Mapping>,
		deleteMappingPcp(extPort: number): Promise<boolean>,
		probeUpnpSupport(): Promise<boolean>,
		addMappingUpnp(
		intPort: number, extPort: number, lifetime: number, controlUrl?: string
	): Promise<Mapping>,
		deleteMappingUpnp(extPort: number): Promise<boolean>,
		getActiveMappings(): Promise<ActiveMappings>,
		getPrivateIps(): Promise<string[]>,
		close(): Promise<void>
	}

			
}

declare module 'Social' {
		declare interface ClientState {
		userId: string,
		clientId: string,
		status: string,
		timestamp: number
	}

	declare interface UserProfile {
		userId: string,
		name: string,
		status?: number,
		url?: string,
		imageData?: string,
		timestamp?: number
	}

	declare interface Users {
		[userId: string]: UserProfile
	}

	declare interface Clients {
		[clientId: string]: ClientState
	}

	declare interface IncomingMessage {
		from: ClientState,
		message: string
	}

	declare interface LoginRequest {
		agent: string,
		version: string,
		url: string,
		interactive: boolean,
		rememberLogin: boolean
	}

	declare interface Social {
		on(eventType: string, f: Function): void,
		on(eventType: "onMessage", f: (message: IncomingMessage) => void): void,
		on(eventType: "onUserProfile", f: (profile: UserProfile) => void): void,
		on(eventType: "onClientState", f: (status: ClientState) => void): void,
		once(eventType: string, f: Function): void,
		login(loginRequest: LoginRequest): Promise<ClientState>,
		getUsers(): Promise<Users>,
		getClients(): Promise<Clients>,
		sendMessage(destinationId: string, message: string): Promise<void>,
		logout(): Promise<void>,
		clearCachedCredentials(): Promise<void>
	}

			
}
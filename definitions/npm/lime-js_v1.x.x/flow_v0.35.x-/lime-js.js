

declare module 'lime-js' {
					
}

declare module 'npm$namespace$Lime' {
		declare interface Envelope {
		id?: string,
		from?: string,
		to?: string,
		pp?: string,
		metadata?: any
	}

	declare interface Reason {
		code: number,
		description?: string
	}

	declare interface Message {
		type: string,
		content: any
	}

	declare interface Notification {
		event: string,
		reason?: Reason
	}

	declare interface Command {
		uri?: string,
		type?: string,
		resource?: any,
		method: string,
		status?: string,
		reason?: Reason
	}

	declare interface Session {
		state: string,
		encryptionOptions?: string[],
		encryption?: string,
		compressionOptions?: string[],
		compression?: string,
		scheme?: string,
		authentication?: any,
		reason?: Reason
	}

	declare interface IMessageChannel {
		sendMessage(message: Message): void,
		onMessage: (message: Message) => any
	}

	declare interface ICommandChannel {
		sendCommand(command: Command): void,
		onCommand: (command: Command) => any
	}

	declare interface INotificationChannel {
		sendNotification(notification: Notification): void,
		onNotification: (notification: Notification) => any
	}

	declare interface ISessionChannel {
		sendSession(session: Session): void,
		onSession: (session: Session) => any
	}

	declare interface ISessionListener {
		(session: Session): void
	}

	declare interface Transport {
		send(envelope: Envelope): void,
		onEnvelope: (envelope: Envelope) => any,
		open(uri: string): void,
		close(): void,
		getSupportedCompression(): string[],
		setCompression(compression: string): void,
		compression: string,
		getSupportedEncryption(): string[],
		setEncryption(encryption: string): void,
		encryption: string
	}

	declare interface ITransportEnvelopeListener {
		(envelope: Envelope): void
	}

	declare interface ITransportStateListener {
		onOpen: () => void,
		onClose: () => void,
		onError: (error: string) => void
	}

		declare class NotificationEvent  {
		accepted: string;
		validated: string;
		authorized: string;
		dispatched: string;
		received: string;
		consumed: string
	}

	declare class CommandMethod  {
		get: string;
		set: string;
		delete: string;
		observe: string;
		subscribe: string
	}

	declare class CommandStatus  {
		success: string;
		failure: string
	}

	declare class SessionState  {
		new: string;
		negotiating: string;
		authenticating: string;
		established: string;
		finishing: string;
		finished: string;
		failed: string
	}

	declare class SessionEncryption  {
		none: string;
		tls: string
	}

	declare class SessionCompression  {
		none: string;
		gzip: string
	}

	declare class Authentication  {
		scheme: string;
		guest: string;
		plain: string;
		transport: string;
		key: string
	}

	declare class GuestAuthentication extends Authentication {
		scheme: string
	}

	declare class TransportAuthentication extends Authentication {
		scheme: string
	}

	declare class PlainAuthentication extends Authentication {
		scheme: string;
		password: string
	}

	declare class KeyAuthentication extends Authentication {
		scheme: string;
		key: string
	}

	declare class Channel  {
		constructor(transport: Transport, autoReplyPings: boolean, autoNotifyReceipt: boolean): this;
		sendMessage(message: Message): void;
		onMessage(message: Message): void;
		sendCommand(command: Command): void;
		onCommand(command: Command): void;
		sendNotification(notification: Notification): void;
		onNotification(notification: Notification): void;
		sendSession(session: Session): void;
		onSession(session: Session): void;
		transport: Transport;
		remoteNode: string;
		localNode: string;
		sessionId: string;
		state: string
	}

	declare class ClientChannel extends Channel {
		constructor(transport: Transport, autoReplyPings?: boolean, autoNotifyReceipt?: boolean): this;
		startNewSession(): void;
		negotiateSession(sessionCompression: string, sessionEncryption: string): void;
		authenticateSession(identity: string, authentication: Authentication, instance: string): void;
		sendFinishingSession(): void;
		onSessionNegotiating(session: Session): void;
		onSessionAuthenticating(session: Session): void;
		onSessionEstablished(session: Session): void;
		onSessionFinished(session: Session): void;
		onSessionFailed(session: Session): void
	}

	declare class ClientChannelExtensions  {
		establishSession(
		clientChannel: ClientChannel, compression: string, encryption: string, identity: string, authentication: Authentication, instance: string, callback: (error: Error, session: Session) => any
	): void
	}

	declare class WebSocketTransport extends Transport {
		webSocket: WebSocket;
		constructor(traceEnabled?: boolean): this;
		send(envelope: Envelope): void;
		onEnvelope(envelope: Envelope): void;
		open(uri: string): void;
		close(): void;
		getSupportedCompression(): string[];
		setCompression(compression: string): void;
		compression: string;
		getSupportedEncryption(): string[];
		setEncryption(encryption: string): void;
		encryption: string;
		onOpen(): void;
		onClose(): void;
		onError(error: string): void
	}

	
}
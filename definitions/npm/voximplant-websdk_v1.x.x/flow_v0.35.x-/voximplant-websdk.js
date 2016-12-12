

declare module 'voximplant-websdk' {
					declare module.exports: undefined


}

declare module 'Events' {
		declare interface AuthResult {
		code?: number,
		displayName?: string,
		key?: string,
		options?: Object,
		result: boolean
	}

	declare interface ConnectionClosed {
		
	}

	declare interface ConnectionEstablished {
		
	}

	declare interface ConnectionFailed {
		message: string
	}

	declare interface IncomingCall {
		call: Call,
		headers?: Object
	}

	declare interface MicAccessResult {
		result: boolean
	}

	declare interface NetStatsReceived {
		stats: NetworkInfo
	}

	declare interface PlaybackFinished {
		
	}

	declare interface SDKReady {
		version: string
	}

	declare interface SourcesInfoUpdated {
		
	}

			
}

declare module 'CallEvents' {
		declare interface Connected {
		call: Call,
		headers?: Object
	}

	declare interface Disconnected {
		call: Call,
		headers?: Object
	}

	declare interface Failed {
		call: Call,
		code: number,
		headers?: Object,
		reason: string
	}

	declare interface ICETimeout {
		call: Call
	}

	declare interface InfoReceived {
		body: string,
		call: Call,
		headers?: Object,
		mimeType: string
	}

	declare interface MessageReceived {
		call: Call,
		text: string
	}

	declare interface ProgressToneStart {
		call: Call
	}

	declare interface ProgressToneStop {
		call: Call
	}

	declare interface TransferComplete {
		call: Call
	}

	declare interface TransferFailed {
		call: Call
	}

			
}

declare module 'IMEvents' {
		declare interface ChatHistoryReceived {
		id: string,
		message_id: string,
		messages: IMHistoryMessage[]
	}

	declare interface ChatRoomBanList {
		participants: ChatRoomParticipant[],
		room: string
	}

	declare interface ChatRoomCreated {
		room: string
	}

	declare interface ChatRoomError {
		code: string,
		operation: string,
		room: string,
		text: string
	}

	declare interface ChatRoomHistoryReceived {
		message_id: string,
		messages: VoxImplant.IMHistoryMessage[],
		room: string
	}

	declare interface ChatRoomInfo {
		features: number,
		info: ChatRoomInfo,
		room: string,
		room_name: string
	}

	declare interface ChatRoomInvitation {
		body: string,
		from: string,
		password: string,
		reason: string,
		room: string
	}

	declare interface ChatRoomInviteDeclined {
		invitee: string,
		reason: string,
		room: string
	}

	declare interface ChatRoomMessageModified {
		content: string,
		from: string,
		message_id: string,
		private_message: string,
		resource: string,
		room: string,
		timestamp: string
	}

	declare interface ChatRoomMessageNotModified {
		code: number,
		message_id: string,
		private_message: string,
		room: string
	}

	declare interface ChatRoomMessageReceived {
		content: string,
		from: string,
		message_id: string,
		private_message: string,
		resource: string,
		room: string,
		timestamp: string
	}

	declare interface ChatRoomMessageRemoved {
		from: string,
		message_id: string,
		private_message: string,
		resource: string,
		room: string,
		timestamp: string
	}

	declare interface ChatRoomNewParticipant {
		displayName: string,
		participant: string,
		room: string
	}

	declare interface ChatRoomOperation {
		room: string,
		operation: ChatRoomOperationType,
		result: boolean
	}

	declare interface ChatRoomParticipantExit {
		participant: string,
		room: string
	}

	declare interface ChatRoomParticipants {
		participants: ChatRoomParticipant[],
		room: string
	}

	declare interface ChatRoomPresenceUpdate {
		message: string,
		participant: ParticipantInfo,
		presence: UserStatuses,
		room: string
	}

	declare interface ChatRoomStateUpdate {
		from: string,
		resource: string,
		room: string,
		state: ChatStateType
	}

	declare interface ChatRoomSubjectChange {
		id: string,
		resource: string,
		room: string,
		subject: string
	}

	declare interface ChatRoomsDataReceived {
		rooms: ChatRoom[]
	}

	declare interface ChatStateUpdate {
		id: string,
		resource?: string,
		state: ChatStateType
	}

	declare interface MessageModified {
		content: string,
		id: string,
		message_id: string,
		to: string
	}

	declare interface MessageNotModified {
		code: number,
		message_id: string,
		to: string
	}

	declare interface MessageReceived {
		content: string,
		id: string,
		message_id: string,
		resource?: string,
		to: string
	}

	declare interface MessageRemoved {
		id: string,
		message_id: string,
		to: string
	}

	declare interface MessageStatus {
		id: string,
		message_id: string,
		resource?: string,
		type: MessageEventType
	}

	declare interface PresenceUpdate {
		id: string,
		message: string,
		presence: UserStatuses,
		resource?: string
	}

	declare interface RosterItemChange {
		displayName: string,
		groups: string[],
		id: string,
		resource?: string,
		type: RosterItemEvent
	}

	declare interface RosterPresenceUpdate {
		id: string,
		message?: string,
		presence: UserStatuses,
		resource?: string
	}

	declare interface RosterReceived {
		id: string,
		roster: RosterItem[]
	}

	declare interface SubscriptionRequest {
		id: string,
		message?: string,
		resource?: string,
		type: SubscriptionRequestType
	}

	declare interface SystemError {
		errorData: Object,
		errorType: IMErrorType
	}

	declare interface UCConnected {
		
	}

	declare interface UCDisconnected {
		
	}

			
}

declare module 'npm$namespace$VoxImplant' {
	declare type VoxImplantEvent = Events.AuthResult | Events.ConnectionClosed | Events.ConnectionEstablished | Events.ConnectionFailed | Events.IncomingCall | Events.MicAccessResult | Events.NetStatsReceived | Events.PlaybackFinished | Events.SDKReady | Events.SourcesInfoUpdated;

	declare type VoxImplantCallEvent = CallEvents.Connected | CallEvents.Disconnected | CallEvents.Failed | CallEvents.InfoReceived | CallEvents.MessageReceived | CallEvents.ProgressToneStart | CallEvents.ProgressToneStop | CallEvents.TransferComplete | CallEvents.TransferFailed;

	declare type VoxImplantIMEvent = IMEvents.ChatHistoryReceived | IMEvents.ChatRoomBanList | IMEvents.ChatRoomCreated | IMEvents.ChatRoomError | IMEvents.ChatRoomHistoryReceived | IMEvents.ChatRoomInfo | IMEvents.ChatRoomInvitation | IMEvents.ChatRoomInviteDeclined | IMEvents.ChatRoomMessageModified | IMEvents.ChatRoomMessageNotModified | IMEvents.ChatRoomMessageReceived | IMEvents.ChatRoomMessageRemoved | IMEvents.ChatRoomNewParticipant | IMEvents.ChatRoomOperation | IMEvents.ChatRoomParticipantExit | IMEvents.ChatRoomParticipants | IMEvents.ChatRoomPresenceUpdate | IMEvents.ChatRoomStateUpdate | IMEvents.ChatRoomSubjectChange | IMEvents.ChatRoomsDataReceived | IMEvents.ChatStateUpdate | IMEvents.MessageModified | IMEvents.MessageNotModified | IMEvents.MessageReceived | IMEvents.MessageRemoved | IMEvents.MessageStatus | IMEvents.PresenceUpdate | IMEvents.RosterItemChange | IMEvents.RosterPresenceUpdate | IMEvents.RosterReceived | IMEvents.SubscriptionRequest | IMEvents.SystemError | IMEvents.UCConnected | IMEvents.UCDisconnected;

	declare interface Config {
		imXSSprotection?: boolean,
		micRequired?: boolean,
		progressTone?: boolean,
		progressToneCountry?: string,
		showDebugInfo?: boolean,
		showFlashSettings?: boolean,
		swfContainer?: string,
		useFlashOnly?: boolean,
		useRTCOnly?: boolean,
		videoConstraints?: VideoSettings | boolean,
		videoSupport?: boolean
	}

	declare interface LoginOptions {
		receiveCalls?: boolean,
		serverPresenceControl?: boolean
	}

	declare interface AudioOutputInfo {
		id: number | string,
		name: string
	}

	declare interface AudioSourceInfo {
		id: number | string,
		name: string
	}

	declare interface VideoSourceInfo {
		id: number | string,
		name: string
	}

	declare interface ChatRoom {
		id: string,
		pass: string
	}

	declare interface ChatRoomInfo {
		creationdate: string,
		description: string,
		occupants: number,
		subject: string
	}

	declare interface ChatRoomParticipant {
		id: string,
		name: string,
		owner?: boolean
	}

	declare interface IMHistoryMessage {
		body: string,
		from: string,
		id: string,
		time: string
	}

	declare interface ParticipantInfo {
		affiliation: number,
		flags: number,
		id: string,
		reason: string,
		resource: string,
		role: number
	}

	declare interface Client {
		addEventListener(
		eventName: VoxImplant.Events | VoxImplant.IMEvents, eventHandler: (eventObject: VoxImplantEvent | VoxImplantIMEvent) => any
	): void,
		addRosterItem(user_id: string, name: string, group?: string): void,
		addRosterItemGroup(user_id: string, group: string): void,
		attachRecordingDevice(successCallback?: () => any, failedCallback?: () => any): void,
		audioOutputs(): AudioOutputInfo[],
		audioSources(): AudioSourceInfo[],
		banChatRoomUser(room: string, user_id: string, reason?: string): void,
		call(
		number: string, useVideo?: boolean, customData?: string, extraHeaders?: Object
	): Call,
		config(): Config,
		connect(): void,
		connected(): boolean,
		createChatRoom(pass?: string, users?: string[]): string,
		declineChatRoomInvite(room: string, user_id: string, reason?: string): void,
		detachRecordingDevice(): void,
		disconnect(): void,
		editChatRoomMessage(room: string, message_id: string, msg: string): void,
		editInstantMessage(room: string, message_id: string, msg: string): void,
		getChatRoomHistory(room: string, message_id?: string, direction?: boolean, count?: number): void,
		getInstantMessagingHistory(
		user_id: string, message_id?: string, direction?: boolean, count?: number
	): void,
		init(config?: Config): void,
		inviteToChatRoom(room: string, user_id: string, reason?: string): void,
		isRTCsupported(): boolean,
		joinChatRoom(room: string, pass?: string): void,
		leaveChatRoom(room: string, msg?: string): void,
		login(username: string, password: string, options?: LoginOptions): void,
		loginWithCode(username: string, code: string, options?: LoginOptions): void,
		loginWithOneTimeKey(username: string, hash: string, options?: LoginOptions): void,
		moveRosterItemGroup(user_id: string, groupSrc: string, groupDst: string): void,
		playToneScript(script: string, loop?: boolean): void,
		removeChatRoomMessage(room: string, message_id: string): void,
		removeChatRoomUser(room: string, user_id: string, reason?: string): void,
		removeEventListener(
		eventName: VoxImplant.Events | VoxImplant.IMEvents, eventHandler: () => any
	): void,
		removeInstantMessage(user_id: string, message_id: string): void,
		removeRosterItem(user_id: string): void,
		remoteRosterItemGroup(user_id: string, group: string): void,
		renameRosterItem(user_id: string, name: string): void,
		requestOneTimeLoginKey(username: string): void,
		sendChatRoomMessage(room: string, msg: string): string,
		sendInstantMessage(user_id: string, content: string): string,
		sendVideo(flag: boolean): void,
		setCallActive(call: Call, active: boolean): void,
		setChatRoomState(room: string, status: ChatStateType): void,
		setChatRoomSubject(room: string, subject: string): void,
		setChatState(user_id: string, status: ChatStateType): void,
		setLocalVideoPosition(x: number, y: number): void,
		setLocalVideoSize(width: number, height: number): void,
		setMessageStatus(user_id: string, type: MessageEventType, message_id: string[]): void,
		setOperatorACDStatus(status: OperatorACDStatuses): void,
		setPresenceStatus(status: UserStatuses, msg: string): void,
		setSwfColor(color: string): void,
		setVideoBandwidth(bandwidth: number): void,
		setVideoSettings(
		settings: VideoSettings | FlashVideoSettings, successCallback?: () => any, failedCallback?: () => any
	): void,
		showFlashSettingsPanel(panel?: string): void,
		showLocalVideo(flag: boolean): void,
		stopPlayback(): void,
		transferCall(call1: Call, call2: Call): void,
		unbanChatRoomUser(room: string, user_id: string, reason?: string): void,
		useAudioSource(
		id: number | string, successCallback?: () => any, failedCallback?: () => any
	): void,
		useVideoSource(
		id: number | string, successCallback?: () => any, failedCallback?: () => any
	): void,
		videoSources(): VideoSourceInfo[]
	}

	declare interface Call {
		active(): boolean,
		addEventListener(
		eventName: VoxImplant.CallEvents, eventHandler: (eventObject: VoxImplantCallEvent) => any
	): void,
		answer(customData?: string, extraHeaders?: Object): void,
		decline(extraHeaders?: Object): void,
		displayName(): string,
		getVideoElementId(): string,
		hangup(extraHeaders?: Object): void,
		headers(): Object,
		id(): string,
		muteMicrophone(): void,
		mutePlayback(): void,
		number(): string,
		reject(extraHeaders?: Object): void,
		removeEventListener(eventName: VoxImplant.CallEvents, eventHandler: () => any): void,
		sendInfo(mimeType: string, body: string, extraHeaders?: Object): void,
		sendMessage(msg: string): void,
		sendTone(key: string): void,
		setRemoteVideoPosition(x: number, y: number): void,
		setRemoteVideoSize(width: number, height: number): void,
		setVideoSettings(
		settings: VideoSettings | FlashVideoSettings, successCallback?: () => any, failedCallback?: () => any
	): void,
		showRemoteVideo(flag: boolean): void,
		state(): string,
		unmuteMicrophone(): void,
		unmutePlayback(): void
	}

	declare interface VideoSettings {
		width?: number | any,
		height?: number | any,
		aspectRatio?: number | any,
		frameRate?: number | any,
		facingMode?: string | any,
		deviceId?: string,
		groupId?: string,
		mandatory?: Object,
		optional?: Object
	}

	declare interface FlashVideoSettings {
		bandwidth?: number,
		fps?: number,
		height?: number,
		width?: number,
		keyframeInterval?: number,
		level?: string,
		profile?: string,
		quality?: number
	}

	declare interface NetworkInfo {
		packetLoss: number
	}

	declare interface RosterItem {
		groups: string[],
		id: string,
		name: string,
		resources: string[],
		subscription_type: number
	}

	declare function getInstance(): Client

	declare function version(): String

		
}
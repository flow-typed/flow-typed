

declare module 'chrome-cast' {
					
}

declare module 'cast' {
		declare interface AutoJoinPolicy {
		TAB_AND_ORIGIN_SCOPED: string,
		ORIGIN_SCOPED: string,
		PAGE_SCOPED: string
	}

	declare interface DefaultActionPolicy {
		CREATE_SESSION: string,
		CAST_THIS_TAB: string
	}

	declare interface Capability {
		VIDEO_OUT: string,
		AUDIO_OUT: string,
		VIDEO_IN: string,
		AUDIO_IN: string
	}

	declare interface ErrorCode {
		CANCEL: string,
		TIMEOUT: string,
		API_NOT_INITIALIZED: string,
		INVALID_PARAMETER: string,
		EXTENSION_NOT_COMPATIBLE: string,
		EXTENSION_MISSING: string,
		RECEIVER_UNAVAILABLE: string,
		SESSION_ERROR: string,
		CHANNEL_ERROR: string,
		LOAD_MEDIA_FAILED: string
	}

	declare interface ReceiverAvailability {
		AVAILABLE: string,
		UNAVAILABLE: string
	}

	declare interface SenderPlatform {
		CHROME: string,
		IOS: string,
		ANDROID: string
	}

	declare interface ReceiverType {
		CAST: string,
		HANGOUT: string,
		CUSTOM: string
	}

	declare interface ReceiverAction {
		CAST: string,
		STOP: string
	}

	declare interface SessionStatus {
		CONNECTED: string,
		DISCONNECTED: string,
		STOPPED: string
	}

	declare interface ApiConfig {
		new (
		sessionRequest: chrome.cast.SessionRequest, sessionListener: (session: chrome.cast.Session) => void, receiverListener: (receiverAvailability: chrome.cast.ReceiverAvailability) => void, autoJoinPolicy?: chrome.cast.AutoJoinPolicy, defaultActionPolicy?: chrome.cast.DefaultActionPolicy
	): ApiConfig,
		sessionRequest: chrome.cast.SessionRequest,
		sessionListener: (session: chrome.cast.Session) => void,
		receiverListener: (receiverAvailability: chrome.cast.ReceiverAvailability) => void,
		autoJoinPolicy?: chrome.cast.AutoJoinPolicy,
		defaultActionPolicy: chrome.cast.DefaultActionPolicy
	}

	declare interface Error {
		new (code: chrome.cast.ErrorCode, description?: string, details?: Object): Error,
		code: chrome.cast.ErrorCode,
		description?: string,
		details?: string
	}

	declare interface Image {
		new (url: string): Image,
		url: string,
		height?: number,
		width?: number
	}

	declare interface SenderApplication {
		new (platform: chrome.cast.SenderPlatform): SenderApplication,
		platform: chrome.cast.SenderPlatform,
		url?: string,
		packageId?: string
	}

	declare interface SessionRequest {
		new (
		appId: string, capabilities?: Array<chrome.cast.Capability>, timeout?: number
	): SessionRequest,
		appId: string,
		capabilities: Array<chrome.cast.Capability>,
		requestSessionTimeout: number,
		language?: string
	}

	declare interface Session {
		new (
		sessionId: string, appId: string, displayName: string, appImages: Array<chrome.cast.Image>, receiver: chrome.cast.Receiver
	): Session,
		sessionId: string,
		appId: string,
		displayName: string,
		appImages: Array<chrome.cast.Image>,
		receiver: chrome.cast.Receiver,
		senderApps: Array<chrome.cast.SenderApplication>,
		namespaces: Array<{
		name: string
	}>,
		media: Array<chrome.cast.media.Media>,
		status: chrome.cast.SessionStatus,
		setReceiverVolumeLevel(
		newLevel: number, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		setReceiverMuted(
		muted: boolean, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		leave(
		successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		stop(
		successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		sendMessage(
		namespace: string, message: string, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		addUpdateListener(listener: (isAlive: boolean) => void): void,
		removeUpdateListener(listener: (isAlive: boolean) => void): void,
		addMessageListener(
		namespace: string, listener: (namespace: string, message: string) => void
	): void,
		removeMessageListener(
		namespace: string, listener: (namespace: string, message: string) => void
	): void,
		addMediaListener(listener: (media: chrome.cast.media.Media) => void): void,
		removeMediaListener(listener: (media: chrome.cast.media.Media) => void): void,
		loadMedia(
		loadRequest: chrome.cast.media.LoadRequest, successCallback: (media: chrome.cast.media.Media) => void, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueLoad(
		queueLoadRequest: chrome.cast.media.QueueLoadRequest, successCallback: (media: chrome.cast.media.Media) => void, errorCallback: (error: chrome.cast.Error) => void
	): void
	}

	declare interface Receiver {
		new (
		label: string, friendlyName: string, capabilities?: Array<chrome.cast.Capability>, volume?: chrome.cast.Volume
	): Receiver,
		label: string,
		friendlyName: string,
		capabilities: Array<chrome.cast.Capability>,
		volume: chrome.cast.Volume,
		receiverType: chrome.cast.ReceiverType,
		displayStatus: chrome.cast.ReceiverDisplayStatus
	}

	declare interface ReceiverDisplayStatus {
		new (statusText: string, appImages: Array<chrome.cast.Image>): ReceiverDisplayStatus,
		statusText: string,
		appImages: Array<chrome.cast.Image>
	}

	declare interface Volume {
		new (level?: number, muted?: boolean): Volume,
		level?: number,
		muted?: boolean
	}

	declare export function initialize(
		apiConfig: chrome.cast.ApiConfig, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void

	declare export function requestSession(
		successCallback: (session: chrome.cast.Session) => void, errorCallback: (error: chrome.cast.Error) => void, sessionRequest?: chrome.cast.SessionRequest, label?: string
	): void

	declare export function requestSessionById(sessionId: string): void

	declare export function addReceiverActionListener(
		listener: (
		receiver: chrome.cast.Receiver, receiverAction: chrome.cast.ReceiverAction
	) => void
	): void

	declare export function removeReceiverActionListener(
		listener: (
		receiver: chrome.cast.Receiver, receiverAction: chrome.cast.ReceiverAction
	) => void
	): void

	declare export function logMessage(message: string): void

	declare export function setCustomReceivers(
		receivers: Array<chrome.cast.Receiver>, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void

	declare export function setReceiverDisplayStatus(
		receiver: chrome.cast.Receiver, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void

		
}

declare module 'media' {
		declare interface MediaCommand {
		PAUSE: string,
		SEEK: string,
		STREAM_VOLUME: string,
		STREAM_MUTE: string
	}

	declare interface MetadataType {
		GENERIC: number,
		TV_SHOW: number,
		MOVIE: number,
		MUSIC_TRACK: number,
		PHOTO: number
	}

	declare interface PlayerState {
		IDLE: string,
		PLAYING: string,
		PAUSED: string,
		BUFFERING: string
	}

	declare interface ResumeState {
		PLAYBACK_START: string,
		PLAYBACK_PAUSE: string
	}

	declare interface StreamType {
		BUFFERED: string,
		LIVE: string,
		OTHER: string
	}

	declare interface IdleReason {
		CANCELLED: string,
		INTERRUPTED: string,
		FINISHED: string,
		ERROR: string
	}

	declare interface RepeatMode {
		OFF: string,
		ALL: string,
		SINGLE: string,
		ALL_AND_SHUFFLE: string
	}

	declare interface QueueItem {
		new (mediaInfo: chrome.cast.media.MediaInfo): QueueItem,
		activeTrackIds: Array<Number>,
		autoplay: boolean,
		customData: Object,
		itemId: number,
		media: chrome.cast.media.MediaInfo,
		preloadTime: number,
		startTime: number
	}

	declare interface QueueLoadRequest {
		new (items: Array<chrome.cast.media.QueueItem>): QueueLoadRequest,
		customData: Object,
		items: Array<chrome.cast.media.QueueItem>,
		repeatMode: chrome.cast.media.RepeatMode,
		startIndex: number
	}

	declare interface QueueInsertItemsRequest {
		new (itemsToInsert: Array<chrome.cast.media.QueueItem>): QueueInsertItemsRequest,
		customData: Object,
		insertBefore: number,
		items: Array<chrome.cast.media.QueueItem>
	}

	declare interface QueueRemoveItemsRequest {
		new (itemIdsToRemove: Array<number>): QueueRemoveItemsRequest,
		customData: Object,
		itemIds: Array<number>
	}

	declare interface QueueReorderItemsRequest {
		new (itemIdsToReorder: Array<number>): QueueReorderItemsRequest,
		customData: Object,
		insertBefore: number,
		itemIds: Array<number>
	}

	declare interface QueueUpdateItemsRequest {
		new (itemsToUpdate: Array<chrome.cast.media.QueueItem>): QueueUpdateItemsRequest,
		customData: Object,
		item: Array<chrome.cast.media.QueueItem>
	}

	declare interface TrackType {
		TEXT: string,
		AUDIO: string,
		VIDEO: string
	}

	declare interface TextTrackType {
		SUBTITLES: string,
		CAPTIONS: string,
		DESCRIPTIONS: string,
		CHAPTERS: string,
		METADATA: string
	}

	declare interface TextTrackEdgeType {
		NONE: string,
		OUTLINE: string,
		DROP_SHADOW: string,
		RAISED: string,
		DEPRESSED: string
	}

	declare interface TextTrackWindowType {
		NONE: string,
		NORMAL: string,
		ROUNDED_CORNERS: string
	}

	declare interface TextTrackFontGenericFamily {
		SANS_SERIF: string,
		MONOSPACED_SANS_SERIF: string,
		SERIF: string,
		MONOSPACED_SERIF: string,
		CASUAL: string,
		CURSIVE: string,
		SMALL_CAPITALS: string
	}

	declare interface TextTrackFontStyle {
		NORMAL: string,
		BOLD: string,
		BOLD_ITALIC: string,
		ITALIC: string
	}

	declare interface GetStatusRequest {
		new (): GetStatusRequest,
		customData: Object
	}

	declare interface PauseRequest {
		new (): PauseRequest,
		customData: Object
	}

	declare interface PlayRequest {
		new (): PlayRequest,
		customData: Object
	}

	declare interface SeekRequest {
		new (): SeekRequest,
		currentTime: number,
		resumeState: chrome.cast.media.ResumeState,
		customData: Object
	}

	declare interface StopRequest {
		new (): StopRequest,
		customData: Object
	}

	declare interface VolumeRequest {
		new (volume: chrome.cast.Volume): VolumeRequest,
		volume: chrome.cast.Volume,
		customData: Object
	}

	declare interface LoadRequest {
		new (mediaInfo: chrome.cast.media.MediaInfo): LoadRequest,
		activeTrackIds: Array<number>,
		autoplay: boolean,
		currentTime: number,
		customData: Object,
		media: chrome.cast.media.MediaInfo
	}

	declare interface EditTracksInfoRequest {
		new (
		activeTrackIds?: Array<number>, textTrackStyle?: chrome.cast.media.TextTrackStyle
	): EditTracksInfoRequest,
		activeTrackIds: Array<number>,
		textTrackStyle: chrome.cast.media.TextTrackStyle
	}

	declare interface GenericMediaMetadata {
		new (): GenericMediaMetadata,
		images: Array<chrome.cast.Image>,
		metadataType: chrome.cast.media.MetadataType,
		releaseDate: string,
		releaseYear: number,
		subtitle: string,
		title: string,
		type: chrome.cast.media.MetadataType
	}

	declare interface MovieMediaMetadata {
		new (): MovieMediaMetadata,
		images: Array<chrome.cast.Image>,
		metadataType: chrome.cast.media.MetadataType,
		releaseDate: string,
		releaseYear: number,
		subtitle: string,
		title: string,
		studio: string,
		type: chrome.cast.media.MetadataType
	}

	declare interface TvShowMediaMetadata {
		new (): TvShowMediaMetadata,
		metadataType: chrome.cast.media.MetadataType,
		seriesTitle: string,
		title: string,
		season: number,
		episode: number,
		images: Array<chrome.cast.Image>,
		originalAirdate: string,
		type: chrome.cast.media.MetadataType,
		episodeTitle: string,
		seasonNumber: number,
		episodeNumber: number,
		releaseYear: number
	}

	declare interface MusicTrackMediaMetadata {
		new (): MusicTrackMediaMetadata,
		metadataType: chrome.cast.media.MetadataType,
		albumName: string,
		title: string,
		albumArtist: string,
		artist: string,
		composer: string,
		songName: string,
		trackNumber: number,
		discNumber: number,
		images: Array<chrome.cast.Image>,
		releaseDate: string,
		type: chrome.cast.media.MetadataType,
		artistName: string,
		releaseYear: number
	}

	declare interface PhotoMediaMetadata {
		new (): PhotoMediaMetadata,
		metadataType: chrome.cast.media.MetadataType,
		title: string,
		artist: string,
		location: string,
		images: Array<chrome.cast.Image>,
		latitude: number,
		longitude: number,
		width: number,
		height: number,
		creationDateTime: string,
		type: chrome.cast.media.MetadataType
	}

	declare interface MediaInfo {
		new (contentId: string, contentType: string): MediaInfo,
		contentId: string,
		streamType: chrome.cast.media.StreamType,
		contentType: string,
		metadata: Object,
		duration: number,
		tracks: Array<chrome.cast.media.Track>,
		textTrackStyle: chrome.cast.media.TextTrackStyle,
		customData: Object
	}

	declare interface Media {
		new (sessionId: string, mediaSessionId: number): Media,
		activeTrackIds: Array<number>,
		currentItemId: number,
		customData: Object,
		idleReason: chrome.cast.media.IdleReason,
		items: Array<chrome.cast.media.QueueItem>,
		loadingItemId: number,
		media: chrome.cast.media.MediaInfo,
		mediaSessionId: number,
		playbackRate: number,
		playerState: chrome.cast.media.PlayerState,
		preloadedItemId: number,
		repeatMode: chrome.cast.media.RepeatMode,
		sessionId: string,
		supportedMediaCommands: Array<chrome.cast.media.MediaCommand>,
		volume: chrome.cast.Volume,
		currentTime: number,
		getStatus(
		getStatusRequest: chrome.cast.media.GetStatusRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		play(
		playRequest: chrome.cast.media.PlayRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		pause(
		pauseRequest: chrome.cast.media.PauseRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		seek(
		seekRequest: chrome.cast.media.SeekRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		stop(
		stopRequest: chrome.cast.media.StopRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		setVolume(
		volumeRequest: chrome.cast.media.VolumeRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		editTracksInfo(
		editTracksInfoRequest: chrome.cast.media.EditTracksInfoRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		supportsCommand(command: chrome.cast.media.MediaCommand): boolean,
		addUpdateListener(listener: (isAlive: boolean) => void): void,
		removeUpdateListener(listener: (isAlive: boolean) => void): void,
		getEstimatedTime(): number,
		queueAppendItem(
		item: chrome.cast.media.QueueItem, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueInsertItems(
		queueInsertItemsRequest: chrome.cast.media.QueueInsertItemsRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueJumpToItem(
		itemId: number, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueMoveItemToNewIndex(
		itemId: number, newIndex: number, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueNext(
		successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queuePrev(
		successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueRemoveItem(
		itemId: number, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueReorderItems(
		queueReorderItemsRequest: chrome.cast.media.QueueReorderItemsRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueSetRepeatMode(
		repeatMode: chrome.cast.media.RepeatMode, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void,
		queueUpdateItems(
		queueUpdateItemsRequest: chrome.cast.media.QueueUpdateItemsRequest, successCallback: Function, errorCallback: (error: chrome.cast.Error) => void
	): void
	}

	declare interface Track {
		new (trackId: number, trackType: chrome.cast.media.TrackType): Track,
		trackId: number,
		trackContentId: string,
		trackContentType: string,
		type: chrome.cast.media.TrackType,
		name: string,
		language: string,
		subtype: chrome.cast.media.TextTrackType,
		customData: Object
	}

	declare interface TextTrackStyle {
		new (): TextTrackStyle,
		foregroundColor: string,
		backgroundColor: string,
		edgeType: chrome.cast.media.TextTrackEdgeType,
		edgeColor: string,
		windowType: chrome.cast.media.TextTrackWindowType,
		windowColor: string,
		windowRoundedCornerRadius: number,
		fontScale: number,
		fontFamily: string,
		fontGenericFamily: chrome.cast.media.TextTrackFontGenericFamily,
		fontStyle: chrome.cast.media.TextTrackFontStyle,
		customData: Object
	}

			
}
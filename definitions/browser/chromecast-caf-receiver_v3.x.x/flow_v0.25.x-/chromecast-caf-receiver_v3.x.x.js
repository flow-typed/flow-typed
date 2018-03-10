// @flow

declare module 'cast' {
  import type { PlayerDataChangedEvent } from 'cast.framework.ui';
  import type { NetworkRequestInfo } from 'cast.framework';

  declare export type EventHandler = (event: Event) => void;
  declare export type PlayerDataChangedEventHandler = (
    event: PlayerDataChangedEvent,
  ) => void;
  declare export type RequestHandler = (request: NetworkRequestInfo) => void;
  declare export type BinaryHandler = (data: Uint8Array) => Uint8Array;
}
declare module 'cast.framework' {
  import type {
    Track,
    TextTrackStyle,
    QueueItem,
    QueueData,
    LoadRequestData,
    Break,
  } from 'cast.framework.messages';

  import type { BreakManager } from 'cast.framework.breaks';
  import type {
    LiveSeekableRange,
    PlayerState,
    MediaInformation,
    PlayerStringId,
  } from 'cast.framework.messages';

  /**
   * Manages text tracks.
   */
  declare export class TextTracksManager {
    constructor(params: mixed): TextTracksManager;

    /**
     * Adds text tracks to the list.
     */
    addTracks(tracks: Array<Track>): void;

    /**
     * Creates a text track.
     */
    createTrack(): Track;

    /**
     * Gets all active text ids.
     */
    getActiveIds(): Array<number>;

    /**
     * Gets all active text tracks.
     */
    getActiveTracks(): Array<Track>;

    /**
     * Returns the current text track style.
     */
    getTextTracksStyle(): TextTrackStyle;

    /**
     * Gets text track by id.
     */
    getTrackById(id: number): Track;

    /**
     * Returns all text tracks.
     */
    getTracks(): Array<Track>;

    /**
     * Gets text tracks by language.
     */
    getTracksByLanguage(language: string): Array<Track>;

    /**
     * Sets text tracks to be active by id.
     */
    setActiveByIds(newIds: Array<number>): void;

    /**
     * Sets text tracks to be active by language.
     */
    setActiveByLanguage(language: string): void;

    /**
     * Sets text track style.
     */
    setTextTrackStyle(style: TextTrackStyle): void;
  }

  /**
   * QueueManager exposes several queue manipulation APIs to developers.
   */
  declare export class QueueManager {
    constructor(params: mixed): QueueManager;

    /**
     * Returns the current queue item.
     */
    getCurrentItem(): QueueItem;

    /**
     * Returns the index of the current queue item.
     */
    getCurrentItemIndex(): number;

    /**
     * Returns the queue items.
     */
    getItems(): Array<QueueItem>;

    /**
     * Inserts items into the queue.
     */
    insertItems(items: Array<QueueItem>, insertBefore?: number): void;

    /**
     * Removes items from the queue.
     */
    removeItems(itemIds: Array<number>): void;

    /**
     * Sets whether to limit the number of queue items to be reported in Media Status (default is true).
     */
    setQueueStatusLimit(limitQueueItemsInStatus: boolean): void;

    /**
     * Updates existing queue items by matching itemId.
     */
    updateItems(items: Array<QueueItem>): void;
  }

  /**
   * Base implementation of a queue.
   */
  declare export class QueueBase {
    /**
     * Fetches a window of items using the specified item id as reference; called by the receiver MediaManager when it needs more queue items, often as a request from senders. If only one of nextCount and prevCount is non-zero, fetchItems should only return items after or before the reference item; if both nextCount and prevCount are non-zero, a window of items including the reference item should be returned.
     */
    fetchItems(
      itemId: number,
      nextCount: number,
      prevCount: number,
    ): Array<QueueItem> | Promise<Array<QueueItem>>;

    /**
     * Initializes the queue with the requestData. This is called when a new LOAD request comes in to the receiver. If this returns or resolves to null, our default queueing implementation will create a queue based on queueData.items or the single media in the load request data.
     */
    initialize(requestData: LoadRequestData): QueueData | Promise<QueueData>;

    /**
     * Returns next items after the reference item, often the end of the current queue, called by the receiver MediaManager.
     */
    nextItems(itemId?: number): Array<QueueItem> | Promise<Array<QueueItem>>;

    /**
     * Sets the current item with the itemId; called by the receiver MediaManager when it changes the current playing item.
     */
    onCurrentItemIdChanged(itemId: number): void;

    /**
     * A callback for informing the following items have been inserted into the receiver queue in this session. A cloud based implementation can optionally choose to update its queue based on the new information.
     */
    onItemsInserted(items: Array<QueueItem>, insertBefore?: number): void;

    /**
     * A callback for informing the following items have been removed from the receiver queue in this session. A cloud based implementation can optionally choose to update its queue based on the new information.
     */
    onItemsRemoved(itemIds: Array<number>): void;

    /**
     * Returns previous items before the reference item, often at the beginning of the queue, called by the receiver MediaManager.
     */
    prevItems(itemId?: number): Array<QueueItem> | Promise<Array<QueueItem>>;

    /**
     * Shuffles the queue and returns new queue items. Returns null if the operation is not supported.
     */
    shuffle(): Array<QueueItem> | Promise<Array<QueueItem>>;
  }

  /**
   * Controls and monitors media playback.
   */
  declare export class PlayerManager {
    constructor(params: mixed): PlayerManager;

    /**
     * Adds an event listener for player event.
     */
    // addEventListener: (eventType: EventType | Array<EventType>, eventListener: EventHandler);

    /**
     * Sends a media status message to all senders (broadcast). Applications use this to send a custom state change.
     */
    broadcastStatus(
      includeMedia?: boolean,
      requestId?: number,
      customData?: mixed,
      includeQueueItems?: boolean,
    ): void;

    /**
     *
     */
    getAudioTracksManager(): AudioTracksManager;

    /**
     * Returns current time in sec in currently-playing break clip.
     */
    getBreakClipCurrentTimeSec(): number;

    /**
     * Returns duration in sec of currently-playing break clip.
     */
    getBreakClipDurationSec(): number;

    /**
     * Obtain the breaks (Ads) manager.
     */
    getBreakManager(): BreakManager;

    /**
     * Returns list of breaks.
     */
    getBreaks(): Array<Break>;

    /**
     * Gets current time in sec of current media.
     */
    getCurrentTimeSec(): number;

    /**
     * Gets duration in sec of currently playing media.
     */
    getDurationSec(): number;

    /**
     * Returns live seekable range with start and end time in seconds. The values are media time based.
     */
    getLiveSeekableRange(): LiveSeekableRange;

    /**
     * Gets media information of current media.
     */
    getMediaInformation(): MediaInformation;

    /**
     * Returns playback configuration.
     */
    getPlaybackConfig(): PlaybackConfig;

    /**
     * Returns current playback rate.
     */
    getPlaybackRate(): number;

    /**
     * Gets player state.
     */
    getPlayerState(): PlayerState;

    /**
     * Get the preferred playback rate. (Can be used on shutdown event to save latest preferred playback rate to a persistent storage, so it can be used in next session in the cast options).
     */
    getPreferredPlaybackRate(): number;

    /**
     * Get the preferred text track language.
     */
    getPreferredTextLanguage(): string;

    /**
     * Obtain QueueManager API.
     */
    getQueueManager(): QueueManager;

    /**
     *
     */
    getTextTracksManager(): TextTracksManager;

    /**
     * Loads media.
     */
    load(loadRequest: LoadRequestData): Promise<void>;

    /**
     * Pauses currently playing media.
     */
    pause(): void;

    /**
     * Plays currently paused media.
     */
    play(): void;

    /**
     * Requests a text string to be played back locally on the receiver device.
     */
    playString(
      stringId: PlayStringId,
      args?: Array<string>,
    ): Promise<ErrorData>;

    /**
     * Request Google Assistant to refresh the credentials. Only works if the original credentials came from the assistant.
     */
    refreshCredentials(): Promise<void>;

    /**
     * Removes the event listener added for given player event. If event listener is not added, it will be ignored.
     */
    removeEventListener(
      eventType: EventType | Array<EventType>,
      eventListener: EventHandler,
    ): void;

    /**
     * Seeks in current media.
     */
    seek(seekTime: number): void;

    /**
     * Sends an error to a specific sender
     */
    sendError(
      senderId: string,
      requestId: number,
      type: ErrorType,
      reason?: ErrorReason,
      customData?: mixed,
    ): void;

    /**
     * Send local media request.
     */
    sendLocalMediaRequest(request: RequestData): void;

    /**
     * Sends a media status message to a specific sender.
     */
    sendStatus(
      senderId: string,
      requestId: number,
      includeMedia?: boolean,
      customData?: mixed,
      includeQueueItems?: boolean,
    ): void;

    /**
     * Sets the IDLE reason. This allows applications that want to force the IDLE state to indicate the reason that made the player going to IDLE state (a custom error, for example). The idle reason will be sent in the next status message. NOTE: Most applications do not need to set this value, it is only needed if they want to make the player go to IDLE in special circumstances and the default idleReason does not reflect their intended behavior.
     */
    setIdleReason(idleReason: IdleReason): void;

    /**
     * Sets MediaElement to use. If Promise of MediaElement is set, media begins playback after Promise is resolved.
     */
    setMediaElement(mediaElement: HTMLMediaElement): void;

    /**
     * Sets media information.
     */
    setMediaInformation(
      mediaInformation: MediaInformation,
      opt_broadcast?: boolean,
    ): void;

    /**
     * Sets a handler to return or modify PlaybackConfig, for a specific load request. The handler paramaters are the load request data and default playback config for the receiver (provided in the context options). The handler should returns a modified playback config, or null to prevent the media from playing. The return value can be a promise to allow waiting for data from the server.
     */
    setMediaPlaybackInfoHandler(
      handler: (
        loadRequestData: LoadRequestData,
        playbackConfig: PlaybackConfig,
      ) => void,
    ): void;

    /**
     * Sets a handler to return the media url for a load request. This handler can be used to avoid having the media content url published as part of the media status. By default the media contentId is used as the content url.
     */
    setMediaUrlResolver(
      resolver: (loadRequestData: LoadRequestData | null) => void,
    ): void;

    /**
     * Provide an interceptor of incoming and outgoing messages. The interceptor can update the request data, and return updated data, a promise of updated data if need to get more data from the server, or null if the request should not be handled. Note that if load message interceptor is provided, and no interceptor is provided for preload - the load interceptor will be called for preload messages.
     */
    setMessageInterceptor(
      type: MessageType,
      interceptor: (requestData: RequestData | null) => void,
    ): void;

    /**
     * Sets playback configuration on the PlayerManager.
     */
    setPlaybackConfig(playbackConfig: PlaybackConfig): void;

    /**
     * Set the preferred playback rate for follow up load or media items. The preferred playback rate will be updated automatically to the latest playback rate that was provided by a load request or explicit set of playback rate.
     */
    setPreferredPlaybackRate(preferredPlaybackRate: number): void;

    /**
     * Set the preferred text track language. The preferred text track language will be updated automatically to the latest enabled language by a load request or explicit change to text tracks. (Should be called only in idle state, and Will only apply to next loaded media).
     */
    setPreferredTextLanguage(preferredTextLanguage: string): void;

    /**
     * Stops currently playing media.
     */
    stop(): void;
  }

  /**
   * Configuration to customize playback behavior.
   */
  declare export class PlaybackConfig {
    /**
     * Duration of buffered media in seconds to start buffering.
     */
    autoPauseDuration?: number;

    /**
     * Duration of buffered media in seconds to start/resume playback after auto-paused due to buffering.
     */
    autoResumeDuration?: number;

    /**
     * Minimum number of buffered segments to start/resume playback.
     */
    autoResumeNumberOfSegments?: number;

    /**
     * A function to customize request to get a caption segment.
     */
    captionsRequestHandler?: RequestHandler;

    /**
     * Initial bandwidth in bits in per second.
     */
    initialBandwidth?: number;

    /**
     * Custom license data.
     */
    licenseCustomData?: string;

    /**
     * Handler to process license data. The handler is passed the license data, and returns the modified license data.
     */
    licenseHandler?: BinaryHandler;

    /**
     * A function to customize request to get a license.
     */
    licenseRequestHandler?: RequestHandler;

    /**
     * Url for acquiring the license.
     */
    licenseUrl?: string;

    /**
     * Handler to process manifest data. The handler is passed the manifest, and returns the modified manifest.
     */
    manifestHandler?: (manifest: string) => string;

    /**
     * A function to customize request to get a manifest.
     */
    manifestRequestHandler?: RequestHandler;

    /**
     * Preferred protection system to use for decrypting content.
     */
    protectionSystem: ContentProtection;

    /**
     * Handler to process segment data. The handler is passed the segment data, and returns the modified segment data.
     */
    segmentHandler?: BinaryHandler;

    /**
     * A function to customize request information to get a media segment.
     */
    segmentRequestHandler?: RequestHandler;

    /**
     * Maximum number of times to retry a network request for a segment.
     */
    segmentRequestRetryLimit?: number;
  }
  /**
   * HTTP(s) Request/Response information.
   */
  declare export class NetworkRequestInfo {
    /**
     * The content of the request. Can be used to modify license request body.
     */
    content: Uint8Array | null;

    /**
     * An object containing properties that you would like to send in the header.
     */
    headers: mixed;

    /**
     * The URL requested.
     */
    url: string | null;

    /**
     * Indicates whether CORS Access-Control requests should be made using credentials such as cookies or authorization headers.
     */
    withCredentials: boolean;
  }
  /** Cast receiver context options. All options are optionals. */
  declare export class CastReceiverOptions {
    /**
     * Optional map of custom messages namespaces to initialize and their types.
     * Custom messages namespaces need to be initiated before the application started,
     * so it is best to provide the namespaces in the receiver options.
     * (The default type of a message bus is JSON, if not provided here).
     */
    customNamespaces?: mixed;

    /**
     * Sender id used for local requests. Default value is 'local'.
     */
    localSenderId: string;

    /**
     * Maximum time in seconds before closing an idle sender connection.
     * Setting this value enables a heartbeat message to keep the connection alive.
     * Used to detect unresponsive senders faster than typical TCP timeouts.
     * The minimum value is 5 seconds, there is no upper bound enforced but practically it's minutes before platform TCP timeouts come into play.
     * Default value is 10 seconds.
     */
    maxInactivity: number;

    /**
     * Optional media element to play content with. Default behavior is to use the first found media element in the page.
     */
    mediaElement: HTMLMediaElement;

    /**
     * Optional playback configuration.
     */
    playbackConfig: PlaybackConfig;

    /**
     * If this is true, the watched client stitching break will also be played.
     */
    playWatchedBreak: boolean;

    /**
     * Preferred value for player playback rate. It is used if playback rate value is not provided in the load request.
     */
    preferredPlaybackRate: number;

    /**
     * Preferred text track language. It is used if no active track is provided in the load request.
     */
    preferredTextLanguage: string;

    /**
     * Optional queue implementation.
     */
    queue: QueueBase;

    /**
     * Text that represents the application status.
     * It should meet internationalization rules as may be displayed by the sender application.
     */
    statusText: string;

    /**
     * A bitmask of media commands supported by the application.
     * LOAD, PLAY, STOP, GET_STATUS must always be supported.
     * If this value is not provided, then PAUSE, SEEK, STREAM_VOLUME, STREAM_MUTE are assumed to be supported too.
     */
    supportedCommands: number;

    /**
     * Indicate that MPL should be used for DASH content.
     */
    useLegacyDashSupport: boolean;

    /**
     * An integer used as an internal version number.
     * This number is used only to distinguish between receiver releases and higher numbers do not necessarily have to represent newer releases.
     */
    versionCode: number;
  }

  /** Manages loading of underlying libraries and initializes underlying cast receiver SDK. */
  declare export class CastReceiverContext {
    constructor(params: mixed): CastReceiverContext;

    /** Returns the CastReceiverContext singleton instance. */
    static getInstance(): CastReceiverContext;

    /**
     * Sets message listener on custom message channel.
     */
    addCustomMessageListener(namespace: string, listener: EventHandler): void;

    /**
     * Add listener to cast system events.
     */
    addEventListener(type: EventType, handler: EventHandler): void;

    /**
     * Checks if the given media params of video or audio streams are supported by the platform.
     */
    canDisplayType(
      mimeType: string,
      codecs?: string,
      width?: number,
      height?: number,
      framerate?: number,
    ): boolean;

    /**
     * Provides application information once the system is ready, otherwise it will be null.
     */
    getApplicationData(): ApplicationData;

    /**
     * Provides device capabilities information once the system is ready, otherwise it will be null.
     * If an empty object is returned, the device does not expose any capabilities information.
     */
    getDeviceCapabilities(): mixed;

    /**
     * Get Player instance that can control and monitor media playback.
     */
    getPlayerManager(): PlayerManager;

    /**
     * Get a sender by sender id
     */
    getSender(senderId: string): Sender;

    /**
     * Gets a list of currently-connected senders.
     */
    getSenders(): Array<Sender>;

    /**
     * Reports if the cast application's HDMI input is in standby.
     */
    getStandbyState(): StandbyState;

    /**
     * Provides application information about the system state.
     */
    getSystemState(): SystemState;

    /**
     * Reports if the cast application is the HDMI active input.
     */
    getVisibilityState(): VisibilityState;

    /**
     * When the application calls start, the system will send the ready event to indicate
     * that the application information is ready and the application can send messages as soon as there is one sender connected.
     */
    isSystemReady(): boolean;

    /**
     * Start loading player js. This can be used to start loading the players js code in early stage of starting the receiver before calling start.
     * This function is a no-op if players were already loaded (start was called).
     */
    loadPlayerLibraries(useLegacyDashSupport?: boolean): void;

    /**
     * Remove a message listener on custom message channel.
     */
    removeCustomMessageListener(
      namespace: string,
      listener: EventHandler,
    ): void;

    /**
     * Remove listener to cast system events.
     */
    removeEventListener(type: EventType, handler: EventHandler): void;

    /**
     * Sends a message to a specific sender.
     */
    sendCustomMessage(
      namespace: string,
      senderId: string,
      message: mixed,
    ): void;

    /**
     * This function should be called in response to the feedbackstarted event if the application
     * add debug state information to log in the feedback report.
     * It takes in a parameter ‘message’ that is a string that represents the debug information that the application wants to log.
     */
    sendFeedbackMessage(feedbackMessage: string): void;

    /**
     * Sets the application state. The application should call this when its state changes.
     * If undefined or set to an empty string, the value of the Application Name established during application
     * registration is used for the application state by default.
     */
    setApplicationState(statusText: string): void;

    /**
     * Sets the receiver inactivity timeout.
     * It is recommended to set the maximum inactivity value when calling Start and not changing it.
     * This API is just provided for development/debugging purposes.
     */
    setInactivityTimeout(maxInactivity: number): void;

    /**
     * Sets the log verbosity level.
     */
    setLoggerLevel(level: LoggerLevel): void;

    /**
     * Initializes system manager and media manager, so that receiver app can receive requests from senders.
     */
    start(options: CastReceiverOptions): CastReceiverContext;

    /**
     * Shutdown receiver application.
     */
    stop(): void;
  }

  /** Manages audio tracks. */
  declare export class AudioTracksManager {
    constructor(params: mixed): AudioTracksManager;
    getActiveId(): number | null;
    getActiveTrack(): Track | null;
    getTrackById(id: number): Track | null;
    getTracks(): Array<Track>;
    getTracksByLanguage(language: string): Array<Track>;
    setActiveById(id: number): void;
    setActiveByLanguage(language: string): void;
  }
}
declare module 'cast.framework.system' {
  /**
   * Event dispatched by @see{@link CastReceiverManager} when the visibility of the application changes (HDMI input change, TV is turned off).
   */
  declare export class VisibilityChangedEvent {
    constructor(isVisible: boolean): VisibilityChangedEvent;

    /**
     * Whether the Cast device is the active input or not.
     */
    isVisible: boolean;
  }

  /**
   * Represents the system volume data.
   */
  declare export class SystemVolumeData {
    /**
     * The level (from 0.0 to 1.0) of the system volume.
     */
    level: number;

    /**
     * Whether the system volume is muted or not.
     */
    muted: boolean;
  }
  /**
   * Event dispatched by @see{CastReceiverManager} when the system volume changes.
   */
  declare export class SystemVolumeChangedEvent extends Event {
    constructor(volume: SystemVolumeData): SystemVolumeChangedEvent;

    /**
     *  The system volume data
     */
    data: SystemVolumeData;
  }
  /**
   * Event dispatched by @see{@link CastReceiverManager} when the TV enters/leaves the standby state.
   */
  declare export class StandbyChangedEvent {
    constructor(isStandby: boolean): StandbyChangedEvent;

    /**
     *
     */
    isStandby: boolean;
  }
  /**
   * Whether the TV is in standby or not.
   */
  declare export class ShutdownEvent extends Event {}

  /**
   * Event dispatched by @see{@link CastReceiverManager} when a sender is disconnected.
   */
  declare export class SenderDisconnectedEvent extends Event {
    constructor(senderId: string, userAgent: string): SenderDisconnectedEvent;
    /**
     * The ID of the sender connected.
     */
    senderId: string;

    /**
     * The user agent of the sender.
     */
    userAgent: string;

    /**
     * The reason the sender was disconnected.
     */
    reason?: DisconnectReason;
  }

  /**
   * Event dispatched by @see{@link CastReceiverManager} when a sender is connected.
   */
  declare export class SenderConnectedEvent extends Event {
    constructor(senderId: string, userAgent: string): Event;
    /**
     * The ID of the sender connected.
     */
    senderId: string;

    /**
     * The user agent of the sender.
     */
    userAgent: string;
  }

  /**
   * Represents the data of a connected sender device.
   */
  declare export class Sender {
    /**
     * The sender Id.
     */
    id: string;

    /**
     * Indicate the sender supports large messages (>64KB).
     */
    largeMessageSupported?: boolean;

    /**
     * The userAgent of the sender.
     */
    userAgent?: string;
  }

  /**
   * Event dispatched by CastReceiverManager when the system is ready.
   */
  declare export class ReadyEvent {
    constructor(applicationData: ApplicationData): ReadyEvent;

    /**
     * The application data
     */
    data: ApplicationData;
  }

  /**
   * Event dispatched by @see{@link CastReceiverManager} when the system needs to update the restriction on maximum video resolution.
   */
  declare export class MaxVideoResolutionChangedEvent extends Event {
    constructor(height: number): MaxVideoResolutionChangedEvent;

    /**
     * Maximum video resolution requested by the system. The value of 0 means there is no restriction.
     */
    height: number;
  }
  /** Event dispatched by @see{@link CastReceiverManager} when the systems starts to create feedback report. */
  declare export class FeedbackStartedEvent extends Event {}
  /** Event dispatched by @see{@link CastReceiverContext} which contains system information. */
  declare export class Event {
    constructor(type: EventType, data?: mixed): Event;
  }

  /** Represents the data of the launched application. */
  declare export class ApplicationData {
    id(): string;
    launchingSenderId(): string;
    name(): string;
    namespaces(): Array<string>;
    sessionId(): number;
  }
}
declare module 'cast.framework.ui' {
  /**
   * Player data changed event. Provides the changed field (type), and new value.
   */
  declare export class PlayerDataChangedEvent {
    constructor(
      type: PlayerDataEventType,
      field: string,
      value: mixed,
    ): PlayerDataChangedEvent;

    /**
     * The field name that was changed.
     */
    field: string;

    /**
     *
     */
    type: PlayerDataEventType;

    /**
     * The new field value.
     */
    value: mixed;
  }
  /**
   * Player data binder. Bind a player data object to the player state. The player data will be updated to reflect correctly the current player state without firing any change event.
   */
  declare export class PlayerDataBinder {
    constructor(playerData: PlayerData | mixed): PlayerDataBinder;

    /**
     * Add listener to player data changes.
     */
    // addEventListener: (type: PlayerDataEventType, listener: PlayerDataChangedEventHandler);

    /**
     * Remove listener to player data changes.
     */
    // removeEventListener: (type: PlayerDataEventType, listener: PlayerDataChangedEventHandler);
  }
  /**
   * Player data. Provide the player media and break state.
   */
  declare export class PlayerData {
    /**
     * Array of breaks positions in percentage.
     */
    breakPercentagePositions: Array<number>;

    /**
     * Content Type.
     */
    contentType: ContentType;

    /**
     * The number of the current playing break clip in the break.
     */
    currentBreakClipNumber: number;

    /**
     * Media current position in seconds, or break current position if playing break.
     */
    currentTime: number;

    /**
     * Whether the player metadata (ie: title, currentTime) should be displayed. This will be true if at least one field in the metadata should be displayed. In some cases, displayStatus will be true, but parts of the metadata should be hidden (ie: the media title while media is seeking). In these cases, additional css can be applied to hide those elements. For cases where the media is audio-only, this will almost always be true. In cases where the media is video, this will be true when: (1) the video is loading, buffering, or seeking (2) a play request was made in the last five seconds while media is already playing, (3) there is a request made to show the status in the last five seconds, or (4) the media was paused in the last five seconds.
     */
    displayStatus: boolean;

    /**
     * Media duration in seconds, Or break duration if playing break.
     */
    duration: number;

    /**
     * Indicate break clip can be skipped.
     */
    isBreakSkippable: boolean;

    /**
     * Indicate if the content is a live stream.
     */
    isLive: boolean;

    /**
     * Indicate that the receiver is playing a break.
     */
    isPlayingBreak: boolean;

    /**
     * Indicate the player is seeking (can be either during playing or pausing).
     */
    isSeeking: boolean;

    /**
     * Media metadata.
     */
    metadata: MediaMetadata | mixed;

    /**
     * Next Item subtitle.
     */
    nextSubtitle: string;

    /**
     * Next Item thumbnail url.
     */
    nextThumbnailUrl: string;

    /**
     * Next Item title.
     */
    nextTitle: string;

    /**
     * Number of break clips in current break.
     */
    numberBreakClips: number;

    /**
     * Flag to show/hide next item metadata.
     */
    preloadingNext: boolean;

    /**
     * Current player state.
     */
    state: State;

    /**
     * Content thumbnail url.
     */
    thumbnailUrl: string;

    /**
     * Content title.
     */
    title: string;

    /**
     * Provide the time a break is skipable - relative to current playback time. Undefined if not skippable.
     */
    whenSkippable?: number;
  }
}
declare module 'cast.framework.breaks' {
  declare export class BreakSeekData {
    constructor(
      seekFrom: number,
      seekTo: number,
      breaks: Array<Break>,
    ): BreakSeekData;

    /**
     * List of breaks
     */
    breaks: Array<Break>;

    /**
     * Current playback time
     */
    seekFrom: number;

    /**
     * The time to seek to
     */
    seekTo: number;
  }

  /** Provide context information for break clip load interceptor. */
  declare export class BreakClipLoadInterceptorContext {
    constructor(brk: Break): BreakClipLoadInterceptorContext;

    /**
     * The container break for the break clip
     */
    break: Break;
  }

  /** Interface to manage breaks */
  declare export interface BreakManager {
    /**
     * Get current media break by id.
     * @param {*} id
     */
    getBreakById(id: string): Break | null;

    /**
     * Get current media break clip by id
     * @param {*} id
     */
    getBreakClipById(id: string): BreakClip | null;

    /** Get current media break clips. */
    getBreakClips(): Array<BreakClip>;

    /** Get current media breaks. */
    getBreaks(): Array<Break>;

    /** Returns true if watched breaks should be played. */
    getPlayWatchedBreak(): boolean;

    /**
     * Provide an interceptor to allow developer to insert more break clips or modify current break clip before a break is started.
     * If interceptor is null it will reset the interceptor to default one.
     * By default VAST fetching and parsing logic in default interceptor.
     * So if customized interceptor is set by developer,
     * the VAST logic will be overridden and developers should implement their own VAST fetching and parsing logic in the provided interceptor.
     * @param {*} interceptor
     */
    setBreakClipLoadInterceptor(
      interceptor: (
        breakClip: BreakClip,
        breakClipLoaderContext?: BreakClipLoadInterceptorContext,
      ) => void,
    ): void;

    /**
     * Provide an interceptor for developer to specify what breaks they want to play after seek.
     * @param {*} seekInterceptor
     */
    setBreakSeekInterceptor(
      seekInterceptor: (breakSeekData: BreakSeekData) => void,
    ): void;

    /**
     * Set a flag to control if the watched client stitching break should be played.
     * @param {*} playWatchedBreak
     */
    setPlayWatchedBreak(playWatchedBreak: boolean): void;

    /**
     * Provide an interceptor to modify VAST tracking URL before it is being sent to server.
     * The input of the interceptor is a string of the tracking URL.
     * The interceptor can either return a modified string of URL or a Promise of modified string of URL.
     * The interceptor can also return null if you want to send the tracking URL by your own code instead of by CAF.
     * @param {*} interceptor
     */
    setVastTrackingInterceptor(
      interceptor?: (trackingUrl: string) => void,
    ): void;
  }
}
declare module 'cast.framework.events' {
  import type { EventType } from 'cast.framework.events';
  /**
   * Event data for @see{@link EventType.SEGMENT_DOWNLOADED} event.
   */
  declare export class SegmentDownloadedEvent {
    constructor(downloadTime?: number, size?: number): SegmentDownloadedEvent;

    /**
     * The time it took to download the segment, in milliseconds.
     */
    downloadTime?: number;

    /**
     * The number of bytes in the segment.
     */
    size?: number;
  }

  /**
   * Event data for all events that represent requests made to the receiver.
   */
  declare export class RequestEvent {
    constructor(
      type: EventType,
      requestData?: RequestData,
      senderId?: string,
    ): RequestEvent;

    /**
     * The data that was sent with the request.
     */
    requestData?: RequestData;

    /**
     * The sender id the request came from.
     */
    senderId?: string;
  }

  /**
   * Event data for @see{@link EventType.MEDIA_STATUS} event.
   */
  declare export class MediaStatusEvent {
    constructor(mediaStatus?: MediaStatus): MediaStatusEvent;

    /**
     * The media status that was sent.
     */
    mediaStatus?: MediaStatus;
  }
  /**
   * Event data for pause events forwarded from the MediaElement.
   */
  declare export class MediaPauseEvent {
    constructor(currentMediaTime?: number, ended?: boolean): MediaPauseEvent;

    /**
     * Indicate if the media ended (indicates the pause was fired due to stream reached the end).
     */
    ended?: boolean;
  }
  /**
   * Event data for @see{@link EventType.MEDIA_FINISHED} event.
   */
  declare export class MediaFinishedEvent {
    constructor(
      currentMediaTime?: number,
      endedReason?: EndedReason,
    ): MediaFinishedEvent;

    /**
     * The time when the media finished (in seconds). For an item in a queue, this value represents the time in the currently playing queue item ( where 0 means the queue item has just started).
     */
    currentTime?: number;

    /**
     * The reason the media finished.
     */
    endedReason?: EndedReason;
  }
  /**
   * Event data for all events forwarded from the MediaElement.
   */
  declare export class MediaElementEvent {
    constructor(type: EventType, currentMediaTime?: number): MediaElementEvent;

    /**
     * The time in the currently playing clip when the event was fired (in seconds). Undefined if playback has not started yet.
     */
    currentMediaTime?: number;
  }
  /**
   * Event data for all events pertaining to processing a load / preload request. made to the player.
   */
  declare export class LoadEvent {
    constructor(type: EventType, media?: MediaInformation): LoadEvent;

    /**
     * Information about the media being loaded.
     */
    media: MediaInformation;
  }
  /**
   * Event data for @see{@link EventType.INBAND_TRACK_ADDED} event.
   */
  declare export class InbandTrackAddedEvent {
    constructor(track: Track): InbandTrackAddedEvent;

    /**
     * Added track.
     */
    track: Track;
  }

  /** Event data for @see{@link EventType.ID3} event. */
  declare export class Id3Event {
    constructor(segmentData: Uint8Array): Id3Event;

    /**
     * The segment data.
     */
    segmentData: Uint8Array;
  }
  /**
   * Event data superclass for all events dispatched by @see{@link PlayerManager}
   */
  declare export class Event {
    constructor(type: EventType): Event;

    /**
     * Type of the event.
     */
    type: EventType;
  }
  /**
   * Event data for @see{@link EventType.EMSG} event.
   */
  declare export class EmsgEvent {
    constructor(emsgData: mixed): EmsgEvent;

    /**
     * The time that the event ends (in presentation time). Undefined if using legacy Dash support.
     */
    endTime: mixed;

    /**
     * The duration of the event (in units of timescale). Undefined if using legacy Dash support.
     */
    eventDuration: mixed;

    /**
     * A field identifying this instance of the message. Undefined if using legacy Dash support.
     */
    id: mixed;

    /**
     * Body of the message. Undefined if using legacy Dash support.
     */
    messageData: mixed;

    /**
     * The offset that the event starts, relative to the start of the segment this is contained in (in units of timescale). Undefined if using legacy Dash support.
     */
    presentationTimeDelta: mixed;

    /**
     * Identifies the message scheme. Undefined if using legacy Dash support.
     */
    schemeIdUri: mixed;

    /**
     * The segment data. This is only defined if using legacy Dash support.
     */
    segmentData: mixed;

    /**
     * The time that the event starts (in presentation time). Undefined if using legacy Dash support.
     */
    startTime: mixed;

    /**
     * Provides the timescale, in ticks per second. Undefined if using legacy Dash support.
     */
    timescale: mixed;

    /**
     * Specifies the value for the event. Undefined if using legacy Dash support.
     */
    value: mixed;
  }
  /**
   * Event data for @see{@link EventType.CLIP_ENDED} event.
   */
  declare export class ClipEndedEvent {
    constructor(
      currentMediaTime: number,
      endedReason?: EndedReason,
    ): ClipEndedEvent;

    /**
     * The time in media (in seconds) when clip ended.
     */
    currentMediaTime: number;

    /**
     * The reason the clip ended.
     */
    endedReason?: EndedReason;
  }

  /**
   * Event data for @see{@link EventType.CACHE_LOADED} event.
   */
  declare export class CacheLoadedEvent {
    constructor(media?: MediaInformation): CacheLoadedEvent;

    /**
     * Information about the media being cached.
     */
    media: MediaInformation;
  }

  declare export class CacheItemEvent {
    constructor(type: EventType, url: string): CacheItemEvent;

    /**
     * The URL of data fetched from cache
     */
    url: string;
  }
  declare export class BufferingEvent {
    constructor(isBuffering: boolean): BufferingEvent;

    /**
     * True if the player is entering a buffering state.
     */
    isBuffering: boolean;
  }

  declare export class BreaksEvent {
    constructor(
      type: EventType,
      currentMediaTime?: number,
      index?: number,
      total?: number,
      whenSkippable?: number,
      endedReason?: EndedReason,
      breakClipId?: string,
    ): BreaksEvent;

    /**
     * The break clip's id. Refer to BreakClip.id
     */
    breakClipId: string;

    /**
     * The time in the currently playing media when the break event occurred.
     */
    currentMediaTime: string;

    /**
     * The reason the break clip ended.
     */
    endedReason: EndedReason;

    /**
     * Index of break clip, which starts from 1.
     */
    index: number;

    /**
     * Total number of break clips.
     */
    total: number;

    /**
     * When to skip current break clip in sec, after break clip begins to play.
     */
    whenSkippable: number;
  }

  /**
   * Event data for @see {@link EventType.BITRATE_CHANGED} event.
   */
  declare export class BitrateChangedEvent {
    constructor(totalBitrate?: number): BitrateChangedEvent;

    /** The bitrate of the media (audio and video) in bits per second. */
    totalBitrate: number;
  }
}

declare module 'cast.framework.events.category' {
  declare export type EventType = {
    REQUEST_SEEK: 'REQUEST_SEEK',
    REQUEST_LOAD: 'REQUEST_LOAD',
    REQUEST_STOP: 'REQUEST_STOP',
    REQUEST_PAUSE: 'REQUEST_PAUSE',
    REQUEST_PLAY: 'REQUEST_PLAY',
    REQUEST_PLAY_AGAIN: 'REQUEST_PLAY_AGAIN',
    REQUEST_PLAYBACK_RATE_CHANGE: 'REQUEST_PLAYBACK_RATE_CHANGE',
    REQUEST_SKIP_AD: 'REQUEST_SKIP_AD',
    REQUEST_VOLUME_CHANGE: 'REQUEST_VOLUME_CHANGE',
    REQUEST_EDIT_TRACKS_INFO: 'REQUEST_EDIT_TRACKS_INFO',
    REQUEST_EDIT_AUDIO_TRACKS: 'REQUEST_EDIT_AUDIO_TRACKS',
    REQUEST_SET_CREDENTIALS: 'REQUEST_SET_CREDENTIALS',
    REQUEST_LOAD_BY_ENTITY: 'REQUEST_LOAD_BY_ENTITY',
    REQUEST_USER_ACTION: 'REQUEST_USER_ACTION',
    REQUEST_DISPLAY_STATUS: 'REQUEST_DISPLAY_STATUS',
    REQUEST_CUSTOM_COMMAND: 'REQUEST_CUSTOM_COMMAND',
    REQUEST_FOCUS_STATE: 'REQUEST_FOCUS_STATE',
    REQUEST_QUEUE_LOAD: 'REQUEST_QUEUE_LOAD',
    REQUEST_QUEUE_INSERT: 'REQUEST_QUEUE_INSERT',
    REQUEST_QUEUE_UPDATE: 'REQUEST_QUEUE_UPDATE',
    REQUEST_QUEUE_REMOVE: 'REQUEST_QUEUE_REMOVE',
    REQUEST_QUEUE_REORDER: 'REQUEST_QUEUE_REORDER',
    REQUEST_QUEUE_GET_ITEM_RANGE: 'REQUEST_QUEUE_GET_ITEM_RANGE',
    REQUEST_QUEUE_GET_ITEMS: 'REQUEST_QUEUE_GET_ITEMS',
    REQUEST_QUEUE_GET_ITEM_IDS: 'REQUEST_QUEUE_GET_ITEM_IDS',
    BREAK_CLIP_ENDED: 'BREAK_CLIP_ENDED',
    BREAK_CLIP_STARTED: 'BREAK_CLIP_STARTED',
    BUFFERING: 'BUFFERING',
    ERROR: 'ERROR',
    MEDIA_FINISHED: 'MEDIA_FINISHED',
    MEDIA_STATUS: 'MEDIA_STATUS',
    PAUSE: 'PAUSE',
    PLAYER_LOADING: 'PLAYER_LOADING',
    PLAYER_LOAD_COMPLETE: 'PLAYER_LOAD_COMPLETE',
    PLAYER_PRELOADING: 'PLAYER_PRELOADING',
    PLAYER_PRELOADING_CANCELLED: 'PLAYER_PRELOADING_CANCELLED',
    PLAYING: 'PLAYING',
    REQUEST_PRECACHE: 'REQUEST_PRECACHE',
    RATE_CHANGE: 'RATE_CHANGE',
    SEEKED: 'SEEKED',
    SEEKING: 'SEEKING',
  };
}

declare module 'cast.framework.messages' {
  declare export type RepeatMode = {
    REPEAT_OFF: 'REPEAT_OFF',
    REPEAT_ALL: 'REPEAT_ALL',
    REPEAT_SINGLE: 'REPEAT_SINGLE',
    REPEAT_ALL_AND_SHUFFLE: 'REPEAT_ALL_AND_SHUFFLE',
  };

  declare export type QueueType = {
    ALBUM: 'ALBUM',
    PLAYLIST: 'PLAYLIST',
    AUDIOBOOK: 'AUDIOBOOK',
    RADIO_STATION: 'RADIO_STATION',
    PODCAST_SERIES: 'PODCAST_SERIES',
    TV_SERIES: 'TV_SERIES',
    VIDEO_PLAYLIST: 'VIDEO_PLAYLIST',
    LIVE_TV: 'LIVE_TV',
    MOVIE: 'MOVIE',
  };
  declare export type QueueChangeType = {
    INSERT: 'INSERT',
    REMOVE: 'REMOVE',
    ITEMS_CHANGE: 'ITEMS_CHANGE',
    UPDATE: 'UPDATE',
    NO_CHANGE: 'NO_CHANGE',
  };

  declare export type PlayerState = {
    IDLE: 'IDLE',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    BUFFERING: 'BUFFERING',
  };

  declare export type PlayerStringId = {
    FREE_TRIAL_ABOUT_TO_EXPIRE: '',
    SUBSCRIPTION_ABOUT_TO_EXPIRE: '',
    STREAM_HIJACKED: '',
  };
  /**
   * RefreshCredentials request data.
   */
  declare export class RefreshCredentialsRequestData {}

  /**
   * Media event SET_VOLUME request data.
   */
  declare export class VolumeRequestData extends RequestData {
    /**
     * The media stream volume
     */
    volume?: Volume;
  }

  /**
   * Represents the volume of a media session stream.
   */
  declare export class Volume {
    /**
     * Value from 0 to 1 that represents the current stream volume level.
     */
    level?: number;

    /**
     * Whether the stream is muted.
     */
    muted?: boolean;
  }

  /**
   * Video information such as video resolution and High Dynamic Range (HDR).
   */
  declare export class VideoInformation {
    constructor(
      width: number,
      height: number,
      hdrType: HdrType,
    ): VideoInformation;

    /**
     *
     */
    width: number;

    /**
     *
     */
    height: number;

    /**
     *
     */
    hdrType: HdrType;
  }

  /**
   * VAST ad request configuration.
   */
  declare export class VastAdsRequest {
    /**
     * Specifies a VAST document to be used as the ads response instead of making a request via an ad tag url. This can be useful for debugging and other situations where a VAST response is already available.
     */
    adsResponse?: string;

    /**
     * URL for VAST file.
     */
    adTagUrl?: string;
  }

  /**
   * UserAction request data.
   */
  declare export class UserActionRequestData {
    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source?: string;

    /**
     * User action to be handled by the application.
     */
    userAction?: UserAction;

    /**
     * Optional context information for the user action.
     */
    userActionContext?: UserActionContext;
  }

  /**
   * A TV episode media description.
   */
  declare export class TvShowMediaMetadata {
    /**
     * TV episode number. A positive integer.
     */
    episode?: number;

    /**
     * @deprecated use episode instead
     */
    episodeNumber?: number;

    /**
     * @deprecated use episode instead
     */
    episodeTitle?: string;

    /**
     * Content images. Examples would include cover art or a thumbnail of the currently playing media.
     */
    images?: Array<Image>;

    /**
     * ISO 8601 date when the episode originally aired, e.g. 2014-02-10.
     */
    originalAirdate?: string;

    /**
     * @deprecated use originalAirdate instead.
     */
    releaseYear?: number;

    /**
     * TV episode season. A positive integer.
     */
    season?: number;

    /**
     * @deprecated use season instead.
     */
    seasonNumber?: number;

    /**
     * TV series title.
     */
    seriesTitle?: string;

    /**
     * TV episode title.
     */
    title?: string;
  }
  /**
   * Describes track metadata information.
   */
  declare export class Track {
    constructor(trackId: number, trackType: TrackType): Track;

    /**
     * Custom data set by the receiver application.
     */
    customData?: string;

    /**
     * Language tag as per RFC 5646 (If subtype is “SUBTITLES” it is mandatory).
     */
    language?: string;

    /**
     * A descriptive, human readable name for the track. For example "Spanish".
     */
    name?: string;

    /**
     * For text tracks, the type of text track.
     */
    subtype?: string;

    /**
     * It can be the url of the track or any other identifier that allows the receiver to find the content (when the track is not inband or included in the manifest). For example it can be the url of a vtt file.
     */
    trackContentId?: string;

    /**
     * It represents the MIME type of the track content. For example if the track is a vtt file it will be ‘text/vtt’. This field is needed for out of band tracks, so it is usually provided if a trackContentId has also been provided. It is not mandatory if the receiver has a way to identify the content from the trackContentId, but recommended. The track content type, if provided, must be consistent with the track type.
     */
    trackContentType?: string;

    /**
     * Unique identifier of the track within the context of a MediaInformation object.
     */
    trackId?: number;

    /**
     * The type of track.
     */
    type: TrackType;
  }
  /**
   * Describes style information for a text track.
   */
  declare export class TextTrackStyle {
    /**
     * The background 32 bit RGBA color. The alpha channel should be used for transparent backgrounds.
     */
    backgroundColor?: string;

    /**
     * Custom data set by the receiver application.
     */
    customData?: mixed;

    /**
     * RGBA color for the edge, this value will be ignored if edgeType is NONE.
     */
    edgeColor?: string;

    /**
     *
     */
    edgeType?: TextTrackEdgeType;

    /**
     * If the font is not available in the receiver the fontGenericFamily will be used.
     */
    fontFamily?: string;

    /**
     * The text track generic family.
     */
    fontGenericFamily?: TextTrackFontGenericFamily;

    /**
     * The font scaling factor for the text track (the default is 1).
     */
    fontScale?: number;

    /**
     * The text track font style.
     */
    fontStyle?: TextTrackFontStyle;

    /**
     * The foreground 32 bit RGBA color.
     */
    foregroundColor?: string;

    /**
     * 32 bit RGBA color for the window. This value will be ignored if windowType is NONE.
     */
    windowColor?: string;

    /**
     * Rounded corner radius absolute value in pixels (px). This value will be ignored if windowType is not ROUNDED_CORNERS.
     */
    windowRoundedCornerRadius?: number;

    /**
     * The window concept is defined in CEA-608 and CEA-708. In WebVTT is called a region.
     */
    windowType?: TextTrackWindowType;
  }
  declare export class Track {}

  /**
   * Media event playback rate request data.
   */
  declare export class SetPlaybackRateRequestData extends RequestData {
    /**
     * New playback rate (>0).
     */
    playbackRate?: number;

    /**
     * New playback rate relative to current playback rate. New rate will be the result of multiplying the current rate with the value. For example a value of 1.1 will increase rate by 10%. (Only used if the playbackRate value is not provided).
     */
    relativePlaybackRate?: number;
  }

  /**
   * SetCredentials request data.
   */
  declare export class SetCredentialsRequestData {
    /**
     * Credentials to use by receiver.
     */
    credentials?: string;

    /**
     * If it is a response for refresh credentials, it will indicate the request id of the refresh credentials request.
     */
    forRequestId?: number;

    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source?: string | null;
  }

  /**
   * Media event SEEK request data.
   */
  declare export class SeekRequestData extends RequestData {
    /**
     * Seconds since beginning of content.
     */
    currentTime?: number;

    /**
     * Seconds relative to the current playback position. If this field is defined, the currentTime field will be ignored.
     */
    relativeTime?: number;

    /**
     * The playback state after a SEEK request.
     */
    resumeState?: SeekResumeState;
  }

  /**
   * Provides seekable range in seconds.
   */
  declare export class SeekableRange {
    constructor(start?: number, end?: number): SeekableRange;

    /**
     * End of the seekable range in seconds.
     */
    end?: number;

    /**
     * Start of the seekable range in seconds.
     */
    start?: number;
  }

  /**
   * Media event request data.
   */
  declare export class RequestData {
    constructor(type: MessageType): RequestData;

    /**
     * Application-specific data for this request. It enables the sender and receiver to easily extend the media protocol without having to use a new namespace with custom messages.
     */
    customData?: mixed;

    /**
     * Id of the media session that the request applies to.
     */
    mediaSessionId?: number;

    /**
     * Id of the request, used to correlate request/response.
     */
    requestId: number;
  }

  /**
   * Media event UPDATE queue request data.
   */
  declare export class QueueUpdateRequestData {
    /**
     * ID of the current media Item after the deletion (if not provided, the currentItem value will be the same as before the deletion; if it does not exist because it has been deleted, the currentItem will point to the next logical item in the list).
     */
    currentItemId?: number;

    /**
     * Seconds since the beginning of content to start playback of the current item. If provided, this value will take precedence over the startTime value provided at the QueueItem level but only the first time the item is played. This is to cover the common case where the user jumps to the middle of an item so the currentTime does not apply to the item permanently like the QueueItem startTime does. It avoids having to reset the startTime dynamically (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * List of queue items to be updated. No reordering will happen, the items will retain the existing order.
     */
    items?: Array<QueueItem>;

    /**
     * Skip/Go back number of items with respect to the position of currentItem (it can be negative). If it is out of boundaries, the currentItem will be the next logical item in the queue wrapping around the boundaries. The new currentItem position will follow the rules of the queue repeat behavior.
     */
    jump?: number;

    /**
     * Behavior of the queue when all items have been played.
     */
    repeatMode?: RepeatMode;

    /**
     * Shuffle the queue items when the update is processed. After the queue items are shuffled, the item at the currentItem position will be loaded.
     */
    shuffle?: boolean;
  }

  /**
   * Media event queue REORDER request data.
   */
  declare export class QueueReorderRequestData extends RequestData {
    constructor(itemIds: Array<number>): QueueReorderRequestData;

    /**
     * ID of the current media Item after the deletion (if not provided, the currentItem value will be the same as before the deletion; if it does not exist because it has been deleted, the currentItem will point to the next logical item in the list).
     */
    currentItemId?: number;

    /**
     * Seconds since the beginning of content to start playback of the current item. If provided, this value will take precedence over the startTime value provided at the QueueItem level but only the first time the item is played. This is to cover the common case where the user jumps to the middle of an item so the currentTime does not apply to the item permanently like the QueueItem startTime does. It avoids having to reset the startTime dynamically (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * ID of the item that will be located immediately after the reordered list. If the ID is not found or it is not provided, the reordered list will be appended at the end of the existing list.
     */
    insertBefore?: number;

    /**
           * IDs of the items to be reordered, in the new order. Items not provided will keep their existing order. The provided list will be inserted at the position determined by insertBefore. For example:

              If insertBefore is not specified Existing queue: “A”,”D”,”G”,”H”,”B”,”E” itemIds: “D”,”H”,”B” New Order: “A”,”G”,”E”,“D”,”H”,”B”

              If insertBefore is “A” Existing queue: “A”,”D”,”G”,”H”,”B” itemIds: “D”,”H”,”B” New Order: “D”,”H”,”B”,“A”,”G”,”E”

              If insertBefore is “G” Existing queue: “A”,”D”,”G”,”H”,”B” itemIds: “D”,”H”,”B” New Order: “A”,“D”,”H”,”B”,”G”,”E”
           */
    itemIds: Array<number>;
  }

  /**
   * Media event queue REMOVE request data.
   */
  declare export class QueueRemoveRequestData extends RequestData {
    constructor(itemIds: Array<number>): QueueRemoveRequestData;

    /**
     * ID of the current media Item after the deletion (if not provided, the currentItem value will be the same as before the deletion; if it does not exist because it has been deleted, the currentItem will point to the next logical item in the list).
     */
    currentItemId?: number;

    /**
     * Seconds since the beginning of content to start playback of the current item. If provided, this value will take precedence over the startTime value provided at the QueueItem level but only the first time the item is played. This is to cover the common case where the user jumps to the middle of an item so the currentTime does not apply to the item permanently like the QueueItem startTime does. It avoids having to reset the startTime dynamically (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * IDs of queue items to be deleted.
     */
    itemIds?: Array<number>;
  }
  /**
   * Media event queue LOAD request data.
   */
  declare export class QueueLoadRequestData extends RequestData {
    constructor(items: Array<QueueItem>): QueueLoadRequestData;

    /**
     * Seconds (since the beginning of content) to start playback of the first item to be played. If provided, this value will take precedence over the startTime value provided at the QueueItem level but only the first time the item is played. This is to cover the common case where the user casts the item that was playing locally so the currentTime does not apply to the item permanently like the QueueItem startTime does. It avoids having to reset the startTime dynamically (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * Behavior of the queue when all items have been played.
     */
    items: Array<QueueItem>;

    /**
     * Id of the request, used to correlate request/response.
     */
    repeatMode?: RepeatMode;

    /**
     * The index of the item in the items array that must be the first currentItem (the item that will be played first). Note this is the index of the array (starts at 0) and not the itemId (as it is not known until the queue is created). If repeatMode is REPEAT_OFF playback will end when the last item in the array is played (elements before the startIndex will not be played). This may be useful for continuation scenarios where the user was already using the sender app and in the middle decides to cast. In this way the sender app does not need to map between the local and remote queue positions or saves one extra QUEUE_UPDATE request.
     */
    startIndex?: number;
  }

  /**
   * Queue item information. Application developers may need to create a QueueItem to insert a queue element using InsertQueueItems. In this case they should not provide an itemId (as the actual itemId will be assigned when the item is inserted in the queue). This prevents ID collisions with items added from a sender app.
   */
  declare export class QueueItem {
    constructor(opt_itemId?: number): QueueItem;

    /**
     * Array of Track trackIds that are active. If the array is not provided, the default tracks will be active.
     */
    activeTrackIds?: Array<number>;

    /**
     * If the autoplay parameter is not specified or is true, the media player will begin playing the element in the queue when the item becomes the currentItem.
     */
    autoplay?: boolean;

    /**
     * The application can define any extra queue item information needed.
     */
    customData?: mixed;

    /**
     * Unique identifier of the item in the queue. The attribute is optional because for LOAD or INSERT should not be provided (as it will be assigned by the receiver when an item is first created/inserted).
     */
    itemId?: number;

    /**
     * Metadata (including contentId) of the playlist element.
     */
    media?: MediaInformation;

    /**
     * Playback duration of the item, if it is larger than the actual duration - startTime it will be ignored (default behavior). It can be negative, in such case the duration will be the actual asset duration minus the duration provided. It can be used for photo slideshows to control the duration the item should be presented or for live events to control the duration that the program should be played. It may be useful for autoplay scenarios to avoid displaying all the credits after an episode has ended.
     */
    playbackDuration?: number;

    /**
     * This parameter is a hint for the receiver to preload this media item before it is played. It allows for a smooth transition between items played from the queue. The time is expressed in seconds, relative to the beginning of this item playback (usually the end of the previous item playback). Only positive values are valid. For example, if the value is 10 seconds, this item will be preloaded 10 seconds before the previous item has finished. The receiver will try to honor this value but will not guarantee it, for example if the value is larger than the previous item duration the receiver may just preload this item shortly after the previous item has started playing (there will never be two items being preloaded in parallel). Also, if an item is inserted in the queue just after the currentItem and the time to preload is higher than the time left on the currentItem, the preload will just happen as soon as possible.
     */
    preloadTime?: number;

    /**
     * Seconds since beginning of content. If the content is live content, and startTime is not specified, the stream will start at the live position.
     */
    startTime?: number;
  }

  /**
   * Media event queue INSERT request data.
   */
  declare export class QueueInsertRequestData extends RequestData {
    constructor(items: Array<QueueItem>): QueueInsertRequestData;

    /**
     * ID of the current media Item after the insertion (if not provided, the currentItem value will be the same as before the insertion).
     */
    currentItemId?: number;

    /**
     * Index (relative to the items array, starting with 0) of the new current media Item. For inserted items we use the index (similar to startIndex in QUEUE_LOAD) and not currentItemId, because the itemId is unknown until the items are inserted. If not provided, the currentItem value will be the same as before the insertion (unless currentItemId is provided). This param allows to make atomic the common use case of insert and play an item.
     */
    currentItemIndex?: number;

    /**
     * Seconds since the beginning of content to start playback of the current item. If provided, this value will take precedence over the startTime value provided at the QueueItem level but only the first time the item is played. This is to cover the common case where the user jumps to the middle of an item so the currentTime does not apply to the item permanently like the QueueItem startTime does. It avoids having to reset the startTime dynamically (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * ID of the item that will be located immediately after the inserted list. If the ID is not found or it is not provided, the list will be appended at the end of the existing list.
     */
    insertBefore?: number;

    /**
     * List of queue items. The itemId field of the items should be empty. It is sorted (first element will be played first).
     */
    items: Array<QueueItem>;
  }

  /**
   * Represents a data message containing the full list of queue ids.
   */
  declare export class QueueIds {
    /**
     * List of queue item ids.
     */
    itemIds?: Array<number>;

    /**
     * The corresponding request id.
     */
    requestId?: number;

    /**
     *
     */
    type: MessageType;
  }

  /**
   * Queue data as part of the LOAD request.
   */
  declare export class QueueData {
    constructor(
      id?: string,
      name?: string,
      description?: string,
      repeatMode?: RepeatMode,
      items?: Array<QueueItem>,
      startIndex?: number,
      startTime?: number,
    ): QueueData;

    /**
     * Description of the queue.
     */
    description?: string;

    /**
     * Optional Queue entity id, provide Google Assistant deep link.
     */
    entity?: string;

    /**
     * Id of the queue.
     */
    id?: string;

    /**
     * Array of queue items. It is sorted (first element will be played first).
     */
    items?: Array<QueueItem>;

    /**
     * Name of the queue.
     */
    name?: string;

    /**
     * Queue type, e.g. album, playlist, radio station, tv series, etc.
     */
    queueType?: QueueType;

    /**
     * Continuous playback behavior of the queue.
     */
    repeatMode?: RepeatMode;

    /**
     * The index of the item in the queue that should be used to start playback first.
     */
    startIndex?: number;

    /**
     * Seconds (since the beginning of content) to start playback of the first item.
     */
    startTime?: number;
  }

  /**
   * Represents a queue change message, such as insert, remove, and update.
   */
  declare export class QueueChange {
    /**
     * The actual queue change type.
     */
    changeType?: QueueChangeType;

    /**
     * The id to insert the list of itemIds before.
     */
    insertBefore?: number;

    /**
     * List of changed itemIds.
     */
    itemIds?: Array<number>;

    /**
     * The corresponding request id.
     */
    requestId?: number;

    /**
     * The queue change sequence ID. Used to coordinate state sync between various senders and the receiver.
     */
    sequenceNumber?: number;

    /**
     *
     */
    type: MessageType;
  }

  /**
   * Media event PRELOAD request data.
   */
  declare export class PreloadRequestData extends LoadRequestData {
    constructor(itemId: number): PreloadRequestData;

    /**
     * The ID of the queue item.
     */
    itemId: number;
  }

  /**
   * Media event PRECACHE request data. (Some fields of the load request, like autoplay and queueData, are ignored).
   */
  declare export class PrecacheRequestData extends LoadRequestData {
    constructor(data?: string): PrecacheRequestData;

    /**
     * Application precache data.
     */
    precacheData?: string;
  }

  /**
   * PlayString request data.
   */
  declare export class PlayStringRequestData {
    constructor(
      stringId: PlayStringId,
      opt_arguments?: Array<string>,
    ): PlayStringRequestData;

    /**
     * An optional array of string values to be filled into the text.
     */
    arguments?: Array<string>;

    /**
     * An identifier for the text to be played back.
     */
    stringId: PlayStringId;
  }

  /**
   * A photo media description.
   */
  declare export class PhotoMediaMetadata {
    /**
     * Name of the photographer.
     */
    artist?: string;

    /**
     * ISO 8601 date and time the photo was taken, e.g. 2014-02-10T15:47:00Z.
     */
    creationDateTime?: string;

    /**
     * Photo height, in pixels.
     */
    height?: number;

    /**
     * Images associated with the content. Examples would include a photo thumbnail.
     */
    images: Array<Image>;

    /**
     * Latitude.
     */
    latitude?: number;

    /**
     * Location where the photo was taken. For example, "Seattle, Washington, USA".
     */
    location?: string;

    /**
     * Longitude.
     */
    longitude?: number;

    /**
     * Photo title.
     */
    title?: string;

    /**
     * Photo width, in pixels.
     */
    width?: number;
  }

  /**
   * A music track media description.
   */
  declare export class MusicTrackMediaMetadata {
    /**
     * Album artist name.
     */
    albumArtist?: string;

    /**
     * Album name.
     */
    albumName?: string;

    /**
     * Track artist name.
     */
    artist?: string;

    /**
     * @deprecated: use @see{@link artist} instead
     */
    artistName: string;

    /**
     * Track composer name.
     */
    composer?: string;

    /**
     * Disc number. A positive integer.
     */
    discNumber?: number;

    /**
     * Content images. Examples would include cover art or a thumbnail of the currently playing media.
     */
    images: Array<Image>;

    /**
     * ISO 8601 date when the track was released, e.g. 2014-02-10.
     */
    releaseDate?: string;

    /**
     * @deprecated: Use @see{@link releaseDate} instead
     */
    releaseYear?: string;

    /**
     * Track name.
     */
    songName?: string;

    /**
     * Track title.
     */
    title?: string;

    /**
     * Track number in album. A positive integer.
     */
    trackNumber?: number;
  }

  /**
   * A movie media description.
   */
  declare export class MovieMediaMetadata {
    /**
     * Content images. Examples would include cover art or a thumbnail of the currently playing media.
     */
    images: Array<Image>;

    /**
     * ISO 8601 date when the movie was released, e.g. 2014-02-10.
     */
    releaseDate?: string;

    /**
     * @deprecated: use @see{@link releaseDate} instead
     */
    releaseYear?: number;

    /**
     * Movie studio.
     */
    studio?: string;

    /**
     * Movie subtitle.
     */
    subtitle?: string;

    /**
     * Movie title.
     */
    title?: string;
  }
  /**
   * Represents the status of a media session.
   */
  declare export class MediaStatus {
    /**
     * List of IDs corresponding to the active tracks.
     */
    activeTrackIds: Array<number>;

    /**
     * Status of break, if receiver is playing break. This field will be defined only when receiver is playing break.
     */
    breakStatus: BreakStatus;

    /**
     * ID of this media item (the item that originated the status change).
     */
    currentItemId?: number;

    /**
     * The current playback position.
     */
    currentTime: number;

    /**
     * Application-specific media status.
     */
    customData?: mixed;

    /**
     * Extended media status information.
     */
    extendedStatus: ExtendedMediaStatus;

    /**
     * If the state is IDLE, the reason the player went to IDLE state.
     */
    idleReason: IdleReason;

    /**
     * List of media queue items.
     */
    items: Array<QueueItem>;

    /**
     * Seekable range of a live or event stream. It uses relative media time in seconds. It will be undefined for VOD streams.
     */
    liveSeekableRange: LiveSeekableRange;

    /**
     * ID of the media Item currently loading. If there is no item being loaded, it will be undefined.
     */
    loadingItemId?: number;

    /**
     * The media information.
     */
    media: MediaInformation;

    /**
     * Unique id for the session.
     */
    mediaSessionId: number;

    /**
     * The playback rate.
     */
    playbackRate: number;

    /**
     * The playback state.
     */
    playerState: PlayerState;

    /**
     * ID of the next Item, only available if it has been preloaded. Media items can be preloaded and cached temporarily in memory, so when they are loaded later on, the process is faster (as the media does not have to be fetched from the network).
     */
    preloadedItemId?: number;

    /**
     * Queue data.
     */
    queueData: QueueData;

    /**
     * The behavior of the queue when all items have been played.
     */
    repeatMode: RepeatMode;

    /**
     * The commands supported by this player.
     */
    supportedMediaCommands: number;

    /**
     *
     */
    type: MessageType;

    /**
     * The video information.
     */
    videoInfo: VideoInformation;

    /**
     * The current stream volume.
     */
    volume: Volume;
  }
  /**
   * Common media metadata used as part of MediaInformation
   */
  declare export class MediaMetadata {
    constructor(type: MetadataType): MediaMetadata;

    /**
     * The type of metadata
     */
    metadataType: MetadataType;
  }

  /**
   * Represents the media information.
   */
  declare export class MediaInformation {
    /**
     * Partial list of break clips that includes current break clip that receiver is playing or ones that receiver will play shortly after, instead of sending whole list of clips. This is to avoid overflow of MediaStatus message.
     */
    breakClips: Array<BreakClip>;

    /**
     * List of breaks.
     */
    breaks: Array<Break>;

    /**
     * Typically the url of the media.
     */
    contentId: string;

    /**
     *  The content MIME type.
     */
    contentType: string;

    /**
     * Optional media url, to allow using contentId for real id. If contentUrl is provided, it will be used as media url, otherwise the contentId will be used as the media url.
     */
    contentUrl?: string;

    /**
     * Application-specific media information.
     */
    customData?: mixed;

    /**
     * The media duration.
     */
    duration?: number;

    /**
     * Optional Media entity, provide Google Assistant deep link.
     */
    entity?: string;

    /**
     * The format of the HLS media segment.
     */
    hlsSegmentFormat: HlsSegmentFormat;

    /**
     * The media metadata.
     */
    metadata: MediaMetadata;

    /**
     * The stream type.
     */
    streamType: StreamType;

    /**
     * The style of text track.
     */
    textTrackStyle: TextTrackStyle;

    /**
     * The media tracks.
     */
    tracks: Array<Track>;
  }

  /**
   * Media event LOAD request data.
   */
  declare export class LoadRequestData extends RequestData {
    /**
     * Array of trackIds that are active. If the array is not provided, the default tracks will be active.
     */
    activeTrackIds: Array<number>;

    /**
     * If the autoplay parameter is specified, the media player will begin playing the content when it is loaded. Even if autoplay is not specified,the media player implementation may choose to begin playback immediately.
     */
    autoplay?: boolean;

    /**
     * Optional user credentials.
     */
    credentials?: string;

    /**
     * Optional credentials type. The type 'cloud' is a reserved type used by load requests that were originated by voice assistant commands.
     */
    credentialsType?: string;

    /**
     * Seconds since beginning of content. If the content is live content, and currentTime is not specified, the stream will start at the live position.
     */
    currentTime?: number;

    /**
     * If the autoplay parameter is specified, the media player will begin playing the content when it is loaded. Even if autoplay is not specified, the media player implementation may choose to begin playback immediately.
     */
    media: MediaInformation;

    /**
     * The media playback rate.
     */
    playbackRate?: number;

    /**
     * Queue data.
     */
    queueData: QueueData;
  }

  /**
   * LoadByEntity request data.
   */
  declare export class LoadByEntityRequestData {
    /**
     * Content entity information, typically represented by a stringified JSON object
     */
    entity: string;

    /**
     *  Shuffle the items to play.
     */
    shuffle?: boolean;

    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source?: string | null;
  }

  /**
   * Provides live seekable range with start and end time in seconds and two more attributes.
   */
  declare export class LiveSeekableRange {
    constructor(
      start?: number,
      end?: number,
      isMovingWindow?: boolean,
      isLiveDone?: boolean,
    ): LiveSeekableRange;

    /**
     * A boolean value indicates whether a live stream is ended. If it is done, the end of live seekable range should stop updating.
     */
    isLiveDone?: boolean;

    /**
     * A boolean value indicates whether the live seekable range is a moving window. If false, it will be either a expanding range or a fixed range meaning live has ended.
     */
    isMovingWindow?: boolean;
  }

  /**
   * Represents a data message containing item information for each requested ids.
   */
  declare export class ItemsInfo {
    /**
     * List of changed itemIds.
     */
    items: Array<QueueItem>;

    /**
     * The corresponding request id.
     */
    requestId?: number;

    /**
     *
     */
    type: MessageType;
  }

  /**
   * An image that describes a receiver application or media item.
   * This could be an application icon, cover art, or a thumbnail.
   */
  declare export class Image {
    constructor(url: string): Image;

    /**
     * The height of the image.
     */
    height?: number;

    /**
     * the URL to the image
     */
    url: string;

    /**
     * The width of the image
     */
    width?: number;
  }
  /** Media event GET_STATUS request data. */
  declare export class GetStatusRequestData extends RequestData {
    /**
     * The options of a GET_STATUS request.
     */
    options: GetStatusOptions;
  }

  /**
   * Get items info request data.
   */
  declare export class GetItemsInfoRequestData extends RequestData {
    constructor(itemIds: Array<number>): GetItemsInfoRequestData;

    /**
     * List of item ids to be requested.
     */
    itemIds: Array<number>;
  }
  /**
   * A generic media description.
   */
  declare export class GenericMediaMetadata {
    /**
     * Content images. Examples would include cover art or a thumbnail of the currently playing media.
     */
    images: Array<Image>;

    /**
     * ISO 8601 date and/or time when the content was released, e.g. 2014-02-10.
     */
    releaseDate?: string;

    /**
     *@deprecated - use @see{@link releaseDate} instead
     */
    releaseYear?: number;

    /**
     * Content subtitle.
     */
    subtitle?: string;

    /**
     * Content title.
     */
    title?: string;
  }

  /**
   * Focus state change message.
   */
  declare export class FocusStateRequestData {
    /**
     * The focus state of the app.
     */
    state: FocusState;
  }

  /** Fetch items request data. */
  declare export class FetchItemsRequestData extends RequestData {
    constructor(
      itemId: number,
      nextCount: number,
      prevCount: number,
    ): FetchItemsRequestData;

    /**
     * ID of the reference media item for fetching more items.
     */
    itemId: number;

    /**
     * Number of items after the reference item to be fetched.
     */
    nextCount: number;

    /**
     * Number of items before the reference item to be fetched.
     */
    prevCount: number;
  }

  /**
   * Extended media status information
   */
  declare export class ExtendedMediaStatus {
    constructor(
      playerState: MediaInformation,
      opt_media?: MediaInformation,
    ): ExtendedMediaStatus;

    /**
     *
     */
    media: MediaInformation;

    /**
     *
     */
    playerState: ExtendedPlayerState;
  }

  /** Event data for @see{@link EventType.ERROR} event. */
  declare export class ErrorEvent {
    constructor(
      detailedErrorCode?: DetailedErrorCode,
      error?: mixed,
    ): ErrorEvent;
    /**
     * An error code representing the cause of the error.
     */
    detailedErrorCode?: DetailedErrorCode;

    /**
     * The error object.
     * This could be an Error object (e.g., if an Error was thrown in an event handler)
     * or an object with error information (e.g., if the receiver received an invalid command).
     */
    error?: mixed;
  }

  declare export class ErrorData {
    constructor(type: ErrorType): ErrorData;

    /**
     * Application-specific data for this request.
     * It enables the sender and receiver to easily extend the media protocol without having to use a new namespace with custom messages.
     */
    customData?: mixed;

    /**
            Id of the request, used to correlate request/response.
           */
    requestId?: number;
  }

  /**  Media event EDIT_TRACKS_INFO request data. */
  declare export class EditTracksInfoRequestData extends RequestData {
    /**
     * Array of the Track trackIds that should be active.
     * If it is not provided, the active tracks will not change.
     * If the array is empty, no track will be active.
     */
    activeTrackIds?: Array<number>;

    /**
     * Flag to enable or disable text tracks.
     * If false it will disable all text tracks,
     * if true it will enable the first text track, or the previous active text tracks.
     * This flag is ignored if activeTrackIds or language is provided.
     */
    enableTextTracks?: boolean;

    /**
     * Indicates that the provided language was not explicit user request, but rather inferred from used language in voice query.
     * It allows receiver apps to use user saved preference instead of spoken language.
     */
    isSuggestedLanguage?: boolean;

    /**
     * Language for the tracks that should be active. The language field will take precedence over activeTrackIds if both are specified.
     */
    language?: string;

    /**
     *
     */
    textTrackStyle?: TextTrackStyle;
  }

  /**
   * Media event EDIT_AUDIO_TRACKS request data. If language is not provided, the default audio track for the media will be enabled.
   */
  declare export class EditAudioTracksRequestData extends RequestData {
    /**
     * Indicates that the provided language was not explicit user request, but rather inferred from used language in voice query.
     * It allows receiver apps to use user saved preference instead of spoken language.
     */
    isSuggestedLanguage?: boolean;

    /**
     *
     */
    language?: string;
  }

  /** DisplayStatus request data. */
  declare export class DisplayStatusRequestData {
    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source: string;
  }

  /** CustomCommand request data. */
  declare export class CustomCommandRequestData {
    /**
     * Custom Data, typically represented by a stringified JSON object.
     */
    data: string;

    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source: string;
  }
  /** Cloud media status. Media status that is only sent to the cloud sender. */
  declare export class CloudMediaStatus {
    constructor(): CloudMediaStatus;
  }

  declare export class BreakStatus {
    constructor(
      currentBreakTime: number,
      currentBreakClipTime: number,
    ): BreakStatus;

    /**
     * Id of current break clip.
     */
    breakClipId: string;

    /**
     * Id of current break.
     */
    breakId: string;

    /**
     * Time in sec elapsed after current break clip starts.
     */
    currentBreakClipTime: number;

    /**
     * Time in sec elapsed after current break starts.
     */
    currentBreakTime: number;

    /**
     * The time in sec when this break clip becomes skippable.
     * 5 means that end user can skip this break clip after 5 seconds.
     * If this field is not defined, it means that current break clip is not skippable.
     */
    whenSkippable: number;
  }

  /**
   * Represents break clip (e.g. a clip of ad during ad break)
   */
  declare export class BreakClip {
    constructor(id: string): BreakClip;

    /**
     * Url of page that sender will display, when end user clicks link on sender UI, while receiver is playing this clip.
     */
    clickThroughUrl?: string;
    /**
     * Typically the url of the break media (playing on the receiver).
     */
    contentId?: string;
    /**
     * The content MIME type.
     */
    contentType?: string;
    /**
     * Optional break media url, to allow using contentId for real id.
     * If contentUrl is provided, it will be used as media url, otherwise the contentId will be used as the media url.
     */
    contentUrl?: string;
    /**
     * Application-specific break clip data.
     */
    customData?: mixed;
    /**
     * Duration of break clip in sec.
     */
    duration?: number;
    /**
     * The format of the HLS media segment.
     */
    hlsSegmentFormat: HlsSegmentFormat;
    /**
     * Unique id of break clip.
     */
    id: string;
    /**
     * Url of content that sender will display while receiver is playing this clip.
     */
    posterUrl?: string;
    /**
     * Title of break clip. Sender might display this on its screen, if provided.
     */
    title?: string;
    /**
     * VAST ad request configuration. Used if contentId or contentUrl is not provided.
     */
    vastAdsRequest: VastAdsRequest;
    /**
     * The time in sec when this break clip becomes skippable.
     * 5 means that end user can skip this break clip after 5 seconds.
     * If this field is not defined, it means that current break clip is not skippable.
     */
    whenSkippable?: number;
  }

  /** Represents break (e.g. ad break) included in main video. */
  declare export class Break {
    constructor(
      id: string,
      breakClipIds: Array<string>,
      position: number,
    ): Break;
    /**
     * List of ids of break clip that this break includes.
     */
    breakClipIds: Array<string>;
    /**
     * Duration of break in sec.
     */
    duration?: number;
    /**
     * Unique id of break.
     */
    id: string;
    /**
     * If true, indicates this is embedded break in main stream.
     */
    isEmbedded?: boolean;
    /**
     * Whether break is watched.
     * Sender can change color of progress bar marker corresponding to this break once this field changes from false to true,
     *  denoting that the end-user already watched this break.
     */
    isWatched: boolean;
    /**
     * Where the break is located inside main video. -1 represents the end of main video.
     */
    position: number;
  }
}

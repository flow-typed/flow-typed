

declare module 'playerFramework' {
					
}

declare module 'npm$namespace$PlayerFramework' {
		declare interface PlaylistItem {
		src: string,
		tracks?: Array<any>
	}

		declare class TextTrackMode  {
		off: string;
		hidden: string;
		showing: string
	}

	declare class PluginBase  {
		isEnabled: boolean;
		isLoaded: boolean;
		isActive: boolean;
		mediaPlayer: MediaPlayer;
		currentMediaSource: MediaSource;
		load(): void;
		unload(): void;
		update(mediaSource: MediaSource): void
	}

	declare class InteractiveViewModel  {
		state: ViewModelState;
		startTime: number;
		maxTime: number;
		endTime: number;
		currentItem: number;
		bufferedPercentage: number;
		playPouseIcon: string;
		playPauseLabel: string;
		playPauseTooltip: string;
		isPlayPauseDisabled: boolean;
		isPlayPauseHidden: boolean;
		playResumeIcon: string;
		playResumeLabel: string;
		playResumeTooltip: string;
		isPlayResumeDisabled: boolean;
		isPlayResumeHidden: boolean;
		pauseIcon: string;
		pauseLabel: string;
		pauseTooltip: string;
		isPauseDisabled: boolean;
		isPauseHidden: boolean;
		replayIcon: string;
		replayLabel: string;
		replayTooltip: string;
		isReplayDisabled: boolean;
		isReplayHidden: boolean;
		rewindIcon: string;
		rewindLabel: string;
		rewindTooltip: string;
		isRewindDisabled: boolean;
		isRewindHidden: boolean;
		fastForwardIcon: string;
		fastForwardLabel: string;
		fastForwardTooltip: string;
		isFastForwardDisabled: boolean;
		isFastForwardHidden: boolean;
		slowMotionIcon: string;
		slowMotionLabel: string;
		slowMotionTooltip: string;
		isSlowMotionDisabled: boolean;
		isSlowMotionHidden: boolean;
		skipPreviousIcon: string;
		skipPreviousLabel: string;
		skipPreviousTooltip: string;
		isSkipPreviousDisabled: boolean;
		isSkipPreviousHidden: boolean;
		skipNextIcon: string;
		skipNextLabel: string;
		skipNextTooltip: string;
		isSkipNextDisabled: boolean;
		isSkipNextHidden: boolean;
		skipBackIcon: string;
		skipBackLabel: string;
		skipBackTooltip: string;
		isSkipBackDisabled: boolean;
		isSkipBackHidden: boolean;
		skipAheadIcon: string;
		skipAheadLabel: string;
		skipAheadTooltip: string;
		isSkipAheadDisabled: boolean;
		isSkipAheadHidden: boolean;
		elapsedTime: number;
		elapsedTimeText: string;
		elapsedTimeLabel: string;
		elapsedTimeTooltip: string;
		isElapsedTimeDisabled: boolean;
		isElapsedTimeHidden: boolean;
		remainingTime: number;
		remainingTimeText: string;
		remainingTimeLabel: string;
		remainingTimeTooltip: string;
		isRemainingTimeDisabled: boolean;
		isRemainingTimeHidden: boolean;
		totalTime: number;
		totalTimeText: string;
		totalTimeLabel: string;
		totalTimeTooltip: string;
		isTotalTimeDisabled: boolean;
		isTotalTimeHidden: boolean;
		timelineLabel: string;
		timelineTooltip: string;
		isTimelineDisabled: boolean;
		isTimelineHidden: boolean;
		goLiveText: string;
		goLiveLabel: string;
		goLiveTooltip: string;
		isGoLiveDisabled: boolean;
		isGoLiveHidden: boolean;
		captionsIcon: string;
		captionsLabel: string;
		captionsTooltip: string;
		isCaptionsDisabled: boolean;
		audioIcon: string;
		audioLabel: string;
		audioTooltip: string;
		isAudioDisabled: boolean;
		isAudioHidden: boolean;
		volume: number;
		volumeMuteIcon: string;
		volumeMuteLabel: string;
		volumeMuteTooltip: string;
		isVolumeMuteDisabled: boolean;
		isVolumeMuteHidden: boolean;
		volumeIcon: string;
		volumeLabel: string;
		volumeTooltip: string;
		isVolumeDisabled: boolean;
		isVolumeHidden: boolean;
		muteIcon: string;
		muteLabel: string;
		muteTooltip: string;
		isMuteDisabled: boolean;
		isMuteHidden: boolean;
		fullScreenIcon: string;
		fullScreenLabel: string;
		fullScreenTooltip: string;
		isFullScreenDisabled: boolean;
		isFullScreenHidden: boolean;
		stopIcon: string;
		stopLabel: string;
		stopTooltip: string;
		isStopDisabled: boolean;
		isStopHidden: boolean;
		infoIcon: string;
		infoLabel: string;
		infoTooltip: string;
		isInfoDisabled: boolean;
		isInfoHidden: boolean;
		moreIcon: string;
		moreLabel: string;
		moreTooltip: string;
		isMoreDisabled: boolean;
		isMoreHidden: boolean;
		zoomIcon: string;
		zoomLabel: string;
		zoomTooltip: string;
		isZoomDisabled: boolean;
		isZoomHidden: boolean;
		signalStrength: number;
		signalStrengthLabel: string;
		signalStrengthTooltip: string;
		isSignalStrengthDisabled: boolean;
		isSignalStrengthHidden: boolean;
		mediaQuality: MediaQuality;
		mediaQualityLabel: string;
		mediaQualityTooltip: string;
		isMediaQualityDisabled: boolean;
		isMediaQualityHidden: boolean;
		visualMarkers: Array<any>;
		thumbnailImageSrc: string;
		isThumbnailVisible: boolean;
		mediaMetadata: Object;
		uninitialize(): void;
		playPause(e?: any): void;
		playResume(): void;
		pause(): void;
		replay(): void;
		rewind(): void;
		fastForward(): void;
		slowMotion(): void;
		skipPrevious(): void;
		skipNext(): void;
		skipBack(): void;
		skipAhead(): void;
		startScrub(time: number): void;
		updateScrub(time: number): void;
		completeScrub(time: number): void;
		goLive(): void;
		setVolume(volume: number): void;
		toggleMutted(): void;
		toggleFullScreen(): void;
		stop(): void;
		info(): void;
		more(): void;
		toggleZoom(): void;
		captions(): void;
		audio(): void;
		onTimelineSliderStart(e: any): void;
		onTimelineSliderUpdate(e: any): void;
		onTimelineSliderComplete(e: any): void;
		onTimelineSliderSkipToMarker(e: any): void;
		onVolumeSliderUpdate(e: any): void;
		onVolumeMuteClick(e: any): void;
		onVolumeMuteFocus(e: any): void;
		onVolumeMuteSliderUpdate(e: any): void;
		onVolumeMuteSliderFocusIn(e: any): void;
		onVolumeMuteSliderFocusOut(e: any): void;
		onVolumeMuteSliderMSPointerOver(e: any): void;
		onVolumeMuteSliderMSPointerOut(e: any): void;
		onVolumeMuteSliderTransitionEnd(e: any): void
	}

	declare class MediaPlayer  {
		constructor(element: HTMLElement, options?: any): this;
		advertisingState: AdvertisingState;
		audioTracks: Array<any>;
		autobuffer: boolean;
		autohide: boolean;
		autohideBehavior: AutohideBehavior;
		autohideTime: number;
		autoload: boolean;
		autoplay: boolean;
		buffered: Array<any>;
		captionTracks: Array<any>;
		controls: boolean;
		currentAudioTrack: any;
		currentCaptionTrack: any;
		currentSrc: string;
		currentTime: number;
		defaultInteractiveViewModel: InteractiveViewModel;
		defaultPlaybackRate: number;
		duration: number;
		element: HTMLElement;
		ended: boolean;
		endTime: number;
		error: MediaError;
		height: string;
		initialTime: number;
		interactiveActivationMode: InteractionType;
		interactiveDeactivationMode: InteractionType;
		interactiveViewModel: InteractiveViewModel;
		isAudioAllowed: boolean;
		isAudioEnabled: boolean;
		isAudioVisible: boolean;
		isCaptionsAllowed: boolean;
		isCaptionsEnabled: boolean;
		isCaptionsVisible: boolean;
		isCurrentTimeLive: boolean;
		isElapsedTimeAllowed: boolean;
		isElapsedTimeEnabled: boolean;
		isElapsedTimeVisible: boolean;
		isFastForwardAllowed: boolean;
		isFastForwardEnabled: boolean;
		isFastForwardVisible: boolean;
		isFullScreen: boolean;
		isFullScreenAllowed: boolean;
		isFullScreenEnabled: boolean;
		isFullScreenVisible: boolean;
		isGoLiveAllowed: boolean;
		isGoLiveEnabled: boolean;
		isGoLiveVisible: boolean;
		isInteractive: boolean;
		isLive: boolean;
		isMediaQualityAllowed: boolean;
		isMediaQualityEnabled: boolean;
		isMediaQualityVisible: boolean;
		isMuteAllowed: boolean;
		isMuteEnabled: boolean;
		isMuteVisible: boolean;
		isPauseAllowed: boolean;
		isPauseEnabled: boolean;
		isPauseVisible: boolean;
		isPlayPauseAllowed: boolean;
		isPlayPauseEnabled: boolean;
		isPlayPauseVisible: boolean;
		isPlayResumeAllowed: boolean;
		isPlayResumeEnabled: boolean;
		isPlayResumeVisible: boolean;
		isRemainingTimeAllowed: boolean;
		isRemainingTimeEnabled: boolean;
		isRemainingTimeVisible: boolean;
		isReplayAllowed: boolean;
		isReplayEnabled: boolean;
		isReplayVisible: boolean;
		isRewindAllowed: boolean;
		isRewindEnabled: boolean;
		isRewindVisible: boolean;
		isSignalStrengthAllowed: boolean;
		isSignalStrengthEnabled: boolean;
		isSignalStrengthVisible: boolean;
		isSkipAheadAllowed: boolean;
		isSkipAheadEnabled: boolean;
		isSkipAheadVisible: boolean;
		isSkipBackAllowed: boolean;
		isSkipBackEnabled: boolean;
		isSkipBackVisible: boolean;
		isSkipNextAllowed: boolean;
		isSkipNextEnabled: boolean;
		isSkipNextVisible: boolean;
		isSkipPreviousAllowed: boolean;
		isSkipPreviousEnabled: boolean;
		isSkipPreviousVisible: boolean;
		isSlowMotion: boolean;
		isSlowMotionAllowed: boolean;
		isSlowMotionEnabled: boolean;
		isSlowMotionVisible: boolean;
		isStartTimeOffset: boolean;
		isTimelineAllowed: boolean;
		isTimelineEnabled: boolean;
		isTimelineVisible: boolean;
		isVolumeAllowed: boolean;
		isVolumeEnabled: boolean;
		isVolumeMuteAllowed: boolean;
		isVolumeMuteEnabled: boolean;
		isVolumeMuteVisible: boolean;
		isVolumeVisible: boolean;
		liveTime: number;
		liveTimeBuffer: number;
		loop: boolean;
		mediaElement: HTMLMediaElement;
		mediaExtensionManager: Windows.Media.MediaExtensionManager;
		mediaQuality: MediaQuality;
		msAudioCategory: string;
		msAudioDeviceType: string;
		msHorizontalMirror: boolean;
		msIsLayoutOptimalForPlayback: boolean;
		msIsStereo3D: boolean;
		msPlayToDisabled: boolean;
		msPlayToPrimary: boolean;
		msPlayToSource: Object;
		msRealTime: boolean;
		msStereo3DPackingMode: string;
		msStereo3DRenderMode: string;
		msZoom: boolean;
		muted: boolean;
		networkState: NetworkState;
		paused: boolean;
		playbackRate: number;
		played: Array<any>;
		playlistPlugin: Plugins.PlaylistPlugin;
		playerState: PlayerState;
		plugins: Array<any>;
		poster: string;
		preload: string;
		readyState: ReadyState;
		replayOffset: number;
		scrubbing: boolean;
		seekable: any;
		seeking: boolean;
		seekWhileScrubbing: boolean;
		signalStrength: number;
		skipAheadInterval: number;
		skipBackInterval: number;
		slowMotionPlaybackRate: number;
		sources: Array<any>;
		src: string;
		startTime: number;
		startupTime: number;
		testForMediaPack: boolean;
		textTracks: any;
		tracks: Array<any>;
		videoHeight: number;
		videoWidth: number;
		volume: number;
		width: string;
		addClass(name: string): void;
		addEventListener(type: string, listener: Function, capture?: boolean): void;
		addTextTrack(kind: string, label?: string, language?: string): void;
		audio(): void;
		canPlayType(type: string): string;
		captions(): void;
		decreasePlaybackRate(): void;
		dispose(): void;
		focus(): void;
		increasePlaybackRate(): void;
		info(): void;
		load(): void;
		more(): void;
		msClearEffects(): void;
		msFrameStep(forward: boolean): void;
		msInsertAudioEffect(activatableClassId: string, effectRequired: boolean, config: Object): void;
		msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config: Object): void;
		msSetMediaKeys(mediaKeys: MSMediaKeys): void;
		msSetMediaProtectionManager(mediaProtectionManager: Windows.Media.Protection.MediaProtectionManager): void;
		msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
		pause(): void;
		play(): void;
		playResume(): void;
		removeClass(name: string): void;
		removeEventListener(eventName: string, eventHandler: Function): void;
		replay(): void;
		retry(): void;
		stop(): void;
		update(mediaSource: Object): void
	}

	declare class DynamicTextTrack  {
		stream: any;
		label: string;
		language: string;
		augmentPayload(payload: any, startTime: number, endTime: number): void
	}

	
}

declare module 'Plugins' {
				declare class TrackingPluginBase extends PluginBase {
		trackingEvents: Array<any>
	}

	declare class BufferingPlugin extends PluginBase {
		hide(): void;
		show(): void
	}

	declare class ControlPlugin extends PluginBase {
		compactThresholdInInches(): number;
		hide(): void;
		isCompact(): boolean;
		orientation(): string;
		show(): void
	}

	declare class ErrorPlugin extends PluginBase {
		hide(): void;
		show(): void
	}

	declare class LoaderPlugin extends PluginBase {
		hide(): void;
		show(): void
	}

	declare class PlaylistPlugin extends PluginBase {
		autoAdvance: boolean;
		currentPlaylistItem: PlaylistItem;
		currentPlaylistItemIndex: number;
		playlist: Array<PlaylistItem>;
		startupPlaylistItemIndex: number;
		skipBackThreshold: number;
		goToPreviousPlaylistItem(): void;
		goToNextPlaylistItem(): void;
		canGoToPreviousPlaylistItem(): boolean;
		canGoToNextPlaylistItem(): boolean
	}

	declare class PlayTimeTrackingPlugin extends PluginBase {
		playTime: number;
		playTimePercentage: number
	}

	declare class PositionTrackingPlugin extends PluginBase {
		evaluateOnForwardOnly: boolean;
		position: number;
		positionPercentage: number
	}

	declare class SystemTransportControlsPlugin extends PluginBase {
		isPreviousTrackEnabled: boolean;
		isNextTrackEnabled: boolean;
		nextTrackExists: boolean;
		previousTrackExists: boolean
	}

	declare class ChaptersPlugin extends PluginBase {
		defaultChapterCount: number;
		autoCreateDefaultChapters: boolean;
		autoCreateChaptersFromTextTracks: boolean;
		visualMarkerClass: string
	}

	declare class DisplayRequestPlugin extends PluginBase {
		isRequestActive: boolean
	}

	declare class CaptionSelectorPlugin extends PluginBase {
		hide(): void;
		show(): void;
		alignment: string;
		anchor: HTMLElement;
		placement: string
	}

	declare class AudioSelectorPlugin extends PluginBase {
		hide(): void;
		show(): void;
		alignment: string;
		anchor: HTMLElement;
		placement: string
	}

	
}

declare module 'UI' {
				declare class Button  {
		element: HTMLElement;
		type: string;
		content: string;
		hoverContent: string;
		label: string;
		tooltip: string;
		disabled: boolean;
		hidden: boolean;
		flyout: Element
	}

	declare class ControlPanel  {
		element: HTMLElement;
		hidden: boolean;
		isPlayPauseHidden: boolean;
		isPlayResumeHidden: boolean;
		isPauseHidden: boolean;
		isReplayHidden: boolean;
		isRewindHidden: boolean;
		isFastForwardHidden: boolean;
		isSlowMotionHidden: boolean;
		isSkipPreviousHidden: boolean;
		isSkipNextHidden: boolean;
		isSkipBackHidden: boolean;
		isSkipAheadHidden: boolean;
		isElapsedTimeHidden: boolean;
		isRemainingTimeHidden: boolean;
		isTotalTimeHidden: boolean;
		isTimelineHidden: boolean;
		isGoLiveHidden: boolean;
		isCaptionsHidden: boolean;
		isAudioHidden: boolean;
		isVolumeMuteHidden: boolean;
		isVolumeHidden: boolean;
		isMuteHidden: boolean;
		isFullScreenHidden: boolean;
		isStopHidden: boolean;
		isInfoHidden: boolean;
		isMoreHidden: boolean;
		isZoomHidden: boolean;
		isSignalStrengthHidden: boolean;
		isMediaQualityHidden: boolean;
		flyoutContainerElement: HTMLElement
	}

	declare class Indicator  {
		element: HTMLElement;
		value: string;
		label: string;
		tooltip: string;
		disabled: boolean;
		hidden: boolean
	}

	declare class Meter  {
		element: HTMLElement;
		value: number;
		label: string;
		tooltip: string;
		disabled: boolean;
		hidden: boolean
	}

	declare class Slider  {
		element: HTMLElement;
		min: number;
		max: number;
		value: number;
		progress: number;
		step: number;
		altStep1: number;
		altStep2: number;
		altStep3: number;
		label: string;
		tooltip: string;
		vertical: boolean;
		disabled: boolean;
		hidden: boolean;
		markers: Array<any>;
		thumbnailImageSrc: string;
		isThumbnailVisible: boolean
	}

	
}

declare module 'Advertising' {
		declare interface AdvertisementBase {
		source: any
	}

		declare class PrerollAdvertisement extends AdvertisementBase {
		source: any
	}

	declare class MidrollAdvertisement extends AdvertisementBase {
		source: any;
		time: number;
		timePercentage: number
	}

	declare class RemoteAdSource  {
		
	}

	
}

declare module 'VideoAdvertising' {
				declare class VastAdPayloadHandler  {
		adType: string
	}

	declare class Extensions  {
		defaultUserAgent: string
	}

	
}
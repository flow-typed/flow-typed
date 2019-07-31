declare module 'react-native-video' {
  // https://github.com/react-native-community/react-native-video/blob/125d5dc9c54dd243742a204746b5a227d7b1e723/TextTrackType.js#L1-L5

  // iOS only supports VTT, Android ExoPlayer supports all 3
  declare export type TextTrackTypes = $ReadOnly<{|
    SRT: 'application/x-subrip',
    TTML: 'application/ttml+xml',
    VTT: 'text/vtt',
  |}>;

  // https://github.com/react-native-community/react-native-video/blob/master/VideoResizeMode.js#L4-L6
  declare export type VideoResizeMode = 'contain' | 'cover' | 'stretch';

  // https://github.com/facebook/react-native/blob/6feb3dc837bb531cbcfa922e8ef50879aad25fd4/Libraries/Image/ImageProps.js#L156
  declare export type PosterResizeMode =
    | 'cover'
    | 'contain'
    | 'stretch'
    | 'repeat'
    | 'center';

  // https://github.com/react-native-community/react-native-video/blob/125d5dc9c54dd243742a204746b5a227d7b1e723/FilterType.js#L1-L18
  declare export type FilterTypes = $ReadOnly<{|
    NONE: '',
    INVERT: 'CIColorInvert',
    MONOCHROME: 'CIColorMonochrome',
    POSTERIZE: 'CIColorPosterize',
    FALSE: 'CIFalseColor',
    MAXIMUMCOMPONENT: 'CIMaximumComponent',
    MINIMUMCOMPONENT: 'CIMinimumComponent',
    CHROME: 'CIPhotoEffectChrome',
    FADE: 'CIPhotoEffectFade',
    INSTANT: 'CIPhotoEffectInstant',
    MONO: 'CIPhotoEffectMono',
    NOIR: 'CIPhotoEffectNoir',
    PROCESS: 'CIPhotoEffectProcess',
    TONAL: 'CIPhotoEffectTonal',
    TRANSFER: 'CIPhotoEffectTransfer',
    SEPIA: 'CISepiaTone',
  |}>;

  // https://github.com/react-native-community/react-native-video#selectedaudiotrack
  declare export type SelectedTrackDescriptor =
    | {|
        type: 'system',
        value?: mixed,
      |}
    | {|
        type: 'disabled',
        value?: mixed,
      |}
    | {|
        type: 'title',
        value: string,
      |}
    | {|
        type: 'language',
        value: string,
      |}
    | {|
        type: 'index',
        value: number,
      |};

  declare export type SelectedVideoTrackDescriptor =
    | {|
        type: 'resolution' | 'index',
        value: number,
      |}
    | {|
        type: 'auto' | 'disabled',
      |};

  declare export type TrackType = $Values<TextTrackTypes>;

  declare export type TrackDescriptor = $ReadOnly<{|
    title?: string,
    uri: string,
    type: TrackType,
    language: string,
  |}>;

  declare export type BufferConfigDescriptor = $ReadOnly<{|
    minBufferMs?: number,
    maxBufferMs?: number,
    bufferForPlaybackMs?: number,
    bufferForPlaybackAfterRebufferMs?: number,
  |}>;

  declare export type SilentSwitchType = 'inherit' | 'ignore' | 'obey';

  declare export type OrientationType = 'all' | 'landscape' | 'portrait';

  declare export type VideoSource =
    | number
    | {| uri: string, headers?: { [key: string]: string | number } |};

  declare export type VideoEvent<T: {}> = $ReadOnly<{|
    target: number,
    ...$Exact<T>,
  |}>;

  declare export type LoadEvent = VideoEvent<
    $ReadOnly<{
      audioTracks: $ReadOnlyArray<TrackDescriptor>,
      canPlayFastForward: boolean,
      canPlayReverse: boolean,
      canPlaySlowForward: boolean,
      canPlaySlowReverse: boolean,
      canStepBackward: boolean,
      canStepForward: boolean,
      currentTime: number,
      duration: number,
      naturalSize: $ReadOnly<{|
        height: number,
        orientation: string,
        width: number,
      |}>,
      textTracks: $ReadOnlyArray<TrackDescriptor>,
    }>
  >;

  declare export type ProgressEvent = VideoEvent<{
    +currentTime: number,
    +playableDuration: number,
    +seekableDuration: number,
  }>;

  declare export type AudioFocusChangedEvent = VideoEvent<{
    +hasAudioFocus: boolean,
  }>;

  declare export type BufferEvent = VideoEvent<{ +isBuffering: boolean }>;

  declare export type LoadStartEvent = VideoEvent<{
    +isNetwork: boolean,
    +type: string,
    +uri: string,
  }>;

  declare export type PlaybackRateEvent = VideoEvent<{
    +playbackRate: number,
  }>;

  declare export type ErrorEvent = VideoEvent<{
    +error: {|
      +domain: string,
      +code: number,
    |},
  }>;

  declare export type BandwidthUpdateEvent = VideoEvent<{
    +bitrate: number,
  }>;

  declare export type SeekEvent = VideoEvent<{
    +currentTime: number,
    +seekTime: number,
  }>;

  declare export type TimedMetadata = {| +value: string, +identifier: string |};

  declare export type TimedMetadataEvent = VideoEvent<{
    +metadata: $ReadOnlyArray<TimedMetadata>,
  }>;

  declare export type ExternalPlaybackActiveEvent = VideoEvent<{
    +isExternalPlaybackActive: boolean,
  }>;

  declare export type EventWithoutData = VideoEvent<{}>;

  declare export type VideoProps = $ReadOnly<{
    source: VideoSource, // Required prop

    controls?: boolean,
    audioOnly?: boolean,
    id?: string, // for Web platform
    maxBitRate?: number,
    muted?: boolean,
    paused?: boolean,
    playInBackground?: boolean,
    poster?: string,
    posterResizeMode?: PosterResizeMode,
    progressUpdateInterval?: number,
    rate?: number,
    repeat?: boolean,
    resizeMode?: VideoResizeMode,
    selectedAudioTrack?: SelectedTrackDescriptor,
    selectedTextTrack?: SelectedTrackDescriptor,
    textTracks?: Array<TrackDescriptor>,
    volume?: number,

    // IOS only
    allowsExternalPlayback?: boolean,
    filter?: $Values<FilterTypes>,
    filterEnabled?: boolean,
    fullscreen?: boolean,
    fullscreenAutorotate?: boolean,
    fullscreenOrientation?: OrientationType,
    ignoreSilentSwitch?: SilentSwitchType,
    playWhenInactive?: boolean,
    pictureInPicture?: boolean,
    onPictureInPictureStatusChanged?: (
      VideoEvent<{ isActive: boolean }>
    ) => void,
    onRestoreUserInterfaceForPictureInPictureStop?: () => void,

    // Android only
    minLoadRetryCount?: number,
    bufferConfig?: BufferConfigDescriptor,
    hideShutterView?: boolean,
    reportBandwidth?: number,
    selectedVideoTrack?: SelectedVideoTrackDescriptor,
    stereoPan?: number, // Android MediaPlayer
    useTextureView?: boolean,

    // Event props
    onAudioFocusChanged?: AudioFocusChangedEvent => void,
    onBandwidthUpdate?: BandwidthUpdateEvent => void,
    onBuffer?: BufferEvent => void,
    onEnd?: EventWithoutData => void,
    onError?: ErrorEvent => void,
    onExternalPlaybackChange?: ExternalPlaybackActiveEvent => void,
    onFullscreenPlayerDidDismiss?: EventWithoutData => void,
    onFullscreenPlayerDidPresent?: EventWithoutData => void,
    onFullscreenPlayerWillDismiss?: EventWithoutData => void,
    onFullscreenPlayerWillPresent?: EventWithoutData => void,
    onLoad?: LoadEvent => void,
    onLoadStart?: LoadStartEvent => void,
    onPlaybackRateChange?: PlaybackRateEvent => void,
    onProgress?: ProgressEvent => void,
    onReadyForDisplay?: EventWithoutData => void,
    onSeek?: SeekEvent => void,
    onTimedMetadata?: TimedMetadataEvent => void,

    onAudioBecomingNoisy?: () => void,
    onPlaybackResume?: () => void,
    onPlaybackStalled?: () => void,
  }>;

  declare export type VideoState = {|
    showPoster: boolean,
  |};

  declare export var FilterType: FilterTypes;

  declare export var TextTrackType: TextTrackTypes;

  declare export default class Video extends React$Component<
    VideoProps,
    VideoState
  > {
    dismissFullscreenPlayer(): void;
    presentFullscreenPlayer(): void;
    seek(seconds: number): void;

    // IOS only
    save(): Promise<{ uri: string }>;
    seek(seconds: number, toleranceIOS: number): void;
    restoreUserInterfaceForPictureInPictureStopCompleted(
      restored: boolean
    ): void;
  }
}

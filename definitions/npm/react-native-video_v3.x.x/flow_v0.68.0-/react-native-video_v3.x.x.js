declare module "react-native-video" {
  // https://github.com/react-native-community/react-native-video/blob/master/TextTrackType.js#L3-L6

  // iOS only supports VTT, Android ExoPlayer supports all 3
  declare export type TextTrackTypes = {
    SRT: "application/x-subrip",
    TTML: "application/ttml+xml",
    VTT: "text/vtt"
  };

  declare export var TextTrackType: TextTrackTypes;

  declare export type TrackType = $Values<TextTrackTypes>;

  declare export type TrackDescriptor = {|
    title?: ?string,
    uri: string,
    type: TrackType,
    language: string
  |};

  // https://github.com/react-native-community/react-native-video#selectedaudiotrack
  declare export type SelectedTrackDescriptor =
    | {|
        type: "system",
        value?: any
      |}
    | {|
        type: "disabled",
        value?: any
      |}
    | {|
        type: "title",
        value: string
      |}
    | {|
        type: "language",
        value: string
      |}
    | {|
        type: "index",
        value: number
      |};

  declare export type BufferConfigDescriptor = {|
    minBufferMs?: ?number,
    maxBufferMs?: ?number,
    bufferForPlaybackMs?: ?number,
    bufferForPlaybackAfterRebufferMs?: ?number
  |};

  declare export type Event<T: {}> = $ReadOnly<{|
    target: number,
    ...$Exact<T>
  |}>;

  declare export type LoadEvent = Event<
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
        width: number
      |}>,
      textTracks: $ReadOnlyArray<TrackDescriptor>
    }>
  >;

  declare export type ProgressEvent = Event<{|
    +currentTime: number,
    +playableDuration: number,
    +seekableDuration: number
  |}>;

  declare export type AudioFocusChangedEvent = Event<{
    +hasAudioFocus: boolean
  }>;

  declare export type BufferEvent = Event<{ +isBuffering: boolean }>;

  declare export type LoadStartEvent = Event<{
    +isNetwork: boolean,
    +type: string,
    +uri: string
  }>;

  declare export type TimedMetadata = {| +value: string, +identifier: string |};
  declare export type TimedMetadataEvent = Event<{
    +metadata: $ReadOnlyArray<TimedMetadata>
  }>;

  declare export type VideoProps = $ReadOnly<{
    source: number | {| uri: string |},
    // https://github.com/react-native-community/react-native-video/blob/master/VideoResizeMode.js#L4-L6
    resizeMode?: ?("contain" | "cover" | "stretch"),
    poster?: ?string,
    // https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageProps.js#L71
    posterResizeMode?: ?("cover" | "contain" | "stretch" | "repeat" | "center"),
    repeat?: ?boolean,
    allowsExternalPlayback?: ?boolean,
    selectedAudioTrack?: SelectedTrackDescriptor,
    selectedTextTrack?: SelectedTrackDescriptor,
    textTracks?: Array<TrackDescriptor>,
    paused?: ?boolean,
    muted?: ?boolean,
    volume?: ?number,
    bufferConfig?: BufferConfigDescriptor,
    stereoPan?: ?number,
    rate?: ?number,
    playInBackground?: ?boolean,
    playWhenInactive?: ?boolean,
    ignoreSilentSwitch?: ?("ignore" | "obey"),
    disableFocus?: ?boolean,
    controls?: ?boolean,
    audioOnly?: ?boolean,
    currentTime?: ?number,
    progressUpdateInterval?: ?number,
    useTextureView?: ?boolean,
    onLoadStart?: ?(LoadStartEvent) => void,
    onLoad?: ?(LoadEvent) => void,
    onBuffer?: ?(BufferEvent) => void,
    onError?: ?Function,
    onProgress?: ?(ProgressEvent) => void,
    onSeek?: ?Function,
    onEnd?: ?Function,
    onFullscreenPlayerWillPresent?: ?Function,
    onFullscreenPlayerDidPresent?: ?Function,
    onFullscreenPlayerWillDismiss?: ?Function,
    onFullscreenPlayerDidDismiss?: ?Function,
    onReadyForDisplay?: ?Function,
    onPlaybackStalled?: ?Function,
    onPlaybackResume?: ?Function,
    onPlaybackRateChange?: ?Function,
    onAudioFocusChanged?: ?(AudioFocusChangedEvent) => void,
    onAudioBecomingNoisy?: ?Function,
    onTimedMetadata?: ?(TimedMetadataEvent) => void,

    /* Required by react-native */
    scaleX?: ?number,
    scaleY?: ?number,
    translateX?: ?number,
    translateY?: ?number,
    rotation?: ?number
  }>;

  declare export default class Video extends React$Component<VideoProps> {
    dismissFullscreenPlayer(): void;
    presentFullscreenPlayer(): void;
    // Tolerance is the max distance in milliseconds from the seconds position that's allowed. (tolerance supported on iOS)
    seek(seconds: number, toleranceIOS?: number): void;
  }
}

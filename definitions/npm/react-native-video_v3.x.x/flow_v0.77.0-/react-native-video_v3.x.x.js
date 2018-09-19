declare module "react-native-video" {
  // https://github.com/react-native-community/react-native-video/blob/master/TextTrackType.js#L3-L6
  declare export type TrackType =
    | "application/x-subrip"
    | "application/ttml+xml"
    | "text/vtt";

  declare export type TrackDescriptor = {|
    title?: ?string,
    uri: string,
    type: TrackType,
    language: string
  |};

  declare export type SelectedTrackDescriptor = {|
    type: string,
    value?: ?(string | number)
  |};

  declare export type BufferConfigDescriptor = {|
    minBufferMs?: ?number,
    maxBufferMs?: ?number,
    bufferForPlaybackMs?: ?number,
    bufferForPlaybackAfterRebufferMs?: ?number
  |};

  declare export type Event<T: {}> = { +target: number } & T;

  declare export type LoadEvent = Event<
    $ReadOnly<{
      audioTracks: Array<TrackDescriptor>,
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
      textTracks: Array<TrackDescriptor>
    }>
  >;

  declare export type ProgressEvent = Event<{|
    currentTime: number,
    playableDuration: number,
    seekableDuration: number
  |}>;

  declare export type AudioFocusChangedEvent = Event<{
    +hasAudioFocus: boolean
  }>;

  declare export type BufferEvent = Event<{ +isBuffering: boolean }>;

  declare export type LoadStartEvent = Event<{|
    isNetwork: boolean,
    type: string,
    uri: string
  |}>;

  declare export type TimedMetadataEvent = Event<{|
    metadata: Array<{| value: string, identifier: string |}>
  |}>;

  declare export type VideoProps = $ReadOnly<{
    /* Native only */
    src?: ?Object,
    seek?: ?(number | Object),
    fullscreen?: ?boolean,
    onVideoLoadStart?: ?Function,
    onVideoLoad?: ?Function,
    onVideoBuffer?: ?Function,
    onVideoError?: ?Function,
    onVideoProgress?: ?Function,
    onVideoSeek?: ?Function,
    onVideoEnd?: ?Function,
    onTimedMetadata?: ?(?TimedMetadataEvent) => void,
    onVideoAudioBecomingNoisy?: ?Function,
    onVideoFullscreenPlayerWillPresent?: ?Function,
    onVideoFullscreenPlayerDidPresent?: ?Function,
    onVideoFullscreenPlayerWillDismiss?: ?Function,
    onVideoFullscreenPlayerDidDismiss?: ?Function,

    /* Wrapper component */
    source: number | {| uri: string |},
    // https://github.com/react-native-community/react-native-video/blob/master/VideoResizeMode.js#L4-L6
    resizeMode?: ?("contain" | "cover" | "stretch"),
    poster?: ?string,
    // https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageProps.js#L71
    posterResizeMode?: ?("cover" | "contain" | "stretch" | "repeat" | "center"),
    repeat?: ?boolean,
    allowsExternalPlayback?: ?boolean,
    selectedAudioTrack?: ?SelectedTrackDescriptor,
    selectedTextTrack?: ?SelectedTrackDescriptor,
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
    onLoadStart?: ?(?LoadStartEvent) => void,
    onLoad?: ?(?LoadEvent) => void,
    onBuffer?: ?(?BufferEvent) => void,
    onError?: ?Function,
    onProgress?: ?(?ProgressEvent) => void,
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
    onAudioFocusChanged?: ?(?AudioFocusChangedEvent) => void,
    onAudioBecomingNoisy?: ?Function,

    /* Required by react-native */
    scaleX?: ?number,
    scaleY?: ?number,
    translateX?: ?number,
    translateY?: ?number,
    rotation?: ?number
  }>;

  declare export var TextTrackType: { +[key: string]: TrackType };

  declare export default class Video extends React$Component<VideoProps> {
    dismissFullscreenPlayer(): void;
    presentFullscreenPlayer(): void;
    // Tolerance is the max distance in milliseconds from the seconds position that's allowed. (tolerance supported on iOS)
    seek(seconds: number, toleranceIOS?: number): void;
  }
}

declare module "react-player" {
  declare export type SourceProps = {
    src: string,
    type: string,
    ...
  };

  declare export type TrackProps = {
    kind: string,
    src: string,
    srcLang: string,
    default?: boolean,
    ...
  };

  declare export type SoundCloudConfig = { // TODO Improve
  options?: Object, ... };

  declare export type YouTubeConfig = {
    // TODO Improve
    playerVars?: Object,
    preload?: boolean,
    ...
  };

  declare export type FacebookConfig = { appId?: string, ... };

  declare export type DailyMotionConfig = {
    // TODO Improve
    params?: Object,
    preload?: boolean,
    ...
  };

  declare export type VimeoConfig = {
    // TODO Improve
    iframeParams?: Object,
    preload?: boolean,
    ...
  };

  declare export type WistiaConfig = { // TODO Improve
  options?: Object, ... };

  declare export type FileConfig = {
    // TODO Improve
    attributes?: Object,
    tracks?: Array<TrackProps>,
    forceAudio?: boolean,
    forceHLS?: boolean,
    forceDASH?: boolean,
    ...
  };

  declare export type Config = {
    soundcloud?: SoundCloudConfig,
    youtube?: YouTubeConfig,
    facebook?: FacebookConfig,
    dailymotion?: DailyMotionConfig,
    vimeo?: VimeoConfig,
    file?: FileConfig,
    wistia?: WistiaConfig,
    ...
  };

  declare export type Props = {
    url?: string | Array<String> | Array<SourceProps>,
    playing?: boolean,
    loop?: boolean,
    controls?: boolean,
    volume?: number,
    muted?: boolean,
    playbackRate?: number,
    width?: string | number,
    height?: string | number,
    // TODO Improve
    style?: Object,
    progressFrequency?: number,
    playsinline?: boolean,
    config?: Config,
    soundcloudConfig?: SoundCloudConfig,
    youtubeConfig?: YouTubeConfig,
    facebookConfig?: FacebookConfig,
    dailymotionConfig?: DailyMotionConfig,
    vimeoConfig?: VimeoConfig,
    fileConfig?: FileConfig,
    wistiaConfig?: WistiaConfig,
    onReady?: () => void,
    onStart?: () => void,
    onPlay?: () => void,
    onPause?: () => void,
    onBuffer?: () => void,
    onEnded?: () => void,
    onError?: (error: Error) => void,
    onDuration?: (duration: number) => void,
    onSeek?: (seconds: number) => void,
    onProgress?: (state: {
      played: number,
      playedSeconds: number,
      loaded: number,
      loadedSeconds: number,
      ...
    }) => void,
    ...
  };

  declare export default class ReactPlayer extends React$Component<Props> {
    static canPlay(url: string): boolean;
    seekTo(fraction: number): void;
    getCurrentTime(): number;
    getDuration(): number;
    getInternalPlayer(key?: string): Object; // TODO Improve
  }
}

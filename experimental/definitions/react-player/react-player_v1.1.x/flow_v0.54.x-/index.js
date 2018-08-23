declare module "react-player" {
  declare export type SourceProps = {
    src: string,
    type: string
  };

  declare export type TrackProps = {
    kind: string,
    src: string,
    srcLang: string,
    default?: boolean
  };

  declare export type SoundCloudConfig = {
    options?: Object // TODO Improve
  };

  declare export type YouTubeConfig = {
    playerVars?: Object, // TODO Improve
    preload?: boolean
  };

  declare export type FacebookConfig = {
    appId?: string
  };

  declare export type DailyMotionConfig = {
    params?: Object, // TODO Improve
    preload?: boolean
  };

  declare export type VimeoConfig = {
    iframeParams?: Object, // TODO Improve
    preload?: boolean
  };

  declare export type WistiaConfig = {
    options?: Object // TODO Improve
  };

  declare export type FileConfig = {
    attributes?: Object, // TODO Improve
    tracks?: Array<TrackProps>,
    forceAudio?: boolean,
    forceHLS?: boolean,
    forceDASH?: boolean
  };

  declare export type Config = {
    soundcloud?: SoundCloudConfig,
    youtube?: YouTubeConfig,
    facebook?: FacebookConfig,
    dailymotion?: DailyMotionConfig,
    vimeo?: VimeoConfig,
    file?: FileConfig,
    wistia?: WistiaConfig
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
    style?: Object, // TODO Improve
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
      loadedSeconds: number
    }) => void
  };

  declare export default class ReactPlayer extends React$Component<Props> {
    static canPlay(url: string): boolean;
    seekTo(fraction: number): void;
    getCurrentTime(): number;
    getDuration(): number;
    getInternalPlayer(key?: string): Object; // TODO Improve
  }
}

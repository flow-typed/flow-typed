declare module "react-native-youtube" {
  declare type NativeEvent = {
    target: number
  };

  declare type StandaloneAndroidOptions = {|
    apiKey: string,
    autoplay?: boolean,
    lightboxMode?: boolean,
    startTime?: number
  |};

  declare export var YouTubeStandaloneAndroid: {
    playVideo: (options: {|
      ...StandaloneAndroidOptions,
      videoId: string
    |}) => Promise<void>,
    playVideos: (options: {|
      ...StandaloneAndroidOptions,
      videoIds: Array<string>,
      startIndex?: number
    |}) => Promise<void>,
    playPlaylist: (options: {|
      ...StandaloneAndroidOptions,
      playlistId: string,
      startIndex?: number
    |}) => Promise<void>
  } | null;

  declare export var YouTubeStandaloneIOS: {
    playVideo: (videoId: string) => Promise<void>
  } | null;

  declare export default class YouTube extends React$Component<{|
    apiKey?: string,
    videoId?: string,
    videoIds?: Array<string>,
    playlistId?: string,
    play?: boolean,
    loop?: boolean,
    fullscreen?: boolean,
    controls?: 0 | 1 | 2,
    showinfo?: boolean,
    modestbranding?: boolean,
    showFullscreenButton?: boolean,
    rel?: boolean,
    origin?: string,
    onError?: (e: NativeEvent & { error: string }) => mixed,
    onReady?: (e: NativeEvent) => mixed,
    onChangeState?: (e: NativeEvent & { state: string }) => mixed,
    onChangeQuality?: (e: NativeEvent & { quality: string }) => mixed,
    onChangeFullscreen?: (e: NativeEvent & { isFullscreen: boolean }) => mixed,
    onProgress?: (
      e: NativeEvent & { duration: number, currentTime: number }
    ) => mixed,
    style?: any
  |}> {
    seekTo(number): void,
    previousVideo(): void,
    nextVideo(): void,
    playVideoAt(index: number): void,
    videosIndex(): Promise<number>,
    currentTime(): Promise<number>,
    duration: ?() => Promise<number>,
    reloadIframe: ?() => void
  }
}

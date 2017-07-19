declare module 'react-sound' {
  declare export type PlayStatus = 'PLAYING' | 'STOPPED' | 'PAUSED';

  declare export type OnLoadingProperties = {
    bytesLoaded: number;
    bytesTotal: number;
    duration: number;
  }

  declare export type OnPlayingProperties = {
    position: number;
    duration: number;
  }

  declare export default class Sound extends React$Component<any, any, any> {
    static status: {
      PLAYING: 'PLAYING',
      STOPPED: 'STOPPED',
      PAUSED: 'PAUSED'
    };

    static props: {
      url: string;
      playStatus: PlayStatus;
      playFromPosition?: number;
      position?: number;
      volume?: number;
      onLoading?: (properties: OnLoadingProperties) => void;
      onPlaying?: (properties: OnPlayingProperties) => void;
      onFinishedPlaying?: () => void;
    }
  }
}

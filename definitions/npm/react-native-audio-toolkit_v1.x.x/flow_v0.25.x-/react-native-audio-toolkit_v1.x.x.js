declare module "react-native-audio-toolkit" {
  declare type PlaybackOptions = {
    autoDestroy?: boolean,
    continuesToPlayInBackground?: boolean
  };

  declare type RecorderOptions = {
    bitrate?: number,
    channels?: number,
    sampleRate?: number,
    format?: string,
    encoder?: string,
    quality?: string
  };

  declare class Player {
    constructor(path: string, playbackOption?: PlaybackOptions): Player;
    prepare(callback?: Function): Player;
    play(callback?: Function): Player;
    pause(callback?: Function): Player;
    playPause(callback?: Function): Player;
    stop(callback?: Function): Player;
    destroy(callback?: Function): void;
    seek(position: number, callback?: Function): void;

    looping: boolean;
    volume: number;
    duration: number;
    wakeLock: boolean;
    currentTime: number;
    //state: MediaStates;
    state: number;

    canPlay: boolean;
    canStop: boolean;
    canPrepare: boolean;
    isPlaying: boolean;
    isStopped: boolean;
    isPaused: boolean;
    isPrepared: boolean;
  }

  declare class Recorder {
    constructor(path: string, recorderOptions?: RecorderOptions): Recorder;
    prepare(callback?: Function): Recorder;
    record(callback?: Function): Recorder;
    stop(callback?: Function): Recorder;
    destroy(callback?: Function): void;

    state: number;
    fsPath: string;

    canRecord: boolean;
    canPrepare: boolean;
    isRecording: boolean;
    isPrepard: boolean;
  }
}

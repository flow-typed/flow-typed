/**
 * Flowtype definitions for youtube
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface YT$EventArgs {
    target: YT$Player,
        data: any
}

declare interface YT$EventHandler {
    (event: YT$EventArgs): void
}

declare
export interface YT$Events {
    onReady?: YT$EventHandler,
        onPlayback?: YT$EventHandler,
        onStateChange?: YT$EventHandler,
        onError?: YT$EventHandler
}

declare
export interface YT$PlayerVars {
    autohide?: number,
        autoplay?: number,
        cc_load_policy?: any,
        color?: string,
        controls?: number,
        disablekb?: number,
        enablejsapi?: number,
        end?: number,
        fs?: number,
        iv_load_policy?: number,
        list?: string,
        listType?: ListType,
        loop?: number,
        modestbranding?: number,
        origin?: string,
        playerpiid?: string,
        playlist?: string[],
        playsinline?: number,
        rel?: number,
        showinfo?: number,
        start?: number,
        theme?: string
}

declare
export interface YT$PlayerOptions {
    width?: string | number,
        height?: string | number,
        videoId?: string,
        playerVars?: YT$PlayerVars,
        events?: YT$Events
}

declare interface YT$VideoByIdParams {
    videoId: string,
        startSeconds?: number,
        endSeconds?: number,
        suggestedQuality?: string
}

declare interface YT$VideoByUrlParams {
    mediaContentUrl: string,
        startSeconds?: number,
        endSeconds?: number,
        suggestedQuality?: string
}

declare
export interface YT$VideoData {
    video_id: string,
        author: string,
        title: string
}

declare
export class Player {
    constructor(id: string, playerOptions: YT$PlayerOptions): this;
    constructor(element: HTMLElement, playerOptions: YT$PlayerOptions): this;
    loadVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
    loadVideoById(VideoByIdParams: Object): void;
    cueVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
    cueVideoById(VideoByIdParams: Object): void;
    loadVideoByUrl(
        mediaContentUrl: string,
        startSeconds?: number,
        suggestedQuality?: string): void;
    loadVideoByUrl(VideoByUrlParams: Object): void;
    cueVideoByUrl(
        mediaContentUrl: string,
        startSeconds?: number,
        suggestedQuality?: string): void;
    cueVideoByUrl(VideoByUrlParams: Object): void;
    size: any;
    playVideo(): void;
    pauseVideo(): void;
    stopVideo(): void;
    seekTo(seconds: number, allowSeekAhead: boolean): void;
    clearVideo(): void;
    nextVideo(): void;
    previousVideo(): void;
    playVideoAt(index: number): void;
    mute(): void;
    unMute(): void;
    isMuted(): boolean;
    setVolume(volume: number): void;
    getVolume(): number;
    setSize(width: number, height: number): any;
    getPlaybackRate(): number;
    setPlaybackRate(suggestedRate: number): void;
    getAvailablePlaybackRates(): number[];
    setLoop(loopPlaylists: boolean): void;
    setShuffle(shufflePlaylist: boolean): void;
    getVideoLoadedFraction(): number;
    getPlayerState(): number;
    getCurrentTime(): number;
    getVideoStartBytes(): number;
    getVideoBytesLoaded(): number;
    getVideoBytesTotal(): number;
    getDuration(): number;
    getVideoUrl(): string;
    getVideoEmbedCode(): string;
    getVideoData(): YT$VideoData;
    getPlaylist(): any[];
    getPlaylistIndex(): number;
    addEventListener(event: string, handler: YT$EventHandler): void;
    destroy(): void
}
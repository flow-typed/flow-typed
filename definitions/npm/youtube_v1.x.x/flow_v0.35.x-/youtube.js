

declare module 'youtube' {
					
}

declare module 'npm$namespace$YT' {
		declare interface EventArgs {
		target: Player,
		data: any
	}

	declare interface EventHandler {
		(event: EventArgs): void
	}

	declare export interface Events {
		onReady?: EventHandler,
		onPlayback?: EventHandler,
		onStateChange?: EventHandler,
		onError?: EventHandler
	}

	declare export interface PlayerVars {
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

	declare export interface PlayerOptions {
		width?: string | number,
		height?: string | number,
		videoId?: string,
		playerVars?: PlayerVars,
		events?: Events
	}

	declare interface VideoByIdParams {
		videoId: string,
		startSeconds?: number,
		endSeconds?: number,
		suggestedQuality?: string
	}

	declare interface VideoByUrlParams {
		mediaContentUrl: string,
		startSeconds?: number,
		endSeconds?: number,
		suggestedQuality?: string
	}

	declare export interface VideoData {
		video_id: string,
		author: string,
		title: string
	}

		declare export class Player  {
		constructor(id: string, playerOptions: PlayerOptions): this;
		constructor(element: HTMLElement, playerOptions: PlayerOptions): this;
		loadVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
		loadVideoById(VideoByIdParams: Object): void;
		cueVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
		cueVideoById(VideoByIdParams: Object): void;
		loadVideoByUrl(
		mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string
	): void;
		loadVideoByUrl(VideoByUrlParams: Object): void;
		cueVideoByUrl(
		mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string
	): void;
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
		getVideoData(): VideoData;
		getPlaylist(): any[];
		getPlaylistIndex(): number;
		addEventListener(event: string, handler: EventHandler): void;
		destroy(): void
	}

	
}
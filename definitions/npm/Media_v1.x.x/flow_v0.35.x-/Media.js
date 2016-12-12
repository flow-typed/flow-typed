

declare module 'Media' {
		declare interface Media {
		getCurrentPosition(
		mediaSuccess: (position: number) => void, mediaError?: (error: MediaError) => void
	): void,
		getDuration(): number,
		play(iosPlayOptions?: IosPlayOptions): void,
		pause(): void,
		release(): void,
		seekTo(position: number): void,
		setVolume(volume: number): void,
		startRecord(): void,
		stopRecord(): void,
		stop(): void,
		position: number,
		duration: number
	}

	declare interface IosPlayOptions {
		numberOfLoops?: number,
		playAudioWhenScreenIsLocked?: boolean
	}

			
}
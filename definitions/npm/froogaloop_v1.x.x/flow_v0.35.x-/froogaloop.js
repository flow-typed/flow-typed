

declare module 'froogaloop' {
		declare interface VimeoParams {
		name: string,
		value: any
	}

	declare interface VimeoPlayerAPI {
		(method: string): any,
		(method: string, callback: (value: any, player_id: any) => void): any,
		(method: string, value: any): any,
		(method: string, value: VimeoParams[]): any
	}

	declare interface VimeoPlayer {
		api: VimeoPlayerAPI,
		addEvent(eventName: string, callback: (e: any) => void): any,
		removeEvent(eventName: string): void
	}

			
}
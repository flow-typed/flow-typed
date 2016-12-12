

declare module 'google-maps' {
					declare module.exports: undefined


}

declare module 'npm$namespace$GoogleMapsLoader' {
		declare interface CallBack {
		(google: {
		maps: {
		Map: google.maps.Map
	}
	}): void
	}

	declare export function release(callBack: Function): void

	declare export function onLoad(callBack?: CallBack): void

	declare export function load(callBack?: CallBack): void

	declare export function isLoaded(): boolean

		
}
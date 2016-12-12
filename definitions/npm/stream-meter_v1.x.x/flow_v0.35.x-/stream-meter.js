

declare module 'stream-meter' {
			declare function m(maxBytes?: number): m.StreamMeter

		declare module.exports: undefined


}

declare module 'm' {
		declare export interface StreamMeter {
		constructor(maxBytes?: number): StreamMeter,
		bytes: number,
		maxBytes: number
	}

			
}


declare module 'geoip-lite' {
					declare module.exports: undefined


}

declare module 'mod' {
		declare export interface Lookup {
		range: Array<number>,
		country: string,
		region: string,
		city: string,
		ll: Array<number>
	}

	declare export function lookup(ip: string): Lookup

	declare export function pretty(ip: number): string

	declare export function startWatchingDataUpdate(): void

	declare export function stopWatchingDataUpdate(): void

		
}
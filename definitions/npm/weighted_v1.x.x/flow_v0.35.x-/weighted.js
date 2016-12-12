

declare module 'weighted' {
		declare export interface RandomFunc {
		(): Number
	}

	declare export function select<T>(set: T[], weights: Number[], rand?: RandomFunc): T

	declare export function select<T>(obj: Object, rand?: RandomFunc): T

		
}
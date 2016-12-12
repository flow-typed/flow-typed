

declare module 'shuffle-array' {
		declare interface ShuffleOption {
		copy?: boolean,
		rng?: () => number
	}

	declare interface PickOption {
		picks?: number,
		rng?: () => number
	}

	declare interface ShuffleArray {
		(arr: T[], options?: ShuffleOption): T[],
		pick<T>(arr: T[], options?: Object): T[]
	}

			declare module.exports: ShuffleArray


}
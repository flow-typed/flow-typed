

declare module 'react-addons-perf' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___React' {
		declare interface ComponentPerfContext {
		current: string,
		owner: string
	}

	declare interface NumericPerfContext {
		[key: string]: number
	}

	declare interface Measurements {
		exclusive: NumericPerfContext,
		inclusive: NumericPerfContext,
		render: NumericPerfContext,
		counts: NumericPerfContext,
		writes: NumericPerfContext,
		displayNames: {
		[key: string]: ComponentPerfContext
	},
		totalTime: number
	}

			
}

declare module 'Perf' {
			declare export function start(): void

	declare export function stop(): void

	declare export function printInclusive(measurements?: Measurements[]): void

	declare export function printExclusive(measurements?: Measurements[]): void

	declare export function printWasted(measurements?: Measurements[]): void

	declare export function printOperations(measurements?: Measurements[]): void

	declare export function getLastMeasurements(): Measurements[]

	declare export function getExclusive(measurements?: Measurements[]): any

	declare export function getInclusive(measurements?: Measurements[]): any

	declare export function getWasted(measurements?: Measurements[]): any

	declare export function getOperations(measurements?: Measurements[]): any

	declare export function printDOM(measurements?: Measurements[]): void

		
}
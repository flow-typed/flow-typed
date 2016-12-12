

declare module 'memwatch-next' {
	declare type EventCallback = (data: LeakInformation | StatsInformation | Object) => void;

	declare export interface StatsInformation {
		current_base: number,
		estimated_base: number,
		heap_compactions: number,
		max: number,
		min: number,
		num_full_gc: number,
		num_inc_gc: number,
		usage_trend: number
	}

	declare export interface LeakInformation {
		end: Date,
		growth: number,
		reason: string,
		start: Date
	}

	declare export function on(eventName: string, callback: EventCallback): void

	declare export class HeapDiff  {
		end: () => void
	}

	
}
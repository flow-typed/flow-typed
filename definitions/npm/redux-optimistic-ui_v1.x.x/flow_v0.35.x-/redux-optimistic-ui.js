

declare module 'redux-optimistic-ui' {
		declare export interface OptimisticState<TState> {
		history: any,
		beforeState: TState,
		current: TState
	}

	declare export interface OptimisticAction {
		meta: {
		optimistic: {
		type: string,
		id: number
	}
	}
	}

	declare export function optimistic<TState>(reducer: Reducer<TState>): Reducer<OptimisticState<TState>>

	declare export function ensureState<TState>(state: OptimisticState<TState> | TState): TState

		
}
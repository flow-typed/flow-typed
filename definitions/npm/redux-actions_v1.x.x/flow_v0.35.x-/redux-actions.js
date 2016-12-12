

declare module 'redux-actions' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReduxActions' {
	declare type PayloadCreator<Input, Payload> = (...args: Input[]) => Payload;

	declare type MetaCreator<Input, Payload> = (...args: Input[]) => Payload;

	declare type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

	declare type ReducerMeta<State, Payload, Meta> = (state: State, action: ActionMeta<Payload, Meta>) => State;

	declare type ReducerMap<State, Payload> = {
		[actionType: string]: Reducer<State, Payload>
	};

	declare interface BaseAction {
		type: string
	}

	declare interface Action<Payload> {
		payload?: Payload,
		error?: boolean,
		meta?: any
	}

	declare interface ActionMeta<Payload, Meta> {
		meta: Meta
	}

	declare export function createAction(
		actionType: string, payloadCreator?: PayloadCreator<any, any>, metaCreator?: MetaCreator<any, any>
	): (...args: any[]) => Action<any>

	declare export function createAction<InputAndPayload>(
		actionType: string, payloadCreator?: PayloadCreator<InputAndPayload, InputAndPayload>
	): (...args: InputAndPayload[]) => Action<InputAndPayload>

	declare export function createAction<Input, Payload>(
		actionType: string, payloadCreator?: PayloadCreator<Input, Payload>
	): (...args: Input[]) => Action<Payload>

	declare export function createAction<Input, Payload, Meta>(
		actionType: string, payloadCreator: PayloadCreator<Input, Payload>, metaCreator: MetaCreator<Input, Meta>
	): (...args: Input[]) => ActionMeta<Payload, Meta>

	declare export function handleAction<StateAndPayload>(
		actionType: {
		toString: () => string
	}, reducer: Reducer<StateAndPayload, StateAndPayload> | ReducerMap<StateAndPayload, StateAndPayload>
	): Reducer<StateAndPayload, StateAndPayload>

	declare export function handleAction<State, Payload>(
		actionType: {
		toString: () => string
	}, reducer: Reducer<State, Payload> | ReducerMap<State, Payload>
	): Reducer<State, Payload>

	declare export function handleAction<State, Payload, Meta>(
		actionType: {
		toString: () => string
	}, reducer: ReducerMeta<State, Payload, Meta> | ReducerMap<State, Payload>
	): Reducer<State, Payload>

	declare export function handleActions<StateAndPayload>(
		reducerMap: ReducerMap<StateAndPayload, StateAndPayload>, initialState?: StateAndPayload
	): Reducer<StateAndPayload, StateAndPayload>

	declare export function handleActions<State, Payload>(
		reducerMap: ReducerMap<State, Payload>, initialState?: State
	): Reducer<State, Payload>

	declare export function combineActions(...actionTypes: {
		toString: () => string
	}[]): {
		toString: () => string
	}

		
}
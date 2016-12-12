

declare module 'history' {
					
}

declare module 'npm$namespace$HistoryModule' {
	declare type Action = string;

	declare type BeforeUnloadHook = () => string | boolean;

	declare type CreateHistory<T> = (options?: HistoryOptions) => T;

	declare type CreateHistoryEnhancer<T, E> = (createHistory: CreateHistory<T>) => CreateHistory<T & E>;

	declare type HistoryOptions = {
		getCurrentLocation?: () => Location,
		finishTransition?: (nextLocation: Location) => boolean,
		saveState?: (key: LocationKey, state: LocationState) => void,
		go?: (n: number) => void,
		getUserConfirmation?: (message: string, callback: (result: boolean) => void) => void,
		keyLength?: number,
		queryKey?: string | boolean,
		stringifyQuery?: (obj: any) => string,
		parseQueryString?: (str: string) => any,
		basename?: string,
		entries?: string | [any],
		current?: number
	};

	declare type Href = string;

	declare type Location = {
		pathname: Pathname,
		search: Search,
		query: Query,
		state: LocationState,
		action: Action,
		key: LocationKey,
		hash: Hash,
		basename?: string
	};

	declare type LocationDescriptorObject = {
		pathname?: Pathname,
		search?: Search,
		query?: Query,
		state?: LocationState
	};

	declare type LocationDescriptor = LocationDescriptorObject | Path;

	declare type LocationKey = string;

	declare type LocationListener = (location: Location) => void;

	declare type LocationState = Object;

	declare type Path = string;

	declare type Pathname = string;

	declare type Query = {
		[key: string]: any
	};

	declare type QueryString = string;

	declare type Search = string;

	declare type TransitionHook = (location: Location, callback: (result: any) => void) => any;

	declare type Hash = string;

	declare interface History {
		listenBefore(hook: TransitionHook): () => void,
		listen(listener: LocationListener): () => void,
		transitionTo(location: Location): void,
		push(path: LocationDescriptor): void,
		replace(path: LocationDescriptor): void,
		go(n: number): void,
		goBack(): void,
		goForward(): void,
		createKey(): LocationKey,
		createPath(path: LocationDescriptor): Path,
		createHref(path: LocationDescriptor): Href,
		createLocation(path?: LocationDescriptor, action?: Action, key?: LocationKey): Location,
		getCurrentLocation: () => Location,
		createLocation(
		path?: Path, state?: LocationState, action?: Action, key?: LocationKey
	): Location,
		pushState(state: LocationState, path: Path): void,
		replaceState(state: LocationState, path: Path): void,
		setState(state: LocationState): void,
		registerTransitionHook(hook: TransitionHook): void,
		unregisterTransitionHook(hook: TransitionHook): void
	}

	declare interface HistoryBeforeUnload {
		listenBeforeUnload(hook: BeforeUnloadHook): () => void
	}

	declare interface HistoryQueries {
		pushState(state: LocationState, pathname: Pathname | Path, query?: Query): void,
		replaceState(state: LocationState, pathname: Pathname | Path, query?: Query): void,
		createPath(path: Path, query?: Query): Path,
		createHref(path: Path, query?: Query): Href
	}

	declare interface Module {
		createHistory: CreateHistory<History>,
		createHashHistory: CreateHistory<History>,
		createMemoryHistory: CreateHistory<History>,
		createLocation(
		path?: Path, state?: LocationState, action?: Action, key?: LocationKey
	): Location,
		useBasename<T>(createHistory: CreateHistory<T>): CreateHistory<T>,
		useBeforeUnload<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryBeforeUnload>,
		useQueries<T>(createHistory: CreateHistory<T>): CreateHistory<T & HistoryQueries>,
		actions: {
		PUSH: string,
		REPLACE: string,
		POP: string
	}
	}

			
}

declare module 'history/lib/createBrowserHistory' {
			declare export default function createBrowserHistory(options?: HistoryModule.HistoryOptions): HistoryModule.History

		
}

declare module 'history/lib/createHashHistory' {
			declare export default function createHashHistory(options?: HistoryModule.HistoryOptions): HistoryModule.History

		
}

declare module 'history/lib/createMemoryHistory' {
			declare export default function createMemoryHistory(options?: HistoryModule.HistoryOptions): HistoryModule.History

		
}

declare module 'history/lib/createLocation' {
			declare export default function createLocation(
		path?: HistoryModule.Path, state?: HistoryModule.LocationState, action?: HistoryModule.Action, key?: HistoryModule.LocationKey
	): HistoryModule.Location

		
}

declare module 'history/lib/useBasename' {
			declare export default function useBasename<T>(
		createHistory: HistoryModule.CreateHistory<T>
	): HistoryModule.CreateHistory<T>

		
}

declare module 'history/lib/useBeforeUnload' {
			declare export default function useBeforeUnload<T>(
		createHistory: HistoryModule.CreateHistory<T>
	): HistoryModule.CreateHistory<T & HistoryModule.HistoryBeforeUnload>

		
}

declare module 'history/lib/useQueries' {
			declare export default function useQueries<T>(
		createHistory: HistoryModule.CreateHistory<T>
	): HistoryModule.CreateHistory<T & HistoryModule.HistoryQueries>

		
}

declare module 'history/lib/actions' {
					


}

declare module 'history/lib/DOMUtils' {
			declare export function addEventListener(
		node: EventTarget, event: string, listener: EventListenerOrEventListenerObject
	): void

	declare export function removeEventListener(
		node: EventTarget, event: string, listener: EventListenerOrEventListenerObject
	): void

	declare export function getHashPath(): string

	declare export function replaceHashPath(path: string): void

	declare export function getWindowPath(): string

	declare export function go(n: number): void

	declare export function getUserConfirmation(message: string, callback: (result: boolean) => void): void

	declare export function supportsHistory(): boolean

	declare export function supportsGoWithoutReloadUsingHash(): boolean

		
}
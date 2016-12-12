

declare module 'navigation' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Navigation' {
		declare interface StateInfo {
		key: string,
		defaults?: any,
		defaultTypes?: any,
		title?: string,
		route?: string | string[],
		trackCrumbTrail?: boolean | string,
		trackTypes?: boolean,
		[extras: string]: any
	}

	declare interface HistoryManager {
		disabled: boolean,
		init(navigateHistory: () => void): void,
		addHistory(url: string, replace: boolean): void,
		getCurrentUrl(): string,
		getHref(url: string): string,
		getUrl(hrefElement: HTMLAnchorElement | Location): string,
		stop(): void
	}

		declare class State extends StateInfo {
		key: string;
		defaults: any;
		defaultTypes: any;
		formattedDefaults: any;
		formattedArrayDefaults: {
		[index: string]: string[]
	};
		title: string;
		route: string | string[];
		trackCrumbTrail: boolean;
		crumbTrailKey: string;
		trackTypes: boolean;
		[extras: string]: any;
		unloading: (
		state: State, data: any, url: string, unload: () => void, history?: boolean
	) => void;
		dispose: () => void;
		navigated: (data: any, asyncData: any) => void;
		navigating: (
		data: any, url: string, navigate: (asyncData?: any) => void, history: boolean
	) => void;
		urlEncode(state: State, key: string, val: string, queryString: boolean): string;
		urlDecode(state: State, key: string, val: string, queryString: boolean): string;
		validate(data: any): boolean;
		truncateCrumbTrail(state: State, crumbs: Crumb[]): Crumb[]
	}

	declare class HashHistoryManager extends HistoryManager {
		disabled: boolean;
		constructor(): this;
		constructor(replaceQueryIdentifier: boolean): this;
		init(navigateHistory: any): void;
		addHistory(url: string, replace: boolean): void;
		getCurrentUrl(): string;
		getHref(url: string): string;
		getUrl(hrefElement: HTMLAnchorElement | Location): string;
		stop(): void
	}

	declare class HTML5HistoryManager extends HistoryManager {
		disabled: boolean;
		constructor(): this;
		constructor(applicationPath: string): this;
		init(navigateHistory: () => void): void;
		addHistory(url: string, replace: boolean): void;
		getCurrentUrl(): string;
		getHref(url: string): string;
		getUrl(hrefElement: HTMLAnchorElement | Location): string;
		stop(): void
	}

	declare class Crumb  {
		data: any;
		state: State;
		last: boolean;
		title: string;
		url: string;
		crumblessUrl: string;
		constructor(data: any, state: State, link: string, crumblessLink: string, last: boolean): this
	}

	declare class StateContext  {
		oldState: State;
		oldData: any;
		previousState: State;
		previousData: any;
		state: State;
		data: any;
		url: string;
		title: string;
		crumbs: Crumb[];
		nextCrumb: Crumb;
		clear(): void;
		includeCurrentData(data: any): any;
		includeCurrentData(data: any, keys: string[]): any
	}

	declare class StateNavigator  {
		stateContext: StateContext;
		historyManager: HistoryManager;
		states: {
		[index: string]: State
	};
		constructor(): this;
		constructor(states: StateInfo[]): this;
		constructor(states: StateInfo[], historyManager: HistoryManager): this;
		configure(stateInfos: StateInfo[]): void;
		configure(stateInfos: StateInfo[], historyManager: HistoryManager): void;
		onNavigate(
		handler: (oldState: State, state: State, data: any, asyncData: any) => void
	): void;
		offNavigate(
		handler: (oldState: State, state: State, data: any, asyncData: any) => void
	): void;
		navigate(stateKey: string): void;
		navigate(stateKey: string, navigationData: any): void;
		navigate(
		stateKey: string, navigationData: any, historyAction: "add" | "replace" | "none"
	): void;
		getNavigationLink(stateKey: string): string;
		getNavigationLink(stateKey: string, navigationData: any): string;
		canNavigateBack(distance: number): boolean;
		navigateBack(distance: number): void;
		navigateBack(distance: number, historyAction: "add" | "replace" | "none"): void;
		getNavigationBackLink(distance: number): string;
		refresh(): void;
		refresh(navigationData: any): void;
		refresh(navigationData: any, historyAction: "add" | "replace" | "none"): void;
		getRefreshLink(): string;
		getRefreshLink(navigationData: any): string;
		navigateLink(url: string): void;
		navigateLink(url: string, historyAction: "add" | "replace" | "none"): void;
		navigateLink(url: string, historyAction: "add" | "replace" | "none", history: boolean): void;
		parseLink(url: string): {
		state: State,
		data: any
	};
		start(): void;
		start(url: string): void
	}

	
}
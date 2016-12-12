import type { CrossRoadsStatic } from 'npm$namespace$CrossroadsJs'

declare module 'crossroads' {
					declare module.exports: CrossRoadsStatic


}

declare module 'npm$namespace$CrossroadsJs' {
		declare export interface Route {
		matched: Signal,
		switched: Signal,
		rules: any,
		greedy: boolean,
		dispose(): void,
		match(request: any): boolean,
		interpolate(replacements: any): string,
		add(listener: Function, listenerContext?: any, priority?: Number): SignalBinding
	}

	declare export interface CrossRoadsStatic {
		NORM_AS_ARRAY: Function,
		NORM_AS_OBJECT: Function,
		addRoute(pattern: any, handler?: Function, priority?: number): Route,
		removeRoute(route: Route): void,
		removeAllRoutes(): void,
		parse(request: string, ...defaultArgs: any[]): void,
		getNumRoutes(): number,
		bypassed: Signal,
		routed: Signal,
		create(): CrossRoadsStatic,
		normalizeFn: Function,
		shouldTypecast: boolean,
		VERSION: string,
		greedy: boolean,
		greedyEnabled: boolean,
		resetState(): void,
		ignoreState: boolean,
		pipe(router: CrossRoadsStatic): void,
		unpipe(router: CrossRoadsStatic): void
	}

			
}
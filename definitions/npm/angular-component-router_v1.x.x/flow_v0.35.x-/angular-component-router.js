

declare module 'angular-component-router' {
					
}

declare module 'npm$namespace$angular' {
		declare interface Instruction {
		component: ComponentInstruction,
		child: Instruction,
		auxInstruction: {
		[key: string]: Instruction
	},
		urlPath(): string,
		urlParams(): string[],
		specificity(): number,
		resolveComponent(): IPromise<ComponentInstruction>,
		toRootUrl(): string,
		toUrlQuery(): string,
		replaceChild(child: Instruction): Instruction,
		toUrlPath(): string,
		toLinkUrl(): string
	}

	declare interface RouterOutlet {
		name: string,
		activate(nextInstruction: ComponentInstruction): IPromise<any>,
		reuse(nextInstruction: ComponentInstruction): IPromise<any>,
		deactivate(nextInstruction: ComponentInstruction): IPromise<any>,
		routerCanDeactivate(nextInstruction: ComponentInstruction): IPromise<boolean>,
		routerCanReuse(nextInstruction: ComponentInstruction): IPromise<boolean>
	}

	declare interface RouteRegistry {
		config(parentComponent: any, config: RouteDefinition): void,
		configFromComponent(component: any): void,
		recognize(url: string, ancestorInstructions: Instruction[]): IPromise<Instruction>,
		generate(
		linkParams: any[], ancestorInstructions: Instruction[], _aux?: boolean
	): Instruction,
		hasRoute(name: string, parentComponent: any): boolean,
		generateDefault(componentCursor: any): Instruction
	}

	declare interface Router {
		navigating: boolean,
		lastNavigationAttempt: string,
		registry: RouteRegistry,
		parent: Router,
		hostComponent: any,
		childRouter(hostComponent: any): Router,
		auxRouter(hostComponent: any): Router,
		registerPrimaryOutlet(outlet: RouterOutlet): IPromise<boolean>,
		registerAuxOutlet(outlet: RouterOutlet): IPromise<boolean>,
		isRouteActive(instruction: Instruction): boolean,
		config(definitions: RouteDefinition[]): IPromise<any>,
		navigate(linkParams: any[]): IPromise<any>,
		navigateByUrl(url: string, _skipLocationChange?: boolean): IPromise<any>,
		navigateByInstruction(instruction: Instruction, _skipLocationChange?: boolean): IPromise<any>,
		commit(instruction: Instruction, _skipLocationChange?: boolean): IPromise<any>,
		subscribe(onNext: (value: any) => void): Object,
		deactivate(instruction: Instruction): IPromise<any>,
		recognize(url: string): IPromise<Instruction>,
		renavigate(): IPromise<any>,
		generate(linkParams: any[]): Instruction
	}

	declare interface RouteData {
		data: {
		[key: string]: any
	},
		get(key: string): any
	}

	declare interface ComponentInstruction {
		reuse: boolean,
		routeData: RouteData,
		urlPath: string,
		urlParams: string[],
		data: RouteData,
		componentType: any,
		terminal: boolean,
		specificity: number,
		params: {
		[key: string]: any
	}
	}

	declare interface OnActivate {
		$routerOnActivate(next?: angular.ComponentInstruction, prev?: angular.ComponentInstruction): any
	}

	declare interface CanDeactivate {
		$routerCanDeactivate(
		next?: ComponentInstruction, prev?: ComponentInstruction
	): boolean | IPromise<boolean>
	}

	declare interface OnDeactivate {
		$routerOnDeactivate(next?: angular.ComponentInstruction, prev?: angular.ComponentInstruction): any
	}

	declare interface CanReuse {
		$routerCanReuse(
		next?: angular.ComponentInstruction, prev?: angular.ComponentInstruction
	): boolean | IPromise<boolean>
	}

	declare interface OnReuse {
		$routerOnReuse(next?: angular.ComponentInstruction, prev?: angular.ComponentInstruction): any
	}

	declare interface Type {
		
	}

	declare interface RouteDefinition {
		path?: string,
		aux?: string,
		component?: Type | ComponentDefinition | string,
		loader?: Function,
		redirectTo?: any[],
		as?: string,
		name?: string,
		data?: any,
		useAsDefault?: boolean
	}

	declare interface ComponentDefinition {
		type: string,
		loader?: Function,
		component?: Type
	}

	declare interface IComponentOptions {
		$canActivate?: (...args: any[]) => boolean | angular.IPromise<boolean>,
		$routeConfig?: RouteDefinition[]
	}

			
}
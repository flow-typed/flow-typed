

declare module 'angular-modal' {
					
}

declare module 'npm$namespace$angularModal' {
	declare type AngularModalControllerDefinition = (NO PRINT IMPLEMENTED: ConstructorType) | Function | string;

	declare type AngularModalJQuerySelector = string | Element | Element[] | JQuery | Function | any[] | {
		
	};

	declare interface AngularModalSettings {
		controller?: AngularModalControllerDefinition,
		controllerAs?: string,
		container?: AngularModalJQuerySelector
	}

	declare export interface AngularModalSettingsWithTemplate {
		template: any
	}

	declare export interface AngularModalSettingsWithTemplateUrl {
		templateUrl: string
	}

	declare export interface AngularModal {
		activate(): angular.IPromise<void>,
		deactivate(): angular.IPromise<void>,
		active(): boolean
	}

	declare export interface AngularModalFactory {
		(settings: AngularModalSettingsWithTemplate | AngularModalSettingsWithTemplateUrl): AngularModal
	}

			
}
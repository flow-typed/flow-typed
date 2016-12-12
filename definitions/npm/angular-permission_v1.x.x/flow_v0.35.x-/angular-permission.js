

declare module 'angular-permission' {
					
}

declare module 'permission' {
		declare export interface TransitionProperties {
		fromState?: angular.ui.IState,
		fromParams?: angular.ui.IStateParamsService,
		toState?: angular.ui.IState,
		toParams?: angular.ui.IStateParamsService,
		options?: angular.ui.IStateOptions
	}

	declare export interface PermissionStore {
		definePermission(
		name: string, validationFunction: (
		permission?: string, transitionProperties?: TransitionProperties
	) => boolean | angular.IPromise<any>
	): void,
		defineManyPermissions(
		permissions: string[], validationFunction: (
		permission?: string, transitionProperties?: TransitionProperties
	) => boolean | angular.IPromise<any>
	): void,
		clearStore(): void,
		removePermissionDefinition(permission: string): void,
		hasPermissionDefinition(permissionName: string): boolean,
		getStore(): Permission[]
	}

	declare export interface RoleStore {
		defineRole(
		role: string, permissions: Array<string>, validationFunction: RoleValidationFunction
	): void,
		defineRole(role: string, permissions: Array<string>): void,
		hasRoleDefinition(role: string): boolean,
		getRoleDefinition(roleName: string): Role,
		clearStore(): void,
		removeRoleDefinition(roleName: string): void,
		getStore(): Role[]
	}

	declare export interface Role {
		roleName: string,
		permissionNames: string[],
		validationFunction?: RoleValidationFunction
	}

	declare export interface Permission {
		permissionName: string,
		validationFunction?: PermissionValidationFunction
	}

	declare interface RoleValidationFunction {
		(permission?: string, transitionProperties?: TransitionProperties): boolean | angular.IPromise<any>
	}

	declare interface PermissionValidationFunction {
		(permission?: string, transitionProperties?: TransitionProperties): boolean | angular.IPromise<any>
	}

	declare export interface IPermissionState {
		data?: any | DataWithPermissions
	}

	declare export interface DataWithPermissions {
		permissions?: {
		only?: (() => void) | Array<string> | angular.IPromise<any>,
		except?: (() => void) | Array<string> | angular.IPromise<any>,
		redirectTo: string | (() => string) | (() => PermissionRedirectConfigation) | {
		[index: string]: PermissionRedirectConfigation
	}
	}
	}

	declare export interface PermissionRedirectConfigation {
		state: string,
		params?: {
		
	},
		options?: angular.ui.IStateOptions
	}

			
}
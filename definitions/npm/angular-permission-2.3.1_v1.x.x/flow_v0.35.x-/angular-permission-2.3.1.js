

declare module 'angular-permission-2.3.1' {
					
}

declare module 'permission' {
		declare export interface PermissionStore {
		definePermission(
		name: string, validationFunction: (
		stateParams?: angular.ui.IStateParamsService, permission?: string
	) => boolean | angular.IPromise<any>
	): void,
		defineManyPermissions(
		permissions: string[], validationFunction: (
		stateParams?: angular.ui.IStateParamsService, permission?: string
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
		(stateParams?: angular.ui.IStateParamsService, permission?: string): boolean | angular.IPromise<any>
	}

	declare interface PermissionValidationFunction {
		(stateParams?: angular.ui.IStateParamsService, permission?: string): boolean | angular.IPromise<any>
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
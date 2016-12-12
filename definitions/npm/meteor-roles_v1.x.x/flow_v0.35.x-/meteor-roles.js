

declare module 'meteor-roles' {
					
}

declare module 'npm$namespace$Roles' {
		declare interface Role {
		name: string
	}

	declare function addUsersToRoles(
		user: string | string[] | Object | Object[], roles: string | string[], group?: string
	): void

	declare function createRole(role: string): string

	declare function deleteRole(role: string): void

	declare function getAllRoles(): Mongo.Cursor<Role>

	declare function getGroupsForUser(user: string | Object, role?: string): string[]

	declare function getRolesForUser(user: string | Object, group?: string): Role[]

	declare function getUsersInRole(
		role: string | string[], group?: string, options?: {
		sort?: Mongo.SortSpecifier,
		skip?: number,
		limit?: number,
		fields?: Mongo.FieldSpecifier,
		reactive?: boolean,
		transform?: Function
	}
	): Mongo.Cursor<Meteor.User>

	declare function removeUsersFromRoles(
		user: string | string[] | Object | Object[], roles?: string[], group?: string
	): void

	declare function setUserRoles(
		user: string | string[] | Object | Object[], roles: string | string[], group?: string
	): void

	declare function userIsInRole(
		user: string | string[] | Object | Object[], roles: string | string[], group?: string
	): boolean

		
}

declare module 'npm$namespace$Meteor' {
					
}


declare module 'google-apps-script.groups' {
					
}

declare module 'Groups' {
		declare export interface Group {
		getEmail(): string,
		getRole(email: string): Role,
		getRole(user: Base.User): Role,
		getUsers(): Base.User[],
		hasUser(email: string): boolean,
		hasUser(user: Base.User): boolean
	}

	declare export interface GroupsApp {
		Role: Role,
		getGroupByEmail(email: string): Group,
		getGroups(): Group[]
	}

			
}
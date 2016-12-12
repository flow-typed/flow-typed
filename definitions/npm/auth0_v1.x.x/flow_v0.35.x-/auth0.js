

declare module 'auth0' {
		declare export interface ManagementClientOptions {
		token: string,
		domain?: string
	}

	declare export interface UserData {
		connection: string,
		email?: string,
		username?: string,
		password?: string,
		phone_number?: string,
		user_metadata?: {
		
	},
		email_verified?: boolean,
		app_metadata?: {
		
	}
	}

	declare export interface GetUsersData {
		per_page?: number,
		page?: number,
		include_totals?: boolean,
		sort?: string,
		connection?: string,
		fields?: string,
		include_fields?: boolean,
		q?: string,
		search_engine?: string
	}

	declare export interface User {
		email?: string,
		email_verified?: boolean,
		username?: string,
		phone_number?: string,
		phone_verified?: boolean,
		user_id?: string,
		created_at?: string,
		updated_at?: string,
		identities?: Identity[],
		app_metadata?: {
		
	},
		user_metadata?: {
		
	},
		picture?: string,
		name?: string,
		nickname?: string,
		multifactor?: string[],
		last_ip?: string,
		last_login?: string,
		logins_count?: number,
		blocked?: boolean
	}

	declare export interface Identity {
		connection: string,
		user_id: string,
		provider: string,
		isSocial: boolean
	}

	declare export interface AuthenticationClientOptions {
		clientId?: string,
		domain: string
	}

	declare export interface RequestChangePasswordEmailData {
		connection: string,
		email: string
	}

		declare export class ManagementClient  {
		constructor(options: ManagementClientOptions): this;
		getUsers(params?: GetUsersData): Promise<User[]>;
		getUsers(params?: GetUsersData, cb?: (err: Error, users: User[]) => void): void;
		createUser(data: UserData): Promise<User>;
		createUser(data: UserData, cb: (err: Error, data: User) => void): void
	}

	declare export class AuthenticationClient  {
		constructor(options: AuthenticationClientOptions): this;
		requestChangePasswordEmail(data: RequestChangePasswordEmailData): Promise<string>;
		requestChangePasswordEmail(
		data: RequestChangePasswordEmailData, cb: (err: Error, message: string) => void
	): void
	}

	
}
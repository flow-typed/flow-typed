

declare module 'asana' {
		declare interface ClientStatic {
		(dispatcher: Dispatcher, options?: ClientOptions): asana.Client,
		create(options?: ClientOptions): Client
	}

	declare interface ClientOptions {
		clientId?: string | number,
		clientSecret?: string,
		redirectUri?: string,
		asanaBaseUrl?: string
	}

	declare interface Client {
		authorize(): Promise<Client>,
		useBasicAuth(apiKey: string): this,
		useAccessToken(accessToken: string): this,
		useOauth(options?: auth.OauthAuthenticatorOptions): this,
		dispatcher: Dispatcher,
		attachments: resources.Attachments,
		events: resources.Events,
		projects: resources.Projects,
		stories: resources.Stories,
		tags: resources.Tags,
		tasks: resources.Tasks,
		teams: resources.Teams,
		users: resources.Users,
		workspaces: resources.Workspaces,
		app: auth.App
	}

	declare interface DispatcherStatic {
		new (options?: DispatcherOptions): Dispatcher,
		maybeReauthorize(): Promise<boolean>,
		API_PATH: string
	}

	declare interface DispatcherOptions {
		authenticator?: auth.Authenticator,
		retryOnRateLimit?: boolean,
		handleUnauthorized?: () => boolean | Promise<boolean>,
		requestTimeout?: string
	}

	declare interface Dispatcher {
		url(path: string): string,
		setAuthenticator(authenticator: auth.Authenticator): this,
		authorize(): Promise<void>,
		dispatch(params: any, dispatchOptions?: any): Promise<any>,
		get(path: string, query?: any, dispatchOptions?: any): Promise<any>,
		post(path: string, data: any, dispatchOptions?: any): Promise<any>,
		put(path: string, data: any, dispatchOptions?: any): Promise<any>,
		delete(path: string, dispatchOptions?: any): Promise<any>,
		asanaBaseUrl: string,
		retryOnRateLimit: boolean,
		handleUnauthorized: () => boolean | Promise<boolean>,
		requestTimeout: number
	}

			declare module.exports: undefined


}

declare module 'auth' {
		declare interface BasicAuthenticatorStatic {
		new (apiKey: string): BasicAuthenticator
	}

	declare interface BasicAuthenticator {
		authenticateRequest(request: BasicAuthenticatorRequest): BasicAuthenticatorRequest
	}

	declare interface BasicAuthenticatorRequest {
		auth: {
		username: string,
		password: string
	}
	}

	declare interface OauthAuthenticatorStatic {
		new (options: OauthAuthenticatorOptions): OauthAuthenticator
	}

	declare interface OauthAuthenticatorOptions {
		flowType?: auth.FlowType,
		credentials?: Credentials | string
	}

	declare interface Credentials {
		access_token?: string,
		refresh_token?: string
	}

	declare interface OauthAuthenticator {
		authenticateRequest(request: OauthAuthenticatorRequest): OauthAuthenticatorRequest
	}

	declare interface OauthAuthenticatorRequest {
		headers: {
		Authorization: string
	}
	}

	declare interface Authenticator {
		establishCredentials(): Promise<void>,
		refreshCredentials(): Promise<boolean>
	}

	declare interface AppStatic {
		new (options: AppOptions): App
	}

	declare interface AppOptions {
		clientId?: string | number,
		clientSecret?: string,
		scope?: string
	}

	declare interface App {
		asanaAuthorizeUrl(options?: AsanaAuthorizeUrlOptions): string,
		asanaTokenUrl(options?: AsanaAuthorizeUrlOptions): string,
		accessTokenFromCode(code: string, options?: AsanaAuthorizeUrlOptions): Promise<Credentials>,
		accessTokenFromRefreshToken(refreshToken: string, options: AsanaAuthorizeUrlOptions): Promise<Credentials>,
		scope: string,
		asanaBaseUrl: string
	}

	declare interface AsanaAuthorizeUrlOptions {
		redirectUri?: string,
		asanaBaseUrl?: string
	}

	declare interface OauthErrorStatic {
		new (options: OauthErrorOptions): OauthError
	}

	declare interface OauthErrorOptions {
		error?: string,
		error_uri?: string,
		error_description?: string
	}

	declare interface OauthError {
		
	}

	declare interface RedirectFlowStatic {
		new (options: any): RedirectFlow
	}

	declare interface RedirectFlow {
		
	}

	declare interface PopupFlowStatic {
		new (options: any): PopupFlow
	}

	declare interface PopupFlow {
		_popupParams(popupWidth: number, popupHeight: number): void,
		runReceiver(): void
	}

	declare interface NativeFlowStatic {
		new (options: any): NativeFlow
	}

	declare interface NativeFlow {
		run(): void,
		accessToken(code: string): void,
		promptForCode(url: string): any
	}

	declare interface ChromeExtensionFlowStatic {
		new (options: any): ChromeExtensionFlow
	}

	declare interface ChromeExtensionFlow {
		runReceiver(): void
	}

	declare interface BaseBrowserFlowStatic {
		new (options: any): BaseBrowserFlow
	}

	declare interface BaseBrowserFlow {
		startAuthorization(authUrl: string, state: string): any,
		finishAuthorization(state: string): void,
		receiverUrl(): string,
		asanaBaseUrl(): string,
		getStateParam(): string
	}

	declare interface FlowType {
		new (options: any): Flow
	}

	declare interface Flow {
		authorizeUrl(): string,
		run(): void
	}

	declare function autoDetect(env: any): Function

		
}

declare module 'errors' {
				declare class AsanaError extends Error {
		constructor(message: any): this;
		code: number;
		value: any
	}

	declare class Forbidden extends AsanaError {
		constructor(value: any): this
	}

	declare class InvalidRequest extends AsanaError {
		constructor(value: any): this
	}

	declare class NoAuthorization extends AsanaError {
		constructor(value: any): this
	}

	declare class NotFound extends AsanaError {
		constructor(value: any): this
	}

	declare class RateLimitEnforced extends AsanaError {
		constructor(value: any): this
	}

	declare class ServerError extends AsanaError {
		constructor(value: any): this
	}

	
}

declare module 'resources' {
	declare type SimpleResourceList = ResourceList<Resource>;

	declare interface AttachmentsStatic {
		new (dispatcher: Dispatcher): Attachments
	}

	declare interface Attachments {
		findById(
		attachment: number, params?: Params, dispatchOptions?: any
	): Promise<Attachments.Type>,
		findByTask(
		task: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Attachments.Type>>
	}

	declare interface EventsStatic {
		new (dispatcher: Dispatcher): Events
	}

	declare interface Events {
		
	}

	declare interface ProjectsStatic {
		new (dispatcher: Dispatcher): Projects
	}

	declare interface Projects {
		create(
		data: Projects.CreateParams & {
		workspace: number
	}, dispatchOptions?: any
	): Promise<Projects.Type>,
		createInWorkspace(
		workspace: number, data: Projects.CreateParams, dispatchOptions?: any
	): Promise<Projects.Type>,
		createInTeam(
		team: number, data: Projects.CreateParams, dispatchOptions?: any
	): Promise<Projects.Type>,
		findById(
		project: number, params?: Params, dispatchOptions?: any
	): Promise<Projects.Type>,
		update(
		project: number, data: Projects.CreateParams, dispatchOptions?: any
	): Promise<Projects.Type>,
		delete(project: number, dispatchOptions?: any): Promise<void>,
		findAll(
		params?: Projects.FindAllParams, dispatchOptions?: any
	): Promise<ResourceList<Projects.Type>>,
		findByWorkspace(
		workspace: number, params?: Projects.FindByParams, dispatchOptions?: any
	): Promise<ResourceList<Projects.Type>>,
		findByTeam(
		team: number, params?: Projects.FindByParams, dispatchOptions?: any
	): Promise<ResourceList<Projects.Type>>,
		sections(
		project: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Tasks.Type>>,
		tasks(
		project: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Tasks.Type>>,
		addFollowers(
		project: number, data: Projects.FollowersParams, dispatchOptions?: any
	): Promise<Projects.Type>,
		removeFollowers(
		project: number, data: Projects.FollowersParams, dispatchOptions?: any
	): Promise<Projects.Type>,
		addMembers(
		project: number, data: Projects.MembersParams, dispatchOptions?: any
	): Promise<Projects.Type>,
		removeMembers(
		project: number, data: Projects.MembersParams, dispatchOptions?: any
	): Promise<Projects.Type>
	}

	declare interface StoriesStatic {
		new (dispatcher: Dispatcher): Stories
	}

	declare interface Stories {
		findByTask(
		task: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Stories.Type>>,
		findById(story: number, params?: Params, dispatchOptions?: any): Promise<Stories.Type>,
		createOnTask(
		task: number, data: any, dispatchOptions?: any
	): Promise<ResourceList<Stories.ShortType>>
	}

	declare interface TagsStatic {
		new (dispatcher: Dispatcher): Tags
	}

	declare interface Tags {
		create(
		data: Tags.Type & {
		workspace: string
	}, dispatchOptions?: any
	): Promise<Tags.Type>,
		createInWorkspace(workspace: number, data: Tags.Type, dispatchOptions?: any): Promise<Tags.Type>,
		findById(tag: number, params?: Params, dispatchOptions?: any): Promise<Tags.Type>,
		update(tag: number, data: Tags.Type, dispatchOptions?: any): Promise<Tags.Type>,
		delete(tag: number, dispatchOptions?: any): Promise<void>,
		findAll(
		params?: Tags.FindAllParams, dispatchOptions?: any
	): Promise<ResourceList<Tags.Type>>,
		findByWorkspace(
		workspace: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Tags.Type>>,
		getTasksWithTag(
		tag: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Tasks.Type>>
	}

	declare interface TasksStatic {
		new (dispatcher: Dispatcher): Tasks
	}

	declare interface Tasks {
		create(
		data: Tasks.CreateParams & {
		workspace: string
	}, dispatchOptions?: any
	): Promise<Tasks.Type>,
		createInWorkspace(
		workspace: number, data: Tasks.CreateParams, dispatchOptions?: any
	): Promise<Tasks.Type>,
		findById(task: number, params?: Params, dispatchOptions?: any): Promise<Tasks.Type>,
		update(
		task: number, data: Tasks.CreateParams, dispatchOptions?: any
	): Promise<Tasks.Type>,
		delete(task: number, dispatchOptions?: any): Promise<void>,
		findByProject(
		projectId: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Tasks.Type>>,
		findByTag(
		tag: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Tasks.Type>>,
		findAll(
		params?: Tasks.FindAllParams, dispatchOptions?: any
	): Promise<ResourceList<Tasks.Type>>,
		addFollowers(
		task: number, data: Tasks.FollowersParams, dispatchOptions?: any
	): Promise<Tasks.Type>,
		removeFollowers(
		task: number, data: Tasks.FollowersParams, dispatchOptions?: any
	): Promise<Tasks.Type>,
		projects(
		task: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Projects.Type>>,
		addProject(
		task: number, data: Tasks.AddProjectParams, dispatchOptions?: any
	): Promise<{
		
	}>,
		removeProject(
		task: number, data: Tasks.RemoveProjectParams, dispatchOptions?: any
	): Promise<{
		
	}>,
		tags(
		task: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Tags.Type>>,
		addTag(task: number, data: Tasks.TagParams, dispatchOptions?: any): Promise<{
		
	}>,
		removeTag(task: number, data: Tasks.TagParams, dispatchOptions?: any): Promise<{
		
	}>,
		subtasks(
		task: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Tasks.Type>>,
		addSubtask(
		task: number, data: Tasks.CreateParams, dispatchOptions?: any
	): Promise<Tasks.Type>,
		stories(
		task: number, params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Stories.Type>>,
		addComment(
		task: number, data: Tasks.CommentParams, dispatchOptions?: any
	): Promise<Stories.Type>
	}

	declare interface TeamsStatic {
		new (dispatcher: Dispatcher): Teams
	}

	declare interface Teams {
		findById(team: number, params?: Params, dispatchOptions?: any): Promise<Teams.Type>,
		findByOrganization(
		organization: number, params?: Params, dispatchOptions?: any
	): Promise<SimpleResourceList>,
		users(
		team: number, params?: Params, dispatchOptions?: any
	): Promise<SimpleResourceList>,
		addUser(team: number, data: UserParams, dispatchOptions?: any): Promise<any>,
		removeUser(team: number, data: UserParams, dispatchOptions?: any): Promise<any>
	}

	declare interface UsersStatic {
		new (dispatcher: Dispatcher): Users
	}

	declare interface Users {
		me(params?: Params, dispatchOptions?: any): Promise<Users.Type>,
		findById(
		user: string | number, params?: Params, dispatchOptions?: any
	): Promise<Users.Type>,
		findByWorkspace(
		workspace: number, params?: Params, dispatchOptions?: any
	): Promise<ResourceList<Users.Type>>,
		findAll(
		params: Users.FindAllParams, dispatchOptions?: any
	): Promise<SimpleResourceList>
	}

	declare interface WorkspacesStatic {
		new (dispatcher: Dispatcher): Workspaces
	}

	declare interface Workspaces {
		findById(
		workspace: number, params?: Params, dispatchOptions?: any
	): Promise<Workspaces.Type>,
		findAll(
		params?: PaginationParams, dispatchOptions?: any
	): Promise<ResourceList<Workspaces.ShortType>>,
		update(
		workspace: number, data: {
		name?: string
	}, dispatchOptions?: any
	): Promise<Workspaces.Type>,
		typeahead(
		workspace: number, params?: Workspaces.TypeaheadParams, dispatchOptions?: any
	): Promise<SimpleResourceList>,
		addUser(
		workspace: number, data: UserParams, dispatchOptions?: any
	): Promise<Users.Type>,
		removeUser(workspace: number, data: UserParams, dispatchOptions?: any): Promise<any>
	}

	declare interface ResourceStatic {
		new (dispatcher: Dispatcher): Resource,
		DEFAULT_PAGE_LIMIT: number,
		getCollection(
		dispatcher: any, path: string, query?: any, dispatchOptions?: any
	): Promise<any>,
		unwrap(promise: any): Promise<any>
	}

	declare interface Resource {
		dispatchGet(path: string, query?: any, dispatchOptions?: any): Promise<any>,
		dispatchGetCollection(path: string, query?: any, dispatchOptions?: any): Promise<any>,
		dispatchPost(path: string, query?: any, dispatchOptions?: any): Promise<any>,
		dispatchPut(path: string, query?: any, dispatchOptions?: any): Promise<any>,
		dispatchDelete(path: string, dispatchOptions?: any): Promise<any>
	}

	declare interface ResourceList<T> {
		data: T[],
		_response: {
		data: T[],
		next_page?: NextPage
	},
		_dispatcher: {
		authenticator: {
		apiKey: string
	},
		asanaBaseUrl: string,
		retryOnRateLimit: boolean,
		requestTimeout: number,
		_cachedVersionInfo: VersionInfo
	}
	}

	declare interface NextPage {
		offset: string,
		uri: string,
		path: string
	}

	declare interface VersionInfo {
		version: string,
		language: string,
		language_version: string,
		os: string,
		os_version: string
	}

	declare interface Resource {
		id: number,
		name: string
	}

	declare interface PaginationParams {
		limit?: number,
		offset?: string
	}

	declare interface Params {
		opt_fields?: string,
		opt_expand?: string
	}

	declare interface UserParams {
		user: string | number
	}

	declare interface Membership {
		project: Resource,
		section: Resource
	}

		declare class Webhooks extends Resource {
		constructor(dispatcher: Dispatcher): this;
		create(
		resource: number, target: string, data: any, dispatchOptions?: any
	): Promise<any>;
		getAll(workspace: number, params?: any, dispatchOptions?: any): Promise<any>;
		getById(webhook: string, params?: any, dispatchOptions?: any): Promise<any>;
		deleteById(webhook: string, dispatchOptions?: any): Promise<any>
	}

	
}

declare module 'Attachments' {
		declare interface Type {
		created_at: string,
		permanent_url: string,
		download_url: string,
		view_url: string,
		host: string,
		parent: Resource
	}

			
}

declare module 'Projects' {
		declare interface Type {
		created_at: string,
		modified_at: string,
		due_date: string,
		current_status: Status,
		public: boolean,
		archived: boolean,
		notes: string,
		color: string,
		workspace: Resource,
		team: Resource,
		members: Resource[],
		followers: Resource[]
	}

	declare interface CreateParams {
		name?: string,
		team?: number,
		public?: boolean,
		due_date: string,
		notes?: string,
		color?: string
	}

	declare interface FollowersParams {
		followers: (number | string)[]
	}

	declare interface MembersParams {
		members: (number | string)[]
	}

	declare interface Status {
		color: string,
		text: string,
		html_text: string,
		modified_at: string,
		author: Resource
	}

	declare interface FindAllParams {
		team?: number,
		archived?: boolean
	}

	declare interface FindByParams {
		archived?: boolean
	}

			
}

declare module 'Stories' {
		declare interface ShortType {
		created_at: string,
		created_by: Resource,
		type: string,
		text: string
	}

	declare interface Type {
		html_text: string,
		source: string,
		target: Resource,
		hearts: Type[]
	}

			
}

declare module 'Tags' {
		declare interface Type {
		created_at: string,
		notes: string,
		workspace: Resource,
		color: string,
		followers: Resource[]
	}

	declare interface FindAllParams {
		team?: number,
		archived?: boolean
	}

			
}

declare module 'Tasks' {
		declare interface Type {
		created_at: string,
		modified_at: string,
		completed_at: string,
		completed: boolean,
		due_on: string,
		due_at: string,
		assignee_status: string,
		assignee: Resource,
		notes: string,
		workspace: Resource,
		num_hearts: number,
		hearted: boolean,
		parent: Resource,
		tags: Resource[],
		projects: Resource[],
		memberships: Membership[],
		followers: Resource[]
	}

	declare interface CreateParams {
		name: string,
		completed?: boolean,
		hearted?: boolean,
		notes?: string
	}

	declare interface FollowersParams {
		followers: (number | string)[]
	}

	declare interface AddProjectParams {
		project: number,
		insertBefore?: number,
		insertAfter?: number,
		section?: number
	}

	declare interface RemoveProjectParams {
		project: number
	}

	declare interface TagParams {
		tag: string
	}

	declare interface CommentParams {
		text: string
	}

	declare interface FindAllParams {
		assignee?: number,
		workspace: number,
		completed_since?: string,
		modified_since?: string
	}

			
}

declare module 'Teams' {
		declare interface Type {
		organization: Resource
	}

			
}

declare module 'Users' {
		declare interface FindAllParams {
		workspace: number
	}

	declare interface Type {
		email: string,
		workspaces: Resource[],
		photo: {
		[key: string]: string
	}
	}

			
}

declare module 'Workspaces' {
		declare interface ShortType {
		id_organization?: boolean
	}

	declare interface Type {
		id_organization: boolean,
		email_domains: string[]
	}

	declare interface TypeaheadParams {
		type: string,
		query?: string,
		count?: number
	}

			
}
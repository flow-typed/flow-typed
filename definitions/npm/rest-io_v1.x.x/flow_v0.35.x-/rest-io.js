

declare module 'rest-io' {
		declare export interface RestIO {
		resource: ResourceModule
	}

	declare export interface IRestIOConfig {
		resources: string,
		db?: Mongoose
	}

	declare export interface ResourceModule {
		Resource: Resource,
		AuthorizedResource: AuthorizedResource,
		authorizedResource: AuthorizedResourceModule,
		UserResource: UserResource,
		SubResource: SubResource
	}

	declare export interface IResource {
		name: string,
		model: any,
		parentRef?: string,
		populate?: string,
		plural?: string,
		parentResource?: Resource
	}

	declare export interface AuthorizedResourceModule {
		AuthorizedResource: AuthorizedResource,
		ROLES: Roles
	}

	declare export interface Roles {
		USER: string,
		SUPER_USER: string,
		MODERATOR: string,
		ADMIN: string
	}

	declare export interface IMethodAccess {
		getAll: Array<string>,
		getById: Array<string>,
		create: Array<string>,
		update: Array<string>,
		del: Array<string>
	}

	declare export interface ISubResource {
		name: string,
		plural?: string,
		parentResource: Resource,
		populate?: string
	}

	declare function restIO(app: Application, config?: IRestIOConfig): RestIO

	declare export class Resource  {
		baseUrl: string;
		url: string;
		parameterizedUrl: string;
		model: Model<Document>;
		resDef: IResource;
		parentResource: Resource;
		router: Router;
		app: Application;
		db: Mongoose;
		paramId: string;
		parentRef: string;
		populate: string;
		constructor(resDef: IResource): this;
		createModel(resDef: IResource): Model<Document>;
		toClassName(name: string): string;
		setupRoutes(): void;
		getAll(req: Request, res: Response): void;
		buildParentSearch(req: Request): any;
		getById(req: Request, res: Response): void;
		create(req: Request, res: Response): void;
		update(req: Request, res: Response): void;
		del(req: Request, res: Response): void;
		errorHandler(err: Error, res: Response): void
	}

	declare export class AuthorizedResource extends Resource {
		methodAccess: IMethodAccess;
		maxDays: number;
		permissions: IMethodAccess;
		isTokenExpired(createdAt: Date): boolean;
		getRoles(id: string): Promise<Document>;
		hasAuthorizedRole(roles: Array<any>, authorizedRoles: Array<string>): boolean;
		hasAccessRightsDefined(req: Request, authorizedRoles: Array<string>): boolean;
		isAuthorized(req: Request, authorizedRoles: Array<string>): boolean;
		sendUnauthorized(error: Error, res: Response): void
	}

	declare export class UserResource extends AuthorizedResource {
		ensureBaseUserModel(model: any): void;
		createRoleModel(): void;
		isSelf(req: Request): boolean;
		login(req: Request, res: Response): void
	}

	declare export class SubResource extends Resource {
		constructor(resDef: ISubResource): this;
		createProjectionQuery(req: Request): any;
		createPullQuery(req: Request): any;
		createFindQuery(req: Request): any;
		createSubUpdateQuery(req: Request): any
	}

	
}
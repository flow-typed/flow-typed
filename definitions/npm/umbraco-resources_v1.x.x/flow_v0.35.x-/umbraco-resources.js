

declare module 'umbraco-resources' {
					
}

declare module 'resources' {
		declare export interface IResourcePromise {
		errorMsg: string,
		data: any,
		status: number
	}

	declare interface IAuthResource {
		performLogin(username: string, password: string): ng.IPromise<IResourcePromise>,
		performLogout(): ng.IPromise<IResourcePromise>,
		getCurrentUser(): ng.IPromise<IResourcePromise>,
		isAuthenticated(): ng.IPromise<IResourcePromise>,
		getRemainingTimeoutSeconds(): ng.IPromise<IResourcePromise>
	}

	declare interface IContentResource {
		sort(...args: any[]): ng.IPromise<IResourcePromise>,
		move(...args: any[]): ng.IPromise<IResourcePromise>,
		copy(...args: any[]): ng.IPromise<IResourcePromise>,
		unPublish(id: number): ng.IPromise<IResourcePromise>,
		emptyRecycleBin(): ng.IPromise<IResourcePromise>,
		deleteById(id: number): ng.IPromise<IResourcePromise>,
		getById(id: number): ng.IPromise<IResourcePromise>,
		getByIds(ids: number[]): ng.IPromise<IResourcePromise>,
		getScaffold(parentId: number, alias: string): ng.IPromise<IResourcePromise>,
		getNiceUrl(id: number): ng.IPromise<IResourcePromise>,
		getChildren(
		parentId: number, options?: {
		pageSize: number,
		pageNumber: number,
		filter: string,
		orderDirection: Direction,
		orderBy: OrderItemsBy
	}
	): ng.IPromise<IResourcePromise>,
		checkPermission(permission: string, id: number): ng.IPromise<IResourcePromise>,
		save(
		content: IContentResource, isNew: boolean, files: any[]
	): ng.IPromise<IResourcePromise>,
		publish(
		content: IContentResource, isNew: boolean, files: any[]
	): ng.IPromise<IResourcePromise>,
		sendToPublish(
		content: IContentResource, isNew: boolean, files: any[]
	): ng.IPromise<IResourcePromise>,
		publishById(id: number): ng.IPromise<IResourcePromise>
	}

	declare interface IContentTypeResource {
		getAllowedTypes(contentId: number): ng.IPromise<IResourcePromise>,
		getAllPropertyTypeAliases(): ng.IPromise<IResourcePromise>
	}

	declare interface ICurrentUserResource {
		changePassword(changePasswordArgs: any): ng.IPromise<IResourcePromise>,
		getMembershipProviderConfig(): any
	}

	declare interface IDashboardResource {
		getDashboard(section: string): ng.IPromise<IResourcePromise>
	}

	declare interface IDataTypeResource {
		getPreValues(editorAlias: string, dataTypeId: number): ng.IPromise<IResourcePromise>,
		getById(id: number): ng.IPromise<IResourcePromise>,
		getAll(): any,
		getScaffold(): ng.IPromise<IResourcePromise>,
		deleteById(id: number): ng.IPromise<IResourcePromise>,
		save(
		dataType: Object, preValues: any[], isNew: boolean
	): ng.IPromise<IResourcePromise>
	}

	declare interface IEntityResource {
		getPath(id: number, type: string): ng.IPromise<IResourcePromise>,
		getById(id: number, type: string): ng.IPromise<IResourcePromise>,
		getByQuery(
		query: string, nodeContextId: number | string, type: string
	): ng.IPromise<IResourcePromise>,
		getByIds(ids: number[], type: string): ng.IPromise<IResourcePromise>,
		getAll(
		type: string, postFilter: string, postFilterParams: string
	): ng.IPromise<IResourcePromise>,
		getAncestors(id: number, type: string): ng.IPromise<IResourcePromise>,
		getChildren(id: number, type: string): ng.IPromise<IResourcePromise>,
		search(
		query: string, type: string, searchFrom: any, canceler: any
	): ng.IPromise<IResourcePromise>,
		searchAll(query: string, canceler: any): ng.IPromise<IResourcePromise>
	}

	declare interface ILogResource {
		getEntityLog(id: number): ng.IPromise<IResourcePromise>,
		getUserLog(type: LogType, since: Date): ng.IPromise<IResourcePromise>,
		getLog(type: LogType, since: Date): ng.IPromise<IResourcePromise>
	}

	declare interface IMacroResource {
		getMacroParameters(macroId: number): any,
		getMacroResultAsHtmlForEditor(macroId: number, pageId: number, macroParamDictionary: any[]): any
	}

	declare interface IMediaResource {
		sort(...args: any[]): ng.IPromise<IResourcePromise>,
		move(...args: any[]): ng.IPromise<IResourcePromise>,
		getById(id: number): ng.IPromise<IResourcePromise>,
		deleteById(id: number): ng.IPromise<IResourcePromise>,
		getByIds(ids: number[]): ng.IPromise<IResourcePromise>,
		getScaffold(parentId: number, alias: string): ng.IPromise<IResourcePromise>,
		rootMedia(): any,
		getChildren(
		parentId: number, options?: {
		pageSize: number,
		pageNumber: number,
		filter: string,
		orderDirection: Direction,
		orderBy: OrderItemsBy
	}
	): ng.IPromise<IResourcePromise>,
		save(media: Object, isNew: boolean, files: any[]): ng.IPromise<IResourcePromise>,
		addFolder(name: string, parentId: number): ng.IPromise<IResourcePromise>,
		emptyRecycleBin(): ng.IPromise<IResourcePromise>
	}

	declare interface IMediaTypeResource {
		getAllowedTypes(mediaId: number): ng.IPromise<IResourcePromise>
	}

	declare interface IMemberResource {
		getPagedResults(memberTypeAlias: string, options: any): any,
		getListNode(listName: string): any,
		getByKey(key: string): ng.IPromise<IResourcePromise>,
		deleteByKey(key: string): ng.IPromise<IResourcePromise>,
		getScaffold(alias: string): ng.IPromise<IResourcePromise>,
		save(member: Object, isNew: boolean, files: any[]): ng.IPromise<IResourcePromise>
	}

	declare interface IMemberTypeResource {
		getTypes(): any
	}

	declare interface IPackageResource {
		fetch(id: string): string,
		import(package: string): number,
		installFiles(package: string): void,
		installData(package: string): void,
		cleanUp(package: string): void
	}

	declare interface ISectionResource {
		getSections(): void
	}

	declare interface IStylesheetResource {
		getAll(): ng.IPromise<IResourcePromise>,
		getRules(id: number): ng.IPromise<IResourcePromise>,
		getRulesByName(name: string): ng.IPromise<IResourcePromise>
	}

	declare interface ITreeResource {
		loadMenu(node: any): void,
		loadApplication(options: any): void,
		loadNodes(options: any): void
	}

	declare interface IUserResource {
		disableUser(userId: number): void
	}

			
}
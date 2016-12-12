

declare module 'umbraco-services' {
					
}

declare module 'services' {
		declare interface IAngularHelper {
		rejectedPromise(objReject: Object): void,
		safeApply(scope: ng.IScope, fn: Function): void,
		getCurrentForm(scope: ng.IScope): any,
		getRequiredCurrentForm(scope: ng.IScope): Object,
		getNullForm(formName: string): ng.IFormController
	}

	declare interface IGlobalState {
		showNavigation: boolean,
		touchDevice: boolean,
		showTray: boolean,
		stickyNavigation: any,
		navMode: any,
		isReady: boolean
	}

	declare interface ISectionState {
		currentSection: any,
		showSearchResults: boolean
	}

	declare interface ITreeState {
		selectedNode: any,
		currentRootNode: any
	}

	declare interface IMenuState {
		menuActions: any,
		dialogTitle: string,
		currentNode: any,
		showMenuDialog: boolean,
		showMenu: boolean
	}

	declare interface IStateObject {
		id: number,
		parentId: number,
		name: string
	}

	declare interface IAppState {
		setState(stateObj: IStateObject, key: string, value: any, stateObjName: string): void,
		getState(stateObj: IStateObject, key: string, stateObjName: string): IStateObject,
		getGlobalState(key: string): IGlobalState,
		setGlobalState(key: string, value: boolean): void,
		getSectionState(key: string): ISectionState,
		setSectionState(key: string, value: ISectionState): void,
		getTreeState(key: string): ITreeState,
		setTreeState(key: string, value: ITreeState): void,
		getMenuState(key: string): IStateObject,
		setMenuState(key: string, value: IMenuState): void
	}

	declare interface IState {
		set(entity: Object): void,
		reset(): void,
		getCurrent(): any
	}

	declare interface IAssetsService {
		loadCss(
		path: string, scope: ng.IScope, attributes: Object, timeout: number
	): ng.IPromise<any>,
		loadJs(
		path: string, scope: ng.IScope, attributes: Object, timeout: number
	): ng.IPromise<any>,
		load(pathArray: string[], scope: ng.IScope): ng.IPromise<any>
	}

	declare interface IContentEditingHelper {
		getAllProps(content: any): any,
		getAllowedActions(content: any, creating: any): string[],
		getButtonFromAction(ch: string): any,
		reBindChangedProperties(origContent: any, savedContent: any): void,
		handleSaveError(...args: any[]): void,
		handleSuccessfulSave(...args: any[]): void,
		redirectToCreatedContent(id: number, modelState: any): void
	}

	declare interface ICropperHelper {
		configuration(mediaTypeAlias: string): any
	}

	declare interface IDialogRenderingOptions {
		container?: HTMLElement,
		callback: Function,
		template: string,
		animation?: string,
		modalClass?: string,
		show?: boolean,
		iframe: boolean,
		width?: number,
		inline?: boolean,
		dialogData?: any
	}

	declare interface IModal {
		
	}

	declare interface IMediaPickerOptions {
		onlyImages: boolean,
		callback: Function
	}

	declare interface IContentPickerOptions {
		multipicker: boolean,
		callback: Function
	}

	declare interface IIconPickerOptions {
		callback: Function
	}

	declare interface ILinkPickerOptions {
		callback: Function
	}

	declare interface IMacroPickerOptions {
		callback: Function
	}

	declare interface IMemberGroupPickerOptions {
		multiPicker: boolean,
		callback: Function
	}

	declare interface IMemberPickerOptions {
		multiPicker: boolean,
		callback: Function
	}

	declare interface IPropertyDialogOptions {
		callback: Function,
		editor: string,
		value: Object
	}

	declare interface ITreePickerOptions {
		section: string,
		treeAlias: string,
		multiPicker: boolean,
		callback: Function
	}

	declare interface IDialog {
		
	}

	declare interface IDialogService {
		dialogs?: any[],
		removeAllDialogs(...args: any[]): void,
		closeDialog(dialog: IDialog): void,
		openDialog(options: IDialogRenderingOptions): IModal,
		open(options: IDialogRenderingOptions): IModal,
		close(dialog: IDialog, ...args: any[]): void,
		closeAll(...args: any[]): void,
		mediaPicker(options: IMediaPickerOptions): IModal,
		contentPicker(options: IContentPickerOptions): IModal,
		linkPicker(options: ILinkPickerOptions): IModal,
		macroPicker(options: IMacroPickerOptions): IModal,
		memberPicker(options: IMemberPickerOptions): IModal,
		memberGroupPicker(options: IMemberGroupPickerOptions): IModal,
		iconPicker(options: IIconPickerOptions): IModal,
		treePicker(options: ITreePickerOptions): IModal,
		propertyDialog(options: IPropertyDialogOptions): IModal,
		embedDialog(options: any): void,
		ysodDialog(ysodError: any): void
	}

	declare interface IEventService {
		
	}

	declare interface IFile {
		
	}

	declare interface IFileManager {
		setFiles(propertyAlias: string, files: IFile[]): void,
		getFiles(): IFile[],
		clearFiles(): void
	}

	declare interface IModelState {
		
	}

	declare interface IFormHelper {
		submitForm(...args: any[]): void,
		resetForm(...args: any[]): void,
		handleError(err: Object): void,
		handleServerValidation(modelState: IModelState): void
	}

	declare interface IHistoryItem {
		icon: string,
		link: string,
		name: string
	}

	declare interface IHistoryService {
		add(item: IHistoryItem): IHistoryItem,
		remove(index: number): void,
		removeAll(): void,
		getCurrent(): IHistoryItem[]
	}

	declare interface IMacroService {
		generateMacroSyntax(...args: any[]): void,
		generateWebFormsSyntax(...args: any[]): void,
		generateMvcSyntax(...args: any[]): void
	}

	declare interface IMediaModel {
		
	}

	declare interface IMediaOptions {
		mediaModel: IMediaModel,
		imageOnly: boolean
	}

	declare interface IMediaEntity {
		
	}

	declare interface IMediaHelper {
		getMediaPropertyValue(options: IMediaOptions): string,
		getImagePropertyValue(options: IMediaOptions): string,
		getThumbnail(options: IMediaOptions): string,
		resolveFileFromEntity(mediaEntity: IMediaEntity, thumbnail: boolean): string,
		resolveFile(mediaItem: IMediaEntity, thumbnail: boolean): string,
		scaleToMaxSize(maxSize: number, width: number, height: number): any,
		getThumbnailFromPath(imagePath: string): string,
		detectIfImageByExtension(imagePath: string): boolean
	}

	declare interface IEditorState {
		current: any,
		state: IState
	}

	declare interface ISyncTreeArgs {
		tree: string,
		path: string,
		forceReload: boolean,
		activate: boolean
	}

	declare interface IShowDialogAction {
		name: string,
		alias: string
	}

	declare interface IShowDialogArgs {
		scope: ng.IScope,
		action: IShowDialogAction
	}

	declare interface INavigationService {
		loadLegacyIFrame(source: string): void,
		changeSection(sectionAlias: string, force: boolean): void,
		showTree(sectionAlias: string, syncArgs: ISyncTreeArgs): void,
		showTray(): void,
		hideTray(): void,
		setupTreeEvents(treeEventHandler: any): void,
		syncTree(args: ISyncTreeArgs): any,
		_syncPath(path: string[], forceReload: boolean): void,
		reloadNode(node: any): void,
		reloadSection(sectionAlias: string): void,
		_setActiveTreeType(treeAlias: string, loadChildren: boolean): void,
		hideTree(): void,
		showMenu(event: Event, ...args: any[]): void,
		hideMenu(): void,
		executeMenuAction(action: any, node: any, section: any): void,
		showUserDialog(): void,
		showHelpDialog(): void,
		showDialog(args: IShowDialogArgs): void,
		hideDialog(showMenu: boolean): void,
		showSearch(): void,
		hideSearch(): void,
		hideNavigation(): void
	}

	declare interface INotification {
		
	}

	declare interface INotificationArgs {
		type: NotificationType,
		header: string,
		message: string
	}

	declare interface IButtonAction {
		
	}

	declare interface INotificationItem {
		headline: string,
		message: string,
		type: NotificationType,
		url: string,
		view: string,
		actions: IButtonAction[],
		sticky: boolean
	}

	declare interface INotificationsService {
		add(item: INotificationItem): INotification,
		hasView(view: string): boolean,
		addView(view: string, ...args: any[]): void,
		showNotification(args: INotificationArgs): INotification,
		success(headline: string, message: string): INotification,
		error(headline: string, message: string): INotification,
		warning(headline: string, message: string): INotification,
		info(headline: string, message: string): INotification,
		remove(index: number): void,
		removeAll(): void,
		current: string[],
		getCurrent(): INotification[]
	}

	declare interface ISearchArgs {
		term: string
	}

	declare interface ISearchMember {
		name: string,
		id: number,
		menuUrl: string,
		editorPath: string,
		metaData: Object,
		subtitle: string
	}

	declare interface ISearchContent {
		menuUrl: string,
		id: number,
		editorPath: string,
		metaData: {
		Url: string
	},
		subTitle: string
	}

	declare interface ISearchMedia {
		
	}

	declare interface ISearchService {
		searchMembers(args: ISearchArgs): ng.IPromise<ISearchMember[]>,
		searchContent(args: ISearchArgs): ng.IPromise<ISearchContent[]>,
		searchMedia(args: ISearchArgs): ng.IPromise<ISearchMedia[]>,
		searchAll(args: ISearchArgs): ng.IPromise<any>
	}

	declare interface IServerValidationManager {
		executeAndClearAllSubscriptions(): void,
		subscribe(propertyAlias: string, fieldName: string, callback: Function): void,
		getPropertyCallbacks(propertyAlias: string, fieldName: string): void,
		getFieldCallbacks(fieldName: string): any,
		addFieldError(fieldName: string, errorMsg: string): void,
		addPropertyError(propertyAlias: string, fieldName: string, errorMsg: string): void,
		removePropertyError(propertyAlias: string, fieldName: string): void,
		reset(): void,
		clear(): void,
		getPropertyError(propertyAlias: string, fieldName: string): string,
		getFieldError(fieldName: string): string,
		hasPropertyError(propertyAlias: string, fieldName: string): boolean,
		hasFieldError(fieldName: string): boolean
	}

	declare interface ITinyMcePlugin {
		
	}

	declare interface IDimension {
		height: number,
		width: number
	}

	declare interface IConfiguration {
		toolbar: string[],
		stylesheets: string[],
		dimensions: IDimension,
		maxImageSize: number
	}

	declare interface ITinyMceService {
		configuration(): ITinyMcePlugin[],
		defaultPrevalues(): IConfiguration,
		createInsertEmbeddedMedia(editor: Object, $scope: ng.IScope): void,
		createMediaPicker(editor: Object): void,
		createInsertMacro(editor: Object, $scope: ng.IScope): void
	}

	declare interface IPackageFolder {
		
	}

	declare interface ICacheArgs {
		cacheKey: string,
		section?: string,
		childrenOf?: number
	}

	declare interface INodeArgs {
		node: any,
		section: any
	}

	declare interface ITreeArgs {
		cacheKey?: string,
		section: string
	}

	declare interface ITreeService {
		getTreePackageFolder(treeAlias: string): IPackageFolder,
		clearCache(args?: ICacheArgs): void,
		loadNodeChildren(args: INodeArgs): ng.IPromise<any>,
		removeNode(treeNode: Object): void,
		removeChildNodes(treeNode: Object): void,
		getChildNode(treeNode: Object, id: number): any,
		getDescendantNode(treeNode: Object, id: number, treeAlias: string): any,
		getTreeRoot(treeNode: Object): any,
		getTreeAlias(treeNode: Object): string,
		getTree(args: ITreeArgs): ng.IPromise<any>,
		getMenu(...args: any[]): any,
		getChildren(...args: any[]): any,
		reloadNode(node: Object): void,
		getPath(node: Object): string
	}

	declare interface KeyValuePair<T> {
		key: string,
		value: T
	}

	declare interface IUmbracoRequestHelper {
		convertVirtualToAbsolutePath(virtualPath: string): string,
		dictionaryToQueryString(queryStrings: KeyValuePair<string>[]): string,
		getApiUrl(
		apiName: string, actionName: string, queryStrings: string | KeyValuePair<string>[]
	): string,
		resourcePromise<T>(
		httpPromise: ng.IPromise<T>, opts: string | {
		success: ng.IHttpPromiseCallback<T>,
		errorMsg: string
	} | {
		success: ng.IHttpPromiseCallback<T>,
		error: ng.IHttpPromiseCallback<umb.resources.IResourcePromise>
	}
	): umb.resources.IResourcePromise | Object
	}

			
}
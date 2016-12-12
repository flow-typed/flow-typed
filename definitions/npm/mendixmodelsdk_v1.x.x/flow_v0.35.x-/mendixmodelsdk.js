

declare module 'mendixmodelsdk' {
		declare interface IModel {
		id: string,
		root: projects.IProject,
		metadata: internal.transport.IWorkingCopy,
		closeConnection(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): any,
		deleteWorkingCopy(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): any,
		exportMpk(
		outFilePath: string, callback: common.IVoidCallback, errorCallback?: common.IErrorCallback
	): any,
		findModuleByQualifiedName(qname: string): any,
		fetchUnitById<T>(
		id: string, callback: common.ICallback<T>, errorCallback?: common.IErrorCallback
	): any
	}

		declare class ModelSdkClient  {
		constructor(connectionConfig: configuration.ISdkConfig): this;
		createWorkingCopy(
		workingCopyParameters: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<IModel>, errorCallback: common.IErrorCallback
	): void;
		openWorkingCopy(
		workingCopyId: string, callback: common.ICallback<IModel>, errorCallback: common.IErrorCallback
	): void;
		deleteWorkingCopy(
		workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): void;
		grantAccess(
		workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): void;
		revokeAccess(
		workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): void;
		checkAccess(
		workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback
	): void;
		exportMpk(
		workingCopyId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): void
	}

	
}

declare module 'references' {
				declare class AbstractReference<T> extends properties$IObservable {
		owner: elements.AbstractElement;
		isResolved: boolean;
		target: Mobservable.IObservableValue<T>;
		isResolving: boolean;
		referenceId: string;
		constructor(owner: elements.AbstractElement): this;
		observe(
		callback: (newValue: T, oldValue: T) => void, fireImmediately?: boolean
	): common.IVoidCallback;
		get(): T;
		set(newValue: T): void;
		updateWithRawValue(value: string): void;
		registerRef(): void;
		unregisterRef(): void;
		resolve(): boolean;
		dispose(): void
	}

	declare class ByIdReference<T> extends AbstractReference<T> {
		set(newValue: T): void;
		get(): T;
		resolve(): boolean
	}

	declare class ByNameReference<T> extends AbstractReference<T> {
		constructor(owner: elements.AbstractElement, targetType: string): this;
		resolve(): boolean;
		unresolve(): void;
		dispose(): void;
		qualifiedName(): string
	}

	
}

declare module 'structures' {
	declare type IContainer = units.IStructuralUnit | elements.IAbstractElement;

	declare type Container = units.StructuralUnit | elements.AbstractElement;

	declare interface IStructure {
		id: string,
		typeName: string,
		container: IContainer,
		isLoaded: boolean,
		unit: units.IAbstractUnit,
		load<T>(callback?: (elem: T) => void): any,
		load<T>(): T,
		toPlainJson(): Object
	}

		declare class Structure extends IStructure {
		id: string;
		typeName: string;
		container: Container;
		constructor(isCreatingNewInstance: boolean, _model: model.Model, container: Container, json: transport.IStructureJson, isPartial: boolean): this;
		unit: units.IAbstractUnit;
		isLoaded: boolean;
		delete(): void;
		load<T>(callback?: (elem: T) => void): any;
		load<T>(): T;
		toPlainJson(): Object
	}

	
}

declare module 'elements' {
		declare interface IAbstractElement {
		isLoaded: boolean,
		qualifiedName: string,
		container: structures.IContainer
	}

	declare interface IElement {
		
	}

		declare class AbstractElement extends structures$Structure, IAbstractElement {
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: structures.Container, json: transport.IStructureJson, isPartial: boolean): this;
		isLoaded: boolean;
		qualifiedName: string;
		load<T>(callback?: (elem: T) => void): any;
		load<T>(): T;
		delete(): void
	}

	declare class Element extends AbstractElement, IElement {
		container: AbstractElement;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		unit: units.ModelUnit;
		isLoaded: boolean
	}

	
}

declare module 'instances' {
		declare interface IList<T> {
		
	}

	declare function abstractUnitJsonToInstance(
		model: model.Model, json: transport.IAbstractUnitJson, isPartial: boolean
	): units.AbstractUnit

	declare function modelElementJsonToInstance(
		unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean
	): elements.Element

	declare class IEnum  {
		qualifiedTsTypeName: string;
		constructor(_name: string): this;
		name: string;
		toString(): string;
		qualifiedTsLiteralName(): string
	}

	
}

declare module 'units' {
		declare interface IAbstractUnit {
		container: IStructuralUnit,
		isLoaded: boolean
	}

	declare interface IStructuralUnit {
		
	}

	declare interface IModelUnit {
		container: IStructuralUnit,
		moduleName: string
	}

	declare interface IElementsCache {
		[id: string]: elements.AbstractElement
	}

		declare class AbstractUnit extends structures$Structure, IAbstractUnit {
		container: StructuralUnit;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		isLoaded: boolean
	}

	declare class StructuralUnit extends AbstractUnit, IStructuralUnit {
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		unit: StructuralUnit
	}

	declare class ModelUnit extends elements$AbstractElement, IModelUnit {
		container: StructuralUnit;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		unit: ModelUnit;
		isLoaded: boolean;
		moduleName: string
	}

	
}

declare module 'properties' {
		declare interface IObservable {
		observe(listener: any, fire: any): () => void
	}

		declare class AbstractProperty<T, P>  {
		parent: structures.Structure;
		name: string;
		isPublic: boolean;
		handle: () => void;
		observableValue: P;
		constructor(parent: structures.Structure, name: string, isPublic: boolean, initialValue: T, ...moreArgs: any[]): this;
		initialize(value: T, ...moreConstructorArgs: any[]): P;
		fireOnChange(): void;
		onChange(...args: any[]): void;
		get(): T;
		set(newValue: T): void;
		updateWithRawValue(value: any): void;
		assertLoaded(): void;
		resolveReferences(): void;
		dispose(): void
	}

	declare class PrimitiveProperty<T> extends AbstractProperty<T, Mobservable.IObservableValue<T>> {
		initialize(
		defaultValue: T, primitiveType: PrimitiveTypeEnum
	): Mobservable.IObservableValue<T>;
		get(): T;
		set(newValue: T): void;
		updateWithRawValue(value: T): void;
		onChange(newValue: T, oldValue: T): void
	}

	declare class PrimitiveListProperty<T> extends AbstractProperty<T[], Mobservable.IObservableArray<T>> {
		initialize(initialItems: T[]): Mobservable.IObservableArray<T>;
		get(): Mobservable.IObservableArray<T>;
		set(newValue: T[]): void;
		updateWithRawValue(value: T[]): void;
		onChange(change: Mobservable.IArraySplice<T> | Mobservable.IArrayChange<T>): void;
		toRawChangeValue(value: T): any
	}

	declare class EnumProperty<T> extends PrimitiveProperty<T> {
		enumType: NO PRINT IMPLEMENTED: ConstructorType;
		constructor(parent: structures.Structure, name: string, isPublic: boolean, initialValue: T, enumType: NO PRINT IMPLEMENTED: ConstructorType): this;
		updateWithRawValue(value: any): void;
		onChange(newValue: any, oldValue: any): void
	}

	declare class EnumListProperty<T> extends PrimitiveListProperty<T> {
		enumType: NO PRINT IMPLEMENTED: ConstructorType;
		constructor(parent: structures.Structure, name: string, isPublic: boolean, initialValue: T[], enumType: NO PRINT IMPLEMENTED: ConstructorType): this;
		updateWithRawValue(value: any): void;
		toRawChangeValue(value: T): any
	}

	declare class PartProperty<T> extends AbstractProperty<T, Mobservable.IObservableValue<T>> {
		parent: elements.AbstractElement;
		initialize(value: T, hasDefaultValue: boolean): Mobservable.IObservableValue<T>;
		get(): T;
		set(newValue: any): void;
		updateWithRawValue(value: any): void;
		onChange(newValue: elements.Element, oldValue: elements.Element): void;
		resolveReferences(): void;
		updateElementContainer(unit: units.ModelUnit): void;
		dispose(): void
	}

	declare class PartListProperty<T> extends AbstractProperty<T[], Mobservable.IObservableArray<T>> {
		parent: elements.AbstractElement;
		initialize(initialItems: T[]): Mobservable.IObservableArray<T>;
		get(): Mobservable.IObservableArray<T>;
		set(newValue: T[]): void;
		updateWithRawValue(value: any): void;
		onChange(changeData: Mobservable.IArrayChange<T> | Mobservable.IArraySplice<T>): void;
		processChildRemoval(element: T): void;
		processChildAddition(index: number): void;
		resolveReferences(): void;
		updateElementContainer(unit: units.ModelUnit): void;
		removeChild(child: T): boolean;
		dispose(): void
	}

	declare class ByNameReferenceProperty<T> extends AbstractProperty<T, references.ByNameReference<T>> {
		parent: elements.AbstractElement;
		constructor(parent: elements.AbstractElement, name: string, isPublic: boolean, initialValue: T, targetType: string): this;
		initialize(value: T, targetType: string): references.ByNameReference<T>;
		get(): T;
		set(newValue: T): void;
		updateWithRawValue(value: string): void;
		resolveReferences(): void;
		onChange(newValue: T, oldValue: T): void;
		qualifiedName(): string;
		dispose(): void
	}

	declare class ByNameReferenceListProperty<T> extends AbstractProperty<T[], Mobservable.IObservableArray<references.ByNameReference<T>>> {
		parent: elements.AbstractElement;
		constructor(parent: elements.AbstractElement, name: string, isPublic: boolean, value: T[], targetType: string): this;
		initialize(value: T[]): Mobservable.IObservableArray<references.ByNameReference<T>>;
		get(): instances.IList<T>;
		set(newElements: T[]): void;
		updateWithRawValue(qualifiedNames: string[]): void;
		resolveReferences(): void;
		qualifiedNames(): string[];
		dispose(): void;
		supressViewEvents: boolean;
		replaceViewItems(newItems: T[]): void;
		onChange(
		changeData: Mobservable.IArrayChange<references.ByNameReference<T>> | Mobservable.IArraySplice<references.ByNameReference<T>>
	): void;
		toRawChangeValue(reference: references.ByNameReference<T>): any
	}

	declare class ByIdReferenceProperty<T> extends AbstractProperty<T, references.ByIdReference<T>> {
		parent: elements.AbstractElement;
		initialize(value: T): references.ByIdReference<T>;
		get(): T;
		set(value: T): void;
		updateWithRawValue(value: string): void;
		resolveReferences(): void;
		onChange(newValue: T, oldValue: T): void;
		dispose(): void
	}

	declare class DerivedProperty<T> extends AbstractProperty<T, Mobservable.IObservableValue<T>> {
		constructor(parent: structures.Structure, name: string, isPublic: boolean, value: T, targetRefType?: string): this;
		initialize(value: any): Mobservable.IObservableValue<any>;
		get(): T;
		set(value: T): void;
		updateWithRawValue(value: any): void;
		qualifiedName(): string;
		dispose(): void
	}

	declare class DerivedListProperty<T> extends AbstractProperty<T[], Mobservable.IObservableArray<T>> {
		constructor(parent: structures.Structure, name: string, isPublic: boolean, value: T[], targetRefType?: string): this;
		initialize(value: T[]): Mobservable.IObservableArray<T>;
		get(): instances.IList<T>;
		set(value: T[]): void;
		updateWithRawValue(value: any): void;
		qualifiedNames(): string[];
		dispose(): void
	}

	declare class StructuralChildProperty<T> extends AbstractProperty<T, Mobservable.IObservableValue<T>> {
		constructor(parent: units.StructuralUnit, name: string, isPublic: boolean, value: T, targetRefType?: string): this;
		initialize(value: T): Mobservable.IObservableValue<T>;
		get(): T;
		set(value: T): void;
		updateWithRawValue(value: any): void;
		dispose(): void
	}

	declare class StructuralChildListProperty<T> extends AbstractProperty<T[], Mobservable.IObservableArray<T>> {
		constructor(parent: units.StructuralUnit, name: string, isPublic: boolean, value: T[], targetRefType?: string): this;
		initialize(value: T[]): Mobservable.IObservableArray<T>;
		get(): instances.IList<T>;
		set(value: T[]): void;
		updateWithRawValue(value: any): void;
		dispose(): void
	}

	
}

declare module 'transport' {
		declare interface IMprMetaData {
		
	}

	declare interface IWorkingCopyMetaData {
		name: string,
		description: string,
		avatarUrl: string
	}

	declare interface IWorkingCopy {
		id: string,
		metaData: IWorkingCopyMetaData,
		members: string[],
		mprFileName: string,
		mprMetaData: IMprMetaData
	}

	declare interface IStructureJson {
		$Type: string,
		$ID: string
	}

	declare interface IAbstractUnitJson {
		contents: {
		[key: string]: any
	},
		containerId: string,
		containmentName: string
	}

	declare interface IAbstractElementJson {
		[key: string]: any
	}

	declare interface IDelta {
		deltaType: string,
		unitId: string
	}

	declare interface IElementDelta {
		elementId: string
	}

	declare interface ICreateElementDelta {
		parentId: string,
		parentPropertyName: string,
		elementType: string
	}

	declare interface ICreateElementDeltaResult {
		additionIndex: number
	}

	declare interface IUpdatePropertyValueDelta {
		propertyName: string,
		mutator: IMutator
	}

	declare interface IMutator {
		mutatorType: string
	}

	declare interface IChangeMutator {
		value: any,
		updateIndex?: number
	}

	declare interface IAddMutator {
		value: any,
		insertionIndex?: number
	}

	declare interface IRemoveMutator {
		removalIndex: number
	}

	declare interface IMoveMutator {
		fromIndex: number,
		toIndex: number
	}

	declare interface IUpdatePropertyValueDeltaResult {
		
	}

	declare interface IMoveElementDelta {
		newParentId: string,
		newParentPropertyName: string,
		newIndex?: number
	}

	declare interface IMoveElementDeltaResult {
		oldParentId: string,
		oldParentPropertyName: string,
		oldIndex: number,
		newIndex: number
	}

	declare interface IDeleteElementDelta {
		
	}

	declare interface IDeleteElementDeltaResult {
		parentId: string,
		propertyName: string,
		removalIndex: number
	}

	declare interface ICreateUnitDelta {
		containerId: string,
		containmentName: string,
		contentType: string
	}

	declare interface ICreateUnitDeltaResult {
		
	}

			
}

declare module 'common' {
		declare interface IPoint {
		x: number,
		y: number
	}

	declare interface ISize {
		width: number,
		height: number
	}

	declare interface IColor {
		red: number,
		green: number,
		blue: number
	}

	declare interface IDimension {
		
	}

	declare interface IVoidCallback {
		(): void
	}

	declare interface IErrorCallback {
		(err: any): void
	}

	declare interface ICallback<T> {
		(data: T): void
	}

			
}

declare module 'utils' {
			declare function randomUuid(): any

	declare function flatten<T>(array: T[][]): T[]

	declare function combineUrl(...parts: string[]): string

		
}

declare module 'projects' {
		declare interface IProject {
		load(): Project,
		load(callback: (element: Project) => void): any,
		projectDocuments: instances.IList<IProjectDocument>,
		modules: instances.IList<IModule>,
		projectConversion: IProjectConversion,
		isSystemProject: boolean
	}

	declare interface IProjectDocument {
		container: IProject,
		load(): ProjectDocument,
		load(callback: (element: ProjectDocument) => void): any
	}

	declare interface IFolderBase {
		load(): FolderBase,
		load(callback: (element: FolderBase) => void): any,
		folders: instances.IList<IFolder>,
		documents: instances.IList<IDocument>
	}

	declare interface IFolder {
		container: IFolderBase,
		load(): Folder,
		load(callback: (element: Folder) => void): any,
		name: string
	}

	declare interface IModule {
		container: IProject,
		load(): Module,
		load(callback: (element: Module) => void): any,
		sortIndex: number,
		name: string,
		domainModel: domainmodels.IDomainModel,
		moduleSecurity: security.IModuleSecurity,
		fromAppStore: boolean,
		appStoreGuid: string,
		appStoreVersionGuid: string,
		appStoreVersion: string
	}

	declare interface IModuleDocument {
		container: IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IOneTimeConversionMarker {
		container: IProjectConversion,
		load(): OneTimeConversionMarker,
		load(callback: (element: OneTimeConversionMarker) => void): any
	}

	declare interface IProjectConversion {
		container: IProject,
		load(): ProjectConversion,
		load(callback: (element: ProjectConversion) => void): any
	}

		declare class Project extends units$StructuralUnit, IProject {
		typeName: string;
		projectDocuments: instances.IList<ProjectDocument>;
		modules: instances.IList<Module>;
		projectConversion: ProjectConversion;
		isSystemProject: boolean;
		constructor(container: units.IStructuralUnit): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ProjectDocument extends units$ModelUnit, IProjectDocument {
		typeName: string;
		container: Project;
		constructor(container: IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class FolderBase extends units$StructuralUnit, IFolderBase {
		typeName: string;
		folders: instances.IList<Folder>;
		documents: instances.IList<Document>;
		constructor(container: units.IStructuralUnit): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Folder extends FolderBase, IFolder {
		typeName: string;
		container: FolderBase;
		name: string;
		constructor(container: IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Module extends FolderBase, IModule {
		typeName: string;
		container: Project;
		sortIndex: number;
		name: string;
		domainModel: domainmodels.DomainModel;
		moduleSecurity: security.ModuleSecurity;
		fromAppStore: boolean;
		appStoreGuid: string;
		appStoreVersionGuid: string;
		appStoreVersion: string;
		constructor(container: IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: FolderBase;
		constructor(container: IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends ModuleDocument, IDocument {
		typeName: string;
		container: FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class OneTimeConversionMarker extends elements$Element, IOneTimeConversionMarker {
		typeName: string;
		container: ProjectConversion;
		name: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ProjectConversion extends units$ModelUnit, IProjectConversion {
		typeName: string;
		container: Project;
		markers: instances.IList<OneTimeConversionMarker>;
		constructor(container: IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConversionState extends instances$IEnum {
		qualifiedTsTypeName: string;
		Start: ConversionState;
		SetAppstoreModules: ConversionState;
		UpdateAppstoreModules: ConversionState;
		SolveModelerErrors: ConversionState;
		FixJavaCode: ConversionState;
		FixIntegrationJavaCode: ConversionState;
		DeployToEclipse: ConversionState;
		MigrateJavaLibs: ConversionState;
		RemoveUnusedJars: ConversionState;
		CopyRuntimeJars: ConversionState;
		Finished: ConversionState
	}

	declare class HashAlgorithmType extends instances$IEnum {
		qualifiedTsTypeName: string;
		BCrypt: HashAlgorithmType;
		SSHA256: HashAlgorithmType;
		SSHA: HashAlgorithmType;
		SHA256: HashAlgorithmType;
		SHA1: HashAlgorithmType;
		MD5: HashAlgorithmType
	}

	declare class SecurityLevel extends instances$IEnum {
		qualifiedTsTypeName: string;
		CheckNothing: SecurityLevel;
		CheckFormsAndMicroflows: SecurityLevel;
		CheckEverything: SecurityLevel
	}

	
}

declare module 'microflows' {
		declare interface IMicroflowAction {
		container: IActionActivity,
		load(): MicroflowAction,
		load(callback: (element: MicroflowAction) => void): any
	}

	declare interface IAppServiceCallAction {
		container: IActionActivity,
		load(): AppServiceCallAction,
		load(callback: (element: AppServiceCallAction) => void): any
	}

	declare interface IAppServiceCallParameterMapping {
		container: IAppServiceCallAction,
		load(): AppServiceCallParameterMapping,
		load(callback: (element: AppServiceCallParameterMapping) => void): any
	}

	declare interface IWebServiceCallAction {
		container: IActionActivity,
		load(): WebServiceCallAction,
		load(callback: (element: WebServiceCallAction) => void): any
	}

	declare interface IRequestHandling {
		container: IWebServiceCallAction,
		load(): RequestHandling,
		load(callback: (element: RequestHandling) => void): any
	}

	declare interface IAdvancedRequestHandling {
		container: IWebServiceCallAction,
		load(): AdvancedRequestHandling,
		load(callback: (element: AdvancedRequestHandling) => void): any
	}

	declare interface IHttpConfiguration {
		container: IWebServiceCallAction,
		load(): HttpConfiguration,
		load(callback: (element: HttpConfiguration) => void): any
	}

	declare interface IHttpHeaderEntry {
		container: IHttpConfiguration,
		load(): HttpHeaderEntry,
		load(callback: (element: HttpHeaderEntry) => void): any
	}

	declare interface IImportMappingCall {
		container: IResultHandling,
		load(): ImportMappingCall,
		load(callback: (element: ImportMappingCall) => void): any
	}

	declare interface IImportXmlAction {
		container: IActionActivity,
		load(): ImportXmlAction,
		load(callback: (element: ImportXmlAction) => void): any
	}

	declare interface IResultHandling {
		load(): ResultHandling,
		load(callback: (element: ResultHandling) => void): any
	}

	declare interface ICustomRequestHandling {
		container: IWebServiceCallAction,
		load(): CustomRequestHandling,
		load(callback: (element: CustomRequestHandling) => void): any
	}

	declare interface IMappingRequestHandling {
		container: IWebServiceCallAction,
		load(): MappingRequestHandling,
		load(callback: (element: MappingRequestHandling) => void): any
	}

	declare interface ISimpleRequestHandling {
		container: IWebServiceCallAction,
		load(): SimpleRequestHandling,
		load(callback: (element: SimpleRequestHandling) => void): any
	}

	declare interface IExportXmlAction {
		container: IActionActivity,
		load(): ExportXmlAction,
		load(callback: (element: ExportXmlAction) => void): any
	}

	declare interface IOutputMethod {
		container: IExportXmlAction,
		load(): OutputMethod,
		load(callback: (element: OutputMethod) => void): any
	}

	declare interface IFileDocumentExport {
		container: IExportXmlAction,
		load(): FileDocumentExport,
		load(callback: (element: FileDocumentExport) => void): any
	}

	declare interface IVariableExport {
		container: IExportXmlAction,
		load(): VariableExport,
		load(callback: (element: VariableExport) => void): any
	}

	declare interface IWebServiceOperationAdvancedParameterMapping {
		container: IAdvancedRequestHandling,
		load(): WebServiceOperationAdvancedParameterMapping,
		load(callback: (element: WebServiceOperationAdvancedParameterMapping) => void): any
	}

	declare interface IWebServiceOperationSimpleParameterMapping {
		container: ISimpleRequestHandling,
		load(): WebServiceOperationSimpleParameterMapping,
		load(callback: (element: WebServiceOperationSimpleParameterMapping) => void): any
	}

	declare interface ICloseFormAction {
		container: IActionActivity,
		load(): CloseFormAction,
		load(callback: (element: CloseFormAction) => void): any
	}

	declare interface IDownloadFileAction {
		container: IActionActivity,
		load(): DownloadFileAction,
		load(callback: (element: DownloadFileAction) => void): any
	}

	declare interface IDocumentTemplateParameterMapping {
		container: IGenerateDocumentAction,
		load(): DocumentTemplateParameterMapping,
		load(callback: (element: DocumentTemplateParameterMapping) => void): any
	}

	declare interface IGenerateDocumentAction {
		container: IActionActivity,
		load(): GenerateDocumentAction,
		load(callback: (element: GenerateDocumentAction) => void): any
	}

	declare interface IShowHomePageAction {
		container: IActionActivity,
		load(): ShowHomePageAction,
		load(callback: (element: ShowHomePageAction) => void): any
	}

	declare interface IShowMessageAction {
		container: IActionActivity,
		load(): ShowMessageAction,
		load(callback: (element: ShowMessageAction) => void): any
	}

	declare interface IShowPageAction {
		container: IActionActivity,
		load(): ShowPageAction,
		load(callback: (element: ShowPageAction) => void): any
	}

	declare interface IValidationFeedbackAction {
		container: IActionActivity,
		load(): ValidationFeedbackAction,
		load(callback: (element: ValidationFeedbackAction) => void): any
	}

	declare interface IMicroflowObject {
		container: IMicroflowObjectCollection,
		load(): MicroflowObject,
		load(callback: (element: MicroflowObject) => void): any
	}

	declare interface IActivity {
		container: IMicroflowObjectCollection,
		load(): Activity,
		load(callback: (element: Activity) => void): any
	}

	declare interface IActionActivity {
		container: IMicroflowObjectCollection,
		load(): ActionActivity,
		load(callback: (element: ActionActivity) => void): any
	}

	declare interface IAggregateListAction {
		container: IActionActivity,
		load(): AggregateListAction,
		load(callback: (element: AggregateListAction) => void): any
	}

	declare interface IAnnotation {
		container: IMicroflowObjectCollection,
		load(): Annotation,
		load(callback: (element: Annotation) => void): any
	}

	declare interface IFlow {
		container: IMicroflowBase,
		load(): Flow,
		load(callback: (element: Flow) => void): any
	}

	declare interface IAnnotationFlow {
		container: IMicroflowBase,
		load(): AnnotationFlow,
		load(callback: (element: AnnotationFlow) => void): any
	}

	declare interface IRetrieveSource {
		container: IRetrieveAction,
		load(): RetrieveSource,
		load(callback: (element: RetrieveSource) => void): any
	}

	declare interface IAssociationRetrieveSource {
		container: IRetrieveAction,
		load(): AssociationRetrieveSource,
		load(callback: (element: AssociationRetrieveSource) => void): any
	}

	declare interface IListOperation {
		container: IListOperationAction,
		load(): ListOperation,
		load(callback: (element: ListOperation) => void): any
	}

	declare interface IBinaryListOperation {
		container: IListOperationAction,
		load(): BinaryListOperation,
		load(callback: (element: BinaryListOperation) => void): any
	}

	declare interface IBreakEvent {
		container: IMicroflowObjectCollection,
		load(): BreakEvent,
		load(callback: (element: BreakEvent) => void): any
	}

	declare interface ICaseValue {
		container: ISequenceFlow,
		load(): CaseValue,
		load(callback: (element: CaseValue) => void): any
	}

	declare interface ICastAction {
		container: IActionActivity,
		load(): CastAction,
		load(callback: (element: CastAction) => void): any
	}

	declare interface IChangeMembersAction {
		container: IActionActivity,
		load(): ChangeMembersAction,
		load(callback: (element: ChangeMembersAction) => void): any
	}

	declare interface IChangeObjectAction {
		container: IActionActivity,
		load(): ChangeObjectAction,
		load(callback: (element: ChangeObjectAction) => void): any
	}

	declare interface IMemberChange {
		container: IChangeMembersAction,
		load(): MemberChange,
		load(callback: (element: MemberChange) => void): any
	}

	declare interface IChangeListAction {
		container: IActionActivity,
		load(): ChangeListAction,
		load(callback: (element: ChangeListAction) => void): any
	}

	declare interface IChangeVariableAction {
		container: IActionActivity,
		load(): ChangeVariableAction,
		load(callback: (element: ChangeVariableAction) => void): any
	}

	declare interface ICommitAction {
		container: IActionActivity,
		load(): CommitAction,
		load(callback: (element: CommitAction) => void): any
	}

	declare interface IRange {
		load(): Range,
		load(callback: (element: Range) => void): any
	}

	declare interface IConstantRange {
		load(): ConstantRange,
		load(callback: (element: ConstantRange) => void): any
	}

	declare interface IContains {
		container: IListOperationAction,
		load(): Contains,
		load(callback: (element: Contains) => void): any
	}

	declare interface IContinueEvent {
		container: IMicroflowObjectCollection,
		load(): ContinueEvent,
		load(callback: (element: ContinueEvent) => void): any
	}

	declare interface IDeprecatedCreateAction {
		container: IActionActivity,
		load(): DeprecatedCreateAction,
		load(callback: (element: DeprecatedCreateAction) => void): any
	}

	declare interface ICreateObjectAction {
		container: IActionActivity,
		load(): CreateObjectAction,
		load(callback: (element: CreateObjectAction) => void): any
	}

	declare interface ICreateListAction {
		container: IActionActivity,
		load(): CreateListAction,
		load(callback: (element: CreateListAction) => void): any
	}

	declare interface ICreateVariableAction {
		container: IActionActivity,
		load(): CreateVariableAction,
		load(callback: (element: CreateVariableAction) => void): any
	}

	declare interface ICustomRange {
		load(): CustomRange,
		load(callback: (element: CustomRange) => void): any
	}

	declare interface IDatabaseRetrieveSource {
		container: IRetrieveAction,
		load(): DatabaseRetrieveSource,
		load(callback: (element: DatabaseRetrieveSource) => void): any
	}

	declare interface IDeleteAction {
		container: IActionActivity,
		load(): DeleteAction,
		load(callback: (element: DeleteAction) => void): any
	}

	declare interface IEndEvent {
		container: IMicroflowObjectCollection,
		load(): EndEvent,
		load(callback: (element: EndEvent) => void): any
	}

	declare interface IEnumerationCase {
		container: ISequenceFlow,
		load(): EnumerationCase,
		load(callback: (element: EnumerationCase) => void): any
	}

	declare interface IListEquals {
		container: IListOperationAction,
		load(): ListEquals,
		load(callback: (element: ListEquals) => void): any
	}

	declare interface IErrorEvent {
		container: IMicroflowObjectCollection,
		load(): ErrorEvent,
		load(callback: (element: ErrorEvent) => void): any
	}

	declare interface IExclusiveMerge {
		container: IMicroflowObjectCollection,
		load(): ExclusiveMerge,
		load(callback: (element: ExclusiveMerge) => void): any
	}

	declare interface IExclusiveSplit {
		container: IMicroflowObjectCollection,
		load(): ExclusiveSplit,
		load(callback: (element: ExclusiveSplit) => void): any
	}

	declare interface ISplitCondition {
		container: IExclusiveSplit,
		load(): SplitCondition,
		load(callback: (element: SplitCondition) => void): any
	}

	declare interface IExpressionSplitCondition {
		container: IExclusiveSplit,
		load(): ExpressionSplitCondition,
		load(callback: (element: ExpressionSplitCondition) => void): any
	}

	declare interface IInspectAttribute {
		container: IListOperationAction,
		load(): InspectAttribute,
		load(callback: (element: InspectAttribute) => void): any
	}

	declare interface IFilter {
		container: IListOperationAction,
		load(): Filter,
		load(callback: (element: Filter) => void): any
	}

	declare interface IFind {
		container: IListOperationAction,
		load(): Find,
		load(callback: (element: Find) => void): any
	}

	declare interface IHead {
		container: IListOperationAction,
		load(): Head,
		load(callback: (element: Head) => void): any
	}

	declare interface IInheritanceCase {
		container: ISequenceFlow,
		load(): InheritanceCase,
		load(callback: (element: InheritanceCase) => void): any
	}

	declare interface IInheritanceSplit {
		container: IMicroflowObjectCollection,
		load(): InheritanceSplit,
		load(callback: (element: InheritanceSplit) => void): any
	}

	declare interface IIntersect {
		container: IListOperationAction,
		load(): Intersect,
		load(callback: (element: Intersect) => void): any
	}

	declare interface IJavaActionCallAction {
		container: IActionActivity,
		load(): JavaActionCallAction,
		load(callback: (element: JavaActionCallAction) => void): any
	}

	declare interface IJavaActionParameterMapping {
		container: IJavaActionCallAction,
		load(): JavaActionParameterMapping,
		load(callback: (element: JavaActionParameterMapping) => void): any
	}

	declare interface IListOperationAction {
		container: IActionActivity,
		load(): ListOperationAction,
		load(callback: (element: ListOperationAction) => void): any
	}

	declare interface ILogMessageAction {
		container: IActionActivity,
		load(): LogMessageAction,
		load(callback: (element: LogMessageAction) => void): any
	}

	declare interface ILoopedActivity {
		container: IMicroflowObjectCollection,
		load(): LoopedActivity,
		load(callback: (element: LoopedActivity) => void): any
	}

	declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IMicroflowBase {
		container: projects.IFolderBase,
		load(): MicroflowBase,
		load(callback: (element: MicroflowBase) => void): any,
		returnType: string
	}

	declare interface IMicroflow {
		container: projects.IFolderBase,
		load(): Microflow,
		load(callback: (element: Microflow) => void): any
	}

	declare interface IMicroflowCall {
		container: IMicroflowCallAction,
		load(): MicroflowCall,
		load(callback: (element: MicroflowCall) => void): any
	}

	declare interface IMicroflowCallAction {
		container: IActionActivity,
		load(): MicroflowCallAction,
		load(callback: (element: MicroflowCallAction) => void): any
	}

	declare interface IMicroflowCallParameterMapping {
		container: IMicroflowCall,
		load(): MicroflowCallParameterMapping,
		load(callback: (element: MicroflowCallParameterMapping) => void): any
	}

	declare interface IMicroflowObjectCollection {
		load(): MicroflowObjectCollection,
		load(callback: (element: MicroflowObjectCollection) => void): any
	}

	declare interface IMicroflowParameterBase {
		container: IMicroflowBase,
		load(): MicroflowParameterBase,
		load(callback: (element: MicroflowParameterBase) => void): any,
		name: string,
		type: string
	}

	declare interface IMicroflowParameter {
		container: IMicroflow,
		load(): MicroflowParameter,
		load(callback: (element: MicroflowParameter) => void): any
	}

	declare interface IRuleParameter {
		container: IRule,
		load(): RuleParameter,
		load(callback: (element: RuleParameter) => void): any
	}

	declare interface IMicroflowParameterObject {
		container: IMicroflowObjectCollection,
		load(): MicroflowParameterObject,
		load(callback: (element: MicroflowParameterObject) => void): any
	}

	declare interface INoCase {
		container: ISequenceFlow,
		load(): NoCase,
		load(callback: (element: NoCase) => void): any
	}

	declare interface IRetrieveAction {
		container: IActionActivity,
		load(): RetrieveAction,
		load(callback: (element: RetrieveAction) => void): any
	}

	declare interface IRollbackAction {
		container: IActionActivity,
		load(): RollbackAction,
		load(callback: (element: RollbackAction) => void): any
	}

	declare interface IRule {
		container: projects.IFolderBase,
		load(): Rule,
		load(callback: (element: Rule) => void): any
	}

	declare interface IRuleCall {
		container: IRuleSplitCondition,
		load(): RuleCall,
		load(callback: (element: RuleCall) => void): any
	}

	declare interface IRuleCallParameterMapping {
		container: IRuleCall,
		load(): RuleCallParameterMapping,
		load(callback: (element: RuleCallParameterMapping) => void): any
	}

	declare interface IRuleSplitCondition {
		container: IExclusiveSplit,
		load(): RuleSplitCondition,
		load(callback: (element: RuleSplitCondition) => void): any
	}

	declare interface ISequenceFlow {
		container: IMicroflowBase,
		load(): SequenceFlow,
		load(callback: (element: SequenceFlow) => void): any
	}

	declare interface ISort {
		container: IListOperationAction,
		load(): Sort,
		load(callback: (element: Sort) => void): any
	}

	declare interface ISortItem {
		container: ISortItemList,
		load(): SortItem,
		load(callback: (element: SortItem) => void): any
	}

	declare interface ISortItemList {
		load(): SortItemList,
		load(callback: (element: SortItemList) => void): any
	}

	declare interface IStartEvent {
		container: IMicroflowObjectCollection,
		load(): StartEvent,
		load(callback: (element: StartEvent) => void): any
	}

	declare interface ITemplate {
		load(): Template,
		load(callback: (element: Template) => void): any
	}

	declare interface IStringTemplate {
		load(): StringTemplate,
		load(callback: (element: StringTemplate) => void): any
	}

	declare interface ISubtract {
		container: IListOperationAction,
		load(): Subtract,
		load(callback: (element: Subtract) => void): any
	}

	declare interface ITail {
		container: IListOperationAction,
		load(): Tail,
		load(callback: (element: Tail) => void): any
	}

	declare interface ITemplateArgument {
		container: ITemplate,
		load(): TemplateArgument,
		load(callback: (element: TemplateArgument) => void): any
	}

	declare interface ITextTemplate {
		load(): TextTemplate,
		load(callback: (element: TextTemplate) => void): any
	}

	declare interface IUnion {
		container: IListOperationAction,
		load(): Union,
		load(callback: (element: Union) => void): any
	}

		declare class MicroflowAction extends elements$Element, IMicroflowAction {
		typeName: string;
		container: ActionActivity;
		errorHandlingType: ErrorHandlingType;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AppServiceCallAction extends MicroflowAction, IAppServiceCallAction {
		typeName: string;
		container: ActionActivity;
		appServiceAction: appservices.IAppServiceAction;
		appServiceActionQualifiedName: string;
		parameterMappings: instances.IList<AppServiceCallParameterMapping>;
		useVariable: boolean;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AppServiceCallParameterMapping extends elements$Element, IAppServiceCallParameterMapping {
		typeName: string;
		container: AppServiceCallAction;
		parameter: appservices.IAppServiceActionParameter;
		parameterQualifiedName: string;
		argument: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WebServiceCallAction extends MicroflowAction, IWebServiceCallAction {
		typeName: string;
		container: ActionActivity;
		importedWebService: webservices.IImportedWebService;
		importedWebServiceQualifiedName: string;
		serviceName: string;
		operationName: string;
		useRequestTimeOut: boolean;
		timeOut: number;
		sendNullValueChoice: NullValueOption;
		requestHeaderHandling: RequestHandling;
		requestBodyHandling: RequestHandling;
		resultHandling: ResultHandling;
		httpConfiguration: HttpConfiguration;
		isValidationRequired: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RequestHandling extends elements$Element, IRequestHandling {
		typeName: string;
		container: WebServiceCallAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class AdvancedRequestHandling extends RequestHandling, IAdvancedRequestHandling {
		typeName: string;
		container: WebServiceCallAction;
		parameterMappings: instances.IList<WebServiceOperationAdvancedParameterMapping>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class HttpConfiguration extends elements$Element, IHttpConfiguration {
		typeName: string;
		container: WebServiceCallAction;
		overrideLocation: boolean;
		customLocation: string;
		useAuthentication: boolean;
		httpAuthenticationUserName: string;
		authenticationPassword: string;
		headerEntries: instances.IList<HttpHeaderEntry>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class HttpHeaderEntry extends elements$Element, IHttpHeaderEntry {
		typeName: string;
		container: HttpConfiguration;
		key: string;
		value: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImportMappingCall extends elements$Element, IImportMappingCall {
		typeName: string;
		container: ResultHandling;
		mapping: importmappings.IImportMapping;
		mappingQualifiedName: string;
		mappingArgumentVariableName: string;
		range: Range;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImportXmlAction extends MicroflowAction, IImportXmlAction {
		typeName: string;
		container: ActionActivity;
		xmlDocumentVariableName: string;
		resultHandling: ResultHandling;
		isValidationRequired: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ResultHandling extends elements$Element, IResultHandling {
		typeName: string;
		importMappingCall: ImportMappingCall;
		storeInVariable: boolean;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CustomRequestHandling extends RequestHandling, ICustomRequestHandling {
		typeName: string;
		container: WebServiceCallAction;
		template: StringTemplate;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingRequestHandling extends RequestHandling, IMappingRequestHandling {
		typeName: string;
		container: WebServiceCallAction;
		mapping: exportmappings.IExportMapping;
		mappingQualifiedName: string;
		mappingArgumentVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SimpleRequestHandling extends RequestHandling, ISimpleRequestHandling {
		typeName: string;
		container: WebServiceCallAction;
		parameterMappings: instances.IList<WebServiceOperationSimpleParameterMapping>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ExportXmlAction extends MicroflowAction, IExportXmlAction {
		typeName: string;
		container: ActionActivity;
		mapping: exportmappings.IExportMapping;
		mappingQualifiedName: string;
		mappingArgumentVariableName: string;
		outputMethod: OutputMethod;
		isValidationRequired: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class OutputMethod extends elements$Element, IOutputMethod {
		typeName: string;
		container: ExportXmlAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class FileDocumentExport extends OutputMethod, IFileDocumentExport {
		typeName: string;
		container: ExportXmlAction;
		targetDocumentVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class VariableExport extends OutputMethod, IVariableExport {
		typeName: string;
		container: ExportXmlAction;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WebServiceOperationAdvancedParameterMapping extends elements$Element, IWebServiceOperationAdvancedParameterMapping {
		typeName: string;
		container: AdvancedRequestHandling;
		isChecked: boolean;
		parameterName: string;
		argument: string;
		mapping: exportmappings.IExportMapping;
		mappingQualifiedName: string;
		mappingArgumentVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WebServiceOperationSimpleParameterMapping extends elements$Element, IWebServiceOperationSimpleParameterMapping {
		typeName: string;
		container: SimpleRequestHandling;
		isChecked: boolean;
		parameterName: string;
		parameterPath: string;
		argument: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CloseFormAction extends MicroflowAction, ICloseFormAction {
		typeName: string;
		container: ActionActivity;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DownloadFileAction extends MicroflowAction, IDownloadFileAction {
		typeName: string;
		container: ActionActivity;
		fileDocumentVariableName: string;
		showFileInBrowser: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DocumentTemplateParameterMapping extends elements$Element, IDocumentTemplateParameterMapping {
		typeName: string;
		container: GenerateDocumentAction;
		widgetName: string;
		argument: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GenerateDocumentAction extends MicroflowAction, IGenerateDocumentAction {
		typeName: string;
		container: ActionActivity;
		parameterMappings: instances.IList<DocumentTemplateParameterMapping>;
		fileVariableName: string;
		languageVariableName: string;
		documentType: TargetDocumentType;
		languageSetting: LanguageSettingType;
		documentTemplate: documenttemplates.IDocumentTemplate;
		documentTemplateQualifiedName: string;
		overrideTopMargin: boolean;
		overrideBottomMargin: boolean;
		overrideLeftMargin: boolean;
		overrideRightMargin: boolean;
		marginLeftInInch: string;
		marginRightInInch: string;
		marginTopInInch: string;
		marginBottomInInch: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ShowHomePageAction extends MicroflowAction, IShowHomePageAction {
		typeName: string;
		container: ActionActivity;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ShowMessageAction extends MicroflowAction, IShowMessageAction {
		typeName: string;
		container: ActionActivity;
		template: TextTemplate;
		type: ShowMessageType;
		blocking: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ShowPageAction extends MicroflowAction, IShowPageAction {
		typeName: string;
		container: ActionActivity;
		pageSettings: pages.PageSettings;
		passedObjectVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ValidationFeedbackAction extends MicroflowAction, IValidationFeedbackAction {
		typeName: string;
		container: ActionActivity;
		feedbackTemplate: TextTemplate;
		objectVariableName: string;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		association: domainmodels.IAssociationBase;
		associationQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowObject extends elements$Element, IMicroflowObject {
		typeName: string;
		container: MicroflowObjectCollection;
		relativeMiddlePoint: common.IPoint;
		size: common.ISize;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Activity extends MicroflowObject, IActivity {
		typeName: string;
		container: MicroflowObjectCollection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ActionActivity extends Activity, IActionActivity {
		typeName: string;
		container: MicroflowObjectCollection;
		action: MicroflowAction;
		caption: string;
		autoGenerateCaption: boolean;
		backgroundColor: ActionActivityColor;
		documentation: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AggregateListAction extends MicroflowAction, IAggregateListAction {
		typeName: string;
		container: ActionActivity;
		inputListVariableName: string;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		aggregateFunction: AggregateFunctionEnum;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Annotation extends MicroflowObject, IAnnotation {
		typeName: string;
		container: MicroflowObjectCollection;
		caption: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Flow extends elements$Element, IFlow {
		typeName: string;
		container: MicroflowBase;
		origin: MicroflowObject;
		destination: MicroflowObject;
		originConnectionIndex: number;
		destinationConnectionIndex: number;
		originBezierVector: common.ISize;
		destinationBezierVector: common.ISize;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AnnotationFlow extends Flow, IAnnotationFlow {
		typeName: string;
		container: MicroflowBase;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RetrieveSource extends elements$Element, IRetrieveSource {
		typeName: string;
		container: RetrieveAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AssociationRetrieveSource extends RetrieveSource, IAssociationRetrieveSource {
		typeName: string;
		container: RetrieveAction;
		startVariableName: string;
		association: domainmodels.IAssociationBase;
		associationQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ListOperation extends elements$Element, IListOperation {
		typeName: string;
		container: ListOperationAction;
		listVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class BinaryListOperation extends ListOperation, IBinaryListOperation {
		typeName: string;
		container: ListOperationAction;
		secondListOrObjectName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class BreakEvent extends MicroflowObject, IBreakEvent {
		typeName: string;
		container: MicroflowObjectCollection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CaseValue extends elements$Element, ICaseValue {
		typeName: string;
		container: SequenceFlow;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CastAction extends MicroflowAction, ICastAction {
		typeName: string;
		container: ActionActivity;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ChangeMembersAction extends MicroflowAction, IChangeMembersAction {
		typeName: string;
		container: ActionActivity;
		items: instances.IList<MemberChange>;
		refreshInClient: boolean;
		commit: CommitEnum;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ChangeObjectAction extends ChangeMembersAction, IChangeObjectAction {
		typeName: string;
		container: ActionActivity;
		changeVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MemberChange extends elements$Element, IMemberChange {
		typeName: string;
		container: ChangeMembersAction;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		association: domainmodels.IAssociationBase;
		associationQualifiedName: string;
		type: ChangeActionItemType;
		value: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ChangeListAction extends MicroflowAction, IChangeListAction {
		typeName: string;
		container: ActionActivity;
		changeVariableName: string;
		value: string;
		type: ChangeListActionType;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ChangeVariableAction extends MicroflowAction, IChangeVariableAction {
		typeName: string;
		container: ActionActivity;
		changeVariableName: string;
		value: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CommitAction extends MicroflowAction, ICommitAction {
		typeName: string;
		container: ActionActivity;
		withEvents: boolean;
		commitVariableName: string;
		refreshInClient: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Range extends elements$Element, IRange {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class ConstantRange extends Range, IConstantRange {
		typeName: string;
		singleObject: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Contains extends BinaryListOperation, IContains {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ContinueEvent extends MicroflowObject, IContinueEvent {
		typeName: string;
		container: MicroflowObjectCollection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DeprecatedCreateAction extends MicroflowAction, IDeprecatedCreateAction {
		typeName: string;
		container: ActionActivity;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		refreshInClient: boolean;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CreateObjectAction extends ChangeMembersAction, ICreateObjectAction {
		typeName: string;
		container: ActionActivity;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CreateListAction extends MicroflowAction, ICreateListAction {
		typeName: string;
		container: ActionActivity;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CreateVariableAction extends MicroflowAction, ICreateVariableAction {
		typeName: string;
		container: ActionActivity;
		variableName: string;
		variableDataType: string;
		initialValue: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CustomRange extends Range, ICustomRange {
		typeName: string;
		limitExpression: string;
		offsetExpression: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DatabaseRetrieveSource extends RetrieveSource, IDatabaseRetrieveSource {
		typeName: string;
		container: RetrieveAction;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		range: Range;
		xPathConstraint: string;
		sortItemList: SortItemList;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DeleteAction extends MicroflowAction, IDeleteAction {
		typeName: string;
		container: ActionActivity;
		deleteVariableName: string;
		refreshInClient: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class EndEvent extends MicroflowObject, IEndEvent {
		typeName: string;
		container: MicroflowObjectCollection;
		returnValue: string;
		documentation: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class EnumerationCase extends CaseValue, IEnumerationCase {
		typeName: string;
		container: SequenceFlow;
		value: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ListEquals extends BinaryListOperation, IListEquals {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ErrorEvent extends MicroflowObject, IErrorEvent {
		typeName: string;
		container: MicroflowObjectCollection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ExclusiveMerge extends MicroflowObject, IExclusiveMerge {
		typeName: string;
		container: MicroflowObjectCollection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ExclusiveSplit extends MicroflowObject, IExclusiveSplit {
		typeName: string;
		container: MicroflowObjectCollection;
		splitCondition: SplitCondition;
		caption: string;
		errorHandlingType: ErrorHandlingType;
		documentation: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SplitCondition extends elements$Element, ISplitCondition {
		typeName: string;
		container: ExclusiveSplit;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class ExpressionSplitCondition extends SplitCondition, IExpressionSplitCondition {
		typeName: string;
		container: ExclusiveSplit;
		expression: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class InspectAttribute extends ListOperation, IInspectAttribute {
		typeName: string;
		container: ListOperationAction;
		expression: string;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Filter extends InspectAttribute, IFilter {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Find extends InspectAttribute, IFind {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Head extends ListOperation, IHead {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class InheritanceCase extends CaseValue, IInheritanceCase {
		typeName: string;
		container: SequenceFlow;
		value: domainmodels.IEntity;
		valueQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class InheritanceSplit extends MicroflowObject, IInheritanceSplit {
		typeName: string;
		container: MicroflowObjectCollection;
		splitVariableName: string;
		caption: string;
		documentation: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Intersect extends BinaryListOperation, IIntersect {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class JavaActionCallAction extends MicroflowAction, IJavaActionCallAction {
		typeName: string;
		container: ActionActivity;
		javaAction: javaactions.IJavaAction;
		javaActionQualifiedName: string;
		parameterMappings: instances.IList<JavaActionParameterMapping>;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class JavaActionParameterMapping extends elements$Element, IJavaActionParameterMapping {
		typeName: string;
		container: JavaActionCallAction;
		parameter: javaactions.IJavaActionParameter;
		parameterQualifiedName: string;
		argument: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ListOperationAction extends MicroflowAction, IListOperationAction {
		typeName: string;
		container: ActionActivity;
		operation: ListOperation;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LogMessageAction extends MicroflowAction, ILogMessageAction {
		typeName: string;
		container: ActionActivity;
		level: LogLevel;
		node: string;
		messageTemplate: StringTemplate;
		includeLatestStackTrace: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LoopedActivity extends Activity, ILoopedActivity {
		typeName: string;
		container: MicroflowObjectCollection;
		objectCollection: MicroflowObjectCollection;
		iteratedListVariableName: string;
		loopVariableName: string;
		errorHandlingType: ErrorHandlingType;
		documentation: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowBase extends projects$Document, IMicroflowBase {
		typeName: string;
		container: projects.FolderBase;
		objectCollection: MicroflowObjectCollection;
		flows: instances.IList<Flow>;
		returnType: string;
		applyEntityAccess: boolean;
		markAsUsed: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Microflow extends MicroflowBase, IMicroflow {
		typeName: string;
		container: projects.FolderBase;
		allowedModuleRoles: instances.IList<security.IModuleRole>;
		allowedModuleRolesQualifiedNames: string[];
		allowConcurrentExecution: boolean;
		concurrenyErrorMessage: texts.Text;
		concurrencyErrorMicroflow: IMicroflow;
		concurrencyErrorMicroflowQualifiedName: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowCall extends elements$Element, IMicroflowCall {
		typeName: string;
		container: MicroflowCallAction;
		microflow: IMicroflow;
		microflowQualifiedName: string;
		parameterMappings: instances.IList<MicroflowCallParameterMapping>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowCallAction extends MicroflowAction, IMicroflowCallAction {
		typeName: string;
		container: ActionActivity;
		microflowCall: MicroflowCall;
		useReturnVariable: boolean;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowCallParameterMapping extends elements$Element, IMicroflowCallParameterMapping {
		typeName: string;
		container: MicroflowCall;
		parameter: IMicroflowParameter;
		parameterQualifiedName: string;
		argument: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowObjectCollection extends elements$Element, IMicroflowObjectCollection {
		typeName: string;
		objects: instances.IList<MicroflowObject>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowParameterBase extends elements$Element, IMicroflowParameterBase {
		typeName: string;
		container: MicroflowBase;
		name: string;
		type: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowParameter extends MicroflowParameterBase, IMicroflowParameter {
		typeName: string;
		container: Microflow;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RuleParameter extends MicroflowParameterBase, IRuleParameter {
		typeName: string;
		container: Rule;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowParameterObject extends MicroflowObject, IMicroflowParameterObject {
		typeName: string;
		container: MicroflowObjectCollection;
		name: string;
		type: string;
		documentation: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NoCase extends CaseValue, INoCase {
		typeName: string;
		container: SequenceFlow;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RetrieveAction extends MicroflowAction, IRetrieveAction {
		typeName: string;
		container: ActionActivity;
		retrieveSource: RetrieveSource;
		outputVariableName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RollbackAction extends MicroflowAction, IRollbackAction {
		typeName: string;
		container: ActionActivity;
		rollbackVariableName: string;
		refreshInClient: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Rule extends MicroflowBase, IRule {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RuleCall extends elements$Element, IRuleCall {
		typeName: string;
		container: RuleSplitCondition;
		rule: IRule;
		ruleQualifiedName: string;
		parameterMappings: instances.IList<RuleCallParameterMapping>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RuleCallParameterMapping extends elements$Element, IRuleCallParameterMapping {
		typeName: string;
		container: RuleCall;
		parameter: IRuleParameter;
		parameterQualifiedName: string;
		argument: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RuleSplitCondition extends SplitCondition, IRuleSplitCondition {
		typeName: string;
		container: ExclusiveSplit;
		ruleCall: RuleCall;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SequenceFlow extends Flow, ISequenceFlow {
		typeName: string;
		container: MicroflowBase;
		caseValue: CaseValue;
		isErrorHandler: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Sort extends ListOperation, ISort {
		typeName: string;
		container: ListOperationAction;
		sortItemList: SortItemList;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SortItem extends elements$Element, ISortItem {
		typeName: string;
		container: SortItemList;
		attributePath: string;
		sortOrder: SortOrderEnum;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SortItemList extends elements$Element, ISortItemList {
		typeName: string;
		items: instances.IList<SortItem>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class StartEvent extends MicroflowObject, IStartEvent {
		typeName: string;
		container: MicroflowObjectCollection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Template extends elements$Element, ITemplate {
		typeName: string;
		arguments: instances.IList<TemplateArgument>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class StringTemplate extends Template, IStringTemplate {
		typeName: string;
		text: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Subtract extends BinaryListOperation, ISubtract {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Tail extends ListOperation, ITail {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TemplateArgument extends elements$Element, ITemplateArgument {
		typeName: string;
		container: Template;
		expression: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TextTemplate extends Template, ITextTemplate {
		typeName: string;
		text: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Union extends BinaryListOperation, IUnion {
		typeName: string;
		container: ListOperationAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NullValueOption extends instances$IEnum {
		qualifiedTsTypeName: string;
		SendAsNil: NullValueOption;
		LeaveOutElement: NullValueOption
	}

	declare class LanguageSettingType extends instances$IEnum {
		qualifiedTsTypeName: string;
		CurrentUser: LanguageSettingType;
		ProjectDefault: LanguageSettingType;
		Variable: LanguageSettingType
	}

	declare class TargetDocumentType extends instances$IEnum {
		qualifiedTsTypeName: string;
		HTML: TargetDocumentType;
		PDF: TargetDocumentType;
		DOCX: TargetDocumentType;
		DOC: TargetDocumentType;
		RTF: TargetDocumentType;
		ODT: TargetDocumentType
	}

	declare class ShowMessageType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Information: ShowMessageType;
		Warning: ShowMessageType;
		Error: ShowMessageType
	}

	declare class ActionActivityColor extends instances$IEnum {
		qualifiedTsTypeName: string;
		Default: ActionActivityColor;
		Red: ActionActivityColor;
		Orange: ActionActivityColor;
		Yellow: ActionActivityColor;
		Green: ActionActivityColor;
		Blue: ActionActivityColor;
		Purple: ActionActivityColor;
		Gray: ActionActivityColor
	}

	declare class AggregateFunctionEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Sum: AggregateFunctionEnum;
		Average: AggregateFunctionEnum;
		Count: AggregateFunctionEnum;
		Minimum: AggregateFunctionEnum;
		Maximum: AggregateFunctionEnum
	}

	declare class ChangeActionItemType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Set: ChangeActionItemType;
		Add: ChangeActionItemType;
		Remove: ChangeActionItemType
	}

	declare class ChangeListActionType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Set: ChangeListActionType;
		Add: ChangeListActionType;
		Remove: ChangeListActionType;
		Clear: ChangeListActionType
	}

	declare class CommitEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Yes: CommitEnum;
		YesWithoutEvents: CommitEnum;
		No: CommitEnum
	}

	declare class ErrorHandlingType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Rollback: ErrorHandlingType;
		Custom: ErrorHandlingType;
		CustomWithoutRollBack: ErrorHandlingType;
		Continue: ErrorHandlingType
	}

	declare class LogLevel extends instances$IEnum {
		qualifiedTsTypeName: string;
		Trace: LogLevel;
		Debug: LogLevel;
		Info: LogLevel;
		Warning: LogLevel;
		Error: LogLevel;
		Critical: LogLevel
	}

	declare class SortOrderEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Ascending: SortOrderEnum;
		Descending: SortOrderEnum
	}

	
}

declare module 'webservices' {
		declare interface IDataMember {
		load(): DataMember,
		load(callback: (element: DataMember) => void): any
	}

	declare interface IDataEntityBase {
		load(): DataEntityBase,
		load(callback: (element: DataEntityBase) => void): any
	}

	declare interface IDataAssociation {
		container: IDataEntityBase,
		load(): DataAssociation,
		load(callback: (element: DataAssociation) => void): any
	}

	declare interface IDataAttribute {
		container: IDataEntityBase,
		load(): DataAttribute,
		load(callback: (element: DataAttribute) => void): any
	}

	declare interface IDataEntity {
		load(): DataEntity,
		load(callback: (element: DataEntity) => void): any
	}

	declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IImportedWebService {
		container: projects.IFolderBase,
		load(): ImportedWebService,
		load(callback: (element: ImportedWebService) => void): any
	}

	declare interface IOperationInfo {
		container: IServiceInfo,
		load(): OperationInfo,
		load(callback: (element: OperationInfo) => void): any
	}

	declare interface IPartEncoding {
		container: IOperationInfo,
		load(): PartEncoding,
		load(callback: (element: PartEncoding) => void): any
	}

	declare interface IPublishedServiceBase {
		container: projects.IFolderBase,
		load(): PublishedServiceBase,
		load(callback: (element: PublishedServiceBase) => void): any
	}

	declare interface IPublishedAppService {
		container: projects.IFolderBase,
		load(): PublishedAppService,
		load(callback: (element: PublishedAppService) => void): any
	}

	declare interface IPublishedOperation {
		container: IVersionedService,
		load(): PublishedOperation,
		load(callback: (element: PublishedOperation) => void): any
	}

	declare interface IPublishedParameter {
		container: IPublishedOperation,
		load(): PublishedParameter,
		load(callback: (element: PublishedParameter) => void): any
	}

	declare interface IPublishedWebService {
		container: projects.IFolderBase,
		load(): PublishedWebService,
		load(callback: (element: PublishedWebService) => void): any
	}

	declare interface IRpcMessagePartElement {
		container: IRpcOperationElement,
		load(): RpcMessagePartElement,
		load(callback: (element: RpcMessagePartElement) => void): any
	}

	declare interface IRpcOperationElement {
		container: IOperationInfo,
		load(): RpcOperationElement,
		load(callback: (element: RpcOperationElement) => void): any
	}

	declare interface IServiceInfo {
		container: IWsdlDescription,
		load(): ServiceInfo,
		load(callback: (element: ServiceInfo) => void): any
	}

	declare interface IVersionedService {
		container: IPublishedServiceBase,
		load(): VersionedService,
		load(callback: (element: VersionedService) => void): any
	}

	declare interface IWsdlDescription {
		load(): WsdlDescription,
		load(callback: (element: WsdlDescription) => void): any
	}

	declare interface IWsdlEntry {
		container: IWsdlDescription,
		load(): WsdlEntry,
		load(callback: (element: WsdlEntry) => void): any
	}

		declare class DataMember extends elements$Element, IDataMember {
		typeName: string;
		isLockedByContract: boolean;
		exposedName: string;
		isOptionalByContract: boolean;
		isOptional: boolean;
		isNillableByContract: boolean;
		isNillable: boolean;
		isKey: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataEntityBase extends DataMember, IDataEntityBase {
		typeName: string;
		childMembers: instances.IList<DataMember>;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		exposedItemName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataAssociation extends DataEntityBase, IDataAssociation {
		typeName: string;
		container: DataEntityBase;
		associationByContract: appservices.MsdAssociation;
		association: domainmodels.IAssociationBase;
		associationQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataAttribute extends DataMember, IDataAttribute {
		typeName: string;
		container: DataEntityBase;
		attributeByContract: appservices.MsdAttribute;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataEntity extends DataEntityBase, IDataEntity {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImportedWebService extends projects$Document, IImportedWebService {
		typeName: string;
		container: projects.FolderBase;
		wsdlDescription: WsdlDescription;
		wsdlUrl: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class OperationInfo extends elements$Element, IOperationInfo {
		typeName: string;
		container: ServiceInfo;
		requestHeaderRpcElement: RpcOperationElement;
		requestBodyRpcElement: RpcOperationElement;
		responseBodyRpcElement: RpcOperationElement;
		requestHeaderPartEncoding: PartEncoding;
		requestBodyPartEncodings: instances.IList<PartEncoding>;
		name: string;
		documentation: string;
		soapAction: string;
		requestHeaderElementName: string;
		requestHeaderEncoded: boolean;
		requestBodyEncoded: boolean;
		requestBodyElementName: string;
		responseBodyElementName: string;
		allowSimpleMappingInheritance: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PartEncoding extends elements$Element, IPartEncoding {
		typeName: string;
		container: OperationInfo;
		partName: string;
		partXsdType: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedServiceBase extends projects$Document, IPublishedServiceBase {
		typeName: string;
		container: projects.FolderBase;
		versionedServices: instances.IList<VersionedService>;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedAppService extends PublishedServiceBase, IPublishedAppService {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedOperation extends elements$Element, IPublishedOperation {
		typeName: string;
		container: VersionedService;
		parameters: instances.IList<PublishedParameter>;
		dataEntity: DataEntity;
		isLockedByContract: boolean;
		name: string;
		image: images.IImage;
		imageQualifiedName: string;
		description: string;
		documentation: string;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		returnTypeNameByContract: string;
		returnTypeSpecificationByContract: string;
		entityExposedNameByContract: string;
		entityExposedName: string;
		returnTypeIsOptional: boolean;
		returnTypeIsNillable: boolean;
		returnType: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedParameter extends elements$Element, IPublishedParameter {
		typeName: string;
		container: PublishedOperation;
		parameterByContract: appservices.MsdMicroflowParameter;
		dataEntity: DataEntity;
		isLockedByContract: boolean;
		parameter: microflows.IMicroflowParameter;
		parameterQualifiedName: string;
		entityExposedName: string;
		isOptionalByContract: boolean;
		isOptional: boolean;
		isNillable: boolean;
		entityExposedItemNameByContract: string;
		entityExposedItemName: string;
		type: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedWebService extends PublishedServiceBase, IPublishedWebService {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RpcMessagePartElement extends elements$Element, IRpcMessagePartElement {
		typeName: string;
		container: RpcOperationElement;
		partName: string;
		typeName: string;
		elementName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RpcOperationElement extends elements$Element, IRpcOperationElement {
		typeName: string;
		container: OperationInfo;
		messagePartElements: instances.IList<RpcMessagePartElement>;
		name: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ServiceInfo extends elements$Element, IServiceInfo {
		typeName: string;
		container: WsdlDescription;
		operations: instances.IList<OperationInfo>;
		name: string;
		documentation: string;
		portName: string;
		location: string;
		soapVersion: SoapVersion;
		locationConstant: constants.IConstant;
		locationConstantQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class VersionedService extends elements$Element, IVersionedService {
		typeName: string;
		container: PublishedServiceBase;
		operations: instances.IList<PublishedOperation>;
		enumerationsByContract: appservices.MsdEnumerationContainer;
		documentation: string;
		targetNamespace: string;
		headerAuthentication: integration.HeaderAuthentication;
		isLockedByContract: boolean;
		headerImportMapping: importmappings.IImportMapping;
		headerImportMappingQualifiedName: string;
		headerMicroflow: microflows.IMicroflow;
		headerMicroflowQualifiedName: string;
		versionNumber: number;
		caption: string;
		description: string;
		appServiceState: AppServiceState;
		image: images.IImage;
		imageQualifiedName: string;
		validate: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WsdlDescription extends elements$Element, IWsdlDescription {
		typeName: string;
		wsdlEntries: instances.IList<WsdlEntry>;
		schemaEntries: instances.IList<xmlschemas.MxXmlSchemaEntry>;
		services: instances.IList<ServiceInfo>;
		targetNamespace: string;
		importsHaveLocations: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WsdlEntry extends elements$Element, IWsdlEntry {
		typeName: string;
		container: WsdlDescription;
		location: string;
		contents: string;
		localizedLocationFormat: string;
		localizedContentsFormat: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AppServiceState extends instances$IEnum {
		qualifiedTsTypeName: string;
		Draft: AppServiceState;
		Consumable: AppServiceState;
		Deprecated: AppServiceState
	}

	declare class SoapVersion extends instances$IEnum {
		qualifiedTsTypeName: string;
		Soap11: SoapVersion;
		Soap12: SoapVersion
	}

	
}

declare module 'integration' {
				declare class AppServiceLocationEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Default: AppServiceLocationEnum;
		Constant: AppServiceLocationEnum;
		Parameter: AppServiceLocationEnum
	}

	declare class ElementType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Undefined: ElementType;
		Inheritance: ElementType;
		Choice: ElementType;
		Object: ElementType;
		Value: ElementType;
		Sequence: ElementType;
		All: ElementType
	}

	declare class HeaderAuthentication extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: HeaderAuthentication;
		UsernamePassword: HeaderAuthentication;
		Custom: HeaderAuthentication
	}

	
}

declare module 'xmlschemas' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IMxXmlSchema {
		container: projects.IFolderBase,
		load(): MxXmlSchema,
		load(callback: (element: MxXmlSchema) => void): any
	}

	declare interface IMxXmlSchemaEntry {
		load(): MxXmlSchemaEntry,
		load(callback: (element: MxXmlSchemaEntry) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxXmlSchema extends projects$Document, IMxXmlSchema {
		typeName: string;
		container: projects.FolderBase;
		schemaEntries: instances.IList<MxXmlSchemaEntry>;
		filePath: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxXmlSchemaEntry extends elements$Element, IMxXmlSchemaEntry {
		typeName: string;
		targetNamespace: string;
		location: string;
		contents: string;
		localizedLocationFormat: string;
		localizedContentsFormat: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class XmlPrimitiveType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Unknown: XmlPrimitiveType;
		Boolean: XmlPrimitiveType;
		Date: XmlPrimitiveType;
		Time: XmlPrimitiveType;
		DateTime: XmlPrimitiveType;
		Decimal: XmlPrimitiveType;
		Float: XmlPrimitiveType;
		Integer: XmlPrimitiveType;
		Binary: XmlPrimitiveType;
		String: XmlPrimitiveType;
		AnyType: XmlPrimitiveType
	}

	
}

declare module 'appservices' {
		declare interface IAppServiceAction {
		container: IConsumedAppService,
		load(): AppServiceAction,
		load(callback: (element: AppServiceAction) => void): any,
		parameters: instances.IList<IAppServiceActionParameter>,
		name: string
	}

	declare interface IAppServiceActionParameter {
		container: IAppServiceAction,
		load(): AppServiceActionParameter,
		load(callback: (element: AppServiceActionParameter) => void): any,
		name: string
	}

	declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IConsumedAppService {
		container: projects.IFolderBase,
		load(): ConsumedAppService,
		load(callback: (element: ConsumedAppService) => void): any,
		actions: instances.IList<IAppServiceAction>
	}

	declare interface IMsd {
		container: IConsumedAppService,
		load(): Msd,
		load(callback: (element: Msd) => void): any
	}

	declare interface IMsdAssociation {
		load(): MsdAssociation,
		load(callback: (element: MsdAssociation) => void): any
	}

	declare interface IMsdAttribute {
		load(): MsdAttribute,
		load(callback: (element: MsdAttribute) => void): any
	}

	declare interface IMsdDomainModel {
		container: IMsd,
		load(): MsdDomainModel,
		load(callback: (element: MsdDomainModel) => void): any
	}

	declare interface IMsdEntity {
		container: IMsdDomainModel,
		load(): MsdEntity,
		load(callback: (element: MsdEntity) => void): any
	}

	declare interface IMsdEnumeration {
		container: IMsdEnumerationContainer,
		load(): MsdEnumeration,
		load(callback: (element: MsdEnumeration) => void): any
	}

	declare interface IMsdEnumerationContainer {
		load(): MsdEnumerationContainer,
		load(callback: (element: MsdEnumerationContainer) => void): any
	}

	declare interface IMsdEnumerationValue {
		container: IMsdEnumeration,
		load(): MsdEnumerationValue,
		load(callback: (element: MsdEnumerationValue) => void): any
	}

	declare interface IMsdMetadata {
		container: IMsd,
		load(): MsdMetadata,
		load(callback: (element: MsdMetadata) => void): any
	}

	declare interface IMsdMicroflow {
		container: IMsdMetadata,
		load(): MsdMicroflow,
		load(callback: (element: MsdMicroflow) => void): any
	}

	declare interface IMsdMicroflowParameter {
		load(): MsdMicroflowParameter,
		load(callback: (element: MsdMicroflowParameter) => void): any
	}

	declare interface IMsdText {
		container: IMsdEnumerationValue,
		load(): MsdText,
		load(callback: (element: MsdText) => void): any
	}

	declare interface IMsdVersion {
		container: IMsd,
		load(): MsdVersion,
		load(callback: (element: MsdVersion) => void): any
	}

		declare class AppServiceAction extends elements$Element, IAppServiceAction {
		typeName: string;
		container: ConsumedAppService;
		parameters: instances.IList<AppServiceActionParameter>;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		returnType: string;
		returnTypeCanBeEmpty: boolean;
		name: string;
		imageString: string;
		caption: string;
		description: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AppServiceActionParameter extends elements$Element, IAppServiceActionParameter {
		typeName: string;
		container: AppServiceAction;
		name: string;
		type: string;
		canBeEmpty: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConsumedAppService extends projects$Document, IConsumedAppService {
		typeName: string;
		container: projects.FolderBase;
		actions: instances.IList<AppServiceAction>;
		msd: Msd;
		fromAppStore: boolean;
		appStoreGuid: string;
		appStoreVersionGuid: string;
		appStoreVersion: string;
		appServiceLocation: integration.AppServiceLocationEnum;
		locationConstant: constants.IConstant;
		locationConstantQualifiedName: string;
		useTimeOut: boolean;
		timeOut: number;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Msd extends elements$Element, IMsd {
		typeName: string;
		container: ConsumedAppService;
		version: MsdVersion;
		metadata: MsdMetadata;
		domainModel: MsdDomainModel;
		enumerations: MsdEnumerationContainer;
		wsdlDescription: webservices.WsdlDescription;
		wsdlString: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdAssociation extends elements$Element, IMsdAssociation {
		typeName: string;
		name: string;
		guid: string;
		parentEntityName: string;
		childEntityName: string;
		associationType: string;
		associationOwner: string;
		parentDeleteBehavior: string;
		childDeleteBehavior: string;
		associationKind: string;
		parentX: number;
		parentY: number;
		childX: number;
		childY: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdAttribute extends elements$Element, IMsdAttribute {
		typeName: string;
		name: string;
		guid: string;
		attributeType: string;
		enumerationName: string;
		defaultValue: string;
		length: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdDomainModel extends elements$Element, IMsdDomainModel {
		typeName: string;
		container: Msd;
		entities: instances.IList<MsdEntity>;
		associations: instances.IList<MsdAssociation>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdEntity extends elements$Element, IMsdEntity {
		typeName: string;
		container: MsdDomainModel;
		attributes: instances.IList<MsdAttribute>;
		name: string;
		guid: string;
		generalizationName: string;
		persistable: boolean;
		locationX: number;
		locationY: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdEnumeration extends elements$Element, IMsdEnumeration {
		typeName: string;
		container: MsdEnumerationContainer;
		values: instances.IList<MsdEnumerationValue>;
		name: string;
		guid: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdEnumerationContainer extends elements$Element, IMsdEnumerationContainer {
		typeName: string;
		msdEnumerations: instances.IList<MsdEnumeration>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdEnumerationValue extends elements$Element, IMsdEnumerationValue {
		typeName: string;
		container: MsdEnumeration;
		translations: instances.IList<MsdText>;
		name: string;
		guid: string;
		base64image: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdMetadata extends elements$Element, IMsdMetadata {
		typeName: string;
		container: Msd;
		microflows: instances.IList<MsdMicroflow>;
		name: string;
		documentation: string;
		version: number;
		publishDateTime: string;
		serviceGuid: string;
		versionGuid: string;
		instanceGuid: string;
		supportedProtocols: instances.IList<string>;
		headerAuthentication: string;
		caption: string;
		imageBase64: string;
		description: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdMicroflow extends elements$Element, IMsdMicroflow {
		typeName: string;
		container: MsdMetadata;
		parameters: instances.IList<MsdMicroflowParameter>;
		name: string;
		documentation: string;
		imageBase64: string;
		description: string;
		returnType: string;
		systemEntityType: string;
		returnTypeSpecification: string;
		returnTypeCanBeEmpty: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdMicroflowParameter extends elements$Element, IMsdMicroflowParameter {
		typeName: string;
		name: string;
		type: string;
		typeSpecification: string;
		systemEntityType: string;
		canBeEmpty: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdText extends elements$Element, IMsdText {
		typeName: string;
		container: MsdEnumerationValue;
		languageCode: string;
		caption: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MsdVersion extends elements$Element, IMsdVersion {
		typeName: string;
		container: Msd;
		version: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'mappings' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IMappingDocument {
		container: projects.IFolderBase,
		load(): MappingDocument,
		load(callback: (element: MappingDocument) => void): any
	}

	declare interface IMappingElement {
		load(): MappingElement,
		load(callback: (element: MappingElement) => void): any
	}

	declare interface IMappingMicroflowCall {
		container: IObjectMappingElement,
		load(): MappingMicroflowCall,
		load(callback: (element: MappingMicroflowCall) => void): any
	}

	declare interface IMappingMicroflowParameter {
		container: IMappingMicroflowCall,
		load(): MappingMicroflowParameter,
		load(callback: (element: MappingMicroflowParameter) => void): any
	}

	declare interface IObjectMappingElement {
		load(): ObjectMappingElement,
		load(callback: (element: ObjectMappingElement) => void): any
	}

	declare interface IValueMappingElement {
		container: IObjectMappingElement,
		load(): ValueMappingElement,
		load(callback: (element: ValueMappingElement) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingDocument extends projects$Document, IMappingDocument {
		typeName: string;
		container: projects.FolderBase;
		rootMappingelements: instances.IList<ObjectMappingElement>;
		mxXmlSchema: xmlschemas.IMxXmlSchema;
		mxXmlSchemaQualifiedName: string;
		rootElementName: string;
		importedWebService: webservices.IImportedWebService;
		importedWebServiceQualifiedName: string;
		serviceName: string;
		operationName: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingElement extends elements$Element, IMappingElement {
		typeName: string;
		documentation: string;
		elementType: integration.ElementType;
		path: string;
		minOccurs: number;
		maxOccurs: number;
		nillable: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingMicroflowCall extends elements$Element, IMappingMicroflowCall {
		typeName: string;
		container: ObjectMappingElement;
		parameterMappings: instances.IList<MappingMicroflowParameter>;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingMicroflowParameter extends elements$Element, IMappingMicroflowParameter {
		typeName: string;
		container: MappingMicroflowCall;
		parameter: microflows.IMicroflowParameter;
		parameterQualifiedName: string;
		levelOfParent: number;
		valueElementPath: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ObjectMappingElement extends MappingElement, IObjectMappingElement {
		typeName: string;
		mappingMicroflowCall: MappingMicroflowCall;
		children: instances.IList<MappingElement>;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		association: domainmodels.IAssociationBase;
		associationQualifiedName: string;
		objectHandling: importmappings.ObjectHandlingEnum;
		objectHandlingBackup: importmappings.ObjectHandlingBackupEnum;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ValueMappingElement extends MappingElement, IValueMappingElement {
		typeName: string;
		container: ObjectMappingElement;
		xmlDataType: string;
		isKey: boolean;
		isXmlAttribute: boolean;
		isContent: boolean;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		converter: microflows.IMicroflow;
		converterQualifiedName: string;
		expectedContentTypes: string;
		maxLength: number;
		fractionDigits: number;
		totalDigits: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'exportmappings' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IMappingDocument {
		container: projects.IFolderBase,
		load(): MappingDocument,
		load(callback: (element: MappingDocument) => void): any
	}

	declare interface IExportMapping {
		container: projects.IFolderBase,
		load(): ExportMapping,
		load(callback: (element: ExportMapping) => void): any
	}

	declare interface IMappingElement {
		load(): MappingElement,
		load(callback: (element: MappingElement) => void): any
	}

	declare interface IObjectMappingElement {
		load(): ObjectMappingElement,
		load(callback: (element: ObjectMappingElement) => void): any
	}

	declare interface IExportObjectMappingElement {
		load(): ExportObjectMappingElement,
		load(callback: (element: ExportObjectMappingElement) => void): any
	}

	declare interface IValueMappingElement {
		container: mappings.IObjectMappingElement,
		load(): ValueMappingElement,
		load(callback: (element: ValueMappingElement) => void): any
	}

	declare interface IExportValueMappingElement {
		container: mappings.IObjectMappingElement,
		load(): ExportValueMappingElement,
		load(callback: (element: ExportValueMappingElement) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingDocument extends projects$Document, IMappingDocument {
		typeName: string;
		container: projects.FolderBase;
		rootMappingelements: instances.IList<mappings.ObjectMappingElement>;
		mxXmlSchema: xmlschemas.IMxXmlSchema;
		mxXmlSchemaQualifiedName: string;
		rootElementName: string;
		importedWebService: webservices.IImportedWebService;
		importedWebServiceQualifiedName: string;
		serviceName: string;
		operationName: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ExportMapping extends mappings$MappingDocument, IExportMapping {
		typeName: string;
		container: projects.FolderBase;
		parameterName: string;
		parameterTypeName: string;
		isHeader: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingElement extends elements$Element, IMappingElement {
		typeName: string;
		documentation: string;
		elementType: integration.ElementType;
		path: string;
		minOccurs: number;
		maxOccurs: number;
		nillable: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ObjectMappingElement extends mappings$MappingElement, IObjectMappingElement {
		typeName: string;
		mappingMicroflowCall: mappings.MappingMicroflowCall;
		children: instances.IList<mappings.MappingElement>;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		association: domainmodels.IAssociationBase;
		associationQualifiedName: string;
		objectHandling: importmappings.ObjectHandlingEnum;
		objectHandlingBackup: importmappings.ObjectHandlingBackupEnum;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ExportObjectMappingElement extends mappings$ObjectMappingElement, IExportObjectMappingElement {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ValueMappingElement extends mappings$MappingElement, IValueMappingElement {
		typeName: string;
		container: mappings.ObjectMappingElement;
		xmlDataType: string;
		isKey: boolean;
		isXmlAttribute: boolean;
		isContent: boolean;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		converter: microflows.IMicroflow;
		converterQualifiedName: string;
		expectedContentTypes: string;
		maxLength: number;
		fractionDigits: number;
		totalDigits: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ExportValueMappingElement extends mappings$ValueMappingElement, IExportValueMappingElement {
		typeName: string;
		container: mappings.ObjectMappingElement;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'importmappings' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IMappingDocument {
		container: projects.IFolderBase,
		load(): MappingDocument,
		load(callback: (element: MappingDocument) => void): any
	}

	declare interface IImportMapping {
		container: projects.IFolderBase,
		load(): ImportMapping,
		load(callback: (element: ImportMapping) => void): any
	}

	declare interface IMappingElement {
		load(): MappingElement,
		load(callback: (element: MappingElement) => void): any
	}

	declare interface IObjectMappingElement {
		load(): ObjectMappingElement,
		load(callback: (element: ObjectMappingElement) => void): any
	}

	declare interface IImportObjectMappingElement {
		load(): ImportObjectMappingElement,
		load(callback: (element: ImportObjectMappingElement) => void): any
	}

	declare interface IValueMappingElement {
		container: mappings.IObjectMappingElement,
		load(): ValueMappingElement,
		load(callback: (element: ValueMappingElement) => void): any
	}

	declare interface IImportValueMappingElement {
		container: mappings.IObjectMappingElement,
		load(): ImportValueMappingElement,
		load(callback: (element: ImportValueMappingElement) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingDocument extends projects$Document, IMappingDocument {
		typeName: string;
		container: projects.FolderBase;
		rootMappingelements: instances.IList<mappings.ObjectMappingElement>;
		mxXmlSchema: xmlschemas.IMxXmlSchema;
		mxXmlSchemaQualifiedName: string;
		rootElementName: string;
		importedWebService: webservices.IImportedWebService;
		importedWebServiceQualifiedName: string;
		serviceName: string;
		operationName: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImportMapping extends mappings$MappingDocument, IImportMapping {
		typeName: string;
		container: projects.FolderBase;
		parameterEntity: domainmodels.IEntity;
		parameterEntityQualifiedName: string;
		useSubtransactionsForMicroflows: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MappingElement extends elements$Element, IMappingElement {
		typeName: string;
		documentation: string;
		elementType: integration.ElementType;
		path: string;
		minOccurs: number;
		maxOccurs: number;
		nillable: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ObjectMappingElement extends mappings$MappingElement, IObjectMappingElement {
		typeName: string;
		mappingMicroflowCall: mappings.MappingMicroflowCall;
		children: instances.IList<mappings.MappingElement>;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		association: domainmodels.IAssociationBase;
		associationQualifiedName: string;
		objectHandling: ObjectHandlingEnum;
		objectHandlingBackup: ObjectHandlingBackupEnum;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImportObjectMappingElement extends mappings$ObjectMappingElement, IImportObjectMappingElement {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ValueMappingElement extends mappings$MappingElement, IValueMappingElement {
		typeName: string;
		container: mappings.ObjectMappingElement;
		xmlDataType: string;
		isKey: boolean;
		isXmlAttribute: boolean;
		isContent: boolean;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		converter: microflows.IMicroflow;
		converterQualifiedName: string;
		expectedContentTypes: string;
		maxLength: number;
		fractionDigits: number;
		totalDigits: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImportValueMappingElement extends mappings$ValueMappingElement, IImportValueMappingElement {
		typeName: string;
		container: mappings.ObjectMappingElement;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ObjectHandlingBackupEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Create: ObjectHandlingBackupEnum;
		Ignore: ObjectHandlingBackupEnum;
		Error: ObjectHandlingBackupEnum
	}

	declare class ObjectHandlingEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Create: ObjectHandlingEnum;
		Find: ObjectHandlingEnum;
		Custom: ObjectHandlingEnum
	}

	
}

declare module 'rest' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IPublishedRestServiceBase {
		container: projects.IFolderBase,
		load(): PublishedRestServiceBase,
		load(callback: (element: PublishedRestServiceBase) => void): any
	}

	declare interface IPublishedOdataService {
		container: projects.IFolderBase,
		load(): PublishedOdataService,
		load(callback: (element: PublishedOdataService) => void): any
	}

	declare interface IPublishedRestResource {
		container: IPublishedRestServiceBase,
		load(): PublishedRestResource,
		load(callback: (element: PublishedRestResource) => void): any
	}

	declare interface IPublishedRestService {
		container: projects.IFolderBase,
		load(): PublishedRestService,
		load(callback: (element: PublishedRestService) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedRestServiceBase extends projects$Document, IPublishedRestServiceBase {
		typeName: string;
		container: projects.FolderBase;
		resources: instances.IList<PublishedRestResource>;
		namespaceName: string;
		path: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedOdataService extends PublishedRestServiceBase, IPublishedOdataService {
		typeName: string;
		container: projects.FolderBase;
		allowedRoleIds: instances.IList<security.IModuleRole>;
		allowedRoleIdsQualifiedNames: string[];
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedRestResource extends elements$Element, IPublishedRestResource {
		typeName: string;
		container: PublishedRestServiceBase;
		dataEntity: webservices.DataEntity;
		path: string;
		usePaging: boolean;
		pageSize: number;
		returnType: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PublishedRestService extends PublishedRestServiceBase, IPublishedRestService {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'settings' {
		declare interface ICertificate {
		container: IProjectSettings,
		load(): Certificate,
		load(callback: (element: Certificate) => void): any
	}

	declare interface IConstantValue {
		container: IServerConfiguration,
		load(): ConstantValue,
		load(callback: (element: ConstantValue) => void): any
	}

	declare interface ICustomSetting {
		container: IServerConfiguration,
		load(): CustomSetting,
		load(callback: (element: CustomSetting) => void): any
	}

	declare interface IProjectSettingsPart {
		container: IProjectSettings,
		load(): ProjectSettingsPart,
		load(callback: (element: ProjectSettingsPart) => void): any
	}

	declare interface IIntegrationProjectSettingsPart {
		container: IProjectSettings,
		load(): IntegrationProjectSettingsPart,
		load(callback: (element: IntegrationProjectSettingsPart) => void): any
	}

	declare interface IProjectDocument {
		container: projects.IProject,
		load(): ProjectDocument,
		load(callback: (element: ProjectDocument) => void): any
	}

	declare interface IProjectSettings {
		container: projects.IProject,
		load(): ProjectSettings,
		load(callback: (element: ProjectSettings) => void): any
	}

	declare interface IServerConfiguration {
		container: IProjectSettings,
		load(): ServerConfiguration,
		load(callback: (element: ServerConfiguration) => void): any
	}

		declare class Certificate extends elements$Element, ICertificate {
		typeName: string;
		container: ProjectSettings;
		type: CertificateType;
		data: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConstantValue extends elements$Element, IConstantValue {
		typeName: string;
		container: ServerConfiguration;
		constant: constants.IConstant;
		constantQualifiedName: string;
		value: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CustomSetting extends elements$Element, ICustomSetting {
		typeName: string;
		container: ServerConfiguration;
		name: string;
		value: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ProjectSettingsPart extends elements$Element, IProjectSettingsPart {
		typeName: string;
		container: ProjectSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class IntegrationProjectSettingsPart extends ProjectSettingsPart, IIntegrationProjectSettingsPart {
		typeName: string;
		container: ProjectSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class ProjectDocument extends units$ModelUnit, IProjectDocument {
		typeName: string;
		container: projects.Project;
		constructor(container: projects.IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class ProjectSettings extends projects$ProjectDocument, IProjectSettings {
		typeName: string;
		container: projects.Project;
		languages: instances.IList<texts.Language>;
		settingsParts: instances.IList<ProjectSettingsPart>;
		configurations: instances.IList<ServerConfiguration>;
		certificates: instances.IList<Certificate>;
		hashAlgorithm: projects.HashAlgorithmType;
		roundingMode: RoundingMode;
		conversionState: projects.ConversionState;
		skipJarAnalyzerStep: boolean;
		afterStartupMicroflow: microflows.IMicroflow;
		afterStartupMicroflowQualifiedName: string;
		beforeShutdownMicroflow: microflows.IMicroflow;
		beforeShutdownMicroflowQualifiedName: string;
		healthCheckMicroflow: microflows.IMicroflow;
		healthCheckMicroflowQualifiedName: string;
		defaultLanguageCode: string;
		firstDayOfWeek: FirstDayOfWeekEnum;
		defaultTimeZoneCode: string;
		scheduledEventTimeZoneCode: string;
		allowUserMultipleSessions: boolean;
		lowerCaseMicroflowVariables: boolean;
		constructor(container: projects.IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ServerConfiguration extends elements$Element, IServerConfiguration {
		typeName: string;
		container: ProjectSettings;
		customSettings: instances.IList<CustomSetting>;
		constantValues: instances.IList<ConstantValue>;
		name: string;
		applicationRootUrl: string;
		portOnlyLocal: boolean;
		adminPortOnlyLocal: boolean;
		portNumber: number;
		adminPortNumber: number;
		maxJavaHeapSize: number;
		emulateCloudSecurity: boolean;
		extraJvmParameters: string;
		databaseType: DatabaseType;
		databaseUrl: string;
		databaseName: string;
		databaseUseIntegratedSecurity: boolean;
		databaseUserName: string;
		databasePassword: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CertificateType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Authority: CertificateType;
		Client: CertificateType
	}

	declare class DatabaseType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Hsqldb: DatabaseType;
		SqlServer: DatabaseType;
		MySql: DatabaseType;
		Oracle: DatabaseType;
		PostgreSql: DatabaseType
	}

	declare class FirstDayOfWeekEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Default: FirstDayOfWeekEnum;
		Sunday: FirstDayOfWeekEnum;
		Monday: FirstDayOfWeekEnum;
		Tuesday: FirstDayOfWeekEnum;
		Wednesday: FirstDayOfWeekEnum;
		Thursday: FirstDayOfWeekEnum;
		Friday: FirstDayOfWeekEnum;
		Saturday: FirstDayOfWeekEnum
	}

	declare class RoundingMode extends instances$IEnum {
		qualifiedTsTypeName: string;
		HalfUp: RoundingMode;
		HalfEven: RoundingMode
	}

	
}

declare module 'pages' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IFormBase {
		container: projects.IFolderBase,
		load(): FormBase,
		load(callback: (element: FormBase) => void): any
	}

	declare interface IPage {
		container: projects.IFolderBase,
		load(): Page,
		load(callback: (element: Page) => void): any
	}

	declare interface ILayout {
		container: projects.IFolderBase,
		load(): Layout,
		load(callback: (element: Layout) => void): any
	}

	declare interface ILayoutCall {
		load(): LayoutCall,
		load(callback: (element: LayoutCall) => void): any
	}

	declare interface ILayoutCallArgument {
		container: ILayoutCall,
		load(): LayoutCallArgument,
		load(callback: (element: LayoutCallArgument) => void): any
	}

	declare interface ILayoutParameter {
		container: ILayout,
		load(): LayoutParameter,
		load(callback: (element: LayoutParameter) => void): any,
		name: string
	}

	declare interface IWidget {
		load(): Widget,
		load(callback: (element: Widget) => void): any
	}

	declare interface IPlaceholder {
		load(): Placeholder,
		load(callback: (element: Placeholder) => void): any
	}

	declare interface IClientAction {
		load(): ClientAction,
		load(callback: (element: ClientAction) => void): any
	}

	declare interface INoClientAction {
		load(): NoClientAction,
		load(callback: (element: NoClientAction) => void): any
	}

	declare interface IPageClientAction {
		load(): PageClientAction,
		load(callback: (element: PageClientAction) => void): any
	}

	declare interface IMicroflowClientAction {
		load(): MicroflowClientAction,
		load(callback: (element: MicroflowClientAction) => void): any
	}

	declare interface IPageSettings {
		load(): PageSettings,
		load(callback: (element: PageSettings) => void): any
	}

	declare interface IMicroflowSettings {
		load(): MicroflowSettings,
		load(callback: (element: MicroflowSettings) => void): any
	}

	declare interface IConfirmationInfo {
		container: IMicroflowSettings,
		load(): ConfirmationInfo,
		load(callback: (element: ConfirmationInfo) => void): any
	}

	declare interface IConditionallyVisibleWidget {
		load(): ConditionallyVisibleWidget,
		load(callback: (element: ConditionallyVisibleWidget) => void): any
	}

	declare interface ILabel {
		load(): Label,
		load(callback: (element: Label) => void): any
	}

	declare interface IStaticImageViewer {
		load(): StaticImageViewer,
		load(callback: (element: StaticImageViewer) => void): any
	}

	declare interface IDivContainer {
		load(): DivContainer,
		load(callback: (element: DivContainer) => void): any
	}

	declare interface IVerticalFlow {
		load(): VerticalFlow,
		load(callback: (element: VerticalFlow) => void): any
	}

	declare interface IConditionallyEditableWidget {
		load(): ConditionallyEditableWidget,
		load(callback: (element: ConditionallyEditableWidget) => void): any
	}

	declare interface IInputWidget {
		load(): InputWidget,
		load(callback: (element: InputWidget) => void): any
	}

	declare interface IMemberWidget {
		load(): MemberWidget,
		load(callback: (element: MemberWidget) => void): any
	}

	declare interface IAttributeWidget {
		load(): AttributeWidget,
		load(callback: (element: AttributeWidget) => void): any
	}

	declare interface IAttributeWidgetWithPlaceholder {
		load(): AttributeWidgetWithPlaceholder,
		load(callback: (element: AttributeWidgetWithPlaceholder) => void): any
	}

	declare interface ITextWidget {
		load(): TextWidget,
		load(callback: (element: TextWidget) => void): any
	}

	declare interface ITextBox {
		load(): TextBox,
		load(callback: (element: TextBox) => void): any
	}

	declare interface ITextArea {
		load(): TextArea,
		load(callback: (element: TextArea) => void): any
	}

	declare interface ICheckBox {
		load(): CheckBox,
		load(callback: (element: CheckBox) => void): any
	}

	declare interface IDatePicker {
		load(): DatePicker,
		load(callback: (element: DatePicker) => void): any
	}

	declare interface IFormattingInfo {
		load(): FormattingInfo,
		load(callback: (element: FormattingInfo) => void): any
	}

	declare interface IConditionalSettings {
		load(): ConditionalSettings,
		load(callback: (element: ConditionalSettings) => void): any
	}

	declare interface IConditionalVisibilitySettings {
		load(): ConditionalVisibilitySettings,
		load(callback: (element: ConditionalVisibilitySettings) => void): any
	}

	declare interface IConditionalEditabilitySettings {
		container: IConditionallyEditableWidget,
		load(): ConditionalEditabilitySettings,
		load(callback: (element: ConditionalEditabilitySettings) => void): any
	}

	declare interface ITable {
		load(): Table,
		load(callback: (element: Table) => void): any
	}

	declare interface ITableCell {
		container: ITable,
		load(): TableCell,
		load(callback: (element: TableCell) => void): any
	}

	declare interface ITableColumn {
		container: ITable,
		load(): TableColumn,
		load(callback: (element: TableColumn) => void): any
	}

	declare interface ITableRow {
		container: ITable,
		load(): TableRow,
		load(callback: (element: TableRow) => void): any
	}

	declare interface IEntityWidget {
		load(): EntityWidget,
		load(callback: (element: EntityWidget) => void): any
	}

	declare interface IDataSource {
		container: IEntityWidget,
		load(): DataSource,
		load(callback: (element: DataSource) => void): any
	}

	declare interface IEntityPathSource {
		container: IEntityWidget,
		load(): EntityPathSource,
		load(callback: (element: EntityPathSource) => void): any
	}

	declare interface IMicroflowSource {
		container: IEntityWidget,
		load(): MicroflowSource,
		load(callback: (element: MicroflowSource) => void): any
	}

	declare interface IListenTargetWidget {
		load(): ListenTargetWidget,
		load(callback: (element: ListenTargetWidget) => void): any
	}

	declare interface IAssociationSource {
		container: IEntityWidget,
		load(): AssociationSource,
		load(callback: (element: AssociationSource) => void): any
	}

	declare interface IDataView {
		load(): DataView,
		load(callback: (element: DataView) => void): any
	}

	declare interface IControlBar {
		load(): ControlBar,
		load(callback: (element: ControlBar) => void): any
	}

	declare interface IDataViewControlBar {
		container: IDataView,
		load(): DataViewControlBar,
		load(callback: (element: DataViewControlBar) => void): any
	}

	declare interface IDataViewSource {
		container: IEntityWidget,
		load(): DataViewSource,
		load(callback: (element: DataViewSource) => void): any
	}

	declare interface IListenTargetSource {
		container: IEntityWidget,
		load(): ListenTargetSource,
		load(callback: (element: ListenTargetSource) => void): any
	}

	declare interface IControlBarItem {
		load(): ControlBarItem,
		load(callback: (element: ControlBarItem) => void): any
	}

	declare interface IControlBarButton {
		load(): ControlBarButton,
		load(callback: (element: ControlBarButton) => void): any
	}

	declare interface IDataViewControlBarButton {
		container: IControlBar,
		load(): DataViewControlBarButton,
		load(callback: (element: DataViewControlBarButton) => void): any
	}

	declare interface IDataViewCancelButton {
		container: IControlBar,
		load(): DataViewCancelButton,
		load(callback: (element: DataViewCancelButton) => void): any
	}

	declare interface IDataViewCloseButton {
		container: IControlBar,
		load(): DataViewCloseButton,
		load(callback: (element: DataViewCloseButton) => void): any
	}

	declare interface IDataViewActionButton {
		container: IControlBar,
		load(): DataViewActionButton,
		load(callback: (element: DataViewActionButton) => void): any
	}

	declare interface IDataViewSaveButton {
		container: IControlBar,
		load(): DataViewSaveButton,
		load(callback: (element: DataViewSaveButton) => void): any
	}

	declare interface IListView {
		load(): ListView,
		load(callback: (element: ListView) => void): any
	}

	declare interface IListViewTemplate {
		container: IListView,
		load(): ListViewTemplate,
		load(callback: (element: ListViewTemplate) => void): any
	}

	declare interface IListViewDatabaseSource {
		container: IEntityWidget,
		load(): ListViewDatabaseSource,
		load(callback: (element: ListViewDatabaseSource) => void): any
	}

	declare interface IGridSortBar {
		load(): GridSortBar,
		load(callback: (element: GridSortBar) => void): any
	}

	declare interface IGridSortItem {
		container: IGridSortBar,
		load(): GridSortItem,
		load(callback: (element: GridSortItem) => void): any
	}

	declare interface IButton {
		load(): Button,
		load(callback: (element: Button) => void): any
	}

	declare interface IStaticOrDynamicString {
		container: ILinkButton,
		load(): StaticOrDynamicString,
		load(callback: (element: StaticOrDynamicString) => void): any
	}

	declare interface IBackButton {
		load(): BackButton,
		load(callback: (element: BackButton) => void): any
	}

	declare interface ICancelButton {
		load(): CancelButton,
		load(callback: (element: CancelButton) => void): any
	}

	declare interface ILogoutButton {
		load(): LogoutButton,
		load(callback: (element: LogoutButton) => void): any
	}

	declare interface IActionButton {
		load(): ActionButton,
		load(callback: (element: ActionButton) => void): any
	}

	declare interface INewButton {
		load(): NewButton,
		load(callback: (element: NewButton) => void): any
	}

	declare interface ISaveButton {
		load(): SaveButton,
		load(callback: (element: SaveButton) => void): any
	}

	declare interface IClientTemplate {
		load(): ClientTemplate,
		load(callback: (element: ClientTemplate) => void): any
	}

	declare interface IClientTemplateParameter {
		container: IClientTemplate,
		load(): ClientTemplateParameter,
		load(callback: (element: ClientTemplateParameter) => void): any
	}

	declare interface IGrid {
		load(): Grid,
		load(callback: (element: Grid) => void): any
	}

	declare interface IColumnGrid {
		load(): ColumnGrid,
		load(callback: (element: ColumnGrid) => void): any
	}

	declare interface ISearchField {
		container: IControlBar,
		load(): SearchField,
		load(callback: (element: SearchField) => void): any
	}

	declare interface ISingleSearchField {
		container: IControlBar,
		load(): SingleSearchField,
		load(callback: (element: SingleSearchField) => void): any
	}

	declare interface IComparisonSearchField {
		container: IControlBar,
		load(): ComparisonSearchField,
		load(callback: (element: ComparisonSearchField) => void): any
	}

	declare interface IGridBaseSource {
		container: IEntityWidget,
		load(): GridBaseSource,
		load(callback: (element: GridBaseSource) => void): any
	}

	declare interface IGridDatabaseSource {
		container: IEntityWidget,
		load(): GridDatabaseSource,
		load(callback: (element: GridDatabaseSource) => void): any
	}

	declare interface IDataGrid {
		load(): DataGrid,
		load(callback: (element: DataGrid) => void): any
	}

	declare interface IGridControlBarButton {
		load(): GridControlBarButton,
		load(callback: (element: GridControlBarButton) => void): any
	}

	declare interface IDataGridAddButton {
		container: IControlBar,
		load(): DataGridAddButton,
		load(callback: (element: DataGridAddButton) => void): any
	}

	declare interface IDataGridExportToCSVButton {
		container: IControlBar,
		load(): DataGridExportToCSVButton,
		load(callback: (element: DataGridExportToCSVButton) => void): any
	}

	declare interface IDataGridExportToExcelButton {
		container: IControlBar,
		load(): DataGridExportToExcelButton,
		load(callback: (element: DataGridExportToExcelButton) => void): any
	}

	declare interface IDataGridRemoveButton {
		container: IControlBar,
		load(): DataGridRemoveButton,
		load(callback: (element: DataGridRemoveButton) => void): any
	}

	declare interface IDropDown {
		load(): DropDown,
		load(callback: (element: DropDown) => void): any
	}

	declare interface IDropDownButton {
		load(): DropDownButton,
		load(callback: (element: DropDownButton) => void): any
	}

	declare interface IActionItem {
		container: IConditionallyVisibleWidget,
		load(): ActionItem,
		load(callback: (element: ActionItem) => void): any
	}

	declare interface IDropDownButtonItem {
		container: IDropDownButton,
		load(): DropDownButtonItem,
		load(callback: (element: DropDownButtonItem) => void): any
	}

	declare interface IDropDownSearchField {
		container: IControlBar,
		load(): DropDownSearchField,
		load(callback: (element: DropDownSearchField) => void): any
	}

	declare interface IDynamicImageViewer {
		load(): DynamicImageViewer,
		load(callback: (element: DynamicImageViewer) => void): any
	}

	declare interface IDynamicText {
		load(): DynamicText,
		load(callback: (element: DynamicText) => void): any
	}

	declare interface IFileManager {
		load(): FileManager,
		load(callback: (element: FileManager) => void): any
	}

	declare interface IPageForSpecialization {
		container: IGridEditButton,
		load(): PageForSpecialization,
		load(callback: (element: PageForSpecialization) => void): any
	}

	declare interface IIcon {
		load(): Icon,
		load(callback: (element: Icon) => void): any
	}

	declare interface IGlyphIcon {
		load(): GlyphIcon,
		load(callback: (element: GlyphIcon) => void): any
	}

	declare interface IGridActionButton {
		container: IControlBar,
		load(): GridActionButton,
		load(callback: (element: GridActionButton) => void): any
	}

	declare interface IGridColumn {
		container: IColumnGrid,
		load(): GridColumn,
		load(callback: (element: GridColumn) => void): any
	}

	declare interface IGridControlBar {
		container: IGrid,
		load(): GridControlBar,
		load(callback: (element: GridControlBar) => void): any
	}

	declare interface IGridDeleteButton {
		container: IControlBar,
		load(): GridDeleteButton,
		load(callback: (element: GridDeleteButton) => void): any
	}

	declare interface IGridDeselectAllButton {
		container: IControlBar,
		load(): GridDeselectAllButton,
		load(callback: (element: GridDeselectAllButton) => void): any
	}

	declare interface IGridEditButton {
		container: IControlBar,
		load(): GridEditButton,
		load(callback: (element: GridEditButton) => void): any
	}

	declare interface IGridNewButton {
		container: IControlBar,
		load(): GridNewButton,
		load(callback: (element: GridNewButton) => void): any
	}

	declare interface IGridSearchButton {
		load(): GridSearchButton,
		load(callback: (element: GridSearchButton) => void): any
	}

	declare interface IGridSelectAllButton {
		container: IControlBar,
		load(): GridSelectAllButton,
		load(callback: (element: GridSelectAllButton) => void): any
	}

	declare interface IGroupBox {
		load(): GroupBox,
		load(callback: (element: GroupBox) => void): any
	}

	declare interface IHeader {
		load(): Header,
		load(callback: (element: Header) => void): any
	}

	declare interface ISplitPane {
		load(): SplitPane,
		load(callback: (element: SplitPane) => void): any
	}

	declare interface IHorizontalSplitPane {
		load(): HorizontalSplitPane,
		load(callback: (element: HorizontalSplitPane) => void): any
	}

	declare interface IImageIcon {
		load(): ImageIcon,
		load(callback: (element: ImageIcon) => void): any
	}

	declare interface IImageUploader {
		load(): ImageUploader,
		load(callback: (element: ImageUploader) => void): any
	}

	declare interface IImageViewerSource {
		container: IEntityWidget,
		load(): ImageViewerSource,
		load(callback: (element: ImageViewerSource) => void): any
	}

	declare interface IAssociationWidget {
		load(): AssociationWidget,
		load(callback: (element: AssociationWidget) => void): any
	}

	declare interface IInputReferenceSetSelector {
		load(): InputReferenceSetSelector,
		load(callback: (element: InputReferenceSetSelector) => void): any
	}

	declare interface ILayoutGrid {
		load(): LayoutGrid,
		load(callback: (element: LayoutGrid) => void): any
	}

	declare interface ILayoutGridColumn {
		container: ILayoutGridRow,
		load(): LayoutGridColumn,
		load(callback: (element: LayoutGridColumn) => void): any
	}

	declare interface ILayoutGridRow {
		container: ILayoutGrid,
		load(): LayoutGridRow,
		load(callback: (element: LayoutGridRow) => void): any
	}

	declare interface ILinkButton {
		load(): LinkButton,
		load(callback: (element: LinkButton) => void): any
	}

	declare interface IMenuWidget {
		load(): MenuWidget,
		load(callback: (element: MenuWidget) => void): any
	}

	declare interface IMenuBar {
		load(): MenuBar,
		load(callback: (element: MenuBar) => void): any
	}

	declare interface IMenuSource {
		container: IMenuWidget,
		load(): MenuSource,
		load(callback: (element: MenuSource) => void): any
	}

	declare interface IMenuDocumentSource {
		container: IMenuWidget,
		load(): MenuDocumentSource,
		load(callback: (element: MenuDocumentSource) => void): any
	}

	declare interface INavigationList {
		load(): NavigationList,
		load(callback: (element: NavigationList) => void): any
	}

	declare interface INavigationListItem {
		container: INavigationList,
		load(): NavigationListItem,
		load(callback: (element: NavigationListItem) => void): any
	}

	declare interface INavigationSource {
		container: IMenuWidget,
		load(): NavigationSource,
		load(callback: (element: NavigationSource) => void): any
	}

	declare interface INavigationTree {
		load(): NavigationTree,
		load(callback: (element: NavigationTree) => void): any
	}

	declare interface IOnClickBehavior {
		container: IDynamicImageViewer,
		load(): OnClickBehavior,
		load(callback: (element: OnClickBehavior) => void): any
	}

	declare interface IOnClickEnlarge {
		container: IDynamicImageViewer,
		load(): OnClickEnlarge,
		load(callback: (element: OnClickEnlarge) => void): any
	}

	declare interface IOnClickMicroflow {
		container: IDynamicImageViewer,
		load(): OnClickMicroflow,
		load(callback: (element: OnClickMicroflow) => void): any
	}

	declare interface IOnClickNothing {
		container: IDynamicImageViewer,
		load(): OnClickNothing,
		load(callback: (element: OnClickNothing) => void): any
	}

	declare interface IRangeSearchField {
		container: IControlBar,
		load(): RangeSearchField,
		load(callback: (element: RangeSearchField) => void): any
	}

	declare interface IReferenceSelector {
		load(): ReferenceSelector,
		load(callback: (element: ReferenceSelector) => void): any
	}

	declare interface IReferenceSetSelector {
		load(): ReferenceSetSelector,
		load(callback: (element: ReferenceSetSelector) => void): any
	}

	declare interface IReferenceSetSource {
		container: IEntityWidget,
		load(): ReferenceSetSource,
		load(callback: (element: ReferenceSetSource) => void): any
	}

	declare interface IScrollContainer {
		load(): ScrollContainer,
		load(callback: (element: ScrollContainer) => void): any
	}

	declare interface IScrollContainerRegion {
		container: IScrollContainer,
		load(): ScrollContainerRegion,
		load(callback: (element: ScrollContainerRegion) => void): any
	}

	declare interface ISearchBar {
		container: IGridBaseSource,
		load(): SearchBar,
		load(callback: (element: SearchBar) => void): any
	}

	declare interface ISelectButton {
		container: IControlBar,
		load(): SelectButton,
		load(callback: (element: SelectButton) => void): any
	}

	declare interface ISelectorSource {
		container: IAssociationWidget,
		load(): SelectorSource,
		load(callback: (element: SelectorSource) => void): any
	}

	declare interface ISelectorDatabaseSource {
		container: IAssociationWidget,
		load(): SelectorDatabaseSource,
		load(callback: (element: SelectorDatabaseSource) => void): any
	}

	declare interface ISelectorMicroflowSource {
		container: IAssociationWidget,
		load(): SelectorMicroflowSource,
		load(callback: (element: SelectorMicroflowSource) => void): any
	}

	declare interface ISidebarToggleButton {
		load(): SidebarToggleButton,
		load(callback: (element: SidebarToggleButton) => void): any
	}

	declare interface ISimpleMenuBar {
		load(): SimpleMenuBar,
		load(callback: (element: SimpleMenuBar) => void): any
	}

	declare interface ISnippet {
		container: projects.IFolderBase,
		load(): Snippet,
		load(callback: (element: Snippet) => void): any,
		entity: domainmodels.IEntity,
		entityQualifiedName: string
	}

	declare interface ISnippetCall {
		container: ISnippetCallWidget,
		load(): SnippetCall,
		load(callback: (element: SnippetCall) => void): any
	}

	declare interface ISnippetCallWidget {
		load(): SnippetCallWidget,
		load(callback: (element: SnippetCallWidget) => void): any
	}

	declare interface ITabContainer {
		load(): TabContainer,
		load(callback: (element: TabContainer) => void): any
	}

	declare interface ITabPage {
		container: ITabContainer,
		load(): TabPage,
		load(callback: (element: TabPage) => void): any
	}

	declare interface ITemplateGrid {
		load(): TemplateGrid,
		load(callback: (element: TemplateGrid) => void): any
	}

	declare interface ITemplateGridContents {
		container: ITemplateGrid,
		load(): TemplateGridContents,
		load(callback: (element: TemplateGridContents) => void): any
	}

	declare interface ITitle {
		load(): Title,
		load(callback: (element: Title) => void): any
	}

	declare interface IVerticalSplitPane {
		load(): VerticalSplitPane,
		load(callback: (element: VerticalSplitPane) => void): any
	}

	declare interface IProjectSettingsPart {
		container: settings.IProjectSettings,
		load(): ProjectSettingsPart,
		load(callback: (element: ProjectSettingsPart) => void): any
	}

	declare interface IWebUIProjectSettingsPart {
		container: settings.IProjectSettings,
		load(): WebUIProjectSettingsPart,
		load(callback: (element: WebUIProjectSettingsPart) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class FormBase extends projects$Document, IFormBase {
		typeName: string;
		container: projects.FolderBase;
		canvasWidth: number;
		canvasHeight: number;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Page extends FormBase, IPage {
		typeName: string;
		container: projects.FolderBase;
		layoutCall: LayoutCall;
		title: texts.Text;
		class: string;
		style: string;
		allowedRoles: instances.IList<security.IModuleRole>;
		allowedRolesQualifiedNames: string[];
		popupWidth: number;
		popupHeight: number;
		popupResizable: boolean;
		markAsUsed: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Layout extends FormBase, ILayout {
		typeName: string;
		container: projects.FolderBase;
		widget: Widget;
		layoutCall: LayoutCall;
		layoutType: LayoutType;
		mainPlaceholder: ILayoutParameter;
		mainPlaceholderQualifiedName: string;
		acceptButtonPlaceholder: ILayoutParameter;
		acceptButtonPlaceholderQualifiedName: string;
		cancelButtonPlaceholder: ILayoutParameter;
		cancelButtonPlaceholderQualifiedName: string;
		useMainPlaceholderForPopups: boolean;
		class: string;
		style: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LayoutCall extends elements$Element, ILayoutCall {
		typeName: string;
		layout: ILayout;
		layoutQualifiedName: string;
		arguments: instances.IList<LayoutCallArgument>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LayoutCallArgument extends elements$Element, ILayoutCallArgument {
		typeName: string;
		container: LayoutCall;
		parameterName: string;
		widget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LayoutParameter extends elements$Element, ILayoutParameter {
		typeName: string;
		container: Layout;
		name: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Widget extends elements$Element, IWidget {
		typeName: string;
		name: string;
		class: string;
		style: string;
		tabIndex: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Placeholder extends Widget, IPlaceholder {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ClientAction extends elements$Element, IClientAction {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class NoClientAction extends ClientAction, INoClientAction {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class PageClientAction extends ClientAction, IPageClientAction {
		typeName: string;
		pageSettings: PageSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowClientAction extends ClientAction, IMicroflowClientAction {
		typeName: string;
		microflowSettings: MicroflowSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PageSettings extends elements$Element, IPageSettings {
		typeName: string;
		page: IPage;
		pageQualifiedName: string;
		formTitle: texts.Text;
		location: FormLocation;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowSettings extends elements$Element, IMicroflowSettings {
		typeName: string;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		useAllPages: boolean;
		progressBar: ProgressBarType;
		progressMessage: texts.Text;
		asynchronous: boolean;
		formValidations: FormValidations;
		confirmationInfo: ConfirmationInfo;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConfirmationInfo extends elements$Element, IConfirmationInfo {
		typeName: string;
		container: MicroflowSettings;
		question: texts.Text;
		proceedButtonCaption: texts.Text;
		cancelButtonCaption: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConditionallyVisibleWidget extends Widget, IConditionallyVisibleWidget {
		typeName: string;
		conditionalVisibilitySettings: ConditionalVisibilitySettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Label extends ConditionallyVisibleWidget, ILabel {
		typeName: string;
		caption: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class StaticImageViewer extends ConditionallyVisibleWidget, IStaticImageViewer {
		typeName: string;
		image: images.IImage;
		imageQualifiedName: string;
		widthUnit: ImageSizeUnit;
		heightUnit: ImageSizeUnit;
		width: number;
		height: number;
		clickAction: ClientAction;
		responsive: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DivContainer extends ConditionallyVisibleWidget, IDivContainer {
		typeName: string;
		widget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class VerticalFlow extends Widget, IVerticalFlow {
		typeName: string;
		widgets: instances.IList<Widget>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConditionallyEditableWidget extends ConditionallyVisibleWidget, IConditionallyEditableWidget {
		typeName: string;
		conditionalEditabilitySettings: ConditionalEditabilitySettings;
		editable: EditableEnum;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class InputWidget extends ConditionallyEditableWidget, IInputWidget {
		typeName: string;
		label: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MemberWidget extends InputWidget, IMemberWidget {
		typeName: string;
		attributePath: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AttributeWidget extends MemberWidget, IAttributeWidget {
		typeName: string;
		required: boolean;
		requiredMessage: texts.Text;
		onChangeMicroflowSettings: MicroflowSettings;
		onEnterMicroflowSettings: MicroflowSettings;
		onLeaveMicroflowSettings: MicroflowSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AttributeWidgetWithPlaceholder extends AttributeWidget, IAttributeWidgetWithPlaceholder {
		typeName: string;
		placeholder: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TextWidget extends AttributeWidgetWithPlaceholder, ITextWidget {
		typeName: string;
		maxLengthCode: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TextBox extends TextWidget, ITextBox {
		typeName: string;
		inputMask: string;
		formattingInfo: FormattingInfo;
		isPasswordBox: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TextArea extends TextWidget, ITextArea {
		typeName: string;
		numberOfLines: number;
		counterMessage: texts.Text;
		textTooLongMessage: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CheckBox extends AttributeWidget, ICheckBox {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DatePicker extends AttributeWidgetWithPlaceholder, IDatePicker {
		typeName: string;
		formattingInfo: FormattingInfo;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class FormattingInfo extends elements$Element, IFormattingInfo {
		typeName: string;
		decimalPrecision: number;
		groupDigits: boolean;
		enumFormat: EnumFormat;
		dateFormat: DateFormat;
		customDateFormat: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConditionalSettings extends elements$Element, IConditionalSettings {
		typeName: string;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		conditions: instances.IList<enumerations.Condition>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConditionalVisibilitySettings extends ConditionalSettings, IConditionalVisibilitySettings {
		typeName: string;
		moduleRoles: instances.IList<security.IModuleRole>;
		moduleRolesQualifiedNames: string[];
		ignoreSecurity: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConditionalEditabilitySettings extends ConditionalSettings, IConditionalEditabilitySettings {
		typeName: string;
		container: ConditionallyEditableWidget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Table extends ConditionallyVisibleWidget, ITable {
		typeName: string;
		cells: instances.IList<TableCell>;
		columns: instances.IList<TableColumn>;
		widthUnit: UnitEnum;
		rows: instances.IList<TableRow>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TableCell extends elements$Element, ITableCell {
		typeName: string;
		container: Table;
		class: string;
		style: string;
		isHeader: boolean;
		widget: Widget;
		leftColumnIndex: number;
		topRowIndex: number;
		width: number;
		height: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TableColumn extends elements$Element, ITableColumn {
		typeName: string;
		container: Table;
		width: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TableRow extends elements$Element, ITableRow {
		typeName: string;
		container: Table;
		class: string;
		style: string;
		conditionalVisibilitySettings: ConditionalVisibilitySettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class EntityWidget extends ConditionallyVisibleWidget, IEntityWidget {
		typeName: string;
		dataSource: DataSource;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSource extends elements$Element, IDataSource {
		typeName: string;
		container: EntityWidget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class EntityPathSource extends DataSource, IEntityPathSource {
		typeName: string;
		container: EntityWidget;
		entityPath: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MicroflowSource extends DataSource, IMicroflowSource {
		typeName: string;
		container: EntityWidget;
		microflowSettings: MicroflowSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ListenTargetWidget extends EntityWidget, IListenTargetWidget {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AssociationSource extends EntityPathSource, IAssociationSource {
		typeName: string;
		container: EntityWidget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataView extends EntityWidget, IDataView {
		typeName: string;
		widget: Widget;
		editable: boolean;
		showControlBar: boolean;
		closeOnSaveOrCancel: boolean;
		useSchema: boolean;
		noEntityMessage: texts.Text;
		labelWidth: number;
		controlBar: DataViewControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ControlBar extends elements$Element, IControlBar {
		typeName: string;
		items: instances.IList<ControlBarItem>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataViewControlBar extends ControlBar, IDataViewControlBar {
		typeName: string;
		container: DataView;
		closeButton: ControlBarItem;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataViewSource extends EntityPathSource, IDataViewSource {
		typeName: string;
		container: EntityWidget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ListenTargetSource extends DataSource, IListenTargetSource {
		typeName: string;
		container: EntityWidget;
		listenTarget: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ControlBarItem extends elements$Element, IControlBarItem {
		typeName: string;
		name: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ControlBarButton extends ControlBarItem, IControlBarButton {
		typeName: string;
		caption: ClientTemplate;
		tooltip: texts.Text;
		icon: Icon;
		class: string;
		style: string;
		conditionalVisibilitySettings: ConditionalVisibilitySettings;
		buttonStyle: ButtonStyle;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataViewControlBarButton extends ControlBarButton, IDataViewControlBarButton {
		typeName: string;
		container: ControlBar;
		tabIndex: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataViewCancelButton extends DataViewControlBarButton, IDataViewCancelButton {
		typeName: string;
		container: ControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataViewCloseButton extends DataViewControlBarButton, IDataViewCloseButton {
		typeName: string;
		container: ControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataViewActionButton extends DataViewControlBarButton, IDataViewActionButton {
		typeName: string;
		container: ControlBar;
		action: ClientAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataViewSaveButton extends DataViewControlBarButton, IDataViewSaveButton {
		typeName: string;
		container: ControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ListView extends ListenTargetWidget, IListView {
		typeName: string;
		widget: Widget;
		pageSize: number;
		clickAction: ClientAction;
		editable: boolean;
		templates: instances.IList<ListViewTemplate>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ListViewTemplate extends elements$Element, IListViewTemplate {
		typeName: string;
		container: ListView;
		specialization: domainmodels.IEntity;
		specializationQualifiedName: string;
		widget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ListViewDatabaseSource extends EntityPathSource, IListViewDatabaseSource {
		typeName: string;
		container: EntityWidget;
		searchPaths: instances.IList<string>;
		sortBar: GridSortBar;
		xPathConstraint: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridSortBar extends elements$Element, IGridSortBar {
		typeName: string;
		sortItems: instances.IList<GridSortItem>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridSortItem extends elements$Element, IGridSortItem {
		typeName: string;
		container: GridSortBar;
		attributePath: string;
		sortDirection: SortDirection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Button extends ConditionallyVisibleWidget, IButton {
		typeName: string;
		caption: ClientTemplate;
		tooltip: texts.Text;
		icon: Icon;
		renderType: RenderType;
		buttonStyle: ButtonStyle;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class StaticOrDynamicString extends elements$Element, IStaticOrDynamicString {
		typeName: string;
		container: LinkButton;
		isDynamic: boolean;
		value: string;
		attribute: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class BackButton extends Button, IBackButton {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CancelButton extends Button, ICancelButton {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LogoutButton extends Button, ILogoutButton {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ActionButton extends Button, IActionButton {
		typeName: string;
		action: ClientAction;
		disabledDuringAction: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NewButton extends Button, INewButton {
		typeName: string;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		pageSettings: PageSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SaveButton extends Button, ISaveButton {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ClientTemplate extends elements$Element, IClientTemplate {
		typeName: string;
		template: texts.Text;
		parameters: instances.IList<ClientTemplateParameter>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ClientTemplateParameter extends elements$Element, IClientTemplateParameter {
		typeName: string;
		container: ClientTemplate;
		attributePath: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Grid extends ListenTargetWidget, IGrid {
		typeName: string;
		isControlBarVisible: boolean;
		isPagingEnabled: boolean;
		selectionMode: GridSelectionMode;
		selectFirst: boolean;
		defaultButtonTrigger: ClickTypeType;
		refreshTime: number;
		controlBar: GridControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ColumnGrid extends Grid, IColumnGrid {
		typeName: string;
		columns: instances.IList<GridColumn>;
		numberOfRows: number;
		showEmptyRows: boolean;
		widthUnit: UnitEnum;
		tooltipPage: IPage;
		tooltipPageQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SearchField extends ControlBarItem, ISearchField {
		typeName: string;
		container: ControlBar;
		caption: texts.Text;
		type: SearchFieldType;
		defaultValue: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SingleSearchField extends SearchField, ISingleSearchField {
		typeName: string;
		container: ControlBar;
		attributePath: string;
		operator: SearchFieldOperator;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ComparisonSearchField extends SingleSearchField, IComparisonSearchField {
		typeName: string;
		container: ControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridBaseSource extends EntityPathSource, IGridBaseSource {
		typeName: string;
		container: EntityWidget;
		sortBar: GridSortBar;
		searchBar: SearchBar;
		searchBarType: SearchBarTypeEnum;
		waitForSearch: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridDatabaseSource extends GridBaseSource, IGridDatabaseSource {
		typeName: string;
		container: EntityWidget;
		xPathConstraint: string;
		applyContext: boolean;
		removeAllFromContext: boolean;
		removeFromContextIds: instances.IList<domainmodels.IEntity>;
		removeFromContextIdsQualifiedNames: string[];
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataGrid extends ColumnGrid, IDataGrid {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridControlBarButton extends ControlBarButton, IGridControlBarButton {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataGridAddButton extends GridControlBarButton, IDataGridAddButton {
		typeName: string;
		container: ControlBar;
		pageSettings: PageSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataGridExportToCSVButton extends GridControlBarButton, IDataGridExportToCSVButton {
		typeName: string;
		container: ControlBar;
		maxNumberOfRows: number;
		decimalSeparator: string;
		groupSeparator: string;
		delimiter: string;
		generateExcelHint: boolean;
		useGridDateFormat: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataGridExportToExcelButton extends GridControlBarButton, IDataGridExportToExcelButton {
		typeName: string;
		container: ControlBar;
		maxNumberOfRows: number;
		useExcelDateType: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataGridRemoveButton extends GridControlBarButton, IDataGridRemoveButton {
		typeName: string;
		container: ControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DropDown extends AttributeWidget, IDropDown {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DropDownButton extends Button, IDropDownButton {
		typeName: string;
		items: instances.IList<DropDownButtonItem>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ActionItem extends elements$Element, IActionItem {
		typeName: string;
		container: ConditionallyVisibleWidget;
		action: ClientAction;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DropDownButtonItem extends ActionItem, IDropDownButtonItem {
		typeName: string;
		container: DropDownButton;
		caption: texts.Text;
		image: images.IImage;
		imageQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DropDownSearchField extends SingleSearchField, IDropDownSearchField {
		typeName: string;
		container: ControlBar;
		sortBar: GridSortBar;
		xPathConstraint: string;
		allowMultipleSelect: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DynamicImageViewer extends EntityWidget, IDynamicImageViewer {
		typeName: string;
		defaultImage: images.IImage;
		defaultImageQualifiedName: string;
		widthUnit: ImageSizeUnit;
		heightUnit: ImageSizeUnit;
		width: number;
		height: number;
		responsive: boolean;
		showAsThumbnail: boolean;
		onClickBehavior: OnClickBehavior;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DynamicText extends ConditionallyVisibleWidget, IDynamicText {
		typeName: string;
		content: ClientTemplate;
		renderMode: TextRenderMode;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class FileManager extends InputWidget, IFileManager {
		typeName: string;
		allowedExtensions: string;
		type: FileManagerType;
		maxFileSize: number;
		showFileInBrowser: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PageForSpecialization extends elements$Element, IPageForSpecialization {
		typeName: string;
		container: GridEditButton;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		pageSettings: PageSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Icon extends elements$Element, IIcon {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class GlyphIcon extends Icon, IGlyphIcon {
		typeName: string;
		code: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridActionButton extends GridControlBarButton, IGridActionButton {
		typeName: string;
		container: ControlBar;
		action: ClientAction;
		maintainSelectionAfterMicroflow: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridColumn extends elements$Element, IGridColumn {
		typeName: string;
		container: ColumnGrid;
		name: string;
		caption: texts.Text;
		attributePath: string;
		formattingInfo: FormattingInfo;
		showTooltip: boolean;
		aggregateCaption: texts.Text;
		aggregateFunction: AggregateFunction;
		editable: boolean;
		width: number;
		class: string;
		style: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridControlBar extends ControlBar, IGridControlBar {
		typeName: string;
		container: Grid;
		searchButton: GridSearchButton;
		defaultButton: ControlBarItem;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridDeleteButton extends GridControlBarButton, IGridDeleteButton {
		typeName: string;
		container: ControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridDeselectAllButton extends GridControlBarButton, IGridDeselectAllButton {
		typeName: string;
		container: ControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridEditButton extends GridControlBarButton, IGridEditButton {
		typeName: string;
		container: ControlBar;
		pageSettings: PageSettings;
		pagesForSpecializations: instances.IList<PageForSpecialization>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridNewButton extends GridControlBarButton, IGridNewButton {
		typeName: string;
		container: ControlBar;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		editLocation: NewButtonEditLocation;
		pageSettings: PageSettings;
		isPersistent: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridSearchButton extends GridControlBarButton, IGridSearchButton {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GridSelectAllButton extends GridControlBarButton, IGridSelectAllButton {
		typeName: string;
		container: ControlBar;
		selectionType: SelectionType;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GroupBox extends ConditionallyVisibleWidget, IGroupBox {
		typeName: string;
		caption: ClientTemplate;
		collapsible: GroupBoxCollapsible;
		widget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Header extends Widget, IHeader {
		typeName: string;
		leftWidget: Widget;
		rightWidget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SplitPane extends Widget, ISplitPane {
		typeName: string;
		firstWidget: Widget;
		secondWidget: Widget;
		animatedResize: boolean;
		height: number;
		position: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class HorizontalSplitPane extends SplitPane, IHorizontalSplitPane {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImageIcon extends Icon, IImageIcon {
		typeName: string;
		image: images.IImage;
		imageQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImageUploader extends InputWidget, IImageUploader {
		typeName: string;
		allowedExtensions: string;
		thumbnailSize: common.ISize;
		maxFileSize: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImageViewerSource extends EntityPathSource, IImageViewerSource {
		typeName: string;
		container: EntityWidget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AssociationWidget extends MemberWidget, IAssociationWidget {
		typeName: string;
		selectorSource: SelectorSource;
		selectPageSettings: PageSettings;
		onChangeMicroflowSettings: MicroflowSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class InputReferenceSetSelector extends AssociationWidget, IInputReferenceSetSelector {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LayoutGrid extends ConditionallyVisibleWidget, ILayoutGrid {
		typeName: string;
		width: ContainerWidth;
		rows: instances.IList<LayoutGridRow>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LayoutGridColumn extends elements$Element, ILayoutGridColumn {
		typeName: string;
		container: LayoutGridRow;
		weight: number;
		widget: Widget;
		class: string;
		style: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LayoutGridRow extends elements$Element, ILayoutGridRow {
		typeName: string;
		container: LayoutGrid;
		columns: instances.IList<LayoutGridColumn>;
		conditionalVisibilitySettings: ConditionalVisibilitySettings;
		class: string;
		style: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class LinkButton extends Button, ILinkButton {
		typeName: string;
		linkType: LinkType;
		address: StaticOrDynamicString;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MenuWidget extends Widget, IMenuWidget {
		typeName: string;
		menuSource: MenuSource;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MenuBar extends MenuWidget, IMenuBar {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MenuSource extends elements$Element, IMenuSource {
		typeName: string;
		container: MenuWidget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class MenuDocumentSource extends MenuSource, IMenuDocumentSource {
		typeName: string;
		container: MenuWidget;
		menu: menus.IMenuDocument;
		menuQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NavigationList extends ConditionallyVisibleWidget, INavigationList {
		typeName: string;
		items: instances.IList<NavigationListItem>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NavigationListItem extends ActionItem, INavigationListItem {
		typeName: string;
		container: NavigationList;
		widget: Widget;
		class: string;
		style: string;
		conditionalVisibilitySettings: ConditionalVisibilitySettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NavigationSource extends MenuSource, INavigationSource {
		typeName: string;
		container: MenuWidget;
		deviceType: navigation.DeviceType;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NavigationTree extends MenuWidget, INavigationTree {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class OnClickBehavior extends elements$Element, IOnClickBehavior {
		typeName: string;
		container: DynamicImageViewer;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class OnClickEnlarge extends OnClickBehavior, IOnClickEnlarge {
		typeName: string;
		container: DynamicImageViewer;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class OnClickMicroflow extends OnClickBehavior, IOnClickMicroflow {
		typeName: string;
		container: DynamicImageViewer;
		microflowSettings: MicroflowSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class OnClickNothing extends OnClickBehavior, IOnClickNothing {
		typeName: string;
		container: DynamicImageViewer;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class RangeSearchField extends SearchField, IRangeSearchField {
		typeName: string;
		container: ControlBar;
		lowerBound: string;
		upperBound: string;
		includeLower: boolean;
		includeUpper: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReferenceSelector extends AssociationWidget, IReferenceSelector {
		typeName: string;
		required: boolean;
		requiredMessage: texts.Text;
		renderMode: ReferenceSelectorRenderModeType;
		gotoPageSettings: PageSettings;
		formattingInfo: FormattingInfo;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReferenceSetSelector extends ColumnGrid, IReferenceSetSelector {
		typeName: string;
		onChangeMicroflowSettings: MicroflowSettings;
		constrainedBy: instances.IList<string>;
		xPathConstraint: string;
		removeAllFromContext: boolean;
		removeFromContextEntities: instances.IList<domainmodels.IEntity>;
		removeFromContextEntitiesQualifiedNames: string[];
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReferenceSetSource extends GridBaseSource, IReferenceSetSource {
		typeName: string;
		container: EntityWidget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ScrollContainer extends Widget, IScrollContainer {
		typeName: string;
		center: ScrollContainerRegion;
		left: ScrollContainerRegion;
		right: ScrollContainerRegion;
		top: ScrollContainerRegion;
		bottom: ScrollContainerRegion;
		layoutMode: LayoutModeType;
		widthMode: SizeMode;
		width: number;
		alignment: AlignmentEnum;
		scrollBehavior: ScrollBehavior;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ScrollContainerRegion extends elements$Element, IScrollContainerRegion {
		typeName: string;
		container: ScrollContainer;
		widget: Widget;
		sizeMode: SizeMode;
		size: number;
		class: string;
		style: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SearchBar extends ControlBar, ISearchBar {
		typeName: string;
		container: GridBaseSource;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SelectButton extends GridControlBarButton, ISelectButton {
		typeName: string;
		container: ControlBar;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SelectorSource extends elements$Element, ISelectorSource {
		typeName: string;
		container: AssociationWidget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class SelectorDatabaseSource extends SelectorSource, ISelectorDatabaseSource {
		typeName: string;
		container: AssociationWidget;
		sortBar: GridSortBar;
		xPathConstraint: string;
		constrainedBy: instances.IList<string>;
		applyContext: boolean;
		removeAllFromContext: boolean;
		removeFromContextEntities: instances.IList<domainmodels.IEntity>;
		removeFromContextEntitiesQualifiedNames: string[];
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SelectorMicroflowSource extends SelectorSource, ISelectorMicroflowSource {
		typeName: string;
		container: AssociationWidget;
		dataSourceMicroflowSettings: MicroflowSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SidebarToggleButton extends Button, ISidebarToggleButton {
		typeName: string;
		region: SidebarToggleRegion;
		mode: SidebarToggleMode;
		initiallyOpen: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SimpleMenuBar extends MenuWidget, ISimpleMenuBar {
		typeName: string;
		orientation: SimpleMenuBarOrientation;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Snippet extends FormBase, ISnippet {
		typeName: string;
		container: projects.FolderBase;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		widget: Widget;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SnippetCall extends elements$Element, ISnippetCall {
		typeName: string;
		container: SnippetCallWidget;
		snippet: ISnippet;
		snippetQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SnippetCallWidget extends Widget, ISnippetCallWidget {
		typeName: string;
		snippetCall: SnippetCall;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TabContainer extends ConditionallyVisibleWidget, ITabContainer {
		typeName: string;
		tabPages: instances.IList<TabPage>;
		defaultPage: TabPage;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TabPage extends elements$Element, ITabPage {
		typeName: string;
		container: TabContainer;
		name: string;
		caption: texts.Text;
		refreshOnShow: boolean;
		conditionalVisibilitySettings: ConditionalVisibilitySettings;
		widget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TemplateGrid extends Grid, ITemplateGrid {
		typeName: string;
		contents: TemplateGridContents;
		numberOfRows: number;
		numberOfColumns: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class TemplateGridContents extends elements$Element, ITemplateGridContents {
		typeName: string;
		container: TemplateGrid;
		widget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Title extends ConditionallyVisibleWidget, ITitle {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class VerticalSplitPane extends SplitPane, IVerticalSplitPane {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ProjectSettingsPart extends elements$Element, IProjectSettingsPart {
		typeName: string;
		container: settings.ProjectSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class WebUIProjectSettingsPart extends settings$ProjectSettingsPart, IWebUIProjectSettingsPart {
		typeName: string;
		container: settings.ProjectSettings;
		theme: string;
		feedbackWidgetUpdated: boolean;
		useModernUI: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class FormLocation extends instances$IEnum {
		qualifiedTsTypeName: string;
		Content: FormLocation;
		Popup: FormLocation;
		ModalPopup: FormLocation
	}

	declare class ProgressBarType extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: ProgressBarType;
		NonBlocking: ProgressBarType;
		Blocking: ProgressBarType
	}

	declare class FormValidations extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: FormValidations;
		Widget: FormValidations;
		All: FormValidations
	}

	declare class EnumFormat extends instances$IEnum {
		qualifiedTsTypeName: string;
		Text: EnumFormat;
		Image: EnumFormat
	}

	declare class DateFormat extends instances$IEnum {
		qualifiedTsTypeName: string;
		Date: DateFormat;
		Time: DateFormat;
		DateTime: DateFormat;
		Custom: DateFormat
	}

	declare class EditableEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Always: EditableEnum;
		Never: EditableEnum;
		Conditional: EditableEnum
	}

	declare class UnitEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Weight: UnitEnum;
		Pixels: UnitEnum
	}

	declare class SortDirection extends instances$IEnum {
		qualifiedTsTypeName: string;
		Ascending: SortDirection;
		Descending: SortDirection
	}

	declare class RenderType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Button: RenderType;
		Link: RenderType
	}

	declare class ButtonStyle extends instances$IEnum {
		qualifiedTsTypeName: string;
		Default: ButtonStyle;
		Inverse: ButtonStyle;
		Primary: ButtonStyle;
		Info: ButtonStyle;
		Success: ButtonStyle;
		Warning: ButtonStyle;
		Danger: ButtonStyle
	}

	declare class AggregateFunction extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: AggregateFunction;
		Average: AggregateFunction;
		Maximum: AggregateFunction;
		Minimum: AggregateFunction;
		Sum: AggregateFunction;
		Count: AggregateFunction
	}

	declare class AlignmentEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Left: AlignmentEnum;
		Center: AlignmentEnum;
		Right: AlignmentEnum
	}

	declare class ClickTypeType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Single: ClickTypeType;
		Double: ClickTypeType
	}

	declare class ContainerWidth extends instances$IEnum {
		qualifiedTsTypeName: string;
		FullWidth: ContainerWidth;
		FixedWidth: ContainerWidth
	}

	declare class FileManagerType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Upload: FileManagerType;
		Download: FileManagerType;
		Both: FileManagerType
	}

	declare class GridSelectionMode extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: GridSelectionMode;
		Single: GridSelectionMode;
		SingleAndMaintain: GridSelectionMode;
		Multi: GridSelectionMode;
		SimpleMulti: GridSelectionMode
	}

	declare class GroupBoxCollapsible extends instances$IEnum {
		qualifiedTsTypeName: string;
		No: GroupBoxCollapsible;
		YesInitiallyExpanded: GroupBoxCollapsible;
		YesInitiallyCollapsed: GroupBoxCollapsible
	}

	declare class ImageSizeUnit extends instances$IEnum {
		qualifiedTsTypeName: string;
		Auto: ImageSizeUnit;
		Pixels: ImageSizeUnit;
		Percentage: ImageSizeUnit
	}

	declare class LayoutModeType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Headline: LayoutModeType;
		Sidebar: LayoutModeType
	}

	declare class LayoutType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Responsive: LayoutType;
		Tablet: LayoutType;
		Phone: LayoutType;
		ModalPopup: LayoutType;
		Popup: LayoutType;
		Legacy: LayoutType
	}

	declare class LinkType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Web: LinkType;
		Email: LinkType;
		Call: LinkType;
		Text: LinkType
	}

	declare class MobileFooterType extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: MobileFooterType;
		MenuBar: MobileFooterType;
		Custom: MobileFooterType
	}

	declare class NewButtonEditLocation extends instances$IEnum {
		qualifiedTsTypeName: string;
		InlineAtTop: NewButtonEditLocation;
		InlineAtBottom: NewButtonEditLocation;
		Form: NewButtonEditLocation
	}

	declare class ReferenceSelectorRenderModeType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Form: ReferenceSelectorRenderModeType;
		DropDown: ReferenceSelectorRenderModeType
	}

	declare class RenderModeType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Button: RenderModeType;
		Link: RenderModeType
	}

	declare class ScrollBehavior extends instances$IEnum {
		qualifiedTsTypeName: string;
		PerRegion: ScrollBehavior;
		FullWidget: ScrollBehavior
	}

	declare class SearchBarTypeEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: SearchBarTypeEnum;
		FoldableOpen: SearchBarTypeEnum;
		FoldableClosed: SearchBarTypeEnum;
		AlwaysOpen: SearchBarTypeEnum
	}

	declare class SearchFieldOperator extends instances$IEnum {
		qualifiedTsTypeName: string;
		Contains: SearchFieldOperator;
		StartsWith: SearchFieldOperator;
		Greater: SearchFieldOperator;
		GreaterOrEqual: SearchFieldOperator;
		Equal: SearchFieldOperator;
		NotEqual: SearchFieldOperator;
		SmallerOrEqual: SearchFieldOperator;
		Smaller: SearchFieldOperator
	}

	declare class SearchFieldType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Normal: SearchFieldType;
		Hidden: SearchFieldType;
		ReadOnly: SearchFieldType
	}

	declare class SelectionType extends instances$IEnum {
		qualifiedTsTypeName: string;
		SelectPage: SelectionType;
		SelectAll: SelectionType
	}

	declare class SidebarToggleMode extends instances$IEnum {
		qualifiedTsTypeName: string;
		PushContentAside: SidebarToggleMode;
		SlideOverContent: SidebarToggleMode;
		ShrinkContent: SidebarToggleMode
	}

	declare class SidebarToggleRegion extends instances$IEnum {
		qualifiedTsTypeName: string;
		Left: SidebarToggleRegion;
		Right: SidebarToggleRegion
	}

	declare class SimpleMenuBarOrientation extends instances$IEnum {
		qualifiedTsTypeName: string;
		Horizontal: SimpleMenuBarOrientation;
		Vertical: SimpleMenuBarOrientation
	}

	declare class SizeMode extends instances$IEnum {
		qualifiedTsTypeName: string;
		Auto: SizeMode;
		Pixels: SizeMode;
		Percentage: SizeMode
	}

	declare class TableCellRenderModeType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Default: TableCellRenderModeType;
		Header: TableCellRenderModeType;
		Title: TableCellRenderModeType
	}

	declare class TextRenderMode extends instances$IEnum {
		qualifiedTsTypeName: string;
		Text: TextRenderMode;
		Paragraph: TextRenderMode;
		H1: TextRenderMode;
		H2: TextRenderMode;
		H3: TextRenderMode;
		H4: TextRenderMode;
		H5: TextRenderMode;
		H6: TextRenderMode
	}

	
}

declare module 'customwidgets' {
		declare interface IWidget {
		load(): Widget,
		load(callback: (element: Widget) => void): any
	}

	declare interface ICustomWidget {
		load(): CustomWidget,
		load(callback: (element: CustomWidget) => void): any
	}

	declare interface ICustomWidgetType {
		container: ICustomWidget,
		load(): CustomWidgetType,
		load(callback: (element: CustomWidgetType) => void): any
	}

	declare interface IWidgetEnumerationValue {
		container: IWidgetValueType,
		load(): WidgetEnumerationValue,
		load(callback: (element: WidgetEnumerationValue) => void): any
	}

	declare interface IWidgetObject {
		load(): WidgetObject,
		load(callback: (element: WidgetObject) => void): any
	}

	declare interface IWidgetObjectType {
		load(): WidgetObjectType,
		load(callback: (element: WidgetObjectType) => void): any
	}

	declare interface IWidgetProperty {
		container: IWidgetObject,
		load(): WidgetProperty,
		load(callback: (element: WidgetProperty) => void): any
	}

	declare interface IWidgetPropertyType {
		container: IWidgetObjectType,
		load(): WidgetPropertyType,
		load(callback: (element: WidgetPropertyType) => void): any
	}

	declare interface IWidgetReturnType {
		container: IWidgetValueType,
		load(): WidgetReturnType,
		load(callback: (element: WidgetReturnType) => void): any
	}

	declare interface IWidgetTranslation {
		container: IWidgetValueType,
		load(): WidgetTranslation,
		load(callback: (element: WidgetTranslation) => void): any
	}

	declare interface IWidgetValue {
		container: IWidgetProperty,
		load(): WidgetValue,
		load(callback: (element: WidgetValue) => void): any
	}

	declare interface IWidgetValueType {
		container: IWidgetPropertyType,
		load(): WidgetValueType,
		load(callback: (element: WidgetValueType) => void): any
	}

		declare class Widget extends elements$Element, IWidget {
		typeName: string;
		name: string;
		class: string;
		style: string;
		tabIndex: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CustomWidget extends pages$Widget, ICustomWidget {
		typeName: string;
		type: CustomWidgetType;
		object: WidgetObject;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CustomWidgetType extends elements$Element, ICustomWidgetType {
		typeName: string;
		container: CustomWidget;
		widgetId: string;
		needsEntityContext: boolean;
		name: string;
		description: string;
		phoneGapEnabled: boolean;
		objectType: WidgetObjectType;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetEnumerationValue extends elements$Element, IWidgetEnumerationValue {
		typeName: string;
		container: WidgetValueType;
		key: string;
		caption: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetObject extends elements$Element, IWidgetObject {
		typeName: string;
		type: WidgetObjectType;
		properties: instances.IList<WidgetProperty>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetObjectType extends elements$Element, IWidgetObjectType {
		typeName: string;
		propertyTypes: instances.IList<WidgetPropertyType>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetProperty extends elements$Element, IWidgetProperty {
		typeName: string;
		container: WidgetObject;
		type: WidgetPropertyType;
		value: WidgetValue;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetPropertyType extends elements$Element, IWidgetPropertyType {
		typeName: string;
		container: WidgetObjectType;
		key: string;
		category: string;
		caption: string;
		description: string;
		isDefault: boolean;
		valueType: WidgetValueType;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetReturnType extends elements$Element, IWidgetReturnType {
		typeName: string;
		container: WidgetValueType;
		type: WidgetReturnTypeEnum;
		isList: boolean;
		entityProperty: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetTranslation extends elements$Element, IWidgetTranslation {
		typeName: string;
		container: WidgetValueType;
		languageCode: string;
		text: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetValue extends elements$Element, IWidgetValue {
		typeName: string;
		container: WidgetProperty;
		type: WidgetValueType;
		primitiveValue: string;
		entityPath: string;
		attributePath: string;
		page: pages.IPage;
		pageQualifiedName: string;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		image: images.IImage;
		imageQualifiedName: string;
		translatableValue: texts.Text;
		xPathConstraint: string;
		objects: instances.IList<WidgetObject>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class WidgetValueType extends elements$Element, IWidgetValueType {
		typeName: string;
		container: WidgetPropertyType;
		type: WidgetValueTypeEnum;
		isList: boolean;
		entityProperty: string;
		allowNonPersistableEntities: boolean;
		isPath: IsPath;
		pathType: PathType;
		parameterIsList: boolean;
		multiline: boolean;
		defaultValue: string;
		required: boolean;
		attributeTypes: instances.IList<CustomWidgetAttributeType>;
		enumerationValues: instances.IList<WidgetEnumerationValue>;
		objectType: WidgetObjectType;
		returnType: WidgetReturnType;
		translations: instances.IList<WidgetTranslation>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CustomWidgetAttributeType extends instances$IEnum {
		qualifiedTsTypeName: string;
		AutoNumber: CustomWidgetAttributeType;
		Binary: CustomWidgetAttributeType;
		Boolean: CustomWidgetAttributeType;
		Currency: CustomWidgetAttributeType;
		DateTime: CustomWidgetAttributeType;
		Enum: CustomWidgetAttributeType;
		Float: CustomWidgetAttributeType;
		HashString: CustomWidgetAttributeType;
		Integer: CustomWidgetAttributeType;
		Long: CustomWidgetAttributeType;
		String: CustomWidgetAttributeType;
		Decimal: CustomWidgetAttributeType
	}

	declare class IsPath extends instances$IEnum {
		qualifiedTsTypeName: string;
		No: IsPath;
		Optional: IsPath;
		Yes: IsPath
	}

	declare class PathType extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: PathType;
		Reference: PathType;
		ReferenceSet: PathType
	}

	declare class WidgetReturnTypeEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Void: WidgetReturnTypeEnum;
		Boolean: WidgetReturnTypeEnum;
		Integer: WidgetReturnTypeEnum;
		Float: WidgetReturnTypeEnum;
		DateTime: WidgetReturnTypeEnum;
		String: WidgetReturnTypeEnum;
		Object: WidgetReturnTypeEnum;
		Decimal: WidgetReturnTypeEnum
	}

	declare class WidgetValueTypeEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Attribute: WidgetValueTypeEnum;
		Boolean: WidgetValueTypeEnum;
		Entity: WidgetValueTypeEnum;
		EntityConstraint: WidgetValueTypeEnum;
		Enumeration: WidgetValueTypeEnum;
		Form: WidgetValueTypeEnum;
		Image: WidgetValueTypeEnum;
		Integer: WidgetValueTypeEnum;
		Microflow: WidgetValueTypeEnum;
		Object: WidgetValueTypeEnum;
		String: WidgetValueTypeEnum;
		TranslatableString: WidgetValueTypeEnum
	}

	
}

declare module 'documenttemplates' {
		declare interface IWidget {
		load(): Widget,
		load(callback: (element: Widget) => void): any
	}

	declare interface IAttributeWidget {
		load(): AttributeWidget,
		load(callback: (element: AttributeWidget) => void): any
	}

	declare interface IConditionSettings {
		container: IMxTableRow,
		load(): ConditionSettings,
		load(callback: (element: ConditionSettings) => void): any
	}

	declare interface IDataGridCell {
		container: IDataGridColumn,
		load(): DataGridCell,
		load(callback: (element: DataGridCell) => void): any
	}

	declare interface IDataGridColumn {
		container: IMxDataGrid,
		load(): DataGridColumn,
		load(callback: (element: DataGridColumn) => void): any
	}

	declare interface IDocGridSortBar {
		container: IMxGrid,
		load(): DocGridSortBar,
		load(callback: (element: DocGridSortBar) => void): any
	}

	declare interface IDocGridSortItem {
		container: IDocGridSortBar,
		load(): DocGridSortItem,
		load(callback: (element: DocGridSortItem) => void): any
	}

	declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IDocumentTemplate {
		container: projects.IFolderBase,
		load(): DocumentTemplate,
		load(callback: (element: DocumentTemplate) => void): any
	}

	declare interface IEntityWidget {
		load(): EntityWidget,
		load(callback: (element: EntityWidget) => void): any
	}

	declare interface IDynamicImageViewer {
		load(): DynamicImageViewer,
		load(callback: (element: DynamicImageViewer) => void): any
	}

	declare interface IMxGrid {
		load(): MxGrid,
		load(callback: (element: MxGrid) => void): any
	}

	declare interface IMxDataGrid {
		load(): MxDataGrid,
		load(callback: (element: MxDataGrid) => void): any
	}

	declare interface IMxDataView {
		load(): MxDataView,
		load(callback: (element: MxDataView) => void): any
	}

	declare interface IMxDataViewDropZone {
		container: IMxDataView,
		load(): MxDataViewDropZone,
		load(callback: (element: MxDataViewDropZone) => void): any
	}

	declare interface IMxDynamicLabel {
		load(): MxDynamicLabel,
		load(callback: (element: MxDynamicLabel) => void): any
	}

	declare interface IMxFooterDropZone {
		container: IDocumentTemplate,
		load(): MxFooterDropZone,
		load(callback: (element: MxFooterDropZone) => void): any
	}

	declare interface IMxHeaderDropZone {
		container: IDocumentTemplate,
		load(): MxHeaderDropZone,
		load(callback: (element: MxHeaderDropZone) => void): any
	}

	declare interface IMxLineBreak {
		load(): MxLineBreak,
		load(callback: (element: MxLineBreak) => void): any
	}

	declare interface IMxPageBreak {
		load(): MxPageBreak,
		load(callback: (element: MxPageBreak) => void): any
	}

	declare interface IMxStaticLabel {
		load(): MxStaticLabel,
		load(callback: (element: MxStaticLabel) => void): any
	}

	declare interface IMxStyle {
		load(): MxStyle,
		load(callback: (element: MxStyle) => void): any
	}

	declare interface IMxTable {
		load(): MxTable,
		load(callback: (element: MxTable) => void): any
	}

	declare interface IMxTableCell {
		container: IMxTableRow,
		load(): MxTableCell,
		load(callback: (element: MxTableCell) => void): any
	}

	declare interface IMxTableRow {
		container: IMxTable,
		load(): MxTableRow,
		load(callback: (element: MxTableRow) => void): any
	}

	declare interface IMxTemplateGrid {
		load(): MxTemplateGrid,
		load(callback: (element: MxTemplateGrid) => void): any
	}

	declare interface IMxTemplateGridDropZone {
		container: IMxTemplateGrid,
		load(): MxTemplateGridDropZone,
		load(callback: (element: MxTemplateGridDropZone) => void): any
	}

	declare interface IMxTitle {
		load(): MxTitle,
		load(callback: (element: MxTitle) => void): any
	}

	declare interface IStaticImageViewer {
		load(): StaticImageViewer,
		load(callback: (element: StaticImageViewer) => void): any
	}

		declare class Widget extends elements$Element, IWidget {
		typeName: string;
		name: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AttributeWidget extends Widget, IAttributeWidget {
		typeName: string;
		attributePath: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ConditionSettings extends elements$Element, IConditionSettings {
		typeName: string;
		container: MxTableRow;
		conditions: instances.IList<enumerations.Condition>;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataGridCell extends elements$Element, IDataGridCell {
		typeName: string;
		container: DataGridColumn;
		style: MxStyle;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataGridColumn extends elements$Element, IDataGridColumn {
		typeName: string;
		container: MxDataGrid;
		oddRowsCell: DataGridCell;
		evenRowsCell: DataGridCell;
		caption: texts.Text;
		formattingInfo: pages.FormattingInfo;
		style: MxStyle;
		attributePath: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DocGridSortBar extends elements$Element, IDocGridSortBar {
		typeName: string;
		container: MxGrid;
		sortItems: instances.IList<DocGridSortItem>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DocGridSortItem extends elements$Element, IDocGridSortItem {
		typeName: string;
		container: DocGridSortBar;
		attributePath: string;
		sortOrder: pages.SortDirection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DocumentTemplate extends projects$Document, IDocumentTemplate {
		typeName: string;
		container: projects.FolderBase;
		toplevels: instances.IList<Widget>;
		header: MxHeaderDropZone;
		footer: MxFooterDropZone;
		style: MxStyle;
		canvasWidth: number;
		pageWidth: string;
		pageHeight: string;
		pPI: number;
		marginLeftInInch: number;
		marginRightInInch: number;
		marginTopInInch: number;
		marginBottomInInch: number;
		showHeaderAndFooterOnFirstPage: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class EntityWidget extends Widget, IEntityWidget {
		typeName: string;
		entityPath: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DynamicImageViewer extends EntityWidget, IDynamicImageViewer {
		typeName: string;
		image: images.IImage;
		imageQualifiedName: string;
		useThumbnail: boolean;
		width: number;
		height: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxGrid extends EntityWidget, IMxGrid {
		typeName: string;
		style: MxStyle;
		sortBar: DocGridSortBar;
		cellSpacing: number;
		cellPadding: number;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxDataGrid extends MxGrid, IMxDataGrid {
		typeName: string;
		columns: instances.IList<DataGridColumn>;
		weights: instances.IList<number>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxDataView extends EntityWidget, IMxDataView {
		typeName: string;
		contents: MxDataViewDropZone;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxDataViewDropZone extends elements$Element, IMxDataViewDropZone {
		typeName: string;
		container: MxDataView;
		widget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxDynamicLabel extends AttributeWidget, IMxDynamicLabel {
		typeName: string;
		style: MxStyle;
		formattingInfo: pages.FormattingInfo;
		renderXHTML: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxFooterDropZone extends elements$Element, IMxFooterDropZone {
		typeName: string;
		container: DocumentTemplate;
		widget: Widget;
		bottomMargin: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxHeaderDropZone extends elements$Element, IMxHeaderDropZone {
		typeName: string;
		container: DocumentTemplate;
		widget: Widget;
		topMargin: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxLineBreak extends Widget, IMxLineBreak {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxPageBreak extends Widget, IMxPageBreak {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxStaticLabel extends Widget, IMxStaticLabel {
		typeName: string;
		caption: texts.Text;
		style: MxStyle;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxStyle extends elements$Element, IMxStyle {
		typeName: string;
		fontFamily: FontFamily;
		fontSize: number;
		bold: boolean;
		italic: boolean;
		fontColor: string;
		backgroundColor: string;
		overrideFontFamily: boolean;
		overrideFontSize: boolean;
		overrideBold: boolean;
		overrideItalic: boolean;
		overrideFontColor: boolean;
		overrideBackgroundColor: boolean;
		textAlign: TextAlign;
		customStyles: string;
		borderStyleTop: BorderStyle;
		borderStyleBottom: BorderStyle;
		borderStyleLeft: BorderStyle;
		borderStyleRight: BorderStyle;
		borderWidthTop: number;
		borderWidthBottom: number;
		borderWidthLeft: number;
		borderWidthRight: number;
		borderColorTop: string;
		borderColorBottom: string;
		borderColorLeft: string;
		borderColorRight: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxTable extends Widget, IMxTable {
		typeName: string;
		rows: instances.IList<MxTableRow>;
		style: MxStyle;
		columnWeights: instances.IList<number>;
		cellSpacing: number;
		cellPadding: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxTableCell extends elements$Element, IMxTableCell {
		typeName: string;
		container: MxTableRow;
		style: MxStyle;
		widget: Widget;
		colSpan: number;
		rowSpan: number;
		isPartOfSpan: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxTableRow extends elements$Element, IMxTableRow {
		typeName: string;
		container: MxTable;
		cells: instances.IList<MxTableCell>;
		conditionSettings: ConditionSettings;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxTemplateGrid extends MxGrid, IMxTemplateGrid {
		typeName: string;
		oddRowsDropZone: MxTemplateGridDropZone;
		evenRowsDropZone: MxTemplateGridDropZone;
		numberOfColumns: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxTemplateGridDropZone extends elements$Element, IMxTemplateGridDropZone {
		typeName: string;
		container: MxTemplateGrid;
		widget: Widget;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MxTitle extends Widget, IMxTitle {
		typeName: string;
		caption: texts.Text;
		style: MxStyle;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class StaticImageViewer extends Widget, IStaticImageViewer {
		typeName: string;
		image: images.IImage;
		imageQualifiedName: string;
		width: number;
		height: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class BorderStyle extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: BorderStyle;
		Dotted: BorderStyle;
		Dashed: BorderStyle;
		Solid: BorderStyle
	}

	declare class FontFamily extends instances$IEnum {
		qualifiedTsTypeName: string;
		Courier: FontFamily;
		Tahoma: FontFamily;
		Times: FontFamily;
		Helvetica: FontFamily;
		Arial: FontFamily
	}

	declare class TextAlign extends instances$IEnum {
		qualifiedTsTypeName: string;
		Left: TextAlign;
		Right: TextAlign;
		Center: TextAlign
	}

	
}

declare module 'navigation' {
		declare interface IProjectDocument {
		container: projects.IProject,
		load(): ProjectDocument,
		load(callback: (element: ProjectDocument) => void): any
	}

	declare interface INavigationDocument {
		container: projects.IProject,
		load(): NavigationDocument,
		load(callback: (element: NavigationDocument) => void): any
	}

	declare interface INavigationProfile {
		container: INavigationDocument,
		load(): NavigationProfile,
		load(callback: (element: NavigationProfile) => void): any
	}

	declare interface IHomePageBase {
		container: INavigationProfile,
		load(): HomePageBase,
		load(callback: (element: HomePageBase) => void): any
	}

	declare interface IHomePage {
		container: INavigationProfile,
		load(): HomePage,
		load(callback: (element: HomePage) => void): any
	}

	declare interface IRoleBasedHomePage {
		container: INavigationProfile,
		load(): RoleBasedHomePage,
		load(callback: (element: RoleBasedHomePage) => void): any
	}

		declare class ProjectDocument extends units$ModelUnit, IProjectDocument {
		typeName: string;
		container: projects.Project;
		constructor(container: projects.IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class NavigationDocument extends projects$ProjectDocument, INavigationDocument {
		typeName: string;
		container: projects.Project;
		phoneProfile: NavigationProfile;
		tabletProfile: NavigationProfile;
		desktopProfile: NavigationProfile;
		constructor(container: projects.IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NavigationProfile extends elements$Element, INavigationProfile {
		typeName: string;
		container: NavigationDocument;
		type: DeviceType;
		enabled: boolean;
		homePage: HomePage;
		roleBasedHomePages: instances.IList<RoleBasedHomePage>;
		applicationTitle: string;
		menuItemCollection: menus.MenuItemCollection;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class HomePageBase extends elements$Element, IHomePageBase {
		typeName: string;
		container: NavigationProfile;
		page: pages.IPage;
		pageQualifiedName: string;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class HomePage extends HomePageBase, IHomePage {
		typeName: string;
		container: NavigationProfile;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RoleBasedHomePage extends HomePageBase, IRoleBasedHomePage {
		typeName: string;
		container: NavigationProfile;
		userRole: security.IUserRole;
		userRoleQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DeviceType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Desktop: DeviceType;
		Tablet: DeviceType;
		Phone: DeviceType
	}

	
}

declare module 'reports' {
		declare interface IWidget {
		load(): Widget,
		load(callback: (element: Widget) => void): any
	}

	declare interface IReportWidget {
		load(): ReportWidget,
		load(callback: (element: ReportWidget) => void): any
	}

	declare interface IBasicReport {
		load(): BasicReport,
		load(callback: (element: BasicReport) => void): any
	}

	declare interface IBasicReportAggregate {
		container: IBasicReport,
		load(): BasicReportAggregate,
		load(callback: (element: BasicReportAggregate) => void): any
	}

	declare interface IBasicReportColumn {
		container: IBasicReport,
		load(): BasicReportColumn,
		load(callback: (element: BasicReportColumn) => void): any
	}

	declare interface IReportButton {
		load(): ReportButton,
		load(callback: (element: ReportButton) => void): any
	}

	declare interface IReportChart {
		load(): ReportChart,
		load(callback: (element: ReportChart) => void): any
	}

	declare interface IReportChartSeries {
		container: IReportChart,
		load(): ReportChartSeries,
		load(callback: (element: ReportChartSeries) => void): any
	}

	declare interface IReportDateRangeField {
		container: IReportDateRangeSelector,
		load(): ReportDateRangeField,
		load(callback: (element: ReportDateRangeField) => void): any
	}

	declare interface IReportParameter {
		load(): ReportParameter,
		load(callback: (element: ReportParameter) => void): any
	}

	declare interface IReportDateRangeSelector {
		load(): ReportDateRangeSelector,
		load(callback: (element: ReportDateRangeSelector) => void): any
	}

	declare interface IReportDropDown {
		load(): ReportDropDown,
		load(callback: (element: ReportDropDown) => void): any
	}

	declare interface IReportPane {
		load(): ReportPane,
		load(callback: (element: ReportPane) => void): any
	}

	declare interface IReportZoomInfo {
		container: IBasicReport,
		load(): ReportZoomInfo,
		load(callback: (element: ReportZoomInfo) => void): any
	}

	declare interface IReportZoomMapping {
		container: IReportZoomInfo,
		load(): ReportZoomMapping,
		load(callback: (element: ReportZoomMapping) => void): any
	}

		declare class Widget extends elements$Element, IWidget {
		typeName: string;
		name: string;
		class: string;
		style: string;
		tabIndex: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportWidget extends pages$Widget, IReportWidget {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class BasicReport extends ReportWidget, IBasicReport {
		typeName: string;
		dataSet: datasets.IDataSet;
		dataSetQualifiedName: string;
		columns: instances.IList<BasicReportColumn>;
		aggregates: instances.IList<BasicReportAggregate>;
		showExportButton: boolean;
		zoomInfo: ReportZoomInfo;
		isPagingEnabled: boolean;
		pageSize: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class BasicReportAggregate extends elements$Element, IBasicReportAggregate {
		typeName: string;
		container: BasicReport;
		caption: texts.Text;
		aggregateFunction: AggregateFunctionEnum;
		applicablePerColumn: instances.IList<boolean>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class BasicReportColumn extends elements$Element, IBasicReportColumn {
		typeName: string;
		container: BasicReport;
		caption: texts.Text;
		dataSetColumnName: string;
		width: number;
		alignment: pages.AlignmentEnum;
		format: ColumnFormat;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportButton extends pages$Widget, IReportButton {
		typeName: string;
		caption: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportChart extends pages$Widget, IReportChart {
		typeName: string;
		dataSet: datasets.IDataSet;
		dataSetQualifiedName: string;
		type: ChartType;
		seriess: instances.IList<ReportChartSeries>;
		xAxisCaption: texts.Text;
		yAxisCaption: texts.Text;
		xAxisColumn: string;
		xAxisFormat: ColumnFormat;
		yAxisPrecision: number;
		yAxisUseMinMax: boolean;
		yAxisMinimum: number;
		yAxisMaximum: number;
		aspectRatio: AspectRatio;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportChartSeries extends elements$Element, IReportChartSeries {
		typeName: string;
		container: ReportChart;
		caption: texts.Text;
		dataSetColumn: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportDateRangeField extends elements$Element, IReportDateRangeField {
		typeName: string;
		container: ReportDateRangeSelector;
		caption: texts.Text;
		type: DateRangeFieldEnum;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportParameter extends pages$Widget, IReportParameter {
		typeName: string;
		parameterName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportDateRangeSelector extends ReportParameter, IReportDateRangeSelector {
		typeName: string;
		fields: instances.IList<ReportDateRangeField>;
		minYear: number;
		maxYear: number;
		fieldsPerRow: number;
		showFromToRange: boolean;
		fromCaption: texts.Text;
		toCaption: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportDropDown extends ReportParameter, IReportDropDown {
		typeName: string;
		attribute: domainmodels.IAttribute;
		attributeQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportPane extends pages$Widget, IReportPane {
		typeName: string;
		parameterWidget: pages.Widget;
		reportWidget: pages.Widget;
		generateOnLoad: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportZoomInfo extends elements$Element, IReportZoomInfo {
		typeName: string;
		container: BasicReport;
		targetPage: pages.IPage;
		targetPageQualifiedName: string;
		mappings: instances.IList<ReportZoomMapping>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ReportZoomMapping extends elements$Element, IReportZoomMapping {
		typeName: string;
		container: ReportZoomInfo;
		targetParameterName: string;
		sourceReportColumnName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AggregateFunctionEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Sum: AggregateFunctionEnum;
		Average: AggregateFunctionEnum;
		Count: AggregateFunctionEnum;
		Minimum: AggregateFunctionEnum;
		Maximum: AggregateFunctionEnum
	}

	declare class ColumnFormat extends instances$IEnum {
		qualifiedTsTypeName: string;
		Default: ColumnFormat;
		MonthName: ColumnFormat;
		WeekdayName: ColumnFormat
	}

	declare class ChartType extends instances$IEnum {
		qualifiedTsTypeName: string;
		VerticalBars: ChartType;
		VerticalBars3D: ChartType;
		HorizontalBars: ChartType;
		Lines: ChartType;
		Area: ChartType
	}

	declare class AspectRatio extends instances$IEnum {
		qualifiedTsTypeName: string;
		SixteenToNine: AspectRatio;
		ThreeToTwo: AspectRatio;
		FourToThree: AspectRatio;
		OneToOne: AspectRatio;
		ThreeToFour: AspectRatio;
		TwoToThree: AspectRatio;
		NineToSixteen: AspectRatio
	}

	declare class DateRangeFieldEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		Year: DateRangeFieldEnum;
		Month: DateRangeFieldEnum;
		Week: DateRangeFieldEnum;
		Period: DateRangeFieldEnum;
		Quarter: DateRangeFieldEnum
	}

	
}

declare module 'menus' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IMenuDocument {
		container: projects.IFolderBase,
		load(): MenuDocument,
		load(callback: (element: MenuDocument) => void): any
	}

	declare interface IMenuItemContainer {
		load(): MenuItemContainer,
		load(callback: (element: MenuItemContainer) => void): any
	}

	declare interface IMenuItemCollection {
		load(): MenuItemCollection,
		load(callback: (element: MenuItemCollection) => void): any
	}

	declare interface IMenuItem {
		container: IMenuItemContainer,
		load(): MenuItem,
		load(callback: (element: MenuItem) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MenuDocument extends projects$Document, IMenuDocument {
		typeName: string;
		container: projects.FolderBase;
		itemCollection: MenuItemCollection;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MenuItemContainer extends elements$Element, IMenuItemContainer {
		typeName: string;
		items: instances.IList<MenuItem>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MenuItemCollection extends MenuItemContainer, IMenuItemCollection {
		typeName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MenuItem extends MenuItemContainer, IMenuItem {
		typeName: string;
		container: MenuItemContainer;
		caption: texts.Text;
		icon: pages.Icon;
		action: pages.ClientAction;
		documentation: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'datasets' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IDataSet {
		container: projects.IFolderBase,
		load(): DataSet,
		load(callback: (element: DataSet) => void): any,
		parameters: instances.IList<IDataSetParameter>
	}

	declare interface IDataSetAccess {
		container: IDataSet,
		load(): DataSetAccess,
		load(callback: (element: DataSetAccess) => void): any
	}

	declare interface IDataSetColumn {
		container: IJavaDataSetSource,
		load(): DataSetColumn,
		load(callback: (element: DataSetColumn) => void): any
	}

	declare interface IDataSetConstraintAccess {
		container: IDataSetParameterAccess,
		load(): DataSetConstraintAccess,
		load(callback: (element: DataSetConstraintAccess) => void): any
	}

	declare interface IDataSetParameterConstraint {
		container: IDataSetParameter,
		load(): DataSetParameterConstraint,
		load(callback: (element: DataSetParameterConstraint) => void): any
	}

	declare interface IDataSetDateTimeConstraint {
		container: IDataSetParameter,
		load(): DataSetDateTimeConstraint,
		load(callback: (element: DataSetDateTimeConstraint) => void): any
	}

	declare interface IDataSetModuleRoleAccess {
		container: IDataSetAccess,
		load(): DataSetModuleRoleAccess,
		load(callback: (element: DataSetModuleRoleAccess) => void): any
	}

	declare interface IDataSetNumericConstraint {
		container: IDataSetParameter,
		load(): DataSetNumericConstraint,
		load(callback: (element: DataSetNumericConstraint) => void): any
	}

	declare interface IDataSetObjectConstraint {
		container: IDataSetParameter,
		load(): DataSetObjectConstraint,
		load(callback: (element: DataSetObjectConstraint) => void): any
	}

	declare interface IDataSetParameter {
		container: IDataSet,
		load(): DataSetParameter,
		load(callback: (element: DataSetParameter) => void): any,
		name: string
	}

	declare interface IDataSetParameterAccess {
		container: IDataSetModuleRoleAccess,
		load(): DataSetParameterAccess,
		load(callback: (element: DataSetParameterAccess) => void): any
	}

	declare interface IDataSetSource {
		container: IDataSet,
		load(): DataSetSource,
		load(callback: (element: DataSetSource) => void): any
	}

	declare interface IJavaDataSetSource {
		container: IDataSet,
		load(): JavaDataSetSource,
		load(callback: (element: JavaDataSetSource) => void): any
	}

	declare interface IOqlDataSetSource {
		container: IDataSet,
		load(): OqlDataSetSource,
		load(callback: (element: OqlDataSetSource) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSet extends projects$Document, IDataSet {
		typeName: string;
		container: projects.FolderBase;
		source: DataSetSource;
		parameters: instances.IList<DataSetParameter>;
		dataSetAccess: DataSetAccess;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetAccess extends elements$Element, IDataSetAccess {
		typeName: string;
		container: DataSet;
		moduleRoleAccessList: instances.IList<DataSetModuleRoleAccess>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetColumn extends elements$Element, IDataSetColumn {
		typeName: string;
		container: JavaDataSetSource;
		name: string;
		type: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetConstraintAccess extends elements$Element, IDataSetConstraintAccess {
		typeName: string;
		container: DataSetParameterAccess;
		constraintText: string;
		enabled: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetParameterConstraint extends elements$Element, IDataSetParameterConstraint {
		typeName: string;
		container: DataSetParameter;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class DataSetDateTimeConstraint extends DataSetParameterConstraint, IDataSetDateTimeConstraint {
		typeName: string;
		container: DataSetParameter;
		modifier: DateTimeIntervalModifier;
		length: DateTimeIntervalLength;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetModuleRoleAccess extends elements$Element, IDataSetModuleRoleAccess {
		typeName: string;
		container: DataSetAccess;
		parameterAccessList: instances.IList<DataSetParameterAccess>;
		moduleRole: security.IModuleRole;
		moduleRoleQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetNumericConstraint extends DataSetParameterConstraint, IDataSetNumericConstraint {
		typeName: string;
		container: DataSetParameter;
		begin: string;
		applyBegin: boolean;
		end: string;
		applyEnd: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetObjectConstraint extends DataSetParameterConstraint, IDataSetObjectConstraint {
		typeName: string;
		container: DataSetParameter;
		name: string;
		constraint: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetParameter extends elements$Element, IDataSetParameter {
		typeName: string;
		container: DataSet;
		constraints: instances.IList<DataSetParameterConstraint>;
		name: string;
		type: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetParameterAccess extends elements$Element, IDataSetParameterAccess {
		typeName: string;
		container: DataSetModuleRoleAccess;
		constraintAccessList: instances.IList<DataSetConstraintAccess>;
		parameterName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DataSetSource extends elements$Element, IDataSetSource {
		typeName: string;
		container: DataSet;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class JavaDataSetSource extends DataSetSource, IJavaDataSetSource {
		typeName: string;
		container: DataSet;
		columns: instances.IList<DataSetColumn>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class OqlDataSetSource extends DataSetSource, IOqlDataSetSource {
		typeName: string;
		container: DataSet;
		query: string;
		ignoreErrorsInQuery: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DateTimeIntervalLength extends instances$IEnum {
		qualifiedTsTypeName: string;
		Day: DateTimeIntervalLength;
		Week: DateTimeIntervalLength;
		Period: DateTimeIntervalLength;
		Month: DateTimeIntervalLength;
		Quarter: DateTimeIntervalLength;
		Year: DateTimeIntervalLength
	}

	declare class DateTimeIntervalModifier extends instances$IEnum {
		qualifiedTsTypeName: string;
		Last: DateTimeIntervalModifier;
		This: DateTimeIntervalModifier;
		Next: DateTimeIntervalModifier;
		Past: DateTimeIntervalModifier;
		Future: DateTimeIntervalModifier;
		Always: DateTimeIntervalModifier
	}

	
}

declare module 'texts' {
		declare interface IText {
		load(): Text,
		load(callback: (element: Text) => void): any
	}

	declare interface ITranslation {
		container: IText,
		load(): Translation,
		load(callback: (element: Translation) => void): any
	}

	declare interface ILanguage {
		container: settings.IProjectSettings,
		load(): Language,
		load(callback: (element: Language) => void): any
	}

	declare interface ISystemText {
		container: ISystemTextCollection,
		load(): SystemText,
		load(callback: (element: SystemText) => void): any
	}

	declare interface IProjectDocument {
		container: projects.IProject,
		load(): ProjectDocument,
		load(callback: (element: ProjectDocument) => void): any
	}

	declare interface ISystemTextCollection {
		container: projects.IProject,
		load(): SystemTextCollection,
		load(callback: (element: SystemTextCollection) => void): any
	}

		declare class Text extends elements$Element, IText {
		typeName: string;
		translations: instances.IList<Translation>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Translation extends elements$Element, ITranslation {
		typeName: string;
		container: Text;
		languageCode: string;
		text: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Language extends elements$Element, ILanguage {
		typeName: string;
		container: settings.ProjectSettings;
		code: string;
		checkCompleteness: boolean;
		customDateFormat: string;
		customTimeFormat: string;
		customDateTimeFormat: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class SystemText extends elements$Element, ISystemText {
		typeName: string;
		container: SystemTextCollection;
		text: Text;
		key: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ProjectDocument extends units$ModelUnit, IProjectDocument {
		typeName: string;
		container: projects.Project;
		constructor(container: projects.IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class SystemTextCollection extends projects$ProjectDocument, ISystemTextCollection {
		typeName: string;
		container: projects.Project;
		systemTexts: instances.IList<SystemText>;
		constructor(container: projects.IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'javaactions' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IJavaAction {
		container: projects.IFolderBase,
		load(): JavaAction,
		load(callback: (element: JavaAction) => void): any,
		parameters: instances.IList<IJavaActionParameter>,
		returnType: string
	}

	declare interface IJavaActionParameter {
		container: IJavaAction,
		load(): JavaActionParameter,
		load(callback: (element: JavaActionParameter) => void): any,
		name: string,
		type: string
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class JavaAction extends projects$Document, IJavaAction {
		typeName: string;
		container: projects.FolderBase;
		parameters: instances.IList<JavaActionParameter>;
		returnType: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class JavaActionParameter extends elements$Element, IJavaActionParameter {
		typeName: string;
		container: JavaAction;
		name: string;
		type: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'constants' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IConstant {
		container: projects.IFolderBase,
		load(): Constant,
		load(callback: (element: Constant) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Constant extends projects$Document, IConstant {
		typeName: string;
		container: projects.FolderBase;
		dataType: string;
		defaultValue: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'scheduledevents' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IScheduledEvent {
		container: projects.IFolderBase,
		load(): ScheduledEvent,
		load(callback: (element: ScheduledEvent) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ScheduledEvent extends projects$Document, IScheduledEvent {
		typeName: string;
		container: projects.FolderBase;
		startDateTime: string;
		timeZone: TimeZoneEnum;
		interval: number;
		intervalType: IntervalType;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		enabled: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class IntervalType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Second: IntervalType;
		Minute: IntervalType;
		Hour: IntervalType;
		Day: IntervalType;
		Week: IntervalType;
		Month: IntervalType;
		Year: IntervalType
	}

	declare class TimeZoneEnum extends instances$IEnum {
		qualifiedTsTypeName: string;
		UTC: TimeZoneEnum;
		Server: TimeZoneEnum
	}

	
}

declare module 'regularexpressions' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IRegularExpression {
		container: projects.IFolderBase,
		load(): RegularExpression,
		load(callback: (element: RegularExpression) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RegularExpression extends projects$Document, IRegularExpression {
		typeName: string;
		container: projects.FolderBase;
		regEx: string;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'images' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IImageCollection {
		container: projects.IFolderBase,
		load(): ImageCollection,
		load(callback: (element: ImageCollection) => void): any,
		images: instances.IList<IImage>
	}

	declare interface IImage {
		container: IImageCollection,
		load(): Image,
		load(callback: (element: Image) => void): any,
		name: string
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImageCollection extends projects$Document, IImageCollection {
		typeName: string;
		container: projects.FolderBase;
		images: instances.IList<Image>;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Image extends elements$Element, IImage {
		typeName: string;
		container: ImageCollection;
		name: string;
		imageData: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'security' {
		declare interface IAccessRuleContainerBase {
		container: IProjectSecurity,
		load(): AccessRuleContainerBase,
		load(callback: (element: AccessRuleContainerBase) => void): any
	}

	declare interface IDemoUser {
		container: IProjectSecurity,
		load(): DemoUser,
		load(callback: (element: DemoUser) => void): any
	}

	declare interface IFileDocumentAccessRuleContainer {
		container: IProjectSecurity,
		load(): FileDocumentAccessRuleContainer,
		load(callback: (element: FileDocumentAccessRuleContainer) => void): any
	}

	declare interface IImageAccessRuleContainer {
		container: IProjectSecurity,
		load(): ImageAccessRuleContainer,
		load(callback: (element: ImageAccessRuleContainer) => void): any
	}

	declare interface IModuleRole {
		container: IModuleSecurity,
		load(): ModuleRole,
		load(callback: (element: ModuleRole) => void): any,
		name: string
	}

	declare interface IModuleSecurity {
		container: projects.IModule,
		load(): ModuleSecurity,
		load(callback: (element: ModuleSecurity) => void): any,
		moduleRoles: instances.IList<IModuleRole>
	}

	declare interface IPasswordPolicySettings {
		container: IProjectSecurity,
		load(): PasswordPolicySettings,
		load(callback: (element: PasswordPolicySettings) => void): any
	}

	declare interface IProjectDocument {
		container: projects.IProject,
		load(): ProjectDocument,
		load(callback: (element: ProjectDocument) => void): any
	}

	declare interface IProjectSecurity {
		container: projects.IProject,
		load(): ProjectSecurity,
		load(callback: (element: ProjectSecurity) => void): any,
		userRoles: instances.IList<IUserRole>
	}

	declare interface IUserRole {
		container: IProjectSecurity,
		load(): UserRole,
		load(callback: (element: UserRole) => void): any,
		name: string
	}

		declare class AccessRuleContainerBase extends elements$Element, IAccessRuleContainerBase {
		typeName: string;
		container: ProjectSecurity;
		accessRules: instances.IList<domainmodels.AccessRule>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class DemoUser extends elements$Element, IDemoUser {
		typeName: string;
		container: ProjectSecurity;
		userName: string;
		password: string;
		entity: domainmodels.IEntity;
		entityQualifiedName: string;
		userRoleIds: instances.IList<IUserRole>;
		userRoleIdsQualifiedNames: string[];
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class FileDocumentAccessRuleContainer extends AccessRuleContainerBase, IFileDocumentAccessRuleContainer {
		typeName: string;
		container: ProjectSecurity;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ImageAccessRuleContainer extends AccessRuleContainerBase, IImageAccessRuleContainer {
		typeName: string;
		container: ProjectSecurity;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ModuleRole extends elements$Element, IModuleRole {
		typeName: string;
		container: ModuleSecurity;
		name: string;
		description: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ModuleSecurity extends units$ModelUnit, IModuleSecurity {
		typeName: string;
		container: projects.Module;
		moduleRoles: instances.IList<ModuleRole>;
		constructor(container: projects.IModule): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class PasswordPolicySettings extends elements$Element, IPasswordPolicySettings {
		typeName: string;
		container: ProjectSecurity;
		minimumLength: number;
		requireMixedCase: boolean;
		requireSymbol: boolean;
		requireDigit: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ProjectDocument extends units$ModelUnit, IProjectDocument {
		typeName: string;
		container: projects.Project;
		constructor(container: projects.IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class ProjectSecurity extends projects$ProjectDocument, IProjectSecurity {
		typeName: string;
		container: projects.Project;
		fileDocumentAccess: FileDocumentAccessRuleContainer;
		imageAccess: ImageAccessRuleContainer;
		passwordPolicySettings: PasswordPolicySettings;
		userRoles: instances.IList<UserRole>;
		demoUsers: instances.IList<DemoUser>;
		securityLevel: projects.SecurityLevel;
		checkSecurity: boolean;
		adminUserName: string;
		adminPassword: string;
		adminUserRoleName: string;
		enableDemoUsers: boolean;
		enableGuestAccess: boolean;
		guestUserRoleName: string;
		signInMicroflow: microflows.IMicroflow;
		signInMicroflowQualifiedName: string;
		constructor(container: projects.IProject): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class UserRole extends elements$Element, IUserRole {
		typeName: string;
		container: ProjectSecurity;
		guid: string;
		name: string;
		description: string;
		moduleRoleIds: instances.IList<IModuleRole>;
		moduleRoleIdsQualifiedNames: string[];
		manageAllRoles: boolean;
		manageableRoleIds: instances.IList<IUserRole>;
		manageableRoleIdsQualifiedNames: string[];
		manageUsersWithoutRoles: boolean;
		checkSecurity: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'domainmodels' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDomainModel {
		container: projects.IModule,
		load(): DomainModel,
		load(callback: (element: DomainModel) => void): any,
		entities: instances.IList<IEntity>,
		associations: instances.IList<IAssociation>,
		crossAssociations: instances.IList<ICrossAssociation>
	}

	declare interface IEntity {
		container: IDomainModel,
		load(): Entity,
		load(callback: (element: Entity) => void): any,
		name: string,
		generalization: IGeneralizationBase,
		attributes: instances.IList<IAttribute>
	}

	declare interface IGeneralizationBase {
		container: IEntity,
		load(): GeneralizationBase,
		load(callback: (element: GeneralizationBase) => void): any
	}

	declare interface IGeneralization {
		container: IEntity,
		load(): Generalization,
		load(callback: (element: Generalization) => void): any,
		generalization: IEntity,
		generalizationQualifiedName: string
	}

	declare interface INoGeneralization {
		container: IEntity,
		load(): NoGeneralization,
		load(callback: (element: NoGeneralization) => void): any,
		persistable: boolean
	}

	declare interface IAttribute {
		container: IEntity,
		load(): Attribute,
		load(callback: (element: Attribute) => void): any,
		name: string,
		type: IAttributeType
	}

	declare interface IValueType {
		container: IAttribute,
		load(): ValueType,
		load(callback: (element: ValueType) => void): any
	}

	declare interface IStoredValue {
		container: IAttribute,
		load(): StoredValue,
		load(callback: (element: StoredValue) => void): any
	}

	declare interface ICalculatedValue {
		container: IAttribute,
		load(): CalculatedValue,
		load(callback: (element: CalculatedValue) => void): any
	}

	declare interface IAttributeType {
		container: IAttribute,
		load(): AttributeType,
		load(callback: (element: AttributeType) => void): any
	}

	declare interface IBinaryAttributeType {
		container: IAttribute,
		load(): BinaryAttributeType,
		load(callback: (element: BinaryAttributeType) => void): any
	}

	declare interface IBooleanAttributeType {
		container: IAttribute,
		load(): BooleanAttributeType,
		load(callback: (element: BooleanAttributeType) => void): any
	}

	declare interface IDateTimeAttributeType {
		container: IAttribute,
		load(): DateTimeAttributeType,
		load(callback: (element: DateTimeAttributeType) => void): any
	}

	declare interface IEnumerationAttributeType {
		container: IAttribute,
		load(): EnumerationAttributeType,
		load(callback: (element: EnumerationAttributeType) => void): any,
		enumeration: enumerations.IEnumeration,
		enumerationQualifiedName: string
	}

	declare interface IHashedStringAttributeType {
		container: IAttribute,
		load(): HashedStringAttributeType,
		load(callback: (element: HashedStringAttributeType) => void): any
	}

	declare interface IStringAttributeType {
		container: IAttribute,
		load(): StringAttributeType,
		load(callback: (element: StringAttributeType) => void): any
	}

	declare interface INumericAttributeTypeBase {
		container: IAttribute,
		load(): NumericAttributeTypeBase,
		load(callback: (element: NumericAttributeTypeBase) => void): any
	}

	declare interface IDecimalAttributeTypeBase {
		container: IAttribute,
		load(): DecimalAttributeTypeBase,
		load(callback: (element: DecimalAttributeTypeBase) => void): any
	}

	declare interface IDecimalAttributeType {
		container: IAttribute,
		load(): DecimalAttributeType,
		load(callback: (element: DecimalAttributeType) => void): any
	}

	declare interface IFloatAttributeTypeBase {
		container: IAttribute,
		load(): FloatAttributeTypeBase,
		load(callback: (element: FloatAttributeTypeBase) => void): any
	}

	declare interface IFloatAttributeType {
		container: IAttribute,
		load(): FloatAttributeType,
		load(callback: (element: FloatAttributeType) => void): any
	}

	declare interface ICurrencyAttributeType {
		container: IAttribute,
		load(): CurrencyAttributeType,
		load(callback: (element: CurrencyAttributeType) => void): any
	}

	declare interface IIntegerAttributeTypeBase {
		container: IAttribute,
		load(): IntegerAttributeTypeBase,
		load(callback: (element: IntegerAttributeTypeBase) => void): any
	}

	declare interface IIntegerAttributeType {
		container: IAttribute,
		load(): IntegerAttributeType,
		load(callback: (element: IntegerAttributeType) => void): any
	}

	declare interface ILongAttributeType {
		container: IAttribute,
		load(): LongAttributeType,
		load(callback: (element: LongAttributeType) => void): any
	}

	declare interface IAutoNumberAttributeType {
		container: IAttribute,
		load(): AutoNumberAttributeType,
		load(callback: (element: AutoNumberAttributeType) => void): any
	}

	declare interface IAssociationBase {
		container: IDomainModel,
		load(): AssociationBase,
		load(callback: (element: AssociationBase) => void): any,
		name: string,
		type: AssociationType,
		owner: AssociationOwner,
		parent: IEntity
	}

	declare interface IAssociation {
		container: IDomainModel,
		load(): Association,
		load(callback: (element: Association) => void): any,
		child: IEntity
	}

	declare interface ICrossAssociation {
		container: IDomainModel,
		load(): CrossAssociation,
		load(callback: (element: CrossAssociation) => void): any,
		child: IEntity,
		childQualifiedName: string
	}

	declare interface IAssociationDeleteBehavior {
		container: IAssociationBase,
		load(): AssociationDeleteBehavior,
		load(callback: (element: AssociationDeleteBehavior) => void): any
	}

	declare interface IAnnotation {
		container: IDomainModel,
		load(): Annotation,
		load(callback: (element: Annotation) => void): any
	}

	declare interface IAccessRule {
		load(): AccessRule,
		load(callback: (element: AccessRule) => void): any
	}

	declare interface IMemberAccess {
		container: IAccessRule,
		load(): MemberAccess,
		load(callback: (element: MemberAccess) => void): any
	}

	declare interface IEventHandler {
		container: IEntity,
		load(): EventHandler,
		load(callback: (element: EventHandler) => void): any
	}

	declare interface IIndex {
		container: IEntity,
		load(): Index,
		load(callback: (element: Index) => void): any
	}

	declare interface IIndexedAttribute {
		container: IIndex,
		load(): IndexedAttribute,
		load(callback: (element: IndexedAttribute) => void): any
	}

	declare interface IValidationRule {
		container: IEntity,
		load(): ValidationRule,
		load(callback: (element: ValidationRule) => void): any
	}

	declare interface IRuleInfo {
		container: IValidationRule,
		load(): RuleInfo,
		load(callback: (element: RuleInfo) => void): any
	}

	declare interface IEqualsToRuleInfo {
		container: IValidationRule,
		load(): EqualsToRuleInfo,
		load(callback: (element: EqualsToRuleInfo) => void): any
	}

	declare interface IMaxLengthRuleInfo {
		container: IValidationRule,
		load(): MaxLengthRuleInfo,
		load(callback: (element: MaxLengthRuleInfo) => void): any
	}

	declare interface IRangeRuleInfo {
		container: IValidationRule,
		load(): RangeRuleInfo,
		load(callback: (element: RangeRuleInfo) => void): any
	}

	declare interface IRegExRuleInfo {
		container: IValidationRule,
		load(): RegExRuleInfo,
		load(callback: (element: RegExRuleInfo) => void): any
	}

	declare interface IRequiredRuleInfo {
		container: IValidationRule,
		load(): RequiredRuleInfo,
		load(callback: (element: RequiredRuleInfo) => void): any
	}

	declare interface IUniqueRuleInfo {
		container: IValidationRule,
		load(): UniqueRuleInfo,
		load(callback: (element: UniqueRuleInfo) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class DomainModel extends projects$ModuleDocument, IDomainModel {
		typeName: string;
		container: projects.Module;
		documentation: string;
		entities: instances.IList<Entity>;
		annotations: instances.IList<Annotation>;
		associations: instances.IList<Association>;
		crossAssociations: instances.IList<CrossAssociation>;
		constructor(container: projects.IModule): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Entity extends elements$Element, IEntity {
		typeName: string;
		container: DomainModel;
		name: string;
		dataStorageGuid: string;
		location: common.IPoint;
		documentation: string;
		generalization: GeneralizationBase;
		attributes: instances.IList<Attribute>;
		validationRules: instances.IList<ValidationRule>;
		eventHandlers: instances.IList<EventHandler>;
		indexes: instances.IList<Index>;
		accessRules: instances.IList<AccessRule>;
		image: images.IImage;
		imageQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class GeneralizationBase extends elements$Element, IGeneralizationBase {
		typeName: string;
		container: Entity;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Generalization extends GeneralizationBase, IGeneralization {
		typeName: string;
		container: Entity;
		generalization: IEntity;
		generalizationQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NoGeneralization extends GeneralizationBase, INoGeneralization {
		typeName: string;
		container: Entity;
		hasChangedDate: boolean;
		hasCreatedDate: boolean;
		hasOwner: boolean;
		hasChangedBy: boolean;
		persistable: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Attribute extends elements$Element, IAttribute {
		typeName: string;
		container: Entity;
		name: string;
		dataStorageGuid: string;
		type: AttributeType;
		documentation: string;
		value: ValueType;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ValueType extends elements$Element, IValueType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class StoredValue extends ValueType, IStoredValue {
		typeName: string;
		container: Attribute;
		defaultValue: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CalculatedValue extends ValueType, ICalculatedValue {
		typeName: string;
		container: Attribute;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		passEntity: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AttributeType extends elements$Element, IAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class BinaryAttributeType extends AttributeType, IBinaryAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class BooleanAttributeType extends AttributeType, IBooleanAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class DateTimeAttributeType extends AttributeType, IDateTimeAttributeType {
		typeName: string;
		container: Attribute;
		localizeDate: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class EnumerationAttributeType extends AttributeType, IEnumerationAttributeType {
		typeName: string;
		container: Attribute;
		enumeration: enumerations.IEnumeration;
		enumerationQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class HashedStringAttributeType extends AttributeType, IHashedStringAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class StringAttributeType extends AttributeType, IStringAttributeType {
		typeName: string;
		container: Attribute;
		length: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class NumericAttributeTypeBase extends AttributeType, INumericAttributeTypeBase {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class DecimalAttributeTypeBase extends NumericAttributeTypeBase, IDecimalAttributeTypeBase {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class DecimalAttributeType extends DecimalAttributeTypeBase, IDecimalAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class FloatAttributeTypeBase extends DecimalAttributeTypeBase, IFloatAttributeTypeBase {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class FloatAttributeType extends FloatAttributeTypeBase, IFloatAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class CurrencyAttributeType extends FloatAttributeTypeBase, ICurrencyAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class IntegerAttributeTypeBase extends NumericAttributeTypeBase, IIntegerAttributeTypeBase {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class IntegerAttributeType extends IntegerAttributeTypeBase, IIntegerAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class LongAttributeType extends IntegerAttributeTypeBase, ILongAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class AutoNumberAttributeType extends IntegerAttributeTypeBase, IAutoNumberAttributeType {
		typeName: string;
		container: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class AssociationBase extends elements$Element, IAssociationBase {
		typeName: string;
		container: DomainModel;
		name: string;
		dataStorageGuid: string;
		type: AssociationType;
		owner: AssociationOwner;
		deleteBehavior: AssociationDeleteBehavior;
		parent: Entity;
		documentation: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Association extends AssociationBase, IAssociation {
		typeName: string;
		container: DomainModel;
		child: Entity;
		parentConnection: common.IPoint;
		childConnection: common.IPoint;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class CrossAssociation extends AssociationBase, ICrossAssociation {
		typeName: string;
		container: DomainModel;
		child: IEntity;
		childQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AssociationDeleteBehavior extends elements$Element, IAssociationDeleteBehavior {
		typeName: string;
		container: AssociationBase;
		parentDeleteBehavior: DeletingBehavior;
		childDeleteBehavior: DeletingBehavior;
		parentErrorMessage: texts.Text;
		childErrorMessage: texts.Text;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Annotation extends elements$Element, IAnnotation {
		typeName: string;
		container: DomainModel;
		caption: string;
		location: common.IPoint;
		width: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class AccessRule extends elements$Element, IAccessRule {
		typeName: string;
		memberAccesses: instances.IList<MemberAccess>;
		moduleRoles: instances.IList<security.IModuleRole>;
		moduleRolesQualifiedNames: string[];
		documentation: string;
		allowCreate: boolean;
		allowDelete: boolean;
		defaultMemberAccessRights: MemberAccessRights;
		xPathConstraint: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MemberAccess extends elements$Element, IMemberAccess {
		typeName: string;
		container: AccessRule;
		attribute: IAttribute;
		attributeQualifiedName: string;
		association: IAssociationBase;
		associationQualifiedName: string;
		accessRights: MemberAccessRights;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class EventHandler extends elements$Element, IEventHandler {
		typeName: string;
		container: Entity;
		moment: ActionMoment;
		event: EventType;
		microflow: microflows.IMicroflow;
		microflowQualifiedName: string;
		raiseErrorOnFalse: boolean;
		passEventObject: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Index extends elements$Element, IIndex {
		typeName: string;
		container: Entity;
		dataStorageGuid: string;
		attributes: instances.IList<IndexedAttribute>;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class IndexedAttribute extends elements$Element, IIndexedAttribute {
		typeName: string;
		container: Index;
		type: IndexedAttributeType;
		attribute: Attribute;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class ValidationRule extends elements$Element, IValidationRule {
		typeName: string;
		container: Entity;
		attribute: IAttribute;
		attributeQualifiedName: string;
		errorMessage: texts.Text;
		ruleInfo: RuleInfo;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RuleInfo extends elements$Element, IRuleInfo {
		typeName: string;
		container: ValidationRule;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class EqualsToRuleInfo extends RuleInfo, IEqualsToRuleInfo {
		typeName: string;
		container: ValidationRule;
		useValue: boolean;
		equalsToValue: string;
		equalsToAttribute: IAttribute;
		equalsToAttributeQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class MaxLengthRuleInfo extends RuleInfo, IMaxLengthRuleInfo {
		typeName: string;
		container: ValidationRule;
		maxLength: number;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RangeRuleInfo extends RuleInfo, IRangeRuleInfo {
		typeName: string;
		container: ValidationRule;
		typeOfRange: RangeType;
		useMinValue: boolean;
		useMaxValue: boolean;
		minValue: string;
		maxValue: string;
		minAttribute: IAttribute;
		minAttributeQualifiedName: string;
		maxAttribute: IAttribute;
		maxAttributeQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RegExRuleInfo extends RuleInfo, IRegExRuleInfo {
		typeName: string;
		container: ValidationRule;
		regularExpression: regularexpressions.IRegularExpression;
		regularExpressionQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class RequiredRuleInfo extends RuleInfo, IRequiredRuleInfo {
		typeName: string;
		container: ValidationRule;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class UniqueRuleInfo extends RuleInfo, IUniqueRuleInfo {
		typeName: string;
		container: ValidationRule;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class AssociationType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Reference: AssociationType;
		ReferenceSet: AssociationType
	}

	declare class AssociationOwner extends instances$IEnum {
		qualifiedTsTypeName: string;
		Default: AssociationOwner;
		Both: AssociationOwner
	}

	declare class DeletingBehavior extends instances$IEnum {
		qualifiedTsTypeName: string;
		DeleteMeAndReferences: DeletingBehavior;
		DeleteMeButKeepReferences: DeletingBehavior;
		DeleteMeIfNoReferences: DeletingBehavior
	}

	declare class MemberAccessRights extends instances$IEnum {
		qualifiedTsTypeName: string;
		None: MemberAccessRights;
		ReadOnly: MemberAccessRights;
		ReadWrite: MemberAccessRights
	}

	declare class ActionMoment extends instances$IEnum {
		qualifiedTsTypeName: string;
		Before: ActionMoment;
		After: ActionMoment
	}

	declare class EventType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Create: EventType;
		Commit: EventType;
		Delete: EventType;
		RollBack: EventType
	}

	declare class IndexedAttributeType extends instances$IEnum {
		qualifiedTsTypeName: string;
		Normal: IndexedAttributeType;
		CreatedDate: IndexedAttributeType;
		ChangedDate: IndexedAttributeType
	}

	declare class RangeType extends instances$IEnum {
		qualifiedTsTypeName: string;
		GreaterThanOrEqualTo: RangeType;
		SmallerThanOrEqualTo: RangeType;
		Between: RangeType
	}

	
}

declare module 'enumerations' {
		declare interface IModuleDocument {
		container: projects.IFolderBase,
		load(): ModuleDocument,
		load(callback: (element: ModuleDocument) => void): any
	}

	declare interface IDocument {
		container: projects.IFolderBase,
		load(): Document,
		load(callback: (element: Document) => void): any,
		name: string
	}

	declare interface IEnumeration {
		container: projects.IFolderBase,
		load(): Enumeration,
		load(callback: (element: Enumeration) => void): any,
		values: instances.IList<IEnumerationValue>
	}

	declare interface IEnumerationValue {
		container: IEnumeration,
		load(): EnumerationValue,
		load(callback: (element: EnumerationValue) => void): any,
		name: string
	}

	declare interface ICondition {
		load(): Condition,
		load(callback: (element: Condition) => void): any
	}

		declare class ModuleDocument extends units$ModelUnit, IModuleDocument {
		typeName: string;
		container: projects.FolderBase;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): Object
	}

	declare class Document extends projects$ModuleDocument, IDocument {
		typeName: string;
		container: projects.FolderBase;
		name: string;
		documentation: string;
		excluded: boolean;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Enumeration extends projects$Document, IEnumeration {
		typeName: string;
		container: projects.FolderBase;
		values: instances.IList<EnumerationValue>;
		constructor(container: projects.IFolderBase): this;
		constructor(isCreatingNewInstance: boolean, model: model.Model, container: units.StructuralUnit, json: transport.IAbstractUnitJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class EnumerationValue extends elements$Element, IEnumerationValue {
		typeName: string;
		container: Enumeration;
		name: string;
		caption: texts.Text;
		image: images.IImage;
		imageQualifiedName: string;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	declare class Condition extends elements$Element, ICondition {
		typeName: string;
		attributeValue: string;
		editableVisible: boolean;
		constructor(): this;
		constructor(isCreatingNewInstance: boolean, unit: units.ModelUnit, container: elements.AbstractElement, json: transport.IAbstractElementJson, isPartial: boolean): this;
		toPlainJson(): any
	}

	
}

declare module 'model' {
		declare interface IBaseModel {
		allMicroflows(): microflows.IMicroflow[],
		allMicroflowBases(): microflows.IMicroflowBase[],
		allRules(): microflows.IRule[],
		allImportedWebServices(): webservices.IImportedWebService[],
		allPublishedAppServices(): webservices.IPublishedAppService[],
		allPublishedServiceBases(): webservices.IPublishedServiceBase[],
		allPublishedWebServices(): webservices.IPublishedWebService[],
		allMxXmlSchemas(): xmlschemas.IMxXmlSchema[],
		allConsumedAppServices(): appservices.IConsumedAppService[],
		allMappingDocuments(): mappings.IMappingDocument[],
		allExportMappings(): exportmappings.IExportMapping[],
		allImportMappings(): importmappings.IImportMapping[],
		allPublishedOdataServices(): rest.IPublishedOdataService[],
		allPublishedRestServices(): rest.IPublishedRestService[],
		allPublishedRestServiceBases(): rest.IPublishedRestServiceBase[],
		allFormBases(): pages.IFormBase[],
		allPages(): pages.IPage[],
		allLayouts(): pages.ILayout[],
		allSnippets(): pages.ISnippet[],
		allDocumentTemplates(): documenttemplates.IDocumentTemplate[],
		allNavigationDocuments(): navigation.INavigationDocument[],
		allMenuDocuments(): menus.IMenuDocument[],
		allDataSets(): datasets.IDataSet[],
		allSystemTextCollections(): texts.ISystemTextCollection[],
		allJavaActions(): javaactions.IJavaAction[],
		allProjects(): projects.IProject[],
		allProjectDocuments(): projects.IProjectDocument[],
		allFolderBases(): projects.IFolderBase[],
		allFolders(): projects.IFolder[],
		allModules(): projects.IModule[],
		allModuleDocuments(): projects.IModuleDocument[],
		allDocuments(): projects.IDocument[],
		allProjectConversions(): projects.IProjectConversion[],
		allConstants(): constants.IConstant[],
		allProjectSettings(): settings.IProjectSettings[],
		allScheduledEvents(): scheduledevents.IScheduledEvent[],
		allRegularExpressions(): regularexpressions.IRegularExpression[],
		allImageCollections(): images.IImageCollection[],
		allModuleSecurities(): security.IModuleSecurity[],
		allProjectSecurities(): security.IProjectSecurity[],
		allDomainModels(): domainmodels.IDomainModel[],
		allEnumerations(): enumerations.IEnumeration[]
	}

	declare interface IByNameReferenceResolver {
		findLayoutByQualifiedName(qname: string): pages.ILayout,
		findAppServiceActionParameterByQualifiedName(qname: string): appservices.IAppServiceActionParameter,
		findImportMappingByQualifiedName(qname: string): importmappings.IImportMapping,
		findJavaActionByQualifiedName(qname: string): javaactions.IJavaAction,
		findMicroflowByQualifiedName(qname: string): microflows.IMicroflow,
		findSnippetByQualifiedName(qname: string): pages.ISnippet,
		findMenuDocumentByQualifiedName(qname: string): menus.IMenuDocument,
		findRuleParameterByQualifiedName(qname: string): microflows.IRuleParameter,
		findLayoutParameterByQualifiedName(qname: string): pages.ILayoutParameter,
		findMicroflowParameterByQualifiedName(qname: string): microflows.IMicroflowParameter,
		findPageByQualifiedName(qname: string): pages.IPage,
		findMxXmlSchemaByQualifiedName(qname: string): xmlschemas.IMxXmlSchema,
		findAssociationBaseByQualifiedName(qname: string): domainmodels.IAssociationBase,
		findAppServiceActionByQualifiedName(qname: string): appservices.IAppServiceAction,
		findExportMappingByQualifiedName(qname: string): exportmappings.IExportMapping,
		findUserRoleByQualifiedName(qname: string): security.IUserRole,
		findRegularExpressionByQualifiedName(qname: string): regularexpressions.IRegularExpression,
		findAttributeByQualifiedName(qname: string): domainmodels.IAttribute,
		findEntityByQualifiedName(qname: string): domainmodels.IEntity,
		findModuleRoleByQualifiedName(qname: string): security.IModuleRole,
		findImportedWebServiceByQualifiedName(qname: string): webservices.IImportedWebService,
		findDocumentTemplateByQualifiedName(qname: string): documenttemplates.IDocumentTemplate,
		findRuleByQualifiedName(qname: string): microflows.IRule,
		findDataSetByQualifiedName(qname: string): datasets.IDataSet,
		findConstantByQualifiedName(qname: string): constants.IConstant,
		findImageByQualifiedName(qname: string): images.IImage,
		findJavaActionParameterByQualifiedName(qname: string): javaactions.IJavaActionParameter,
		findEnumerationByQualifiedName(qname: string): enumerations.IEnumeration
	}

	declare interface IUnitsCache {
		[id: string]: units.IAbstractUnit
	}

		declare class BaseModel  {
		allMicroflows(): microflows.IMicroflow[];
		allMicroflowBases(): microflows.IMicroflowBase[];
		allRules(): microflows.IRule[];
		allImportedWebServices(): webservices.IImportedWebService[];
		allPublishedAppServices(): webservices.IPublishedAppService[];
		allPublishedServiceBases(): webservices.IPublishedServiceBase[];
		allPublishedWebServices(): webservices.IPublishedWebService[];
		allMxXmlSchemas(): xmlschemas.IMxXmlSchema[];
		allConsumedAppServices(): appservices.IConsumedAppService[];
		allMappingDocuments(): mappings.IMappingDocument[];
		allExportMappings(): exportmappings.IExportMapping[];
		allImportMappings(): importmappings.IImportMapping[];
		allPublishedOdataServices(): rest.IPublishedOdataService[];
		allPublishedRestServices(): rest.IPublishedRestService[];
		allPublishedRestServiceBases(): rest.IPublishedRestServiceBase[];
		allFormBases(): pages.IFormBase[];
		allPages(): pages.IPage[];
		allLayouts(): pages.ILayout[];
		allSnippets(): pages.ISnippet[];
		allDocumentTemplates(): documenttemplates.IDocumentTemplate[];
		allNavigationDocuments(): navigation.INavigationDocument[];
		allMenuDocuments(): menus.IMenuDocument[];
		allDataSets(): datasets.IDataSet[];
		allSystemTextCollections(): texts.ISystemTextCollection[];
		allJavaActions(): javaactions.IJavaAction[];
		allProjects(): projects.IProject[];
		allProjectDocuments(): projects.IProjectDocument[];
		allFolderBases(): projects.IFolderBase[];
		allFolders(): projects.IFolder[];
		allModules(): projects.IModule[];
		allModuleDocuments(): projects.IModuleDocument[];
		allDocuments(): projects.IDocument[];
		allProjectConversions(): projects.IProjectConversion[];
		allConstants(): constants.IConstant[];
		allProjectSettings(): settings.IProjectSettings[];
		allScheduledEvents(): scheduledevents.IScheduledEvent[];
		allRegularExpressions(): regularexpressions.IRegularExpression[];
		allImageCollections(): images.IImageCollection[];
		allModuleSecurities(): security.IModuleSecurity[];
		allProjectSecurities(): security.IProjectSecurity[];
		allDomainModels(): domainmodels.IDomainModel[];
		allEnumerations(): enumerations.IEnumeration[]
	}

	declare class Model extends BaseModel, IModel {
		metadata: transport.IWorkingCopy;
		constructor(_client: modelapiclient.IModelApiClient, _errorHandler: common.IErrorCallback, _connectionConfig: configuration.ISdkConfig): this;
		closeConnection(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
		create(
		client: modelapiclient.IModelApiClient, workingCopyInfo: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback
	): void;
		read(
		client: modelapiclient.IModelApiClient, workingCopyId: string, callback: (model: IModel) => void, errorCallback: common.IErrorCallback, connectionConfig: configuration.ISdkConfig
	): void;
		id: string;
		root: projects.IProject;
		fetchUnitById<T>(
		id: string, callback: common.ICallback<T>, errorCallback?: common.IErrorCallback
	): void;
		deleteWorkingCopy(callback: common.IVoidCallback, errorCallback?: common.IErrorCallback): void;
		exportMpk(
		outFilePath: string, callback: common.IVoidCallback, errorCallback?: common.IErrorCallback
	): void;
		findModuleByQualifiedName(name: string): projects.IModule;
		findLayoutByQualifiedName(qname: string): pages.ILayout;
		findJavaActionByQualifiedName(qname: string): javaactions.IJavaAction;
		findMicroflowByQualifiedName(qname: string): microflows.IMicroflow;
		findSnippetByQualifiedName(qname: string): pages.ISnippet;
		findMenuDocumentByQualifiedName(qname: string): menus.IMenuDocument;
		findLayoutParameterByQualifiedName(qname: string): pages.ILayoutParameter;
		findMicroflowParameterByQualifiedName(qname: string): microflows.IMicroflowParameter;
		findRuleParameterByQualifiedName(qname: string): microflows.IRuleParameter;
		findPageByQualifiedName(qname: string): pages.IPage;
		findAssociationBaseByQualifiedName(qname: string): domainmodels.IAssociationBase;
		findEntityByQualifiedName(qname: string): domainmodels.IEntity;
		findAttributeByQualifiedName(qname: string): domainmodels.IAttribute;
		findAppServiceActionByQualifiedName(qname: string): appservices.IAppServiceAction;
		findAppServiceActionParameterByQualifiedName(qname: string): appservices.IAppServiceActionParameter;
		findMxXmlSchemaByQualifiedName(qname: string): xmlschemas.IMxXmlSchema;
		findExportMappingByQualifiedName(qname: string): exportmappings.IExportMapping;
		findImportMappingByQualifiedName(qname: string): importmappings.IImportMapping;
		findUserRoleByQualifiedName(qname: string): security.IUserRole;
		findRegularExpressionByQualifiedName(qname: string): regularexpressions.IRegularExpression;
		findModuleRoleByQualifiedName(qname: string): security.IModuleRole;
		findImportedWebServiceByQualifiedName(qname: string): webservices.IImportedWebService;
		findDocumentTemplateByQualifiedName(qname: string): documenttemplates.IDocumentTemplate;
		findRuleByQualifiedName(qname: string): microflows.IRule;
		findDataSetByQualifiedName(qname: string): datasets.IDataSet;
		findConstantByQualifiedName(qname: string): constants.IConstant;
		findImageByQualifiedName(qname: string): images.IImage;
		findJavaActionParameterByQualifiedName(qname: string): javaactions.IJavaActionParameter;
		findEnumerationByQualifiedName(qname: string): enumerations.IEnumeration
	}

	
}

declare module 'deltas' {
				declare class DeltaRequest  {
		delta: transport.IDelta;
		onSuccess: common.IVoidCallback;
		onFailure: common.IErrorCallback;
		constructor(delta: transport.IDelta, onSuccess?: common.IVoidCallback, onFailure?: common.IErrorCallback): this
	}

	declare class DeltaQueue  {
		isClosing: boolean;
		constructor(model: model.Model, logToConsole?: boolean): this;
		closeConnection(callback: common.IVoidCallback, errorCallback: common.IErrorCallback): void;
		push(delta: DeltaRequest): void
	}

	
}

declare module 'modelapiclient' {
		declare interface IModelApiClient {
		createWorkingCopy(
		workingCopyInfo: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback
	): any,
		loadUnitInterfaces(
		workingCopyId: string, callback: common.ICallback<transport.IAbstractUnitJson[]>, errorCallback: common.IErrorCallback
	): any,
		loadWorkingCopyMetaData(
		workingCopyId: string, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback
	): any,
		deleteWorkingCopy(
		workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): any,
		grantAccess(
		workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): any,
		revokeAccess(
		workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): any,
		checkAccess(
		workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback
	): any,
		exportMpk(
		workingCopyId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): any,
		fetchUnitById<T>(
		workingCopyId: string, unitId: string, callback: common.ICallback<transport.IAbstractUnitJson>, errorCallback: common.IErrorCallback
	): any,
		sendDeltas(
		workingCopyId: string, deltas: transport.IDelta[], callback: common.ICallback<Object>, errorCallback: common.IErrorCallback
	): any
	}

		declare class ModelApiClientImpl extends IModelApiClient {
		constructor(transportation: transportation.ITransportation): this;
		createWorkingCopy(
		workingCopyInfo: configuration.ICreateWorkingCopyParameters, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback
	): void;
		loadWorkingCopyMetaData(
		workingCopyId: string, callback: common.ICallback<transport.IWorkingCopy>, errorCallback: common.IErrorCallback
	): void;
		loadUnitInterfaces(
		workingCopyId: string, callback: common.ICallback<transport.IAbstractUnitJson[]>, errorCallback: common.IErrorCallback
	): void;
		deleteWorkingCopy(
		workingCopyId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): void;
		grantAccess(
		workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): void;
		revokeAccess(
		workingCopyId: string, memberOpenId: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): void;
		checkAccess(
		workingCopyId: string, memberOpenId: string, callback: common.ICallback<boolean>, errorCallback: common.IErrorCallback
	): void;
		exportMpk(
		workingCopyId: string, outFilePath: string, callback: common.IVoidCallback, errorCallback: common.IErrorCallback
	): void;
		fetchUnitById<T>(
		workingCopyId: string, unitId: string, callback: common.ICallback<transport.IAbstractUnitJson>, errorCallback: common.IErrorCallback
	): void;
		sendDeltas(
		workingCopyId: string, deltas: transport.IDelta[], callback: common.ICallback<Object>, errorCallback: common.IErrorCallback
	): void
	}

	
}

declare module 'configuration' {
		declare interface IBackendCredentials {
		username: string,
		password: string,
		openid?: string
	}

	declare interface ISdkCredentials {
		username: string,
		apikey: string
	}

	declare interface ISdkConfig {
		credentials?: IBackendCredentials | ISdkCredentials,
		endPoint?: string,
		transportation?: internal.transportation.ITransportation,
		client?: sdk.internal.modelapiclient.IModelApiClient
	}

	declare interface ICreateWorkingCopyParameters {
		name: string,
		description?: string,
		avatarUrl?: string,
		template: string
	}

	declare function assertBackendAccess(config: ISdkConfig): void

	declare function checkWorkingCopyId(workingCopyId: string): void

	declare function checkCallbacks(callback: Function, errorCallback: Function): void

		
}

declare module 'extras' {
			declare function serializeToJs(unit: internal.units.AbstractUnit): string

	declare class JavaScriptSerialiser  {
		constructor(unit: internal.units.IAbstractUnit, unitVarName: string): this;
		schedule(structure: internal.structures.IStructure): void;
		source(): string
	}

	
}

declare module 'transportation' {
		declare interface ITransportation {
		request<T>(
		method: string, url: string, data: Object, success: common.ICallback<T>, failure: common.IErrorCallback
	): any,
		requestMultipartBinaryFileUpload<T>(
		method: string, url: string, data: Object, filename: string, success: common.ICallback<T>, failure: common.IErrorCallback
	): any,
		requestFileDownload<T>(
		method: string, url: string, success: common.ICallback<T>, failure: common.IErrorCallback
	): any
	}

		declare class RestTransportation extends ITransportation {
		constructor(config: configuration.ISdkConfig): this;
		request<T>(
		method: string, url: string, data: Object, success: common.ICallback<T>, failure: common.IErrorCallback
	): void;
		requestMultipartBinaryFileUpload<T>(
		method: string, url: string, data: Object, filename: string, success: common.ICallback<T>, failure: common.IErrorCallback
	): void;
		requestFileDownload<T>(
		method: string, url: string, success: common.ICallback<T>, failure: common.IErrorCallback
	): void
	}

	
}
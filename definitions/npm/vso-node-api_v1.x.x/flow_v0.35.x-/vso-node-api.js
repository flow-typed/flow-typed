

declare module 'vso-node-api' {
					
}

declare module 'vso-node-api/Serialization' {
		declare export interface ContractEnumMetadata {
		enumValues?: {
		[name: string]: number
	}
	}

	declare export interface SerializationData {
		requestTypeMetadata?: ContractMetadata,
		responseTypeMetadata?: ContractMetadata,
		responseIsCollection: boolean
	}

	declare export interface ContractFieldMetadata {
		isArray?: boolean,
		isDate?: boolean,
		enumType?: ContractEnumMetadata,
		typeInfo?: ContractMetadata,
		isDictionary?: boolean,
		dictionaryKeyIsDate?: boolean,
		dictionaryValueIsDate?: boolean,
		dictionaryKeyEnumType?: ContractEnumMetadata,
		dictionaryValueEnumType?: ContractEnumMetadata,
		dictionaryValueTypeInfo?: ContractMetadata,
		dictionaryValueFieldInfo?: ContractFieldMetadata
	}

	declare export interface ContractMetadata {
		fields?: {
		[fieldName: string]: ContractFieldMetadata
	}
	}

	declare export interface IWebApiArrayResult {
		count: number,
		value: any[]
	}

			
}

declare module 'ContractSerializer' {
			declare function serialize(data: any, contractMetadata: ContractMetadata, preserveOriginal?: boolean): any

	declare function deserialize(
		data: any, contractMetadata: ContractMetadata, preserveOriginal?: boolean, unwrapWrappedCollections?: boolean
	): any

		
}

declare module 'vso-node-api/interfaces/common/VsoBaseInterfaces' {
		declare export interface ApiResourceLocation {
		area: string,
		id: string,
		maxVersion: string,
		minVersion: string,
		releasedVersion: string,
		resourceName: string,
		resourceVersion: number,
		routeTemplate: string
	}

	declare export interface IBasicCredentials {
		username: string,
		password: string
	}

	declare export interface IRequestHandler {
		prepareRequest(options: any): void
	}

	declare export interface IHttpResponse {
		statusCode?: number,
		headers: any
	}

	declare export interface IQCoreApi {
		connect(): Q.Promise<void>
	}

	declare export interface IHttpClient {
		get(
		verb: string, requestUrl: string, headers: any, onResult: (err: any, res: IHttpResponse, contents: string) => void
	): void,
		send(
		verb: string, requestUrl: string, objs: any, headers: any, onResult: (err: any, res: IHttpResponse, contents: string) => void
	): void,
		sendFile(
		verb: string, requestUrl: string, content: NodeJS.ReadableStream, headers: any, onResult: (err: any, res: IHttpResponse, contents: string) => void
	): void,
		getStream(
		requestUrl: string, apiVersion: string, headers: any, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		makeAcceptHeader(type: string, apiVersion: string): string,
		request(
		protocol: any, options: any, body: any, onResult: (err: any, res: IHttpResponse, contents: string) => void
	): void
	}

	declare export interface IRestClient {
		baseUrl: string,
		httpClient: IHttpClient,
		getJson(
		relativeUrl: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		getJsonWrappedArray(
		relativeUrl: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		options(
		requestUrl: string, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		create(
		relativeUrl: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		createJsonWrappedArray(
		relativeUrl: string, apiVersion: string, resources: any[], serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		update(
		relativeUrl: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		updateJsonWrappedArray(
		relativeUrl: string, apiVersion: string, resources: any[], serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		uploadFile(
		verb: string, relativeUrl: string, apiVersion: string, filePath: string, customHeaders: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		uploadStream(
		verb: string, relativeUrl: string, apiVersion: string, contentStream: NodeJS.ReadableStream, customHeaders: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		replace(
		relativeUrl: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void
	}

			
}

declare module 'vso-node-api/HttpClient' {
				declare export class HttpClient extends ifm$IHttpClient {
		userAgent: string;
		handlers: ifm.IRequestHandler[];
		socketTimeout: number;
		constructor(userAgent: string, handlers?: ifm.IRequestHandler[], socketTimeout?: number): this;
		get(
		verb: string, requestUrl: string, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void
	): void;
		send(
		verb: string, requestUrl: string, objs: any, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void
	): void;
		sendFile(
		verb: string, requestUrl: string, content: NodeJS.ReadableStream, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void
	): void;
		getStream(
		requestUrl: string, apiVersion: string, type: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		makeAcceptHeader(type: string, apiVersion: string): string;
		_getOptions(method: string, requestUrl: string, headers: any): any;
		request(
		protocol: any, options: any, objs: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void
	): void
	}

	
}

declare module 'vso-node-api/RestClient' {
			declare export function processResponse(
		url: any, res: any, contents: any, serializationData: Serialization.SerializationData, onResult: any
	): void

	declare export function enumToString(enumType: any, enumValue: number, camelCase: boolean): any

	declare export class RestClient extends ifm$IRestClient {
		baseUrl: string;
		basePath: string;
		httpClient: ifm.IHttpClient;
		constructor(httpClient: ifm.IHttpClient): this;
		getJson(
		url: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		getJsonWrappedArray(
		url: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		options(url: string, onResult: (err: any, statusCode: number, obj: any) => void): void;
		delete(
		url: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		create(
		url: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		createJsonWrappedArray(
		url: string, apiVersion: string, resources: any[], serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, resources: any[]) => void
	): void;
		update(
		url: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		updateJsonWrappedArray(
		url: string, apiVersion: string, resources: any[], serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, resources: any[]) => void
	): void;
		uploadFile(
		verb: string, url: string, apiVersion: string, filePath: string, customHeaders: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		uploadStream(
		verb: string, url: string, apiVersion: string, contentStream: NodeJS.ReadableStream, customHeaders: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		replace(
		url: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		_sendWrappedJson(
		verb: string, url: string, apiVersion: string, resources: any[], serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, resources: any[]) => void
	): void;
		_getJson(
		verb: string, url: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		_sendJson(
		verb: string, url: string, apiVersion: string, data: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void
	): void
	}

	
}

declare module 'vso-node-api/VsoClient' {
		declare export interface ClientVersioningData {
		apiVersion?: string,
		requestUrl?: string
	}

		declare export class InvalidApiResourceVersionError extends Error {
		name: string;
		message: string;
		constructor(message?: string): this
	}

	declare export class VsoClient  {
		restClient: ifm.IRestClient;
		baseUrl: string;
		basePath: string;
		constructor(baseUrl: string, restClient: restm.RestClient): this;
		getVersioningData(
		apiVersion: string, area: string, locationId: string, routeValues: any, queryParams?: any
	): Q.Promise<ClientVersioningData>;
		_setInitializationPromise(promise: Q.Promise<any>): void;
		_beginGetLocation(area: string, locationId: string): Q.Promise<ifm.ApiResourceLocation>;
		resolveUrl(relativeUrl: string): string;
		_issueOptionsRequest(
		requestUrl: string, onResult: (err: any, statusCode: number, locationsResult: any) => void
	): void;
		getRequestUrl(
		routeTemplate: string, area: string, resource: string, routeValues: any, queryParams?: any
	): string;
		_getLinkResponseHeaders(xhr: XMLHttpRequest): {
		[relName: string]: string
	}
	}

	
}

declare module 'vso-node-api/ClientApiBases' {
				declare export class ClientApiBase  {
		baseUrl: string;
		userAgent: string;
		httpClient: httpm.HttpClient;
		restClient: restm.RestClient;
		vsoClient: vsom.VsoClient;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], userAgent?: string): this;
		setUserAgent(userAgent: string): void;
		connect(onResult: (err: any, statusCode: number, obj: any) => void): void
	}

	declare export class QClientApiBase  {
		api: ClientApiBase;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], api: typeof ClientApiBase): this;
		connect(): Q.Promise<any>
	}

	
}

declare module 'vso-node-api/interfaces/common/TfsInterfaces' {
		declare export interface TeamProjectCollectionReference {
		id: string,
		name: string,
		url: string
	}

	declare export interface TeamProjectReference {
		abbreviation: string,
		description: string,
		id: string,
		name: string,
		revision: number,
		state: any,
		url: string
	}

	declare export interface WebApiConnectedServiceRef {
		id: string,
		url: string
	}

			
}

declare module 'vso-node-api/interfaces/common/VSSInterfaces' {
		declare export interface IdentityRef {
		displayName: string,
		id: string,
		imageUrl: string,
		isAadIdentity: boolean,
		isContainer: boolean,
		profileUrl: string,
		uniqueName: string,
		url: string
	}

	declare export interface JsonPatchDocument {
		
	}

	declare export interface JsonPatchOperation {
		from: string,
		op: Operation,
		path: string,
		value: any
	}

	declare export interface ResourceRef {
		id: string,
		url: string
	}

	declare export interface VssJsonCollectionWrapper {
		value: any[]
	}

	declare export interface VssJsonCollectionWrapperV<T> {
		value: T
	}

	declare export interface VssJsonCollectionWrapperBase {
		count: number
	}

			
}

declare module 'vso-node-api/interfaces/BuildInterfaces' {
		declare export interface AgentPoolQueue {
		_links: any,
		pool: TaskAgentPoolReference
	}

	declare export interface ArtifactResource {
		data: string,
		downloadUrl: string,
		type: string,
		url: string
	}

	declare export interface Build {
		_links: any,
		buildNumber: string,
		controller: BuildController,
		definition: DefinitionReference,
		deleted: boolean,
		demands: any[],
		finishTime: Date,
		id: number,
		keepForever: boolean,
		lastChangedBy: VSSInterfaces.IdentityRef,
		lastChangedDate: Date,
		logs: BuildLogReference,
		orchestrationPlan: TaskOrchestrationPlanReference,
		parameters: string,
		priority: QueuePriority,
		project: TfsInterfaces.TeamProjectReference,
		properties: any,
		quality: string,
		queue: AgentPoolQueue,
		queueOptions: QueueOptions,
		queuePosition: number,
		queueTime: Date,
		reason: BuildReason,
		repository: BuildRepository,
		requestedBy: VSSInterfaces.IdentityRef,
		requestedFor: VSSInterfaces.IdentityRef,
		result: BuildResult,
		sourceBranch: string,
		sourceVersion: string,
		startTime: Date,
		status: BuildStatus,
		tags: string[],
		uri: string,
		url: string,
		validationResults: BuildRequestValidationResult[]
	}

	declare export interface BuildAgent {
		buildDirectory: string,
		controller: ShallowReference,
		createdDate: Date,
		description: string,
		enabled: boolean,
		id: number,
		messageQueueUrl: string,
		name: string,
		reservedForBuild: string,
		server: ShallowReference,
		status: AgentStatus,
		statusMessage: string,
		updatedDate: Date,
		uri: string,
		url: string
	}

	declare export interface BuildArtifact {
		id: number,
		name: string,
		resource: ArtifactResource
	}

	declare export interface BuildCompletedEvent {
		
	}

	declare export interface BuildController {
		_links: any,
		createdDate: Date,
		description: string,
		enabled: boolean,
		status: ControllerStatus,
		updatedDate: Date,
		uri: string
	}

	declare export interface BuildDefinition {
		_links: any,
		badgeEnabled: boolean,
		build: BuildDefinitionStep[],
		buildNumberFormat: string,
		comment: string,
		createdDate: Date,
		demands: any[],
		description: string,
		dropLocation: string,
		jobAuthorizationScope: BuildAuthorizationScope,
		jobTimeoutInMinutes: number,
		options: BuildOption[],
		properties: any,
		repository: BuildRepository,
		retentionRules: RetentionPolicy[],
		triggers: BuildTrigger[],
		variables: {
		[key: string]: BuildDefinitionVariable
	}
	}

	declare export interface BuildDefinitionChangedEvent {
		changeType: AuditAction,
		definition: BuildDefinition
	}

	declare export interface BuildDefinitionChangingEvent {
		changeType: AuditAction,
		newDefinition: BuildDefinition,
		originalDefinition: BuildDefinition
	}

	declare export interface BuildDefinitionReference {
		authoredBy: VSSInterfaces.IdentityRef,
		draftOf: DefinitionReference,
		quality: DefinitionQuality,
		queue: AgentPoolQueue
	}

	declare export interface BuildDefinitionRevision {
		changedBy: VSSInterfaces.IdentityRef,
		changedDate: Date,
		changeType: AuditAction,
		comment: string,
		definitionUrl: string,
		name: string,
		revision: number
	}

	declare export interface BuildDefinitionSourceProvider {
		definitionUri: string,
		fields: {
		[key: string]: string
	},
		id: number,
		lastModified: Date,
		name: string,
		supportedTriggerTypes: DefinitionTriggerType
	}

	declare export interface BuildDefinitionStep {
		alwaysRun: boolean,
		continueOnError: boolean,
		displayName: string,
		enabled: boolean,
		inputs: {
		[key: string]: string
	},
		task: TaskDefinitionReference
	}

	declare export interface BuildDefinitionTemplate {
		canDelete: boolean,
		category: string,
		description: string,
		iconTaskId: string,
		id: string,
		name: string,
		template: BuildDefinition
	}

	declare export interface BuildDefinitionVariable {
		allowOverride: boolean,
		isSecret: boolean,
		value: string
	}

	declare export interface BuildDeletedEvent {
		build: Build
	}

	declare export interface BuildDeployment {
		deployment: BuildSummary,
		sourceBuild: ShallowReference
	}

	declare export interface BuildLog {
		createdOn: Date,
		lastChangedOn: Date,
		lineCount: number
	}

	declare export interface BuildLogReference {
		id: number,
		type: string,
		url: string
	}

	declare export interface BuildOption {
		definition: BuildOptionDefinitionReference,
		enabled: boolean,
		inputs: {
		[key: string]: string
	}
	}

	declare export interface BuildOptionDefinition {
		description: string,
		groups: BuildOptionGroupDefinition[],
		inputs: BuildOptionInputDefinition[],
		name: string,
		ordinal: number
	}

	declare export interface BuildOptionDefinitionReference {
		id: string
	}

	declare export interface BuildOptionGroupDefinition {
		displayName: string,
		isExpanded: boolean,
		name: string
	}

	declare export interface BuildOptionInputDefinition {
		defaultValue: string,
		groupName: string,
		help: {
		[key: string]: string
	},
		label: string,
		name: string,
		options: {
		[key: string]: string
	},
		required: boolean,
		type: BuildOptionInputType,
		visibleRule: string
	}

	declare export interface BuildProcessTemplate {
		description: string,
		fileExists: boolean,
		id: number,
		parameters: string,
		serverPath: string,
		supportedReasons: BuildReason,
		teamProject: string,
		templateType: ProcessTemplateType,
		url: string,
		version: string
	}

	declare export interface BuildRepository {
		checkoutSubmodules: boolean,
		clean: string,
		defaultBranch: string,
		id: string,
		name: string,
		properties: {
		[key: string]: string
	},
		rootFolder: string,
		type: string,
		url: string
	}

	declare export interface BuildRequestValidationResult {
		message: string,
		result: ValidationResult
	}

	declare export interface BuildServer {
		agents: ShallowReference[],
		controller: ShallowReference,
		id: number,
		isVirtual: boolean,
		messageQueueUrl: string,
		name: string,
		requireClientCertificates: boolean,
		status: ServiceHostStatus,
		statusChangedDate: Date,
		uri: string,
		url: string,
		version: number
	}

	declare export interface BuildSettings {
		defaultRetentionPolicy: RetentionPolicy,
		maximumRetentionPolicy: RetentionPolicy
	}

	declare export interface BuildStartedEvent {
		
	}

	declare export interface BuildSummary {
		build: ShallowReference,
		finishTime: Date,
		keepForever: boolean,
		quality: string,
		reason: BuildReason,
		requestedFor: VSSInterfaces.IdentityRef,
		startTime: Date,
		status: BuildStatus
	}

	declare export interface BuildTrigger {
		triggerType: DefinitionTriggerType
	}

	declare export interface BuildUpdatedEvent {
		build: Build
	}

	declare export interface BuildWorkspace {
		mappings: MappingDetails[]
	}

	declare export interface Change {
		author: VSSInterfaces.IdentityRef,
		displayUri: string,
		id: string,
		location: string,
		message: string,
		messageTruncated: boolean,
		timestamp: Date,
		type: string
	}

	declare export interface ConsoleLogEvent {
		lines: string[],
		timelineId: string,
		timelineRecordId: string
	}

	declare export interface ContinuousDeploymentDefinition {
		connectedService: TfsInterfaces.WebApiConnectedServiceRef,
		definition: ShallowReference,
		gitBranch: string,
		hostedServiceName: string,
		project: TfsInterfaces.TeamProjectReference,
		repositoryId: string,
		storageAccountName: string,
		subscriptionId: string,
		website: string,
		webspace: string
	}

	declare export interface ContinuousIntegrationTrigger {
		batchChanges: boolean,
		branchFilters: string[]
	}

	declare export interface DefinitionReference {
		project: TfsInterfaces.TeamProjectReference,
		queueStatus: DefinitionQueueStatus,
		revision: number,
		type: DefinitionType,
		uri: string
	}

	declare export interface Deployment {
		type: string
	}

	declare export interface DeploymentBuild {
		buildId: number
	}

	declare export interface DeploymentDeploy {
		message: string
	}

	declare export interface DeploymentTest {
		runId: number
	}

	declare export interface InformationNode {
		fields: {
		[key: string]: string
	},
		lastModifiedBy: string,
		lastModifiedDate: Date,
		nodeId: number,
		parentId: number,
		type: string
	}

	declare export interface Issue {
		category: string,
		data: {
		[key: string]: string
	},
		message: string,
		type: IssueType
	}

	declare export interface MappingDetails {
		mappingType: string,
		serverPath: string
	}

	declare export interface PropertyValue {
		changedBy: string,
		changedDate: Date,
		propertyName: string,
		value: any
	}

	declare export interface RealtimeBuildEvent {
		buildId: number
	}

	declare export interface RequestReference {
		id: number,
		requestedFor: VSSInterfaces.IdentityRef,
		url: string
	}

	declare export interface RetentionPolicy {
		branches: string[],
		daysToKeep: number,
		deleteBuildRecord: boolean
	}

	declare export interface Schedule {
		branchFilters: string[],
		daysToBuild: ScheduleDays,
		scheduleJobId: string,
		startHours: number,
		startMinutes: number,
		timeZoneId: string
	}

	declare export interface ScheduleTrigger {
		schedules: Schedule[]
	}

	declare export interface ShallowReference {
		id: number,
		name: string,
		url: string
	}

	declare export interface TaskAgentPoolReference {
		id: number,
		name: string
	}

	declare export interface TaskDefinitionReference {
		id: string,
		versionSpec: string
	}

	declare export interface TaskOrchestrationPlanReference {
		planId: string
	}

	declare export interface Timeline {
		lastChangedBy: string,
		lastChangedOn: Date,
		records: TimelineRecord[]
	}

	declare export interface TimelineRecord {
		_links: any,
		changeId: number,
		currentOperation: string,
		details: TimelineReference,
		errorCount: number,
		finishTime: Date,
		id: string,
		issues: Issue[],
		lastModified: Date,
		log: BuildLogReference,
		name: string,
		order: number,
		parentId: string,
		percentComplete: number,
		result: TaskResult,
		resultCode: string,
		startTime: Date,
		state: TimelineRecordState,
		type: string,
		url: string,
		warningCount: number,
		workerName: string
	}

	declare export interface TimelineRecordsUpdatedEvent {
		timelineRecords: TimelineRecord[]
	}

	declare export interface TimelineReference {
		changeId: number,
		id: string,
		url: string
	}

	declare export interface WorkspaceMapping {
		definitionUri: string,
		depth: number,
		localItem: string,
		mappingType: WorkspaceMappingType,
		serverItem: string,
		workspaceId: number
	}

	declare export interface WorkspaceTemplate {
		definitionUri: string,
		lastModifiedBy: string,
		lastModifiedDate: Date,
		mappings: WorkspaceMapping[],
		workspaceId: number
	}

	declare export interface XamlBuildDefinition {
		_links: any,
		batchSize: number,
		buildArgs: string,
		continuousIntegrationQuietPeriod: number,
		controller: BuildController,
		createdOn: Date,
		defaultDropLocation: string,
		description: string,
		lastBuild: ShallowReference,
		repository: BuildRepository,
		supportedReasons: BuildReason,
		triggerType: DefinitionTriggerType
	}

			
}

declare module 'vso-node-api/BuildApi' {
		declare export interface IBuildApi {
		createArtifact(
		artifact: BuildInterfaces.BuildArtifact, buildId: number, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void
	): void,
		getArtifact(
		buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void
	): void,
		getArtifactContentZip(
		buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getArtifacts(
		buildId: number, project: string, onResult: (
		err: any, statusCode: number, artifacts: BuildInterfaces.BuildArtifact[]
	) => void
	): void,
		getBadge(
		project: string, definitionId: number, branchName: string, onResult: (err: any, statusCode: number, badge: string) => void
	): void,
		deleteBuild(
		buildId: number, project: string, onResult: (err: any, statusCode: number) => void
	): void,
		getBuild(
		buildId: number, project: string, propertyFilters: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
	): void,
		getBuilds(
		project: string, definitions: number[], queues: number[], buildNumber: string, minFinishTime: Date, maxFinishTime: Date, requestedFor: string, reasonFilter: BuildInterfaces.BuildReason, statusFilter: BuildInterfaces.BuildStatus, resultFilter: BuildInterfaces.BuildResult, tagFilters: string[], properties: string[], type: BuildInterfaces.DefinitionType, top: number, continuationToken: string, maxBuildsPerDefinition: number, deletedFilter: BuildInterfaces.QueryDeletedOption, queryOrder: BuildInterfaces.BuildQueryOrder, onResult: (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => void
	): void,
		queueBuild(
		build: BuildInterfaces.Build, project: string, ignoreWarnings: boolean, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
	): void,
		updateBuild(
		build: BuildInterfaces.Build, buildId: number, project: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
	): void,
		getBuildCommits(
		project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => void
	): void,
		getBuildController(
		controllerId: number, onResult: (
		err: any, statusCode: number, Controller: BuildInterfaces.BuildController
	) => void
	): void,
		getBuildControllers(
		name: string, onResult: (
		err: any, statusCode: number, Controllers: BuildInterfaces.BuildController[]
	) => void
	): void,
		createDefinition(
		definition: BuildInterfaces.BuildDefinition, project: string, definitionToCloneId: number, definitionToCloneRevision: number, onResult: (
		err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition
	) => void
	): void,
		deleteDefinition(
		definitionId: number, project: string, onResult: (err: any, statusCode: number) => void
	): void,
		getDefinition(
		definitionId: number, project: string, revision: number, propertyFilters: string[], onResult: (
		err: any, statusCode: number, definition: BuildInterfaces.DefinitionReference
	) => void
	): void,
		getDefinitions(
		project: string, name: string, type: BuildInterfaces.DefinitionType, onResult: (
		err: any, statusCode: number, definitions: BuildInterfaces.DefinitionReference[]
	) => void
	): void,
		updateDefinition(
		definition: BuildInterfaces.BuildDefinition, definitionId: number, project: string, secretsSourceDefinitionId: number, secretsSourceDefinitionRevision: number, onResult: (
		err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition
	) => void
	): void,
		getBuildDeployments(
		project: string, buildId: number, onResult: (
		err: any, statusCode: number, deployments: BuildInterfaces.Deployment[]
	) => void
	): void,
		getBuildLog(
		project: string, buildId: number, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getBuildLogs(
		project: string, buildId: number, onResult: (err: any, statusCode: number, logs: BuildInterfaces.BuildLog[]) => void
	): void,
		getBuildLogsZip(
		project: string, buildId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getBuildOptionDefinitions(
		onResult: (
		err: any, statusCode: number, options: BuildInterfaces.BuildOptionDefinition[]
	) => void
	): void,
		createQueue(
		queue: BuildInterfaces.AgentPoolQueue, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void
	): void,
		deleteQueue(id: number, onResult: (err: any, statusCode: number) => void): void,
		getAgentPoolQueue(
		controllerId: number, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void
	): void,
		getQueues(
		name: string, onResult: (err: any, statusCode: number, queues: BuildInterfaces.AgentPoolQueue[]) => void
	): void,
		getDefinitionRevisions(
		project: string, definitionId: number, onResult: (
		err: any, statusCode: number, revisions: BuildInterfaces.BuildDefinitionRevision[]
	) => void
	): void,
		getBuildSettings(
		onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void
	): void,
		updateBuildSettings(
		settings: BuildInterfaces.BuildSettings, onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void
	): void,
		addBuildTag(
		project: string, buildId: number, tag: string, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void,
		addBuildTags(
		tags: string[], project: string, buildId: number, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void,
		deleteBuildTag(
		project: string, buildId: number, tag: string, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void,
		getBuildTags(
		project: string, buildId: number, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void,
		getTags(
		project: string, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void,
		deleteTemplate(
		project: string, templateId: string, onResult: (err: any, statusCode: number) => void
	): void,
		getTemplate(
		project: string, templateId: string, onResult: (
		err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate
	) => void
	): void,
		getTemplates(
		project: string, onResult: (
		err: any, statusCode: number, templates: BuildInterfaces.BuildDefinitionTemplate[]
	) => void
	): void,
		saveTemplate(
		template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string, onResult: (
		err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate
	) => void
	): void,
		getBuildTimeline(
		project: string, buildId: number, timelineId: string, changeId: number, onResult: (err: any, statusCode: number, Timeline: BuildInterfaces.Timeline) => void
	): void,
		getBuildWorkItemsRefs(
		project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void
	): void,
		getBuildWorkItemsRefsFromCommits(
		commitIds: string[], project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void
	): void
	}

	declare export interface IQBuildApi {
		createArtifact(
		artifact: BuildInterfaces.BuildArtifact, buildId: number, project?: string
	): Q.Promise<BuildInterfaces.BuildArtifact>,
		getArtifact(
		buildId: number, artifactName: string, project?: string
	): Q.Promise<BuildInterfaces.BuildArtifact>,
		getArtifacts(buildId: number, project?: string): Q.Promise<BuildInterfaces.BuildArtifact[]>,
		getBadge(project: string, definitionId: number, branchName?: string): Q.Promise<string>,
		getBuild(
		buildId: number, project?: string, propertyFilters?: string
	): Q.Promise<BuildInterfaces.Build>,
		getBuilds(
		project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: BuildInterfaces.BuildReason, statusFilter?: BuildInterfaces.BuildStatus, resultFilter?: BuildInterfaces.BuildResult, tagFilters?: string[], properties?: string[], type?: BuildInterfaces.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: BuildInterfaces.QueryDeletedOption, queryOrder?: BuildInterfaces.BuildQueryOrder
	): Q.Promise<BuildInterfaces.Build[]>,
		queueBuild(
		build: BuildInterfaces.Build, project?: string, ignoreWarnings?: boolean
	): Q.Promise<BuildInterfaces.Build>,
		updateBuild(
		build: BuildInterfaces.Build, buildId: number, project?: string
	): Q.Promise<BuildInterfaces.Build>,
		getBuildCommits(
		project: string, buildId: number, top?: number
	): Q.Promise<BuildInterfaces.Change[]>,
		getBuildController(controllerId: number): Q.Promise<BuildInterfaces.BuildController>,
		getBuildControllers(name?: string): Q.Promise<BuildInterfaces.BuildController[]>,
		createDefinition(
		definition: BuildInterfaces.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number
	): Q.Promise<BuildInterfaces.BuildDefinition>,
		getDefinition(
		definitionId: number, project?: string, revision?: number, propertyFilters?: string[]
	): Q.Promise<BuildInterfaces.DefinitionReference>,
		getDefinitions(
		project?: string, name?: string, type?: BuildInterfaces.DefinitionType
	): Q.Promise<BuildInterfaces.DefinitionReference[]>,
		updateDefinition(
		definition: BuildInterfaces.BuildDefinition, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number
	): Q.Promise<BuildInterfaces.BuildDefinition>,
		getBuildDeployments(project: string, buildId: number): Q.Promise<BuildInterfaces.Deployment[]>,
		getBuildLogs(project: string, buildId: number): Q.Promise<BuildInterfaces.BuildLog[]>,
		getBuildOptionDefinitions(): Q.Promise<BuildInterfaces.BuildOptionDefinition[]>,
		createQueue(
		queue: BuildInterfaces.AgentPoolQueue
	): Q.Promise<BuildInterfaces.AgentPoolQueue>,
		getAgentPoolQueue(controllerId: number): Q.Promise<BuildInterfaces.AgentPoolQueue>,
		getQueues(name?: string): Q.Promise<BuildInterfaces.AgentPoolQueue[]>,
		getDefinitionRevisions(
		project: string, definitionId: number
	): Q.Promise<BuildInterfaces.BuildDefinitionRevision[]>,
		getBuildSettings(): Q.Promise<BuildInterfaces.BuildSettings>,
		updateBuildSettings(
		settings: BuildInterfaces.BuildSettings
	): Q.Promise<BuildInterfaces.BuildSettings>,
		addBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>,
		addBuildTags(tags: string[], project: string, buildId: number): Q.Promise<string[]>,
		deleteBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>,
		getBuildTags(project: string, buildId: number): Q.Promise<string[]>,
		getTags(project: string): Q.Promise<string[]>,
		getTemplate(
		project: string, templateId: string
	): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>,
		getTemplates(project: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate[]>,
		saveTemplate(
		template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string
	): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>,
		getBuildTimeline(
		project: string, buildId: number, timelineId?: string, changeId?: number
	): Q.Promise<BuildInterfaces.Timeline>,
		getBuildWorkItemsRefs(
		project: string, buildId: number, top?: number
	): Q.Promise<VSSInterfaces.ResourceRef[]>,
		getBuildWorkItemsRefsFromCommits(
		commitIds: string[], project: string, buildId: number, top?: number
	): Q.Promise<VSSInterfaces.ResourceRef[]>
	}

		declare export class BuildApi extends basem$ClientApiBase, IBuildApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createArtifact(
		artifact: BuildInterfaces.BuildArtifact, buildId: number, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void
	): void;
		getArtifact(
		buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void
	): void;
		getArtifactContentZip(
		buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getArtifacts(
		buildId: number, project: string, onResult: (
		err: any, statusCode: number, artifacts: BuildInterfaces.BuildArtifact[]
	) => void
	): void;
		getBadge(
		project: string, definitionId: number, branchName: string, onResult: (err: any, statusCode: number, badge: string) => void
	): void;
		deleteBuild(
		buildId: number, project: string, onResult: (err: any, statusCode: number) => void
	): void;
		getBuild(
		buildId: number, project: string, propertyFilters: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
	): void;
		getBuilds(
		project: string, definitions: number[], queues: number[], buildNumber: string, minFinishTime: Date, maxFinishTime: Date, requestedFor: string, reasonFilter: BuildInterfaces.BuildReason, statusFilter: BuildInterfaces.BuildStatus, resultFilter: BuildInterfaces.BuildResult, tagFilters: string[], properties: string[], type: BuildInterfaces.DefinitionType, top: number, continuationToken: string, maxBuildsPerDefinition: number, deletedFilter: BuildInterfaces.QueryDeletedOption, queryOrder: BuildInterfaces.BuildQueryOrder, onResult: (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => void
	): void;
		queueBuild(
		build: BuildInterfaces.Build, project: string, ignoreWarnings: boolean, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
	): void;
		updateBuild(
		build: BuildInterfaces.Build, buildId: number, project: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
	): void;
		getBuildCommits(
		project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => void
	): void;
		getBuildController(
		controllerId: number, onResult: (
		err: any, statusCode: number, Controller: BuildInterfaces.BuildController
	) => void
	): void;
		getBuildControllers(
		name: string, onResult: (
		err: any, statusCode: number, Controllers: BuildInterfaces.BuildController[]
	) => void
	): void;
		createDefinition(
		definition: BuildInterfaces.BuildDefinition, project: string, definitionToCloneId: number, definitionToCloneRevision: number, onResult: (
		err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition
	) => void
	): void;
		deleteDefinition(
		definitionId: number, project: string, onResult: (err: any, statusCode: number) => void
	): void;
		getDefinition(
		definitionId: number, project: string, revision: number, propertyFilters: string[], onResult: (
		err: any, statusCode: number, definition: BuildInterfaces.DefinitionReference
	) => void
	): void;
		getDefinitions(
		project: string, name: string, type: BuildInterfaces.DefinitionType, onResult: (
		err: any, statusCode: number, definitions: BuildInterfaces.DefinitionReference[]
	) => void
	): void;
		updateDefinition(
		definition: BuildInterfaces.BuildDefinition, definitionId: number, project: string, secretsSourceDefinitionId: number, secretsSourceDefinitionRevision: number, onResult: (
		err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition
	) => void
	): void;
		getBuildDeployments(
		project: string, buildId: number, onResult: (
		err: any, statusCode: number, deployments: BuildInterfaces.Deployment[]
	) => void
	): void;
		getBuildLog(
		project: string, buildId: number, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getBuildLogs(
		project: string, buildId: number, onResult: (err: any, statusCode: number, logs: BuildInterfaces.BuildLog[]) => void
	): void;
		getBuildLogsZip(
		project: string, buildId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getBuildOptionDefinitions(
		onResult: (
		err: any, statusCode: number, options: BuildInterfaces.BuildOptionDefinition[]
	) => void
	): void;
		createQueue(
		queue: BuildInterfaces.AgentPoolQueue, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void
	): void;
		deleteQueue(id: number, onResult: (err: any, statusCode: number) => void): void;
		getAgentPoolQueue(
		controllerId: number, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void
	): void;
		getQueues(
		name: string, onResult: (err: any, statusCode: number, queues: BuildInterfaces.AgentPoolQueue[]) => void
	): void;
		getDefinitionRevisions(
		project: string, definitionId: number, onResult: (
		err: any, statusCode: number, revisions: BuildInterfaces.BuildDefinitionRevision[]
	) => void
	): void;
		getBuildSettings(
		onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void
	): void;
		updateBuildSettings(
		settings: BuildInterfaces.BuildSettings, onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void
	): void;
		addBuildTag(
		project: string, buildId: number, tag: string, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void;
		addBuildTags(
		tags: string[], project: string, buildId: number, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void;
		deleteBuildTag(
		project: string, buildId: number, tag: string, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void;
		getBuildTags(
		project: string, buildId: number, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void;
		getTags(
		project: string, onResult: (err: any, statusCode: number, tags: string[]) => void
	): void;
		deleteTemplate(
		project: string, templateId: string, onResult: (err: any, statusCode: number) => void
	): void;
		getTemplate(
		project: string, templateId: string, onResult: (
		err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate
	) => void
	): void;
		getTemplates(
		project: string, onResult: (
		err: any, statusCode: number, templates: BuildInterfaces.BuildDefinitionTemplate[]
	) => void
	): void;
		saveTemplate(
		template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string, onResult: (
		err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate
	) => void
	): void;
		getBuildTimeline(
		project: string, buildId: number, timelineId: string, changeId: number, onResult: (err: any, statusCode: number, Timeline: BuildInterfaces.Timeline) => void
	): void;
		getBuildWorkItemsRefs(
		project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void
	): void;
		getBuildWorkItemsRefsFromCommits(
		commitIds: string[], project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void
	): void
	}

	declare export class QBuildApi extends basem$QClientApiBase, IQBuildApi {
		api: BuildApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createArtifact(
		artifact: BuildInterfaces.BuildArtifact, buildId: number, project?: string
	): Q.Promise<BuildInterfaces.BuildArtifact>;
		getArtifact(
		buildId: number, artifactName: string, project?: string
	): Q.Promise<BuildInterfaces.BuildArtifact>;
		getArtifacts(buildId: number, project?: string): Q.Promise<BuildInterfaces.BuildArtifact[]>;
		getBadge(project: string, definitionId: number, branchName?: string): Q.Promise<string>;
		getBuild(
		buildId: number, project?: string, propertyFilters?: string
	): Q.Promise<BuildInterfaces.Build>;
		getBuilds(
		project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: BuildInterfaces.BuildReason, statusFilter?: BuildInterfaces.BuildStatus, resultFilter?: BuildInterfaces.BuildResult, tagFilters?: string[], properties?: string[], type?: BuildInterfaces.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: BuildInterfaces.QueryDeletedOption, queryOrder?: BuildInterfaces.BuildQueryOrder
	): Q.Promise<BuildInterfaces.Build[]>;
		queueBuild(
		build: BuildInterfaces.Build, project?: string, ignoreWarnings?: boolean
	): Q.Promise<BuildInterfaces.Build>;
		updateBuild(
		build: BuildInterfaces.Build, buildId: number, project?: string
	): Q.Promise<BuildInterfaces.Build>;
		getBuildCommits(
		project: string, buildId: number, top?: number
	): Q.Promise<BuildInterfaces.Change[]>;
		getBuildController(controllerId: number): Q.Promise<BuildInterfaces.BuildController>;
		getBuildControllers(name?: string): Q.Promise<BuildInterfaces.BuildController[]>;
		createDefinition(
		definition: BuildInterfaces.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number
	): Q.Promise<BuildInterfaces.BuildDefinition>;
		getDefinition(
		definitionId: number, project?: string, revision?: number, propertyFilters?: string[]
	): Q.Promise<BuildInterfaces.DefinitionReference>;
		getDefinitions(
		project?: string, name?: string, type?: BuildInterfaces.DefinitionType
	): Q.Promise<BuildInterfaces.DefinitionReference[]>;
		updateDefinition(
		definition: BuildInterfaces.BuildDefinition, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number
	): Q.Promise<BuildInterfaces.BuildDefinition>;
		getBuildDeployments(project: string, buildId: number): Q.Promise<BuildInterfaces.Deployment[]>;
		getBuildLogs(project: string, buildId: number): Q.Promise<BuildInterfaces.BuildLog[]>;
		getBuildOptionDefinitions(): Q.Promise<BuildInterfaces.BuildOptionDefinition[]>;
		createQueue(
		queue: BuildInterfaces.AgentPoolQueue
	): Q.Promise<BuildInterfaces.AgentPoolQueue>;
		getAgentPoolQueue(controllerId: number): Q.Promise<BuildInterfaces.AgentPoolQueue>;
		getQueues(name?: string): Q.Promise<BuildInterfaces.AgentPoolQueue[]>;
		getDefinitionRevisions(
		project: string, definitionId: number
	): Q.Promise<BuildInterfaces.BuildDefinitionRevision[]>;
		getBuildSettings(): Q.Promise<BuildInterfaces.BuildSettings>;
		updateBuildSettings(
		settings: BuildInterfaces.BuildSettings
	): Q.Promise<BuildInterfaces.BuildSettings>;
		addBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>;
		addBuildTags(tags: string[], project: string, buildId: number): Q.Promise<string[]>;
		deleteBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>;
		getBuildTags(project: string, buildId: number): Q.Promise<string[]>;
		getTags(project: string): Q.Promise<string[]>;
		getTemplate(
		project: string, templateId: string
	): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>;
		getTemplates(project: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate[]>;
		saveTemplate(
		template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string
	): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>;
		getBuildTimeline(
		project: string, buildId: number, timelineId?: string, changeId?: number
	): Q.Promise<BuildInterfaces.Timeline>;
		getBuildWorkItemsRefs(
		project: string, buildId: number, top?: number
	): Q.Promise<VSSInterfaces.ResourceRef[]>;
		getBuildWorkItemsRefsFromCommits(
		commitIds: string[], project: string, buildId: number, top?: number
	): Q.Promise<VSSInterfaces.ResourceRef[]>
	}

	
}

declare module 'vso-node-api/interfaces/CoreInterfaces' {
		declare export interface IdentityData {
		identityIds: string[]
	}

	declare export interface Process {
		_links: any,
		description: string,
		id: string,
		isDefault: boolean
	}

	declare export interface ProcessReference {
		name: string,
		url: string
	}

	declare export interface ProjectInfo {
		abbreviation: string,
		description: string,
		id: string,
		lastUpdateTime: Date,
		name: string,
		properties: ProjectProperty[],
		revision: number,
		state: any,
		uri: string,
		version: number
	}

	declare export interface ProjectMessage {
		project: ProjectInfo,
		projectChangeType: ProjectChangeType
	}

	declare export interface ProjectProperty {
		name: string,
		value: string
	}

	declare export interface Proxy {
		description: string,
		friendlyName: string,
		globalDefault: boolean,
		site: string,
		siteDefault: boolean,
		url: string
	}

	declare export interface TeamContext {
		project: string,
		projectId: string,
		team: string,
		teamId: string
	}

	declare export interface TeamProject {
		_links: any,
		capabilities: {
		[key: string]: {
		[key: string]: string
	}
	},
		defaultTeam: WebApiTeamRef
	}

	declare export interface TeamProjectCollection {
		_links: any,
		description: string,
		state: string
	}

	declare export interface TeamProjectCollectionReference {
		id: string,
		name: string,
		url: string
	}

	declare export interface TeamProjectReference {
		abbreviation: string,
		description: string,
		id: string,
		name: string,
		revision: number,
		state: any,
		url: string
	}

	declare export interface WebApiConnectedService {
		authenticatedBy: VSSInterfaces.IdentityRef,
		description: string,
		friendlyName: string,
		id: string,
		kind: string,
		project: TeamProjectReference,
		serviceUri: string
	}

	declare export interface WebApiConnectedServiceDetails {
		connectedServiceMetaData: WebApiConnectedService,
		credentialsXml: string,
		endPoint: string
	}

	declare export interface WebApiConnectedServiceRef {
		id: string,
		url: string
	}

	declare export interface WebApiCreateTagRequestData {
		name: string
	}

	declare export interface WebApiProject {
		capabilities: {
		[key: string]: {
		[key: string]: string
	}
	},
		collection: WebApiProjectCollectionRef,
		defaultTeam: WebApiTeamRef
	}

	declare export interface WebApiProjectCollection {
		description: string,
		state: string
	}

	declare export interface WebApiProjectCollectionRef {
		collectionUrl: string,
		id: string,
		name: string,
		url: string
	}

	declare export interface WebApiTagDefinition {
		active: boolean,
		id: string,
		name: string,
		url: string
	}

	declare export interface WebApiTeam {
		description: string,
		identityUrl: string
	}

	declare export interface WebApiTeamRef {
		id: string,
		name: string,
		url: string
	}

			
}

declare module 'vso-node-api/interfaces/common/OperationsInterfaces' {
		declare export interface OperationReference {
		id: string,
		status: OperationStatus,
		url: string
	}

			
}

declare module 'vso-node-api/CoreApi' {
		declare export interface ICoreApi {
		createConnectedService(
		connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string, onResult: (
		err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedService
	) => void
	): void,
		getConnectedServiceDetails(
		projectId: string, name: string, onResult: (
		err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedServiceDetails
	) => void
	): void,
		getConnectedServices(
		projectId: string, kind: CoreInterfaces.ConnectedServiceKind, onResult: (
		err: any, statusCode: number, connectedServices: CoreInterfaces.WebApiConnectedService[]
	) => void
	): void,
		createIdentityMru(
		mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void
	): void,
		deleteIdentityMru(
		mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void
	): void,
		getIdentityMru(
		mruName: string, onResult: (err: any, statusCode: number, identityMru: VSSInterfaces.IdentityRef[]) => void
	): void,
		updateIdentityMru(
		mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void
	): void,
		getTeamMembers(
		projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, members: VSSInterfaces.IdentityRef[]) => void
	): void,
		getProjectCollection(
		collectionId: string, onResult: (
		err: any, statusCode: number, projectCollection: CoreInterfaces.TeamProjectCollection
	) => void
	): void,
		getProjectCollections(
		top: number, skip: number, onResult: (
		err: any, statusCode: number, projectCollections: CoreInterfaces.TeamProjectCollectionReference[]
	) => void
	): void,
		getProjectHistory(
		minRevision: number, onResult: (
		err: any, statusCode: number, projectHistory: CoreInterfaces.TeamProjectReference[]
	) => void
	): void,
		getProject(
		projectId: string, includeCapabilities: boolean, includeHistory: boolean, onResult: (err: any, statusCode: number, project: CoreInterfaces.TeamProject) => void
	): void,
		getProjects(
		stateFilter: any, top: number, skip: number, onResult: (
		err: any, statusCode: number, projects: CoreInterfaces.TeamProjectReference[]
	) => void
	): void,
		queueCreateProject(
		projectToCreate: CoreInterfaces.TeamProject, onResult: (
		err: any, statusCode: number, project: OperationsInterfaces.OperationReference
	) => void
	): void,
		queueDeleteProject(
		projectId: string, onResult: (
		err: any, statusCode: number, project: OperationsInterfaces.OperationReference
	) => void
	): void,
		updateProject(
		projectUpdate: CoreInterfaces.TeamProject, projectId: string, onResult: (
		err: any, statusCode: number, project: OperationsInterfaces.OperationReference
	) => void
	): void,
		getProxies(
		proxyUrl: string, onResult: (err: any, statusCode: number, proxies: CoreInterfaces.Proxy[]) => void
	): void,
		getTeams(
		projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => void
	): void
	}

	declare export interface IQCoreApi {
		createConnectedService(
		connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string
	): Q.Promise<CoreInterfaces.WebApiConnectedService>,
		getConnectedServiceDetails(
		projectId: string, name: string
	): Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails>,
		getConnectedServices(
		projectId: string, kind?: CoreInterfaces.ConnectedServiceKind
	): Q.Promise<CoreInterfaces.WebApiConnectedService[]>,
		getIdentityMru(mruName: string): Q.Promise<VSSInterfaces.IdentityRef[]>,
		getTeamMembers(
		projectId: string, teamId: string, top?: number, skip?: number
	): Q.Promise<VSSInterfaces.IdentityRef[]>,
		getProjectCollection(collectionId: string): Q.Promise<CoreInterfaces.TeamProjectCollection>,
		getProjectCollections(
		top?: number, skip?: number
	): Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]>,
		getProjectHistory(minRevision?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>,
		getProject(
		projectId: string, includeCapabilities?: boolean, includeHistory?: boolean
	): Q.Promise<CoreInterfaces.TeamProject>,
		getProjects(
		stateFilter?: any, top?: number, skip?: number
	): Q.Promise<CoreInterfaces.TeamProjectReference[]>,
		queueCreateProject(
		projectToCreate: CoreInterfaces.TeamProject
	): Q.Promise<OperationsInterfaces.OperationReference>,
		queueDeleteProject(projectId: string): Q.Promise<OperationsInterfaces.OperationReference>,
		updateProject(
		projectUpdate: CoreInterfaces.TeamProject, projectId: string
	): Q.Promise<OperationsInterfaces.OperationReference>,
		getProxies(proxyUrl?: string): Q.Promise<CoreInterfaces.Proxy[]>,
		getTeams(
		projectId: string, teamId?: string, top?: number, skip?: number
	): Q.Promise<CoreInterfaces.WebApiTeam>
	}

		declare export class CoreApi extends basem$ClientApiBase, ICoreApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createConnectedService(
		connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string, onResult: (
		err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedService
	) => void
	): void;
		getConnectedServiceDetails(
		projectId: string, name: string, onResult: (
		err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedServiceDetails
	) => void
	): void;
		getConnectedServices(
		projectId: string, kind: CoreInterfaces.ConnectedServiceKind, onResult: (
		err: any, statusCode: number, connectedServices: CoreInterfaces.WebApiConnectedService[]
	) => void
	): void;
		createIdentityMru(
		mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void
	): void;
		deleteIdentityMru(
		mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void
	): void;
		getIdentityMru(
		mruName: string, onResult: (err: any, statusCode: number, identityMru: VSSInterfaces.IdentityRef[]) => void
	): void;
		updateIdentityMru(
		mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void
	): void;
		getTeamMembers(
		projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, members: VSSInterfaces.IdentityRef[]) => void
	): void;
		getProjectCollection(
		collectionId: string, onResult: (
		err: any, statusCode: number, projectCollection: CoreInterfaces.TeamProjectCollection
	) => void
	): void;
		getProjectCollections(
		top: number, skip: number, onResult: (
		err: any, statusCode: number, projectCollections: CoreInterfaces.TeamProjectCollectionReference[]
	) => void
	): void;
		getProjectHistory(
		minRevision: number, onResult: (
		err: any, statusCode: number, projectHistory: CoreInterfaces.TeamProjectReference[]
	) => void
	): void;
		getProject(
		projectId: string, includeCapabilities: boolean, includeHistory: boolean, onResult: (err: any, statusCode: number, project: CoreInterfaces.TeamProject) => void
	): void;
		getProjects(
		stateFilter: any, top: number, skip: number, onResult: (
		err: any, statusCode: number, projects: CoreInterfaces.TeamProjectReference[]
	) => void
	): void;
		queueCreateProject(
		projectToCreate: CoreInterfaces.TeamProject, onResult: (
		err: any, statusCode: number, project: OperationsInterfaces.OperationReference
	) => void
	): void;
		queueDeleteProject(
		projectId: string, onResult: (
		err: any, statusCode: number, project: OperationsInterfaces.OperationReference
	) => void
	): void;
		updateProject(
		projectUpdate: CoreInterfaces.TeamProject, projectId: string, onResult: (
		err: any, statusCode: number, project: OperationsInterfaces.OperationReference
	) => void
	): void;
		getProxies(
		proxyUrl: string, onResult: (err: any, statusCode: number, proxies: CoreInterfaces.Proxy[]) => void
	): void;
		getTeams(
		projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => void
	): void
	}

	declare export class QCoreApi extends basem$QClientApiBase, IQCoreApi {
		api: CoreApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createConnectedService(
		connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string
	): Q.Promise<CoreInterfaces.WebApiConnectedService>;
		getConnectedServiceDetails(
		projectId: string, name: string
	): Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails>;
		getConnectedServices(
		projectId: string, kind?: CoreInterfaces.ConnectedServiceKind
	): Q.Promise<CoreInterfaces.WebApiConnectedService[]>;
		getIdentityMru(mruName: string): Q.Promise<VSSInterfaces.IdentityRef[]>;
		getTeamMembers(
		projectId: string, teamId: string, top?: number, skip?: number
	): Q.Promise<VSSInterfaces.IdentityRef[]>;
		getProjectCollection(collectionId: string): Q.Promise<CoreInterfaces.TeamProjectCollection>;
		getProjectCollections(
		top?: number, skip?: number
	): Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]>;
		getProjectHistory(minRevision?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
		getProject(
		projectId: string, includeCapabilities?: boolean, includeHistory?: boolean
	): Q.Promise<CoreInterfaces.TeamProject>;
		getProjects(
		stateFilter?: any, top?: number, skip?: number
	): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
		queueCreateProject(
		projectToCreate: CoreInterfaces.TeamProject
	): Q.Promise<OperationsInterfaces.OperationReference>;
		queueDeleteProject(projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
		updateProject(
		projectUpdate: CoreInterfaces.TeamProject, projectId: string
	): Q.Promise<OperationsInterfaces.OperationReference>;
		getProxies(proxyUrl?: string): Q.Promise<CoreInterfaces.Proxy[]>;
		getTeams(
		projectId: string, teamId?: string, top?: number, skip?: number
	): Q.Promise<CoreInterfaces.WebApiTeam>
	}

	
}

declare module 'vso-node-api/interfaces/FileContainerInterfaces' {
		declare export interface FileContainer {
		artifactUri: string,
		contentLocation: string,
		createdBy: string,
		dateCreated: Date,
		description: string,
		id: number,
		itemLocation: string,
		name: string,
		options: ContainerOptions,
		scopeIdentifier: string,
		securityToken: string,
		signingKeyId: string,
		size: number
	}

	declare export interface FileContainerItem {
		containerId: number,
		contentId: number[],
		contentLocation: string,
		createdBy: string,
		dateCreated: Date,
		dateLastModified: Date,
		fileEncoding: number,
		fileHash: number[],
		fileLength: number,
		fileType: number,
		itemLocation: string,
		itemType: ContainerItemType,
		lastModifiedBy: string,
		path: string,
		scopeIdentifier: string,
		status: ContainerItemStatus,
		ticket: string
	}

			
}

declare module 'vso-node-api/FileContainerApi' {
		declare export interface IFileContainerApi {
		createItem(
		customHeaders: any, contentStream: NodeJS.ReadableStream, containerId: number, itemPath: string, scope: string, onResult: (
		err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem
	) => void
	): void,
		createItems(
		items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope: string, onResult: (
		err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem[]
	) => void
	): void,
		deleteItem(
		containerId: number, itemPath: string, scope: string, onResult: (err: any, statusCode: number) => void
	): void,
		getContainers(
		scope: string, artifactUris: string, onResult: (
		err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainer[]
	) => void
	): void,
		getItems(
		containerId: number, scope: string, itemPath: string, metadata: boolean, format: string, downloadFileName: string, includeDownloadTickets: boolean, onResult: (
		err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]
	) => void
	): void
	}

	declare export interface IQFileContainerApi {
		createItem(
		customHeaders: any, contentStream: NodeJS.ReadableStream, containerId: number, itemPath: string, scope?: string
	): Q.Promise<FileContainerInterfaces.FileContainerItem>,
		createItems(
		items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope?: string
	): Q.Promise<FileContainerInterfaces.FileContainerItem[]>,
		getContainers(
		scope?: string, artifactUris?: string
	): Q.Promise<FileContainerInterfaces.FileContainer[]>,
		getItems(
		containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string, includeDownloadTickets?: boolean
	): Q.Promise<FileContainerInterfaces.FileContainerItem[]>
	}

		declare export class FileContainerApi extends basem$ClientApiBase, IFileContainerApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createItem(
		customHeaders: any, contentStream: NodeJS.ReadableStream, containerId: number, itemPath: string, scope: string, onResult: (
		err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem
	) => void
	): void;
		createItems(
		items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope: string, onResult: (
		err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem[]
	) => void
	): void;
		deleteItem(
		containerId: number, itemPath: string, scope: string, onResult: (err: any, statusCode: number) => void
	): void;
		getContainers(
		scope: string, artifactUris: string, onResult: (
		err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainer[]
	) => void
	): void;
		getItems(
		containerId: number, scope: string, itemPath: string, metadata: boolean, format: string, downloadFileName: string, includeDownloadTickets: boolean, onResult: (
		err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]
	) => void
	): void
	}

	declare export class QFileContainerApi extends basem$QClientApiBase, IQFileContainerApi {
		api: FileContainerApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createItem(
		customHeaders: any, contentStream: NodeJS.ReadableStream, containerId: number, itemPath: string, scope?: string
	): Q.Promise<FileContainerInterfaces.FileContainerItem>;
		createItems(
		items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope?: string
	): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
		getContainers(
		scope?: string, artifactUris?: string
	): Q.Promise<FileContainerInterfaces.FileContainer[]>;
		getItems(
		containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string, includeDownloadTickets?: boolean
	): Q.Promise<FileContainerInterfaces.FileContainerItem[]>
	}

	
}

declare module 'vso-node-api/interfaces/GalleryInterfaces' {
		declare export interface ExtensionAccount {
		accountId: string,
		accountName: string
	}

	declare export interface ExtensionFile {
		assetType: string,
		contentType: string,
		fileId: number,
		shortDescription: string,
		version: string
	}

	declare export interface ExtensionFilterResult {
		extensions: PublishedExtension[],
		pagingToken: string
	}

	declare export interface ExtensionPackage {
		extensionManifest: string
	}

	declare export interface ExtensionQuery {
		filters: QueryFilter[],
		flags: ExtensionQueryFlags
	}

	declare export interface ExtensionQueryResult {
		results: ExtensionFilterResult[]
	}

	declare export interface ExtensionVersion {
		files: ExtensionFile[],
		flags: ExtensionVersionFlags,
		lastUpdated: Date,
		properties: {
		key: string,
		value: string
	}[],
		validationResultMessage: string,
		version: string,
		versionDescription: string
	}

	declare export interface FilterCriteria {
		filterType: number,
		value: string
	}

	declare export interface PublishedExtension {
		allowedAccounts: ExtensionAccount[],
		categories: string[],
		displayName: string,
		extensionId: string,
		extensionName: string,
		flags: PublishedExtensionFlags,
		lastUpdated: Date,
		longDescription: string,
		publisher: PublisherFacts,
		shortDescription: string,
		tags: string[],
		versions: ExtensionVersion[]
	}

	declare export interface Publisher {
		displayName: string,
		extensions: PublishedExtension[],
		flags: PublisherFlags,
		lastUpdated: Date,
		longDescription: string,
		publisherId: string,
		publisherName: string,
		shortDescription: string
	}

	declare export interface PublisherFacts {
		displayName: string,
		publisherId: string,
		publisherName: string
	}

	declare export interface PublisherFilterResult {
		publishers: Publisher[]
	}

	declare export interface PublisherQuery {
		filters: QueryFilter[],
		flags: PublisherQueryFlags
	}

	declare export interface PublisherQueryResult {
		results: PublisherFilterResult[]
	}

	declare export interface QueryFilter {
		criteria: FilterCriteria[],
		direction: PagingDirection,
		pageSize: number,
		pagingToken: string
	}

			
}

declare module 'vso-node-api/GalleryApi' {
		declare export interface IGalleryApi {
		shareExtensionById(
		extensionId: string, accountName: string, onResult: (err: any, statusCode: number) => void
	): void,
		unshareExtensionById(
		extensionId: string, accountName: string, onResult: (err: any, statusCode: number) => void
	): void,
		shareExtension(
		publisherName: string, extensionName: string, accountName: string, onResult: (err: any, statusCode: number) => void
	): void,
		unshareExtension(
		publisherName: string, extensionName: string, accountName: string, onResult: (err: any, statusCode: number) => void
	): void,
		getAsset(
		extensionId: string, version: string, assetType: string, accountToken: string, acceptDefault: boolean, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getCategories(
		languages: string, onResult: (err: any, statusCode: number, categories: string[]) => void
	): void,
		getCertificate(
		publisherName: string, extensionName: string, version: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		queryExtensions(
		extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken: string, onResult: (
		err: any, statusCode: number, extensionquery: GalleryInterfaces.ExtensionQueryResult
	) => void
	): void,
		createExtension(
		extensionPackage: GalleryInterfaces.ExtensionPackage, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void,
		deleteExtensionById(
		extensionId: string, version: string, onResult: (err: any, statusCode: number) => void
	): void,
		getExtensionById(
		extensionId: string, version: string, flags: GalleryInterfaces.ExtensionQueryFlags, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void,
		updateExtensionById(
		extensionPackage: GalleryInterfaces.ExtensionPackage, extensionId: string, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void,
		createExtensionWithPublisher(
		extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void,
		deleteExtension(
		publisherName: string, extensionName: string, version: string, onResult: (err: any, statusCode: number) => void
	): void,
		getExtension(
		publisherName: string, extensionName: string, version: string, flags: GalleryInterfaces.ExtensionQueryFlags, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void,
		updateExtension(
		extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, extensionName: string, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void,
		queryPublishers(
		publisherQuery: GalleryInterfaces.PublisherQuery, onResult: (
		err: any, statusCode: number, publisherquery: GalleryInterfaces.PublisherQueryResult
	) => void
	): void,
		createPublisher(
		publisher: GalleryInterfaces.Publisher, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
	): void,
		deletePublisher(publisherName: string, onResult: (err: any, statusCode: number) => void): void,
		getPublisher(
		publisherName: string, flags: number, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
	): void,
		updatePublisher(
		publisher: GalleryInterfaces.Publisher, publisherName: string, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
	): void,
		generateKey(
		keyType: string, expireCurrentSeconds: number, onResult: (err: any, statusCode: number) => void
	): void,
		getSigningKey(
		keyType: string, onResult: (err: any, statusCode: number, signingkey: string) => void
	): void
	}

	declare export interface IQGalleryApi {
		getCategories(languages?: string): Q.Promise<string[]>,
		queryExtensions(
		extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken?: string
	): Q.Promise<GalleryInterfaces.ExtensionQueryResult>,
		createExtension(
		extensionPackage: GalleryInterfaces.ExtensionPackage
	): Q.Promise<GalleryInterfaces.PublishedExtension>,
		getExtensionById(
		extensionId: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags
	): Q.Promise<GalleryInterfaces.PublishedExtension>,
		updateExtensionById(
		extensionPackage: GalleryInterfaces.ExtensionPackage, extensionId: string
	): Q.Promise<GalleryInterfaces.PublishedExtension>,
		createExtensionWithPublisher(
		extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string
	): Q.Promise<GalleryInterfaces.PublishedExtension>,
		getExtension(
		publisherName: string, extensionName: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags
	): Q.Promise<GalleryInterfaces.PublishedExtension>,
		updateExtension(
		extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, extensionName: string
	): Q.Promise<GalleryInterfaces.PublishedExtension>,
		queryPublishers(
		publisherQuery: GalleryInterfaces.PublisherQuery
	): Q.Promise<GalleryInterfaces.PublisherQueryResult>,
		createPublisher(publisher: GalleryInterfaces.Publisher): Q.Promise<GalleryInterfaces.Publisher>,
		getPublisher(publisherName: string, flags?: number): Q.Promise<GalleryInterfaces.Publisher>,
		updatePublisher(
		publisher: GalleryInterfaces.Publisher, publisherName: string
	): Q.Promise<GalleryInterfaces.Publisher>,
		getSigningKey(keyType: string): Q.Promise<string>
	}

		declare export class GalleryApi extends basem$ClientApiBase, IGalleryApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		shareExtensionById(
		extensionId: string, accountName: string, onResult: (err: any, statusCode: number) => void
	): void;
		unshareExtensionById(
		extensionId: string, accountName: string, onResult: (err: any, statusCode: number) => void
	): void;
		shareExtension(
		publisherName: string, extensionName: string, accountName: string, onResult: (err: any, statusCode: number) => void
	): void;
		unshareExtension(
		publisherName: string, extensionName: string, accountName: string, onResult: (err: any, statusCode: number) => void
	): void;
		getAsset(
		extensionId: string, version: string, assetType: string, accountToken: string, acceptDefault: boolean, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getCategories(
		languages: string, onResult: (err: any, statusCode: number, categories: string[]) => void
	): void;
		getCertificate(
		publisherName: string, extensionName: string, version: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		queryExtensions(
		extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken: string, onResult: (
		err: any, statusCode: number, extensionquery: GalleryInterfaces.ExtensionQueryResult
	) => void
	): void;
		createExtension(
		extensionPackage: GalleryInterfaces.ExtensionPackage, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void;
		deleteExtensionById(
		extensionId: string, version: string, onResult: (err: any, statusCode: number) => void
	): void;
		getExtensionById(
		extensionId: string, version: string, flags: GalleryInterfaces.ExtensionQueryFlags, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void;
		updateExtensionById(
		extensionPackage: GalleryInterfaces.ExtensionPackage, extensionId: string, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void;
		createExtensionWithPublisher(
		extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void;
		deleteExtension(
		publisherName: string, extensionName: string, version: string, onResult: (err: any, statusCode: number) => void
	): void;
		getExtension(
		publisherName: string, extensionName: string, version: string, flags: GalleryInterfaces.ExtensionQueryFlags, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void;
		updateExtension(
		extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, extensionName: string, onResult: (
		err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension
	) => void
	): void;
		queryPublishers(
		publisherQuery: GalleryInterfaces.PublisherQuery, onResult: (
		err: any, statusCode: number, publisherquery: GalleryInterfaces.PublisherQueryResult
	) => void
	): void;
		createPublisher(
		publisher: GalleryInterfaces.Publisher, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
	): void;
		deletePublisher(publisherName: string, onResult: (err: any, statusCode: number) => void): void;
		getPublisher(
		publisherName: string, flags: number, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
	): void;
		updatePublisher(
		publisher: GalleryInterfaces.Publisher, publisherName: string, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
	): void;
		generateKey(
		keyType: string, expireCurrentSeconds: number, onResult: (err: any, statusCode: number) => void
	): void;
		getSigningKey(
		keyType: string, onResult: (err: any, statusCode: number, signingkey: string) => void
	): void
	}

	declare export class QGalleryApi extends basem$QClientApiBase, IQGalleryApi {
		api: GalleryApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		getCategories(languages?: string): Q.Promise<string[]>;
		queryExtensions(
		extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken?: string
	): Q.Promise<GalleryInterfaces.ExtensionQueryResult>;
		createExtension(
		extensionPackage: GalleryInterfaces.ExtensionPackage
	): Q.Promise<GalleryInterfaces.PublishedExtension>;
		getExtensionById(
		extensionId: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags
	): Q.Promise<GalleryInterfaces.PublishedExtension>;
		updateExtensionById(
		extensionPackage: GalleryInterfaces.ExtensionPackage, extensionId: string
	): Q.Promise<GalleryInterfaces.PublishedExtension>;
		createExtensionWithPublisher(
		extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string
	): Q.Promise<GalleryInterfaces.PublishedExtension>;
		getExtension(
		publisherName: string, extensionName: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags
	): Q.Promise<GalleryInterfaces.PublishedExtension>;
		updateExtension(
		extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, extensionName: string
	): Q.Promise<GalleryInterfaces.PublishedExtension>;
		queryPublishers(
		publisherQuery: GalleryInterfaces.PublisherQuery
	): Q.Promise<GalleryInterfaces.PublisherQueryResult>;
		createPublisher(publisher: GalleryInterfaces.Publisher): Q.Promise<GalleryInterfaces.Publisher>;
		getPublisher(publisherName: string, flags?: number): Q.Promise<GalleryInterfaces.Publisher>;
		updatePublisher(
		publisher: GalleryInterfaces.Publisher, publisherName: string
	): Q.Promise<GalleryInterfaces.Publisher>;
		getSigningKey(keyType: string): Q.Promise<string>
	}

	
}

declare module 'vso-node-api/interfaces/GitInterfaces' {
		declare export interface AssociatedWorkItem {
		assignedTo: string,
		id: number,
		state: string,
		title: string,
		url: string,
		webUrl: string,
		workItemType: string
	}

	declare export interface Change<T> {
		changeType: VersionControlChangeType,
		item: T,
		newContent: ItemContent,
		sourceServerItem: string,
		url: string
	}

	declare export interface ChangeCountDictionary {
		
	}

	declare export interface ChangeList<T> {
		allChangesIncluded: boolean,
		changeCounts: {
		[key: number]: number
	},
		changes: Change<T>[],
		comment: string,
		commentTruncated: boolean,
		creationDate: Date,
		notes: CheckinNote[],
		owner: string,
		ownerDisplayName: string,
		ownerId: string,
		sortDate: Date,
		version: string
	}

	declare export interface ChangeListSearchCriteria {
		compareVersion: string,
		excludeDeletes: boolean,
		followRenames: boolean,
		fromDate: string,
		fromVersion: string,
		itemPath: string,
		itemVersion: string,
		skip: number,
		toDate: string,
		top: number,
		toVersion: string,
		user: string
	}

	declare export interface CheckinNote {
		name: string,
		value: string
	}

	declare export interface FileContentMetadata {
		contentType: string,
		encoding: number,
		extension: string,
		fileName: string,
		isBinary: boolean,
		isImage: boolean,
		vsLink: string
	}

	declare export interface GitBaseVersionDescriptor {
		baseVersion: string,
		baseVersionOptions: GitVersionOptions,
		baseVersionType: GitVersionType
	}

	declare export interface GitBlobRef {
		_links: any,
		objectId: string,
		size: number,
		url: string
	}

	declare export interface GitBranchStats {
		aheadCount: number,
		behindCount: number,
		commit: GitCommitRef,
		isBaseVersion: boolean,
		name: string
	}

	declare export interface GitChange {
		
	}

	declare export interface GitCommit {
		push: GitPushRef,
		treeId: string
	}

	declare export interface GitCommitChanges {
		changeCounts: ChangeCountDictionary,
		changes: GitChange[]
	}

	declare export interface GitCommitDiffs {
		aheadCount: number,
		allChangesIncluded: boolean,
		baseCommit: string,
		behindCount: number,
		changeCounts: {
		[key: number]: number
	},
		changes: GitChange[],
		commonCommit: string,
		targetCommit: string
	}

	declare export interface GitCommitRef {
		_links: any,
		author: GitUserDate,
		changeCounts: ChangeCountDictionary,
		changes: GitChange[],
		comment: string,
		commentTruncated: boolean,
		commitId: string,
		committer: GitUserDate,
		parents: string[],
		remoteUrl: string,
		url: string
	}

	declare export interface GitCommitToCreate {
		baseRef: GitRef,
		comment: string,
		pathActions: GitPathAction[]
	}

	declare export interface GitHistoryQueryResults {
		startingCommitId: string,
		unpopulatedCount: number,
		unprocessedCount: number
	}

	declare export interface GitItem {
		commitId: string,
		gitObjectType: GitObjectType,
		latestProcessedChange: GitCommitRef,
		objectId: string,
		originalObjectId: string
	}

	declare export interface GitItemDescriptor {
		path: string,
		recursionLevel: VersionControlRecursionType,
		version: string,
		versionOptions: GitVersionOptions,
		versionType: GitVersionType
	}

	declare export interface GitItemRequestData {
		includeContentMetadata: boolean,
		includeLinks: boolean,
		itemDescriptors: GitItemDescriptor[],
		latestProcessedChange: boolean
	}

	declare export interface GitMediaObjectRef {
		_links: any,
		id: string,
		oid: string,
		size: number,
		url: string
	}

	declare export interface GitPathAction {
		action: GitPathActions,
		base64Content: string,
		path: string,
		rawTextContent: string,
		targetPath: string
	}

	declare export interface GitPullRequest {
		_links: any,
		closedDate: Date,
		codeReviewId: number,
		createdBy: VSSInterfaces.IdentityRef,
		creationDate: Date,
		description: string,
		lastMergeCommit: GitCommitRef,
		lastMergeSourceCommit: GitCommitRef,
		lastMergeTargetCommit: GitCommitRef,
		mergeId: string,
		mergeStatus: PullRequestAsyncStatus,
		pullRequestId: number,
		remoteUrl: string,
		repository: GitRepository,
		reviewers: IdentityRefWithVote[],
		sourceRefName: string,
		status: PullRequestStatus,
		targetRefName: string,
		title: string,
		upgraded: boolean,
		url: string
	}

	declare export interface GitPullRequestSearchCriteria {
		creatorId: string,
		includeLinks: boolean,
		repositoryId: string,
		reviewerId: string,
		sourceRefName: string,
		status: PullRequestStatus,
		targetRefName: string
	}

	declare export interface GitPush {
		commits: GitCommitRef[],
		refUpdates: GitRefUpdate[],
		repository: GitRepository
	}

	declare export interface GitPushEventData {
		afterId: string,
		beforeId: string,
		branch: string,
		commits: GitCommit[],
		repository: GitRepository
	}

	declare export interface GitPushRef {
		_links: any,
		date: Date,
		pushCorrelationId: string,
		pushedBy: VSSInterfaces.IdentityRef,
		pushId: number,
		url: string
	}

	declare export interface GitPushSearchCriteria {
		fromDate: Date,
		includeLinks: boolean,
		includeRefUpdates: boolean,
		pusherId: string,
		refName: string,
		toDate: Date
	}

	declare export interface GitQueryCommitsCriteria {
		$skip: number,
		$top: number,
		author: string,
		compareVersion: GitVersionDescriptor,
		excludeDeletes: boolean,
		fromCommitId: string,
		fromDate: string,
		ids: string[],
		includeLinks: boolean,
		itemPath: string,
		itemVersion: GitVersionDescriptor,
		toCommitId: string,
		toDate: string,
		user: string
	}

	declare export interface GitRef {
		_links: any,
		isLockedBy: VSSInterfaces.IdentityRef,
		name: string,
		objectId: string,
		url: string
	}

	declare export interface GitRefUpdate {
		name: string,
		newObjectId: string,
		oldObjectId: string,
		repositoryId: string
	}

	declare export interface GitRefUpdateResult {
		customMessage: string,
		name: string,
		newObjectId: string,
		oldObjectId: string,
		rejectedBy: string,
		repositoryId: string,
		success: boolean,
		updateStatus: GitRefUpdateStatus
	}

	declare export interface GitRefUpdateResultSet {
		countFailed: number,
		countSucceeded: number,
		pushCorrelationId: string,
		pushIds: {
		[key: number]: number
	},
		pushTime: Date,
		results: GitRefUpdateResult[]
	}

	declare export interface GitRepository {
		_links: any,
		defaultBranch: string,
		id: string,
		name: string,
		project: TfsInterfaces.TeamProjectReference,
		remoteUrl: string,
		url: string
	}

	declare export interface GitTargetVersionDescriptor {
		targetVersion: string,
		targetVersionOptions: GitVersionOptions,
		targetVersionType: GitVersionType
	}

	declare export interface GitTreeEntryRef {
		gitObjectType: GitObjectType,
		mode: string,
		objectId: string,
		relativePath: string,
		size: number,
		url: string
	}

	declare export interface GitTreeRef {
		_links: any,
		objectId: string,
		size: number,
		treeEntries: GitTreeEntryRef[],
		url: string
	}

	declare export interface GitUserDate {
		date: Date,
		email: string,
		name: string
	}

	declare export interface GitVersionDescriptor {
		version: string,
		versionOptions: GitVersionOptions,
		versionType: GitVersionType
	}

	declare export interface HistoryEntry<T> {
		changeList: ChangeList<T>,
		itemChangeType: VersionControlChangeType,
		serverItem: string
	}

	declare export interface HistoryQueryResults<T> {
		moreResultsAvailable: boolean,
		results: HistoryEntry<T>[]
	}

	declare export interface IdentityRefWithVote {
		isRequired: boolean,
		reviewerUrl: string,
		vote: number,
		votedFor: IdentityRefWithVote[]
	}

	declare export interface IncludedGitCommit {
		commitId: string,
		commitTime: Date,
		parentCommitIds: string[],
		repositoryId: string
	}

	declare export interface ItemContent {
		content: string,
		contentType: ItemContentType
	}

	declare export interface ItemDetailsOptions {
		includeContentMetadata: boolean,
		recursionLevel: VersionControlRecursionType
	}

	declare export interface ItemModel {
		_links: any,
		contentMetadata: FileContentMetadata,
		isFolder: boolean,
		isSymLink: boolean,
		path: string,
		url: string
	}

	declare export interface TfvcBranch {
		children: TfvcBranch[],
		mappings: TfvcBranchMapping[],
		parent: TfvcShallowBranchRef,
		relatedBranches: TfvcShallowBranchRef[]
	}

	declare export interface TfvcBranchMapping {
		depth: string,
		serverItem: string,
		type: string
	}

	declare export interface TfvcBranchRef {
		_links: any,
		createdDate: Date,
		description: string,
		isDeleted: boolean,
		owner: VSSInterfaces.IdentityRef,
		url: string
	}

	declare export interface TfvcChange {
		mergeSources: TfvcMergeSource[],
		pendingVersion: number
	}

	declare export interface TfvcChangeset {
		accountId: string,
		changes: TfvcChange[],
		checkinNotes: CheckinNote[],
		collectionId: string,
		hasMoreChanges: boolean,
		policyOverride: TfvcPolicyOverrideInfo,
		workItems: AssociatedWorkItem[]
	}

	declare export interface TfvcChangesetRef {
		_links: any,
		author: VSSInterfaces.IdentityRef,
		changesetId: number,
		checkedInBy: VSSInterfaces.IdentityRef,
		comment: string,
		commentTruncated: boolean,
		createdDate: Date,
		url: string
	}

	declare export interface TfvcChangesetSearchCriteria {
		author: string,
		followRenames: boolean,
		fromDate: string,
		fromId: number,
		includeLinks: boolean,
		path: string,
		toDate: string,
		toId: number
	}

	declare export interface TfvcChangesetsRequestData {
		changesetIds: number[],
		commentLength: number,
		includeLinks: boolean
	}

	declare export interface TfvcCheckinEventData {
		changeset: TfvcChangeset,
		project: TfsInterfaces.TeamProjectReference
	}

	declare export interface TfvcHistoryEntry {
		encoding: number,
		fileId: number
	}

	declare export interface TfvcItem {
		changeDate: Date,
		deletionId: number,
		isBranch: boolean,
		isPendingChange: boolean,
		version: number
	}

	declare export interface TfvcItemDescriptor {
		path: string,
		recursionLevel: VersionControlRecursionType,
		version: string,
		versionOption: TfvcVersionOption,
		versionType: TfvcVersionType
	}

	declare export interface TfvcItemRequestData {
		includeContentMetadata: boolean,
		includeLinks: boolean,
		itemDescriptors: TfvcItemDescriptor[]
	}

	declare export interface TfvcLabel {
		items: TfvcItem[]
	}

	declare export interface TfvcLabelRef {
		_links: any,
		description: string,
		id: number,
		labelScope: string,
		modifiedDate: Date,
		name: string,
		owner: VSSInterfaces.IdentityRef,
		url: string
	}

	declare export interface TfvcLabelRequestData {
		includeLinks: boolean,
		itemLabelFilter: string,
		labelScope: string,
		maxItemCount: number,
		name: string,
		owner: string
	}

	declare export interface TfvcMergeSource {
		isRename: boolean,
		serverItem: string,
		versionFrom: number,
		versionTo: number
	}

	declare export interface TfvcPolicyFailureInfo {
		message: string,
		policyName: string
	}

	declare export interface TfvcPolicyOverrideInfo {
		comment: string,
		policyFailures: TfvcPolicyFailureInfo[]
	}

	declare export interface TfvcShallowBranchRef {
		path: string
	}

	declare export interface TfvcShelveset {
		changes: TfvcChange[],
		notes: CheckinNote[],
		policyOverride: TfvcPolicyOverrideInfo,
		workItems: AssociatedWorkItem[]
	}

	declare export interface TfvcShelvesetRef {
		_links: any,
		comment: string,
		commentTruncated: boolean,
		createdDate: Date,
		id: string,
		name: string,
		owner: VSSInterfaces.IdentityRef,
		url: string
	}

	declare export interface TfvcShelvesetRequestData {
		includeDetails: boolean,
		includeLinks: boolean,
		includeWorkItems: boolean,
		maxChangeCount: number,
		maxCommentLength: number,
		name: string,
		owner: string
	}

	declare export interface TfvcVersionDescriptor {
		version: string,
		versionOption: TfvcVersionOption,
		versionType: TfvcVersionType
	}

	declare export interface UpdateRefsRequest {
		refUpdateRequests: GitRefUpdate[],
		updateMode: GitRefUpdateMode
	}

	declare export interface VersionControlProjectInfo {
		project: TfsInterfaces.TeamProjectReference,
		supportsGit: boolean,
		supportsTFVC: boolean
	}

			
}

declare module 'vso-node-api/GitApi' {
		declare export interface IGitApi {
		getBlob(
		repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, Blob: GitInterfaces.GitBlobRef) => void
	): void,
		getBlobContent(
		repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getBlobsZip(
		blobIds: string[], repositoryId: string, project: string, filename: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getBlobZip(
		repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getBranch(
		repositoryId: string, name: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats) => void
	): void,
		getBranches(
		repositoryId: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (
		err: any, statusCode: number, BranchStats: GitInterfaces.GitBranchStats[]
	) => void
	): void,
		getChanges(
		commitId: string, repositoryId: string, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Change: GitInterfaces.GitCommitChanges) => void
	): void,
		createCommit(
		repositoryId: string, project: string, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void
	): void,
		getCommit(
		commitId: string, repositoryId: string, project: string, changeCount: number, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void
	): void,
		getCommits(
		repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project: string, skip: number, top: number, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void
	): void,
		getPushCommits(
		repositoryId: string, pushId: number, project: string, top: number, skip: number, includeLinks: boolean, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void
	): void,
		getCommitsBatch(
		searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project: string, skip: number, top: number, onResult: (
		err: any, statusCode: number, CommitsBatch: GitInterfaces.GitCommitRef[]
	) => void
	): void,
		getItem(
		repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Item: GitInterfaces.GitItem) => void
	): void,
		getItemContent(
		repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getItems(
		repositoryId: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, includeLinks: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Items: GitInterfaces.GitItem[]) => void
	): void,
		getItemText(
		repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getItemZip(
		repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getItemsBatch(
		requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project: string, onResult: (err: any, statusCode: number, ItemsBatch: GitInterfaces.GitItem[][]) => void
	): void,
		createPullRequestReviewer(
		reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (
		err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote
	) => void
	): void,
		createPullRequestReviewers(
		reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project: string, onResult: (
		err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]
	) => void
	): void,
		deletePullRequestReviewer(
		repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number) => void
	): void,
		getPullRequestReviewer(
		repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (
		err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote
	) => void
	): void,
		getPullRequestReviewers(
		repositoryId: string, pullRequestId: number, project: string, onResult: (
		err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]
	) => void
	): void,
		createPullRequest(
		gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project: string, onResult: (
		err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest
	) => void
	): void,
		getPullRequest(
		repositoryId: string, pullRequestId: number, project: string, maxCommentLength: number, skip: number, top: number, onResult: (
		err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest
	) => void
	): void,
		getPullRequests(
		repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project: string, maxCommentLength: number, skip: number, top: number, onResult: (
		err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]
	) => void
	): void,
		updatePullRequest(
		gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project: string, onResult: (
		err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest
	) => void
	): void,
		getPullRequestWorkItems(
		repositoryId: string, pullRequestId: number, project: string, commitsTop: number, commitsSkip: number, onResult: (
		err: any, statusCode: number, PullRequestWorkItems: GitInterfaces.AssociatedWorkItem[]
	) => void
	): void,
		createPush(
		push: GitInterfaces.GitPush, repositoryId: string, project: string, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void
	): void,
		getPush(
		repositoryId: string, pushId: number, project: string, includeCommits: number, includeRefUpdates: boolean, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void
	): void,
		getPushes(
		repositoryId: string, project: string, skip: number, top: number, searchCriteria: GitInterfaces.GitPushSearchCriteria, onResult: (err: any, statusCode: number, pushes: GitInterfaces.GitPush[]) => void
	): void,
		getRefs(
		repositoryId: string, project: string, filter: string, includeLinks: boolean, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRef[]) => void
	): void,
		updateRefs(
		refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project: string, projectId: string, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRefUpdateResult[]) => void
	): void,
		createRepository(
		gitRepositoryToCreate: GitInterfaces.GitRepository, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
	): void,
		deleteRepository(
		repositoryId: string, project: string, onResult: (err: any, statusCode: number) => void
	): void,
		getRepositories(
		project: string, includeLinks: boolean, onResult: (
		err: any, statusCode: number, Repositories: GitInterfaces.GitRepository[]
	) => void
	): void,
		getRepository(
		repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
	): void,
		updateRepository(
		newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
	): void,
		getTree(
		repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, Tree: GitInterfaces.GitTreeRef) => void
	): void,
		getTreeZip(
		repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void
	}

	declare export interface IQGitApi {
		getBlob(
		repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string
	): Q.Promise<GitInterfaces.GitBlobRef>,
		getBranch(
		repositoryId: string, name: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
	): Q.Promise<GitInterfaces.GitBranchStats>,
		getBranches(
		repositoryId: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
	): Q.Promise<GitInterfaces.GitBranchStats[]>,
		getChanges(
		commitId: string, repositoryId: string, project?: string, top?: number, skip?: number
	): Q.Promise<GitInterfaces.GitCommitChanges>,
		createCommit(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitCommit>,
		getCommit(
		commitId: string, repositoryId: string, project?: string, changeCount?: number
	): Q.Promise<GitInterfaces.GitCommit>,
		getCommits(
		repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number
	): Q.Promise<GitInterfaces.GitCommitRef[]>,
		getPushCommits(
		repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean
	): Q.Promise<GitInterfaces.GitCommitRef[]>,
		getCommitsBatch(
		searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number
	): Q.Promise<GitInterfaces.GitCommitRef[]>,
		getItem(
		repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor
	): Q.Promise<GitInterfaces.GitItem>,
		getItems(
		repositoryId: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor
	): Q.Promise<GitInterfaces.GitItem[]>,
		getItemsBatch(
		requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project?: string
	): Q.Promise<GitInterfaces.GitItem[][]>,
		createPullRequestReviewer(
		reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string
	): Q.Promise<GitInterfaces.IdentityRefWithVote>,
		createPullRequestReviewers(
		reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string
	): Q.Promise<GitInterfaces.IdentityRefWithVote[]>,
		getPullRequestReviewer(
		repositoryId: string, pullRequestId: number, reviewerId: string, project?: string
	): Q.Promise<GitInterfaces.IdentityRefWithVote>,
		getPullRequestReviewers(
		repositoryId: string, pullRequestId: number, project?: string
	): Q.Promise<GitInterfaces.IdentityRefWithVote[]>,
		createPullRequest(
		gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project?: string
	): Q.Promise<GitInterfaces.GitPullRequest>,
		getPullRequest(
		repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number
	): Q.Promise<GitInterfaces.GitPullRequest>,
		getPullRequests(
		repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number
	): Q.Promise<GitInterfaces.GitPullRequest[]>,
		updatePullRequest(
		gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string
	): Q.Promise<GitInterfaces.GitPullRequest>,
		getPullRequestWorkItems(
		repositoryId: string, pullRequestId: number, project?: string, commitsTop?: number, commitsSkip?: number
	): Q.Promise<GitInterfaces.AssociatedWorkItem[]>,
		createPush(
		push: GitInterfaces.GitPush, repositoryId: string, project?: string
	): Q.Promise<GitInterfaces.GitPush>,
		getPush(
		repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean
	): Q.Promise<GitInterfaces.GitPush>,
		getPushes(
		repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: GitInterfaces.GitPushSearchCriteria
	): Q.Promise<GitInterfaces.GitPush[]>,
		getRefs(
		repositoryId: string, project?: string, filter?: string, includeLinks?: boolean
	): Q.Promise<GitInterfaces.GitRef[]>,
		updateRefs(
		refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string
	): Q.Promise<GitInterfaces.GitRefUpdateResult[]>,
		createRepository(
		gitRepositoryToCreate: GitInterfaces.GitRepository, project?: string
	): Q.Promise<GitInterfaces.GitRepository>,
		getRepositories(
		project?: string, includeLinks?: boolean
	): Q.Promise<GitInterfaces.GitRepository[]>,
		getRepository(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitRepository>,
		updateRepository(
		newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project?: string
	): Q.Promise<GitInterfaces.GitRepository>,
		getTree(
		repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string
	): Q.Promise<GitInterfaces.GitTreeRef>
	}

		declare export class GitApi extends basem$ClientApiBase, IGitApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		getBlob(
		repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, Blob: GitInterfaces.GitBlobRef) => void
	): void;
		getBlobContent(
		repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getBlobsZip(
		blobIds: string[], repositoryId: string, project: string, filename: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getBlobZip(
		repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getBranch(
		repositoryId: string, name: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats) => void
	): void;
		getBranches(
		repositoryId: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (
		err: any, statusCode: number, BranchStats: GitInterfaces.GitBranchStats[]
	) => void
	): void;
		getChanges(
		commitId: string, repositoryId: string, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Change: GitInterfaces.GitCommitChanges) => void
	): void;
		createCommit(
		repositoryId: string, project: string, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void
	): void;
		getCommit(
		commitId: string, repositoryId: string, project: string, changeCount: number, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void
	): void;
		getCommits(
		repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project: string, skip: number, top: number, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void
	): void;
		getPushCommits(
		repositoryId: string, pushId: number, project: string, top: number, skip: number, includeLinks: boolean, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void
	): void;
		getCommitsBatch(
		searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project: string, skip: number, top: number, onResult: (
		err: any, statusCode: number, CommitsBatch: GitInterfaces.GitCommitRef[]
	) => void
	): void;
		getItem(
		repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Item: GitInterfaces.GitItem) => void
	): void;
		getItemContent(
		repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getItems(
		repositoryId: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, includeLinks: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Items: GitInterfaces.GitItem[]) => void
	): void;
		getItemText(
		repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getItemZip(
		repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getItemsBatch(
		requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project: string, onResult: (err: any, statusCode: number, ItemsBatch: GitInterfaces.GitItem[][]) => void
	): void;
		createPullRequestReviewer(
		reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (
		err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote
	) => void
	): void;
		createPullRequestReviewers(
		reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project: string, onResult: (
		err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]
	) => void
	): void;
		deletePullRequestReviewer(
		repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number) => void
	): void;
		getPullRequestReviewer(
		repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (
		err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote
	) => void
	): void;
		getPullRequestReviewers(
		repositoryId: string, pullRequestId: number, project: string, onResult: (
		err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]
	) => void
	): void;
		createPullRequest(
		gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project: string, onResult: (
		err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest
	) => void
	): void;
		getPullRequest(
		repositoryId: string, pullRequestId: number, project: string, maxCommentLength: number, skip: number, top: number, onResult: (
		err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest
	) => void
	): void;
		getPullRequests(
		repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project: string, maxCommentLength: number, skip: number, top: number, onResult: (
		err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]
	) => void
	): void;
		updatePullRequest(
		gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project: string, onResult: (
		err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest
	) => void
	): void;
		getPullRequestWorkItems(
		repositoryId: string, pullRequestId: number, project: string, commitsTop: number, commitsSkip: number, onResult: (
		err: any, statusCode: number, PullRequestWorkItems: GitInterfaces.AssociatedWorkItem[]
	) => void
	): void;
		createPush(
		push: GitInterfaces.GitPush, repositoryId: string, project: string, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void
	): void;
		getPush(
		repositoryId: string, pushId: number, project: string, includeCommits: number, includeRefUpdates: boolean, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void
	): void;
		getPushes(
		repositoryId: string, project: string, skip: number, top: number, searchCriteria: GitInterfaces.GitPushSearchCriteria, onResult: (err: any, statusCode: number, pushes: GitInterfaces.GitPush[]) => void
	): void;
		getRefs(
		repositoryId: string, project: string, filter: string, includeLinks: boolean, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRef[]) => void
	): void;
		updateRefs(
		refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project: string, projectId: string, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRefUpdateResult[]) => void
	): void;
		createRepository(
		gitRepositoryToCreate: GitInterfaces.GitRepository, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
	): void;
		deleteRepository(
		repositoryId: string, project: string, onResult: (err: any, statusCode: number) => void
	): void;
		getRepositories(
		project: string, includeLinks: boolean, onResult: (
		err: any, statusCode: number, Repositories: GitInterfaces.GitRepository[]
	) => void
	): void;
		getRepository(
		repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
	): void;
		updateRepository(
		newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
	): void;
		getTree(
		repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, Tree: GitInterfaces.GitTreeRef) => void
	): void;
		getTreeZip(
		repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void
	}

	declare export class QGitApi extends basem$QClientApiBase, IQGitApi {
		api: GitApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		getBlob(
		repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string
	): Q.Promise<GitInterfaces.GitBlobRef>;
		getBranch(
		repositoryId: string, name: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
	): Q.Promise<GitInterfaces.GitBranchStats>;
		getBranches(
		repositoryId: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
	): Q.Promise<GitInterfaces.GitBranchStats[]>;
		getChanges(
		commitId: string, repositoryId: string, project?: string, top?: number, skip?: number
	): Q.Promise<GitInterfaces.GitCommitChanges>;
		createCommit(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitCommit>;
		getCommit(
		commitId: string, repositoryId: string, project?: string, changeCount?: number
	): Q.Promise<GitInterfaces.GitCommit>;
		getCommits(
		repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number
	): Q.Promise<GitInterfaces.GitCommitRef[]>;
		getPushCommits(
		repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean
	): Q.Promise<GitInterfaces.GitCommitRef[]>;
		getCommitsBatch(
		searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number
	): Q.Promise<GitInterfaces.GitCommitRef[]>;
		getItem(
		repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor
	): Q.Promise<GitInterfaces.GitItem>;
		getItems(
		repositoryId: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor
	): Q.Promise<GitInterfaces.GitItem[]>;
		getItemsBatch(
		requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project?: string
	): Q.Promise<GitInterfaces.GitItem[][]>;
		createPullRequestReviewer(
		reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string
	): Q.Promise<GitInterfaces.IdentityRefWithVote>;
		createPullRequestReviewers(
		reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string
	): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
		getPullRequestReviewer(
		repositoryId: string, pullRequestId: number, reviewerId: string, project?: string
	): Q.Promise<GitInterfaces.IdentityRefWithVote>;
		getPullRequestReviewers(
		repositoryId: string, pullRequestId: number, project?: string
	): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
		createPullRequest(
		gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project?: string
	): Q.Promise<GitInterfaces.GitPullRequest>;
		getPullRequest(
		repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number
	): Q.Promise<GitInterfaces.GitPullRequest>;
		getPullRequests(
		repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number
	): Q.Promise<GitInterfaces.GitPullRequest[]>;
		updatePullRequest(
		gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string
	): Q.Promise<GitInterfaces.GitPullRequest>;
		getPullRequestWorkItems(
		repositoryId: string, pullRequestId: number, project?: string, commitsTop?: number, commitsSkip?: number
	): Q.Promise<GitInterfaces.AssociatedWorkItem[]>;
		createPush(
		push: GitInterfaces.GitPush, repositoryId: string, project?: string
	): Q.Promise<GitInterfaces.GitPush>;
		getPush(
		repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean
	): Q.Promise<GitInterfaces.GitPush>;
		getPushes(
		repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: GitInterfaces.GitPushSearchCriteria
	): Q.Promise<GitInterfaces.GitPush[]>;
		getRefs(
		repositoryId: string, project?: string, filter?: string, includeLinks?: boolean
	): Q.Promise<GitInterfaces.GitRef[]>;
		updateRefs(
		refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string
	): Q.Promise<GitInterfaces.GitRefUpdateResult[]>;
		createRepository(
		gitRepositoryToCreate: GitInterfaces.GitRepository, project?: string
	): Q.Promise<GitInterfaces.GitRepository>;
		getRepositories(
		project?: string, includeLinks?: boolean
	): Q.Promise<GitInterfaces.GitRepository[]>;
		getRepository(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitRepository>;
		updateRepository(
		newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project?: string
	): Q.Promise<GitInterfaces.GitRepository>;
		getTree(
		repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string
	): Q.Promise<GitInterfaces.GitTreeRef>
	}

	
}

declare module 'vso-node-api/interfaces/TaskAgentInterfaces' {
		declare export interface AgentPoolEvent {
		eventType: string,
		pool: TaskAgentPool
	}

	declare export interface AgentQueueEvent {
		eventType: string,
		queue: TaskAgentQueue
	}

	declare export interface AgentRefreshMessage {
		agentId: number,
		timeout: any
	}

	declare export interface EndpointAuthorization {
		parameters: {
		[key: string]: string
	},
		scheme: string
	}

	declare export interface Issue {
		category: string,
		data: {
		[key: string]: string
	},
		message: string,
		type: IssueType
	}

	declare export interface JobAssignedEvent {
		request: TaskAgentJobRequest
	}

	declare export interface JobCancelMessage {
		jobId: string,
		timeout: any
	}

	declare export interface JobCompletedEvent {
		result: TaskResult
	}

	declare export interface JobEnvironment {
		endpoints: ServiceEndpoint[],
		mask: MaskHint[],
		options: {
		[key: number]: JobOption
	},
		systemConnection: ServiceEndpoint,
		variables: {
		[key: string]: string
	}
	}

	declare export interface JobEvent {
		jobId: string,
		name: string
	}

	declare export interface JobOption {
		data: {
		[key: string]: string
	},
		id: string
	}

	declare export interface JobRequestMessage {
		environment: JobEnvironment,
		jobId: string,
		jobName: string,
		lockedUntil: Date,
		lockToken: string,
		plan: TaskOrchestrationPlanReference,
		requestId: number,
		tasks: TaskInstance[],
		timeline: TimelineReference
	}

	declare export interface MaskHint {
		type: MaskType,
		value: string
	}

	declare export interface PlanEnvironment {
		mask: MaskHint[],
		options: {
		[key: number]: JobOption
	},
		variables: {
		[key: string]: string
	}
	}

	declare export interface ServiceEndpoint {
		administratorsGroup: VSSInterfaces.IdentityRef,
		authorization: EndpointAuthorization,
		createdBy: VSSInterfaces.IdentityRef,
		data: {
		[key: string]: string
	},
		description: string,
		groupScopeId: string,
		id: string,
		name: string,
		readersGroup: VSSInterfaces.IdentityRef,
		type: string,
		url: string
	}

	declare export interface TaskAgent {
		createdOn: Date,
		enabled: boolean,
		maxParallelism: number,
		properties: any,
		status: TaskAgentStatus,
		statusChangedOn: Date,
		systemCapabilities: {
		[key: string]: string
	},
		userCapabilities: {
		[key: string]: string
	}
	}

	declare export interface TaskAgentJobRequest {
		assignTime: Date,
		demands: any[],
		finishTime: Date,
		hostId: string,
		jobId: string,
		lockedUntil: Date,
		planId: string,
		planType: string,
		queueTime: Date,
		receiveTime: Date,
		requestId: number,
		reservedAgent: TaskAgentReference,
		result: TaskResult,
		scopeId: string,
		serviceOwner: string
	}

	declare export interface TaskAgentMessage {
		body: string,
		messageId: number,
		messageType: string
	}

	declare export interface TaskAgentPool {
		administratorsGroup: VSSInterfaces.IdentityRef,
		autoProvision: boolean,
		createdBy: VSSInterfaces.IdentityRef,
		createdOn: Date,
		groupScopeId: string,
		isHosted: boolean,
		properties: any,
		serviceAccountsGroup: VSSInterfaces.IdentityRef,
		size: number
	}

	declare export interface TaskAgentPoolReference {
		id: number,
		name: string,
		scope: string
	}

	declare export interface TaskAgentQueue {
		id: number,
		name: string,
		pool: TaskAgentPoolReference
	}

	declare export interface TaskAgentReference {
		id: number,
		name: string,
		version: string
	}

	declare export interface TaskAgentSession {
		agent: TaskAgentReference,
		ownerName: string,
		sessionId: string,
		systemCapabilities: {
		[key: string]: string
	}
	}

	declare export interface TaskAttachment {
		_links: any,
		createdOn: Date,
		lastChangedBy: string,
		lastChangedOn: Date,
		name: string,
		type: string
	}

	declare export interface TaskDefinition {
		agentExecution: TaskExecution,
		author: string,
		category: string,
		contentsUploaded: boolean,
		demands: any[],
		description: string,
		friendlyName: string,
		groups: TaskGroupDefinition[],
		helpMarkDown: string,
		hostType: string,
		iconUrl: string,
		id: string,
		inputs: TaskInputDefinition[],
		instanceNameFormat: string,
		minimumAgentVersion: string,
		name: string,
		packageLocation: string,
		packageType: string,
		serverOwned: boolean,
		sourceDefinitions: TaskSourceDefinition[],
		sourceLocation: string,
		version: TaskVersion,
		visibility: string[]
	}

	declare export interface TaskDefinitionEndpoint {
		connectionId: string,
		scope: string,
		selector: string,
		taskId: string,
		url: string
	}

	declare export interface TaskExecution {
		execTask: TaskReference,
		platformInstructions: {
		[key: string]: {
		[key: string]: string
	}
	}
	}

	declare export interface TaskGroupDefinition {
		displayName: string,
		isExpanded: boolean,
		name: string
	}

	declare export interface TaskInputDefinition {
		defaultValue: string,
		groupName: string,
		helpMarkDown: string,
		label: string,
		name: string,
		options: {
		[key: string]: string
	},
		properties: {
		[key: string]: string
	},
		required: boolean,
		type: string,
		visibleRule: string
	}

	declare export interface TaskInstance {
		alwaysRun: boolean,
		continueOnError: boolean,
		displayName: string,
		enabled: boolean,
		instanceId: string
	}

	declare export interface TaskLog {
		createdOn: Date,
		indexLocation: string,
		lastChangedOn: Date,
		lineCount: number,
		path: string
	}

	declare export interface TaskLogReference {
		id: number,
		location: string
	}

	declare export interface TaskOrchestrationContainer {
		children: TaskOrchestrationItem[],
		continueOnError: boolean,
		parallel: boolean,
		rollback: TaskOrchestrationContainer
	}

	declare export interface TaskOrchestrationItem {
		itemType: TaskOrchestrationItemType
	}

	declare export interface TaskOrchestrationJob {
		demands: any[],
		executeAs: VSSInterfaces.IdentityRef,
		executionTimeout: any,
		instanceId: string,
		name: string,
		tasks: TaskInstance[],
		variables: {
		[key: string]: string
	}
	}

	declare export interface TaskOrchestrationPlan {
		environment: PlanEnvironment,
		finishTime: Date,
		implementation: TaskOrchestrationContainer,
		result: TaskResult,
		resultCode: string,
		startTime: Date,
		state: TaskOrchestrationPlanState,
		timeline: TimelineReference
	}

	declare export interface TaskOrchestrationPlanReference {
		artifactLocation: string,
		artifactUri: string,
		planId: string,
		planType: string,
		scopeIdentifier: string,
		version: number
	}

	declare export interface TaskPackageMetadata {
		type: string,
		url: string,
		version: string
	}

	declare export interface TaskReference {
		id: string,
		inputs: {
		[key: string]: string
	},
		name: string,
		version: string
	}

	declare export interface TaskSourceDefinition {
		authKey: string,
		endpoint: string,
		selector: string,
		target: string
	}

	declare export interface TaskVersion {
		isTest: boolean,
		major: number,
		minor: number,
		patch: number
	}

	declare export interface TeamProjectReference {
		abbreviation: string,
		description: string,
		id: string,
		name: string,
		state: any,
		url: string
	}

	declare export interface Timeline {
		lastChangedBy: string,
		lastChangedOn: Date,
		records: TimelineRecord[]
	}

	declare export interface TimelineRecord {
		changeId: number,
		currentOperation: string,
		details: TimelineReference,
		errorCount: number,
		finishTime: Date,
		id: string,
		issues: Issue[],
		lastModified: Date,
		location: string,
		log: TaskLogReference,
		name: string,
		order: number,
		parentId: string,
		percentComplete: number,
		result: TaskResult,
		resultCode: string,
		startTime: Date,
		state: TimelineRecordState,
		type: string,
		warningCount: number,
		workerName: string
	}

	declare export interface TimelineReference {
		changeId: number,
		id: string,
		location: string
	}

	declare export interface WebApiConnectedService {
		authenticatedBy: VSSInterfaces.IdentityRef,
		description: string,
		friendlyName: string,
		id: string,
		kind: string,
		project: TeamProjectReference,
		serviceUri: string
	}

	declare export interface WebApiConnectedServiceDetails {
		connectedServiceMetaData: WebApiConnectedService,
		credentialsXml: string,
		endPoint: string
	}

	declare export interface WebApiConnectedServiceRef {
		id: string,
		url: string
	}

			
}

declare module 'vso-node-api/TaskAgentApi' {
		declare export interface ITaskAgentApi {
		createAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
	): void,
		deleteAgent(
		poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void
	): void,
		getAgent(
		poolId: number, agentId: number, includeCapabilities: boolean, propertyFilters: string, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
	): void,
		getAgents(
		poolId: number, agentName: string, includeCapabilities: boolean, propertyFilters: string, demands: string, onResult: (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => void
	): void,
		replaceAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
	): void,
		updateAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
	): void,
		queryEndpoint(
		endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint, onResult: (err: any, statusCode: number, endpoint: string[]) => void
	): void,
		deleteRequest(
		poolId: number, requestId: number, lockToken: string, onResult: (err: any, statusCode: number) => void
	): void,
		getRequest(
		poolId: number, requestId: number, onResult: (
		err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest
	) => void
	): void,
		queueRequest(
		request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, onResult: (
		err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest
	) => void
	): void,
		updateRequest(
		request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string, onResult: (
		err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest
	) => void
	): void,
		deleteMessage(
		poolId: number, messageId: number, sessionId: string, onResult: (err: any, statusCode: number) => void
	): void,
		getMessage(
		poolId: number, sessionId: string, lastMessageId: number, onResult: (
		err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage
	) => void
	): void,
		refreshAgent(
		poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void
	): void,
		refreshAgents(poolId: number, onResult: (err: any, statusCode: number) => void): void,
		sendMessage(
		message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number, onResult: (err: any, statusCode: number) => void
	): void,
		createPool(
		pool: TaskAgentInterfaces.TaskAgentPool, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
	): void,
		deletePool(poolId: number, onResult: (err: any, statusCode: number) => void): void,
		getPool(
		poolId: number, properties: string, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
	): void,
		getPools(
		poolName: string, properties: string, onResult: (
		err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]
	) => void
	): void,
		updatePool(
		pool: TaskAgentInterfaces.TaskAgentPool, poolId: number, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
	): void,
		createQueue(
		queue: TaskAgentInterfaces.TaskAgentQueue, onResult: (
		err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue
	) => void
	): void,
		deleteQueue(queueId: number, onResult: (err: any, statusCode: number) => void): void,
		getQueue(
		queueId: number, onResult: (
		err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue
	) => void
	): void,
		getQueues(
		queueName: string, onResult: (
		err: any, statusCode: number, queues: TaskAgentInterfaces.TaskAgentQueue[]
	) => void
	): void,
		getAgentPoolRoles(
		poolId: number, onResult: (err: any, statusCode: number, roles: VSSInterfaces.IdentityRef[]) => void
	): void,
		createServiceEndpoint(
		endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string, onResult: (
		err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint
	) => void
	): void,
		deleteServiceEndpoint(
		scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number) => void
	): void,
		getServiceEndpointDetails(
		scopeIdentifier: string, endpointId: string, onResult: (
		err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint
	) => void
	): void,
		getServiceEndpoints(
		scopeIdentifier: string, type: string, onResult: (
		err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]
	) => void
	): void,
		createSession(
		session: TaskAgentInterfaces.TaskAgentSession, poolId: number, onResult: (
		err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession
	) => void
	): void,
		deleteSession(
		poolId: number, sessionId: string, onResult: (err: any, statusCode: number) => void
	): void,
		deleteTaskDefinition(taskId: string, onResult: (err: any, statusCode: number) => void): void,
		getTaskContent(
		taskId: string, versionString: string, onResult: (
		err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]
	) => void
	): void,
		getTaskContentZip(
		taskId: string, versionString: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getTaskDefinitions(
		visibility: string[], onResult: (
		err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]
	) => void
	): void,
		uploadTaskDefinition(
		customHeaders: any, contentStream: NodeJS.ReadableStream, taskId: string, overwrite: boolean, onResult: (err: any, statusCode: number, obj: any) => void
	): void,
		updateUserCapabilities(
		userCapabilities: {
		[key: string]: string
	}, poolId: number, agentId: number, onResult: (
		err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent
	) => void
	): void
	}

	declare export interface IQTaskAgentApi {
		createAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgent>,
		getAgent(
		poolId: number, agentId: number, includeCapabilities?: boolean, propertyFilters?: string
	): Q.Promise<TaskAgentInterfaces.TaskAgent>,
		getAgents(
		poolId: number, agentName?: string, includeCapabilities?: boolean, propertyFilters?: string, demands?: string
	): Q.Promise<TaskAgentInterfaces.TaskAgent[]>,
		replaceAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgent>,
		updateAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgent>,
		queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Q.Promise<string[]>,
		getRequest(
		poolId: number, requestId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>,
		queueRequest(
		request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>,
		updateRequest(
		request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string
	): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>,
		getMessage(
		poolId: number, sessionId: string, lastMessageId?: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentMessage>,
		createPool(
		pool: TaskAgentInterfaces.TaskAgentPool
	): Q.Promise<TaskAgentInterfaces.TaskAgentPool>,
		getPool(
		poolId: number, properties?: string
	): Q.Promise<TaskAgentInterfaces.TaskAgentPool>,
		getPools(
		poolName?: string, properties?: string
	): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]>,
		updatePool(
		pool: TaskAgentInterfaces.TaskAgentPool, poolId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentPool>,
		createQueue(
		queue: TaskAgentInterfaces.TaskAgentQueue
	): Q.Promise<TaskAgentInterfaces.TaskAgentQueue>,
		getQueue(queueId: number): Q.Promise<TaskAgentInterfaces.TaskAgentQueue>,
		getQueues(queueName?: string): Q.Promise<TaskAgentInterfaces.TaskAgentQueue[]>,
		getAgentPoolRoles(poolId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>,
		createServiceEndpoint(
		endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string
	): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>,
		getServiceEndpointDetails(
		scopeIdentifier: string, endpointId: string
	): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>,
		getServiceEndpoints(
		scopeIdentifier: string, type?: string
	): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>,
		createSession(
		session: TaskAgentInterfaces.TaskAgentSession, poolId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentSession>,
		getTaskContent(
		taskId: string, versionString?: string
	): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>,
		getTaskDefinitions(visibility: string[]): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>,
		updateUserCapabilities(
		userCapabilities: {
		[key: string]: string
	}, poolId: number, agentId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgent>
	}

		declare export class TaskAgentApi extends basem$ClientApiBase, ITaskAgentApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
	): void;
		deleteAgent(
		poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void
	): void;
		getAgent(
		poolId: number, agentId: number, includeCapabilities: boolean, propertyFilters: string, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
	): void;
		getAgents(
		poolId: number, agentName: string, includeCapabilities: boolean, propertyFilters: string, demands: string, onResult: (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => void
	): void;
		replaceAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
	): void;
		updateAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
	): void;
		queryEndpoint(
		endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint, onResult: (err: any, statusCode: number, endpoint: string[]) => void
	): void;
		deleteRequest(
		poolId: number, requestId: number, lockToken: string, onResult: (err: any, statusCode: number) => void
	): void;
		getRequest(
		poolId: number, requestId: number, onResult: (
		err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest
	) => void
	): void;
		queueRequest(
		request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, onResult: (
		err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest
	) => void
	): void;
		updateRequest(
		request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string, onResult: (
		err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest
	) => void
	): void;
		deleteMessage(
		poolId: number, messageId: number, sessionId: string, onResult: (err: any, statusCode: number) => void
	): void;
		getMessage(
		poolId: number, sessionId: string, lastMessageId: number, onResult: (
		err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage
	) => void
	): void;
		refreshAgent(
		poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void
	): void;
		refreshAgents(poolId: number, onResult: (err: any, statusCode: number) => void): void;
		sendMessage(
		message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number, onResult: (err: any, statusCode: number) => void
	): void;
		createPool(
		pool: TaskAgentInterfaces.TaskAgentPool, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
	): void;
		deletePool(poolId: number, onResult: (err: any, statusCode: number) => void): void;
		getPool(
		poolId: number, properties: string, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
	): void;
		getPools(
		poolName: string, properties: string, onResult: (
		err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]
	) => void
	): void;
		updatePool(
		pool: TaskAgentInterfaces.TaskAgentPool, poolId: number, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
	): void;
		createQueue(
		queue: TaskAgentInterfaces.TaskAgentQueue, onResult: (
		err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue
	) => void
	): void;
		deleteQueue(queueId: number, onResult: (err: any, statusCode: number) => void): void;
		getQueue(
		queueId: number, onResult: (
		err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue
	) => void
	): void;
		getQueues(
		queueName: string, onResult: (
		err: any, statusCode: number, queues: TaskAgentInterfaces.TaskAgentQueue[]
	) => void
	): void;
		getAgentPoolRoles(
		poolId: number, onResult: (err: any, statusCode: number, roles: VSSInterfaces.IdentityRef[]) => void
	): void;
		createServiceEndpoint(
		endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string, onResult: (
		err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint
	) => void
	): void;
		deleteServiceEndpoint(
		scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number) => void
	): void;
		getServiceEndpointDetails(
		scopeIdentifier: string, endpointId: string, onResult: (
		err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint
	) => void
	): void;
		getServiceEndpoints(
		scopeIdentifier: string, type: string, onResult: (
		err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]
	) => void
	): void;
		createSession(
		session: TaskAgentInterfaces.TaskAgentSession, poolId: number, onResult: (
		err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession
	) => void
	): void;
		deleteSession(
		poolId: number, sessionId: string, onResult: (err: any, statusCode: number) => void
	): void;
		deleteTaskDefinition(taskId: string, onResult: (err: any, statusCode: number) => void): void;
		getTaskContent(
		taskId: string, versionString: string, onResult: (
		err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]
	) => void
	): void;
		getTaskContentZip(
		taskId: string, versionString: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getTaskDefinitions(
		visibility: string[], onResult: (
		err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]
	) => void
	): void;
		uploadTaskDefinition(
		customHeaders: any, contentStream: NodeJS.ReadableStream, taskId: string, overwrite: boolean, onResult: (err: any, statusCode: number, obj: any) => void
	): void;
		updateUserCapabilities(
		userCapabilities: {
		[key: string]: string
	}, poolId: number, agentId: number, onResult: (
		err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent
	) => void
	): void
	}

	declare export class QTaskAgentApi extends basem$QClientApiBase, IQTaskAgentApi {
		api: TaskAgentApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgent>;
		getAgent(
		poolId: number, agentId: number, includeCapabilities?: boolean, propertyFilters?: string
	): Q.Promise<TaskAgentInterfaces.TaskAgent>;
		getAgents(
		poolId: number, agentName?: string, includeCapabilities?: boolean, propertyFilters?: string, demands?: string
	): Q.Promise<TaskAgentInterfaces.TaskAgent[]>;
		replaceAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgent>;
		updateAgent(
		agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgent>;
		queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Q.Promise<string[]>;
		getRequest(
		poolId: number, requestId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
		queueRequest(
		request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
		updateRequest(
		request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string
	): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
		getMessage(
		poolId: number, sessionId: string, lastMessageId?: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentMessage>;
		createPool(
		pool: TaskAgentInterfaces.TaskAgentPool
	): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
		getPool(
		poolId: number, properties?: string
	): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
		getPools(
		poolName?: string, properties?: string
	): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]>;
		updatePool(
		pool: TaskAgentInterfaces.TaskAgentPool, poolId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
		createQueue(
		queue: TaskAgentInterfaces.TaskAgentQueue
	): Q.Promise<TaskAgentInterfaces.TaskAgentQueue>;
		getQueue(queueId: number): Q.Promise<TaskAgentInterfaces.TaskAgentQueue>;
		getQueues(queueName?: string): Q.Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
		getAgentPoolRoles(poolId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
		createServiceEndpoint(
		endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string
	): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
		getServiceEndpointDetails(
		scopeIdentifier: string, endpointId: string
	): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
		getServiceEndpoints(
		scopeIdentifier: string, type?: string
	): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
		createSession(
		session: TaskAgentInterfaces.TaskAgentSession, poolId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgentSession>;
		getTaskContent(
		taskId: string, versionString?: string
	): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
		getTaskDefinitions(visibility: string[]): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
		updateUserCapabilities(
		userCapabilities: {
		[key: string]: string
	}, poolId: number, agentId: number
	): Q.Promise<TaskAgentInterfaces.TaskAgent>
	}

	
}

declare module 'vso-node-api/TaskApi' {
		declare export interface ITaskApi {
		getPlanAttachments(
		scopeIdentifier: string, hubName: string, planId: string, type: string, onResult: (
		err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]
	) => void
	): void,
		createAttachment(
		customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string, onResult: (
		err: any, statusCode: number, attachment: TaskAgentInterfaces.TaskAttachment
	) => void
	): void,
		getAttachments(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, onResult: (
		err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]
	) => void
	): void,
		postEvent(
		eventData: TaskAgentInterfaces.JobEvent, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number) => void
	): void,
		postLines(
		lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, onResult: (err: any, statusCode: number) => void
	): void,
		appendLog(
		customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, logId: number, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void
	): void,
		createLog(
		log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void
	): void,
		getLog(
		scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, logs: string[]) => void
	): void,
		getLogs(
		scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => void
	): void,
		getPlan(
		scopeIdentifier: string, hubName: string, planId: string, onResult: (
		err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan
	) => void
	): void,
		getRecords(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, onResult: (
		err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]
	) => void
	): void,
		updateRecords(
		records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (
		err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]
	) => void
	): void,
		createTimeline(
		timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void
	): void,
		deleteTimeline(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (err: any, statusCode: number) => void
	): void,
		getTimeline(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, includeRecords: boolean, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void
	): void,
		getTimelines(
		scopeIdentifier: string, hubName: string, planId: string, onResult: (
		err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]
	) => void
	): void
	}

	declare export interface IQTaskApi {
		getPlanAttachments(
		scopeIdentifier: string, hubName: string, planId: string, type: string
	): Q.Promise<TaskAgentInterfaces.TaskAttachment[]>,
		createAttachment(
		customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string
	): Q.Promise<TaskAgentInterfaces.TaskAttachment>,
		getAttachments(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string
	): Q.Promise<TaskAgentInterfaces.TaskAttachment[]>,
		appendLog(
		customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, logId: number
	): Q.Promise<TaskAgentInterfaces.TaskLog>,
		createLog(
		log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.TaskLog>,
		getLog(
		scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number, endLine?: number
	): Q.Promise<string[]>,
		getLogs(
		scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.TaskLog[]>,
		getPlan(
		scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan>,
		getRecords(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number
	): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>,
		updateRecords(
		records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string
	): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>,
		createTimeline(
		timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.Timeline>,
		getTimeline(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number, includeRecords?: boolean
	): Q.Promise<TaskAgentInterfaces.Timeline>,
		getTimelines(
		scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.Timeline[]>
	}

		declare export class TaskApi extends basem$ClientApiBase, ITaskApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		getPlanAttachments(
		scopeIdentifier: string, hubName: string, planId: string, type: string, onResult: (
		err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]
	) => void
	): void;
		createAttachment(
		customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string, onResult: (
		err: any, statusCode: number, attachment: TaskAgentInterfaces.TaskAttachment
	) => void
	): void;
		getAttachments(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, onResult: (
		err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]
	) => void
	): void;
		postEvent(
		eventData: TaskAgentInterfaces.JobEvent, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number) => void
	): void;
		postLines(
		lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, onResult: (err: any, statusCode: number) => void
	): void;
		appendLog(
		customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, logId: number, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void
	): void;
		createLog(
		log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void
	): void;
		getLog(
		scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, logs: string[]) => void
	): void;
		getLogs(
		scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => void
	): void;
		getPlan(
		scopeIdentifier: string, hubName: string, planId: string, onResult: (
		err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan
	) => void
	): void;
		getRecords(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, onResult: (
		err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]
	) => void
	): void;
		updateRecords(
		records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (
		err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]
	) => void
	): void;
		createTimeline(
		timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void
	): void;
		deleteTimeline(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (err: any, statusCode: number) => void
	): void;
		getTimeline(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, includeRecords: boolean, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void
	): void;
		getTimelines(
		scopeIdentifier: string, hubName: string, planId: string, onResult: (
		err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]
	) => void
	): void
	}

	declare export class QTaskApi extends basem$QClientApiBase, IQTaskApi {
		api: TaskApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		getPlanAttachments(
		scopeIdentifier: string, hubName: string, planId: string, type: string
	): Q.Promise<TaskAgentInterfaces.TaskAttachment[]>;
		createAttachment(
		customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string
	): Q.Promise<TaskAgentInterfaces.TaskAttachment>;
		getAttachments(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string
	): Q.Promise<TaskAgentInterfaces.TaskAttachment[]>;
		appendLog(
		customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, logId: number
	): Q.Promise<TaskAgentInterfaces.TaskLog>;
		createLog(
		log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.TaskLog>;
		getLog(
		scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number, endLine?: number
	): Q.Promise<string[]>;
		getLogs(
		scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.TaskLog[]>;
		getPlan(
		scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan>;
		getRecords(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number
	): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
		updateRecords(
		records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string
	): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
		createTimeline(
		timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.Timeline>;
		getTimeline(
		scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number, includeRecords?: boolean
	): Q.Promise<TaskAgentInterfaces.Timeline>;
		getTimelines(
		scopeIdentifier: string, hubName: string, planId: string
	): Q.Promise<TaskAgentInterfaces.Timeline[]>
	}

	
}

declare module 'vso-node-api/interfaces/TestInterfaces' {
		declare export interface AdditionalTestField {
		fieldName: string,
		value: any
	}

	declare export interface AddtionalTestFieldDefinition {
		fieldName: string,
		scope: TestExtensionFieldScope,
		value: SystemData.SqlDbType
	}

	declare export interface AggregatedResultsByPivot {
		count: number,
		duration: any,
		pivot: string
	}

	declare export interface AggregatedTestResults {
		duration: any,
		resultsByPivot: AggregatedResultsByPivot[],
		self: ShallowReference,
		totalTests: number
	}

	declare export interface BatchResponse {
		error: string,
		responses: Response[],
		status: string
	}

	declare export interface BuildConfiguration {
		flavor: string,
		id: number,
		platform: string,
		project: ShallowReference,
		uri: string
	}

	declare export interface BuildCoverage {
		codeCoverageFileUrl: string,
		configuration: BuildConfiguration,
		lastError: string,
		modules: ModuleCoverage[],
		state: string
	}

	declare export interface CodeCoverageData {
		buildFlavor: string,
		buildPlatform: string,
		coverageStats: CodeCoverageStatistics[]
	}

	declare export interface CodeCoverageStatistics {
		covered: number,
		delta: number,
		index: number,
		isDeltaAvailable: boolean,
		label: string,
		total: number
	}

	declare export interface CodeCoverageSummary {
		buildUri: string,
		coverageData: CodeCoverageData[],
		deltaBuildUri: string
	}

	declare export interface CoverageStatistics {
		blocksCovered: number,
		blocksNotCovered: number,
		linesCovered: number,
		linesNotCovered: number,
		linesPartiallyCovered: number
	}

	declare export interface DtlEnvironmentDetails {
		csmContent: string,
		csmParameters: string,
		subscriptionName: string
	}

	declare export interface FunctionCoverage {
		class: string,
		name: string,
		namespace: string,
		sourceFile: string,
		statistics: CoverageStatistics
	}

	declare export interface ModuleCoverage {
		blockCount: number,
		blockData: number[],
		functions: FunctionCoverage[],
		name: string,
		signature: string,
		signatureAge: number,
		statistics: CoverageStatistics
	}

	declare export interface PlanUpdateModel {
		area: ShallowReference,
		automatedTestEnvironment: TestEnvironment,
		automatedTestSettings: TestSettings,
		build: ShallowReference,
		configurationIds: number[],
		description: string,
		endDate: string,
		iteration: string,
		manualTestEnvironment: TestEnvironment,
		manualTestSettings: TestSettings,
		name: string,
		owner: VSSInterfaces.IdentityRef,
		startDate: string,
		state: string,
		status: string
	}

	declare export interface PointAssignment {
		configuration: ShallowReference,
		tester: VSSInterfaces.IdentityRef
	}

	declare export interface PointUpdateModel {
		
	}

	declare export interface PointWorkItemProperty {
		workItem: {
		key: string,
		value: any
	}
	}

	declare export interface QueryModel {
		query: string
	}

	declare export interface Response {
		error: string,
		id: string,
		status: string,
		url: string
	}

	declare export interface ResultUpdateRequestModel {
		actionResultDeletes: TestActionResultModel[],
		actionResults: TestActionResultModel[],
		parameterDeletes: TestResultParameterModel[],
		parameters: TestResultParameterModel[],
		testCaseResult: TestCaseResultUpdateModel
	}

	declare export interface ResultUpdateResponseModel {
		revision: number
	}

	declare export interface RunCreateModel {
		additionalTestFields: AdditionalTestField[],
		automated: boolean,
		build: ShallowReference,
		buildDropLocation: string,
		buildFlavor: string,
		buildPlatform: string,
		comment: string,
		completeDate: string,
		configurationIds: number[],
		controller: string,
		dtlAutEnvironment: ShallowReference,
		dtlTestEnvironment: ShallowReference,
		dueDate: string,
		environmentDetails: DtlEnvironmentDetails,
		errorMessage: string,
		filter: RunFilter,
		iteration: string,
		name: string,
		owner: VSSInterfaces.IdentityRef,
		plan: ShallowReference,
		pointIds: number[],
		releaseEnvironmentUri: string,
		releaseUri: string,
		runTimeout: any,
		startDate: string,
		state: string,
		testConfigurationsMapping: string,
		testEnvironmentId: string,
		testSettings: ShallowReference,
		type: string
	}

	declare export interface RunFilter {
		sourceFilter: string,
		testCaseFilter: string
	}

	declare export interface RunStatistic {
		count: number,
		outcome: string,
		resolutionState: TestResolutionState,
		state: string
	}

	declare export interface RunUpdateModel {
		build: ShallowReference,
		comment: string,
		completedDate: string,
		controller: string,
		deleteInProgressResults: boolean,
		dtlAutEnvironment: ShallowReference,
		dtlEnvironment: ShallowReference,
		dtlEnvironmentDetails: DtlEnvironmentDetails,
		dueDate: string,
		errorMessage: string,
		iteration: string,
		logEntries: TestMessageLogDetails[],
		name: string,
		startedDate: string,
		state: string,
		substate: TestRunSubstate,
		testEnvironmentId: string,
		testSettings: ShallowReference
	}

	declare export interface ShallowReference {
		id: string,
		name: string,
		url: string
	}

	declare export interface SharedStepModel {
		id: number,
		revision: number
	}

	declare export interface SuiteCreateModel {
		
	}

	declare export interface SuiteTestCase {
		pointAssignments: PointAssignment[],
		testCase: WorkItemReference
	}

	declare export interface SuiteUpdateModel {
		
	}

	declare export interface TestActionResultModel {
		actionPath: string,
		iterationId: number,
		sharedStepModel: SharedStepModel,
		url: string
	}

	declare export interface TestAttachmentReference {
		id: number,
		url: string
	}

	declare export interface TestAttachmentRequestModel {
		attachmentType: string,
		comment: string,
		fileName: string,
		stream: string
	}

	declare export interface TestCaseResult {
		additionalFields: AdditionalTestField[],
		afnStripId: number,
		area: ShallowReference,
		associatedBugs: ShallowReference[],
		automatedTestId: string,
		automatedTestName: string,
		automatedTestStorage: string,
		automatedTestType: string,
		automatedTestTypeId: string,
		build: ShallowReference,
		comment: string,
		completedDate: Date,
		computerName: string,
		configuration: ShallowReference,
		createdDate: Date,
		durationInMs: number,
		errorMessage: string,
		failureType: string,
		id: number,
		iterationDetails: TestIterationDetailsModel[],
		lastUpdatedBy: VSSInterfaces.IdentityRef,
		lastUpdatedDate: Date,
		outcome: string,
		owner: VSSInterfaces.IdentityRef,
		priority: number,
		project: ShallowReference,
		resetCount: number,
		resolutionState: string,
		resolutionStateId: number,
		revision: number,
		runBy: VSSInterfaces.IdentityRef,
		stackTrace: string,
		startedDate: Date,
		state: string,
		testCase: ShallowReference,
		testCaseTitle: string,
		testPoint: ShallowReference,
		testRun: ShallowReference,
		url: string
	}

	declare export interface TestCaseResult2 {
		componentId: string,
		custom: any,
		endTime: Date,
		exceptionStack: string,
		externalArtifacts: string[],
		externalRunId: string,
		externalSystem: string,
		externalTestId: string,
		failureReasons: string[],
		failureSummary: string,
		investigationNotes: string,
		isSuperseded: boolean,
		isValid: boolean,
		outcome: ResultOutcome,
		resultCustomPropertiesTypeName: string,
		resultId: string,
		resultName: string,
		runId: string,
		startTime: Date,
		testId: string,
		tfsSecurityKey: string
	}

	declare export interface TestCaseResultAttachmentModel {
		id: number,
		iterationId: number,
		name: string,
		size: number,
		url: string
	}

	declare export interface TestCaseResultIdentifier {
		
	}

	declare export interface TestCaseResultUpdateModel {
		additionalFields: AdditionalTestField[],
		associatedWorkItems: number[],
		automatedTestTypeId: string,
		comment: string,
		completedDate: string,
		computerName: string,
		durationInMs: string,
		errorMessage: string,
		failureType: string,
		outcome: string,
		owner: VSSInterfaces.IdentityRef,
		resolutionState: string,
		runBy: VSSInterfaces.IdentityRef,
		stackTrace: string,
		startedDate: string,
		state: string,
		testCasePriority: string,
		testResult: ShallowReference
	}

	declare export interface TestEnvironment {
		environmentId: string,
		environmentName: string
	}

	declare export interface TestInsightDetails {
		count: number,
		previousBuild: ShallowReference,
		self: ShallowReference,
		testResults: ShallowReference[]
	}

	declare export interface TestInsights {
		existingFailures: TestInsightDetails,
		fixedTests: TestInsightDetails,
		newFailures: TestInsightDetails,
		self: ShallowReference
	}

	declare export interface TestIterationDetailsModel {
		actionResults: TestActionResultModel[],
		attachments: TestCaseResultAttachmentModel[],
		comment: string,
		completedDate: Date,
		durationInMs: number,
		errorMessage: string,
		id: number,
		outcome: string,
		parameters: TestResultParameterModel[],
		startedDate: Date,
		url: string
	}

	declare export interface TestMessageLogDetails {
		dateCreated: Date,
		entryId: number,
		message: string
	}

	declare export interface TestPlan {
		area: ShallowReference,
		automatedTestEnvironment: TestEnvironment,
		automatedTestSettings: TestSettings,
		build: ShallowReference,
		clientUrl: string,
		description: string,
		endDate: Date,
		id: number,
		iteration: string,
		manualTestEnvironment: TestEnvironment,
		manualTestSettings: TestSettings,
		name: string,
		owner: VSSInterfaces.IdentityRef,
		previousBuild: ShallowReference,
		project: ShallowReference,
		revision: number,
		rootSuite: ShallowReference,
		startDate: Date,
		state: string,
		updatedBy: VSSInterfaces.IdentityRef,
		updatedDate: Date,
		url: string
	}

	declare export interface TestPlansWithSelection {
		lastSelectedPlan: number,
		lastSelectedSuite: number,
		plans: TestPlan[]
	}

	declare export interface TestPoint {
		assignedTo: VSSInterfaces.IdentityRef,
		automated: boolean,
		comment: string,
		configuration: ShallowReference,
		failureType: string,
		id: number,
		lastResolutionStateId: number,
		lastResult: ShallowReference,
		lastTestRun: ShallowReference,
		lastUpdatedBy: VSSInterfaces.IdentityRef,
		lastUpdatedDate: Date,
		outcome: string,
		revision: number,
		state: string,
		suite: ShallowReference,
		testCase: WorkItemReference,
		testPlan: ShallowReference,
		url: string,
		workItemProperties: any[]
	}

	declare export interface TestReport {
		aggregatedResults: AggregatedTestResults,
		build: ShallowReference,
		self: ShallowReference,
		teamProject: ShallowReference,
		testInsights: TestInsights
	}

	declare export interface TestResolutionState {
		id: number,
		name: string,
		project: ShallowReference
	}

	declare export interface TestResultCreateModel {
		additionalFields: AdditionalTestField[],
		area: ShallowReference,
		associatedWorkItems: number[],
		automatedTestId: string,
		automatedTestName: string,
		automatedTestStorage: string,
		automatedTestType: string,
		automatedTestTypeId: string,
		comment: string,
		completedDate: string,
		computerName: string,
		configuration: ShallowReference,
		durationInMs: string,
		errorMessage: string,
		failureType: string,
		outcome: string,
		owner: VSSInterfaces.IdentityRef,
		resolutionState: string,
		runBy: VSSInterfaces.IdentityRef,
		stackTrace: string,
		startedDate: string,
		state: string,
		testCase: ShallowReference,
		testCasePriority: string,
		testCaseTitle: string,
		testPoint: ShallowReference
	}

	declare export interface TestResultModelBase {
		comment: string,
		completedDate: Date,
		durationInMs: number,
		errorMessage: string,
		outcome: string,
		startedDate: Date
	}

	declare export interface TestResultParameterModel {
		actionPath: string,
		iterationId: number,
		parameterName: string,
		url: string,
		value: string
	}

	declare export interface TestRun {
		additionalFields: AdditionalTestField[],
		build: ShallowReference,
		buildConfiguration: BuildConfiguration,
		comment: string,
		completedDate: Date,
		controller: string,
		createdDate: Date,
		dropLocation: string,
		dtlAutEnvironment: ShallowReference,
		dtlEnvironment: ShallowReference,
		dtlEnvironmentCreationDetails: DtlEnvironmentDetails,
		dueDate: Date,
		errorMessage: string,
		filter: RunFilter,
		id: number,
		incompleteTests: number,
		isAutomated: boolean,
		iteration: string,
		lastUpdatedBy: VSSInterfaces.IdentityRef,
		lastUpdatedDate: Date,
		name: string,
		notApplicableTests: number,
		owner: VSSInterfaces.IdentityRef,
		passedTests: number,
		phase: string,
		plan: ShallowReference,
		postProcessState: string,
		project: ShallowReference,
		releaseEnvironmentUri: string,
		releaseUri: string,
		revision: number,
		runStatistics: RunStatistic[],
		startedDate: Date,
		state: string,
		substate: TestRunSubstate,
		testEnvironment: TestEnvironment,
		testMessageLogId: number,
		testSettings: ShallowReference,
		totalTests: number,
		unanalyzedTests: number,
		url: string,
		webAccessUrl: string
	}

	declare export interface TestRunCoverage {
		lastError: string,
		modules: ModuleCoverage[],
		state: string,
		testRun: ShallowReference
	}

	declare export interface TestRunStatistic {
		run: ShallowReference,
		runStatistics: RunStatistic[]
	}

	declare export interface TestSettings {
		areaPath: string,
		description: string,
		isPublic: boolean,
		machineRoles: string,
		testSettingsContent: string,
		testSettingsId: number,
		testSettingsName: string
	}

	declare export interface TestSuite {
		areaUri: string,
		defaultConfigurations: ShallowReference[],
		id: number,
		inheritDefaultConfigurations: boolean,
		lastError: string,
		lastPopulatedDate: Date,
		lastUpdatedBy: VSSInterfaces.IdentityRef,
		lastUpdatedDate: Date,
		name: string,
		parent: ShallowReference,
		plan: ShallowReference,
		project: ShallowReference,
		queryString: string,
		requirementId: number,
		revision: number,
		state: string,
		suites: ShallowReference[],
		suiteType: string,
		testCaseCount: number,
		testCasesUrl: string,
		url: string
	}

	declare export interface WorkItemReference {
		id: string,
		url: string,
		webUrl: string
	}

			
}

declare module 'vso-node-api/TestApi' {
		declare export interface ITestApi {
		createTestResultAttachment(
		attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, onResult: (
		err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference
	) => void
	): void,
		createTestRunAttachment(
		attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, onResult: (
		err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference
	) => void
	): void,
		getBuildCodeCoverage(
		project: string, buildId: number, flags: number, onResult: (
		err: any, statusCode: number, CodeCoverage: TestInterfaces.BuildCoverage[]
	) => void
	): void,
		getCodeCoverageSummary(
		project: string, buildId: number, deltaBuildId: number, onResult: (
		err: any, statusCode: number, CodeCoverage: TestInterfaces.CodeCoverageSummary
	) => void
	): void,
		updateCodeCoverageSummary(
		coverageData: TestInterfaces.CodeCoverageData, project: string, build: number, onResult: (err: any, statusCode: number) => void
	): void,
		getTestRunCodeCoverage(
		project: string, runId: number, flags: number, onResult: (
		err: any, statusCode: number, CodeCoverage: TestInterfaces.TestRunCoverage[]
	) => void
	): void,
		getTestRunLogs(
		project: string, runId: number, onResult: (
		err: any, statusCode: number, MessageLogs: TestInterfaces.TestMessageLogDetails[]
	) => void
	): void,
		createTestPlan(
		testPlan: TestInterfaces.PlanUpdateModel, project: string, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
	): void,
		getPlanById(
		project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
	): void,
		getPlans(
		project: string, owner: string, skip: number, top: number, includePlanDetails: boolean, filterActivePlans: boolean, onResult: (err: any, statusCode: number, Plans: TestInterfaces.TestPlan[]) => void
	): void,
		updateTestPlan(
		planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
	): void,
		getPoint(
		project: string, planId: number, suiteId: number, pointIds: number, witFields: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint) => void
	): void,
		getPoints(
		project: string, planId: number, suiteId: number, witFields: string, configurationId: string, testCaseId: string, testPointIds: string, includePointDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Points: TestInterfaces.TestPoint[]) => void
	): void,
		updateTestPoints(
		pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint[]) => void
	): void,
		getTestIteration(
		project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults: boolean, onResult: (
		err: any, statusCode: number, Result: TestInterfaces.TestIterationDetailsModel
	) => void
	): void,
		getTestIterations(
		project: string, runId: number, testCaseResultId: number, includeActionResults: boolean, onResult: (
		err: any, statusCode: number, Results: TestInterfaces.TestIterationDetailsModel[]
	) => void
	): void,
		addTestResultsToTestRun(
		resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
	): void,
		bulkUpdateTestResults(
		resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[], onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void
	): void,
		getTestCaseResultById(
		project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult) => void
	): void,
		getTestCaseResults(
		project: string, runId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
	): void,
		updateTestResults(
		resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
	): void,
		getActionResults(
		project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath: string, onResult: (
		err: any, statusCode: number, Results: TestInterfaces.TestActionResultModel[]
	) => void
	): void,
		getResultParameters(
		project: string, runId: number, testCaseResultId: number, iterationId: number, paramName: string, onResult: (
		err: any, statusCode: number, Results: TestInterfaces.TestResultParameterModel[]
	) => void
	): void,
		getTestResultsByQuery(
		query: TestInterfaces.QueryModel, project: string, includeResultDetails: boolean, includeIterationDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void
	): void,
		getTestRunStatistics(
		project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRunStatistic) => void
	): void,
		getTestRunsByQuery(
		query: TestInterfaces.QueryModel, project: string, includeRunDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun[]) => void
	): void,
		createTestRun(
		testRun: TestInterfaces.RunCreateModel, project: string, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
	): void,
		deleteTestRun(
		project: string, runId: number, onResult: (err: any, statusCode: number) => void
	): void,
		getTestRunById(
		project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
	): void,
		getTestRuns(
		project: string, buildUri: string, owner: string, tmiRunId: string, planId: number, includeRunDetails: boolean, automated: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Runs: TestInterfaces.TestRun[]) => void
	): void,
		updateTestRun(
		runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
	): void,
		addTestCasesToSuite(
		project: string, planId: number, suiteId: number, testCaseIds: string, onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void
	): void,
		getTestCaseById(
		project: string, planId: number, suiteId: number, testCaseIds: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.SuiteTestCase) => void
	): void,
		getTestCases(
		project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void
	): void,
		removeTestCasesFromSuiteUrl(
		project: string, planId: number, suiteId: number, testCaseIds: string, onResult: (err: any, statusCode: number) => void
	): void,
		createTestSuite(
		testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite[]) => void
	): void,
		deleteTestSuite(
		project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number) => void
	): void,
		getTestSuiteById(
		project: string, planId: number, suiteId: number, includeChildSuites: boolean, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void
	): void,
		getTestSuitesForPlan(
		project: string, planId: number, includeSuites: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void
	): void,
		updateTestSuite(
		suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void
	): void,
		getSuitesByTestCaseId(
		testCaseId: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void
	): void,
		createTestSettings(
		testSettings: TestInterfaces.TestSettings, project: string, onResult: (err: any, statusCode: number, TestSetting: number) => void
	): void,
		deleteTestSettings(
		project: string, testSettingsId: number, onResult: (err: any, statusCode: number) => void
	): void,
		getTestSettingsById(
		project: string, testSettingsId: number, onResult: (err: any, statusCode: number, TestSetting: TestInterfaces.TestSettings) => void
	): void
	}

	declare export interface IQTestApi {
		createTestResultAttachment(
		attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number
	): Q.Promise<TestInterfaces.TestAttachmentReference>,
		createTestRunAttachment(
		attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number
	): Q.Promise<TestInterfaces.TestAttachmentReference>,
		getBuildCodeCoverage(
		project: string, buildId: number, flags: number
	): Q.Promise<TestInterfaces.BuildCoverage[]>,
		getCodeCoverageSummary(
		project: string, buildId: number, deltaBuildId?: number
	): Q.Promise<TestInterfaces.CodeCoverageSummary>,
		getTestRunCodeCoverage(
		project: string, runId: number, flags: number
	): Q.Promise<TestInterfaces.TestRunCoverage[]>,
		getTestRunLogs(
		project: string, runId: number
	): Q.Promise<TestInterfaces.TestMessageLogDetails[]>,
		createTestPlan(
		testPlan: TestInterfaces.PlanUpdateModel, project: string
	): Q.Promise<TestInterfaces.TestPlan>,
		getPlanById(project: string, planId: number): Q.Promise<TestInterfaces.TestPlan>,
		getPlans(
		project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean
	): Q.Promise<TestInterfaces.TestPlan[]>,
		updateTestPlan(
		planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number
	): Q.Promise<TestInterfaces.TestPlan>,
		getPoint(
		project: string, planId: number, suiteId: number, pointIds: number, witFields?: string
	): Q.Promise<TestInterfaces.TestPoint>,
		getPoints(
		project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestPoint[]>,
		updateTestPoints(
		pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string
	): Q.Promise<TestInterfaces.TestPoint[]>,
		getTestIteration(
		project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean
	): Q.Promise<TestInterfaces.TestIterationDetailsModel>,
		getTestIterations(
		project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean
	): Q.Promise<TestInterfaces.TestIterationDetailsModel[]>,
		addTestResultsToTestRun(
		resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number
	): Q.Promise<TestInterfaces.TestCaseResult[]>,
		bulkUpdateTestResults(
		resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]
	): Q.Promise<TestInterfaces.TestCaseResult[]>,
		getTestCaseResultById(
		project: string, runId: number, testCaseResultId: number, includeIterationDetails?: boolean
	): Q.Promise<TestInterfaces.TestCaseResult>,
		getTestCaseResults(
		project: string, runId: number, includeIterationDetails?: boolean
	): Q.Promise<TestInterfaces.TestCaseResult[]>,
		updateTestResults(
		resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number
	): Q.Promise<TestInterfaces.TestCaseResult[]>,
		getActionResults(
		project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string
	): Q.Promise<TestInterfaces.TestActionResultModel[]>,
		getResultParameters(
		project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string
	): Q.Promise<TestInterfaces.TestResultParameterModel[]>,
		getTestResultsByQuery(
		query: TestInterfaces.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestCaseResult[]>,
		getTestRunStatistics(project: string, runId: number): Q.Promise<TestInterfaces.TestRunStatistic>,
		getTestRunsByQuery(
		query: TestInterfaces.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestRun[]>,
		createTestRun(
		testRun: TestInterfaces.RunCreateModel, project: string
	): Q.Promise<TestInterfaces.TestRun>,
		getTestRunById(project: string, runId: number): Q.Promise<TestInterfaces.TestRun>,
		getTestRuns(
		project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestRun[]>,
		updateTestRun(
		runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number
	): Q.Promise<TestInterfaces.TestRun>,
		addTestCasesToSuite(
		project: string, planId: number, suiteId: number, testCaseIds: string
	): Q.Promise<TestInterfaces.SuiteTestCase[]>,
		getTestCaseById(
		project: string, planId: number, suiteId: number, testCaseIds: number
	): Q.Promise<TestInterfaces.SuiteTestCase>,
		getTestCases(
		project: string, planId: number, suiteId: number
	): Q.Promise<TestInterfaces.SuiteTestCase[]>,
		createTestSuite(
		testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number
	): Q.Promise<TestInterfaces.TestSuite[]>,
		getTestSuiteById(
		project: string, planId: number, suiteId: number, includeChildSuites?: boolean
	): Q.Promise<TestInterfaces.TestSuite>,
		getTestSuitesForPlan(
		project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestSuite[]>,
		updateTestSuite(
		suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number
	): Q.Promise<TestInterfaces.TestSuite>,
		getSuitesByTestCaseId(testCaseId: number): Q.Promise<TestInterfaces.TestSuite[]>,
		createTestSettings(testSettings: TestInterfaces.TestSettings, project: string): Q.Promise<number>,
		getTestSettingsById(
		project: string, testSettingsId: number
	): Q.Promise<TestInterfaces.TestSettings>
	}

		declare export class TestApi extends basem$ClientApiBase, ITestApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createTestResultAttachment(
		attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, onResult: (
		err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference
	) => void
	): void;
		createTestRunAttachment(
		attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, onResult: (
		err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference
	) => void
	): void;
		getBuildCodeCoverage(
		project: string, buildId: number, flags: number, onResult: (
		err: any, statusCode: number, CodeCoverage: TestInterfaces.BuildCoverage[]
	) => void
	): void;
		getCodeCoverageSummary(
		project: string, buildId: number, deltaBuildId: number, onResult: (
		err: any, statusCode: number, CodeCoverage: TestInterfaces.CodeCoverageSummary
	) => void
	): void;
		updateCodeCoverageSummary(
		coverageData: TestInterfaces.CodeCoverageData, project: string, build: number, onResult: (err: any, statusCode: number) => void
	): void;
		getTestRunCodeCoverage(
		project: string, runId: number, flags: number, onResult: (
		err: any, statusCode: number, CodeCoverage: TestInterfaces.TestRunCoverage[]
	) => void
	): void;
		getTestRunLogs(
		project: string, runId: number, onResult: (
		err: any, statusCode: number, MessageLogs: TestInterfaces.TestMessageLogDetails[]
	) => void
	): void;
		createTestPlan(
		testPlan: TestInterfaces.PlanUpdateModel, project: string, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
	): void;
		getPlanById(
		project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
	): void;
		getPlans(
		project: string, owner: string, skip: number, top: number, includePlanDetails: boolean, filterActivePlans: boolean, onResult: (err: any, statusCode: number, Plans: TestInterfaces.TestPlan[]) => void
	): void;
		updateTestPlan(
		planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
	): void;
		getPoint(
		project: string, planId: number, suiteId: number, pointIds: number, witFields: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint) => void
	): void;
		getPoints(
		project: string, planId: number, suiteId: number, witFields: string, configurationId: string, testCaseId: string, testPointIds: string, includePointDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Points: TestInterfaces.TestPoint[]) => void
	): void;
		updateTestPoints(
		pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint[]) => void
	): void;
		getTestIteration(
		project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults: boolean, onResult: (
		err: any, statusCode: number, Result: TestInterfaces.TestIterationDetailsModel
	) => void
	): void;
		getTestIterations(
		project: string, runId: number, testCaseResultId: number, includeActionResults: boolean, onResult: (
		err: any, statusCode: number, Results: TestInterfaces.TestIterationDetailsModel[]
	) => void
	): void;
		addTestResultsToTestRun(
		resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
	): void;
		bulkUpdateTestResults(
		resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[], onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void
	): void;
		getTestCaseResultById(
		project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult) => void
	): void;
		getTestCaseResults(
		project: string, runId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
	): void;
		updateTestResults(
		resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
	): void;
		getActionResults(
		project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath: string, onResult: (
		err: any, statusCode: number, Results: TestInterfaces.TestActionResultModel[]
	) => void
	): void;
		getResultParameters(
		project: string, runId: number, testCaseResultId: number, iterationId: number, paramName: string, onResult: (
		err: any, statusCode: number, Results: TestInterfaces.TestResultParameterModel[]
	) => void
	): void;
		getTestResultsByQuery(
		query: TestInterfaces.QueryModel, project: string, includeResultDetails: boolean, includeIterationDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void
	): void;
		getTestRunStatistics(
		project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRunStatistic) => void
	): void;
		getTestRunsByQuery(
		query: TestInterfaces.QueryModel, project: string, includeRunDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun[]) => void
	): void;
		createTestRun(
		testRun: TestInterfaces.RunCreateModel, project: string, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
	): void;
		deleteTestRun(
		project: string, runId: number, onResult: (err: any, statusCode: number) => void
	): void;
		getTestRunById(
		project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
	): void;
		getTestRuns(
		project: string, buildUri: string, owner: string, tmiRunId: string, planId: number, includeRunDetails: boolean, automated: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Runs: TestInterfaces.TestRun[]) => void
	): void;
		updateTestRun(
		runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
	): void;
		addTestCasesToSuite(
		project: string, planId: number, suiteId: number, testCaseIds: string, onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void
	): void;
		getTestCaseById(
		project: string, planId: number, suiteId: number, testCaseIds: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.SuiteTestCase) => void
	): void;
		getTestCases(
		project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void
	): void;
		removeTestCasesFromSuiteUrl(
		project: string, planId: number, suiteId: number, testCaseIds: string, onResult: (err: any, statusCode: number) => void
	): void;
		createTestSuite(
		testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite[]) => void
	): void;
		deleteTestSuite(
		project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number) => void
	): void;
		getTestSuiteById(
		project: string, planId: number, suiteId: number, includeChildSuites: boolean, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void
	): void;
		getTestSuitesForPlan(
		project: string, planId: number, includeSuites: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void
	): void;
		updateTestSuite(
		suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void
	): void;
		getSuitesByTestCaseId(
		testCaseId: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void
	): void;
		createTestSettings(
		testSettings: TestInterfaces.TestSettings, project: string, onResult: (err: any, statusCode: number, TestSetting: number) => void
	): void;
		deleteTestSettings(
		project: string, testSettingsId: number, onResult: (err: any, statusCode: number) => void
	): void;
		getTestSettingsById(
		project: string, testSettingsId: number, onResult: (err: any, statusCode: number, TestSetting: TestInterfaces.TestSettings) => void
	): void
	}

	declare export class QTestApi extends basem$QClientApiBase, IQTestApi {
		api: TestApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createTestResultAttachment(
		attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number
	): Q.Promise<TestInterfaces.TestAttachmentReference>;
		createTestRunAttachment(
		attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number
	): Q.Promise<TestInterfaces.TestAttachmentReference>;
		getBuildCodeCoverage(
		project: string, buildId: number, flags: number
	): Q.Promise<TestInterfaces.BuildCoverage[]>;
		getCodeCoverageSummary(
		project: string, buildId: number, deltaBuildId?: number
	): Q.Promise<TestInterfaces.CodeCoverageSummary>;
		getTestRunCodeCoverage(
		project: string, runId: number, flags: number
	): Q.Promise<TestInterfaces.TestRunCoverage[]>;
		getTestRunLogs(
		project: string, runId: number
	): Q.Promise<TestInterfaces.TestMessageLogDetails[]>;
		createTestPlan(
		testPlan: TestInterfaces.PlanUpdateModel, project: string
	): Q.Promise<TestInterfaces.TestPlan>;
		getPlanById(project: string, planId: number): Q.Promise<TestInterfaces.TestPlan>;
		getPlans(
		project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean
	): Q.Promise<TestInterfaces.TestPlan[]>;
		updateTestPlan(
		planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number
	): Q.Promise<TestInterfaces.TestPlan>;
		getPoint(
		project: string, planId: number, suiteId: number, pointIds: number, witFields?: string
	): Q.Promise<TestInterfaces.TestPoint>;
		getPoints(
		project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestPoint[]>;
		updateTestPoints(
		pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string
	): Q.Promise<TestInterfaces.TestPoint[]>;
		getTestIteration(
		project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean
	): Q.Promise<TestInterfaces.TestIterationDetailsModel>;
		getTestIterations(
		project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean
	): Q.Promise<TestInterfaces.TestIterationDetailsModel[]>;
		addTestResultsToTestRun(
		resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number
	): Q.Promise<TestInterfaces.TestCaseResult[]>;
		bulkUpdateTestResults(
		resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]
	): Q.Promise<TestInterfaces.TestCaseResult[]>;
		getTestCaseResultById(
		project: string, runId: number, testCaseResultId: number, includeIterationDetails?: boolean
	): Q.Promise<TestInterfaces.TestCaseResult>;
		getTestCaseResults(
		project: string, runId: number, includeIterationDetails?: boolean
	): Q.Promise<TestInterfaces.TestCaseResult[]>;
		updateTestResults(
		resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number
	): Q.Promise<TestInterfaces.TestCaseResult[]>;
		getActionResults(
		project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string
	): Q.Promise<TestInterfaces.TestActionResultModel[]>;
		getResultParameters(
		project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string
	): Q.Promise<TestInterfaces.TestResultParameterModel[]>;
		getTestResultsByQuery(
		query: TestInterfaces.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestCaseResult[]>;
		getTestRunStatistics(project: string, runId: number): Q.Promise<TestInterfaces.TestRunStatistic>;
		getTestRunsByQuery(
		query: TestInterfaces.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestRun[]>;
		createTestRun(
		testRun: TestInterfaces.RunCreateModel, project: string
	): Q.Promise<TestInterfaces.TestRun>;
		getTestRunById(project: string, runId: number): Q.Promise<TestInterfaces.TestRun>;
		getTestRuns(
		project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestRun[]>;
		updateTestRun(
		runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number
	): Q.Promise<TestInterfaces.TestRun>;
		addTestCasesToSuite(
		project: string, planId: number, suiteId: number, testCaseIds: string
	): Q.Promise<TestInterfaces.SuiteTestCase[]>;
		getTestCaseById(
		project: string, planId: number, suiteId: number, testCaseIds: number
	): Q.Promise<TestInterfaces.SuiteTestCase>;
		getTestCases(
		project: string, planId: number, suiteId: number
	): Q.Promise<TestInterfaces.SuiteTestCase[]>;
		createTestSuite(
		testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number
	): Q.Promise<TestInterfaces.TestSuite[]>;
		getTestSuiteById(
		project: string, planId: number, suiteId: number, includeChildSuites?: boolean
	): Q.Promise<TestInterfaces.TestSuite>;
		getTestSuitesForPlan(
		project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number
	): Q.Promise<TestInterfaces.TestSuite[]>;
		updateTestSuite(
		suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number
	): Q.Promise<TestInterfaces.TestSuite>;
		getSuitesByTestCaseId(testCaseId: number): Q.Promise<TestInterfaces.TestSuite[]>;
		createTestSettings(testSettings: TestInterfaces.TestSettings, project: string): Q.Promise<number>;
		getTestSettingsById(
		project: string, testSettingsId: number
	): Q.Promise<TestInterfaces.TestSettings>
	}

	
}

declare module 'vso-node-api/interfaces/TfvcInterfaces' {
		declare export interface AssociatedWorkItem {
		assignedTo: string,
		id: number,
		state: string,
		title: string,
		url: string,
		webUrl: string,
		workItemType: string
	}

	declare export interface Change<T> {
		changeType: VersionControlChangeType,
		item: T,
		newContent: ItemContent,
		sourceServerItem: string,
		url: string
	}

	declare export interface ChangeCountDictionary {
		
	}

	declare export interface ChangeList<T> {
		allChangesIncluded: boolean,
		changeCounts: {
		[key: number]: number
	},
		changes: Change<T>[],
		comment: string,
		commentTruncated: boolean,
		creationDate: Date,
		notes: CheckinNote[],
		owner: string,
		ownerDisplayName: string,
		ownerId: string,
		sortDate: Date,
		version: string
	}

	declare export interface ChangeListSearchCriteria {
		compareVersion: string,
		excludeDeletes: boolean,
		followRenames: boolean,
		fromDate: string,
		fromVersion: string,
		itemPath: string,
		itemVersion: string,
		skip: number,
		toDate: string,
		top: number,
		toVersion: string,
		user: string
	}

	declare export interface CheckinNote {
		name: string,
		value: string
	}

	declare export interface FileContentMetadata {
		contentType: string,
		encoding: number,
		extension: string,
		fileName: string,
		isBinary: boolean,
		isImage: boolean,
		vsLink: string
	}

	declare export interface GitBaseVersionDescriptor {
		baseVersion: string,
		baseVersionOptions: GitVersionOptions,
		baseVersionType: GitVersionType
	}

	declare export interface GitBlobRef {
		_links: any,
		objectId: string,
		size: number,
		url: string
	}

	declare export interface GitBranchStats {
		aheadCount: number,
		behindCount: number,
		commit: GitCommitRef,
		isBaseVersion: boolean,
		name: string
	}

	declare export interface GitChange {
		
	}

	declare export interface GitCommit {
		push: GitPushRef,
		treeId: string
	}

	declare export interface GitCommitChanges {
		changeCounts: ChangeCountDictionary,
		changes: GitChange[]
	}

	declare export interface GitCommitDiffs {
		aheadCount: number,
		allChangesIncluded: boolean,
		baseCommit: string,
		behindCount: number,
		changeCounts: {
		[key: number]: number
	},
		changes: GitChange[],
		commonCommit: string,
		targetCommit: string
	}

	declare export interface GitCommitRef {
		_links: any,
		author: GitUserDate,
		changeCounts: ChangeCountDictionary,
		changes: GitChange[],
		comment: string,
		commentTruncated: boolean,
		commitId: string,
		committer: GitUserDate,
		parents: string[],
		remoteUrl: string,
		url: string
	}

	declare export interface GitCommitToCreate {
		baseRef: GitRef,
		comment: string,
		pathActions: GitPathAction[]
	}

	declare export interface GitHistoryQueryResults {
		startingCommitId: string,
		unpopulatedCount: number,
		unprocessedCount: number
	}

	declare export interface GitItem {
		commitId: string,
		gitObjectType: GitObjectType,
		latestProcessedChange: GitCommitRef,
		objectId: string,
		originalObjectId: string
	}

	declare export interface GitItemDescriptor {
		path: string,
		recursionLevel: VersionControlRecursionType,
		version: string,
		versionOptions: GitVersionOptions,
		versionType: GitVersionType
	}

	declare export interface GitItemRequestData {
		includeContentMetadata: boolean,
		includeLinks: boolean,
		itemDescriptors: GitItemDescriptor[],
		latestProcessedChange: boolean
	}

	declare export interface GitMediaObjectRef {
		_links: any,
		id: string,
		oid: string,
		size: number,
		url: string
	}

	declare export interface GitPathAction {
		action: GitPathActions,
		base64Content: string,
		path: string,
		rawTextContent: string,
		targetPath: string
	}

	declare export interface GitPullRequest {
		_links: any,
		closedDate: Date,
		codeReviewId: number,
		createdBy: VSSInterfaces.IdentityRef,
		creationDate: Date,
		description: string,
		lastMergeCommit: GitCommitRef,
		lastMergeSourceCommit: GitCommitRef,
		lastMergeTargetCommit: GitCommitRef,
		mergeId: string,
		mergeStatus: PullRequestAsyncStatus,
		pullRequestId: number,
		remoteUrl: string,
		repository: GitRepository,
		reviewers: IdentityRefWithVote[],
		sourceRefName: string,
		status: PullRequestStatus,
		targetRefName: string,
		title: string,
		upgraded: boolean,
		url: string
	}

	declare export interface GitPullRequestSearchCriteria {
		creatorId: string,
		includeLinks: boolean,
		repositoryId: string,
		reviewerId: string,
		sourceRefName: string,
		status: PullRequestStatus,
		targetRefName: string
	}

	declare export interface GitPush {
		commits: GitCommitRef[],
		refUpdates: GitRefUpdate[],
		repository: GitRepository
	}

	declare export interface GitPushEventData {
		afterId: string,
		beforeId: string,
		branch: string,
		commits: GitCommit[],
		repository: GitRepository
	}

	declare export interface GitPushRef {
		_links: any,
		date: Date,
		pushCorrelationId: string,
		pushedBy: VSSInterfaces.IdentityRef,
		pushId: number,
		url: string
	}

	declare export interface GitPushSearchCriteria {
		fromDate: Date,
		includeLinks: boolean,
		includeRefUpdates: boolean,
		pusherId: string,
		refName: string,
		toDate: Date
	}

	declare export interface GitQueryCommitsCriteria {
		$skip: number,
		$top: number,
		author: string,
		compareVersion: GitVersionDescriptor,
		excludeDeletes: boolean,
		fromCommitId: string,
		fromDate: string,
		ids: string[],
		includeLinks: boolean,
		itemPath: string,
		itemVersion: GitVersionDescriptor,
		toCommitId: string,
		toDate: string,
		user: string
	}

	declare export interface GitRef {
		_links: any,
		isLockedBy: VSSInterfaces.IdentityRef,
		name: string,
		objectId: string,
		url: string
	}

	declare export interface GitRefUpdate {
		name: string,
		newObjectId: string,
		oldObjectId: string,
		repositoryId: string
	}

	declare export interface GitRefUpdateResult {
		customMessage: string,
		name: string,
		newObjectId: string,
		oldObjectId: string,
		rejectedBy: string,
		repositoryId: string,
		success: boolean,
		updateStatus: GitRefUpdateStatus
	}

	declare export interface GitRefUpdateResultSet {
		countFailed: number,
		countSucceeded: number,
		pushCorrelationId: string,
		pushIds: {
		[key: number]: number
	},
		pushTime: Date,
		results: GitRefUpdateResult[]
	}

	declare export interface GitRepository {
		_links: any,
		defaultBranch: string,
		id: string,
		name: string,
		project: TfsInterfaces.TeamProjectReference,
		remoteUrl: string,
		url: string
	}

	declare export interface GitTargetVersionDescriptor {
		targetVersion: string,
		targetVersionOptions: GitVersionOptions,
		targetVersionType: GitVersionType
	}

	declare export interface GitTreeEntryRef {
		gitObjectType: GitObjectType,
		mode: string,
		objectId: string,
		relativePath: string,
		size: number,
		url: string
	}

	declare export interface GitTreeRef {
		_links: any,
		objectId: string,
		size: number,
		treeEntries: GitTreeEntryRef[],
		url: string
	}

	declare export interface GitUserDate {
		date: Date,
		email: string,
		name: string
	}

	declare export interface GitVersionDescriptor {
		version: string,
		versionOptions: GitVersionOptions,
		versionType: GitVersionType
	}

	declare export interface HistoryEntry<T> {
		changeList: ChangeList<T>,
		itemChangeType: VersionControlChangeType,
		serverItem: string
	}

	declare export interface HistoryQueryResults<T> {
		moreResultsAvailable: boolean,
		results: HistoryEntry<T>[]
	}

	declare export interface IdentityRefWithVote {
		isRequired: boolean,
		reviewerUrl: string,
		vote: number,
		votedFor: IdentityRefWithVote[]
	}

	declare export interface IncludedGitCommit {
		commitId: string,
		commitTime: Date,
		parentCommitIds: string[],
		repositoryId: string
	}

	declare export interface ItemContent {
		content: string,
		contentType: ItemContentType
	}

	declare export interface ItemDetailsOptions {
		includeContentMetadata: boolean,
		recursionLevel: VersionControlRecursionType
	}

	declare export interface ItemModel {
		_links: any,
		contentMetadata: FileContentMetadata,
		isFolder: boolean,
		isSymLink: boolean,
		path: string,
		url: string
	}

	declare export interface TfvcBranch {
		children: TfvcBranch[],
		mappings: TfvcBranchMapping[],
		parent: TfvcShallowBranchRef,
		relatedBranches: TfvcShallowBranchRef[]
	}

	declare export interface TfvcBranchMapping {
		depth: string,
		serverItem: string,
		type: string
	}

	declare export interface TfvcBranchRef {
		_links: any,
		createdDate: Date,
		description: string,
		isDeleted: boolean,
		owner: VSSInterfaces.IdentityRef,
		url: string
	}

	declare export interface TfvcChange {
		mergeSources: TfvcMergeSource[],
		pendingVersion: number
	}

	declare export interface TfvcChangeset {
		accountId: string,
		changes: TfvcChange[],
		checkinNotes: CheckinNote[],
		collectionId: string,
		hasMoreChanges: boolean,
		policyOverride: TfvcPolicyOverrideInfo,
		workItems: AssociatedWorkItem[]
	}

	declare export interface TfvcChangesetRef {
		_links: any,
		author: VSSInterfaces.IdentityRef,
		changesetId: number,
		checkedInBy: VSSInterfaces.IdentityRef,
		comment: string,
		commentTruncated: boolean,
		createdDate: Date,
		url: string
	}

	declare export interface TfvcChangesetSearchCriteria {
		author: string,
		followRenames: boolean,
		fromDate: string,
		fromId: number,
		includeLinks: boolean,
		path: string,
		toDate: string,
		toId: number
	}

	declare export interface TfvcChangesetsRequestData {
		changesetIds: number[],
		commentLength: number,
		includeLinks: boolean
	}

	declare export interface TfvcCheckinEventData {
		changeset: TfvcChangeset,
		project: TfsInterfaces.TeamProjectReference
	}

	declare export interface TfvcHistoryEntry {
		encoding: number,
		fileId: number
	}

	declare export interface TfvcItem {
		changeDate: Date,
		deletionId: number,
		isBranch: boolean,
		isPendingChange: boolean,
		version: number
	}

	declare export interface TfvcItemDescriptor {
		path: string,
		recursionLevel: VersionControlRecursionType,
		version: string,
		versionOption: TfvcVersionOption,
		versionType: TfvcVersionType
	}

	declare export interface TfvcItemRequestData {
		includeContentMetadata: boolean,
		includeLinks: boolean,
		itemDescriptors: TfvcItemDescriptor[]
	}

	declare export interface TfvcLabel {
		items: TfvcItem[]
	}

	declare export interface TfvcLabelRef {
		_links: any,
		description: string,
		id: number,
		labelScope: string,
		modifiedDate: Date,
		name: string,
		owner: VSSInterfaces.IdentityRef,
		url: string
	}

	declare export interface TfvcLabelRequestData {
		includeLinks: boolean,
		itemLabelFilter: string,
		labelScope: string,
		maxItemCount: number,
		name: string,
		owner: string
	}

	declare export interface TfvcMergeSource {
		isRename: boolean,
		serverItem: string,
		versionFrom: number,
		versionTo: number
	}

	declare export interface TfvcPolicyFailureInfo {
		message: string,
		policyName: string
	}

	declare export interface TfvcPolicyOverrideInfo {
		comment: string,
		policyFailures: TfvcPolicyFailureInfo[]
	}

	declare export interface TfvcShallowBranchRef {
		path: string
	}

	declare export interface TfvcShelveset {
		changes: TfvcChange[],
		notes: CheckinNote[],
		policyOverride: TfvcPolicyOverrideInfo,
		workItems: AssociatedWorkItem[]
	}

	declare export interface TfvcShelvesetRef {
		_links: any,
		comment: string,
		commentTruncated: boolean,
		createdDate: Date,
		id: string,
		name: string,
		owner: VSSInterfaces.IdentityRef,
		url: string
	}

	declare export interface TfvcShelvesetRequestData {
		includeDetails: boolean,
		includeLinks: boolean,
		includeWorkItems: boolean,
		maxChangeCount: number,
		maxCommentLength: number,
		name: string,
		owner: string
	}

	declare export interface TfvcVersionDescriptor {
		version: string,
		versionOption: TfvcVersionOption,
		versionType: TfvcVersionType
	}

	declare export interface UpdateRefsRequest {
		refUpdateRequests: GitRefUpdate[],
		updateMode: GitRefUpdateMode
	}

	declare export interface VersionControlProjectInfo {
		project: TfsInterfaces.TeamProjectReference,
		supportsGit: boolean,
		supportsTFVC: boolean
	}

			
}

declare module 'vso-node-api/TfvcApi' {
		declare export interface ITfvcApi {
		getBranch(
		path: string, project: string, includeParent: boolean, includeChildren: boolean, onResult: (err: any, statusCode: number, Branche: TfvcInterfaces.TfvcBranch) => void
	): void,
		getBranches(
		project: string, includeParent: boolean, includeChildren: boolean, includeDeleted: boolean, includeLinks: boolean, onResult: (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranch[]) => void
	): void,
		getBranchRefs(
		scopePath: string, project: string, includeDeleted: boolean, includeLinks: boolean, onResult: (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranchRef[]) => void
	): void,
		getChangesetChanges(
		id: number, skip: number, top: number, onResult: (
		err: any, statusCode: number, ChangesetChanges: TfvcInterfaces.TfvcChange[]
	) => void
	): void,
		createChangeset(
		changeset: TfvcInterfaces.TfvcChangeset, project: string, onResult: (
		err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangesetRef
	) => void
	): void,
		getChangeset(
		id: number, project: string, maxChangeCount: number, includeDetails: boolean, includeWorkItems: boolean, maxCommentLength: number, includeSourceRename: boolean, skip: number, top: number, orderby: string, searchCriteria: TfvcInterfaces.TfvcChangesetSearchCriteria, onResult: (err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangeset) => void
	): void,
		getChangesets(
		project: string, maxChangeCount: number, includeDetails: boolean, includeWorkItems: boolean, maxCommentLength: number, includeSourceRename: boolean, skip: number, top: number, orderby: string, searchCriteria: TfvcInterfaces.TfvcChangesetSearchCriteria, onResult: (
		err: any, statusCode: number, Changesets: TfvcInterfaces.TfvcChangesetRef[]
	) => void
	): void,
		getBatchedChangesets(
		changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData, onResult: (
		err: any, statusCode: number, ChangesetsBatch: TfvcInterfaces.TfvcChangesetRef[]
	) => void
	): void,
		getChangesetWorkItems(
		id: number, onResult: (
		err: any, statusCode: number, ChangesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]
	) => void
	): void,
		getItemsBatch(
		itemRequestData: TfvcInterfaces.TfvcItemRequestData, project: string, onResult: (err: any, statusCode: number, ItemBatch: TfvcInterfaces.TfvcItem[][]) => void
	): void,
		getItem(
		path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, Item: TfvcInterfaces.TfvcItem) => void
	): void,
		getItemContent(
		path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getItems(
		project: string, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, includeLinks: boolean, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, Items: TfvcInterfaces.TfvcItem[]) => void
	): void,
		getItemText(
		path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getItemZip(
		path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getLabelItems(
		labelId: string, top: number, skip: number, onResult: (err: any, statusCode: number, LabelItems: TfvcInterfaces.TfvcItem[]) => void
	): void,
		getLabel(
		labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project: string, onResult: (err: any, statusCode: number, Label: TfvcInterfaces.TfvcLabel) => void
	): void,
		getLabels(
		requestData: TfvcInterfaces.TfvcLabelRequestData, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Labels: TfvcInterfaces.TfvcLabelRef[]) => void
	): void,
		getProjectInfo(
		projectId: string, project: string, onResult: (
		err: any, statusCode: number, ProjectInfo: TfvcInterfaces.VersionControlProjectInfo
	) => void
	): void,
		getProjectInfos(
		project: string, onResult: (
		err: any, statusCode: number, ProjectInfo: TfvcInterfaces.VersionControlProjectInfo[]
	) => void
	): void,
		getShelvesetChanges(
		shelvesetId: string, top: number, skip: number, onResult: (
		err: any, statusCode: number, ShelvesetChanges: TfvcInterfaces.TfvcChange[]
	) => void
	): void,
		getShelveset(
		shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData, onResult: (err: any, statusCode: number, Shelveset: TfvcInterfaces.TfvcShelveset) => void
	): void,
		getShelvesets(
		requestData: TfvcInterfaces.TfvcShelvesetRequestData, top: number, skip: number, onResult: (
		err: any, statusCode: number, Shelvesets: TfvcInterfaces.TfvcShelvesetRef[]
	) => void
	): void,
		getShelvesetWorkItems(
		shelvesetId: string, onResult: (
		err: any, statusCode: number, ShelvesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]
	) => void
	): void
	}

	declare export interface IQTfvcApi {
		getBranch(
		path: string, project?: string, includeParent?: boolean, includeChildren?: boolean
	): Q.Promise<TfvcInterfaces.TfvcBranch>,
		getBranches(
		project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean
	): Q.Promise<TfvcInterfaces.TfvcBranch[]>,
		getBranchRefs(
		scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean
	): Q.Promise<TfvcInterfaces.TfvcBranchRef[]>,
		getChangesetChanges(
		id?: number, skip?: number, top?: number
	): Q.Promise<TfvcInterfaces.TfvcChange[]>,
		createChangeset(
		changeset: TfvcInterfaces.TfvcChangeset, project?: string
	): Q.Promise<TfvcInterfaces.TfvcChangesetRef>,
		getChangeset(
		id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria
	): Q.Promise<TfvcInterfaces.TfvcChangeset>,
		getChangesets(
		project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria
	): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>,
		getBatchedChangesets(
		changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData
	): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>,
		getChangesetWorkItems(id?: number): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>,
		getItemsBatch(
		itemRequestData: TfvcInterfaces.TfvcItemRequestData, project?: string
	): Q.Promise<TfvcInterfaces.TfvcItem[][]>,
		getItem(
		path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
	): Q.Promise<TfvcInterfaces.TfvcItem>,
		getItems(
		project?: string, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
	): Q.Promise<TfvcInterfaces.TfvcItem[]>,
		getLabelItems(
		labelId: string, top?: number, skip?: number
	): Q.Promise<TfvcInterfaces.TfvcItem[]>,
		getLabel(
		labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string
	): Q.Promise<TfvcInterfaces.TfvcLabel>,
		getLabels(
		requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string, top?: number, skip?: number
	): Q.Promise<TfvcInterfaces.TfvcLabelRef[]>,
		getProjectInfo(
		projectId: string, project?: string
	): Q.Promise<TfvcInterfaces.VersionControlProjectInfo>,
		getProjectInfos(project?: string): Q.Promise<TfvcInterfaces.VersionControlProjectInfo[]>,
		getShelvesetChanges(
		shelvesetId: string, top?: number, skip?: number
	): Q.Promise<TfvcInterfaces.TfvcChange[]>,
		getShelveset(
		shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData
	): Q.Promise<TfvcInterfaces.TfvcShelveset>,
		getShelvesets(
		requestData: TfvcInterfaces.TfvcShelvesetRequestData, top?: number, skip?: number
	): Q.Promise<TfvcInterfaces.TfvcShelvesetRef[]>,
		getShelvesetWorkItems(shelvesetId: string): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>
	}

		declare export class TfvcApi extends basem$ClientApiBase, ITfvcApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		getBranch(
		path: string, project: string, includeParent: boolean, includeChildren: boolean, onResult: (err: any, statusCode: number, Branche: TfvcInterfaces.TfvcBranch) => void
	): void;
		getBranches(
		project: string, includeParent: boolean, includeChildren: boolean, includeDeleted: boolean, includeLinks: boolean, onResult: (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranch[]) => void
	): void;
		getBranchRefs(
		scopePath: string, project: string, includeDeleted: boolean, includeLinks: boolean, onResult: (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranchRef[]) => void
	): void;
		getChangesetChanges(
		id: number, skip: number, top: number, onResult: (
		err: any, statusCode: number, ChangesetChanges: TfvcInterfaces.TfvcChange[]
	) => void
	): void;
		createChangeset(
		changeset: TfvcInterfaces.TfvcChangeset, project: string, onResult: (
		err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangesetRef
	) => void
	): void;
		getChangeset(
		id: number, project: string, maxChangeCount: number, includeDetails: boolean, includeWorkItems: boolean, maxCommentLength: number, includeSourceRename: boolean, skip: number, top: number, orderby: string, searchCriteria: TfvcInterfaces.TfvcChangesetSearchCriteria, onResult: (err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangeset) => void
	): void;
		getChangesets(
		project: string, maxChangeCount: number, includeDetails: boolean, includeWorkItems: boolean, maxCommentLength: number, includeSourceRename: boolean, skip: number, top: number, orderby: string, searchCriteria: TfvcInterfaces.TfvcChangesetSearchCriteria, onResult: (
		err: any, statusCode: number, Changesets: TfvcInterfaces.TfvcChangesetRef[]
	) => void
	): void;
		getBatchedChangesets(
		changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData, onResult: (
		err: any, statusCode: number, ChangesetsBatch: TfvcInterfaces.TfvcChangesetRef[]
	) => void
	): void;
		getChangesetWorkItems(
		id: number, onResult: (
		err: any, statusCode: number, ChangesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]
	) => void
	): void;
		getItemsBatch(
		itemRequestData: TfvcInterfaces.TfvcItemRequestData, project: string, onResult: (err: any, statusCode: number, ItemBatch: TfvcInterfaces.TfvcItem[][]) => void
	): void;
		getItem(
		path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, Item: TfvcInterfaces.TfvcItem) => void
	): void;
		getItemContent(
		path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getItems(
		project: string, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, includeLinks: boolean, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, Items: TfvcInterfaces.TfvcItem[]) => void
	): void;
		getItemText(
		path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getItemZip(
		path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getLabelItems(
		labelId: string, top: number, skip: number, onResult: (err: any, statusCode: number, LabelItems: TfvcInterfaces.TfvcItem[]) => void
	): void;
		getLabel(
		labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project: string, onResult: (err: any, statusCode: number, Label: TfvcInterfaces.TfvcLabel) => void
	): void;
		getLabels(
		requestData: TfvcInterfaces.TfvcLabelRequestData, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Labels: TfvcInterfaces.TfvcLabelRef[]) => void
	): void;
		getProjectInfo(
		projectId: string, project: string, onResult: (
		err: any, statusCode: number, ProjectInfo: TfvcInterfaces.VersionControlProjectInfo
	) => void
	): void;
		getProjectInfos(
		project: string, onResult: (
		err: any, statusCode: number, ProjectInfo: TfvcInterfaces.VersionControlProjectInfo[]
	) => void
	): void;
		getShelvesetChanges(
		shelvesetId: string, top: number, skip: number, onResult: (
		err: any, statusCode: number, ShelvesetChanges: TfvcInterfaces.TfvcChange[]
	) => void
	): void;
		getShelveset(
		shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData, onResult: (err: any, statusCode: number, Shelveset: TfvcInterfaces.TfvcShelveset) => void
	): void;
		getShelvesets(
		requestData: TfvcInterfaces.TfvcShelvesetRequestData, top: number, skip: number, onResult: (
		err: any, statusCode: number, Shelvesets: TfvcInterfaces.TfvcShelvesetRef[]
	) => void
	): void;
		getShelvesetWorkItems(
		shelvesetId: string, onResult: (
		err: any, statusCode: number, ShelvesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]
	) => void
	): void
	}

	declare export class QTfvcApi extends basem$QClientApiBase, IQTfvcApi {
		api: TfvcApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		getBranch(
		path: string, project?: string, includeParent?: boolean, includeChildren?: boolean
	): Q.Promise<TfvcInterfaces.TfvcBranch>;
		getBranches(
		project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean
	): Q.Promise<TfvcInterfaces.TfvcBranch[]>;
		getBranchRefs(
		scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean
	): Q.Promise<TfvcInterfaces.TfvcBranchRef[]>;
		getChangesetChanges(
		id?: number, skip?: number, top?: number
	): Q.Promise<TfvcInterfaces.TfvcChange[]>;
		createChangeset(
		changeset: TfvcInterfaces.TfvcChangeset, project?: string
	): Q.Promise<TfvcInterfaces.TfvcChangesetRef>;
		getChangeset(
		id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria
	): Q.Promise<TfvcInterfaces.TfvcChangeset>;
		getChangesets(
		project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria
	): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>;
		getBatchedChangesets(
		changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData
	): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>;
		getChangesetWorkItems(id?: number): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>;
		getItemsBatch(
		itemRequestData: TfvcInterfaces.TfvcItemRequestData, project?: string
	): Q.Promise<TfvcInterfaces.TfvcItem[][]>;
		getItem(
		path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
	): Q.Promise<TfvcInterfaces.TfvcItem>;
		getItems(
		project?: string, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
	): Q.Promise<TfvcInterfaces.TfvcItem[]>;
		getLabelItems(
		labelId: string, top?: number, skip?: number
	): Q.Promise<TfvcInterfaces.TfvcItem[]>;
		getLabel(
		labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string
	): Q.Promise<TfvcInterfaces.TfvcLabel>;
		getLabels(
		requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string, top?: number, skip?: number
	): Q.Promise<TfvcInterfaces.TfvcLabelRef[]>;
		getProjectInfo(
		projectId: string, project?: string
	): Q.Promise<TfvcInterfaces.VersionControlProjectInfo>;
		getProjectInfos(project?: string): Q.Promise<TfvcInterfaces.VersionControlProjectInfo[]>;
		getShelvesetChanges(
		shelvesetId: string, top?: number, skip?: number
	): Q.Promise<TfvcInterfaces.TfvcChange[]>;
		getShelveset(
		shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData
	): Q.Promise<TfvcInterfaces.TfvcShelveset>;
		getShelvesets(
		requestData: TfvcInterfaces.TfvcShelvesetRequestData, top?: number, skip?: number
	): Q.Promise<TfvcInterfaces.TfvcShelvesetRef[]>;
		getShelvesetWorkItems(shelvesetId: string): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>
	}

	
}

declare module 'vso-node-api/interfaces/WorkItemTrackingInterfaces' {
		declare export interface AttachmentReference {
		id: string,
		url: string
	}

	declare export interface FieldDependentRule {
		dependentFields: WorkItemFieldReference[]
	}

	declare export interface FieldsToEvaluate {
		fields: string[],
		fieldUpdates: {
		[key: string]: any
	},
		fieldValues: {
		[key: string]: any
	},
		rulesFrom: string[]
	}

	declare export interface IdentityReference {
		id: string,
		name: string,
		url: string
	}

	declare export interface Link {
		attributes: {
		[key: string]: any
	},
		rel: string,
		title: string,
		url: string
	}

	declare export interface ProjectReference {
		id: string,
		name: string,
		url: string
	}

	declare export interface ProvisioningResult {
		provisioningImportEvents: string[]
	}

	declare export interface QueryHierarchyItem {
		children: QueryHierarchyItem[],
		clauses: WorkItemQueryClause,
		columns: WorkItemFieldReference[],
		filterOptions: LinkQueryMode,
		hasChildren: boolean,
		id: string,
		isDeleted: boolean,
		isFolder: boolean,
		isInvalidSyntax: boolean,
		isPublic: boolean,
		linkClauses: WorkItemQueryClause,
		name: string,
		path: string,
		queryType: QueryType,
		sortColumns: WorkItemQuerySortColumn[],
		sourceClauses: WorkItemQueryClause,
		targetClauses: WorkItemQueryClause,
		wiql: string
	}

	declare export interface ReportingWorkItemLink {
		changedDate: Date,
		isActive: boolean,
		rel: string,
		sourceId: number,
		targetId: number
	}

	declare export interface ReportingWorkItemLinksBatch {
		
	}

	declare export interface ReportingWorkItemRevisionsBatch {
		
	}

	declare export interface ReportingWorkItemRevisionsFilter {
		fields: string[],
		types: string[]
	}

	declare export interface StreamedBatch<T> {
		isLastBatch: boolean,
		nextLink: string,
		values: T[]
	}

	declare export interface Wiql {
		query: string
	}

	declare export interface WorkItem {
		fields: {
		[key: string]: any
	},
		id: number,
		relations: WorkItemRelation[],
		rev: number
	}

	declare export interface WorkItemClassificationNode {
		attributes: {
		[key: string]: any
	},
		children: WorkItemClassificationNode[],
		id: number,
		name: string,
		structureType: TreeNodeStructureType
	}

	declare export interface WorkItemField {
		name: string,
		readOnly: boolean,
		referenceName: string,
		supportedOperations: WorkItemFieldOperation[],
		type: FieldType
	}

	declare export interface WorkItemFieldOperation {
		name: string,
		referenceName: string
	}

	declare export interface WorkItemFieldReference {
		name: string,
		referenceName: string,
		url: string
	}

	declare export interface WorkItemFieldUpdate {
		newValue: any,
		oldValue: any
	}

	declare export interface WorkItemHistory {
		rev: number,
		revisedBy: IdentityReference,
		revisedDate: Date,
		value: string
	}

	declare export interface WorkItemLink {
		rel: string,
		source: WorkItemReference,
		target: WorkItemReference
	}

	declare export interface WorkItemQueryClause {
		clauses: WorkItemQueryClause[],
		field: WorkItemFieldReference,
		fieldValue: WorkItemFieldReference,
		isFieldValue: boolean,
		logicalOperator: LogicalOperation,
		operator: WorkItemFieldOperation,
		value: string
	}

	declare export interface WorkItemQueryResult {
		asOf: Date,
		columns: WorkItemFieldReference[],
		queryResultType: QueryResultType,
		queryType: QueryType,
		sortColumns: WorkItemQuerySortColumn[],
		workItemRelations: WorkItemLink[],
		workItems: WorkItemReference[]
	}

	declare export interface WorkItemQuerySortColumn {
		descending: boolean,
		field: WorkItemFieldReference
	}

	declare export interface WorkItemReference {
		id: number,
		url: string
	}

	declare export interface WorkItemRelation {
		
	}

	declare export interface WorkItemRelationType {
		attributes: {
		[key: string]: any
	}
	}

	declare export interface WorkItemRelationUpdates {
		added: WorkItemRelation[],
		removed: WorkItemRelation[],
		updated: WorkItemRelation[]
	}

	declare export interface WorkItemRevisionReference {
		rev: number
	}

	declare export interface WorkItemTrackingReference {
		name: string,
		referenceName: string
	}

	declare export interface WorkItemTrackingResource {
		_links: any
	}

	declare export interface WorkItemTrackingResourceReference {
		url: string
	}

	declare export interface WorkItemType {
		description: string,
		fields: WorkItemTypeFieldInstance[],
		name: string,
		xmlForm: string
	}

	declare export interface WorkItemTypeCategory {
		defaultWorkItemType: WorkItemTypeReference,
		name: string,
		referenceName: string,
		workItemTypes: WorkItemTypeReference[]
	}

	declare export interface WorkItemTypeFieldInstance {
		field: WorkItemFieldReference,
		helpText: string
	}

	declare export interface WorkItemTypeReference {
		name: string
	}

	declare export interface WorkItemTypeTemplate {
		template: string
	}

	declare export interface WorkItemTypeTemplateUpdateModel {
		actionType: ProvisioningActionType,
		methodology: string,
		template: string,
		templateType: TemplateType
	}

	declare export interface WorkItemUpdate {
		fields: {
		[key: string]: WorkItemFieldUpdate
	},
		id: number,
		relations: WorkItemRelationUpdates,
		rev: number,
		revisedBy: IdentityReference,
		revisedDate: Date,
		workItemId: number
	}

			
}

declare module 'vso-node-api/WorkItemTrackingApi' {
		declare export interface IWorkItemTrackingApi {
		createAttachment(
		customHeaders: any, contentStream: NodeJS.ReadableStream, fileName: string, uploadType: string, onResult: (
		err: any, statusCode: number, attachment: WorkItemTrackingInterfaces.AttachmentReference
	) => void
	): void,
		getAttachmentContent(
		id: string, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getAttachmentZip(
		id: string, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void,
		getRootNodes(
		project: string, depth: number, onResult: (
		err: any, statusCode: number, classificationNodes: WorkItemTrackingInterfaces.WorkItemClassificationNode[]
	) => void
	): void,
		createOrUpdateClassificationNode(
		postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, onResult: (
		err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode
	) => void
	): void,
		deleteClassificationNode(
		project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, reclassifyId: number, onResult: (err: any, statusCode: number) => void
	): void,
		getClassificationNode(
		project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, depth: number, onResult: (
		err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode
	) => void
	): void,
		updateClassificationNode(
		postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, onResult: (
		err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode
	) => void
	): void,
		getField(
		field: string, onResult: (
		err: any, statusCode: number, field: WorkItemTrackingInterfaces.WorkItemField
	) => void
	): void,
		getFields(
		onResult: (
		err: any, statusCode: number, fields: WorkItemTrackingInterfaces.WorkItemField[]
	) => void
	): void,
		getHistory(
		id: number, top: number, skip: number, onResult: (
		err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory[]
	) => void
	): void,
		getHistoryById(
		id: number, revisionNumber: number, onResult: (
		err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory
	) => void
	): void,
		createQuery(
		postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, onResult: (
		err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem
	) => void
	): void,
		deleteQuery(
		project: string, query: string, onResult: (err: any, statusCode: number) => void
	): void,
		getQueries(
		project: string, expand: WorkItemTrackingInterfaces.QueryExpand, depth: number, includeDeleted: boolean, onResult: (
		err: any, statusCode: number, queries: WorkItemTrackingInterfaces.QueryHierarchyItem[]
	) => void
	): void,
		getQuery(
		project: string, query: string, expand: WorkItemTrackingInterfaces.QueryExpand, depth: number, includeDeleted: boolean, onResult: (
		err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem
	) => void
	): void,
		updateQuery(
		queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants: boolean, onResult: (
		err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem
	) => void
	): void,
		getRevision(
		id: number, revisionNumber: number, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, revision: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void,
		getRevisions(
		id: number, top: number, skip: number, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, revisions: WorkItemTrackingInterfaces.WorkItem[]
	) => void
	): void,
		evaluateRulesOnField(
		ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate, onResult: (err: any, statusCode: number) => void
	): void,
		getUpdate(
		id: number, updateNumber: number, onResult: (
		err: any, statusCode: number, update: WorkItemTrackingInterfaces.WorkItemUpdate
	) => void
	): void,
		getUpdates(
		id: number, top: number, skip: number, onResult: (
		err: any, statusCode: number, updates: WorkItemTrackingInterfaces.WorkItemUpdate[]
	) => void
	): void,
		queryByWiql(
		wiql: WorkItemTrackingInterfaces.Wiql, project: string, onResult: (
		err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult
	) => void
	): void,
		queryById(
		id: string, project: string, onResult: (
		err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult
	) => void
	): void,
		getReportingLinks(
		project: string, types: string[], watermark: number, onResult: (
		err: any, statusCode: number, workItemLink: WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch
	) => void
	): void,
		getRelationType(
		relation: string, onResult: (
		err: any, statusCode: number, workItemRelationType: WorkItemTrackingInterfaces.WorkItemRelationType
	) => void
	): void,
		getRelationTypes(
		onResult: (
		err: any, statusCode: number, workItemRelationTypes: WorkItemTrackingInterfaces.WorkItemRelationType[]
	) => void
	): void,
		readReportingRevisionsGet(
		project: string, fields: string[], types: string[], watermark: number, onResult: (
		err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch
	) => void
	): void,
		readReportingRevisionsPost(
		filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter, project: string, watermark: number, onResult: (
		err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch
	) => void
	): void,
		getWorkItem(
		id: number, fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void,
		getWorkItems(
		ids: number[], fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, workItems: WorkItemTrackingInterfaces.WorkItem[]
	) => void
	): void,
		updateWorkItem(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly: boolean, bypassRules: boolean, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void,
		createWorkItem(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly: boolean, bypassRules: boolean, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void,
		getWorkItemTemplate(
		project: string, type: string, fields: string, asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void,
		updateWorkItemTemplate(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly: boolean, bypassRules: boolean, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void,
		getWorkItemTypeCategories(
		project: string, onResult: (
		err: any, statusCode: number, workItemTypeCategories: WorkItemTrackingInterfaces.WorkItemTypeCategory[]
	) => void
	): void,
		getWorkItemTypeCategory(
		project: string, category: string, onResult: (
		err: any, statusCode: number, workItemTypeCategorie: WorkItemTrackingInterfaces.WorkItemTypeCategory
	) => void
	): void,
		getWorkItemType(
		project: string, type: string, onResult: (
		err: any, statusCode: number, workItemType: WorkItemTrackingInterfaces.WorkItemType
	) => void
	): void,
		getWorkItemTypes(
		project: string, onResult: (
		err: any, statusCode: number, workItemTypes: WorkItemTrackingInterfaces.WorkItemType[]
	) => void
	): void,
		getDependentFields(
		project: string, type: string, field: string, onResult: (
		err: any, statusCode: number, workItemTypesField: WorkItemTrackingInterfaces.FieldDependentRule
	) => void
	): void,
		exportWorkItemTypeDefinition(
		project: string, type: string, exportGlobalLists: boolean, onResult: (
		err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.WorkItemTypeTemplate
	) => void
	): void,
		updateWorkItemTypeDefinition(
		updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project: string, onResult: (
		err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.ProvisioningResult
	) => void
	): void
	}

	declare export interface IQWorkItemTrackingApi {
		createAttachment(
		customHeaders: any, contentStream: NodeJS.ReadableStream, fileName?: string, uploadType?: string
	): Q.Promise<WorkItemTrackingInterfaces.AttachmentReference>,
		getRootNodes(
		project: string, depth?: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>,
		createOrUpdateClassificationNode(
		postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>,
		getClassificationNode(
		project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, depth?: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>,
		updateClassificationNode(
		postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>,
		getField(field: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemField>,
		getFields(): Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]>,
		getHistory(
		id: number, top?: number, skip?: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory[]>,
		getHistoryById(
		id: number, revisionNumber: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory>,
		createQuery(
		postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string
	): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>,
		getQueries(
		project: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>,
		getQuery(
		project: string, query: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>,
		updateQuery(
		queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>,
		getRevision(
		id: number, revisionNumber: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>,
		getRevisions(
		id: number, top?: number, skip?: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>,
		getUpdate(
		id: number, updateNumber: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate>,
		getUpdates(
		id: number, top?: number, skip?: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>,
		queryByWiql(
		wiql: WorkItemTrackingInterfaces.Wiql, project?: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>,
		queryById(
		id: string, project?: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>,
		getReportingLinks(
		project?: string, types?: string[], watermark?: number
	): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>,
		getRelationType(relation: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType>,
		getRelationTypes(): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>,
		readReportingRevisionsGet(
		project?: string, fields?: string[], types?: string[], watermark?: number
	): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>,
		readReportingRevisionsPost(
		filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter, project?: string, watermark?: number
	): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>,
		getWorkItem(
		id: number, fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>,
		getWorkItems(
		ids: number[], fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>,
		updateWorkItem(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>,
		createWorkItem(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>,
		getWorkItemTemplate(
		project: string, type: string, fields?: string, asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>,
		updateWorkItemTemplate(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>,
		getWorkItemTypeCategories(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>,
		getWorkItemTypeCategory(
		project: string, category: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory>,
		getWorkItemType(
		project: string, type: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemType>,
		getWorkItemTypes(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemType[]>,
		getDependentFields(
		project: string, type: string, field: string
	): Q.Promise<WorkItemTrackingInterfaces.FieldDependentRule>,
		exportWorkItemTypeDefinition(
		project?: string, type?: string, exportGlobalLists?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate>,
		updateWorkItemTypeDefinition(
		updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project?: string
	): Q.Promise<WorkItemTrackingInterfaces.ProvisioningResult>
	}

		declare export class WorkItemTrackingApi extends basem$ClientApiBase, IWorkItemTrackingApi {
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createAttachment(
		customHeaders: any, contentStream: NodeJS.ReadableStream, fileName: string, uploadType: string, onResult: (
		err: any, statusCode: number, attachment: WorkItemTrackingInterfaces.AttachmentReference
	) => void
	): void;
		getAttachmentContent(
		id: string, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getAttachmentZip(
		id: string, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
	): void;
		getRootNodes(
		project: string, depth: number, onResult: (
		err: any, statusCode: number, classificationNodes: WorkItemTrackingInterfaces.WorkItemClassificationNode[]
	) => void
	): void;
		createOrUpdateClassificationNode(
		postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, onResult: (
		err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode
	) => void
	): void;
		deleteClassificationNode(
		project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, reclassifyId: number, onResult: (err: any, statusCode: number) => void
	): void;
		getClassificationNode(
		project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, depth: number, onResult: (
		err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode
	) => void
	): void;
		updateClassificationNode(
		postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, onResult: (
		err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode
	) => void
	): void;
		getField(
		field: string, onResult: (
		err: any, statusCode: number, field: WorkItemTrackingInterfaces.WorkItemField
	) => void
	): void;
		getFields(
		onResult: (
		err: any, statusCode: number, fields: WorkItemTrackingInterfaces.WorkItemField[]
	) => void
	): void;
		getHistory(
		id: number, top: number, skip: number, onResult: (
		err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory[]
	) => void
	): void;
		getHistoryById(
		id: number, revisionNumber: number, onResult: (
		err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory
	) => void
	): void;
		createQuery(
		postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, onResult: (
		err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem
	) => void
	): void;
		deleteQuery(
		project: string, query: string, onResult: (err: any, statusCode: number) => void
	): void;
		getQueries(
		project: string, expand: WorkItemTrackingInterfaces.QueryExpand, depth: number, includeDeleted: boolean, onResult: (
		err: any, statusCode: number, queries: WorkItemTrackingInterfaces.QueryHierarchyItem[]
	) => void
	): void;
		getQuery(
		project: string, query: string, expand: WorkItemTrackingInterfaces.QueryExpand, depth: number, includeDeleted: boolean, onResult: (
		err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem
	) => void
	): void;
		updateQuery(
		queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants: boolean, onResult: (
		err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem
	) => void
	): void;
		getRevision(
		id: number, revisionNumber: number, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, revision: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void;
		getRevisions(
		id: number, top: number, skip: number, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, revisions: WorkItemTrackingInterfaces.WorkItem[]
	) => void
	): void;
		evaluateRulesOnField(
		ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate, onResult: (err: any, statusCode: number) => void
	): void;
		getUpdate(
		id: number, updateNumber: number, onResult: (
		err: any, statusCode: number, update: WorkItemTrackingInterfaces.WorkItemUpdate
	) => void
	): void;
		getUpdates(
		id: number, top: number, skip: number, onResult: (
		err: any, statusCode: number, updates: WorkItemTrackingInterfaces.WorkItemUpdate[]
	) => void
	): void;
		queryByWiql(
		wiql: WorkItemTrackingInterfaces.Wiql, project: string, onResult: (
		err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult
	) => void
	): void;
		queryById(
		id: string, project: string, onResult: (
		err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult
	) => void
	): void;
		getReportingLinks(
		project: string, types: string[], watermark: number, onResult: (
		err: any, statusCode: number, workItemLink: WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch
	) => void
	): void;
		getRelationType(
		relation: string, onResult: (
		err: any, statusCode: number, workItemRelationType: WorkItemTrackingInterfaces.WorkItemRelationType
	) => void
	): void;
		getRelationTypes(
		onResult: (
		err: any, statusCode: number, workItemRelationTypes: WorkItemTrackingInterfaces.WorkItemRelationType[]
	) => void
	): void;
		readReportingRevisionsGet(
		project: string, fields: string[], types: string[], watermark: number, onResult: (
		err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch
	) => void
	): void;
		readReportingRevisionsPost(
		filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter, project: string, watermark: number, onResult: (
		err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch
	) => void
	): void;
		getWorkItem(
		id: number, fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void;
		getWorkItems(
		ids: number[], fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, workItems: WorkItemTrackingInterfaces.WorkItem[]
	) => void
	): void;
		updateWorkItem(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly: boolean, bypassRules: boolean, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void;
		getWorkItemTemplate(
		project: string, type: string, fields: string, asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void;
		createWorkItem(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly: boolean, bypassRules: boolean, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void;
		updateWorkItemTemplate(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly: boolean, bypassRules: boolean, onResult: (
		err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem
	) => void
	): void;
		getWorkItemTypeCategories(
		project: string, onResult: (
		err: any, statusCode: number, workItemTypeCategories: WorkItemTrackingInterfaces.WorkItemTypeCategory[]
	) => void
	): void;
		getWorkItemTypeCategory(
		project: string, category: string, onResult: (
		err: any, statusCode: number, workItemTypeCategorie: WorkItemTrackingInterfaces.WorkItemTypeCategory
	) => void
	): void;
		getWorkItemType(
		project: string, type: string, onResult: (
		err: any, statusCode: number, workItemType: WorkItemTrackingInterfaces.WorkItemType
	) => void
	): void;
		getWorkItemTypes(
		project: string, onResult: (
		err: any, statusCode: number, workItemTypes: WorkItemTrackingInterfaces.WorkItemType[]
	) => void
	): void;
		getDependentFields(
		project: string, type: string, field: string, onResult: (
		err: any, statusCode: number, workItemTypesField: WorkItemTrackingInterfaces.FieldDependentRule
	) => void
	): void;
		exportWorkItemTypeDefinition(
		project: string, type: string, exportGlobalLists: boolean, onResult: (
		err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.WorkItemTypeTemplate
	) => void
	): void;
		updateWorkItemTypeDefinition(
		updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project: string, onResult: (
		err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.ProvisioningResult
	) => void
	): void
	}

	declare export class QWorkItemTrackingApi extends basem$QClientApiBase, IQWorkItemTrackingApi {
		api: WorkItemTrackingApi;
		constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]): this;
		createAttachment(
		customHeaders: any, contentStream: NodeJS.ReadableStream, fileName?: string, uploadType?: string
	): Q.Promise<WorkItemTrackingInterfaces.AttachmentReference>;
		getRootNodes(
		project: string, depth?: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>;
		createOrUpdateClassificationNode(
		postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
		getClassificationNode(
		project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, depth?: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
		updateClassificationNode(
		postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
		getField(field: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemField>;
		getFields(): Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]>;
		getHistory(
		id: number, top?: number, skip?: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory[]>;
		getHistoryById(
		id: number, revisionNumber: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory>;
		createQuery(
		postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string
	): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
		getQueries(
		project: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>;
		getQuery(
		project: string, query: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
		updateQuery(
		queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
		getRevision(
		id: number, revisionNumber: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
		getRevisions(
		id: number, top?: number, skip?: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
		getUpdate(
		id: number, updateNumber: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate>;
		getUpdates(
		id: number, top?: number, skip?: number
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>;
		queryByWiql(
		wiql: WorkItemTrackingInterfaces.Wiql, project?: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
		queryById(
		id: string, project?: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
		getReportingLinks(
		project?: string, types?: string[], watermark?: number
	): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>;
		getRelationType(relation: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType>;
		getRelationTypes(): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>;
		readReportingRevisionsGet(
		project?: string, fields?: string[], types?: string[], watermark?: number
	): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
		readReportingRevisionsPost(
		filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter, project?: string, watermark?: number
	): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
		getWorkItem(
		id: number, fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
		getWorkItems(
		ids: number[], fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
		updateWorkItem(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
		createWorkItem(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
		getWorkItemTemplate(
		project: string, type: string, fields?: string, asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
		updateWorkItemTemplate(
		customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
		getWorkItemTypeCategories(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>;
		getWorkItemTypeCategory(
		project: string, category: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory>;
		getWorkItemType(
		project: string, type: string
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemType>;
		getWorkItemTypes(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemType[]>;
		getDependentFields(
		project: string, type: string, field: string
	): Q.Promise<WorkItemTrackingInterfaces.FieldDependentRule>;
		exportWorkItemTypeDefinition(
		project?: string, type?: string, exportGlobalLists?: boolean
	): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate>;
		updateWorkItemTypeDefinition(
		updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project?: string
	): Q.Promise<WorkItemTrackingInterfaces.ProvisioningResult>
	}

	
}

declare module 'vso-node-api/handlers/apiversion' {
				declare export class ApiVersionHandler extends VsoBaseInterfaces$IRequestHandler {
		apiVersion: string;
		constructor(apiVersion: string): this;
		prepareRequest(options: any): void
	}

	
}

declare module 'vso-node-api/handlers/basiccreds' {
				declare export class BasicCredentialHandler extends VsoBaseInterfaces$IRequestHandler {
		username: string;
		password: string;
		constructor(username: string, password: string): this;
		prepareRequest(options: any): void
	}

	
}

declare module 'vso-node-api/handlers/bearertoken' {
				declare export class BearerCredentialHandler extends VsoBaseInterfaces$IRequestHandler {
		token: string;
		constructor(token: string): this;
		prepareRequest(options: any): void
	}

	
}

declare module 'vso-node-api/WebApi' {
			declare export function getVersionHandler(apiVersion: string): apivm.ApiVersionHandler

	declare export function getBasicHandler(username: string, password: string): basicm.BasicCredentialHandler

	declare export function getBearerHandler(token: any): bearm.BearerCredentialHandler

	declare export class WebApi  {
		serverUrl: string;
		authHandler: VsoBaseInterfaces.IRequestHandler;
		constructor(serverUrl: string, authHandler: VsoBaseInterfaces.IRequestHandler): this;
		getBuildApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): buildm.IBuildApi;
		getQBuildApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): buildm.IQBuildApi;
		getCoreApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): corem.ICoreApi;
		getQCoreApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): corem.IQCoreApi;
		getFileContainerApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): filecontainerm.IFileContainerApi;
		getQFileContainerApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): filecontainerm.IQFileContainerApi;
		getGalleryApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): gallerym.IGalleryApi;
		getQGalleryApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): gallerym.IQGalleryApi;
		getGitApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): gitm.IGitApi;
		getQGitApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): gitm.IQGitApi;
		getTaskApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): taskm.ITaskApi;
		getQTaskApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): taskm.IQTaskApi;
		getTaskAgentApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): taskagentm.ITaskAgentApi;
		getQTaskAgentApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): taskagentm.IQTaskAgentApi;
		getTestApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): testm.ITestApi;
		getQTestApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): testm.IQTestApi;
		getTfvcApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): tfvcm.ITfvcApi;
		getQTfvcApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): tfvcm.IQTfvcApi;
		getWorkItemTrackingApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): workitemtrackingm.IWorkItemTrackingApi;
		getQWorkItemTrackingApi(
		serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]
	): workitemtrackingm.IQWorkItemTrackingApi
	}

	
}
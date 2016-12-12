

declare module 'applicationinsights' {
		declare interface AutoCollectConsole {
		constructor(client: Client): AutoCollectConsole,
		enable(isEnabled: boolean): void,
		isInitialized(): boolean
	}

	declare interface AutoCollectExceptions {
		constructor(client: Client): AutoCollectExceptions,
		isInitialized(): boolean,
		enable(isEnabled: boolean): void
	}

	declare interface AutoCollectPerformance {
		constructor(client: Client): AutoCollectPerformance,
		enable(isEnabled: boolean): void,
		isInitialized(): boolean
	}

	declare interface AutoCollectRequests {
		constructor(client: Client): AutoCollectRequests,
		enable(isEnabled: boolean): void,
		isInitialized(): boolean
	}

	declare interface Channel {
		constructor(
		isDisabled: () => boolean, getBatchSize: () => number, getBatchIntervalMs: () => number, sender: Sender
	): Channel,
		send(envelope: ContractsModule.Envelope): void,
		handleCrash(envelope: ContractsModule.Envelope): void,
		triggerSend(isNodeCrashing?: boolean): void
	}

	declare interface Client {
		config: Config,
		context: Context,
		commonProperties: {
		[key: string]: string
	},
		channel: Channel,
		constructor(iKey?: string): Client,
		trackEvent(
		name: string, properties?: {
		[key: string]: string
	}, measurements?: {
		[key: string]: number
	}
	): void,
		trackTrace(
		message: string, severityLevel?: ContractsModule.SeverityLevel, properties?: {
		[key: string]: string
	}
	): void,
		trackException(exception: Error, properties?: {
		[key: string]: string
	}): void,
		trackMetric(
		name: string, value: number, count?: number, min?: number, max?: number, stdDev?: number, properties?: {
		[key: string]: string
	}
	): void,
		trackRequest(request: any, response: any, properties?: {
		[key: string]: string
	}): void,
		trackRequestSync(
		request: any, response: any, ellapsedMilliseconds?: number, properties?: {
		[key: string]: string
	}, error?: any
	): void,
		trackDependency(
		name: string, commandName: string, elapsedTimeMs: number, success: boolean, dependencyTypeName?: string, properties?: {
		
	}, dependencyKind?: any, async?: boolean, dependencySource?: number
	): void,
		sendPendingData(callback?: (response: string) => void): void,
		getEnvelope(
		data: ContractsModule.Data<ContractsModule.Domain>, tagOverrides?: {
		[key: string]: string
	}
	): ContractsModule.Envelope,
		track(
		data: ContractsModule.Data<ContractsModule.Domain>, tagOverrides?: {
		[key: string]: string
	}
	): void
	}

	declare interface Config {
		instrumentationKey: string,
		sessionRenewalMs: number,
		sessionExpirationMs: number,
		endpointUrl: string,
		maxBatchSize: number,
		maxBatchIntervalMs: number,
		disableAppInsights: boolean,
		constructor(instrumentationKey?: string): Config
	}

	declare interface Context {
		keys: ContractsModule.ContextTagKeys,
		tags: {
		[key: string]: string
	},
		constructor(packageJsonPath?: string): Context
	}

	declare interface Sender {
		constructor(
		getUrl: () => string, onSuccess?: (response: string) => void, onError?: (error: Error) => void
	): Sender,
		send(payload: any): void,
		saveOnCrash(payload: string): void,
		enableCacheOnError(): void,
		disableCacheOnError(): void
	}

	declare interface ApplicationInsights {
		client: Client,
		getClient(instrumentationKey?: string): Client,
		setup(instrumentationKey?: string): ApplicationInsights,
		start(): ApplicationInsights,
		setAutoCollectConsole(value: boolean): ApplicationInsights,
		setAutoCollectExceptions(value: boolean): ApplicationInsights,
		setAutoCollectPerformance(value: boolean): ApplicationInsights,
		setAutoCollectRequests(value: boolean): ApplicationInsights,
		enableVerboseLogging(): ApplicationInsights
	}

			declare module.exports: ApplicationInsights


}

declare module 'npm$namespace$ContractsModule' {
		declare interface ContextTagKeys {
		applicationVersion: string,
		applicationBuild: string,
		deviceId: string,
		deviceIp: string,
		deviceLanguage: string,
		deviceLocale: string,
		deviceModel: string,
		deviceNetwork: string,
		deviceOEMName: string,
		deviceOS: string,
		deviceOSVersion: string,
		deviceRoleInstance: string,
		deviceRoleName: string,
		deviceScreenResolution: string,
		deviceType: string,
		deviceMachineName: string,
		locationIp: string,
		operationId: string,
		operationName: string,
		operationParentId: string,
		operationRootId: string,
		operationSyntheticSource: string,
		operationIsSynthetic: string,
		sessionId: string,
		sessionIsFirst: string,
		sessionIsNew: string,
		userAccountAcquisitionDate: string,
		userAccountId: string,
		userAgent: string,
		userId: string,
		userStoreRegion: string,
		sampleRate: string,
		internalSdkVersion: string,
		internalAgentVersion: string,
		constructor(): ContextTagKeys
	}

	declare interface Domain {
		ver: number,
		properties: any,
		constructor(): Domain
	}

	declare interface Data<TDomain> {
		baseType: string,
		baseData: TDomain,
		constructor(): Data<TDomain>
	}

	declare interface Envelope {
		ver: number,
		name: string,
		time: string,
		sampleRate: number,
		seq: string,
		iKey: string,
		flags: number,
		deviceId: string,
		os: string,
		osVer: string,
		appId: string,
		appVer: string,
		userId: string,
		tags: {
		[key: string]: string
	},
		data: Data<Domain>,
		constructor(): Envelope
	}

	declare interface EventData {
		ver: number,
		name: string,
		properties: any,
		measurements: any,
		constructor(): EventData
	}

	declare interface MessageData {
		ver: number,
		message: string,
		severityLevel: ContractsModule.SeverityLevel,
		properties: any,
		constructor(): MessageData
	}

	declare interface ExceptionData {
		ver: number,
		handledAt: string,
		exceptions: ExceptionDetails[],
		severityLevel: ContractsModule.SeverityLevel,
		problemId: string,
		crashThreadId: number,
		properties: any,
		measurements: any,
		constructor(): ExceptionData
	}

	declare interface StackFrame {
		level: number,
		method: string,
		assembly: string,
		fileName: string,
		line: number,
		constructor(): StackFrame
	}

	declare interface ExceptionDetails {
		id: number,
		outerId: number,
		typeName: string,
		message: string,
		hasFullStack: boolean,
		stack: string,
		parsedStack: StackFrame[],
		constructor(): ExceptionDetails
	}

	declare interface DataPoint {
		name: string,
		kind: ContractsModule.DataPointType,
		value: number,
		count: number,
		min: number,
		max: number,
		stdDev: number,
		constructor(): DataPoint
	}

	declare interface MetricData {
		ver: number,
		metrics: DataPoint[],
		properties: any,
		constructor(): MetricData
	}

	declare interface PageViewData {
		ver: number,
		url: string,
		name: string,
		duration: string,
		properties: any,
		measurements: any,
		constructor(): PageViewData
	}

	declare interface PageViewPerfData {
		ver: number,
		url: string,
		perfTotal: string,
		name: string,
		duration: string,
		networkConnect: string,
		sentRequest: string,
		receivedResponse: string,
		domProcessing: string,
		properties: any,
		measurements: any,
		constructor(): PageViewPerfData
	}

	declare interface RemoteDependencyData {
		ver: number,
		name: string,
		kind: ContractsModule.DataPointType,
		value: number,
		count: number,
		min: number,
		max: number,
		stdDev: number,
		dependencyKind: ContractsModule.DependencyKind,
		success: boolean,
		async: boolean,
		dependencySource: ContractsModule.DependencySourceType,
		commandName: string,
		dependencyTypeName: string,
		properties: any,
		constructor(): RemoteDependencyData
	}

	declare interface AjaxCallData {
		ver: number,
		url: string,
		ajaxUrl: string,
		name: string,
		duration: string,
		requestSize: number,
		responseSize: number,
		timeToFirstByte: string,
		timeToLastByte: string,
		callbackDuration: string,
		responseCode: string,
		success: boolean,
		properties: any,
		measurements: any,
		constructor(): AjaxCallData
	}

	declare interface RequestData {
		ver: number,
		id: string,
		name: string,
		startTime: string,
		duration: string,
		responseCode: string,
		success: boolean,
		httpMethod: string,
		url: string,
		properties: any,
		measurements: any,
		constructor(): RequestData
	}

	declare interface SessionStateData {
		ver: number,
		state: ContractsModule.SessionState,
		constructor(): SessionStateData
	}

	declare interface PerformanceCounterData {
		ver: number,
		categoryName: string,
		counterName: string,
		instanceName: string,
		kind: DataPointType,
		count: number,
		min: number,
		max: number,
		stdDev: number,
		value: number,
		properties: any,
		constructor(): PerformanceCounterData
	}

			
}
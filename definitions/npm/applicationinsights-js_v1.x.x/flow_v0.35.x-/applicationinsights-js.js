

declare module 'applicationinsights-js' {
					
}

declare module 'AI' {
				declare class StackFrame  {
		level: number;
		method: string;
		assembly: string;
		fileName: string;
		line: number;
		constructor(): this
	}

	declare class ExceptionDetails  {
		id: number;
		outerId: number;
		typeName: string;
		message: string;
		hasFullStack: boolean;
		stack: string;
		parsedStack: StackFrame[];
		constructor(): this
	}

	declare class DataPoint  {
		name: string;
		kind: AI.DataPointType;
		value: number;
		count: number;
		min: number;
		max: number;
		stdDev: number;
		constructor(): this
	}

	declare class EventData extends undefined$Domain {
		ver: number;
		name: string;
		properties: any;
		measurements: any;
		constructor(): this
	}

	declare class PageViewData extends AI$EventData {
		ver: number;
		url: string;
		name: string;
		duration: string;
		referrer: string;
		referrerData: string;
		properties: any;
		measurements: any;
		constructor(): this
	}

	declare class PageViewPerfData extends AI$PageViewData {
		ver: number;
		url: string;
		perfTotal: string;
		name: string;
		duration: string;
		networkConnect: string;
		referrer: string;
		sentRequest: string;
		referrerData: string;
		receivedResponse: string;
		domProcessing: string;
		properties: any;
		measurements: any;
		constructor(): this
	}

	declare class RemoteDependencyData extends undefined$Domain {
		ver: number;
		name: string;
		id: string;
		resultCode: string;
		kind: AI.DataPointType;
		value: number;
		count: number;
		min: number;
		max: number;
		stdDev: number;
		dependencyKind: AI.DependencyKind;
		success: boolean;
		async: boolean;
		dependencySource: AI.DependencySourceType;
		commandName: string;
		dependencyTypeName: string;
		properties: any;
		constructor(): this
	}

	declare class MessageData extends undefined$Domain {
		ver: number;
		message: string;
		severityLevel: AI.SeverityLevel;
		properties: any;
		constructor(): this
	}

	
}

declare module 'Context' {
		declare interface IApplication {
		ver: string,
		build: string
	}

	declare interface IDevice {
		type: string,
		id: string,
		oemName: string,
		model: string,
		network: number,
		resolution: string,
		locale: string,
		ip: string,
		language: string,
		os: string,
		osversion: string
	}

	declare interface ILocation {
		ip: string
	}

	declare interface IInternal {
		sdkVersion: string,
		agentVersion: string
	}

	declare interface ISample {
		sampleRate: number
	}

	declare interface ISession {
		id: string,
		isFirst: boolean,
		acquisitionDate: number,
		renewalDate: number
	}

	declare interface IOperation {
		id: string,
		name: string,
		parentId: string,
		rootId: string,
		syntheticSource: string
	}

	declare interface IUser {
		config: any,
		id: string,
		authenticatedId: string,
		accountId: string,
		accountAcquisitionDate: string,
		agent: string,
		storeRegion: string
	}

			
}

declare module 'Telemetry' {
				declare class Domain  {
		constructor(): this
	}

	declare class Base  {
		baseType: string;
		constructor(): this
	}

	declare class Data<TDomain> extends undefined$Base {
		baseType: string;
		baseData: TDomain;
		constructor(): this
	}

	declare class Event extends undefined$ISerializable {
		envelopeType: string;
		dataType: string;
		ver: number;
		name: string;
		properties: any;
		measurements: any;
		aiDataContract: {
		ver: Microsoft.ApplicationInsights.FieldType,
		name: Microsoft.ApplicationInsights.FieldType,
		properties: Microsoft.ApplicationInsights.FieldType,
		measurements: Microsoft.ApplicationInsights.FieldType
	};
		constructor(name: string, properties?: Object, measurements?: Object): this
	}

	declare class Exception extends undefined$ISerializable {
		envelopeType: string;
		dataType: string;
		ver: number;
		handledAt: string;
		exceptions: AI.ExceptionDetails[];
		severityLevel: AI.SeverityLevel;
		problemId: string;
		crashThreadId: number;
		properties: any;
		measurements: any;
		aiDataContract: {
		ver: Microsoft.ApplicationInsights.FieldType,
		handledAt: Microsoft.ApplicationInsights.FieldType,
		exceptions: Microsoft.ApplicationInsights.FieldType,
		severityLevel: Microsoft.ApplicationInsights.FieldType,
		properties: Microsoft.ApplicationInsights.FieldType,
		measurements: Microsoft.ApplicationInsights.FieldType
	};
		constructor(exception: Error, handledAt?: string, properties?: Object, measurements?: Object, severityLevel?: AI.SeverityLevel): this;
		CreateSimpleException(
		message: string, typeName: string, assembly: string, fileName: string, details: string, line: number, handledAt?: string
	): Telemetry.Exception
	}

	declare class Metric extends undefined$ISerializable {
		envelopeType: string;
		dataType: string;
		ver: number;
		metrics: AI.DataPoint[];
		properties: any;
		aiDataContract: {
		ver: Microsoft.ApplicationInsights.FieldType,
		metrics: Microsoft.ApplicationInsights.FieldType,
		properties: Microsoft.ApplicationInsights.FieldType
	};
		constructor(name: string, value: number, count?: number, min?: number, max?: number, properties?: Object): this
	}

	declare class PageView extends AI$PageViewData, undefined$ISerializable {
		envelopeType: string;
		dataType: string;
		aiDataContract: {
		ver: Microsoft.ApplicationInsights.FieldType,
		name: Microsoft.ApplicationInsights.FieldType,
		url: Microsoft.ApplicationInsights.FieldType,
		duration: Microsoft.ApplicationInsights.FieldType,
		properties: Microsoft.ApplicationInsights.FieldType,
		measurements: Microsoft.ApplicationInsights.FieldType
	};
		constructor(name?: string, url?: string, durationMs?: number, properties?: any, measurements?: any): this
	}

	declare class PageViewPerformance extends AI$PageViewPerfData, undefined$ISerializable {
		envelopeType: string;
		dataType: string;
		aiDataContract: {
		ver: Microsoft.ApplicationInsights.FieldType,
		name: Microsoft.ApplicationInsights.FieldType,
		url: Microsoft.ApplicationInsights.FieldType,
		duration: Microsoft.ApplicationInsights.FieldType,
		perfTotal: Microsoft.ApplicationInsights.FieldType,
		networkConnect: Microsoft.ApplicationInsights.FieldType,
		sentRequest: Microsoft.ApplicationInsights.FieldType,
		receivedResponse: Microsoft.ApplicationInsights.FieldType,
		domProcessing: Microsoft.ApplicationInsights.FieldType,
		properties: Microsoft.ApplicationInsights.FieldType,
		measurements: Microsoft.ApplicationInsights.FieldType
	};
		getIsValid(): boolean;
		getDurationMs(): number;
		constructor(name: string, url: string, unused: number, properties?: any, measurements?: any): this;
		getPerformanceTiming(): PerformanceTiming;
		isPerformanceTimingSupported(): PerformanceTiming;
		isPerformanceTimingDataReady(): boolean;
		getDuration(start: any, end: any): number
	}

	declare class RemoteDependencyData extends AI$RemoteDependencyData, undefined$ISerializable {
		envelopeType: string;
		dataType: string;
		aiDataContract: {
		id: Microsoft.ApplicationInsights.FieldType,
		ver: Microsoft.ApplicationInsights.FieldType,
		name: Microsoft.ApplicationInsights.FieldType,
		kind: Microsoft.ApplicationInsights.FieldType,
		value: Microsoft.ApplicationInsights.FieldType,
		count: Microsoft.ApplicationInsights.FieldType,
		min: Microsoft.ApplicationInsights.FieldType,
		max: Microsoft.ApplicationInsights.FieldType,
		stdDev: Microsoft.ApplicationInsights.FieldType,
		dependencyKind: Microsoft.ApplicationInsights.FieldType,
		success: Microsoft.ApplicationInsights.FieldType,
		async: Microsoft.ApplicationInsights.FieldType,
		dependencySource: Microsoft.ApplicationInsights.FieldType,
		commandName: Microsoft.ApplicationInsights.FieldType,
		dependencyTypeName: Microsoft.ApplicationInsights.FieldType,
		properties: Microsoft.ApplicationInsights.FieldType,
		resultCode: Microsoft.ApplicationInsights.FieldType
	};
		constructor(id: string, absoluteUrl: string, commandName: string, value: number, success: boolean, resultCode: number, method?: string): this
	}

	declare class Trace extends AI$MessageData, undefined$ISerializable {
		envelopeType: string;
		dataType: string;
		aiDataContract: {
		ver: Microsoft.ApplicationInsights.FieldType,
		message: Microsoft.ApplicationInsights.FieldType,
		severityLevel: Microsoft.ApplicationInsights.FieldType,
		measurements: Microsoft.ApplicationInsights.FieldType,
		properties: Microsoft.ApplicationInsights.FieldType
	};
		constructor(message: string, properties?: Object): this
	}

	
}

declare module 'Common' {
				declare class Base extends undefined$Base, undefined$ISerializable {
		aiDataContract: {
		
	}
	}

	declare class Data<TDomain> extends undefined$Data<TDomain>, undefined$ISerializable {
		aiDataContract: {
		baseType: FieldType,
		baseData: FieldType
	};
		constructor(type: string, data: TDomain): this
	}

	declare class Envelope extends IEnvelope {
		ver: number;
		name: string;
		time: string;
		sampleRate: number;
		seq: string;
		iKey: string;
		flags: number;
		deviceId: string;
		os: string;
		osVer: string;
		appId: string;
		appVer: string;
		userId: string;
		tags: any;
		data: Base;
		aiDataContract: any;
		constructor(data: Microsoft.Telemetry.Base, name: string): this
	}

	declare class DataSanitizer  {
		sanitizeKeyAndAddUniqueness(key: any, map: any): any;
		sanitizeKey(name: any): any;
		sanitizeString(value: any): any;
		sanitizeUrl(url: any): any;
		sanitizeMessage(message: any): any;
		sanitizeException(exception: any): any;
		sanitizeProperties(properties: any): any;
		sanitizeMeasurements(measurements: any): any;
		padNumber(num: any): string
	}

	
}

declare module 'ApplicationInsights' {
		declare interface IConfig {
		instrumentationKey?: string,
		endpointUrl?: string,
		emitLineDelimitedJson?: boolean,
		accountId?: string,
		sessionRenewalMs?: number,
		sessionExpirationMs?: number,
		maxBatchSizeInBytes?: number,
		maxBatchInterval?: number,
		enableDebug?: boolean,
		disableExceptionTracking?: boolean,
		disableTelemetry?: boolean,
		verboseLogging?: boolean,
		diagnosticLogInterval?: number,
		samplingPercentage?: number,
		autoTrackPageVisitTime?: boolean,
		disableAjaxTracking?: boolean,
		overridePageViewDuration?: boolean,
		maxAjaxCallsPerView?: number,
		disableDataLossAnalysis?: boolean,
		disableCorrelationHeaders?: boolean,
		disableFlushOnBeforeUnload?: boolean,
		enableSessionStorageBuffer?: boolean,
		cookieDomain?: string,
		url?: string
	}

	declare interface ISerializable {
		aiDataContract: any
	}

	declare interface IEnvelope {
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
		[name: string]: any
	}
	}

	declare interface ITelemetryContext {
		application: Context.IApplication,
		device: Context.IDevice,
		internal: Context.IInternal,
		location: Context.ILocation,
		operation: Context.IOperation,
		sample: Context.ISample,
		user: Context.IUser,
		session: Context.ISession,
		addTelemetryInitializer(
		telemetryInitializer: (envelope: Microsoft.ApplicationInsights.IEnvelope) => boolean
	): any,
		track(envelope: Microsoft.ApplicationInsights.IEnvelope): any
	}

	declare interface IAppInsights {
		config: IConfig,
		context: ITelemetryContext,
		queue: (() => void)[],
		startTrackPage(name?: string): any,
		stopTrackPage(
		name?: string, url?: string, properties?: {
		[name: string]: string
	}, measurements?: {
		[name: string]: number
	}
	): any,
		trackPageView(
		name?: string, url?: string, properties?: {
		[name: string]: string
	}, measurements?: {
		[name: string]: number
	}, duration?: number
	): any,
		startTrackEvent(name: string): any,
		stopTrackEvent(
		name: string, properties?: {
		[name: string]: string
	}, measurements?: {
		[name: string]: number
	}
	): any,
		trackEvent(
		name: string, properties?: {
		[name: string]: string
	}, measurements?: {
		[name: string]: number
	}
	): any,
		trackAjax(
		id: string, absoluteUrl: string, pathName: string, totalTime: number, success: boolean, resultCode: number, method?: string
	): any,
		trackException(
		exception: Error, handledAt?: string, properties?: {
		[name: string]: string
	}, measurements?: {
		[name: string]: number
	}, severityLevel?: AI.SeverityLevel
	): any,
		trackMetric(
		name: string, average: number, sampleCount?: number, min?: number, max?: number, properties?: {
		[name: string]: string
	}
	): any,
		trackTrace(message: string, properties?: {
		[name: string]: string
	}): any,
		flush(): any,
		setAuthenticatedUserContext(authenticatedUserId: string, accountId?: string): any,
		clearAuthenticatedUserContext(): any,
		downloadAndSetup(config: Microsoft.ApplicationInsights.IConfig): void,
		_onerror(
		message: string, url: string, lineNumber: number, columnNumber: number, error: Error
	): any
	}

			
}
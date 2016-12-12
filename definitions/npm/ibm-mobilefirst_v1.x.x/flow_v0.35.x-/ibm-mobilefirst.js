

declare module 'ibm-mobilefirst' {
				declare class WLResourceRequest  {
		constructor(url: string, method: string, timeout?: number): this;
		addHeader(name: string, value: string | number | boolean): void;
		getHeader(name: string): string;
		getHeaderNames(): string[];
		getHeaders(name: string): string[];
		getMethod(): string;
		getQueryParameters(): any;
		getTimeout(): number;
		getUrl(): string;
		send(content?: any): JQueryDeferred<any>;
		sendFormParameters(json: Object): JQueryDeferred<any>;
		setHeader(name: string, value: string | number | boolean): void;
		setHeaders(requestHeaders?: {
		[name: string]: string | string[]
	}): void;
		setQueryParameter(name: string, value: string | number | boolean | Object): void;
		setQueryParameters(parameters?: {
		[name: string]: string | number | boolean | Object
	}): void;
		setTimeout(requestTimeout: number): void;
		GET: string;
		POST: string;
		PUT: string;
		DELETE: string;
		HEAD: string;
		OPTIONS: string;
		TRACE: string;
		CONNECT: string
	}

	
}

declare module 'npm$namespace$WL' {
		declare interface IResponse {
		invocationContext?: any
	}

	declare interface Headers {
		[key: string]: string
	}

	declare interface Options {
		onSuccess?: (response: IResponse) => void,
		onFailure?: (response: IResponse) => void,
		invocationContext?: any
	}

	declare interface ResponseHandler<T> {
		(response: T): void
	}

	declare interface BusyIndicatorOptions {
		tickerText?: string,
		contentTitle?: string,
		contentTextText?: string,
		icon?: string,
		notificationId?: number,
		className?: string
	}

	declare interface LoggerCallback {
		(message: string | string[], level: string, package: string): void
	}

	declare interface Tag {
		level?: boolean,
		tag?: boolean
	}

	declare interface Filter {
		[name: string]: string
	}

	declare interface LoggerOptions {
		stringify?: boolean,
		pretty?: boolean,
		stacktrace?: boolean,
		callback?: LoggerCallback,
		pkg?: string,
		tag?: Tag,
		whitelist?: string[],
		blacklist?: string[],
		filters?: Filter,
		capture?: boolean,
		autoSendLogs?: boolean,
		maxFileSize?: number,
		level?: string[] | string | number
	}

	declare interface NativeOptions {
		maxFileSize?: number,
		level?: string,
		capture?: boolean,
		autoSendLogs?: boolean,
		autoUpdateConfig?: boolean,
		filters?: Filter
	}

		declare class ResponseBase  {
		invocationContext: any;
		headerJSON: {
		[key: string]: any
	};
		readyState: number;
		request: any;
		responseJSON: {
		[key: string]: any
	};
		responseText: string;
		responseXML: string;
		status: number;
		statusText: string;
		errorCode: number;
		errorMsg: string
	}

	declare class FailureResponse extends ResponseBase {
		
	}

	declare class Response extends ResponseBase {
		getHeaderNames(): string[];
		getAllHeaders(): Headers;
		getHeader(name: any): string
	}

	declare class BusyIndicator  {
		constructor(containerId?: string, options?: BusyIndicator): this;
		hide(): void;
		show(): void
	}

	declare class Item  {
		setEnabled(isEnable: string): void;
		setImagePath(imagePath: string): void;
		setTitle(title: string): void
	}

	declare class LoggerObject  {
		config(options?: LoggerOptions): LoggerObject;
		create(options?: LoggerOptions): LogInstance;
		ctx(options?: LoggerOptions): WL.LoggerObject;
		debug(message: string): void;
		error(message: string): void;
		fatal(message: string): void;
		info(message: string): void;
		log(message: string): void;
		metadata(options: any): LoggerObject;
		off(): WL.LoggerObject;
		on(options: any): WL.LoggerObject;
		send(): JQueryDeferred<any>;
		setNativeOptions(options?: NativeOptions): void;
		status(): JQueryDeferred<any>;
		trace(message: string): void;
		updateConfigFromServer(): JQueryDeferred<any>;
		warn(message: string): void
	}

	declare class LogInstance  {
		debug(message: string): void;
		error(message: string): void;
		fatal(message: string): void;
		info(message: string): void;
		trace(message: string): void;
		warn(message: string): void
	}

	declare class TabBarItem  {
		setEnabled(isEnabled: boolean): void;
		updateBadge(badge?: string): void
	}

	
}

declare module 'Analytics' {
			declare function disable(): void

	declare function enable(): void

	declare function log(message: string, name: string): void

	declare function restart(): void

	declare function send(): void

	declare function state(): void

		
}

declare module 'App' {
		declare interface ActionReceiverCallback {
		(action: any): void
	}

	declare interface Callback {
		(): void
	}

	declare interface OpenURLOptions {
		status?: number,
		toolbar?: number,
		location?: number,
		menubar?: number,
		directories?: number,
		resizable?: number,
		scrollbars?: number
	}

	declare interface Data {
		
	}

	declare interface KeepAliveInBackgroundOptions {
		tickerText?: string,
		contentTitle?: string,
		contentTextText?: string,
		icon?: string,
		notificationId?: number,
		className?: string
	}

	declare function addActionReceiver(id: string, callback: ActionReceiverCallback): void

	declare function close(): void

	declare function copyToClipboard(stringToCopy: string, callback?: Callback): void

	declare function getDeviceLanguage(): string

	declare function getDeviceLocale(): string

	declare function getErrorMessage(exception: any): string

	declare function hideSplashScreen(): void

	declare function openURL(url: string, target?: string, options?: OpenURLOptions): void

	declare function overrideBackButton(callback: Callback): void

	declare function removeActionReceiver(id: string): void

	declare function resetBackButton(): void

	declare function sendActionToNative(action: string, data?: Data): void

	declare function setKeepAliveInBackground(enabled: boolean, options?: KeepAliveInBackgroundOptions): void

	declare function showSplashScreen(): void

		
}

declare module 'BackgroundHandler' {
		declare interface Handler {
		(): void
	}

	declare function setOnAppEnteringBackground(handler: Handler): void

		
}

declare module 'Badge' {
			declare function setNumber(badgeNumber: number): void

		
}

declare module 'Client' {
		declare interface SharedTokenObject {
		key: string
	}

	declare interface ConnectOptions {
		onSuccess: (response: ResponseBase) => void,
		onFailure: (response: FailureResponse) => void,
		timeout?: number
	}

	declare interface ChallengehandlerInvocationData {
		adapter: string,
		procedure: string,
		parameters: any[]
	}

	declare interface ChallengeHandlerAuthenticationOptions {
		
	}

	declare interface ChallengeHandlerSubmitLoginFormOptions {
		timeout?: number,
		headers?: Object,
		parameters?: Object
	}

	declare interface InitOptions {
		timeout?: number,
		enableLogger?: boolean,
		messages?: string,
		authenticator?: Object,
		heartBeatIntervalInSecs?: number,
		connectOnStartup?: boolean,
		onConnectionFailure?: (response: WL.FailureResponse) => void,
		onUnsupportedVersion?: (response: WL.FailureResponse) => void,
		onRequestTimeout?: (response: WL.FailureResponse) => void,
		onUnsupportedBrowser?: (response: WL.FailureResponse) => void,
		onDisabledCookies?: (response: WL.FailureResponse) => void,
		onUserInstanceAccessViolation?: (response: WL.FailureResponse) => void,
		onErrorRemoteDisableDenial?: (response: WL.FailureResponse) => void,
		onErrorAppVersionAccessDenial?: (response: WL.FailureResponse) => void,
		validateArguments?: boolean,
		autoHideSplash?: boolean,
		onGetCustomDeviceProvisioningProperties: (resumeDeviceProvisioningProcess: (data: any) => void) => void
	}

	declare interface ProcedureInvocationData {
		adapter: string,
		procedure: string,
		parameters?: any[],
		compressResponse?: boolean
	}

	declare interface ProcedureInvocationResult {
		isSuccessful: boolean,
		errors?: string[]
	}

	declare interface ProcedureResponse {
		invocationResult?: ProcedureInvocationResult,
		parameters?: any[]
	}

	declare interface ProcedureInvocationOptions {
		timeout: number,
		onSuccess: (response: ProcedureResponse) => void
	}

	declare interface EventTransmissionPolicy {
		eventStorageEnabled?: boolean,
		interval?: number
	}

	declare interface UserPreferences {
		[key: string]: string
	}

	declare function addGlobalHeader(headerName: string, headerValue: string): void

	declare function checkForDirectUpdate(options: Options): void

	declare function clearSharedToken(object: SharedTokenObject): JQueryDeferred<any>

	declare function close(): void

	declare function connect(options?: ConnectOptions): void

	declare function createChallengeHandler(realmName: string): AbstractChallengeHandler

	declare function createProvisioningChallengeHandler(realmName: string): AbstractChallengeHandler

	declare function createWLChallengeHandler(realName: string): AbstractChallengeHandler

	declare function deleteUserPref(key: string, options?: Options): void

	declare function getAppProperty(property: any): any

	declare function getEnvironment(): string

	declare function getLanguage(): string

	declare function getLastAccessToken(scope?: string): string

	declare function getLoginName(realmName: string): string

	declare function getRequiredAccessTokenScope(status: number, header: string): string

	declare function getSharedToken(object: SharedTokenObject): JQueryDeferred<any>

	declare function getUserInfo(realm: string, key: string): any

	declare function getUserName(realm: any): string

	declare function getUserPref(key: any): any

	declare function hasUserPref(key: any): boolean

	declare function init(options: InitOptions): void

	declare function invokeProcedure(
		invocationData: ProcedureInvocationData, options?: ProcedureInvocationOptions
	): JQueryDeferred<Response>

	declare function isConnected(): void

	declare function isUserAuthenticated(realm: string): boolean

	declare function logActivity(activityType: string): void

	declare function login(realm: string, options?: Options): void

	declare function logout(realm: string, options?: Options): void

	declare function minimize(): void

	declare function obtainAccessToken(
		scope: string, onSuccess: ResponseHandler<Response>, onFailure: ResponseHandler<FailureResponse>
	): void

	declare function purgeEventTransmissionBuffer(): void

	declare function reloadApp(): void

	declare function removeGlobalHeader(headerName: string): void

	declare function setEventTransmissionPolicy(policy: EventTransmissionPolicy): void

	declare function setHeartBeatInterval(interval: number): void

	declare function setSharedToken(token: SharedTokenObject): void

	declare function setUserPref(key: string, value: string, options?: Options): void

	declare function setUserPrefs(userPrefsHash: UserPreferences, options?: Options): void

	declare function transmitEvent(event: any, immediate?: boolean): void

	declare function updateUserInfo(options: Options): void

	declare class AbstractChallengeHandler  {
		handleChallenge(challenge: any): boolean;
		isCustomResponse(transport: any): boolean;
		submitAdapterAuthentication(
		invocationData: ChallengehandlerInvocationData, options: ChallengeHandlerAuthenticationOptions
	): void;
		submitFailure(error: string): void;
		submitLoginForm(
		reqURL: string, options: ChallengeHandlerSubmitLoginFormOptions, submitLoginFormCallback: (transport: any) => void
	): void;
		submitSuccess(): void
	}

	
}

declare module 'Device' {
		declare interface AddressPair {
		wifiAddress: string,
		3GAddress: string
	}

	declare interface NetworkInfo {
		isNetworkConnected?: boolean,
		isAirplaneMode?: boolean,
		isRoaming?: boolean,
		networkConnectionType?: string,
		wifiName?: string,
		telephonyNetworkType?: string,
		carrierName?: string,
		ipAddress?: string,
		Ipv4Addresses?: AddressPair[],
		Ipv6Addresses?: AddressPair[]
	}

	declare function getNetworkInfo(callback: (networkInfo: NetworkInfo) => void): void

		
}

declare module 'EncryptedCache' {
		declare interface StatusHandler {
		(status: number): void
	}

	declare function close(successHandler: StatusHandler, failureHandler: StatusHandler): void

	declare function destroy(successHandler: StatusHandler, failureHandler: StatusHandler): void

	declare function open(
		credentials: string, createIfNone: boolean, successHandler: StatusHandler, failureHandler: StatusHandler
	): void

	declare function read(
		key: string, successHandler: StatusHandler, failureHandler: StatusHandler
	): void

	declare function remove(
		key: string, successHandler: StatusHandler, failureHandler: StatusHandler
	): void

	declare function write(
		key: string, value: string, successHandler: StatusHandler, failureHandler: StatusHandler
	): void

		
}

declare module 'Geo' {
		declare interface Coordinate {
		latitute: number,
		longitude: number
	}

	declare interface Circle {
		radius: number
	}

	declare interface DistanceOptions {
		bufferZoneWidth: number
	}

	declare interface InsideOutsideOptions {
		confidenceLevel: string
	}

	declare function getDistanceBetweenCoordinates(coordinate1: Coordinate, coordinate2: Coordinate): number

	declare function getDistanceToCircle(coordinate: Coordinate, circle: Circle, options: DistanceOptions): number

	declare function getDistanceToPolygon(
		coordinate: Coordinate, polygon: Coordinate[], options: DistanceOptions
	): number

	declare function isInsideCircle(coordinate: Coordinate, circle: Circle, options: InsideOutsideOptions): boolean

	declare function isInsidePolygon(
		coordinate: Coordinate, polygon: Coordinate[], options: InsideOutsideOptions
	): boolean

	declare function isOutsideCircle(coordinate: Coordinate, circle: Circle, options: InsideOutsideOptions): boolean

	declare function isOutsidePolygon(
		coordinate: Coordinate, polygon: Coordinate[], options: InsideOutsideOptions
	): boolean

		
}

declare module 'JSONStore' {
		declare interface InitOptions {
		username?: string,
		password?: string,
		clear?: boolean,
		localKeyGen?: boolean,
		analytics?: boolean
	}

	declare interface AddOptions {
		additionalSearchFields?: any,
		markDirty?: boolean,
		push?: boolean
	}

	declare interface BasicFindOptions {
		filter?: string[],
		sort?: string[]
	}

	declare interface AdvancedFindOptions {
		limit?: number,
		offset?: number
	}

	declare interface FindOptions {
		exact?: boolean,
		limit?: number,
		offset?: number
	}

	declare interface EraseOptions {
		push?: boolean
	}

	declare interface RefreshOptions {
		push: boolean
	}

	declare interface ChangeOptions {
		addNew?: boolean,
		markDirty?: boolean,
		replaceCriteria?: string[]
	}

	declare interface RemoveOptions {
		markDirty?: boolean,
		push?: boolean,
		exact?: boolean
	}

	declare interface ReplaceOptions {
		markDirty?: boolean,
		push?: boolean
	}

	declare interface StoreOptions {
		additionalSearchFields?: Object,
		push?: boolean
	}

	declare function changePassword(
		oldPassword: string, newPassword: string, username: string, options: WL.Options
	): JQueryDeferred<any>

	declare function clearPassword(): boolean

	declare function closeAll(options?: WL.Options): JQueryDeferred<any>

	declare function commitTransaction(): JQueryDeferred<number>

	declare function destroy(username: string, options?: WL.Options): JQueryDeferred<number>

	declare function documentify(id: number, data: any): any

	declare function fileInfo(): JQueryDeferred<any>

	declare function get(collectionName: string): JSONStoreInstance

	declare function getErrorMessage(errorCode: number): string

	declare function init(collections: any, options?: InitOptions): JQueryDeferred<any>

	declare function initCollection(
		name: string, searchFields: any, options?: InitOptions
	): WL.JSONStore.JSONStoreInstance

	declare function QueryPart(): QueryPartObj

	declare function rollbackTransaction(): JQueryDeferred<number>

	declare function startTransaction(): JQueryDeferred<number>

	declare function usePassword(pwd: string): boolean

	declare class JSONStoreInstance  {
		add(data: any, options?: AddOptions): JQueryDeferred<any>;
		advancedFind(query: any[], options?: AdvancedFindOptions): JQueryDeferred<any>;
		change(data: any, options?: ChangeOptions): JQueryDeferred<any>;
		clear(options?: WL.Options): JQueryDeferred<any>;
		count(query?: any, options?: WL.Options): JQueryDeferred<any>;
		countAllDirty(options?: WL.Options): JQueryDeferred<any>;
		enhance(name: string, fn: Function): number;
		erase(doc: any, options?: EraseOptions): void;
		find(query: Object | Object[], options?: FindOptions): JQueryDeferred<any>;
		findAll(options?: BasicFindOptions): JQueryDeferred<any>;
		findById(options?: WL.Options): JQueryDeferred<any>;
		isDirty(doc: any, options?: WL.Options): JQueryDeferred<boolean>;
		load(options?: WL.Options): JQueryDeferred<any>;
		markClean(docs: any[], options?: WL.Options): JQueryDeferred<any>;
		push(options?: any): JQueryDeferred<any>;
		pushSelected(doc: any, options?: WL.Options): JQueryDeferred<any>;
		refresh(doc: any, options?: RefreshOptions): JQueryDeferred<any>;
		remove(doc: any, options?: RemoveOptions): JQueryDeferred<any>;
		removeCollection(options?: WL.Options): JQueryDeferred<any>;
		replace(doc: Object | Object[], options?: ReplaceOptions): JQueryDeferred<any>;
		store(data: Object | Object[], options?: StoreOptions): void;
		toString(limit?: number, offset?: number): JQueryDeferred<number>
	}

	declare class QueryPartObj  {
		between(searchField: any, value: any): any[];
		equal(searchField: any, value: any): any[];
		greaterOrEqualThan(searchField: any, value: any): any[];
		greaterThan(searchField: any, value: any): any[];
		inside(searchField: any, value: any): any[];
		leftLike(searchField: any, value: any): any[];
		lessOrEqualThan(searchField: any, value: any): any[];
		lessThan(searchField: any, value: any): any[];
		like(searchField: any, value: any): any[];
		notBetween(searchField: any, value: any): any[];
		notEqual(searchField: any, value: any): any[];
		notInside(searchField: any, value: any): any[];
		notLeftLike(searchField: any, value: any): any[];
		notLike(searchField: any, value: any): any[];
		notRightLike(searchField: any, value: any): any[];
		rightLike(searchField: any, value: any): any[]
	}

	
}

declare module 'LocalStorage' {
			declare function getValue(key: string): string

	declare function setValue(key: string, value: string): void

	declare function clear(key: string): void

	declare function clearAll(): void

		
}

declare module 'NativePage' {
			declare function show(className: string, callback: (data: any) => void, data: any): void

		
}

declare module 'SecurityUtils' {
		declare interface DecryptOptions {
		key: string,
		ct: string,
		lv: string,
		src: string,
		v: string
	}

	declare interface EncryptOptions {
		key: string,
		text: string
	}

	declare interface KeygenOptions {
		password: string,
		salt: string,
		iterations: number
	}

	declare function base64Decode(input: string): JQueryDeferred<string>

	declare function base64Encode(input: string): JQueryDeferred<string>

	declare function decrypt(options: DecryptOptions): JQueryDeferred<string>

	declare function encrypt(options: EncryptOptions): JQueryDeferred<string>

	declare function keygen(options: KeygenOptions): JQueryDeferred<string>

	declare function localRandomString(bytes?: number): JQueryDeferred<string>

	declare function remoteRandomString(bytes?: number): JQueryDeferred<string>

		
}

declare module 'SimpleDialog' {
		declare interface Button {
		text: string,
		handler?: Function
	}

	declare interface Options {
		title: string,
		text: string
	}

	declare function show(title: string, text: string, buttons: Button[], options?: Options): void

		
}

declare module 'TabBar' {
		declare interface ItemOptions {
		image: string,
		badge?: string,
		imageSelected?: string
	}

	declare function addItem(
		id: string, callback: Function, title: string, options: ItemOptions
	): WL.TabBarItem

	declare function init(): void

	declare function isVisible(): boolean

	declare function RemoveAllItems(): void

	declare function setEnabled(isEnabled: boolean): void

	declare function setParentDivId(parentId: string): void

	declare function setSelectedItem(id: string): void

	declare function setVisible(isVisible: boolean): void

		
}

declare module 'Toast' {
			declare function show(): void

		
}

declare module 'Trusteer' {
		declare interface AssesmentRisk {
		value: number,
		additionalData: string,
		lastCalculated: number,
		name: string
	}

	declare interface AssetmentRisks {
		device_key: string,
		malware.any?: AssesmentRisk,
		network.wifi?: AssesmentRisk,
		os.rooted?: AssesmentRisk,
		os.rooted.native?: AssesmentRisk,
		os.rooted.hiders?: AssesmentRisk,
		os.ver_up_to_date?: AssesmentRisk,
		plat.android.dumpsys?: AssesmentRisk,
		plat.android.apprestrict?: AssesmentRisk,
		total.risk.generic?: AssesmentRisk,
		tas.config_update?: AssesmentRisk
	}

	declare function getRiskAssessment(
		onSuccess: ResponseHandler<Response>, onFailure: ResponseHandler<FailureResponse>
	): AssetmentRisks

		
}

declare module 'UserAuth' {
			declare function deleteCertificate(provisioningEntity?: string): JQueryDeferred<void>

		
}

declare module 'npm$namespace$WLAuthorizationManager' {
		declare interface RequestObject {
		setRequestHeader: (header: string, value: string) => void
	}

	declare function addCachedAuthorizationHeader(request: RequestObject): JQueryDeferred<RequestObject>

	declare function getAppIdentity(): JQueryDeferred<any>

	declare function getAuthorizationScope(responseAuthenticationHeader: string): string

	declare function getCachedAuthorizationHeader(): JQueryDeferred<any>

	declare function getDeviceIdentity(): JQueryDeferred<any>

	declare function getUserIdentity(): JQueryDeferred<any>

	declare function isAuthorizationRequired(responseStatus: number, responseAuthenticationHeader: string): boolean

	declare function obtainAuthorizationHeader(scope: string): JQueryDeferred<any>

	declare function setAuthorizationPersistencePolicy(authorizationPersistencePolicy: string): void

		
}
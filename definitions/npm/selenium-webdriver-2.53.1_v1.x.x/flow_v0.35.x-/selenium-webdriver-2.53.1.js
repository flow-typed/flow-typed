

declare module 'selenium-webdriver-2.53.1' {
					
}

declare module 'npm$namespace$chrome' {
		declare interface IOptionsValues {
		args: string[],
		binary?: string,
		detach: boolean,
		extensions: string[],
		localState?: any,
		logFile?: string,
		prefs?: any
	}

	declare interface IPerfLoggingPrefs {
		enableNetwork: boolean,
		enablePage: boolean,
		enableTimeline: boolean,
		tracingCategories: string,
		bufferUsageReportingInterval: number
	}

	declare function getDefaultService(): remote.DriverService

	declare function setDefaultService(service: remote.DriverService): void

	declare class Driver extends webdriver$WebDriver {
		constructor(opt_config?: Options | webdriver.Capabilities, opt_service?: remote.DriverService, opt_flow?: webdriver.promise.ControlFlow): this
	}

	declare class Options  {
		constructor(): this;
		fromCapabilities(capabilities: webdriver.Capabilities): Options;
		addArguments(...var_args: string[]): Options;
		excludeSwitches(...var_args: string[]): Options;
		addExtensions(...var_args: any[]): Options;
		setChromeBinaryPath(path: string): Options;
		detachDriver(detach: boolean): Options;
		setUserPreferences(prefs: any): Options;
		setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;
		setPerfLoggingPrefs(prefs: IPerfLoggingPrefs): Options;
		setLocalState(state: any): Options;
		androidActivity(name: string): Options;
		androidDeviceSerial(serial: string): Options;
		androidChrome(): Options;
		androidPackage(pkg: string): Options;
		androidProcess(processName: string): Options;
		androidUseRunningApp(useRunning: boolean): Options;
		setChromeLogFile(path: string): Options;
		setChromeMinidumpPath(path: string): Options;
		setMobileEmulation(config: any): Options;
		setProxy(proxy: webdriver.ProxyConfig): Options;
		toCapabilities(opt_capabilities?: webdriver.Capabilities): webdriver.Capabilities
	}

	declare class ServiceBuilder  {
		constructor(opt_exe?: string): this;
		usingPort(port: number): ServiceBuilder;
		setAdbPort(port: number): ServiceBuilder;
		loggingTo(path: string): ServiceBuilder;
		enableVerboseLogging(): ServiceBuilder;
		setNumHttpThreads(n: number): ServiceBuilder;
		setUrlBasePath(path: string): ServiceBuilder;
		setStdio(config: string | Array<string | number | any>): ServiceBuilder;
		withEnvironment(env: {
		[key: string]: string
	}): ServiceBuilder;
		build(): remote.DriverService
	}

	
}

declare module 'npm$namespace$edge' {
			declare function getDefaultService(): remote.DriverService

	declare function setDefaultService(service: remote.DriverService): void

	declare class Driver extends webdriver$WebDriver {
		constructor(opt_config?: webdriver.Capabilities | Options, opt_service?: remote.DriverService, opt_flow?: webdriver.promise.ControlFlow): this;
		setFileDetector(): void
	}

	declare class Options  {
		fromCapabilities(cap: webdriver.Capabilities): Options;
		setProxy(proxy: webdriver.ProxyConfig): Options;
		setPageLoadStrategy(pageLoadStrategy: string): Options;
		toCapabilities(opt_capabilities: webdriver.Capabilities): webdriver.Capabilities
	}

	declare class ServiceBuilder  {
		constructor(opt_exe?: string): this;
		setStdio(config: string | Array<string | number | any>): ServiceBuilder;
		usingPort(port: number): ServiceBuilder;
		withEnvironment(env: Object): ServiceBuilder;
		build(): remote.DriverService
	}

	
}

declare module 'npm$namespace$executors' {
			declare function createExecutor(
		url: string | webdriver.promise.Promise<string>, opt_agent?: string, opt_proxy?: string
	): webdriver.Executor

		
}

declare module 'npm$namespace$firefox' {
			declare function findWires(): string

	declare function createWiresService(binary: string | any): remote.DriverService

	declare function prepareProfile(profile: string | any, port: number): any

	declare class Binary  {
		constructor(opt_exe?: string): this;
		addArguments(...var_args: string[]): void;
		launch(profile: string): webdriver.promise.Promise<any>;
		kill(): webdriver.promise.Promise<void>
	}

	declare class Profile  {
		constructor(opt_dir?: string): this;
		addExtension(extension: string): void;
		setPreference(key: string, value: string): void;
		setPreference(key: string, value: number): void;
		setPreference(key: string, value: boolean): void;
		getPreference(key: string): any;
		getPort(): number;
		setPort(port: number): void;
		acceptUntrustedCerts(): boolean;
		setAcceptUntrustedCerts(value: boolean): void;
		setAssumeUntrustedCertIssuer(value: boolean): void;
		assumeUntrustedCertIssuer(): boolean;
		setNativeEventsEnabled(enabled: boolean): void;
		nativeEventsEnabled(): boolean;
		writeToDisk(opt_excludeWebDriverExt?: boolean): webdriver.promise.Promise<string>;
		encode(): webdriver.promise.Promise<string>
	}

	declare class Options  {
		setProfile(profile: string | any): Options;
		setBinary(binary: string | any): Options;
		setLoggingPreferences(prefs: webdriver.logging.Preferences): Options;
		setProxy(proxy: webdriver.ProxyConfig): Options;
		useMarionette(marionette: any): Options;
		toCapabilities(): webdriver.Capabilities
	}

	declare class Driver extends webdriver$WebDriver {
		constructor(opt_config?: Options | webdriver.Capabilities | Object, opt_flow?: webdriver.promise.ControlFlow): this;
		setFileDetector(): void
	}

	
}

declare module 'npm$namespace$http' {
			declare function headersToString(headers: any): string

	declare function post(path: string): any

	declare function del(path: string): any

	declare function get(path: string): any

	declare function resource(method: string, path: string): any

	declare function sendRequest(
		options: Object, onOk: any, onError: any, opt_data?: string, opt_proxy?: string
	): any

	declare function tryParse(str: string): any

	declare function parseHttpResponse(httpResponse: HttpResponse, w3c: boolean): any

	declare function buildPath(path: string, parameters: Object): string

	declare class HttpRequest  {
		constructor(method: string, path: string, opt_data?: Object): this;
		toString(): string
	}

	declare class HttpResponse  {
		constructor(status: number, headers: Object, body: string): this;
		toString(): string
	}

	declare class HttpClient  {
		constructor(serverUrl: string, opt_agent?: any, opt_proxy?: string): this;
		send(httpRequest: HttpRequest): webdriver.promise.Promise<HttpResponse>
	}

	declare class Executor  {
		constructor(client: HttpClient): this;
		defineCommand(name: string, method: string, path: string): void;
		execute(command: any): any
	}

	
}

declare module 'npm$namespace$ie' {
				declare class Driver extends webdriver$WebDriver {
		constructor(opt_config?: webdriver.Capabilities | Options, opt_flow?: webdriver.promise.ControlFlow): this;
		setFileDetector(): void
	}

	declare class Options  {
		constructor(): this;
		fromCapabilities(caps: webdriver.Capabilities): Options;
		introduceFlakinessByIgnoringProtectedModeSettings(ignoreSettings: boolean): Options;
		ignoreZoomSetting(ignore: boolean): Options;
		initialBrowserUrl(url: string): Options;
		enablePersistentHover(enable: boolean): Options;
		enableElementCacheCleanup(enable: boolean): Options;
		requireWindowFocus(require: boolean): Options;
		browserAttachTimeout(timeout: number): Options;
		forceCreateProcessApi(force: boolean): Options;
		addArguments(...var_args: Array<string>): Options;
		usePerProcessProxy(enable: boolean): Options;
		ensureCleanSession(cleanSession: boolean): Options;
		setLogFile(file: string): Options;
		setLogLevel(level: webdriver.logging.Level): Options;
		setHost(host: string): Options;
		setExtractPath(path: string): Options;
		silent(silent: boolean): Options;
		setProxy(proxy: webdriver.ProxyConfig): Options;
		toCapabilities(opt_capabilities: webdriver.Capabilities): webdriver.Capabilities
	}

	
}

declare module 'npm$namespace$opera' {
			declare function setDefaultService(service: remote.DriverService): any

	declare function getDefaultService(): remote.DriverService

	declare class ServiceBuilder  {
		constructor(opt_exe?: string): this;
		usingPort(port: number): ServiceBuilder;
		loggingTo(path: string): ServiceBuilder;
		enableVerboseLogging(): ServiceBuilder;
		silent(): ServiceBuilder;
		setStdio(config: string | Array<string | number | any>): ServiceBuilder;
		withEnvironment(env: Object): ServiceBuilder;
		build(): remote.DriverService
	}

	declare class Options  {
		fromCapabilities(caps: webdriver.Capabilities): Options;
		addArguments(...var_args: Array<string>): Options;
		addExtensions(...var_args: Array<any>): Options;
		setOperaBinaryPath(path: string): Options;
		setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;
		setProxy(proxy: webdriver.ProxyConfig): Options;
		toCapabilities(opt_capabilities?: webdriver.Capabilities): webdriver.Capabilities
	}

	declare class Driver extends webdriver$WebDriver {
		constructor(opt_config?: webdriver.Capabilities | Options, opt_service?: remote.DriverService, opt_flow?: webdriver.promise.ControlFlow): this;
		setFileDetector(): void
	}

	
}

declare module 'npm$namespace$remote' {
		declare interface ServiceOptions {
		
	}

		declare class DriverService  {
		constructor(executable: string, options: ServiceOptions): this;
		address(): webdriver.promise.Promise<string>;
		isRunning(): boolean;
		start(opt_timeoutMs?: number): webdriver.promise.Promise<string>;
		kill(): webdriver.promise.Promise<any>;
		stop(): webdriver.promise.Promise<any>
	}

	
}

declare module 'npm$namespace$safari' {
			declare function findSafariExecutable(): any

	declare function createConnectFile(serverUrl: string): any

	declare function cleanSession(desiredCapabilities: webdriver.Capabilities): any[]

	declare function getRandomString(): string

	declare class Server  {
		
	}

	declare class CommandExecutor  {
		
	}

	declare class Options  {
		fromCapabilities(capabilities: webdriver.Capabilities): Options;
		setCleanSession(clean: boolean): Options;
		setLoggingPrefs(prefs: webdriver.logging.Preferences): Options;
		toCapabilities(opt_capabilities: webdriver.Capabilities): webdriver.Capabilities
	}

	declare class Driver extends webdriver$WebDriver {
		constructor(opt_config?: Options | webdriver.Capabilities, opt_flow?: webdriver.promise.ControlFlow): this
	}

	
}

declare module 'error' {
				declare class IError extends Error {
		constructor(opt_error?: string): this;
		code(): number
	}

	declare class WebDriverError extends IError {
		constructor(opt_error?: string): this
	}

	declare class ElementNotSelectableError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class ElementNotVisibleError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class InvalidArgumentError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class InvalidCookieDomainError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class InvalidElementCoordinatesError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class InvalidElementStateError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class InvalidSelectorError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class NoSuchSessionError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class JavascriptError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class MoveTargetOutOfBoundsError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class NoSuchAlertError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class NoSuchElementError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class NoSuchFrameError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class NoSuchWindowError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class ScriptTimeoutError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class SessionNotCreatedError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class StaleElementReferenceError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class TimeoutError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class UnableToSetCookieError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class UnableToCaptureScreenError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class UnexpectedAlertOpenError extends WebDriverError {
		constructor(opt_error?: string, opt_text?: string): this;
		getAlertText(): string
	}

	declare class UnknownCommandError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class UnknownMethodError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	declare class UnsupportedOperationError extends WebDriverError {
		constructor(opt_error?: string): this
	}

	
}

declare module 'logging' {
		declare interface IEntryJSON {
		level: string,
		message: string,
		timestamp: number,
		type: string
	}

	declare function getLevel(nameOrValue: string | number): Level

	declare class Preferences  {
		setLevel(type: string | Type, level: Level | string | number): void;
		toJSON(): {
		[key: string]: string
	}
	}

	declare class Level  {
		name_: string;
		value_: number;
		constructor(name: string, level: number): this;
		toString(): string;
		name(): string;
		value(): number;
		OFF: Level;
		SEVERE: Level;
		WARNING: Level;
		INFO: Level;
		DEBUG: Level;
		FINE: Level;
		FINER: Level;
		FINEST: Level;
		ALL: Level
	}

	declare class Entry  {
		constructor(level: Level | string | number, message: string, opt_timestamp?: number, opt_type?: string | Type): this;
		level: Level;
		message: string;
		timestamp: number;
		type: string;
		toJSON(): IEntryJSON
	}

	declare class Logger  {
		constructor(name: string, opt_level?: Level): this;
		name_: string;
		level_: Level;
		parent_: Logger;
		handlers_: any;
		getName(): string;
		setLevel(level: Level): void;
		getLevel(): Level;
		getEffectiveLevel(): Level;
		isLoggable(level: Level): boolean;
		addHandler(handler: any): void;
		removeHandler(handler: any): void;
		log(level: Level, loggable: string | Function): void;
		severe(loggable: string | Function): void;
		warning(loggable: string | Function): void;
		info(loggable: string | Function): void;
		debug(loggable: string | Function): void;
		fine(loggable: string | Function): void;
		finer(loggable: string | Function): void;
		finest(loggable: string | Function): void
	}

	declare class LogManager  {
		getLogger(name: string): Logger;
		createLogger_(name: string, parent: Logger): Logger
	}

	
}

declare module 'promise' {
		declare interface IThenable<T> {
		cancel(opt_reason?: string | Error): void,
		isPending(): boolean,
		then<R>(
		opt_callback?: (value: T) => R | IThenable<R>, opt_errback?: (error: any) => R | IThenable<R>
	): Promise<R>,
		catch<R>(errback: Function): Promise<R>
	}

	declare interface IFulfilledCallback<T> {
		(value: T | IThenable<T> | Thenable<T> | void): void
	}

	declare interface IRejectedCallback {
		(reason: any): void
	}

	declare interface IControlFlowTimer {
		clearInterval: (ms: number) => void,
		clearTimeout: (ms: number) => void,
		setInterval: (fn: Function, ms: number) => number,
		setTimeout: (fn: Function, ms: number) => number
	}

	declare function all<T>(arr: Array<T | Promise<T>>): Promise<T[]>

	declare function asap(value: any, callback: Function, opt_errback?: Function): void

	declare function controlFlow(): ControlFlow

	declare function createFlow<R>(callback: (flow: ControlFlow) => R): Promise<R>

	declare function isPromise(value: any): boolean

	declare function isGenerator(fn: Function): boolean

	declare function delayed(ms: number): Promise<void>

	declare function filter<T>(
		arr: Array<T> | Promise<Array<T>>, fn: (element: T, type: any, index: number, array: T[]) => any, opt_self?: any
	): Promise<T[]>

	declare function defer<T>(): Deferred<T>

	declare function fulfilled<T>(opt_value?: T): Promise<T>

	declare function map<T>(
		arr: Array<T> | Promise<Array<T>>, fn: (self: any, type: any, index: number, array: any[]) => any, opt_self?: any
	): Promise<T[]>

	declare function rejected<T>(opt_reason?: any): Promise<T>

	declare function checkedNodeCall<T>(fn: Function, ...var_args: any[]): Promise<T>

	declare function consume<T>(generatorFn: Function, opt_self?: any, ...var_args: any[]): Promise<T>

	declare function when<T, R>(
		value: T | Promise<T>, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any
	): Promise<R>

	declare function fullyResolved<T>(value: any): Promise<T>

	declare function setDefaultFlow(flow: ControlFlow): void

	declare class CancellationError extends Error {
		constructor(opt_msg?: string): this
	}

	declare class Thenable<T> extends IThenable<T> {
		cancel(opt_reason?: string | Error): void;
		isPending(): boolean;
		then<R>(
		opt_callback?: (value: T) => R | IThenable<R>, opt_errback?: (error: any) => R | IThenable<R>
	): Promise<R>;
		catch<R>(errback: Function): Promise<R>;
		finally<R>(callback: Function): Promise<R>;
		addImplementation(ctor: Function): void;
		isImplementation(object: any): boolean
	}

	declare class Promise<T> extends IThenable<T> {
		constructor(resolver: (onFulfilled: IFulfilledCallback<T>, onRejected: IRejectedCallback) => void, opt_flow?: ControlFlow): this;
		constructor(): this;
		cancel(opt_reason?: string | Error): void;
		isPending(): boolean;
		then(opt_callback?: Function, opt_errback?: Function): Promise<any>;
		thenCatch<R>(errback: (error: any) => any): Promise<R>;
		catch<R>(errback: Function): Promise<R>;
		thenFinally<R>(callback: Function): Promise<R>
	}

	declare class Deferred<T> extends Promise<T> {
		constructor(opt_flow?: ControlFlow): this;
		State_: {
		BLOCKED: number,
		PENDING: number,
		REJECTED: number,
		RESOLVED: number
	};
		promise: Promise<T>;
		reject(opt_error?: any): void;
		errback(opt_error?: any): void;
		fulfill(opt_value?: T): void;
		removeAll(): void
	}

	declare class ControlFlow extends EventEmitter {
		constructor(): this;
		EventType: {
		IDLE: string,
		RESET: string,
		SCHEDULE_TASK: string,
		UNCAUGHT_EXCEPTION: string
	};
		toString(): string;
		reset(): void;
		getSchedule(opt_includeStackTraces?: boolean): string;
		execute<T>(fn: () => (T | Promise<T>), opt_description?: string): Promise<T>;
		timeout(ms: number, opt_description?: string): Promise<void>;
		wait<T>(
		condition: Promise<T> | Function, opt_timeout?: number, opt_message?: string
	): Promise<T>
	}

	
}

declare module 'until' {
			declare function ableToSwitchToFrame(
		frame: number | WebElement | By | ((webdriver: WebDriver) => WebElement)
	): Condition<boolean>

	declare function alertIsPresent(): Condition<Alert>

	declare function elementIsDisabled(element: WebElement): Condition<boolean>

	declare function elementIsEnabled(element: WebElement): Condition<boolean>

	declare function elementIsNotSelected(element: WebElement): Condition<boolean>

	declare function elementIsNotVisible(element: WebElement): Condition<boolean>

	declare function elementIsSelected(element: WebElement): Condition<boolean>

	declare function elementIsVisible(element: WebElement): Condition<boolean>

	declare function elementLocated(locator: By | Function): Condition<WebElement>

	declare function elementTextContains(element: WebElement, substr: string): Condition<boolean>

	declare function elementTextIs(element: WebElement, text: string): Condition<boolean>

	declare function elementTextMatches(element: WebElement, regex: RegExp): Condition<boolean>

	declare function elementsLocated(locator: By | Function): Condition<WebElement[]>

	declare function stalenessOf(element: WebElement): Condition<boolean>

	declare function titleContains(substr: string): Condition<boolean>

	declare function titleIs(title: string): Condition<boolean>

	declare function titleMatches(regex: RegExp): Condition<boolean>

	declare class Condition<T>  {
		constructor(message: string, fn: (webdriver: WebDriver) => any): this;
		description(): string;
		fn(webdriver: WebDriver): any
	}

	
}

declare module 'npm$namespace$webdriver' {
	declare type ByHash = {
		className: string
	} | {
		css: string
	} | {
		id: string
	} | {
		js: string
	} | {
		linkText: string
	} | {
		name: string
	} | {
		partialLinkText: string
	} | {
		tagName: string
	} | {
		xpath: string
	};

	declare interface ILocation {
		x: number,
		y: number
	}

	declare interface ISize {
		width: number,
		height: number
	}

	declare interface IOffset {
		x: number,
		y: number
	}

	declare interface ISpeed {
		xspeed: number,
		yspeed: number
	}

	declare interface IBrowser {
		ANDROID: string,
		CHROME: string,
		EDGE: string,
		FIREFOX: string,
		IE: string,
		INTERNET_EXPLORER: string,
		IPAD: string,
		IPHONE: string,
		OPERA: string,
		PHANTOM_JS: string,
		SAFARI: string,
		HTMLUNIT: string
	}

	declare interface ProxyConfig {
		proxyType: string,
		proxyAutoconfigUrl?: string,
		ftpProxy?: string,
		httpProxy?: string,
		sslProxy?: string,
		noProxy?: string
	}

	declare interface ICapability {
		ACCEPT_SSL_CERTS: string,
		BROWSER_NAME: string,
		ELEMENT_SCROLL_BEHAVIOR: string,
		HANDLES_ALERTS: string,
		LOGGING_PREFS: string,
		NATIVE_EVENTS: string,
		PLATFORM: string,
		PROXY: string,
		ROTATABLE: string,
		SECURE_SSL: string,
		SUPPORTS_APPLICATION_CACHE: string,
		SUPPORTS_CSS_SELECTORS: string,
		SUPPORTS_JAVASCRIPT: string,
		SUPPORTS_LOCATION_CONTEXT: string,
		TAKES_SCREENSHOT: string,
		UNEXPECTED_ALERT_BEHAVIOR: string,
		VERSION: string
	}

	declare interface ICommandName {
		GET_SERVER_STATUS: string,
		NEW_SESSION: string,
		GET_SESSIONS: string,
		DESCRIBE_SESSION: string,
		CLOSE: string,
		QUIT: string,
		GET_CURRENT_URL: string,
		GET: string,
		GO_BACK: string,
		GO_FORWARD: string,
		REFRESH: string,
		ADD_COOKIE: string,
		GET_COOKIE: string,
		GET_ALL_COOKIES: string,
		DELETE_COOKIE: string,
		DELETE_ALL_COOKIES: string,
		GET_ACTIVE_ELEMENT: string,
		FIND_ELEMENT: string,
		FIND_ELEMENTS: string,
		FIND_CHILD_ELEMENT: string,
		FIND_CHILD_ELEMENTS: string,
		CLEAR_ELEMENT: string,
		CLICK_ELEMENT: string,
		SEND_KEYS_TO_ELEMENT: string,
		SUBMIT_ELEMENT: string,
		GET_CURRENT_WINDOW_HANDLE: string,
		GET_WINDOW_HANDLES: string,
		GET_WINDOW_POSITION: string,
		SET_WINDOW_POSITION: string,
		GET_WINDOW_SIZE: string,
		SET_WINDOW_SIZE: string,
		MAXIMIZE_WINDOW: string,
		SWITCH_TO_WINDOW: string,
		SWITCH_TO_FRAME: string,
		GET_PAGE_SOURCE: string,
		GET_TITLE: string,
		EXECUTE_SCRIPT: string,
		EXECUTE_ASYNC_SCRIPT: string,
		GET_ELEMENT_TEXT: string,
		GET_ELEMENT_TAG_NAME: string,
		IS_ELEMENT_SELECTED: string,
		IS_ELEMENT_ENABLED: string,
		IS_ELEMENT_DISPLAYED: string,
		GET_ELEMENT_LOCATION: string,
		GET_ELEMENT_LOCATION_IN_VIEW: string,
		GET_ELEMENT_SIZE: string,
		GET_ELEMENT_ATTRIBUTE: string,
		GET_ELEMENT_VALUE_OF_CSS_PROPERTY: string,
		ELEMENT_EQUALS: string,
		SCREENSHOT: string,
		IMPLICITLY_WAIT: string,
		SET_SCRIPT_TIMEOUT: string,
		SET_TIMEOUT: string,
		ACCEPT_ALERT: string,
		DISMISS_ALERT: string,
		GET_ALERT_TEXT: string,
		SET_ALERT_TEXT: string,
		EXECUTE_SQL: string,
		GET_LOCATION: string,
		SET_LOCATION: string,
		GET_APP_CACHE: string,
		GET_APP_CACHE_STATUS: string,
		CLEAR_APP_CACHE: string,
		IS_BROWSER_ONLINE: string,
		SET_BROWSER_ONLINE: string,
		GET_LOCAL_STORAGE_ITEM: string,
		GET_LOCAL_STORAGE_KEYS: string,
		SET_LOCAL_STORAGE_ITEM: string,
		REMOVE_LOCAL_STORAGE_ITEM: string,
		CLEAR_LOCAL_STORAGE: string,
		GET_LOCAL_STORAGE_SIZE: string,
		GET_SESSION_STORAGE_ITEM: string,
		GET_SESSION_STORAGE_KEYS: string,
		SET_SESSION_STORAGE_ITEM: string,
		REMOVE_SESSION_STORAGE_ITEM: string,
		CLEAR_SESSION_STORAGE: string,
		GET_SESSION_STORAGE_SIZE: string,
		SET_SCREEN_ORIENTATION: string,
		GET_SCREEN_ORIENTATION: string,
		CLICK: string,
		DOUBLE_CLICK: string,
		MOUSE_DOWN: string,
		MOUSE_UP: string,
		MOVE_TO: string,
		SEND_KEYS_TO_ACTIVE_ELEMENT: string,
		TOUCH_SINGLE_TAP: string,
		TOUCH_DOWN: string,
		TOUCH_UP: string,
		TOUCH_MOVE: string,
		TOUCH_SCROLL: string,
		TOUCH_DOUBLE_TAP: string,
		TOUCH_LONG_PRESS: string,
		TOUCH_FLICK: string,
		GET_AVAILABLE_LOG_TYPES: string,
		GET_LOG: string,
		GET_SESSION_LOGS: string,
		UPLOAD_FILE: string
	}

	declare interface IWebDriverOptionsCookie {
		name: string,
		value: string,
		path?: string,
		domain?: string,
		secure?: boolean,
		expiry?: number
	}

	declare interface IWebElementId {
		[ELEMENT: string]: string
	}

	declare interface IWebElement {
		click(): webdriver.promise.Promise<void>,
		sendKeys(...var_args: string[]): webdriver.promise.Promise<void>,
		getTagName(): webdriver.promise.Promise<string>,
		getCssValue(cssStyleProperty: string): webdriver.promise.Promise<string>,
		getAttribute(attributeName: string): webdriver.promise.Promise<string>,
		getText(): webdriver.promise.Promise<string>,
		getSize(): webdriver.promise.Promise<ISize>,
		getLocation(): webdriver.promise.Promise<ILocation>,
		isEnabled(): webdriver.promise.Promise<boolean>,
		isSelected(): webdriver.promise.Promise<boolean>,
		submit(): webdriver.promise.Promise<void>,
		clear(): webdriver.promise.Promise<void>,
		isDisplayed(): webdriver.promise.Promise<boolean>,
		getOuterHtml(): webdriver.promise.Promise<string>,
		getId(): webdriver.promise.Promise<IWebElementId>,
		getInnerHtml(): webdriver.promise.Promise<string>
	}

	declare interface IWebElementFinders {
		findElement(locator: By | Function): WebElementPromise,
		isElementPresent(locator: By | Function): webdriver.promise.Promise<boolean>,
		findElements(locator: By | Function): webdriver.promise.Promise<WebElement[]>
	}

	declare interface Serializable<T> {
		serialize(): T | webdriver.promise.IThenable<T>
	}

		declare class ActionSequence  {
		constructor(driver: WebDriver): this;
		perform(): webdriver.promise.Promise<void>;
		mouseMove(location: WebElement | ILocation, opt_offset?: ILocation): ActionSequence;
		mouseDown(
		opt_elementOrButton?: WebElement | webdriver.Button, opt_button?: webdriver.Button
	): ActionSequence;
		mouseUp(
		opt_elementOrButton?: WebElement | webdriver.Button, opt_button?: webdriver.Button
	): ActionSequence;
		dragAndDrop(element: WebElement, location: WebElement | ILocation): ActionSequence;
		click(
		opt_elementOrButton?: WebElement | webdriver.Button, opt_button?: webdriver.Button
	): ActionSequence;
		doubleClick(
		opt_elementOrButton?: WebElement | webdriver.Button, opt_button?: webdriver.Button
	): ActionSequence;
		keyDown(key: Key): ActionSequence;
		keyUp(key: Key): ActionSequence;
		sendKeys(...var_args: Array<string | Key>): ActionSequence
	}

	declare class TouchSequence  {
		constructor(driver: WebDriver): this;
		perform(): webdriver.promise.Promise<void>;
		tap(elem: WebElement): TouchSequence;
		doubleTap(elem: WebElement): TouchSequence;
		longPress(elem: WebElement): TouchSequence;
		tapAndHold(location: ILocation): TouchSequence;
		move(location: ILocation): TouchSequence;
		release(location: ILocation): TouchSequence;
		scroll(offset: IOffset): TouchSequence;
		scrollFromElement(elem: WebElement, offset: IOffset): TouchSequence;
		flick(speed: ISpeed): TouchSequence;
		flickElement(elem: WebElement, offset: IOffset, speed: number): TouchSequence
	}

	declare class Alert  {
		constructor(driver: WebDriver, text: string): this;
		getText(): webdriver.promise.Promise<string>;
		authenticateAs(username: string, password: string): webdriver.promise.Promise<void>;
		accept(): webdriver.promise.Promise<void>;
		dismiss(): webdriver.promise.Promise<void>;
		sendKeys(text: string): webdriver.promise.Promise<void>
	}

	declare class AlertPromise extends Alert {
		constructor(driver: WebDriver, alert: webdriver.promise.Promise<Alert>): this
	}

	declare class UnhandledAlertError extends undefined$UnexpectedAlertOpenError {
		
	}

	declare class Builder  {
		constructor(): this;
		disableEnvironmentOverrides(): Builder;
		build(): WebDriver;
		buildAsync(): webdriver.promise.Promise<WebDriver>;
		forBrowser(name: string, opt_version?: string, opt_platform?: string): Builder;
		getCapabilities(): Capabilities;
		getServerUrl(): string;
		getWebDriverProxy(): string;
		setAlertBehavior(behavior: string): Builder;
		setChromeOptions(options: chrome.Options): Builder;
		setControlFlow(flow: webdriver.promise.ControlFlow): Builder;
		setEdgeOptions(options: edge.Options): Builder;
		setEnableNativeEvents(enabled: boolean): Builder;
		setFirefoxOptions(options: firefox.Options): Builder;
		setIeOptions(options: ie.Options): Builder;
		setLoggingPrefs(prefs: webdriver.logging.Preferences | Object): Builder;
		setOperaOptions(options: opera.Options): Builder;
		setProxy(config: webdriver.ProxyConfig): Builder;
		setSafari(options: safari.Options): Builder;
		setScrollBehavior(behavior: number): Builder;
		usingServer(url: string): Builder;
		usingWebDriverProxy(proxy: string): Builder;
		withCapabilities(capabilities: Object | Capabilities): Builder
	}

	declare class By  {
		constructor(using: string, value: string): this;
		className(name: string): By;
		css(selector: string): By;
		id(id: string): By;
		linkText(text: string): By;
		js(
		script: string | Function, ...var_args: Array<any>
	): (webdriver: webdriver.WebDriver) => webdriver.promise.Promise<any>;
		name(name: string): By;
		partialLinkText(text: string): By;
		tagName(name: string): By;
		xpath(xpath: string): By;
		toString(): string
	}

	declare class Capabilities  {
		constructor(opt_other?: Capabilities | Object): this;
		toJSON(): any;
		merge(other: Capabilities | Object): Capabilities;
		set(key: string, value: any): Capabilities;
		setLoggingPrefs(prefs: webdriver.logging.Preferences | Object): Capabilities;
		setProxy(proxy: ProxyConfig): Capabilities;
		setEnableNativeEvents(enabled: boolean): Capabilities;
		setScrollBehavior(behavior: number): Capabilities;
		setAlertBehavior(behavior: string): Capabilities;
		get(key: string): any;
		has(key: string): boolean;
		android(): Capabilities;
		chrome(): Capabilities;
		edge(): Capabilities;
		firefox(): Capabilities;
		ie(): Capabilities;
		ipad(): Capabilities;
		iphone(): Capabilities;
		opera(): Capabilities;
		phantomjs(): Capabilities;
		safari(): Capabilities;
		htmlunit(): Capabilities;
		htmlunitwithjs(): Capabilities
	}

	declare class Command  {
		constructor(name: string): this;
		getName(): string;
		setParameter(name: string, value: any): Command;
		setParameters(parameters: any): Command;
		getParameter(key: string): any;
		getParameters(): any
	}

	declare class Executor  {
		execute(command: Command): webdriver.promise.Promise<any>
	}

	declare class DeferredExecutor  {
		constructor(delegate: webdriver.promise.Promise<Executor>): this
	}

	declare class Listener  {
		constructor(fn: Function, scope: Object, oneshot: boolean): this
	}

	declare class EventEmitter  {
		constructor(): this;
		emit(type: string, ...var_args: any[]): void;
		listeners(type: string): any;
		addListener(
		type: string, fn: Function, opt_scope?: any, opt_oneshot?: boolean
	): EventEmitter;
		once(type: string, fn: any, opt_scope?: any): EventEmitter;
		on(type: string, fn: Function, opt_scope?: any): EventEmitter;
		removeListener(type: string, listenerFn: Function): EventEmitter;
		removeAllListeners(opt_type?: string): EventEmitter
	}

	declare class Navigation  {
		constructor(driver: WebDriver): this;
		to(url: string): webdriver.promise.Promise<void>;
		back(): webdriver.promise.Promise<void>;
		forward(): webdriver.promise.Promise<void>;
		refresh(): webdriver.promise.Promise<void>
	}

	declare class Options  {
		constructor(driver: webdriver.WebDriver): this;
		addCookie(
		name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: number | Date
	): webdriver.promise.Promise<void>;
		deleteAllCookies(): webdriver.promise.Promise<void>;
		deleteCookie(name: string): webdriver.promise.Promise<void>;
		getCookies(): webdriver.promise.Promise<IWebDriverOptionsCookie[]>;
		getCookie(name: string): webdriver.promise.Promise<IWebDriverOptionsCookie>;
		logs(): webdriver.Logs;
		timeouts(): webdriver.Timeouts;
		window(): webdriver.Window
	}

	declare class Timeouts  {
		constructor(driver: webdriver.WebDriver): this;
		implicitlyWait(ms: number): webdriver.promise.Promise<void>;
		setScriptTimeout(ms: number): webdriver.promise.Promise<void>;
		pageLoadTimeout(ms: number): webdriver.promise.Promise<void>
	}

	declare class Window  {
		constructor(driver: webdriver.WebDriver): this;
		getPosition(): webdriver.promise.Promise<ILocation>;
		setPosition(x: number, y: number): webdriver.promise.Promise<void>;
		getSize(): webdriver.promise.Promise<ISize>;
		setSize(width: number, height: number): webdriver.promise.Promise<void>;
		maximize(): webdriver.promise.Promise<void>
	}

	declare class Logs  {
		constructor(driver: webdriver.WebDriver): this;
		get(
		type: webdriver.logging.Type
	): webdriver.promise.Promise<webdriver.logging.Entry[]>;
		getAvailableLogTypes(): webdriver.promise.Promise<string[]>
	}

	declare class TargetLocator  {
		constructor(driver: webdriver.WebDriver): this;
		activeElement(): WebElementPromise;
		defaultContent(): webdriver.promise.Promise<void>;
		frame(nameOrIndex: number | WebElement): webdriver.promise.Promise<void>;
		window(nameOrHandle: string): webdriver.promise.Promise<void>;
		alert(): AlertPromise
	}

	declare class FileDetector  {
		constructor(): this;
		handleFile(driver: webdriver.WebDriver, path: string): webdriver.promise.Promise<string>
	}

	declare class WebDriver  {
		constructor(session: Session | webdriver.promise.Promise<Session>, executor: Executor, opt_flow?: webdriver.promise.ControlFlow): this;
		attachToSession(
		executor: Executor, sessionId: string, opt_flow?: webdriver.promise.ControlFlow
	): WebDriver;
		createSession(
		executor: Executor, desiredCapabilities: Capabilities, opt_flow?: webdriver.promise.ControlFlow
	): WebDriver;
		controlFlow(): webdriver.promise.ControlFlow;
		schedule<T>(command: Command, description: string): webdriver.promise.Promise<T>;
		setFileDetector(detector: FileDetector): void;
		getSession(): webdriver.promise.Promise<Session>;
		getCapabilities(): webdriver.promise.Promise<Capabilities>;
		quit(): webdriver.promise.Promise<void>;
		actions(): ActionSequence;
		touchActions(): TouchSequence;
		executeScript<T>(script: string | Function, ...var_args: any[]): webdriver.promise.Promise<T>;
		executeAsyncScript<T>(script: string | Function, ...var_args: any[]): webdriver.promise.Promise<T>;
		call<T>(
		fn: (...var_args: any[]) => (T | webdriver.promise.Promise<T>), opt_scope?: any, ...var_args: any[]
	): webdriver.promise.Promise<T>;
		wait<T>(
		condition: webdriver.promise.Promise<T> | webdriver.until.Condition<T> | ((driver: WebDriver) => T), timeout?: number, opt_message?: string
	): webdriver.promise.Promise<T>;
		sleep(ms: number): webdriver.promise.Promise<void>;
		getWindowHandle(): webdriver.promise.Promise<string>;
		getAllWindowHandles(): webdriver.promise.Promise<string[]>;
		getPageSource(): webdriver.promise.Promise<string>;
		close(): webdriver.promise.Promise<void>;
		get(url: string): webdriver.promise.Promise<void>;
		getCurrentUrl(): webdriver.promise.Promise<string>;
		getTitle(): webdriver.promise.Promise<string>;
		findElement(locator: By | Function): WebElementPromise;
		isElementPresent(locatorOrElement: By | Function): webdriver.promise.Promise<boolean>;
		findElements(locator: By | Function): webdriver.promise.Promise<WebElement[]>;
		takeScreenshot(): webdriver.promise.Promise<string>;
		manage(): webdriver.Options;
		navigate(): Navigation;
		switchTo(): webdriver.TargetLocator
	}

	declare class WebElement extends Serializable<IWebElementId> {
		constructor(driver: webdriver.WebDriver, id: webdriver.promise.Promise<string> | string): this;
		buildId(id: string, opt_noLegacy?: boolean): Object;
		extractId(obj: IWebElementId): string;
		isId(obj: IWebElementId): boolean;
		equals(a: WebElement, b: WebElement): webdriver.promise.Promise<boolean>;
		getDriver(): webdriver.WebDriver;
		getId(): webdriver.promise.Promise<string>;
		getRawId(): any;
		findElement(locator: By | Function): WebElementPromise;
		isElementPresent(locator: By | Function): webdriver.promise.Promise<boolean>;
		findElements(locator: By | Function): webdriver.promise.Promise<WebElement[]>;
		click(): webdriver.promise.Promise<void>;
		sendKeys(
		...var_args: Array<string | webdriver.promise.Promise<string>>
	): webdriver.promise.Promise<void>;
		getTagName(): webdriver.promise.Promise<string>;
		getCssValue(cssStyleProperty: string): webdriver.promise.Promise<string>;
		getAttribute(attributeName: string): webdriver.promise.Promise<string>;
		getText(): webdriver.promise.Promise<string>;
		getSize(): webdriver.promise.Promise<ISize>;
		getLocation(): webdriver.promise.Promise<ILocation>;
		isEnabled(): webdriver.promise.Promise<boolean>;
		isSelected(): webdriver.promise.Promise<boolean>;
		submit(): webdriver.promise.Promise<void>;
		clear(): webdriver.promise.Promise<void>;
		isDisplayed(): webdriver.promise.Promise<boolean>;
		takeScreenshot(opt_scroll?: boolean): webdriver.promise.Promise<string>;
		getOuterHtml(): webdriver.promise.Promise<string>;
		getInnerHtml(): webdriver.promise.Promise<string>;
		serialize(): webdriver.promise.Promise<IWebElementId>
	}

	declare class WebElementPromise extends WebElement, undefined$IThenable<WebElement> {
		constructor(driver: webdriver.WebDriver, el: webdriver.promise.Promise<WebElement>): this;
		cancel(opt_reason?: string): void;
		isPending(): boolean;
		then<R>(
		opt_callback?: (value: WebElement) => webdriver.promise.Promise<R>, opt_errback?: (error: any) => any
	): webdriver.promise.Promise<R>;
		then<R>(
		opt_callback?: (value: WebElement) => R, opt_errback?: (error: any) => any
	): webdriver.promise.Promise<R>;
		thenCatch<R>(errback: (error: any) => any): webdriver.promise.Promise<R>;
		thenFinally<R>(callback: () => any): webdriver.promise.Promise<R>;
		catch<R>(errback: Function): webdriver.promise.Promise<R>
	}

	declare class Session  {
		constructor(id: string, capabilities: Capabilities | Object): this;
		getId(): string;
		getCapabilities(): webdriver.Capabilities;
		getCapability(key: string): any;
		toJSON(): string
	}

	
}

declare module 'npm$namespace$testing' {
			declare function describe(name: string, fn: Function): void

	declare function xdescribe(name: string, fn: Function): void

	declare function after(fn: Function): void

	declare function afterEach(fn: Function): void

	declare function before(fn: Function): void

	declare function beforeEach(fn: Function): void

	declare function it(name: string, fn: Function): void

	declare function iit(name: string, fn: Function): void

	declare function xit(name: string, fn: Function): void

		
}

declare module 'selenium-webdriver/chrome' {
					declare module.exports: undefined


}

declare module 'selenium-webdriver/executors' {
					declare module.exports: undefined


}

declare module 'selenium-webdriver' {
					declare module.exports: undefined


}

declare module 'selenium-webdriver/testing' {
					declare module.exports: undefined


}
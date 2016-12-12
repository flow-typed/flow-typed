

declare module 'selenium-webdriver' {
					declare module.exports: undefined


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

	declare function getDefaultService(): any

	declare function setDefaultService(service: any): void

	declare class Driver extends webdriver$WebDriver {
		constructor(opt_config?: webdriver.Capabilities, opt_service?: any, opt_flow?: webdriver.promise.ControlFlow): this;
		constructor(opt_config?: Options, opt_service?: any, opt_flow?: webdriver.promise.ControlFlow): this
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
		setProxy(proxy: webdriver.ProxyConfig): Options;
		toCapabilities(opt_capabilities?: webdriver.Capabilities): webdriver.Capabilities;
		toJSON(): IOptionsValues
	}

	declare class ServiceBuilder  {
		constructor(opt_exe?: string): this;
		usingPort(port: number): ServiceBuilder;
		setAdbPort(port: number): ServiceBuilder;
		loggingTo(path: string): ServiceBuilder;
		enableVerboseLogging(): ServiceBuilder;
		setNumHttpThreads(n: number): ServiceBuilder;
		setUrlBasePath(path: string): ServiceBuilder;
		setStdio(config: string): ServiceBuilder;
		setStdio(config: any[]): ServiceBuilder;
		withEnvironment(env: {
		[key: string]: string
	}): ServiceBuilder;
		build(): any
	}

	
}

declare module 'npm$namespace$firefox' {
				declare class Binary  {
		constructor(opt_exe?: string): this;
		addArguments(...var_args: string[]): void;
		launch(profile: string): webdriver.promise.Promise<any>;
		kill(): webdriver.promise.Promise<void>
	}

	declare class Driver extends webdriver$WebDriver {
		constructor(opt_config?: webdriver.Capabilities, opt_flow?: webdriver.promise.ControlFlow): this;
		constructor(opt_config?: any, opt_flow?: webdriver.promise.ControlFlow): this
	}

	declare class Options  {
		constructor(): this;
		setProfile(profile: string): Options;
		setProfile(profile: Profile): Options;
		setBinary(binary: string): Options;
		setBinary(binary: Binary): Options;
		setLoggingPreferences(prefs: webdriver.logging.Preferences): Options;
		setProxy(proxy: webdriver.ProxyConfig): Options;
		toCapabilities(opt_remote?: any): webdriver.Capabilities
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

	
}

declare module 'npm$namespace$executors' {
			declare function createExecutor(url: string): webdriver.CommandExecutor

	declare function createExecutor(url: webdriver.promise.Promise<string>): webdriver.CommandExecutor

		
}

declare module 'error' {
		declare interface IErrorCode {
		SUCCESS: number,
		NO_SUCH_ELEMENT: number,
		NO_SUCH_FRAME: number,
		UNKNOWN_COMMAND: number,
		UNSUPPORTED_OPERATION: number,
		STALE_ELEMENT_REFERENCE: number,
		ELEMENT_NOT_VISIBLE: number,
		INVALID_ELEMENT_STATE: number,
		UNKNOWN_ERROR: number,
		ELEMENT_NOT_SELECTABLE: number,
		JAVASCRIPT_ERROR: number,
		XPATH_LOOKUP_ERROR: number,
		TIMEOUT: number,
		NO_SUCH_WINDOW: number,
		INVALID_COOKIE_DOMAIN: number,
		UNABLE_TO_SET_COOKIE: number,
		MODAL_DIALOG_OPENED: number,
		UNEXPECTED_ALERT_OPEN: number,
		NO_SUCH_ALERT: number,
		NO_MODAL_DIALOG_OPEN: number,
		SCRIPT_TIMEOUT: number,
		INVALID_ELEMENT_COORDINATES: number,
		IME_NOT_AVAILABLE: number,
		IME_ENGINE_ACTIVATION_FAILED: number,
		INVALID_SELECTOR_ERROR: number,
		SESSION_NOT_CREATED: number,
		MOVE_TARGET_OUT_OF_BOUNDS: number,
		SQL_DATABASE_ERROR: number,
		INVALID_XPATH_SELECTOR: number,
		INVALID_XPATH_SELECTOR_RETURN_TYPE: number,
		METHOD_NOT_ALLOWED: number
	}

		declare class Error  {
		constructor(code: number, opt_message?: string): this;
		State: {
		ELEMENT_NOT_SELECTABLE: string,
		ELEMENT_NOT_VISIBLE: string,
		IME_ENGINE_ACTIVATION_FAILED: string,
		IME_NOT_AVAILABLE: string,
		INVALID_COOKIE_DOMAIN: string,
		INVALID_ELEMENT_COORDINATES: string,
		INVALID_ELEMENT_STATE: string,
		INVALID_SELECTOR: string,
		JAVASCRIPT_ERROR: string,
		MOVE_TARGET_OUT_OF_BOUNDS: string,
		NO_SUCH_ALERT: string,
		NO_SUCH_DOM: string,
		NO_SUCH_ELEMENT: string,
		NO_SUCH_FRAME: string,
		NO_SUCH_WINDOW: string,
		SCRIPT_TIMEOUT: string,
		SESSION_NOT_CREATED: string,
		STALE_ELEMENT_REFERENCE: string,
		SUCCESS: string,
		TIMEOUT: string,
		UNABLE_TO_SET_COOKIE: string,
		UNEXPECTED_ALERT_OPEN: string,
		UNKNOWN_COMMAND: string,
		UNKNOWN_ERROR: string,
		UNSUPPORTED_OPERATION: string
	};
		code: number;
		state: string;
		message: string;
		name: string;
		stack: string;
		isAutomationError: boolean;
		toString(): string
	}

	
}

declare module 'logging' {
		declare interface IType {
		BROWSER: string,
		CLIENT: string,
		DRIVER: string,
		PERFORMANCE: string,
		SERVER: string
	}

	declare interface ILevel {
		value: number,
		name: string
	}

	declare interface ILevelValues {
		ALL: ILevel,
		DEBUG: ILevel,
		INFO: ILevel,
		WARNING: ILevel,
		SEVERE: ILevel,
		OFF: ILevel
	}

	declare interface IEntryJSON {
		level: string,
		message: string,
		timestamp: number,
		type: string
	}

	declare function getLevel(nameOrValue: string): ILevel

	declare function getLevel(nameOrValue: number): ILevel

	declare class Preferences  {
		setLevel(type: string, level: ILevel): void;
		toJSON(): {
		[key: string]: string
	}
	}

	declare class Entry  {
		constructor(level: ILevel, message: string, opt_timestamp?: number, opt_type?: string): this;
		constructor(level: string, message: string, opt_timestamp?: number, opt_type?: string): this;
		level: ILevel;
		message: string;
		timestamp: number;
		type: string;
		fromClosureLogRecord(logRecord: any, opt_type?: string): Entry;
		toJSON(): IEntryJSON
	}

	
}

declare module 'promise' {
		declare interface IThenable<T> {
		cancel(opt_reason?: string): void,
		isPending(): boolean,
		then<R>(
		opt_callback?: (value: T) => Promise<R>, opt_errback?: (error: any) => any
	): Promise<R>,
		then<R>(
		opt_callback?: (value: T) => R, opt_errback?: (error: any) => any
	): Promise<R>,
		thenCatch<R>(errback: (error: any) => any): Promise<R>,
		thenFinally<R>(callback: () => any): Promise<R>
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

	declare function all(arr: Promise<any>[]): Promise<any[]>

	declare function asap(value: any, callback: Function, opt_errback?: Function): void

	declare function controlFlow(): ControlFlow

	declare function createFlow<R>(callback: (flow: ControlFlow) => R): Promise<R>

	declare function isPromise(value: any): boolean

	declare function isGenerator(fn: Function): boolean

	declare function delayed(ms: number): Promise<void>

	declare function filter<T>(
		arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any
	): Promise<T[]>

	declare function filter<T>(
		arr: Promise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any
	): Promise<T[]>

	declare function defer<T>(): Deferred<T>

	declare function fulfilled<T>(opt_value?: T): Promise<T>

	declare function map<T>(
		arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any
	): Promise<T[]>

	declare function map<T>(
		arr: Promise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any
	): Promise<T[]>

	declare function rejected(opt_reason?: any): Promise<void>

	declare function checkedNodeCall<T>(fn: Function, ...var_args: any[]): Promise<T>

	declare function consume<T>(generatorFn: Function, opt_self?: any, ...var_args: any[]): Promise<T>

	declare function when<T, R>(
		value: T, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any
	): Promise<R>

	declare function when<T, R>(
		value: Promise<T>, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any
	): Promise<R>

	declare function fullyResolved<T>(value: any): Promise<T>

	declare function setDefaultFlow(flow: ControlFlow): void

	declare class CancellationError  {
		constructor(opt_msg?: string): this;
		name: string;
		message: string
	}

	declare class Thenable<T> extends IThenable<T> {
		cancel(opt_reason?: string): void;
		isPending(): boolean;
		then<R>(
		opt_callback?: (value: T) => Promise<R>, opt_errback?: (error: any) => any
	): Promise<R>;
		then<R>(
		opt_callback?: (value: T) => R, opt_errback?: (error: any) => any
	): Promise<R>;
		thenCatch<R>(errback: (error: any) => any): Promise<R>;
		thenFinally<R>(callback: () => any): Promise<R>;
		addImplementation(ctor: Function): void;
		isImplementation(object: any): boolean
	}

	declare class Promise<T> extends IThenable<T> {
		constructor(resolver: (onFulfilled: IFulfilledCallback<T>, onRejected: IRejectedCallback) => void, opt_flow?: ControlFlow): this;
		constructor(): this;
		cancel(reason: any): void;
		isPending(): boolean;
		then<R>(
		opt_callback?: (value: T) => Promise<R>, opt_errback?: (error: any) => any
	): Promise<R>;
		then<R>(
		opt_callback?: (value: T) => R, opt_errback?: (error: any) => any
	): Promise<R>;
		thenCatch<R>(errback: (error: any) => any): Promise<R>;
		thenFinally<R>(callback: () => any): Promise<R>
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

declare module 'stacktrace' {
			declare function format(error: any): any

	declare function get(): Frame[]

	declare class Frame  {
		constructor(context?: string, name?: string, alias?: string, path?: string): this;
		getName(): string;
		getUrl(): string;
		getLine(): number;
		getColumn(): number;
		isAnonymous(): boolean;
		toString(): string
	}

	declare class Snapshot  {
		constructor(opt_slice?: number): this;
		getStacktrace(): Frame[]
	}

	
}

declare module 'until' {
			declare function ableToSwitchToFrame(
		frame: number | WebElement | Locator | By.Hash | ((webdriver: WebDriver) => WebElement)
	): Condition<boolean>

	declare function alertIsPresent(): Condition<Alert>

	declare function elementIsDisabled(element: WebElement): Condition<boolean>

	declare function elementIsEnabled(element: WebElement): Condition<boolean>

	declare function elementIsNotSelected(element: WebElement): Condition<boolean>

	declare function elementIsNotVisible(element: WebElement): Condition<boolean>

	declare function elementIsSelected(element: WebElement): Condition<boolean>

	declare function elementIsVisible(element: WebElement): Condition<boolean>

	declare function elementLocated(locator: Locator | By.Hash | Function): Condition<WebElement>

	declare function elementTextContains(element: WebElement, substr: string): Condition<boolean>

	declare function elementTextIs(element: WebElement, text: string): Condition<boolean>

	declare function elementTextMatches(element: WebElement, regex: RegExp): Condition<boolean>

	declare function elementsLocated(locator: Locator | By.Hash | Function): Condition<WebElement[]>

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
		declare interface ILocation {
		x: number,
		y: number
	}

	declare interface ISize {
		width: number,
		height: number
	}

	declare interface IButton {
		LEFT: number,
		MIDDLE: number,
		RIGHT: number
	}

	declare interface IKey {
		NULL: string,
		CANCEL: string,
		HELP: string,
		BACK_SPACE: string,
		TAB: string,
		CLEAR: string,
		RETURN: string,
		ENTER: string,
		SHIFT: string,
		CONTROL: string,
		ALT: string,
		PAUSE: string,
		ESCAPE: string,
		SPACE: string,
		PAGE_UP: string,
		PAGE_DOWN: string,
		END: string,
		HOME: string,
		ARROW_LEFT: string,
		LEFT: string,
		ARROW_UP: string,
		UP: string,
		ARROW_RIGHT: string,
		RIGHT: string,
		ARROW_DOWN: string,
		DOWN: string,
		INSERT: string,
		DELETE: string,
		SEMICOLON: string,
		EQUALS: string,
		NUMPAD0: string,
		NUMPAD1: string,
		NUMPAD2: string,
		NUMPAD3: string,
		NUMPAD4: string,
		NUMPAD5: string,
		NUMPAD6: string,
		NUMPAD7: string,
		NUMPAD8: string,
		NUMPAD9: string,
		MULTIPLY: string,
		ADD: string,
		SEPARATOR: string,
		SUBTRACT: string,
		DECIMAL: string,
		DIVIDE: string,
		F1: string,
		F2: string,
		F3: string,
		F4: string,
		F5: string,
		F6: string,
		F7: string,
		F8: string,
		F9: string,
		F10: string,
		F11: string,
		F12: string,
		COMMAND: string,
		META: string,
		chord: (...var_args: string[]) => string
	}

	declare interface IOffset {
		x: number,
		y: number
	}

	declare interface ISpeed {
		xspeed: number,
		yspeed: number
	}

	declare interface Alert {
		getText(): webdriver.promise.Promise<string>,
		accept(): webdriver.promise.Promise<void>,
		dismiss(): webdriver.promise.Promise<void>,
		sendKeys(text: string): webdriver.promise.Promise<void>
	}

	declare interface AlertPromise {
		
	}

	declare interface UnhandledAlertError {
		getAlertText(): string,
		getAlert(): Alert
	}

	declare interface IBrowser {
		ANDROID: string,
		CHROME: string,
		FIREFOX: string,
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
		GET_SESSION_LOGS: string
	}

	declare interface CommandExecutor {
		execute(command: Command, callback: (error: Error, responseObject: any) => any): void
	}

	declare interface WebDriverNavigation {
		new (driver: WebDriver): WebDriverNavigation,
		to(url: string): webdriver.promise.Promise<void>,
		back(): webdriver.promise.Promise<void>,
		forward(): webdriver.promise.Promise<void>,
		refresh(): webdriver.promise.Promise<void>
	}

	declare interface IWebDriverOptionsCookie {
		name: string,
		value: string,
		path?: string,
		domain?: string,
		secure?: boolean,
		expiry?: number
	}

	declare interface WebDriverOptions {
		new (driver: webdriver.WebDriver): WebDriverOptions,
		addCookie(
		name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: number
	): webdriver.promise.Promise<void>,
		addCookie(
		name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: boolean, opt_expiry?: Date
	): webdriver.promise.Promise<void>,
		deleteAllCookies(): webdriver.promise.Promise<void>,
		deleteCookie(name: string): webdriver.promise.Promise<void>,
		getCookies(): webdriver.promise.Promise<IWebDriverOptionsCookie[]>,
		getCookie(name: string): webdriver.promise.Promise<IWebDriverOptionsCookie>,
		logs(): WebDriverLogs,
		timeouts(): WebDriverTimeouts,
		window(): WebDriverWindow
	}

	declare interface WebDriverTimeouts {
		new (driver: WebDriver): WebDriverTimeouts,
		implicitlyWait(ms: number): webdriver.promise.Promise<void>,
		setScriptTimeout(ms: number): webdriver.promise.Promise<void>,
		pageLoadTimeout(ms: number): webdriver.promise.Promise<void>
	}

	declare interface WebDriverWindow {
		new (driver: WebDriver): WebDriverWindow,
		getPosition(): webdriver.promise.Promise<ILocation>,
		setPosition(x: number, y: number): webdriver.promise.Promise<void>,
		getSize(): webdriver.promise.Promise<ISize>,
		setSize(width: number, height: number): webdriver.promise.Promise<void>,
		maximize(): webdriver.promise.Promise<void>
	}

	declare interface WebDriverLogs {
		new (driver: WebDriver): WebDriverLogs,
		get(type: string): webdriver.promise.Promise<webdriver.logging.Entry[]>,
		getAvailableLogTypes(): webdriver.promise.Promise<string[]>
	}

	declare interface WebDriverTargetLocator {
		new (driver: WebDriver): WebDriverTargetLocator,
		activeElement(): WebElementPromise,
		defaultContent(): webdriver.promise.Promise<void>,
		frame(nameOrIndex: string): webdriver.promise.Promise<void>,
		frame(nameOrIndex: number): webdriver.promise.Promise<void>,
		window(nameOrHandle: string): webdriver.promise.Promise<void>,
		alert(): AlertPromise
	}

	declare interface IWebElementId {
		ELEMENT: string
	}

	declare interface Serializable<T> {
		serialize(): T | webdriver.promise.IThenable<T>
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
		findElement(locator: Locator | By.Hash | Function): WebElementPromise,
		isElementPresent(locator: Locator | By.Hash | Function): webdriver.promise.Promise<boolean>,
		findElements(locator: Locator | By.Hash | Function): webdriver.promise.Promise<WebElement[]>
	}

	declare interface Serializable<T> {
		serialize(): T | webdriver.promise.IThenable<T>
	}

		declare class ActionSequence  {
		constructor(driver: WebDriver): this;
		perform(): webdriver.promise.Promise<void>;
		mouseMove(location: WebElement, opt_offset?: ILocation): ActionSequence;
		mouseMove(location: ILocation): ActionSequence;
		mouseDown(opt_elementOrButton?: WebElement, opt_button?: number): ActionSequence;
		mouseDown(opt_elementOrButton?: number): ActionSequence;
		mouseUp(opt_elementOrButton?: WebElement, opt_button?: number): ActionSequence;
		mouseUp(opt_elementOrButton?: number): ActionSequence;
		dragAndDrop(element: WebElement, location: WebElement): ActionSequence;
		dragAndDrop(element: WebElement, location: ILocation): ActionSequence;
		click(opt_elementOrButton?: WebElement, opt_button?: number): ActionSequence;
		click(opt_elementOrButton?: number): ActionSequence;
		doubleClick(opt_elementOrButton?: WebElement, opt_button?: number): ActionSequence;
		doubleClick(opt_elementOrButton?: number): ActionSequence;
		keyDown(key: string): ActionSequence;
		keyUp(key: string): ActionSequence;
		sendKeys(...var_args: any[]): ActionSequence
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

	declare class Builder  {
		constructor(): this;
		build(): WebDriver;
		forBrowser(name: string, opt_version?: string, opt_platform?: string): Builder;
		getCapabilities(): Capabilities;
		getServerUrl(): string;
		setAlertBehavior(behavior: string): Builder;
		setChromeOptions(options: chrome.Options): Builder;
		setControlFlow(flow: webdriver.promise.ControlFlow): Builder;
		setEnableNativeEvents(enabled: boolean): Builder;
		setFirefoxOptions(options: firefox.Options): Builder;
		setLoggingPrefs(prefs: webdriver.logging.Preferences): Builder;
		setLoggingPrefs(prefs: {
		[key: string]: string
	}): Builder;
		setProxy(config: ProxyConfig): Builder;
		setScrollBehavior(behavior: number): Builder;
		usingServer(url: string): Builder;
		withCapabilities(capabilities: Capabilities): Builder;
		withCapabilities(capabilities: any): Builder
	}

	declare class Capabilities  {
		constructor(opt_other?: Capabilities): this;
		constructor(opt_other?: any): this;
		toJSON(): any;
		merge(other: Capabilities): Capabilities;
		merge(other: any): Capabilities;
		set(key: string, value: any): Capabilities;
		setLoggingPrefs(prefs: webdriver.logging.Preferences): Capabilities;
		setLoggingPrefs(prefs: {
		[key: string]: string
	}): Capabilities;
		setProxy(proxy: ProxyConfig): Capabilities;
		setEnableNativeEvents(enabled: boolean): Capabilities;
		setScrollBehavior(behavior: number): Capabilities;
		setAlertBehavior(behavior: string): Capabilities;
		get(key: string): any;
		has(key: string): boolean;
		android(): Capabilities;
		chrome(): Capabilities;
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

	declare class EventEmitter  {
		constructor(): this;
		emit(type: string, ...var_args: any[]): void;
		listeners(type: string): Array<{
		fn: Function,
		oneshot: boolean,
		scope: any
	}>;
		addListener(type: string, listenerFn: Function, opt_scope?: any): EventEmitter;
		once(type: string, listenerFn: any, opt_scope?: any): EventEmitter;
		on(type: string, listenerFn: Function, opt_scope?: any): EventEmitter;
		removeListener(type: string, listenerFn: Function): EventEmitter;
		removeAllListeners(opt_type?: string): EventEmitter
	}

	declare class FileDetector  {
		constructor(): this;
		handleFile(driver: webdriver.WebDriver, path: string): webdriver.promise.Promise<string>
	}

	declare class WebDriver  {
		constructor(session: Session, executor: CommandExecutor, opt_flow?: webdriver.promise.ControlFlow): this;
		constructor(session: webdriver.promise.Promise<Session>, executor: CommandExecutor, opt_flow?: webdriver.promise.ControlFlow): this;
		Navigation: WebDriverNavigation;
		Options: WebDriverOptions;
		Timeouts: WebDriverTimeouts;
		Window: WebDriverWindow;
		Logs: WebDriverLogs;
		TargetLocator: WebDriverTargetLocator;
		attachToSession(
		executor: CommandExecutor, sessionId: string, opt_flow?: webdriver.promise.ControlFlow
	): WebDriver;
		createSession(
		executor: CommandExecutor, desiredCapabilities: Capabilities, opt_flow?: webdriver.promise.ControlFlow
	): WebDriver;
		controlFlow(): webdriver.promise.ControlFlow;
		schedule<T>(command: Command, description: string): webdriver.promise.Promise<T>;
		setFileDetector(detector: FileDetector): void;
		getSession(): webdriver.promise.Promise<Session>;
		getCapabilities(): webdriver.promise.Promise<Capabilities>;
		quit(): webdriver.promise.Promise<void>;
		actions(): ActionSequence;
		touchActions(): TouchSequence;
		executeScript<T>(script: string, ...var_args: any[]): webdriver.promise.Promise<T>;
		executeScript<T>(script: Function, ...var_args: any[]): webdriver.promise.Promise<T>;
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
		findElement(locatorOrElement: Locator | By.Hash | WebElement | Function): WebElementPromise;
		isElementPresent(
		locatorOrElement: Locator | By.Hash | WebElement | Function
	): webdriver.promise.Promise<boolean>;
		findElements(locator: Locator | By.Hash | Function): webdriver.promise.Promise<WebElement[]>;
		takeScreenshot(): webdriver.promise.Promise<string>;
		manage(): WebDriverOptions;
		navigate(): WebDriverNavigation;
		switchTo(): WebDriverTargetLocator
	}

	declare class WebElement extends Serializable<IWebElementId> {
		constructor(driver: WebDriver, id: webdriver.promise.Promise<IWebElementId> | IWebElementId): this;
		Id: IWebElementId;
		ELEMENT_KEY: string;
		getDriver(): WebDriver;
		findElement(locator: Locator | By.Hash | Function): WebElementPromise;
		isElementPresent(locator: Locator | By.Hash | Function): webdriver.promise.Promise<boolean>;
		findElements(locator: Locator | By.Hash | Function): webdriver.promise.Promise<WebElement[]>;
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
		getOuterHtml(): webdriver.promise.Promise<string>;
		getId(): webdriver.promise.Promise<IWebElementId>;
		getRawId(): webdriver.promise.Promise<string>;
		serialize(): webdriver.promise.Promise<IWebElementId>;
		getInnerHtml(): webdriver.promise.Promise<string>;
		equals(a: WebElement, b: WebElement): webdriver.promise.Promise<boolean>
	}

	declare class WebElementPromise extends WebElement, undefined$IThenable<WebElement> {
		cancel(opt_reason?: string): void;
		isPending(): boolean;
		then<R>(
		opt_callback?: (value: WebElement) => webdriver.promise.Promise<R>, opt_errback?: (error: any) => any
	): webdriver.promise.Promise<R>;
		then<R>(
		opt_callback?: (value: WebElement) => R, opt_errback?: (error: any) => any
	): webdriver.promise.Promise<R>;
		thenCatch<R>(errback: (error: any) => any): webdriver.promise.Promise<R>;
		thenFinally<R>(callback: () => any): webdriver.promise.Promise<R>
	}

	declare class Locator  {
		constructor(using: string, value: string): this;
		Strategy: {
		className: typeof undefined,
		css: typeof undefined,
		id: typeof undefined,
		js: typeof undefined,
		linkText: typeof undefined,
		name: typeof undefined,
		partialLinkText: typeof undefined,
		tagName: typeof undefined,
		xpath: typeof undefined
	};
		checkLocator(value: any): Locator | Function;
		using: string;
		value: string;
		toString(): string
	}

	declare class Session  {
		constructor(id: string, capabilities: Capabilities): this;
		constructor(id: string, capabilities: any): this;
		getId(): string;
		getCapabilities(): Capabilities;
		getCapability(key: string): any;
		toJSON(): string
	}

	
}

declare module 'By' {
	declare type Hash = {
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

		declare function className(value: string): Locator

	declare function css(value: string): Locator

	declare function id(value: string): Locator

	declare function linkText(value: string): Locator

	declare function js(
		script: any, ...var_args: any[]
	): (WebDriver: webdriver.WebDriver) => webdriver.promise.Promise<any>

	declare function name(value: string): Locator

	declare function partialLinkText(value: string): Locator

	declare function tagName(value: string): Locator

	declare function xpath(value: string): Locator

		
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

declare module 'selenium-webdriver/firefox' {
					declare module.exports: undefined


}

declare module 'selenium-webdriver/executors' {
					declare module.exports: undefined


}

declare module 'selenium-webdriver/testing' {
					declare module.exports: undefined


}


declare module 'log4javascript' {
					
}

declare module 'npm$namespace$log4javascript' {
			declare export function getLogger(loggerName?: string): Logger

	declare export function getDefaultLogger(): Logger

	declare export function getNullLogger(): Logger

	declare export function getRootLogger(): Logger

	declare export function resetConfiguration(): void

	declare export function setEnabled(enabled: boolean): void

	declare export function isEnabled(): boolean

	declare export function addEventListener(
		eventType: string, listener: {
		(sender: any, eventType: string, eventArgs: any): void
	}
	): void

	declare export function removeEventListener(
		eventType: string, listener: {
		(sender: any, eventType: string, eventArgs: any): void
	}
	): void

	declare export function dispatchEvent(eventType: string, eventArgs: any): void

	declare export function setEventTypes(eventTypes: string[]): void

	declare export function setShowStackTraces(show: boolean): void

	declare export function evalInScope(expr: string): any

	declare export class Level  {
		ALL: Level;
		TRACE: Level;
		DEBUG: Level;
		INFO: Level;
		WARN: Level;
		ERROR: Level;
		FATAL: Level;
		OFF: Level;
		constructor(level: number, name: string): this;
		toString(): string;
		equals(level: Level): boolean;
		isGreaterOrEqual(level: Level): boolean
	}

	declare export class Logger  {
		addAppender(appender: Appender): void;
		removeAppender(appender: Appender): void;
		removeAllAppenders(): void;
		getEffectiveAppenders(): Appender[];
		setLevel(level: Level): void;
		getLevel(): Level;
		getEffectiveLevel(): Level;
		setAdditivity(additivity: boolean): void;
		getAdditivity(): boolean;
		log(level: Level, params: any[]): void;
		trace(...messages: any[]): void;
		debug(...messages: any[]): void;
		info(...messages: any[]): void;
		warn(...messages: any[]): void;
		error(...messages: any[]): void;
		fatal(...messages: any[]): void;
		isEnabledFor(level: Level, exception: Error): boolean;
		isTraceEnabled(): boolean;
		isDebugEnabled(): boolean;
		isInfoEnabled(): boolean;
		isWarnEnabled(): boolean;
		isErrorEnabled(): boolean;
		isFatalEnabled(): boolean;
		group(name: string, initiallyExpanded?: boolean): void;
		groupEnd(): void;
		time(name: string, level?: Level): void;
		timeEnd(name: string): void;
		assert(expr: any): void;
		name: string
	}

	declare export class LoggingEvent  {
		logger: Logger;
		timeStamp: Date;
		timeStampInMilliseconds: number;
		timeStampInSeconds: number;
		milliseconds: number;
		level: Level;
		messages: any[];
		exception: Error;
		constructor(logger: Logger, timeStamp: Date, level: Level, messages: string[], exception?: Error): this;
		getThrowableStrRep: () => string;
		getCombinedMessages: () => string;
		toString: () => string
	}

	declare export class Appender  {
		doAppend(loggingEvent: LoggingEvent): void;
		append(loggingEvent: LoggingEvent): void;
		setLayout(layout: Layout): void;
		getLayout(): Layout;
		setThreshold(level: Level): void;
		getThreshold(): Level;
		toString(): string
	}

	declare export class AlertAppender extends Appender {
		constructor(): this
	}

	declare export class AjaxAppender extends Appender {
		constructor(url: string, withCredentials?: boolean): this;
		setSendAllOnUnload(sendAllOnUnload: boolean): void;
		isSendAllOnUnload(): boolean;
		setPostVarName(postVarName: string): void;
		getPostVarName(): string;
		setTimed(timed: boolean): void;
		isTimed(): boolean;
		setWaitForResponse(waitForResponse: boolean): void;
		isWaitForResponse(): boolean;
		setBatchSize(batchSize: number): void;
		getBatchSize(): number;
		setTimerInterval(timerInterval: number): void;
		getTimerInterval(): number;
		setRequestSuccessCallback(requestSuccessCallback: {
		(xmlHttp: XMLHttpRequest): void
	}): void;
		setFailCallback(failCallback: {
		(message: string): void
	}): void;
		setSessionId(sessionId: string): void;
		getSessionId(): string;
		addHeader(name: string, value: string): void;
		getHeaders(): Array<{
		name: string,
		value: string
	}>;
		sendAll(): void
	}

	declare export class PopUpAppender extends Appender {
		constructor(lazyInit?: boolean, initiallyMinimized?: boolean, useDocumentWrite?: boolean, width?: number, height?: number): this;
		isInitiallyMinimized(): boolean;
		setInitiallyMinimized(initiallyMinimized: boolean): void;
		isFocusPopUp(): boolean;
		setFocusPopUp(focusPopUp: boolean): void;
		isUseOldPopUp(): boolean;
		setUseOldPopUp(useOldPopUp: boolean): void;
		isComplainAboutPopUpBlocking(): boolean;
		setComplainAboutPopUpBlocking(complainAboutPopUpBlocking: boolean): void;
		isNewestMessageAtTop(): boolean;
		setNewestMessageAtTop(newestMessageAtTop: boolean): void;
		isScrollToLatestMessage(): boolean;
		setScrollToLatestMessage(scrollToLatestMessage: boolean): void;
		isReopenWhenClosed(): boolean;
		setReopenWhenClosed(reopenWhenClosed: boolean): void;
		getWidth(): number;
		setWidth(width: number): void;
		getHeight(): number;
		setHeight(height: number): void;
		getMaxMessages(): number;
		setMaxMessages(maxMessages: number): void;
		isShowCommandLine(): boolean;
		setShowCommandLine(showCommandLine: boolean): void;
		getCommandLineObjectExpansionDepth(): number;
		setCommandLineObjectExpansionDepth(expansionDepth: number): void;
		getCommandWindow(): Window;
		setCommandWindow(commandWindow: Window): void;
		getCommandLayout(): Layout;
		setCommandLayout(commandLayout: Layout): void;
		clear(): void;
		close(): void;
		show(): void;
		hide(): void;
		focus(): void;
		focusCommandLine(): void;
		focusSearch(): void;
		evalCommandAndAppend(expr: string): void;
		addCommandLineFunction(
		functionName: string, commandLineFunction: {
		(appender: Appender, args: any, returnValue: {
		appendResult: boolean,
		isError: boolean
	}): any
	}
	): void
	}

	declare export class InPageAppender extends Appender {
		constructor(container: HTMLElement, lazyInit?: boolean, initiallyMinimized?: boolean, useDocumentWrite?: boolean, width?: number, height?: number): this;
		addCssProperty(name: string, value: string): void;
		isVisible(): boolean;
		isInitiallyMinimized(): boolean;
		setInitiallyMinimized(initiallyMinimized: boolean): void;
		isNewestMessageAtTop(): boolean;
		setNewestMessageAtTop(newestMessageAtTop: boolean): void;
		isScrollToLatestMessage(): boolean;
		setScrollToLatestMessage(scrollToLatestMessage: boolean): void;
		getWidth(): number;
		setWidth(width: number): void;
		getHeight(): number;
		setHeight(height: number): void;
		getMaxMessages(): number;
		setMaxMessages(maxMessages: number): void;
		isShowCommandLine(): boolean;
		setShowCommandLine(showCommandLine: boolean): void;
		getCommandLineObjectExpansionDepth(): number;
		setCommandLineObjectExpansionDepth(expansionDepth: number): void;
		getCommandWindow(): Window;
		setCommandWindow(commandWindow: Window): void;
		getCommandLayout(): Layout;
		setCommandLayout(commandLayout: Layout): void;
		clear(): void;
		close(): void;
		show(): void;
		hide(): void;
		focus(): void;
		focusCommandLine(): void;
		focusSearch(): void;
		evalCommandAndAppend(expr: string): void;
		addCommandLineFunction(
		functionName: string, commandLineFunction: {
		(appender: Appender, args: any, returnValue: {
		appendResult: boolean,
		isError: boolean
	}): any
	}
	): void
	}

	declare export class BrowserConsoleAppender extends Appender {
		constructor(): this
	}

	declare export class Layout  {
		format(loggingEvent: LoggingEvent): string;
		ignoresThrowable(): boolean;
		getContentType(): string;
		allowBatching(): boolean;
		getDataValues(loggingEvent: LoggingEvent): Array<any>;
		setKeys(
		loggerKey: string, timeStampKey: string, levelKey: string, messageKey: string, exceptionKey: string, urlKey: string
	): void;
		setCustomField(name: string, value: string): string;
		hasCustomFields(): boolean;
		formatWithException(loggingEvent: LoggingEvent): string
	}

	declare export class NullLayout extends Layout {
		constructor(): this
	}

	declare export class SimpleLayout extends Layout {
		constructor(): this
	}

	declare export class PatternLayout extends Layout {
		TTCC_CONVERSION_PATTERN: string;
		DEFAULT_CONVERSION_PATTERN: string;
		ISO8601_DATEFORMAT: string;
		DATETIME_DATEFORMAT: string;
		ABSOLUTETIME_DATEFORMAT: string;
		constructor(pattern: string): this
	}

	declare export class XmlLayout extends Layout {
		constructor(combineMessages?: boolean): this
	}

	declare export class JsonLayout extends Layout {
		constructor(readable?: boolean, combineMessages?: boolean): this;
		isReadable(): boolean
	}

	declare export class HttpPostDataLayout extends Layout {
		constructor(): this
	}

	
}

declare module 'logLog' {
			declare export function setQuietMode(quietMode: boolean): void

	declare export function setAlertAllErrors(alertAllErrors: boolean): void

	declare export function debug(message: string, exception?: Error): void

	declare export function displayDebug(): void

	declare export function warn(message: string, exception?: Error): void

	declare export function error(message: string, exception?: Error): void

		
}
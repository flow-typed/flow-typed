

declare module 'google-apps-script.script' {
					
}

declare module 'Script' {
		declare export interface AuthorizationInfo {
		getAuthorizationStatus(): AuthorizationStatus,
		getAuthorizationUrl(): string
	}

	declare export interface ClockTriggerBuilder {
		after(durationMilliseconds: Integer): ClockTriggerBuilder,
		at(date: Date): ClockTriggerBuilder,
		atDate(year: Integer, month: Integer, day: Integer): ClockTriggerBuilder,
		atHour(hour: Integer): ClockTriggerBuilder,
		create(): Trigger,
		everyDays(n: Integer): ClockTriggerBuilder,
		everyHours(n: Integer): ClockTriggerBuilder,
		everyMinutes(n: Integer): ClockTriggerBuilder,
		everyWeeks(n: Integer): ClockTriggerBuilder,
		inTimezone(timezone: string): ClockTriggerBuilder,
		nearMinute(minute: Integer): ClockTriggerBuilder,
		onMonthDay(day: Integer): ClockTriggerBuilder,
		onWeekDay(day: Base.Weekday): ClockTriggerBuilder
	}

	declare export interface DocumentTriggerBuilder {
		create(): Trigger,
		onOpen(): DocumentTriggerBuilder
	}

	declare export interface FormTriggerBuilder {
		create(): Trigger,
		onFormSubmit(): FormTriggerBuilder,
		onOpen(): FormTriggerBuilder
	}

	declare export interface ScriptApp {
		AuthMode: AuthMode,
		AuthorizationStatus: AuthorizationStatus,
		EventType: EventType,
		InstallationSource: InstallationSource,
		TriggerSource: TriggerSource,
		WeekDay: Base.Weekday,
		deleteTrigger(trigger: Trigger): void,
		getAuthorizationInfo(authMode: AuthMode): AuthorizationInfo,
		getInstallationSource(): InstallationSource,
		getOAuthToken(): string,
		getProjectKey(): string,
		getProjectTriggers(): Trigger[],
		getService(): Service,
		getUserTriggers(document: Document.Document): Trigger[],
		getUserTriggers(form: Forms.Form): Trigger[],
		getUserTriggers(spreadsheet: Spreadsheet.Spreadsheet): Trigger[],
		invalidateAuth(): void,
		newStateToken(): StateTokenBuilder,
		newTrigger(functionName: string): TriggerBuilder,
		getScriptTriggers(): Trigger[]
	}

	declare export interface SpreadsheetTriggerBuilder {
		create(): Trigger,
		onChange(): SpreadsheetTriggerBuilder,
		onEdit(): SpreadsheetTriggerBuilder,
		onFormSubmit(): SpreadsheetTriggerBuilder,
		onOpen(): SpreadsheetTriggerBuilder
	}

	declare export interface StateTokenBuilder {
		createToken(): string,
		withArgument(name: string, value: string): StateTokenBuilder,
		withMethod(method: string): StateTokenBuilder,
		withTimeout(seconds: Integer): StateTokenBuilder
	}

	declare export interface Trigger {
		getEventType(): EventType,
		getHandlerFunction(): string,
		getTriggerSource(): TriggerSource,
		getTriggerSourceId(): string,
		getUniqueId(): string
	}

	declare export interface TriggerBuilder {
		forDocument(document: Document.Document): DocumentTriggerBuilder,
		forDocument(key: string): DocumentTriggerBuilder,
		forForm(form: Forms.Form): FormTriggerBuilder,
		forForm(key: string): FormTriggerBuilder,
		forSpreadsheet(sheet: Spreadsheet.Spreadsheet): SpreadsheetTriggerBuilder,
		forSpreadsheet(key: string): SpreadsheetTriggerBuilder,
		timeBased(): ClockTriggerBuilder
	}

			
}
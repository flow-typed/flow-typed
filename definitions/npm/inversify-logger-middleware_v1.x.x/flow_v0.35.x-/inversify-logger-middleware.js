

declare module 'inversify-logger-middleware' {
					declare module.exports: undefined


}

declare module 'interfaces' {
		declare export interface LoggerSettings {
		request?: RequestLoggerSettings,
		time?: boolean
	}

	declare export interface RequestLoggerSettings {
		serviceIdentifier?: boolean,
		bindings?: BindingLoggerSettings,
		target?: TargetLoggerSettings
	}

	declare export interface BindingLoggerSettings {
		activated?: boolean,
		serviceIdentifier?: boolean,
		implementationType?: boolean,
		factory?: boolean,
		provider?: boolean,
		constraint?: boolean,
		onActivation?: boolean,
		cache?: boolean,
		dynamicValue?: boolean,
		scope?: boolean,
		type?: boolean
	}

	declare export interface TargetLoggerSettings {
		serviceIdentifier?: boolean,
		name?: boolean,
		metadata?: boolean
	}

	declare export interface LogEntry {
		error: boolean,
		exception: any,
		guid: string,
		multiInject: boolean,
		results: any[],
		rootRequest: inversify.interfaces.Request,
		serviceIdentifier: any,
		target: any,
		time: string
	}

			
}

declare module 'npm$namespace$inversifyLoggerMiddleware' {
			declare export function makeLoggerMiddleware(
		settings?: interfaces.LoggerSettings, renderer?: (out: interfaces.LogEntry) => void
	): inversify.interfaces.Middleware

	declare export function textSerializer(entry: interfaces.LogEntry): string

	declare export function bindingTypeFormatter(type: number): string

	declare export function scopeFormatter(scope: number): string

		
}
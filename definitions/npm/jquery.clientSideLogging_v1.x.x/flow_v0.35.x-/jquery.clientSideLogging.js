

declare module 'jquery.clientSideLogging' {
		declare interface ClientSideLoggingClientInfoObject {
		location?: boolean,
		screen_size?: boolean,
		user_agent?: boolean,
		window_size?: boolean
	}

	declare interface ClientSideLoggingObject {
		error_url?: string,
		info_url?: string,
		log_url?: string,
		log_level?: number,
		native_error?: boolean,
		hijack_console?: boolean,
		query_var?: string,
		client_info?: ClientSideLoggingClientInfoObject
	}

	declare interface JQueryStatic {
		info: (what?: any) => any,
		log: (what?: any) => any,
		clientSideLogging: (options: ClientSideLoggingObject) => any
	}

			
}
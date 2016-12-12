

declare module 'angular-environment' {
					
}

declare module 'environment' {
		declare interface ServiceProvider {
		config: (config: angular.environment.Config) => void,
		check: () => void,
		read: (key: string) => any
	}

	declare interface Service {
		get: () => string,
		set: (environment: string) => void,
		is: (environment: string) => boolean,
		read: (key: string) => any
	}

	declare interface Config {
		domains: {
		[environment: string]: Array<string>
	},
		vars: {
		[environment: string]: {
		[variable: string]: any
	}
	}
	}

			
}
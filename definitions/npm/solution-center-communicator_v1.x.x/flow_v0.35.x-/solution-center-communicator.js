

declare module 'solution-center-communicator' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ScCommunicator' {
		declare interface Environment {
		NAME: string,
		URL: string,
		DOMAIN: string,
		PORT?: string,
		USER_SERVICE?: string,
		TOKEN_SERVICE?: string,
		MERCHANT_SERVICE?: string,
		GOODDATA_SERVICE?: string,
		MODULE_SERVICE?: string
	}

	declare interface Environments {
		PRODUCTION: Environment,
		STAGE: Environment,
		INTEGRATION: Environment,
		DEVELOPMENT: Environment,
		LOCAL: Environment,
		TESTING: Environment
	}

	declare interface ScEnvironmentsProvider {
		getCurrentEnvironment(): Environment,
		getSpecificEnvironment(name: string): Environment,
		setCurrentEnvironment(env: any): Environment,
		$get(): any
	}

			
}
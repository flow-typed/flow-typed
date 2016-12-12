

declare module 'aws-lambda' {
	declare export type Callback = (error?: Error, result?: any) => void;

	declare interface Context {
		callbackWaitsForEmptyEventLoop: boolean,
		functionName: string,
		functionVersion: string,
		invokedFunctionArn: string,
		memoryLimitInMB: number,
		awsRequestId: string,
		logGroupName: string,
		logStreamName: string,
		identity?: CognitoIdentity,
		clientContext?: ClientContext,
		getRemainingTimeInMillis(): number,
		done(error?: Error, result?: any): void,
		fail(error: Error): void,
		fail(message: string): void,
		succeed(message: string): void,
		succeed(object: any): void,
		succeed(message: string, object: any): void
	}

	declare interface CognitoIdentity {
		cognitoIdentityId: string,
		cognitoIdentityPoolId: string
	}

	declare interface ClientContext {
		client: ClientContextClient,
		Custom?: any,
		env: ClientContextEnv
	}

	declare interface ClientContextClient {
		installationId: string,
		appTitle: string,
		appVersionName: string,
		appVersionCode: string,
		appPackageName: string
	}

	declare interface ClientContextEnv {
		platformVersion: string,
		platform: string,
		make: string,
		model: string,
		locale: string
	}

			
}
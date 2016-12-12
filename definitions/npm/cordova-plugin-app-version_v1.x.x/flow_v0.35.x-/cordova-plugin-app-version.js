

declare module 'cordova-plugin-app-version' {
		declare interface Cordova {
		getAppVersion: {
		getAppName: () => Q.IPromise<string> | JQueryPromise<string>,
		getPackageName: () => Q.IPromise<string> | JQueryPromise<string>,
		getVersionCode: () => Q.IPromise<string> | JQueryPromise<string>,
		getVersionNumber: () => Q.IPromise<string> | JQueryPromise<string>
	}
	}

			
}
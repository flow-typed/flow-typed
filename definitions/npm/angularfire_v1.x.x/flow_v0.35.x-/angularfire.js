

declare module 'angularfire' {
		declare interface AngularFireService {
		(firebase: Firebase, config?: any): AngularFire
	}

	declare interface AngularFire {
		$asArray(): AngularFireArray,
		$asObject(): AngularFireObject,
		$ref(): Firebase,
		$push(data: any): ng.IPromise<Firebase>,
		$set(key: string, data: any): ng.IPromise<Firebase>,
		$set(data: any): ng.IPromise<Firebase>,
		$remove(key?: string): ng.IPromise<Firebase>,
		$update(key: string, data: Object): ng.IPromise<Firebase>,
		$update(data: any): ng.IPromise<Firebase>,
		$transaction(
		updateFn: (currentData: any) => any, applyLocally?: boolean
	): ng.IPromise<FirebaseDataSnapshot>,
		$transaction(
		key: string, updateFn: (currentData: any) => any, applyLocally?: boolean
	): ng.IPromise<FirebaseDataSnapshot>
	}

	declare interface AngularFireObject {
		$id: string,
		$priority: number,
		$value: any,
		$remove(): ng.IPromise<Firebase>,
		$save(): ng.IPromise<Firebase>,
		$loaded(
		resolve?: (x: AngularFireObject) => ng.IHttpPromise<{
		
	}>, reject?: (err: any) => any
	): ng.IPromise<AngularFireObject>,
		$loaded(
		resolve?: (x: AngularFireObject) => ng.IPromise<{
		
	}>, reject?: (err: any) => any
	): ng.IPromise<AngularFireObject>,
		$loaded(
		resolve?: (x: AngularFireObject) => void, reject?: (err: any) => any
	): ng.IPromise<AngularFireObject>,
		$ref(): Firebase,
		$bindTo(scope: ng.IScope, varName: string): ng.IPromise<any>,
		$watch(callback: Function, context?: any): Function,
		$destroy(): void
	}

	declare interface AngularFireObjectService {
		(firebase: Firebase): AngularFireObject,
		$extend(ChildClass: Object, methods?: Object): Object
	}

	declare interface AngularFireArray {
		$add(newData: any): ng.IPromise<Firebase>,
		$save(recordOrIndex: any): ng.IPromise<Firebase>,
		$remove(recordOrIndex: any): ng.IPromise<Firebase>,
		$getRecord(key: string): AngularFireSimpleObject,
		$keyAt(recordOrIndex: any): string,
		$indexFor(key: string): number,
		$loaded(
		resolve?: (x: AngularFireArray) => ng.IHttpPromise<{
		
	}>, reject?: (err: any) => any
	): ng.IPromise<AngularFireArray>,
		$loaded(
		resolve?: (x: AngularFireArray) => ng.IPromise<{
		
	}>, reject?: (err: any) => any
	): ng.IPromise<AngularFireArray>,
		$loaded(
		resolve?: (x: AngularFireArray) => void, reject?: (err: any) => any
	): ng.IPromise<AngularFireArray>,
		$ref(): Firebase,
		$watch(
		cb: (event: string, key: string, prevChild: string) => void, context?: any
	): Function,
		$destroy(): void
	}

	declare interface AngularFireArrayService {
		(firebase: Firebase): AngularFireArray,
		$extend(ChildClass: Object, methods?: Object): Object
	}

	declare interface AngularFireSimpleObject {
		$id: string,
		$priority: number,
		$value: any,
		[key: string]: any
	}

	declare interface AngularFireAuthService {
		(firebase: Firebase): AngularFireAuth
	}

	declare interface AngularFireAuth {
		$authWithCustomToken(authToken: string, options?: Object): ng.IPromise<any>,
		$authAnonymously(options?: Object): ng.IPromise<any>,
		$authWithPassword(credentials: FirebaseCredentials, options?: Object): ng.IPromise<any>,
		$authWithOAuthPopup(provider: string, options?: Object): ng.IPromise<any>,
		$authWithOAuthRedirect(provider: string, options?: Object): ng.IPromise<any>,
		$authWithOAuthToken(
		provider: string, credentials: Object | string, options?: Object
	): ng.IPromise<any>,
		$getAuth(): FirebaseAuthData,
		$onAuth(callback: Function, context?: any): Function,
		$unauth(): void,
		$waitForAuth(): ng.IPromise<any>,
		$requireAuth(): ng.IPromise<any>,
		$createUser(credentials: FirebaseCredentials): ng.IPromise<any>,
		$removeUser(credentials: FirebaseCredentials): ng.IPromise<any>,
		$changeEmail(credentials: FirebaseChangeEmailCredentials): ng.IPromise<any>,
		$changePassword(credentials: FirebaseChangePasswordCredentials): ng.IPromise<any>,
		$resetPassword(credentials: FirebaseResetPasswordCredentials): ng.IPromise<any>
	}

			
}
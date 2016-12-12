

declare module 'angular-meteor' {
					
}

declare module 'meteor' {
		declare interface IRootScopeService {
		currentUser: Meteor.User,
		loggingIn: boolean
	}

	declare interface IScope {
		getReactively(scopeVariableName: string, objectEquality?: boolean): ReactiveResult,
		subscribe(
		name: string, ...publisherArguments: any[]
	): angular.IPromise<Meteor.SubscriptionHandle>,
		helpers(definitions: {
		[helperName: string]: () => Mongo.Cursor<any>
	}): IScope,
		autorun(runFunc: () => void): Tracker.Computation
	}

	declare interface IMeteorService {
		collection<T>(
		collection: Mongo.Collection<T> | ReactiveResult | Function | (() => T), autoClientSave?: boolean
	): AngularMeteorCollection<T>,
		collection<T, U>(
		collection: Mongo.Collection<T> | ReactiveResult | Function | (() => T), autoClientSave: boolean, updateCollection: Mongo.Collection<U>
	): AngularMeteorCollection2<T, U>,
		object<T>(
		collection: Mongo.Collection<T>, selector: Mongo.Selector | Mongo.ObjectID | string, autoClientSave?: boolean
	): AngularMeteorObject<T>,
		subscribe(
		name: string, ...publisherArguments: any[]
	): angular.IPromise<Meteor.SubscriptionHandle>,
		call<T>(name: string, ...methodArguments: any[]): angular.IPromise<T>,
		waitForUser(): angular.IPromise<Meteor.User>,
		requireUser(): angular.IPromise<Meteor.User>,
		requireValidUser(
		validatorFn: (user: Meteor.User) => boolean | string
	): angular.IPromise<Meteor.User>,
		loginWithPassword(
		user: string | {
		email: string
	} | {
		username: string
	} | {
		id: string
	}, password: string
	): angular.IPromise<void>,
		createUser(
		options: {
		username?: string,
		email?: string,
		password: string,
		profile?: Object
	}
	): angular.IPromise<void>,
		changePassword(oldPassword: string, newPassword: string): angular.IPromise<void>,
		forgotPassword(options: {
		email: string
	}): angular.IPromise<void>,
		resetPassword(token: string, newPassword: string): angular.IPromise<void>,
		verifyEmail(token: string): angular.IPromise<void>,
		loginWithFacebook: ILoginWithExternalService,
		loginWithTwitter: ILoginWithExternalService,
		loginWithGoogle: ILoginWithExternalService,
		loginWithGithub: ILoginWithExternalService,
		loginWithMeetup: ILoginWithExternalService,
		loginWithWeibo: ILoginWithExternalService,
		logout(): angular.IPromise<void>,
		logoutOtherClients(): angular.IPromise<void>,
		autorun(scope: angular.IScope, fn: Function): void,
		getCollectionByName<T>(collectionName: string): Mongo.Collection<T>,
		getPicture(
		options?: {
		width?: number,
		height?: number,
		quality?: number
	}
	): angular.IPromise<any>,
		session(sessionKey: string): {
		bind: (scope: IScope, model: string) => void
	}
	}

	declare interface AngularMeteorObject<T> {
		save(doc?: T): angular.IPromise<number>,
		reset(): void,
		getRawObject(): T,
		subscribe(subscriptionName: string): AngularMeteorObject<T>
	}

	declare interface AngularMeteorCollection<T> {
		
	}

	declare interface AngularMeteorCollection2<T, U> {
		save(docs?: U | U[]): void,
		remove(keys?: U | string | number | string[] | number[]): void,
		subscribe(subscriptionName: string): AngularMeteorCollection2<T, U>
	}

	declare interface ILoginWithExternalService {
		(options: Meteor.LoginWithExternalServiceOptions): angular.IPromise<void>
	}

	declare interface ReactiveResult {
		
	}

			
}
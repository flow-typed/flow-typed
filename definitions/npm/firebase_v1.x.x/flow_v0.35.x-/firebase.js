

declare module 'firebase' {
		declare interface FirebaseAuthResult {
		auth: any,
		expires: number
	}

	declare interface FirebaseDataSnapshot {
		exists(): boolean,
		val(): any,
		child(childPath: string): FirebaseDataSnapshot,
		forEach(childAction: (childSnapshot: FirebaseDataSnapshot) => void): boolean,
		forEach(childAction: (childSnapshot: FirebaseDataSnapshot) => boolean): boolean,
		hasChild(childPath: string): boolean,
		hasChildren(): boolean,
		key(): string,
		name(): string,
		numChildren(): number,
		ref(): Firebase,
		getPriority(): any,
		exportVal(): Object
	}

	declare interface FirebaseOnDisconnect {
		set(value: any, onComplete: (error: any) => void): void,
		set(value: any): Promise<void>,
		setWithPriority(value: any, priority: string | number, onComplete: (error: any) => void): void,
		setWithPriority(value: any, priority: string | number): Promise<void>,
		update(value: Object, onComplete: (error: any) => void): void,
		update(value: Object): Promise<void>,
		remove(onComplete: (error: any) => void): void,
		remove(): Promise<void>,
		cancel(onComplete: (error: any) => void): void,
		cancel(): Promise<void>
	}

	declare interface FirebaseQuery {
		on(
		eventType: string, callback: (dataSnapshot: FirebaseDataSnapshot, prevChildName?: string) => void, cancelCallback?: (error: any) => void, context?: Object
	): (dataSnapshot: FirebaseDataSnapshot, prevChildName?: string) => void,
		off(
		eventType?: string, callback?: (dataSnapshot: FirebaseDataSnapshot, prevChildName?: string) => void, context?: Object
	): void,
		once(
		eventType: string, successCallback: (dataSnapshot: FirebaseDataSnapshot) => void, context?: Object
	): void,
		once(
		eventType: string, successCallback: (dataSnapshot: FirebaseDataSnapshot) => void, failureCallback?: (error: any) => void, context?: Object
	): void,
		once(eventType: string): Promise<FirebaseDataSnapshot>,
		orderByChild(key: string): FirebaseQuery,
		orderByKey(): FirebaseQuery,
		orderByValue(): FirebaseQuery,
		orderByPriority(): FirebaseQuery,
		limit(limit: number): FirebaseQuery,
		startAt(value: string, key?: string): FirebaseQuery,
		startAt(value: number, key?: string): FirebaseQuery,
		endAt(value: string, key?: string): FirebaseQuery,
		endAt(value: number, key?: string): FirebaseQuery,
		equalTo(value: string | number | boolean, key?: string): FirebaseQuery,
		limitToFirst(limit: number): FirebaseQuery,
		limitToLast(limit: number): FirebaseQuery,
		ref(): Firebase
	}

	declare interface Firebase {
		auth(
		authToken: string, onComplete: (error: any, result: FirebaseAuthResult) => void, onCancel?: (error: any) => void
	): void,
		auth(authToken: string): Promise<FirebaseAuthResult>,
		authWithCustomToken(
		autoToken: string, onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object
	): void,
		authWithCustomToken(autoToken: string, options?: Object): Promise<FirebaseAuthData>,
		authAnonymously(
		onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object
	): void,
		authAnonymously(options?: Object): Promise<FirebaseAuthData>,
		authWithPassword(
		credentials: FirebaseCredentials, onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object
	): void,
		authWithPassword(credentials: FirebaseCredentials, options?: Object): Promise<FirebaseAuthData>,
		authWithOAuthPopup(
		provider: string, onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object
	): void,
		authWithOAuthPopup(provider: string, options?: Object): Promise<FirebaseAuthData>,
		authWithOAuthRedirect(provider: string, onComplete: (error: any) => void, options?: Object): void,
		authWithOAuthRedirect(provider: string, options?: Object): Promise<void>,
		authWithOAuthToken(
		provider: string, credentials: string | Object, onComplete: (error: any, authData: FirebaseAuthData) => void, options?: Object
	): void,
		authWithOAuthToken(
		provider: string, credentials: string | Object, options?: Object
	): Promise<FirebaseAuthData>,
		getAuth(): FirebaseAuthData,
		onAuth(onComplete: (authData: FirebaseAuthData) => void, context?: Object): void,
		offAuth(onComplete: (authData: FirebaseAuthData) => void, context?: Object): void,
		unauth(): void,
		child(childPath: string): Firebase,
		parent(): Firebase,
		root(): Firebase,
		key(): string,
		name(): string,
		toString(): string,
		set(value: any, onComplete: (error: any) => void): void,
		set(value: any): Promise<void>,
		update(value: Object, onComplete: (error: any) => void): void,
		update(value: Object): Promise<void>,
		remove(onComplete: (error: any) => void): void,
		remove(): Promise<void>,
		push(value?: any, onComplete?: (error: any) => void): FirebaseWithPromise<void>,
		setWithPriority(value: any, priority: string | number, onComplete: (error: any) => void): void,
		setWithPriority(value: any, priority: string | number): Promise<void>,
		setPriority(priority: string | number, onComplete: (error: any) => void): void,
		setPriority(priority: string | number): Promise<void>,
		transaction(
		updateFunction: (currentData: any) => any, onComplete?: (error: any, committed: boolean, snapshot: FirebaseDataSnapshot) => void, applyLocally?: boolean
	): void,
		createUser(
		credentials: FirebaseCredentials, onComplete: (error: any, userData: any) => void
	): void,
		changeEmail(
		credentials: FirebaseChangeEmailCredentials, onComplete: (error: any) => void
	): void,
		changePassword(
		credentials: FirebaseChangePasswordCredentials, onComplete: (error: any) => void
	): void,
		removeUser(credentials: FirebaseCredentials, onComplete: (error: any) => void): void,
		resetPassword(
		credentials: FirebaseResetPasswordCredentials, onComplete: (error: any) => void
	): void,
		onDisconnect(): FirebaseOnDisconnect
	}

	declare interface FirebaseWithPromise<T> {
		
	}

	declare interface FirebaseStatic {
		new (firebaseURL: string): Firebase,
		goOffline(): void,
		goOnline(): void,
		ServerValue: {
		TIMESTAMP: any
	}
	}

	declare interface FirebaseAuthData {
		uid: string,
		provider: string,
		token: string,
		expires: number,
		auth: Object,
		google?: FirebaseAuthDataGoogle,
		twitter?: FirebaseAuthDataTwitter,
		github?: FirebaseAuthDataGithub,
		facebook?: FirebaseAuthDataFacebook,
		password?: FirebaseAuthDataPassword,
		anonymous?: any
	}

	declare interface FirebaseAuthDataPassword {
		email: string,
		isTemporaryPassword: boolean,
		profileImageURL: string
	}

	declare interface FirebaseAuthDataTwitter {
		id: string,
		accessToken: string,
		accessTokenSecret: string,
		displayName: string,
		username: string,
		profileImageURL: string,
		cachedUserProfile: any
	}

	declare interface FirebaseAuthDataGithub {
		id: string,
		accessToken: string,
		displayName: string,
		email?: string,
		username: string,
		profileImageURL: string,
		cachedUserProfile: any
	}

	declare interface FirebaseAuthDataFacebook {
		id: string,
		accessToken: string,
		displayName: string,
		email?: string,
		profileImageURL: string,
		cachedUserProfile: any
	}

	declare interface FirebaseAuthDataGoogle {
		accessToken: string,
		cachedUserProfile: FirebaseAuthDataGoogleCachedUserProfile,
		displayName: string,
		email?: string,
		id: string,
		profileImageURL: string
	}

	declare interface FirebaseAuthDataGoogleCachedUserProfile {
		family name?: string,
		gender?: string,
		given name?: string,
		id?: string,
		link?: string,
		locale?: string,
		name?: string,
		picture?: string
	}

	declare interface FirebaseCredentials {
		email: string,
		password: string
	}

	declare interface FirebaseChangePasswordCredentials {
		email: string,
		oldPassword: string,
		newPassword: string
	}

	declare interface FirebaseChangeEmailCredentials {
		oldEmail: string,
		newEmail: string,
		password: string
	}

	declare interface FirebaseResetPasswordCredentials {
		email: string
	}

			declare module.exports: FirebaseStatic


}
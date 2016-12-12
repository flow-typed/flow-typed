

declare module 'firebase-client' {
		declare interface PushResponse {
		name: string
	}

	declare interface FirebaseConfig {
		url: string,
		auth: string
	}

	declare interface FirebaseClient {
		new (config: FirebaseConfig): FirebaseClient,
		get<T>(): Q.Promise<T>,
		get<T>(path: string): Q.Promise<T>,
		set<T>(path: string, data: T): Q.Promise<T>,
		update<T>(path: string, value: T): Q.Promise<T>,
		delete(path: string): Q.Promise<void>,
		push<T>(path: string, value: T): Q.Promise<PushResponse>
	}

			declare module.exports: FirebaseClient


}
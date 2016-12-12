

declare module 'service_worker_api' {
		declare interface Body {
		bodyUsed: boolean,
		arrayBuffer(): Promise<ArrayBuffer>,
		blob(): Promise<Blob>,
		formData(): Promise<FormData>,
		json(): Promise<JSON>,
		text(): Promise<Text>
	}

	declare interface Header {
		new (): Header,
		append(name: string, value: string): void,
		delete(name: string): void,
		get(name: string): string,
		getAll(name: string): Array<string>,
		has(name: string): boolean,
		set(name: string, value: string): void
	}

	declare interface Response {
		new (): Response,
		type: string,
		url: string,
		useFinalURL: boolean,
		status: number,
		ok: boolean,
		statusText: string,
		headers: Header,
		clone(): Response,
		error(): Response,
		redirect(): Response
	}

	declare interface Request {
		new (): Request,
		method: string,
		url: string,
		headers: Header,
		context: string,
		referrer: string,
		mode: string,
		credentials: string,
		cache: string,
		clone(): Request
	}

	declare interface CacheOptions {
		ignoreSearch?: boolean,
		ignoreMethod?: boolean,
		ignoreVary?: boolean,
		cacheName?: string
	}

	declare interface Cache {
		match(request: Request | string, options?: CacheOptions): Promise<Response>,
		matchAll(request: Request | string, options?: CacheOptions): Promise<Array<Response>>,
		add(request: Request | string): Promise<void>,
		addAll(...request: Array<Request | string>): Promise<void>,
		put(request: Request, response: Response): Promise<void>,
		delete(request: Request | string, options?: CacheOptions): Promise<boolean>,
		keys(request?: Request, options?: CacheOptions): Promise<Array<Request>>
	}

	declare interface CacheStorage {
		match(request: Request | string, options?: CacheOptions): Promise<Response>,
		has(cacheName: string): Promise<boolean>,
		open(cacheName: string): Promise<Cache>,
		delete(cacheName: string): Promise<boolean>,
		keys(): Promise<Array<string>>
	}

	declare interface ServiceWorkerClient {
		postMessage(message: string, transfer?: Object): void,
		frameType: string,
		id: string,
		url: string
	}

	declare interface WindowClient {
		focus(): Promise<WindowClient>,
		focused: boolean,
		visibilityState: string
	}

	declare interface ServiceWorkerClientsMatchOptions {
		includeUncontrolled?: boolean,
		type?: string
	}

	declare interface ServiceWorkerClients {
		matchAll(options: ServiceWorkerClientsMatchOptions): Promise<Array<ServiceWorkerClient>>,
		openWindow(url: string): Promise<WindowClient>,
		claim(): Promise<void>
	}

	declare interface ExtendableEvent {
		waitUntil(all: any): any
	}

	declare interface FetchEvent {
		isReload: boolean,
		request: Request,
		client: ServiceWorkerClient,
		respondWith(all: any): Response
	}

	declare interface ServiceWorker {
		scriptURL: string,
		state: string,
		onstatechange: (statechangeevent?: any) => void
	}

	declare interface PushSubscription {
		endpoint: any,
		subscriptionId: any
	}

	declare interface PushManager {
		subscribe(): Promise<PushSubscription>,
		getSubscription(): Promise<PushSubscription>,
		hasPermission(): Promise<any>
	}

	declare interface ServiceWorkerRegistration {
		scope: any,
		installing: ServiceWorker,
		waiting: ServiceWorker,
		active: ServiceWorker,
		pushManager: PushManager,
		onupdatefound: () => void,
		update(): void,
		unregister(): Promise<boolean>
	}

	declare interface ServiceWorkerRegisterOptions {
		scope: string
	}

	declare interface ServiceWorkerContainer {
		controller: ServiceWorker,
		ready: Promise<ServiceWorkerRegistration>,
		oncontrollerchange: (controllerchangeevent?: Event) => void,
		onerror: (errorevent?: ErrorEvent) => void,
		onmessage: (messageevent?: MessageEvent) => void,
		register(
		scriptURL: string, options?: ServiceWorkerRegisterOptions
	): Promise<ServiceWorkerRegistration>,
		getRegistration(scope?: string): Promise<ServiceWorkerRegistration>,
		getRegistrations(): Promise<Array<ServiceWorkerRegistration>>
	}

	declare interface InstallEvent {
		activeWorker: ServiceWorker
	}

	declare interface ServiceWorkerGlobalScope {
		clients: ServiceWorkerClients,
		registration: ServiceWorkerRegistration,
		onactivate: (activateevent?: ExtendableEvent) => void,
		onbeforeevicted: (beforeevictedevent?: Event) => void,
		onevicted: (evictedevent?: Event) => void,
		onfetch: (fetchevent?: FetchEvent) => void,
		oninstall: (installevent?: InstallEvent) => void,
		onmessage: (messageevent?: MessageEvent) => void,
		onnotificationclick: (notificationclickevent?: NotificationEvent) => void,
		onpush: (onpushevent?: Event) => void,
		onpushsubscriptionchange: (pushsubscriptionchangeevent?: Event) => void,
		skipWaiting(): Promise<void>,
		fetch(url: string | Request, init?: Object): Promise<Response>
	}

	declare interface Navigator {
		serviceWorker: ServiceWorkerContainer
	}

	declare interface Window {
		caches: CacheStorage
	}

	declare interface NotificationEvent {
		notification: any
	}

			
}
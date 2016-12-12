

declare module 'dropboxjs' {
					
}

declare module 'npm$namespace$Dropbox' {
		declare interface QueryParams {
		[key: string]: any
	}

	declare interface Credentials {
		key: string,
		secret?: string,
		token?: string,
		uid?: string
	}

	declare interface AuthenticateCallback {
		(err: ApiError, client: Client): void,
		(err: AuthError, client: Client): void
	}

	declare interface QueryParamsCallback {
		(queryParams: QueryParams): void
	}

	declare interface ClientFileReadCallback {
		(err: ApiError, fileContents: string, stat: File.Stat, rangeInfo: Http.RangeInfo): void
	}

	declare interface ClientFileWriteCallback {
		(err: ApiError, stat: File.Stat): void
	}

	declare interface ResumableUploadStepCallback {
		(err: ApiError, uploadCursor: Http.UploadCursor): void
	}

	declare interface ReadThumbnailCallback {
		(err: ApiError, imageData: string, stat: File.Stat): void,
		(err: ApiError, imageData: Blob, stat: File.Stat): void
	}

	declare interface FileStatCallback {
		(err: ApiError, stat: File.Stat): void
	}

	declare interface AuthenticateOptions {
		interactive: boolean
	}

	declare interface SingOutOptions {
		mustInvalidate: boolean
	}

	declare interface AccountInfoOptions {
		httpCache: boolean
	}

	declare interface ClientFileReadOptions {
		versionTag?: string,
		rev?: string,
		arrayBuffer?: boolean,
		blob?: boolean,
		buffer?: boolean,
		binary?: boolean,
		length?: number,
		start?: number,
		httpCache?: boolean
	}

	declare interface ClientFileWriteOptions {
		lastVersionTag?: string,
		parentRev?: string,
		noOverwrite?: boolean
	}

	declare interface ReadDirOptions {
		removed?: boolean,
		deleted?: boolean,
		limit?: any,
		versionTag?: string,
		contentHash?: string,
		httpCache?: boolean
	}

	declare interface MakeURLOptions {
		download?: boolean,
		downloadHack?: boolean,
		long?: boolean,
		longUrl?: boolean
	}

	declare interface HistoryOptions {
		limit?: number,
		httpCache?: boolean
	}

	declare interface ThumbnailUrlOptions {
		png?: boolean,
		format?: string,
		size?: string
	}

	declare interface ReadThumbnailOptions {
		arrayBuffer?: boolean,
		blob?: boolean,
		buffer?: boolean
	}

	declare interface FindByNameOptions {
		limit?: number,
		removed?: boolean,
		deleted?: boolean,
		httpCache?: boolean
	}

	declare interface RedirectOptions {
		redirectUrl?: string,
		redirectFile?: string,
		scope?: string,
		rememberUser?: boolean
	}

		declare class AuthDriver  {
		authType(): string;
		url(): string;
		doAuthorize(
		authUrl: string, stateParam: string, client: Client, callback: QueryParamsCallback
	): void;
		getStateParam(client: Client, callback: (state: string) => void): void;
		resumeAuthorize(stateParam: string, client: Client, callback: QueryParamsCallback): void;
		onAuthStepChange(client: Client, callback: () => void): void
	}

	declare class AccountInfo  {
		parse(acountInfo: {
		
	}): AccountInfo;
		name: string;
		email: string;
		countryCode: string;
		uid: string;
		referralUrl: string;
		publicAppUrl: string;
		quota: number;
		usedQuota: number;
		privateBytes: number;
		sharedBytes: number;
		json(): {
		
	}
	}

	declare class ApiError  {
		status: number;
		method: string;
		url: string;
		responseText: string;
		response: {
		
	};
		constructor(xhr: XMLHttpRequest, method: string, url: string): this;
		NETWORK_ERROR: number;
		NO_CONTENT: number;
		INVALID_PARAM: number;
		INVALID_TOKEN: number;
		OAUTH_ERROR: number;
		NOT_FOUND: number;
		INVALID_METHOD: number;
		NOT_ACCEPTABLE: number;
		CONFLICT: number;
		RATE_LIMITED: number;
		SERVER_ERROR: number;
		OVER_QUOTA: number
	}

	declare class AuthError  {
		code: string;
		description: string;
		uri: string;
		constructor(queryString: QueryParams): this;
		ACCESS_DENIED: string;
		INVALID_REQUEST: string;
		UNAUTHORIZED_CLIENT: string;
		INVALID_GRANT: string;
		INVALID_SCOPE: string;
		UNSUPPORTED_GRANT_TYPE: string;
		UNSUPPORTED_RESPONSE_TYPE: string;
		SERVER_ERROR: string;
		TEMPORARILY_UNAVAILABLE: string
	}

	declare class Client  {
		ERROR: number;
		RESET: number;
		PARAM_SET: number;
		PARAM_LOADED: number;
		AUTHORIZED: number;
		DONE: number;
		SIGNED_OUT: number;
		onXhr: Util.EventSource;
		onError: Util.EventSource;
		onAuthStepChange: Util.EventSource;
		authStep: number;
		constructor(options: Credentials): this;
		authDriver(driver: AuthDriver.IAuthDriver): Client;
		dropboxUid(): string;
		credentials(): Credentials;
		authenticate(): Client;
		authenticate(callback: AuthenticateCallback): Client;
		authenticate(options: AuthenticateOptions): Client;
		authenticate(options: AuthenticateOptions, callback: AuthenticateCallback): Client;
		isAuthenticated(): boolean;
		signOut(callback: (err: ApiError) => void): XMLHttpRequest;
		signOut(options: SingOutOptions, callback: (err: ApiError) => void): XMLHttpRequest;
		signOff(callback: (err: ApiError) => void): void;
		signOff(options: SingOutOptions, callback: (err: ApiError) => void): void;
		getAccountInfo(
		callback: (err: ApiError, accountInfo: AccountInfo, AccountInfo: AccountInfo) => void
	): XMLHttpRequest;
		getAccountInfo(
		options: AccountInfoOptions, callback: (err: ApiError, accountInfo: AccountInfo, AccountInfo: AccountInfo) => void
	): XMLHttpRequest;
		readFile(path: string, callback: ClientFileReadCallback): XMLHttpRequest;
		readFile(
		path: string, options: ClientFileReadOptions, callback: ClientFileReadCallback
	): XMLHttpRequest;
		writeFile(path: string, data: any, callback: ClientFileWriteCallback): XMLHttpRequest;
		writeFile(
		path: string, data: any, options: ClientFileWriteOptions, callback: ClientFileWriteCallback
	): XMLHttpRequest;
		resumableUploadStep(data: any, callback: ResumableUploadStepCallback): XMLHttpRequest;
		resumableUploadStep(
		data: any, cursor: Http.UploadCursor, callback: ResumableUploadStepCallback
	): XMLHttpRequest;
		resumableUploadFinish(
		path: string, cursor: Http.UploadCursor, callback: ClientFileWriteCallback
	): XMLHttpRequest;
		resumableUploadFinish(
		path: string, cursor: Http.UploadCursor, options: ClientFileWriteOptions, callback: ClientFileWriteCallback
	): XMLHttpRequest;
		stat(
		path: string, callback: (err: ApiError, stat: File.Stat, folderEntries: File.Stat[]) => void
	): XMLHttpRequest;
		stat(
		path: string, options: File.StatOptions, callback: (err: ApiError, stat: File.Stat, folderEntries: File.Stat[]) => void
	): XMLHttpRequest;
		readdir(
		path: string, callback: (
		err: ApiError, filenames: string[], stat: File.Stat, folderEntries: File.Stat[]
	) => void
	): XMLHttpRequest;
		readdir(
		path: string, options: ReadDirOptions, callback: (
		err: ApiError, filenames: string[], stat: File.Stat, folderEntries: File.Stat[]
	) => void
	): XMLHttpRequest;
		metadata(
		path: string, callback: (err: ApiError, stat: File.Stat, folderEntries: File.Stat[]) => void
	): void;
		metadata(
		path: string, options: File.StatOptions, callback: (err: ApiError, stat: File.Stat, folderEntries: File.Stat[]) => void
	): void;
		makeUrl(
		path: string, callback: (err: ApiError, shareUrl: File.ShareUrl) => void
	): XMLHttpRequest;
		makeUrl(
		path: string, options: MakeURLOptions, callback: (err: ApiError, shareUrl: File.ShareUrl) => void
	): XMLHttpRequest;
		history(
		path: string, callback: (err: ApiError, fileVersions: File.Stat[]) => void
	): XMLHttpRequest;
		history(
		path: string, options: HistoryOptions, callback: (err: ApiError, fileVersions: File.Stat[]) => void
	): XMLHttpRequest;
		revisions(
		path: string, options: HistoryOptions, callback: (err: ApiError, fileVersions: File.Stat[]) => void
	): void;
		thumbnailUrl(path: string, options?: ThumbnailUrlOptions): string;
		readThumbnail(path: string, callback: ReadThumbnailCallback): XMLHttpRequest;
		readThumbnail(
		path: string, options: ReadThumbnailOptions, callback: ReadThumbnailCallback
	): XMLHttpRequest;
		revertFile(path: string, versionTag: string, callback: FileStatCallback): XMLHttpRequest;
		restore(path: string, versionTag: string, callback: FileStatCallback): void;
		findByName(
		path: string, namePattern: string, callback: (err: ApiError, resultStats: File.Stat[]) => void
	): XMLHttpRequest;
		findByName(
		path: string, namePattern: string, options: FindByNameOptions, callback: (err: ApiError, resultStats: File.Stat[]) => void
	): XMLHttpRequest;
		search(
		path: string, namePattern: string, options: FindByNameOptions, callback: (err: ApiError, resultStats: File.Stat[]) => void
	): void;
		makeCopyReference(
		path: string, callback: (err: ApiError, copyReference: File.CopyReference) => void
	): XMLHttpRequest;
		copyRef(
		path: string, callback: (err: ApiError, copyReference: File.CopyReference) => void
	): XMLHttpRequest;
		pullChanges(callback: (err: ApiError, changes: Http.PulledChanges) => void): XMLHttpRequest;
		pullChanges(
		cursor: string, callback: (err: ApiError, changes: Http.PulledChanges) => void
	): XMLHttpRequest;
		pullChanges(
		cursor: Http.PulledChanges, callback: (err: ApiError, changes: Http.PulledChanges) => void
	): XMLHttpRequest;
		delta(
		cursor: string, callback: (err: ApiError, changes: Http.PulledChanges) => void
	): void;
		delta(
		cursor: Http.PulledChanges, callback: (err: ApiError, changes: Http.PulledChanges) => void
	): void;
		pollForChanges(
		cursor: string, options: {
		
	}, callback: (err: ApiError, changes: Http.PollResult) => void
	): void;
		pollForChanges(
		cursor: Http.PulledChanges, options: {
		
	}, callback: (err: ApiError, changes: Http.PollResult) => void
	): void;
		mkdir(path: string, callback: FileStatCallback): XMLHttpRequest;
		remove(path: string, callback: FileStatCallback): XMLHttpRequest;
		unlink(path: string, callback: FileStatCallback): void;
		delete(path: string, callback: FileStatCallback): void;
		copy(from: string, toPath: string, callback: FileStatCallback): XMLHttpRequest;
		copy(
		from: File.CopyReference, toPath: string, callback: FileStatCallback
	): XMLHttpRequest;
		move(fromPath: string, toPath: string, callback: FileStatCallback): XMLHttpRequest;
		appInfo(callback: (err: ApiError, changes: Http.AppInfo) => void): XMLHttpRequest;
		appInfo(
		appKey: string, callback: (err: ApiError, changes: Http.AppInfo) => void
	): XMLHttpRequest;
		isAppDeveloper(
		userId: any, callbackcallback: (err: ApiError, isAppDeveloper: boolean) => void
	): XMLHttpRequest;
		isAppDeveloper(
		userId: any, appKey: any, callbackcallback: (err: ApiError, isAppDeveloper: boolean) => void
	): XMLHttpRequest;
		hasOauthRedirectUri(
		redirectUri: string, callback: (err: ApiError, hasOauthRedirectUri: boolean) => void
	): XMLHttpRequest;
		hasOauthRedirectUri(
		redirectUri: string, appKey: string, callback: (err: ApiError, hasOauthRedirectUri: boolean) => void
	): XMLHttpRequest;
		hasOauthRedirectUri(
		redirectUri: string, appKey: Http.AppInfo, callback: (err: ApiError, hasOauthRedirectUri: boolean) => void
	): XMLHttpRequest;
		reset(): Client;
		setCredentials(credentials: Credentials): Client;
		appHash(): string
	}

	
}

declare module 'Util' {
				declare class EventSource  {
		constructor(options: {
		cancelable: boolean
	}): this;
		addListener(listener: (event: any) => void): EventSource;
		removeListener(listener: (event: any) => void): EventSource;
		dispatch(event: {
		
	}): boolean
	}

	declare class Oauth  {
		queryParamsFromUrl(url: string): QueryParams;
		randomAuthStateParam(): string;
		checkAuthStateParam(stateParam: string): boolean
	}

	declare class Xhr  {
		xhr: XMLHttpRequest;
		onError: (error: ApiError, callBack: (error: ApiError) => void) => void;
		constructor(method: string, baseUrl: string): this;
		urlEncode(obj: {
		
	}): string;
		urlEncodeValue(obj: {
		
	}): string;
		urlDecode(string: {
		
	}): QueryParams;
		setParams(params: QueryParams): Xhr;
		setCallback(
		callback: (
		err: ApiError, responseType: string, metadataHeader: {
		
	}, headers: {
		
	}
	) => void
	): Xhr;
		signWithOauth(oauth: Oauth, cacheFriendly: boolean): Xhr;
		addOauthParams(oauth: Oauth): Xhr;
		addOauthHeader(oauth: Oauth): Xhr;
		setBody(body: string): Xhr;
		setBody(body: Blob): Xhr;
		setBody(body: ArrayBuffer): Xhr;
		setResponseType(responseType: string): Xhr;
		setHeader(headerName: string, value: string): Xhr;
		reportResponseHeaders(): Xhr;
		setFileField(
		fieldName: string, fileName: string, fileData: string, contentType?: string
	): void;
		setFileField(
		fieldName: string, fileName: string, fileData: Blob, contentType?: string
	): void;
		setFileField(
		fieldName: string, fileName: string, fileData: File, contentType?: string
	): void;
		prepare(): Xhr;
		send(
		callback: (err: ApiError, responseType: string, metadataHeader: {
		
	}) => void
	): Xhr;
		onReadyStateChange(): void;
		onXdrLoad(): void;
		onXdrError(): void
	}

	
}

declare module 'Http' {
				declare class AppInfo  {
		ICON_SMALL: number;
		ICON_LARGE: number;
		parse(appInfo: {
		
	}, appKey?: string): AppInfo;
		name: string;
		key: string;
		canUseDatastores: boolean;
		canUseFiles: boolean;
		hasAppFolder: boolean;
		canUseFullDropbox: boolean;
		icon(width: number, height?: number): void
	}

	declare class PollResult  {
		parse(response: {
		
	}): PollResult;
		hasChanges: boolean;
		retryAfter: number
	}

	declare class PulledChanges  {
		parse(deltaInfo: {
		
	}): PulledChanges;
		blankSlate: boolean;
		cursorTag: string;
		shouldPullAgain: boolean;
		shouldBackOff: boolean;
		cursor(): string
	}

	declare class PulledChange  {
		parse(entry: {
		
	}): PulledChange;
		path: string;
		wasRemoved: boolean;
		stat: File.Stat
	}

	declare class RangeInfo  {
		parse(headerValue: string): RangeInfo;
		start: number;
		size: number;
		end: number
	}

	declare class UploadCursor  {
		parse(cursorData: string): UploadCursor;
		parse(cursorData: {
		
	}): UploadCursor;
		constructor(cursorData: string): this;
		constructor(cursorData: {
		
	}): this;
		tag: string;
		offset: number;
		expiresAt: Date;
		toJSON(): {
		
	}
	}

	
}

declare module 'File' {
		declare interface StatOptions {
		version: number,
		removed: boolean,
		deleted: boolean,
		readDir: boolean,
		versionTag: string,
		rev: string,
		contentHash: string,
		hash: string,
		httpCache: boolean
	}

		declare class ShareUrl  {
		parse(urlData: string, isDirect: boolean): ShareUrl;
		parse(urlData: {
		
	}, isDirect: boolean): ShareUrl;
		url: string;
		expiresAt: Date;
		isDirect: boolean;
		isPreview: boolean;
		toJSON(): {
		
	}
	}

	declare class CopyReference  {
		parse(refData: string): CopyReference;
		parse(refData: {
		
	}): CopyReference;
		tag: string;
		expiresAt: Date;
		toJSON(): {
		
	}
	}

	declare class Stat  {
		parse(metadata: {
		
	}): Stat;
		path: string;
		name: string;
		inAppFolder: boolean;
		isFolder: boolean;
		isFile: boolean;
		isRemoved: boolean;
		typeIcon: string;
		versionTag: string;
		contentHash: string;
		mimeType: string;
		size: number;
		humanSize: string;
		hasThumbnail: boolean;
		modifiedAt: Date;
		clientModifiedAt: Date;
		toJSON(): {
		
	}
	}

	
}

declare module 'AuthDriver' {
				declare class IAuthDriver  {
		doAuthorize(
		authUrl: string, stateParam: string, client: Client, callback?: QueryParamsCallback
	): void
	}

	declare class BrowserBase  {
		localStorage(): Storage;
		currentLocation(): string;
		cleanupLocation(): void;
		constructor(options: {
		scope: string,
		rememberUser: boolean
	}): this;
		authType(): string;
		onAuthStepChange(client: Client, callback: () => void): void;
		locationStateParam(url: string): string
	}

	declare class Redirect  {
		constructor(options?: {
		redirectUrl: string,
		redirectFile: string,
		scope: string,
		rememberUser: boolean
	}): this;
		url(): string;
		doAuthorize(authUrl: string, stateParam: string, client: Client): void;
		resumeAuthorize(stateParam: string, client: Client, callback: QueryParamsCallback): void
	}

	declare class Popup extends IAuthDriver {
		locationOrigin(location: string): string;
		oauthReceiver(): void;
		constructor(options?: RedirectOptions): this;
		url(): string
	}

	declare class ChromeApp extends IAuthDriver {
		constructor(options?: {
		scope: string
	}): this
	}

	declare class ChromeExtension extends IAuthDriver {
		oauthReceiver(): void;
		constructor(options?: {
		scope: string,
		receiverPath: string
	}): this
	}

	declare class Cordova extends IAuthDriver {
		oauthReceiver(): void;
		constructor(options?: {
		scope: string,
		receiverPath: string
	}): this;
		url(): string
	}

	declare class NodeServer extends IAuthDriver {
		constructor(options?: {
		port: number,
		tls?: {
		
	}
	}): this;
		authType(): string;
		url(): string;
		openBrowser(url: string): void;
		createApp(): void;
		closeServer(): void;
		doRequest(request: any, response: any): void;
		closeBrowser(response: any): void
	}

	
}
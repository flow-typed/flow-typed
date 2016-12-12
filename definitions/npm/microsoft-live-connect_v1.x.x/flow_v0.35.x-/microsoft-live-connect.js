

declare module 'microsoft-live-connect' {
					
}

declare module 'Live' {
		declare interface IUserInfo {
		name: string,
		id: string
	}

	declare interface ISharedWith {
		access: string
	}

	declare interface IObject {
		type: string
	}

	declare interface IObjectCollection<T> {
		data: T[]
	}

	declare interface IAlbum {
		id: string,
		from: IUserInfo,
		name: string,
		description: string,
		parent_id: string,
		upload_location: string,
		is_embeddable: boolean,
		count: number,
		link: string,
		type: string,
		shared_with: ISharedWith,
		created_time: string,
		updated_time: string,
		client_updated_time: string
	}

	declare interface INewAlbum {
		name: string,
		description?: string
	}

	declare interface IAudio {
		id: string,
		from: IUserInfo,
		name: string,
		description: string,
		parent_id: string,
		size: number,
		upload_location: string,
		comments_count: number,
		comments_enabled: boolean,
		is_embeddable: boolean,
		source: string,
		link: string,
		type: string,
		title: string,
		artist: string,
		album: string,
		album_artist: string,
		genre: string,
		duration: number,
		picture: string,
		shared_with: ISharedWith,
		created_time: string,
		updated_time: string
	}

	declare interface INewAudio {
		name: string,
		description?: string,
		title?: string,
		artist?: string,
		album?: string,
		album_artist?: string,
		genre?: string
	}

	declare interface ICalendar {
		id: string,
		name: string,
		description: string,
		created_time: string,
		updated_time: string,
		from: IUserInfo,
		is_default: boolean,
		subscription_location: string,
		permissions: string
	}

	declare interface INewCalendar {
		name: string,
		description?: string
	}

	declare interface INewCalendarSubscription {
		name: string,
		subscription_location: string
	}

	declare interface IComment {
		id: string,
		from: IUserInfo,
		message: string,
		created_time: string
	}

	declare interface INewComment {
		message: string
	}

	declare interface IContact {
		id: string,
		first_name: string,
		last_name: string,
		name: string,
		is_friend: boolean,
		is_favorite: boolean,
		user_id: string,
		email_hashes: string[],
		updated_time: string,
		birth_day: number,
		birth_month: number
	}

	declare interface INewContact {
		first_name?: string,
		last_name?: string,
		work?: {
		employer: {
		name: string
	}
	}[],
		emails?: {
		preferred?: string,
		personal?: string,
		business?: string,
		other?: string
	}
	}

	declare interface IError {
		error: {
		code: string,
		message: string
	}
	}

	declare interface IEvent {
		id: string,
		name: string,
		created_time: string,
		updated_time: string,
		description: string,
		calendar_id: string,
		from: IUserInfo,
		start_time: string,
		end_time: string,
		location: string,
		is_all_day_event: boolean,
		is_recurrent: boolean,
		recurrence: string,
		reminder_time: number,
		availability: string,
		visibility: string
	}

	declare interface INewEvent {
		name: string,
		description: string,
		start_time: any,
		end_time?: any,
		location?: string,
		is_all_day_event?: boolean,
		reminder_time?: number,
		availability?: string,
		visibility?: string
	}

	declare interface INewEventResponse {
		name: string,
		description: string,
		start_time: string,
		end_time: string,
		location: string,
		is_all_day_event: boolean,
		is_recurrent: boolean,
		recurrence: string,
		reminder_time: number,
		availability: string,
		visibility: string,
		updated_time: string
	}

	declare interface IFile {
		id: string,
		from: IUserInfo,
		name: string,
		description: string,
		parent_id: string,
		size: number,
		upload_location: string,
		comments_count: number,
		comments_enabled: boolean,
		is_embeddable: boolean,
		source: string,
		link: string,
		type: string,
		shared_with: ISharedWith,
		created_time: string,
		updated_time: string,
		client_updated_time: string,
		sort_by: string
	}

	declare interface INewFileResponse {
		id: string,
		name: string,
		source: string
	}

	declare interface IFileDownloadLink {
		location: string
	}

	declare interface IFolder {
		id: string,
		from: IUserInfo,
		name: string,
		description: string,
		count: number,
		link: string,
		parent_id: string,
		upload_location: string,
		is_embeddable: boolean,
		type: string,
		created_time: string,
		updated_time: string,
		client_updated_time: string,
		shared_with: ISharedWith,
		sort_by: string
	}

	declare interface INewFolder {
		name: string,
		description?: string,
		sort_by?: string
	}

	declare interface IFriend {
		id: string,
		name: string
	}

	declare interface IPermissions {
		[scope: string]: number
	}

	declare interface IImageInfo {
		height: number,
		width: number,
		source: string,
		type: string
	}

	declare interface ILocation {
		latitude: number,
		longitude: number,
		altitude: number
	}

	declare interface IPhoto {
		id: string,
		from: IUserInfo,
		name: string,
		description: string,
		parent_id: string,
		size: number,
		comments_count: number,
		comments_enabled: boolean,
		tags_count: number,
		tags_enabled: boolean,
		is_embeddable: boolean,
		picture: string,
		source: string,
		upload_location: string,
		images: IImageInfo[],
		link: string,
		when_taken: string,
		height: number,
		width: number,
		type: string,
		location: ILocation,
		camera_make: string,
		camera_model: string,
		focal_ratio: number,
		focal_length: number,
		exposure_numerator: number,
		exposure_denominator: number,
		shared_with: ISharedWith,
		created_time: string,
		updated_time: string
	}

	declare interface ISearch {
		data: IObject[],
		paging?: {
		next?: string,
		previous?: string
	}
	}

	declare interface ITag {
		id: string,
		user: IUserInfo,
		x: number,
		y: number,
		created_time: string
	}

	declare interface IWorkInfo {
		employer: {
		name: string
	},
		position: {
		name: string
	}
	}

	declare interface IPostalAddress {
		street: string,
		street_2: string,
		city: string,
		state: string,
		postal_code: string,
		region: string
	}

	declare interface IUser {
		id: string,
		name: string,
		first_name: string,
		last_name: string,
		gender: string,
		link: string,
		birth_day: number,
		birth_month: number,
		birth_year: number,
		work: IWorkInfo[],
		emails: {
		preferred: string,
		account: string,
		personal: string,
		business: string,
		other: string
	},
		addresses: {
		personal: IPostalAddress,
		business: IPostalAddress
	},
		phones: {
		personal: string,
		business: string,
		mobile: string
	},
		locale: string,
		updated_time: string
	}

	declare interface IVideo {
		id: string,
		from: IUserInfo,
		name: string,
		description: string,
		parent_id: string,
		size: number,
		comments_count: number,
		comments_enabled: boolean,
		tags_count: number,
		tags_enabled: boolean,
		is_embeddable: boolean,
		picture: string,
		source: string,
		upload_location: string,
		link: string,
		height: number,
		width: number,
		duration: number,
		bitrate: number,
		type: string,
		shared_with: ISharedWith,
		created_time: string,
		updated_time: string
	}

	declare interface IAPIProperties {
		path: string,
		method?: string,
		body?: any
	}

	declare interface IBackgroundDownloadProperties {
		path: string,
		file_output?: Windows.Storage.StorageFile
	}

	declare interface IBackgroundUploadProperties {
		path: string,
		file_name?: string,
		file_input?: any,
		stream_input?: Windows.Storage.Streams.IInputStream,
		overwrite?: string
	}

	declare interface IDownloadProperties {
		path: string
	}

	declare interface IFileDialogProperties {
		mode: string,
		select?: string,
		lightbox?: string
	}

	declare interface IInitProperties {
		client_id?: string,
		redirect_uri?: string,
		scope?: any,
		logging?: boolean,
		status?: boolean,
		response_type?: string,
		secure_cookie?: string
	}

	declare interface ILoginProperties {
		redirect_uri?: string,
		scope: any,
		state?: string
	}

	declare interface IUIProperties {
		name: string,
		element: string,
		state?: string
	}

	declare interface ISkyDrivePickerProperies {
		mode: string,
		select?: string,
		theme?: string,
		lightbox?: string,
		onselected?: Function,
		onerror?: Function
	}

	declare interface ISignInProperties {
		brand?: string,
		theme?: string,
		type?: string,
		sign_in_text?: string,
		sign_out_text?: string,
		onloggedin?: Function,
		onloggedout?: Function,
		onerror?: Function
	}

	declare interface IUploadProperties {
		path: string,
		element: string,
		overwrite?: string
	}

	declare interface ISession {
		access_token: string,
		authentication_token: string,
		scope?: string[],
		expires_in?: number,
		expires?: number
	}

	declare interface ILoginStatus {
		status: string,
		session: ISession
	}

	declare interface IEventAPI {
		subscribe(event: string, callback: Function): void,
		unsubscribe(event: string, callback?: Function): void
	}

	declare interface IFilePickerResult {
		data: {
		files?: IFile[],
		folders?: IFolder[]
	}
	}

	declare interface IPromise<T> {
		then(
		onSuccess: (response: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void
	): IPromise<T>,
		cancel(): void
	}

	declare interface IJSError {
		error: string,
		error_description: string
	}

	declare interface API {
		api<T>(properties: IAPIProperties, callback?: (response: any) => void): IPromise<T>,
		backgroundDownload<T>(
		properties: IBackgroundDownloadProperties, callback?: (response: any) => void
	): IPromise<T>,
		backgroundUpload<T>(
		properties: IBackgroundUploadProperties, callback?: (response: any) => void
	): IPromise<T>,
		canLogout(): boolean,
		download(
		properties: IDownloadProperties, callback?: (response: any) => void
	): IPromise<void>,
		Event: IEventAPI,
		fileDialog(
		properties: IFileDialogProperties, callback?: (response: any) => void
	): IPromise<IFilePickerResult>,
		getLoginStatus(
		callback?: (status: ILoginStatus) => void, force?: boolean
	): IPromise<ILoginStatus>,
		getSession(): ISession,
		init(properties: IInitProperties): IPromise<ILoginStatus>,
		login(
		properties: ILoginProperties, callback?: (status: any) => void
	): IPromise<ILoginStatus>,
		logout(callback?: (status: ILoginStatus) => void): IPromise<ILoginStatus>,
		ui(properties: IUIProperties, callback?: () => void): void,
		upload<T>(
		properties: IUploadProperties, callback?: (response: any) => void
	): IPromise<T>
	}

			
}
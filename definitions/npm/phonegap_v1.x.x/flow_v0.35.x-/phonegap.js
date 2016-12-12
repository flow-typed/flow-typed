

declare module 'phonegap' {
		declare interface GeolocationError {
		code: number,
		message: string
	}

	declare interface Acceleration {
		x: number,
		y: number,
		z: number,
		timestamp: number
	}

	declare interface AccelerometerOptions {
		frequency?: number
	}

	declare interface Accelerometer {
		getCurrentAcceleration(
		accelerometerSuccess: (acceleration: Acceleration) => void, accelerometerError: () => void
	): void,
		watchAcceleration(
		accelerometerSuccess: (acceleration: Acceleration) => void, accelerometerError: () => void, accelerometerOptions?: AccelerometerOptions
	): void,
		clearWatch(watchID: number): void
	}

	declare interface CameraPopoverOptions {
		x?: number,
		y?: number,
		width?: number,
		height?: number,
		arrowDir?: number
	}

	declare interface CameraOptions {
		quality?: number,
		destinationType?: number,
		sourceType?: number,
		allowEdit?: boolean,
		encodingType?: number,
		targetWidth?: number,
		targetHeight?: number,
		mediaType?: number,
		correctOrientation?: boolean,
		saveToPhotoAlbum?: boolean,
		popoverOptions?: CameraPopoverOptions
	}

	declare interface CameraPictureSourceTypeObject {
		CAMERA: number,
		PHOTOLIBRARY: number,
		SAVEDPHOTOALBUM: number
	}

	declare interface CameraDestinationTypeObject {
		FILE_URI: number,
		DATA_URL: number
	}

	declare interface CameraEncodingTypeObject {
		JPEG: number,
		PNG: number
	}

	declare interface CameraMediaTypeObject {
		PICTURE: number,
		VIDEO: number,
		ALLMEDIA: number
	}

	declare interface CameraPopoverArrowDirectionObject {
		ARROW_UP: number,
		ARROW_DOWN: number,
		ARROW_LEFT: number,
		ARROW_RIGHT: number,
		ARROW_ANY: number
	}

	declare interface Camera {
		sourceType: any,
		PictureSourceType: CameraPictureSourceTypeObject,
		DestinationType: CameraDestinationTypeObject,
		EncodingType: CameraEncodingTypeObject,
		MediaType: CameraMediaTypeObject,
		PopoverArrowDirection: CameraPopoverArrowDirectionObject,
		getPicture(
		cameraSuccess: (imageData: string) => void, cameraError: (message: string) => void, cameraOptions?: CameraOptions
	): void,
		cleanup(
		cameraSuccess: (imageData: string) => void, cameraError: (message: string) => void
	): void
	}

	declare interface CaptureAudioOptions {
		limit?: number,
		duration?: number,
		mode?: number
	}

	declare interface CaptureImageOptions {
		limit?: number,
		mode?: number
	}

	declare interface MediaFile {
		name: string,
		fullPath: string,
		type: string,
		lastModifiedDate: Date,
		size: number,
		getFormatData(successCallback: Function, errorCallback?: Function): void
	}

	declare interface CaptureError {
		code: number,
		message: string
	}

	declare interface Capture {
		captureAudio(
		captureSuccess: (mediaFiles: MediaFile[]) => void, captureError: (error: CaptureError) => void, options?: CaptureAudioOptions
	): void,
		captureImage(
		captureSuccess: (mediaFiles: MediaFile[]) => void, captureError: (error: CaptureError) => void, options?: CaptureImageOptions
	): void,
		captureVideo(
		captureSuccess: (mediaFiles: MediaFile[]) => void, captureError: (error: CaptureError) => void, options?: CaptureImageOptions
	): void
	}

	declare interface Connection {
		UNKNOWN: number,
		ETHERNET: number,
		WIFI: number,
		CELL_2G: number,
		CELL_3G: number,
		CELL_4G: number,
		NONE: number
	}

	declare interface CompassOptions {
		frequency?: number,
		filter?: number
	}

	declare interface CompassHeading {
		magneticHeading?: number,
		trueHeading?: number,
		headingAccuracy?: number,
		timestamp?: number
	}

	declare interface CompassError {
		code: number
	}

	declare interface Compass {
		getCurrentHeading(
		compassSuccess: (heading: CompassHeading) => void, compassError: (error: CompassError) => void, compassOptions?: CompassOptions
	): void,
		watchHeading(
		compassSuccess: (heading: CompassHeading) => void, compassError: (error: CompassError) => void, compassOptions?: CompassOptions
	): void,
		clearWatch(watchID: number): void
	}

	declare interface Connection {
		type: number
	}

	declare interface ContactAddress {
		pref: boolean,
		type: string,
		formatted: string,
		streetAddress: string,
		locality: string,
		region: string,
		postalCode: string,
		country: string
	}

	declare interface ContactField {
		type: string,
		value: string,
		pref: boolean
	}

	declare interface Contact {
		id: string,
		displayName: string,
		name: ContactName,
		nickname: string,
		phoneNumbers: ContactField[],
		emails: ContactField[],
		addresses: ContactAddress[],
		ims: ContactField[],
		organizations: ContactOrganization[],
		birthday: Date,
		note: string,
		photos: ContactField[],
		categories: ContactField[],
		urls: ContactField[],
		save(
		onSuccess?: (contacts: Contacts) => void, onError?: (contactError: ContactError) => void
	): void,
		remove(
		onSuccess?: (contacts: Contacts) => void, onError?: (contactError: ContactError) => void
	): void,
		clone(): Contact
	}

	declare interface ContactFindOptions {
		filter?: string,
		multiple?: boolean
	}

	declare interface ContactName {
		formatted: string,
		familyName: string,
		givenName: string,
		middleName: string,
		honorificPrefix: string,
		honorificSuffix: string
	}

	declare interface ContactOrganization {
		pref: boolean,
		type: string,
		name: string,
		department: string,
		title: string
	}

	declare interface ContactError {
		code: number
	}

	declare interface Contacts {
		create(properties?: any): Contact,
		find(
		contactFields: string[], contactSuccess: (contacts: Contact[]) => void, contactError: (error: ContactError) => void, contactFindOptions?: ContactFindOptions
	): void
	}

	declare interface Device {
		available: boolean,
		name: string,
		cordova: string,
		platform: string,
		uuid: string,
		version: string,
		model: string,
		capture: Capture
	}

	declare interface FileWriter {
		readyState: any,
		fileName: string,
		length: number,
		position: number,
		error: FileError,
		onwritestart: Function,
		onprogress: Function,
		onwrite: Function,
		onabort: Function,
		onerror: Function,
		onwriteend: Function,
		abort(): void,
		seek(arg: number): void,
		truncate(arg: number): void,
		write(arg: any): void
	}

	declare interface FileSystem {
		name: string,
		root: DirectoryEntry
	}

	declare interface FileSystemEntry {
		isFile: boolean,
		isDirectory: boolean,
		name: string,
		fullPath: string,
		filesystem: FileSystem,
		getMetadata(onSuccess?: (arg: Metadata) => void, onError?: (arg: FileError) => void): void,
		setMetadata(
		onSuccess?: (arg: Metadata) => void, onError?: (arg: FileError) => void, options?: any
	): void,
		toURL(): string,
		remove(onSuccess?: () => void, onError?: (arg: FileError) => void): void,
		getParent(
		onSuccess?: (arg: DirectoryEntry) => void, onError?: (arg: FileError) => void
	): void
	}

	declare interface FileEntry {
		moveTo(
		parentEntry: DirectoryEntry, file: string, onSuccess: (arg: DirectoryEntry) => void, onError: (arg: FileError) => void
	): void,
		copyTo(
		parentEntry: DirectoryEntry, file: string, onSuccess: (arg: DirectoryEntry) => void, onError: (arg: FileError) => void
	): void,
		createWriter(
		onSuccess?: (arg: FileWriter) => void, onError?: (arg: FileError) => void
	): void,
		file(onSuccess?: (arg: File) => void, onError?: (arg: FileError) => void): void
	}

	declare interface DirectoryEntry {
		createReader(): DirectoryReader,
		getDirectory(
		path: string, options: Flags, successCallback: (result: DirectoryEntry) => void, errorCallback: (error: FileError) => void
	): void,
		getFile(
		path: string, options: Flags, successCallback: (result: FileEntry) => void, errorCallback: (error: FileError) => void
	): void,
		removeRecursively(successCallback: () => void, errorCallback: (error: FileError) => void): void
	}

	declare interface DirectoryReader {
		readEntries(
		successCallback: (entries: FileSystemEntry) => void, errorCallback: (error: FileError) => void
	): void
	}

	declare interface FileTransfer {
		onprogress: Function,
		upload(
		filePath: string, server: string, successCallback: (result: FileUploadResult) => void, errorCallback: (error: FileError) => void, options?: any
	): void,
		download(
		source: string, target: string, successCallback: (fileEntry: FileEntry) => void, errorCallback: (error: FileError) => void, options?: any
	): void,
		abort(): void
	}

	declare interface FileUploadOptions {
		fileKey?: string,
		fileName?: string,
		mimeType?: string,
		params?: any,
		chunkedMode?: boolean,
		headers?: any
	}

	declare interface FileUploadResult {
		bytesSent: number,
		responseCode: number,
		response: string
	}

	declare interface Flags {
		create: boolean,
		exclusive?: boolean
	}

	declare interface LocalFileSystem {
		PERSISTENT: number,
		TEMPORARY: number
	}

	declare interface Metadata {
		modificationTime: Date
	}

	declare interface FileError {
		code: number
	}

	declare interface FileTransferError {
		code: number,
		source: string,
		target: string,
		http_status: number
	}

	declare interface GeolocationOptions {
		enableHighAccuracy?: boolean,
		timeout?: number,
		maximumAge?: number
	}

	declare interface GlobalizationError {
		code: number,
		message: string
	}

	declare interface GlobalizationDate {
		year: number,
		month: number,
		day: number,
		hour: number,
		minute: number,
		second: number,
		millisecond: number
	}

	declare interface GlobalizationDateOptions {
		formatLength?: string,
		selector?: string
	}

	declare interface GlobalizationDatePattern {
		pattern: string,
		timezone: string,
		utc_offset: number,
		dst_offset: number
	}

	declare interface GlobalizationDateNameOptions {
		type?: string,
		item?: string
	}

	declare interface GlobalizationNumberOptions {
		type?: string
	}

	declare interface GlobalizationNumberPattern {
		pattern: string,
		symbol: string,
		fraction: number,
		rounding: number,
		positive: string,
		negative: string,
		decimal: string,
		grouping: string
	}

	declare interface GlobalizationCurrencyPattern {
		pattern: string,
		code: string,
		fraction: number,
		rounding: number,
		decimal: string,
		grouping: string
	}

	declare interface Globalization {
		getPreferredLanguage(
		successCallback: (properties: {
		value: string
	}) => void, errorCallback: (error: GlobalizationError) => void
	): void,
		getLocaleName(
		successCallback: (properties: {
		value: string
	}) => void, errorCallback: (error: GlobalizationError) => void
	): void,
		dateToString(
		date: Date, successCallback: (properties: {
		value: string
	}) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationDateOptions
	): void,
		stringToDate(
		dateString: string, successCallback: (properties: GlobalizationDate) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationDateOptions
	): void,
		getDatePattern(
		successCallback: (properties: GlobalizationDatePattern) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationDateOptions
	): void,
		getDateNames(
		successCallback: (properties: {
		value: string[]
	}) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationDateNameOptions
	): void,
		isDayLightSavingsTime(
		date: Date, successCallback: (properties: {
		dst: boolean
	}) => void, errorCallback: (error: GlobalizationError) => void
	): void,
		getFirstDayOfWeek(
		successCallback: (properties: {
		value: number
	}) => void, errorCallback: (error: GlobalizationError) => void
	): void,
		numberToString(
		number: number, successCallback: (properties: {
		value: string
	}) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationNumberOptions
	): void,
		stringToNumber(
		string: string, successCallback: (properties: {
		value: number
	}) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationNumberOptions
	): void,
		getNumberPattern(
		successCallback: (parameters: GlobalizationNumberPattern) => void, errorCallback: (error: GlobalizationError) => void, options?: GlobalizationNumberOptions
	): void,
		getCurrencyPattern(
		currencyCode: string, successCallback: (parameters: GlobalizationCurrencyPattern) => void, errorCallback: (error: GlobalizationError) => void
	): void
	}

	declare interface Media {
		new (
		src: string, mediaSuccess: Function, mediaError?: (mediaError: MediaError) => any, mediaStatus?: Function
	): Media,
		getCurrentPosition(mediaSuccess: Function, mediaError?: (mediaError: MediaError) => any): void,
		getDuration(): any,
		play(): void,
		pause(): void,
		release(): void,
		seekTo(milliseconds: number): void,
		startRecord(): void,
		stopRecord(): void,
		stop(): void
	}

	declare interface Notification {
		alert(
		message: string, alertCallback: Function, title?: string, buttonName?: string
	): void,
		confirm(
		message: string, confirmCallback: Function, title?: string, buttonLabels?: string
	): void,
		confirm(
		message: string, confirmCallback: Function, title?: string, buttonLabels?: string[]
	): void,
		beep(times: number): void,
		vibrate(milliseconds: number): void
	}

	declare interface Splashscreen {
		show(): void,
		hide(): void
	}

	declare interface Database {
		transaction(
		populateDB?: (tx: SQLTransaction) => any, errorCB?: (err: any) => any, successCB?: () => any
	): void,
		changeVersion(var1: string, var2: string): void
	}

	declare interface SQLResultSetRowList {
		length: number,
		item(index: number): any
	}

	declare interface SQLError {
		code: number,
		message: string
	}

	declare interface SQLResultSet {
		insertId: number,
		rowsAffected: number,
		rows: SQLResultSetRowList
	}

	declare interface SQLTransaction {
		executeSql(sql: string): SQLResultSet
	}

	declare interface StatusBar {
		isVisible: boolean,
		overlaysWebView(doOverlay: boolean): void,
		styleDefault(): void,
		styleLightContent(): void,
		styleBlackTranslucent(): void,
		styleBlackOpaque(): void,
		backgroundColorByName(colorname: string): void,
		backgroundColorByHexString(hexString: string): void,
		hide(): void,
		show(): void
	}

	declare interface Keyboard {
		automaticScrollToTopOnHiding: boolean,
		isVisible: boolean,
		onshow: Function,
		onhide: Function,
		onshowing: Function,
		onhiding: Function,
		disableScrollingInShrinkView(disable: boolean): void,
		hideFormAccessoryBar(hide: boolean): void,
		shrinkView(shrink: boolean): void
	}

	declare interface Navigator {
		accelerometer: Accelerometer,
		camera: Camera,
		capture: Capture,
		compass: Compass,
		connection: Connection,
		contacts: Contacts,
		device: Device,
		globalization: Globalization,
		notification: Notification,
		splashscreen: Splashscreen
	}

	declare interface Window {
		requestFileSystem: any,
		openDatabase(
		database_name: string, database_version: string, database_displayname: string, database_size: number
	): Database
	}

			
}
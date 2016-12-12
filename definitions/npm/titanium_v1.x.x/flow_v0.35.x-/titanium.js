

declare module 'titanium' {
				declare class Dictionary<Object>  {
		
	}

	declare class BarItemType  {
		accessibilityLabel: string;
		enabled: boolean;
		image: any;
		title: string;
		width: number
	}

	declare class MatrixCreationDict  {
		anchorPoint: Dictionary<Object>;
		rotate: number;
		scale: number
	}

	declare class TableViewIndexEntry  {
		index: number;
		title: string
	}

	declare class FacebookRESTResponsev1  {
		error: string;
		method: string;
		result: string;
		success: boolean
	}

	declare class titleAttributesParams  {
		color: string;
		font: Font;
		shadow: shadowDict
	}

	declare class MapRegionType  {
		latitude: number;
		latitudeDelta: number;
		longitude: number;
		longitudeDelta: number
	}

	declare class CropRectType  {
		height: number;
		width: number;
		x: number;
		y: number
	}

	declare class LocationResults extends ErrorResponse {
		coords: LocationCoordinates;
		provider: LocationProviderDict
	}

	declare class ErrorResponse  {
		code: number;
		error: string;
		success: boolean
	}

	declare class CloudPushNotificationsQueryResponse extends CloudResponse {
		subscriptions: Array<Dictionary<Object>>
	}

	declare class CloudResponse  {
		code: number;
		error: boolean;
		message: string;
		meta: Dictionary<Object>;
		success: boolean
	}

	declare class textFieldSelectedParams  {
		length: number;
		location: number
	}

	declare class recurrenceEndDictionary  {
		endDate: Date;
		occurrenceCount: number
	}

	declare class CloudGeoFenceResponse extends CloudResponse {
		geo_fences: Array<Dictionary<Object>>
	}

	declare class ServiceIntentOptions  {
		startMode: number;
		url: string
	}

	declare class AcceptedCallbackArgs  {
		inbound: Ti.Network.Socket.TCP;
		socket: Ti.Network.Socket.TCP
	}

	declare class HeadingData  {
		accuracy: number;
		magneticHeading: number;
		timestamp: number;
		trueHeading: number;
		x: number;
		y: number;
		z: number
	}

	declare class FacebookGraphResponsev1  {
		error: string;
		path: string;
		result: string;
		success: boolean
	}

	declare class textAreaSelectedParams  {
		length: number;
		location: number
	}

	declare class ThumbnailResponse extends ErrorResponse {
		image: Ti.Blob;
		time: number
	}

	declare class Dimension  {
		height: number;
		width: number;
		x: number;
		y: number
	}

	declare class ReadCallbackArgs extends ErrorResponse {
		bytesProcessed: number;
		errorDescription: string;
		errorState: number;
		source: Ti.IOStream
	}

	declare class CloudACLsCheckResponse extends CloudResponse {
		permission: Dictionary<Object>
	}

	declare class ViewTemplate  {
		bindId: string;
		childTemplates: Array<ViewTemplate>;
		events: Dictionary<Object>;
		properties: Dictionary<Object>;
		type: string
	}

	declare class CloudChatsResponse extends CloudResponse {
		chats: Array<Dictionary<Object>>
	}

	declare class MediaQueryType  {
		albumArtist: any;
		albumTitle: any;
		artist: any;
		composer: any;
		genre: any;
		grouping: number;
		isCompilation: any;
		mediaType: any;
		title: any
	}

	declare class WebAPIError  {
		code: number;
		message: string;
		name: string
	}

	declare class DocumentViewerOptions  {
		animated: boolean;
		view: Ti.UI.View
	}

	declare class ListViewAnimationProperties  {
		animated: boolean;
		animationStyle: number;
		position: number
	}

	declare class CloudPushSchedulesResponse extends CloudResponse {
		push_schedules: Array<Object>
	}

	declare class DataCallbackArgs  {
		address: string;
		bytesData: Array<Number>;
		port: string;
		stringData: string
	}

	declare class CloudPushNotificationErrorArg  {
		error: string
	}

	declare class ScreenshotResult  {
		media: Ti.Blob
	}

	declare class YQLResponse extends ErrorResponse {
		data: any;
		message: string
	}

	declare class ForwardGeocodeResponse extends ErrorResponse {
		accuracy: number;
		address: string;
		city: string;
		country: string;
		countryCode: string;
		country_code: string;
		displayAddress: string;
		latitude: string;
		longitude: string;
		postalCode: string;
		region1: string;
		region2: string;
		street: string;
		street1: string
	}

	declare class CloudEventsResponse extends CloudResponse {
		events: Array<Dictionary<Object>>
	}

	declare class ReadyStatePayload  {
		readyState: number
	}

	declare class ErrorCallbackArgs  {
		errorCode: number;
		socket: Ti.Network.Socket.TCP
	}

	declare class FailureResponse  {
		code: Number;
		error: string;
		success: boolean
	}

	declare class WriteCallbackArgs extends ErrorResponse {
		bytesProcessed: number;
		errorDescription: string;
		errorState: number;
		source: Ti.IOStream
	}

	declare class CloudPushNotificationSuccessArg  {
		deviceToken: string
	}

	declare class MapLocationType  {
		animate: boolean;
		latitude: number;
		latitudeDelta: number;
		longitude: number;
		longitudeDelta: number;
		regionFit: boolean
	}

	declare class DecodeStringDict  {
		charset: string;
		length: number;
		position: number;
		source: Ti.Buffer
	}

	declare class ListViewContentInsetOption  {
		animated: boolean;
		duration: number
	}

	declare class RouteDescription  {
		inputs: Array<Object>;
		outputs: Array<Object>
	}

	declare class CreateStreamArgs  {
		mode: number;
		source: any
	}

	declare class CloudCheckinsResponse extends CloudResponse {
		checkins: Array<Dictionary<Object>>
	}

	declare class CreateBufferArgs  {
		byteOrder: number;
		length: number;
		type: string;
		value: any
	}

	declare class CloudPushNotificationConfig  {
		error: (...args: any[]) => any;
		success: (...args: any[]) => any
	}

	declare class CloudReviewsResponse extends CloudResponse {
		reviews: Array<Dictionary<Object>>
	}

	declare class Point  {
		x: number;
		y: number
	}

	declare class CloudPhotosResponse extends CloudResponse {
		photos: Array<Dictionary<Object>>
	}

	declare class PushNotificationConfig  {
		callback: (...args: any[]) => any;
		error: (...args: any[]) => any;
		success: (...args: any[]) => any;
		types: Array<Number>
	}

	declare class MapRouteType  {
		color: string;
		name: string;
		points: Array<MapPointType>;
		width: number
	}

	declare class AcceptDict  {
		error: (...args: any[]) => any;
		timeout: number
	}

	declare class MediaQueryInfoType  {
		exact: boolean;
		value: any
	}

	declare class PumpCallbackArgs extends ErrorResponse {
		buffer: Ti.Buffer;
		bytesProcessed: number;
		errorDescription: string;
		errorState: number;
		source: Ti.IOStream;
		totalBytesProcessed: number
	}

	declare class MusicLibraryOptionsType  {
		allowMultipleSelections: boolean;
		animated: boolean;
		autohide: boolean;
		cancel: (...args: any[]) => any;
		error: (...args: any[]) => any;
		mediaTypes: any;
		success: (...args: any[]) => any
	}

	declare class shadowDict  {
		blurRadius: number;
		color: string;
		offset: Dictionary<Object>
	}

	declare class launchOptions  {
		launchOptionsLocationKey: boolean;
		source: string;
		url: string
	}

	declare class WriteStreamCallbackArgs extends ErrorResponse {
		bytesProcessed: number;
		errorDescription: string;
		errorState: number;
		fromStream: Ti.IOStream;
		toStream: Ti.IOStream
	}

	declare class CloudChatGroupsResponse extends CloudResponse {
		chat_groups: Array<Dictionary<Object>>
	}

	declare class CloudPhotoCollectionsPhotosResponse extends CloudResponse {
		photos: Array<Dictionary<Object>>
	}

	declare class DecodeNumberDict  {
		byteOrder: number;
		position: number;
		source: Ti.Buffer;
		type: string
	}

	declare class ConnectedCallbackArgs  {
		socket: Ti.Network.Socket.TCP
	}

	declare class CloudPhotoCollectionsResponse extends CloudResponse {
		collections: Array<Dictionary<Object>>
	}

	declare class CloudObjectsResponse extends CloudResponse {
		classname: Array<Dictionary<Object>>
	}

	declare class PopoverParams  {
		animated: boolean;
		rect: Dimension;
		view: Ti.UI.View
	}

	declare class MediaScannerResponse  {
		path: string;
		uri: string
	}

	declare class CloudPushNotificationsQueryChannelResponse extends CloudResponse {
		push_channels: Array<String>
	}

	declare class CloudPostsResponse extends CloudResponse {
		posts: Array<Dictionary<Object>>
	}

	declare class CloudSocialIntegrationsResponse extends CloudResponse {
		users: Array<Dictionary<Object>>
	}

	declare class APSConnectionDelegate  {
		
	}

	declare class CameraOptionsType  {
		allowEditing: boolean;
		animated: boolean;
		arrowDirection: number;
		autohide: boolean;
		autorotate: boolean;
		cancel: (...args: any[]) => any;
		error: (...args: any[]) => any;
		inPopOver: boolean;
		mediaTypes: Array<String>;
		overlay: Ti.UI.View;
		popoverView: Ti.UI.View;
		saveToPhotoGallery: boolean;
		showControls: boolean;
		success: (...args: any[]) => any;
		transform: Ti.UI._2DMatrix;
		videoMaximumDuration: number;
		videoQuality: number
	}

	declare class ListViewIndexEntry  {
		index: number;
		title: string
	}

	declare class CloudStreamProgress  {
		progress: number;
		url: string
	}

	declare class MusicLibraryResponseType  {
		items: Array<Ti.Media.Item>;
		representative: Ti.Media.Item;
		types: number
	}

	declare class CloudEventOccurrencesResponse extends CloudResponse {
		event_occurrences: Array<Dictionary<Object>>
	}

	declare class CloudUsersResponse extends CloudResponse {
		users: Array<Dictionary<Object>>
	}

	declare class TableViewContentInsetOption  {
		animated: boolean;
		duration: number
	}

	declare class CloudFriendRequestsResponse extends CloudResponse {
		friend_requests: Array<Dictionary<Object>>
	}

	declare class CloudACLsResponse extends CloudResponse {
		acls: Array<Dictionary<Object>>
	}

	declare class ListViewMarkerProps  {
		itemIndex: number;
		sectionIndex: number
	}

	declare class EventsAuthorizationResponse  {
		code: number;
		error: string;
		success: boolean
	}

	declare class PlayerQueue  {
		items: Array<Ti.Media.Item>
	}

	declare class CoverFlowImageType  {
		height: number;
		image: any;
		width: number
	}

	declare class BroadcastIntentOptions  {
		action: string;
		className: string;
		data: string;
		flags: number;
		packageName: string;
		url: string
	}

	declare class CloudUsersSecureResponse extends CloudResponse {
		accessToken: string;
		expiresIn: number
	}

	declare class CloudClientsResponse extends CloudResponse {
		ip_address: string;
		location: Dictionary<Object>
	}

	declare class PushNotificationErrorArg  {
		type: string
	}

	declare class CloudStatusesResponse extends CloudResponse {
		statuses: Array<Dictionary<Object>>
	}

	declare class windowToolbarParam  {
		animated: boolean;
		barColor: string;
		tintColor: string;
		translucent: boolean
	}

	declare class GeocodedAddress  {
		address: string;
		city: string;
		country: string;
		countryCode: string;
		country_code: string;
		displayAddress: string;
		latitude: string;
		longitude: string;
		postalCode: string;
		region1: string;
		region2: string;
		street: string;
		street1: string;
		zipcode: string
	}

	declare class ContactsCallbackArgs extends ErrorResponse {
		data: Array<Ti.Contacts.Person>
	}

	declare class zoomScaleOption  {
		animated: boolean
	}

	declare class LocationCoordinates  {
		accuracy: number;
		altitude: number;
		altitudeAccuracy: number;
		heading: number;
		latitude: number;
		longitude: number;
		speed: number;
		timestamp: number
	}

	declare class ActivityResult  {
		intent: Ti.Android.Intent;
		requestCode: number;
		resultCode: number
	}

	declare class CloudUsersSecureDialog  {
		title: string
	}

	declare class CloudFriendsResponse extends CloudResponse {
		users: Array<Dictionary<Object>>
	}

	declare class PhotoGalleryOptionsType  {
		allowEditing: boolean;
		animated: boolean;
		arrowDirection: number;
		autohide: boolean;
		cancel: (...args: any[]) => any;
		error: (...args: any[]) => any;
		mediaTypes: Array<String>;
		popoverView: Ti.UI.View;
		success: (...args: any[]) => any
	}

	declare class NotificationParams  {
		alertAction: string;
		alertBody: string;
		alertLaunchImage: string;
		badge: number;
		category: string;
		date: Date;
		repeat: string;
		sound: string;
		timezone: string;
		userInfo: Dictionary<Object>
	}

	declare class daysOfTheWeekDictionary  {
		daysOfWeek: number;
		week: number
	}

	declare class Modules  {
		
	}

	declare class ReferenceInsets  {
		bottom: number;
		left: number;
		right: number;
		top: number
	}

	declare class hideStatusBarParams  {
		animated: boolean;
		animationStyle: number
	}

	declare class PreviewImageOptions  {
		error: (...args: any[]) => any;
		image: Ti.Blob;
		success: (...args: any[]) => any
	}

	declare class ListDataItem  {
		properties: Dictionary<Ti.UI.ListItem>;
		template: any
	}

	declare class ItemTemplate  {
		childTemplates: Array<ViewTemplate>;
		events: Dictionary<Object>;
		properties: Dictionary<Ti.UI.ListItem>
	}

	declare class MovieSize  {
		height: number;
		width: number
	}

	declare class CameraMediaItemType  {
		cropRect: CropRectType;
		media: Ti.Blob;
		mediaType: string
	}

	declare class HeadingResponse extends ErrorResponse {
		heading: HeadingData
	}

	declare class ListViewEdgeInsets  {
		bottom: number;
		left: number;
		right: number;
		top: number
	}

	declare class BoundaryIdentifier  {
		identifier: string;
		point1: Point;
		point2: Point
	}

	declare class GradientColorRef  {
		color: string;
		offset: number
	}

	declare class Font  {
		fontFamily: string;
		fontSize: any;
		fontStyle: string;
		fontWeight: string;
		textStyle: string
	}

	declare class CloudPlacesResponse extends CloudResponse {
		places: Array<Dictionary<Object>>
	}

	declare class EncodeNumberDict  {
		byteOrder: number;
		dest: Ti.Buffer;
		position: number;
		source: number;
		type: string
	}

	declare class showContactsParams  {
		animated: boolean;
		cancel: (...args: any[]) => any;
		fields: Array<String>;
		selectedPerson: (...args: any[]) => any;
		selectedProperty: (...args: any[]) => any
	}

	declare class LocationProviderDict  {
		accuracy: number;
		name: string;
		power: number
	}

	declare class FacebookDialogResponsev1  {
		cancelled: boolean;
		error: string;
		result: string;
		success: boolean
	}

	declare class CloudFilesResponse extends CloudResponse {
		files: Array<Dictionary<Object>>
	}

	declare class hideParams  {
		animated: boolean
	}

	declare class SecurityManagerProtocol  {
		connectionDelegateForUrl(url: any): APSConnectionDelegate;
		getKeyManagers(proxy: any): Array<Object>;
		getTrustManagers(proxy: any): Array<Object>;
		willHandleURL(url: any): boolean
	}

	declare class openWindowParams  {
		activityEnterAnimation: number;
		activityExitAnimation: number;
		animated: boolean;
		bottom: any;
		fullscreen: boolean;
		height: any;
		left: any;
		modal: boolean;
		modalStyle: number;
		modalTransitionStyle: number;
		navBarHidden: boolean;
		right: any;
		top: any;
		transition: number;
		width: any
	}

	declare class Gradient  {
		backfillEnd: boolean;
		backfillStart: boolean;
		colors: any;
		endPoint: Point;
		endRadius: number;
		startPoint: Point;
		startRadius: number;
		type: string
	}

	declare class showStatusBarParams  {
		animated: boolean;
		animationStyle: number
	}

	declare class transitionAnimationParam  {
		duration: number;
		tranistionTo: Ti.UI.Animation;
		transitionFrom: Ti.UI.Animation
	}

	declare class MapPointType  {
		latitude: number;
		longitude: number
	}

	declare class CloudKeyValuesResponse extends CloudResponse {
		keyvalues: Array<Dictionary<Object>>
	}

	declare class TableViewEdgeInsets  {
		bottom: number;
		left: number;
		right: number;
		top: number
	}

	declare class ReverseGeocodeResponse extends ErrorResponse {
		places: Array<GeocodedAddress>
	}

	declare class contentOffsetOption  {
		animated: boolean
	}

	declare class Attribute  {
		range: Array<Number>;
		type: number;
		value: number
	}

	declare class PushNotificationSuccessArg  {
		deviceToken: string;
		type: string
	}

	declare class PushNotificationData  {
		data: Dictionary<Object>;
		inBackground: boolean
	}

	declare class closeWindowParams  {
		activityEnterAnimation: number;
		activityExitAnimation: number;
		animated: boolean
	}

	declare class CloudLikesResponse extends CloudResponse {
		likes: Array<Dictionary<Object>>
	}

	declare class showParams  {
		animated: boolean;
		rect: Dimension;
		view: Ti.UI.View
	}

	declare class PreviewImageError  {
		message: string
	}

	declare class CloudMessagesResponse extends CloudResponse {
		messages: Array<Dictionary<Object>>
	}

	declare class CloudPushNotificationsShowChannelResponse extends CloudResponse {
		devices: Dictionary<Object>
	}

	declare class ImageAsCroppedDict  {
		height: number;
		width: number;
		x: number;
		y: number
	}

	declare class UserNotificationSettings  {
		categories: Array<Ti.App.iOS.UserNotificationCategory>;
		types: Array<Number>
	}

	declare class TableViewAnimationProperties  {
		animated: boolean;
		animationStyle: number;
		position: number
	}

	declare class EncodeStringDict  {
		charset: string;
		dest: Ti.Buffer;
		destPosition: number;
		source: string;
		sourceLength: number;
		sourcePosition: number
	}

	
}

declare module 'npm$namespace$Ti' {
		declare export interface IOStream {
		close(): void,
		isReadable(): boolean,
		isWriteable(): boolean,
		read(buffer: Ti.Buffer, offset?: number, length?: number): number,
		write(buffer: Ti.Buffer, offset?: number, length?: number): number
	}

	declare export interface API {
		debug(message: Array<String>): void,
		debug(message: string): void,
		error(message: Array<String>): void,
		error(message: string): void,
		info(message: Array<String>): void,
		info(message: string): void,
		log(level: string, message: Array<String>): void,
		log(level: string, message: string): void,
		timestamp(message: Array<String>): void,
		timestamp(message: string): void,
		trace(message: Array<String>): void,
		trace(message: string): void,
		warn(message: Array<String>): void,
		warn(message: string): void
	}

	declare export interface Proxy {
		apiName: string,
		bubbleParent: boolean,
		addEventListener(name: string, callback: (...args: any[]) => any): void,
		applyProperties(props: Dictionary<Object>): void,
		fireEvent(name: string, event: Dictionary<Object>): void,
		getApiName(): string,
		getBubbleParent(): boolean,
		removeEventListener(name: string, callback: (...args: any[]) => any): void,
		setBubbleParent(bubbleParent: boolean): void
	}

	declare export interface Blob {
		file: Ti.Filesystem.File,
		height: number,
		length: number,
		mimeType: string,
		nativePath: string,
		size: number,
		text: string,
		width: number,
		append(blob: Ti.Blob): void,
		getFile(): Ti.Filesystem.File,
		getHeight(): number,
		getLength(): number,
		getMimeType(): string,
		getNativePath(): string,
		getSize(): number,
		getText(): string,
		getWidth(): number,
		imageAsCropped(options: Dictionary<ImageAsCroppedDict>): Ti.Blob,
		imageAsResized(width: number, height: number): Ti.Blob,
		imageAsThumbnail(size: number, borderSize?: number, cornerRadius?: number): Ti.Blob,
		imageWithAlpha(): Ti.Blob,
		imageWithRoundedCorner(cornerSize: number, borderSize?: number): Ti.Blob,
		imageWithTransparentBorder(size: number): Ti.Blob,
		toString(): string
	}

	declare export interface Codec {
		BIG_ENDIAN: number,
		CHARSET_ASCII: string,
		CHARSET_ISO_LATIN_1: string,
		CHARSET_UTF16: string,
		CHARSET_UTF16BE: string,
		CHARSET_UTF16LE: string,
		CHARSET_UTF8: string,
		LITTLE_ENDIAN: number,
		TYPE_BYTE: string,
		TYPE_DOUBLE: string,
		TYPE_FLOAT: string,
		TYPE_INT: string,
		TYPE_LONG: string,
		TYPE_SHORT: string,
		decodeNumber(options: DecodeNumberDict): number,
		decodeString(options: DecodeStringDict): string,
		encodeNumber(options: EncodeNumberDict): number,
		encodeString(options: Dictionary<EncodeStringDict>): number,
		getNativeByteOrder(): number
	}

	declare export interface Locale {
		currentCountry: string,
		currentLanguage: string,
		currentLocale: string,
		formatTelephoneNumber(number: string): string,
		getCurrencyCode(locale: string): string,
		getCurrencySymbol(currencyCode: string): string,
		getCurrentCountry(): string,
		getCurrentLanguage(): string,
		getCurrentLocale(): string,
		getLocaleCurrencySymbol(locale: string): string,
		getString(key: string, hint?: string): string
	}

	declare export interface CloudPush {
		SERVICE_DISABLED: number,
		SERVICE_INVALID: number,
		SERVICE_MISSING: number,
		SERVICE_VERSION_UPDATE_REQUIRED: number,
		SUCCESS: number,
		enabled: boolean,
		focusAppOnPush: boolean,
		showAppOnTrayClick: boolean,
		showTrayNotification: boolean,
		showTrayNotificationsWhenFocused: boolean,
		singleCallback: boolean,
		clearStatus(): void,
		getEnabled(): boolean,
		getFocusAppOnPush(): boolean,
		getShowAppOnTrayClick(): boolean,
		getShowTrayNotification(): boolean,
		getShowTrayNotificationsWhenFocused(): boolean,
		getSingleCallback(): boolean,
		isGooglePlayServicesAvailable(): number,
		retrieveDeviceToken(config: CloudPushNotificationConfig): void,
		setEnabled(enabled: boolean): void,
		setFocusAppOnPush(focusAppOnPush: boolean): void,
		setShowAppOnTrayClick(showAppOnTrayClick: boolean): void,
		setShowTrayNotification(showTrayNotification: boolean): void,
		setShowTrayNotificationsWhenFocused(showTrayNotificationsWhenFocused: boolean): void,
		setSingleCallback(singleCallback: boolean): void
	}

	declare export interface Buffer {
		byteOrder: number,
		length: number,
		type: string,
		value: any,
		append(sourceBuffer: Ti.Buffer, sourceOffset?: number, sourceLength?: number): number,
		clear(): void,
		clone(offset?: number, length?: number): Ti.Buffer,
		copy(
		sourceBuffer: Ti.Buffer, offset: number, sourceOffset?: number, sourceLength?: number
	): number,
		fill(fillByte: number, offset?: number, length?: number): void,
		getByteOrder(): number,
		getLength(): number,
		getType(): string,
		getValue(): any,
		insert(
		sourceBuffer: Ti.Buffer, offset: number, sourceOffset?: number, sourceLength?: number
	): number,
		release(): void,
		setLength(length: number): void,
		toBlob(): Ti.Blob,
		toString(): string
	}

	declare export interface Yahoo {
		yql(yql: string, callback: (...args: any[]) => any): void
	}

	declare export interface Gesture {
		landscape: boolean,
		orientation: number,
		portrait: boolean,
		getLandscape(): boolean,
		getOrientation(): number,
		getPortrait(): boolean,
		isFaceDown(): boolean,
		isFaceUp(): boolean,
		isLandscape(): boolean,
		isPortrait(): boolean
	}

	declare export interface Analytics {
		lastEvent: string,
		addEvent(type: string, name: string, data?: any): void,
		featureEvent(name: string, data?: any): void,
		getLastEvent(): string,
		navEvent(from: string, to: string, name?: string, data?: any): void,
		settingsEvent(name: string, data?: any): void,
		timedEvent(name: string, start: Date, stop: Date, duration: number, data?: any): void,
		userEvent(name: string, data?: any): void
	}

	declare export interface Utils {
		base64decode(obj: string): Ti.Blob,
		base64decode(obj: Ti.Blob): Ti.Blob,
		base64encode(obj: string): Ti.Blob,
		base64encode(obj: Ti.Blob): Ti.Blob,
		base64encode(obj: Ti.Filesystem.File): Ti.Blob,
		md5HexDigest(obj: string): string,
		md5HexDigest(obj: Ti.Blob): string,
		sha1(obj: string): string,
		sha1(obj: Ti.Blob): string,
		sha256(obj: string): string,
		sha256(obj: Ti.Blob): string
	}

	declare export interface Event {
		bubbles: boolean,
		cancelBubble: boolean,
		source: any,
		type: string
	}

	declare export interface Stream {
		MODE_APPEND: number,
		MODE_READ: number,
		MODE_WRITE: number,
		createStream(params: CreateStreamArgs): Ti.IOStream,
		pump(
		inputStream: Ti.IOStream, handler: (...args: any[]) => any, maxChunkSize: number, isAsync?: boolean
	): void,
		read(
		sourceStream: Ti.IOStream, buffer: Ti.Buffer, offset?: number, length?: number, resultsCallback?: (...args: any[]) => any
	): void,
		readAll(
		sourceStream: Ti.IOStream, buffer?: Ti.Buffer, resultsCallback?: (...args: any[]) => any
	): any,
		write(
		outputStream: Ti.IOStream, buffer: Ti.Buffer, offset?: number, length?: number, resultsCallback?: (...args: any[]) => any
	): void,
		writeStream(
		inputStream: Ti.IOStream, outputStream: Ti.IOStream, maxChunkSize: number, resultsCallback?: (...args: any[]) => any
	): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createBuffer(params: CreateBufferArgs): Ti.Buffer

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getBuildDate(): string

	declare export function getBuildHash(): string

	declare export function getUserAgent(): string

	declare export function getVersion(): string

	declare export function include(name: string): void

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setUserAgent(userAgent: string): void

		
}

declare module 'XML' {
		declare export interface Entity {
		notationName: string,
		publicId: string,
		systemId: string,
		getNotationName(): string,
		getPublicId(): string,
		getSystemId(): string
	}

	declare export interface Node {
		ATTRIBUTE_NODE: number,
		CDATA_SECTION_NODE: number,
		COMMENT_NODE: number,
		DOCUMENT_FRAGMENT_NODE: number,
		DOCUMENT_NODE: number,
		DOCUMENT_TYPE_NODE: number,
		ELEMENT_NODE: number,
		ENTITY_NODE: number,
		ENTITY_REFERENCE_NODE: number,
		NOTATION_NODE: number,
		PROCESSING_INSTRUCTION_NODE: number,
		TEXT_NODE: number,
		attributes: Ti.XML.NamedNodeMap,
		childNodes: Ti.XML.NodeList,
		firstChild: Ti.XML.Node,
		lastChild: Ti.XML.Node,
		localName: string,
		namespaceURI: string,
		nextSibling: Ti.XML.Node,
		nodeName: string,
		nodeType: number,
		nodeValue: string,
		ownerDocument: Ti.XML.Document,
		parentNode: Ti.XML.Node,
		prefix: string,
		previousSibling: Ti.XML.Node,
		text: string,
		textContent: string,
		appendChild(newChild: Ti.XML.Node): Ti.XML.Node,
		cloneNode(deep: boolean): Ti.XML.Node,
		getAttributes(): Ti.XML.NamedNodeMap,
		getChildNodes(): Ti.XML.NodeList,
		getFirstChild(): Ti.XML.Node,
		getLastChild(): Ti.XML.Node,
		getLocalName(): string,
		getNamespaceURI(): string,
		getNextSibling(): Ti.XML.Node,
		getNodeName(): string,
		getNodeType(): number,
		getNodeValue(): string,
		getOwnerDocument(): Ti.XML.Document,
		getParentNode(): Ti.XML.Node,
		getPrefix(): string,
		getPreviousSibling(): Ti.XML.Node,
		getText(): string,
		getTextContent(): string,
		hasAttributes(): boolean,
		hasChildNodes(): boolean,
		insertBefore(newChild: Ti.XML.Node, refChild: Ti.XML.Node): Ti.XML.Node,
		isSupported(feature: string, version: string): boolean,
		normalize(): void,
		removeChild(oldChild: Ti.XML.Node): Ti.XML.Node,
		replaceChild(newChild: Ti.XML.Node, oldChild: Ti.XML.Node): Ti.XML.Node,
		setLocalName(localName: string): void,
		setNodeValue(nodeValue: string): void,
		setPrefix(prefix: string): void
	}

	declare export interface CharacterData {
		data: string,
		length: number,
		appendData(arg: string): void,
		deleteData(offset: number, count: number): void,
		getData(): string,
		getLength(): number,
		insertData(offset: number, arg: string): void,
		replaceData(offset: number, count: number, arg: string): void,
		setData(data: string): void,
		substringData(offset: number, count: number): string
	}

	declare export interface DOMImplementation {
		createDocument(
		namespaceURI: string, qualifiedName: string, doctype: Ti.XML.DocumentType
	): Ti.XML.Document,
		createDocumentType(qualifiedName: string, publicId: string, systemId: string): Ti.XML.DocumentType,
		hasFeature(feature: string, version: string): boolean
	}

	declare export interface Document {
		doctype: Ti.XML.DocumentType,
		documentElement: Ti.XML.Element,
		implementation: Ti.XML.DOMImplementation,
		createAttribute(name: string): Ti.XML.Attr,
		createAttributeNS(namespaceURI: string, name: string): Ti.XML.Attr,
		createCDATASection(data: string): Ti.XML.CDATASection,
		createComment(data: string): Ti.XML.Comment,
		createDocumentFragment(): Ti.XML.DocumentFragment,
		createElement(tagName: string): Ti.XML.Element,
		createElementNS(namespaceURI: string, name: string): Ti.XML.Element,
		createEntityReference(name: string): Ti.XML.EntityReference,
		createProcessingInstruction(target: string, data: string): Ti.XML.ProcessingInstruction,
		createTextNode(data: string): Ti.XML.Text,
		getDoctype(): Ti.XML.DocumentType,
		getDocumentElement(): Ti.XML.Element,
		getElementById(elementId: string): Ti.XML.Element,
		getElementsByTagName(tagname: string): Ti.XML.NodeList,
		getElementsByTagNameNS(namespaceURI: string, localname: string): Ti.XML.NodeList,
		getImplementation(): Ti.XML.DOMImplementation,
		importNode(importedNode: Ti.XML.Node, deep: boolean): Ti.XML.Node
	}

	declare export interface Attr {
		name: string,
		ownerElement: Ti.XML.Element,
		specified: boolean,
		value: string,
		getName(): string,
		getOwnerElement(): Ti.XML.Element,
		getSpecified(): boolean,
		getValue(): string,
		setValue(value: string): void
	}

	declare export interface ProcessingInstruction {
		data: string,
		target: string,
		getData(): string,
		getTarget(): string,
		setData(data: string): void
	}

	declare export interface NamedNodeMap {
		length: number,
		getLength(): number,
		getNamedItem(name: string): Ti.XML.Node,
		getNamedItemNS(namespaceURI: string, localName: string): Ti.XML.Node,
		item(index: number): Ti.XML.Node,
		removeNamedItem(name: string): Ti.XML.Node,
		removeNamedItemNS(namespaceURI: string, localName: string): Ti.XML.Node,
		setNamedItem(node: Ti.XML.Node): Ti.XML.Node,
		setNamedItemNS(node: Ti.XML.Node): Ti.XML.Node
	}

	declare export interface Text {
		splitText(offset: number): Ti.XML.Text
	}

	declare export interface Notation {
		publicId: string,
		systemId: string,
		getPublicId(): string,
		getSystemId(): string
	}

	declare export interface NodeList {
		length: number,
		getLength(): number,
		item(index: number): Ti.XML.Node
	}

	declare export interface DocumentType {
		entities: Ti.XML.NamedNodeMap,
		internalSubset: string,
		name: string,
		notations: Ti.XML.NamedNodeMap,
		publicId: string,
		systemId: string,
		getEntities(): Ti.XML.NamedNodeMap,
		getInternalSubset(): string,
		getName(): string,
		getNotations(): Ti.XML.NamedNodeMap,
		getPublicId(): string,
		getSystemId(): string
	}

	declare export interface Element {
		tagName: string,
		getAttribute(name: string): string,
		getAttributeNS(namespaceURI: string, localName: string): string,
		getAttributeNode(name: string): Ti.XML.Attr,
		getAttributeNodeNS(namespaceURI: string, localName: string): Ti.XML.Attr,
		getElementsByTagName(name: string): Ti.XML.NodeList,
		getElementsByTagNameNS(namespaceURI: string, localName: string): Ti.XML.NodeList,
		getTagName(): string,
		hasAttribute(name: string): boolean,
		hasAttributeNS(namespaceURI: string, localName: string): boolean,
		removeAttribute(name: string): void,
		removeAttributeNS(namespaceURI: string, localName: string): void,
		removeAttributeNode(oldAttr: Ti.XML.Attr): void,
		setAttribute(name: string, value: string): void,
		setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void,
		setAttributeNode(newAttr: Ti.XML.Attr): Ti.XML.Attr,
		setAttributeNodeNS(newAttr: Ti.XML.Attr): Ti.XML.Attr
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function parseString(xml: string): Ti.XML.Document

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function serializeToString(node: Ti.XML.Node): string

	declare export function setBubbleParent(bubbleParent: boolean): void

		
}

declare module 'UI' {
		declare export interface TextArea {
		appearance: number,
		attributedString: Ti.UI.iOS.AttributedString,
		autoLink: number,
		autocapitalization: number,
		autocorrect: boolean,
		clearOnEdit: boolean,
		color: string,
		editable: boolean,
		ellipsize: boolean,
		enableReturnKey: boolean,
		font: Font,
		handleLinks: boolean,
		hintText: string,
		keyboardToolbar: any,
		keyboardToolbarColor: string,
		keyboardToolbarHeight: number,
		keyboardType: number,
		maxLength: number,
		returnKeyType: number,
		scrollable: boolean,
		scrollsToTop: boolean,
		selection: textAreaSelectedParams,
		suppressReturn: boolean,
		textAlign: any,
		value: string,
		verticalAlign: any,
		blur(): void,
		focus(): void,
		getAppearance(): number,
		getAttributedString(): Ti.UI.iOS.AttributedString,
		getAutoLink(): number,
		getAutocapitalization(): number,
		getAutocorrect(): boolean,
		getClearOnEdit(): boolean,
		getColor(): string,
		getEditable(): boolean,
		getEllipsize(): boolean,
		getEnableReturnKey(): boolean,
		getFont(): Font,
		getHandleLinks(): boolean,
		getHintText(): string,
		getKeyboardToolbar(): any,
		getKeyboardToolbarColor(): string,
		getKeyboardToolbarHeight(): number,
		getKeyboardType(): number,
		getMaxLength(): number,
		getReturnKeyType(): number,
		getScrollable(): boolean,
		getScrollsToTop(): boolean,
		getSelection(): textAreaSelectedParams,
		getSuppressReturn(): boolean,
		getTextAlign(): any,
		getValue(): string,
		getVerticalAlign(): any,
		hasText(): boolean,
		setAppearance(appearance: number): void,
		setAttributedString(attributedString: Ti.UI.iOS.AttributedString): void,
		setAutoLink(autoLink: number): void,
		setAutocapitalization(autocapitalization: number): void,
		setAutocorrect(autocorrect: boolean): void,
		setClearOnEdit(clearOnEdit: boolean): void,
		setColor(color: string): void,
		setEditable(editable: boolean): void,
		setEllipsize(ellipsize: boolean): void,
		setEnableReturnKey(enableReturnKey: boolean): void,
		setFont(font: Font): void,
		setHandleLinks(handleLinks: boolean): void,
		setHintText(hintText: string): void,
		setKeyboardToolbar(keyboardToolbar: Array<Ti.UI.View>): void,
		setKeyboardToolbar(keyboardToolbar: Ti.UI.iOS.Toolbar): void,
		setKeyboardToolbarColor(keyboardToolbarColor: string): void,
		setKeyboardToolbarHeight(keyboardToolbarHeight: number): void,
		setKeyboardType(keyboardType: number): void,
		setMaxLength(maxLength: number): void,
		setReturnKeyType(returnKeyType: number): void,
		setScrollable(scrollable: boolean): void,
		setScrollsToTop(scrollsToTop: boolean): void,
		setSelection(start: number, end: number): void,
		setSuppressReturn(suppressReturn: boolean): void,
		setTextAlign(textAlign: string): void,
		setTextAlign(textAlign: number): void,
		setValue(value: string): void,
		setVerticalAlign(verticalAlign: number): void,
		setVerticalAlign(verticalAlign: string): void
	}

	declare export interface View {
		accessibilityHidden: boolean,
		accessibilityHint: string,
		accessibilityLabel: string,
		accessibilityValue: string,
		anchorPoint: Point,
		animatedCenter: Point,
		backgroundColor: string,
		backgroundDisabledColor: string,
		backgroundDisabledImage: string,
		backgroundFocusedColor: string,
		backgroundFocusedImage: string,
		backgroundGradient: Gradient,
		backgroundImage: string,
		backgroundLeftCap: number,
		backgroundRepeat: boolean,
		backgroundSelectedColor: string,
		backgroundSelectedImage: string,
		backgroundTopCap: number,
		borderColor: string,
		borderRadius: number,
		borderWidth: number,
		bottom: any,
		center: Point,
		children: Array<Ti.UI.View>,
		clipMode: number,
		enabled: boolean,
		focusable: boolean,
		height: any,
		horizontalWrap: boolean,
		keepScreenOn: boolean,
		layout: string,
		left: any,
		opacity: number,
		overrideCurrentAnimation: boolean,
		pullBackgroundColor: string,
		rect: Dimension,
		right: any,
		size: Dimension,
		softKeyboardOnFocus: number,
		tintColor: any,
		top: any,
		touchEnabled: boolean,
		transform: any,
		viewShadowColor: string,
		viewShadowOffset: Point,
		viewShadowRadius: number,
		visible: boolean,
		width: any,
		zIndex: number,
		add(view: Ti.UI.View): void,
		animate(animation: Ti.UI.Animation, callback: (...args: any[]) => any): void,
		animate(
		animation: Dictionary<Ti.UI.Animation>, callback: (...args: any[]) => any
	): void,
		convertPointToView(point: Point, destinationView: Ti.UI.View): Point,
		finishLayout(): void,
		getAccessibilityHidden(): boolean,
		getAccessibilityHint(): string,
		getAccessibilityLabel(): string,
		getAccessibilityValue(): string,
		getAnchorPoint(): Point,
		getAnimatedCenter(): Point,
		getBackgroundColor(): string,
		getBackgroundDisabledColor(): string,
		getBackgroundDisabledImage(): string,
		getBackgroundFocusedColor(): string,
		getBackgroundFocusedImage(): string,
		getBackgroundGradient(): Gradient,
		getBackgroundImage(): string,
		getBackgroundLeftCap(): number,
		getBackgroundRepeat(): boolean,
		getBackgroundSelectedColor(): string,
		getBackgroundSelectedImage(): string,
		getBackgroundTopCap(): number,
		getBorderColor(): string,
		getBorderRadius(): number,
		getBorderWidth(): number,
		getBottom(): any,
		getCenter(): Point,
		getChildren(): Array<Ti.UI.View>,
		getClipMode(): number,
		getEnabled(): boolean,
		getFocusable(): boolean,
		getHeight(): any,
		getHorizontalWrap(): boolean,
		getKeepScreenOn(): boolean,
		getLayout(): string,
		getLeft(): any,
		getOpacity(): number,
		getOverrideCurrentAnimation(): boolean,
		getPullBackgroundColor(): string,
		getRect(): Dimension,
		getRight(): any,
		getSize(): Dimension,
		getSoftKeyboardOnFocus(): number,
		getTintColor(): string,
		getTop(): any,
		getTouchEnabled(): boolean,
		getTransform(): any,
		getViewShadowColor(): string,
		getViewShadowOffset(): Point,
		getViewShadowRadius(): number,
		getVisible(): boolean,
		getWidth(): any,
		getZIndex(): number,
		hide(): void,
		remove(view: Ti.UI.View): void,
		removeAllChildren(): void,
		setAccessibilityHidden(accessibilityHidden: boolean): void,
		setAccessibilityHint(accessibilityHint: string): void,
		setAccessibilityLabel(accessibilityLabel: string): void,
		setAccessibilityValue(accessibilityValue: string): void,
		setAnchorPoint(anchorPoint: Point): void,
		setBackgroundColor(backgroundColor: string): void,
		setBackgroundDisabledColor(backgroundDisabledColor: string): void,
		setBackgroundDisabledImage(backgroundDisabledImage: string): void,
		setBackgroundFocusedColor(backgroundFocusedColor: string): void,
		setBackgroundFocusedImage(backgroundFocusedImage: string): void,
		setBackgroundGradient(backgroundGradient: Gradient): void,
		setBackgroundImage(backgroundImage: string): void,
		setBackgroundLeftCap(backgroundLeftCap: number): void,
		setBackgroundRepeat(backgroundRepeat: boolean): void,
		setBackgroundSelectedColor(backgroundSelectedColor: string): void,
		setBackgroundSelectedImage(backgroundSelectedImage: string): void,
		setBackgroundTopCap(backgroundTopCap: number): void,
		setBorderColor(borderColor: string): void,
		setBorderRadius(borderRadius: number): void,
		setBorderWidth(borderWidth: number): void,
		setBottom(bottom: number): void,
		setBottom(bottom: string): void,
		setCenter(center: Point): void,
		setClipMode(clipMode: number): void,
		setEnabled(enabled: boolean): void,
		setFocusable(focusable: boolean): void,
		setHeight(height: number): void,
		setHeight(height: string): void,
		setHorizontalWrap(horizontalWrap: boolean): void,
		setKeepScreenOn(keepScreenOn: boolean): void,
		setLayout(layout: string): void,
		setLeft(left: number): void,
		setLeft(left: string): void,
		setOpacity(opacity: number): void,
		setPullBackgroundColor(pullBackgroundColor: string): void,
		setRight(right: number): void,
		setRight(right: string): void,
		setSoftKeyboardOnFocus(softKeyboardOnFocus: number): void,
		setTintColor(tintColor: string): void,
		setTop(top: number): void,
		setTop(top: string): void,
		setTouchEnabled(touchEnabled: boolean): void,
		setTransform(transform: Ti.UI._2DMatrix): void,
		setTransform(transform: Ti.UI._3DMatrix): void,
		setViewShadowColor(viewShadowColor: string): void,
		setViewShadowOffset(viewShadowOffset: Point): void,
		setViewShadowRadius(viewShadowRadius: number): void,
		setVisible(visible: boolean): void,
		setWidth(width: number): void,
		setWidth(width: string): void,
		setZIndex(zIndex: number): void,
		show(): void,
		startLayout(): void,
		toImage(callback?: (...args: any[]) => any, honorScaleFactor?: boolean): Ti.Blob,
		updateLayout(params: Dictionary<Object>): void
	}

	declare export interface Switch {
		color: string,
		font: Font,
		onTintColor: string,
		style: number,
		textAlign: any,
		thumbTintColor: string,
		tintColor: string,
		title: string,
		titleOff: string,
		titleOn: string,
		value: boolean,
		verticalAlign: any,
		getColor(): string,
		getFont(): Font,
		getOnTintColor(): string,
		getStyle(): number,
		getTextAlign(): any,
		getThumbTintColor(): string,
		getTitle(): string,
		getTitleOff(): string,
		getTitleOn(): string,
		getValue(): boolean,
		getVerticalAlign(): any,
		setColor(color: string): void,
		setFont(font: Font): void,
		setOnTintColor(onTintColor: string): void,
		setStyle(style: number): void,
		setTextAlign(textAlign: string): void,
		setTextAlign(textAlign: number): void,
		setThumbTintColor(thumbTintColor: string): void,
		setTitle(title: string): void,
		setTitleOff(titleOff: string): void,
		setTitleOn(titleOn: string): void,
		setValue(value: boolean): void,
		setVerticalAlign(verticalAlign: number): void,
		setVerticalAlign(verticalAlign: string): void
	}

	declare export interface DashboardItem {
		badge: number,
		canDelete: boolean,
		image: any,
		selectedImage: any,
		getBadge(): number,
		getCanDelete(): boolean,
		getImage(): any,
		getSelectedImage(): any,
		setBadge(badge: number): void,
		setCanDelete(canDelete: boolean): void,
		setImage(image: string): void,
		setImage(image: Ti.Blob): void,
		setSelectedImage(selectedImage: string): void,
		setSelectedImage(selectedImage: Ti.Blob): void
	}

	declare export interface Tab {
		active: boolean,
		activeIcon: string,
		activeIconIsMask: any,
		badge: string,
		icon: string,
		iconIsmask: any,
		title: string,
		titleid: string,
		window: Ti.UI.Window,
		close(window: Ti.UI.Window, options?: any): void,
		getActive(): boolean,
		getActiveIcon(): string,
		getActiveIconIsMask(): boolean,
		getBadge(): string,
		getIcon(): string,
		getIconIsmask(): boolean,
		getTitle(): string,
		getTitleid(): string,
		getWindow(): Ti.UI.Window,
		open(window: Ti.UI.Window, options: any): void,
		setActive(active: boolean): void,
		setActiveIcon(activeIcon: string): void,
		setActiveIconIsMask(activeIconIsMask: boolean): void,
		setBadge(badge: string): void,
		setIcon(icon: string): void,
		setIconIsmask(iconIsmask: boolean): void,
		setTitle(title: string): void,
		setTitleid(titleid: string): void,
		setWindow(window: Ti.UI.Window): void
	}

	declare export interface TableViewRow {
		className: string,
		color: string,
		editable: boolean,
		font: Font,
		hasCheck: boolean,
		hasChild: boolean,
		hasDetail: boolean,
		indentionLevel: number,
		leftImage: string,
		moveable: boolean,
		rightImage: string,
		selectedBackgroundColor: string,
		selectedBackgroundImage: string,
		selectedColor: string,
		selectionStyle: number,
		title: string,
		getClassName(): string,
		getColor(): string,
		getEditable(): boolean,
		getFont(): Font,
		getHasCheck(): boolean,
		getHasChild(): boolean,
		getHasDetail(): boolean,
		getIndentionLevel(): number,
		getLeftImage(): string,
		getMoveable(): boolean,
		getRightImage(): string,
		getSelectedBackgroundColor(): string,
		getSelectedBackgroundImage(): string,
		getSelectedColor(): string,
		getSelectionStyle(): number,
		getTitle(): string,
		setClassName(className: string): void,
		setColor(color: string): void,
		setEditable(editable: boolean): void,
		setFont(font: Font): void,
		setHasCheck(hasCheck: boolean): void,
		setHasChild(hasChild: boolean): void,
		setHasDetail(hasDetail: boolean): void,
		setIndentionLevel(indentionLevel: number): void,
		setLeftImage(leftImage: string): void,
		setMoveable(moveable: boolean): void,
		setRightImage(rightImage: string): void,
		setSelectedBackgroundColor(selectedBackgroundColor: string): void,
		setSelectedBackgroundImage(selectedBackgroundImage: string): void,
		setSelectedColor(selectedColor: string): void,
		setSelectionStyle(selectionStyle: number): void,
		setTitle(title: string): void
	}

	declare export interface PickerRow {
		color: string,
		font: Font,
		fontSize: number,
		title: string,
		getColor(): string,
		getFont(): Font,
		getFontSize(): number,
		getTitle(): string,
		setColor(color: string): void,
		setFont(font: Font): void,
		setFontSize(fontSize: number): void,
		setTitle(title: string): void
	}

	declare export interface ButtonBar {
		index: number,
		labels: any,
		style: number,
		getIndex(): number,
		getLabels(): any,
		getStyle(): number,
		setIndex(index: number): void,
		setLabels(labels: Array<String>): void,
		setLabels(labels: Array<BarItemType>): void,
		setStyle(style: number): void
	}

	declare export interface Slider {
		disabledLeftTrackImage: string,
		disabledRightTrackImage: string,
		disabledThumbImage: string,
		highlightedLeftTrackImage: string,
		highlightedRightTrackImage: string,
		highlightedThumbImage: string,
		leftTrackImage: string,
		leftTrackLeftCap: number,
		leftTrackTopCap: number,
		max: number,
		maxRange: number,
		min: number,
		minRange: number,
		rightTrackImage: string,
		rightTrackLeftCap: number,
		rightTrackTopCap: number,
		selectedLeftTrackImage: string,
		selectedRightTrackImage: string,
		selectedThumbImage: string,
		thumbImage: any,
		value: string,
		getDisabledLeftTrackImage(): string,
		getDisabledRightTrackImage(): string,
		getDisabledThumbImage(): string,
		getHighlightedLeftTrackImage(): string,
		getHighlightedRightTrackImage(): string,
		getHighlightedThumbImage(): string,
		getLeftTrackImage(): string,
		getLeftTrackLeftCap(): number,
		getLeftTrackTopCap(): number,
		getMax(): number,
		getMaxRange(): number,
		getMin(): number,
		getMinRange(): number,
		getRightTrackImage(): string,
		getRightTrackLeftCap(): number,
		getRightTrackTopCap(): number,
		getSelectedLeftTrackImage(): string,
		getSelectedRightTrackImage(): string,
		getSelectedThumbImage(): string,
		getThumbImage(): any,
		getValue(): string,
		setDisabledLeftTrackImage(disabledLeftTrackImage: string): void,
		setDisabledRightTrackImage(disabledRightTrackImage: string): void,
		setDisabledThumbImage(disabledThumbImage: string): void,
		setHighlightedLeftTrackImage(highlightedLeftTrackImage: string): void,
		setHighlightedRightTrackImage(highlightedRightTrackImage: string): void,
		setHighlightedThumbImage(highlightedThumbImage: string): void,
		setLeftTrackImage(leftTrackImage: string): void,
		setLeftTrackLeftCap(leftTrackLeftCap: number): void,
		setLeftTrackTopCap(leftTrackTopCap: number): void,
		setMax(max: number): void,
		setMaxRange(maxRange: number): void,
		setMin(min: number): void,
		setMinRange(minRange: number): void,
		setRightTrackImage(rightTrackImage: string): void,
		setRightTrackLeftCap(rightTrackLeftCap: number): void,
		setRightTrackTopCap(rightTrackTopCap: number): void,
		setSelectedLeftTrackImage(selectedLeftTrackImage: string): void,
		setSelectedRightTrackImage(selectedRightTrackImage: string): void,
		setSelectedThumbImage(selectedThumbImage: string): void,
		setThumbImage(thumbImage: string): void,
		setThumbImage(thumbImage: Ti.Blob): void,
		setValue(value: number, options?: Dictionary<Object>): void
	}

	declare export interface DashboardView {
		columnCount: number,
		data: Array<Ti.UI.DashboardItem>,
		editable: boolean,
		rowCount: number,
		wobble: boolean,
		getColumnCount(): number,
		getData(): Array<Ti.UI.DashboardItem>,
		getEditable(): boolean,
		getRowCount(): number,
		getWobble(): boolean,
		setData(data: Array<Ti.UI.DashboardItem>): void,
		setEditable(editable: boolean): void,
		setWobble(wobble: boolean): void,
		startEditing(): void,
		stopEditing(): void
	}

	declare export interface ListItem {
		accessoryType: number,
		backgroundColor: string,
		backgroundGradient: Gradient,
		backgroundImage: string,
		canEdit: boolean,
		canMove: boolean,
		color: string,
		font: Font,
		height: any,
		image: string,
		itemId: string,
		searchableText: string,
		selectedBackgroundColor: string,
		selectedBackgroundGradient: Gradient,
		selectedBackgroundImage: string,
		selectionStyle: number,
		subtitle: string,
		title: string
	}

	declare export interface AlertDialog {
		androidView: Ti.UI.View,
		buttonNames: Array<String>,
		cancel: number,
		message: string,
		messageid: string,
		ok: string,
		okid: string,
		persistent: boolean,
		style: number,
		title: string,
		titleid: string,
		getAndroidView(): Ti.UI.View,
		getButtonNames(): Array<String>,
		getCancel(): number,
		getMessage(): string,
		getOk(): string,
		getPersistent(): boolean,
		getStyle(): number,
		getTitle(): string,
		hide(): void,
		setAndroidView(androidView: Ti.UI.View): void,
		setCancel(cancel: number): void,
		setMessage(message: string): void,
		setOk(ok: string): void,
		setPersistent(persistent: boolean): void,
		setStyle(style: number): void,
		setTitle(title: string): void,
		show(): void
	}

	declare export interface _2DMatrix {
		a: number,
		b: number,
		c: number,
		d: number,
		tx: number,
		ty: number,
		getA(): number,
		getB(): number,
		getC(): number,
		getD(): number,
		getTx(): number,
		getTy(): number,
		invert(): Ti.UI._2DMatrix,
		multiply(t2: Ti.UI._2DMatrix): Ti.UI._2DMatrix,
		rotate(angle: number, toAngle?: number): Ti.UI._2DMatrix,
		scale(sx: number, sy: number, toSx?: number, toSy?: number): Ti.UI._2DMatrix,
		setA(a: number): void,
		setB(b: number): void,
		setC(c: number): void,
		setD(d: number): void,
		setTx(tx: number): void,
		setTy(ty: number): void,
		translate(tx: number, ty: number): Ti.UI._2DMatrix
	}

	declare export interface TabbedBar {
		index: number,
		labels: any,
		style: number,
		getIndex(): number,
		getLabels(): any,
		getStyle(): number,
		setIndex(index: number): void,
		setLabels(labels: Array<String>): void,
		setLabels(labels: Array<BarItemType>): void,
		setStyle(style: number): void
	}

	declare export interface Window {
		activity: Ti.Android.Activity,
		autoAdjustScrollViewInsets: boolean,
		backButtonTitle: string,
		backButtonTitleImage: any,
		barColor: string,
		barImage: string,
		exitOnClose: boolean,
		extendEdges: Array<Number>,
		flagSecure: boolean,
		fullscreen: boolean,
		hideShadow: boolean,
		includeOpaqueBars: boolean,
		leftNavButton: Ti.UI.View,
		leftNavButtons: Array<Ti.UI.View>,
		modal: boolean,
		navBarHidden: boolean,
		navTintColor: any,
		orientation: number,
		orientationModes: Array<Number>,
		rightNavButton: Ti.UI.View,
		rightNavButtons: Array<Ti.UI.View>,
		shadowImage: string,
		statusBarStyle: any,
		tabBarHidden: boolean,
		theme: string,
		title: string,
		titleAttributes: titleAttributesParams,
		titleControl: Ti.UI.View,
		titleImage: string,
		titlePrompt: string,
		titleid: string,
		titlepromptid: string,
		toolbar: Array<Object>,
		transitionAnimation: Ti.Proxy,
		translucent: boolean,
		url: string,
		windowFlags: number,
		windowPixelFormat: number,
		windowSoftInputMode: number,
		close(params?: Dictionary<Ti.UI.Animation>): void,
		close(params?: closeWindowParams): void,
		getActivity(): Ti.Android.Activity,
		getAutoAdjustScrollViewInsets(): boolean,
		getBackButtonTitle(): string,
		getBackButtonTitleImage(): any,
		getBarColor(): string,
		getBarImage(): string,
		getExitOnClose(): boolean,
		getExtendEdges(): Array<Number>,
		getFlagSecure(): boolean,
		getFullscreen(): boolean,
		getHideShadow(): boolean,
		getIncludeOpaqueBars(): boolean,
		getLeftNavButton(): Ti.UI.View,
		getLeftNavButtons(): Array<Ti.UI.View>,
		getModal(): boolean,
		getNavBarHidden(): boolean,
		getNavTintColor(): string,
		getOrientation(): number,
		getOrientationModes(): Array<Number>,
		getRightNavButton(): Ti.UI.View,
		getRightNavButtons(): Array<Ti.UI.View>,
		getShadowImage(): string,
		getStatusBarStyle(): number,
		getTabBarHidden(): boolean,
		getTheme(): string,
		getTitle(): string,
		getTitleAttributes(): titleAttributesParams,
		getTitleControl(): Ti.UI.View,
		getTitleImage(): string,
		getTitlePrompt(): string,
		getTitleid(): string,
		getTitlepromptid(): string,
		getToolbar(): Array<Object>,
		getTransitionAnimation(): Ti.Proxy,
		getTranslucent(): boolean,
		getUrl(): string,
		getWindowFlags(): number,
		getWindowPixelFormat(): number,
		getWindowSoftInputMode(): number,
		hideNavBar(options?: Dictionary<Object>): void,
		hideTabBar(): void,
		open(params?: openWindowParams): void,
		setAutoAdjustScrollViewInsets(autoAdjustScrollViewInsets: boolean): void,
		setBackButtonTitle(backButtonTitle: string): void,
		setBackButtonTitleImage(backButtonTitleImage: string): void,
		setBackButtonTitleImage(backButtonTitleImage: Ti.Blob): void,
		setBarColor(barColor: string): void,
		setBarImage(barImage: string): void,
		setExitOnClose(exitOnClose: boolean): void,
		setExtendEdges(extendEdges: Array<Number>): void,
		setFullscreen(fullscreen: boolean): void,
		setHideShadow(hideShadow: boolean): void,
		setIncludeOpaqueBars(includeOpaqueBars: boolean): void,
		setLeftNavButton(leftNavButton: Ti.UI.View): void,
		setLeftNavButtons(leftNavButtons: Array<Ti.UI.View>): void,
		setModal(modal: boolean): void,
		setNavBarHidden(navBarHidden: boolean): void,
		setNavTintColor(navTintColor: string): void,
		setOrientationModes(orientationModes: Array<Number>): void,
		setRightNavButton(rightNavButton: Ti.UI.View): void,
		setRightNavButtons(rightNavButtons: Array<Ti.UI.View>): void,
		setShadowImage(shadowImage: string): void,
		setStatusBarStyle(statusBarStyle: number): void,
		setTabBarHidden(tabBarHidden: boolean): void,
		setTitle(title: string): void,
		setTitleAttributes(titleAttributes: titleAttributesParams): void,
		setTitleControl(titleControl: Ti.UI.View): void,
		setTitleImage(titleImage: string): void,
		setTitlePrompt(titlePrompt: string): void,
		setTitleid(titleid: string): void,
		setTitlepromptid(titlepromptid: string): void,
		setToolbar(items: Array<Object>, params?: windowToolbarParam): void,
		setTransitionAnimation(transitionAnimation: Ti.Proxy): void,
		setTranslucent(translucent: boolean): void,
		setWindowPixelFormat(windowPixelFormat: number): void,
		showNavBar(options?: Dictionary<Object>): void
	}

	declare export interface TextField {
		appearance: number,
		attributedHintText: Ti.UI.iOS.AttributedString,
		attributedString: Ti.UI.iOS.AttributedString,
		autoLink: number,
		autocapitalization: number,
		autocorrect: boolean,
		borderStyle: number,
		clearButtonMode: number,
		clearOnEdit: boolean,
		color: string,
		editable: boolean,
		ellipsize: boolean,
		enableReturnKey: boolean,
		font: Font,
		hintText: string,
		keyboardToolbar: any,
		keyboardToolbarColor: string,
		keyboardToolbarHeight: number,
		keyboardType: number,
		leftButton: any,
		leftButtonMode: number,
		leftButtonPadding: number,
		maxLength: number,
		minimumFontSize: number,
		paddingLeft: number,
		paddingRight: number,
		passwordMask: boolean,
		returnKeyType: number,
		rightButton: any,
		rightButtonMode: number,
		rightButtonPadding: number,
		selection: textFieldSelectedParams,
		suppressReturn: boolean,
		textAlign: any,
		value: string,
		verticalAlign: any,
		blur(): void,
		focus(): void,
		getAppearance(): number,
		getAttributedHintText(): Ti.UI.iOS.AttributedString,
		getAttributedString(): Ti.UI.iOS.AttributedString,
		getAutoLink(): number,
		getAutocapitalization(): number,
		getAutocorrect(): boolean,
		getBorderStyle(): number,
		getClearButtonMode(): number,
		getClearOnEdit(): boolean,
		getColor(): string,
		getEditable(): boolean,
		getEllipsize(): boolean,
		getEnableReturnKey(): boolean,
		getFont(): Font,
		getHintText(): string,
		getKeyboardToolbar(): any,
		getKeyboardToolbarColor(): string,
		getKeyboardToolbarHeight(): number,
		getKeyboardType(): number,
		getLeftButton(): any,
		getLeftButtonMode(): number,
		getLeftButtonPadding(): number,
		getMaxLength(): number,
		getMinimumFontSize(): number,
		getPaddingLeft(): number,
		getPaddingRight(): number,
		getPasswordMask(): boolean,
		getReturnKeyType(): number,
		getRightButton(): any,
		getRightButtonMode(): number,
		getRightButtonPadding(): number,
		getSelection(): textFieldSelectedParams,
		getSuppressReturn(): boolean,
		getTextAlign(): any,
		getValue(): string,
		getVerticalAlign(): any,
		hasText(): boolean,
		setAppearance(appearance: number): void,
		setAttributedHintText(attributedHintText: Ti.UI.iOS.AttributedString): void,
		setAttributedString(attributedString: Ti.UI.iOS.AttributedString): void,
		setAutoLink(autoLink: number): void,
		setAutocapitalization(autocapitalization: number): void,
		setAutocorrect(autocorrect: boolean): void,
		setBorderStyle(borderStyle: number): void,
		setClearButtonMode(clearButtonMode: number): void,
		setClearOnEdit(clearOnEdit: boolean): void,
		setColor(color: string): void,
		setEditable(editable: boolean): void,
		setEllipsize(ellipsize: boolean): void,
		setEnableReturnKey(enableReturnKey: boolean): void,
		setFont(font: Font): void,
		setHintText(hintText: string): void,
		setKeyboardToolbar(keyboardToolbar: Array<Ti.UI.View>): void,
		setKeyboardToolbar(keyboardToolbar: Ti.UI.iOS.Toolbar): void,
		setKeyboardToolbarColor(keyboardToolbarColor: string): void,
		setKeyboardToolbarHeight(keyboardToolbarHeight: number): void,
		setKeyboardType(keyboardType: number): void,
		setLeftButton(leftButton: any): void,
		setLeftButtonMode(leftButtonMode: number): void,
		setLeftButtonPadding(leftButtonPadding: number): void,
		setMaxLength(maxLength: number): void,
		setMinimumFontSize(minimumFontSize: number): void,
		setPaddingLeft(paddingLeft: number): void,
		setPaddingRight(paddingRight: number): void,
		setPasswordMask(passwordMask: boolean): void,
		setReturnKeyType(returnKeyType: number): void,
		setRightButton(rightButton: any): void,
		setRightButtonMode(rightButtonMode: number): void,
		setRightButtonPadding(rightButtonPadding: number): void,
		setSelection(start: number, end: number): void,
		setSuppressReturn(suppressReturn: boolean): void,
		setTextAlign(textAlign: string): void,
		setTextAlign(textAlign: number): void,
		setValue(value: string): void,
		setVerticalAlign(verticalAlign: number): void,
		setVerticalAlign(verticalAlign: string): void
	}

	declare export interface _3DMatrix {
		m11: number,
		m12: number,
		m13: number,
		m14: number,
		m21: number,
		m22: number,
		m23: number,
		m24: number,
		m31: number,
		m32: number,
		m33: number,
		m34: number,
		m41: number,
		m42: number,
		m43: number,
		m44: number,
		getM11(): number,
		getM12(): number,
		getM13(): number,
		getM14(): number,
		getM21(): number,
		getM22(): number,
		getM23(): number,
		getM24(): number,
		getM31(): number,
		getM32(): number,
		getM33(): number,
		getM34(): number,
		getM41(): number,
		getM42(): number,
		getM43(): number,
		getM44(): number,
		invert(): Ti.UI._3DMatrix,
		multiply(t2: Ti.UI._3DMatrix): Ti.UI._3DMatrix,
		rotate(angle: number, x: number, y: number, z: number): Ti.UI._3DMatrix,
		scale(sx: number, sy: number, sz: number): Ti.UI._3DMatrix,
		setM11(m11: number): void,
		setM12(m12: number): void,
		setM13(m13: number): void,
		setM14(m14: number): void,
		setM21(m21: number): void,
		setM22(m22: number): void,
		setM23(m23: number): void,
		setM24(m24: number): void,
		setM31(m31: number): void,
		setM32(m32: number): void,
		setM33(m33: number): void,
		setM34(m34: number): void,
		setM41(m41: number): void,
		setM42(m42: number): void,
		setM43(m43: number): void,
		setM44(m44: number): void,
		translate(tx: number, ty: number, tz: number): Ti.UI._3DMatrix
	}

	declare export interface WebView {
		cacheMode: number,
		data: any,
		disableBounce: boolean,
		enableZoomControls: boolean,
		handlePlatformUrl: boolean,
		hideLoadIndicator: boolean,
		html: string,
		ignoreSslError: boolean,
		lightTouchEnabled: boolean,
		loading: boolean,
		onCreateWindow: (...args: any[]) => any,
		overScrollMode: number,
		pluginState: number,
		scalesPageToFit: boolean,
		scrollsToTop: boolean,
		showScrollbars: boolean,
		url: string,
		userAgent: string,
		willHandleTouches: boolean,
		canGoBack(): boolean,
		canGoForward(): boolean,
		evalJS(code: string): string,
		getCacheMode(): number,
		getData(): any,
		getDisableBounce(): boolean,
		getEnableZoomControls(): boolean,
		getHandlePlatformUrl(): boolean,
		getHideLoadIndicator(): boolean,
		getHtml(): string,
		getIgnoreSslError(): boolean,
		getLightTouchEnabled(): boolean,
		getLoading(): boolean,
		getOnCreateWindow(): (...args: any[]) => any,
		getOverScrollMode(): number,
		getPluginState(): number,
		getScalesPageToFit(): boolean,
		getScrollsToTop(): boolean,
		getShowScrollbars(): boolean,
		getUrl(): string,
		getUserAgent(): string,
		getWillHandleTouches(): boolean,
		goBack(): void,
		goForward(): void,
		pause(): void,
		release(): void,
		reload(): void,
		repaint(): void,
		resume(): void,
		setBasicAuthentication(username: string, password: string): void,
		setCacheMode(cacheMode: number): void,
		setData(data: Ti.Blob): void,
		setData(data: Ti.Filesystem.File): void,
		setDisableBounce(disableBounce: boolean): void,
		setEnableZoomControls(enableZoomControls: boolean): void,
		setHandlePlatformUrl(handlePlatformUrl: boolean): void,
		setHideLoadIndicator(hideLoadIndicator: boolean): void,
		setHtml(html: any, options?: Dictionary<Object>): void,
		setIgnoreSslError(ignoreSslError: boolean): void,
		setLightTouchEnabled(lightTouchEnabled: boolean): void,
		setLoading(loading: boolean): void,
		setOnCreateWindow(onCreateWindow: (...args: any[]) => any): void,
		setOverScrollMode(overScrollMode: number): void,
		setPluginState(pluginState: number): void,
		setScalesPageToFit(scalesPageToFit: boolean): void,
		setScrollsToTop(scrollsToTop: boolean): void,
		setShowScrollbars(showScrollbars: boolean): void,
		setUrl(url: string): void,
		setUserAgent(userAgent: string): void,
		setWillHandleTouches(willHandleTouches: boolean): void,
		stopLoading(hardStop: boolean): void
	}

	declare export interface Clipboard {
		clearData(type?: string): void,
		clearText(): void,
		getData(type: string): any,
		getText(): string,
		hasData(type: string): boolean,
		hasText(): any,
		setData(type: string, data: any): void,
		setText(text: string): void
	}

	declare export interface ScrollableView {
		cacheSize: number,
		clipViews: boolean,
		currentPage: number,
		disableBounce: boolean,
		hitRect: Dimension,
		overScrollMode: number,
		overlayEnabled: boolean,
		pagingControlAlpha: number,
		pagingControlColor: string,
		pagingControlHeight: number,
		pagingControlOnTop: boolean,
		pagingControlTimeout: number,
		scrollingEnabled: boolean,
		showPagingControl: boolean,
		views: Array<Ti.UI.View>,
		addView(view: Ti.UI.View): void,
		getCacheSize(): number,
		getClipViews(): boolean,
		getCurrentPage(): number,
		getDisableBounce(): boolean,
		getHitRect(): Dimension,
		getOverScrollMode(): number,
		getOverlayEnabled(): boolean,
		getPagingControlAlpha(): number,
		getPagingControlColor(): string,
		getPagingControlHeight(): number,
		getPagingControlOnTop(): boolean,
		getPagingControlTimeout(): number,
		getScrollingEnabled(): boolean,
		getShowPagingControl(): boolean,
		getViews(): Array<Ti.UI.View>,
		moveNext(): void,
		movePrevious(): void,
		removeView(view: number): void,
		removeView(view: Ti.UI.View): void,
		scrollToView(view: number): void,
		scrollToView(view: Ti.UI.View): void,
		setCacheSize(cacheSize: number): void,
		setCurrentPage(currentPage: number): void,
		setDisableBounce(disableBounce: boolean): void,
		setHitRect(hitRect: Dimension): void,
		setOverScrollMode(overScrollMode: number): void,
		setOverlayEnabled(overlayEnabled: boolean): void,
		setPagingControlAlpha(pagingControlAlpha: number): void,
		setPagingControlColor(pagingControlColor: string): void,
		setPagingControlHeight(pagingControlHeight: number): void,
		setPagingControlOnTop(pagingControlOnTop: boolean): void,
		setScrollingEnabled(scrollingEnabled: boolean): void,
		setShowPagingControl(showPagingControl: boolean): void,
		setViews(views: Array<Ti.UI.View>): void
	}

	declare export interface ListSection {
		footerTitle: string,
		footerView: Ti.UI.View,
		headerTitle: string,
		headerView: Ti.UI.View,
		items: Array<ListDataItem>,
		appendItems(dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties): void,
		deleteItemsAt(
		itemIndex: number, count: number, animation?: ListViewAnimationProperties
	): void,
		getFooterTitle(): string,
		getFooterView(): Ti.UI.View,
		getHeaderTitle(): string,
		getHeaderView(): Ti.UI.View,
		getItemAt(itemIndex: number): ListDataItem,
		getItems(): Array<ListDataItem>,
		insertItemsAt(
		itemIndex: number, dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties
	): void,
		replaceItemsAt(
		index: number, count: number, dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties
	): void,
		setFooterTitle(footerTitle: string): void,
		setFooterView(footerView: Ti.UI.View): void,
		setHeaderTitle(headerTitle: string): void,
		setHeaderView(headerView: Ti.UI.View): void,
		setItems(dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties): void,
		updateItemAt(
		index: number, dataItem: ListDataItem, animation?: ListViewAnimationProperties
	): void
	}

	declare export interface ScrollView {
		canCancelEvents: boolean,
		contentHeight: any,
		contentOffset: Dictionary<Object>,
		contentWidth: any,
		decelerationRate: number,
		disableBounce: boolean,
		horizontalBounce: boolean,
		maxZoomScale: number,
		minZoomScale: number,
		overScrollMode: number,
		scrollIndicatorStyle: number,
		scrollType: string,
		scrollingEnabled: boolean,
		scrollsToTop: boolean,
		showHorizontalScrollIndicator: boolean,
		showVerticalScrollIndicator: boolean,
		verticalBounce: boolean,
		zoomScale: number,
		getCanCancelEvents(): boolean,
		getContentHeight(): any,
		getContentOffset(): Dictionary<Object>,
		getContentWidth(): any,
		getDecelerationRate(): number,
		getDisableBounce(): boolean,
		getHorizontalBounce(): boolean,
		getMaxZoomScale(): number,
		getMinZoomScale(): number,
		getOverScrollMode(): number,
		getScrollIndicatorStyle(): number,
		getScrollType(): string,
		getScrollingEnabled(): boolean,
		getScrollsToTop(): boolean,
		getShowHorizontalScrollIndicator(): boolean,
		getShowVerticalScrollIndicator(): boolean,
		getVerticalBounce(): boolean,
		getZoomScale(): number,
		scrollTo(x: number, y: number): void,
		scrollToBottom(): void,
		setCanCancelEvents(canCancelEvents: boolean): void,
		setContentHeight(contentHeight: number): void,
		setContentHeight(contentHeight: string): void,
		setContentOffset(contentOffset: Dictionary<Object>, animated?: contentOffsetOption): void,
		setContentWidth(contentWidth: number): void,
		setContentWidth(contentWidth: string): void,
		setDecelerationRate(decelerationRate: number): void,
		setDisableBounce(disableBounce: boolean): void,
		setHorizontalBounce(horizontalBounce: boolean): void,
		setMaxZoomScale(maxZoomScale: number): void,
		setMinZoomScale(minZoomScale: number): void,
		setOverScrollMode(overScrollMode: number): void,
		setScrollIndicatorStyle(scrollIndicatorStyle: number): void,
		setScrollingEnabled(scrollingEnabled: boolean): void,
		setScrollsToTop(scrollsToTop: boolean): void,
		setShowHorizontalScrollIndicator(showHorizontalScrollIndicator: boolean): void,
		setShowVerticalScrollIndicator(showVerticalScrollIndicator: boolean): void,
		setVerticalBounce(verticalBounce: boolean): void,
		setZoomScale(zoomScale: number, animated?: zoomScaleOption): void
	}

	declare export interface ListView {
		allowsSelection: boolean,
		canScroll: boolean,
		caseInsensitiveSearch: boolean,
		defaultItemTemplate: any,
		editing: boolean,
		footerDividersEnabled: boolean,
		footerTitle: string,
		footerView: Ti.UI.View,
		headerDividersEnabled: boolean,
		headerTitle: string,
		headerView: Ti.UI.View,
		keepSectionsInSearch: boolean,
		pruneSectionsOnEdit: boolean,
		pullView: Ti.UI.View,
		refreshControl: Ti.UI.RefreshControl,
		scrollIndicatorStyle: number,
		searchText: string,
		searchView: any,
		sectionCount: number,
		sectionIndexTitles: Array<ListViewIndexEntry>,
		sections: Array<Ti.UI.ListSection>,
		separatorColor: string,
		separatorInsets: Dictionary<Object>,
		separatorStyle: number,
		showVerticalScrollIndicator: boolean,
		style: number,
		templates: Dictionary<Object>,
		willScrollOnStatusTap: boolean,
		appendSection(section: Ti.UI.ListSection, animation?: ListViewAnimationProperties): void,
		appendSection(
		section: Array<Ti.UI.ListSection>, animation?: ListViewAnimationProperties
	): void,
		deleteSectionAt(sectionIndex: number, animation?: ListViewAnimationProperties): void,
		deselectItem(sectionIndex: number, itemIndex: number): void,
		getAllowsSelection(): boolean,
		getCanScroll(): boolean,
		getCaseInsensitiveSearch(): boolean,
		getDefaultItemTemplate(): any,
		getEditing(): boolean,
		getFooterDividersEnabled(): boolean,
		getFooterTitle(): string,
		getFooterView(): Ti.UI.View,
		getHeaderDividersEnabled(): boolean,
		getHeaderTitle(): string,
		getHeaderView(): Ti.UI.View,
		getKeepSectionsInSearch(): boolean,
		getPruneSectionsOnEdit(): boolean,
		getPullView(): Ti.UI.View,
		getRefreshControl(): Ti.UI.RefreshControl,
		getScrollIndicatorStyle(): number,
		getSearchText(): string,
		getSearchView(): any,
		getSectionCount(): number,
		getSectionIndexTitles(): Array<ListViewIndexEntry>,
		getSections(): Array<Ti.UI.ListSection>,
		getSeparatorColor(): string,
		getSeparatorInsets(): Dictionary<Object>,
		getSeparatorStyle(): number,
		getShowVerticalScrollIndicator(): boolean,
		getStyle(): number,
		getTemplates(): Dictionary<Object>,
		getWillScrollOnStatusTap(): boolean,
		insertSectionAt(
		sectionIndex: number, section: Ti.UI.ListSection, animation?: ListViewAnimationProperties
	): void,
		insertSectionAt(
		sectionIndex: number, section: Array<Ti.UI.ListSection>, animation?: ListViewAnimationProperties
	): void,
		replaceSectionAt(
		sectionIndex: number, section: Ti.UI.ListSection, animation: ListViewAnimationProperties
	): void,
		scrollToItem(
		sectionIndex: number, itemIndex: number, animation?: ListViewAnimationProperties
	): void,
		selectItem(sectionIndex: number, itemIndex: number): void,
		setAllowsSelection(allowsSelection: boolean): void,
		setCanScroll(canScroll: boolean): void,
		setCaseInsensitiveSearch(caseInsensitiveSearch: boolean): void,
		setContentInsets(edgeInsets: ListViewEdgeInsets, animated?: ListViewContentInsetOption): void,
		setDefaultItemTemplate(defaultItemTemplate: string): void,
		setDefaultItemTemplate(defaultItemTemplate: number): void,
		setEditing(editing: boolean): void,
		setFooterTitle(footerTitle: string): void,
		setFooterView(footerView: Ti.UI.View): void,
		setHeaderTitle(headerTitle: string): void,
		setHeaderView(headerView: Ti.UI.View): void,
		setKeepSectionsInSearch(keepSectionsInSearch: boolean): void,
		setMarker(markerProps: ListViewMarkerProps): void,
		setPruneSectionsOnEdit(pruneSectionsOnEdit: boolean): void,
		setPullView(pullView: Ti.UI.View): void,
		setRefreshControl(refreshControl: Ti.UI.RefreshControl): void,
		setScrollIndicatorStyle(scrollIndicatorStyle: number): void,
		setSearchText(searchText: string): void,
		setSearchView(searchView: Ti.UI.SearchBar): void,
		setSearchView(searchView: Ti.UI.Android.SearchView): void,
		setSectionIndexTitles(sectionIndexTitles: Array<ListViewIndexEntry>): void,
		setSections(sections: Array<Ti.UI.ListSection>): void,
		setSeparatorColor(separatorColor: string): void,
		setSeparatorInsets(separatorInsets: Dictionary<Object>): void,
		setSeparatorStyle(separatorStyle: number): void,
		setShowVerticalScrollIndicator(showVerticalScrollIndicator: boolean): void,
		setWillScrollOnStatusTap(willScrollOnStatusTap: boolean): void
	}

	declare export interface TabGroup {
		activeTab: Ti.UI.Tab,
		activeTabBackgroundColor: string,
		activeTabBackgroundDisabledColor: string,
		activeTabBackgroundDisabledImage: string,
		activeTabBackgroundFocusedColor: string,
		activeTabBackgroundFocusedImage: string,
		activeTabBackgroundImage: string,
		activeTabBackgroundSelectedColor: string,
		activeTabBackgroundSelectedImage: string,
		activeTabIconTint: string,
		activity: Ti.Android.Activity,
		allowUserCustomization: boolean,
		barColor: string,
		editButtonTitle: string,
		exitOnClose: boolean,
		navBarHidden: boolean,
		navTintColor: any,
		shadowImage: string,
		tabDividerColor: string,
		tabDividerWidth: any,
		tabHeight: any,
		tabs: Array<Ti.UI.Tab>,
		tabsAtBottom: boolean,
		tabsBackgroundColor: string,
		tabsBackgroundDisabledColor: string,
		tabsBackgroundDisabledImage: string,
		tabsBackgroundFocusedColor: string,
		tabsBackgroundFocusedImage: string,
		tabsBackgroundImage: string,
		tabsBackgroundSelectedColor: string,
		tabsBackgroundSelectedImage: string,
		tabsTintColor: any,
		title: string,
		titleAttributes: titleAttributesParams,
		translucent: boolean,
		windowSoftInputMode: number,
		addTab(tab: Ti.UI.Tab): void,
		close(): void,
		getActiveTab(): Ti.UI.Tab,
		getActiveTabBackgroundColor(): string,
		getActiveTabBackgroundDisabledColor(): string,
		getActiveTabBackgroundDisabledImage(): string,
		getActiveTabBackgroundFocusedColor(): string,
		getActiveTabBackgroundFocusedImage(): string,
		getActiveTabBackgroundImage(): string,
		getActiveTabBackgroundSelectedColor(): string,
		getActiveTabBackgroundSelectedImage(): string,
		getActiveTabIconTint(): string,
		getActivity(): Ti.Android.Activity,
		getAllowUserCustomization(): boolean,
		getBarColor(): string,
		getEditButtonTitle(): string,
		getExitOnClose(): boolean,
		getNavBarHidden(): boolean,
		getNavTintColor(): string,
		getShadowImage(): string,
		getTabDividerColor(): string,
		getTabDividerWidth(): any,
		getTabHeight(): any,
		getTabs(): Array<Ti.UI.Tab>,
		getTabsAtBottom(): boolean,
		getTabsBackgroundColor(): string,
		getTabsBackgroundDisabledColor(): string,
		getTabsBackgroundDisabledImage(): string,
		getTabsBackgroundFocusedColor(): string,
		getTabsBackgroundFocusedImage(): string,
		getTabsBackgroundImage(): string,
		getTabsBackgroundSelectedColor(): string,
		getTabsBackgroundSelectedImage(): string,
		getTabsTintColor(): string,
		getTitle(): string,
		getTitleAttributes(): titleAttributesParams,
		getTranslucent(): boolean,
		getWindowSoftInputMode(): number,
		open(): void,
		removeTab(tab: Ti.UI.Tab): void,
		setActiveTab(indexOrObject: number): void,
		setActiveTab(indexOrObject: Ti.UI.Tab): void,
		setActiveTabBackgroundColor(activeTabBackgroundColor: string): void,
		setActiveTabBackgroundDisabledColor(activeTabBackgroundDisabledColor: string): void,
		setActiveTabBackgroundDisabledImage(activeTabBackgroundDisabledImage: string): void,
		setActiveTabBackgroundFocusedColor(activeTabBackgroundFocusedColor: string): void,
		setActiveTabBackgroundFocusedImage(activeTabBackgroundFocusedImage: string): void,
		setActiveTabBackgroundImage(activeTabBackgroundImage: string): void,
		setActiveTabBackgroundSelectedColor(activeTabBackgroundSelectedColor: string): void,
		setActiveTabBackgroundSelectedImage(activeTabBackgroundSelectedImage: string): void,
		setActiveTabIconTint(activeTabIconTint: string): void,
		setAllowUserCustomization(allowUserCustomization: boolean): void,
		setBarColor(barColor: string): void,
		setEditButtonTitle(editButtonTitle: string): void,
		setExitOnClose(exitOnClose: boolean): void,
		setNavBarHidden(navBarHidden: boolean): void,
		setNavTintColor(navTintColor: string): void,
		setShadowImage(shadowImage: string): void,
		setTabDividerColor(tabDividerColor: string): void,
		setTabDividerWidth(tabDividerWidth: number): void,
		setTabDividerWidth(tabDividerWidth: string): void,
		setTabHeight(tabHeight: number): void,
		setTabHeight(tabHeight: string): void,
		setTabs(tabs: Array<Ti.UI.Tab>): void,
		setTabsAtBottom(tabsAtBottom: boolean): void,
		setTabsBackgroundColor(tabsBackgroundColor: string): void,
		setTabsBackgroundDisabledColor(tabsBackgroundDisabledColor: string): void,
		setTabsBackgroundDisabledImage(tabsBackgroundDisabledImage: string): void,
		setTabsBackgroundFocusedColor(tabsBackgroundFocusedColor: string): void,
		setTabsBackgroundFocusedImage(tabsBackgroundFocusedImage: string): void,
		setTabsBackgroundImage(tabsBackgroundImage: string): void,
		setTabsBackgroundSelectedColor(tabsBackgroundSelectedColor: string): void,
		setTabsBackgroundSelectedImage(tabsBackgroundSelectedImage: string): void,
		setTabsTintColor(tabsTintColor: string): void,
		setTitle(title: string): void,
		setTitleAttributes(titleAttributes: titleAttributesParams): void,
		setTranslucent(translucent: boolean): void
	}

	declare export interface TableView {
		allowsSelection: boolean,
		allowsSelectionDuringEditing: boolean,
		data: any,
		editable: boolean,
		editing: boolean,
		filterAnchored: boolean,
		filterAttribute: string,
		filterCaseInsensitive: boolean,
		footerDividersEnabled: boolean,
		footerTitle: string,
		footerView: Ti.UI.View,
		headerDividersEnabled: boolean,
		headerPullView: Ti.UI.View,
		headerTitle: string,
		headerView: Ti.UI.View,
		hideSearchOnSelection: boolean,
		index: Array<TableViewIndexEntry>,
		maxRowHeight: number,
		minRowHeight: number,
		moveable: boolean,
		moving: boolean,
		overScrollMode: number,
		refreshControl: Ti.UI.RefreshControl,
		rowHeight: number,
		scrollIndicatorStyle: number,
		scrollable: boolean,
		scrollsToTop: boolean,
		search: any,
		searchAsChild: boolean,
		searchHidden: boolean,
		sectionCount: number,
		sections: Array<Ti.UI.TableViewSection>,
		separatorColor: string,
		separatorInsets: Dictionary<Object>,
		separatorStyle: number,
		showVerticalScrollIndicator: boolean,
		style: number,
		appendRow(row: Ti.UI.TableViewRow, animation?: TableViewAnimationProperties): void,
		appendRow(
		row: Dictionary<Ti.UI.TableViewRow>, animation?: TableViewAnimationProperties
	): void,
		appendRow(row: Array<Ti.UI.TableViewRow>, animation?: TableViewAnimationProperties): void,
		appendRow(
		row: Array<Dictionary<Ti.UI.TableViewRow>>, animation?: TableViewAnimationProperties
	): void,
		appendSection(
		section: Ti.UI.TableViewSection, animation?: TableViewAnimationProperties
	): void,
		appendSection(
		section: Dictionary<Ti.UI.TableViewSection>, animation?: TableViewAnimationProperties
	): void,
		appendSection(
		section: Array<Ti.UI.TableViewSection>, animation?: TableViewAnimationProperties
	): void,
		appendSection(
		section: Array<Dictionary<Ti.UI.TableViewSection>>, animation?: TableViewAnimationProperties
	): void,
		deleteRow(row: number, animation?: TableViewAnimationProperties): void,
		deleteRow(row: Ti.UI.TableViewRow, animation?: TableViewAnimationProperties): void,
		deleteSection(section: number, animation?: TableViewAnimationProperties): void,
		deselectRow(row: number): void,
		getAllowsSelection(): boolean,
		getAllowsSelectionDuringEditing(): boolean,
		getData(): any,
		getEditable(): boolean,
		getEditing(): boolean,
		getFilterAnchored(): boolean,
		getFilterAttribute(): string,
		getFilterCaseInsensitive(): boolean,
		getFooterDividersEnabled(): boolean,
		getFooterTitle(): string,
		getFooterView(): Ti.UI.View,
		getHeaderDividersEnabled(): boolean,
		getHeaderPullView(): Ti.UI.View,
		getHeaderTitle(): string,
		getHeaderView(): Ti.UI.View,
		getHideSearchOnSelection(): boolean,
		getIndex(): Array<TableViewIndexEntry>,
		getMaxRowHeight(): number,
		getMinRowHeight(): number,
		getMoveable(): boolean,
		getMoving(): boolean,
		getOverScrollMode(): number,
		getRefreshControl(): Ti.UI.RefreshControl,
		getRowHeight(): number,
		getScrollIndicatorStyle(): number,
		getScrollable(): boolean,
		getScrollsToTop(): boolean,
		getSearch(): any,
		getSearchAsChild(): boolean,
		getSearchHidden(): boolean,
		getSectionCount(): number,
		getSections(): Array<Ti.UI.TableViewSection>,
		getSeparatorColor(): string,
		getSeparatorInsets(): Dictionary<Object>,
		getSeparatorStyle(): number,
		getShowVerticalScrollIndicator(): boolean,
		getStyle(): number,
		insertRowAfter(
		index: number, row: Ti.UI.TableViewRow, animation?: TableViewAnimationProperties
	): void,
		insertRowAfter(
		index: number, row: Dictionary<Ti.UI.TableViewRow>, animation?: TableViewAnimationProperties
	): void,
		insertRowBefore(
		index: number, row: Ti.UI.TableViewRow, animation?: TableViewAnimationProperties
	): void,
		insertRowBefore(
		index: number, row: Dictionary<Ti.UI.TableViewRow>, animation?: TableViewAnimationProperties
	): void,
		insertSectionAfter(
		index: number, section: Ti.UI.TableViewSection, animation?: TableViewAnimationProperties
	): void,
		insertSectionAfter(
		index: number, section: Dictionary<Ti.UI.TableViewSection>, animation?: TableViewAnimationProperties
	): void,
		insertSectionBefore(
		index: number, section: Ti.UI.TableViewSection, animation?: TableViewAnimationProperties
	): void,
		insertSectionBefore(
		index: number, section: Dictionary<Ti.UI.TableViewSection>, animation?: TableViewAnimationProperties
	): void,
		scrollToIndex(index: number, animation?: TableViewAnimationProperties): void,
		scrollToTop(top: number, animation?: TableViewAnimationProperties): void,
		selectRow(row: number): void,
		setAllowsSelection(allowsSelection: boolean): void,
		setAllowsSelectionDuringEditing(allowsSelectionDuringEditing: boolean): void,
		setContentInsets(edgeInsets: TableViewEdgeInsets, animated?: TableViewContentInsetOption): void,
		setData(data: Array<Ti.UI.TableViewRow>, animation: TableViewAnimationProperties): void,
		setData(
		data: Array<Dictionary<Ti.UI.TableViewRow>>, animation: TableViewAnimationProperties
	): void,
		setData(
		data: Array<Ti.UI.TableViewSection>, animation: TableViewAnimationProperties
	): void,
		setEditable(editable: boolean): void,
		setEditing(editing: boolean): void,
		setFilterAnchored(filterAnchored: boolean): void,
		setFilterAttribute(filterAttribute: string): void,
		setFilterCaseInsensitive(filterCaseInsensitive: boolean): void,
		setFooterTitle(footerTitle: string): void,
		setFooterView(footerView: Ti.UI.View): void,
		setHeaderPullView(view: Ti.UI.View): void,
		setHeaderTitle(headerTitle: string): void,
		setHeaderView(headerView: Ti.UI.View): void,
		setHideSearchOnSelection(hideSearchOnSelection: boolean): void,
		setIndex(index: Array<TableViewIndexEntry>): void,
		setMaxRowHeight(maxRowHeight: number): void,
		setMinRowHeight(minRowHeight: number): void,
		setMoveable(moveable: boolean): void,
		setMoving(moving: boolean): void,
		setOverScrollMode(overScrollMode: number): void,
		setRefreshControl(refreshControl: Ti.UI.RefreshControl): void,
		setRowHeight(rowHeight: number): void,
		setScrollIndicatorStyle(scrollIndicatorStyle: number): void,
		setScrollable(scrollable: boolean): void,
		setScrollsToTop(scrollsToTop: boolean): void,
		setSearch(search: Ti.UI.SearchBar): void,
		setSearch(search: Ti.UI.Android.SearchView): void,
		setSearchAsChild(searchAsChild: boolean): void,
		setSearchHidden(searchHidden: boolean): void,
		setSections(sections: Array<Ti.UI.TableViewSection>): void,
		setSeparatorColor(separatorColor: string): void,
		setSeparatorInsets(separatorInsets: Dictionary<Object>): void,
		setSeparatorStyle(separatorStyle: number): void,
		setShowVerticalScrollIndicator(showVerticalScrollIndicator: boolean): void,
		setStyle(style: number): void,
		updateRow(
		index: number, row: Ti.UI.TableViewRow, animation: TableViewAnimationProperties
	): void,
		updateSection(
		index: number, section: Ti.UI.TableViewSection, animation: TableViewAnimationProperties
	): void
	}

	declare export interface Button {
		color: string,
		disabledColor: string,
		font: Font,
		image: any,
		selectedColor: string,
		shadowColor: string,
		shadowOffset: Dictionary<Object>,
		shadowRadius: number,
		style: number,
		systemButton: number,
		textAlign: any,
		title: string,
		titleid: string,
		verticalAlign: any,
		getColor(): string,
		getDisabledColor(): string,
		getFont(): Font,
		getImage(): any,
		getSelectedColor(): string,
		getShadowColor(): string,
		getShadowOffset(): Dictionary<Object>,
		getShadowRadius(): number,
		getStyle(): number,
		getSystemButton(): number,
		getTextAlign(): any,
		getTitle(): string,
		getTitleid(): string,
		getVerticalAlign(): any,
		setColor(color: string): void,
		setDisabledColor(disabledColor: string): void,
		setFont(font: Font): void,
		setImage(image: string): void,
		setImage(image: Ti.Blob): void,
		setSelectedColor(selectedColor: string): void,
		setShadowColor(shadowColor: string): void,
		setShadowOffset(shadowOffset: Dictionary<Object>): void,
		setShadowRadius(shadowRadius: number): void,
		setStyle(style: number): void,
		setSystemButton(systemButton: number): void,
		setTextAlign(textAlign: string): void,
		setTextAlign(textAlign: number): void,
		setTitle(title: string): void,
		setTitleid(titleid: string): void,
		setVerticalAlign(verticalAlign: number): void,
		setVerticalAlign(verticalAlign: string): void
	}

	declare export interface OptionDialog {
		androidView: Ti.UI.View,
		buttonNames: Array<String>,
		cancel: number,
		destructive: number,
		opaquebackground: boolean,
		options: Array<String>,
		persistent: boolean,
		selectedIndex: number,
		title: string,
		titleid: string,
		getAndroidView(): Ti.UI.View,
		getButtonNames(): Array<String>,
		getCancel(): number,
		getDestructive(): number,
		getOpaquebackground(): boolean,
		getOptions(): Array<String>,
		getPersistent(): boolean,
		getSelectedIndex(): number,
		getTitle(): string,
		getTitleid(): string,
		hide(params?: hideParams): void,
		setAndroidView(androidView: Ti.UI.View): void,
		setCancel(cancel: number): void,
		setOpaquebackground(opaquebackground: boolean): void,
		setPersistent(persistent: boolean): void,
		setTitle(title: string): void,
		setTitleid(titleid: string): void,
		show(params?: showParams): void
	}

	declare export interface RefreshControl {
		tintColor: string,
		title: Ti.UI.iOS.AttributedString,
		beginRefreshing(): void,
		endRefreshing(): void,
		getTintColor(): string,
		getTitle(): Ti.UI.iOS.AttributedString,
		setTintColor(tintColor: string): void,
		setTitle(title: Ti.UI.iOS.AttributedString): void
	}

	declare export interface EmailDialog {
		CANCELLED: number,
		FAILED: number,
		SAVED: number,
		SENT: number,
		barColor: string,
		bccRecipients: Array<String>,
		ccRecipients: Array<String>,
		html: boolean,
		messageBody: string,
		subject: string,
		toRecipients: Array<String>,
		addAttachment(attachment: Ti.Blob): void,
		addAttachment(attachment: Ti.Filesystem.File): void,
		getBarColor(): string,
		getBccRecipients(): Array<String>,
		getCcRecipients(): Array<String>,
		getHtml(): boolean,
		getMessageBody(): string,
		getSubject(): string,
		getToRecipients(): Array<String>,
		isSupported(): boolean,
		open(properties: any): void,
		setBarColor(barColor: string): void,
		setBccRecipients(bccRecipients: Array<String>): void,
		setCcRecipients(ccRecipients: Array<String>): void,
		setHtml(html: boolean): void,
		setMessageBody(messageBody: string): void,
		setSubject(subject: string): void,
		setToRecipients(toRecipients: Array<String>): void
	}

	declare export interface CoverFlowView {
		images: any,
		selected: number,
		getImages(): any,
		getSelected(): number,
		setImage(index: number, image: string): void,
		setImage(image: Ti.Blob): void,
		setImage(image: Ti.Filesystem.File): void,
		setImage(index: number, image: CoverFlowImageType): void,
		setImages(images: Array<String>): void,
		setImages(images: Array<Ti.Blob>): void,
		setImages(images: Array<Ti.Filesystem.File>): void,
		setImages(images: Array<CoverFlowImageType>): void,
		setSelected(selected: number): void
	}

	declare export interface ImageView {
		animating: boolean,
		autorotate: boolean,
		decodeRetries: number,
		defaultImage: string,
		duration: number,
		enableZoomControls: boolean,
		hires: boolean,
		image: any,
		images: any,
		paused: boolean,
		preventDefaultImage: boolean,
		repeatCount: number,
		reverse: boolean,
		url: string,
		getAnimating(): boolean,
		getAutorotate(): boolean,
		getDecodeRetries(): number,
		getDefaultImage(): string,
		getDuration(): number,
		getEnableZoomControls(): boolean,
		getHires(): boolean,
		getImage(): any,
		getImages(): any,
		getPaused(): boolean,
		getPreventDefaultImage(): boolean,
		getRepeatCount(): number,
		getReverse(): boolean,
		getUrl(): string,
		pause(): void,
		resume(): void,
		setDecodeRetries(decodeRetries: number): void,
		setDefaultImage(defaultImage: string): void,
		setDuration(duration: number): void,
		setEnableZoomControls(enableZoomControls: boolean): void,
		setHires(hires: boolean): void,
		setImage(image: string): void,
		setImage(image: Ti.Blob): void,
		setImage(image: Ti.Filesystem.File): void,
		setImages(images: Array<String>): void,
		setImages(images: Array<Ti.Blob>): void,
		setImages(images: Array<Ti.Filesystem.File>): void,
		setPreventDefaultImage(preventDefaultImage: boolean): void,
		setRepeatCount(repeatCount: number): void,
		setReverse(reverse: boolean): void,
		setUrl(url: string): void,
		start(): void,
		stop(): void,
		toBlob(): void
	}

	declare export interface MaskedImage {
		image: string,
		mask: string,
		mode: number,
		tint: string,
		getImage(): string,
		getMask(): string,
		getMode(): number,
		getTint(): string,
		setImage(image: string): void,
		setMask(mask: string): void,
		setMode(mode: number): void,
		setTint(tint: string): void
	}

	declare export interface ProgressBar {
		color: string,
		font: Font,
		max: number,
		message: string,
		min: number,
		style: number,
		value: number,
		getColor(): string,
		getFont(): Font,
		getMax(): number,
		getMessage(): string,
		getMin(): number,
		getStyle(): number,
		getValue(): number,
		setColor(color: string): void,
		setFont(font: Font): void,
		setMax(max: number): void,
		setMessage(message: string): void,
		setMin(min: number): void,
		setStyle(style: number): void,
		setValue(value: number): void
	}

	declare export interface Label {
		attributedString: Ti.UI.iOS.AttributedString,
		autoLink: number,
		backgroundPaddingBottom: number,
		backgroundPaddingLeft: number,
		backgroundPaddingRight: number,
		backgroundPaddingTop: number,
		color: string,
		ellipsize: boolean,
		font: Font,
		highlightedColor: string,
		html: string,
		includeFontPadding: boolean,
		minimumFontSize: number,
		shadowColor: string,
		shadowOffset: Dictionary<Object>,
		shadowRadius: number,
		text: string,
		textAlign: any,
		textid: string,
		verticalAlign: any,
		wordWrap: boolean,
		getAttributedString(): Ti.UI.iOS.AttributedString,
		getAutoLink(): number,
		getBackgroundPaddingBottom(): number,
		getBackgroundPaddingLeft(): number,
		getBackgroundPaddingRight(): number,
		getBackgroundPaddingTop(): number,
		getColor(): string,
		getEllipsize(): boolean,
		getFont(): Font,
		getHighlightedColor(): string,
		getHtml(): string,
		getIncludeFontPadding(): boolean,
		getMinimumFontSize(): number,
		getShadowColor(): string,
		getShadowOffset(): Dictionary<Object>,
		getShadowRadius(): number,
		getText(): string,
		getTextAlign(): any,
		getTextid(): string,
		getVerticalAlign(): any,
		getWordWrap(): boolean,
		setAttributedString(attributedString: Ti.UI.iOS.AttributedString): void,
		setAutoLink(autoLink: number): void,
		setBackgroundPaddingBottom(backgroundPaddingBottom: number): void,
		setBackgroundPaddingLeft(backgroundPaddingLeft: number): void,
		setBackgroundPaddingRight(backgroundPaddingRight: number): void,
		setBackgroundPaddingTop(backgroundPaddingTop: number): void,
		setColor(color: string): void,
		setEllipsize(ellipsize: boolean): void,
		setFont(font: Font): void,
		setHighlightedColor(highlightedColor: string): void,
		setHtml(html: string): void,
		setIncludeFontPadding(includeFontPadding: boolean): void,
		setMinimumFontSize(minimumFontSize: number): void,
		setShadowColor(shadowColor: string): void,
		setShadowOffset(shadowOffset: Dictionary<Object>): void,
		setShadowRadius(shadowRadius: number): void,
		setText(text: string): void,
		setTextAlign(textAlign: string): void,
		setTextAlign(textAlign: number): void,
		setTextid(textid: string): void,
		setVerticalAlign(verticalAlign: number): void,
		setVerticalAlign(verticalAlign: string): void,
		setWordWrap(wordWrap: boolean): void
	}

	declare export interface SearchBar {
		autocapitalization: number,
		autocorrect: boolean,
		barColor: string,
		hintText: string,
		hinttextid: string,
		keyboardType: number,
		prompt: string,
		promptid: string,
		showBookmark: boolean,
		showCancel: boolean,
		value: string,
		blur(): void,
		focus(): void,
		getAutocapitalization(): number,
		getAutocorrect(): boolean,
		getBarColor(): string,
		getHintText(): string,
		getHinttextid(): string,
		getKeyboardType(): number,
		getPrompt(): string,
		getPromptid(): string,
		getShowBookmark(): boolean,
		getShowCancel(): boolean,
		getValue(): string,
		setAutocapitalization(autocapitalization: number): void,
		setAutocorrect(autocorrect: boolean): void,
		setBarColor(barColor: string): void,
		setHintText(hintText: string): void,
		setHinttextid(hinttextid: string): void,
		setKeyboardType(keyboardType: number): void,
		setPrompt(prompt: string): void,
		setPromptid(promptid: string): void,
		setShowBookmark(showBookmark: boolean): void,
		setShowCancel(showCancel: boolean, animated?: Dictionary<Object>): void,
		setValue(value: string): void
	}

	declare export interface SMSDialog {
		CANCELLED: number,
		FAILED: number,
		SENT: number,
		messageBody: string,
		toRecipients: Array<String>,
		getMessageBody(): string,
		getToRecipients(): Array<String>,
		isSupported(): boolean,
		open(): void,
		setMessageBody(messageBody: string): void,
		setToRecipients(toRecipients: Array<String>): void
	}

	declare export interface TableViewSection {
		footerTitle: string,
		footerView: Ti.UI.View,
		headerTitle: string,
		headerView: Ti.UI.View,
		rowCount: number,
		rows: Array<Ti.UI.TableViewRow>,
		add(row: Ti.UI.TableViewRow): void,
		getFooterTitle(): string,
		getFooterView(): Ti.UI.View,
		getHeaderTitle(): string,
		getHeaderView(): Ti.UI.View,
		getRowCount(): number,
		getRows(): Array<Ti.UI.TableViewRow>,
		remove(row: Ti.UI.TableViewRow): void,
		rowAtIndex(index: number): Ti.UI.TableViewRow,
		setFooterTitle(footerTitle: string): void,
		setFooterView(footerView: Ti.UI.View): void,
		setHeaderTitle(headerTitle: string): void,
		setHeaderView(headerView: Ti.UI.View): void
	}

	declare export interface Animation {
		anchorPoint: Point,
		autoreverse: boolean,
		backgroundColor: string,
		bottom: number,
		center: any,
		color: string,
		curve: number,
		delay: number,
		duration: number,
		height: number,
		left: number,
		opacity: number,
		opaque: boolean,
		repeat: number,
		right: number,
		top: number,
		transform: any,
		transition: number,
		view: Ti.UI.View,
		visible: boolean,
		width: number,
		zIndex: number,
		getAnchorPoint(): Point,
		getAutoreverse(): boolean,
		getBackgroundColor(): string,
		getBottom(): number,
		getCenter(): any,
		getColor(): string,
		getCurve(): number,
		getDelay(): number,
		getDuration(): number,
		getHeight(): number,
		getLeft(): number,
		getOpacity(): number,
		getOpaque(): boolean,
		getRepeat(): number,
		getRight(): number,
		getTop(): number,
		getTransform(): any,
		getTransition(): number,
		getView(): Ti.UI.View,
		getVisible(): boolean,
		getWidth(): number,
		getZIndex(): number,
		setAnchorPoint(anchorPoint: Point): void,
		setAutoreverse(autoreverse: boolean): void,
		setBackgroundColor(backgroundColor: string): void,
		setBottom(bottom: number): void,
		setCenter(center: any): void,
		setColor(color: string): void,
		setCurve(curve: number): void,
		setDelay(delay: number): void,
		setDuration(duration: number): void,
		setHeight(height: number): void,
		setLeft(left: number): void,
		setOpacity(opacity: number): void,
		setOpaque(opaque: boolean): void,
		setRepeat(repeat: number): void,
		setRight(right: number): void,
		setTop(top: number): void,
		setTransform(transform: Ti.UI._2DMatrix): void,
		setTransform(transform: Ti.UI._3DMatrix): void,
		setTransition(transition: number): void,
		setView(view: Ti.UI.View): void,
		setVisible(visible: boolean): void,
		setWidth(width: number): void,
		setZIndex(zIndex: number): void
	}

	declare export interface Toolbar {
		barColor: string,
		borderBottom: boolean,
		borderTop: boolean,
		items: Array<Ti.UI.View>,
		translucent: boolean,
		getBarColor(): string,
		getBorderBottom(): boolean,
		getBorderTop(): boolean,
		getItems(): Array<Ti.UI.View>,
		getTranslucent(): boolean,
		setBarColor(barColor: string): void,
		setBorderBottom(borderBottom: boolean): void,
		setBorderTop(borderTop: boolean): void,
		setItems(items: Array<Ti.UI.View>): void,
		setTranslucent(translucent: boolean): void
	}

	declare export interface Notification {
		duration: number,
		horizontalMargin: number,
		message: string,
		verticalMargin: number,
		xOffset: number,
		yOffset: number,
		getDuration(): number,
		getHorizontalMargin(): number,
		getMessage(): string,
		getVerticalMargin(): number,
		getXOffset(): number,
		getYOffset(): number,
		setDuration(duration: number): void,
		setHorizontalMargin(horizontalMargin: number): void,
		setMessage(message: string): void,
		setVerticalMargin(verticalMargin: number): void,
		setXOffset(xOffset: number): void,
		setYOffset(yOffset: number): void
	}

	declare export interface PickerColumn {
		font: Font,
		rowCount: number,
		rows: Array<Ti.UI.PickerRow>,
		selectedRow: Ti.UI.PickerRow,
		addRow(row: Ti.UI.PickerRow): void,
		getFont(): Font,
		getRowCount(): number,
		getRows(): Array<Ti.UI.PickerRow>,
		getSelectedRow(): Ti.UI.PickerRow,
		removeRow(row: Ti.UI.PickerRow): void,
		setFont(font: Font): void,
		setSelectedRow(selectedRow: Ti.UI.PickerRow): void
	}

	declare export interface ActivityIndicator {
		bottom: any,
		color: string,
		font: Font,
		height: string,
		indicatorColor: string,
		indicatorDiameter: string,
		left: any,
		message: string,
		messageid: string,
		right: any,
		style: number,
		top: any,
		width: string,
		add(): void,
		getBottom(): any,
		getColor(): string,
		getFont(): Font,
		getHeight(): string,
		getIndicatorColor(): string,
		getIndicatorDiameter(): string,
		getLeft(): any,
		getMessage(): string,
		getMessageid(): string,
		getRight(): any,
		getStyle(): number,
		getTop(): any,
		getWidth(): string,
		hide(): void,
		remove(): void,
		setBottom(bottom: number): void,
		setBottom(bottom: string): void,
		setColor(color: string): void,
		setFont(font: Font): void,
		setHeight(height: string): void,
		setIndicatorColor(indicatorColor: string): void,
		setIndicatorDiameter(indicatorDiameter: string): void,
		setLeft(left: number): void,
		setLeft(left: string): void,
		setMessage(message: string): void,
		setMessageid(messageid: string): void,
		setRight(right: number): void,
		setRight(right: string): void,
		setStyle(style: number): void,
		setTop(top: number): void,
		setTop(top: string): void,
		setWidth(width: string): void,
		show(): void
	}

	declare export interface Picker {
		calendarViewShown: boolean,
		columns: Array<Ti.UI.PickerColumn>,
		countDownDuration: number,
		font: Font,
		format24: boolean,
		locale: string,
		maxDate: Date,
		minDate: Date,
		minuteInterval: number,
		selectionIndicator: boolean,
		type: number,
		useSpinner: boolean,
		value: Date,
		visibleItems: number,
		add(data: Array<Ti.UI.PickerRow>): void,
		add(data: Ti.UI.PickerRow): void,
		add(data: Array<Ti.UI.PickerColumn>): void,
		add(data: Ti.UI.PickerColumn): void,
		getCalendarViewShown(): boolean,
		getColumns(): Array<Ti.UI.PickerColumn>,
		getCountDownDuration(): number,
		getFont(): Font,
		getFormat24(): boolean,
		getLocale(): string,
		getMaxDate(): Date,
		getMinDate(): Date,
		getMinuteInterval(): number,
		getSelectedRow(index: number): Ti.UI.PickerRow,
		getSelectionIndicator(): boolean,
		getType(): number,
		getUseSpinner(): boolean,
		getValue(): Date,
		getVisibleItems(): number,
		reloadColumn(column: Ti.UI.PickerColumn): void,
		setCalendarViewShown(calendarViewShown: boolean): void,
		setColumns(columns: Array<Ti.UI.PickerColumn>): void,
		setCountDownDuration(countDownDuration: number): void,
		setFont(font: Font): void,
		setFormat24(format24: boolean): void,
		setLocale(locale: string): void,
		setMaxDate(maxDate: Date): void,
		setMinDate(minDate: Date): void,
		setMinuteInterval(minuteInterval: number): void,
		setSelectedRow(column: number, row: number, animated?: boolean): void,
		setSelectionIndicator(selectionIndicator: boolean): void,
		setType(type: number): void,
		setUseSpinner(useSpinner: boolean): void,
		setValue(date: any, suppressEvent: boolean): Ti.UI.PickerRow,
		setVisibleItems(visibleItems: number): void,
		showDatePickerDialog(dictObj: any): void,
		showTimePickerDialog(dictObj: any): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function convertUnits(convertFromValue: string, convertToUnits: number): number

	declare export function create2DMatrix(parameters?: MatrixCreationDict): Ti.UI._2DMatrix

	declare export function create3DMatrix(parameters?: Dictionary<Ti.UI._3DMatrix>): Ti.UI._3DMatrix

	declare export function createActivityIndicator(parameters?: Dictionary<Ti.UI.ActivityIndicator>): Ti.UI.ActivityIndicator

	declare export function createAlertDialog(parameters?: Dictionary<Ti.UI.AlertDialog>): Ti.UI.AlertDialog

	declare export function createAnimation(parameters?: Dictionary<Ti.UI.Animation>): Ti.UI.Animation

	declare export function createButton(parameters?: Dictionary<Ti.UI.Button>): Ti.UI.Button

	declare export function createButtonBar(parameters?: Dictionary<Ti.UI.ButtonBar>): Ti.UI.ButtonBar

	declare export function createCoverFlowView(parameters?: Dictionary<Ti.UI.CoverFlowView>): Ti.UI.CoverFlowView

	declare export function createDashboardItem(parameters?: Dictionary<Ti.UI.DashboardItem>): Ti.UI.DashboardItem

	declare export function createDashboardView(parameters?: Dictionary<Ti.UI.DashboardView>): Ti.UI.DashboardView

	declare export function createEmailDialog(parameters?: Dictionary<Ti.UI.EmailDialog>): Ti.UI.EmailDialog

	declare export function createImageView(parameters?: Dictionary<Ti.UI.ImageView>): Ti.UI.ImageView

	declare export function createLabel(parameters?: Dictionary<Ti.UI.Label>): Ti.UI.Label

	declare export function createListSection(parameters?: Dictionary<Ti.UI.ListSection>): Ti.UI.ListSection

	declare export function createListView(parameters?: Dictionary<Ti.UI.ListView>): Ti.UI.ListView

	declare export function createMaskedImage(parameters?: Dictionary<Ti.UI.MaskedImage>): Ti.UI.MaskedImage

	declare export function createNotification(parameters?: Dictionary<Ti.UI.Notification>): Ti.UI.Notification

	declare export function createOptionDialog(parameters?: Dictionary<Ti.UI.OptionDialog>): Ti.UI.OptionDialog

	declare export function createPicker(parameters?: Dictionary<Ti.UI.Picker>): Ti.UI.Picker

	declare export function createPickerColumn(parameters?: Dictionary<Ti.UI.PickerColumn>): Ti.UI.PickerColumn

	declare export function createPickerRow(parameters?: Dictionary<Ti.UI.PickerRow>): Ti.UI.PickerRow

	declare export function createProgressBar(parameters?: Dictionary<Ti.UI.ProgressBar>): Ti.UI.ProgressBar

	declare export function createRefreshControl(parameters?: Dictionary<Ti.UI.RefreshControl>): Ti.UI.RefreshControl

	declare export function createSMSDialog(parameters?: Dictionary<Ti.UI.SMSDialog>): Ti.UI.SMSDialog

	declare export function createScrollView(parameters?: Dictionary<Ti.UI.ScrollView>): Ti.UI.ScrollView

	declare export function createScrollableView(parameters?: Dictionary<Ti.UI.ScrollableView>): Ti.UI.ScrollableView

	declare export function createSearchBar(parameters?: Dictionary<Ti.UI.SearchBar>): Ti.UI.SearchBar

	declare export function createSlider(parameters?: Dictionary<Ti.UI.Slider>): Ti.UI.Slider

	declare export function createSwitch(parameters?: Dictionary<Ti.UI.Switch>): Ti.UI.Switch

	declare export function createTab(parameters?: Dictionary<Ti.UI.Tab>): Ti.UI.Tab

	declare export function createTabGroup(parameters?: Dictionary<Ti.UI.TabGroup>): Ti.UI.TabGroup

	declare export function createTabbedBar(parameters?: Dictionary<Ti.UI.TabbedBar>): Ti.UI.TabbedBar

	declare export function createTableView(parameters?: Dictionary<Ti.UI.TableView>): Ti.UI.TableView

	declare export function createTableViewRow(parameters?: Dictionary<Ti.UI.TableViewRow>): Ti.UI.TableViewRow

	declare export function createTableViewSection(parameters?: Dictionary<Ti.UI.TableViewSection>): Ti.UI.TableViewSection

	declare export function createTextArea(parameters?: Dictionary<Ti.UI.TextArea>): Ti.UI.TextArea

	declare export function createTextField(parameters?: Dictionary<Ti.UI.TextField>): Ti.UI.TextField

	declare export function createToolbar(parameters?: Dictionary<Ti.UI.Toolbar>): Ti.UI.Toolbar

	declare export function createView(parameters?: Dictionary<Ti.UI.View>): Ti.UI.View

	declare export function createWebView(parameters?: Dictionary<Ti.UI.WebView>): Ti.UI.WebView

	declare export function createWindow(parameters?: Dictionary<Ti.UI.Window>): Ti.UI.Window

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBackgroundColor(): string

	declare export function getBackgroundImage(): string

	declare export function getBubbleParent(): boolean

	declare export function getCurrentTab(): Ti.UI.Tab

	declare export function getCurrentWindow(): Ti.UI.Window

	declare export function getOrientation(): number

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBackgroundColor(backgroundColor: string): void

	declare export function setBackgroundImage(backgroundImage: string): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setCurrentTab(currentTab: Ti.UI.Tab): void

	declare export function setOrientation(orientation: number): void

		
}

declare module 'iPad' {
		declare export interface SplitWindow {
		detailView: Ti.UI.View,
		masterView: Ti.UI.View,
		showMasterInPortrait: boolean,
		getDetailView(): Ti.UI.View,
		getMasterView(): Ti.UI.View,
		getShowMasterInPortrait(): boolean,
		setShowMasterInPortrait(showMasterInPortrait: boolean): void
	}

	declare export interface DocumentViewer {
		setUrl(url: string): void,
		show(): void
	}

	declare export interface Popover {
		arrowDirection: number,
		contentView: Ti.UI.View,
		height: any,
		leftNavButton: any,
		passthroughViews: Array<Ti.UI.View>,
		rightNavButton: any,
		title: string,
		width: any,
		add(): void,
		getArrowDirection(): number,
		getContentView(): Ti.UI.View,
		getHeight(): any,
		getLeftNavButton(): any,
		getPassthroughViews(): Array<Ti.UI.View>,
		getRightNavButton(): any,
		getTitle(): string,
		getWidth(): any,
		hide(options: PopoverParams): void,
		remove(): void,
		setArrowDirection(arrowDirection: number): void,
		setContentView(contentView: Ti.UI.View): void,
		setHeight(height: number): void,
		setHeight(height: string): void,
		setLeftNavButton(leftNavButton: any): void,
		setPassthroughViews(passthroughViews: Array<Ti.UI.View>): void,
		setRightNavButton(rightNavButton: any): void,
		setTitle(title: string): void,
		setWidth(width: number): void,
		setWidth(width: string): void,
		show(params: PopoverParams): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createDocumentViewer(parameters?: Dictionary<Ti.UI.iPad.DocumentViewer>): Ti.UI.iPad.DocumentViewer

	declare export function createPopover(parameters?: Dictionary<Ti.UI.iPad.Popover>): Ti.UI.iPad.Popover

	declare export function createSplitWindow(parameters?: Dictionary<Ti.UI.iPad.SplitWindow>): Ti.UI.iPad.SplitWindow

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

		
}

declare module 'iOS' {
		declare export interface Animator {
		behaviors: Array<Ti.Proxy>,
		referenceView: Ti.UI.View,
		running: boolean,
		addBehavior(behavior: Ti.Proxy): void,
		getBehaviors(): Array<Ti.Proxy>,
		getReferenceView(): Ti.UI.View,
		getRunning(): boolean,
		removeAllBehaviors(): void,
		removeBehavior(behavior: Ti.Proxy): void,
		setBehaviors(behaviors: Array<Ti.Proxy>): void,
		setReferenceView(referenceView: Ti.UI.View): void,
		startAnimator(): void,
		stopAnimator(): void,
		updateItemUsingCurrentState(item: Ti.UI.View): void
	}

	declare export interface DynamicItemBehavior {
		allowsRotation: boolean,
		angularResistance: number,
		density: number,
		elasticity: number,
		friction: number,
		items: Array<Ti.UI.View>,
		resistance: number,
		addAngularVelocityForItem(item: Ti.UI.View, velocity: number): void,
		addItem(item: Ti.UI.View): void,
		addLinearVelocityForItem(item: Ti.UI.View, velocity: Point): void,
		angularVelocityForItem(item: Ti.UI.View): number,
		getAllowsRotation(): boolean,
		getAngularResistance(): number,
		getDensity(): number,
		getElasticity(): number,
		getFriction(): number,
		getItems(): Array<Ti.UI.View>,
		getResistance(): number,
		linearVelocityForItem(item: Ti.UI.View): Point,
		removeItem(item: Ti.UI.View): void,
		setAllowsRotation(allowsRotation: boolean): void,
		setAngularResistance(angularResistance: number): void,
		setDensity(density: number): void,
		setElasticity(elasticity: number): void,
		setFriction(friction: number): void,
		setResistance(resistance: number): void
	}

	declare export interface SnapBehavior {
		damping: number,
		item: Ti.UI.View,
		snapPoint: Point,
		getDamping(): number,
		getItem(): Ti.UI.View,
		getSnapPoint(): Point,
		setDamping(damping: number): void,
		setItem(item: Ti.UI.View): void,
		setSnapPoint(snapPoint: Point): void
	}

	declare export interface GravityBehavior {
		angle: number,
		gravityDirection: Point,
		items: Array<Ti.UI.View>,
		magnitude: number,
		addItem(item: Ti.UI.View): void,
		getAngle(): number,
		getGravityDirection(): Point,
		getItems(): Array<Ti.UI.View>,
		getMagnitude(): number,
		removeItem(item: Ti.UI.View): void,
		setAngle(angle: number): void,
		setGravityDirection(gravityDirection: Point): void,
		setMagnitude(magnitude: number): void
	}

	declare export interface CollisionBehavior {
		boundaryIdentifiers: Array<BoundaryIdentifier>,
		collisionMode: number,
		items: Array<Ti.UI.View>,
		referenceInsets: ReferenceInsets,
		treatReferenceAsBoundary: boolean,
		addBoundary(boundary: BoundaryIdentifier): void,
		addItem(item: Ti.UI.View): void,
		getBoundaryIdentifiers(): Array<BoundaryIdentifier>,
		getCollisionMode(): number,
		getItems(): Array<Ti.UI.View>,
		getReferenceInsets(): ReferenceInsets,
		getTreatReferenceAsBoundary(): boolean,
		removeAllBoundaries(): void,
		removeBoundary(boundary: BoundaryIdentifier): void,
		removeItem(item: Ti.UI.View): void,
		setCollisionMode(collisionMode: number): void,
		setReferenceInsets(referenceInsets: ReferenceInsets): void,
		setTreatReferenceAsBoundary(treatReferenceAsBoundary: boolean): void
	}

	declare export interface Toolbar {
		barColor: string,
		borderBottom: boolean,
		borderTop: boolean,
		extendBackground: boolean,
		items: Array<Ti.UI.View>,
		translucent: boolean,
		getBarColor(): string,
		getBorderBottom(): boolean,
		getBorderTop(): boolean,
		getExtendBackground(): boolean,
		getItems(): Array<Ti.UI.View>,
		getTranslucent(): boolean,
		setBarColor(barColor: string): void,
		setBorderBottom(borderBottom: boolean): void,
		setBorderTop(borderTop: boolean): void,
		setItems(items: Array<Ti.UI.View>): void,
		setTranslucent(translucent: boolean): void
	}

	declare export interface ViewAttachmentBehavior {
		anchorItem: Ti.UI.View,
		anchorOffset: Point,
		damping: number,
		distance: number,
		frequency: number,
		item: Ti.UI.View,
		itemOffset: Point,
		getAnchorItem(): Ti.UI.View,
		getAnchorOffset(): Point,
		getDamping(): number,
		getDistance(): number,
		getFrequency(): number,
		getItem(): Ti.UI.View,
		getItemOffset(): Point,
		setAnchorItem(anchorItem: Ti.UI.View): void,
		setAnchorOffset(anchorOffset: Point): void,
		setDamping(damping: number): void,
		setDistance(distance: number): void,
		setFrequency(frequency: number): void,
		setItem(item: Ti.UI.View): void,
		setItemOffset(itemOffset: Point): void
	}

	declare export interface PushBehavior {
		active: boolean,
		angle: number,
		items: Array<Ti.UI.View>,
		magnitude: number,
		pushDirection: Point,
		pushMode: number,
		addItem(item: Ti.UI.View): void,
		getActive(): boolean,
		getAngle(): number,
		getItems(): Array<Ti.UI.View>,
		getMagnitude(): number,
		getPushDirection(): Point,
		getPushMode(): number,
		removeItem(item: Ti.UI.View): void,
		setActive(active: boolean): void,
		setAngle(angle: number): void,
		setMagnitude(magnitude: number): void,
		setPushDirection(pushDirection: Point): void,
		setPushMode(pushMode: number): void
	}

	declare export interface CoverFlowView {
		images: any,
		selected: number,
		getImages(): any,
		getSelected(): number,
		setImage(index: number, image: string): void,
		setImage(image: Ti.Blob): void,
		setImage(image: Ti.Filesystem.File): void,
		setImage(index: number, image: CoverFlowImageType): void,
		setImages(images: Array<String>): void,
		setImages(images: Array<Ti.Blob>): void,
		setImages(images: Array<Ti.Filesystem.File>): void,
		setImages(images: Array<CoverFlowImageType>): void,
		setSelected(selected: number): void
	}

	declare export interface DocumentViewer {
		name: string,
		url: string,
		getName(): string,
		getUrl(): string,
		hide(options?: DocumentViewerOptions): void,
		setUrl(url: string): void,
		show(options?: DocumentViewerOptions): void
	}

	declare export interface NavigationWindow {
		window: Ti.UI.Window,
		closeWindow(window: Ti.UI.Window, options: Dictionary<Object>): void,
		getWindow(): Ti.UI.Window,
		openWindow(window: Ti.UI.Window, options: Dictionary<Object>): void
	}

	declare export interface AttributedString {
		attributes: Array<Attribute>,
		text: string,
		addAttribute(attribute: Attribute): void,
		getAttributes(): Array<Attribute>,
		getText(): string,
		setAttributes(attributes: Array<Attribute>): void,
		setText(text: string): void
	}

	declare export interface AnchorAttachmentBehavior {
		anchor: Point,
		damping: number,
		distance: number,
		frequency: number,
		item: Ti.UI.View,
		offset: Point,
		getAnchor(): Point,
		getDamping(): number,
		getDistance(): number,
		getFrequency(): number,
		getItem(): Ti.UI.View,
		getOffset(): Point,
		setAnchor(anchor: Point): void,
		setDamping(damping: number): void,
		setDistance(distance: number): void,
		setFrequency(frequency: number): void,
		setItem(item: Ti.UI.View): void,
		setOffset(offset: Point): void
	}

	declare export interface TabbedBar {
		index: number,
		labels: any,
		style: number,
		getIndex(): number,
		getLabels(): any,
		getStyle(): number,
		setIndex(index: number): void,
		setLabels(labels: Array<String>): void,
		setLabels(labels: Array<BarItemType>): void,
		setStyle(style: number): void
	}

	declare export interface _3DMatrix {
		m11: number,
		m12: number,
		m13: number,
		m14: number,
		m21: number,
		m22: number,
		m23: number,
		m24: number,
		m31: number,
		m32: number,
		m33: number,
		m34: number,
		m41: number,
		m42: number,
		m43: number,
		m44: number,
		getM11(): number,
		getM12(): number,
		getM13(): number,
		getM14(): number,
		getM21(): number,
		getM22(): number,
		getM23(): number,
		getM24(): number,
		getM31(): number,
		getM32(): number,
		getM33(): number,
		getM34(): number,
		getM41(): number,
		getM42(): number,
		getM43(): number,
		getM44(): number,
		invert(): Ti.UI._3DMatrix,
		multiply(t2: Ti.UI._3DMatrix): Ti.UI._3DMatrix,
		rotate(angle: number, x: number, y: number, z: number): Ti.UI._3DMatrix,
		scale(sx: number, sy: number, sz: number): Ti.UI._3DMatrix,
		setM11(m11: number): void,
		setM12(m12: number): void,
		setM13(m13: number): void,
		setM14(m14: number): void,
		setM21(m21: number): void,
		setM22(m22: number): void,
		setM23(m23: number): void,
		setM24(m24: number): void,
		setM31(m31: number): void,
		setM32(m32: number): void,
		setM33(m33: number): void,
		setM34(m34: number): void,
		setM41(m41: number): void,
		setM42(m42: number): void,
		setM43(m43: number): void,
		setM44(m44: number): void,
		translate(tx: number, ty: number, tz: number): Ti.UI._3DMatrix
	}

	declare export interface AdView {
		adSize: string,
		cancelAction(): void,
		getAdSize(): string,
		setAdSize(adSize: string): void
	}

	declare export interface UserNotificationAction {
		activationMode: number,
		authenticationRequired: boolean,
		destructive: boolean,
		identifier: string,
		title: string,
		getActivationMode(): number,
		getAuthenticationRequired(): boolean,
		getDestructive(): boolean,
		getIdentifier(): string,
		getTitle(): string
	}

	declare export interface LocalNotification {
		cancel(): void
	}

	declare export interface UserNotificationCategory {
		actionsForDefaultContext: Array<Ti.App.iOS.UserNotificationAction>,
		actionsForMinimalContext: Array<Ti.App.iOS.UserNotificationAction>,
		identifier: string,
		getActionsForDefaultContext(): Array<Ti.App.iOS.UserNotificationAction>,
		getActionsForMinimalContext(): Array<Ti.App.iOS.UserNotificationAction>,
		getIdentifier(): string
	}

	declare export interface BackgroundService {
		url: string,
		getUrl(): string,
		stop(): void,
		unregister(): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function create3DMatrix(parameters?: Dictionary<Ti.UI.iOS._3DMatrix>): Ti.UI.iOS._3DMatrix

	declare export function createAdView(parameters?: Dictionary<Ti.UI.iOS.AdView>): Ti.UI.iOS.AdView

	declare export function createAnchorAttachmentBehavior(
		parameters?: Dictionary<Ti.UI.iOS.AnchorAttachmentBehavior>
	): Ti.UI.iOS.AnchorAttachmentBehavior

	declare export function createAnimator(parameters?: Dictionary<Ti.UI.iOS.Animator>): Ti.UI.iOS.Animator

	declare export function createAttributedString(
		parameters?: Dictionary<Ti.UI.iOS.AttributedString>
	): Ti.UI.iOS.AttributedString

	declare export function createCollisionBehavior(
		parameters?: Dictionary<Ti.UI.iOS.CollisionBehavior>
	): Ti.UI.iOS.CollisionBehavior

	declare export function createCoverFlowView(parameters?: Dictionary<Ti.UI.iOS.CoverFlowView>): Ti.UI.iOS.CoverFlowView

	declare export function createDocumentViewer(parameters?: Dictionary<Ti.UI.iOS.DocumentViewer>): Ti.UI.iOS.DocumentViewer

	declare export function createDynamicItemBehavior(
		parameters?: Dictionary<Ti.UI.iOS.DynamicItemBehavior>
	): Ti.UI.iOS.DynamicItemBehavior

	declare export function createGravityBehavior(parameters?: Dictionary<Ti.UI.iOS.GravityBehavior>): Ti.UI.iOS.GravityBehavior

	declare export function createNavigationWindow(
		parameters?: Dictionary<Ti.UI.iOS.NavigationWindow>
	): Ti.UI.iOS.NavigationWindow

	declare export function createPushBehavior(parameters?: Dictionary<Ti.UI.iOS.PushBehavior>): Ti.UI.iOS.PushBehavior

	declare export function createSnapBehavior(parameters?: Dictionary<Ti.UI.iOS.SnapBehavior>): Ti.UI.iOS.SnapBehavior

	declare export function createTabbedBar(parameters?: Dictionary<Ti.UI.iOS.TabbedBar>): Ti.UI.iOS.TabbedBar

	declare export function createToolbar(parameters?: Dictionary<Ti.UI.iOS.Toolbar>): Ti.UI.iOS.Toolbar

	declare export function createTransitionAnimation(transition: transitionAnimationParam): Ti.Proxy

	declare export function createViewAttachmentBehavior(
		parameters?: Dictionary<Ti.UI.iOS.ViewAttachmentBehavior>
	): Ti.UI.iOS.ViewAttachmentBehavior

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function cancelAllLocalNotifications(): void

	declare export function cancelLocalNotification(id: number): void

	declare export function cancelLocalNotification(id: string): void

	declare export function createUserNotificationAction(
		parameters?: Dictionary<Ti.App.iOS.UserNotificationAction>
	): Ti.App.iOS.UserNotificationAction

	declare export function createUserNotificationCategory(
		parameters?: Dictionary<Ti.App.iOS.UserNotificationCategory>
	): Ti.App.iOS.UserNotificationCategory

	declare export function endBackgroundHandler(handlerID: string): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getApplicationOpenSettingsURL(): string

	declare export function getBubbleParent(): boolean

	declare export function getCurrentUserNotificationSettings(): UserNotificationSettings

	declare export function registerBackgroundService(params: Dictionary<Object>): Ti.App.iOS.BackgroundService

	declare export function registerUserNotificationSettings(params: UserNotificationSettings): void

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function scheduleLocalNotification(params: NotificationParams): Ti.App.iOS.LocalNotification

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setMinimumBackgroundFetchInterval(fetchInterval: number): void

		
}

declare module 'iPhone' {
		declare export interface NavigationGroup {
		window: Ti.UI.Window,
		close(window: Ti.UI.Window, options: Dictionary<Object>): void,
		getWindow(): Ti.UI.Window,
		open(window: Ti.UI.Window, options: Dictionary<Object>): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createNavigationGroup(
		parameters?: Dictionary<Ti.UI.iPhone.NavigationGroup>
	): Ti.UI.iPhone.NavigationGroup

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getAppBadge(): number

	declare export function getAppSupportsShakeToEdit(): boolean

	declare export function getBubbleParent(): boolean

	declare export function getStatusBarHidden(): boolean

	declare export function getStatusBarStyle(): number

	declare export function hideStatusBar(params?: hideStatusBarParams): void

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setAppBadge(appBadge: number): void

	declare export function setAppSupportsShakeToEdit(appSupportsShakeToEdit: boolean): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function showStatusBar(params?: showStatusBarParams): void

		
}

declare module 'Android' {
		declare export interface SearchView {
		hintText: string,
		iconified: boolean,
		iconifiedByDefault: boolean,
		submitEnabled: boolean,
		value: string,
		blur(): void,
		focus(): void,
		getHintText(): string,
		getIconified(): boolean,
		getIconifiedByDefault(): boolean,
		getSubmitEnabled(): boolean,
		getValue(): string,
		setHintText(hintText: string): void,
		setIconified(iconified: boolean): void,
		setIconifiedByDefault(iconifiedByDefault: boolean): void,
		setSubmitEnabled(submitEnabled: boolean): void,
		setValue(value: string): void
	}

	declare export interface ProgressIndicator {
		cancelable: boolean,
		location: number,
		max: number,
		message: string,
		messageid: string,
		min: number,
		type: number,
		getCancelable(): boolean,
		getLocation(): number,
		getMax(): number,
		getMessage(): string,
		getMessageid(): string,
		getMin(): number,
		getType(): number,
		hide(): void,
		setCancelable(cancelable: boolean): void,
		setLocation(location: number): void,
		setMax(max: number): void,
		setMessage(message: string): void,
		setMessageid(messageid: string): void,
		setMin(min: number): void,
		setType(type: number): void,
		show(): void
	}

	declare export interface LocationProvider {
		minUpdateDistance: number,
		minUpdateTime: number,
		name: string,
		getMinUpdateDistance(): number,
		getMinUpdateTime(): number,
		getName(): string,
		setMinUpdateDistance(minUpdateDistance: number): void,
		setMinUpdateTime(minUpdateTime: number): void,
		setName(name: string): void
	}

	declare export interface LocationRule {
		accuracy: number,
		maxAge: number,
		minAge: number,
		name: string,
		getAccuracy(): number,
		getMaxAge(): number,
		getMinAge(): number,
		getName(): string,
		setAccuracy(accuracy: number): void,
		setMaxAge(maxAge: number): void,
		setMinAge(minAge: number): void,
		setName(name: string): void
	}

	declare export interface R {
		
	}

	declare export interface Intent {
		action: string,
		className: string,
		data: string,
		flags: number,
		packageName: string,
		type: string,
		url: string,
		addCategory(name: string): void,
		addFlags(flags: number): void,
		getAction(): string,
		getBlobExtra(name: string): Ti.Blob,
		getBooleanExtra(name: string): boolean,
		getClassName(): string,
		getData(): string,
		getDoubleExtra(name: string): number,
		getFlags(): number,
		getIntExtra(name: string): number,
		getLongExtra(name: string): number,
		getPackageName(): string,
		getStringExtra(name: string): string,
		getType(): string,
		getUrl(): string,
		hasExtra(name: string): boolean,
		putExtra(name: string, value: any): void,
		putExtraUri(name: string, value: string): void,
		setFlags(flags: number): void
	}

	declare export interface Notification {
		audioStreamType: number,
		contentIntent: Ti.Android.PendingIntent,
		contentText: string,
		contentTitle: string,
		contentView: Ti.Android.RemoteViews,
		defaults: number,
		deleteIntent: Ti.Android.PendingIntent,
		flags: number,
		icon: any,
		ledARGB: number,
		ledOffMS: number,
		ledOnMS: number,
		number: number,
		sound: string,
		tickerText: string,
		when: any,
		getAudioStreamType(): number,
		getContentIntent(): Ti.Android.PendingIntent,
		getContentText(): string,
		getContentTitle(): string,
		getDefaults(): number,
		getDeleteIntent(): Ti.Android.PendingIntent,
		getFlags(): number,
		getIcon(): any,
		getLedARGB(): number,
		getLedOffMS(): number,
		getLedOnMS(): number,
		getNumber(): number,
		getSound(): string,
		getTickerText(): string,
		getWhen(): any,
		setAudioStreamType(audioStreamType: number): void,
		setContentIntent(contentIntent: Ti.Android.PendingIntent): void,
		setContentText(contentText: string): void,
		setContentTitle(contentTitle: string): void,
		setContentView(contentView: Ti.Android.RemoteViews): void,
		setDefaults(defaults: number): void,
		setDeleteIntent(deleteIntent: Ti.Android.PendingIntent): void,
		setFlags(flags: number): void,
		setIcon(icon: number): void,
		setIcon(icon: string): void,
		setLatestEventInfo(
		contentTitle: string, contentText: string, contentIntent: Ti.Android.PendingIntent
	): void,
		setLedARGB(ledARGB: number): void,
		setLedOffMS(ledOffMS: number): void,
		setLedOnMS(ledOnMS: number): void,
		setNumber(number: number): void,
		setSound(sound: string): void,
		setTickerText(tickerText: string): void,
		setWhen(when: Date): void,
		setWhen(when: number): void
	}

	declare export interface MenuItem {
		actionView: Ti.UI.View,
		actionViewExpanded: boolean,
		checkable: boolean,
		checked: boolean,
		enabled: boolean,
		groupId: number,
		icon: any,
		itemId: number,
		order: number,
		showAsAction: number,
		title: string,
		titleCondensed: string,
		visible: boolean,
		collapseActionView(): void,
		expandActionView(): void,
		getActionView(): Ti.UI.View,
		getGroupId(): number,
		getItemId(): number,
		getOrder(): number,
		getTitle(): string,
		getTitleCondensed(): string,
		isActionViewExpanded(): boolean,
		isCheckable(): boolean,
		isChecked(): boolean,
		isEnabled(): boolean,
		isVisible(): boolean,
		setActionView(actionView: Ti.UI.View): void,
		setCheckable(checkable: boolean): void,
		setChecked(enabled: boolean): void,
		setEnabled(enabled: boolean): void,
		setIcon(icon: number): void,
		setIcon(icon: string): void,
		setShowAsAction(showAsAction: number): void,
		setTitle(title: string): void,
		setTitleCondensed(titleCondensed: string): void,
		setVisible(visible: boolean): void
	}

	declare export interface NotificationManager {
		DEFAULT_ALL: number,
		DEFAULT_LIGHTS: number,
		DEFAULT_SOUND: number,
		DEFAULT_VIBRATE: number,
		FLAG_AUTO_CANCEL: number,
		FLAG_INSISTENT: number,
		FLAG_NO_CLEAR: number,
		FLAG_ONGOING_EVENT: number,
		FLAG_ONLY_ALERT_ONCE: number,
		FLAG_SHOW_LIGHTS: number,
		STREAM_DEFAULT: number,
		cancel(id: number): void,
		cancelAll(): void,
		notify(id: number, notification: Ti.Android.Notification): void
	}

	declare export interface R {
		anim: any,
		array: any,
		attr: any,
		color: any,
		dimen: any,
		drawable: any,
		id: any,
		integer: any,
		layout: any,
		string: any,
		style: any,
		styleable: any
	}

	declare export interface ActionBar {
		backgroundImage: string,
		displayHomeAsUp: boolean,
		homeButtonEnabled: boolean,
		icon: string,
		logo: string,
		navigationMode: number,
		onHomeIconItemSelected: (...args: any[]) => any,
		subtitle: string,
		title: string,
		getNavigationMode(): number,
		getSubtitle(): string,
		getTitle(): string,
		hide(): void,
		setBackgroundImage(backgroundImage: string): void,
		setDisplayHomeAsUp(displayHomeAsUp: boolean): void,
		setDisplayShowHomeEnabled(show: boolean): void,
		setDisplayShowTitleEnabled(show: boolean): void,
		setHomeButtonEnabled(homeButtonEnabled: boolean): void,
		setIcon(icon: string): void,
		setLogo(logo: string): void,
		setNavigationMode(navigationMode: number): void,
		setOnHomeIconItemSelected(onHomeIconItemSelected: (...args: any[]) => any): void,
		setSubtitle(subtitle: string): void,
		setTitle(title: string): void,
		show(): void
	}

	declare export interface BroadcastReceiver {
		onReceived: (...args: any[]) => any,
		url: string,
		getOnReceived(): (...args: any[]) => any,
		getUrl(): string,
		setOnReceived(onReceived: (...args: any[]) => any): void,
		setUrl(url: string): void
	}

	declare export interface Menu {
		items: Array<Ti.Android.MenuItem>,
		add(options: any): Ti.Android.MenuItem,
		clear(): void,
		close(): void,
		findItem(item: number): Ti.Android.MenuItem,
		findItem(item: Ti.Android.MenuItem): Ti.Android.MenuItem,
		getItem(index: number): Ti.Android.MenuItem,
		getItems(): Array<Ti.Android.MenuItem>,
		hasVisibleItems(): boolean,
		removeGroup(groupId: number): void,
		removeItem(itemId: number): void,
		setGroupEnabled(groupId: number, enabled: boolean): void,
		setGroupVisible(groupId: number, visible: boolean): void,
		size(): number
	}

	declare export interface Activity {
		actionBar: Ti.Android.ActionBar,
		intent: Ti.Android.Intent,
		onCreate: (...args: any[]) => any,
		onCreateOptionsMenu: (...args: any[]) => any,
		onDestroy: (...args: any[]) => any,
		onPause: (...args: any[]) => any,
		onPrepareOptionsMenu: (...args: any[]) => any,
		onRestart: (...args: any[]) => any,
		onResume: (...args: any[]) => any,
		onStart: (...args: any[]) => any,
		onStop: (...args: any[]) => any,
		requestedOrientation: number,
		finish(): void,
		getActionBar(): Ti.Android.ActionBar,
		getIntent(): Ti.Android.Intent,
		getOnCreate(): (...args: any[]) => any,
		getOnCreateOptionsMenu(): (...args: any[]) => any,
		getOnDestroy(): (...args: any[]) => any,
		getOnPause(): (...args: any[]) => any,
		getOnPrepareOptionsMenu(): (...args: any[]) => any,
		getOnRestart(): (...args: any[]) => any,
		getOnResume(): (...args: any[]) => any,
		getOnStart(): (...args: any[]) => any,
		getOnStop(): (...args: any[]) => any,
		getString(resourceId: number, format: any): string,
		invalidateOptionsMenu(): void,
		openOptionsMenu(): void,
		sendBroadcast(intent: Ti.Android.Intent): void,
		sendBroadcastWithPermission(intent: Ti.Android.Intent, receiverPermission?: string): void,
		setOnCreate(onCreate: (...args: any[]) => any): void,
		setOnCreateOptionsMenu(onCreateOptionsMenu: (...args: any[]) => any): void,
		setOnDestroy(onDestroy: (...args: any[]) => any): void,
		setOnPause(onPause: (...args: any[]) => any): void,
		setOnPrepareOptionsMenu(onPrepareOptionsMenu: (...args: any[]) => any): void,
		setOnRestart(onRestart: (...args: any[]) => any): void,
		setOnResume(onResume: (...args: any[]) => any): void,
		setOnStart(onStart: (...args: any[]) => any): void,
		setOnStop(onStop: (...args: any[]) => any): void,
		setRequestedOrientation(orientation: number): void,
		setResult(resultCode: number, intent?: Ti.Android.Intent): void,
		startActivity(intent: Ti.Android.Intent): void,
		startActivityForResult(intent: Ti.Android.Intent, callback: (...args: any[]) => any): void
	}

	declare export interface Service {
		intent: Ti.Android.Intent,
		serviceInstanceId: number,
		getIntent(): Ti.Android.Intent,
		getServiceInstanceId(): number,
		start(): void,
		stop(): void
	}

	declare export interface RemoteViews {
		layoutId: number,
		packageName: string,
		getLayoutId(): number,
		getPackageName(): string,
		setBoolean(viewId: number, methodName: string, value: boolean): void,
		setChronometer(viewId: number, base: Date, format: string, started: boolean): void,
		setDouble(viewId: number, methodName: string, value: number): void,
		setImageViewResource(viewId: number, srcId: number): void,
		setImageViewUri(viewId: number, uri: string): void,
		setInt(viewId: number, methodName: string, value: number): void,
		setOnClickPendingIntent(viewId: number, pendingIntent: Ti.Android.PendingIntent): void,
		setProgressBar(viewId: number, max: number, progress: number, indeterminate: boolean): void,
		setString(viewId: number, methodName: string, value: string): void,
		setTextColor(viewId: number, color: number): void,
		setTextViewText(viewId: number, text: string): void,
		setUri(viewId: number, methodName: string, value: string): void,
		setViewVisibility(viewId: number, visibility: number): void
	}

	declare export interface PendingIntent {
		flags: number,
		intent: Ti.Android.Intent,
		updateCurrentIntent: boolean,
		getFlags(): number,
		getIntent(): Ti.Android.Intent,
		getUpdateCurrentIntent(): boolean
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createProgressIndicator(
		parameters?: Dictionary<Ti.UI.Android.ProgressIndicator>
	): Ti.UI.Android.ProgressIndicator

	declare export function createSearchView(parameters?: Dictionary<Ti.UI.Android.SearchView>): Ti.UI.Android.SearchView

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function hideSoftKeyboard(): void

	declare export function openPreferences(): void

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function addLocationProvider(provider: Ti.Geolocation.Android.LocationProvider): void

	declare export function addLocationRule(rule: Ti.Geolocation.Android.LocationRule): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createLocationProvider(
		parameters?: Dictionary<Ti.Geolocation.Android.LocationProvider>
	): Ti.Geolocation.Android.LocationProvider

	declare export function createLocationRule(
		parameters?: Dictionary<Ti.Geolocation.Android.LocationRule>
	): Ti.Geolocation.Android.LocationRule

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getManualMode(): boolean

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function removeLocationProvider(provider: Ti.Geolocation.Android.LocationProvider): void

	declare export function removeLocationRule(rule: Ti.Geolocation.Android.LocationRule): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setManualMode(manualMode: boolean): void

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getAppVersionCode(): number

	declare export function getAppVersionName(): string

	declare export function getBubbleParent(): boolean

	declare export function getLaunchIntent(): Ti.Android.Intent

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createBroadcastIntent(options: BroadcastIntentOptions): Ti.Android.Intent

	declare export function createBroadcastReceiver(
		parameters?: Dictionary<Ti.Android.BroadcastReceiver>
	): Ti.Android.BroadcastReceiver

	declare export function createIntent(parameters?: Dictionary<Ti.Android.Intent>): Ti.Android.Intent

	declare export function createIntentChooser(intent: Ti.Android.Intent, title: string): Ti.Android.Intent

	declare export function createNotification(parameters?: Dictionary<Ti.Android.Notification>): Ti.Android.Notification

	declare export function createPendingIntent(parameters?: Dictionary<Ti.Android.PendingIntent>): Ti.Android.PendingIntent

	declare export function createRemoteViews(parameters?: Dictionary<Ti.Android.RemoteViews>): Ti.Android.RemoteViews

	declare export function createService(intent: Ti.Android.Intent): Ti.Android.Service

	declare export function createServiceIntent(options: ServiceIntentOptions): Ti.Android.Intent

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getCurrentActivity(): Ti.Android.Activity

	declare export function getCurrentService(): Ti.Android.Service

	declare export function isServiceRunning(intent: Ti.Android.Intent): boolean

	declare export function registerBroadcastReceiver(broadcastReceiver: Ti.Android.BroadcastReceiver, actions: Array<String>): void

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function startService(intent: Ti.Android.Intent): void

	declare export function stopService(intent: Ti.Android.Intent): void

	declare export function unregisterBroadcastReceiver(broadcastReceiver: Ti.Android.BroadcastReceiver): void

		
}

declare module 'MobileWeb' {
		declare export interface NavigationGroup {
		navBarAtTop: boolean,
		window: Ti.UI.Window,
		close(window: Ti.UI.Window, options: Dictionary<Object>): void,
		getNavBarAtTop(): boolean,
		getWindow(): Ti.UI.Window,
		open(window: Ti.UI.Window, options: Dictionary<Object>): void,
		setNavBarAtTop(navBarAtTop: boolean): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createNavigationGroup(
		parameters?: Dictionary<Ti.UI.MobileWeb.NavigationGroup>
	): Ti.UI.MobileWeb.NavigationGroup

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

		
}

declare module 'Geolocation' {
		declare export interface MobileWeb {
		forwardGeocoderTimeout: number,
		locationTimeout: number,
		maximumHeadingAge: number,
		maximumLocationAge: number,
		reverseGeocoderTimeout: number,
		getForwardGeocoderTimeout(): number,
		getLocationTimeout(): number,
		getMaximumHeadingAge(): number,
		getMaximumLocationAge(): number,
		getReverseGeocoderTimeout(): number,
		setForwardGeocoderTimeout(forwardGeocoderTimeout: number): void,
		setLocationTimeout(locationTimeout: number): void,
		setMaximumHeadingAge(maximumHeadingAge: number): void,
		setMaximumLocationAge(maximumLocationAge: number): void,
		setReverseGeocoderTimeout(reverseGeocoderTimeout: number): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function forwardGeocoder(address: string, callback: (...args: any[]) => any): void

	declare export function getAccuracy(): number

	declare export function getActivityType(): number

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getCurrentHeading(callback: (...args: any[]) => any): void

	declare export function getCurrentPosition(callback: (...args: any[]) => any): void

	declare export function getDistanceFilter(): number

	declare export function getFrequency(): number

	declare export function getHasCompass(): boolean

	declare export function getHeadingFilter(): number

	declare export function getLastGeolocation(): string

	declare export function getLocationServicesAuthorization(): number

	declare export function getLocationServicesEnabled(): boolean

	declare export function getPauseLocationUpdateAutomatically(): boolean

	declare export function getPreferredProvider(): string

	declare export function getPurpose(): string

	declare export function getShowCalibration(): boolean

	declare export function getTrackSignificantLocationChange(): boolean

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function reverseGeocoder(latitude: number, longitude: number, callback: (...args: any[]) => any): void

	declare export function setAccuracy(accuracy: number): void

	declare export function setActivityType(activityType: number): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setDistanceFilter(distanceFilter: number): void

	declare export function setFrequency(frequency: number): void

	declare export function setHeadingFilter(headingFilter: number): void

	declare export function setLocationServicesAuthorization(locationServicesAuthorization: number): void

	declare export function setPauseLocationUpdateAutomatically(pauseLocationUpdateAutomatically: boolean): void

	declare export function setPreferredProvider(preferredProvider: string): void

	declare export function setPurpose(purpose: string): void

	declare export function setShowCalibration(showCalibration: boolean): void

	declare export function setTrackSignificantLocationChange(trackSignificantLocationChange: boolean): void

		
}

declare module 'Map' {
		declare export interface View {
		animated: boolean,
		annotations: Array<Ti.Map.Annotation>,
		hideAnnotationWhenTouchMap: boolean,
		latitudeDelta: number,
		longitudeDelta: number,
		mapType: number,
		region: MapRegionType,
		regionFit: boolean,
		userLocation: boolean,
		addAnnotation(annotation: Dictionary<Ti.Map.Annotation>): void,
		addAnnotation(annotation: Ti.Map.Annotation): void,
		addAnnotations(annotations: Array<Ti.Map.Annotation>): void,
		addAnnotations(annotations: Array<Dictionary<Ti.Map.Annotation>>): void,
		addRoute(route: MapRouteType): void,
		deselectAnnotation(annotation: string): void,
		deselectAnnotation(annotation: Ti.Map.Annotation): void,
		getAnimate(): boolean,
		getAnimated(): boolean,
		getAnnotations(): Array<Ti.Map.Annotation>,
		getHideAnnotationWhenTouchMap(): boolean,
		getLatitudeDelta(): number,
		getLongitudeDelta(): number,
		getMapType(): number,
		getRegion(): MapRegionType,
		getRegionFit(): boolean,
		getUserLocation(): boolean,
		removeAllAnnotations(): void,
		removeAnnotation(annotation: string): void,
		removeAnnotation(annotation: Ti.Map.Annotation): void,
		removeAnnotations(annotations: Array<String>): void,
		removeAnnotations(annotations: Array<Ti.Map.Annotation>): void,
		removeRoute(route: MapRouteType): void,
		selectAnnotation(annotation: string): void,
		selectAnnotation(annotation: Ti.Map.Annotation): void,
		setAnimate(animate: boolean): void,
		setAnimated(animated: boolean): void,
		setAnnotations(annotations: Array<Ti.Map.Annotation>): void,
		setHideAnnotationWhenTouchMap(hideAnnotationWhenTouchMap: boolean): void,
		setLocation(location: MapLocationType): void,
		setMapType(mapType: number): void,
		setRegion(region: MapRegionType): void,
		setRegionFit(regionFit: boolean): void,
		setUserLocation(userLocation: boolean): void,
		zoom(level: number): void
	}

	declare export interface Annotation {
		animate: boolean,
		canShowCallout: boolean,
		centerOffset: Point,
		customView: Ti.UI.View,
		draggable: boolean,
		image: any,
		latitude: number,
		leftButton: any,
		leftView: Ti.UI.View,
		longitude: number,
		pinImage: string,
		pincolor: number,
		rightButton: any,
		rightView: Ti.UI.View,
		subtitle: string,
		subtitleid: string,
		title: string,
		titleid: string,
		getAnimate(): boolean,
		getCanShowCallout(): boolean,
		getCenterOffset(): Point,
		getCustomView(): Ti.UI.View,
		getDraggable(): boolean,
		getImage(): any,
		getLatitude(): number,
		getLeftButton(): any,
		getLeftView(): Ti.UI.View,
		getLongitude(): number,
		getPinImage(): string,
		getPincolor(): number,
		getRightButton(): any,
		getRightView(): Ti.UI.View,
		getSubtitle(): string,
		getSubtitleid(): string,
		getTitle(): string,
		getTitleid(): string,
		setAnimate(animate: boolean): void,
		setCanShowCallout(canShowCallout: boolean): void,
		setCenterOffset(centerOffset: Point): void,
		setCustomView(customView: Ti.UI.View): void,
		setDraggable(draggable: boolean): void,
		setImage(image: string): void,
		setImage(image: Ti.Blob): void,
		setLatitude(latitude: number): void,
		setLeftButton(leftButton: number): void,
		setLeftButton(leftButton: string): void,
		setLeftView(leftView: Ti.UI.View): void,
		setLongitude(longitude: number): void,
		setPinImage(pinImage: string): void,
		setPincolor(pincolor: number): void,
		setRightButton(rightButton: number): void,
		setRightButton(rightButton: string): void,
		setRightView(rightView: Ti.UI.View): void,
		setSubtitle(subtitle: string): void,
		setSubtitleid(subtitleid: string): void,
		setTitle(title: string): void,
		setTitleid(titleid: string): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createAnnotation(parameters?: Dictionary<Ti.Map.Annotation>): Ti.Map.Annotation

	declare export function createView(parameters?: Dictionary<Ti.Map.View>): Ti.Map.View

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

		
}

declare module 'Cloud' {
		declare export interface Objects {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface SocialIntegrations {
		externalAccountLink(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		externalAccountLogin(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		externalAccountUnlink(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		searchFacebookFriends(callback: (...args: any[]) => any): void
	}

	declare export interface PushNotifications {
		notify(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		notifyTokens(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		queryChannels(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		resetBadge(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		setBadge(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		showChannels(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		subscribe(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		subscribeToken(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		unsubscribe(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		unsubscribeToken(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		updateSubscription(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Clients {
		geolocate(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void
	}

	declare export interface ACLs {
		addUser(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		checkUser(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		removeUser(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void
	}

	declare export interface Users {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		login(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		logout(callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		requestResetPassword(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		resendConfirmation(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		search(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		secureCreate(
		parameters?: Dictionary<CloudUsersSecureDialog>, callback?: (...args: any[]) => any
	): void,
		secureLogin(
		parameters?: Dictionary<CloudUsersSecureDialog>, callback?: (...args: any[]) => any
	): void,
		secureStatus(): boolean,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		showMe(callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Messages {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		removeThread(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		reply(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		showInbox(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		showSent(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		showThread(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		showThreads(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Events {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		queryOccurrences(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		search(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		searchOccurrences(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		show(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		showOccurrences(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Reviews {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Chats {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		getChatGroups(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		query(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		queryChatGroups(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface KeyValues {
		append(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		get(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		increment(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		set(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface GeoFences {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Checkins {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Friends {
		add(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		approve(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		requests(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		search(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Files {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface PushSchedules {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Likes {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Photos {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		search(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Statuses {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		delete(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		search(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface PhotoCollections {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		search(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		showPhotos(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		showSubCollections(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Posts {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Emails {
		send(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export interface Places {
		create(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		query(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		remove(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		search(parameters?: Dictionary<Object>, callback?: (...args: any[]) => any): void,
		show(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void,
		update(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void
	}

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function getAccessToken(): string

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getDebug(): boolean

	declare export function getExpiresIn(): number

	declare export function getOndatastream(): (...args: any[]) => any

	declare export function getOnsendstream(): (...args: any[]) => any

	declare export function getSessionId(): string

	declare export function getUseSecure(): boolean

	declare export function hasStoredSession(): boolean

	declare export function retrieveStoredSession(): string

	declare export function sendRequest(parameters: Dictionary<Object>, callback: (...args: any[]) => any): void

	declare export function setAccessToken(accessToken: string): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setDebug(debug: boolean): void

	declare export function setOndatastream(ondatastream: (...args: any[]) => any): void

	declare export function setOnsendstream(onsendstream: (...args: any[]) => any): void

	declare export function setSessionId(sessionId: string): void

	declare export function setUseSecure(useSecure: boolean): void

		
}

declare module 'App' {
		declare export interface Properties {
		getBool(property: string, _default?: boolean): boolean,
		getDouble(property: string, _default?: number): number,
		getInt(property: string, _default?: number): number,
		getList(property: string, _default?: Array<Object>): Array<Object>,
		getObject(property: string, _default?: any): any,
		getString(property: string, _default?: string): string,
		hasProperty(property: string): boolean,
		listProperties(): Array<Object>,
		removeProperty(property: string): void,
		setBool(property: string, value: boolean): void,
		setDouble(property: string, value: number): void,
		setInt(property: string, value: number): void,
		setList(property: string, value: Array<Object>): void,
		setObject(property: string, value: any): void,
		setString(property: string, value: string): void
	}

	declare export interface Tizen {
		categories: Array<String>,
		iconPath: string,
		id: string,
		installDate: Date,
		name: string,
		show: boolean,
		size: number,
		exit(): void,
		getCategories(): Array<String>,
		getIconPath(): string,
		getId(): string,
		getInstallDate(): Date,
		getName(): string,
		getShow(): boolean,
		getSize(): number,
		hide(): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function fireSystemEvent(eventName: string, param?: any): void

	declare export function getAccessibilityEnabled(): boolean

	declare export function getAnalytics(): boolean

	declare export function getApiName(): string

	declare export function getArguments(): launchOptions

	declare export function getBubbleParent(): boolean

	declare export function getCopyright(): string

	declare export function getDeployType(): string

	declare export function getDescription(): string

	declare export function getDisableNetworkActivityIndicator(): boolean

	declare export function getForceSplashAsSnapshot(): boolean

	declare export function getGuid(): string

	declare export function getId(): string

	declare export function getIdleTimerDisabled(): boolean

	declare export function getInstallId(): string

	declare export function getKeyboardVisible(): boolean

	declare export function getName(): string

	declare export function getProximityDetection(): boolean

	declare export function getProximityState(): boolean

	declare export function getPublisher(): string

	declare export function getSessionId(): string

	declare export function getUrl(): string

	declare export function getVersion(): string

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setDisableNetworkActivityIndicator(disableNetworkActivityIndicator: boolean): void

	declare export function setForceSplashAsSnapshot(forceSplashAsSnapshot: boolean): void

	declare export function setIdleTimerDisabled(idleTimerDisabled: boolean): void

	declare export function setProximityDetection(proximityDetection: boolean): void

		
}

declare module 'Calendar' {
		declare export interface Event {
		alerts: Array<Ti.Android.Calendar.Alert>,
		allDay: boolean,
		begin: Date,
		description: string,
		end: Date,
		extendedProperties: Dictionary<Object>,
		hasAlarm: boolean,
		hasExtendedProperties: boolean,
		id: string,
		location: string,
		reminders: Array<Ti.Android.Calendar.Reminder>,
		status: number,
		title: string,
		visibility: number,
		createAlert(data: Dictionary<Ti.Android.Calendar.Alert>): Ti.Android.Calendar.Alert,
		createReminder(data: Dictionary<Ti.Android.Calendar.Reminder>): Ti.Android.Calendar.Reminder,
		getAlerts(): Array<Ti.Android.Calendar.Alert>,
		getAllDay(): boolean,
		getBegin(): Date,
		getDescription(): string,
		getEnd(): Date,
		getExtendedProperties(): Dictionary<Object>,
		getExtendedProperty(name: string): string,
		getHasAlarm(): boolean,
		getHasExtendedProperties(): boolean,
		getId(): string,
		getLocation(): string,
		getReminders(): Array<Ti.Android.Calendar.Reminder>,
		getStatus(): number,
		getTitle(): string,
		getVisibility(): number,
		setExtendedProperty(name: string, value: string): void
	}

	declare export interface Reminder {
		id: string,
		method: number,
		minutes: number,
		getId(): string,
		getMethod(): number,
		getMinutes(): number
	}

	declare export interface Calendar {
		hidden: boolean,
		id: string,
		name: string,
		selected: boolean,
		createEvent(properties: Dictionary<Ti.Android.Calendar.Event>): Ti.Android.Calendar.Event,
		getEventById(id: number): Ti.Android.Calendar.Event,
		getEventsBetweenDates(date1: Date, date2: Date): Array<Ti.Android.Calendar.Event>,
		getEventsInDate(year: number, month: number, day: number): Array<Ti.Android.Calendar.Event>,
		getEventsInMonth(year: number, month: number): Array<Ti.Android.Calendar.Event>,
		getEventsInYear(year: number): Array<Ti.Android.Calendar.Event>,
		getHidden(): boolean,
		getId(): string,
		getName(): string,
		getSelected(): boolean
	}

	declare export interface Alert {
		alarmTime: Date,
		begin: Date,
		end: Date,
		eventId: number,
		id: string,
		minutes: number,
		state: number,
		getAlarmTime(): Date,
		getBegin(): Date,
		getEnd(): Date,
		getEventId(): number,
		getId(): string,
		getMinutes(): number,
		getState(): number
	}

	declare export interface Calendar {
		hidden: boolean,
		id: string,
		name: string,
		selected: boolean,
		createEvent(properties: Dictionary<Ti.Calendar.Event>): Ti.Calendar.Event,
		getEventById(id: number): Ti.Calendar.Event,
		getEventsBetweenDates(date1: Date, date2: Date): Array<Ti.Calendar.Event>,
		getEventsInDate(year: number, month: number, day: number): Array<Ti.Calendar.Event>,
		getEventsInMonth(year: number, month: number): Array<Ti.Calendar.Event>,
		getEventsInYear(year: number): Array<Ti.Calendar.Event>,
		getHidden(): boolean,
		getId(): string,
		getName(): string,
		getSelected(): boolean
	}

	declare export interface Reminder {
		id: string,
		method: number,
		minutes: number,
		getId(): string,
		getMethod(): number,
		getMinutes(): number
	}

	declare export interface Event {
		alerts: Array<Ti.Calendar.Alert>,
		allDay: boolean,
		availability: number,
		begin: Date,
		description: string,
		end: Date,
		extendedProperties: Dictionary<Object>,
		hasAlarm: boolean,
		id: string,
		isDetached: boolean,
		location: string,
		notes: string,
		recurenceRule: Ti.Calendar.RecurrenceRule,
		recurenceRules: Array<Ti.Calendar.RecurrenceRule>,
		reminders: Array<Ti.Calendar.Reminder>,
		status: number,
		title: string,
		visibility: number,
		addRecurrenceRule(rule: Ti.Calendar.RecurrenceRule): void,
		createAlert(data: Dictionary<Ti.Calendar.Alert>): Ti.Calendar.Alert,
		createRecurenceRule(data: Dictionary<Ti.Calendar.RecurrenceRule>): Ti.Calendar.RecurrenceRule,
		createReminder(data: Dictionary<Ti.Calendar.Reminder>): Ti.Calendar.Reminder,
		getAlerts(): Array<Ti.Calendar.Alert>,
		getAllDay(): boolean,
		getAvailability(): number,
		getBegin(): Date,
		getDescription(): string,
		getEnd(): Date,
		getExtendedProperties(): Dictionary<Object>,
		getExtendedProperty(name: string): string,
		getHasAlarm(): boolean,
		getId(): string,
		getIsDetached(): boolean,
		getLocation(): string,
		getNotes(): string,
		getRecurenceRule(): Ti.Calendar.RecurrenceRule,
		getRecurenceRules(): Array<Ti.Calendar.RecurrenceRule>,
		getReminders(): Array<Ti.Calendar.Reminder>,
		getStatus(): number,
		getTitle(): string,
		getVisibility(): number,
		refresh(): boolean,
		remove(span: number): boolean,
		removeRecurenceRule(rule: Ti.Calendar.RecurrenceRule): void,
		save(span: number): boolean,
		setAlerts(alerts: Array<Ti.Calendar.Alert>): void,
		setAllDay(allDay: boolean): void,
		setBegin(begin: Date): void,
		setEnd(end: Date): void,
		setExtendedProperty(name: string, value: string): void,
		setLocation(location: string): void,
		setNotes(notes: string): void,
		setRecurenceRule(recurenceRule: Ti.Calendar.RecurrenceRule): void,
		setRecurenceRules(recurenceRules: Array<Ti.Calendar.RecurrenceRule>): void,
		setTitle(title: string): void
	}

	declare export interface RecurrenceRule {
		calendarID: string,
		daysOfTheMonth: Array<Number>,
		daysOfTheWeek: daysOfTheWeekDictionary,
		daysOfTheYear: Array<Number>,
		end: recurrenceEndDictionary,
		frequency: number,
		interval: number,
		monthsOfTheYear: Array<Number>,
		setPositions: Array<Number>,
		weeksOfTheYear: Array<Number>,
		getCalendarID(): string,
		getDaysOfTheMonth(): Array<Number>,
		getDaysOfTheWeek(): daysOfTheWeekDictionary,
		getDaysOfTheYear(): Array<Number>,
		getEnd(): recurrenceEndDictionary,
		getFrequency(): number,
		getInterval(): number,
		getMonthsOfTheYear(): Array<Number>,
		getSetPositions(): Array<Number>,
		getWeeksOfTheYear(): Array<Number>
	}

	declare export interface Alert {
		absoluteDate: Date,
		alarmTime: Date,
		begin: Date,
		end: Date,
		eventId: number,
		id: string,
		minutes: number,
		relativeOffset: number,
		state: number,
		getAbsoluteDate(): Date,
		getAlarmTime(): Date,
		getBegin(): Date,
		getEnd(): Date,
		getEventId(): number,
		getId(): string,
		getMinutes(): number,
		getRelativeOffset(): number,
		getState(): number,
		setAbsoluteDate(absoluteDate: Date): void,
		setRelativeOffset(relativeOffset: number): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getAllAlerts(): Array<Ti.Android.Calendar.Alert>

	declare export function getAllCalendars(): Array<Ti.Android.Calendar.Calendar>

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getCalendarById(id: number): Ti.Android.Calendar.Calendar

	declare export function getSelectableCalendars(): Array<Ti.Android.Calendar.Calendar>

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getAllAlerts(): Array<Ti.Calendar.Alert>

	declare export function getAllCalendars(): Array<Ti.Calendar.Calendar>

	declare export function getAllEditableCalendars(): Array<Ti.Calendar.Calendar>

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getCalendarById(id: string): Ti.Calendar.Calendar

	declare export function getDefaultCalendar(): Ti.Calendar.Calendar

	declare export function getEventsAuthorization(): number

	declare export function getSelectableCalendars(): Array<Ti.Calendar.Calendar>

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function requestEventsAuthorization(callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

		
}

declare module 'Database' {
		declare export interface ResultSet {
		rowCount: number,
		validRow: boolean,
		close(): void,
		field(index: number, type?: number): any,
		fieldByName(name: string, type?: number): any,
		fieldCount(): number,
		fieldName(index: number): string,
		getFieldCount(): number,
		getFieldName(index: number): string,
		getRowCount(): number,
		getValidRow(): boolean,
		isValidRow(): boolean,
		next(): boolean
	}

	declare export interface DB {
		file: Ti.Filesystem.File,
		lastInsertRowId: number,
		name: string,
		rowsAffected: number,
		close(): void,
		execute(sql: string, vararg?: string): Ti.Database.ResultSet,
		execute(vararg?: Array<String>): Ti.Database.ResultSet,
		execute(vararg?: any): Ti.Database.ResultSet,
		execute(sql: string, vararg?: Array<Object>): Ti.Database.ResultSet,
		getFile(): Ti.Filesystem.File,
		getLastInsertRowId(): number,
		getName(): string,
		getRowsAffected(): number,
		remove(): void,
		setLastInsertRowId(lastInsertRowId: number): void,
		setName(name: string): void,
		setRowsAffected(rowsAffected: number): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function install(path: string, dbName: string): Ti.Database.DB

	declare export function open(dbName: string): Ti.Database.DB

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

		
}

declare module 'Contacts' {
		declare export interface Group {
		name: string,
		recordId: number,
		add(person: Ti.Contacts.Person): void,
		getName(): string,
		getRecordId(): number,
		members(): Array<Ti.Contacts.Person>,
		remove(person: Ti.Contacts.Person): void,
		setName(name: string): void,
		setRecordId(recordId: number): void,
		sortedMembers(sortBy: number): Array<Ti.Contacts.Person>
	}

	declare export interface Person {
		address: Dictionary<Object>,
		birthday: string,
		created: string,
		date: Dictionary<Object>,
		department: string,
		email: Dictionary<Object>,
		firstName: string,
		firstPhonetic: string,
		fullName: string,
		id: number,
		image: Ti.Blob,
		instantMessage: Dictionary<Object>,
		jobTitle: string,
		kind: number,
		lastName: string,
		lastPhonetic: string,
		middleName: string,
		middlePhonetic: string,
		modified: string,
		nickname: string,
		note: string,
		organization: string,
		phone: Dictionary<Object>,
		prefix: string,
		recordId: number,
		relatedNames: Dictionary<Object>,
		suffix: string,
		url: Dictionary<Object>,
		getAddress(): Dictionary<Object>,
		getBirthday(): string,
		getCreated(): string,
		getDate(): Dictionary<Object>,
		getDepartment(): string,
		getEmail(): Dictionary<Object>,
		getFirstName(): string,
		getFirstPhonetic(): string,
		getFullName(): string,
		getId(): number,
		getImage(): Ti.Blob,
		getInstantMessage(): Dictionary<Object>,
		getJobTitle(): string,
		getKind(): number,
		getLastName(): string,
		getLastPhonetic(): string,
		getMiddleName(): string,
		getMiddlePhonetic(): string,
		getModified(): string,
		getNickname(): string,
		getNote(): string,
		getOrganization(): string,
		getPhone(): Dictionary<Object>,
		getPrefix(): string,
		getRecordId(): number,
		getRelatedNames(): Dictionary<Object>,
		getSuffix(): string,
		getUrl(): Dictionary<Object>,
		setAddress(address: Dictionary<Object>): void,
		setBirthday(birthday: string): void,
		setDate(date: Dictionary<Object>): void,
		setDepartment(department: string): void,
		setEmail(email: Dictionary<Object>): void,
		setFirstName(firstName: string): void,
		setFirstPhonetic(firstPhonetic: string): void,
		setImage(image: Ti.Blob): void,
		setInstantMessage(instantMessage: Dictionary<Object>): void,
		setJobTitle(jobTitle: string): void,
		setKind(kind: number): void,
		setLastName(lastName: string): void,
		setLastPhonetic(lastPhonetic: string): void,
		setMiddleName(middleName: string): void,
		setMiddlePhonetic(middlePhonetic: string): void,
		setNickname(nickname: string): void,
		setNote(note: string): void,
		setOrganization(organization: string): void,
		setPhone(phone: Dictionary<Object>): void,
		setRecordId(recordId: number): void,
		setRelatedNames(relatedNames: Dictionary<Object>): void,
		setUrl(url: Dictionary<Object>): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createGroup(parameters?: Dictionary<Ti.Contacts.Group>): Ti.Contacts.Group

	declare export function createPerson(parameters?: Dictionary<Ti.Contacts.Person>): Ti.Contacts.Person

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getAllGroups(): Array<Ti.Contacts.Group>

	declare export function getAllPeople(limit: number): Array<Ti.Contacts.Person>

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getContactsAuthorization(): number

	declare export function getGroupByID(id: number): Ti.Contacts.Group

	declare export function getPeopleWithName(name: string): Array<Ti.Contacts.Person>

	declare export function getPersonByID(id: number): Ti.Contacts.Person

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function removeGroup(group: Ti.Contacts.Group): void

	declare export function removePerson(person: Ti.Contacts.Person): void

	declare export function requestAuthorization(callback: (...args: any[]) => any): void

	declare export function revert(): void

	declare export function save(contacts: Array<Ti.Contacts.Person>): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function showContacts(params: showContactsParams): void

		
}

declare module 'Tizen' {
		declare export interface Group {
		members(group: Ti.Contacts.Group, callback: (...args: any[]) => any): void,
		sortedMembers(
		sortBy: number, group: Ti.Contacts.Group, callback: (...args: any[]) => any
	): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getAllPeople(callback: (...args: any[]) => any): void

	declare export function getApiName(): string

	declare export function getPeopleWithName(name: string, callback: (...args: any[]) => any): void

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

		
}

declare module 'Media' {
		declare export interface Sound {
		STATE_BUFFERING: number,
		STATE_INITIALIZED: number,
		STATE_PAUSED: number,
		STATE_PLAYING: number,
		STATE_STARTING: number,
		STATE_STOPPED: number,
		STATE_STOPPING: number,
		STATE_WAITING_FOR_DATA: number,
		STATE_WAITING_FOR_QUEUE: number,
		allowBackground: boolean,
		duration: number,
		looping: boolean,
		paused: boolean,
		playing: boolean,
		time: number,
		url: string,
		volume: number,
		getDuration(): number,
		getTime(): number,
		getUrl(): string,
		getVolume(): number,
		isLooping(): boolean,
		isPaused(): boolean,
		isPlaying(): boolean,
		pause(): void,
		play(): void,
		release(): void,
		reset(): void,
		setLooping(looping: boolean): void,
		setPaused(paused: boolean): void,
		setTime(time: number): void,
		setUrl(url: string): void,
		setVolume(volume: number): void,
		stop(): void
	}

	declare export interface VideoPlayer {
		allowsAirPlay: boolean,
		autoplay: boolean,
		contentURL: string,
		currentPlaybackTime: number,
		duration: number,
		endPlaybackTime: number,
		fullscreen: boolean,
		initialPlaybackTime: number,
		loadState: number,
		media: any,
		mediaControlStyle: number,
		mediaTypes: number,
		movieControlMode: number,
		naturalSize: MovieSize,
		playableDuration: number,
		playbackState: number,
		playing: boolean,
		repeatMode: number,
		scalingMode: number,
		sourceType: number,
		url: any,
		useApplicationAudioSession: boolean,
		volume: number,
		cancelAllThumbnailImageRequests(): void,
		getAllowsAirPlay(): boolean,
		getAutoplay(): boolean,
		getContentURL(): string,
		getCurrentPlaybackTime(): number,
		getDuration(): number,
		getEndPlaybackTime(): number,
		getFullscreen(): boolean,
		getInitialPlaybackTime(): number,
		getLoadState(): number,
		getMediaControlStyle(): number,
		getMediaTypes(): number,
		getMovieControlMode(): number,
		getNaturalSize(): MovieSize,
		getPlayableDuration(): number,
		getPlaybackState(): number,
		getPlaying(): boolean,
		getRepeatMode(): number,
		getScalingMode(): number,
		getSourceType(): number,
		getUrl(): any,
		getUseApplicationAudioSession(): boolean,
		getVolume(): number,
		pause(): void,
		play(): void,
		release(): void,
		requestThumbnailImagesAtTimes(times: Array<Number>, option: number, callback: (...args: any[]) => any): void,
		setAllowsAirPlay(allowsAirPlay: boolean): void,
		setAutoplay(autoplay: boolean): void,
		setBackgroundView(view: Ti.UI.View): void,
		setContentURL(contentURL: string): void,
		setCurrentPlaybackTime(currentPlaybackTime: number): void,
		setDuration(duration: number): void,
		setEndPlaybackTime(endPlaybackTime: number): void,
		setFullscreen(fullscreen: boolean): void,
		setInitialPlaybackTime(initialPlaybackTime: number): void,
		setMedia(media: Ti.Blob): void,
		setMedia(media: Ti.Filesystem.File): void,
		setMedia(media: string): void,
		setMediaControlStyle(mediaControlStyle: number): void,
		setMediaTypes(mediaTypes: number): void,
		setMovieControlMode(movieControlMode: number): void,
		setNaturalSize(naturalSize: MovieSize): void,
		setRepeatMode(repeatMode: number): void,
		setScalingMode(scalingMode: number): void,
		setSourceType(sourceType: number): void,
		setUrl(url: string): void,
		setUrl(url: Array<String>): void,
		setUseApplicationAudioSession(useApplicationAudioSession: boolean): void,
		setVolume(volume: number): void,
		stop(): void,
		thumbnailImageAtTime(time: number, option: number): Ti.Blob
	}

	declare export interface AudioRecorder {
		compression: number,
		format: number,
		paused: boolean,
		recording: boolean,
		stopped: boolean,
		getCompression(): number,
		getFormat(): number,
		getPaused(): boolean,
		getRecording(): boolean,
		getStopped(): boolean,
		pause(): void,
		resume(): void,
		setCompression(compression: number): void,
		setFormat(format: number): void,
		start(): void,
		stop(): Ti.Filesystem.File
	}

	declare export interface Item {
		albumArtist: string,
		albumTitle: string,
		albumTrackCount: number,
		albumTrackNumber: number,
		artist: string,
		artwork: Ti.Blob,
		composer: string,
		discCount: number,
		discNumber: number,
		genre: string,
		isCompilation: boolean,
		lyrics: string,
		mediaType: number,
		playCount: number,
		playbackDuration: number,
		podcastTitle: string,
		rating: number,
		skipCount: number,
		title: string,
		getAlbumArtist(): string,
		getAlbumTitle(): string,
		getAlbumTrackCount(): number,
		getAlbumTrackNumber(): number,
		getArtist(): string,
		getArtwork(): Ti.Blob,
		getComposer(): string,
		getDiscCount(): number,
		getDiscNumber(): number,
		getGenre(): string,
		getIsCompilation(): boolean,
		getLyrics(): string,
		getMediaType(): number,
		getPlayCount(): number,
		getPlaybackDuration(): number,
		getPodcastTitle(): string,
		getRating(): number,
		getSkipCount(): number,
		getTitle(): string
	}

	declare export interface MusicPlayer {
		currentPlaybackTime: number,
		nowPlaying: Ti.Media.Item,
		playbackState: number,
		repeatMode: number,
		shuffleMode: number,
		volume: number,
		getCurrentPlaybackTime(): number,
		getNowPlaying(): Ti.Media.Item,
		getPlaybackState(): number,
		getRepeatMode(): number,
		getShuffleMode(): number,
		getVolume(): number,
		pause(): void,
		play(): void,
		seekBackward(): void,
		seekForward(): void,
		setCurrentPlaybackTime(currentPlaybackTime: number): void,
		setQueue(queue: Ti.Media.Item): void,
		setQueue(queue: Array<Ti.Media.Item>): void,
		setQueue(queue: PlayerQueue): void,
		setRepeatMode(repeatMode: number): void,
		setShuffleMode(shuffleMode: number): void,
		setVolume(volume: number): void,
		skipToBeginning(): void,
		skipToNext(): void,
		skipToPrevious(): void,
		stop(): void,
		stopSeeking(): void
	}

	declare export interface AudioPlayer {
		STATE_BUFFERING: number,
		STATE_INITIALIZED: number,
		STATE_PAUSED: number,
		STATE_PLAYING: number,
		STATE_STARTING: number,
		STATE_STOPPED: number,
		STATE_STOPPING: number,
		STATE_WAITING_FOR_DATA: number,
		STATE_WAITING_FOR_QUEUE: number,
		allowBackground: boolean,
		autoplay: boolean,
		bitRate: number,
		bufferSize: number,
		duration: number,
		idle: boolean,
		paused: boolean,
		playing: boolean,
		progress: number,
		state: number,
		time: number,
		url: string,
		volume: number,
		waiting: boolean,
		getAllowBackground(): boolean,
		getAutoplay(): boolean,
		getBitRate(): number,
		getBufferSize(): number,
		getDuration(): number,
		getIdle(): boolean,
		getPaused(): boolean,
		getPlaying(): boolean,
		getProgress(): number,
		getState(): number,
		getTime(): number,
		getUrl(): string,
		getVolume(): number,
		getWaiting(): boolean,
		isPaused(): boolean,
		isPlaying(): boolean,
		pause(): void,
		play(): void,
		release(): void,
		setBitRate(bitRate: number): void,
		setBufferSize(bufferSize: number): void,
		setPaused(paused: boolean): void,
		setTime(time: number): void,
		setUrl(url: string): void,
		setVolume(volume: number): void,
		start(): void,
		stateDescription(state: number): string,
		stop(): void
	}

	declare export interface Android {
		scanMediaFiles(
		paths: Array<String>, mimeTypes: Array<String>, callback: (...args: any[]) => any
	): void,
		setSystemWallpaper(image: Ti.Blob, scale: boolean): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function beep(): void

	declare export function createAudioPlayer(parameters?: Dictionary<Ti.Media.AudioPlayer>): Ti.Media.AudioPlayer

	declare export function createAudioRecorder(parameters?: Dictionary<Ti.Media.AudioRecorder>): Ti.Media.AudioRecorder

	declare export function createItem(parameters?: Dictionary<Ti.Media.Item>): Ti.Media.Item

	declare export function createMusicPlayer(parameters?: Dictionary<Ti.Media.MusicPlayer>): Ti.Media.MusicPlayer

	declare export function createSound(parameters?: Dictionary<Ti.Media.Sound>): Ti.Media.Sound

	declare export function createVideoPlayer(parameters?: Dictionary<Ti.Media.VideoPlayer>): Ti.Media.VideoPlayer

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getAppMusicPlayer(): Ti.Media.MusicPlayer

	declare export function getAudioLineType(): number

	declare export function getAudioPlaying(): boolean

	declare export function getAudioSessionCategory(): number

	declare export function getAudioSessionMode(): number

	declare export function getAvailableCameraMediaTypes(): Array<Object>

	declare export function getAvailableCameras(): Array<Number>

	declare export function getAvailablePhotoGalleryMediaTypes(): Array<Object>

	declare export function getAvailablePhotoMediaTypes(): Array<Object>

	declare export function getAverageMicrophonePower(): number

	declare export function getBubbleParent(): boolean

	declare export function getCameraFlashMode(): number

	declare export function getCanRecord(): boolean

	declare export function getCurrentRoute(): RouteDescription

	declare export function getIsCameraSupported(): boolean

	declare export function getPeakMicrophonePower(): number

	declare export function getSystemMusicPlayer(): Ti.Media.MusicPlayer

	declare export function getVolume(): number

	declare export function hideCamera(): void

	declare export function hideMusicLibrary(): void

	declare export function isMediaTypeSupported(source: string, type: string): boolean

	declare export function openMusicLibrary(options: MusicLibraryOptionsType): void

	declare export function openPhotoGallery(options: PhotoGalleryOptionsType): void

	declare export function previewImage(options: Dictionary<PreviewImageOptions>): void

	declare export function queryMusicLibrary(query: MediaQueryType): Array<Ti.Media.Item>

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function requestAuthorization(callback: (...args: any[]) => any): void

	declare export function saveToPhotoGallery(media: Ti.Blob, callbacks: any): void

	declare export function saveToPhotoGallery(media: Ti.Filesystem.File, callbacks: any): void

	declare export function setAudioSessionCategory(audioSessionCategory: number): void

	declare export function setAudioSessionMode(audioSessionMode: number): void

	declare export function setAvailableCameraMediaTypes(availableCameraMediaTypes: Array<Object>): void

	declare export function setAvailablePhotoGalleryMediaTypes(availablePhotoGalleryMediaTypes: Array<Object>): void

	declare export function setAvailablePhotoMediaTypes(availablePhotoMediaTypes: Array<Object>): void

	declare export function setAverageMicrophonePower(averageMicrophonePower: number): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setCameraFlashMode(cameraFlashMode: number): void

	declare export function setOverrideAudioRoute(route: number): void

	declare export function showCamera(options: CameraOptionsType): void

	declare export function startMicrophoneMonitor(): void

	declare export function stopMicrophoneMonitor(): void

	declare export function switchCamera(camera: number): void

	declare export function takePicture(): void

	declare export function takeScreenshot(callback: (...args: any[]) => any): void

	declare export function vibrate(pattern?: Array<Number>): void

		
}

declare module 'Platform' {
		declare export interface DisplayCaps {
		density: string,
		dpi: number,
		logicalDensityFactor: number,
		platformHeight: number,
		platformWidth: number,
		xdpi: number,
		ydpi: number,
		getDensity(): string,
		getDpi(): number,
		getLogicalDensityFactor(): number,
		getPlatformHeight(): number,
		getPlatformWidth(): number,
		getXdpi(): number,
		getYdpi(): number
	}

	declare export interface Android {
		API_LEVEL: number,
		PHYSICAL_SIZE_CATEGORY_LARGE: number,
		PHYSICAL_SIZE_CATEGORY_NORMAL: number,
		PHYSICAL_SIZE_CATEGORY_SMALL: number,
		PHYSICAL_SIZE_CATEGORY_UNDEFINED: number,
		PHYSICAL_SIZE_CATEGORY_XLARGE: number,
		physicalSizeCategory: number,
		getPhysicalSizeCategory(): number
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function canOpenURL(url: string): boolean

	declare export function createUUID(): string

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getAddress(): string

	declare export function getApiName(): string

	declare export function getArchitecture(): string

	declare export function getAvailableMemory(): number

	declare export function getBatteryLevel(): number

	declare export function getBatteryMonitoring(): boolean

	declare export function getBatteryState(): number

	declare export function getBubbleParent(): boolean

	declare export function getDisplayCaps(): Ti.Platform.DisplayCaps

	declare export function getId(): string

	declare export function getLocale(): string

	declare export function getMacaddress(): string

	declare export function getManufacturer(): string

	declare export function getModel(): string

	declare export function getName(): string

	declare export function getNetmask(): string

	declare export function getOsname(): string

	declare export function getOstype(): string

	declare export function getProcessorCount(): number

	declare export function getRuntime(): string

	declare export function getUsername(): string

	declare export function getVersion(): string

	declare export function is24HourTimeFormat(): boolean

	declare export function openURL(url: string): boolean

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBatteryMonitoring(batteryMonitoring: boolean): void

	declare export function setBubbleParent(bubbleParent: boolean): void

		
}

declare module 'Filesystem' {
		declare export interface File {
		executable: boolean,
		hidden: boolean,
		name: string,
		nativePath: string,
		parent: Ti.Filesystem.File,
		readonly: boolean,
		remoteBackup: boolean,
		size: number,
		symbolicLink: boolean,
		writable: boolean,
		writeable: boolean,
		append(data: string): boolean,
		append(data: Ti.Blob): boolean,
		append(data: Ti.Filesystem.File): boolean,
		copy(destinationPath: string): boolean,
		createDirectory(): boolean,
		createFile(): boolean,
		createTimestamp(): number,
		deleteDirectory(recursive?: boolean): boolean,
		deleteFile(): boolean,
		exists(): boolean,
		extension(): string,
		getDirectoryListing(): Array<String>,
		getExecutable(): boolean,
		getHidden(): boolean,
		getName(): string,
		getNativePath(): string,
		getParent(): any,
		getReadonly(): boolean,
		getRemoteBackup(): boolean,
		getSize(): number,
		getSymbolicLink(): boolean,
		getWritable(): boolean,
		getWriteable(): boolean,
		isDirectory(): boolean,
		isFile(): boolean,
		modificationTimestamp(): number,
		move(newpath: string): boolean,
		open(mode: number): Ti.Filesystem.FileStream,
		read(): Ti.Blob,
		rename(newname: string): boolean,
		resolve(): string,
		setHidden(hidden: boolean): void,
		setRemoteBackup(remoteBackup: boolean): void,
		spaceAvailable(): number,
		write(data: string, append?: boolean): boolean,
		write(data: Ti.Filesystem.File, append?: boolean): boolean,
		write(data: Ti.Blob, append?: boolean): boolean
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createTempDirectory(): Ti.Filesystem.File

	declare export function createTempFile(): Ti.Filesystem.File

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getApplicationCacheDirectory(): string

	declare export function getApplicationDataDirectory(): string

	declare export function getApplicationDirectory(): string

	declare export function getApplicationSupportDirectory(): string

	declare export function getBubbleParent(): boolean

	declare export function getExternalStorageDirectory(): string

	declare export function getFile(path: string, ...extraPaths: string[]): Ti.Filesystem.File

	declare export function getLineEnding(): string

	declare export function getResRawDirectory(): string

	declare export function getResourcesDirectory(): string

	declare export function getSeparator(): string

	declare export function getTempDirectory(): string

	declare export function isExternalStoragePresent(): boolean

	declare export function openStream(mode: number, path: string, ...extraPaths: string[]): Ti.Filesystem.FileStream

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

		
}

declare module 'Network' {
		declare export interface TCPSocket {
		hostName: string,
		isValid: boolean,
		mode: number,
		port: number,
		stripTerminator: boolean,
		close(): void,
		connect(): void,
		getHostName(): string,
		getIsValid(): boolean,
		getMode(): number,
		getPort(): number,
		getStripTerminator(): boolean,
		listen(): void,
		setHostName(hostName: string): void,
		setIsValid(isValid: boolean): void,
		setMode(mode: number): void,
		setPort(port: number): void,
		setStripTerminator(stripTerminator: boolean): void,
		write(data: any, sendTo: number): void,
		write(data: string, sendTo: number): void
	}

	declare export interface BonjourService {
		domain: string,
		isLocal: boolean,
		name: string,
		socket: any,
		type: string,
		getDomain(): string,
		getIsLocal(): boolean,
		getName(): string,
		getSocket(): any,
		getType(): string,
		publish(socket: any): void,
		resolve(timeout: number): void,
		setDomain(domain: string): void,
		setIsLocal(isLocal: boolean): void,
		setName(name: string): void,
		setSocket(socket: any): void,
		setType(type: string): void,
		stop(): void
	}

	declare export interface HTTPClient {
		DONE: number,
		HEADERS_RECEIVED: number,
		LOADING: number,
		OPENED: number,
		UNSENT: number,
		allResponseHeaders: string,
		autoEncodeUrl: boolean,
		autoRedirect: boolean,
		cache: boolean,
		connected: boolean,
		connectionType: string,
		domain: string,
		enableKeepAlive: boolean,
		file: string,
		location: string,
		ondatastream: (...args: any[]) => any,
		onerror: (...args: any[]) => any,
		onload: (...args: any[]) => any,
		onreadystatechange: (...args: any[]) => any,
		onsendstream: (...args: any[]) => any,
		password: string,
		readyState: number,
		responseData: Ti.Blob,
		responseText: string,
		responseXML: Ti.XML.Document,
		securityManager: SecurityManagerProtocol,
		status: number,
		statusText: string,
		timeout: number,
		tlsVersion: number,
		username: string,
		validatesSecureCertificate: boolean,
		withCredentials: boolean,
		abort(): void,
		addAuthFactory(scheme: string, factory: any): void,
		addKeyManager(X509KeyManager: any): void,
		addTrustManager(X509TrustManager: any): void,
		clearCookies(host: string): void,
		getAllResponseHeaders(): string,
		getAutoEncodeUrl(): boolean,
		getAutoRedirect(): boolean,
		getCache(): boolean,
		getConnected(): boolean,
		getConnectionType(): string,
		getDomain(): string,
		getEnableKeepAlive(): boolean,
		getFile(): string,
		getLocation(): string,
		getOndatastream(): (...args: any[]) => any,
		getOnerror(): (...args: any[]) => any,
		getOnload(): (...args: any[]) => any,
		getOnreadystatechange(): (...args: any[]) => any,
		getOnsendstream(): (...args: any[]) => any,
		getPassword(): string,
		getReadyState(): number,
		getResponseData(): Ti.Blob,
		getResponseHeader(name: string): string,
		getResponseText(): string,
		getResponseXML(): Ti.XML.Document,
		getSecurityManager(): SecurityManagerProtocol,
		getStatus(): number,
		getStatusText(): string,
		getTimeout(): number,
		getTlsVersion(): number,
		getUsername(): string,
		getValidatesSecureCertificate(): boolean,
		getWithCredentials(): boolean,
		open(method: string, url: string, async?: boolean): void,
		send(data?: any): void,
		send(data?: string): void,
		send(data?: Ti.Filesystem.File): void,
		send(data?: Ti.Blob): void,
		setAutoEncodeUrl(autoEncodeUrl: boolean): void,
		setAutoRedirect(autoRedirect: boolean): void,
		setCache(cache: boolean): void,
		setDomain(domain: string): void,
		setEnableKeepAlive(enableKeepAlive: boolean): void,
		setFile(file: string): void,
		setOndatastream(ondatastream: (...args: any[]) => any): void,
		setOnerror(onerror: (...args: any[]) => any): void,
		setOnload(onload: (...args: any[]) => any): void,
		setOnreadystatechange(onreadystatechange: (...args: any[]) => any): void,
		setOnsendstream(onsendstream: (...args: any[]) => any): void,
		setPassword(password: string): void,
		setRequestHeader(name: string, value: string): void,
		setTimeout(timeout: number): void,
		setTlsVersion(tlsVersion: number): void,
		setUsername(username: string): void,
		setValidatesSecureCertificate(validatesSecureCertificate: boolean): void,
		setWithCredentials(withCredentials: boolean): void
	}

	declare export interface BonjourBrowser {
		domain: string,
		isSearching: boolean,
		serviceType: string,
		getDomain(): string,
		getIsSearching(): boolean,
		getServiceType(): string,
		search(): void,
		setDomain(domain: string): void,
		setIsSearching(isSearching: boolean): void,
		setServiceType(serviceType: string): void,
		stopSearch(): void
	}

	declare export interface Cookie {
		comment: string,
		domain: string,
		expiryDate: string,
		httponly: boolean,
		name: string,
		originalUrl: string,
		path: string,
		secure: boolean,
		value: string,
		version: number,
		getComment(): string,
		getDomain(): string,
		getExpiryDate(): string,
		getHttponly(): boolean,
		getName(): string,
		getOriginalUrl(): string,
		getPath(): string,
		getSecure(): boolean,
		getValue(): string,
		getVersion(): number,
		isValid(): boolean,
		setComment(comment: string): void,
		setDomain(domain: string): void,
		setExpiryDate(expiryDate: string): void,
		setHttponly(httponly: boolean): void,
		setOriginalUrl(originalUrl: string): void,
		setPath(path: string): void,
		setSecure(secure: boolean): void,
		setValue(value: string): void,
		setVersion(version: number): void
	}

	declare export function addConnectivityListener(callback: (...args: any[]) => any): void

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function addHTTPCookie(cookie: Ti.Network.Cookie): void

	declare export function addSystemCookie(cookie: Ti.Network.Cookie): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createBonjourBrowser(
		serviceType: string, domain: string, parameters?: Dictionary<Ti.Network.BonjourBrowser>
	): Ti.Network.BonjourBrowser

	declare export function createBonjourService(
		name: string, type: string, domain: string, parameters?: Dictionary<Ti.Network.BonjourService>
	): Ti.Network.BonjourService

	declare export function createCookie(parameters?: Dictionary<Ti.Network.Cookie>): Ti.Network.Cookie

	declare export function createHTTPClient(parameters?: Dictionary<Ti.Network.HTTPClient>): Ti.Network.HTTPClient

	declare export function createTCPSocket(
		hostName: string, port: number, mode: number, parameters: Dictionary<Ti.Network.TCPSocket>
	): Ti.Network.TCPSocket

	declare export function decodeURIComponent(value: string): string

	declare export function encodeURIComponent(value: string): string

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getAllHTTPCookies(): Array<Ti.Network.Cookie>

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function getHTTPCookies(domain: string, path: string, name: string): Array<Ti.Network.Cookie>

	declare export function getHTTPCookiesForDomain(domain: string): Array<Ti.Network.Cookie>

	declare export function getHttpURLFormatter(): (...args: any[]) => any

	declare export function getNetworkType(): number

	declare export function getNetworkTypeName(): string

	declare export function getOnline(): boolean

	declare export function getRemoteDeviceUUID(): string

	declare export function getRemoteNotificationTypes(): Array<Number>

	declare export function getRemoteNotificationsEnabled(): boolean

	declare export function getSystemCookies(domain: string, path: string, name: string): Array<Ti.Network.Cookie>

	declare export function registerForPushNotifications(config: PushNotificationConfig): void

	declare export function removeAllHTTPCookies(): void

	declare export function removeAllSystemCookies(): void

	declare export function removeConnectivityListener(callback: (...args: any[]) => any): void

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function removeHTTPCookie(domain: string, path: string, name: string): void

	declare export function removeHTTPCookiesForDomain(domain: string): void

	declare export function removeSystemCookie(domain: string, path: string, name: string): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setHttpURLFormatter(httpURLFormatter: (...args: any[]) => any): void

	declare export function unregisterForPushNotifications(): void

		
}

declare module 'Socket' {
		declare export interface UDP {
		data: (...args: any[]) => any,
		error: (...args: any[]) => any,
		port: number,
		started: (...args: any[]) => any,
		getData(): (...args: any[]) => any,
		getError(): (...args: any[]) => any,
		getPort(): number,
		getStarted(): (...args: any[]) => any,
		sendBytes(port: number, host: string, data: Array<Number>): void,
		sendString(port: number, host: string, data: string): void,
		setData(data: (...args: any[]) => any): void,
		setError(error: (...args: any[]) => any): void,
		setPort(port: number): void,
		setStarted(started: (...args: any[]) => any): void,
		start(port: number): void,
		stop(): void
	}

	declare export interface TCP {
		accepted: (...args: any[]) => any,
		connected: (...args: any[]) => any,
		error: (...args: any[]) => any,
		host: string,
		listenQueueSize: number,
		port: number,
		state: number,
		timeout: number,
		accept(options: AcceptDict): void,
		connect(): void,
		getAccepted(): (...args: any[]) => any,
		getConnected(): (...args: any[]) => any,
		getError(): (...args: any[]) => any,
		getHost(): string,
		getListenQueueSize(): number,
		getPort(): number,
		getState(): number,
		getTimeout(): number,
		listen(): void,
		setAccepted(accepted: (...args: any[]) => any): void,
		setConnected(connected: (...args: any[]) => any): void,
		setError(error: (...args: any[]) => any): void,
		setHost(host: string): void,
		setListenQueueSize(listenQueueSize: number): void,
		setPort(port: number): void,
		setTimeout(timeout: number): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function createTCP(params?: Dictionary<Ti.Network.Socket.TCP>): Ti.Network.Socket.TCP

	declare export function createUDP(params?: Dictionary<Ti.Network.Socket.UDP>): Ti.Network.Socket.UDP

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getApiName(): string

	declare export function getBubbleParent(): boolean

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function setBubbleParent(bubbleParent: boolean): void

		
}

declare module 'Facebook' {
		declare export interface LoginButton {
		style: string,
		getStyle(): string,
		setStyle(style: string): void
	}

	declare export function addEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function applyProperties(props: Dictionary<Object>): void

	declare export function authorize(): void

	declare export function createLoginButton(parameters?: Dictionary<Ti.Facebook.LoginButton>): Ti.Facebook.LoginButton

	declare export function dialog(action: string, params: any, callback: (...args: any[]) => any): void

	declare export function fireEvent(name: string, event: Dictionary<Object>): void

	declare export function getAccessToken(): string

	declare export function getApiName(): string

	declare export function getAppid(): string

	declare export function getBubbleParent(): boolean

	declare export function getExpirationDate(): Date

	declare export function getForceDialogAuth(): boolean

	declare export function getLoggedIn(): boolean

	declare export function getPermissions(): Array<String>

	declare export function getUid(): string

	declare export function logout(): void

	declare export function removeEventListener(name: string, callback: (...args: any[]) => any): void

	declare export function request(method: string, params: any, callback: (...args: any[]) => any): void

	declare export function requestWithGraphPath(
		path: string, params: Dictionary<Object>, httpMethod: string, callback: (...args: any[]) => any
	): void

	declare export function setAccessToken(accessToken: string): void

	declare export function setAppid(appid: string): void

	declare export function setBubbleParent(bubbleParent: boolean): void

	declare export function setExpirationDate(expirationDate: Date): void

	declare export function setForceDialogAuth(forceDialogAuth: boolean): void

	declare export function setLoggedIn(loggedIn: boolean): void

	declare export function setPermissions(permissions: Array<String>): void

	declare export function setUid(uid: string): void

		
}

declare module 'npm$namespace$Global' {
		declare export interface console {
		debug(message: any): void,
		error(message: any): void,
		info(message: any): void,
		log(message: any): void,
		warn(message: any): void
	}

	declare export interface String {
		format(formatString: string, value: string): string,
		format(formatString: string, value: number): string,
		formatCurrency(value: number): string,
		formatDate(date: Date, format?: string): string,
		formatDecimal(value: number, locale?: string, pattern?: string): string,
		formatTime(date: Date, format?: string): string
	}

	declare export interface JSON {
		parse(text: string, reviver: (...args: any[]) => any): any,
		stringify(value: any, replacer?: (...args: any[]) => any, space?: number): string,
		stringify(value: any, replacer?: Array<String>, space?: string): string,
		stringify(value: any, replacer?: Array<String>, space?: number): string,
		stringify(value: any, replacer?: (...args: any[]) => any, space?: string): string
	}

	declare export function L(key: string, hint?: string): string

	declare export function alert(message: string): void

	declare export function clearInterval(timerId: number): void

	declare export function clearTimeout(timerId: number): void

	declare export function decodeURIComponent(encodedURI: string): string

	declare export function encodeURIComponent(string: string): string

	declare export function require(moduleId: string): any

	declare export function setInterval(_function: (...args: any[]) => any, delay: number): number

	declare export function setTimeout(_function: (...args: any[]) => any, delay: number): number

		
}
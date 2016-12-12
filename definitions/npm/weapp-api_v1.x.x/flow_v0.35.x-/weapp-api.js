

declare module 'weapp-api' {
		declare interface Page {
		setData(data: any): void
	}

	declare interface PageConstructor {
		(options: wx.PageOptions): void
	}

	declare interface App {
		getCurrentPage(): Page
	}

	declare interface AppConstructor {
		(options: wx.AppOptions): void
	}

	declare function getApp(): App

		
}

declare module 'npm$namespace$wx' {
	declare type NoneParamCallback = () => void;

	declare type OneParamCallback = (data: any) => void;

	declare type ResponseCallback = (res: any) => void;

	declare type DataResponseCallback = (res: DataResponse) => void;

	declare type TempFileResponseCallback = (res: TempFileResponse) => void;

	declare type ErrorCallback = (error: any) => void;

	declare type EventCallback = (event: any) => void;

	declare type ImageSizeType = "original" | "compressed";

	declare type ImageSourceType = "album" | "camera";

	declare type VideoSourceType = "album" | "camera";

	declare type CameraDevice = "front" | "back";

	declare type GetBackgroundAudioPlayerStateSuccessCallback = (state: BackgroundAudioPlayerState) => void;

	declare type AccelerometerChangeCallback = (res: AccelerometerData) => void;

	declare type CompassChangeCallback = (res: CompassData) => void;

	declare type TimingFunction = "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | "step-start" | "step-end";

	declare type LineCapType = "butt" | "round" | "square";

	declare type LineJoinType = "bevel" | "round" | "miter";

	declare type PaymentSignType = "MD5";

	declare interface DataResponse {
		data: any
	}

	declare interface TempFileResponse {
		tempFilePath: string
	}

	declare interface PageOptions {
		data?: any,
		onLoad?: (options: any) => void,
		onReady?: NoneParamCallback,
		onShow?: NoneParamCallback,
		onHide?: NoneParamCallback,
		onUnload?: NoneParamCallback,
		[key: string]: any
	}

	declare interface AppOptions {
		onLaunch?: NoneParamCallback,
		onShow?: NoneParamCallback,
		onHide?: NoneParamCallback,
		[key: string]: any
	}

	declare interface RequestHeader {
		[key: string]: string
	}

	declare interface RequestOptions {
		url: string,
		data?: string | any,
		header?: RequestHeader,
		method?: string,
		success?: DataResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface UploadFileOptions {
		url: string,
		filePath: string,
		name: string,
		header?: RequestHeader,
		formData?: any,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface DownloadFileOptions {
		url: string,
		type?: string,
		header?: RequestHeader,
		success?: TempFileResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface ConnectSocketOptions {
		url: string,
		data?: any,
		header?: RequestHeader,
		method?: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface SendSocketMessageOptions {
		data: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface TempFilesData {
		tempFilePaths: string
	}

	declare interface ChooseImageOptions {
		count?: number,
		sizeType?: Array<ImageSizeType>,
		sourceType?: Array<ImageSourceType>,
		success: (res: TempFilesData) => void,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface PreviewImageOptions {
		current?: string,
		urls: Array<string>,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface StartRecordOptions {
		success?: TempFileResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface PlayVoiceOptions {
		filePath: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface BackgroundAudioPlayerState {
		duration?: number,
		currentPosition?: number,
		status: number,
		downloadPercent?: number,
		dataUrl?: string
	}

	declare interface GetBackgroundAudioPlayerStateOptions {
		success?: GetBackgroundAudioPlayerStateSuccessCallback,
		fail?: NoneParamCallback,
		complete?: NoneParamCallback
	}

	declare interface PlayBackgroundAudioOptions {
		dataUrl: string,
		title?: string,
		coverImgUrl?: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface SeekBackgroundAudioOptions {
		position: number,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface SavedFileData {
		savedFilePath: string
	}

	declare interface SaveFileOptions {
		tempFilePath: string,
		success?: (res: SavedFileData) => void,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface VideoData {
		tempFilePath: string,
		duration: number,
		size: number,
		height: number,
		width: number
	}

	declare interface ChooseVideoOptions {
		sourceType?: Array<VideoSourceType>,
		maxDuration?: number,
		camera?: Array<CameraDevice>,
		success?: (res: VideoData) => void,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface SetStorageOptions {
		key: string,
		data: any | string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface GetStorageOptions {
		key: string,
		success: DataResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface LocationData {
		latitude: number,
		longitude: number,
		speed: number,
		accuracy: number
	}

	declare interface GetLocationOptions {
		type?: "wgs84" | "gcj02",
		success: (res: LocationData) => void,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface OpenLocationOptions {
		latitude: number,
		longitude: number,
		scale?: number,
		name?: string,
		address?: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface NetworkTypeData {
		networkType: "2g" | "3g" | "4g" | "wifi"
	}

	declare interface GetNetworkTypeOptions {
		success: (res: NetworkTypeData) => void,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface SystemInfo {
		model: string,
		pixelRatio: number,
		windowWidth: number,
		windowHeight: number,
		language: string,
		version: string
	}

	declare interface GetSystemInfoOptions {
		success: (res: SystemInfo) => void,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface AccelerometerData {
		x: number,
		y: number,
		z: number
	}

	declare interface CompassData {
		direction: number
	}

	declare interface SetNavigationBarTitleOptions {
		title?: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface NavigateToOptions {
		url: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface RedirectToOptions {
		url: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface CreateAnimationOptions {
		duration?: number,
		timingFunction?: TimingFunction,
		delay?: number,
		transformOrigin?: string
	}

	declare interface Animator {
		actions: Array<AnimationAction>
	}

	declare interface AnimationAction {
		animates: Array<Animate>,
		option: AnimationActionOption
	}

	declare interface AnimationActionOption {
		transformOrigin: string,
		transition: AnimationTransition
	}

	declare interface AnimationTransition {
		delay: number,
		duration: number,
		timingFunction: TimingFunction
	}

	declare interface Animate {
		type: string,
		args: Array<any>
	}

	declare interface Animation {
		step(options?: CreateAnimationOptions): void,
		export(): Animator,
		opacity(value: number): Animation,
		backgroundColor(color: string): Animation,
		width(length: number): Animation,
		height(length: number): Animation,
		top(length: number): Animation,
		left(length: number): Animation,
		bottom(length: number): Animation,
		right(length: number): Animation,
		rotate(deg: number): Animation,
		rotateX(deg: number): Animation,
		rotateY(deg: number): Animation,
		rotateZ(deg: number): Animation,
		rotate3d(x: number, y: number, z: number, deg: number): Animation,
		scale(sx: number, sy?: number): Animation,
		scaleX(sx: number): Animation,
		scaleY(sy: number): Animation,
		scaleZ(sz: number): Animation,
		scale3d(sx: number, sy: number, sz: number): Animation,
		translate(tx: number, ty?: number): Animation,
		translateX(tx: number): Animation,
		translateY(ty: number): Animation,
		translateZ(tz: number): Animation,
		translate3d(tx: number, ty: number, tz: number): Animation,
		skew(ax: number, ay?: number): Animation,
		skewX(ax: number): Animation,
		skewY(ay: number): Animation,
		matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Animation,
		matrix3d(
		a1: number, b1: number, c1: number, d1: number, a2: number, b2: number, c2: number, d2: number, a3: number, b3: number, c3: number, d3: number, a4: number, b4: number, c4: number, d4: number
	): Animation
	}

	declare interface CanvasAction {
		method: string,
		data: Array<CanvasAction> | Array<number | string>
	}

	declare interface CanvasContext {
		getActions(): Array<CanvasAction>,
		clearActions(): void,
		scale(scaleWidth: number, scaleHeight?: number): void,
		rotate(rotate: number): void,
		translate(x: number, y: number): void,
		save(): void,
		restore(): void,
		clearRect(x: number, y: number, width: number, height: number): void,
		fillText(text: string, x: number, y: number): void,
		drawImage(imageResource: string, x: number, y: number): void,
		fill(): void,
		stroke(): void,
		beginPath(): void,
		closePath(): void,
		moveTo(x: number, y: number): void,
		lineTo(x: number, y: number): void,
		rect(x: number, y: number, width: number, height: number): void,
		arc(
		x: number, y: number, radius: number, startAngle: number, endAngle: number, sweepAngle: boolean
	): void,
		quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void,
		bezierCurveTo(
		cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number
	): void,
		setFillStyle(color: string): void,
		setStrokeStyle(color: string): void,
		setShadow(offsetX: number, offsetY: number, blur: number, color: string): void,
		setFontSize(fontSize: number): void,
		setLineCap(lineCap: LineCapType): void,
		setLineJoin(lineJoin: LineJoinType): void,
		setLineWidth(lineWidth: number): void,
		setMiterLimit(miterLimit: number): void
	}

	declare interface DrawCanvasOptions {
		canvasId: number | string,
		actions: Array<CanvasAction>
	}

	declare interface LoginResponse {
		errMsg: string,
		code: string
	}

	declare interface LoginOptions {
		success?: (res: LoginResponse) => void,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface UserInfo {
		nickName: string,
		avatarUrl: string,
		gender: number,
		province: string,
		city: string,
		country: string
	}

	declare interface UserInfoResponse {
		userInfo: UserInfo,
		rawData: string,
		signature: string,
		encryptData: string
	}

	declare interface GetUserInfoOptions {
		success?: (res: UserInfoResponse) => void,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare interface RequestPaymentOptions {
		timeStamp: string | number,
		nonceStr: string,
		package: string,
		signType: PaymentSignType,
		paySign: string,
		success?: ResponseCallback,
		fail?: ResponseCallback,
		complete?: ResponseCallback
	}

	declare function request(options: RequestOptions): void

	declare function uploadFile(options: UploadFileOptions): void

	declare function downloadFile(options: DownloadFileOptions): void

	declare function connectSocket(options: ConnectSocketOptions): void

	declare function onSocketOpen(callback: OneParamCallback): void

	declare function onSocketError(callback: ErrorCallback): void

	declare function sendSocketMessage(options: SendSocketMessageOptions): void

	declare function onSocketMessage(callback: DataResponseCallback): void

	declare function closeSocket(): void

	declare function onSocketClose(callback: ResponseCallback): void

	declare function chooseImage(options: ChooseImageOptions): void

	declare function previewImage(options: PreviewImageOptions): void

	declare function startRecord(options: StartRecordOptions): void

	declare function stopRecord(): void

	declare function playVoice(options: PlayVoiceOptions): void

	declare function pauseVoice(): void

	declare function stopVoice(): void

	declare function getBackgroundAudioPlayerState(options: GetBackgroundAudioPlayerStateOptions): void

	declare function playBackgroundAudio(options: PlayBackgroundAudioOptions): void

	declare function pauseBackgroundAudio(): void

	declare function seekBackgroundAudio(options: SeekBackgroundAudioOptions): void

	declare function stopBackgroundAudio(): void

	declare function onBackgroundAudioPlay(callback: NoneParamCallback): void

	declare function onBackgroundAudioPause(callback: NoneParamCallback): void

	declare function onBackgroundAudioStop(callback: NoneParamCallback): void

	declare function saveFile(options: SaveFileOptions): void

	declare function chooseVideo(options: ChooseVideoOptions): void

	declare function setStorage(options: SetStorageOptions): void

	declare function setStorageSync(key: string, data: any | string): void

	declare function getStorage(options: GetStorageOptions): void

	declare function getStorageSync(key: string): any | string

	declare function clearStorage(): void

	declare function clearStorageSync(): void

	declare function getLocation(options: GetLocationOptions): void

	declare function openLocation(options: OpenLocationOptions): void

	declare function getNetworkType(options: GetNetworkTypeOptions): void

	declare function getSystemInfo(options: GetSystemInfoOptions): void

	declare function onAccelerometerChange(callback: AccelerometerChangeCallback): void

	declare function onCompassChange(callback: CompassChangeCallback): void

	declare function setNavigationBarTitle(options: SetNavigationBarTitleOptions): void

	declare function showNavigationBarLoading(): void

	declare function hideNavigationBarLoading(): void

	declare function navigateTo(options: NavigateToOptions): void

	declare function redirectTo(options: RedirectToOptions): void

	declare function navigateBack(): void

	declare function createAnimation(options?: CreateAnimationOptions): Animation

	declare function createContext(): CanvasContext

	declare function drawCanvas(options: DrawCanvasOptions): void

	declare function hideKeyboard(): void

	declare function login(option: LoginOptions): void

	declare function getUserInfo(options: GetUserInfoOptions): void

	declare function requestPayment(options: RequestPaymentOptions): void

		
}
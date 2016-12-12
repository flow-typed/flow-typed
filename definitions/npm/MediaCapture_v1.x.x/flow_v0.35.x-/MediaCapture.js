

declare module 'MediaCapture' {
		declare interface Navigator {
		device: Device
	}

	declare interface Device {
		capture: Capture
	}

	declare interface Capture {
		captureAudio(
		onSuccess: (mediaFiles: MediaFile[]) => void, onError: (error: CaptureError) => void, options?: AudioOptions
	): void,
		captureImage(
		onSuccess: (mediaFiles: MediaFile[]) => void, onError: (error: CaptureError) => void, options?: ImageOptions
	): void,
		captureVideo(
		onSuccess: (mediaFiles: MediaFile[]) => void, onError: (error: CaptureError) => void, options?: VideoOptions
	): void,
		supportedAudioModes: ConfigurationData[],
		supportedImageModes: ConfigurationData[],
		supportedVideoModes: ConfigurationData[]
	}

	declare interface MediaFile {
		name: string,
		fullPath: string,
		type: string,
		lastModifiedDate: Date,
		size: number,
		getFormatData(
		successCallback: (data: MediaFileData) => void, errorCallback?: () => void
	): void
	}

	declare interface MediaFileData {
		codecs: string,
		bitrate: number,
		height: number,
		width: number,
		duration: number
	}

	declare interface CaptureError {
		code: number,
		message: string
	}

	declare interface AudioOptions {
		limit?: number,
		duration?: number
	}

	declare interface ImageOptions {
		limit?: number
	}

	declare interface VideoOptions {
		limit?: number,
		duration?: number
	}

	declare interface ConfigurationData {
		type: string,
		height: number,
		width: number
	}

			
}
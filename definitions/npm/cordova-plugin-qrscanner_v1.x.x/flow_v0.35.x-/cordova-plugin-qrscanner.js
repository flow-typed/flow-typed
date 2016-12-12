

declare module 'cordova-plugin-qrscanner' {
		declare interface Window {
		QRScanner: QRScanner
	}

	declare interface QRScanner {
		prepare: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void,
		scan: (callback: (error: QRScannerError, result: String) => any) => void,
		cancelScan: (callback?: (status: QRScannerStatus) => any) => void,
		show: (callback?: (status: QRScannerStatus) => any) => void,
		hide: (callback?: (status: QRScannerStatus) => any) => void,
		enableLight: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void,
		disableLight: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void,
		useCamera: (
		index: Number, callback?: (error: QRScannerError, status: QRScannerStatus) => any
	) => void,
		useFrontCamera: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void,
		useBackCamera: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void,
		pausePreview: (callback?: (status: QRScannerStatus) => any) => void,
		resumePreview: (callback?: (status: QRScannerStatus) => any) => void,
		openSettings: (callback?: (error: QRScannerError, status: QRScannerStatus) => any) => void,
		getStatus: (callback: (status: QRScannerStatus) => any) => void,
		destroy: (callback?: (status: QRScannerStatus) => any) => void
	}

	declare interface QRScannerStatus {
		authorized: Boolean,
		denied: Boolean,
		restricted: Boolean,
		prepared: Boolean,
		scanning: Boolean,
		previewing: Boolean,
		webviewBackgroundIsTransparent: Boolean,
		lightEnabled: Boolean,
		canOpenSettings: Boolean,
		canEnableLight: Boolean,
		currentCamera: Number
	}

	declare interface QRScannerError {
		name: String,
		code: Number,
		_message: String
	}

			
}
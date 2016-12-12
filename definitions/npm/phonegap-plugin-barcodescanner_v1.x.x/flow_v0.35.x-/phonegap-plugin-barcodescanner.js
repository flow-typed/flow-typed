

declare module 'phonegap-plugin-barcodescanner' {
		declare interface CordovaPlugins {
		barcodeScanner: phonegapBarcode.BarcodeScanner
	}

			
}

declare module 'npm$namespace$phonegapBarcode' {
		declare interface BarcodeScanResult {
		text: string,
		format: string,
		cancelled: boolean
	}

	declare interface BarcodeScanOptions {
		preferFrontCamera?: boolean,
		showFlipCameraButton?: boolean,
		prompt?: string,
		formats?: string,
		orientation?: "landscape" | "portrait"
	}

	declare interface EncodingType {
		TEXT_TYPE: any,
		EMAIL_TYPE: any,
		PHONE_TYPE: any,
		SMS_TYPE: any
	}

	declare interface BarcodeScanner {
		scan: (
		success: ((result: BarcodeScanResult) => any), failure?: ((err: any) => any), opts?: BarcodeScanOptions
	) => void,
		encode: (
		encodingType: EncodingType, data: string, success: ((result: any) => any), failure?: ((err: any) => any)
	) => void,
		Encode: EncodingType
	}

			
}
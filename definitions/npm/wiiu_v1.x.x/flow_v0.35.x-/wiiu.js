

declare module 'wiiu' {
		declare interface HTMLElement {
		addEventListener(
		type: "wiiu_videoplayer_end", listener: (ev: CustomEvent) => any, useCapture?: boolean
	): void
	}

	declare interface Window {
		wiiu: typeof wiiu,
		addEventListener(
		type: "wiiu_imageview_start", listener: (ev: CustomEvent) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "wiiu_imageview_end", listener: (ev: CustomEvent) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "wiiu_imageview_change_viewmode", listener: (ev: CustomEvent) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "wiiu_imageview_change_content", listener: (ev: CustomEvent) => any, useCapture?: boolean
	): void,
		addEventListener(
		type: "wiiu_imageview_error", listener: (ev: CustomEvent) => any, useCapture?: boolean
	): void
	}

			
}

declare module 'npm$namespace$wiiu' {
		declare interface WiiuGamePad {
		isEnabled: boolean,
		isDataValid: boolean,
		tpTouch: boolean,
		tpValidity: number,
		contentX: number,
		contentY: number,
		lStickX: number,
		lStickY: number,
		rStickX: number,
		rStickY: number,
		hold: number,
		accX: number,
		accY: number,
		accZ: number,
		gyroX: number,
		gyroY: number,
		gyroZ: number,
		angleX: number,
		angleY: number,
		angleZ: number,
		dirXx: number,
		dirXy: number,
		dirYx: number,
		dirXz: number,
		dirYy: number,
		dirYz: number,
		dirZx: number,
		dirZz: number,
		dirZy: number,
		update(): WiiuGamePad
	}

	declare interface VideoPlayer {
		viewMode: number,
		end(): boolean
	}

	declare interface ImageView {
		viewMode: number,
		end(): boolean,
		getErrorCode(): number
	}

			
}


declare module 'jquery.qrcode' {
		declare interface JQuery {
		qrcode(options?: JQueryQRCode.Options): JQuery
	}

			
}

declare module 'npm$namespace$JQueryQRCode' {
		declare interface Options {
		render?: string,
		minVersion?: number,
		maxVersion?: number,
		ecLevel?: string,
		left?: number,
		top?: number,
		size?: number,
		fill?: string,
		background?: string,
		text?: string,
		radius?: number,
		quiet?: number,
		mode?: Mode,
		mSize?: number,
		mPosX?: number,
		mPosY?: number,
		label?: string,
		fontname?: string,
		fontcolor?: string,
		image?: string
	}

			
}
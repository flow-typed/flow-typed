

declare module 'qrcode-generator' {
		declare interface QRCode {
		addData(data: string): void,
		make(): void,
		createTableTag(cellSize: number, margin: number): string,
		createSvgTag(cellSize: number, margin: number): string,
		createImageTag(cellSize: number, margin: number): string
	}

	declare function qrcode(type: number, errorCorrectionLevel: string): QRCode

		declare module.exports: undefined


}
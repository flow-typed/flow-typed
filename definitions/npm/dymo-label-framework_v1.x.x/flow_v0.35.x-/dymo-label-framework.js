

declare module 'dymo-label-framework' {
					
}

declare module 'framework' {
		declare interface Color {
		alpha?: number,
		red?: number,
		green?: number,
		blue?: number
	}

	declare interface CreateLabelRenderParamsXmlParams {
		labelColor?: Color,
		shadowColor?: Color,
		shadowDepth?: number,
		flowDirection?: FlowDirection,
		pngUseDisplayResolution?: boolean
	}

	declare interface CreateLabelWriterPrintParamsXmlParams {
		copies?: number,
		jobTitle?: string,
		flowDirection?: FlowDirection,
		printQuality?: LabelWriterPrintQuality,
		twinTurboRoll?: TwinTurboRoll
	}

	declare interface CreateTapePrintParamsXmlParams {
		copies?: number,
		jobTitle?: string,
		flowDirection?: FlowDirection,
		alignment?: TapeAlignment,
		cutMode?: TapeCutMode
	}

	declare interface PrinterInfo {
		isAutoCutSupported: boolean,
		isConnected: boolean,
		isLocal: boolean,
		isTwinTurbo: boolean,
		modelName: string,
		name: string,
		printerType: string
	}

	declare interface PrintJob {
		getStatus(replyCallback: (printJobStatusInfo: PrintJobStatusInfo) => any): void
	}

	declare interface PrintJobStatusInfo {
		statusMessage: string,
		status: PrintJobStatus
	}

	declare interface ILabel {
		getAddressBarcodePosition(addressIndex: number): AddressBarcodePosition,
		getAddressObjectCount(): number,
		getAddressText(addressIndex: number): string,
		getLabelXml(): string,
		getObjectNames(): string[],
		getObjectText(objectName: string): string,
		print(printerName: string, printParamsXml: string, labelSetXml: string): void,
		printAndPollStatus(
		printerName: string, printParamsXml: string, labelSetXml: string, statusCallback: (printJob: PrintJob, printJobStatusInfo: PrintJobStatusInfo) => boolean, pollInterval: number
	): PrintJob,
		render(renderParamsXml: string, printerName: string): string,
		setAddressBarcodePosition(addressIndex: number, barcodePosition: AddressBarcodePosition): ILabel,
		setAddressText(addressIndex: number, text: string): ILabel,
		setObjectText(objectName: string, text: string): ILabel
	}

	declare interface ILabelSetRecord {
		setBase64Image(objectName: string, base64Image: string): ILabelSetRecord,
		setText(objectName: string, text: string): ILabelSetRecord,
		setTextMarkup(objectName: string, textMarkup: string): ILabelSetRecord
	}

	declare interface AddPrinterUriCallback {
		(printerUri: string): any
	}

	declare function checkEnvironment(
		
	): {
		isBrowserSupported: boolean,
		isFrameworkInstalled: boolean,
		errorDetails: string
	}

	declare function createLabelRenderParamsXml(params: CreateLabelRenderParamsXmlParams): string

	declare function createLabelWriterPrintParamsXml(params: CreateLabelWriterPrintParamsXmlParams): string

	declare function createTapePrintParamsXml(params: CreateTapePrintParamsXmlParams): string

	declare function getPrinters(): PrinterInfo[]

	declare function getLabelWriterPrinters(): PrinterInfo[]

	declare function getTapePrinters(): PrinterInfo[]

	declare function loadImageAsPngBase64(imageUri: string): string

	declare function openLabelFile(fileName: string): ILabel

	declare function openLabelXml(labelXml: string): ILabel

	declare function printLabel(
		printerName: string, printParamsXml: string, labelXml: string, labelSetXml: string
	): void

	declare function printLabel2(
		printerName: string, printParamsXml: string, labelXml: string, labelSetXml: string
	): PrintJob

	declare function printLabelAndPollStatus(
		printerName: string, printParamsXml: string, labelXml: string, labelSetXml: string, statusCallback: (printJob: PrintJob, printJobStatusInfo: PrintJobStatusInfo) => boolean, pollInterval: number
	): PrintJob

	declare function renderLabel(labelXml: string, renderParamsXml: string, printerName: string): string

	declare function addPrinterUri(
		printerUri: string, location?: string, successCallback?: AddPrinterUriCallback, errorCallback?: AddPrinterUriCallback
	): void

	declare function removePrinterUri(printerUri: string): void

	declare function removeAllPrinterUri(): void

	declare class LabelSetBuilder  {
		toXml(records: {
		
	}[]): string;
		addRecord(): ILabelSetRecord;
		getRecords(): ILabelSetRecord[];
		toString(): string
	}

	
}
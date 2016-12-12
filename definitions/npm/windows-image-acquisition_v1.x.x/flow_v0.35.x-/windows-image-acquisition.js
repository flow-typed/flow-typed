

declare module 'windows-image-acquisition' {
		declare interface ActiveXObject {
		new (progID: "WIA.Rational"): WIA.Rational,
		new (progID: "WIA.Vector"): WIA.Vector,
		new (progID: "WIA.ImageFile"): WIA.ImageFile,
		new (progID: "WIA.ImageProcess"): WIA.ImageProcess,
		new (progID: "WIA.CommonDialog"): WIA.CommonDialog,
		new (progID: "WIA.DeviceManager"): WIA.DeviceManager
	}

			
}

declare module 'npm$namespace$WIA' {
	declare type CommandID = "'{04E725B0-ACAE-11D2-A093-00C04F72DC3C}'" | "'{E208C170-ACAD-11D2-A093-00C04F72DC3C}'" | "'{9B26B7B2-ACAD-11D2-A093-00C04F72DC3C}'" | "'{AF933CAC-ACAD-11D2-A093-00C04F72DC3C}'" | "'{1F3B3D8E-ACAE-11D2-A093-00C04F72DC3C}'";

	declare type EventID = "'{A28BBADE-64B6-11D2-A231-00C04FA31809}'" | "'{143E4E83-6497-11D2-A231-00C04FA31809}'" | "'{4C8F4EF5-E14F-11D2-B326-00C04F68CE61}'" | "'{1D22A559-E14F-11D2-B326-00C04F68CE61}'" | "'{C686DCEE-54F2-419E-9A27-2FC7F2E98F9E}'" | "'{C00EB793-8C6E-11D2-977A-0000F87A926F}'" | "'{9B2B662C-6185-438C-B68B-E39EE25E71CB}'" | "'{A6C5A715-8C6E-11D2-977A-0000F87A926F}'" | "'{FC4767C1-C8B3-48A2-9CFA-2E90CB3D3590}'" | "'{154E27BE-B617-4653-ACC5-0FD7BD4C65CE}'" | "'{A65B704A-7F3C-4447-A75D-8A26DFCA1FDF}'" | "'{9D095B89-37D6-4877-AFED-62A297DC6DBE}'" | "'{B441F425-8C6E-11D2-977A-0000F87A926F}'";

	declare type FormatID = "'{B96B3CAB-0728-11D3-9D7B-0000F81EF32E}'" | "'{B96B3CB0-0728-11D3-9D7B-0000F81EF32E}'" | "'{B96B3CAE-0728-11D3-9D7B-0000F81EF32E}'" | "'{B96B3CAF-0728-11D3-9D7B-0000F81EF32E}'" | "'{B96B3CB1-0728-11D3-9D7B-0000F81EF32E}'";

	declare type Miscellaneous = "'*'" | "'{00000000-0000-0000-0000-000000000000}'";

	declare interface CommonDialog {
		ShowAcquireImage: (
		DeviceType?: WiaDeviceType, Intent?: WiaImageIntent, Bias?: WiaImageBias, FormatID?: string, AlwaysSelectDevice?: boolean, UseCommonUI?: boolean, CancelError?: boolean
	) => ImageFile,
		ShowAcquisitionWizard: (Device: Device) => any,
		ShowDeviceProperties: (Device: Device, CancelError?: boolean) => void,
		ShowItemProperties: (Item: Item, CancelError?: boolean) => void,
		ShowPhotoPrintingWizard: (Files: any) => void,
		ShowSelectDevice: (
		DeviceType?: WiaDeviceType, AlwaysSelectDevice?: boolean, CancelError?: boolean
	) => Device,
		ShowSelectItems: (
		Device: Device, Intent?: WiaImageIntent, Bias?: WiaImageBias, SingleSelect?: boolean, UseCommonUI?: boolean, CancelError?: boolean
	) => Items,
		ShowTransfer: (Item: Item, FormatID?: string, CancelError?: boolean) => any
	}

	declare interface Device {
		Commands: DeviceCommands,
		DeviceID: string,
		Events: DeviceEvents,
		ExecuteCommand: (CommandID: string) => Item,
		GetItem: (ItemID: string) => Item,
		Items: Items,
		Properties: Properties,
		Type: WiaDeviceType,
		WiaItem: any
	}

	declare interface DeviceCommand {
		CommandID: string,
		Description: string,
		Name: string
	}

	declare interface DeviceCommands {
		Count: number,
		Item: (Index: number) => DeviceCommand
	}

	declare interface DeviceEvent {
		Description: string,
		EventID: string,
		Name: string,
		Type: WiaEventFlag
	}

	declare interface DeviceEvents {
		Count: number,
		Item: (Index: number) => DeviceEvent
	}

	declare interface DeviceInfo {
		Connect: () => Device,
		DeviceID: string,
		Properties: Properties,
		Type: WiaDeviceType
	}

	declare interface DeviceInfos {
		Count: number,
		Item: (Index: any) => DeviceInfo
	}

	declare interface DeviceManager {
		DeviceInfos: DeviceInfos,
		RegisterEvent: (EventID: string, DeviceID?: string) => void,
		RegisterPersistentEvent: (
		Command: string, Name: string, Description: string, Icon: string, EventID: string, DeviceID?: string
	) => void,
		UnregisterEvent: (EventID: string, DeviceID?: string) => void,
		UnregisterPersistentEvent: (
		Command: string, Name: string, Description: string, Icon: string, EventID: string, DeviceID?: string
	) => void
	}

	declare interface Filter {
		Description: string,
		FilterID: string,
		Name: string,
		Properties: Properties
	}

	declare interface FilterInfo {
		Description: string,
		FilterID: string,
		Name: string
	}

	declare interface FilterInfos {
		Count: number,
		Item: (Index: any) => FilterInfo
	}

	declare interface Filters {
		Add: (FilterID: string, Index?: number) => void,
		Count: number,
		Item: (Index: number) => Filter,
		Remove: (Index: number) => void
	}

	declare interface Formats {
		Count: number,
		Item: (Index: number) => string
	}

	declare interface ImageFile {
		ActiveFrame: number,
		ARGBData: Vector,
		FileData: Vector,
		FileExtension: string,
		FormatID: string,
		FrameCount: number,
		Height: number,
		HorizontalResolution: number,
		IsAlphaPixelFormat: boolean,
		IsAnimated: boolean,
		IsExtendedPixelFormat: boolean,
		IsIndexedPixelFormat: boolean,
		LoadFile: (Filename: string) => void,
		PixelDepth: number,
		Properties: Properties,
		SaveFile: (Filename: string) => void,
		VerticalResolution: number,
		Width: number
	}

	declare interface ImageProcess {
		Apply: (Source: ImageFile) => ImageFile,
		FilterInfos: FilterInfos,
		Filters: Filters
	}

	declare interface Item {
		Commands: DeviceCommands,
		ExecuteCommand: (CommandID: string) => Item,
		Formats: Formats,
		ItemID: string,
		Items: Items,
		Properties: Properties,
		Transfer: (FormatID?: string) => any,
		WiaItem: any
	}

	declare interface Items {
		Add: (Name: string, Flags: number) => void,
		Count: number,
		Item: (Index: number) => Item,
		Remove: (Index: number) => void
	}

	declare interface Properties {
		Count: number,
		Exists: (Index: any) => boolean,
		Item: (Index: any) => Property
	}

	declare interface Property {
		IsReadOnly: boolean,
		IsVector: boolean,
		Name: string,
		PropertyID: number,
		SubType: WiaSubType,
		SubTypeDefault: any,
		SubTypeMax: number,
		SubTypeMin: number,
		SubTypeStep: number,
		SubTypeValues: Vector,
		Type: number,
		Value: any
	}

	declare interface Rational {
		Denominator: number,
		Numerator: number,
		Value: number
	}

	declare interface Vector {
		Add: (Value: any, Index?: number) => void,
		BinaryData: any,
		Clear: () => void,
		Count: number,
		Date: VarDate,
		ImageFile: (Width?: number, Height?: number) => ImageFile,
		Item: (Index: number) => any,
		Picture: (Width?: number, Height?: number) => any,
		Remove: (Index: number) => any,
		SetFromString: (Value: string, Resizable?: boolean, Unicode?: boolean) => void,
		String: (Unicode?: boolean) => string
	}

			
}
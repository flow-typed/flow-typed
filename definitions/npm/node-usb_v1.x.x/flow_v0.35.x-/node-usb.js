

declare module 'node-usb' {
					
}

declare module 'usb' {
		declare interface IEndpoint {
		direction: string,
		transferType: number,
		timeout: number,
		descriptor: EndpointDescriptor
	}

	declare function findByIds(vid: number, pid: number): Device

	declare function on(event: string, callback: (device: Device) => void): void

	declare function getDeviceList(): Array<Device>

	declare function setDebugLevel(level: number): void

	declare class Device  {
		timeout: number;
		busNumber: number;
		deviceAddress: number;
		portNumbers: Array<number>;
		deviceDescriptor: DeviceDescriptor;
		configDescriptor: ConfigDescriptor;
		interfaces: Array<Interface>;
		___open(): void;
		___claimInterface(addr: number): void;
		open(defaultConfig?: boolean): void;
		close(): void;
		interface(addr: number): Interface;
		controlTransfer(
		bmRequestType: number, bRequest: number, wValue: number, wIndex: number, data_or_length: any, callback: (error?: string, buf?: Buffer) => void
	): Device;
		getStringDescriptor(desc_index: number, callback: (error?: string, buf?: Buffer) => void): void;
		setConfiguration(desired: number, cb: (err?: string) => void): void;
		reset(callback: (err?: string) => void): void
	}

	declare class DeviceDescriptor  {
		bLength: number;
		bDescriptorType: number;
		bcdUSB: number;
		bDeviceClass: number;
		bDeviceSubClass: number;
		bDeviceProtocol: number;
		bMaxPacketSize: number;
		idVendor: number;
		idProduct: number;
		bcdDevice: number;
		iManufacturer: number;
		iProduct: number;
		iSerialNumber: number;
		bNumConfigurations: number
	}

	declare class ConfigDescriptor  {
		bLength: number;
		bDescriptorType: number;
		wTotalLength: number;
		bNumInterfaces: number;
		bConfigurationValue: number;
		iConfiguration: number;
		bmAttributes: number;
		bMaxPower: number;
		extra: Buffer
	}

	declare class Interface  {
		descriptor: InterfaceDescriptor;
		endpoints: Array<IEndpoint>;
		constructor(device: Device, id: number): this;
		claim(): void;
		release(closeEndpoints?: (err?: string) => void, cb?: (err?: string) => void): void;
		isKernelDriverActive(): boolean;
		detachKernelDriver(): number;
		attachKernelDriver(): number;
		setAltSetting(altSetting: number, cb: (err?: string) => void): void;
		endpoint(addr: number): IEndpoint
	}

	declare class InterfaceDescriptor  {
		bLength: number;
		bDescriptorType: number;
		bInterfaceNumber: number;
		bAlternateSetting: number;
		bNumEndpoints: number;
		bInterfaceClass: number;
		bInterfaceSubClass: number;
		bInterfaceProtocol: number;
		iInterface: number;
		extra: Buffer
	}

	declare class InEndpoint extends IEndpoint {
		direction: string;
		transferType: number;
		timeout: number;
		descriptor: EndpointDescriptor;
		constructor(device: Device, descriptor: EndpointDescriptor): this;
		transfer(length: number, callback: (error: string, data: Buffer) => void): InEndpoint;
		startPoll(nTransfers: number, transferSize: number): void;
		stopPoll(cb: () => void): void
	}

	declare class OutEndpoint extends IEndpoint {
		direction: string;
		transferType: number;
		timeout: number;
		descriptor: EndpointDescriptor;
		constructor(device: Device, descriptor: EndpointDescriptor): this;
		transfer(buffer: Buffer, cb: (err?: string) => void): OutEndpoint;
		transferWithZLP(buf: Buffer, cb: (err?: string) => void): void
	}

	declare class EndpointDescriptor  {
		bLength: number;
		bDescriptorType: number;
		bEndpointAddress: number;
		bmAttributes: number;
		wMaxPacketSize: number;
		bInterval: number;
		bRefresh: number;
		bSynchAddress: number
	}

	
}
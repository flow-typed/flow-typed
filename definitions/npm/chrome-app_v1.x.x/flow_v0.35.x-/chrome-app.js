

declare module 'chrome-app' {
					
}

declare module 'app' {
		declare interface AppDetails {
		id: string
	}

	declare export function getDetails(): AppDetails

		
}

declare module 'runtime' {
		declare interface LaunchData {
		id?: string,
		items?: LaunchDataItem[],
		url?: string,
		referrerUrl?: string,
		isKioskSession?: boolean
	}

	declare interface LaunchDataItem {
		entry: FileEntry,
		type: string
	}

	declare interface LaunchedEvent {
		
	}

	declare interface RestartedEvent {
		
	}

	declare interface Manifest {
		app?: {
		background?: {
		scripts?: string[]
	}
	},
		bluetooth?: {
		uuids?: string[],
		socket?: boolean,
		low_energy?: boolean,
		peripheral?: boolean
	},
		file_handlers?: {
		[name: string]: {
		types?: string[],
		extensions?: string[],
		title?: string
	}
	},
		kiosk_enabled?: boolean,
		kiosk_only?: boolean,
		url_handlers?: {
		[name: string]: {
		matches: string[],
		title?: string
	}
	},
		usb_printers?: {
		filters: {
		vendorId?: number,
		productId?: number,
		interfaceClass?: number,
		interfaceSubclass?: number,
		interfaceProtocol?: number
	}[]
	},
		webview?: {
		partitions?: {
		name: string,
		accessible_resources: string[]
	}[]
	}
	}

			
}

declare module 'window' {
		declare interface ContentBounds {
		left?: number,
		top?: number,
		width?: number,
		height?: number
	}

	declare interface BoundsSpecification {
		left?: number,
		top?: number,
		width?: number,
		height?: number,
		minWidth?: number,
		minHeight?: number,
		maxWidth?: number,
		maxHeight?: number
	}

	declare interface Bounds {
		left: number,
		top: number,
		width: number,
		height: number,
		minWidth?: number,
		minHeight?: number,
		maxWidth?: number,
		maxHeight?: number,
		setPosition(left: number, top: number): void,
		setSize(width: number, height: number): void,
		setMinimumSize(minWidth: number, minHeight: number): void,
		setMaximumSize(maxWidth: number, maxHeight: number): void
	}

	declare interface FrameOptions {
		type?: string,
		color?: string,
		activeColor?: string,
		inactiveColor?: string
	}

	declare interface CreateWindowOptions {
		id?: string,
		innerBounds?: BoundsSpecification,
		outerBounds?: BoundsSpecification,
		minWidth?: number,
		minHeight?: number,
		maxWidth?: number,
		maxHeight?: number,
		frame?: any,
		bounds?: ContentBounds,
		alphaEnabled?: boolean,
		state?: string,
		hidden?: boolean,
		resizable?: boolean,
		singleton?: boolean,
		alwaysOnTop?: boolean,
		focused?: boolean,
		visibleOnAllWorkspaces?: boolean
	}

	declare interface AppWindow {
		focus: () => void,
		fullscreen: () => void,
		isFullscreen: () => boolean,
		minimize: () => void,
		isMinimized: () => boolean,
		maximize: () => void,
		isMaximized: () => boolean,
		restore: () => void,
		moveTo: (left: number, top: number) => void,
		resizeTo: (width: number, height: number) => void,
		drawAttention: () => void,
		clearAttention: () => void,
		close: () => void,
		show: () => void,
		hide: () => void,
		getBounds: () => ContentBounds,
		setBounds: (bounds: ContentBounds) => void,
		isAlwaysOnTop: () => boolean,
		setAlwaysOnTop: (alwaysOnTop: boolean) => void,
		setVisibleOnAllWorkspaces: (alwaysVisible: boolean) => void,
		contentWindow: Window,
		id: string,
		innerBounds: Bounds,
		outerBounds: Bounds,
		onBoundsChanged: WindowEvent,
		onClosed: WindowEvent,
		onFullscreened: WindowEvent,
		onMaximized: WindowEvent,
		onMinimized: WindowEvent,
		onRestored: WindowEvent
	}

	declare interface WindowEvent {
		
	}

	declare export function create(
		url: string, options?: CreateWindowOptions, callback?: (created_window: AppWindow) => void
	): void

	declare export function current(): AppWindow

	declare export function get(id: string): AppWindow

	declare export function getAll(): AppWindow[]

	declare export function canSetVisibleOnAllWorkspaces(): boolean

		
}

declare module 'fileSystem' {
		declare interface AcceptOptions {
		description?: string,
		mimeTypes?: string[],
		extensions?: string[]
	}

	declare interface ChooseEntryOptions {
		type?: string,
		suggestedName?: string,
		accepts?: AcceptOptions[],
		acceptsAllTypes?: boolean,
		acceptsMultiple?: boolean
	}

	declare export function getDisplayPath(entry: Entry, callback: (displayPath: string) => void): void

	declare export function getWritableEntry(entry: Entry, callback: (entry: Entry) => void): void

	declare export function isWritableEntry(entry: Entry, callback: (isWritable: boolean) => void): void

	declare export function chooseEntry(callback: (entry: Entry) => void): void

	declare export function chooseEntry(callback: (fileEntries: FileEntry[]) => void): void

	declare export function chooseEntry(options: ChooseEntryOptions, callback: (entry: Entry) => void): void

	declare export function chooseEntry(
		options: ChooseEntryOptions, callback: (fileEntries: FileEntry[]) => void
	): void

	declare export function restoreEntry(id: string, callback: (entry: Entry) => void): void

	declare export function isRestorable(id: string, callback: (isRestorable: boolean) => void): void

	declare export function retainEntry(entry: Entry): string

		
}

declare module 'mediaGalleries' {
		declare interface MediaFileSystemsOptions {
		interactive?: "no" | "yes" | "if_needed"
	}

	declare interface MediaFileSystemMetadata {
		name: string,
		galleryId: string,
		deviceId?: string,
		isRemovable: boolean,
		isMediaDevice: boolean,
		isAvailable: boolean
	}

	declare interface MetadataOptions {
		metadataType: "all" | "mimeTypeAndTags" | "mimeTypeOnly"
	}

	declare interface RawTag {
		type: string,
		tags: {
		[name: string]: string
	}
	}

	declare interface Metadata {
		mimeType: string,
		height?: number,
		width?: number,
		xResolution?: number,
		yResolution?: number,
		duration?: number,
		rotation?: number,
		cameraMake?: string,
		cameraModel?: string,
		exposureTimeSeconds?: number,
		flashFired?: boolean,
		fNumber?: number,
		focalLengthMm?: number,
		isoEquivalent?: number,
		album?: string,
		artist?: string,
		comment?: string,
		copyright?: string,
		disc?: number,
		genre?: string,
		language?: string,
		title?: string,
		track?: number,
		rawTags: RawTag[],
		attachedImages: Blob[]
	}

	declare interface GalleryWatchResult {
		galleryId: string,
		success: boolean
	}

	declare interface GalleryChangedEventArgs {
		type: "contents_changed" | "watch_dropped",
		galleryId: string
	}

	declare interface ScanProgressEventArgs {
		type: "start" | "cancel" | "finish" | "error",
		galleryCount?: number,
		audioCount?: number,
		imageCount?: number,
		videoCount?: number
	}

	declare export function getMediaFileSystems(callback: (mediaFileSystems: FileSystem[]) => void): void

	declare export function getMediaFileSystems(
		options: MediaFileSystemsOptions, callback: (mediaFileSystems: FileSystem[]) => void
	): void

	declare export function addUserSelectedFolder(
		callback: (mediaFileSystems: FileSystem[], selectedFileSystemName: string) => void
	): void

	declare export function dropPermissionForMediaFileSystem(galleryId: string, callback?: () => void): void

	declare export function startMediaScan(): void

	declare export function cancelMediaScan(): void

	declare export function addScanResults(callback: (mediaFileSystems: FileSystem[]) => void): void

	declare export function getMediaFileSystemMetadata(mediaFileSystem: FileSystem): MediaFileSystemMetadata

	declare export function getAllMediaFileSystemMetadata(callback: (metadatas: MediaFileSystemMetadata[]) => void): void

	declare export function getMetadata(mediaFile: Blob, callback: (metadata: Metadata) => void): void

	declare export function getMetadata(
		mediaFile: Blob, options: MetadataOptions, callback: (metadata: Metadata) => void
	): void

	declare export function addGalleryWatch(galleryId: string, callback: (result: GalleryWatchResult) => void): void

	declare export function removeGalleryWatch(galleryId: string): void

	declare export function getAllGalleryWatch(callback: (galleryIds: string[]) => void): void

	declare export function removeAllGalleryWatch(): void

		
}

declare module 'tcp' {
		declare interface CreateInfo {
		socketId: number
	}

	declare interface SendInfo {
		resultCode: number,
		bytesSent?: number
	}

	declare interface ReceiveEventArgs {
		socketId: number,
		data: ArrayBuffer
	}

	declare interface ReceiveErrorEventArgs {
		socketId: number,
		resultCode: number
	}

	declare interface SocketProperties {
		persistent?: boolean,
		name?: string,
		bufferSize?: number
	}

	declare interface SocketInfo {
		socketId: number,
		persistent: boolean,
		name?: string,
		bufferSize?: number,
		paused: boolean,
		connected: boolean,
		localAddress?: string,
		localPort?: number,
		peerAddress?: string,
		peerPort?: number
	}

	declare export function create(callback: (createInfo: CreateInfo) => void): void

	declare export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void

	declare export function update(socketId: number, properties: SocketProperties, callback?: () => void): void

	declare export function setPaused(socketId: number, paused: boolean, callback?: () => void): void

	declare export function setKeepAlive(socketId: number, enable: boolean, callback: (result: number) => void): void

	declare export function setKeepAlive(
		socketId: number, enable: boolean, delay: number, callback: (result: number) => void
	): void

	declare export function setNoDelay(socketId: number, noDelay: boolean, callback: (result: number) => void): void

	declare export function connect(
		socketId: number, peerAddress: string, peerPort: number, callback: (result: number) => void
	): void

	declare export function disconnect(socketId: number, callback?: () => void): void

	declare export function send(
		socketId: number, data: ArrayBuffer, callback: (sendInfo: SendInfo) => void
	): void

	declare export function close(socketId: number, callback?: () => void): void

	declare export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void

	declare export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void

		
}

declare module 'udp' {
		declare interface CreateInfo {
		socketId: number
	}

	declare interface SendInfo {
		resultCode: number,
		bytesSent?: number
	}

	declare interface ReceiveEventArgs {
		socketId: number,
		data: ArrayBuffer,
		remoteAddress: string,
		remotePort: number
	}

	declare interface ReceiveErrorEventArgs {
		socketId: number,
		resultCode: number
	}

	declare interface SocketProperties {
		persistent?: boolean,
		name?: string,
		bufferSize?: number
	}

	declare interface SocketInfo {
		socketId: number,
		persistent: boolean,
		name?: string,
		bufferSize?: number,
		paused: boolean,
		localAddress?: string,
		localPort?: number
	}

	declare export function create(callback: (createInfo: CreateInfo) => void): void

	declare export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void

	declare export function update(socketId: number, properties: SocketProperties, callback?: () => void): void

	declare export function setPaused(socketId: number, paused: boolean, callback?: () => void): void

	declare export function bind(
		socketId: number, address: string, port: number, callback: (result: number) => void
	): void

	declare export function send(
		socketId: number, data: ArrayBuffer, address: string, port: number, callback: (sendInfo: SendInfo) => void
	): void

	declare export function close(socketId: number, callback?: () => void): void

	declare export function getInfo(socketId: number, callback: (socketInfo: SocketInfo) => void): void

	declare export function getSockets(callback: (socketInfos: SocketInfo[]) => void): void

	declare export function joinGroup(socketId: number, address: string, callback: (result: number) => void): void

	declare export function leaveGroup(socketId: number, address: string, callback: (result: number) => void): void

	declare export function setMulticastTimeToLive(socketId: number, ttl: number, callback: (result: number) => void): void

	declare export function setMulticastLoopbackMode(socketId: number, enabled: boolean, callback: (result: number) => void): void

	declare export function getJoinedGroups(socketId: number, callback: (groups: string[]) => void): void

		
}

declare module 'tcpServer' {
		declare interface CreateInfo {
		socketId: number
	}

	declare interface AcceptEventArgs {
		socketId: number,
		clientSocketId: number
	}

	declare interface AcceptErrorEventArgs {
		socketId: number,
		resultCode: number
	}

	declare interface SocketProperties {
		persistent?: boolean,
		name?: string
	}

	declare interface SocketInfo {
		socketId: number,
		persistent: boolean,
		name?: string,
		paused: boolean,
		localAddress?: string,
		localPort?: number
	}

	declare export function create(callback: (createInfo: CreateInfo) => void): void

	declare export function create(properties: SocketProperties, callback: (createInfo: CreateInfo) => void): void

	declare export function update(socketId: number, properties: SocketProperties, callback?: () => void): void

	declare export function setPaused(socketId: number, paused: boolean, callback?: () => void): void

	declare export function listen(
		socketId: number, address: string, port: number, backlog: number, callback: (result: number) => void
	): void

	declare export function listen(
		socketId: number, address: string, port: number, callback: (result: number) => void
	): void

	declare export function disconnect(socketId: number, callback?: () => void): void

	declare export function close(socketId: number, callback?: () => void): void

	declare export function getInfo(socketId: number, callback: (socketInfos: SocketInfo[]) => void): void

		
}

declare module 'display' {
		declare interface Bounds {
		left: number,
		top: number,
		width: number,
		height: number
	}

	declare interface Insets {
		left: number,
		top: number,
		right: number,
		bottom: number
	}

	declare interface DisplayInfo {
		id: string,
		name: string,
		mirroringSourceId: string,
		isPrimary: boolean,
		isInternal: boolean,
		isEnabled: boolean,
		dpiX: number,
		dpiY: number,
		rotation: number,
		bounds: Bounds,
		overscan: Insets,
		workArea: Bounds
	}

	declare interface DisplayProps {
		mirroringSourceId?: string,
		isPrimary?: boolean,
		overscan?: Insets,
		rotation?: number,
		boundsOriginX?: number,
		boundsOriginY?: number
	}

	declare interface DisplayChangedEvent {
		
	}

	declare export function getInfo(callback: (info: DisplayInfo[]) => void): void

	declare export function setDisplayProperties(id: string, info: DisplayInfo, callback?: () => void): void

		
}

declare module 'network' {
		declare interface NetworkInterface {
		name: string,
		address: string,
		prefixLength: number
	}

	declare export function getNetworkInterfaces(callback: (networkInterfaces: NetworkInterface[]) => void): void

		
}

declare module 'usb' {
	declare type Direction = "in" | "out";

	declare interface Device {
		device: number,
		vendorId: number,
		productId: number,
		productName: string,
		manufacturerName: string,
		serialNumber: string
	}

	declare interface ConnectionHandle {
		handle: number,
		vendorId: number,
		productId: number
	}

	declare interface EndpointDescriptor {
		address: number,
		type: "control" | "interrupt" | "isochronous" | "bulk",
		direction: Direction,
		maximumPacketSize: number,
		synchronization?: "asynchronous" | "adaptive" | "synchronous",
		usage?: "data" | "feedback" | "explicitFeedback",
		pollingInterval?: number,
		extra_data: ArrayBuffer
	}

	declare interface InterfaceDescriptor {
		interfaceNumber: number,
		alternateSetting: number,
		interfaceClass: number,
		interfaceSubclass: number,
		interfaceProtocol: number,
		description?: string,
		endpoints: EndpointDescriptor[],
		extra_data: ArrayBuffer
	}

	declare interface ConfigDescriptor {
		active: boolean,
		configurationValue: number,
		description?: string,
		selfPowered: boolean,
		remoteWakeup: boolean,
		maxPower: number,
		interfaces: InterfaceDescriptor[],
		extra_data: ArrayBuffer
	}

	declare interface GenericTransferInfo {
		direction: Direction,
		endpoint: number,
		length?: number,
		data?: ArrayBuffer,
		timeout?: number
	}

	declare interface TransferResultInfo {
		resultCode: number,
		data?: ArrayBuffer
	}

	declare interface DeviceFilter {
		vendorId?: number,
		productId?: number,
		interfaceClass?: number,
		interfaceSubclass?: number,
		interfaceProtocol?: number
	}

	declare interface TransferInfo {
		direction: Direction,
		recipient: "device" | "interface" | "endpoint" | "other",
		requestType: "standard" | "class" | "vendor" | "reserved",
		request: number,
		value: number,
		index: number,
		length?: number,
		data?: ArrayBuffer,
		timeout?: number
	}

	declare interface DeviceEvent {
		
	}

	declare export function getDevices(
		options: {
		vendorId?: number,
		productId?: number,
		filters?: DeviceFilter[]
	}, callback: (devices: Device[]) => void
	): void

	declare export function getUserSelectedDevices(
		options: {
		multiple?: boolean,
		filters?: DeviceFilter[]
	}, callback: (devices: Device[]) => void
	): void

	declare export function getConfigurations(device: Device, callback: (configs: ConfigDescriptor[]) => void): void

	declare export function requestAccess(
		device: Device, interfaceId: number, callback: (success: boolean) => void
	): void

	declare export function openDevice(device: Device, callback: (handle: ConnectionHandle) => void): void

	declare export function findDevices(
		options: {
		vendorId: number,
		productId: number,
		interfaceId?: number
	}, callback: (handles: ConnectionHandle[]) => void
	): void

	declare export function closeDevice(handle: ConnectionHandle, callback?: () => void): void

	declare export function setConfiguration(
		handle: ConnectionHandle, configurationValue: number, callback: () => void
	): void

	declare export function getConfiguration(handle: ConnectionHandle, callback: (config: ConfigDescriptor) => void): void

	declare export function listInterfaces(
		handle: ConnectionHandle, callback: (descriptors: InterfaceDescriptor[]) => void
	): void

	declare export function claimInterface(handle: ConnectionHandle, interfaceNumber: number, callback: () => void): void

	declare export function releaseInterface(handle: ConnectionHandle, interfaceNumber: number, callback: () => void): void

	declare export function setInterfaceAlternateSetting(
		handle: ConnectionHandle, interfaceNumber: number, alternateSetting: number, callback: () => void
	): void

	declare export function controlTransfer(
		handle: ConnectionHandle, transferInfo: TransferInfo, callback: (info: TransferResultInfo) => void
	): void

	declare export function bulkTransfer(
		handle: ConnectionHandle, transferInfo: GenericTransferInfo, callback: (info: TransferResultInfo) => void
	): void

	declare export function interruptTransfer(
		handle: ConnectionHandle, transferInfo: GenericTransferInfo, callback: (info: TransferResultInfo) => void
	): void

	declare export function isochronousTransfer(
		handle: ConnectionHandle, transferInfo: {
		transferInfo: GenericTransferInfo,
		packets: number,
		packetLength: number
	}, callback: (info: TransferResultInfo) => void
	): void

	declare export function resetDevice(handle: ConnectionHandle, callback: (success: boolean) => void): void

		
}
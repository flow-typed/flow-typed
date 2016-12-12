

declare module 'webcl' {
		declare interface Window {
		webcl: WEBCL.WebCL
	}

			
}

declare module 'npm$namespace$WEBCL' {
		declare interface WebCLBuffer {
		createSubBuffer(memFlags: MemFlagsBits, origin: number, sizeInBytes: number): WebCLBuffer
	}

	declare interface WebCLCallback {
		(event: WebCLEvent): void
	}

	declare interface WebCLCommandQueue {
		enqueueCopyBuffer(
		srcBuffer: WebCLBuffer, dstBuffer: WebCLBuffer, srcOffset: number, dstOffset: number, numBytes: number, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueCopyBufferRect(
		srcBuffer: WebCLBuffer, dstBuffer: WebCLBuffer, srcOrigin: number[], dstOrigin: number[], region: number[], srcRowPitch: number, srcSlicePitch: number, dstRowPitch: number, dstSlicePitch: number, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueCopyImage(
		srcImage: WebCLImage, dstImage: WebCLImage, srcOrigin: number[], dstOrigin: number[], region: number[], eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueCopyImageToBuffer(
		srcImage: WebCLImage, dstBuffer: WebCLBuffer, srcOrigin: number[], srcRegion: number[], dstOffset: number, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueCopyBufferToImage(
		srcBuffer: WebCLBuffer, dstImage: WebCLImage, srcOffset: number, dstOrigin: number[], dstRegion: number[], eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueReadBuffer(
		buffer: WebCLBuffer, blockingRead: boolean, bufferOffset: number, numBytes: number, hostPtr: ArrayBufferView, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueReadBufferRect(
		buffer: WebCLBuffer, blockingRead: boolean, bufferOrigin: number[], hostOrigin: number[], region: number[], bufferRowPitch: number, bufferSlicePitch: number, hostRowPitch: number, hostSlicePitch: number, hostPtr: ArrayBufferView, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueReadImage(
		image: WebCLImage, blockingRead: boolean, origin: number[], region: number[], hostRowPitch: number, hostPtr: ArrayBufferView, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueWriteBuffer(
		buffer: WebCLBuffer, blockingWrite: boolean, bufferOffset: number, numBytes: number, hostPtr: ArrayBufferView, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueWriteBufferRect(
		buffer: WebCLBuffer, blockingWrite: boolean, bufferOrigin: number[], hostOrigin: number[], region: number[], bufferRowPitch: number, bufferSlicePitch: number, hostRowPitch: number, hostSlicePitch: number, hostPtr: ArrayBufferView, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueWriteImage(
		image: WebCLImage, blockingWrite: boolean, origin: number[], region: number[], hostRowPitch: number, hostPtr: ArrayBufferView, eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueNDRangeKernel(
		kernel: WebCLKernel, workDim: number, globalWorkOffset: number[], globalWorkSize: number[], localWorkSize?: number[], eventWaitList?: WebCLEvent[], event?: WebCLEvent
	): void,
		enqueueMarker(event: WebCLEvent): void,
		enqueueBarrier(): void,
		enqueueWaitForEvents(eventWaitList: WebCLEvent[]): void,
		finish(whenFinished?: WebCLCallback): void,
		flush(): void,
		getInfo(name: ContextProperties): any,
		release(): void
	}

	declare interface WebCLContext {
		createBuffer(
		memFlags: MemFlagsBits, sizeInBytes: number, hostPtr?: ArrayBufferView
	): WebCLBuffer,
		createCommandQueue(device: WebCLDevice, properties?: CommandQueueProperties): WebCLCommandQueue,
		createImage(
		memFlags: MemFlagsBits, descriptor: WebCLImageDescriptor, hostPtr?: ArrayBufferView
	): WebCLImage,
		createProgram(source: string): WebCLProgram,
		createSampler(
		normalizedCoords: number, addressingMode: AddressingMode, filterMode: FilterMode
	): WebCLSampler,
		createUserEvent(): WebCLUserEvent,
		getInfo(name: ContextInfo): any,
		getSupportedImageFormats(memFlags?: MemFlagsBits): WebCLImageDescriptor[],
		release(): void,
		releaseAll(): void
	}

	declare interface WebCLDevice {
		getInfo(name: DeviceInfo): any,
		getSupportedExtensions(): string[],
		enableExtension(extensionName: string): boolean
	}

	declare interface WebCLEvent {
		getInfo(name: EventInfo): any,
		getProfilingInfo(name: ProfilingInfo): number,
		setCallback(commandExecCallbackType: CommandExecutionStatus, notify: WebCLCallback): void,
		release(): void
	}

	declare interface WebCLException {
		name: string,
		message: string
	}

	declare interface WebCLImage {
		getInfo(): WebCLImageDescriptor
	}

	declare interface WebCLImageDescriptor {
		channelOrder: ChannelOrder,
		channelType: ChannelType,
		width: number,
		height: number,
		rowPitch: number
	}

	declare interface WebCLKernel {
		getInfo(name: KernelInfo): any,
		getWorkGroupInfo(device: WebCLDevice, name: KernelWorkGroupInfo): any,
		getArgInfo(index: number): WebCLKernelArgInfo,
		setArg(index: number, buffer: WebCLBuffer): void,
		setArg(index: number, image: WebCLImage): void,
		setArg(index: number, value: WebCLSampler): void,
		setArg(index: number, value: ArrayBufferView): void,
		release(): void
	}

	declare interface WebCLKernelArgInfo {
		name: string,
		typeName: string,
		addressQualifier: string,
		accessQualifier: string
	}

	declare interface WebCLMemoryObject {
		getInfo(name: MemInfo): any,
		release(): void
	}

	declare interface WebCLPlatform {
		getInfo(name: PlatformInfo): any,
		getDevices(deviceType?: DeviceTypeBits): WebCLDevice[],
		getSupportedExtensions(): string[],
		enableExtension(extensionName: string): boolean
	}

	declare interface WebCLProgram {
		getInfo(name: ProgramInfo): any,
		getBuildInfo(device: WebCLDevice, name: ProgramBuildInfo): any,
		build(devices?: WebCLDevice[], options?: string, whenFinished?: WebCLCallback): void,
		createKernel(kernelName: string): WebCLKernel,
		createKernelsInProgram(): WebCLKernel[],
		release(): void
	}

	declare interface WebCLSampler {
		getInfo(name: SamplerInfo): any,
		release(): void
	}

	declare interface WebCLUserEvent {
		setStatus(executionStatus: CommandExecutionStatus): void
	}

	declare interface WebCL {
		getPlatforms(): WebCLPlatform[],
		createContext(deviceType?: DeviceTypeBits): WebCLContext,
		createContext(platform: WebCLPlatform, deviceType?: DeviceTypeBits): WebCLContext,
		createContext(device: WebCLDevice): WebCLContext,
		createContext(devices: WebCLDevice[]): WebCLContext,
		getSupportedExtensions(): string[],
		enableExtension(extensionName: string): boolean,
		waitForEvents(eventWaitList: WebCLEvent[], whenFinished?: WebCLCallback): void,
		releaseAll(): void
	}

			
}
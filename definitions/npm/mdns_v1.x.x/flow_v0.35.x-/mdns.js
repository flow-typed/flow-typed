

declare module 'mdns' {
					declare module.exports: undefined


}

declare module 'npm$namespace$MDNS' {
		declare interface DnsSdError {
		errorCode?: number
	}

	declare interface AdvertisementOptions {
		name?: string,
		interfaceIndex?: number,
		networkInterface?: string,
		txtRecord?: any,
		host?: any,
		domain?: any,
		flags?: any,
		context?: any
	}

	declare interface AdvertisementCreatable {
		new (
		serviceType: ServiceType, port: number, options?: AdvertisementOptions, callback?: (error: DnsSdError, service: Service) => void
	): Advertisement
	}

	declare interface Advertisement {
		start(): void,
		stop(): void
	}

	declare interface BrowserOptions {
		resolverSequence?: Array<(service: Service, next: () => void) => boolean>,
		interfaceIndex?: number,
		networkInterface?: string,
		domain?: any,
		context?: any,
		flags?: any
	}

	declare interface Browser {
		start(): any,
		stop(): any,
		on(event: string, listener: Function): this,
		on(event: "serviceUp", listener: (info: Service) => void): this,
		on(event: "serviceDown", listener: (info: Service) => void): this
	}

	declare interface BrowserStatic {
		new (serviceType: ServiceType, options?: BrowserOptions): Browser,
		defaultResolverSequence: Array<(service: Service, next: () => void) => boolean>
	}

	declare interface Service {
		addresses: Array<string>,
		flags: number,
		fullname: string,
		host: string,
		interfaceIndex: number,
		name?: string,
		networkInterface: string,
		port: number,
		replyDomain: string,
		type: ServiceType
	}

	declare interface ServiceType {
		new (serviceTypeIdentifier: string): ServiceType,
		new (name: string, protocol: string, ...subtypes: string[]): ServiceType,
		new (serviceTypeIdentifier: Array<string>): ServiceType,
		new (
		serviceTypeIdentifier: {
		name: string,
		protocol: string,
		subtypes?: Array<string>
	}
	): ServiceType,
		new (serviceType: ServiceType): ServiceType,
		fullyQualified: boolean,
		name: string,
		protocol: string,
		subtypes: Array<string>,
		toString(): string,
		fromString(serviceTypeIdentifier: string): ServiceType,
		toArray(): Array<string>,
		fromArray(serviceTypeIdentifier: Array<string>): ServiceType,
		fromJSON(
		serviceTypeIdentifier: {
		name: string,
		protocol: string,
		subtypes?: Array<string>
	}
	): ServiceType,
		fromJSON(serviceType: ServiceType): ServiceType
	}

	declare interface MDNSResolverSequenceTasks {
		
	}

	declare interface DefaultResolverSequenceTasks {
		DNSServiceResolve(options?: {
		flags: any
	}): (service: Service, next: () => void) => boolean,
		DNSServiceGetAddrInfo(options?: any): (service: Service, next: () => void) => boolean,
		getaddrinfo(options?: any): (service: Service, next: () => void) => boolean,
		makeAddressesUnique(): (service: Service, next: () => void) => boolean,
		filterAddresses(
		fn: (address: string, index?: number, addresses?: Array<string>) => boolean
	): void,
		logService(): void
	}

	declare function tcp(name: string, ...subtypes: string[]): ServiceType

	declare function udp(name: string, ...subtypes: string[]): ServiceType

	declare function makeServiceType(name: string, protocol: string, ...subtypes: string[]): ServiceType

	declare function makeServiceType(serviceTypeIdentifier: string): ServiceType

	declare function makeServiceType(serviceTypeIdentifier: Array<string>): ServiceType

	declare function makeServiceType(
		serviceTypeIdentifier: {
		name: string,
		protocol: string,
		subtypes?: Array<string>
	}
	): ServiceType

	declare function makeServiceType(serviceType: ServiceType): ServiceType

	declare function createBrowser(serviceType: ServiceType, options?: BrowserOptions): Browser

	declare function createAdvertisement(
		serviceType: ServiceType, port: number, options?: AdvertisementOptions, callback?: (error: DnsSdError, service: Service) => void
	): Advertisement

	declare function resolve(
		service: Service, sequence?: Array<(service: Service, next: () => void) => boolean>, callback?: (error: DnsSdError, service: Service) => void
	): void

	declare function browseThemAll(options: BrowserOptions): Browser

	declare function loopbackInterface(): any

		
}
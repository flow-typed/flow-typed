

declare module 'bonjour' {
		declare export interface BonjourOptions {
		multicast?: boolean,
		interface?: string,
		port?: number,
		ip?: string,
		ttl?: number,
		loopback?: boolean,
		reuseAddr?: boolean
	}

	declare export interface BrowserOptions {
		type?: string,
		subtypes?: string[],
		protocol?: string,
		txt?: Object
	}

	declare export interface ServiceOptions {
		name: string,
		host?: string,
		port: number,
		type: string,
		subtypes?: string[],
		protocol?: "udp" | "tcp",
		txt?: Object
	}

	declare export interface Service {
		name: string,
		type: string,
		subtypes: string[],
		protocol: string,
		host: string,
		port: number,
		fqdn: string,
		rawTxt: Object,
		txt: Object,
		published: boolean,
		stop: (cb: () => any) => void,
		start: () => void
	}

	declare export function find(options: BrowserOptions, onUp?: () => any): Browser

	declare export function findOne(options: BrowserOptions): Browser

	declare export class Bonjour  {
		constructor(opts: BonjourOptions): this;
		publish(options: ServiceOptions): Service;
		unpublishAll(cb: () => any): void;
		find(options: BrowserOptions, onUp: () => any): Browser;
		findOne(options: any, cb: (service: Service) => any): Browser;
		destroy(): void
	}

	declare export class Browser  {
		services: Service[];
		start(): void;
		update(): void;
		stop(): void
	}

	
}
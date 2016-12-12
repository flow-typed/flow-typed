

declare module 'xdomain' {
		declare interface XDomainCookies {
		master: string,
		slave: string
	}

	declare interface IXDomain {
		slaves(slaveObj: Object): void,
		masters(masterObj: Object): void,
		origin: string,
		debug: boolean,
		on(event: "log" | "warn" | "timeout", handler: (message?: string) => any): void,
		cookies: XDomainCookies
	}

			
}
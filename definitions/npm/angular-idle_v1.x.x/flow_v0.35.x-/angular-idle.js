

declare module 'angular-idle' {
					
}

declare module 'idle' {
		declare interface ITitleProvider {
		enabled(enabled: boolean): void
	}

	declare interface ITitleService {
		setEnabled(enabled: boolean): void,
		isEnabled(): boolean,
		original(val: string): void,
		original(): string,
		value(val: string): void,
		value(): string,
		store(overwrite?: boolean): void,
		restore(): void,
		idleMessage(val: string): void,
		idleMessage(): string,
		timedOutMessage(val: string): void,
		timedOutMessage(): string,
		setAsIdle(countdown: number): void,
		setAsTimedOut(): void
	}

	declare interface IKeepAliveProvider {
		http(value: string | IRequestConfig): void,
		interval(seconds: number): void
	}

	declare interface IKeepAliveService {
		start(): void,
		stop(): void,
		ping(): void,
		setInterval(seconds: number): void
	}

	declare interface IIdleProvider {
		interrupt(events: string): void,
		idle(seconds: number): void,
		timeout(seconds: number): void,
		autoResume(enabled: boolean | string): void,
		keepalive(enabled: boolean): void
	}

	declare interface IIdleService {
		getIdle(): number,
		getTimeout(): number,
		setIdle(idle: number): void,
		setTimeout(timeout: number): void,
		isExpired(): boolean,
		running(): boolean,
		idling(): boolean,
		watch(): void,
		unwatch(): void,
		interrupt(): any
	}

			
}


declare module 'vortex-web-client' {
					
}

declare module 'npm$namespace$DDS' {
		declare interface Policy {
		
	}

	declare interface EntityQos {
		new (...policies: Policy[]): EntityQos,
		add(policy: Policy): EntityQos
	}

	declare interface Runtime {
		new (): Runtime,
		connect(server: string, authToken?: string): void,
		disconnect(): void,
		registerTopic(t: Topic): void,
		onconnect(e: any): void,
		ondisconnect(e: any): void,
		close(): void,
		isConnected(): boolean,
		isClosed(): boolean
	}

	declare export function Partition(...policies: string[]): Policy

	declare export function ContentFilter(expr: string): Policy

	declare export function TimeFilter(period: number): Policy

	declare export class History extends Policy {
		KeepAll: any;
		KeepLast: any
	}

	declare export class Reliability extends Policy {
		Reliable: any;
		BestEffort: any
	}

	declare export class Durability extends Policy {
		Volatile: any;
		TransientLocal: any;
		Transient: any;
		Persistent: any
	}

	declare export class Topic  {
		constructor(did: number, tname: string, qos: EntityQos, ttype?: string, tregtype?: string): this;
		onregistered(): void;
		onunregistered(): void
	}

	declare export class DataReader  {
		constructor(runtime: Runtime, topic: Topic, qos: EntityQos): this;
		resetStats(): void;
		addListener(l: (msg: any) => void): number;
		removeListener(idx: number): void;
		close(): void
	}

	declare export class DataWriter  {
		constructor(runtime: Runtime, topic: Topic, qos: EntityQos): this;
		write(...ds: any[]): void;
		close(): void
	}

	declare export class DataCache  {
		constructor(depth: number, cache: any): this;
		addListener(l: (data: any) => void, p?: (data: any) => boolean): void;
		write(k: any, data: any): any;
		forEachN(f: (data: any) => any, n: number): any[];
		forEach(f: (data: any) => any): any[];
		map(f: (data: any) => any): DataCache;
		filter(f: (data: any) => boolean): any[];
		filterNot(f: (data: any) => boolean): any[];
		read(): any[];
		readLast(): any;
		takeAll(): any[];
		take(): any;
		takeWithFilter(f: (data: any) => boolean): any[];
		get(k: any): any;
		getOrElse(k: any, f: (data: any) => any): any;
		fold(z: any, f: (data: any) => any): void;
		clear(): void
	}

	
}
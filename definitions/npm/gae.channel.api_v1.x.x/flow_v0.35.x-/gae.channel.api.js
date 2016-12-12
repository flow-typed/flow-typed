

declare module 'gae.channel.api' {
					
}

declare module 'appengine' {
				declare export class Channel  {
		constructor(token: string): this;
		open(handler?: Function): Socket
	}

	declare export class Socket  {
		close(): void;
		onopen: () => void;
		onmessage: (message: any) => void;
		onerror: Function;
		onclose: () => void
	}

	
}
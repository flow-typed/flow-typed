

declare module 'XSockets' {
					
}

declare module 'npm$namespace$XSockets' {
		declare export interface ConfirmationArgument {
		event: string
	}

		declare export class WebSocket  {
		id: string;
		constructor(url: string, subprotocol?: string, settings?: any): this;
		on(
		event: string, handler: (data: any) => void, confirmation?: (arg: ConfirmationArgument) => void
	): void;
		one(
		event: string, handler: (data: any) => void, confirmation?: (arg: ConfirmationArgument) => void
	): void;
		many(
		event: string, times: number, handler: (data: any) => void, confirmation?: (arg: ConfirmationArgument) => void
	): void;
		unbind(event: string): void;
		publish(topic: string, data: any): void
	}

	
}
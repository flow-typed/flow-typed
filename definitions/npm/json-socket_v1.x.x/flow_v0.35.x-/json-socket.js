

declare module 'json-socket' {
				declare class JsonSocket extends Socket {
		constructor(socket: Socket): this;
		sendSingleMessage(port: number, host: string, message: any, callback: (err: Error) => void): void;
		sendSingleMessageAndReceive(
		port: number, host: string, message: any, callback: (err: Error, message: any) => void
	): void;
		sendError(err: Error, callback: (err: Error) => void): void;
		sendEndError(err: Error, callback: (err: Error) => void): void;
		sendMessage(message: any, callback: (err: Error) => void): void;
		sendEndMessage(message: any, callback: (err: Error) => void): void
	}

	declare module.exports: undefined


}
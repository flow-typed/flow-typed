

declare module 'steam' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Steam' {
		declare export interface LogonOptions {
		accountName: string,
		password: string,
		shaSentryfile?: string,
		authCode?: string
	}

		declare export class SteamClient extends NodeJS$EventEmitter {
		sessionId: string;
		cookie: string[];
		steamID: string;
		users: {
		
	};
		logOn(options: LogonOptions): void;
		webLogOn(callback: (cookie: any[]) => void): void;
		joinChat(chatId: string): void;
		sendMessage(source: any, message: string, entryType: EChatEntryType): void;
		setPersonaState(state: EPersonaState): void;
		setPersonaName(name: string): void;
		addListener(event: string, listener: Function): this;
		on(event: string, listener: Function): this;
		once(event: string, listener: Function): this;
		removeListener(event: string, listener: Function): this;
		removeAllListeners(event?: string): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		listenerCount(type: string): number
	}

	
}


declare module 'irc' {
					declare module.exports: undefined


}

declare module 'NodeIRC' {
		declare export interface IClientOpts {
		userName?: string,
		password?: string,
		realName?: string,
		port?: number,
		localAddress?: string,
		debug?: boolean,
		showErrors?: boolean,
		autoRejoin?: boolean,
		autoConnect?: boolean,
		channels?: string[],
		secure?: boolean | crypto.Credentials,
		selfSigned?: boolean,
		certExpired?: boolean,
		floodProtection?: boolean,
		floodProtectionDelay?: number,
		sasl?: boolean,
		stripColors?: boolean,
		channelPrefixes?: string,
		messageSplit?: number,
		encoding?: string
	}

	declare export interface IMessage {
		prefix?: string,
		command: string,
		rawCommand: string,
		commandType: CommandType,
		args: string[]
	}

	declare export interface IWhoisData {
		nick: string,
		user: string,
		host: string,
		realname: string,
		channels: string[],
		server: string,
		serverinfo: string,
		operator: string
	}

	declare export interface IChannel {
		name: string,
		users: string,
		topic: string
	}

		declare export class Client extends events$EventEmitter {
		conn: net.Socket;
		chans: {
		[index: string]: {
		key: string,
		serverName: string,
		users: {
		[index: string]: string
	},
		mode: string,
		created: string
	}
	};
		supported: {
		channel: {
		idlength: string[],
		length: number,
		limit: string[],
		modes: {
		[index: string]: string
	},
		types: string
	},
		kicklength: number,
		maxlist: number[],
		maxtargets: string[],
		modes: number,
		nicklength: number,
		topiclength: number,
		usermodes: string
	};
		nick: string;
		channellist: IChannel[];
		motd: string;
		maxLineLength: number;
		opt: IClientOpts;
		hostMask: string;
		constructor(server: string, nick: string, opts?: IClientOpts): this;
		send(command: string, ...args: string[]): void;
		join(channel: string, callback?: handlers.IJoinChannel): void;
		part(channel: string, message: string, callback: handlers.IPartChannel): void;
		say(target: string, message: string): void;
		ctcp(target: string, type: string, text: string): void;
		action(target: string, message: string): void;
		notice(target: string, message: string): void;
		whois(nick: string, callback: handlers.IWhois): void;
		list(...args: string[]): void;
		connect(retryCount?: number | handlers.IRaw, callback?: handlers.IRaw): void;
		disconnect(message: string, callback: () => void): void;
		activateFloodProtection(interval: number): void
	}

	
}

declare module 'handlers' {
		declare export interface IRegistered {
		(message: IMessage): void
	}

	declare export interface IMotd {
		(motd: string): void
	}

	declare export interface INames {
		(channel: string, nicks: string[]): void
	}

	declare export interface INamesChannel {
		(nicks: string[]): void
	}

	declare export interface ITopic {
		(channel: string, topic: string, nick: string, message: IMessage): void
	}

	declare export interface IJoin {
		(channel: string, nick: string, message: IMessage): void
	}

	declare export interface IJoinChannel {
		(nick: string, message: IMessage): void
	}

	declare export interface IPart {
		(channel: string, nick: string, reason: string, message: IMessage): void
	}

	declare export interface IPartChannel {
		(nick: string, reason: string, message: IMessage): void
	}

	declare export interface IKick {
		(channel: string, nick: string, by: string, reason: string, message: IMessage): void
	}

	declare export interface IKickChannel {
		(nick: string, by: string, reason: string, message: IMessage): void
	}

	declare export interface IRecievedMessage {
		(nick: string, to: string, text: string, message: IMessage): void
	}

	declare export interface IMessageAllChannels {
		(nick: string, to: string, text: string, message: IMessage): void
	}

	declare export interface IMessageChannel {
		(nick: string, text: string, message: IMessage): void
	}

	declare export interface ISelfMessage {
		(to: string, text: string): void
	}

	declare export interface INotice {
		(nick: string, to: string, text: string, message: IMessage): void
	}

	declare export interface IPing {
		(server: string): void
	}

	declare export interface IPm {
		(nick: string, text: string, message: IMessage): void
	}

	declare export interface ICtcp {
		(from: string, to: string, text: string, type: string, message: IMessage): void
	}

	declare export interface ICtcpSpecific {
		(from: string, to: string, text: string, message: IMessage): void,
		(from: string, to: string, text: string, type: string, message: IMessage): void
	}

	declare export interface INick {
		(oldnick: string, newnick: string, channels: string[], message: IMessage): void
	}

	declare export interface IInvite {
		(channel: string, from: string, message: IMessage): void
	}

	declare export interface IModeChange {
		(channel: string, by: string, mode: string, argument: string, message: IMessage): void
	}

	declare export interface IWhois {
		(info: IWhoisData): void
	}

	declare export interface IChannelList {
		(list: IChannel[]): void
	}

	declare export interface IRaw {
		(message: IMessage): void
	}

	declare export interface IError {
		(message: IMessage): void
	}

	declare export interface IAction {
		(from: string, to: string, text: string, message: IMessage): void
	}

			
}

declare module 'colors' {
			declare export function wrap(color: string, text: string, reset_color?: string): string

		
}
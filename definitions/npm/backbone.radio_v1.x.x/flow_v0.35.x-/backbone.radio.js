

declare module 'backbone.radio' {
					


}

declare module 'npm$namespace$Backbone' {
		declare interface Radio {
		tuneIn(channelName: string): Radio,
		tuneOut(channelName: string): Radio,
		log(channelName: string, eventName: string, ...args: any[]): void,
		channel(channelName: string): Radio.Channel
	}

			
}

declare module 'Radio' {
			declare function log(channelName: string, eventName: string, ...args: any[]): void

	declare function tuneIn(channelName: string): Radio

	declare function tuneOut(channelName: string): Radio

	declare function channel(channelName: string): Channel

	declare function command(channelName: string, commandName: string, ...args: any[]): void

	declare function comply(
		channelName: string, commandName: string, callback: (...args: any[]) => void, context?: any
	): Commands

	declare function comply(
		channelName: string, commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Commands

	declare function complyOnce(
		channelName: string, commandName: string, callback: (...args: any[]) => void, context?: any
	): Commands

	declare function complyOnce(
		channelName: string, commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Commands

	declare function stopComplying(
		channelName: string, commandName?: string, callback?: (...args: any[]) => void, context?: any
	): Commands

	declare function request(channelName: string, requestName: string, ...args: any[]): any

	declare function reply(
		channelName: string, requestName: string, callback: (...args: any[]) => any, context?: any
	): Requests

	declare function reply(
		channelName: string, commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Requests

	declare function replyOnce(
		channelName: string, requestName: string, callback: (...args: any[]) => any, context?: any
	): Requests

	declare function replyOnce(
		channelName: string, commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Requests

	declare function stopReplying(
		channelName: string, commandName?: string, callback?: (...args: any[]) => any, context?: any
	): Requests

	declare function on(
		channelName: string, eventName: string, callback?: Function, context?: any
	): any

	declare function off(
		channelName: string, eventName?: string, callback?: Function, context?: any
	): any

	declare function trigger(channelName: string, eventName: string, ...args: any[]): any

	declare function bind(channelName: string, eventName: string, callback: Function, context?: any): any

	declare function unbind(
		channelName: string, eventName?: string, callback?: Function, context?: any
	): any

	declare function once(channelName: string, events: string, callback: Function, context?: any): any

	declare function listenTo(channelName: string, object: any, events: string, callback: Function): any

	declare function listenToOnce(channelName: string, object: any, events: string, callback: Function): any

	declare function stopListening(channelName: string, object?: any, events?: string, callback?: Function): any

	declare class Commands  {
		command(commandName: string, ...args: any[]): void;
		comply(
		commandName: string, callback: (...args: any[]) => void, context?: any
	): Commands;
		comply(
		commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Commands;
		complyOnce(
		commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Commands;
		complyOnce(
		commandName: string, callback: (...args: any[]) => void, context?: any
	): Commands;
		stopComplying(
		commandName?: string, callback?: (...args: any[]) => void, context?: any
	): Commands
	}

	declare class Requests  {
		request(requestName: string, ...args: any[]): any;
		reply(
		requestName: string, callback: (...args: any[]) => any, context?: any
	): Requests;
		reply(
		commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Requests;
		replyOnce(
		requestName: string, callback: (...args: any[]) => any, context?: any
	): Requests;
		replyOnce(
		commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Requests;
		stopReplying(
		commandName?: string, callback?: (...args: any[]) => any, context?: any
	): Requests
	}

	declare class Channel extends Backbone$Events, Commands {
		channelName: string;
		reset(): Channel;
		command(commandName: string, ...args: any[]): void;
		comply(
		commandName: string, callback: (...args: any[]) => void, context?: any
	): Commands;
		comply(
		commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Commands;
		complyOnce(
		commandName: string, callback: (...args: any[]) => void, context?: any
	): Commands;
		complyOnce(
		commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Commands;
		stopComplying(
		commandName?: string, callback?: (...args: any[]) => void, context?: any
	): Commands;
		request(requestName: string, ...args: any[]): any;
		reply(
		requestName: string, callback: (...args: any[]) => any, context?: any
	): Requests;
		reply(
		commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Requests;
		replyOnce(
		requestName: string, callback: (...args: any[]) => any, context?: any
	): Requests;
		replyOnce(
		commands: {
		[key: string]: (...args: any[]) => any
	}, context?: any
	): Requests;
		stopReplying(
		commandName?: string, callback?: (...args: any[]) => any, context?: any
	): Requests
	}

	
}
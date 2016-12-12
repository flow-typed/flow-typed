

declare module 'node-slack' {
				declare class Slack  {
		constructor(hookUrl: string, option?: Slack.Option): this;
		send(message: Slack.Message): any;
		send(message: Slack.Message, callback: Slack.SendCallback): request.Request;
		respond(query: Slack.Query): Slack.TextResponse;
		respond(query: Slack.Query, callback: Slack.ResponseCallback): Slack.TextResponse
	}

	declare module.exports: undefined


}

declare module 'Slack' {
		declare interface Option {
		proxy: string
	}

	declare interface Message {
		text: string,
		channel?: string,
		username?: string,
		icon_emoji?: string,
		attachments?: any[],
		unfurl_links?: boolean,
		link_names?: number
	}

	declare interface SendCallback {
		(err: any, body: any): any
	}

	declare interface Query {
		token?: string,
		team_id?: string,
		channel_id?: string,
		channel_name?: string,
		timestamp?: number,
		user_id?: string,
		user_name?: string,
		text: string
	}

	declare interface TextResponse {
		text: string
	}

	declare interface ResponseCallback {
		(err: any, query: Query): any
	}

			
}
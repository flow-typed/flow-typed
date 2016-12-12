

declare module 'twitter' {
		declare interface Twitter {
		ready(callback: (twttr: Twitter) => void): void,
		widgets: TwitterWidgets,
		events: TwitterEvents
	}

	declare interface TwitterWidgets {
		load(): void,
		load(element: HTMLElement): void,
		load(elements: HTMLElement[]): void,
		createShareButton(
		url: string, target: HTMLElement, options?: TwitterButtonWidgetOptions
	): Promise<HTMLElement>,
		createFollowButton(
		screen_name: string, target: HTMLElement, options?: TwitterButtonWidgetOptions
	): Promise<HTMLElement>,
		createHashtagButton(
		hashtag: string, target: HTMLElement, options?: TwitterButtonWidgetOptions
	): Promise<HTMLElement>,
		createMentionButton(
		screen_name: string, target: HTMLElement, options?: TwitterButtonWidgetOptions
	): Promise<HTMLElement>,
		createTimeline(
		widgetId: string, target: HTMLElement, options?: TwitterTimelineWidgetOptions
	): Promise<HTMLElement>,
		createTweet(
		tweetId: string, target: HTMLElement, options?: TwitterTweetWidgetOptions
	): Promise<HTMLElement>
	}

	declare interface TwitterWidgetOptions {
		dnt?: boolean,
		hashtags?: string,
		lang?: string,
		related?: string,
		via?: string
	}

	declare interface TwitterButtonWidgetOptions {
		align?: string,
		count?: string,
		counturl?: string,
		size?: string,
		text?: string
	}

	declare interface TwitterTweetWidgetOptions {
		align?: string,
		conversation?: string,
		cards?: string,
		width?: string | number,
		linkColor?: string,
		theme?: string
	}

	declare interface TwitterTimelineWidgetOptions {
		ariaPolite?: string,
		height?: string | number,
		borderColor?: string,
		chrome?: string,
		tweetLimit?: number,
		screenName?: string,
		userId?: string,
		showReplies?: boolean,
		favoritesScreenName?: string,
		favoritesUserId?: string,
		listOwnerScreenName?: string,
		listOwnerId?: string,
		listId?: string,
		listSlug?: string
	}

	declare interface TwitterEvents {
		bind(name: "loaded", callback: (ev: any) => void): void,
		bind(name: "rendered", callback: (ev: any) => void): void,
		bind(name: "tweet", callback: (ev: TwitterIntentEvent) => void): void,
		bind(name: "follow", callback: (ev: TwitterIntentEvent) => void): void,
		bind(name: "retweet", callback: (ev: TwitterIntentEvent) => void): void,
		bind(name: "favorite", callback: (ev: TwitterIntentEvent) => void): void,
		bind(name: "click", callback: (ev: TwitterIntentEvent) => void): void,
		bind(name: string, callback: (ev: any) => void): void
	}

	declare interface TwitterIntentEvent {
		target: HTMLElement,
		region: string,
		data: TwitterIntentEventData,
		type: string
	}

	declare interface TwitterIntentEventData {
		tweet_id?: string,
		source_tweet_id?: string,
		screen_name?: string,
		user_id?: string
	}

			
}
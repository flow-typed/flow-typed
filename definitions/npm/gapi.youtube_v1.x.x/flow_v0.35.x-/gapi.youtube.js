

declare module 'gapi.youtube' {
		declare interface GoogleApiYouTubePageInfo<T> {
		kind: string,
		etag: string,
		items: T[]
	}

	declare interface GoogleApiYouTubePaginationInfo<T> {
		kind: string,
		etag: string,
		pageInfo: {
		totalResults: number,
		resultsPerPage: number
	},
		nextPageToken: string,
		prevPageToken: string,
		items: T[]
	}

	declare interface GoogleApiYouTubeActivityResource {
		kind: string,
		etag: string,
		id: string,
		snippet: {
		publishedAt: string,
		channelId: string,
		title: string,
		description: string,
		thumbnails: GoogleApiYouTubeThumbnailItemResource[],
		channelTitle: string,
		type: string,
		groupId: string
	},
		contentDetails: {
		upload: {
		videoId: string
	},
		like: {
		resourceId: {
		kind: string,
		videoId: string
	}
	},
		favorite: {
		resourceId: {
		kind: string,
		videoId: string
	}
	},
		comment: {
		resourceId: {
		kind: string,
		videoId: string,
		channelId: string
	}
	},
		subscription: {
		resourceId: {
		kind: string,
		channelId: string
	}
	},
		playlistItem: {
		resourceId: {
		kind: string,
		videoId: string
	},
		playlistId: string,
		playlistItemId: string
	},
		recommendation: {
		resourceId: {
		kind: string,
		videoId: string,
		channelId: string
	},
		reason: string,
		seedResourceId: {
		kind: string,
		videoId: string,
		channelId: string,
		playlistId: string
	}
	},
		bulletin: {
		resourceId: {
		kind: string,
		videoId: string,
		channelId: string,
		playlistId: string
	}
	},
		social: {
		type: string,
		resourceId: {
		kind: string,
		videoId: string,
		channelId: string,
		playlistId: string
	},
		author: string,
		referenceUrl: string,
		imageUrl: string
	},
		channelItem: {
		resourceId: {
		
	}
	}
	}
	}

	declare interface GoogleApiYouTubeChannelBannerResource {
		kind: string,
		etag: string,
		url: string
	}

	declare interface GoogleApiYouTubeChannelResource {
		id: string,
		kind: string,
		etag: string,
		snippet: {
		title: string,
		description: string,
		publishedAt: string,
		thumbnails: GoogleApiYouTubeThumbnailItemResource[]
	},
		contentDetails: {
		relatedPlaylists: {
		likes: string,
		favorites: string,
		uploads: string,
		watchHistory: string,
		watchLater: string
	},
		googlePlusUserId: string
	},
		statistics: {
		viewCount: number,
		commentCount: number,
		subscriberCount: number,
		videoCount: number
	},
		topicDetails: {
		topicIds: string[]
	},
		status: {
		privacyStatus: string,
		isLinked: boolean
	},
		brandingSettings: {
		channel: {
		title: string,
		description: string,
		keywords: string,
		defaultTab: string,
		trackingAnalyticsAccountId: string,
		moderateComments: boolean,
		showRelatedChannels: boolean,
		showBrowseView: boolean,
		featuredChannelsTitle: string,
		featuredChannelsUrls: string[],
		unsubscribedTrailer: string
	},
		watch: {
		textColor: string,
		backgroundColor: string,
		featuredPlaylistId: string
	},
		image: {
		bannerImageUrl: string,
		bannerMobileImageUrl: string,
		backgroundImageUrl: {
		default: string,
		localized: {
		value: string,
		language: string
	}[]
	},
		largeBrandedBannerImageImapScript: {
		default: string,
		localized: {
		value: string,
		language: string
	}[]
	},
		largeBrandedBannerImageUrl: {
		default: string,
		localized: {
		value: string,
		language: string
	}[]
	},
		smallBrandedBannerImageImapScript: {
		default: string,
		localized: {
		value: string,
		language: string
	}[]
	},
		smallBrandedBannerImageUrl: {
		default: string,
		localized: {
		value: string,
		language: string
	}[]
	},
		watchIconImageUrl: string,
		trackingImageUrl: string,
		bannerTabletLowImageUrl: string,
		bannerTabletImageUrl: string,
		bannerTabletHdImageUrl: string,
		bannerTabletExtraHdImageUrl: string,
		bannerMobileLowImageUrl: string,
		bannerMobileMediumImageUrl: string,
		bannerMobileHdImageUrl: string,
		bannerMobileExtraHdImageUrl: string,
		bannerTvImageUrl: string,
		bannerExternalUrl: string
	},
		hints: {
		property: string,
		value: string
	}[]
	},
		invideoPromotion: {
		timing: {
		type: string,
		offsetMs: number
	},
		position: {
		type: string,
		cornerPosition: string
	},
		items: {
		type: string,
		videoId: string
	}[]
	}
	}

	declare interface GoogleApiYouTubeGuideCategoryResource {
		id: string,
		kind: string,
		etag: string,
		snippet: {
		channelId: string,
		title: string
	}
	}

	declare interface GoogleApiYouTubePlaylistItemResource {
		id: string,
		kind: string,
		etag: string,
		snippet: {
		publishedAt: string,
		channelId: string,
		title: string,
		description: string,
		thumbnails: GoogleApiYouTubeThumbnailItemResource[],
		channelTitle: string,
		playlistId: string,
		position: number,
		resourceId: {
		kind: string,
		videoId: string
	}
	},
		contentDetails: {
		videoId: string,
		startAt: string,
		endAt: string,
		note: string
	},
		status: {
		privacyStatus: string
	}
	}

	declare interface GoogleApiYouTubePlaylistResource {
		id: string,
		kind: string,
		etag: string,
		snippet: {
		publishedAt: string,
		channelId: string,
		title: string,
		description: string,
		thumbnails: GoogleApiYouTubeThumbnailItemResource[],
		channelTitle: string,
		tags: string[]
	},
		status: {
		privacyStatus: string
	},
		contentDetails: {
		itemCount: number
	},
		player: {
		embedHtml: string
	}
	}

	declare interface GoogleApiYouTubeSearchResource {
		kind: string,
		etag: string,
		id: {
		kind: string,
		videoId: string,
		channelId: string,
		playlistId: string
	},
		snippet: {
		publishedAt: string,
		channelId: string,
		title: string,
		description: string,
		thumbnails: GoogleApiYouTubeThumbnailItemResource[],
		channelTitle: string
	}
	}

	declare interface GoogleApiYouTubeSubscriptionResource {
		id: string,
		etag: string,
		kind: string,
		snippet: {
		publishedAt: string,
		channelTitle: string,
		title: string,
		description: string,
		resourceId: {
		kind: string,
		channelId: string
	},
		channelId: string,
		thumbnails: GoogleApiYouTubeThumbnailItemResource[]
	},
		contentDetails: {
		totalItemCount: number,
		newItemCount: number
	},
		subscriberSnippet: {
		title: string,
		description: string,
		channelId: string,
		thumbnails: GoogleApiYouTubeThumbnailItemResource[]
	}
	}

	declare interface GoogleApiYouTubeThumbnailResource {
		default: GoogleApiYouTubeThumbnailItemResource,
		medium: GoogleApiYouTubeThumbnailItemResource,
		high: GoogleApiYouTubeThumbnailItemResource
	}

	declare interface GoogleApiYouTubeThumbnailItemResource {
		url: string,
		width: number,
		height: number
	}

	declare interface GoogleApiYouTubeVideoCategoryResource {
		id: string,
		kind: string,
		etag: string,
		snippet: {
		channelId: string,
		title: string
	}
	}

	declare interface GoogleApiYouTubeVideoResource {
		id: string,
		kind: string,
		etag: string,
		snippet: {
		publishedAt: string,
		channelId: string,
		title: string,
		description: string,
		thumbnails: GoogleApiYouTubeThumbnailItemResource[],
		channelTitle: string,
		tags: string[],
		categoryId: string
	},
		contentDetails: {
		duration: string,
		dimension: string,
		definition: string,
		caption: string,
		licensedContent: boolean,
		regionRestriction: {
		allowed: string[],
		blocked: string[]
	},
		contentRating: {
		mpaaRating: string,
		tvpgRating: string,
		bbfcRating: string,
		chvrsRating: string,
		eirinRating: string,
		cbfcRating: string,
		fmocRating: string,
		icaaRating: string,
		acbRating: string,
		oflcRating: string,
		fskRating: string,
		kmrbRating: string,
		djctqRating: string,
		russiaRating: string,
		rtcRating: string
	}
	},
		player: {
		embedHtml: string
	},
		statistics: {
		viewCount: number,
		likeCount: number,
		dislikeCount: number,
		favoriteCount: number,
		commentCount: number
	},
		status: {
		uploadStatus: string,
		failureReason: string,
		rejectionReason: string,
		privacyStatus: string,
		license: string,
		embeddable: boolean,
		publicStatsViewable: boolean
	},
		topicDetails: {
		topicIds: string[]
	},
		recordingDetails: {
		location: {
		latitude: number,
		longitude: number,
		elevation: number
	},
		locationDescription: string,
		recordingDate: string
	},
		fileDetails: {
		fileName: string,
		fileSize: number,
		fileType: string,
		container: string,
		videoStreams: {
		widthPixels: number,
		heightPixels: number,
		frameRateFps: number,
		aspectRatio: number,
		codec: string,
		bitrateBps: number,
		rotation: string,
		vender: string
	}[],
		audioStreams: {
		channelCount: number,
		codec: string,
		bitrateBps: number,
		vendor: string
	}[],
		durationMs: number,
		bitrateBps: number,
		recordingLocation: {
		latitude: number,
		longitude: number,
		elevation: number
	},
		creationTime: string
	},
		processingDetails: {
		processingStatus: string,
		processingProgress: {
		partsTotal: number,
		partsProcessed: number,
		timeLeftMs: number
	},
		processingFailureReason: string,
		fileDetailsAvailability: string,
		processingIssuesAvailability: string,
		tagSuggestionsAvailability: string,
		editorSuggestionsAvailability: string,
		thumbnailsAvailability: string
	},
		suggestions: {
		processingErrors: string[],
		processingWarnings: string[],
		processingHints: string[],
		tagSuggestions: {
		tag: string,
		categoryRestricts: string[]
	}[],
		editorSuggestions: string[]
	}
	}

	declare interface GoogleApiYouTubeVideoGetRatingResponse {
		kind: string,
		etag: string,
		items: {
		videoId: string,
		rating: string
	}[]
	}

			
}

declare module 'youtube' {
		declare export interface activities {
		insert(
		object: {
		part: string,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiYouTubeActivityResource>,
		list(
		object: {
		part: string,
		channelId?: string,
		home?: boolean,
		maxResults?: number,
		mine?: boolean,
		pageToken?: string,
		publishedAfter?: string,
		publishedBefore?: string,
		regionCode?: string
	}
	): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeActivityResource>>
	}

	declare export interface channelBanners {
		insert(
		object: {
		onBehalfOfContentOwner: string,
		RequestBody: string
	}
	): HttpRequest<GoogleApiYouTubeChannelBannerResource>
	}

	declare export interface channels {
		list(
		object: {
		part: string,
		categoryId?: string,
		forUsername?: string,
		id?: string,
		managedByMe?: boolean,
		maxResults?: number,
		mine?: boolean,
		mySubscribers?: boolean,
		onBehalfOfContentOwner?: string,
		pageToken?: string
	}
	): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeChannelResource>>,
		update(
		object: {
		part: string,
		onBehalfOfContentOwner?: string,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiYouTubeChannelResource>
	}

	declare export interface guideCategories {
		list(
		object: {
		part: string,
		hl?: string,
		id?: string,
		regionCode?: string
	}
	): HttpRequest<GoogleApiYouTubePageInfo<GoogleApiYouTubeGuideCategoryResource>>
	}

	declare export interface playlistItems {
		delete(object: {
		id: string
	}): HttpRequest<GoogleApiYouTubePlaylistItemResource>,
		insert(
		object: {
		part: string,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiYouTubePlaylistItemResource>,
		list(
		object: {
		part: string,
		id?: string,
		maxResults?: number,
		pageToken?: string,
		playlistId?: string,
		videoId?: string
	}
	): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubePlaylistItemResource>>,
		update(
		object: {
		part: string,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiYouTubePlaylistItemResource>
	}

	declare export interface playlists {
		delete(object: {
		id: string
	}): HttpRequest<GoogleApiYouTubePlaylistResource>,
		insert(
		object: {
		part: string,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiYouTubePlaylistResource>,
		list(
		object: {
		part: string,
		channelId?: string,
		id?: string,
		maxResults?: number,
		mine?: boolean,
		pagetoken: string
	}
	): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubePlaylistResource>>,
		update(
		object: {
		part: string,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiYouTubePlaylistResource>
	}

	declare export interface search {
		list(
		object: {
		part: string,
		channelId?: string,
		channelType?: string,
		forContentOwner?: boolean,
		forMine?: boolean,
		maxResults?: number,
		onBehalfOfContentOwner?: string,
		order?: string,
		pageToken?: string,
		publishedAfter?: string,
		publishedBefore?: string,
		q?: string,
		regionCode?: string,
		relatedToVideoId?: string,
		safeSearch?: string,
		topicId?: string,
		type?: string,
		videoCaption?: string,
		videoCategoryId?: string,
		videoDefinition?: string,
		videoDimension?: string,
		videoDuration?: string,
		videoEmbeddable?: string,
		videoLicense?: string,
		videoSyndicated?: string,
		videoType?: string
	}
	): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeSearchResource>>
	}

	declare export interface subscriptions {
		delete(object: {
		id: string
	}): HttpRequest<GoogleApiYouTubeSubscriptionResource>,
		insert(
		object: {
		part: string,
		RequestBody: string
	}
	): HttpRequest<GoogleApiYouTubeSubscriptionResource>,
		list(
		object: {
		part: string,
		channelId?: string,
		forChannelId?: string,
		id?: string,
		maxResults?: number,
		mine?: boolean,
		mySubscripbers?: boolean,
		order?: string,
		pageToken?: string
	}
	): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeSubscriptionResource>>
	}

	declare export interface thumbnails {
		set(
		object: {
		videoId: string
	}
	): HttpRequest<GoogleApiYouTubePageInfo<GoogleApiYouTubeThumbnailResource>>
	}

	declare export interface videoCategories {
		list(
		object: {
		part: string,
		hl?: string,
		id?: string,
		regionCode?: string
	}
	): HttpRequest<GoogleApiYouTubePageInfo<GoogleApiYouTubeVideoCategoryResource>>
	}

	declare export interface videos {
		delete(
		object: {
		id: string,
		onBehalfOfContentOwner?: string
	}
	): HttpRequest<GoogleApiYouTubeVideoResource>,
		getRating(
		object: {
		id: string,
		onBehalfOfContentOwner?: string
	}
	): HttpRequest<GoogleApiYouTubeVideoGetRatingResponse>,
		insert(
		object: {
		part: string,
		autoLevels?: boolean,
		onBehalfOfContentOwner?: string,
		onBehalfOfContentOwnerChannel?: string,
		stabilize?: boolean,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiYouTubeVideoResource>,
		list(
		object: {
		part: string,
		chart: string,
		id: string,
		locale: string,
		maxResults: number,
		myRating: string,
		onBehalfOfContentOwner: string,
		pageToken: string,
		videoCategoryId: string
	}
	): HttpRequest<GoogleApiYouTubePaginationInfo<GoogleApiYouTubeVideoResource>>,
		rate(
		object: {
		id: string,
		rating: string,
		onBehalfOfContentOwner?: string
	}
	): HttpRequest<any>,
		update(
		object: {
		part: string,
		onBehalfOfContentOwner?: string,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiYouTubeVideoResource>
	}

			
}
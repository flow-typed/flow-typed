

declare module 'tinder' {
		declare interface Callback<T> {
		(error: any, data: T): any
	}

	declare interface TinderUpdates {
		matches: any[],
		blocks: any[],
		matchmaker: any[],
		lists: any[],
		deleted_lists: any[],
		liked_messages: TinderMessage[],
		squads: any[],
		last_activity_date: string
	}

	declare interface TinderRecommendationsResult {
		message?: string,
		status: Number,
		results: TinderRecommendation[]
	}

	declare interface TinderRecommendation {
		distance_mi: Number,
		common_connections: any[],
		common_likes: any[],
		common_interests: any[],
		uncommon_interests: any[],
		common_friends: any[],
		_id: string,
		badges: any[],
		bio: string,
		birth_date: string,
		gender: number,
		name: string,
		ping_time: string,
		photos: TinderPhoto[],
		jobs: any[],
		schools: any[],
		teaser: {
		string: string
	},
		birth_date_info: string
	}

	declare interface TinderHistory {
		matches: TinderMatch[],
		blocks: string[],
		lists: any[],
		deleted_lists: any[],
		liked_messages: TinderLikedMessage[],
		squads: any[],
		last_activity_date: string
	}

	declare interface TinderLikedMessage {
		message_id: string,
		updated_at: string,
		liker_id: string,
		match_id: string,
		is_liked: Boolean
	}

	declare interface TinderMatch {
		_id: string,
		closed: Boolean,
		common_friend_count: number,
		common_like_count: number,
		created_date: string,
		dead: Boolean,
		last_activity_date: string,
		message_count: number,
		messages: TinderMessage[],
		muted: Boolean,
		participants: string[],
		pending: Boolean,
		is_super_like: Boolean,
		following: Boolean,
		following_moments: Boolean,
		id: string,
		person: TinderPerson
	}

	declare interface TinderPerson {
		_id: string,
		bio: string,
		birth_date: string,
		gender: number,
		name: string,
		ping_time: string,
		user_number: number,
		photos: TinderPhoto[],
		badges: any[]
	}

	declare interface TinderPhoto {
		url: string,
		processedFiles: TinderPhotoProcessedFile[],
		extension: string,
		fileName: string,
		xoffset_percent: number,
		ydistance_percent: number,
		main: Boolean,
		xdistance_percent: number,
		id: string,
		yoffset_percent: number
	}

	declare interface TinderPhotoProcessedFile {
		url: string,
		height: number,
		width: number
	}

	declare interface TinderMessage {
		_id: string,
		match_id: string,
		to: string,
		from: string,
		message: string,
		sent_date: string,
		created_date: string,
		timestamp: number
	}

		declare class TinderClient  {
		constructor(): this;
		authorize(fbToken: string, fbId: string, callback: Callback<any>): void;
		isAuthorized(): Boolean;
		getAuthToken(): string;
		setAuthToken(xAuthToken: string): void;
		getDefaults(): any;
		userId: string;
		getRecommendations(limit: number, callback: Callback<TinderRecommendationsResult>): void;
		sendMessage(matchId: string, message: string, callback: Callback<any>): void;
		like(userId: string, callback: Callback<any>): void;
		superLike(userId: string, callback: Callback<any>): void;
		pass(userId: string, callback: Callback<any>): void;
		unmatch(matchId: string, callback: Callback<any>): void;
		getUpdates(callback: Callback<TinderUpdates>): void;
		getHistory(callback: Callback<TinderHistory>): void;
		updatePosition(longitude: Number, latitude: Number, callback: Callback<any>): void;
		getAccount(callback: Callback<any>): void;
		updatePreferences(
		discovery: Boolean, ageMin: number, ageMax: number, gender: number, distance: number, callback: Callback<any>
	): void;
		uploadPicture(file: fs.ReadStream, callback: Callback<any>): void;
		uploadFBPicture(
		pictureId: string, xdistance_percent: number, ydistance_percent: number, xoffset_percent: number, yoffset_percent: number, callback: Callback<any>
	): void;
		deletePicture(pictureId: string, callback: Callback<any>): void;
		getProfile(callback: Callback<any>): void;
		updateGender(gender: number, callback: Callback<any>): void;
		updateBio(bio: string, callback: Callback<any>): void;
		updateJob(id: String, callback: Callback<any>): void;
		deleteJob(callback: Callback<any>): void;
		updateSchool(id: String, callback: Callback<any>): void;
		deleteSchool(callback: Callback<any>): void;
		deleteAccount(callback: Callback<any>): void;
		getUser(userId: string, callback: Callback<any>): void;
		getShareLink(userId: string, callback: Callback<any>): void;
		report(
		userId: string, causeId: Number, causeText: string, callback: Callback<any>
	): void;
		createUsername(username: string, callback: Callback<any>): void;
		changeUsername(username: string, callback: Callback<any>): void;
		deleteUsername(username: string, callback: Callback<any>): void;
		updatePassport(latitude: string, longitude: string, callback: Callback<any>): void;
		resetPassport(callback: Callback<any>): void
	}

	
}
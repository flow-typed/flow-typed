

declare module 'kii-cloud-sdk' {
					
}

declare module 'npm$namespace$KiiCloud' {
	declare type KiiSocialConnectOptions = {
		access_token: string,
		openID?: string
	} | {
		oauth_token: string,
		oauth_token_secret: string
	};

	declare type KiiACLSubject = KiiGroup | KiiUser | KiiAnyAuthenticatedUser | KiiAnonymousUser | KiiThing;

	declare interface KiiSocialAccountInfo {
		createdAt: number,
		provider: KiiSocialNetworkName,
		socialAccountId: string
	}

	declare interface KiiThingFields {
		_vendorThingID: string,
		_password: string,
		_thingType?: string,
		_vendor?: string,
		_firmwareVersion?: string,
		_lot?: string,
		_productName?: string,
		_stringField1?: string,
		_stringField2?: string,
		_stringField3?: string,
		_stringField4?: string,
		_stringField5?: string,
		_numberField1?: number,
		_numberField2?: number,
		_numberField3?: number,
		_numberField4?: number,
		_numberField5?: number,
		[name: string]: any
	}

	declare interface APNSAlert {
		title: string,
		body: string,
		title-loc-key: string,
		title-loc-args: string[],
		action-loc-key: string,
		loc-key: string,
		loc-args: string[],
		launch-image: string
	}

	declare interface identityData {
		emailAddress?: string,
		phoneNumber?: string,
		username?: string
	}

	declare interface KiiAccessTokenObject {
		access_token: string,
		expires_at: Date
	}

	declare interface KiiGcmInstallationResponse {
		installationID: string
	}

	declare interface KiiMqttInstallationResponse {
		installationID: string,
		installationRegistrationID: string
	}

	declare interface KiiMqttEndpoint {
		installationID: string,
		username: string,
		password: string,
		mqttTopic: string,
		host: string,
		X-MQTT-TTL: number,
		portTCP: number,
		portSSL: number,
		portWS: number,
		portWSS: number
	}

		declare export class Kii  {
		getBuildNumber(): string;
		getSDKVersion(): string;
		getAppID(): string;
		getAppKey(): string;
		setAccessTokenExpiration(expiresIn: number): void;
		getAccessTokenExpiration(): number;
		initializeWithSite(appID: string, appKey: string, site: KiiSite, analyticsOption?: any): void;
		initialize(appID: string, appKey: string, analyticsOption?: any): void;
		bucketWithName(bucketName: string): KiiBucket;
		encryptedBucketWithName(bucketName: string): KiiBucket;
		groupWithName(groupName: string): KiiGroup;
		groupWithNameAndMembers(groupName: string, members: KiiUser[]): KiiGroup;
		authenticateAsAppAdmin(
		clientId: string, clientSecret: string, callbacks?: {
		success(adminContext: KiiAppAdminContext): any,
		failure(error: string, statusCode: number): any
	}
	): Promise<KiiAppAdminContext>;
		serverCodeEntry(entryName: string): KiiServerCodeEntry;
		serverCodeEntryWithVersion(entryName: string, version: string): KiiServerCodeEntry;
		topicWithName(topicName: string): KiiTopic;
		listTopics(
		callbacks?: {
		success(topicList: KiiTopic[], nextPaginationKey: string): any,
		failure(anErrorString: string): any
	}, paginationKey?: string
	): Promise<[KiiTopic[], string]>;
		authenticateAsThing(
		vendorThingID: string, password: string, callbacks?: {
		success(thingAuthContext: KiiThingContext): any,
		failure(error: Error): any
	}
	): Promise<KiiThingContext>;
		authenticateAsThingWithToken(
		thingID: string, token: string, callbacks?: {
		success(thingContext: KiiThingContext): any,
		failure(error: Error): any
	}
	): Promise<KiiThingContext>
	}

	declare export class KiiACL  {
		listACLEntries(
		callbacks?: {
		success(theACL: KiiACL, theEntries: KiiACLEntry[]): any,
		failure(theACL: KiiACL, anErrorString: string): any
	}
	): Promise<[KiiACL, KiiACLEntry[]]>;
		putACLEntry(entry: KiiACLEntry): void;
		removeACLEntry(entry: KiiACLEntry): void;
		save(
		callbacks?: {
		success(theSavedACL: KiiACL): any,
		failure(theACL: KiiACL, anErrorString: string): any
	}
	): Promise<KiiACL>
	}

	declare export class KiiACLEntry  {
		setAction(value: KiiACLAction): void;
		getAction(): KiiACLAction;
		setSubject(subject: KiiACLSubject): void;
		getSubject<T>(): T;
		setGrant(value: boolean): void;
		getGrant(): boolean;
		entryWithSubject(Subject: KiiACLSubject, action: KiiACLAction): KiiACLEntry
	}

	declare export class KiiAnalytics  {
		getAppID(): string;
		getAppKey(): string;
		getDeviceId(): string;
		isLogging(): boolean;
		setLogging(True: boolean): void;
		initializeWithSite(appID: string, appKey: string, site: KiiAnalyticsSite, deviceid: string): void;
		initialize(appID: string, appKey: string, deviceid: string): void;
		logger(message: string): void;
		trackEvent(eventName: string): Promise<void>;
		trackEventWithExtras(eventName: string, extras: any): Promise<void>;
		trackEventWithExtrasAndCallbacks(
		eventName: string, extras: any, callbacks?: {
		success(): any,
		failure(error: Error): any
	}
	): Promise<void>;
		setBaseURL(url: string): void;
		getSDKVersion(): string
	}

	declare export class KiiAnonymousUser  {
		getID(): string
	}

	declare export class KiiAnyAuthenticatedUser  {
		getID(): string
	}

	declare export class KiiAppAdminContext  {
		bucketWithName(bucketName: string): KiiBucket;
		encryptedBucketWithName(bucketName: string): KiiBucket;
		groupWithName(group: string): KiiGroup;
		userWithID(user: string): KiiUser;
		objectWithURI(object: string): KiiObject;
		groupWithID(group: string): KiiGroup;
		registerGroupWithOwnerAndID(
		groupID: string, groupName: string, user: string, members: KiiUser[], callbacks?: {
		success(adminContext: KiiAppAdminContext): any,
		failure(
		theGroup: KiiGroup, anErrorString: string, addMembersArray: KiiUser[], removeMembersArray: KiiUser[]
	): any
	}
	): Promise<KiiAppAdminContext>;
		groupWithURI(group: string): KiiGroup;
		findUserByEmail(
		email: string, callbacks?: {
		success(adminContext: KiiAppAdminContext, theMatchedUser: KiiUser): any,
		failure(adminContext: KiiAppAdminContext, anErrorString: string): any
	}
	): Promise<[KiiAppAdminContext, KiiUser]>;
		findUserByPhone(
		phone: string, callbacks?: {
		success(adminContext: KiiAppAdminContext, theMatchedUser: KiiUser): any,
		failure(adminContext: KiiAppAdminContext, anErrorString: string): any
	}
	): Promise<[KiiAppAdminContext, KiiUser]>;
		findUserByUsername(
		username: string, callbacks?: {
		success(adminContext: KiiAppAdminContext, theMatchedUser: KiiUser): any,
		failure(adminContext: KiiAppAdminContext, anErrorString: string): any
	}
	): Promise<[KiiAppAdminContext, KiiUser]>;
		registerThing(
		fields: KiiThingFields, callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		thingWithID(thing: string): KiiThing;
		registerOwnerWithThingID<T>(
		thingID: string, owner: T, callbacks?: {
		success(group: T): any,
		failure(error: Error): any
	}
	): Promise<T>;
		registerOwnerWithVendorThingID<T>(
		vendorThingID: string, owner: T, callbacks?: {
		success(group: T): any,
		failure(error: Error): any
	}
	): Promise<T>;
		loadThingWithVendorThingID(
		vendorThingID: string, callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		loadThingWithThingID(
		thingID: string, callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		topicWithName(topicName: string): KiiTopic;
		listTopics(
		callbacks?: {
		success(topicList: KiiTopic[], nextPaginationKey: string): any,
		failure(anErrorString: string): any
	}, paginationKey?: string
	): Promise<[KiiTopic[], string]>
	}

	declare export class KiiBucket  {
		getBucketName(): string;
		createObject(): KiiObject;
		createObjectWithType(type: string): KiiObject;
		createObjectWithID(objectID: string): KiiObject;
		acl(): KiiACL;
		executeQuery<T>(
		query: KiiQuery, callbacks?: {
		success(queryPerformed: KiiQuery, resultSet: T[], nextQuery: KiiQuery): any,
		failure(bucket: KiiBucket, anErrorString: string): any
	}
	): Promise<[KiiQuery, T[], KiiQuery]>;
		countWithQuery(
		query: KiiQuery, callbacks?: {
		success(bucket: KiiBucket, query: KiiQuery, count: number): any,
		failure(bucket: KiiBucket, errorString: string): any
	}
	): Promise<[KiiBucket, KiiQuery, number]>;
		count(
		callbacks?: {
		success(bucket: KiiBucket, query: KiiQuery, count: number): any,
		failure(bucket: KiiBucket, errorString: string): any
	}
	): Promise<[KiiBucket, KiiQuery, number]>;
		delete(
		callbacks?: {
		success(deletedBucket: KiiBucket): any,
		failure(bucketToDelete: KiiBucket, anErrorString: string): any
	}
	): Promise<KiiBucket>
	}

	declare export class KiiClause  {
		and(...A: KiiClause[]): KiiClause;
		or(...A: KiiClause[]): KiiClause;
		equals(key: string, value: any): KiiClause;
		notEquals(key: string, value: any): KiiClause;
		greaterThan(key: string, value: any): KiiClause;
		greaterThanOrEqual(key: string, value: any): KiiClause;
		lessThan(key: string, value: any): KiiClause;
		lessThanOrEqual(key: string, value: any): KiiClause;
		inClause(key: string, values: any[]): KiiClause;
		startsWith(key: string, value: any): KiiClause;
		geoDistance(
		key: string, center: KiiGeoPoint, radius: number, putDistanceInto: string
	): KiiClause;
		geoBox(key: string, northEast: KiiGeoPoint, southWest: KiiGeoPoint): KiiClause
	}

	declare export class KiiGeoPoint  {
		getLatitude(): number;
		getLongitude(): number;
		geoPoint(latitude: number, longitude: number): KiiGeoPoint
	}

	declare export class KiiGroup  {
		getUUID(): string;
		getID(): string;
		getName(): string;
		getCachedOwner(): KiiUser;
		objectURI(): string;
		registerGroupWithID(
		groupID: string, groupName: string, members: KiiUser[], callbacks?: {
		success(theSavedGroup: KiiGroup): any,
		failure(
		theGroup: KiiGroup, anErrorString: string, addMembersArray: KiiUser[], removeMembersArray: KiiUser[]
	): any
	}
	): Promise<KiiGroup>;
		bucketWithName(bucketName: string): KiiBucket;
		encryptedBucketWithName(bucketName: string): KiiBucket;
		addUser(member: KiiUser): void;
		removeUser(member: KiiUser): void;
		getMemberList(
		callbacks?: {
		success(theGroup: KiiGroup, memberList: KiiUser[]): any,
		failure(theGroup: KiiGroup, anErrorString: string): any
	}
	): Promise<[KiiGroup, KiiUser[]]>;
		changeGroupName(
		newName: string, callbacks?: {
		success(theRenamedGroup: KiiGroup): any,
		failure(theGroup: KiiGroup, anErrorString: string): any
	}
	): Promise<KiiGroup>;
		save(
		callbacks?: {
		success(theSavedGroup: KiiGroup): any,
		failure(
		theGroup: KiiGroup, anErrorString: string, addMembersArray: KiiUser[], removeMembersArray: KiiUser[]
	): any
	}
	): Promise<KiiGroup>;
		saveWithOwner(
		user: string, callbacks?: {
		success(theSavedGroup: KiiGroup): any,
		failure(
		theGroup: KiiGroup, anErrorString: string, addMembersArray: KiiUser[], removeMembersArray: KiiUser[]
	): any
	}
	): Promise<KiiGroup>;
		refresh(
		callbacks?: {
		success(theRefreshedGroup: KiiGroup): any,
		failure(theGroup: KiiGroup, anErrorString: string): any
	}
	): Promise<KiiGroup>;
		delete(
		callbacks?: {
		success(theDeletedGroup: KiiGroup): any,
		failure(theGroup: KiiGroup, anErrorString: string): any
	}
	): Promise<KiiGroup>;
		getOwner(
		callbacks?: {
		success(theGroup: KiiGroup, theOwner: KiiUser): any,
		failure(theGroup: KiiGroup, anErrorString: string): any
	}
	): Promise<[KiiGroup, KiiUser]>;
		groupWithName(groupName: string): KiiGroup;
		groupWithNameAndMembers(groupName: string, members: KiiUser[]): KiiGroup;
		groupWithID(groupId: string): KiiGroup;
		groupWithURI(uri: string): KiiGroup;
		topicWithName(topicName: string): KiiTopic;
		listTopics(
		callbacks?: {
		success(topicList: KiiTopic[], nextPaginationKey: string): any,
		failure(anErrorString: string): any
	}, paginationKey?: string
	): Promise<[KiiTopic[], string]>
	}

	declare export class KiiObject  {
		getUUID(): string;
		getID(): string;
		getCreated(): number;
		getModified(): string;
		getObjectType(): string;
		getBodyContentType(): string;
		set(key: string, value: any): void;
		get<T>(key: string): T;
		setGeoPoint(key: string, KiiGeoPoint: KiiGeoPoint): void;
		getGeoPoint(key: string): KiiGeoPoint;
		objectACL(): KiiACL;
		objectURI(): string;
		saveAllFields(
		callbacks?: {
		success(theSavedObject: KiiObject): any,
		failure(theObject: KiiObject, anErrorString: string): any
	}, overwrite?: boolean
	): Promise<KiiObject>;
		save(
		callbacks?: {
		success(theSavedObject: KiiObject): any,
		failure(theObject: KiiObject, anErrorString: string): any
	}, overwrite?: boolean
	): Promise<KiiObject>;
		refresh(
		callbacks?: {
		success(theRefreshedObject: KiiObject): any,
		failure(theObject: KiiObject, anErrorString: string): any
	}
	): Promise<KiiObject>;
		delete(
		callbacks?: {
		success(theDeletedObject: KiiObject): any,
		failure(theObject: KiiObject, anErrorString: string): any
	}
	): Promise<KiiObject>;
		objectWithURI(uri: string): KiiObject;
		moveBody(
		targetObjectUri: string, callbacks?: {
		success(theSrcObject: KiiObject, theTgtObjectUri: string): any,
		failure(theSrcObject: KiiObject, theTgtObjectUri: string, anErrorString: string): any
	}
	): Promise<[KiiObject, string]>;
		uploadBody(
		srcDataBlob: Blob, callbacks?: {
		success(obj: KiiObject): any,
		failure(obj: KiiObject, anErrorString: string): any
	}
	): Promise<KiiObject>;
		downloadBody(
		callbacks?: {
		success(obj: KiiObject, bodyBlob: Blob): any,
		failure(obj: KiiObject, anErrorString: string): any
	}
	): Promise<[KiiObject, Blob]>;
		publishBody(
		callbacks?: {
		success(obj: KiiObject, publishedUrl: string): any,
		failure(obj: KiiObject, anErrorString: string): any
	}
	): Promise<[KiiObject, string]>;
		publishBodyExpiresAt(
		expiresAt: Date, callbacks?: {
		success(obj: KiiObject, publishedUrl: string): any,
		failure(obj: KiiObject, anErrorString: string): any
	}
	): Promise<[KiiObject, string]>;
		publishBodyExpiresIn(
		expiresIn: number, callbacks?: {
		success(obj: KiiObject, publishedUrl: string): any,
		failure(obj: KiiObject, anErrorString: string): any
	}
	): Promise<[KiiObject, string]>;
		deleteBody(
		callbacks?: {
		success(theDeletedObject: KiiObject): any,
		failure(obj: KiiObject, anErrorString: string): any
	}
	): Promise<KiiObject>;
		isValidObjectID(objectID: string): boolean
	}

	declare export class KiiPushInstallation  {
		installGcm(
		installationRegistrationID: string, development: boolean, callbacks?: {
		success(response: KiiGcmInstallationResponse): any,
		failure(error: Error): any
	}
	): Promise<KiiGcmInstallationResponse>;
		installMqtt(
		development: boolean, callbacks?: {
		success(response: KiiMqttInstallationResponse): any,
		failure(error: Error): any
	}
	): Promise<KiiMqttInstallationResponse>;
		getMqttEndpoint(
		installationID: string, callbacks?: {
		success(response: KiiMqttEndpoint): any,
		failure(error: Error): any
	}
	): Promise<KiiMqttEndpoint>;
		uninstall(
		installationRegistrationID: string, deviceType: string, callbacks?: {
		success(): any,
		failure(error: Error): any
	}
	): Promise<void>;
		uninstallByInstallationID(
		installationID: string, callbacks?: {
		success(): any,
		failure(error: Error): any
	}
	): Promise<void>
	}

	declare export class KiiPushMessageBuilder  {
		constructor(data: any): this;
		build(): any;
		setSendToDevelopment(flag: boolean): KiiPushMessageBuilder;
		setSendToProduction(flag: boolean): KiiPushMessageBuilder;
		enableGcm(enable: boolean): KiiPushMessageBuilder;
		enableApns(enable: boolean): KiiPushMessageBuilder;
		enableJpush(enable: boolean): KiiPushMessageBuilder;
		enableMqtt(enable: boolean): KiiPushMessageBuilder;
		gcmData(data: {
		[key: string]: string
	}): KiiPushMessageBuilder;
		gcmCollapseKey(collapseKey: string): KiiPushMessageBuilder;
		gcmDelayWhileIdle(delayWhileIdle: boolean): KiiPushMessageBuilder;
		gcmTimeToLive(timeToLive: number): KiiPushMessageBuilder;
		gcmRestrictedPackageName(restrictedPackageName: string): KiiPushMessageBuilder;
		apnsData(data: {
		[key: string]: string | number | boolean
	}): KiiPushMessageBuilder;
		apnsAlert(alert: string | APNSAlert): KiiPushMessageBuilder;
		apnsSound(sound: string): KiiPushMessageBuilder;
		apnsBadge(badge: number): KiiPushMessageBuilder;
		apnsContentAvailable(contentAvailable: number): KiiPushMessageBuilder;
		apnsCategory(category: string): KiiPushMessageBuilder;
		jpushData(data: {
		[name: string]: string | number | boolean
	}): KiiPushMessageBuilder;
		mqttData(data: {
		[key: string]: string
	}): KiiPushMessageBuilder
	}

	declare export class KiiPushSubscription  {
		subscribe<T>(
		target: T, callbacks?: {
		success(subscription: KiiPushSubscription, topic: T): any,
		failure(error: Error): any
	}
	): Promise<[KiiPushSubscription, T]>;
		unsubscribe<T>(
		target: T, callbacks?: {
		success(subscription: KiiPushSubscription, topic: T): any,
		failure(error: Error): any
	}
	): Promise<[KiiPushSubscription, T]>;
		isSubscribed<T>(
		target: T, callbacks?: {
		success(subscription: KiiPushSubscription, topic: T, isSubscribed: boolean): any,
		failure(error: Error): any
	}
	): Promise<[KiiPushSubscription, T, boolean]>
	}

	declare export class KiiQuery  {
		getLimit(): number;
		setLimit(value: number): void;
		queryWithClause(clause: KiiClause): KiiQuery;
		sortByDesc(field: string): void;
		sortByAsc(field: string): void
	}

	declare export class KiiServerCodeEntry  {
		execute<T>(
		argument: T, callbacks?: {
		success(
		entry: KiiServerCodeEntry, argument: T, execResult: KiiServerCodeExecResult
	): any,
		failure(
		entry: KiiServerCodeEntry, argument: T, execResult: KiiServerCodeExecResult, anErrorString: string
	): any
	}
	): Promise<[KiiServerCodeEntry, T, KiiServerCodeExecResult]>;
		getEntryName(): string
	}

	declare export class KiiServerCodeExecResult  {
		getExecutedSteps(): number;
		getReturnedValue(): any
	}

	declare export class KiiSocialConnect  {
		setupNetwork(
		networkName: KiiSocialNetworkName, apiKey: string, apiSecret: string, extras: any
	): void;
		logIn(
		networkName: KiiSocialNetworkName, options: KiiSocialConnectOptions, callbacks?: {
		success(user: KiiUser, network: KiiSocialNetworkName): any,
		failure(user: KiiUser, network: KiiSocialNetworkName, anErrorString: string): any
	}
	): Promise<[KiiUser, KiiSocialNetworkName]>;
		linkCurrentUserWithNetwork(
		networkName: KiiSocialNetworkName, options: KiiSocialConnectOptions, callbacks?: {
		success(user: KiiUser, network: KiiSocialNetworkName): any,
		failure(user: KiiUser, network: KiiSocialNetworkName, anErrorString: string): any
	}
	): Promise<[KiiUser, KiiSocialNetworkName]>;
		unLinkCurrentUserFromNetwork(
		networkName: KiiSocialNetworkName, callbacks?: {
		success(user: KiiUser, network: KiiSocialNetworkName): any,
		failure(user: KiiUser, network: KiiSocialNetworkName, anErrorString: string): any
	}
	): Promise<[KiiUser, KiiSocialNetworkName]>;
		getAccessTokenForNetwork(networkName: KiiSocialNetworkName): string;
		getAccessTokenExpirationForNetwork(networkName: KiiSocialNetworkName): string;
		getAccessTokenObjectForNetwork(networkName: KiiSocialNetworkName): any
	}

	declare export class KiiThing  {
		fields: KiiThingFields;
		getThingID(): string;
		getVendorThingID(): string;
		getAccessToken(): string;
		getCreated(): Date;
		getDisabled(): boolean;
		isOnline(): boolean;
		getOnlineStatusModifiedAt(): Date;
		register(
		fields: KiiThingFields, callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		refresh(
		callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		update(
		callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		deleteThing(
		callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		isOwner<T>(
		owner: T, callbacks?: {
		success(thing: KiiThing, user: T, isOwner: boolean): any,
		failure(error: Error): any
	}
	): Promise<[KiiThing, T, boolean]>;
		registerOwner<T>(
		owner: T, callbacks?: {
		success(thing: KiiThing, group: T): any,
		failure(error: Error): any
	}
	): Promise<[KiiThing, T]>;
		registerOwnerWithThingID<T>(
		thingID: string, owner: T, callbacks?: {
		success(group: T): any,
		failure(error: Error): any
	}
	): Promise<T>;
		registerOwnerWithVendorThingID<T>(
		vendorThingID: string, owner: T, callbacks?: {
		success(group: T): any,
		failure(error: Error): any
	}
	): Promise<T>;
		unregisterOwner<T>(
		owner: T, callbacks?: {
		success(thing: KiiThing, group: T): any,
		failure(error: Error): any
	}
	): Promise<[KiiThing, T]>;
		disable(
		callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		enable(
		callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		loadWithVendorThingID(
		vendorThingID: string, callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		loadWithThingID(
		thingID: string, callbacks?: {
		success(thing: KiiThing): any,
		failure(error: Error): any
	}
	): Promise<KiiThing>;
		bucketWithName(bucketName: string): KiiBucket;
		encryptedBucketWithName(bucketName: string): KiiBucket;
		topicWithName(topicName: string): KiiTopic;
		listTopics(
		callbacks?: {
		success(topicList: KiiTopic[], nextPaginationKey: string): any,
		failure(anErrorString: string): any
	}, paginationKey?: string
	): Promise<[KiiTopic[], string]>;
		pushSubscription(): KiiPushSubscription
	}

	declare export class KiiThingContext  {
		bucketWithName(bucketName: string): KiiBucket;
		encryptedBucketWithName(bucketName: string): KiiBucket;
		objectWithURI(object: string): KiiObject;
		topicWithName(topicName: string): KiiTopic;
		listTopics(
		callbacks?: {
		success(topicList: KiiTopic[], nextPaginationKey: string): any,
		failure(anErrorString: string): any
	}, paginationKey?: string
	): Promise<[KiiTopic[], string]>;
		getAuthenticatedThing(): KiiThing;
		pushInstallation(): KiiPushInstallation
	}

	declare export class KiiTopic  {
		getName(): string;
		exists(
		callbacks?: {
		success(existed: boolean): any,
		failure(error: Error): any
	}
	): Promise<boolean>;
		save(
		callbacks?: {
		success(topic: KiiTopic): any,
		failure(error: Error): any
	}
	): Promise<KiiTopic>;
		sendMessage<T>(
		message: T, callbacks?: {
		success(topic: KiiTopic, message: T): any,
		failure(error: Error): any
	}
	): Promise<[KiiTopic, T]>;
		deleteTopic(
		callbacks?: {
		success(topic: KiiTopic): any,
		failure(error: Error): any
	}
	): Promise<KiiTopic>;
		acl(): KiiACL
	}

	declare export class KiiUser  {
		getUUID(): string;
		getID(): string;
		getUsername(): string;
		disabled(): void;
		getDisplayName(): string;
		setDisplayName(value: string): void;
		isPseudoUser(): boolean;
		getEmailAddress(): string;
		getPendingEmailAddress(): string;
		getPhoneNumber(): string;
		getPendingPhoneNumber(): string;
		getCountry(): string;
		setCountry(value: string): void;
		getLocale(): string;
		setLocale(value: string): void;
		getCreated(): string;
		getModified(): string;
		getEmailVerified(): boolean;
		getPhoneVerified(): boolean;
		getLinkedSocialAccounts(): {
		[name: string]: KiiSocialAccountInfo
	};
		getAccessToken(): string;
		getAccessTokenObject(): KiiAccessTokenObject;
		objectURI(): string;
		set(key: string, value: any): void;
		get<T>(key: string): T;
		getCurrentUser(): KiiUser;
		userWithUsername(username: string, password: string): KiiUser;
		userWithPhoneNumber(phoneNumber: string, password: string): KiiUser;
		userWithPhoneNumberAndUsername(phoneNumber: string, username: string, password: string): KiiUser;
		userWithEmailAddress(emailAddress: string, password: string): KiiUser;
		userWithEmailAddressAndUsername(emailAddress: string, username: string, password: string): KiiUser;
		userWithEmailAddressAndPhoneNumber(emailAddress: string, phoneNumber: string, password: string): KiiUser;
		userWithCredentials(
		emailAddress: string, phoneNumber: string, username: string, password: string
	): KiiUser;
		userWithID(userID: string): KiiUser;
		userWithURI(uri: string): KiiUser;
		bucketWithName(bucketName: string): KiiBucket;
		encryptedBucketWithName(bucketName: string): KiiBucket;
		authenticate(
		userIdentifier: string, password: string, callbacks?: {
		success(theAuthenticatedUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		authenticateWithToken(
		accessToken: string, callbacks?: {
		success(theAuthenticatedUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}, expiresAt?: Date
	): Promise<KiiUser>;
		register(
		callbacks?: {
		success(theAuthenticatedUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		registerAsPseudoUser(
		callbacks?: {
		success(theAuthenticatedUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}, userFields?: any
	): Promise<KiiUser>;
		putIdentity(
		identityData: identityData, password: string, callbacks?: {
		success(user: KiiUser): any,
		failure(user: KiiUser, errorString: string): any
	}, userFields?: any, removeFields?: string[]
	): Promise<KiiUser>;
		update(
		identityData: identityData, callbacks?: {
		success(user: KiiUser): any,
		failure(user: KiiUser, errorString: string): any
	}, userFields?: any, removeFields?: string[]
	): Promise<KiiUser>;
		updatePassword(
		fromPassword: string, toPassword: string, callbacks?: {
		success(theUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		resetPassword(
		userIdentifier: string, callbacks?: {
		success(): any,
		failure(anErrorString: string): any
	}
	): Promise<void>;
		resetPasswordWithNotificationMethod(
		userIdentifier: string, notificationMethod: string, callbacks?: {
		success(): any,
		failure(errString: string): any
	}
	): Promise<void>;
		verifyPhoneNumber(
		verificationCode: string, callbacks?: {
		success(theUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		resendEmailVerification(
		callbacks?: {
		success(theUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		resendPhoneNumberVerification(
		callbacks?: {
		success(theUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		memberOfGroups(
		callbacks?: {
		success(theUser: KiiUser, groupList: KiiGroup[]): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<[KiiUser, KiiGroup[]]>;
		ownerOfGroups(
		callbacks?: {
		success(theUser: KiiUser, groupList: KiiGroup[]): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<[KiiUser, KiiGroup[]]>;
		changePhone(
		newPhoneNumber: string, callbacks?: {
		success(theUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		changeEmail(
		newEmail: string, callbacks?: {
		success(theUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		save(
		callbacks?: {
		success(theSavedUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		refresh(
		callbacks?: {
		success(theRefreshedUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		delete(
		callbacks?: {
		success(theDeletedUser: KiiUser): any,
		failure(theUser: KiiUser, anErrorString: string): any
	}
	): Promise<KiiUser>;
		logOut(): void;
		loggedIn(): boolean;
		findUserByEmail(
		email: string, callbacks?: {
		success(theMatchedUser: KiiUser): any,
		failure(anErrorString: string): any
	}
	): Promise<KiiUser>;
		findUserByPhone(
		phone: string, callbacks?: {
		success(theMatchedUser: KiiUser): any,
		failure(anErrorString: string): any
	}
	): Promise<KiiUser>;
		findUserByUsername(
		username: string, callbacks?: {
		success(theMatchedUser: KiiUser): any,
		failure(anErrorString: string): any
	}
	): Promise<KiiUser>;
		topicWithName(topicName: string): KiiTopic;
		listTopics(
		callbacks?: {
		success(topicList: KiiTopic[], nextPaginationKey: string): any,
		failure(anErrorString: string): any
	}, paginationKey?: string
	): Promise<[KiiTopic[], string]>;
		pushSubscription(): KiiPushSubscription;
		pushInstallation(): KiiPushInstallation
	}

	declare export class KiiUserBuilder  {
		builderWithIdentifier(identifier: string, password: string): KiiUserBuilder;
		builderWithEmailAddress(emailAddress: string, password: string): KiiUserBuilder;
		builderWithGlobalPhoneNumber(phoneNumber: string, password: string): KiiUserBuilder;
		builderWithLocalPhoneNumber(phoneNumber: string, country: string, password: string): KiiUserBuilder;
		builderWithUsername(username: string, password: string): KiiUserBuilder;
		setUsername(username: string): KiiUserBuilder;
		setEmailAddress(emailAddress: string): KiiUserBuilder;
		setGlobalPhoneNumber(phoneNumber: string): KiiUserBuilder;
		setLocalPhoneNumber(phoneNumber: string, country: string): KiiUserBuilder;
		build(): KiiUser
	}

	
}
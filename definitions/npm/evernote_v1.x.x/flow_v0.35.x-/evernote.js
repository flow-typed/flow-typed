

declare module 'evernote' {
					
}

declare module 'Evernote' {
		declare interface Callback<T> {
		(err: EDAMUserException | EDAMSystemException | EDAMNotFoundException, v: T): void
	}

	declare interface ClientConfig {
		consumerKey?: string,
		consumerSecret?: string,
		sandbox?: boolean,
		token?: string,
		serviceHost?: string,
		additionalHeaders?: {
		[k: string]: string
	},
		secret?: string
	}

		declare class Client  {
		new: (config: ClientConfig) => Client;
		constructor(config: ClientConfig): this;
		getNoteStore(): NoteStoreClient;
		getUserStore(): UserStoreClient
	}

	declare class EDAMUserException extends Thrift$TException {
		errorCode: EDAMErrorCode;
		parameter: string;
		constructor(args?: {
		errorCode: EDAMErrorCode,
		parameter?: string
	}): this
	}

	declare class EDAMSystemException extends Thrift$TException {
		errorCode: EDAMErrorCode;
		message: string;
		rateLimitDuration: number;
		constructor(args?: {
		errorCode: EDAMErrorCode,
		message?: string,
		rateLimitDuration?: number
	}): this
	}

	declare class EDAMNotFoundException extends Thrift$TException {
		identifier: string;
		key: string;
		constructor(args?: {
		identifier?: string,
		key?: string
	}): this
	}

	declare class NoteStoreClient  {
		seqid: number;
		getSyncState(cb: Callback<SyncState>): void;
		getSyncStateWithMetrics(clientMetrics: ClientUsageMetrics, cb: Callback<SyncState>): void;
		getFilteredSyncChunk(
		afterUSN: number, maxEntries: number, filter: SyncChunkFilter, cb: Callback<SyncState>
	): void;
		getLinkedNotebookSyncState(linkedNotebook: LinkedNotebook, cb: Callback<SyncState>): void;
		getLinkedNotebookSyncChunk(
		linkedNotebook: LinkedNotebook, afterUSN: number, maxEntries: number, fullSyncOnly: boolean, cb: Callback<SyncChunk>
	): void;
		listNotebooks(cb: Callback<Notebook[]>): void;
		getNotebook(guid: string, cb: Callback<Notebook>): void;
		getDefaultNotebook(cb: Callback<Notebook>): void;
		createNotebook(notebook: Notebook, cb: Callback<Notebook>): void;
		updateNotebook(notebook: Notebook, cb: Callback<number>): void;
		expungeNotebook(guid: string, cb: Callback<number>): void;
		listTags(cb: Callback<Tag[]>): void;
		listTagsByNotebook(notebookGuid: string, cb: Callback<Tag[]>): void;
		getTag(guid: string, cb: Callback<Tag>): void;
		createTag(tag: Tag, cb: Callback<Tag>): void;
		updateTag(tag: Tag, cb: Callback<number>): void;
		untagAll(guid: string, cb: Callback<void>): void;
		expungeTag(guid: string, cb: Callback<number>): void;
		listSearches(cb: Callback<SavedSearch[]>): void;
		getSearch(guid: string, cb: Callback<SavedSearch>): void;
		createSearch(search: SavedSearch, cb: Callback<SavedSearch>): void;
		updateSearch(search: SavedSearch, cb: Callback<number>): number;
		expungeSearch(guid: string, cb: Callback<number>): void;
		findNotes(
		filter: NoteFilter, offset: number, maxNotes: number, cb: Callback<NoteList>
	): void;
		findNoteOffset(filter: NoteFilter, guid: string, cb: Callback<number>): void;
		findNotesMetadata(
		filter: NoteFilter, offset: number, maxNotes: number, resultSpec: NotesMetadataResultSpec, cb: Callback<NotesMetadataList>
	): void;
		findNoteCounts(
		filter: NoteFilter, withTrash: boolean, cb: Callback<NoteCollectionCounts>
	): void;
		getNote(
		guid: string, withContent: boolean, withResourcesData: boolean, withResourcesRecognition: boolean, withResourcesAlternateData: boolean, cb: Callback<Note>
	): void;
		getNoteApplicationData(guid: string, cb: Callback<LazyMap>): void;
		getNoteApplicationDataEntry(guid: string, key: string, cb: Callback<string>): void;
		setNoteApplicationDataEntry(guid: string, key: string, value: string, cb: Callback<number>): void;
		unsetNoteApplicationDataEntry(guid: string, key: string, cb: Callback<number>): void;
		getNoteContent(guid: string, cb: Callback<string>): void;
		getNoteSearchText(
		guid: string, noteOnly: boolean, tokenizeForIndexing: boolean, cb: Callback<string>
	): void;
		getResourceSearchText(guid: string, cb: Callback<string>): void;
		getNoteTagNames(guid: string, cb: Callback<string[]>): void;
		createNote(note: Note, cb: Callback<Note>): void;
		updateNote(note: Note, cb: Callback<Note>): void;
		deleteNote(guid: string, cb: Callback<number>): void;
		expungeNote(guid: string, cb: Callback<number>): void;
		expungeNotes(noteGuids: string[], cb: Callback<number>): void;
		expungeInactiveNotes(cb: Callback<number>): void;
		copyNote(noteGuid: string, toNotebookGuid: string, cb: Callback<Note>): void;
		listNoteVersions(noteGuid: string, cb: Callback<NoteVersionId[]>): void;
		getNoteVersion(
		noteGuid: string, updateSequenceNum: number, withResourcesData: boolean, withResourcesRecognition: boolean, withResourcesAlternateData: boolean, cb: Callback<Note>
	): void;
		getResource(
		guid: string, withData: boolean, withRecognition: boolean, withAttributes: boolean, withAlternateData: boolean, cb: Callback<Resource>
	): void;
		getResourceApplicationData(guid: string, cb: Callback<LazyMap>): void;
		getResourceApplicationDataEntry(guid: string, key: string, cb: Callback<string>): void;
		setResourceApplicationDataEntry(guid: string, key: string, value: string, cb: Callback<number>): void;
		unsetResourceApplicationDataEntry(guid: string, key: string, cb: Callback<number>): void;
		updateResource(resource: Resource, cb: Callback<number>): void;
		getResourceData(guid: string, cb: Callback<string>): void;
		getResourceByHash(
		noteGuid: string, contentHash: string, withData: boolean, withRecognition: boolean, withAlternateData: boolean, cb: Callback<Resource>
	): void;
		getResourceRecognition(guid: string, cb: Callback<string>): void;
		getResourceAlternateData(guid: string, cb: Callback<string>): void;
		getResourceAttributes(guid: string, cb: Callback<ResourceAttributes>): void;
		getPublicNotebook(userId: number, publicUri: string, cb: Callback<Notebook>): void;
		createSharedNotebook(sharedNotebook: SharedNotebook, cb: Callback<SharedNotebook>): void;
		updateSharedNotebook(sharedNotebook: SharedNotebook, cb: Callback<number>): void;
		setSharedNotebookRecipientSettings(
		sharedNotebookId: number, recipientSettings: SharedNotebookRecipientSettings, cb: Callback<number>
	): void;
		sendMessageToSharedNotebookMembers(
		notebookGuid: string, messageText: string, recipients: string[], cb: Callback<number>
	): void;
		listSharedNotebooks(cb: Callback<SharedNotebook[]>): void;
		expungeSharedNotebooks(sharedNotebookIds: number[], cb: Callback<number>): void;
		createLinkedNotebook(linkedNotebook: LinkedNotebook, cb: Callback<LinkedNotebook>): void;
		updateLinkedNotebook(linkedNotebook: LinkedNotebook, cb: Callback<number>): void;
		listLinkedNotebooks(cb: Callback<LinkedNotebook[]>): void;
		expungeLinkedNotebook(guid: string, cb: Callback<number>): void;
		authenticateToSharedNotebook(shareKey: string, cb: Callback<AuthenticationResult>): void;
		getSharedNotebookByAuth(cb: Callback<SharedNotebook>): void;
		emailNote(parameters: NoteEmailParameters, cb: Callback<void>): void;
		shareNote(guid: string, cb: Callback<string>): void;
		stopSharingNote(guid: string, cb: Callback<void>): void;
		authenticateToSharedNote(guid: string, noteKey: string, cb: Callback<AuthenticationResult>): void;
		findRelated(
		query: RelatedQuery, resultSpec: RelatedResultSpec, cb: Callback<RelatedResult>
	): void
	}

	declare class SyncState  {
		currentTime: number;
		fullSyncBefore: number;
		updateCount: number;
		uploaded: number;
		constructor(args?: {
		currentTime: number,
		fullSyncBefore: number,
		updateCount: number,
		uploaded?: number
	}): this
	}

	declare class SyncChunk  {
		currentTime: number;
		chunkHighUSN: number;
		updateCount: number;
		notes: Note[];
		notebooks: Notebook[];
		tags: Tag[];
		searches: SavedSearch[];
		resources: Resource[];
		expungedNotes: string[];
		expungedNotebooks: string[];
		expungedTags: string[];
		expungedSearches: string[];
		linkedNotebooks: LinkedNotebook[];
		expungedLinkedNotebooks: string[];
		constructor(args?: {
		currentTime: number,
		chunkHighUSN?: number,
		updateCount: number,
		notes?: Note[],
		notebooks?: Notebook[],
		tags?: Tag[],
		searches?: SavedSearch[],
		resources?: Resource[],
		expungedNotes?: string[],
		expungedNotebooks?: string[],
		expungedTags?: string[],
		expungedSearches?: string[],
		linkedNotebooks?: LinkedNotebook[],
		expungedLinkedNotebooks?: string[]
	}): this
	}

	declare class SyncChunkFilter  {
		includeNotes: boolean;
		includeNoteResources: boolean;
		includeNoteAttributes: boolean;
		includeNotebooks: boolean;
		includeTags: boolean;
		includeSearches: boolean;
		includeResources: boolean;
		includeLinkedNotebooks: boolean;
		includeExpunged: boolean;
		includeNoteApplicationDataFullMap: boolean;
		includeResourceApplicationDataFullMap: boolean;
		includeNoteResourceApplicationDataFullMap: boolean;
		requireNoteContentClass: string;
		constructor(args?: {
		includeNotes?: boolean,
		includeNoteResources?: boolean,
		includeNoteAttributes?: boolean,
		includeNotebooks?: boolean,
		includeTags?: boolean,
		includeSearches?: boolean,
		includeResources?: boolean,
		includeLinkedNotebooks?: boolean,
		includeExpunged?: boolean,
		includeNoteApplicationDataFullMap?: boolean,
		includeResourceApplicationDataFullMap?: boolean,
		includeNoteResourceApplicationDataFullMap?: boolean,
		requireNoteContentClass?: string
	}): this
	}

	declare class NoteFilter  {
		order: number;
		ascending: boolean;
		words: string;
		notebookGuid: string;
		tagGuids: string[];
		timeZone: string;
		inactive: boolean;
		emphasized: string;
		constructor(args?: {
		order?: number,
		ascending?: boolean,
		words?: string,
		notebookGuid?: string,
		tagGuids?: string[],
		timeZone?: string,
		inactive?: boolean,
		emphasized?: string
	}): this
	}

	declare class NoteList  {
		startIndex: number;
		totalNotes: number;
		notes: Note[];
		stoppedWords: string[];
		searchedWords: string[];
		updateCount: number;
		constructor(args?: {
		startIndex: number,
		totalNotes: number,
		notes: Note[],
		stoppedWords?: string[],
		searchedWords?: string[],
		updateCount?: number
	}): this
	}

	declare class NoteMetadata  {
		guid: string;
		title: string;
		contentLength: number;
		created: number;
		updated: number;
		deleted: number;
		updateSequenceNum: number;
		notebookGuid: string;
		tagGuids: string[];
		attributes: NoteAttributes;
		largestResourceMime: string;
		largestResourceSize: number;
		constructor(args?: {
		guid: string,
		title?: string,
		contentLength?: number,
		created?: number,
		updated?: number,
		deleted?: number,
		updateSequenceNum?: number,
		notebookGuid?: string,
		tagGuids?: string[],
		attributes?: NoteAttributes,
		largestResourceMime?: string,
		largestResourceSize?: number
	}): this
	}

	declare class NotesMetadataList  {
		startIndex: number;
		totalNotes: number;
		notes: NoteMetadata[];
		stoppedWords: string[];
		searchedWords: string[];
		updateCount: number;
		constructor(args?: {
		startIndex: number,
		totalNotes: number,
		notes: NoteMetadata[],
		stoppedWords?: string[],
		searchedWords?: string[],
		updateCount?: number
	}): this
	}

	declare class NotesMetadataResultSpec  {
		includeTitle: boolean;
		includeContentLength: boolean;
		includeCreated: boolean;
		includeUpdated: boolean;
		includeDeleted: boolean;
		includeUpdateSequenceNum: boolean;
		includeNotebookGuid: boolean;
		includeTagGuids: boolean;
		includeAttributes: boolean;
		includeLargestResourceMime: boolean;
		includeLargestResourceSize: boolean;
		constructor(args?: {
		includeTitle?: boolean,
		includeContentLength?: boolean,
		includeCreated?: boolean,
		includeUpdated?: boolean,
		includeDeleted?: boolean,
		includeUpdateSequenceNum?: boolean,
		includeNotebookGuid?: boolean,
		includeTagGuids?: boolean,
		includeAttributes?: boolean,
		includeLargestResourceMime?: boolean,
		includeLargestResourceSize?: boolean
	}): this
	}

	declare class NoteCollectionCounts  {
		notebookCounts: {
		[k: string]: number
	};
		tagCounts: {
		[k: string]: number
	};
		trashCount: number;
		constructor(args?: {
		notebookCounts?: {
		[k: string]: number
	},
		tagCounts?: {
		[k: string]: number
	},
		trashCount?: number
	}): this
	}

	declare class NoteEmailParameters  {
		guid: string;
		note: Note;
		toAddresses: string[];
		ccAddresses: string[];
		subject: string;
		message: string;
		constructor(args?: {
		guid?: string,
		note?: Note,
		toAddresses?: string[],
		ccAddresses?: string[],
		subject?: string,
		message?: string
	}): this
	}

	declare class NoteVersionId  {
		updateSequenceNum: number;
		updated: number;
		saved: number;
		title: string;
		constructor(args?: {
		updateSequenceNum: number,
		updated: number,
		saved: number,
		title: string
	}): this
	}

	declare class ClientUsageMetrics  {
		sessions: number;
		constructor(args?: {
		sessions?: number
	}): this
	}

	declare class RelatedQuery  {
		noteGuid: string;
		plainText: string;
		filter: NoteFilter;
		referenceUri: string;
		constructor(args?: {
		noteGuid?: string,
		plainText?: string,
		filter?: NoteFilter,
		referenceUri?: string
	}): this
	}

	declare class RelatedResult  {
		notes: Note[];
		notebooks: Notebook[];
		tags: Tag[];
		containingNotebooks: NotebookDescriptor[];
		constructor(args?: {
		notes?: Note[],
		notebooks?: Notebook[],
		tags?: Tag[],
		containingNotebooks?: NotebookDescriptor[]
	}): this
	}

	declare class RelatedResultSpec  {
		maxNotes: number;
		maxNotebooks: number;
		maxTags: number;
		writableNotebooksOnly: boolean;
		includeContainingNotebooks: boolean;
		constructor(args?: {
		maxNotes?: number,
		maxNotebooks?: number,
		maxTags?: number,
		writableNotebooksOnly?: boolean,
		includeContainingNotebooks?: boolean
	}): this
	}

	declare class Data  {
		bodyHash: string;
		size: number;
		body: string;
		constructor(args?: {
		bodyHash?: string,
		size?: number,
		body?: string
	}): this
	}

	declare class UserAttributes  {
		defaultLocationName: string;
		defaultLatitude: number;
		defaultLongitude: number;
		preactivation: boolean;
		viewedPromotions: string[];
		incomingEmailAddress: string;
		recentMailedAddresses: string[];
		comments: string;
		dateAgreedToTermsOfService: number;
		maxReferrals: number;
		referralCount: number;
		refererCode: string;
		sentEmailDate: number;
		sentEmailCount: number;
		dailyEmailLimit: number;
		emailOptOutDate: number;
		partnerEmailOptInDate: number;
		preferredLanguage: string;
		preferredCountry: string;
		clipFullPage: boolean;
		twitterUserName: string;
		twitterId: string;
		groupName: string;
		recognitionLanguage: string;
		referralProof: string;
		educationalDiscount: boolean;
		businessAddress: string;
		hideSponsorBilling: boolean;
		taxExempt: boolean;
		useEmailAutoFiling: boolean;
		reminderEmailConfig: ReminderEmailConfig;
		constructor(args?: {
		defaultLocationName?: string,
		defaultLatitude?: number,
		defaultLongitude?: number,
		preactivation?: boolean,
		viewedPromotions?: string[],
		incomingEmailAddress?: string,
		recentMailedAddresses?: string[],
		comments?: string,
		dateAgreedToTermsOfService?: number,
		maxReferrals?: number,
		referralCount?: number,
		refererCode?: string,
		sentEmailDate?: number,
		sentEmailCount?: number,
		dailyEmailLimit?: number,
		emailOptOutDate?: number,
		partnerEmailOptInDate?: number,
		preferredLanguage?: string,
		preferredCountry?: string,
		clipFullPage?: boolean,
		twitterUserName?: string,
		twitterId?: string,
		groupName?: string,
		recognitionLanguage?: string,
		referralProof?: string,
		educationalDiscount?: boolean,
		businessAddress?: string,
		hideSponsorBilling?: boolean,
		taxExempt?: boolean,
		useEmailAutoFiling?: boolean,
		reminderEmailConfig?: ReminderEmailConfig
	}): this
	}

	declare class Accounting  {
		uploadLimit: number;
		uploadLimitEnd: number;
		uploadLimitNextMonth: number;
		premiumServiceStatus: PremiumOrderStatus;
		premiumOrderNumber: string;
		premiumCommerceService: string;
		premiumServiceStart: number;
		premiumServiceSKU: string;
		lastSuccessfulCharge: number;
		lastFailedCharge: number;
		lastFailedChargeReason: string;
		nextPaymentDue: number;
		premiumLockUntil: number;
		updated: number;
		premiumSubscriptionNumber: string;
		lastRequestedCharge: number;
		currency: string;
		unitPrice: number;
		businessId: number;
		businessName: string;
		businessRole: BusinessUserRole;
		unitDiscount: number;
		nextChargeDate: number;
		constructor(args?: {
		uploadLimit?: number,
		uploadLimitEnd?: number,
		uploadLimitNextMonth?: number,
		premiumServiceStatus?: PremiumOrderStatus,
		premiumOrderNumber?: string,
		premiumCommerceService?: string,
		premiumServiceStart?: number,
		premiumServiceSKU?: string,
		lastSuccessfulCharge?: number,
		lastFailedCharge?: number,
		lastFailedChargeReason?: string,
		nextPaymentDue?: number,
		premiumLockUntil?: number,
		updated?: number,
		premiumSubscriptionNumber?: string,
		lastRequestedCharge?: number,
		currency?: string,
		unitPrice?: number,
		businessId?: number,
		businessName?: string,
		businessRole?: BusinessUserRole,
		unitDiscount?: number,
		nextChargeDate?: number
	}): this
	}

	declare class BusinessUserInfo  {
		businessId: number;
		businessName: string;
		role: BusinessUserRole;
		email: string;
		constructor(args?: {
		businessId?: number,
		businessName?: string,
		role?: BusinessUserRole,
		email?: string
	}): this
	}

	declare class PremiumInfo  {
		currentTime: number;
		premium: boolean;
		premiumRecurring: boolean;
		premiumExpirationDate: number;
		premiumExtendable: boolean;
		premiumPending: boolean;
		premiumCancellationPending: boolean;
		canPurchaseUploadAllowance: boolean;
		sponsoredGroupName: string;
		sponsoredGroupRole: SponsoredGroupRole;
		premiumUpgradable: boolean;
		constructor(args?: {
		currentTime: number,
		premium: boolean,
		premiumRecurring: boolean,
		premiumExpirationDate?: number,
		premiumExtendable: boolean,
		premiumPending: boolean,
		premiumCancellationPending: boolean,
		canPurchaseUploadAllowance: boolean,
		sponsoredGroupName?: string,
		sponsoredGroupRole?: SponsoredGroupRole,
		premiumUpgradable?: boolean
	}): this
	}

	declare class User  {
		id: number;
		username: string;
		email: string;
		name: string;
		timezone: string;
		privilege: PrivilegeLevel;
		created: number;
		updated: number;
		deleted: number;
		active: boolean;
		shardId: string;
		attributes: UserAttributes;
		accounting: Accounting;
		premiumInfo: PremiumInfo;
		businessUserInfo: BusinessUserInfo;
		constructor(args?: {
		id?: number,
		username?: string,
		email?: string,
		name?: string,
		timezone?: string,
		privilege?: PrivilegeLevel,
		created?: number,
		updated?: number,
		deleted?: number,
		active?: boolean,
		shardId?: string,
		attributes?: UserAttributes,
		accounting?: Accounting,
		premiumInfo?: PremiumInfo,
		businessUserInfo?: BusinessUserInfo
	}): this
	}

	declare class Tag  {
		guid: string;
		name: string;
		parentGuid: string;
		updateSequenceNum: number;
		constructor(args?: {
		guid?: string,
		name?: string,
		parentGuid?: string,
		updateSequenceNum?: number
	}): this
	}

	declare class LazyMap  {
		keysOnly: string[];
		fullMap: {
		[k: string]: string
	};
		constructor(args?: {
		keysOnly?: string[],
		fullMap?: {
		[k: string]: string
	}
	}): this
	}

	declare class ResourceAttributes  {
		sourceURL: string;
		timestamp: number;
		latitude: number;
		longitude: number;
		altitude: number;
		cameraMake: string;
		cameraModel: string;
		clientWillIndex: boolean;
		recoType: string;
		fileName: string;
		attachment: boolean;
		applicationData: LazyMap;
		constructor(args?: {
		sourceURL?: string,
		timestamp?: number,
		latitude?: number,
		longitude?: number,
		altitude?: number,
		cameraMake?: string,
		cameraModel?: string,
		clientWillIndex?: boolean,
		recoType?: string,
		fileName?: string,
		attachment?: boolean,
		applicationData?: LazyMap
	}): this
	}

	declare class Resource  {
		guid: string;
		noteGuid: string;
		data: Data;
		mime: string;
		width: number;
		height: number;
		duration: number;
		active: boolean;
		recognition: Data;
		attributes: ResourceAttributes;
		updateSequenceNum: number;
		alternateData: Data;
		constructor(args?: {
		guid?: string,
		noteGuid?: string,
		data?: Data,
		mime?: string,
		width?: number,
		height?: number,
		duration?: number,
		active?: boolean,
		recognition?: Data,
		attributes?: ResourceAttributes,
		updateSequenceNum?: number,
		alternateData?: Data
	}): this
	}

	declare class NoteAttributes  {
		subjectDate: number;
		latitude: number;
		longitude: number;
		altitude: number;
		author: string;
		source: string;
		sourceURL: string;
		sourceApplication: string;
		shareDate: number;
		reminderOrder: number;
		reminderDoneTime: number;
		reminderTime: number;
		placeName: string;
		contentClass: string;
		applicationData: LazyMap;
		lastEditedBy: string;
		classifications: {
		[k: string]: string
	};
		creatorId: number;
		lastEditorId: number;
		constructor(args?: {
		subjectDate?: number,
		latitude?: number,
		longitude?: number,
		altitude?: number,
		author?: string,
		source?: string,
		sourceURL?: string,
		sourceApplication?: string,
		shareDate?: number,
		reminderOrder?: number,
		reminderDoneTime?: number,
		reminderTime?: number,
		placeName?: string,
		contentClass?: string,
		applicationData?: LazyMap,
		lastEditedBy?: string,
		classifications?: {
		[k: string]: string
	},
		creatorId?: number,
		lastEditorId?: number
	}): this
	}

	declare class Note  {
		guid: string;
		title: string;
		content: string;
		contentHash: string;
		contentLength: number;
		created: number;
		updated: number;
		deleted: number;
		active: boolean;
		updateSequenceNum: number;
		notebookGuid: string;
		tagGuids: string[];
		resources: Resource[];
		attributes: NoteAttributes;
		tagNames: string[];
		constructor(args?: {
		guid?: string,
		title?: string,
		content?: string,
		contentHash?: string,
		contentLength?: number,
		created?: number,
		updated?: number,
		deleted?: number,
		active?: boolean,
		updateSequenceNum?: number,
		notebookGuid?: string,
		tagGuids?: string[],
		resources?: Resource[],
		attributes?: NoteAttributes,
		tagNames?: string[]
	}): this
	}

	declare class Publishing  {
		uri: string;
		order: NoteSortOrder;
		ascending: boolean;
		publicDescription: string;
		constructor(args?: {
		uri?: string,
		order?: NoteSortOrder,
		ascending?: boolean,
		publicDescription?: string
	}): this
	}

	declare class BusinessNotebook  {
		notebookDescription: string;
		privilege: SharedNotebookPrivilegeLevel;
		recommended: boolean;
		constructor(args?: {
		notebookDescription?: string,
		privilege?: SharedNotebookPrivilegeLevel,
		recommended?: boolean
	}): this
	}

	declare class SavedSearchScope  {
		includeAccount: boolean;
		includePersonalLinkedNotebooks: boolean;
		includeBusinessLinkedNotebooks: boolean;
		constructor(args?: {
		includeAccount?: boolean,
		includePersonalLinkedNotebooks?: boolean,
		includeBusinessLinkedNotebooks?: boolean
	}): this
	}

	declare class SavedSearch  {
		guid: string;
		name: string;
		query: string;
		format: QueryFormat;
		updateSequenceNum: number;
		scope: SavedSearchScope;
		constructor(args?: {
		guid?: string,
		name?: string,
		query?: string,
		format?: QueryFormat,
		updateSequenceNum?: number,
		scope?: SavedSearchScope
	}): this
	}

	declare class SharedNotebookRecipientSettings  {
		reminderNotifyEmail: boolean;
		reminderNotifyInApp: boolean;
		constructor(args?: {
		reminderNotifyEmail?: boolean,
		reminderNotifyInApp?: boolean
	}): this
	}

	declare class SharedNotebook  {
		id: number;
		userId: number;
		notebookGuid: string;
		email: string;
		notebookModifiable: boolean;
		requireLogin: boolean;
		serviceCreated: number;
		serviceUpdated: number;
		shareKey: string;
		username: string;
		privilege: SharedNotebookPrivilegeLevel;
		allowPreview: boolean;
		recipientSettings: SharedNotebookRecipientSettings;
		constructor(args?: {
		id?: number,
		userId?: number,
		notebookGuid?: string,
		email?: string,
		notebookModifiable?: boolean,
		requireLogin?: boolean,
		serviceCreated?: number,
		serviceUpdated?: number,
		shareKey?: string,
		username?: string,
		privilege?: SharedNotebookPrivilegeLevel,
		allowPreview?: boolean,
		recipientSettings?: SharedNotebookRecipientSettings
	}): this
	}

	declare class NotebookRestrictions  {
		noReadNotes: boolean;
		noCreateNotes: boolean;
		noUpdateNotes: boolean;
		noExpungeNotes: boolean;
		noShareNotes: boolean;
		noEmailNotes: boolean;
		noSendMessageToRecipients: boolean;
		noUpdateNotebook: boolean;
		noExpungeNotebook: boolean;
		noSetDefaultNotebook: boolean;
		noSetNotebookStack: boolean;
		noPublishToPublic: boolean;
		noPublishToBusinessLibrary: boolean;
		noCreateTags: boolean;
		noUpdateTags: boolean;
		noExpungeTags: boolean;
		noSetParentTag: boolean;
		noCreateSharedNotebooks: boolean;
		updateWhichSharedNotebookRestrictions: SharedNotebookInstanceRestrictions;
		expungeWhichSharedNotebookRestrictions: SharedNotebookInstanceRestrictions;
		constructor(args?: {
		noReadNotes?: boolean,
		noCreateNotes?: boolean,
		noUpdateNotes?: boolean,
		noExpungeNotes?: boolean,
		noShareNotes?: boolean,
		noEmailNotes?: boolean,
		noSendMessageToRecipients?: boolean,
		noUpdateNotebook?: boolean,
		noExpungeNotebook?: boolean,
		noSetDefaultNotebook?: boolean,
		noSetNotebookStack?: boolean,
		noPublishToPublic?: boolean,
		noPublishToBusinessLibrary?: boolean,
		noCreateTags?: boolean,
		noUpdateTags?: boolean,
		noExpungeTags?: boolean,
		noSetParentTag?: boolean,
		noCreateSharedNotebooks?: boolean,
		updateWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions,
		expungeWhichSharedNotebookRestrictions?: SharedNotebookInstanceRestrictions
	}): this
	}

	declare class Notebook  {
		guid: string;
		name: string;
		updateSequenceNum: number;
		defaultNotebook: boolean;
		serviceCreated: number;
		serviceUpdated: number;
		publishing: Publishing;
		published: boolean;
		stack: string;
		sharedNotebookIds: number[];
		sharedNotebooks: SharedNotebook[];
		businessNotebook: BusinessNotebook;
		contact: User;
		restrictions: NotebookRestrictions;
		constructor(args?: {
		guid?: string,
		name?: string,
		updateSequenceNum?: number,
		defaultNotebook?: boolean,
		serviceCreated?: number,
		serviceUpdated?: number,
		publishing?: Publishing,
		published?: boolean,
		stack?: string,
		sharedNotebookIds?: number[],
		sharedNotebooks?: SharedNotebook[],
		businessNotebook?: BusinessNotebook,
		contact?: User,
		restrictions?: NotebookRestrictions
	}): this
	}

	declare class LinkedNotebook  {
		shareName: string;
		username: string;
		shardId: string;
		shareKey: string;
		uri: string;
		guid: string;
		updateSequenceNum: number;
		noteStoreUrl: string;
		webApiUrlPrefix: string;
		stack: string;
		businessId: number;
		constructor(args?: {
		shareName?: string,
		username?: string,
		shardId?: string,
		shareKey?: string,
		uri?: string,
		guid?: string,
		updateSequenceNum?: number,
		noteStoreUrl?: string,
		webApiUrlPrefix?: string,
		stack?: string,
		businessId?: number
	}): this
	}

	declare class NotebookDescriptor  {
		guid: string;
		notebookDisplayName: string;
		contactName: string;
		hasSharedNotebook: boolean;
		joinedUserCount: number;
		constructor(args?: {
		guid?: string,
		notebookDisplayName?: string,
		contactName?: string,
		hasSharedNotebook?: boolean,
		joinedUserCount?: number
	}): this
	}

	declare class UserStoreClient  {
		seqid: number;
		checkVersion(
		clientName: string, edamVersionMajor: number, edamVersionMinor: number, cb: Callback<boolean>
	): void;
		getBootstrapInfo(locale: string, cb: Callback<BootstrapInfo>): void;
		revokeLongSession(cb: Callback<void>): void;
		authenticateToBusiness(cb: Callback<AuthenticationResult>): void;
		getUser(cb: Callback<User>): void;
		getPublicUserInfo(username: string, cb: Callback<PublicUserInfo>): void;
		getNoteStoreUrl(cb: Callback<string>): void
	}

	declare class PublicUserInfo  {
		userId: number;
		shardId: string;
		privilege: PrivilegeLevel;
		username: string;
		noteStoreUrl: string;
		webApiUrlPrefix: string;
		constructor(args?: {
		userId: number,
		shardId: string,
		privilege?: PrivilegeLevel,
		username?: string,
		noteStoreUrl?: string,
		webApiUrlPrefix?: string
	}): this
	}

	declare class AuthenticationResult  {
		currentTime: number;
		authenticationToken: string;
		expiration: number;
		user: User;
		publicUserInfo: PublicUserInfo;
		noteStoreUrl: string;
		webApiUrlPrefix: string;
		secondFactorRequired: boolean;
		secondFactorDeliveryHint: string;
		constructor(args?: {
		currentTime: number,
		authenticationToken: string,
		expiration: number,
		user?: User,
		publicUserInfo?: PublicUserInfo,
		noteStoreUrl?: string,
		webApiUrlPrefix?: string,
		secondFactorRequired?: boolean,
		secondFactorDeliveryHint?: string
	}): this
	}

	declare class BootstrapSettings  {
		serviceHost: string;
		marketingUrl: string;
		supportUrl: string;
		accountEmailDomain: string;
		enableFacebookSharing: boolean;
		enableGiftSubscriptions: boolean;
		enableSupportTickets: boolean;
		enableSharedNotebooks: boolean;
		enableSingleNoteSharing: boolean;
		enableSponsoredAccounts: boolean;
		enableTwitterSharing: boolean;
		enableLinkedInSharing: boolean;
		enablePublicNotebooks: boolean;
		constructor(args?: {
		serviceHost: string,
		marketingUrl: string,
		supportUrl: string,
		accountEmailDomain: string,
		enableFacebookSharing?: boolean,
		enableGiftSubscriptions?: boolean,
		enableSupportTickets?: boolean,
		enableSharedNotebooks?: boolean,
		enableSingleNoteSharing?: boolean,
		enableSponsoredAccounts?: boolean,
		enableTwitterSharing?: boolean,
		enableLinkedInSharing?: boolean,
		enablePublicNotebooks?: boolean
	}): this
	}

	declare class BootstrapProfile  {
		name: string;
		settings: BootstrapSettings;
		constructor(args?: {
		name: string,
		settings: BootstrapSettings
	}): this
	}

	declare class BootstrapInfo  {
		profiles: BootstrapProfile[];
		constructor(args?: {
		profiles: BootstrapProfile[]
	}): this
	}

	
}
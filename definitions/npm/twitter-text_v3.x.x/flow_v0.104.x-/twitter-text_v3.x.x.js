// @flow strict

declare module 'twitter-text' {
	declare type Indices = [number, number];
	declare export type CashtagWithIndices = {|
		indices: Indices,
		cashtag: string,
	|};
	declare export type HashtagWithIndices = {|
		indices: Indices,
		hashtag: string,
	|};
	declare export type MentionWithIndices = {|
		indices: Indices,
		screenName: string,
	|};
	declare export type MentionOrListWithIndices = {|
		...MentionWithIndices,
		listSlug: string,
	|};
	declare export type UrlWithIndices = {|
		indices: Indices,
		url: string,
		display_url?: string,
		expanded_url?: string,
	|};
	declare export type EntityWithIndices =
		| CashtagWithIndices
		| HashtagWithIndices
		| MentionWithIndices
		| MentionOrListWithIndices
		| UrlWithIndices;

	declare type Attributes = {|
		[name: string]: string | null;
	|};
	declare export type Options = {|
		cashtagClass?: string,
		cashtagUrlBase?: string,
		hashtagClass?: string,
		hashtagUrlBase?: string,
		htmlAttrs?: Attributes,
		htmlEscapeNonEntities?: boolean,
		invisibleTagAttrs?: string,
		linkAttributeBlock?: (entity: EntityWithIndices, attributes: Attributes) => void,
		linkTextBlock?: (entity: EntityWithIndices, text: string) => void,
		listClass?: string,
		listUrlBase?: string,
		suppressNoFollow?: boolean,
		symbolTag?: string,
		targetBlank?: boolean,
		textWithSymbolTag?: string,
		urlEntities?: UrlEntity[],
		usernameClass?: string,
		usernameIncludeSymbol?: boolean,
		usernameUrlBase?: string,
	|};

	declare export function autoLink(text: string, options?: Options): string;
	declare export function autoLinkCashtags(text: string, options?: Options): string;
	declare export function autoLinkEntities(text: string, entities: EntityWithIndices[], options?: Options): string;
	declare export function autoLinkHashtags(text: string, options?: Options): string;
	declare export function autoLinkUrlsCustom(text: string, options?: Options): string;
	declare export function autoLinkUsernamesOrLists(text: string, options?: Options): string;
	declare export function autoLinkWithJSON(text: string, json: {...}, options?: Options): string;

	declare type ConfigVersion1 = {|
		version: 1,
		maxWeightedTweetLength: 140,
		scale: 1,
		defaultWeight: 1,
		transformedURLLength: 23,
		ranges: []
	|};
	declare type ConfigVersion2 = {|
		version: 2,
		maxWeightedTweetLength: 280,
		scale: 100,
		defaultWeight: 200,
		transformedURLLength: 23,
		ranges: [
			{| start: 0, end: 4351, weight: 100 |},
			{| start: 8192, end: 8205, weight: 100 |},
			{| start: 8208, end: 8223, weight: 100 |},
			{| start: 8242, end: 8247, weight: 100 |}
		]
	|};
	declare type ConfigVersion3 = {|
		version: 3,
		maxWeightedTweetLength: 280,
		scale: 100,
		defaultWeight: 200,
		emojiParsingEnabled: true,
		transformedURLLength: 23,
		ranges: [
			{| start: 0, end: 4351, weight: 100 |},
			{| start: 8192, end: 8205, weight: 100 |},
			{| start: 8208, end: 8223, weight: 100 |},
			{| start: 8242, end: 8247, weight: 100 |}
		]
	|};
	declare type Config =
		| ConfigVersion1
		| ConfigVersion2
		| ConfigVersion3;
	declare export type configs = {|
		version1: ConfigVersion1,
		version2: ConfigVersion2,
		version3: ConfigVersion3,
		defaults: ConfigVersion3
	|};

	declare export function convertUnicodeIndices(text: string, entities: EntityWithIndices[], indicesInUTF16?: boolean): void;

	declare type HtmlAttrs = {
		disabled?: 'disabled',
		readonly?: 'readonly',
		multiple?: 'multiple',
		checked?: 'checked',
		...
	};
	declare type UrlsWithIndicesOptions = {|
		extractUrlsWithoutProtocol: boolean
	|};
	declare export function extractCashtags(text: string): string[];
	declare export function extractCashtagsWithIndices(text: string): CashtagWithIndices[];
	declare export function extractEntitiesWithIndices(text: string): EntityWithIndices[];
	declare export function extractHashtags(text: string): string[];
	declare export function extractHashtagsWithIndices(text: string): HashtagWithIndices[];
	declare export function extractHtmlAttrsFromOptions(): HtmlAttrs;
	declare export function extractMentions(text: string): string[];
	declare export function extractMentionsOrListsWithIndices(text: string): MentionOrListWithIndices[];
	declare export function extractMentionsWithIndices(text: string): MentionWithIndices[];
	declare export function extractReplies(text: string): string[];
	declare export function extractUrls(text: string): string[];
	declare export function extractUrlsWithIndices(text: string, options?: UrlsWithIndicesOptions): UrlWithIndices[];

	declare type TweetLengthOptions = {|
		short_url_length: number,
		short_url_length_https: number
	|};
	declare export function getTweetLength(text: string, options?: TweetLengthOptions): number;
	declare export function getUnicodeTextLength(text: string): number;

	declare export function hasInvalidCharacters(text: string): boolean;

	declare type HitHighlightOptions = {|
		tag: string,
	|};
	declare export function hitHighlight(text: string, hits?: Indices[], options?: HitHighlightOptions): string;
	declare export function htmlEscape(text: string): string;

	declare export function isInvalidTweet(text: string, options?: Config): 'empty' | 'too_long' | 'invalid_characters' | false;
	declare export function isValidHashtag(hashtag: string): boolean;
	declare export function isValidList(usernameList: string): boolean;
	declare export function isValidTweetText(text: string, options?: Config): boolean;
	declare export function isValidUrl(url: string, unicodeDomains: ?boolean, requireProtocol: ?boolean): boolean;
	declare export function isValidUsername(username: string): boolean;

	declare export function linkTextWithEntity(entity: EntityWithIndices, options?: Options): string;
	declare export function linkToCashtag(entity: CashtagWithIndices, text: string, options?: Options): string;
	declare export function linkToHashtag(entity: HashtagWithIndices, text: string, options?: Options): string;
	declare export function linkToMentionAndList(entity: MentionOrListWithIndices, text: string, options?: Options): string;
	declare export function linkToText(entity: EntityWithIndices, text: string, attributes: Attributes, options: Options): string;
	declare export function linkToTextWithSymbol(entity: EntityWithIndices, symbol: string, text: string, attributes: Attributes, options: Options): string;
	declare export function linkToUrl(entity: UrlWithIndices, text: string, options?: Options): string;

	declare export function modifyIndicesFromUnicodeToUTF16<I>(i: I): I;
	declare export function modifyIndicesFromUTF16ToUnicode<I>(i: I): I;

	declare export type ParsedTweet = {|
		displayRangeEnd: number,
		displayRangeStart: number,
		permillage: number,
		valid: boolean,
		validRangeEnd: number,
		validRangeStart: number,
		weightedLength: number,
	|};
	declare export function parseTweet(text: string, options?: Config): ParsedTweet;

	declare export type regexen = {...};
	declare export function removeOverlappingEntities(entities: EntityWithIndices[]): EntityWithIndices[];
	declare export function splitTags(text: string): string[];
	declare export function tagAttrs(attributes: Attributes): string;

	declare export default {|
		autoLink: typeof autoLink,
		autoLinkCashtags: typeof autoLinkCashtags,
		autoLinkEntities: typeof autoLinkEntities,
		autoLinkHashtags: typeof autoLinkHashtags,
		autoLinkUrlsCustom: typeof autoLinkUrlsCustom,
		autoLinkUsernamesOrLists: typeof autoLinkUsernamesOrLists,
		autoLinkWithJSON: typeof autoLinkWithJSON,
		configs: configs,
		convertUnicodeIndices: typeof convertUnicodeIndices,
		extractCashtags: typeof extractCashtags,
		extractCashtagsWithIndices: typeof extractCashtagsWithIndices,
		extractEntitiesWithIndices: typeof extractEntitiesWithIndices,
		extractHashtags: typeof extractHashtags,
		extractHashtagsWithIndices: typeof extractHashtagsWithIndices,
		extractHtmlAttrsFromOptions: typeof extractHtmlAttrsFromOptions,
		extractMentions: typeof extractMentions,
		extractMentionsOrListsWithIndices: typeof extractMentionsOrListsWithIndices,
		extractMentionsWithIndices: typeof extractMentionsWithIndices,
		extractReplies: typeof extractReplies,
		extractUrls: typeof extractUrls,
		extractUrlsWithIndices: typeof extractUrlsWithIndices,
		getTweetLength: typeof getTweetLength,
		getUnicodeTextLength: typeof getUnicodeTextLength,
		hasInvalidCharacters: typeof hasInvalidCharacters,
		hitHighlight: typeof hitHighlight,
		htmlEscape: typeof htmlEscape,
		isInvalidTweet: typeof isInvalidTweet,
		isValidHashtag: typeof isValidHashtag,
		isValidList: typeof isValidList,
		isValidTweetText: typeof isValidTweetText,
		isValidUrl: typeof isValidUrl,
		isValidUsername: typeof isValidUsername,
		linkTextWithEntity: typeof linkTextWithEntity,
		linkToCashtag: typeof linkToCashtag,
		linkToHashtag: typeof linkToHashtag,
		linkToMentionAndList: typeof linkToMentionAndList,
		linkToText: typeof linkToText,
		linkToTextWithSymbol: typeof linkToTextWithSymbol,
		linkToUrl: typeof linkToUrl,
		modifyIndicesFromUnicodeToUTF16: typeof modifyIndicesFromUnicodeToUTF16,
		modifyIndicesFromUTF16ToUnicode: typeof modifyIndicesFromUTF16ToUnicode,
		parseTweet: typeof parseTweet,
		regexen: regexen,
		removeOverlappingEntities: typeof removeOverlappingEntities,
		splitTags: typeof splitTags,
		tagAttrs: typeof tagAttrs,
	|};
}

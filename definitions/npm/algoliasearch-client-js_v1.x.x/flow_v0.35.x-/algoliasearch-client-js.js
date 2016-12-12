

declare module 'algoliasearch-client-js' {
		declare interface AlgoliaResponse {
		hits: any[],
		page: number,
		nbHits: number,
		nbPage: number,
		hitsPerPage: number,
		processingTimeMS: number,
		query: string,
		params: string
	}

	declare interface AlgoliaClient {
		initIndex(name: string): AlgoliaIndex,
		search(
		queries: {
		indexName: string,
		query: string,
		options: AlgoliaQueryParameters
	}, cb: (err: Error, res: any) => void
	): void,
		search(
		queries: {
		indexName: string,
		query: string,
		options: AlgoliaQueryParameters
	}
	): Promise<AlgoliaResponse>,
		clearCache(): void,
		destroy(): void,
		listIndexes(cb: (err: Error, res: any) => void): void,
		listIndexes(): Promise<any>,
		deleteIndex(name: string, cb: (err: Error, res: any) => void): void,
		deleteIndex(name: string): Promise<any>,
		copyIndex(from: string, to: string, cb: (err: Error, res: any) => void): void,
		copyIndex(from: string, to: string): Promise<any>,
		moveIndex(from: string, to: string, cb: (err: Error, res: any) => void): void,
		moveIndex(from: string, to: string): Promise<any>,
		generateSecuredApiKey(key: string, filters: AlgoliaSecuredApiOptions): void,
		batch(action: AlgoliaAction, cb: (err: Error, res: any) => void): void,
		batch(action: AlgoliaAction): Promise<any>,
		listUserKeys(cb: (err: Error, res: any) => void): void,
		listUserKeys(): Promise<any>,
		addUserKey(scopes: string[], cb: (err: Error, res: any) => void): void,
		addUserKey(scopes: string[]): Promise<any>,
		addUserKey(
		scopes: string[], options: AlgoliaUserKeyOptions, cb: (err: Error, res: any) => void
	): void,
		addUserKey(scopes: string[], options: AlgoliaUserKeyOptions): Promise<any>,
		updateUserKey(key: string, scopes: string[], cb: (err: Error, res: any) => void): void,
		updateUserKey(key: string, scopes: string[]): Promise<any>,
		updateUserKey(
		key: string, scopes: string[], options: AlgoliaUserKeyOptions, cb: (err: Error, res: any) => void
	): void,
		updateUserKey(key: string, scopes: string[], options: AlgoliaUserKeyOptions): Promise<any>,
		getUserKeyACL(key: string, cb: (err: Error, res: any) => void): void,
		getUserKeyACL(key: string): Promise<any>,
		deleteUserKey(key: string, cb: (err: Error, res: any) => void): void,
		deleteUserKey(key: string): Promise<any>,
		getLogs(options: LogsOptions, cb: (err: Error, res: any) => void): void,
		getLogs(options: LogsOptions): Promise<any>
	}

	declare interface AlgoliaIndex {
		getObject(objectID: string, cb: (err: Error, res: any) => void): void,
		getObject(
		objectID: string, attributes: string[], cb: (err: Error, res: any) => void
	): void,
		getObjects(objectIDs: string[], cb: (err: Error, res: any) => void): void,
		addObject(object: {
		
	}, cb: (err: Error, res: any) => void): void,
		addObject(object: {
		
	}, objectID: string, cb: (err: Error, res: any) => void): void,
		addObjects(objects: [{
		
	}], cb: (err: Error, res: any) => void): void,
		saveObject(object: {
		
	}, cb: (err: Error, res: any) => void): void,
		saveObjects(objects: [{
		
	}], cb: (err: Error, res: any) => void): void,
		partialUpdateObject(object: {
		
	}, cb: (err: Error, res: any) => void): void,
		partialUpdateObjects(objects: [{
		
	}], cb: (err: Error, res: any) => void): void,
		deleteObject(objectID: string, cb: (err: Error, res: any) => void): void,
		deleteObjects(objectIDs: string[], cb: (err: Error, res: any) => void): void,
		deleteByQuery(query: string, cb: (err: Error, res: any) => void): void,
		deleteByQuery(query: string, params: {
		
	}, cb: (err: Error, res: any) => void): void,
		waitTask(taskID: number, cb: (err: Error, res: any) => void): void,
		getSettings(cb: (err: Error, res: any) => void): void,
		setSettings(settings: AlgoliaIndexSettings, cb: (err: Error, res: any) => void): void,
		clearCache(): void,
		clearIndex(cb: (err: Error, res: any) => void): void,
		saveSynonym(
		synonym: AlgoliaSynonym, option: SynonymOption, cb: (err: Error, res: any) => void
	): void,
		batchSynonyms(
		synonyms: AlgoliaSynonym[], options: SynonymOption, cb: (err: Error, res: any) => void
	): void,
		deleteSynonym(
		identifier: string, options: SynonymOption, cb: (err: Error, res: any) => void
	): void,
		clearSynonyms(options: SynonymOption, cb: (err: Error, res: any) => void): void,
		getSynonym(identifier: string, cb: (err: Error, res: any) => void): void,
		searchSynonyms(options: SearchSynonymOptions, cb: (err: Error, res: any) => void): void,
		listUserKeys(cb: (err: Error, res: any) => void): void,
		addUserKey(scopes: string[], cb: (err: Error, res: any) => void): void,
		addUserKey(
		scopes: string[], options: AlgoliaUserKeyOptions, cb: (err: Error, res: any) => void
	): void,
		updateUserKey(key: string, scopes: string[], cb: (err: Error, res: any) => void): void,
		updateUserKey(
		key: string, scopes: string[], options: AlgoliaUserKeyOptions, cb: (err: Error, res: any) => void
	): void,
		getUserKeyACL(key: string, cb: (err: Error, res: any) => void): void,
		deleteUserKey(key: string, cb: (err: Error, res: any) => void): void,
		getObject(objectID: string): Promise<any>,
		getObject(objectID: string, attributes: string[]): Promise<any>,
		getObjects(objectIDs: string[]): Promise<any>,
		addObject(object: {
		
	}): Promise<any>,
		addObject(object: {
		
	}, objectID: string): Promise<any>,
		addObjects(objects: [{
		
	}]): Promise<any>,
		saveObject(object: {
		
	}): Promise<any>,
		saveObjects(objects: [{
		
	}]): Promise<any>,
		partialUpdateObject(object: {
		
	}): Promise<any>,
		partialUpdateObjects(objects: [{
		
	}]): Promise<any>,
		deleteObject(objectID: string): Promise<any>,
		deleteObjects(objectIDs: string[]): Promise<any>,
		deleteByQuery(query: string): Promise<any>,
		deleteByQuery(query: string, params: {
		
	}): Promise<any>,
		waitTask(taskID: number): Promise<any>,
		getSettings(): Promise<any>,
		setSettings(settings: AlgoliaIndexSettings): Promise<any>,
		search(params: AlgoliaQueryParameters): Promise<any>,
		search(params: AlgoliaQueryParameters, cb: (err: Error, res: any) => void): void,
		browse(query: string, cb: (err: Error, res: any) => void): void,
		browse(query: string): Promise<AlgoliaBrowseResponse>,
		browseFrom(cursor: string, cb: (err: Error, res: any) => void): void,
		browseFrom(cursor: string): Promise<AlgoliaBrowseResponse>,
		browseAll(): Promise<AlgoliaResponse>,
		clearIndex(): Promise<any>,
		saveSynonym(synonym: AlgoliaSynonym, option: SynonymOption): Promise<any>,
		batchSynonyms(synonyms: AlgoliaSynonym[], options: SynonymOption): Promise<any>,
		deleteSynonym(identifier: string, options: SynonymOption): Promise<any>,
		clearSynonyms(options: SynonymOption): Promise<any>,
		getSynonym(identifier: string): Promise<any>,
		searchSynonyms(options: SearchSynonymOptions): Promise<any>,
		listUserKeys(): Promise<any>,
		addUserKey(scopes: string[]): Promise<any>,
		addUserKey(scopes: string[], options: AlgoliaUserKeyOptions): Promise<any>,
		updateUserKey(key: string, scopes: string[]): Promise<any>,
		updateUserKey(key: string, scopes: string[], options: AlgoliaUserKeyOptions): Promise<any>,
		getUserKeyACL(key: string): Promise<any>,
		deleteUserKey(key: string): Promise<any>
	}

	declare interface ClientOptions {
		timeout?: number,
		protocol?: string,
		httpAgent?: any,
		hosts?: {
		read?: string[],
		write?: string[]
	}
	}

	declare interface LogsOptions {
		offset?: number,
		length?: number,
		onlyErrors?: boolean,
		type?: string
	}

	declare interface AlgoliaAction {
		action: string,
		indexName: string,
		body: {
		
	}
	}

	declare interface AlgoliaUserKeyOptions {
		validity?: number,
		maxQueriesPerIPPerHour?: number,
		maxHitsPerQuery?: boolean,
		indexes?: string[],
		referers?: string[],
		queryParameters?: AlgoliaQueryParameters,
		description?: string
	}

	declare interface SynonymOption {
		forwardToSlaves?: boolean,
		replaceExistingSynonyms?: boolean
	}

	declare interface SearchSynonymOptions {
		query?: string,
		page?: number,
		type?: string,
		hitsPerPage?: number
	}

	declare interface AlgoliaBrowseResponse {
		cursor?: string,
		hits: any[],
		params: string,
		query: string,
		processingTimeMS: number
	}

	declare interface AlgoliaSynonym {
		objectID: string,
		type: string,
		synonyms: string[]
	}

	declare interface AlgoliaSecuredApiOptions {
		filters?: string,
		validUntil?: number,
		restrictIndices?: string,
		userToken?: string
	}

	declare interface AlgoliaIndexSettings {
		attributesToIndex?: string[],
		attributesforFaceting?: string[],
		unretrievableAttributes?: string[],
		attributesToRetrieve?: string[],
		ranking?: string[],
		customRanking?: string[],
		slaves?: string[],
		maxValuesPerFacet?: string,
		attributesToHighlight?: string[],
		attributesToSnippet?: string[],
		highlightPreTag?: string,
		highlightPostTag?: string,
		snippetEllipsisText?: string,
		restrictHighlightAndSnippetArrays?: boolean,
		hitsPerPage?: number,
		minWordSizefor1Typo?: number,
		minWordSizefor2Typos?: number,
		typoTolerance?: any,
		allowTyposOnNumericTokens?: boolean,
		ignorePlurals?: boolean,
		disableTypoToleranceOnAttributes?: string,
		separatorsToIndex?: string,
		queryType?: any,
		removeWordsIfNoResults?: string,
		advancedSyntax?: boolean,
		optionalWords?: string[],
		removeStopWords?: string[],
		disablePrefixOnAttributes?: string[],
		disableExactOnAttributes?: string[],
		exactOnSingleWordQuery?: string,
		alternativesAsExact?: any,
		attributeForDistinct?: string,
		distinct?: any,
		numericAttributesToIndex?: string[],
		allowCompressionOfIntegerArray?: boolean,
		altCorrections?: [{
		
	}],
		minProximity?: number,
		placeholders?: any
	}

	declare interface AlgoliaQueryParameters {
		query?: string,
		filters?: string,
		attributesToRetrieve?: string[],
		restrictSearchableAttributes?: string[],
		facets?: string,
		maxValuesPerFacet?: string,
		attributesToHighlight?: string[],
		attributesToSnippet?: string[],
		highlightPreTag?: string,
		highlightPostTag?: string,
		snippetEllipsisText?: string,
		restrictHighlightAndSnippetArrays?: boolean,
		hitsPerPage?: number,
		page?: number,
		offset?: number,
		length?: number,
		minWordSizefor1Typo?: number,
		minWordSizefor2Typos?: number,
		typoTolerance?: boolean,
		allowTyposOnNumericTokens?: boolean,
		ignorePlurals?: boolean,
		disableTypoToleranceOnAttributes?: string,
		aroundLatLng?: string,
		aroundLatLngViaIP?: string,
		aroundRadius?: any,
		aroundPrecision?: number,
		minimumAroundRadius?: number,
		insideBoundingBox?: string,
		queryType?: any,
		insidePolygon?: string,
		removeWordsIfNoResults?: string,
		advancedSyntax?: boolean,
		optionalWords?: string[],
		removeStopWords?: string[],
		disableExactOnAttributes?: string[],
		exactOnSingleWordQuery?: string,
		alternativesAsExact?: any,
		distinct?: any,
		getRankingInfo?: boolean,
		numericAttributesToIndex?: string[],
		numericFilters?: string[],
		tagFilters?: string,
		facetFilters?: string,
		analytics?: boolean,
		analyticsTags?: string[],
		synonyms?: boolean,
		replaceSynonymsInHighlight?: boolean,
		minProximity?: number
	}

			
}

declare module 'algoliasearch' {
			declare function algoliasearch(applicationId: string, apiKey: string, options?: ClientOptions): AlgoliaClient

		declare module.exports: undefined


}
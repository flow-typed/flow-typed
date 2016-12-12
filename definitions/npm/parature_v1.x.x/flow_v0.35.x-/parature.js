

declare module 'parature' {
					
}

declare module 'Page' {
		declare export interface KbSearchControl {
		addOnResultOpened(handler: () => void): void,
		addOnSelection(handler: () => void): void,
		getSearchQuery(): string,
		getSelectedResult(): KbSearchResult,
		removeOnResultOpened(handler: () => void): void,
		removeOnSelection(handler: () => void): void,
		setSearchQuery(query: string): void
	}

	declare export interface KbSearchResult {
		answer: string,
		articleId: string,
		articleUid: string,
		createdOn: Date,
		expiredDate: Date,
		isAssociated: boolean,
		lastModifiedOn: Date,
		publicUrl: string,
		published: boolean,
		question: string,
		rating: number,
		searchBlurb: string,
		serviceDeskUri: string,
		timesViewed: number
	}

			
}
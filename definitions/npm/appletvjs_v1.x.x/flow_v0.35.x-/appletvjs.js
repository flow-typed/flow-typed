import type { App, Device, NavigationDocument, Settings } from 'npm$namespace$AppleTVJS'

declare module 'appletvjs' {
			declare function evaluateScripts(scripts: string[], complete: (success: boolean) => void): void

		
}

declare module 'npm$namespace$AppleTVJS' {
		declare interface App {
		onError: (options: any) => void,
		onExit: (options: any) => void,
		onLaunch: (options: any) => void,
		reload(options?: any, reloadData?: any): void
	}

	declare interface Device {
		appIdentifier: string,
		appVersion: string,
		model: string,
		productType: string,
		systemVersion: string,
		vendorIdentifier: string
	}

	declare interface FeatureElement {
		getFeature(feature: string): any
	}

	declare interface Keyboard {
		text: string,
		onTextChange: () => void
	}

	declare interface MenuBarDocument {
		getDocument(menuItem: Element): Document,
		setDocument(document: Document, menuItem: Element): void,
		setSelectedItem(menuItem: Element): void
	}

	declare interface NavigationDocument {
		insertBeforeDocument(document: Document, beforeDocument?: Document): void,
		pushDocument(document: Document): void,
		replaceDocument(document: Document, beforeDocument?: Document): void,
		dismissModal(): void,
		presentModal(document: Document): void,
		documents: Document[],
		clear(): void,
		popDocument(): void,
		popToDocument(document: Document): void,
		popToRootDocument(): void,
		removeDocument(document: Document): void
	}

	declare interface Restrictions {
		allowsExplicit: boolean,
		maxMovieRank: number,
		maxMovieRatingForCountry(countryCode: string): string,
		maxTVShowRank: number,
		maxTVShowRatingForCountry(countryCode: string): string
	}

	declare interface Settings {
		restrictions: Restrictions,
		language: string,
		storefrontCountryCode: string,
		onRestrictionsChange: () => void
	}

		declare class Highlight  {
		name: string;
		description: string;
		starttime: number;
		duration: number;
		imageURL: string
	}

	declare class HighlightGroup  {
		name: string;
		hightlights: Highlight[]
	}

	declare class Interstitial  {
		starttime: number;
		duration: number
	}

	declare class MediaItem  {
		constructor(type: string, url?: string): this;
		contentRatingDomain: string;
		contentRatingRanking: number;
		isExplicit: boolean;
		artworkImageURL: string;
		description: string;
		subtitle: string;
		title: string;
		type: string;
		url: string;
		highlightGroups: HighlightGroup[];
		interstitials: Interstitial[];
		resumeTime: number;
		loadAssetID: (url: string, callback: (assetID: string, error: string) => void) => void;
		loadCertificate: (url: string, callback: (certificate: string, error: string) => void) => void;
		loadKey: (
		url: string, requestData: any, callback: (key: string, renewalDate: string, error: string) => void
	) => void
	}

	declare class Player  {
		overlayDocument: Document;
		playlist: Playlist;
		present(): void;
		pause(): void;
		play(): void;
		playbackState: string;
		seekToTime(time: number): void;
		setPlaybackRate(playbackRate: number): void;
		stop(): void;
		currentMediaItem: MediaItem;
		nextMediaItem: MediaItem;
		previousMediaItem: MediaItem;
		mediaItemDidChange: (reason: string) => void;
		requestSeekToTime: (result?: any) => void;
		shouldHandleStateChange: (result: boolean) => void;
		stateDidChange: () => void;
		stateWillChange: () => void;
		timeBoundaryDidCross: () => void;
		timeDidChange: () => void;
		timedMetadata: () => void
	}

	declare class Playlist  {
		item(index: number): MediaItem;
		length: number;
		pop(): MediaItem;
		push(object: MediaItem): void;
		splice(index: number, howManu: number, object: MediaItem): MediaItem[]
	}

	declare class TVError  {
		code: string;
		description: string;
		domain: string;
		userInfo: any
	}

	
}
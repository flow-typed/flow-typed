import type { RSSFactory } from 'npm$namespace$NodeRSS'

declare module 'rss' {
					declare module.exports: RSSFactory


}

declare module 'npm$namespace$NodeRSS' {
		declare interface FeedOptions {
		title: string,
		description?: string,
		generator?: string,
		feed_url: string,
		site_url: string,
		image_url?: string,
		docs?: string,
		managingEditor?: string,
		webMaster?: string,
		copyright?: string,
		language?: string,
		categories?: string[],
		pubDate?: Date | string,
		ttl?: number,
		hub?: string,
		custom_namespaces?: Object,
		custom_elements?: any[]
	}

	declare interface EnclosureObject {
		url: string,
		file: string,
		size?: number,
		type?: string
	}

	declare interface ItemOptions {
		title: string,
		description: string,
		url: string,
		guid?: string,
		categories?: string[],
		author?: string,
		date: Date | string,
		lat?: number,
		long?: number,
		custom_elements?: any[],
		enclosure?: EnclosureObject
	}

	declare interface XmlOptions {
		indent?: boolean | string
	}

	declare interface RSS {
		item(itemOptions: ItemOptions): RSS,
		xml(): string,
		xml(xmlOptions: XmlOptions): string
	}

	declare interface RSSFactory {
		new (feedOptions: FeedOptions): RSS
	}

			
}
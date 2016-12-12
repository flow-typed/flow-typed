

declare module 'timelinejs' {
			declare function createStoryJS(config: knightlab.ITimeLineConfiguration): void

		
}

declare module 'npm$namespace$knightlab' {
		declare export interface ITimeLineConfiguration {
		width: string,
		height: string,
		source: any,
		type?: string,
		embed_id?: string,
		start_at_end?: boolean,
		start_at_slide?: string,
		start_zoom_adjust?: string,
		hash_bookmark?: boolean,
		font?: string,
		debug?: boolean,
		lang?: string,
		css?: string,
		js?: string,
		gmap_key?: string,
		maptype?: string
	}

	declare export interface ITimelineModel {
		timeline: ITimeLine
	}

	declare export interface ITimeLine {
		headline?: string,
		type?: string,
		text?: string,
		asset?: ITimeLineAsset,
		date?: ITimelineDate[],
		era?: ITimelineEra[]
	}

	declare export interface ITimeLineAsset {
		media: string,
		thumbnail?: string,
		credit: string,
		caption: string
	}

	declare export interface ITimelineDate {
		classname?: string,
		asset?: ITimeLineAsset
	}

	declare export interface ITimelineEra {
		startDate: string,
		endDate: string,
		headline: string,
		text: string,
		tag?: string
	}

			
}
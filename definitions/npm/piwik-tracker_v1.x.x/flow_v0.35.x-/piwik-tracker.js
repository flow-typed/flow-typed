

declare module 'piwik-tracker' {
		declare interface PiwikTrackOptions {
		url: string,
		action_name?: string,
		_id?: string,
		rand?: string,
		apiv?: number,
		urlref?: string,
		_cvar?: string,
		_idvc?: string,
		_viewts?: string,
		_idts?: string,
		_rcn?: string,
		_rck?: string,
		res?: string,
		h?: number,
		m?: number,
		s?: number,
		ua?: string,
		lang?: string,
		uid?: string,
		cid?: string,
		new_visit?: number,
		cvar?: string,
		link?: string,
		download?: string,
		search?: string,
		search_cat?: string,
		search_count?: number,
		idgoal?: number,
		revenue?: number,
		gt_ms?: number,
		cs?: string,
		e_c?: string,
		e_a?: string,
		e_n?: string,
		e_v?: string,
		c_n?: string,
		c_p?: string,
		c_t?: string,
		c_i?: string,
		ec_id?: string,
		ec_items?: string,
		ec_st?: number,
		ec_tx?: number,
		ec_sh?: number,
		ec_dt?: number,
		_ects?: number,
		token_auth?: string,
		cip?: string,
		cdt?: string,
		country?: string,
		region?: string,
		city?: string,
		lat?: string,
		long?: string,
		send_image?: number
	}

		declare class PiwikTracker extends events$EventEmitter {
		constructor(siteId: number, trackerUrl: string): this;
		track(options: PiwikTrackOptions): void
	}

	declare module.exports: undefined


}
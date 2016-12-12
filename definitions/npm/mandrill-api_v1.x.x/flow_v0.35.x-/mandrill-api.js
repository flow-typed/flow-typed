

declare module 'mandrill-api' {
		declare export interface ICallback {
		(json: Object): void
	}

	declare export interface IErrorCallback {
		(err: Error): void
	}

		declare export class Mandrill  {
		apikey: string;
		debug: boolean;
		templates: Templates;
		exports: Exports;
		users: Users;
		rejects: Rejects;
		inbound: Inbound;
		tags: Tags;
		messages: Messages;
		whitelists: Whitelists;
		ips: Ips;
		internal: Internal;
		subaccounts: Subaccounts;
		urls: Urls;
		webhooks: Webhooks;
		senders: Senders;
		metadata: Metadata;
		onerror: IErrorCallback;
		constructor(apikey: string, debug?: boolean): this;
		call(uri: string, params: any, onresult?: ICallback, onerror?: ICallback): void
	}

	declare export class Templates  {
		constructor(master: Mandrill): this;
		add(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		update(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		publish(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		delete(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		timeSeries(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		render(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Exports  {
		constructor(master: Mandrill): this;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		rejects(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		whitelist(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		activity(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Users  {
		constructor(master: Mandrill): this;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		ping(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		ping2(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		senders(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Rejects  {
		constructor(master: Mandrill): this;
		add(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		delete(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Inbound  {
		constructor(master: Mandrill): this;
		domains(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		addDomain(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		checkDomain(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		deleteDomain(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		routes(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		addRoute(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		updateRoute(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		deleteRoute(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		sendRaw(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Tags  {
		constructor(master: Mandrill): this;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		delete(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		timeSeries(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		allTimeSeries(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Messages  {
		constructor(master: Mandrill): this;
		send(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		sendTemplate(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		search(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		searchTimeSeries(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		content(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		parse(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		sendRaw(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		listScheduled(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		cancelScheduled(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		reschedule(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Whitelists  {
		constructor(master: Mandrill): this;
		add(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		delete(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Ips  {
		constructor(master: Mandrill): this;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		provision(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		startWarmup(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		cancelWarmup(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		setPool(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		delete(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		listPools(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		poolInfo(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		createPool(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		deletePool(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		checkCustomDns(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		setCustomDns(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Internal  {
		constructor(master: Mandrill): this
	}

	declare export class Subaccounts  {
		constructor(master: Mandrill): this;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		add(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		update(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		delete(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		pause(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		resume(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Urls  {
		constructor(master: Mandrill): this;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		search(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		timeSeries(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		trackingDomains(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		addTrackingDomain(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		checkTrackingDomain(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Webhooks  {
		constructor(master: Mandrill): this;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		add(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		update(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		delete(params: {
		id: number
	}, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Senders  {
		constructor(master: Mandrill): this;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		domains(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		addDomain(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		checkDomain(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		verifyDomain(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		info(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		timeSeries(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	declare export class Metadata  {
		constructor(master: Mandrill): this;
		list(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		add(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		update(params: any, onsuccess?: ICallback, onerror?: ICallback): void;
		delete(params: any, onsuccess?: ICallback, onerror?: ICallback): void
	}

	
}
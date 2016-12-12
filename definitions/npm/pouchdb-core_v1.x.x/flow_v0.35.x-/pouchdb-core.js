import type { Static } from 'npm$namespace$PouchDB'

declare module 'pouchdb-core' {
					declare module.exports: Static


}

declare module 'Core' {
	declare type AnyCallback = Callback<any, any>;

	declare type DocumentId = string;

	declare type DocumentKey = string;

	declare type RevisionId = string;

	declare type Availability = "available" | "compacted" | "not compacted" | "missing";

	declare type Attachment = string | ArrayBuffer;

	declare type Encodable = {
		[propertyName: string]: any
	};

	declare type NewDocument<Content> = Content;

	declare type Document<Content> = Content & IdMeta;

	declare type ExistingDocument<Content> = Document<Content> & RevisionIdMeta;

	declare interface Error {
		
	}

	declare interface Callback<E, R> {
		(error: E | void, result: R | void): void
	}

	declare interface Options {
		ajax?: Configuration.RemoteRequesterConfiguration
	}

	declare interface BasicResponse {
		ok: boolean
	}

	declare interface Response {
		id: DocumentId,
		rev: RevisionId
	}

	declare interface DatabaseInfo {
		
	}

	declare interface Revision<Content> {
		ok: Document<Content> & RevisionIdMeta
	}

	declare interface RevisionInfo {
		rev: RevisionId,
		status: Availability
	}

	declare interface IdMeta {
		_id: DocumentId
	}

	declare interface RevisionIdMeta {
		_rev: RevisionId
	}

	declare interface GetMeta {
		_conflicts?: RevisionId[],
		_rev?: RevisionId,
		_revs_info?: RevisionInfo[],
		_revisions?: {
		ids: RevisionId[],
		start: number
	}
	}

	declare interface AllDocsOptions {
		attachments?: boolean,
		binary?: boolean,
		conflicts?: boolean,
		descending?: boolean,
		include_docs?: boolean,
		limit?: number,
		skip?: number
	}

	declare interface AllDocsWithKeyOptions {
		key: DocumentKey
	}

	declare interface AllDocsWithKeysOptions {
		keys: DocumentId[]
	}

	declare interface AllDocsWithinRangeOptions {
		startkey: DocumentKey,
		endkey: DocumentKey,
		inclusive_end?: boolean
	}

	declare interface AllDocsMeta {
		_attachments?: {
		[attachmentId: string]: Attachment
	}
	}

	declare interface AllDocsResponse<Content> {
		offset: number,
		total_rows: number,
		rows: {
		doc?: Document<Content & AllDocsMeta>,
		id: DocumentId,
		key: DocumentKey,
		value: {
		rev: RevisionId
	}
	}[]
	}

	declare interface DestroyOptions {
		
	}

	declare interface GetOptions {
		conflicts?: boolean,
		rev?: RevisionId,
		revs?: boolean,
		revs_info?: boolean
	}

	declare interface GetOpenRevisions {
		open_revs: "all" | Core.RevisionId[]
	}

	declare interface PutOptions {
		
	}

	declare interface PostOptions {
		
	}

	declare interface CompactOptions {
		interval?: number
	}

	declare interface InfoOptions {
		
	}

			
}

declare module 'npm$namespace$PouchDB' {
	declare export type Plugin = "This should be passed to PouchDB.plugin()";

	declare interface Static {
		plugin(plugin: Plugin): Static,
		new <Content>(
		name?: string, options?: Configuration.DatabaseConfiguration
	): Database<Content>
	}

	declare interface Database<Content> {
		allDocs(options: Core.AllDocsWithKeyOptions): Promise<Core.AllDocsResponse<Content>>,
		allDocs(options: Core.AllDocsWithKeysOptions): Promise<Core.AllDocsResponse<Content>>,
		allDocs(
		options: Core.AllDocsWithinRangeOptions
	): Promise<Core.AllDocsResponse<Content>>,
		allDocs(options?: Core.AllDocsOptions): Promise<Core.AllDocsResponse<Content>>,
		bulkDocs(
		docs: Core.Document<Content>[], options: Core.PutOptions | void, callback: Core.Callback<Core.Error, Core.Response[]>
	): void,
		bulkDocs(
		docs: Core.Document<Content>[], options?: Core.PutOptions
	): Promise<Core.Response[]>,
		compact(options?: Core.CompactOptions): Promise<Core.Response>,
		compact(
		options: Core.CompactOptions, callback: Core.Callback<Core.Error, Core.Response>
	): void,
		destroy(options: Core.DestroyOptions | void, callback: Core.AnyCallback): void,
		destroy(options?: Core.DestroyOptions | void): Promise<void>,
		get(
		docId: Core.DocumentId, options: Core.GetOpenRevisions
	): Promise<Core.Revision<Content>[]>,
		get(
		docId: Core.DocumentId, options: Core.GetOpenRevisions, callback: Core.Callback<any, Core.Revision<Content>[]>
	): void,
		get(
		docId: Core.DocumentId, options: Core.GetOptions
	): Promise<Core.Document<Content> & Core.GetMeta>,
		get(
		docId: Core.DocumentId, options: Core.GetOptions, callback: Core.Callback<any, Core.Document<Content> & Core.GetMeta>
	): void,
		get(
		docId: Core.DocumentId, options: void, callback: Core.Callback<any, Core.Document<Content>>
	): void,
		get(docId: Core.DocumentId): Promise<Core.Document<Content>>,
		post(
		doc: Core.NewDocument<Content>, options: Core.PostOptions | void, callback: Core.Callback<Core.Error, Core.Response>
	): void,
		post(
		doc: Core.NewDocument<Content>, options?: Core.PostOptions
	): Promise<Core.Response>,
		put(
		doc: Core.Document<Content>, id: Core.DocumentId | void, revision: Core.RevisionId | void, options: Core.PutOptions | void, callback: Core.Callback<Core.Error, Core.Response>
	): void,
		put(
		doc: Core.Document<Content>, id?: Core.DocumentId, revision?: Core.RevisionId, options?: Core.PutOptions
	): Promise<Core.Response>,
		remove(
		doc: Core.Document<Content>, options: Core.Options, callback: Core.Callback<Core.Error, Core.Response>
	): void,
		remove(
		docId: Core.DocumentId, revision: Core.RevisionId, options: Core.Options, callback: Core.Callback<Core.Error, Core.Response>
	): void,
		remove(doc: Core.Document<Content>, options?: Core.Options): Promise<Core.Response>,
		remove(
		docId: Core.DocumentId, revision: Core.RevisionId, options?: Core.Options
	): Promise<Core.Response>,
		info(
		options: Core.InfoOptions | void, callback: Core.Callback<any, Core.DatabaseInfo>
	): void,
		info(options?: Core.InfoOptions): Promise<Core.DatabaseInfo>
	}

			
}

declare module 'Configuration' {
	declare type DatabaseConfiguration = LocalDatabaseConfiguration | RemoteDatabaseConfiguration;

	declare interface CommonDatabaseConfiguration {
		name?: string,
		adapter?: string
	}

	declare interface LocalDatabaseConfiguration {
		auto_compaction?: boolean,
		revs_limit?: number
	}

	declare interface RemoteRequesterConfiguration {
		timeout?: number,
		cache?: boolean,
		headers?: {
		[name: string]: string
	},
		username?: string,
		password?: string,
		withCredentials?: boolean,
		skip_setup?: boolean
	}

	declare interface RemoteDatabaseConfiguration {
		ajax?: RemoteRequesterConfiguration
	}

			
}
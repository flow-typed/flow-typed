import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-upsert' {
					declare module.exports: Plugin


}

declare module 'npm$namespace$PouchDB' {
		declare interface Database<Content> {
		upsert(
		docId: Core.DocumentId, diffFun: UpsertDiffCallback<Content>
	): Promise<Core.Response>,
		upsert(
		docId: Core.DocumentId, diffFun: UpsertDiffCallback<Content>, callback: Core.Callback<Core.Error, Core.Response>
	): void,
		putIfNotExists(doc: Core.Document<Content>): Promise<Core.Response>,
		putIfNotExists(
		doc: Core.Document<Content>, callback: Core.Callback<Core.Error, Core.Response>
	): void
	}

	declare interface UpsertDiffCallback<Content> {
		(doc: Core.Document<Content>): Core.Document<Content> | boolean
	}

			
}
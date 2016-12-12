import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-mapreduce' {
					
}

declare module 'npm$namespace$PouchDB' {
		declare export interface Database<Content> {
		viewCleanup(callback: PouchDB.Core.Callback<any, void>): void,
		viewCleanup(): Promise<void>
	}

			
}

declare module 'pouchdb-adapter-mapreduce' {
					declare module.exports: Plugin


}
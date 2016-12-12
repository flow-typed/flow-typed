import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-adapter-localstorage' {
					declare module.exports: Plugin


}

declare module 'LocalStorageAdapter' {
		declare interface LocalStorageAdapterConfiguration {
		adapter: "localstorage"
	}

			
}

declare module 'npm$namespace$PouchDB' {
		declare interface Static {
		new <Content>(
		name: string | void, options: LocalStorageAdapter.LocalStorageAdapterConfiguration
	): Database<Content>
	}

			
}
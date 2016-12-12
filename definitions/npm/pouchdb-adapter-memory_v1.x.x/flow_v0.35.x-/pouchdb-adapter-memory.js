import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-adapter-memory' {
					declare module.exports: Plugin


}

declare module 'MemoryAdapter' {
		declare interface MemoryAdapterConfiguration {
		adapter: "memory"
	}

			
}

declare module 'npm$namespace$PouchDB' {
		declare interface Static {
		new <Content>(
		name: string | void, options: MemoryAdapter.MemoryAdapterConfiguration
	): Database<Content>
	}

			
}
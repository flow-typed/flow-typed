import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-adapter-leveldb' {
					declare module.exports: Plugin


}

declare module 'LevelDbAdapter' {
		declare interface LevelDbAdapterConfiguration {
		adapter: "leveldb"
	}

			
}

declare module 'npm$namespace$PouchDB' {
		declare interface Static {
		new <Content>(
		name: string | void, options: LevelDbAdapter.LevelDbAdapterConfiguration
	): Database<Content>
	}

			
}
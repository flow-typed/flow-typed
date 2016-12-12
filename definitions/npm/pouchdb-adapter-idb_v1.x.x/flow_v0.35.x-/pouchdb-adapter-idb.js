import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-adapter-idb' {
					declare module.exports: Plugin


}

declare module 'Core' {
		declare interface DatabaseInfo {
		idb_attachment_format?: "base64" | "binary"
	}

			
}

declare module 'IdbAdapter' {
		declare interface IdbAdapterConfiguration {
		storage?: "persistent" | "temporary",
		adapter: "idb"
	}

			
}

declare module 'npm$namespace$PouchDB' {
		declare interface Static {
		new <Content>(
		name: string | void, options: IdbAdapter.IdbAdapterConfiguration
	): Database<Content>
	}

			
}
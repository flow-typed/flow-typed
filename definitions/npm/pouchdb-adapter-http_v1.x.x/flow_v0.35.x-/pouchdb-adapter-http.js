import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-adapter-http' {
					declare module.exports: Plugin


}

declare module 'HttpAdapter' {
		declare interface HttpAdapterConfiguration {
		adapter: "http"
	}

			
}

declare module 'npm$namespace$PouchDB' {
		declare interface Static {
		new <Content>(
		name: string | void, options: HttpAdapter.HttpAdapterConfiguration
	): Database<Content>
	}

			
}
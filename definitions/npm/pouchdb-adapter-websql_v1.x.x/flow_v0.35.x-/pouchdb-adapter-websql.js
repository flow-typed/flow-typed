import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-adapter-websql' {
					declare module.exports: Plugin


}

declare module 'Core' {
		declare interface DatabaseInfo {
		sqlite_plugin?: boolean,
		websql_encoding?: "UTF-8" | "UTF-16"
	}

			
}

declare module 'AdapterWebSql' {
		declare interface Configuration {
		size?: number,
		adapter: "websql"
	}

			
}

declare module 'npm$namespace$PouchDB' {
		declare interface Static {
		new <Content>(
		name: string | void, options: AdapterWebSql.Configuration
	): Database<Content>
	}

			
}
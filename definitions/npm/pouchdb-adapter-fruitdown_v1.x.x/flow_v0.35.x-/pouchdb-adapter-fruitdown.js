import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-adapter-fruitdown' {
					declare module.exports: Plugin


}

declare module 'FruitDOWNAdapter' {
		declare interface FruitDOWNAdapterConfiguration {
		adapter: "fruitdown"
	}

			
}

declare module 'npm$namespace$PouchDB' {
		declare interface Static {
		new <Content>(
		name: string | void, options: FruitDOWNAdapter.FruitDOWNAdapterConfiguration
	): Database<Content>
	}

			
}
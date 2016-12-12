import type { Static } from 'npm$namespace$PouchDB'

declare module 'pouchdb-node' {
					declare module.exports: Static


}

declare module 'Core' {
		declare interface DatabaseInfo {
		backend_adapter?: string
	}

			
}
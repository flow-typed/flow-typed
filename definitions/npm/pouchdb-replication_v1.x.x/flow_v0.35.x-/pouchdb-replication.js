import type { Plugin } from 'npm$namespace$PouchDB'

declare module 'pouchdb-replication' {
					declare module.exports: Plugin


}

declare module 'Replication' {
		declare interface ReplicationMeta {
		_replication_id: string,
		_replication_state: string,
		_replication_state_time: number,
		_replication_stats: {
		
	}
	}

			
}
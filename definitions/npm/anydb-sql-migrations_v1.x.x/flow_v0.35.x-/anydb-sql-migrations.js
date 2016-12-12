

declare module 'anydb-sql-migrations' {
		declare export interface Migration {
		version: string
	}

	declare export interface MigrationsTable {
		version: Column<string>
	}

	declare export interface MigFn {
		(tx: Transaction): Promise<any>
	}

	declare export interface MigrationTask {
		up: MigFn,
		down: MigFn,
		name: string
	}

	declare export function create(
		db: AnydbSql, tasks: any
	): {
		run: () => Promise<any>,
		migrateTo: (target?: string) => Promise<any>,
		check: (f: (m: {
		type: string,
		items: MigrationTask[]
	}) => any) => Promise<any>
	}

		
}
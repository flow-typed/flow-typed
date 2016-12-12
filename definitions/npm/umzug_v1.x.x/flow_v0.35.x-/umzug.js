

declare module 'umzug' {
		declare interface MigrationOptions {
		params?: Array<any>,
		path?: string,
		pattern?: RegExp,
		wrap?: <T>(fn: T) => T
	}

	declare interface JSONStorageOptions {
		path?: string
	}

	declare interface SequelizeStorageOptions {
		sequelize?: Sequelize.Sequelize,
		model?: Sequelize.Model<any, any>,
		modelName?: string,
		tableName?: string,
		columnName: string,
		columnType: Sequelize.DataTypeAbstract
	}

	declare interface ExecuteOptions {
		migrations?: Array<string>,
		method?: string
	}

	declare interface UmzugOptions {
		storage?: string,
		storageOptions?: JSONStorageOptions | SequelizeStorageOptions | Object,
		logging?: boolean | Function,
		upName?: string,
		downName?: string,
		migrations?: MigrationOptions
	}

	declare interface UpDownToOptions {
		to: string
	}

	declare interface UpDownMigrationsOptions {
		migrations: Array<string>
	}

	declare interface Migration {
		path: string,
		file: string
	}

	declare interface Umzug {
		execute(options?: ExecuteOptions): Promise<Migration[]>,
		pending(): Promise<Migration[]>,
		executed(): Promise<Migration[]>,
		up(migration?: string): Promise<Migration[]>,
		up(migrations?: string[]): Promise<Migration[]>,
		up(options?: UpDownToOptions | UpDownMigrationsOptions): Promise<Migration[]>,
		down(migration?: string): Promise<Migration[]>,
		down(migrations?: string[]): Promise<Migration[]>,
		down(options?: UpDownToOptions | UpDownMigrationsOptions): Promise<Migration[]>
	}

	declare interface UmzugStatic {
		new (options?: UmzugOptions): Umzug
	}

			declare module.exports: UmzugStatic


}
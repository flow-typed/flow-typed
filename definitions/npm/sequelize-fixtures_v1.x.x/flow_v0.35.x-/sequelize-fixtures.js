

declare module 'sequelize-fixtures' {
					declare module.exports: SequelizeFixturesStatic


}

declare module 'SequelizeFixtures' {
		declare interface Options {
		encoding?: string,
		log?: (message: string) => void,
		transaction?: Sequelize.Transaction,
		transformFixtureDataFn?: (data: any) => any
	}

	declare interface SequelizeFixturesStatic {
		loadFile(file: string, models: any, options?: Options): Promise<any>,
		loadFiles(files: string[], models: any, options?: Options): Promise<any>,
		loadFixture(fixture: any, models: any, options?: Options): Promise<any>,
		loadFixtures(fixtures: any[], models: any, options?: Options): Promise<any>
	}

			
}
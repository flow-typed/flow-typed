

declare module 'falcor-express' {
			declare function dataSourceRoute(getDataSource: (req: Request, res: Response) => DataSource): Handler

		
}
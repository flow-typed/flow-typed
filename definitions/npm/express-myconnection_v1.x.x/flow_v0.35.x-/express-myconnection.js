

declare module 'express-myconnection' {
			declare function connection(
		mysql: mysql.IMySql, dbConfig: mysql.IConnectionConfig, strategy: string
	): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$mysql' {
		declare export interface IConnection {
		
	}

	declare export interface IError {
		
	}

			
}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		getConnection?: (callback: (err: mysql.IError, connection: mysql.IConnection) => void) => void
	}

			
}
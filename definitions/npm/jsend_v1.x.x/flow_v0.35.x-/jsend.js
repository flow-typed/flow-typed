

declare module 'jsend' {
					


}

declare module 'npm$namespace$Express' {
		declare export interface Response {
		jsend: jsend.jsendExpress
	}

			
}

declare module 'npm$namespace$jsend' {
		declare interface JSendObject {
		status: string,
		code?: number,
		data?: any,
		message?: string
	}

	declare interface jsendCore {
		success(data: Object): JSendObject,
		fail(data: Object): JSendObject,
		error(
		message: string | {
		message: string,
		code?: number,
		data?: Object
	}
	): JSendObject
	}

	declare interface jsendExpress {
		(err: string | Object, json?: Object): void
	}

	declare interface jsend {
		isValid(json: Object): boolean,
		forward(json: Object, done: (err: any, data: any) => any): void,
		fromArguments(err: string | Object, json?: Object): JSendObject,
		middleware(req: any, res: any, next: Function): any
	}

	declare interface jsendExport {
		(config?: {
		strict: boolean
	}, host?: Object): jsend
	}

			
}
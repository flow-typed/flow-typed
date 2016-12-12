

declare module 'jjve' {
		declare interface Issue {
		code: string,
		message: string,
		data: any,
		path: string
	}

	declare interface Env {
		(schema: Object, data: any, errors: jjv.Errors): Issue[]
	}

	declare function jjve(jjv: jjv.Env): jjve.Env

		declare module.exports: undefined


}
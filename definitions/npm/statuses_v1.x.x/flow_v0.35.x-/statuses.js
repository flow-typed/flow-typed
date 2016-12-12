

declare module 'statuses' {
		declare interface Status {
		[code: number]: string,
		[msg: string]: any | number,
		codes: Array<number>,
		redirect: {
		[code: number]: boolean
	},
		empty: {
		[code: number]: boolean
	},
		retry: {
		[code: number]: boolean
	},
		(code: number | string): number
	}

			declare module.exports: Status


}


declare module 'easy-jsend' {
			declare export function init(conf?: {
		partial: boolean
	}): void

		
}

declare module 'npm$namespace$Express' {
		declare interface MakePartialInput {
		model: any,
		opts: {
		limit: number,
		skip: number
	},
		search: Object,
		result: any
	}

	declare interface PartialInput {
		limit?: number,
		offset: number,
		count: number,
		data: any
	}

	declare export interface Response {
		success(data?: any, status?: number): void,
		fail(data: any, status?: number): void,
		error(err: any, status?: number): void,
		partial(data: PartialInput, status?: number): void,
		makePartial(data: MakePartialInput): void
	}

			
}
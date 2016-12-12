

declare module 'mongoose-paginate' {
					declare module.exports: undefined


}

declare module 'mongoose' {
		declare export interface PaginateOptions {
		select?: Object | string,
		sort?: Object | string,
		populate?: Array<Object> | Array<string> | Object | string,
		lean?: boolean,
		leanWithId?: boolean,
		offset?: number,
		page?: number,
		limit?: number
	}

	declare export interface PaginateResult<T> {
		docs: Array<T>,
		total: number,
		limit: number,
		page?: number,
		pages?: number,
		offset?: number
	}

	declare interface PaginateModel<T> {
		paginate(
		query?: Object, options?: PaginateOptions, callback?: (err: any, result: PaginateResult<T>) => void
	): Promise<PaginateResult<T>>
	}

	declare export function model<T>(
		name: string, schema?: Schema, collection?: string, skipInit?: boolean
	): PaginateModel<T>

	declare export function model<T, U>(
		name: string, schema?: Schema, collection?: string, skipInit?: boolean
	): U

		
}
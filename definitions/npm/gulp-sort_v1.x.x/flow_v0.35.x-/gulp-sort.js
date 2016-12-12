

declare module 'gulp-sort' {
		declare interface IOptions {
		comparator?: IComparatorFunction,
		asc?: boolean
	}

	declare interface IComparatorFunction {
		(file1: gulpUtil.File, file2: gulpUtil.File): number
	}

	declare function gulpSort(): NodeJS.ReadWriteStream

	declare function gulpSort(comparator: IComparatorFunction): NodeJS.ReadWriteStream

	declare function gulpSort(options: IOptions): NodeJS.ReadWriteStream

		declare module.exports: undefined


}
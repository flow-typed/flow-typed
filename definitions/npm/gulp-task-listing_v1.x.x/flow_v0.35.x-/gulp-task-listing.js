

declare module 'gulp-task-listing' {
	declare type FilterFunction = (task: string) => boolean;

	declare interface GulpTaskListing {
		(cb: Function): void,
		withFilters(
		subTaskFilter: RegExp | FilterFunction, excludeFilter?: RegExp | FilterFunction
	): (cb: Function) => void
	}

			declare module.exports: GulpTaskListing


}
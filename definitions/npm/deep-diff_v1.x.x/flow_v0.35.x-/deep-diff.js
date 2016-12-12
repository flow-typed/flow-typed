import type { IDeepDiff } from 'npm$namespace$deepDiff'

declare module 'deep-diff' {
					declare module.exports: IDeepDiff


}

declare module 'npm$namespace$deepDiff' {
		declare interface IDiff {
		kind: string,
		path: string[],
		lhs: any,
		rhs: any,
		index?: number,
		item?: IDiff
	}

	declare interface IAccumulator {
		push(diff: IDiff): void,
		length: number
	}

	declare interface IPrefilter {
		(path: string[], key: string): boolean
	}

	declare interface IDeepDiff {
		diff(): IDiff,
		diff(lhs: Object, rhs: Object, prefilter?: IPrefilter, acc?: IAccumulator): IDiff[],
		observableDiff(
		lhs: Object, rhs: Object, changes: Function, prefilter?: IPrefilter, path?: string[], key?: string, stack?: Object[]
	): void,
		applyDiff(target: Object, source: Object, filter: Function): void,
		applyChange(target: Object, source: Object, change: IDiff): void,
		revertChange(target: Object, source: Object, change: IDiff): void,
		isConflict(): boolean,
		noConflict(): IDeepDiff
	}

			
}
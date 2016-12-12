

declare module 'match-media' {
					
}

declare module 'matchmedia' {
		declare interface IScreenSize {
		isRetina: boolean,
		is(list: Array<string> | string): boolean,
		on(
		list: Array<string> | string, callback: (result: boolean) => void, scope?: angular.IScope
	): boolean,
		onChange(
		scope: angular.IScope, list: Array<string> | string, callback: (result: boolean) => void
	): boolean,
		when(
		list: Array<string> | string, callback: (result: boolean) => void, scope?: angular.IScope
	): boolean
	}

			
}
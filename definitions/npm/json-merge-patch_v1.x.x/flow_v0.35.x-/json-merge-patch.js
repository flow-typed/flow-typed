

declare module 'json-merge-patch' {
			declare function apply(target: Object, patch: Object): Object

	declare function generate(before: Object, after: Object): Object

	declare function merge(patch1: Object, patch2: Object): Object

		
}


declare module 'json-patch' {
					declare module.exports: undefined


}

declare module 'npm$namespace$jsonpatch' {
	declare type OpPatch = AddPath | RemovePath | ReplacePath | MovePath | CopyPath | TestPath;

	declare interface Patch {
		op: string
	}

	declare interface AddPath {
		path: string,
		value: any
	}

	declare interface RemovePath {
		path: string
	}

	declare interface ReplacePath {
		path: string,
		value: any
	}

	declare interface MovePath {
		from: string,
		path: string
	}

	declare interface CopyPath {
		from: string,
		path: string
	}

	declare interface TestPath {
		path: string,
		value: any
	}

	declare function apply(document: any, patches: OpPatch[]): any

	declare function compile(patches: OpPatch[]): (document: any) => any

		
}
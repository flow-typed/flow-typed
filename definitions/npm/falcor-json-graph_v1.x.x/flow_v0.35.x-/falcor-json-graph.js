

declare module 'falcor-json-graph' {
					declare module.exports: undefined


}

declare module 'npm$namespace$FalcorJsonGraph' {
	declare type Key = string | number | boolean;

	declare type KeySet = Key | Range | Array<Key | Range>;

	declare type Path = Array<Key>;

	declare type PathSet = Array<KeySet>;

	declare type JSONGraph = any;

	declare interface Atom {
		$type: "atom",
		value: any
	}

	declare interface Error {
		$type: "error",
		value: any
	}

	declare interface InvalidPath {
		path: PathSet,
		invalidate: boolean
	}

	declare interface PathValue {
		path: string | PathSet,
		value: any
	}

	declare interface JSONEnvelope<T> {
		json: T
	}

	declare interface JSONGraphEnvelope {
		jsonGraph: JSONGraph,
		paths?: Array<PathSet>,
		invalidate?: Array<PathSet>
	}

	declare interface Range {
		from?: number,
		to?: number,
		length?: number
	}

	declare interface Reference {
		$type: "reference",
		value: Path
	}

	declare interface Sentinel {
		$expires?: number
	}

	declare function ref(
		path: string | FalcorJsonGraph.PathSet, props?: FalcorJsonGraph.Sentinel
	): FalcorJsonGraph.Reference

	declare function atom(value: any, props?: FalcorJsonGraph.Sentinel): FalcorJsonGraph.Atom

	declare function error(errorValue: any, props?: FalcorJsonGraph.Sentinel): FalcorJsonGraph.Error

	declare function pathValue(path: string | FalcorJsonGraph.PathSet, value: any): FalcorJsonGraph.PathValue

	declare function pathInvalidation(path: string | FalcorJsonGraph.PathSet): FalcorJsonGraph.InvalidPath

		
}
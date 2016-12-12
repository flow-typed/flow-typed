

declare module 'relateurl' {
				declare class RelateUrl  {
		ABSOLUTE: string;
		PATH_RELATIVE: string;
		ROOT_RELATIVE: string;
		SHORTEST: string;
		relate(from: string, to: string, options?: RelateUrl.Options): string;
		constructor(from: string, options?: RelateUrl.Options): this;
		relate(to: string, options?: RelateUrl.Options): string
	}

	declare module.exports: undefined


}

declare module 'RelateUrl' {
		declare interface Options {
		defaultPorts?: Object,
		directoryIndexes?: Array<string>,
		ignore_www?: boolean,
		output?: string,
		rejectedSchemes?: Array<string>,
		removeAuth?: boolean,
		removeDirectoryIndexes?: boolean,
		removeEmptyQueries?: boolean,
		removeRootTrailingSlash?: boolean,
		schemeRelative?: boolean,
		site?: string,
		slashesDenoteHost?: boolean
	}

			
}
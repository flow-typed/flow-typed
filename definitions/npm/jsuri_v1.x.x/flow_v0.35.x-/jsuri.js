

declare module 'jsuri' {
	declare type Uri = jsuri.Uri;

				


}

declare module 'npm$namespace$jsuri' {
	declare type Primitive = string | number | boolean;

			declare export class Uri  {
		constructor(str?: string): this;
		protocol(val?: string): string;
		userInfo(val?: string): string;
		host(val?: string): string;
		port(val?: number): number;
		path(val?: string): string;
		anchor(val?: string): string;
		hasAuthorityPrefix(val?: boolean): boolean;
		isColonUri(val?: boolean): boolean;
		query(val?: string): string;
		getQueryParamValue(key: string): string;
		getQueryParamValues(key: string): string[];
		deleteQueryParam(key: string, val?: string): Uri;
		addQueryParam(key: string, val: Primitive, index?: number): Uri;
		hasQueryParam(key: string): boolean;
		replaceQueryParam(key: string, newVal: Primitive, oldVal?: Primitive): Uri;
		setProtocol(val: string): Uri;
		setHasAuthorityPrefix(val: boolean): Uri;
		setIsColonUri(val: boolean): Uri;
		setUserInfo(val: string): Uri;
		setHost(val: string): Uri;
		setPort(val: number): Uri;
		setPath(val: string): Uri;
		setQuery(val: string): Uri;
		setAnchor(val: string): Uri;
		scheme(): string;
		origin(): string;
		addTrailingSlash(): Uri;
		toString(): string;
		clone(): Uri
	}

	
}

declare module 'jsUri' {
					


}
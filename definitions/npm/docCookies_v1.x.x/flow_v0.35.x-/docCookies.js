

declare module 'docCookies' {
		declare interface docCookies {
		setItem(
		sKey: string, sValue: string, vEnd?: number, sPath?: string, sDomain?: string, bSecure?: boolean
	): boolean,
		setItem(
		sKey: string, sValue: string, vEnd?: string, sPath?: string, sDomain?: string, bSecure?: boolean
	): boolean,
		setItem(
		sKey: string, sValue: string, vEnd?: Date, sPath?: string, sDomain?: string, bSecure?: boolean
	): boolean,
		getItem(sKey: string): string,
		removeItem(sKey: string, sPath?: string): boolean,
		hasItem(sKey: string): boolean,
		keys(): string[]
	}

			
}
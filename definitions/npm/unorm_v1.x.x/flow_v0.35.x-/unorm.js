import type { Static } from 'npm$namespace$unorm'

declare module 'unorm' {
					declare module.exports: Static


}

declare module 'npm$namespace$unorm' {
		declare interface Static {
		nfd(str: string): string,
		nfkd(str: string): string,
		nfc(str: string): string,
		nfkc(str: string): string
	}

			
}
import type { Latinize } from 'npm$namespace$LatinizeModule'

declare module 'latinize' {
					declare module.exports: Latinize


}

declare module 'npm$namespace$LatinizeModule' {
		declare export interface Latinize {
		(str: string): string,
		characters: {
		[char: string]: string
	}
	}

			
}
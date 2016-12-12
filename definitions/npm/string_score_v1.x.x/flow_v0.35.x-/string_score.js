

declare module 'string_score' {
		declare interface String {
		score: (word: string, fuzzy?: number) => number
	}

			
}
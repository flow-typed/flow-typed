

declare module 'level-sublevel' {
		declare interface Hook {
		(ch: any, add: (op: Batch | boolean) => void): void
	}

	declare interface Batch {
		prefix?: Sublevel
	}

	declare interface Sublevel {
		sublevel(key: string): Sublevel,
		pre(hook: Hook): Function
	}

	declare function sublevel(levelup: LevelUp): Sublevel

		declare module.exports: undefined


}